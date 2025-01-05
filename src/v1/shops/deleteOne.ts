/**
 * Disconnect a shop
 *
 * @param {string} shopId - The ID of the shop to disconnect
 * @returns {Promise<void>}
 *
 * @example
 * const customShopId = "67890";
 * await printify.shops.deleteOne(customShopId);
 * // Expected response: {}
 */
const deleteOne = function (this: method, customShopId?: string): Promise<void> {
  return this.request(`/v1/shops/${customShopId || this.shopId}/connection.json`, {
    method: 'DELETE',
  });
};

export default deleteOne;
