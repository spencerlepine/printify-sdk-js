/**
- Notify that a product has been unpublished
-
- @param {string} productId - The ID of the product to notify
- @returns {Promise<void>}
-
- @example
- const productId = "5d39b159e7c48c000728c89f";
- await printify.products.notifyUnpublished(productId);
- // Expected response: {} 
*/
const notifyUnpublished = function (this: method, productId: string): Promise<void> {
  return this.request(`/v1/shops/${this.shopId}/products/${productId}/unpublish.json`, {
    method: 'POST',
  });
};

export default notifyUnpublished;
