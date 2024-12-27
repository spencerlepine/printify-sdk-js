import { FetchDataFunc } from '../client';

export interface Data {
  topic: string;
  url: string;
}

export interface CreateWebhookResponse {
  topic: string;
  url: string;
  shop_id: string;
  id: string;
}

export type CreateWebhookFunc = (data: Data) => Promise<CreateWebhookResponse>;

/**
 * Create a new webhook
 *
 * @param {Data} data - The webhook data to be sent in the request body
 * @returns {Promise<CreateWebhookResponse>} The created webhook response
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
  (fetchData: FetchDataFunc, shopId: string) =>
  async (data: Data): Promise<CreateWebhookResponse> => {
    const response = await fetchData(`/v1/shops/${shopId}/webhooks.json`, {
      method: 'POST',
      data: JSON.stringify(data),
    });
    return response;
  };

export default create;
