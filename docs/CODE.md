```
printify.shops.getAll();
printify.shops.deleteOne(shopId);

printify.catalog.listBlueprints();
printify.catalog.getBlueprint(blueprintId);
printify.catalog.getBlueprintProviders(blueprintId);
printify.catalog.getBlueprintVariants(blueprintId, printProviderId);
printify.catalog.getVariantShipping(blueprintId, printProviderId);
printify.catalog.listProviders();
printify.catalog.getProvider(printProviderId);

printify.products.getAll(shopId);
printify.products.getOne(shopId, productId);
printify.products.create(shopId, data); // added missing 'data' parameter for consistency
printify.products.updateOne(shopId, productId, data);
printify.products.deleteOne(shopId, productId);
printify.products.publishOne(shopId, productId);
printify.products.setPublishSucceeded(shopId, productId); // shortened method name for brevity
printify.products.setPublishFailed(shopId, productId); // shortened method name for brevity
printify.products.notifyUnpublished(shopId, productId); // shortened method name for brevity

printify.orders.list(shopId); // simplified method name for consistency
printify.orders.list(shopId, page);
printify.orders.list(shopId, status);
printify.orders.list(shopId, sku);
printify.orders.get(shopId, orderId); // simplified method name for consistency
printify.orders.submit(shopId, data); // simplified method name for consistency
printify.orders.submitExpress(shopId, data); // simplified method name for consistency
printify.orders.sendToProduction(shopId, orderId); // simplified method name for consistency
printify.orders.calculateShipping(shopId, data);
printify.orders.cancelUnpaid(shopId, orderId); // simplified method name for consistency

printify.uploads.list(); // simplified method name for consistency
printify.uploads.list(page);
printify.uploads.list(limit);
printify.uploads.getById(imageId); // simplified method name for consistency
printify.uploads.upload(data); // simplified method name for consistency
printify.uploads.archive(imageId); // simplified method name for consistency

printify.webhooks.list(shopId); // added missing 'list' method for consistency
printify.webhooks.create(shopId, data); // added missing 'shopId' and 'data' parameters for consistency
printify.webhooks.updateOne(webhookId, data); // added missing 'data' parameter for consistency
printify.webhooks.deleteOne(webhookId);
```

```
src/
├── index.ts
├── fetch.ts
├── shops/
│   ├── index.ts
│   ├── getAll.ts
│   └── deleteOne.ts
├── catalog/
│   ├── index.ts
│   ├── listBlueprints.ts
│   ├── getBlueprint.ts
│   ├── getBlueprintProviders.ts
│   ├── getBlueprintVariants.ts
│   ├── getVariantShipping.ts
│   ├── listProviders.ts
│   └── getProvider.ts
├── products/
│   ├── index.ts
│   ├── getAll.ts
│   ├── getOne.ts
│   ├── create.ts
│   ├── updateOne.ts
│   ├── deleteOne.ts
│   ├── publishOne.ts
│   ├── setPublishSucceeded.ts
│   ├── setPublishFailed.ts
│   ├── notifyUnpublished.ts
├── orders/
│   ├── index.ts
│   ├── list.ts
│   ├── get.ts
│   ├── submit.ts
│   ├── submitExpress.ts
│   ├── sendToProduction.ts
│   ├── calculateShipping.ts
│   ├── cancelUnpaid.ts
├── uploads/
│   ├── index.ts
│   ├── list.ts
│   ├── getById.ts
│   ├── upload.ts
│   ├── archive.ts
├── webhooks/
│   ├── index.ts
│   ├── list.ts
│   ├── create.ts
│   ├── updateOne.ts
│   └── deleteOne.ts
```
