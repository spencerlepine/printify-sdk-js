import { FetchDataFunc } from '../fetch';
// import list from './list';
import create, { CreateFunc } from './create';
// import updateOne from './updateOne';
// import deleteOne from './deleteOne';

class Webhooks {
  fetchData: FetchDataFunc;
  shopId: string;
  create: CreateFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.fetchData = fetchData;
    this.shopId = shopId;

    // this.list = list;
    this.create = create(this.fetchData, this.shopId);
    // this.updateOne = updateOne;
    // this.deleteOne = deleteOne;
  }
}

export default Webhooks;
