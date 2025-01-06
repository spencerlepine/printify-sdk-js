import { Product } from '../types';

export type GetProductResponse = Product;

/**
 * Retrieve a product
 *
 * @param {string} productId  *The ID of the product to retrieve
 * @returns {Promise<GetProductResponse>}
 *
 * @example
 * const productId = "5d39b159e7c48c000728c89f";
 * const product = await printify.products.getOne(productId);
 * Expected response: {
 *   "id": "5d39b159e7c48c000728c89f",
 *   "title": "Mug 11oz",
 *   "description": "<desc>",
 *   "options": [],
 *   "variants": [],
 *   "images": [],
 *   "created_at": "2019-07-25 13:40:41+00:00",
 *   "updated_at": "2019-07-25 13:40:59+00:00",
 *   "blueprint_id": 68,
 *   "user_id": 1337,
 *   "shop_id": 1337,
 *   "print_provider_id": 9,
 *   "print_areas": [],
 * }
 */
const getOne = function (this: method, productId: string): Promise<GetProductResponse> {
  return this.request(`/v1/shops/${this.shopId}/products/${productId}.json`, {
    method: 'GET',
  });
};

export default getOne;
