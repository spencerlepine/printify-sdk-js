import { FetchDataFunc } from '../printify';
import archive, { ArchiveFunc } from './archive';
import getById, { GetByIdFunc } from './getById';
import list, { ListFunc } from './list';
import uploadImage, { UploadImageFunc } from './uploadImage';

class Uploads {
  archive: ArchiveFunc;
  getById: GetByIdFunc;
  list: ListFunc;
  uploadImage: UploadImageFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.archive = archive(fetchData, shopId);
    this.getById = getById(fetchData, shopId);
    this.list = list(fetchData, shopId);
    this.uploadImage = uploadImage(fetchData, shopId);
  }
}

export default Uploads;
