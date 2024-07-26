import { FetchDataFunc } from '../printify';
import list, { ListWebhooksFunc } from './list';
import create, { CreateWebhookFunc } from './create';
import updateOne, { UpdateWebhookFunc } from './updateOne';
import deleteOne, { DeleteWebhookFunc } from './deleteOne';

export interface WebhookMethods {
  list: ListWebhooksFunc;
  create: CreateWebhookFunc;
  updateOne: UpdateWebhookFunc;
  deleteOne: DeleteWebhookFunc;
}

class Webhooks implements WebhookMethods {
  list: ListWebhooksFunc;
  create: CreateWebhookFunc;
  updateOne: UpdateWebhookFunc;
  deleteOne: DeleteWebhookFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.list = list(fetchData, shopId);
    this.create = create(fetchData, shopId);
    this.updateOne = updateOne(fetchData, shopId);
    this.deleteOne = deleteOne(fetchData, shopId);
  }
}

export default Webhooks;
