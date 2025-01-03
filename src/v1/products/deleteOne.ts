import { FetchDataFn } from '../../client';

/**
 * Delete a product
 *
 * @param {string} productId - The ID of the product to be deleted
 * @returns {Promise<void>}
 *
 * @example
 * const productId = "5cb87a8cd490a2ccb256cec4";
 * await printify.products.deleteOne(productId);
 * // Expected response: {}
 */
const deleteOne =
  (fetchData: FetchDataFn, shopId: string) =>
  (productId: string): Promise<void> => {
    return fetchData(`/v1/shops/${shopId}/products/${productId}.json`, {
      method: 'DELETE',
    });
  };

export default deleteOne;
