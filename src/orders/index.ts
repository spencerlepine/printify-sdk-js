import { FetchDataFunc } from '../printify';
import list, { ListFunc } from './list';
import get, { GetFunc } from './get';
import submit, { SubmitFunc } from './submit';
import submitExpress, { SubmitExpressFunc } from './submitExpress';
import sendToProduction, { SendToProductionFunc } from './sendToProduction';
import calculateShipping, { CalculateShippingFunc } from './calculateShipping';
import cancelUnpaid, { CancelUnpaidFunc } from './cancelUnpaid';

class Orders {
  list: ListFunc;
  get: GetFunc;
  submit: SubmitFunc;
  submitExpress: SubmitExpressFunc;
  sendToProduction: SendToProductionFunc;
  calculateShipping: CalculateShippingFunc;
  cancelUnpaid: CancelUnpaidFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.list = list(fetchData, shopId);
    this.get = get(fetchData, shopId);
    this.submit = submit(fetchData, shopId);
    this.submitExpress = submitExpress(fetchData, shopId);
    this.sendToProduction = sendToProduction(fetchData, shopId);
    this.calculateShipping = calculateShipping(fetchData, shopId);
    this.cancelUnpaid = cancelUnpaid(fetchData, shopId);
  }
}

export default Orders;
