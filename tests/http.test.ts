import { mockAxiosInstance, resetAxiosMocks } from './mocks/setupAxiosMock';
import { assertAxiosCall } from './testUtils';
import HttpClient, { PrintifyError } from '../src/http';

describe('HttpClient', () => {
  const shopId = 'testShopId';
  const accessToken = 'mockAccessToken';

  beforeAll(() => {
    global.console.log = jest.fn();
    global.console.error = jest.fn();
  });

  beforeEach(() => {
    resetAxiosMocks(mockAxiosInstance);
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
    mockAxiosInstance.get.mockResolvedValueOnce({ data: mockResponse });

    const url = '/test-url';
    const result = await http.request(url);

    expect(result).toEqual(mockResponse);
    assertAxiosCall(mockAxiosInstance, 'get', url);
  });

  it('request() should throw error for failed response', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });

    mockAxiosInstance.get.mockRejectedValueOnce({
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
    mockAxiosInstance.get.mockRejectedValueOnce(new Error(errorMessage));

    const url = '/test-url';

    await expect(http.request(url)).rejects.toThrow('Printify SDK Error');
  });

  it('should log the request by default', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });

    const method = 'GET';
    const url = '/test-url';

    mockAxiosInstance.get.mockResolvedValueOnce({ data: { status: 200, statusText: 'Hello, world!' } });
    await http.request(url);

    expect(console.log).toHaveBeenCalledWith(`Request: ${method.toUpperCase()} https://${http['host']}${url}`);
  });

  it('should log the request when enableLogging is true', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken, enableLogging: true });

    const method = 'GET';
    const url = '/test-url';

    mockAxiosInstance.get.mockResolvedValueOnce({ data: { status: 200, statusText: 'Hello, world!' } });
    await http.request(url);

    expect(console.log).toHaveBeenCalledWith(`Request: ${method.toUpperCase()} https://${http['host']}${url}`);
  });

  it('should not log the request when enableLogging is false', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken, enableLogging: false });
    const url = '/test-url';

    mockAxiosInstance.get.mockResolvedValueOnce({ data: { status: 200, statusText: 'Hello, world!' } });
    await http.request(url);

    expect(console.log).not.toHaveBeenCalled();
  });

  it('should log the error when enableLogging is default', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken });
    mockAxiosInstance.get.mockRejectedValueOnce({ response: { status: 500, statusText: 'Server Error' } });

    try {
      await http.request('/test-url');
    } catch (error) {
      expect(console.error).toHaveBeenCalledWith(`Printify SDK Error`);
    }
  });

  it('should log the error when enableLogging is true', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken, enableLogging: true });
    mockAxiosInstance.get.mockRejectedValueOnce({ response: { status: 500, statusText: 'Server Error' } });

    try {
      await http.request('/test-url');
    } catch (error) {
      expect(console.error).toHaveBeenCalledWith(`Printify SDK Error`);
    }
  });

  it('should not log the error when enableLogging is false', async () => {
    const http: HttpClient = new HttpClient({ shopId, accessToken, enableLogging: false });

    mockAxiosInstance.get.mockRejectedValueOnce({ response: { status: 500, statusText: 'Server Error' } });

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

    mockAxiosInstance.get.mockRejectedValueOnce(axiosError);

    const url = '/test-url';

    await expect(http.request(url)).rejects.toThrow('Printify SDK: 404 Not Found - Requested URL: https://' + http['host'] + url);

    expect(console.error).toHaveBeenCalledWith(`Printify SDK: 404 Not Found - Requested URL: https://${http['host']}${url}`);
  });
  describe('API error details', () => {
    const axiosErrorWith = (data: unknown, status = 400, statusText = 'Bad Request') => {
      const axiosError = new Error('Request failed') as any;
      axiosError.isAxiosError = true;
      axiosError.toJSON = () => {};
      axiosError.response = { status, statusText, data };
      axiosError.config = {};
      axiosError.code = 'ERR_BAD_REQUEST';
      return axiosError;
    };

    it('surfaces the validation reason Printify returns in the response body', async () => {
      const http: HttpClient = new HttpClient({ shopId, accessToken });
      mockAxiosInstance.put.mockRejectedValueOnce(
        axiosErrorWith({
          status: 'error',
          code: 8150,
          message: 'Validation failed.',
          errors: { reason: 'print_areas.0.placeholders.0.images: The print_areas.0.placeholders.0.images field is required.', code: 8150 },
        })
      );

      const url = '/v1/shops/testShopId/products/abc.json';
      const error: PrintifyError = await http.request(url, { method: 'PUT' }).catch(e => e);

      expect(error).toBeInstanceOf(PrintifyError);
      expect(error.message).toBe(
        `Printify SDK: 400 Bad Request - Requested URL: https://${http['host']}${url} - Validation failed. - ` +
          'print_areas.0.placeholders.0.images: The print_areas.0.placeholders.0.images field is required.'
      );
      expect(error.status).toBe(400);
      expect(error.statusText).toBe('Bad Request');
      expect(error.url).toBe(`https://${http['host']}${url}`);
      expect(error.code).toBe(8150);
      expect(error.errors).toEqual({ reason: expect.any(String), code: 8150 });
      expect(error.stack).toBeDefined();
    });

    it('flattens per-field error arrays', async () => {
      const http: HttpClient = new HttpClient({ shopId, accessToken });
      mockAxiosInstance.get.mockRejectedValueOnce(axiosErrorWith({ code: 8151, message: 'Validation failed.', errors: { title: ['The title field is required.'] } }));

      const error: PrintifyError = await http.request('/test-url').catch(e => e);

      expect(error.message).toContain('Validation failed. - title: The title field is required.');
      expect(error.code).toBe(8151);
    });

    it('uses a string error body as-is', async () => {
      const http: HttpClient = new HttpClient({ shopId, accessToken });
      mockAxiosInstance.get.mockRejectedValueOnce(axiosErrorWith('  Service unavailable  ', 503, 'Service Unavailable'));

      const error: PrintifyError = await http.request('/test-url').catch(e => e);

      expect(error.message).toContain('Service unavailable');
      expect(error.code).toBe('ERR_BAD_REQUEST');
    });

    it('truncates long bodies so the message stays readable', async () => {
      const http: HttpClient = new HttpClient({ shopId, accessToken });
      mockAxiosInstance.get.mockRejectedValueOnce(axiosErrorWith({ message: 'Validation failed.', errors: { reason: `Client error:\n\n${'<html>'.repeat(500)}` } }));

      const error: PrintifyError = await http.request('/test-url').catch(e => e);

      expect(error.message).toContain('Validation failed. - Client error: <html>');
      expect(error.message.endsWith('…')).toBe(true);
      expect(error.message.length).toBeLessThan(700);
      // The untouched body is still available for callers that want all of it.
      expect((error.response as any).errors.reason.length).toBeGreaterThan(1000);
    });

    it('falls back to the axios error code when the body has none', async () => {
      const http: HttpClient = new HttpClient({ shopId, accessToken });
      mockAxiosInstance.get.mockRejectedValueOnce(axiosErrorWith(null, 500, 'Server Error'));

      const error: PrintifyError = await http.request('/test-url').catch(e => e);

      expect(error.message).toBe(`Printify SDK: 500 Server Error - Requested URL: https://${http['host']}/test-url`);
      expect(error.code).toBe('ERR_BAD_REQUEST');
    });

    it('handles a missing response object', async () => {
      const http: HttpClient = new HttpClient({ shopId, accessToken });
      const axiosError = new Error('timeout of 5000ms exceeded') as any;
      axiosError.isAxiosError = true;
      axiosError.code = 'ECONNABORTED';
      mockAxiosInstance.get.mockRejectedValueOnce(axiosError);

      const error: PrintifyError = await http.request('/test-url').catch(e => e);

      expect(error).toBeInstanceOf(PrintifyError);
      expect(error.code).toBe('ECONNABORTED');
      expect(error.status).toBeUndefined();
    });
  });
});
