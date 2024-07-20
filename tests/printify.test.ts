import Printify from '../src/printify';

global.fetch = jest.fn();

describe('Printify', () => {
  let printify: Printify;
  const shopId = 'testShopId';
  const accessToken = 'testAccessToken';

  beforeEach(() => {
    // Reset the fetch mock before each test
    (fetch as jest.Mock).mockReset();
    printify = new Printify({ shopId, accessToken });
  });

  test('should initialize with provided config', () => {
    expect(printify.shopId).toBe(shopId);
  });

  test('fetchData should handle successful response', async () => {
    const mockResponse = { data: 'testData' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const url = '/test-url';
    const result = await printify['fetchData'](url);

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.printify.com${url}`,
      expect.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        }),
      })
    );
  });

  test('fetchData should throw error for failed response', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    const url = '/test-url';

    await expect(printify['fetchData'](url)).rejects.toThrow('Printify SDK Error: 404 Not Found');
  });

  test('fetchData should rethrow errors from fetch', async () => {
    const errorMessage = 'Network Error';
    (fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const url = '/test-url';

    await expect(printify['fetchData'](url)).rejects.toThrow(errorMessage);
  });
});
