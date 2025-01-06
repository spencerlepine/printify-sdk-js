import Catalog from './v1/catalog';
import CatalogV2 from './v2/catalog';
import Orders from './v1/orders';
import Products from './v1/products';
import Shops from './v1/shops';
import Uploads from './v1/uploads';
import Webhooks from './v1/webhooks';

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
  orders: Orders;
  products: Products;
  shops: Shops;
  uploads: Uploads;
  webhooks: Webhooks;
  v2: { catalog: CatalogV2 };

  constructor(config: PrintifyConfig) {
    if (!config.accessToken) throw new Error('accessToken is required');

    this.shopId = config.shopId;
    this.catalog = new Catalog(config);
    this.v2 = { catalog: new CatalogV2(config) };
    this.orders = new Orders(config);
    this.products = new Products(config);
    this.shops = new Shops(config);
    this.uploads = new Uploads(config);
    this.webhooks = new Webhooks(config);
  }
}

export default PrintifyClient;
