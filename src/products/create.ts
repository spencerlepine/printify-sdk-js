import { FetchDataFunc } from '../printify';

export interface Variant {
  id: number;
  price: number;
  is_enabled: boolean;
}

export interface PrintArea {
  variant_ids: number[];
  placeholders: {
    position: string;
    images: {
      id: string;
      x: number;
      y: number;
      scale: number;
      angle: number;
    }[];
  }[];
}

export interface CreateProductData {
  title: string;
  description: string;
  blueprint_id: number;
  print_provider_id: number;
  variants: Variant[];
  print_areas: PrintArea[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  tags: string[];
  options: Array<{
    name: string;
    type: string;
    values: Array<{
      id: number;
      title: string;
    }>;
  }>;
  variants: Array<{
    id: number;
    sku: string;
    cost: number;
    price: number;
    title: string;
    grams: number;
    is_enabled: boolean;
    is_default: boolean;
    is_available: boolean;
    is_printify_express_eligible: boolean;
    options: number[];
  }>;
  images: Array<{
    src: string;
    variant_ids: number[];
    position: string;
    is_default: boolean;
  }>;
  created_at: string;
  updated_at: string;
  visible: boolean;
  is_locked: boolean;
  is_printify_express_eligible: boolean;
  is_printify_express_enabled: boolean;
  is_economy_shipping_eligible: boolean;
  is_economy_shipping_enabled: boolean;
  blueprint_id: number;
  user_id: number;
  shop_id: number;
  print_provider_id: number;
  print_areas: Array<{
    variant_ids: number[];
    placeholders: Array<{
      position: string;
      images: Array<{
        id: string;
        name: string;
        type: string;
        height: number;
        width: number;
        x: number;
        y: number;
        scale: number;
        angle: number;
      }>;
    }>;
    background: string;
  }>;
  sales_channel_properties: any[];
}

export type CreateProductFunc = (data: CreateProductData) => Promise<Product>;

/**
 * Create a new product
 *
 * @param {CreateProductData} data - The data to create the new product with
 * @returns {Promise<Product>}
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
  (fetchData: FetchDataFunc, shopId: string) =>
  async (data: CreateProductData): Promise<Product> => {
    return await fetchData(`/v1/shops/${shopId}/products.json`, {
      method: 'POST',
      data: JSON.stringify(data),
    });
  };

export default create;
