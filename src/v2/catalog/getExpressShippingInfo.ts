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
 * // TODO v1.3.0
 */
const getExpressShippingInfo = function (this: method, blueprintId: string, printProviderId: string): Promise<GetExpressShippingInfoResponse> {
  return this.request(`/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/express.json`, {
    method: 'GET',
  });
};

export default getExpressShippingInfo;
