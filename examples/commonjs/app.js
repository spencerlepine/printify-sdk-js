const Printify = require('printify-sdk-js');

const printify = new Printify({
  shopId: '123456',
  accessToken: 'asdf0123asdf0123asdf0123',
  enableLogging: true,
});

printify.orders
  .list({ limit: 5, status: 'fulfilled' })
  .then(orders => console.log(orders))
  .catch(error => console.error(error));
