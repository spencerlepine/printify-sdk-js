import { ShippingProfile } from '../types';

export type GetVariantShippingResponse = {
  handling_time: { value: number; unit: string };
  profiles: ShippingProfile[];
};

/**
 * Retrieve the shipping information for all variants of a blueprint from a specific print provider
 *
 * @param {string} blueprintId - The ID of the blueprint
 * @param {string} printProviderId - The ID of the print provider
 * @returns {Promise<GetVariantShippingResponse>}
 *
 * @example
 * const blueprintId = "3";
 * const printProviderId = "8";
 * const shipping = await printify.catalog.getVariantShipping(blueprintId, printProviderId);
 * console.log(shipping);
 * // Expected response:
 * // {
 * //   "handling_time": { "value": 30, "unit": "day" },
 * //   "profiles": [
 * //     { "variant_ids": [ list of variant IDs ], "first_item": { "cost": 450, "currency": "USD" }, "additional_items": { "cost": 0, "currency": "USD" }, "countries": ["US"] },
 * //     { "variant_ids": [ list of variant IDs ], "first_item": { "cost": 650, "currency": "USD" }, "additional_items": { "cost": 0, "currency": "USD" }, "countries": [ list of countries ] },
 * //     { "variant_ids": [ list of variant IDs ], "first_item": { "cost": 1100, "currency": "USD" }, "additional_items": { "cost": 0, "currency": "USD" }, "countries": ["REST_OF_THE_WORLD"] }
 * //   ]
 * // }
 */
const getVariantShipping = function (this: method, blueprintId: string, printProviderId: string): Promise<GetVariantShippingResponse> {
  return this.request(`/v1/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping.json`, { method: 'GET' });
};

export default getVariantShipping;
