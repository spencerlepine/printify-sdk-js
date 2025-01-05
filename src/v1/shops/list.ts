import { Shop } from '../types';

export type ListShopsResponse = Shop[];

/**
 * Retrieve a list of shops in a Printify account
 *
 * @returns {Promise<ListShopsResponse>}
 *
 * @example
 * const shops = await printify.shops.list();
 * // Expected response:
 * // [
 * //   { id: 5432, title: "My new store", sales_channel: "My Sales Channel" },
 * //   { id: 9876, title: "My other new store", sales_channel: "disconnected" }
 * // ]
 */
const list = function (this: method): Promise<ListShopsResponse> {
  return this.request(`/v1/shops.json`, { method: 'GET' });
};

export default list;
