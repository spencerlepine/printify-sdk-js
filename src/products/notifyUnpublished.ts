import { FetchDataFunc } from '../printify';

export type NotifyUnpublishedFunc = (productId: string) => Promise<void>;

/**
- Notify that a product has been unpublished
-
- @param {string} productId - The ID of the product to notify
- @returns {Promise<void>}
-
- @example
- const productId = "5d39b159e7c48c000728c89f";
- await printify.products.notifyUnpublished(productId);
- // Expected response: {} 
*/
const notifyUnpublished =
  (fetchData: FetchDataFunc, shopId: string) =>
  async (productId: string): Promise<void> => {
    await fetchData(`/v1/shops/${shopId}/products/${productId}/unpublish.json`, {
      method: 'POST',
    });
  };

export default notifyUnpublished;
