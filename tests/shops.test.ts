import printify from './printifyInstance';

describe('Shops', () => {
  it('should handle deleting a shop by default shopId', async () => {
    // Act
    await printify.shops.deleteOne();

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/connection.json`;
    const mockOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle deleting a shop by custom shopId', async () => {
    // Act
    const customShopId = '67890';
    await printify.shops.deleteOne(customShopId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${customShopId}/connection.json`;
    const mockOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle listing shops', async () => {
    // Act
    await printify.shops.list();

    // Assert
    const mockUrl = 'https://api.printify.com/v1/shops.json';
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });
});
