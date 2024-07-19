import Printify from '../src/printify';

export const config = {
  shopId: '123456',
  accessToken: 'mockAccessToken',
};

const printify = new Printify(config);

export default printify;
