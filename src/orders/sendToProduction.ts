import { FetchDataFunc } from '../printify';

export interface Address {
  first_name: string;
  last_name: string;
  phone: string;
  country: string;
  region: string;
  address1: string;
  city: string;
  zip: string;
}

export interface LineItem {
  quantity: number;
  product_id: string;
  variant_id: number;
  print_provider_id: number;
  shipping_cost: number;
  cost: number;
  status: string;
  metadata: {
    title: string;
    price: number;
    variant_label: string;
    sku: string;
    country: string;
  };
}

export interface Metadata {
  order_type: string;
  shop_fulfilled_at: string;
}

export interface SendToProductionResponse {
  id: string;
  address_to: Address;
  line_items: LineItem[];
  metadata: Metadata;
  total_price: number;
  total_shipping: number;
  total_tax: number;
  status: string;
  shipping_method: number;
  is_printify_express: boolean;
  is_economy_shipping: boolean;
  created_at: string;
}

export type SendToProductionFunc = (orderId: string) => Promise<SendToProductionResponse>;

/**
 * Send an existing order to production
 *
 * @param {string} orderId - The ID of the order to be sent to production
 * @returns {Promise<SendToProductionResponse>}
 *
 * @example
 * const orderId = "5d65c6ac01b403000a5d24d3";
 * await printify.orders.sendToProduction(orderId);
 * // Expected response: { id: "5d65c6ac01b403000a5d24d3", ... }
 */
const sendToProduction =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (orderId: string): Promise<SendToProductionResponse> => {
    return await fetchData(`/v1/shops/${shopId}/orders/${orderId}/send_to_production.json`, {
      method: 'POST',
    });
  };

export default sendToProduction;
