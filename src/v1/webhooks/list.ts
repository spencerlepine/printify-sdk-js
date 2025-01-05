import { Webhook } from '../types';

export type ListWebhooksResponse = Webhook[];

/**
 * Retrieve a list of webhooks
 *
 * @returns {Promise<ListWebhooksResponse>}
 *
 * @example
 * const webhooks = await printify.webhooks.list();
 * // Expected response:
 * // [
 * //   { "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" },
 * //   { "topic": "order:updated", "url": "https://example.com/webhooks/order/updated", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec5" }
 * // ]
 */
const list = function (this: method): Promise<ListWebhooksResponse> {
  return this.request(`/v1/shops/${this.shopId}/webhooks.json`, {
    method: 'GET',
  });
};

export default list;
