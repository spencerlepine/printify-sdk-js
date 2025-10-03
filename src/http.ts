import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

interface HttpConfig {
  accessToken: string;
  shopId?: string;
  enableLogging?: boolean;
  host?: string;
  axios?: AxiosInstance;
  timeout?: number;
}

class HttpClient {
  private accessToken: string;
  shopId?: string;
  private host: string;
  private timeout: number;
  private enableLogging?: boolean;
  private baseUrl: string;
  protected axios: AxiosInstance;

  constructor(config: HttpConfig) {
    this.accessToken = config.accessToken;
    this.shopId = config.shopId;
    this.host = config.host || 'api.printify.com';
    this.timeout = config.timeout || 5000;
    this.enableLogging = config.enableLogging ?? true;
    this.baseUrl = `https://${this.host}`;
    this.axios = config.axios ?? Axios.create();
    axiosRetry(this.axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
  }

  private logError(message: string) {
    if (this.enableLogging) {
      console.error(message);
    }
  }

  private logRequest(method: string, url: string) {
    if (this.enableLogging) {
      console.log(`Request: ${method.toUpperCase()} ${this.baseUrl}${url}`);
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
          response = await this.axios.post<T>(url, config.data, requestConfig);
          break;
        case 'put':
          response = await this.axios.put<T>(url, config.data, requestConfig);
          break;
        case 'delete':
          response = await this.axios.delete<T>(url, requestConfig);
          break;
        case 'get':
        default:
          response = await this.axios.get<T>(url, requestConfig);
          break;
      }
      return response.data;
    } catch (error: any) {
      let message = 'Printify SDK Error';
      if ((error as AxiosError).isAxiosError) {
        message = `Printify SDK: ${error.response?.status} ${error.response?.statusText} - Requested URL: ${this.baseUrl}${url}`;
      }
      this.logError(message);
      const printifyError = new Error(message);
      printifyError.stack = undefined;
      throw printifyError;
    }
  }
}

export default HttpClient;
