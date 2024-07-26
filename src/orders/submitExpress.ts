import { FetchDataFunc } from '../printify';

export interface LineItem {
  product_id: string;
  variant_id: number;
  quantity: number;
}

export interface Address {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  region: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
}

export interface SubmitExpressData {
  external_id: string;
  label: string;
  line_items: LineItem[];
  shipping_method: number;
  send_shipping_notification: boolean;
  address_to: Address;
}

export interface LineItemResponse {
  product_id: string;
  quantity: number;
  variant_id: number;
  print_provider_id: number;
  cost: number;
  shipping_cost: number;
  status: string;
  metadata: {
    title: string;
    price: number;
    variant_label: string;
    sku: string;
    country: string;
  };
  sent_to_production_at: string;
  fulfilled_at: string | null;
}

export interface OrderResponse {
  type: string;
  id: string;
  attributes: {
    fulfilment_type: string;
    line_items: LineItemResponse[];
  };
}

export interface SubmitExpressResponse {
  data: OrderResponse[];
}

export type SubmitExpressFunc = (data: SubmitExpressData) => Promise<SubmitExpressResponse>;

/**
 * Submit a Printify Express order
 *
 * @param {SubmitExpressData} data - The data for the express order
 * @returns {Promise<SubmitExpressResponse>}
 *
 * @example
 * const data = {
 *   external_id: '2750e210-39bb-11e9-a503-452618153e4a',
 *   label: '00012',
 *   line_items: [
 *     { product_id: '5b05842f3921c9547531758d', variant_id: 12359, quantity: 1 },
 *     { product_id: '5b05842f3921c34764fa478bc', variant_id: 17887, quantity: 1 },
 *   ],
 *   shipping_method: 3,
 *   send_shipping_notification: false,
 *   address_to: {
 *     first_name: 'John',
 *     last_name: 'Smith',
 *     email: 'example@example.com',
 *     phone: '0574 69 21 90',
 *     country: 'BE',
 *     region: '',
 *     address1: 'ExampleBaan 121',
 *     address2: '45',
 *     city: 'Retie',
 *     zip: '2470',
 *   },
 * };
 * await printify.orders.submitExpress(data);
 * // Expected response: {
 *     data: [
 *         { type: "order", id: "5a96f649b2439217d070f508", ... },
 *         { type: "order", id: "5a96f649b2439597d020a9b4", ... }
 *     ]
 *  }
 */
const submitExpress =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (data: SubmitExpressData): Promise<SubmitExpressResponse> => {
    return await fetchData(`/v1/shops/${shopId}/express.json`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

export default submitExpress;
