import { FetchDataFn } from '../../client';
import { Product, UpdateProductData } from '../types';

export type UpdateProductResponse = Product;

/**
 * Update a product
 *
 * @param {string} productId - The ID of the product to be updated
 * @param {UpdateProductData} data - The data to be sent with the update request
 * @returns {Promise<UpdateProductResponse>}
 *
 * @example
 * const data = { title: 'Product' };
 * await printify.products.updateOne('productId', data);
 * // Expected response: {
 * //   "id": "5d39b159e7c48c000728c89f",
 * //   "title": "Mug 11oz",
 * //   "description": "<desc>",
 * //   "options": [],
 * //   "variants": [],
 * //   "images": [],
 * //   "created_at": "2019-07-25 13:40:41+00:00",
 * //   "updated_at": "2019-07-25 13:40:59+00:00",
 * //   "blueprint_id": 68,
 * //   "user_id": 1337,
 * //   "shop_id": 1337,
 * //   "print_provider_id": 9,
 * //   "print_areas": [],
 * // }
 */

const updateOne =
  (fetchData: FetchDataFn, shopId: string) =>
  (productId: string, data: UpdateProductData): Promise<UpdateProductResponse> => {
    return fetchData(`/v1/shops/${shopId}/products/${productId}.json`, {
      method: 'PUT',
      data: JSON.stringify(data),
    });
  };

export default updateOne;
