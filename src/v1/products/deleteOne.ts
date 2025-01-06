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
const deleteOne = function (this: method, productId: string): Promise<void> {
  return this.request(`/v1/shops/${this.shopId}/products/${productId}.json`, {
    method: 'DELETE',
  });
};

export default deleteOne;
