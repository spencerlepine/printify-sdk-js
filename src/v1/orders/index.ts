import { PrintifyConfig } from '../../client';
import HttpClient from '../../http';
import list from './list';
import getOne from './getOne';
import submit from './submit';
import submitExpress from './submitExpress';
import sendToProduction from './sendToProduction';
import calculateShipping from './calculateShipping';
import cancelUnpaid from './cancelUnpaid';

class Orders extends HttpClient {
  list: typeof list;
  getOne: typeof getOne;
  submit: typeof submit;
  submitExpress: typeof submitExpress;
  sendToProduction: typeof sendToProduction;
  calculateShipping: typeof calculateShipping;
  cancelUnpaid: typeof cancelUnpaid;

  constructor(config: PrintifyConfig) {
    super(config);

    this.list = list.bind(this);
    this.getOne = getOne.bind(this);
    this.submit = submit.bind(this);
    this.submitExpress = submitExpress.bind(this);
    this.sendToProduction = sendToProduction.bind(this);
    this.calculateShipping = calculateShipping.bind(this);
    this.cancelUnpaid = cancelUnpaid.bind(this);
  }
}

export default Orders;
