import Printify from '../src/client';
import { assertAxiosCall } from './testUtils';

describe('Catalog V1', () => {
  let printify: Printify;

  beforeAll(() => {
    printify = new Printify({ shopId: '123456', accessToken: 'mockAccessToken' });
  });

  it('should handle the get blueprint endpoint', async () => {
    // Act
    const mockBlueprintId = '3';
    await printify.catalog.getBlueprint(mockBlueprintId);

    // Assert
    assertAxiosCall('get', `/v1/catalog/blueprints/${mockBlueprintId}.json`);
  });

  it('should handle the get blueprint providers endpoint', async () => {
    // Act
    const mockBlueprintId = '3';
    await printify.catalog.getBlueprintProviders(mockBlueprintId);

    // Assert
    assertAxiosCall('get', `/v1/catalog/blueprints/${mockBlueprintId}/print_providers.json`);
  });

  it('should handle the get blueprint variants endpoint', async () => {
    // Act
    const mockBlueprintId = '3';
    const mockPrintProviderId = '8';
    await printify.catalog.getBlueprintVariants(mockBlueprintId, mockPrintProviderId);

    // Assert
    assertAxiosCall('get', `/v1/catalog/blueprints/${mockBlueprintId}/print_providers/${mockPrintProviderId}/variants.json`);
  });

  it('should handle the get variant shipping endpoint', async () => {
    // Act
    const mockBlueprintId = '3';
    const mockPrintProviderId = '8';
    await printify.catalog.getVariantShipping(mockBlueprintId, mockPrintProviderId);

    // Assert
    assertAxiosCall('get', `/v1/catalog/blueprints/${mockBlueprintId}/print_providers/${mockPrintProviderId}/shipping.json`);
  });

  it('should handle the get provider endpoint', async () => {
    // Act
    const mockPrintProviderId = '123456';
    await printify.catalog.getProvider(mockPrintProviderId);

    // Assert
    assertAxiosCall('get', `/v1/catalog/print_providers/${mockPrintProviderId}.json`);
  });

  it('should handle the list blueprints endpoint', async () => {
    // Act
    await printify.catalog.listBlueprints();

    // Assert
    assertAxiosCall('get', '/v1/catalog/blueprints.json');
  });

  it('should handle the list providers endpoint', async () => {
    // Act
    await printify.catalog.listProviders();

    // Assert
    assertAxiosCall('get', '/v1/catalog/print_providers.json');
  });
});

describe('Catalog V2', () => {
  let printify: Printify;

  beforeAll(() => {
    printify = new Printify({ shopId: '123456', accessToken: 'mockAccessToken' });
  });

  it('should handle the getShippingListInfo endpoint', async () => {
    // Act
    const blueprintId = '3';
    const printProviderId = '8';
    await printify.v2.catalog.getShippingListInfo(blueprintId, printProviderId);

    // Assert
    assertAxiosCall('get', `/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping.json`);
  });

  it('should handle the getStandardShippingInfo endpoint', async () => {
    // Act
    const blueprintId = '3';
    const printProviderId = '8';
    await printify.v2.catalog.getStandardShippingInfo(blueprintId, printProviderId);

    // Assert
    assertAxiosCall('get', `/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/standard.json`);
  });

  it('should handle the getPriorityShippingInfo endpoint', async () => {
    // Act
    const blueprintId = '3';
    const printProviderId = '8';
    await printify.v2.catalog.getPriorityShippingInfo(blueprintId, printProviderId);

    // Assert
    assertAxiosCall('get', `/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/priority.json`);
  });

  it('should handle the getExpressShippingInfo endpoint', async () => {
    // Act
    const blueprintId = '3';
    const printProviderId = '8';
    await printify.v2.catalog.getExpressShippingInfo(blueprintId, printProviderId);

    // Assert
    assertAxiosCall('get', `/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/express.json`);
  });

  it('should handle the getEconomyShippingInfo endpoint', async () => {
    // Act
    const blueprintId = '3';
    const printProviderId = '8';
    await printify.v2.catalog.getEconomyShippingInfo(blueprintId, printProviderId);

    // Assert
    assertAxiosCall('get', `/v2/catalog/blueprints/${blueprintId}/print_providers/${printProviderId}/shipping/economy.json`);
  });
});
