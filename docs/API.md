# Printify SDK Documentation (Node.js)

- [Shops](#shops)
- [Catalog](#catalog)
- [Catalog V2](#catalog-v2)
- [Products](#products)
- [Orders](#orders)
- [Uploads](#uploads)
- [Webhooks](#webhooks)

### Shops

#### `printify.shops.list()`

- `GET /v1/shops.json`
- **Description:** Retrieve a list of shops in a Printify account

```js
await printify.shops.list();
```

<details>
  <summary>View Response</summary>

```json
[ { "id": 5432, "title": "My new store", "sales_channel": "My Sales Channel" }, { "id": 9876, "title": "My other new
store", "sales_channel": "disconnected" } ]
```

</details>

#### `printify.shops.deleteOne(printify.shopId)`

- `DELETE /v1/shops/{shop_id}/connection.json`
- **Description:** Disconnect a shop

```js
await printify.shops.deleteOne(printify.shopId);
```

<details>
  <summary>View Response</summary>

```json
{}
```

</details>

### Catalog

#### `printify.catalog.listBlueprints()`

- `GET /v1/catalog/blueprints.json`
- **Description:** Retrieve a list of all available blueprints

```js
await printify.catalog.listBlueprints();
```

<details>
  <summary>View Response</summary>

```json
[
  {
    "id": 3,
    "title": "Kids Regular Fit Tee",
    "description": "Description goes here",
    "brand": "Delta",
    "model": "11736",
    "images": ["https://images.printify.com/5853fe7dce46f30f8327f5cd", "https://images.printify.com/5c487ee2a342bc9b8b2fc4d2"]
  },
  {
    "id": 5,
    "title": "Men's Cotton Crew Tee",
    "description": "Description goes here",
    "brand": "Next Level",
    "model": "3600",
    "images": ["https://images.printify.com/5a2ffc81b8e7e3656268fb44", "https://images.printify.com/5cdc0126b97b6a00091b58f7"]
  },
  {
    "id": 6,
    "title": "Unisex Heavy Cotton Tee",
    "description": "Description goes here",
    "brand": "Gildan",
    "model": "5000",
    "images": [
      "https://images.printify.com/5a2fd7d9b8e7e36658795dc0",
      "https://images.printify.com/5c595436a342bc1670049902",
      "https://images.printify.com/5c595427a342bc166b6d3002",
      "https://images.printify.com/5a2fd022b8e7e3666c70623a"
    ]
  },
  {
    "id": 9,
    "title": "Women's Favorite Tee",
    "description": "Description goes here",
    "brand": "Bella+Canvas",
    "model": "6004",
    "images": [
      "https://images.printify.com/5a2ffeeab8e7e364d660836f",
      "https://images.printify.com/59e362cab8e7e30a5b0a55bd",
      "https://images.printify.com/59e362d2b8e7e30b9f576691",
      "https://images.printify.com/59e362ddb8e7e3174f3196ee",
      "https://images.printify.com/59e362eab8e7e3593e2ac98d"
    ]
  },
  {
    "id": 10,
    "title": "Women's Flowy Racerback Tank",
    "description": "Description goes here",
    "brand": "Bella+Canvas",
    "model": "8800",
    "images": [
      "https://images.printify.com/5a27eb68b8e7e364d6608322",
      "https://images.printify.com/5c485236a342bc521c2a0beb",
      "https://images.printify.com/5c485217a342bc686053da46",
      "https://images.printify.com/5c485225a342bc52fe5fee83"
    ]
  },
  {
    "id": 11,
    "title": "Women's Jersey Short Sleeve Deep V-Neck Tee",
    "description": "Description goes here",
    "brand": "Bella+Canvas",
    "model": "6035",
    "images": [
      "https://images.printify.com/5a27f20fb8e7e316f403a3b1",
      "https://images.printify.com/5c472ff0a342bcad97372d72",
      "https://images.printify.com/5c472ff8a342bcad9964d115"
    ]
  },
  {
    "id": 12,
    "title": "Unisex Jersey Short Sleeve Tee",
    "description": "Description goes here",
    "brand": "Bella+Canvas",
    "model": "3001",
    "images": [
      "https://images.printify.com/5a2ff5b0b8e7e36669068406",
      "https://images.printify.com/59e35414b8e7e30aa625995c",
      "https://images.printify.com/5cd579548c3769000f274cac",
      "https://images.printify.com/5cd579558c37690008453286",
      "https://images.printify.com/59e3541bb8e7e30a60795f9c",
      "https://images.printify.com/59e35428b8e7e30a1a4de812",
      "https://images.printify.com/59e3552db8e7e3174714887a",
      "https://images.printify.com/5a8beec5b8e7e304614eb59c"
    ]
  }
]
```

</details>

#### `printify.catalog.getBlueprint(blueprintId)`

- `GET /v1/catalog/blueprints/{blueprint_id}.json`
- **Description:** Retrieve a specific blueprint

```js
await printify.catalog.getBlueprint(blueprintId);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": 3,
  "title": "Kids Regular Fit Tee",
  "description": "Description goes here",
  "brand": "Delta",
  "model": "11736",
  "images": ["https://images.printify.com/5853fe7dce46f30f8327f5cd", "https://images.printify.com/5c487ee2a342bc9b8b2fc4d2"]
}
```

</details>

#### `printify.catalog.getBlueprintProviders(blueprintId)`

- `GET /v1/catalog/blueprints/{blueprint_id}/print_providers.json`
- **Description:** Retrieve a list of all print providers that fulfill orders for a specific blueprint

```js
await printify.catalog.getBlueprintProviders(blueprintId);
```

<details>
  <summary>View Response</summary>

```json
[
  { "id": 3, "title": "DJ" },
  { "id": 8, "title": "Fifth Sun" },
  { "id": 16, "title": "MyLocker" },
  { "id": 24, "title": "Inklocker" }
]
```

</details>

#### `printify.catalog.getBlueprintVariants(blueprintId, printProviderId)`

- `GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/variants.json`
- **Description:** Retrieve a list of all variants of a blueprint from a specific print provider

```js
await printify.catalog.getBlueprintVariants(blueprintId, printProviderId);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": 3,
  "title": "DJ",
  "variants": [
    {
      "id": 17390,
      "title": "Heather Grey / XS",
      "options": { "color": "Heather Grey", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17426,
      "title": "Solid Black / XS",
      "options": { "color": "Solid Black", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17435,
      "title": "Solid Scarlet / XS",
      "options": { "color": "Solid Scarlet", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17444,
      "title": "Solid Cool Blue / XS",
      "options": { "color": "Solid Cool Blue", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17453,
      "title": "Solid Cream / XS",
      "options": { "color": "Solid Cream", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17462,
      "title": "Solid Dark Chocolate / XS",
      "options": { "color": "Solid Dark Chocolate", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17480,
      "title": "Solid Heavy Metal / XS",
      "options": { "color": "Solid Heavy Metal", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17489,
      "title": "Solid Indigo / XS",
      "options": { "color": "Solid Indigo", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    }
    // ...
  ]
}
```

</details>

#### `printify.catalog.getVariantShipping(blueprintId, printProviderId)`

- `GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping.json`
- **Description:** Retrieve the shipping information for all variants of a blueprint from a specific print provider

```js
await printify.catalog.getVariantShipping(blueprintId, printProviderId);
```

<details>
  <summary>View Response</summary>

```json
{
  "handling_time": { "value": 30, "unit": "day" },
  "profiles": [
    {
      "variant_ids": [
        42716, 42717, 42718, 42719, 42720, 12144, 12143, 12142, 12145, 12146, 12150, 12149, 12148, 12151, 12152, 12162, 12161, 12160, 12163, 12164, 12180, 12179, 12178, 12181,
        12182, 12192, 12191, 12190, 12193, 12194, 11874, 11873, 11872, 11875, 11876, 11892, 11891, 11890, 11893, 11894, 11898, 11897, 11896, 11899, 11900, 11934, 11933, 11932,
        11935, 11936, 11946, 11945, 11944, 11947, 11948, 11952, 11951, 11950, 11953, 11954, 11958, 11957, 11956, 11959, 11960, 11976, 11975, 11974, 11977, 11978, 11988, 11987,
        11986, 11989, 11990, 12012, 12011, 12010, 12013, 12014, 12018, 12017, 12016, 12019, 12020, 12024, 12023, 12022, 12025, 12026, 12030, 12029, 12028, 12031, 12032, 12054,
        12053, 12052, 12055, 12056, 12072, 12071, 12070, 12073, 12074, 12102, 12101, 12100, 12103, 12104, 12126, 12125, 12124, 12127, 12128
      ],
      "first_item": { "cost": 450, "currency": "USD" },
      "additional_items": { "cost": 0, "currency": "USD" },
      "countries": ["US"]
    },
    {
      "variant_ids": [
        42716, 42717, 42718, 42719, 42720, 12144, 12143, 12142, 12145, 12146, 12150, 12149, 12148, 12151, 12152, 12162, 12161, 12160, 12163, 12164, 12180, 12179, 12178, 12181,
        12182, 12192, 12191, 12190, 12193, 12194, 11874, 11873, 11872, 11875, 11876, 11892, 11891, 11890, 11893, 11894, 11898, 11897, 11896, 11899, 11900, 11934, 11933, 11932,
        11935, 11936, 11946, 11945, 11944, 11947, 11948, 11952, 11951, 11950, 11953, 11954, 11958, 11957, 11956, 11959, 11960, 11976, 11975, 11974, 11977, 11978, 11988, 11987,
        11986, 11989, 11990, 12012, 12011, 12010, 12013, 12014, 12018, 12017, 12016, 12019, 12020, 12024, 12023, 12022, 12025, 12026, 12030, 12029, 12028, 12031, 12032, 12054,
        12053, 12052, 12055, 12056, 12072, 12071, 12070, 12073, 12074, 12102, 12101, 12100, 12103, 12104, 12126, 12125, 12124, 12127, 12128
      ],
      "first_item": { "cost": 650, "currency": "USD" },
      "additional_items": { "cost": 0, "currency": "USD" },
      "countries": [
        "CA",
        "AU",
        "AT",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
        "DE",
        "GR",
        "HU",
        "IS",
        "IE",
        "IT",
        "LT",
        "LV",
        "LU",
        "MT",
        "NL",
        "NO",
        "PT",
        "PL",
        "RO",
        "SK",
        "SI",
        "ES",
        "SE",
        "CH",
        "TR",
        "GB",
        "GI",
        "AX"
      ]
    },
    {
      "variant_ids": [
        42716, 42717, 42718, 42719, 42720, 12144, 12143, 12142, 12145, 12146, 12150, 12149, 12148, 12151, 12152, 12162, 12161, 12160, 12163, 12164, 12180, 12179, 12178, 12181,
        12182, 12192, 12191, 12190, 12193, 12194, 11874, 11873, 11872, 11875, 11876, 11892, 11891, 11890, 11893, 11894, 11898, 11897, 11896, 11899, 11900, 11934, 11933, 11932,
        11935, 11936, 11946, 11945, 11944, 11947, 11948, 11952, 11951, 11950, 11953, 11954, 11958, 11957, 11956, 11959, 11960, 11976, 11975, 11974, 11977, 11978, 11988, 11987,
        11986, 11989, 11990, 12012, 12011, 12010, 12013, 12014, 12018, 12017, 12016, 12019, 12020, 12024, 12023, 12022, 12025, 12026, 12030, 12029, 12028, 12031, 12032, 12054,
        12053, 12052, 12055, 12056, 12072, 12071, 12070, 12073, 12074, 12102, 12101, 12100, 12103, 12104, 12126, 12125, 12124, 12127, 12128
      ],
      "first_item": { "cost": 1100, "currency": "USD" },
      "additional_items": { "cost": 0, "currency": "USD" },
      "countries": ["REST_OF_THE_WORLD"]
    }
  ]
}
```

</details>

#### `printify.catalog.listProviders()`

- `GET /v1/catalog/print_providers.json`
- **Description:** Retrieve a list of all available print-providers

```js
await printify.catalog.listProviders();
```

<details>
  <summary>View Response</summary>

```json
[
  {
    "id": 1,
    "title": "SPOKE Custom Products",
    "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" }
  },
  { "id": 2, "title": "CG Pro prints", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  {
    "id": 3,
    "title": "The Dream Junction ",
    "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" }
  },
  { "id": 5, "title": "ArtGun", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  {
    "id": 6,
    "title": "T shirt and Sons",
    "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" }
  }
]
```

</details>

#### `printify.catalog.getProvider(printProviderId)`

- `GET /v1/catalog/print_providers/{print_provider_id}.json`
- **Description:** Retrieve a specific print-provider and a list of associated blueprint offerings

```js
await printify.catalog.getProvider(printProviderId);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": 1,
  "title": "SPOKE Custom Products",
  "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" },
  "blueprints": [
    { "id": 265, "title": "Slim Iphone 8", "brand": "Case Mate", "model": "Slim Iphone 8", "images": ["https://images.printify.com/59b261c9b8e7e361c9147b1b.png"] },
    { "id": 266, "title": "Tough Iphone 8", "brand": "Case Mate", "model": "Tough Iphone 8", "images": ["https://images.printify.com/59b26fbfb8e7e36254554a34.png"] },
    {
      "id": 52,
      "title": "Slim Iphone 6/6s",
      "brand": "Case Mate",
      "model": "6/6s Slim",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f5eb.png", "https://images.printify.com/5853fe7dce46f30f8327f5ee.png"]
    },
    {
      "id": 53,
      "title": "Tough Iphone 6/6s",
      "brand": "Case Mate",
      "model": "6/6s Tough",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f5f1.png", "https://images.printify.com/5853fe7dce46f30f8327f5f4.png"]
    }
    // ...
  ]
}
```

</details>

### Catalog V2

#### `printify.v2.catalog.getShippingListInfo()`

- `GET /v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping.json`
- **Description:** Retrieve available shipping list information

```js
await printify.v2.catalog.getShippingListInfo('3', '8');
```

<details>
  <summary>View Response</summary>

```json
[
  {
    "type": "shipping_method",
    "id": "1",
    "attributes": {
      "name": "standard"
    }
  },
  {
    "type": "shipping_method",
    "id": "2",
    "attributes": {
      "name": "priority"
    }
  },
  {
    "type": "shipping_method",
    "id": "3",
    "attributes": {
      "name": "express"
    }
  },
  {
    "type": "shipping_method",
    "id": "4",
    "attributes": {
      "name": "economy"
    }
  }
]
```

</details>

#### `printify.v2.catalog.getStandardShippingInfo(blueprintId, printProviderId)`

- `GET /v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/standard.json`
- **Description:** Retrieve standard shipping method information

```js
await printify.v2.catalog.getStandardShippingInfo('3', '8');
```

<details>
  <summary>View Response</summary>

```json
[
  {
    "type": "variant_shipping_standard_us",
    "id": "23494",
    "attributes": {
      "shippingType": "standard",
      "country": {
        "code": "US"
      },
      "variantId": 23494,
      "shippingPlanId": "65a7c0825b50fcd56a018e02",
      "handlingTime": {
        "from": 4,
        "to": 8
      },
      "shippingCost": {
        "firstItem": {
          "amount": 399,
          "currency": "USD"
        },
        "additionalItems": {
          "amount": 219,
          "currency": "USD"
        }
      }
    }
  }
]
```

</details>

#### `printify.v2.catalog.getPriorityShippingInfo(blueprintId, printProviderId)`

- `GET /v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/priority.json`
- **Description:** Retrieve priority shipping method information

```js
await printify.v2.catalog.getPriorityShippingInfo('3', '8');
```

<details>
  <summary>View Response</summary>

```json
[
  {
    "type": "variant_shipping_priority_us",
    "id": "23494",
    "attributes": {
      "shippingType": "priority",
      "country": {
        "code": "US"
      },
      "variantId": 23494,
      "shippingPlanId": "65a7c0825b50fcd56a018e02",
      "handlingTime": {
        "from": 4,
        "to": 8
      },
      "shippingCost": {
        "firstItem": {
          "amount": 399,
          "currency": "USD"
        },
        "additionalItems": {
          "amount": 219,
          "currency": "USD"
        }
      }
    }
  }
]
```

</details>

#### `printify.v2.catalog.getExpressShippingInfo(blueprintId, printProviderId)`

- `GET /v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/express.json`
- **Description:** Retrieve express shipping method information

```js
await printify.v2.catalog.getExpressShippingInfo('3', '8');
```

<details>
  <summary>View Response</summary>

```json
[
  {
    "type": "variant_shipping_express_us",
    "id": "23494",
    "attributes": {
      "shippingType": "express",
      "country": {
        "code": "US"
      },
      "variantId": 23494,
      "shippingPlanId": "65a7c0825b50fcd56a018e02",
      "handlingTime": {
        "from": 4,
        "to": 8
      },
      "shippingCost": {
        "firstItem": {
          "amount": 399,
          "currency": "USD"
        },
        "additionalItems": {
          "amount": 219,
          "currency": "USD"
        }
      }
    }
  }
]
```

</details>

#### `printify.v2.catalog.getEconomyShippingInfo(blueprintId, printProviderId)`

- `GET /v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/economy.json`
- **Description:** Retrieve economy shipping method information

```js
await printify.v2.catalog.getEconomyShippingInfo('3', '8');
```

<details>
  <summary>View Response</summary>

```json
[
  {
    "type": "variant_shipping_economy_us",
    "id": "23494",
    "attributes": {
      "shippingType": "economy",
      "country": {
        "code": "US"
      },
      "variantId": 23494,
      "shippingPlanId": "65a7c0825b50fcd56a018e02",
      "handlingTime": {
        "from": 4,
        "to": 8
      },
      "shippingCost": {
        "firstItem": {
          "amount": 399,
          "currency": "USD"
        },
        "additionalItems": {
          "amount": 219,
          "currency": "USD"
        }
      }
    }
  }
]
```

</details>

### Products

#### `printify.products.list()`

- `GET /v1/shops/{shop_id}/products.json`
- `GET /v1/shops/{shop_id}/products.json?limit=1`
- `GET /v1/shops/{shop_id}/products.json?page=2`

- **Description:** Retrieve a list of all products (results default: 10, maximum: 100)

```js
await printify.products.list();
await printify.products.list({ page: 2 });
await printify.products.list({ limit: 5 });
```

<details>
  <summary>View Response</summary>

```json
{
  "current_page": 2,
  "data": [
    {
      "id": "5d39b159e7c48c000728c89f",
      "title": "Mug 11oz",
      "description": "Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. .: White ceramic .: 11 oz (0.33 l) .: Rounded corners .: C-Handle",
      "tags": ["Home & Living", "Mugs", "11 oz", "White base", "Sublimation"],
      "options": [{ "name": "Sizes", "type": "size", "values": [{ "id": 1189, "title": "11oz" }] }],
      "variants": [
        {
          "id": 33719,
          "sku": "866366009",
          "cost": 516,
          "price": 860,
          "title": "11oz",
          "grams": 460,
          "is_enabled": true,
          "is_default": true,
          "is_available": true,
          "is_printify_express_eligible": true,
          "options": [1189]
        }
      ],
      "images": [
        { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg", "variant_ids": [33719], "position": "front", "is_default": false },
        { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg", "variant_ids": [33719], "position": "other", "is_default": false },
        { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg", "variant_ids": [33719], "position": "other", "is_default": true }
      ],
      "created_at": "2019-07-25 13:40:41+00:00",
      "updated_at": "2019-07-25 13:40:59+00:00",
      "visible": true,
      "is_locked": false,
      "is_printify_express_eligible": true,
      "is_printify_express_enabled": true,
      "is_economy_shipping_eligible": true,
      "is_economy_shipping_enabled": true,
      "blueprint_id": 68,
      "user_id": 1337,
      "shop_id": 1337,
      "print_provider_id": 9,
      "print_areas": [
        {
          "variant_ids": [33719],
          "placeholders": [
            {
              "position": "front",
              "images": [
                { "id": "5c7665205342af161e1cb26e", "name": "Test.png", "type": "image/png", "height": 5850, "width": 4350, "x": 0.5, "y": 0.5, "scale": 1.01, "angle": 0 }
              ]
            }
          ],
          "background": "#ffffff"
        }
      ],
      "sales_channel_properties": []
    }
  ],
  "first_page_url": "/?page=1",
  "from": 2,
  "last_page": 22,
  "last_page_url": "/?page=22",
  "next_page_url": "/?page=3",
  "path": "/",
  "per_page": 1,
  "prev_page_url": "/?page=1",
  "to": 2,
  "total": 22
}
```

</details>

#### `printify.products.getOne(productId)`

- `GET /v1/shops/{shop_id}/products/{product_id}.json`
- **Description:** Retrieve a product

```js
await printify.products.getOne(productId);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": "5d39b159e7c48c000728c89f",
  "title": "Mug 11oz",
  "description": "Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. .: White ceramic .: 11 oz (0.33 l) .: Rounded corners .: C-Handle",
  "tags": ["Home & Living", "Mugs", "11 oz", "White base", "Sublimation"],
  "options": [{ "name": "Sizes", "type": "size", "values": [{ "id": 1189, "title": "11oz" }] }],
  "variants": [
    {
      "id": 33719,
      "sku": "866366009",
      "cost": 516,
      "price": 860,
      "title": "11oz",
      "grams": 460,
      "is_enabled": true,
      "is_default": true,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [1189]
    }
  ],
  "images": [
    { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg", "variant_ids": [33719], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg", "variant_ids": [33719], "position": "other", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg", "variant_ids": [33719], "position": "other", "is_default": true }
  ],
  "created_at": "2019-07-25 13:40:41+00:00",
  "updated_at": "2019-07-25 13:40:59+00:00",
  "visible": true,
  "is_locked": false,
  "is_printify_express_eligible": true,
  "is_printify_express_enabled": true,
  "is_economy_shipping_eligible": true,
  "is_economy_shipping_enabled": true,
  "blueprint_id": 68,
  "user_id": 1337,
  "shop_id": 1337,
  "print_provider_id": 9,
  "print_areas": [
    {
      "variant_ids": [33719],
      "placeholders": [
        {
          "position": "front",
          "images": [{ "id": "5c7665205342af161e1cb26e", "name": "Test.png", "type": "image/png", "height": 5850, "width": 4350, "x": 0.5, "y": 0.5, "scale": 1.01, "angle": 0 }]
        }
      ],
      "background": "#ffffff"
    }
  ],
  "sales_channel_properties": []
}
```

</details>

#### `printify.products.create(data)`

- `POST /v1/shops/{shop_id}/products.json`
- **Description:** Create a new product

```json
const data = {
  "title": "Product",
  "description": "Good product",
  "blueprint_id": 384,
  "print_provider_id": 1,
  "variants": [
    { "id": 45740, "price": 400, "is_enabled": true },
    { "id": 45742, "price": 400, "is_enabled": true },
    { "id": 45744, "price": 400, "is_enabled": false },
    { "id": 45746, "price": 400, "is_enabled": false }
  ],
  "print_areas": [
    {
      "variant_ids": [45740, 45742, 45744, 45746],
      "placeholders": [{ "position": "front", "images": [{ "id": "5d15ca551163cde90d7b2203", "x": 0.5, "y": 0.5, "scale": 1, "angle": 0 }] }]
    }
  ]
}

await printify.products.create(data);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": "5d39b411749d0a000f30e0f4",
  "title": "Product",
  "description": "Good product",
  "tags": ["Home & Living", "Stickers"],
  "options": [
    {
      "name": "Size",
      "type": "size",
      "values": [
        { "id": 2017, "title": "2x2\"" },
        { "id": 2018, "title": "3x3\"" },
        { "id": 2019, "title": "4x4\"" },
        { "id": 2020, "title": "6x6\"" }
      ]
    },
    { "name": "Type", "type": "surface", "values": [{ "id": 2114, "title": "White" }] }
  ],
  "variants": [
    {
      "id": 45740,
      "sku": "866375988",
      "cost": 134,
      "price": 400,
      "title": "2x2\" / White",
      "grams": 10,
      "is_enabled": true,
      "is_default": true,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [2017, 2114]
    },
    {
      "id": 45742,
      "sku": "866375989",
      "cost": 149,
      "price": 400,
      "title": "3x3\" / White",
      "grams": 10,
      "is_enabled": true,
      "is_default": false,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [2018, 2114]
    },
    {
      "id": 45744,
      "sku": "866375990",
      "cost": 187,
      "price": 400,
      "title": "4x4\" / White",
      "grams": 10,
      "is_enabled": true,
      "is_default": false,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [2019, 2114]
    },
    {
      "id": 45746,
      "sku": "866375991",
      "cost": 216,
      "price": 400,
      "title": "6x6\" / White",
      "grams": 10,
      "is_enabled": true,
      "is_default": false,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [2020, 2114]
    }
  ],
  "images": [
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2187/product.jpg", "variant_ids": [45740], "position": "front", "is_default": true },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2188/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2189/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false }
  ],
  "created_at": "2019-07-25 13:52:17+00:00",
  "updated_at": "2019-07-25 13:52:18+00:00",
  "visible": true,
  "is_locked": false,
  "is_printify_express_eligible": true,
  "is_printify_express_enabled": true,
  "is_economy_shipping_eligible": true,
  "is_economy_shipping_enabled": true,
  "blueprint_id": 384,
  "user_id": 1337,
  "shop_id": 1337,
  "print_provider_id": 1,
  "print_areas": [
    {
      "variant_ids": [45740, 45742, 45744, 45746],
      "placeholders": [
        {
          "position": "front",
          "images": [
            { "id": "5d15ca551163cde90d7b2203", "name": "Asset 65@3x.png", "type": "image/png", "height": 1200, "width": 1200, "x": 0.5, "y": 0.5, "scale": 1, "angle": 0 }
          ]
        }
      ],
      "background": "#ffffff"
    }
  ],
  "sales_channel_properties": []
}
```

</details>

#### `printify.products.updateOne(productId, data)`

- `PUT /v1/shops/{shop_id}/products/{product_id}.json`
- **Description:** Update a product

```js
const data = { title: 'Product' };
await printify.products.updateOne('productId', data);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": "5d39b411749d0a000f30e0f4",
  "title": "Product",
  "description": "Good product",
  "tags": ["Home & Living", "Stickers"],
  "options": [
    {
      "name": "Size",
      "type": "size",
      "values": [
        { "id": 2017, "title": "2x2\"" },
        { "id": 2018, "title": "3x3\"" },
        { "id": 2019, "title": "4x4\"" },
        { "id": 2020, "title": "6x6\"" }
      ]
    },
    { "name": "Type", "type": "surface", "values": [{ "id": 2114, "title": "White" }] }
  ],
  "variants": [
    {
      "id": 45740,
      "sku": "866375988",
      "cost": 134,
      "price": 400,
      "title": "2x2\" / White",
      "grams": 10,
      "is_enabled": true,
      "is_default": true,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [2017, 2114]
    },
    {
      "id": 45742,
      "sku": "866375989",
      "cost": 149,
      "price": 400,
      "title": "3x3\" / White",
      "grams": 10,
      "is_enabled": true,
      "is_default": false,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [2018, 2114]
    },
    {
      "id": 45744,
      "sku": "866375990",
      "cost": 187,
      "price": 400,
      "title": "4x4\" / White",
      "grams": 10,
      "is_enabled": true,
      "is_default": false,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [2019, 2114]
    },
    {
      "id": 45746,
      "sku": "866375991",
      "cost": 216,
      "price": 400,
      "title": "6x6\" / White",
      "grams": 10,
      "is_enabled": true,
      "is_default": false,
      "is_available": true,
      "is_printify_express_eligible": true,
      "options": [2020, 2114]
    }
  ],
  "images": [
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2187/product.jpg", "variant_ids": [45740], "position": "front", "is_default": true },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2188/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2202/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false }
    // ...
  ],
  "created_at": "2019-07-25 13:52:17+00:00",
  "updated_at": "2019-07-25 13:52:18+00:00",
  "visible": true,
  "is_locked": false,
  "is_printify_express_eligible": true,
  "is_printify_express_enabled": true,
  "is_economy_shipping_eligible": true,
  "is_economy_shipping_enabled": true,
  "blueprint_id": 384,
  "user_id": 1337,
  "shop_id": 1337,
  "print_provider_id": 1,
  "print_areas": [
    {
      "variant_ids": [45740, 45742, 45744, 45746],
      "placeholders": [
        {
          "position": "front",
          "images": [
            { "id": "5d15ca551163cde90d7b2203", "name": "Asset 65@3x.png", "type": "image/png", "height": 1200, "width": 1200, "x": 0.5, "y": 0.5, "scale": 1, "angle": 0 }
          ]
        }
      ],
      "background": "#ffffff"
    }
  ],
  "sales_channel_properties": []
}
```

</details>

#### `printify.products.deleteOne(productId)`

- `DELETE /v1/shops/{shop_id}/products/{product_id}.json`
- **Description:** Delete a product

```js
await printify.products.deleteOne(productId);
```

<details>
  <summary>View Response</summary>

```json
{}
```

</details>

#### `printify.products.publishOne(productId, data)`

- `POST /v1/shops/{shop_id}/products/{product_id}/publish.json`
- **Description:** Publish a product

> **Note:** This does not implement any publishing action unless the Printify store is connected to one of our other supported sales channel integrations, if your store is custom
> and is subscribed to the product::pubish::started event, that event will be triggered and the properties that are set in the request body will be set in the event payload for
> your store to react to if implemented. The case is the same for attempting to publish a product from the Printify app. See
> [product events](https://developers.printify.com/#product-events) for reference.

```js
const data = { title: true, description: true, images: true, variants: true, tags: true, keyFeatures: true, shipping_template: true };

await printify.products.publishOne('productId', data);
```

<details>
  <summary>View Response</summary>

```json
{}
```

</details>

#### `printify.products.setPublishSucceeded(productId, data)`

- `POST /v1/shops/{shop_id}/products/{product_id}/publishing_succeeded.json`
- **Description:** Set product publish status to succeeded. Removes the product from the locked status on the Printify app and sets it's external property with the handle you
  provide in the request body.

```js
const data = { external: { id: '5941187eb8e7e37b3f0e62e5', handle: 'https://example.com/path/to/product' } };

await printify.products.setPublishSucceeded('productId', data);
```

<details>
  <summary>View Response</summary>

```json
{}
```

</details>

#### `printify.products.setPublishFailed(productId)`

- `POST /v1/shops/{shop_id}/products/{product_id}/publishing_failed.json`
- **Description:** Set product publish status to failed. Removes the product from the locked status on the Printify app.

```js
const data = { reason: 'Request timed out' };

await printify.products.setPublishSucceeded('productId', data);
```

<details>
  <summary>View Response</summary>

```json
{}
```

</details>

#### `printify.products.notifyUnpublished(productId)`

- `POST /v1/shops/{shop_id}/products/{product_id}/unpublish.json`
- **Description:** Notify that a product has been unpublished

```js
await printify.products.notifyUnpublished(productId);
```

<details>
  <summary>View Response</summary>

```json
{}
```

</details>

### Orders

#### `printify.orders.list()`

- `GET /v1/shops/{shop_id}/orders.json`
- **Description:** Retrieve a list of orders

```js
await printify.orders.list({ page: 2 });
await printify.orders.list({ limit: 5 });
await printify.orders.list({ status: 'fulfilled' });
await printify.orders.list({ sku: '168699843' });
```

<details>
  <summary>View Response</summary>

```json
{
  "current_page": 1,
  "data": [
    {
      "id": "5a96f649b2439217d070f507",
      "address_to": {
        "first_name": "John",
        "last_name": "Smith",
        "region": "",
        "address1": "ExampleBaan 121",
        "city": "Retie",
        "zip": "2470",
        "email": "example@msn.com",
        "phone": "0574 69 21 90",
        "country": "BE",
        "company": "MSN"
      },
      "line_items": [
        {
          "product_id": "5b05842f3921c9547531758d",
          "quantity": 1,
          "variant_id": 17887,
          "print_provider_id": 5,
          "cost": 1050,
          "shipping_cost": 400,
          "status": "fulfilled",
          "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" },
          "sent_to_production_at": "2017-04-18 13:24:28+00:00",
          "fulfilled_at": "2017-04-18 13:24:28+00:00"
        }
      ],
      "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" },
      "total_price": 2200,
      "total_shipping": 400,
      "total_tax": 0,
      "status": "fulfilled",
      "shipping_method": 1,
      "is_printify_express": false,
      "is_economy_shipping": false,
      "shipments": [{ "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" }],
      "created_at": "2017-04-18 13:24:28+00:00",
      "sent_to_production_at": "2017-04-18 13:24:28+00:00",
      "fulfilled_at": "2017-04-18 13:24:28+00:00",
      "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }
    }
  ]
}
```

</details>

#### `printify.orders.list(page)`

- `GET /v1/shops/{shop_id}/orders.json?page=2`
- **Description:** Retrieve a list of orders

```js
await printify.orders.list(page);
```

<details>
  <summary>View Response</summary>

```json
{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "Jack", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }
```

</details>

#### `printify.orders.list(status)`

- `GET /v1/shops/{shop_id}/orders.json?status=fulfilled`
- **Description:** Retrieve a list of orders

```js
await printify.orders.list(status);
```

<details>
  <summary>View Response</summary>

```json
{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }
```

</details>

#### `printify.orders.list(sku)`

- `GET /v1/shops/{shop_id}/orders.json?sku=168699843`
- **Description:** Retrieve a list of orders

```js
await printify.orders.list(sku);
```

<details>
  <summary>View Response</summary>

```json
{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }
```

</details>

#### `printify.orders.getOne(orderId)`

- `GET /v1/shops/{shop_id}/orders/{order_id}.json`
- **Description:** Get order details by id

```js
await printify.orders.getOne(orderId);
```

<details>
  <summary>View Response</summary>

```json
{ "id": "5a96f649b2439217d070f507", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "Retie", "zip": "2470", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, }
```

</details>

#### `printify.orders.submit(data)`

- `POST /v1/shops/{shop_id}/orders.json`
- **Description:** Submit an order (this creates a draft, you will send to production separately)

```js
// Example #1 - Submit order by productId

const data = {
  external_id: '2750e210-39bb-11e9-a503-452618153e4a',
  label: '00012',
  line_items: [{ product_id: '5bfd0b66a342bcc9b5563216', variant_id: 17887, quantity: 1 }],
  shipping_method: 1,
  is_printify_express: false,
  is_economy_shipping: false,
  send_shipping_notification: false,
  address_to: {
    first_name: 'John',
    last_name: 'Smith',
    email: 'example@msn.com',
    phone: '0574 69 21 90',
    country: 'BE',
    region: '',
    address1: 'ExampleBaan 121',
    address2: '45',
    city: 'Retie',
    zip: '2470',
  },
};
await printify.orders.submit(data);
// response: { "id": "5a96f649b2439217d070f507" }
```

```js
// Example #2 - Submit order by external image URL (simple image positioning)

const data = {
  external_id: '2750e210-39bb-11e9-a503-452618153e5a',
  label: '00012',
  line_items: [{ print_provider_id: 5, blueprint_id: 9, variant_id: 17887, print_areas: { front: 'https://images.example.com/image.png' }, quantity: 1 }],
  shipping_method: 1,
  is_printify_express: false,
  is_economy_shipping: false,
  send_shipping_notification: false,
  address_to: {
    first_name: 'John',
    last_name: 'Smith',
    email: 'example@msn.com',
    phone: '0574 69 21 90',
    country: 'BE',
    region: '',
    address1: 'ExampleBaan 121',
    address2: '45',
    city: 'Retie',
    zip: '2470',
  },
};
await printify.orders.submit(data);
// response: { "id": "5a96f649b2439217d070f507" }
```

```js
// Example #3 - Submit order by external image URL (advanced image positioning)

const data = {
  external_id: '2750e210-39bb-11e9-a503-452618153e5a',
  label: '00012',
  line_items: [
    {
      print_provider_id: 5,
      blueprint_id: 9,
      variant_id: 17887,
      print_areas: {
        front: [
          { src: 'https://images.example.com/image.png', scale: 0.15, x: 0.8, y: 0.34, angle: 0.34 },
          { src: 'https://images.example.com/image.png', scale: 1, x: 0.5, y: 0.5, angle: 1 },
        ],
      },
      quantity: 1,
    },
  ],
  shipping_method: 1,
  is_printify_express: false,
  is_economy_shipping: false,
  send_shipping_notification: false,
  address_to: {
    first_name: 'John',
    last_name: 'Smith',
    email: 'example@msn.com',
    phone: '0574 69 21 90',
    country: 'BE',
    region: '',
    address1: 'ExampleBaan 121',
    address2: '45',
    city: 'Retie',
    zip: '2470',
  },
};
await printify.orders.submit(data);
// response: { "id": "5a96f649b2439217d070f507" }
```

```js
// Example #4 - Submit order by external image URL (with specifying print details for printing on sides)

const data = {
  external_id: '2750e210-39bb-11e9-a503-452618153e5a',
  label: '00012',
  line_items: [
    {
      print_provider_id: 5,
      blueprint_id: 9,
      variant_id: 17887,
      print_areas: {
        front: 'https://images.example.com/image.png',
      },
      print_details: {
        print_on_side: 'mirror',
      },
      quantity: 1,
    },
  ],
  shipping_method: 1,
  is_printify_express: false,
  is_economy_shipping: false,
  send_shipping_notification: false,
  address_to: {
    first_name: 'John',
    last_name: 'Smith',
    email: 'example@msn.com',
    phone: '0574 69 21 90',
    country: 'BE',
    region: '',
    address1: 'ExampleBaan 121',
    address2: '45',
    city: 'Retie',
    zip: '2470',
  },
};
await printify.orders.submit(data);
// response: { "id": "5a96f649b2439217d070f507" }
```

```js
// Example #5 - Submit order by only an existing SKU

const data = {
  external_id: '2750e210-39bb-11e9-a503-452618153e6a',
  label: '00012',
  line_items: [
    {
      sku: 'MY-SKU',
      quantity: 1,
    },
  ],
  shipping_method: 1,
  is_printify_express: false,
  is_economy_shipping: false,
  send_shipping_notification: false,
  address_to: {
    first_name: 'John',
    last_name: 'Smith',
    email: 'example@msn.com',
    phone: '0574 69 21 90',
    country: 'BE',
    region: '',
    address1: 'ExampleBaan 121',
    address2: '45',
    city: 'Retie',
    zip: '2470',
  },
};
await printify.orders.submit(data);
// response: { "id": "5a96f649b2439217d070f507" }
```

</details>

#### `printify.orders.submitExpress(data)`

- `POST /v1/shops/{shop_id}/express.json`
- **Description:** Submit a Printify Express order

```js
const data = {
  external_id: '2750e210-39bb-11e9-a503-452618153e4a',
  label: '00012',
  line_items: [
    { product_id: '5b05842f3921c9547531758d', variant_id: 12359, quantity: 1 },
    { product_id: '5b05842f3921c34764fa478bc', variant_id: 17887, quantity: 1 },
  ],
  shipping_method: 3,
  send_shipping_notification: false,
  address_to: {
    first_name: 'John',
    last_name: 'Smith',
    email: 'example@example.com',
    phone: '0574 69 21 90',
    country: 'BE',
    region: '',
    address1: 'ExampleBaan 121',
    address2: '45',
    city: 'Retie',
    zip: '2470',
  },
};

await printify.orders.submitExpress(data);
```

<details>
  <summary>View Response</summary>

```json
[
  {
    "type": "order",
    "id": "5a96f649b2439217d070f508",
    "attributes": {
      "fulfilment_type": "express",
      "line_items": [
        {
          "product_id": "5b05842f3921c9547531758d",
          "quantity": 1,
          "variant_id": 12359,
          "print_provider_id": 5,
          "cost": 2200,
          "shipping_cost": 799,
          "status": "pending",
          "metadata": { "title": "T-shirt", "price": 2200, "variant_label": "Blue / S", "sku": "168699843", "country": "United States" },
          "sent_to_production_at": "2023-10-18 13:24:28+00:00",
          "fulfilled_at": null
        }
      ]
    }
  },
  {
    "type": "order",
    "id": "5a96f649b2439597d020a9b4",
    "attributes": {
      "fulfilment_type": "ordinary",
      "line_items": [
        {
          "product_id": "5b05842f3921c34764fa478bc",
          "quantity": 1,
          "variant_id": 17887,
          "print_provider_id": 5,
          "cost": 1050,
          "shipping_cost": 400,
          "status": "pending",
          "metadata": { "title": "Mug 11oz", "price": 1050, "variant_label": "11oz", "sku": "168699843", "country": "United States" },
          "sent_to_production_at": "2023-10-18 13:24:28+00:00",
          "fulfilled_at": null
        }
      ]
    }
  }
]
```

</details>

#### `printify.orders.sendToProduction(orderId)`

- `POST /v1/shops/{shop_id}/orders/{order_id}/send_to_production.json`
- **Description:** Send an existing order to production

```js
await printify.orders.sendToProduction(orderId);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": "5d65c6ac01b403000a5d24d3",
  "address_to": {
    "first_name": "John ",
    "last_name": "Doe",
    "phone": "0000000",
    "country": "United States",
    "region": "AL",
    "address1": "Happy St 1",
    "city": "Sun City",
    "zip": "00000"
  },
  "line_items": [
    {
      "quantity": 1,
      "product_id": "5d6549359105f6000a0c17f7",
      "variant_id": 43424,
      "print_provider_id": 16,
      "shipping_cost": 400,
      "cost": 1149,
      "status": "on-hold",
      "metadata": { "title": "POD Water Bottle 2", "price": 1915, "variant_label": "14oz", "sku": "901426000", "country": "United States" }
    }
  ],
  "metadata": { "order_type": "manual", "shop_fulfilled_at": "1970-01-01 00:00:00+00:00" },
  "total_price": 1149,
  "total_shipping": 400,
  "total_tax": 0,
  "status": "on-hold",
  "shipping_method": 1,
  "is_printify_express": false,
  "is_economy_shipping": false,
  "created_at": "2019-08-28 00:11:24+00:00"
}
```

</details>

#### `printify.orders.calculateShipping(data)`

- `POST /v1/shops/{shop_id}/orders/shipping.json`
- **Description:** Calculate the shipping cost of an order

```js
const data = {
  line_items: [
    { product_id: '5bfd0b66a342bcc9b5563216', variant_id: 17887, quantity: 1 },
    { print_provider_id: 5, blueprint_id: 9, variant_id: 17887, quantity: 1 },
    { sku: 'MY-SKU', quantity: 1 },
  ],
  address_to: {
    first_name: 'John',
    last_name: 'Smith',
    email: 'example@msn.com',
    phone: '0574 69 21 90',
    country: 'BE',
    region: '',
    address1: 'ExampleBaan 121',
    address2: '45',
    city: 'Retie',
    zip: '2470',
  },
};

await printify.orders.calculateShipping(data);
```

<details>
  <summary>View Response</summary>

```json
{ "standard": 1000, "express": 5000, "priority": 5000, "printify_express": 799, "economy": 399 }
```

</details>

Response contains the shipping options that are defined in the following table:

| Code | Current Version      | Future Version |
| ---- | -------------------- | -------------- |
| 1    | **standard**         | standard       |
| 2    | **express**          | priority       |
| 3    | \*\*printify_express | express        |
| 4    | \*\*economy\*\*      | economy        |

> **Note:** The `printify_express` is a shipping option (as of July 2024) that will later in the future change its name to the `express`. Current express option will be renamed to
> the priority name.

#### `printify.orders.cancelUnpaid(orderId)`

- `POST /v1/shops/{shop_id}/orders/{order_id}/cancel.json`
- **Description:** Cancel an unpaid order. Status must be "on-hold" or "payment-not-received"

```js
await printify.orders.cancelUnpaid(orderId);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": "5dee261dc400914833007902",
  "address_to": {
    "first_name": "John",
    "last_name": "Smith",
    "email": "example@msn.com",
    "country": "United States",
    "region": "CA",
    "address1": "31677 Virginia Way",
    "city": "Laguna Beach",
    "zip": "92653"
  },
  "line_items": [
    {
      "quantity": 1,
      "product_id": "5de6593ebff03b5313567d22",
      "variant_id": 34509,
      "print_provider_id": 6,
      "shipping_cost": 450,
      "cost": 0,
      "status": "canceled",
      "metadata": { "title": "Men's Organic Tee - Product 1", "variant_label": "S / Red", "sku": "3640", "country": "United Kingdom" }
    }
  ],
  "metadata": {
    "order_type": "api",
    "shop_order_id": "2750e210-39bb-11e9-a503-452618153e4a",
    "shop_order_label": "2750e210-39bb-11e9-a503-452618153e4a",
    "shop_fulfilled_at": "1970-01-01 00:00:00+00:00"
  },
  "total_price": 0,
  "total_shipping": 0,
  "total_tax": 0,
  "status": "canceled",
  "shipping_method": 1,
  "is_printify_express": false,
  "is_economy_shipping": false,
  "created_at": "2019-12-09 10:46:53+00:00"
}
```

</details>

### Uploads

#### `printify.uploads.list()`

- `GET /v1/uploads.json` - `GET /v1/uploads.json?page=2` - `GET /v1/uploads.json?limit=1`

- **Description:** Retrieve a list of all uploaded images (results default: 10, maximum: 100)

```js
await printify.uploads.list();
await printify.uploads.list((page = 2));
await printify.uploads.list(undefined, (limit = 5));
```

<details>
  <summary>View Response</summary>

```json
{
  "current_page": 1,
  "data": [
    {
      "id": "5e16d66791287a0006e522b2",
      "file_name": "png-images-logo-1.jpg",
      "height": 5979,
      "width": 17045,
      "size": 1138575,
      "mime_type": "image/png",
      "preview_url": "https://example.com/image-storage/uuid1",
      "upload_time": "2020-01-09 07:29:43"
    },
    {
      "id": "5de50bf612c348000892b366",
      "file_name": "png-images-logo-2.jpg",
      "height": 360,
      "width": 360,
      "size": 19589,
      "mime_type": "image/jpeg",
      "preview_url": "https://example.com/image-storage/uuid2",
      "upload_time": "2019-12-02 13:04:54"
    }
  ],
  "first_page_url": "/?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "/?page=1",
  "next_page_url": null,
  "path": "/",
  "per_page": 10,
  "prev_page_url": null,
  "to": 2,
  "total": 2
}
```

</details>

#### `printify.uploads.getById(imageId)`

- `GET /v1/uploads/{image_id}.json`
- **Description:** Retrieve an uploaded image by id

```js
await printify.uploads.getById(imageId);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": "5e16d66791287a0006e522b2",
  "file_name": "png-images-logo-1.jpg",
  "height": 5979,
  "width": 17045,
  "size": 1138575,
  "mime_type": "image/png",
  "preview_url": "https://example.com/image-storage/uuid1",
  "upload_time": "2020-01-09 07:29:43"
}
```

</details>

#### `printify.uploads.uploadImage(data)`

> Upload image files either via image URL or image file base64-encoded contents. We highly recommend using upload via image URL for files larger than 5MB.

- `POST /v1/uploads/images.json`
- **Description:** Upload an image

```js
const data = { file_name: '1x1-ff00007f.png', url: 'http://png-pixel.com/1x1-ff00007f.png' };

// ALTERNATE: upload the image content in base64 format (we recommend use URLs, this will be deprecated in the future)
// const data = { "file_name": "image.png", "contents": "<base-64-encoded-content>" }

await printify.uploads.uploadImage(data);
```

<details>
  <summary>View Response</summary>

```json
{
  "id": "5941187eb8e7e37b3f0e62e5",
  "file_name": "image.png",
  "height": 200,
  "width": 400,
  "size": 1021,
  "mime_type": "image/png",
  "preview_url": "https://example.com/image-storage/uuid3",
  "upload_time": "2020-01-09 07:29:43"
}
```

</details>

#### `printify.uploads.archive(imageId)`

- `POST /v1/uploads/{image_id}/archive.json`
- **Description:** Archive an uploaded image

```js
await printify.uploads.archive(imageId);
```

<details>
  <summary>View Response</summary>

```json
{}
```

</details>

### Webhooks

Use these endpoints to **configure** the Webhooks (for Printify [Events](https://developers.printify.com/#events)). You must implement your own server-side logic receive the actual
payloads

#### `printify.webhooks.list()`

- `GET /v1/shops/{shop_id}/webhooks.json`
- **Description:** Retrieve a list of webhooks

```js
await printify.webhooks.list();
```

<details>
  <summary>View Response</summary>

```json
[
  { "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" },
  { "topic": "order:updated", "url": "https://example.com/webhooks/order/updated", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec5" }
]
```

</details>

#### `printify.webhooks.create(data)`

- `POST /v1/shops/{shop_id}/webhooks.json`
- **Description:** Create a new webhook

```js
const data = { topic: 'order:created', url: 'https://example.com/webhooks/order/created' };
await printify.webhooks.create(data);
```

<details>
  <summary>View Response</summary>

```json
{ "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }
```

</details>

#### `printify.webhooks.updateOne(webhookId, data)`

- `PUT /v1/shops/{shop_id}/webhooks/{webhook_id}.json`
- **Description:** Modify a webhook

```js
const data = { url: 'https://example.com/callback/order/created' };
await printify.webhooks.updateOne('webhookId', data);
```

<details>
  <summary>View Response</summary>

```json
{ "topic": "order:created", "url": "https://example.com/callback/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }
```

</details>

#### `printify.webhooks.deleteOne(webhookId)`

- `DELETE /v1/shops/{shop_id}/webhooks/{webhook_id}.json`
- **Description:** Delete a webhook

```js
await printify.webhooks.deleteOne(webhookId);
```

<details>
  <summary>View Response</summary>

```json
{ "id": "5cb87a8cd490a2ccb256cec4" }
```
