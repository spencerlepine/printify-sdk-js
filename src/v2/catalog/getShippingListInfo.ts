export interface ShippingInfo {
  type: string;
  id: string;
  attributes: {
    name: string;
  };
}

export type GetShippingListInfoResponse = ShippingInfo[];

/**
 * Retrieve available shipping list information
 *
 * @param {string} blueprintId - The ID of the blueprint
 * @param {string} printProviderId - The ID of the print provider
 * @returns {Promise<GetShippingListInfoResponse>}
 *
 * @example
 * await printify.v2.catalog.getShippingListInfo('3', '8');
 * // Expected response: [
 * // [
 * //     {
 * //         "type": "shipping_method",
 * //         "id": "1",
 * //         "attributes": {
 * //             "name": "standard"
 * //         }
 * //     },
 * //     {
 * //         "type": "shipping_method",
 * //         "id": "2",
 * //         "attributes": {
 * //             "name": "priority"
 * //         }
 * //     },
 * //     {
 * //         "type": "shipping_method",
 * //         "id": "3",
 * //         "attributes": {
 * //             "name": "express"
 * //         }
 * //     },
 * //     {
 * //         "type": "shipping_method",
 * //         "id": "4",
 * //         "attributes": {
 * //             "name": "economy"
 * //         }
 * //     }
 * // ]
 */
const getShippingListInfo = function (this: method, blueprintId: string, printProviderId: string): Promise<GetShippingListInfoResponse> {
  return this.request(`/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping.json`, { method: 'GET' });
};

export default getShippingListInfo;
