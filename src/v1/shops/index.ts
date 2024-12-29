import { FetchDataFn } from '../../client';
import deleteOne from './deleteOne';
import list from './list';

export interface IShops {
  deleteOne: ReturnType<typeof deleteOne>;
  list: ReturnType<typeof list>;
}

class Shops implements IShops {
  deleteOne: ReturnType<typeof deleteOne>;
  list: ReturnType<typeof list>;

  constructor(fetchData: FetchDataFn, shopId: string) {
    this.deleteOne = deleteOne(fetchData, shopId);
    this.list = list(fetchData);
  }
}

export default Shops;
