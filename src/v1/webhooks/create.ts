import { FetchDataFn } from '../../client';
import { NewWebhook } from '../types';

export type CreateWebhookResponse = {
  topic: string;
  url: string;
  shop_id: string;
  id: string;
};

/**
 * Create a new webhook
 *
 * @param {NewWebhook} data - The webhook data to be sent in the request body
 * @returns {Promise<CreateWebhookResponse>}
 *
 * @example
 * const data = { topic: "order:created", url: "https://example.com/webhooks/order/created" };
 * const response = await printify.webhooks.create(data);
 * // Expected response:
 * // {
 * //   "topic": "order:created",
 * //   "url": "https://example.com/webhooks/order/created",
 * //   "shop_id": "1",
 * //   "id": "5cb87a8cd490a2ccb256cec4"
 * // }
 */
const create =
  (fetchData: FetchDataFn, shopId: string) =>
  (data: NewWebhook): Promise<CreateWebhookResponse> => {
    return fetchData(`/v1/shops/${shopId}/webhooks.json`, {
      method: 'POST',
      data: JSON.stringify(data),
    });
  };

export default create;
