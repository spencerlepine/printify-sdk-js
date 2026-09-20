import Printify from 'printify-sdk-js';

const printify = new Printify({
  shopId: process.env.STORE_ID,
  accessToken: process.env.PRINTIFY_API_TOKEN, // UPDATE ME
  enableLogging: true,
  timeout: 30000,
});

const BLUEPRINT_ID = '1268';
const PRINT_PROVIDER_ID = '215';

(async () => {
  // --- catalog.listBlueprints ---
  const blueprints = await printify.catalog.listBlueprints();
  console.log('blueprints:', blueprints.length, '| first:', blueprints[0].id, blueprints[0].title);

  // --- catalog.getBlueprint ---
  const blueprint = await printify.catalog.getBlueprint(BLUEPRINT_ID);
  console.log('blueprint:', { id: blueprint.id, title: blueprint.title, brand: blueprint.brand, model: blueprint.model });

  // --- catalog.getBlueprintProviders ---
  const providers = await printify.catalog.getBlueprintProviders(BLUEPRINT_ID);
  console.log('providers for blueprint:', providers.map(p => `${p.id}:${p.title}`));

  // --- catalog.getBlueprintVariants ---
  const variants = await printify.catalog.getBlueprintVariants(BLUEPRINT_ID, PRINT_PROVIDER_ID);
  console.log('variants:', { count: variants.variants.length, first: variants.variants[0].title });

  // --- catalog.listProviders ---
  const allProviders = await printify.catalog.listProviders();
  console.log('all print providers:', allProviders.length);

  // --- catalog.getProvider ---
  const provider = await printify.catalog.getProvider(PRINT_PROVIDER_ID);
  console.log('provider:', { id: provider.id, title: provider.title, location: provider.location?.country });

  // --- catalog.getVariantShipping (v1) ---
  const shipping = await printify.catalog.getVariantShipping(BLUEPRINT_ID, PRINT_PROVIDER_ID);
  console.log('shipping handling_time:', shipping.handling_time, '| profiles:', shipping.profiles.length);

  // --- uploads.getById ---
  const uploads = await printify.uploads.list(1, 1);
  const image = await printify.uploads.getById(uploads.data[0].id);
  console.log('upload:', { id: image.id, file_name: image.file_name, size: image.size, mime: image.mime_type });
})().catch(error => console.error('FAILED:', error.message));
