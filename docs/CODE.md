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
printify.products.create(shopId, data);
printify.products.updateOne(shopId, productId, data);
printify.products.deleteOne(shopId, productId);
printify.products.publishOne(shopId, productId);
printify.products.setPublishSucceeded(shopId, productId);
printify.products.setPublishFailed(shopId, productId);
printify.products.notifyUnpublished(shopId, productId);

printify.orders.list(shopId);
printify.orders.list(shopId, page);
printify.orders.list(shopId, status);
printify.orders.list(shopId, sku);
printify.orders.get(shopId, orderId);
printify.orders.submit(shopId, data);
printify.orders.submitExpress(shopId, data);
printify.orders.sendToProduction(shopId, orderId);
printify.orders.calculateShipping(shopId, data);
printify.orders.cancelUnpaid(shopId, orderId);

printify.uploads.list();
printify.uploads.list(page);
printify.uploads.list(limit);
printify.uploads.getById(imageId);
printify.uploads.uploadImage(data);
printify.uploads.archive(imageId);

printify.webhooks.list(shopId);
printify.webhooks.create(shopId, data);
printify.webhooks.updateOne(webhookId, data);
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
│   ├── uploadImage.ts
│   ├── archive.ts
├── webhooks/
│   ├── index.ts
│   ├── list.ts
│   ├── create.ts
│   ├── updateOne.ts
│   └── deleteOne.ts
```
