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
