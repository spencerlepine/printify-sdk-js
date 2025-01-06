export interface ProductPublishData {
  title: boolean;
  description: boolean;
  images: boolean;
  variants: boolean;
  tags: boolean;
  keyFeatures: boolean;
  shipping_template: boolean;
}

/**
 * Publish a product
 *
 * @param {string} productId - The ID of the product to be published
 * @param {PublishData} data - The data to be sent with the publish request
 * @returns {Promise<void>}
 *
 * @example
 * const data = { title: true, description: true, images: true, variants: true, tags: true, keyFeatures: true, shipping_template: true };
 * await printify.products.publishOne('productId', data);
 * // Expected response: {}
 */
const publishOne = function (this: method, productId: string, data: ProductPublishData): Promise<void> {
  return this.request(`/v1/shops/${this.shopId}/products/${productId}/publish.json`, {
    method: 'POST',
    data: JSON.stringify(data),
  });
};

export default publishOne;
