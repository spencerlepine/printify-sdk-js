// @ts-nocheck
import Printify from '../src/index';
import Catalog from '../src/v1/catalog';
import Orders from '../src/v1/orders';
import Products from '../src/v1/products';
import Shops from '../src/v1/shops';
import Uploads from '../src/v1/uploads';
import Webhooks from '../src/v1/webhooks';

jest.mock('../src/v1/catalog');
jest.mock('../src/v1/orders');
jest.mock('../src/v1/products');
jest.mock('../src/v1/shops');
jest.mock('../src/v1/uploads');
jest.mock('../src/v1/webhooks');

describe('PrintifyClient', () => {
  let printify: Printify;
  const shopId = 'testShopId';
  const accessToken = 'mockAccessToken';
  const config = { accessToken, shopId };

  beforeEach(() => {
    printify = new Printify(config);
  });

  it('should initialize with provided config', () => {
    expect(printify.shopId).toBe(shopId);
    expect(printify.catalog).toBeInstanceOf(Catalog);
    expect(printify.orders).toBeInstanceOf(Orders);
    expect(printify.products).toBeInstanceOf(Products);
    expect(printify.shops).toBeInstanceOf(Shops);
    expect(printify.uploads).toBeInstanceOf(Uploads);
    expect(printify.webhooks).toBeInstanceOf(Webhooks);
  });

  it('should initialize without shopId if not provided', () => {
    const printifyWithoutShopId = new Printify({ accessToken });
    expect(printifyWithoutShopId.shopId).toBeUndefined();
  });

  it('should not allow direct access to accessToken', () => {
    expect(printify.accessToken).toBeUndefined();
    expect(printify.shops.accessToken).toBeUndefined();
  });

  it('should initialize catalog with the correct config', () => {
    expect(printify.catalog).toBeInstanceOf(Catalog);
    expect(Catalog).toHaveBeenCalledWith(config);
  });

  it('should initialize orders with the correct config', () => {
    expect(printify.orders).toBeInstanceOf(Orders);
    expect(Orders).toHaveBeenCalledWith(config);
  });

  it('should initialize products with the correct config', () => {
    expect(printify.products).toBeInstanceOf(Products);
    expect(Products).toHaveBeenCalledWith(config);
  });

  it('should initialize shops with the correct config', () => {
    expect(printify.shops).toBeInstanceOf(Shops);
    expect(Shops).toHaveBeenCalledWith(config);
  });

  it('should initialize uploads with the correct config', () => {
    expect(printify.uploads).toBeInstanceOf(Uploads);
    expect(Uploads).toHaveBeenCalledWith(config);
  });

  it('should initialize webhooks with the correct config', () => {
    expect(printify.webhooks).toBeInstanceOf(Webhooks);
    expect(Webhooks).toHaveBeenCalledWith(config);
  });

  it('should handle missing accessToken gracefully', () => {
    const printifyMissingToken = () => new Printify({ shopId });
    expect(printifyMissingToken).toThrowError('accessToken is required');
  });
});
