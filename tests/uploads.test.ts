import printify from './printifyInstance';

describe('Uploads', () => {
  it('should handle the archive upload endpoint', async () => {
    // Act
    const mockImageId = '5cb87a8cd490a2ccb256cec4';
    await printify.uploads.archive(mockImageId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/uploads/${mockImageId}/archive.json`;
    const mockOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the getById upload endpoint', async () => {
    // Act
    const mockImageId = '5e16d66791287a0006e522b2';
    await printify.uploads.getById(mockImageId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/uploads/${mockImageId}.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the list uploads endpoint with page and limit parameters', async () => {
    // Act
    const mockPage = 2;
    const mockLimit = 1;
    await printify.uploads.list(mockPage, mockLimit);

    // Assert
    const mockUrl = `https://api.printify.com/v1/uploads.json?page=${mockPage}&limit=${mockLimit}`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle uploading an image via URL', async () => {
    // Arrange
    const data = { file_name: '1x1-ff00007f.png', url: 'http://png-pixel.com/1x1-ff00007f.png' };

    // Act
    await printify.uploads.uploadImage(data);

    // Assert
    const mockUrl = 'https://api.printify.com/v1/uploads/images.json';
    const mockOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer mockAccessToken`,
      },
      body: JSON.stringify(data),
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle uploading an image via base64 content', async () => {
    // Arrange
    const data = { file_name: 'image.png', contents: '<base-64-encoded-content>' };

    // Act
    await printify.uploads.uploadImage(data);

    // Assert
    const mockUrl = 'https://api.printify.com/v1/uploads/images.json';
    const mockOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer mockAccessToken`,
      },
      body: JSON.stringify(data),
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });
});
