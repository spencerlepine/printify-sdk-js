import Printify from 'printify-sdk-js';
import type { ListWebhooksResponse, Webhook } from 'printify-sdk-js';

const printify = new Printify({
  shopId: '123456',
  accessToken: process.env.PRINTIFY_API_TOKEN,
  enableLogging: true,
});

(async () => {
  const result: ListWebhooksResponse = await printify.webhooks.list();
  const webhook: Webhook = result[0];
  console.log(webhook); // { "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }
})();
