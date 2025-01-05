import Printify from '../src/client';
import { assertAxiosCall } from './testUtils';

describe('Shops V1', () => {
  let printify: Printify;

  beforeAll(() => {
    printify = new Printify({ shopId: '123456', accessToken: 'mockAccessToken' });
  });

  it('should handle deleting a shop by default shopId', async () => {
    // Act
    await printify.shops.deleteOne();

    // Assert
    assertAxiosCall('delete', `/v1/shops/${printify.shopId}/connection.json`);
  });

  it('should handle deleting a shop by custom shopId', async () => {
    // Act
    const customShopId = '67890';
    await printify.shops.deleteOne(customShopId);

    // Assert
    assertAxiosCall('delete', `/v1/shops/${customShopId}/connection.json`);
  });

  it('should handle listing shops', async () => {
    // Act
    await printify.shops.list();

    // Assert
    assertAxiosCall('get', '/v1/shops.json');
  });
});
