import { FetchDataFunc } from '../printify';
// import create, { CreateFunc } from './create';
// import deleteOne, { DeleteOneFunc } from './deleteOne';
// import getOne, { GetOneFunc } from './getOne';
import list, { ListFunc } from './list';
// import notifyUnpublished, { NotifyUnpublishedFunc } from './notifyUnpublished';
// import publishOne, { PublishOneFunc } from './publishOne';
// import setPublishFailed, { SetPublishFailedFunc } from './setPublishFailed';
// import setPublishSucceeded, { SetPublishSucceededFunc } from './setPublishSucceeded';
// import updateOne, { UpdateOneFunc } from './updateOne';

class Products {
  // create: CreateFunc;
  // deleteOne: DeleteOneFunc;
  // getOne: GetOneFunc;
  list: ListFunc;
  // notifyUnpublished: NotifyUnpublishedFunc;
  // publishOne: PublishOneFunc;
  // setPublishFailed: SetPublishFailedFunc;
  // setPublishSucceeded: SetPublishSucceededFunc;
  // updateOne: UpdateOneFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    // this.create = create(fetchData, shopId);
    // this.deleteOne = deleteOne(fetchData, shopId);
    // this.getOne = getOne(fetchData, shopId);
    this.list = list(fetchData, shopId);
    // this.notifyUnpublished = notifyUnpublished(fetchData, shopId);
    // this.publishOne = publishOne(fetchData, shopId);
    // this.setPublishFailed = setPublishFailed(fetchData, shopId);
    // this.setPublishSucceeded = setPublishSucceeded(fetchData, shopId);
    // this.updateOne = updateOne(fetchData, shopId);
  }
}

export default Products;
