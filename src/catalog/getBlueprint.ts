import { FetchDataFunc } from '../client';

export interface GetBlueprintResponse {
  id: number;
  title: string;
  description: string;
  brand: string;
  model: string;
  images: string[];
}

export type GetBlueprintFunc = (blueprintId: string) => Promise<GetBlueprintResponse>;

/**
 * Retrieve a specific blueprint
 *
 * @param {string} blueprintId - The ID of the blueprint to retrieve
 * @returns {Promise<GetBlueprintResponse>}
 *
 * @example
 * const blueprintId = "3";
 * const blueprint = await printify.catalog.getBlueprint(blueprintId);
 * // Expected response:
 * // {
 * //   "id": 3,
 * //   "title": "Kids Regular Fit Tee",
 * //   "description": "Description goes here",
 * //   "brand": "Delta",
 * //   "model": "11736",
 * //   "images": ["https://images.printify.com/5853fe7dce46f30f8327f5cd", "https://images.printify.com/5c487ee2a342bc9b8b2fc4d2"]
 * // }
 */
const getBlueprint =
  (fetchData: FetchDataFunc) =>
  async (blueprintId: string): Promise<GetBlueprintResponse> => {
    const response = await fetchData(`/v1/catalog/blueprints/${blueprintId}.json`, { method: 'GET' });
    return response;
  };

export default getBlueprint;
