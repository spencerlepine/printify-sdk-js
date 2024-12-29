import { FetchDataFn } from '../../client';
import { ImageUpload } from '../types';

export type GetUploadByIdResponse = ImageUpload;

/**
 * Retrieve an uploaded image by id
 *
 * @param {string} imageId - The ID of the image to retrieve
 * @returns {Promise<GetUploadByIdResponse>}
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
const getById =
  (fetchData: FetchDataFn) =>
  (imageId: string): Promise<GetUploadByIdResponse> => {
    return fetchData(`/v1/uploads/${imageId}.json`, { method: 'GET' });
  };

export default getById;
