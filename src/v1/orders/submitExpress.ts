import { FetchDataFn } from '../../client';
import { Address, ExpressLineItem, LineItem } from '../types';

export interface SubmitExpressData {
  external_id: string;
  label: string;
  line_items: ExpressLineItem[];
  shipping_method: number;
  send_shipping_notification: boolean;
  address_to: Address;
}

export interface ExpressOrder {
  type: string;
  id: string;
  attributes: {
    fulfilment_type: string;
    line_items: LineItem[];
  };
}

export type SubmitExpressOrderResponse = {
  data: ExpressOrder[];
};

/**
 * Submit a Printify Express order
 *
 * @param {SubmitExpressData} data - The data for the express order
 * @returns {Promise<SubmitExpressOrderResponse>}
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
  (fetchData: FetchDataFn, shopId: string) =>
  (data: SubmitExpressData): Promise<SubmitExpressOrderResponse> => {
    return fetchData(`/v1/shops/${shopId}/express.json`, {
      method: 'POST',
      data: JSON.stringify(data),
    });
  };

export default submitExpress;
