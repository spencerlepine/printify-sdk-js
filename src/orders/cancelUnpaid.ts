import { FetchDataFunc } from '../printify';

export interface Address {
  first_name: string;
  last_name: string;
  email: string;
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
    variant_label: string;
    sku: string;
    country: string;
  };
}

export interface Metadata {
  order_type: string;
  shop_order_id: string;
  shop_order_label: string;
  shop_fulfilled_at: string;
}

export interface CancelUnpaidResponse {
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

export type CancelUnpaidFunc = (orderId: string) => Promise<CancelUnpaidResponse>;

/**
 * Cancel an unpaid order. Status must be "on-hold" or "payment-not-received"
 *
 * @param {string} orderId - The ID of the order to be canceled
 * @returns {Promise<CancelUnpaidResponse>}
 *
 * @example
 * const orderId = '5dee261dc400914833007902';
 * const response = await printify.orders.cancelUnpaid(orderId);
 * // Expected response: {
 * //   id: "5dee261dc400914833007902",
 * //   address_to: {
 * //     first_name: "John",
 * //     last_name: "Smith",
 * //     email: "example@msn.com",
 * //     country: "United States",
 * //     region: "CA",
 * //     address1: "31677 Virginia Way",
 * //     city: "Laguna Beach",
 * //     zip: "92653"
 * //   },
 * //   line_items: [
 * //     {
 * //       quantity: 1,
 * //       product_id: "5de6593ebff03b5313567d22",
 * //       variant_id: 34509,
 * //       print_provider_id: 6,
 * //       shipping_cost: 450,
 * //       cost: 0,
 * //       status: "canceled",
 * //       metadata: {
 * //         title: "Men's Organic Tee - Product 1",
 * //         variant_label: "S / Red",
 * //         sku: "3640",
 * //         country: "United Kingdom"
 * //       }
 * //     }
 * //   ],
 * //   metadata: {
 * //     order_type: "api",
 * //     shop_order_id: "2750e210-39bb-11e9-a503-452618153e4a",
 * //     shop_order_label: "2750e210-39bb-11e9-a503-452618153e4a",
 * //     shop_fulfilled_at: "1970-01-01 00:00:00+00:00"
 * //   },
 * //   total_price: 0,
 * //   total_shipping: 0,
 * //   total_tax: 0,
 * //   status: "canceled",
 * //   shipping_method: 1,
 * //   is_printify_express: false,
 * //   is_economy_shipping: false,
 * //   created_at: "2019-12-09 10:46:53+00:00"
 * // }
 */
const cancelUnpaid =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (orderId: string): Promise<CancelUnpaidResponse> => {
    return await fetchData(`/v1/shops/${shopId}/orders/${orderId}/cancel.json`, { method: 'POST' });
  };

export default cancelUnpaid;
