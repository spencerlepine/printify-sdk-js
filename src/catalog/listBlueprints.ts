import { FetchDataFunc } from '../client';

export interface Blueprint {
  id: number;
  title: string;
  description: string;
  brand: string;
  model: string;
  images: string[];
}

export type ListBlueprintsFunc = () => Promise<Blueprint[]>;

/**
 * Retrieve a list of all available blueprints
 *
 * @returns {Promise<Blueprint[]>}
 *
 * @example
 * await printify.catalog.listBlueprints();
 * // Expected response: [
 * //   {
 * //     id: 3,
 * //     title: "Kids Regular Fit Tee",
 * //     description: "Description goes here",
 * //     brand: "Delta",
 * //     model: "11736",
 * //     images: [
 * //       "https://images.printify.com/5853fe7dce46f30f8327f5cd",
 * //       "https://images.printify.com/5c487ee2a342bc9b8b2fc4d2"
 * //     ]
 * //   },
 * //   {
 * //     id: 5,
 * //     title: "Men's Cotton Crew Tee",
 * //     description: "Description goes here",
 * //     brand: "Next Level",
 * //     model: "3600",
 * //     images: [
 * //       "https://images.printify.com/5a2ffc81b8e7e3656268fb44",
 * //       "https://images.printify.com/5cdc0126b97b6a00091b58f7"
 * //     ]
 * //   }
 * // ]
 */
const listBlueprints =
  (fetchData: FetchDataFunc): ListBlueprintsFunc =>
  async (): Promise<Blueprint[]> => {
    const response = await fetchData('/v1/catalog/blueprints.json', { method: 'GET' });
    return response;
  };

export default listBlueprints;
