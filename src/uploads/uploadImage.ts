import { FetchDataFunc } from '../printify';

interface UploadImageDataUrl {
  file_name: string;
  url: string;
}

interface UploadImageDataBase64 {
  file_name: string;
  contents: string;
}

interface Response {
  id: string;
  file_name: string;
  height: number;
  width: number;
  size: number;
  mime_type: string;
  preview_url: string;
  upload_time: string;
}

export type UploadImageFunc = (data: UploadImageDataUrl | UploadImageDataBase64) => Promise<Response>;

/**
 * Upload an image file via URL or base64-encoded contents
 *
 * @param {UploadImageDataUrl | UploadImageDataBase64} data - The data to upload (URL or base64-encoded)
 * @returns {Promise<Response>}
 *
 * @example
 * const dataUrl = { file_name: '1x1-ff00007f.png', url: 'http://png-pixel.com/1x1-ff00007f.png' };
 * const response = await printify.uploads.uploadImage(dataUrl);
 *
 * const dataBase64 = { file_name: 'image.png', contents: '<base-64-encoded-content>' };
 * const response = await printify.uploads.uploadImage(dataBase64);
 */
const uploadImage =
  (fetchData: FetchDataFunc): UploadImageFunc =>
  async (data: UploadImageDataUrl | UploadImageDataBase64): Promise<Response> => {
    const response = await fetchData(`/v1/uploads/images.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  };

export default uploadImage;
