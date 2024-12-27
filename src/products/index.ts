import { FetchDataFunc } from '../client';
import create, { CreateProductFunc } from './create';
import deleteOne, { DeleteProductFunc } from './deleteOne';
import getOne, { GetProductFunc } from './getOne';
import list, { ListProductsFunc } from './list';
import notifyUnpublished, { NotifyUnpublishedFunc } from './notifyUnpublished';
import publishOne, { PublishProductFunc } from './publishOne';
import setPublishFailed, { SetPublishFailedFunc } from './setPublishFailed';
import setPublishSucceeded, { SetPublishSucceededFunc } from './setPublishSucceeded';
import updateOne, { UpdateProductFunc } from './updateOne';

export interface ProductsMethods {
  create: CreateProductFunc;
  deleteOne: DeleteProductFunc;
  getOne: GetProductFunc;
  list: ListProductsFunc;
  notifyUnpublished: NotifyUnpublishedFunc;
  publishOne: PublishProductFunc;
  setPublishFailed: SetPublishFailedFunc;
  setPublishSucceeded: SetPublishSucceededFunc;
  updateOne: UpdateProductFunc;
}

class Products implements ProductsMethods {
  create: CreateProductFunc;
  deleteOne: DeleteProductFunc;
  getOne: GetProductFunc;
  list: ListProductsFunc;
  notifyUnpublished: NotifyUnpublishedFunc;
  publishOne: PublishProductFunc;
  setPublishFailed: SetPublishFailedFunc;
  setPublishSucceeded: SetPublishSucceededFunc;
  updateOne: UpdateProductFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
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
