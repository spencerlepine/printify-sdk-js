# Printify SDK for TypeScript (Node.js)

[![NPM Version](https://img.shields.io/npm/v/printify-sdk-js)](https://www.npmjs.com/package/printify-sdk-js)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) ![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)
![Project Status Badge](./.github/status-maintained-badge.svg)

The Printify Node SDK provides convenient access to the Printify API from applications written in server-side JavaScript.

Guidelines and source endpoints can be found here: [developers.printify.com](https://developers.printify.com).

## Documentation

See the [`API.md](./docs/API.md) docs

- [Shops](./docs/API.md#shops) - `printify.shops.*`
- [Catalog](./docs/API.md#catalog) - `printify.catalog.*`
- [Catalog V2](./docs/API.md#catalog-v2) - `printify.v2.catalog.*`
- [Products](./docs/API.md#products) - `printify.products.*`
- [Orders](./docs/API.md#orders) - `printify.orders.*`
- [Uploads](./docs/API.md#uploads) - `printify.uploads.*`
- [Webhooks](./docs/API.md#webhooks) - `printify.webhooks.*`

## Installation

```sh
npm install printify-sdk-js
# or
yarn add printify-sdk-js
# or
pnpm add printify-sdk-js
```

## Usage

The package needs to be configured with your account's Personal Access Token (create one [here](https://printify.com/app/account/api)).

```js
import Printify from 'printify-sdk-js';

const printify = new Printify({
  accessToken: process.env.PRINTIFY_API_TOKEN, // generate a token: https://printify.com/app/account/api
  shopId: '123456', // (optional) find using `printify.shops.list()`
  enableLogging: true,
});

const orders = await printify.orders.list({ limit: 5, status: 'fulfilled' });
console.log(orders); // { current_page: 1, data: [{ id: "5a9", address_to: {}, line_items: [], total_price: 2200, status: "fulfilled"  } ]
```

### Usage with TypeScript

```typescript
import Printify, { Webhook } from 'printify-sdk-js';

const printify = new Printify({
  accessToken: process.env.PRINTIFY_API_TOKEN,
  shopId: '123456',
});

const webhooks: Webhook[] = await printify.webhooks.list();
console.log(webhooks[0]); // { "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }
```

### Usage with CommonJS

```js
const Printify = require('printify-sdk-js');

const printify = new Printify({
  accessToken: process.env.PRINTIFY_API_TOKEN,
  shopId: '123456',
});

printify.orders
  .list({ limit: 5, status: 'fulfilled' })
  .then(orders => console.log(orders))
  .catch(error => console.error(error));
```

## Configuration

```js
import Printify from 'printify-sdk-js';

const printify = new Printify({
  accessToken: process.env.PRINTIFY_API_TOKEN,
  shopId: '123456',
  enableLogging: true,
  host: 'api.printify.com',
  timeout: 5000, // in ms
});
```

| Option          | Default              | Description                                                                                                             |
| --------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accessToken`   | `null`               | The API access token for authenticating requests. Generate one at [Printify API](https://printify.com/app/account/api). |
| `shopId`        | `null`               | (optional) Your personal shop ID. Can be found using `printify.shops.list()`.                                           |
| `enableLogging` | `true`               | (optional) Enables logging of API requests and errors. Enabled by default.                                              |
| `host`          | `'api.printify.com'` | (optional) The host for API requests.                                                                                   |
| `timeout`       | `5000`               | (optional) Request timeout in ms.                                                                                       |

## Development

```sh
yarn install
yarn test
```

> If you do not have yarn installed, you can get it with `npm install --global yarn`.

```sh
# (optional) test the bundle locally
cd examples/typescript && yarn && cd ../../
yarn build
rm -rf examples/typescript/node_modules/printify-sdk-js/dist && mv dist examples/typescript/node_modules/printify-sdk-js
cd examples/typescript
yarn start
```

## Contributing

We welcome contributions from the community! If you're interested in contributing to this project, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

## Disclaimer

This SDK is a third-party library and is not officially endorsed or maintained by Printify. It is provided "as is" without warranty of any kind. For official information and
guidelines on using the Printify API, please refer to the [Printify Developer Documentation](https://developers.printify.com/).

## License

[MIT](./LICENSE)
