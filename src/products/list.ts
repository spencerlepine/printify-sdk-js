import { FetchDataFunc } from '../client';

export interface Product {
  id: string;
  title: string;
  description: string;
  tags: string[];
  options: Array<{ name: string; type: string; values: Array<{ id: number; title: string }> }>;
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

export interface ListProductsResponse {
  current_page: number;
  data: Product[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export type ListProductsFunc = (options?: { page?: number; limit?: number }) => Promise<ListProductsResponse>;

/**
 * Retrieve a list of all products with optional pagination and limit.
 *
 * @param {number} [page] - Page number
 * @param {number} [limit] - Results per page
 * @returns {Promise<ListProductsResponse>}
 *
 * @example
 * await printify.products.list();
 * await printify.products.list({ page: 2 });
 * await printify.products.list({ limit: 5 });
 *
 * // Expected response:
 * // {
 * //   "current_page": 2,
 * //   "data": [ { "id": "5d39b159e7c48c000728c89f", "title": "Mug 11oz", ... }, ... ],
 * //   "total": 22
 * // }
 */
const list =
  (fetchData: FetchDataFunc, shopId: string): ListProductsFunc =>
  async (options = {}): Promise<ListProductsResponse> => {
    const { page, limit } = options;
    const queryParams = new URLSearchParams({
      ...(page !== undefined && { page: page.toString() }),
      ...(limit !== undefined && { limit: limit.toString() }),
    }).toString();

    const query = queryParams.toString() ? `?${queryParams.toString()}` : '';
    const response = await fetchData(`/v1/shops/${shopId}/products.json${query}`, {
      method: 'GET',
    });
    return response;
  };

export default list;
