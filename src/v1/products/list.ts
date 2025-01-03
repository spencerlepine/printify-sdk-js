import { FetchDataFn } from '../../client';
import { Product } from '../types';

export type ListProductsResponse = {
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
};

/**
 * Retrieve a list of all products with optional pagination and limit.
 *
 * @param {{ page?: number; limit?: number }} [option] - pagination and limit options
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
  (fetchData: FetchDataFn, shopId: string) =>
  (options: { page?: number; limit?: number } = {}): Promise<ListProductsResponse> => {
    const { page, limit } = options;
    const queryParams = new URLSearchParams({
      ...(page !== undefined && { page: page.toString() }),
      ...(limit !== undefined && { limit: limit.toString() }),
    }).toString();

    const query = queryParams.toString() ? `?${queryParams.toString()}` : '';
    return fetchData(`/v1/shops/${shopId}/products.json${query}`, {
      method: 'GET',
    });
  };

export default list;
