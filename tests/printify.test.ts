import axios from 'axios';
import Printify from '../src/client';
import { assertAxiosCall } from './testUtils';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  patch: jest.fn(),
}));

describe('Printify', () => {
  let printify: Printify;
  const shopId = 'testShopId';
  const accessToken = 'mockAccessToken';

  beforeEach(() => {
    (axios.get as jest.Mock).mockReset();
    (axios.post as jest.Mock).mockReset();
    (axios.put as jest.Mock).mockReset();
    (axios.delete as jest.Mock).mockReset();
    (axios.patch as jest.Mock).mockReset();

    printify = new Printify({ shopId, accessToken });
  });

  test('should initialize with provided config', () => {
    expect(printify.shopId).toBe(shopId);
  });

  test('fetchData should handle successful response', async () => {
    const mockResponse = { success: 'true' };
    // Mock a successful axios response
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const url = '/test-url';
    const result = await printify['fetchData'](url);

    expect(result).toEqual(mockResponse);
    assertAxiosCall('get', url);
  });

  test('fetchData should throw error for failed response', async () => {
    // Mock a failed axios response (error)
    (axios as unknown as jest.Mock).mockResolvedValueOnce({
      response: {
        status: 404,
        statusText: 'Not Found',
      },
    });

    const url = '/test-url';

    await expect(printify['fetchData'](url)).rejects.toThrow('Printify SDK Unknown Error');
  });

  test('fetchData should rethrow errors from axios', async () => {
    const errorMessage = 'Network Error';
    // Mock axios to throw an error
    (axios as unknown as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const url = '/test-url';

    await expect(printify['fetchData'](url)).rejects.toThrow('Printify SDK Unknown Error');
  });
});
