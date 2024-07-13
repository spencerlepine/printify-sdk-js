import { FetchDataFunc } from '../fetch';
// import getAll, { GetAllFunc } from './getAll';

class Uploads {
  fetchData: FetchDataFunc;
  shopId: string;
  // getAll: GetAllFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.fetchData = fetchData;
    this.shopId = shopId;

    // this.getAll = getAll(this.fetchData);
  }
}

export default Uploads;
