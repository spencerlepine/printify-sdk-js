import { FetchDataFunc } from '../printify';
import list, { ListFunc } from './list';
import create, { CreateFunc } from './create';
import updateOne, { UpdateOneFunc } from './updateOne';
import deleteOne, { DeleteOneFunc } from './deleteOne';

class Webhooks {
  list: ListFunc;
  create: CreateFunc;
  updateOne: UpdateOneFunc;
  deleteOne: DeleteOneFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.list = list(fetchData, shopId);
    this.create = create(fetchData, shopId);
    this.updateOne = updateOne(fetchData, shopId);
    this.deleteOne = deleteOne(fetchData, shopId);
  }
}

export default Webhooks;
