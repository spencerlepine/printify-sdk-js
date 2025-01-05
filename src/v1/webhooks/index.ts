import { PrintifyConfig } from '../../client';
import HttpClient from '../../http';
import list from './list';
import create from './create';
import updateOne from './updateOne';
import deleteOne from './deleteOne';

class Webhooks extends HttpClient {
  list: typeof list;
  create: typeof create;
  updateOne: typeof updateOne;
  deleteOne: typeof deleteOne;

  constructor(config: PrintifyConfig) {
    super(config);

    this.list = list.bind(this);
    this.create = create.bind(this);
    this.updateOne = updateOne.bind(this);
    this.deleteOne = deleteOne.bind(this);
  }
}

export default Webhooks;
