import { PrintifyConfig } from '../../client';
import HttpClient from '../../http';
import getShippingListInfo from './getShippingListInfo';

class CatalogV2 extends HttpClient {
  getShippingListInfo: typeof getShippingListInfo;

  constructor(config: PrintifyConfig) {
    super(config);
    this.getShippingListInfo = getShippingListInfo.bind(this);
  }
}

export default CatalogV2;
