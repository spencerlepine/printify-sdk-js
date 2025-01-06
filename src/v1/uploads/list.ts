import { ImageUpload } from '../types';

export type ListUploadsResponse = {
  current_page: number;
  data: ImageUpload[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

/**
 * Retrieve a list of uploaded images with optional pagination and limit.
 *
 * @param {number} [page] - Page number
 * @param {number} [limit] - Results per page
 * @returns {Promise<ListUploadsResponse>}
 *
 * @example
 * await printify.uploads.list();
 * await printify.uploads.list(page=2);
 * await printify.uploads.list(undefined, limit=5);
 *
 * // Expected response:
 * // {
 * //   "current_page": 1,
 * //   "data": [ { "id": "5e16d66791287a0006e522b2", "file_name": "png-images-logo-1.jpg" }, ... ],
 * //   "total": 2
 * // }
 */
const list = function (this: method, page?: number, limit?: number): Promise<ListUploadsResponse> {
  const queryParams = new URLSearchParams();
  if (page !== undefined) queryParams.append('page', page.toString());
  if (limit !== undefined) queryParams.append('limit', limit.toString());

  const url = `/v1/uploads.json${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  return this.request(url, { method: 'GET' });
};

export default list;
