import { FetchDataFunc } from '../client';
import archive, { ArchiveUploadFunc } from './archive';
import getById, { GetUploadByIdFunc } from './getById';
import list, { ListUploadsFunc } from './list';
import uploadImage, { UploadImageFunc } from './uploadImage';

export interface UploadsMethods {
  archive: ArchiveUploadFunc;
  getById: GetUploadByIdFunc;
  list: ListUploadsFunc;
  uploadImage: UploadImageFunc;
}

class Uploads implements UploadsMethods {
  archive: ArchiveUploadFunc;
  getById: GetUploadByIdFunc;
  list: ListUploadsFunc;
  uploadImage: UploadImageFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.archive = archive(fetchData);
    this.getById = getById(fetchData);
    this.list = list(fetchData);
    this.uploadImage = uploadImage(fetchData);
  }
}

export default Uploads;
