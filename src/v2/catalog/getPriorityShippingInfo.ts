import { ShippingInfoSpecific } from '../types';

export type GetPriorityShippingInfoResponse = ShippingInfoSpecific;

/**
 * Retrieve priority shipping method information
 *
 * @param {string} blueprintId - The ID of the blueprint
 * @param {string} printProviderId - The ID of the print provider
 * @returns {Promise<GetPriorityShippingInfoResponse>}
 *
 * @example
 * await printify.v2.catalog.getPriorityShippingInfo('3', '8');
 * // Expected response: [
 * // TODO v1.3.0
 */
const getPriorityShippingInfo = function (this: method, blueprintId: string, printProviderId: string): Promise<GetPriorityShippingInfoResponse> {
  return this.request(`/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/priority.json`, {
    method: 'GET',
  });
};

export default getPriorityShippingInfo;
