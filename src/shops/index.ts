import { FetchDataFunc } from '../printify';
import deleteOne, { DeleteShopFunc } from './deleteOne';
import list, { ListShopsFunc } from './list';

export interface ShopsMethods {
  deleteOne: DeleteShopFunc;
  list: ListShopsFunc;
}

class Shops implements ShopsMethods {
  deleteOne: DeleteShopFunc;
  list: ListShopsFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.deleteOne = deleteOne(fetchData, shopId);
    this.list = list(fetchData);
  }
}

export default Shops;
