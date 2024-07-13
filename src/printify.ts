import Catalog from './catalog';
import FetchUtil, { FetchDataFunc } from './fetch';
import Orders from './orders';
import Products from './products';
import Shops from './shops';
import Uploads from './uploads';
import Webhooks from './webhooks';

interface PrintifyConfig {
  shopId: string;
  accessToken: string;
}

class Printify {
  shopId: string;
  accessToken: string;
  fetchData: FetchDataFunc;
  catalog: Object;
  orders: Object;
  products: Object;
  shops: Object;
  uploads: Object;
  webhooks: Object;

  constructor(config: PrintifyConfig) {
    this.shopId = config.shopId;
    this.accessToken = config.accessToken;
    this.fetchData = new FetchUtil(this.accessToken).fetchData;

    this.catalog = new Catalog(this.fetchData, this.shopId);
    this.orders = new Orders(this.fetchData, this.shopId);
    this.products = new Products(this.fetchData, this.shopId);
    this.shops = new Shops(this.fetchData, this.shopId);
    this.uploads = new Uploads(this.fetchData, this.shopId);
    this.webhooks = new Webhooks(this.fetchData, this.shopId);
  }
}

export default Printify;
