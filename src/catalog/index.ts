import { FetchDataFunc } from '../client';
import listBlueprints, { ListBlueprintsFunc } from './listBlueprints';
import getBlueprint, { GetBlueprintFunc } from './getBlueprint';
import getBlueprintProviders, { GetBlueprintProvidersFunc } from './getBlueprintProviders';
import getBlueprintVariants, { GetBlueprintVariantsFunc } from './getBlueprintVariants';
import getVariantShipping, { GetVariantShippingFunc } from './getVariantShipping';
import listProviders, { ListProvidersFunc } from './listProviders';
import getProvider, { GetProviderFunc } from './getProvider';

export interface CatalogMethods {
  listBlueprints: ListBlueprintsFunc;
  getBlueprint: GetBlueprintFunc;
  getBlueprintProviders: GetBlueprintProvidersFunc;
  getBlueprintVariants: GetBlueprintVariantsFunc;
  getVariantShipping: GetVariantShippingFunc;
  listProviders: ListProvidersFunc;
  getProvider: GetProviderFunc;
}

class Catalog implements CatalogMethods {
  listBlueprints: ListBlueprintsFunc;
  getBlueprint: GetBlueprintFunc;
  getBlueprintProviders: GetBlueprintProvidersFunc;
  getBlueprintVariants: GetBlueprintVariantsFunc;
  getVariantShipping: GetVariantShippingFunc;
  listProviders: ListProvidersFunc;
  getProvider: GetProviderFunc;

  constructor(fetchData: FetchDataFunc, shopId: string) {
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
