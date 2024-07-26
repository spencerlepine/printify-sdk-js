import { FetchDataFunc } from '../printify';

export interface OrderAddress {
  first_name: string;
  last_name: string;
  region: string;
  address1: string;
  city: string;
  zip: string;
  email: string;
  phone: string;
  country: string;
  company: string;
}

export interface OrderItemMetadata {
  title: string;
  price: number;
  variant_label: string;
  sku: string;
  country: string;
}

export interface OrderItem {
  product_id: string;
  quantity: number;
  variant_id: number;
  print_provider_id: number;
  cost: number;
  shipping_cost: number;
  status: string;
  metadata: OrderItemMetadata;
  sent_to_production_at: string;
  fulfilled_at: string;
}

export interface OrderShipment {
  carrier: string;
  number: string;
  url: string;
  delivered_at: string;
}

export interface Order {
  id: string;
  address_to: OrderAddress;
  line_items: OrderItem[];
  metadata: {
    order_type: string;
    shop_order_id: number;
    shop_order_label: string;
    shop_fulfilled_at: string;
  };
  total_price: number;
  total_shipping: number;
  total_tax: number;
  status: string;
  shipping_method: number;
  is_printify_express: boolean;
  is_economy_shipping: boolean;
  shipments: OrderShipment[];
  created_at: string;
  sent_to_production_at: string;
  fulfilled_at: string;
  printify_connect: {
    url: string;
    id: string;
  };
}

export interface ListOrdersResponse {
  current_page: number;
  data: Order[];
}

export type ListOrdersFunc = (options?: { page?: number; limit?: number; status?: string; sku?: string }) => Promise<ListOrdersResponse>;

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
const listOrders =
  (fetchData: FetchDataFunc, shopId: string): ListOrdersFunc =>
  async (options = {}): Promise<ListOrdersResponse> => {
    const { page, limit, status, sku } = options;
    const queryParams = new URLSearchParams({
      ...(page !== undefined && { page: page.toString() }),
      ...(limit !== undefined && { limit: limit.toString() }),
      ...(status !== undefined && { status }),
      ...(sku !== undefined && { sku }),
    }).toString();

    return await fetchData(`/v1/shops/${shopId}/orders.json${queryParams ? `?${queryParams}` : ''}`, { method: 'GET' });
  };

export default listOrders;
