import printify from './printifyInstance';

describe('Products', () => {
  it('should handle the create product endpoint', async () => {
    // Act
    const mockData = {
      title: 'Product',
      description: 'Good product',
      blueprint_id: 384,
      print_provider_id: 1,
      variants: [
        { id: 45740, price: 400, is_enabled: true },
        { id: 45742, price: 400, is_enabled: true },
        { id: 45744, price: 400, is_enabled: false },
        { id: 45746, price: 400, is_enabled: false },
      ],
      print_areas: [
        {
          variant_ids: [45740, 45742, 45744, 45746],
          placeholders: [{ position: 'front', images: [{ id: '5d15ca551163cde90d7b2203', x: 0.5, y: 0.5, scale: 1, angle: 0 }] }],
        },
      ],
    };
    await printify.products.create(mockData);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products.json`;
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer mockAccessToken',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle listing products with default parameters', async () => {
    // Act
    await printify.products.list();

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle listing products with pagination and limit', async () => {
    // Act
    await printify.products.list({ page: 2, limit: 2 });

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products.json?page=2&limit=2`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the delete product endpoint', async () => {
    // Act
    const mockProductId = '5cb87a8cd490a2ccb256cec4';
    await printify.products.deleteOne(mockProductId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products/${mockProductId}.json`;
    const mockOptions = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the get one product endpoint', async () => {
    // Act
    const mockProductId = '5d39b159e7c48c000728c89f';
    await printify.products.getOne(mockProductId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products/${mockProductId}.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the notify unpublished product endpoint', async () => {
    // Act
    const mockProductId = '5d39b159e7c48c000728c89f';
    await printify.products.notifyUnpublished(mockProductId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products/${mockProductId}/unpublish.json`;
    const mockOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the publishOne product endpoint', async () => {
    // Act
    const mockProductId = 'productId';
    const mockData = {
      title: true,
      description: true,
      images: true,
      variants: true,
      tags: true,
      keyFeatures: true,
      shipping_template: true,
    };
    await printify.products.publishOne(mockProductId, mockData);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products/${mockProductId}/publish.json`;
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer mockAccessToken`,
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the update product endpoint', async () => {
    // Act
    const mockProductId = 'productId';
    const mockData = { title: 'Product' };
    await printify.products.updateOne(mockProductId, mockData);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/products/${mockProductId}.json`;
    const mockOptions = {
      method: 'PUT',
      body: JSON.stringify(mockData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer mockAccessToken`,
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });
});
