import { FetchDataFn } from '../../client';
import { NewProduct, Product } from '../types';

export type CreateProductResponse = Product;

/**
 * Create a new product
 *
 * @param {NewProduct} data - The data to create the new product with
 * @returns {Promise<CreateProductResponse>}
 *
 * @example
 * const data = {
 *   title: 'Product',
 *   description: 'Good product',
 *   blueprint_id: 384,
 *   print_provider_id: 1,
 *   variants: [
 *     { id: 45740, price: 400, is_enabled: true },
 *     { id: 45742, price: 400, is_enabled: true },
 *     { id: 45744, price: 400, is_enabled: false },
 *     { id: 45746, price: 400, is_enabled: false }
 *   ],
 *   print_areas: [
 *     {
 *       variant_ids: [45740, 45742, 45744, 45746],
 *       placeholders: [{ position: 'front', images: [{ id: '5d15ca551163cde90d7b2203', x: 0.5, y: 0.5, scale: 1, angle: 0 }] }]
 *     }
 *   ]
 * };
 * await printify.products.create(data);
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
const create =
  (fetchData: FetchDataFn, shopId: string) =>
  (data: NewProduct): Promise<CreateProductResponse> => {
    return fetchData(`/v1/shops/${shopId}/products.json`, {
      method: 'POST',
      data: JSON.stringify(data),
    });
  };

export default create;
