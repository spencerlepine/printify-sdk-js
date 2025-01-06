import { PrintifyConfig } from '../../client';
import HttpClient from '../../http';
import create from './create';
import deleteOne from './deleteOne';
import getOne from './getOne';
import list from './list';
import notifyUnpublished from './notifyUnpublished';
import publishOne from './publishOne';
import setPublishFailed from './setPublishFailed';
import setPublishSucceeded from './setPublishSucceeded';
import updateOne from './updateOne';

class Products extends HttpClient {
  create: typeof create;
  deleteOne: typeof deleteOne;
  getOne: typeof getOne;
  list: typeof list;
  notifyUnpublished: typeof notifyUnpublished;
  publishOne: typeof publishOne;
  setPublishFailed: typeof setPublishFailed;
  setPublishSucceeded: typeof setPublishSucceeded;
  updateOne: typeof updateOne;

  constructor(config: PrintifyConfig) {
    super(config);

    this.create = create.bind(this);
    this.deleteOne = deleteOne.bind(this);
    this.getOne = getOne.bind(this);
    this.list = list.bind(this);
    this.notifyUnpublished = notifyUnpublished.bind(this);
    this.publishOne = publishOne.bind(this);
    this.setPublishFailed = setPublishFailed.bind(this);
    this.setPublishSucceeded = setPublishSucceeded.bind(this);
    this.updateOne = updateOne.bind(this);
  }
}

export default Products;
