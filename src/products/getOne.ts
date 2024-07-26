import { FetchDataFunc } from '../printify';

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

export type GetProductFunc = (productId: string) => Promise<Product>;

/**
 * Retrieve a product
 *
 * @param {string} productId  *The ID of the product to retrieve
 * @returns {Promise<Product>}
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
const getOne =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (productId: string): Promise<Product> => {
    return await fetchData(`/v1/shops/${shopId}/products/${productId}.json`, {
      method: 'GET',
    });
  };

export default getOne;
