# Printify SDK for TypeScript (Node.js)

![NPM Version](https://img.shields.io/npm/v/printify-sdk-js) ![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)
![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)

Printify SDK for Node.js. A basic TypeScript wrapper for the Printify REST API (v1). Guidelines and source endpoints can be found here:
[developers.printify.com](https://developers.printify.com).

## Getting started

### Prerequisites

1. Printify API Token ([documentation](https://developers.printify.com))

### Installation

```sh
npm install printify-sdk-js
```

## Usage

> ⚠️ For security purposes, this is intended only for server-side use, the API does not support CORS and will not process requests from a frontend application

```js
import Printify from 'printify-sdk-js';
// const Printify = require('printify-sdk-js'); // CommonJS

const printify = new Printify({
  shopId: '123456', // global query by shop_id
  accessToken: process.env.API_TOKEN,
});

(async () => {
  const data = {/* ... */};
  const result = await printify.orders.submit(data);

  console.log(result); // { "id": "5a96f649b2439217d070f507" }
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

## Disclaimer

This SDK is a third-party library and is not officially endorsed or maintained by Printify. It is provided "as is" without warranty of any kind. For official information and
guidelines on using the Printify API, please refer to the [Printify Developer Documentation](https://developers.printify.com/).

## License

[MIT](./LICENSE)
