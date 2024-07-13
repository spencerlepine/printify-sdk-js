import FetchUtil, { FetchDataFunc } from './fetch';
import Webhooks from './webhooks';

interface PrintifyConfig {
  shopId: string;
  accessToken: string;
}

class Printify {
  shopId: string;
  accessToken: string;
  fetchData: FetchDataFunc;
  webhooks: Object;

  constructor(config: PrintifyConfig) {
    this.shopId = config.shopId;
    this.accessToken = config.accessToken;
    this.fetchData = new FetchUtil(this.accessToken).fetchData;

    this.webhooks = new Webhooks(this.fetchData, this.shopId);
  }
}

export default Printify;
