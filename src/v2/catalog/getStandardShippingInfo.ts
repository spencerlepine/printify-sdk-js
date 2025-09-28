import { ShippingInfoSpecific } from '../types';

export type GetStandardShippingInfoResponse = {
  data: ShippingInfoSpecific[];
};

/**
 * Retrieve standard shipping method information
 *
 * @param {string} blueprintId - The ID of the blueprint
 * @param {string} printProviderId - The ID of the print provider
 * @returns {Promise<GetShippingListInfoResponse>}
 *
 * @example
 * await printify.v2.catalog.getShippingListInfo('3', '8');
 * // Expected response: [
 * //     {
 * //         "type": "variant_shipping_standard_us",
 * //         "id": "23494",
 * //         "attributes": {
 * //             "shippingType": "standard",
 * //             "country": {
 * //                 "code": "US"
 * //             },
 * //             "variantId": 23494,
 * //             "shippingPlanId": "65a7c0825b50fcd56a018e02",
 * //             "handlingTime": {
 * //                 "from": 4,
 * //                 "to": 8
 * //             },
 * //             "shippingCost": {
 * //                 "firstItem": {
 * //                     "amount": 399,
 * //                     "currency": "USD"
 * //                 },
 * //                 "additionalItems": {
 * //                     "amount": 219,
 * //                     "currency": "USD"
 * //                 }
 * //             }
 * //         }
 * //     }
 * // ]
 */
const getStandardShippingInfo = function (this: method, blueprintId: string, printProviderId: string): Promise<GetStandardShippingInfoResponse> {
  return this.request(`/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/standard.json`, { method: 'GET' });
};

export default getStandardShippingInfo;
