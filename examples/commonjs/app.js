const Printify = require('printify-sdk-js');

const printify = new Printify({
  shopId: '123456',
  accessToken: process.env.PRINTIFY_API_TOKEN, // UPDATE ME
  enableLogging: true,
});

printify.orders
  .list({ limit: 5, status: 'fulfilled' })
  .then(orders => console.log(orders))
  .catch(error => console.error(error));
