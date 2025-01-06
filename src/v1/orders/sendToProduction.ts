import { Address, LineItem } from '../types';

export type SendOrderToProductionResponse = {
  id: string;
  address_to: Address;
  line_items: LineItem[];
  metadata: {
    order_type: string;
    shop_fulfilled_at: string;
  };
  total_price: number;
  total_shipping: number;
  total_tax: number;
  status: string;
  shipping_method: number;
  is_printify_express: boolean;
  is_economy_shipping: boolean;
  created_at: string;
};

/**
 * Send an existing order to production
 *
 * @param {string} orderId - The ID of the order to be sent to production
 * @returns {Promise<SendOrderToProductionResponse>}
 *
 * @example
 * const orderId = "5d65c6ac01b403000a5d24d3";
 * await printify.orders.sendToProduction(orderId);
 * // Expected response: { id: "5d65c6ac01b403000a5d24d3", ... }
 */
const sendToProduction = function (this: method, orderId: string): Promise<SendOrderToProductionResponse> {
  return this.request(`/v1/shops/${this.shopId}/orders/${orderId}/send_to_production.json`, {
    method: 'POST',
  });
};

export default sendToProduction;
