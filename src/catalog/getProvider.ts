import { FetchDataFunc } from '../printify';

export interface Location {
  address1: string;
  address2: string | null;
  city: string;
  country: string;
  region: string;
  zip: string;
}

export interface Blueprint {
  id: number;
  title: string;
  brand: string;
  model: string;
  images: string[];
}

export interface GetProviderResponse {
  id: number;
  title: string;
  location: Location;
  blueprints: Blueprint[];
}

export type GetProviderFunc = (printProviderId: string) => Promise<GetProviderResponse>;

/**
 * Retrieve a specific print-provider and a list of associated blueprint offerings
 *
 * @param {string} printProviderId - The ID of the print provider to retrieve
 * @returns {Promise<GetProviderResponse>}
 *
 * @example
 * const printProviderId = "123456";
 * await printify.catalog.getProvider(printProviderId);
 * // Expected response: {
 *   "id": 1,
 *   "title": "SPOKE Custom Products",
 *   "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" },
 *   "blueprints": [
 *     { "id": 265, "title": "Slim Iphone 8", "brand": "Case Mate", "model": "Slim Iphone 8", "images": ["https://images.printify.com/59b261c9b8e7e361c9147b1b.png"] },
 *     { "id": 266, "title": "Tough Iphone 8", "brand": "Case Mate", "model": "Tough Iphone 8", "images": ["https://images.printify.com/59b26fbfb8e7e36254554a34.png"] }
 *     // ...
 *   ]
 * }
 */
const getProvider =
  (fetchData: FetchDataFunc) =>
  async (printProviderId: string): Promise<GetProviderResponse> => {
    const response = await fetchData(`/v1/catalog/print_providers/${printProviderId}.json`, {
      method: 'GET',
    });
    return response;
  };

export default getProvider;
