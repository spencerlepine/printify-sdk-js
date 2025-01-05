import Catalog from './v1/catalog';
import Orders, { IOrders } from './v1/orders';
import Products, { IProducts } from './v1/products';
import Shops from './v1/shops';
import Uploads, { IUploads } from './v1/uploads';
import Webhooks, { IWebhooks } from './v1/webhooks';
import { AxiosRequestConfig } from 'axios';

// TODO - delete me
export type FetchDataFn = <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>;

export interface PrintifyConfig {
  accessToken: string;
  shopId?: string;
  enableLogging?: boolean;
  host?: string;
  timeout?: number;
}

class PrintifyClient {
  shopId?: string;
  catalog: Catalog;
  // v2: { catalog: ICatalogV2 }; // Define v2.catalog structure
  // orders: IOrders;
  // products: IProducts;
  shops: Shops;
  // uploads: IUploads;
  // webhooks: IWebhooks;

  constructor(config: PrintifyConfig) {
    this.shopId = config.shopId;
    this.catalog = new Catalog(config);
    // this.v2 = { catalog: new ICatalogV2(this) };
    // this.orders = new Orders(this.fetchData.bind(this), this.shopId);
    // this.products = new Products(this.fetchData.bind(this), this.shopId);
    // this.shops = new Shops(this.fetchData.bind(this), this.shopId);
    this.shops = new Shops(config);
    // this.uploads = new Uploads(this.fetchData.bind(this), this.shopId);
    // this.webhooks = new Webhooks(this.fetchData.bind(this), this.shopId);
  }
}

export default PrintifyClient;
