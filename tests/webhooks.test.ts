import { mockAxiosInstance, resetAxiosMocks } from './mocks/setupAxiosMock';
import Printify from '../src/client';
import { assertAxiosCall } from './testUtils';

describe('Webhooks V1', () => {
  let printify: Printify;

  beforeAll(() => {
    printify = new Printify({ shopId: '123456', accessToken: 'mockAccessToken' });
  });

  beforeEach(() => {
    resetAxiosMocks(mockAxiosInstance);
  });

  it('should handle the create webhook endpoint', async () => {
    // Act
    const mockData = { topic: 'order:created', url: 'https://example.com/webhooks/order/created' };
    await printify.webhooks.create(mockData);

    // Assert
    assertAxiosCall(mockAxiosInstance, 'post', `/v1/shops/${printify.shopId}/webhooks.json`, mockData);
  });

  it('should handle the delete webhook endpoint', async () => {
    // Act
    const webhookId = '5cb87a8cd490a2ccb256cec4';
    await printify.webhooks.deleteOne(webhookId);

    // Assert
    assertAxiosCall(mockAxiosInstance, 'delete', `/v1/shops/${printify.shopId}/webhooks/${webhookId}.json`);
  });

  it('should handle the list webhooks endpoint', async () => {
    // Act
    await printify.webhooks.list();

    // Assert
    assertAxiosCall(mockAxiosInstance, 'get', `/v1/shops/${printify.shopId}/webhooks.json`);
  });

  it('should handle the update webhook endpoint', async () => {
    // Act
    const webhookId = '5cb87a8cd490a2ccb256cec4';
    const mockData = { url: 'https://example.com/callback/order/created' };
    await printify.webhooks.updateOne(webhookId, mockData);

    // Assert
    assertAxiosCall(mockAxiosInstance, 'put', `/v1/shops/${printify.shopId}/webhooks/${webhookId}.json`, mockData);
  });
});
