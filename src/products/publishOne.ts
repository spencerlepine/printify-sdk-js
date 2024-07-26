// products/publishOne.ts

import { FetchDataFunc } from '../printify';

export interface PublishData {
  title: boolean;
  description: boolean;
  images: boolean;
  variants: boolean;
  tags: boolean;
  keyFeatures: boolean;
  shipping_template: boolean;
}

export type PublishProductFunc = (productId: string, data: PublishData) => Promise<Response>;

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
const publishOne =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (productId: string, data: PublishData): Promise<Response> => {
    return fetchData(`/v1/shops/${shopId}/products/${productId}/publish.json`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

export default publishOne;
