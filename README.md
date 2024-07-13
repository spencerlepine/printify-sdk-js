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
import Printify from 'spencerlepine-sdk-js';

// TODO - add snippet code
// Create a personal access token at https://developers.printify.com/#create-a-personal-access-token
const printify = new Printify({
  shopId: '123456', // global query by shop_id
  accessToken: '<ACCESS_TOKEN>',
});

// TODO, add something useful here
// submit an order
// send an order to production
const {
  data: { login },
} = await printify.something.getSomething();
console.log('Hello, %s', login);
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
