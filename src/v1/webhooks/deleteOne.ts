export type DeleteWebhookResponse = {
  id: string;
};

/**
 * Delete a webhook
 *
 * @param {string} webhookId - The ID of the webhook to be deleted
 * @returns {Promise<DeleteWebhookResponse>}
 *
 * @example
 * const response = await printify.webhooks.deleteOne('5cb87a8cd490a2ccb256cec4');
 * // Expected response:
 * // {
 * //   "id": "5cb87a8cd490a2ccb256cec4"
 * // }
 */
const deleteOne = function (this: method, webhookId: string): Promise<DeleteWebhookResponse> {
  return this.request(`/v1/shops/${this.shopId}/webhooks/${webhookId}.json`, {
    method: 'DELETE',
  });
};

export default deleteOne;
