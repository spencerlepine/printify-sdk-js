import Printify from '../src/client';
import { assertAxiosCall } from './testUtils';

describe('Uploads', () => {
  let printify: Printify;

  beforeAll(() => {
    printify = new Printify({ shopId: '123456', accessToken: 'mockAccessToken', apiVersion: 'v1' });
  });

  it('should handle the archive upload endpoint', async () => {
    // Act
    const mockImageId = '5cb87a8cd490a2ccb256cec4';
    await printify.uploads.archive(mockImageId);

    // Assert
    assertAxiosCall('post', `/v1/uploads/${mockImageId}/archive.json`);
  });

  it('should handle the getById upload endpoint', async () => {
    // Act
    const mockImageId = '5e16d66791287a0006e522b2';
    await printify.uploads.getById(mockImageId);

    // Assert
    assertAxiosCall('get', `/v1/uploads/${mockImageId}.json`);
  });

  it('should handle the list uploads endpoint with page and limit parameters', async () => {
    // Act
    const mockPage = 2;
    const mockLimit = 1;
    await printify.uploads.list(mockPage, mockLimit);

    // Assert
    assertAxiosCall('get', `/v1/uploads.json?page=${mockPage}&limit=${mockLimit}`);
  });

  it('should handle uploading an image via URL', async () => {
    // Arrange
    const mockData = { file_name: '1x1-ff00007f.png', url: 'http://png-pixel.com/1x1-ff00007f.png' };

    // Act
    await printify.uploads.uploadImage(mockData);

    // Assert
    assertAxiosCall('post', '/v1/uploads/images.json', mockData);
  });

  it('should handle uploading an image via base64 content', async () => {
    // Arrange
    const mockData = { file_name: 'image.png', contents: '<base-64-encoded-content>' };

    // Act
    await printify.uploads.uploadImage(mockData);

    // Assert
    assertAxiosCall('post', '/v1/uploads/images.json', mockData);
  });
});
