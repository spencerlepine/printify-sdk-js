import Catalog, { CatalogMethods } from './catalog';
import Orders, { OrdersMethods } from './orders';
import Products, { ProductsMethods } from './products';
import Shops, { ShopsMethods } from './shops';
import Uploads, { UploadsMethods } from './uploads';
import Webhooks, { WebhookMethods } from './webhooks';
import { BASE_URL } from './constants';

export type FetchDataFunc = (url: string, config?: RequestInit) => Promise<any>;

export interface PrintifyConfig {
  shopId: string;
  accessToken: string;
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

  constructor(config: PrintifyConfig) {
    this.shopId = config.shopId;
    this.#accessToken = config.accessToken;

    this.catalog = new Catalog(this.fetchData.bind(this), this.shopId);
    this.orders = new Orders(this.fetchData.bind(this), this.shopId);
    this.products = new Products(this.fetchData.bind(this), this.shopId);
    this.shops = new Shops(this.fetchData.bind(this), this.shopId);
    this.uploads = new Uploads(this.fetchData.bind(this), this.shopId);
    this.webhooks = new Webhooks(this.fetchData.bind(this), this.shopId);
  }

  // Printify REST API (v1) Specification:
  // header: `Authorization: Bearer ${PRINTIFY_API_TOKEN}`
  // ContentType: application/json;charset=utf-8
  // baseUrl: https://api.printify.com/v1/
  private async fetchData(url: string, config: RequestInit = {}): Promise<any> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.#accessToken}`,
    };

    const requestData = {
      ...config,
      headers: {
        ...defaultHeaders,
        ...(config.headers || {}),
      },
    };

    try {
      const response = await fetch(`${BASE_URL}${url}`, requestData);
      if (!response.ok) {
        throw new Error(`Printify SDK Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      // Rethrow the error for upstream code to handle
      throw error;
    }
  }
}

export default Printify;
