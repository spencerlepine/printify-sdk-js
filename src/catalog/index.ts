import { FetchDataFunc } from '../printify';
import listBlueprints, { ListBlueprintsFunc } from './listBlueprints';
import getBlueprint, { GetBlueprintFunc } from './getBlueprint';
import getBlueprintProviders, { GetBlueprintProvidersFunc } from './getBlueprintProviders';
import getBlueprintVariants, { GetBlueprintVariantsFunc } from './getBlueprintVariants';
import getVariantShipping, { GetVariantShippingFunc } from './getVariantShipping';
import listProviders, { ListProvidersFunc } from './listProviders';
import getProvider, { GetProviderFunc } from './getProvider';

class Catalog {
  fetchData: FetchDataFunc;
  shopId: string;
  listBlueprints: ListBlueprintsFunc;
  getBlueprint: GetBlueprintFunc;
  getBlueprintProviders: GetBlueprintProvidersFunc;
  getBlueprintVariants: GetBlueprintVariantsFunc;
  getVariantShipping: GetVariantShippingFunc;
  listProviders: ListProvidersFunc;
  getProvider: GetProviderFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
    this.fetchData = fetchData;
    this.shopId = shopId;
    this.listBlueprints = listBlueprints(fetchData, shopId);
    this.getBlueprint = getBlueprint(fetchData, shopId);
    this.getBlueprintProviders = getBlueprintProviders(fetchData, shopId);
    this.getBlueprintVariants = getBlueprintVariants(fetchData, shopId);
    this.getVariantShipping = getVariantShipping(fetchData, shopId);
    this.listProviders = listProviders(fetchData, shopId);
    this.getProvider = getProvider(fetchData, shopId);
  }
}

export default Catalog;
