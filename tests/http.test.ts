import axios from 'axios';
import { assertAxiosCall } from './testUtils';
import HttpClient from '../src/http';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  patch: jest.fn(),
}));

describe('HttpClient', () => {
  const shopId = 'testShopId';
  const accessToken = 'mockAccessToken';

  beforeAll(() => {
    global.console.log = jest.fn();
    global.console.error = jest.fn();
  });

  beforeEach(() => {
    (axios.get as jest.Mock).mockReset();
    (axios.post as jest.Mock).mockReset();
    (axios.put as jest.Mock).mockReset();
    (axios.delete as jest.Mock).mockReset();
    (axios.patch as jest.Mock).mockReset();
    (global.console.log as jest.Mock).mockReset();
    (global.console.error as jest.Mock).mockReset();
  });

  it('should initialize with provided config', () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });

    expect(http.shopId).toBe(shopId);
    expect(typeof http.request).toBe('function');
  });

  it('request() should handle successful response', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });

    const mockResponse = { success: 'true' };
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const url = '/test-url';
    const result = await http.request(url);

    expect(result).toEqual(mockResponse);
    assertAxiosCall('get', url);
  });

  it('request() should throw error for failed response', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });

    (axios as unknown as jest.Mock).mockResolvedValueOnce({
      response: {
        status: 404,
        statusText: 'Not Found',
      },
    });

    const url = '/test-url';

    await expect(http.request(url)).rejects.toThrow('Printify SDK Error');
  });

  it('request() should rethrow errors from axios', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });

    const errorMessage = 'Network Error';
    (axios as unknown as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const url = '/test-url';

    await expect(http.request(url)).rejects.toThrow('Printify SDK Error');
  });

  it('should log the request by default', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });

    const method = 'GET';
    const url = '/test-url';

    (axios.get as jest.Mock).mockResolvedValueOnce({ response: { status: 200, statusText: 'Hello, world!' } });
    await http.request(url);

    expect(console.log).toHaveBeenCalledWith(`Request: ${method.toUpperCase()} https://${http['host']}${url}`);
  });

  it('should log the request when enableLogging is true', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken, enableLogging: true });

    const method = 'GET';
    const url = '/test-url';

    (axios.get as jest.Mock).mockResolvedValueOnce({ response: { status: 200, statusText: 'Hello, world!' } });
    await http.request(url);

    expect(console.log).toHaveBeenCalledWith(`Request: ${method.toUpperCase()} https://${http['host']}${url}`);
  });

  it('should not log the request when enableLogging is false', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken, enableLogging: false });
    const url = '/test-url';

    (axios.get as jest.Mock).mockResolvedValueOnce({ response: { status: 200, statusText: 'Hello, world!' } });
    await http.request(url);

    expect(console.log).not.toHaveBeenCalled();
  });

  it('should log the error when enableLogging is default', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });
    (axios.get as jest.Mock).mockRejectedValueOnce({ response: { status: 500, statusText: 'Server Error' } });

    try {
      await http.request('/test-url');
    } catch (error) {
      expect(console.error).toHaveBeenCalledWith(`Printify SDK Error`);
    }
  });

  it('should log the error when enableLogging is true', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken, enableLogging: true });
    (axios.get as jest.Mock).mockRejectedValueOnce({ response: { status: 500, statusText: 'Server Error' } });

    try {
      await http.request('/test-url');
    } catch (error) {
      expect(console.error).toHaveBeenCalledWith(`Printify SDK Error`);
    }
  });

  it('should not log the error when enableLogging is false', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken, enableLogging: false });

    (axios.get as jest.Mock).mockRejectedValueOnce({ response: { status: 500, statusText: 'Server Error' } });

    try {
      await http.request('/test-url');
    } catch (error) {
      expect(console.error).not.toHaveBeenCalled();
    }
  });

  it('should log error details when AxiosError is thrown', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });

    const axiosError = new Error('Request failed') as any;
    axiosError.isAxiosError = true;
    axiosError.toJSON = () => {};
    axiosError.response = {
      status: 404,
      statusText: 'Not Found',
      data: {},
    };
    axiosError.config = {};
    axiosError.code = 'ERR_BAD_REQUEST';

    (axios.get as jest.Mock).mockRejectedValueOnce(axiosError);

    const url = '/test-url';

    await expect(http.request(url)).rejects.toThrow('Printify SDK: 404 Not Found - Requested URL: https://' + http['host'] + url);

    expect(console.error).toHaveBeenCalledWith(`Printify SDK: 404 Not Found - Requested URL: https://${http['host']}${url}`);
  });
});
