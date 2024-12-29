import { FetchDataFn } from '../../client';
import list from './list';
import create from './create';
import updateOne from './updateOne';
import deleteOne from './deleteOne';

export interface IWebhooks {
  list: ReturnType<typeof list>;
  create: ReturnType<typeof create>;
  updateOne: ReturnType<typeof updateOne>;
  deleteOne: ReturnType<typeof deleteOne>;
}

class Webhooks implements IWebhooks {
  list: ReturnType<typeof list>;
  create: ReturnType<typeof create>;
  updateOne: ReturnType<typeof updateOne>;
  deleteOne: ReturnType<typeof deleteOne>;

  constructor(fetchData: FetchDataFn, shopId: string) {
    this.list = list(fetchData, shopId);
    this.create = create(fetchData, shopId);
    this.updateOne = updateOne(fetchData, shopId);
    this.deleteOne = deleteOne(fetchData, shopId);
  }
}

export default Webhooks;
