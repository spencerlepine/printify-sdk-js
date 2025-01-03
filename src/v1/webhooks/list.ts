import { FetchDataFn } from '../../client';
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
const list = (fetchData: FetchDataFn, shopId: string) => (): Promise<ListWebhooksResponse> => {
  return fetchData(`/v1/shops/${shopId}/webhooks.json`, {
    method: 'GET',
  });
};

export default list;