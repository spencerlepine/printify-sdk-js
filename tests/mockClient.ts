import Printify from '../src/client';

export const config = {
  shopId: '123456',
  accessToken: 'mockAccessToken',
};

const printify = new Printify(config);

export default printify;
