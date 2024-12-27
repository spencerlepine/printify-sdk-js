import { FetchDataFunc } from '../client';

export interface Address {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  region: string;
  address1: string;
  address2?: string;
  city: string;
  zip: string;
}

export interface PrintArea {
  front?: string | { src: string; scale: number; x: number; y: number; angle: number }[];
  back?: string | { src: string; scale: number; x: number; y: number; angle: number }[];
}

export interface PrintDetails {
  print_on_side?: string;
}

export interface LineItem {
  product_id?: string;
  print_provider_id?: number;
  blueprint_id?: number;
  variant_id?: number;
  print_areas?: PrintArea;
  print_details?: PrintDetails;
  sku?: string;
  quantity: number;
}

export interface SubmitOrderData {
  external_id: string;
  label: string;
  line_items: LineItem[];
  shipping_method: number;
  is_printify_express: boolean;
  is_economy_shipping: boolean;
  send_shipping_notification: boolean;
  address_to: Address;
}

export interface SubmitOrderResponse {
  id: string;
}

export type SubmitOrderFunc = (data: SubmitOrderData) => Promise<SubmitOrderResponse>;

/**
 * Submit an order (this creates a draft, you will send to production separately)
 *
 * @param {SubmitOrderData} data - The order data to be submitted
 * @returns {Promise<SubmitOrderResponse>}
 *
 * @example
 * const data = {
 *   external_id: '2750e210-39bb-11e9-a503-452618153e4a',
 *   label: '00012',
 *   line_items: [{ product_id: '5bfd0b66a342bcc9b5563216', variant_id: 17887, quantity: 1 }],
 *   shipping_method: 1,
 *   is_printify_express: false,
 *   is_economy_shipping: false,
 *   send_shipping_notification: false,
 *   address_to: {
 *     first_name: 'John',
 *     last_name: 'Smith',
 *     email: 'example@msn.com',
 *     phone: '0574 69 21 90',
 *     country: 'BE',
 *     region: '',
 *     address1: 'ExampleBaan 121',
 *     address2: '45',
 *     city: 'Retie',
 *     zip: '2470',
 *   },
 * };
 * const response = await printify.orders.submit(data);
 * // Expected response: { id: "5a96f649b2439217d070f507" }
 */
const submit =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (data: SubmitOrderData): Promise<SubmitOrderResponse> => {
    return await fetchData(`/v1/shops/${shopId}/orders.json`, {
      method: 'POST',
      data: JSON.stringify(data),
    });
  };

export default submit;
