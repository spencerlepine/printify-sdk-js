import printify from './printifyInstance';

describe('Webhooks', () => {
  it('should handle the create webhook endpoint', async () => {
    // Act
    const mockData = { topic: 'order:created', url: 'https://example.com/webhooks/order/created' };
    await printify.webhooks.create(mockData);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/webhooks.json`;
    const mockOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer mockAccessToken`,
      },
      body: JSON.stringify(mockData),
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the delete webhook endpoint', async () => {
    // Act
    const webhookId = '5cb87a8cd490a2ccb256cec4';
    await printify.webhooks.deleteOne(webhookId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/webhooks/${webhookId}.json`;
    const mockOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer mockAccessToken`,
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the list webhooks endpoint', async () => {
    // Act
    await printify.webhooks.list();

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/webhooks.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer mockAccessToken`,
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the update webhook endpoint', async () => {
    // Act
    const webhookId = '5cb87a8cd490a2ccb256cec4';
    const data = { url: 'https://example.com/callback/order/created' };
    await printify.webhooks.updateOne(webhookId, data);

    // Assert
    const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/webhooks/${webhookId}.json`;
    const mockOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer mockAccessToken`,
      },
      body: JSON.stringify(data),
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });
});
