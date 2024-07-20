import printify from './printifyInstance';

describe('Catalog', () => {
  it('should handle the get blueprint endpoint', async () => {
    // Act
    const mockBlueprintId = '3';
    await printify.catalog.getBlueprint(mockBlueprintId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/catalog/blueprints/${mockBlueprintId}.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the get blueprint providers endpoint', async () => {
    // Act
    const mockBlueprintId = '3';
    await printify.catalog.getBlueprintProviders(mockBlueprintId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/catalog/blueprints/${mockBlueprintId}/print_providers.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the get blueprint variants endpoint', async () => {
    // Act
    const mockBlueprintId = '3';
    const mockPrintProviderId = '8';
    await printify.catalog.getBlueprintVariants(mockBlueprintId, mockPrintProviderId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/catalog/blueprints/${mockBlueprintId}/print_providers/${mockPrintProviderId}/variants.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the get variant shipping endpoint', async () => {
    // Act
    const mockBlueprintId = '3';
    const mockPrintProviderId = '8';
    await printify.catalog.getVariantShipping(mockBlueprintId, mockPrintProviderId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/catalog/blueprints/${mockBlueprintId}/print_providers/${mockPrintProviderId}/shipping.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the get provider endpoint', async () => {
    // Act
    const mockPrintProviderId = '123456';
    await printify.catalog.getProvider(mockPrintProviderId);

    // Assert
    const mockUrl = `https://api.printify.com/v1/catalog/print_providers/${mockPrintProviderId}.json`;
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the list blueprints endpoint', async () => {
    // Act
    await printify.catalog.listBlueprints();

    // Assert
    const mockUrl = 'https://api.printify.com/v1/catalog/blueprints.json';
    const mockOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer mockAccessToken`,
        'Content-Type': 'application/json',
      },
    };
    expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should handle the list providers endpoint', async () => {
    // Act
    await printify.catalog.listProviders();

    // Assert
    const mockUrl = 'https://api.printify.com/v1/catalog/print_providers.json';
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
