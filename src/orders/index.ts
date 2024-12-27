import { FetchDataFunc } from '../client';
import list, { ListOrdersFunc } from './list';
import getOne, { GetOrderFunc } from './getOne';
import submit, { SubmitOrderFunc } from './submit';
import submitExpress, { SubmitExpressFunc } from './submitExpress';
import sendToProduction, { SendToProductionFunc } from './sendToProduction';
import calculateShipping, { CalculateShippingFunc } from './calculateShipping';
import cancelUnpaid, { CancelUnpaidFunc } from './cancelUnpaid';

export interface OrdersMethods {
  list: ListOrdersFunc;
  getOne: GetOrderFunc;
  submit: SubmitOrderFunc;
  submitExpress: SubmitExpressFunc;
  sendToProduction: SendToProductionFunc;
  calculateShipping: CalculateShippingFunc;
  cancelUnpaid: CancelUnpaidFunc;
}

class Orders implements OrdersMethods {
  list: ListOrdersFunc;
  getOne: GetOrderFunc;
  submit: SubmitOrderFunc;
  submitExpress: SubmitExpressFunc;
  sendToProduction: SendToProductionFunc;
  calculateShipping: CalculateShippingFunc;
  cancelUnpaid: CancelUnpaidFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
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
