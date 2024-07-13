```
printify.shops.getAll();
printify.shops.deleteOne();

printify.catalog.listBlueprints();
printify.catalog.getBlueprint(blueprintId);
printify.catalog.getBlueprintProviders(blueprintId);
printify.catalog.getBlueprintVariants(blueprintId, printProviderId);
printify.catalog.getVariantShipping(blueprintId, printProviderId);
printify.catalog.listProviders();
printify.catalog.getProvider(printProviderId);

printify.products.getAll();
printify.products.getOne(productId);
printify.products.create(data);
printify.products.updateOne(productId, data);
printify.products.deleteOne(productId);
printify.products.publishOne(productId, data);
printify.products.setPublishSucceeded(productId, data);
printify.products.setPublishFailed(productId);
printify.products.notifyUnpublished(productId);

printify.orders.list();
printify.orders.list(page);
printify.orders.list(status);
printify.orders.list(sku);
printify.orders.get(orderId);
printify.orders.submit(data);
printify.orders.submitExpress(data);
printify.orders.sendToProduction(orderId);
printify.orders.calculateShipping(data);
printify.orders.cancelUnpaid(orderId);

printify.uploads.list();
printify.uploads.list(page);
printify.uploads.list(limit);
printify.uploads.getById(imageId);
printify.uploads.uploadImage(data);
printify.uploads.archive(imageId);

printify.webhooks.list();
printify.webhooks.create(data);
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
