import { FetchDataFunc } from '../client';

export interface GetUploadByIdResponse {
  id: string;
  file_name: string;
  height: number;
  width: number;
  size: number;
  mime_type: string;
  preview_url: string;
  upload_time: string;
}

export type GetUploadByIdFunc = (imageId: string) => Promise<GetUploadByIdResponse>;

/**
 * Retrieve an uploaded image by id
 *
 * @param {string} imageId - The ID of the image to retrieve
 * @returns {Promise<{ id: string; file_name: string; height: number; width: number; size: number; mime_type: string; preview_url: string; upload_time: string }>}
 *
 * @example
 * const imageId = "5e16d66791287a0006e522b2";
 * const imageData = await printify.uploads.getById(imageId);
 * // Expected response:
 * // {
 * //   id: "5e16d66791287a0006e522b2",
 * //   file_name: "png-images-logo-1.jpg",
 * //   height: 5979,
 * //   width: 17045,
 * //   size: 1138575,
 * //   mime_type: "image/png",
 * //   preview_url: "https://example.com/image-storage/uuid1",
 * //   upload_time: "2020-01-09 07:29:43"
 * // }
 */
const getById = (fetchData: FetchDataFunc) => async (imageId: string) => {
  const response = await fetchData(`/v1/uploads/${imageId}.json`, {
    method: 'GET',
  });
  return response;
};

export default getById;
