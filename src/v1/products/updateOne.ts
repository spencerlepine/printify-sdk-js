import { Product, UpdateProductData } from '../types';

export type UpdateProductResponse = Product;

/**
 * Update a product
 *
 * A product can be updated partially or as a whole document. Prefer a partial
 * update: send only the fields you are changing.
 *
 * When sending a whole document back (e.g. a product from `products.getOne()`):
 * - All variants must be present if `variants` is included.
 * - Printify returns `print_areas[].placeholders[]` with an empty `images` array
 *   for placements that carry no artwork, but rejects those on update with
 *   `8150 - The print_areas.N.placeholders.N.images field is required.` Drop
 *   those placeholders, or omit `print_areas` when you are not changing artwork.
 *
 * @param {string} productId - The ID of the product to be updated
 * @param {UpdateProductData} data - The data to be sent with the update request
 * @returns {Promise<UpdateProductResponse>}
 *
 * @example
 * // Partial update (recommended)
 * await printify.products.updateOne('productId', { title: 'Product' });
 *
 * @example
 * // Repricing: send every variant, but nothing else
 * const product = await printify.products.getOne('productId');
 * await printify.products.updateOne(product.id, {
 *   variants: product.variants.map(v => ({ ...v, price: v.price + 100 })),
 * });
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

const updateOne = function (this: method, productId: string, data: UpdateProductData): Promise<UpdateProductResponse> {
  return this.request(`/v1/shops/${this.shopId}/products/${productId}.json`, {
    method: 'PUT',
    data: JSON.stringify(data),
  });
};

export default updateOne;
