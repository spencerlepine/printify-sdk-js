import { PrintifyConfig } from '../../client';
import HttpClient from '../../http';
import deleteOne from './deleteOne';
import list from './list';

class Shops extends HttpClient {
  deleteOne: typeof deleteOne;
  list: typeof list;

  constructor(config: PrintifyConfig) {
    super(config);

    this.deleteOne = deleteOne.bind(this);
    this.list = list.bind(this);
  }
}

export default Shops;
