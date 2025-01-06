import { ImageUpload } from '../types';

export interface UploadImageDataUrl {
  file_name: string;
  url: string;
}

export interface UploadImageDataBase64 {
  file_name: string;
  contents: string;
}

export type UploadImageResponse = ImageUpload;

/**
 * Upload an image file via URL or base64-encoded contents
 *
 * @param {UploadImageDataUrl | UploadImageDataBase64} data - The data to upload (URL or base64-encoded)
 * @returns {Promise<UploadImageResponse>}
 *
 * @example
 * const dataUrl = { file_name: '1x1-ff00007f.png', url: 'http://png-pixel.com/1x1-ff00007f.png' };
 * const response = await printify.uploads.uploadImage(dataUrl);
 *
 * const dataBase64 = { file_name: 'image.png', contents: '<base-64-encoded-content>' };
 * const response = await printify.uploads.uploadImage(dataBase64);
 */
const uploadImage = function (this: method, data: UploadImageDataUrl | UploadImageDataBase64): Promise<UploadImageResponse> {
  return this.request(`/v1/uploads/images.json`, {
    method: 'POST',
    data: JSON.stringify(data),
  });
};

export default uploadImage;
