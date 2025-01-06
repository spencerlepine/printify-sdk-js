import { PrintifyConfig } from '../../client';
import HttpClient from '../../http';
import getEconomyShippingInfo from './getEconomyShippingInfo';
import getExpressShippingInfo from './getExpressShippingInfo';
import getPriorityShippingInfo from './getPriorityShippingInfo';
import getShippingListInfo from './getShippingListInfo';
import getStandardShippingInfo from './getStandardShippingInfo';

class CatalogV2 extends HttpClient {
  getShippingListInfo: typeof getShippingListInfo;
  getStandardShippingInfo: typeof getStandardShippingInfo;
  getPriorityShippingInfo: typeof getPriorityShippingInfo;
  getExpressShippingInfo: typeof getExpressShippingInfo;
  getEconomyShippingInfo: typeof getEconomyShippingInfo;

  constructor(config: PrintifyConfig) {
    super(config);
    this.getShippingListInfo = getShippingListInfo.bind(this);
    this.getStandardShippingInfo = getStandardShippingInfo.bind(this);
    this.getPriorityShippingInfo = getPriorityShippingInfo.bind(this);
    this.getExpressShippingInfo = getExpressShippingInfo.bind(this);
    this.getEconomyShippingInfo = getEconomyShippingInfo.bind(this);
  }
}

export default CatalogV2;
