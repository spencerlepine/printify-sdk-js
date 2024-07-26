import { FetchDataFunc } from '../printify';

export interface Location {
  address1: string;
  address2: string | null;
  city: string;
  country: string;
  region: string;
  zip: string;
}

export interface Provider {
  id: number;
  title: string;
  location: Location;
}

export type ListProvidersFunc = () => Promise<Provider[]>;

/**
 * Retrieve a list of all available print-providers
 *
 * @returns {Promise<Provider[]>}
 *
 * @example
 * await printify.catalog.listProviders();
 * // Expected response: [
 * //   {
 * //     id: 1,
 * //     title: "SPOKE Custom Products",
 * //     location: {
 * //       address1: "89 Weirfield St",
 * //       address2: null,
 * //       city: "Brooklyn",
 * //       country: "US",
 * //       region: "NY",
 * //       zip: "11221-5120"
 * //     }
 * //   },
 * //   {
 * //     id: 2,
 * //     title: "CG Pro prints",
 * //     location: {
 * //       address1: "89 Weirfield St",
 * //       address2: null,
 * //       city: "Brooklyn",
 * //       country: "US",
 * //       region: "NY",
 * //       zip: "11221-5120"
 * //     }
 * //   },
 * //   // ...
 * // ]
 */
const listProviders =
  (fetchData: FetchDataFunc): ListProvidersFunc =>
  async (): Promise<Provider[]> => {
    const response = await fetchData('/v1/catalog/print_providers.json', { method: 'GET' });
    return response;
  };

export default listProviders;
