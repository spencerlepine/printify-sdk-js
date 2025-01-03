import { FetchDataFn } from '../../client';
import { Variant } from '../types';

export type GetBlueprintVariantsResponse = {
  id: number;
  title: string;
  variants: Variant[];
};

/**
 * Retrieve a list of all variants of a blueprint from a specific print provider
 *
 * @param {string} blueprintId - The ID of the blueprint
 * @param {string} printProviderId - The ID of the print provider
 * @returns {Promise<GetBlueprintVariantsResponse>}
 *
 * @example
 * const blueprintId = "3";
 * const printProviderId = "8";
 * const variants = await printify.catalog.getBlueprintVariants(blueprintId, printProviderId);
 * console.log(variants);
 * // Expected response:
 * // {
 * //   "id": 3,
 * //   "title": "DJ",
 * //   "variants": [
 * //     { "id": 17390, "title": "Heather Grey / XS", "options": { "color": "Heather Grey", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] },
 * //     // Additional variants...
 * //   ]
 * // }
 */
const getBlueprintVariants =
  (fetchData: FetchDataFn) =>
  (blueprintId: string, printProviderId: string): Promise<GetBlueprintVariantsResponse> => {
    return fetchData(`/v1/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/variants.json`, { method: 'GET' });
  };

export default getBlueprintVariants;
