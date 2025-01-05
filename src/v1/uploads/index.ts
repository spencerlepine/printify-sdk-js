import { PrintifyConfig } from '../../client';
import HttpClient from '../../http';
import archive from './archive';
import getById from './getById';
import list from './list';
import uploadImage from './uploadImage';

class Uploads extends HttpClient {
  archive: typeof archive;
  getById: typeof getById;
  list: typeof list;
  uploadImage: typeof uploadImage;

  constructor(config: PrintifyConfig) {
    super(config);

    this.archive = archive.bind(this);
    this.getById = getById.bind(this);
    this.list = list.bind(this);
    this.uploadImage = uploadImage.bind(this);
  }
}

export default Uploads;
