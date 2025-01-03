import { FetchDataFn } from '../../client';
// import getSomething from './getSomething';

// TODO v1.3.0
export interface ICatalogV2 {
  // getSomething: ReturnType<typeof getSomething>;
}

class CatalogV2 implements ICatalogV2 {
  //   getSomething: ReturnType<typeof getSomething>;

  constructor(fetchData: FetchDataFn, shopId: string) {
    // this.getSomething = getSomething(fetchData);
  }
}

export default CatalogV2;
