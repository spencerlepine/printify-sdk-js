import { FetchDataFunc } from '../printify';

export interface ExternalData {
  id: string;
  handle: string;
}

export interface PublishSucceededData {
  external: ExternalData;
}

export type SetPublishSucceededFunc = (productId: string, data: PublishSucceededData) => Promise<void>;

/**
- Set product publish status to succeeded. Removes the product from the locked status on the Printify app and sets its external property with the handle you provide in the request body.
-
- @param {string} productId - The ID of the product to update
- @param {PublishSucceededData} data - Data containing external properties to set
- @returns {Promise<void>}
-
- @example
- const data = { external: { id: '5941187eb8e7e37b3f0e62e5', handle: 'https://example.com/path/to/product' } };
- await printify.products.setPublishSucceeded('productId', data);
- // Expected response: {} 
*/
const setPublishSucceeded =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (productId: string, data: PublishSucceededData): Promise<void> => {
    await fetchData(`/v1/shops/${shopId}/products/${productId}/publishing_succeeded.json`, {
      method: 'POST',
      data: JSON.stringify(data),
    });
  };

export default setPublishSucceeded;
