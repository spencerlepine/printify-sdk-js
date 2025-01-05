import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

interface HttpConfig {
  accessToken: string;
  shopId?: string;
  enableLogging?: boolean;
  host?: string;
  timeout?: number;
}

class HttpClient {
  private accessToken: string;
  shopId?: string;
  private host: string;
  private timeout: number;
  private enableLogging?: boolean;
  private baseUrl: string;

  constructor(config: HttpConfig) {
    this.accessToken = config.accessToken;
    this.shopId = config.shopId;
    this.host = config.host || 'api.printify.com';
    this.timeout = config.timeout || 5000;
    this.enableLogging = config.enableLogging ?? true;
    this.baseUrl = `https://${this.host}`;
  }

  private logError(message: string) {
    if (this.enableLogging) {
      console.error(message);
    }
  }

  private logRequest(method: string, url: string) {
    if (this.enableLogging) {
      console.log(`Requesting ${method.toUpperCase()} ${this.baseUrl}${url}`);
    }
  }

  async request<T = any>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    };

    const requestConfig: AxiosRequestConfig = {
      ...config,
      method: config.method || 'GET',
      baseURL: this.baseUrl,
      timeout: this.timeout,
      headers: {
        ...defaultHeaders,
        ...(config.headers || {}),
      },
    };

    const method = (config.method || 'GET').toLowerCase();
    this.logRequest(method, url);

    try {
      let response;
      switch (method) {
        case 'post':
          response = await axios.post<T>(url, config.data, requestConfig);
          break;
        case 'put':
          response = await axios.put<T>(url, config.data, requestConfig);
          break;
        case 'delete':
          response = await axios.delete<T>(url, requestConfig);
          break;
        case 'get':
        default:
          response = await axios.get<T>(url, requestConfig);
          break;
      }
      return response.data;
    } catch (error: any) {
      let message = 'Printify SDK Error';
      if ((error as AxiosError).isAxiosError) {
        message = `Printify SDK Error: ${error.response?.status} ${error.response?.statusText} - Requested URL: ${this.baseUrl}${url}`;
      }
      this.logError(message);
      throw new Error(message);
    }
  }
}

export default HttpClient;
