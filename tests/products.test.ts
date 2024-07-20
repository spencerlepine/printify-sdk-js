import printify from './printifyInstance';

describe('Products', () => {
  it('should handle listing products with default parameters', async () => {
    // Act
    await printify.products.list();

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle listing products with pagination and limit', async () => {
    // Act
    await printify.products.list(2, 2);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products.json?page=2&limit=2`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });
});
