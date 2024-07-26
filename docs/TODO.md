# DEVELOPMENT

- [ ] GENERATE CODE FROM DOC (orders)
- [ ] GENERATE CODE FROM DOC (products)
- [ ] Pass remaining unit tests
- [BEFORE RELEASE] Replace all spencerlepine-sdk-js
- [BEFORE RELEASE] any remaining TODOs

## EXAMPLES

- https://github.com/Mainostoimisto-Seven-1/printify-nodejs/tree/main/src
- https://github.com/jacob-hyde/Printify-PHP-SDK
- https://github.com/nasa8x/printify-api

## Commits

- release: initial release
- test: add full unit tests coverage
- docs: add documentation
- refactor: improve type declarations

## TODO

// TODO - update orders.list to object options // TODO - update products.list to object options printify.orders.list({ page: 2 }); printify.orders.list({ limit: 2 });
printify.orders.list({ status: 'fulfilled' }); printify.orders.list({ sku: '1686998' });
