export type PublishFailedData = {
  reason: string;
};

/**
- Set product publish status to failed. Removes the product from the locked status on the Printify app.
-
- @param {string} productId - The ID of the product to update
- @param {PublishFailedData} data - Data containing reason for the failure
- @returns {Promise<void>}
-
- @example
- const data = { reason: 'Request timed out' };
- await printify.products.setPublishFailed('productId', data);
- // Expected response: {} 
*/
const setPublishFailed = function (this: method, productId: string, data: PublishFailedData): Promise<void> {
  return this.request(`/v1/shops/${this.shopId}/products/${productId}/publishing_failed.json`, {
    method: 'POST',
    data: JSON.stringify(data),
  });
};

export default setPublishFailed;
