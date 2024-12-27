import { FetchDataFunc } from '../client';

export interface Upload {
  id: string;
  file_name: string;
  height: number;
  width: number;
  size: number;
  mime_type: string;
  preview_url: string;
  upload_time: string;
}

export interface ListUploadsResponse {
  current_page: number;
  data: Upload[];
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
}

export type ListUploadsFunc = (page?: number, limit?: number) => Promise<ListUploadsResponse>;

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
const list =
  (fetchData: FetchDataFunc) =>
  async (page?: number, limit?: number): Promise<ListUploadsResponse> => {
    const queryParams = new URLSearchParams();
    if (page !== undefined) queryParams.append('page', page.toString());
    if (limit !== undefined) queryParams.append('limit', limit.toString());

    const url = `/v1/uploads.json${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return fetchData(url, { method: 'GET' });
  };

export default list;
