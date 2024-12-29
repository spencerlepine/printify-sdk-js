import Catalog, { ICatalog } from './v1/catalog';
import Orders, { IOrders } from './v1/orders';
import Products, { IProducts } from './v1/products';
import Shops, { IShops } from './v1/shops';
import Uploads, { IUploads } from './v1/uploads';
import Webhooks, { IWebhooks } from './v1/webhooks';
import axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

export type FetchDataFn = <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>;

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export interface PrintifyConfig {
  shopId: string;
  accessToken: string;
  apiVersion?: string;
  enableLogging?: boolean;
  host?: 'api.printify.com';
  timeout?: number;
}

class Printify {
  shopId: string;
  #accessToken: string;
  apiVersion?: string;
  enableLogging: boolean;
  host: string;
  timeout: number;
  baseUrl: string;
  // methods
  catalog!: ICatalog;
  orders: IOrders;
  products: IProducts;
  shops: IShops;
  uploads: IUploads;
  webhooks: IWebhooks;

  constructor(config: PrintifyConfig) {
    this.shopId = config.shopId;
    this.#accessToken = config.accessToken;
    this.apiVersion = config.apiVersion || 'v1';
    this.enableLogging = config.enableLogging ?? true;
    this.host = config.host || 'api.printify.com';
    this.timeout = config.timeout || 5000;
    this.baseUrl = `https://${this.host}`;
    // methods
    this.catalog = new Catalog(this.fetchData.bind(this), this.shopId);
    this.orders = new Orders(this.fetchData.bind(this), this.shopId);
    this.products = new Products(this.fetchData.bind(this), this.shopId);
    this.shops = new Shops(this.fetchData.bind(this), this.shopId);
    this.uploads = new Uploads(this.fetchData.bind(this), this.shopId);
    this.webhooks = new Webhooks(this.fetchData.bind(this), this.shopId);
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

  private async fetchData<T = any>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.#accessToken}`,
    };

    const requestConfig: AxiosRequestConfig = {
      ...(config.method ? config : { ...config, method: 'GET' }),
      baseURL: this.baseUrl,
      timeout: this.timeout,
      headers: {
        ...defaultHeaders,
        ...(config.headers || {}),
      },
    };

    const method = config.method?.toLowerCase() || 'get';
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
        // case 'patch':
        //   response = await axios.patch<T>(url, config.data, requestConfig);
        //   break;
        case 'get':
        default:
          response = await axios.get<T>(url, requestConfig);
          break;
      }
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = `Printify SDK Error: ${error.response?.status} ${error.response?.statusText} - Requested URL: ${this.baseUrl}${url}`;
        this.logError(message);
        throw new Error(message);
      } else {
        const message = 'Printify SDK Unknown Error';
        this.logError(message);
        throw new Error(message);
      }
    }
  }
}

export default Printify;
