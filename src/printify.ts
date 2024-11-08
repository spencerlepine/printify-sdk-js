import Catalog, { CatalogMethods } from './catalog';
import Orders, { OrdersMethods } from './orders';
import Products, { ProductsMethods } from './products';
import Shops, { ShopsMethods } from './shops';
import Uploads, { UploadsMethods } from './uploads';
import Webhooks, { WebhookMethods } from './webhooks';
import { BASE_URL } from './constants';
import axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

export type FetchDataFunc = <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>;

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export interface PrintifyConfig {
  shopId: string;
  accessToken: string;
  enableLogging?: boolean;
}

class Printify {
  shopId: string;
  #accessToken: string;
  catalog: CatalogMethods;
  orders: OrdersMethods;
  products: ProductsMethods;
  shops: ShopsMethods;
  uploads: UploadsMethods;
  webhooks: WebhookMethods;
  enableLogging: boolean;

  constructor(config: PrintifyConfig) {
    this.shopId = config.shopId;
    this.#accessToken = config.accessToken;
    this.enableLogging = config.enableLogging ?? true;

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
      console.log(`Requesting ${method.toUpperCase()} ${BASE_URL}${url}`);
    }
  }

  private async fetchData<T = any>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.#accessToken}`,
    };

    const requestConfig: AxiosRequestConfig = {
      ...(config.method ? config : { ...config, method: 'GET' }),
      baseURL: BASE_URL,
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
        case 'patch':
          response = await axios.patch<T>(url, config.data, requestConfig);
          break;
        case 'get':
        default:
          response = await axios.get<T>(url, requestConfig);
          break;
      }
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = `Printify SDK Error: ${error.response?.status} ${error.response?.statusText} - Requested URL: ${BASE_URL}${url}`;
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
