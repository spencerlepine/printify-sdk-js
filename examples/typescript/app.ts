import Printify, { Webhook, ShippingInfo } from 'printify-sdk-js';

const printify = new Printify({
  shopId: '123456',
  accessToken: process.env.PRINTIFY_API_TOKEN,
  enableLogging: true,
});

// v1 endpoint
(async () => {
  const webhooks: Webhook[] = await printify.webhooks.list();
  console.log(webhooks[0]); // { "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }
})();

// v2 endpoint
(async () => {
  const shippingInfo: ShippingInfo[] = await printify.v2.catalog.getShippingListInfo('1', '2');
  console.log(shippingInfo); // [ { type: 'shipping_method', id: '2', attributes: [Object] } ]
})();
