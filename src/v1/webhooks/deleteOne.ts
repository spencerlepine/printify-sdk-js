export type DeleteWebhookResponse = {
  id: string;
};

/**
 * Delete a webhook
 *
 * @param {string} webhookId - The ID of the webhook to be deleted
 * @param {string} host - The hostname of the webhook to be deleted (optional)
 * @returns {Promise<DeleteWebhookResponse>}
 *
 * @example
 * const response = await printify.webhooks.deleteOne('5cb87a8cd490a2ccb256cec4');
 * // Expected response:
 * // {
 * //   "id": "5cb87a8cd490a2ccb256cec4"
 * // }
 */
const deleteOne = function (this: method, webhookId: string, host?: string): Promise<DeleteWebhookResponse> {
  const query = host ? `?host=${encodeURIComponent(host)}` : '';
  return this.request(`/v1/shops/${this.shopId}/webhooks/${webhookId}.json${query}`, {
    method: 'DELETE',
  });
};

export default deleteOne;
