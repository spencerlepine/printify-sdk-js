import { Order } from '../types';

export interface ListOrdersResponse {
  current_page: number;
  data: Order[];
}

/**
 * Retrieve a list of orders
 *
 * @param {number} page - The page number of orders to retrieve
 * @returns {Promise<ListOrdersResponse>}
 *
 * @example
 * await printify.orders.list();
 * // Expected response: {
 *     current_page: 2,
 *     data: [ { id: "5a96f649b2439217 } ]
 * }
 * printify.orders.list({ page: 2 });
 * printify.orders.list({ limit: 5 });
 * printify.orders.list({ status: "fulfilled" });
 * printify.orders.list({ sku: "168699843" });
 */
const list = function (this: method, options: { page?: number; limit?: number; status?: string; sku?: string } = {}): Promise<ListOrdersResponse> {
  const { page, limit, status, sku } = options;
  const queryParams = new URLSearchParams({
    ...(page !== undefined && { page: page.toString() }),
    ...(limit !== undefined && { limit: limit.toString() }),
    ...(status !== undefined && { status }),
    ...(sku !== undefined && { sku }),
  }).toString();

  return this.request(`/v1/shops/${this.shopId}/orders.json${queryParams ? `?${queryParams}` : ''}`, { method: 'GET' });
};

export default list;
