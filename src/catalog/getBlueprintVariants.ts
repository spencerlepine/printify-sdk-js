import { FetchDataFunc } from '../printify';

export interface Placeholder {
  position: string;
  height: number;
  width: number;
}

export interface Variant {
  id: number;
  title: string;
  options: {
    color: string;
    size: string;
  };
  placeholders: Placeholder[];
}

export interface BlueprintVariants {
  id: number;
  title: string;
  variants: Variant[];
}

export type GetBlueprintVariantsFunc = (blueprintId: string, printProviderId: string) => Promise<BlueprintVariants>;

/**
 * Retrieve a list of all variants of a blueprint from a specific print provider
 *
 * @param {string} blueprintId - The ID of the blueprint
 * @param {string} printProviderId - The ID of the print provider
 * @returns {Promise<BlueprintVariants>}
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
  (fetchData: FetchDataFunc) =>
  async (blueprintId: string, printProviderId: string): Promise<BlueprintVariants> => {
    const response = await fetchData(`/v1/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/variants.json`, { method: 'GET' });
    return response;
  };

export default getBlueprintVariants;
