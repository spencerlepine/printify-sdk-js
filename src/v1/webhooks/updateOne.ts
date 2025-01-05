export type UpdateWebhookResponse = {
  topic: string;
  url: string;
  shop_id: string;
  id: string;
};

/**
 * Modify a webhook
 *
 * @param {string} webhookId - The ID of the webhook to be updated
 * @param {{ url: string }} data - The data to update the webhook with
 * @returns {Promise<UpdateWebhookResponse>}
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
const updateOne = function (this: method, webhookId: string, data: { url: string }): Promise<UpdateWebhookResponse> {
  return this.request(`/v1/shops/${this.shopId}/webhooks/${webhookId}.json`, {
    method: 'PUT',
    data: JSON.stringify(data),
  });
};

export default updateOne;
