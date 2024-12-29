import { FetchDataFn } from '../../client';
import { PrintProvider } from '../types';

export type ListProvidersResponse = PrintProvider[];

/**
 * Retrieve a list of all available print-providers
 *
 * @returns {Promise<ListProvidersResponse>}
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
const listProviders = (fetchData: FetchDataFn) => (): Promise<ListProvidersResponse> => {
  return fetchData('/v1/catalog/print_providers.json', { method: 'GET' });
};

export default listProviders;
