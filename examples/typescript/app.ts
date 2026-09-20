import Printify, { Webhook, ShippingInfo, Product, UpdateProductData, PrintifyError } from 'printify-sdk-js';

const printify = new Printify({
  shopId: process.env.STORE_ID!,
  accessToken: process.env.PRINTIFY_API_TOKEN!,
  enableLogging: true,
  timeout: 30000,
});

const BLUEPRINT_ID = '1268';
const PRINT_PROVIDER_ID = '215';

(async () => {
  // --- v1: webhooks.list ---
  const webhooks: Webhook[] = await printify.webhooks.list();
  console.log('webhooks:', webhooks.length);

  // --- v2: catalog shipping ---
  // NOTE: declared as `ShippingInfo[]`, but the API actually answers `{ data, links }`.
  // The cast below is the workaround; see the SDK bug report.
  const shippingList = (await printify.v2.catalog.getShippingListInfo(BLUEPRINT_ID, PRINT_PROVIDER_ID)) as unknown as { data: ShippingInfo[]; links: Record<string, string> };
  console.log('shipping methods:', shippingList.data.map(s => `${s.id}:${s.attributes.name}`));
  console.log('links keys (absent from the declared type):', Object.keys(shippingList.links));

  const standard = await printify.v2.catalog.getStandardShippingInfo(BLUEPRINT_ID, PRINT_PROVIDER_ID);
  console.log('standard shipping entries:', standard.data.length, '| first country:', standard.data[0]?.attributes?.country?.code);

  const priority = await printify.v2.catalog.getPriorityShippingInfo(BLUEPRINT_ID, PRINT_PROVIDER_ID);
  console.log('priority shipping entries:', priority.data.length);

  const economy = await printify.v2.catalog.getEconomyShippingInfo(BLUEPRINT_ID, PRINT_PROVIDER_ID);
  console.log('economy shipping entries:', economy.data.length);

  // --- products.getOne is typed as Product ---
  const list = await printify.products.list({ limit: 1 });
  const product: Product = await printify.products.getOne(list.data[0].id);
  console.log('product:', product.id, JSON.stringify(product.title));

  // A fetched `Product` is assignable to `UpdateProductData` (the fix in HEAD).
  // Compile-time assertion only - sending the whole document is not what we want at runtime.
  const wholeDocument: UpdateProductData = product;
  void wholeDocument;

  // --- products.updateOne: partial update, writes the title back unchanged ---
  const updated = await printify.products.updateOne(product.id, { title: product.title });
  console.log('updateOne ->', updated.id, '| title unchanged:', updated.title === product.title);

  // --- PrintifyError is exported as a type and carries Printify's own detail ---
  try {
    await printify.products.updateOne(product.id, { title: 12345 } as unknown as UpdateProductData);
  } catch (err) {
    const e = err as PrintifyError;
    console.log('PrintifyError:', { status: e.status, code: e.code, errors: e.errors });
  }
})();
