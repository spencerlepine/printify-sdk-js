import { FetchDataFunc } from '../printify';
import deleteOne, { DeleteOneFunc } from './deleteOne';
import list, { ListFunc } from './list';

class Shops {
  deleteOne: DeleteOneFunc;
  list: ListFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.deleteOne = deleteOne(fetchData, shopId);
    this.list = list(fetchData, shopId);
  }
}

export default Shops;
