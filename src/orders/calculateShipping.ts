import { FetchDataFunc } from '../printify';

export interface LineItem {
  product_id?: string;
  variant_id?: number;
  quantity: number;
  print_provider_id?: number;
  blueprint_id?: number;
  sku?: string;
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

export interface ShippingData {
  line_items: LineItem[];
  address_to: Address;
}

export interface ShippingResponse {
  standard: number;
  express: number;
  priority: number;
  printify_express: number;
  economy: number;
}

export type CalculateShippingFunc = (data: ShippingData) => Promise<ShippingResponse>;

/**
 * Calculate the shipping cost of an order
 *
 * @param {ShippingData} data - The data required to calculate shipping
 * @returns {Promise<ShippingResponse>}
 *
 * @example
 * const data = {
 *   line_items: [
 *     { product_id: '5bfd0b66a342bcc9b5563216', variant_id: 17887, quantity: 1 },
 *     { print_provider_id: 5, blueprint_id: 9, variant_id: 17887, quantity: 1 },
 *     { sku: 'MY-SKU', quantity: 1 },
 *   ],
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
 * const shippingCosts = await printify.orders.calculateShipping(data);
 * // Expected response: { standard: 1000, express: 5000, priority: 5000, printify_express: 799, economy: 399 }
 */
const calculateShipping =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (data: ShippingData): Promise<ShippingResponse> => {
    return await fetchData(`/v1/shops/${shopId}/orders/shipping.json`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

export default calculateShipping;
