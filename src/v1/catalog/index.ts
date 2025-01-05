import { PrintifyConfig } from '../../client';
import HttpClient from '../../http';
import listBlueprints from './listBlueprints';
import getBlueprint from './getBlueprint';
import getBlueprintProviders from './getBlueprintProviders';
import getBlueprintVariants from './getBlueprintVariants';
import getVariantShipping from './getVariantShipping';
import listProviders from './listProviders';
import getProvider from './getProvider';

class Catalog extends HttpClient {
  listBlueprints: typeof listBlueprints;
  getBlueprint: typeof getBlueprint;
  getBlueprintProviders: typeof getBlueprintProviders;
  getBlueprintVariants: typeof getBlueprintVariants;
  getVariantShipping: typeof getVariantShipping;
  listProviders: typeof listProviders;
  getProvider: typeof getProvider;

  constructor(config: PrintifyConfig) {
    super(config);

    this.listBlueprints = listBlueprints.bind(this);
    this.getBlueprint = getBlueprint.bind(this);
    this.getBlueprintProviders = getBlueprintProviders.bind(this);
    this.getBlueprintVariants = getBlueprintVariants.bind(this);
    this.getVariantShipping = getVariantShipping.bind(this);
    this.listProviders = listProviders.bind(this);
    this.getProvider = getProvider.bind(this);
  }
}

export default Catalog;
