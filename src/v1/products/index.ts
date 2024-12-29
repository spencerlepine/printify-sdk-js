import { FetchDataFn } from '../../client';
import create from './create';
import deleteOne from './deleteOne';
import getOne from './getOne';
import list from './list';
import notifyUnpublished from './notifyUnpublished';
import publishOne from './publishOne';
import setPublishFailed from './setPublishFailed';
import setPublishSucceeded from './setPublishSucceeded';
import updateOne from './updateOne';

export interface IProducts {
  create: ReturnType<typeof create>;
  deleteOne: ReturnType<typeof deleteOne>;
  getOne: ReturnType<typeof getOne>;
  list: ReturnType<typeof list>;
  notifyUnpublished: ReturnType<typeof notifyUnpublished>;
  publishOne: ReturnType<typeof publishOne>;
  setPublishFailed: ReturnType<typeof setPublishFailed>;
  setPublishSucceeded: ReturnType<typeof setPublishSucceeded>;
  updateOne: ReturnType<typeof updateOne>;
}

class Products implements IProducts {
  create: ReturnType<typeof create>;
  deleteOne: ReturnType<typeof deleteOne>;
  getOne: ReturnType<typeof getOne>;
  list: ReturnType<typeof list>;
  notifyUnpublished: ReturnType<typeof notifyUnpublished>;
  publishOne: ReturnType<typeof publishOne>;
  setPublishFailed: ReturnType<typeof setPublishFailed>;
  setPublishSucceeded: ReturnType<typeof setPublishSucceeded>;
  updateOne: ReturnType<typeof updateOne>;

  constructor(fetchData: FetchDataFn, shopId: string) {
    this.create = create(fetchData, shopId);
    this.deleteOne = deleteOne(fetchData, shopId);
    this.getOne = getOne(fetchData, shopId);
    this.list = list(fetchData, shopId);
    this.notifyUnpublished = notifyUnpublished(fetchData, shopId);
    this.publishOne = publishOne(fetchData, shopId);
    this.setPublishFailed = setPublishFailed(fetchData, shopId);
    this.setPublishSucceeded = setPublishSucceeded(fetchData, shopId);
    this.updateOne = updateOne(fetchData, shopId);
  }
}

export default Products;
