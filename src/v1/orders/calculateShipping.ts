import { CalculateShippingData } from '../types';

export type CalculateShippingResponse = {
  standard: number;
  express: number;
  priority: number;
  printify_express: number;
  economy: number;
};

/**
 * Calculate the shipping cost of an order
 *
 * @param {CalculateShippingData} data - The data required to calculate shipping
 * @returns {Promise<CalculateShippingResponse>}
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
const calculateShipping = function (this: method, data: CalculateShippingData): Promise<CalculateShippingResponse> {
  return this.request(`/v1/shops/${this.shopId}/orders/shipping.json`, {
    method: 'POST',
    data: JSON.stringify(data),
  });
};

export default calculateShipping;
