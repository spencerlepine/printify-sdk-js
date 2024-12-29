import { FetchDataFn } from '../../client';

/**
 * Archive an uploaded image
 *
 * @param {string} imageId - The ID of the image to be archived
 * @returns {Promise<void>}
 *
 * @example
 * const imageId = "5cb87a8cd490a2ccb256cec4";
 * await printify.uploads.archive(imageId);
 * // Expected response: {}
 */
const archive =
  (fetchData: FetchDataFn) =>
  (imageId: string): Promise<void> => {
    return fetchData(`/v1/uploads/${imageId}/archive.json`, { method: 'POST' });
  };

export default archive;
