import { FetchDataFn } from '../../client';
import list from './list';
import getOne from './getOne';
import submit from './submit';
import submitExpress from './submitExpress';
import sendToProduction from './sendToProduction';
import calculateShipping from './calculateShipping';
import cancelUnpaid from './cancelUnpaid';

export interface IOrders {
  list: ReturnType<typeof list>;
  getOne: ReturnType<typeof getOne>;
  submit: ReturnType<typeof submit>;
  submitExpress: ReturnType<typeof submitExpress>;
  sendToProduction: ReturnType<typeof sendToProduction>;
  calculateShipping: ReturnType<typeof calculateShipping>;
  cancelUnpaid: ReturnType<typeof cancelUnpaid>;
}

class Orders implements IOrders {
  list: ReturnType<typeof list>;
  getOne: ReturnType<typeof getOne>;
  submit: ReturnType<typeof submit>;
  submitExpress: ReturnType<typeof submitExpress>;
  sendToProduction: ReturnType<typeof sendToProduction>;
  calculateShipping: ReturnType<typeof calculateShipping>;
  cancelUnpaid: ReturnType<typeof cancelUnpaid>;

  constructor(fetchData: FetchDataFn, shopId: string) {
    this.list = list(fetchData, shopId);
    this.getOne = getOne(fetchData, shopId);
    this.submit = submit(fetchData, shopId);
    this.submitExpress = submitExpress(fetchData, shopId);
    this.sendToProduction = sendToProduction(fetchData, shopId);
    this.calculateShipping = calculateShipping(fetchData, shopId);
    this.cancelUnpaid = cancelUnpaid(fetchData, shopId);
  }
}

export default Orders;
