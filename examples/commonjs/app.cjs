const Printify = require('printify-sdk-js');

const printify = new Printify({
  shopId: process.env.STORE_ID, // UPDATE ME, 6-digit numeric ID
  accessToken: process.env.PRINTIFY_API_TOKEN, // UPDATE ME
  enableLogging: true,
  timeout: 30000,
});

(async () => {
  // --- shops.list ---
  const shops = await printify.shops.list();
  console.log('shops:', shops.map(s => `${s.id} (${s.title} / ${s.sales_channel})`));

  // --- products.list ---
  const products = await printify.products.list({ limit: 3 });
  console.log('products:', { total: products.total, page: products.current_page, returned: products.data.length });

  // --- products.getOne ---
  const product = await printify.products.getOne(products.data[0].id);
  console.log('product:', { id: product.id, title: product.title, variants: product.variants.length, images: product.images.length });

  // --- orders.list ---
  const orders = await printify.orders.list({ limit: 3 });
  console.log('orders:', { total: orders.data.length, page: orders.current_page });

  // --- uploads.list ---
  const uploads = await printify.uploads.list(1, 3);
  console.log('uploads:', { total: uploads.total, first: uploads.data[0].file_name });

  // --- error surfacing (1.5.0-beta): a failed request keeps Printify's own explanation ---
  try {
    await printify.products.getOne('000000000000000000000000');
    console.log('ERROR TEST FAILED: expected a rejection');
  } catch (err) {
    console.log('PrintifyError:', {
      name: err.name,
      status: err.status,
      statusText: err.statusText,
      code: err.code,
      errors: err.errors,
      message: err.message,
      hasRawResponse: err.response !== undefined,
    });
  }
})().catch(error => console.error('UNCAUGHT:', error));
