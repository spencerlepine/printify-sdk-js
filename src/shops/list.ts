import { FetchDataFunc } from '../client';

export interface Shop {
  id: number;
  title: string;
  sales_channel: string;
}

export type ListShopsFunc = () => Promise<Shop[]>;

/**
 * Retrieve a list of shops in a Printify account
 *
 * @returns {Promise<Shop[]>}
 *
 * @example
 * const shops = await printify.shops.list();
 * // Expected response:
 * // [
 * //   { id: 5432, title: "My new store", sales_channel: "My Sales Channel" },
 * //   { id: 9876, title: "My other new store", sales_channel: "disconnected" }
 * // ]
 */
const list = (fetchData: FetchDataFunc) => async (): Promise<Shop[]> => {
  const response = await fetchData(`/v1/shops.json`, {
    method: 'GET',
  });
  return response;
};

export default list;
