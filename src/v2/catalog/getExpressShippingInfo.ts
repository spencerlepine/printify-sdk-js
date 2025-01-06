import { ShippingInfoSpecific } from '../types';

export type GetExpressShippingInfoResponse = ShippingInfoSpecific;

/**
 * Retrieve express shipping method information
 *
 * @param {string} blueprintId - The ID of the blueprint
 * @param {string} printProviderId - The ID of the print provider
 * @returns {Promise<GetExpressShippingInfoResponse>}
 *
 * @example
 * await printify.v2.catalog.getExpressShippingInfo('3', '8');
 * // Expected response: [
 * // [
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
const getExpressShippingInfo = function (this: method, blueprintId: string, printProviderId: string): Promise<GetExpressShippingInfoResponse> {
  return this.request(`/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/express.json`, {
    method: 'GET',
  });
};

export default getExpressShippingInfo;
