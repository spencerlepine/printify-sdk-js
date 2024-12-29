import { FetchDataFn } from '../../client';
import listBlueprints from './listBlueprints';
import getBlueprint from './getBlueprint';
import getBlueprintProviders from './getBlueprintProviders';
import getBlueprintVariants from './getBlueprintVariants';
import getVariantShipping from './getVariantShipping';
import listProviders from './listProviders';
import getProvider from './getProvider';

export interface ICatalog {
  listBlueprints: ReturnType<typeof listBlueprints>;
  getBlueprint: ReturnType<typeof getBlueprint>;
  getBlueprintProviders: ReturnType<typeof getBlueprintProviders>;
  getBlueprintVariants: ReturnType<typeof getBlueprintVariants>;
  getVariantShipping: ReturnType<typeof getVariantShipping>;
  listProviders: ReturnType<typeof listProviders>;
  getProvider: ReturnType<typeof getProvider>;
}

class Catalog implements ICatalog {
  listBlueprints: ReturnType<typeof listBlueprints>;
  getBlueprint: ReturnType<typeof getBlueprint>;
  getBlueprintProviders: ReturnType<typeof getBlueprintProviders>;
  getBlueprintVariants: ReturnType<typeof getBlueprintVariants>;
  getVariantShipping: ReturnType<typeof getVariantShipping>;
  listProviders: ReturnType<typeof listProviders>;
  getProvider: ReturnType<typeof getProvider>;

  constructor(fetchData: FetchDataFn, shopId: string) {
    this.listBlueprints = listBlueprints(fetchData);
    this.getBlueprint = getBlueprint(fetchData);
    this.getBlueprintProviders = getBlueprintProviders(fetchData);
    this.getBlueprintVariants = getBlueprintVariants(fetchData);
    this.getVariantShipping = getVariantShipping(fetchData);
    this.listProviders = listProviders(fetchData);
    this.getProvider = getProvider(fetchData);
  }
}

export default Catalog;
