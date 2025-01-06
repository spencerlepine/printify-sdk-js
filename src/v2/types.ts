// Catalog
export interface ShippingInfo {
  type: string;
  id: string;
  attributes: {
    name: string;
  };
}

export interface ShippingInfoSpecific {
  type: string;
  id: string;
  attributes: {
    shippingType: string;
    country: {
      code: string;
    };
    variantId: number;
    shippingPlanId: string;
    handlingTime: {
      from: number;
      to: number;
    };
    shippingCost: {
      firstItem: {
        amount: number;
        currency: string;
      };
      additionalItems: {
        amount: number;
        currency: string;
      };
    };
  };
}
