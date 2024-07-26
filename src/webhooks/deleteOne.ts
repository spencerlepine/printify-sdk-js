import { FetchDataFunc } from '../printify';

export interface DeleteWebhookResponse {
  id: string;
}

export type DeleteWebhookFunc = (webhookId: string) => Promise<DeleteWebhookResponse>;

/**
 * Delete a webhook
 *
 * @param {string} webhookId - The ID of the webhook to be deleted
 * @returns {Promise<DeleteWebhookResponse>} The deleted webhook response
 *
 * @example
 * const response = await printify.webhooks.deleteOne('5cb87a8cd490a2ccb256cec4');
 * // Expected response:
 * // {
 * //   "id": "5cb87a8cd490a2ccb256cec4"
 * // }
 */
const deleteOne =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (webhookId: string): Promise<DeleteWebhookResponse> => {
    const response = await fetchData(`/v1/shops/${shopId}/webhooks/${webhookId}.json`, {
      method: 'DELETE',
    });
    return response;
  };

export default deleteOne;
