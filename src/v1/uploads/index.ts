import { FetchDataFn } from '../../client';
import archive from './archive';
import getById from './getById';
import list from './list';
import uploadImage from './uploadImage';

export interface IUploads {
  archive: ReturnType<typeof archive>;
  getById: ReturnType<typeof getById>;
  list: ReturnType<typeof list>;
  uploadImage: ReturnType<typeof uploadImage>;
}

class Uploads implements IUploads {
  archive: ReturnType<typeof archive>;
  getById: ReturnType<typeof getById>;
  list: ReturnType<typeof list>;
  uploadImage: ReturnType<typeof uploadImage>;

  constructor(fetchData: FetchDataFn, shopId: string) {
    this.archive = archive(fetchData);
    this.getById = getById(fetchData);
    this.list = list(fetchData);
    this.uploadImage = uploadImage(fetchData);
  }
}

export default Uploads;
