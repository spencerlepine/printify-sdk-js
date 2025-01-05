import { ShippingInfoSpecific } from '../types';

export type GetEconomyShippingInfoResponse = ShippingInfoSpecific;

/**
 * Retrieve economy shipping method information
 *
 * @param {string} blueprintId - The ID of the blueprint
 * @param {string} printProviderId - The ID of the print provider
 * @returns {Promise<GetEconomyShippingInfoResponse>}
 *
 * @example
 * await printify.v2.catalog.getEconomyShippingInfo('3', '8');
 * // Expected response: [
 * // TODO v1.3.0
 */
const getEconomyShippingInfo = function (this: method, blueprintId: string, printProviderId: string): Promise<GetEconomyShippingInfoResponse> {
  return this.request(`/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/economy.json`, {
    method: 'GET',
  });
};

export default getEconomyShippingInfo;
