# SDK Documentation

## Introduction

The Printify SDK for Node.js. A basic JavaScript wrapper for the Printify REST API (v1). Guidelines and source endpoints can be found here:
[developers.printify.com](https://developers.printify.com/).

### Usage

```js
var Printify = require('printify-api');

// TODO
// var printify = new Printify({
//   shop_id: 123456, // global query by shop_id, if not set you must set each function
//   access_token:'xxxxxxxxxxxxxxxxxxxxxxxxxx'
// });

// submit an order
// send an order to production
```

## API

- [Shops](#shops)
- [Catalog](#catalog)
- [Products](#products)
- [Orders](#orders)
- [Uploads](#uploads)
- [Webhooks](#webhooks)

### Shops

#### `printify.shops.getAll()`

- `GET /v1/shops.json`
- Description: Retrieve a list of shops in a Printify account

```json
[ { "id": 5432, "title": "My new store", "sales_channel": "My Sales Channel" }, { "id": 9876, "title": "My other new
store", "sales_channel": "disconnected" } ]
```

#### `printify.shops.deleteOne(shopId)`

- `DELETE /v1/shops/{shop_id}/connection.json`
- Description: Disconnect a shop

```json
{}
```

### Catalog

#### `printify.catalog.listBlueprints()`

- `GET /v1/catalog/blueprints.json`
- Description: Retrieve a list of all available blueprints

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

#### `printify.catalog.getBlueprint(blueprintId)`

- `GET /v1/catalog/blueprints/{blueprint_id}.json`
- Description: Retrieve a specific blueprint

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

#### `printify.catalog.getBlueprintProviders(blueprintId)`

- `GET /v1/catalog/blueprints/{blueprint_id}/print_providers.json`
- Description: Retrieve a list of all print providers that fulfill orders for a specific blueprint

```json
[
  { "id": 3, "title": "DJ" },
  { "id": 8, "title": "Fifth Sun" },
  { "id": 16, "title": "MyLocker" },
  { "id": 24, "title": "Inklocker" }
]
```

#### `printify.catalog.getBlueprintVariants(blueprintId, printProviderId)`

- `GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/variants.json`
- Description: Retrieve a list of all variants of a blueprint from a specific print provider

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
    },
    {
      "id": 17516,
      "title": "Solid Light Blue / XS",
      "options": { "color": "Solid Light Blue", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17552,
      "title": "Solid Maroon / XS",
      "options": { "color": "Solid Maroon", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17588,
      "title": "Solid Red / XS",
      "options": { "color": "Solid Red", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17597,
      "title": "Solid Royal / XS",
      "options": { "color": "Solid Royal", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17606,
      "title": "Solid Sand / XS",
      "options": { "color": "Solid Sand", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17642,
      "title": "Solid White / XS",
      "options": { "color": "Solid White", "size": "XS" },
      "placeholders": [
        { "position": "back", "height": 3995, "width": 3153 },
        { "position": "front", "height": 3995, "width": 3153 }
      ]
    },
    {
      "id": 17391,
      "title": "Heather Grey / S",
      "options": { "color": "Heather Grey", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17427,
      "title": "Solid Black / S",
      "options": { "color": "Solid Black", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17436,
      "title": "Solid Scarlet / S",
      "options": { "color": "Solid Scarlet", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17445,
      "title": "Solid Cool Blue / S",
      "options": { "color": "Solid Cool Blue", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17454,
      "title": "Solid Cream / S",
      "options": { "color": "Solid Cream", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17463,
      "title": "Solid Dark Chocolate / S",
      "options": { "color": "Solid Dark Chocolate", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17481,
      "title": "Solid Heavy Metal / S",
      "options": { "color": "Solid Heavy Metal", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17490,
      "title": "Solid Indigo / S",
      "options": { "color": "Solid Indigo", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17517,
      "title": "Solid Light Blue / S",
      "options": { "color": "Solid Light Blue", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17553,
      "title": "Solid Maroon / S",
      "options": { "color": "Solid Maroon", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17589,
      "title": "Solid Red / S",
      "options": { "color": "Solid Red", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17598,
      "title": "Solid Royal / S",
      "options": { "color": "Solid Royal", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17607,
      "title": "Solid Sand / S",
      "options": { "color": "Solid Sand", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17643,
      "title": "Solid White / S",
      "options": { "color": "Solid White", "size": "S" },
      "placeholders": [
        { "position": "back", "height": 4563, "width": 3602 },
        { "position": "front", "height": 4563, "width": 3602 }
      ]
    },
    {
      "id": 17392,
      "title": "Heather Grey / M",
      "options": { "color": "Heather Grey", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17428,
      "title": "Solid Black / M",
      "options": { "color": "Solid Black", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17437,
      "title": "Solid Scarlet / M",
      "options": { "color": "Solid Scarlet", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17446,
      "title": "Solid Cool Blue / M",
      "options": { "color": "Solid Cool Blue", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17455,
      "title": "Solid Cream / M",
      "options": { "color": "Solid Cream", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17464,
      "title": "Solid Dark Chocolate / M",
      "options": { "color": "Solid Dark Chocolate", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17482,
      "title": "Solid Heavy Metal / M",
      "options": { "color": "Solid Heavy Metal", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17491,
      "title": "Solid Indigo / M",
      "options": { "color": "Solid Indigo", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17518,
      "title": "Solid Light Blue / M",
      "options": { "color": "Solid Light Blue", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17554,
      "title": "Solid Maroon / M",
      "options": { "color": "Solid Maroon", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17590,
      "title": "Solid Red / M",
      "options": { "color": "Solid Red", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17599,
      "title": "Solid Royal / M",
      "options": { "color": "Solid Royal", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17608,
      "title": "Solid Sand / M",
      "options": { "color": "Solid Sand", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17644,
      "title": "Solid White / M",
      "options": { "color": "Solid White", "size": "M" },
      "placeholders": [
        { "position": "back", "height": 5131, "width": 4051 },
        { "position": "front", "height": 5131, "width": 4051 }
      ]
    },
    {
      "id": 17393,
      "title": "Heather Grey / L",
      "options": { "color": "Heather Grey", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17429,
      "title": "Solid Black / L",
      "options": { "color": "Solid Black", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17438,
      "title": "Solid Scarlet / L",
      "options": { "color": "Solid Scarlet", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17447,
      "title": "Solid Cool Blue / L",
      "options": { "color": "Solid Cool Blue", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17456,
      "title": "Solid Cream / L",
      "options": { "color": "Solid Cream", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17465,
      "title": "Solid Dark Chocolate / L",
      "options": { "color": "Solid Dark Chocolate", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17483,
      "title": "Solid Heavy Metal / L",
      "options": { "color": "Solid Heavy Metal", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17492,
      "title": "Solid Indigo / L",
      "options": { "color": "Solid Indigo", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17519,
      "title": "Solid Light Blue / L",
      "options": { "color": "Solid Light Blue", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17555,
      "title": "Solid Maroon / L",
      "options": { "color": "Solid Maroon", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17591,
      "title": "Solid Red / L",
      "options": { "color": "Solid Red", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17600,
      "title": "Solid Royal / L",
      "options": { "color": "Solid Royal", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17609,
      "title": "Solid Sand / L",
      "options": { "color": "Solid Sand", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17645,
      "title": "Solid White / L",
      "options": { "color": "Solid White", "size": "L" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17394,
      "title": "Heather Grey / XL",
      "options": { "color": "Heather Grey", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17430,
      "title": "Solid Black / XL",
      "options": { "color": "Solid Black", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17439,
      "title": "Solid Scarlet / XL",
      "options": { "color": "Solid Scarlet", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17448,
      "title": "Solid Cool Blue / XL",
      "options": { "color": "Solid Cool Blue", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17457,
      "title": "Solid Cream / XL",
      "options": { "color": "Solid Cream", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17466,
      "title": "Solid Dark Chocolate / XL",
      "options": { "color": "Solid Dark Chocolate", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17484,
      "title": "Solid Heavy Metal / XL",
      "options": { "color": "Solid Heavy Metal", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17493,
      "title": "Solid Indigo / XL",
      "options": { "color": "Solid Indigo", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17520,
      "title": "Solid Light Blue / XL",
      "options": { "color": "Solid Light Blue", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17556,
      "title": "Solid Maroon / XL",
      "options": { "color": "Solid Maroon", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17592,
      "title": "Solid Red / XL",
      "options": { "color": "Solid Red", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17601,
      "title": "Solid Royal / XL",
      "options": { "color": "Solid Royal", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17610,
      "title": "Solid Sand / XL",
      "options": { "color": "Solid Sand", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17646,
      "title": "Solid White / XL",
      "options": { "color": "Solid White", "size": "XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17395,
      "title": "Heather Grey / 2XL",
      "options": { "color": "Heather Grey", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17431,
      "title": "Solid Black / 2XL",
      "options": { "color": "Solid Black", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17440,
      "title": "Solid Scarlet / 2XL",
      "options": { "color": "Solid Scarlet", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17449,
      "title": "Solid Cool Blue / 2XL",
      "options": { "color": "Solid Cool Blue", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17458,
      "title": "Solid Cream / 2XL",
      "options": { "color": "Solid Cream", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17467,
      "title": "Solid Dark Chocolate / 2XL",
      "options": { "color": "Solid Dark Chocolate", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17485,
      "title": "Solid Heavy Metal / 2XL",
      "options": { "color": "Solid Heavy Metal", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17494,
      "title": "Solid Indigo / 2XL",
      "options": { "color": "Solid Indigo", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17521,
      "title": "Solid Light Blue / 2XL",
      "options": { "color": "Solid Light Blue", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17557,
      "title": "Solid Maroon / 2XL",
      "options": { "color": "Solid Maroon", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17593,
      "title": "Solid Red / 2XL",
      "options": { "color": "Solid Red", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17602,
      "title": "Solid Royal / 2XL",
      "options": { "color": "Solid Royal", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17611,
      "title": "Solid Sand / 2XL",
      "options": { "color": "Solid Sand", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17647,
      "title": "Solid White / 2XL",
      "options": { "color": "Solid White", "size": "2XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17396,
      "title": "Heather Grey / 3XL",
      "options": { "color": "Heather Grey", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17432,
      "title": "Solid Black / 3XL",
      "options": { "color": "Solid Black", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17441,
      "title": "Solid Scarlet / 3XL",
      "options": { "color": "Solid Scarlet", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17450,
      "title": "Solid Cool Blue / 3XL",
      "options": { "color": "Solid Cool Blue", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17459,
      "title": "Solid Cream / 3XL",
      "options": { "color": "Solid Cream", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17468,
      "title": "Solid Dark Chocolate / 3XL",
      "options": { "color": "Solid Dark Chocolate", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17486,
      "title": "Solid Heavy Metal / 3XL",
      "options": { "color": "Solid Heavy Metal", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17495,
      "title": "Solid Indigo / 3XL",
      "options": { "color": "Solid Indigo", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17522,
      "title": "Solid Light Blue / 3XL",
      "options": { "color": "Solid Light Blue", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17558,
      "title": "Solid Maroon / 3XL",
      "options": { "color": "Solid Maroon", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17594,
      "title": "Solid Red / 3XL",
      "options": { "color": "Solid Red", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17603,
      "title": "Solid Royal / 3XL",
      "options": { "color": "Solid Royal", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17612,
      "title": "Solid Sand / 3XL",
      "options": { "color": "Solid Sand", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    },
    {
      "id": 17648,
      "title": "Solid White / 3XL",
      "options": { "color": "Solid White", "size": "3XL" },
      "placeholders": [
        { "position": "back", "height": 5700, "width": 4500 },
        { "position": "front", "height": 5700, "width": 4500 }
      ]
    }
  ]
}
```

#### `printify.catalog.getVariantShipping(blueprintId, printProviderId)`

- `GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping.json`
- Description: Retrieve the shipping information for all variants of a blueprint from a specific print provider

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

#### `printify.catalog.listProviders()`

- `GET /v1/catalog/print_providers.json`
- Description: Retrieve a list of all available print-providers

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
  },
  { "id": 7, "title": "Prodigi", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  { "id": 8, "title": "Fifth Sun", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  { "id": 9, "title": "WPaPS", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  { "id": 10, "title": "MWW On Demand", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  { "id": 14, "title": "ArtsAdd", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  { "id": 16, "title": "MyLocker", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  {
    "id": 20,
    "title": "Troupe Jewelry",
    "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" }
  },
  { "id": 23, "title": "WOYC", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  { "id": 24, "title": "Inklocker", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } },
  { "id": 25, "title": "DTG2Go", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }
]
```

#### `printify.catalog.getProvider(printProviderId)`

- `GET /v1/catalog/print_providers/{print_provider_id}.json`
- Description: Retrieve a specific print-provider and a list of associated blueprint offerings

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
    },
    {
      "id": 54,
      "title": "Slim Iphone 6/6s Plus",
      "brand": "Case Mate",
      "model": "6/6s Plus Slim",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f61b.png", "https://images.printify.com/5853fe7dce46f30f8327f61e.png"]
    },
    {
      "id": 55,
      "title": "Tough Iphone 6/6s Plus",
      "brand": "Case Mate",
      "model": "6/6s Plus Tough",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f615.png", "https://images.printify.com/5853fe7dce46f30f8327f618.png"]
    },
    {
      "id": 56,
      "title": "Slim Iphone 5/5s/5se",
      "brand": "Case Mate",
      "model": "5/5s/5se Slim",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f5f7.png", "https://images.printify.com/5853fe7dce46f30f8327f5fa.png"]
    },
    {
      "id": 57,
      "title": "Tough Iphone 5/5s/5se",
      "brand": "Case Mate",
      "model": "5/5s/5se Tough",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f5fd.png", "https://images.printify.com/5853fe7dce46f30f8327f600.png"]
    },
    {
      "id": 58,
      "title": "Slim Iphone 5C",
      "brand": "Case Mate",
      "model": "5C Slim",
      "images": ["https://images.printify.com/5853fe80ce46f30f8327f7cf.png", "https://images.printify.com/5853fe80ce46f30f8327f7d7.png"]
    },
    {
      "id": 59,
      "title": "Slim Iphone 4/4s",
      "brand": "Case Mate",
      "model": "4/4s Slim",
      "images": ["https://images.printify.com/5853fe7ece46f30f8327f639.png", "https://images.printify.com/5853fe7ece46f30f8327f63c.png"]
    },
    {
      "id": 60,
      "title": "Tough Iphone 4/4s",
      "brand": "Case Mate",
      "model": "4/4s Tough",
      "images": ["https://images.printify.com/5853fe7ece46f30f8327f63f.png", "https://images.printify.com/5853fe7ece46f30f8327f642.png"]
    },
    {
      "id": 61,
      "title": "Slim Samsung Galaxy S7",
      "brand": "Case Mate",
      "model": "S7 Slim",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f621.png", "https://images.printify.com/5853fe7dce46f30f8327f624.png"]
    },
    {
      "id": 62,
      "title": "Slim Samsung Galaxy S6",
      "brand": "Case Mate",
      "model": "S6 Slim",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f627.png", "https://images.printify.com/5853fe7ece46f30f8327f62a.png"]
    },
    {
      "id": 63,
      "title": "Tough Samsung Galaxy S6",
      "brand": "Case Mate",
      "model": "S6 Tough",
      "images": ["https://images.printify.com/5853fe7ece46f30f8327f62d.png", "https://images.printify.com/5853fe7ece46f30f8327f630.png"]
    },
    {
      "id": 64,
      "title": "Slim Samsung Galaxy S5",
      "brand": "Case Mate",
      "model": "S5 Slim",
      "images": ["https://images.printify.com/5853fe7ece46f30f8327f633.png", "https://images.printify.com/5853fe7ece46f30f8327f636.png"]
    },
    {
      "id": 68,
      "title": "Mug 11oz",
      "brand": "Generic brand",
      "model": "",
      "images": ["https://images.printify.com/5d09e78c47045f00083cd10d.png", "https://images.printify.com/58ac5d64b2439213b51b25ff.png"]
    },
    {
      "id": 69,
      "title": "Mug 15oz",
      "brand": "Generic brand",
      "model": "",
      "images": ["https://images.printify.com/5853fe7bce46f30f8327f4ff.png", "https://images.printify.com/5c5c1516a342bcb8e421d242.png"]
    },
    {
      "id": 70,
      "title": "Stainless Steel Travel Mug",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5d09f7e247045f00083cd110.png",
        "https://images.printify.com/5853fe7bce46f30f8327f502.png",
        "https://images.printify.com/58ac0e46b2439209155d3375.png",
        "https://images.printify.com/58ac5ac0b2439214ad09bd1b.png"
      ]
    },
    {
      "id": 71,
      "title": "Laptop Sleeve",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5853fe7bce46f30f8327f4e2.png",
        "https://images.printify.com/58ac0dadb2439209e3265564.png",
        "https://images.printify.com/58ac0db9b24392090e55b2f8.png",
        "https://images.printify.com/58cbdd4eb24392676d7f6961.png",
        "https://images.printify.com/58cbdd67b243926fe26236c2.png"
      ]
    },
    {
      "id": 74,
      "title": "Spiral Notebook - Ruled Line",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5d03643bd155b4000a00cae5.png",
        "https://images.printify.com/58cbed76b2439279864551c0.png",
        "https://images.printify.com/58cbf1ddb243926fe909d567.png"
      ]
    },
    {
      "id": 75,
      "title": "Journal - Ruled Line",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5d03aa7dd155b400094c4d60.png",
        "https://images.printify.com/5853fe7bce46f30f8327f4de.png",
        "https://images.printify.com/5c49c395a342bc53475e5412.png"
      ]
    },
    {
      "id": 76,
      "title": "Journal - Blank",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5d03aad4d155b4000a00cb82.png",
        "https://images.printify.com/585a7e24ce46f3416b5db1c7.png",
        "https://images.printify.com/5c49c3cba342bc53c0283808.png"
      ]
    },
    {
      "id": 84,
      "title": "Slim iPhone 7, iPhone 8",
      "brand": "Case Mate",
      "model": "Slim iPhone 7, iPhone 8",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f603.png", "https://images.printify.com/5853fe7dce46f30f8327f606.png"]
    },
    {
      "id": 85,
      "title": "Tough iPhone 7, IPhone 8",
      "brand": "Case Mate",
      "model": "Tough iPhone 7, IPhone 8",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f5e5.png", "https://images.printify.com/5853fe7dce46f30f8327f5e8.png"]
    },
    {
      "id": 86,
      "title": "Slim iPhone 7 Plus, iPhone 8 Plus",
      "brand": "Case Mate",
      "model": "Slim iPhone 7 Plus, , iPhone 8 Plus",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f609.png", "https://images.printify.com/5853fe7dce46f30f8327f60c.png"]
    },
    {
      "id": 87,
      "title": "Tough iPhone 7 Plus, iPhone 8 Plus",
      "brand": "Case Mate",
      "model": "Tough iPhone 7 Plus, iPhone 8 Plus",
      "images": ["https://images.printify.com/5853fe7dce46f30f8327f60f.png", "https://images.printify.com/5853fe7dce46f30f8327f612.png"]
    },
    {
      "id": 99,
      "title": "All US Phone cases",
      "brand": "Case Mate",
      "model": "",
      "images": [
        "https://images.printify.com/5853fe7dce46f30f8327f5eb.png",
        "https://images.printify.com/5853fe7dce46f30f8327f5ee.png",
        "https://images.printify.com/5853fe7dce46f30f8327f5f1.png",
        "https://images.printify.com/5853fe7dce46f30f8327f5f4.png",
        "https://images.printify.com/5853fe7dce46f30f8327f61b.png",
        "https://images.printify.com/5853fe7dce46f30f8327f61e.png",
        "https://images.printify.com/5853fe7dce46f30f8327f615.png",
        "https://images.printify.com/5853fe7dce46f30f8327f618.png",
        "https://images.printify.com/5853fe7dce46f30f8327f5f7.png",
        "https://images.printify.com/5853fe7dce46f30f8327f5fa.png",
        "https://images.printify.com/5853fe7dce46f30f8327f5fd.png",
        "https://images.printify.com/5853fe7dce46f30f8327f600.png",
        "https://images.printify.com/5853fe80ce46f30f8327f7cf.png",
        "https://images.printify.com/5853fe80ce46f30f8327f7d7.png",
        "https://images.printify.com/5853fe7ece46f30f8327f639.png",
        "https://images.printify.com/5853fe7ece46f30f8327f63c.png",
        "https://images.printify.com/5853fe7ece46f30f8327f63f.png",
        "https://images.printify.com/5853fe7ece46f30f8327f642.png",
        "https://images.printify.com/5853fe7dce46f30f8327f621.png",
        "https://images.printify.com/5853fe7dce46f30f8327f624.png",
        "https://images.printify.com/5853fe7dce46f30f8327f627.png",
        "https://images.printify.com/5853fe7ece46f30f8327f62a.png",
        "https://images.printify.com/5853fe7ece46f30f8327f62d.png",
        "https://images.printify.com/5853fe7ece46f30f8327f630.png",
        "https://images.printify.com/5853fe7ece46f30f8327f633.png",
        "https://images.printify.com/5853fe7ece46f30f8327f636.png",
        "https://images.printify.com/5853fe7dce46f30f8327f603.png",
        "https://images.printify.com/5853fe7dce46f30f8327f606.png",
        "https://images.printify.com/5853fe7dce46f30f8327f5e5.png",
        "https://images.printify.com/5853fe7dce46f30f8327f5e8.png",
        "https://images.printify.com/5853fe7dce46f30f8327f609.png",
        "https://images.printify.com/5853fe7dce46f30f8327f60c.png",
        "https://images.printify.com/5853fe7dce46f30f8327f60f.png",
        "https://images.printify.com/5853fe7dce46f30f8327f612.png"
      ]
    },
    {
      "id": 125,
      "title": "Mugs",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5853fe7bce46f30f8327f4fc.png",
        "https://images.printify.com/58ac5d64b2439213b51b25ff.png",
        "https://images.printify.com/5853fe7bce46f30f8327f4ff.png",
        "https://images.printify.com/5c5c1516a342bcb8e421d242.png"
      ]
    },
    { "id": 268, "title": "Case Mate Slim Phone Cases", "brand": "Case Mate", "model": "", "images": ["https://images.printify.com/5d08c85847045f00097be5b3.png"] },
    {
      "id": 269,
      "title": "Case Mate Tough Phone Cases",
      "brand": "Case Mate",
      "model": "",
      "images": ["https://images.printify.com/5d132242c1bdb8000a6e474c.png", "https://images.printify.com/5d131fadc1bdb800125d2efd.png"]
    },
    {
      "id": 277,
      "title": "Wall clock",
      "brand": "Generic brand",
      "model": "",
      "images": ["https://images.printify.com/5d0b31f347045f01ae2eeb1f.png", "https://images.printify.com/5a033c07b8e7e328100d3c27.png"]
    },
    {
      "id": 289,
      "title": "Latte mug",
      "brand": "Generic brand",
      "model": "",
      "images": ["https://images.printify.com/5d0a0e6047045f0189376682.png", "https://images.printify.com/5a325c76b8e7e355db3449e8.png"]
    },
    { "id": 352, "title": "Beach Towel", "brand": "Generic brand", "model": "", "images": ["https://images.printify.com/5afeba40a342bcea7045d84e.png"] },
    { "id": 353, "title": "Tumbler 20oz", "brand": "Generic brand", "model": "", "images": ["https://images.printify.com/5ad0a5baa342bc91115b6927.png"] },
    { "id": 354, "title": "Tumbler 10oz", "brand": "Generic brand", "model": "", "images": ["https://images.printify.com/5ad0a68ca342bc911954d928.png"] },
    { "id": 355, "title": "Can Holder", "brand": "Generic brand", "model": "", "images": ["https://images.printify.com/5ad0a53ca342bc9114070039.png"] },
    {
      "id": 376,
      "title": "Sublimation Socks",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5d13450ec1bdb800125d2f0d.png",
        "https://images.printify.com/5be1ae47a342bc3390628e22.png",
        "https://images.printify.com/5bbc8702a342bc24e4283e2c.png"
      ]
    },
    {
      "id": 384,
      "title": "Square Stickers",
      "brand": "Generic brand",
      "model": "",
      "images": ["https://images.printify.com/5cf4f606705f1900141a667c.png", "https://images.printify.com/5c6685a6a342bc4c6340bf82.png"]
    },
    {
      "id": 400,
      "title": "Kiss-Cut Stickers",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5cf4fabe705f190009393f38.png",
        "https://images.printify.com/5c48648aa342bc7e304661f2.png",
        "https://images.printify.com/5c4864a2a342bc7e256c1d6c.png"
      ]
    },
    {
      "id": 423,
      "title": "Alex' Test Product (do not delete)",
      "brand": "Bella+Canvas",
      "model": "9999",
      "images": [
        "https://images.printify.com/5c8bdf3d21a6ed001111c202.png",
        "https://images.printify.com/5c7565d51e58a3000964b4e2.png",
        "https://images.printify.com/5c8bdfa721a6ed000f1d19d2.png",
        "https://images.printify.com/5c8be08a21a6ed00102eaa97.png",
        "https://images.printify.com/5c8be09321a6ed0014663572.png"
      ]
    },
    {
      "id": 425,
      "title": "Mug 15oz",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5d0a08d647045f00097be6cd.png",
        "https://images.printify.com/5d0a07b547045f00083cd116.png",
        "https://images.printify.com/5cab36e06b4a8300124cea40.png",
        "https://images.printify.com/5cab21ef6b4a83000970c497.png"
      ]
    },
    {
      "id": 427,
      "title": "Magnets",
      "brand": "Generic brand",
      "model": "",
      "images": ["https://images.printify.com/5d0b831a47045f02006b0b7a.png", "https://images.printify.com/5ce534113aa847000600d60c.png"]
    },
    {
      "id": 429,
      "title": "Laptop Sleeve",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5d2325ebce7a9c07c221c926.png",
        "https://images.printify.com/5d23233fce7a9c07c105f393.png",
        "https://images.printify.com/5d232340ce7a9c07c04f9aa7.png",
        "https://images.printify.com/5d23233ece7a9c07c04f9aa3.png"
      ]
    },
    {
      "id": 430,
      "title": "Pin Buttons",
      "brand": "Generic brand",
      "model": "",
      "images": [
        "https://images.printify.com/5cfa4880cf4eed002673c8c2.png",
        "https://images.printify.com/5cfa46a8cf4eed00101202d9.png",
        "https://images.printify.com/5cfa0db8cf4eed00101202d2.png"
      ]
    }
  ]
}
```

### Products

#### `printify.products.getAll(shopId)`

- `GET /v1/shops/{shop_id}/products.json`
- Description: Retrieve a list of all products (default: 10, maximum: 100)

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

#### `printify.products.getOne(shopId, productId)`

- `GET /v1/shops/{shop_id}/products/{product_id}.json`
- Description: Retrieve a product

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

#### `printify.products.create(shop_id)`

- `POST /v1/shops/{shop_id}/products.json`
- Description: Create a new product

Request Body:

```json
{
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
```

Response:

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
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2189/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2190/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2191/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2192/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2193/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2194/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2195/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2196/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2197/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2198/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2199/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2200/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2201/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2202/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2187/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2188/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2189/product.jpg", "variant_ids": [45742], "position": "front", "is_default": true },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2190/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2191/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2192/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2193/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2194/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2195/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2196/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2197/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2198/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2199/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2200/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2201/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2202/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2187/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2188/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2189/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2190/product.jpg", "variant_ids": [45744], "position": "front", "is_default": true },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2191/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2192/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2193/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2194/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2195/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2196/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2197/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2198/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2199/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2200/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2201/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2202/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2187/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2188/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2189/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2190/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2191/product.jpg", "variant_ids": [45746], "position": "front", "is_default": true },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2192/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2193/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2194/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2195/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2196/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2197/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2198/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2199/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2200/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2201/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2202/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false }
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

#### `printify.products.updateOne(shopId, productId, data)`

- `PUT /v1/shops/{shop_id}/products/{product_id}.json`
- Description: Update a product

Request Body:

```json
{ "title": "Product" }
```

Response:

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
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2189/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2190/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2191/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2192/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2193/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2194/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2195/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2196/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2197/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2198/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2199/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2200/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2201/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2202/product.jpg", "variant_ids": [45740], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2187/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2188/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2189/product.jpg", "variant_ids": [45742], "position": "front", "is_default": true },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2190/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2191/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2192/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2193/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2194/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2195/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2196/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2197/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2198/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2199/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2200/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2201/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2202/product.jpg", "variant_ids": [45742], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2187/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2188/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2189/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2190/product.jpg", "variant_ids": [45744], "position": "front", "is_default": true },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2191/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2192/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2193/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2194/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2195/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2196/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2197/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2198/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2199/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2200/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2201/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2202/product.jpg", "variant_ids": [45744], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2187/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2188/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2189/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2190/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2191/product.jpg", "variant_ids": [45746], "position": "front", "is_default": true },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2192/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2193/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2194/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2195/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2196/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2197/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2198/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2199/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2200/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2201/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false },
    { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2202/product.jpg", "variant_ids": [45746], "position": "front", "is_default": false }
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

#### `printify.products.deleteOne(shopId, productId)`

- `DELETE /v1/shops/{shop_id}/products/{product_id}.json`
- Description: Delete a product

```json
{}
```

#### `printify.products.publishOne(shopId, productId)`

- `POST /v1/shops/{shop_id}/products/{product_id}/publish.json`
- Description: Publish a product

> **Note:** This does not implement any publishing action unless the Printify store is connected to one of our other supported sales channel integrations, if your store is custom
> and is subscribed to the product::pubish::started event, that event will be triggered and the properties that are set in the request body will be set in the event payload for
> your store to react to if implemented. The case is the same for attempting to publish a product from the Printify app. See
> [product events](https://developers.printify.com/#product-events) for reference.

Request Body:

```json
{ "title": true, "description": true, "images": true, "variants": true, "tags": true, "keyFeatures": true, "shipping_template": true }
```

Response:

```json
{}
```

#### `printify.products.setProductPublishSucceeded(shopId, productId)`

- `POST /v1/shops/{shop_id}/products/{product_id}/publishing_succeeded.json`
- Description: Set product publish status to succeeded. Removes the product from the locked status on the Printify app and sets it's external property with the handle you provide
  in the request body.

Request body:

```json
{ "external": { "id": "5941187eb8e7e37b3f0e62e5", "handle": "https://example.com/path/to/product" } }
```

Response:

```json
{}
```

#### `printify.products.setProductPublishFailed(shopId, productId)`

- `POST /v1/shops/{shop_id}/products/{product_id}/publishing_failed.json`
- Description: Set product publish status to failed. Removes the product from the locked status on the Printify app.

Request body:

```json
{ "reason": "Request timed out" }
```

Response:

```json
{}
```

#### `printify.products.notifyProductUnpublished(shopId, productId)`

- `POST /v1/shops/{shop_id}/products/{product_id}/unpublish.json`
- Description: Notify that a product has been unpublished

Response:

```json
{}
```

### Orders

#### `printify.orders.listOrders(shopId)`

<!-- TODO, combine the listOrders, w/ "page, limit, status, sku"? -->

- `GET /v1/shops/{shop_id}/orders.json`
- Description: Retrieve a list of orders

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

#### `printify.orders.listOrders(shopId, page)`

- `GET /v1/shops/{shop_id}/orders.json?page=2`
- Description: Retrieve a list of orders

```json
{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "Jack", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }
```

#### `printify.orders.listOrders(shopId, status)`

- `GET /v1/shops/{shop_id}/orders.json?status=fulfilled`
- Description: Retrieve a list of orders

```json
{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }
```

#### `printify.listOrders(shopId, sku)`

- `GET /v1/shops/{shop_id}/orders.json?sku=168699843`
- Description: Retrieve a list of orders

```json
{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }
```

#### `printify.orders.getOrder(shopId, orderId)`

- `GET /v1/shops/{shop_id}/orders/{order_id}.json`
- Description: Get order details by id

```json
{ "id": "5a96f649b2439217d070f507", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "Retie", "zip": "2470", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, }
```

#### `printify.orders.submitOrder(shopId, data)`

<!-- TODO, separate the publishOrder, w/ "byProductId, externalImage, existingSKU"? -->

- `POST /v1/shops/{shop_id}/orders.json`
- Description: Submit an order

Request Body:

```json
{
  "external_id": "2750e210-39bb-11e9-a503-452618153e4a",
  "label": "00012",
  "line_items": [{ "product_id": "5bfd0b66a342bcc9b5563216", "variant_id": 17887, "quantity": 1 }],
  "shipping_method": 1,
  "is_printify_express": false,
  "is_economy_shipping": false,
  "send_shipping_notification": false,
  "address_to": {
    "first_name": "John",
    "last_name": "Smith",
    "email": "example@msn.com",
    "phone": "0574 69 21 90",
    "country": "BE",
    "region": "",
    "address1": "ExampleBaan 121",
    "address2": "45",
    "city": "Retie",
    "zip": "2470"
  }
}
```

Alternate Request Body: Create a product with an order (simple image positioning)

```json
{
  "external_id": "2750e210-39bb-11e9-a503-452618153e5a",
  "label": "00012",
  "line_items": [{ "print_provider_id": 5, "blueprint_id": 9, "variant_id": 17887, "print_areas": { "front": "https://images.example.com/image.png" }, "quantity": 1 }],
  "shipping_method": 1,
  "is_printify_express": false,
  "is_economy_shipping": false,
  "send_shipping_notification": false,
  "address_to": {
    "first_name": "John",
    "last_name": "Smith",
    "email": "example@msn.com",
    "phone": "0574 69 21 90",
    "country": "BE",
    "region": "",
    "address1": "ExampleBaan 121",
    "address2": "45",
    "city": "Retie",
    "zip": "2470"
  }
}
```

Alternate Request Body: Create a product with an order (advanced image positioning)

```json
{
  "external_id": "2750e210-39bb-11e9-a503-452618153e5a",
  "label": "00012",
  "line_items": [
    {
      "print_provider_id": 5,
      "blueprint_id": 9,
      "variant_id": 17887,
      "print_areas": {
        "front": [
          { "src": "https://images.example.com/image.png", "scale": 0.15, "x": 0.8, "y": 0.34, "angle": 0.34 },
          { "src": "https://images.example.com/image.png", "scale": 1, "x": 0.5, "y": 0.5, "angle": 1 }
        ]
      },
      "quantity": 1
    }
  ],
  "shipping_method": 1,
  "is_printify_express": false,
  "is_economy_shipping": false,
  "send_shipping_notification": false,
  "address_to": {
    "first_name": "John",
    "last_name": "Smith",
    "email": "example@msn.com",
    "phone": "0574 69 21 90",
    "country": "BE",
    "region": "",
    "address1": "ExampleBaan 121",
    "address2": "45",
    "city": "Retie",
    "zip": "2470"
  }
}
```

Alternate Request Body: Create a product with an order (with specifying print details for printing on sides)

```json
{
  "external_id": "2750e210-39bb-11e9-a503-452618153e5a",
  "label": "00012",
  "line_items": [
    {
      "print_provider_id": 5,
      "blueprint_id": 9,
      "variant_id": 17887,
      "print_areas": { "front": "https://images.example.com/image.png" },
      "print_details": { "print_on_side": "mirror" },
      "quantity": 1
    }
  ],
  "shipping_method": 1,
  "is_printify_express": false,
  "is_economy_shipping": false,
  "send_shipping_notification": false,
  "address_to": {
    "first_name": "John",
    "last_name": "Smith",
    "email": "example@msn.com",
    "phone": "0574 69 21 90",
    "country": "BE",
    "region": "",
    "address1": "ExampleBaan 121",
    "address2": "45",
    "city": "Retie",
    "zip": "2470"
  }
}
```

Response:

```json
{ "id": "5a96f649b2439217d070f507" }
```

#### `printify.orders.submitExpressOrder(shopId, data)`

- `POST /v1/shops/{shop_id}/express.json`
- Description: Submit a Printify Express order

Request Body:

```json
{
  "external_id": "2750e210-39bb-11e9-a503-452618153e4a",
  "label": "00012",
  "line_items": [
    { "product_id": "5b05842f3921c9547531758d", "variant_id": 12359, "quantity": 1 },
    { "product_id": "5b05842f3921c34764fa478bc", "variant_id": 17887, "quantity": 1 }
  ],
  "shipping_method": 3,
  "send_shipping_notification": false,
  "address_to": {
    "first_name": "John",
    "last_name": "Smith",
    "email": "example@example.com",
    "phone": "0574 69 21 90",
    "country": "BE",
    "region": "",
    "address1": "ExampleBaan 121",
    "address2": "45",
    "city": "Retie",
    "zip": "2470"
  }
}
```

Response:

```json
{
  "data": [
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
}
```

#### `printify.orders.sendOrderToProduction(shopId, orderId)`

- `POST /v1/shops/{shop_id}/orders/{order_id}/send_to_production.json`
- Description: Send an existing order to production

Response:

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

#### `printify.orders.calculateShipping(shopId, data)`

- `POST /v1/shops/{shop_id}/orders/shipping.json`
- Description: Calculate the shipping cost of an order

Request Body:

```json
{
  "line_items": [
    { "product_id": "5bfd0b66a342bcc9b5563216", "variant_id": 17887, "quantity": 1 },
    { "print_provider_id": 5, "blueprint_id": 9, "variant_id": 17887, "quantity": 1 },
    { "sku": "MY-SKU", "quantity": 1 }
  ],
  "address_to": {
    "first_name": "John",
    "last_name": "Smith",
    "email": "example@msn.com",
    "phone": "0574 69 21 90",
    "country": "BE",
    "region": "",
    "address1": "ExampleBaan 121",
    "address2": "45",
    "city": "Retie",
    "zip": "2470"
  }
}
```

Response:

```json
{ "standard": 1000, "express": 5000, "priority": 5000, "printify_express": 799, "economy": 399 }
```

Response contains the shipping options that are defined in the following table:

| Code | Current Version      | Future Version |
| ---- | -------------------- | -------------- |
| 1    | **standard**         | standard       |
| 2    | **express**          | priority       |
| 3    | \*\*printify_express | express        |
| 4    | \*\*economy\*\*      | economy        |

> **Note:** The `printify_express` is a shipping option (as of July 2024) that will later in the future change its name to the `express`. Current express option will be renamed to
> the priority name.

#### `printify.orders.cancelUnpaidOrder(shopId, orderId)`

- `POST /v1/shops/{shop_id}/orders/{order_id}/cancel.json`
- Description: Cancel an unpaid order

Response:

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

### Uploads

#### `printify.uploads.listUploads()`

<!-- TODO, combine the getUploads, w/ "page, limit"? -->

- `GET /v1/uploads.json`
- Description: Retrieve a list of all uploaded images

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

#### `printify.uploads.listUploads(page)`

- `GET /v1/uploads.json?page=2`
- Description: Retrieve specific page from upload results

```json
{
  "current_page": 2,
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
  "last_page": 2,
  "last_page_url": "/?page=2",
  "next_page_url": null,
  "path": "/",
  "per_page": 10,
  "prev_page_url": 1,
  "to": 2,
  "total": 2
}
```

#### `printify.uploads.listUploads(limit)`

- `GET /v1/uploads.json?limit=1`
- Description: Retrieve limited upload results

```json
{ "current_page": 1, "data": [ { "id": "5e16d66791287a0006e522b2", "file_name": "png-images-logo-1.jpg", "height": 5979, "width": 17045, "size": 1138575, "mime_type": "image/png", "preview_url": "https://example.com/image-storage/uuid1", "upload_time": "2020-01-09 07:29:43" } ], "first_page_url": "/?page=1", "from": 1, "last_page": 2, "last_page_url": "/?page=2", "next_page_url": /?page=2, "path": "/", "per_page": 1, "prev_page_url": null, "to": 2, "total": 2 }
```

#### `printify.uploads.getImageById(imageId)`

- `GET /v1/uploads/{image_id}.json`
- Description: Retrieve an uploaded image by id

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

#### `printify.uploads.uploadImage(data)`

> Upload image files either via image URL or image file base64-encoded contents. We highly recommend using upload via image URL for files larger than 5MB.

- `POST /v1/uploads/images.json`
- Description: Upload an image

Request Body:

```json
{ "file_name": "1x1-ff00007f.png", "url": "http://png-pixel.com/1x1-ff00007f.png" }
```

Alternate Request Body: upload the image content in base64 format (we recommend use URLs, this will be deprecated in the future)

```json
{ "file_name": "image.png", "contents": "<base-64-encoded-content>" }
```

Response:

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

#### `printify.uploads.archiveImageUpload(imageId)`

- `POST /v1/uploads/{image_id}/archive.json`
- Description: Archive an uploaded image

Response:

```json
{}
```

### Webhooks

Use these endpoints to **configure** the Webhooks (for Printify [Events](https://developers.printify.com/#events)). You must implement your own server-side logic receive the actual
payloads

#### `printify.uploads.listWebhooks(shopId)`

- `GET /v1/shops/{shop_id}/webhooks.json`
- Description: Retrieve a list of webhooks

```json
[
  { "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" },
  { "topic": "order:updated", "url": "https://example.com/webhooks/order/updated", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec5" }
]
```

#### `printify.webhooks.create(webhookId)`

- `POST /v1/shops/{shop_id}/webhooks.json`
- Description: Create a new webhook

Request Body:

```json
{ "topic": "order:created", "url": "https://example.com/webhooks/order/created" }
```

Response:

```json
{ "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }
```

#### `printify.webhooks.updateOne(webhookId)`

- `PUT /v1/shops/{shop_id}/webhooks/{webhook_id}.json`
- Description: Modify a webhook

Request Body:

```json
{ "url": "https://example.com/callback/order/created" }
```

Response:

```json
{ "topic": "order:created", "url": "https://example.com/callback/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }
```

#### `printify.webhooks.deleteOne(webhookId)`

- `DELETE /v1/shops/{shop_id}/webhooks/{webhook_id}.json`
- Description: Delete a webhook

Response:

```json
{ "id": "5cb87a8cd490a2ccb256cec4" }
```
