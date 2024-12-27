import { FetchDataFunc } from '../client';

export interface PrintProvider {
  id: number;
  title: string;
}

export type GetBlueprintProvidersFunc = (blueprintId: string) => Promise<PrintProvider[]>;

/**
 * Retrieve a list of all print providers that fulfill orders for a specific blueprint
 *
 * @param {string} blueprintId - The ID of the blueprint to retrieve print providers for
 * @returns {Promise<PrintProvider[]>}
 *
 * @example
 * const blueprintId = "3";
 * const providers = await printify.catalog.getBlueprintProviders(blueprintId);
 * console.log(providers);
 * // Expected response:
 * // [
 * //   { "id": 3, "title": "DJ" },
 * //   { "id": 8, "title": "Fifth Sun" },
 * //   { "id": 16, "title": "MyLocker" },
 * //   { "id": 24, "title": "Inklocker" }
 * // ]
 */
const getBlueprintProviders =
  (fetchData: FetchDataFunc) =>
  async (blueprintId: string): Promise<PrintProvider[]> => {
    const response = await fetchData(`/v1/catalog/blueprints/${blueprintId}/print_providers.json`, { method: 'GET' });
    return response;
  };

export default getBlueprintProviders;
