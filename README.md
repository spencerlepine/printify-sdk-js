# Printify SDK for JavaScript (Node.js)

The Printify SDK for Node.js. A basic JavaScript wrapper for the Printify REST API (v1). Guidelines and source endpoints can be found here:
[developers.printify.com](https://developers.printify.com/).

## Getting started

### Prerequisites

1. Printify API Token ([documentation](https://developers.printify.com/))

### Installation

```sh
npm install spencerlepine-sdk-js
```

## Usage

> ⚠️ For security purposes, this is intended only for server-side use, the API does not support CORS and will not process requests from a frontend application

```js
const Printify = require('spencerlepine-sdk-js');

const printify = new Printify({
  shopId: '16326523', // global query by shop_id
  accessToken: API_TOKEN,
});

(async () => {
  const result = await printify.orders.submit({
    /* order details */
  });
  console.log(result.id);
})();
```

## API

For the full documentation, please see [`API.md`](./docs/API.md)

- [Shops](./docs/API.md#shops) - `printify.shops.*`
- [Catalog](./docs/API.md#catalog) - `printify.catalog.*`
- [Products](./docs/API.md#products) - `printify.products.*`
- [Orders](./docs/API.md#orders) - `printify.orders.*`
- [Uploads](./docs/API.md#uploads) - `printify.uploads.*`
- [Webhooks](./docs/API.md#webhooks) - `printify.webhooks.*`

## Contributing

We welcome contributions from the community! If you're interested in contributing to this project, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
