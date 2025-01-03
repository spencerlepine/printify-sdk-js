import { FetchDataFn } from '../../client';

/**
 * Disconnect a shop
 *
 * @param {string} shopId - The ID of the shop to disconnect
 * @returns {Promise<void>}
 *
 * @example
 * await printify.shops.deleteOne(); // defaults to "printify.shopId"
 * // Expected response: {}
 *
 * const customShopId = "67890";
 * await printify.shops.deleteOne(customShopId);
 */
const deleteOne =
  (fetchData: FetchDataFn, defaultShopId: string) =>
  (customShopId?: string): Promise<void> => {
    return fetchData(`/v1/shops/${customShopId || defaultShopId}/connection.json`, {
      method: 'DELETE',
    });
  };

export default deleteOne;
