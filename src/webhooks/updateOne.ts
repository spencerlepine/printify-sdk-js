import { FetchDataFunc } from '../printify';

export interface UpdateData {
  url: string;
}

export interface UpdateWebhookResponse {
  topic: string;
  url: string;
  shop_id: string;
  id: string;
}

export type UpdateWebhookFunc = (webhookId: string, data: UpdateData) => Promise<UpdateWebhookResponse>;

/**
 * Modify a webhook
 *
 * @param {string} webhookId - The ID of the webhook to be updated
 * @param {UpdateData} data - The data to update the webhook with
 * @returns {Promise<UpdateWebhookResponse>} The updated webhook response
 *
 * @example
 * const data = { url: 'https://example.com/callback/order/created' };
 * const response = await printify.webhooks.updateOne('5cb87a8cd490a2ccb256cec4', data);
 * // Expected response:
 * // {
 * //   "topic": "order:created",
 * //   "url": "https://example.com/callback/order/created",
 * //   "shop_id": "1",
 * //   "id": "5cb87a8cd490a2ccb256cec4"
 * // }
 */
const updateOne =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (webhookId: string, data: UpdateData): Promise<UpdateWebhookResponse> => {
    const response = await fetchData(`/v1/shops/${shopId}/webhooks/${webhookId}.json`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return response;
  };

export default updateOne;
