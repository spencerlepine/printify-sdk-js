import { FetchDataFunc } from '../fetch';

interface Data {
  topic: string;
  url: string;
}

interface Response {
  topic: string;
  url: string;
  shop_id: string;
  id: string;
}

export type CreateFunc = (shopId: string, data: Data) => Promise<Response>;

/**
 * Create a new webhook
 *
 * @param {string} shopId - The ID of the shop
 * @param {Data} data - The webhook data to be sent in the request body
 * @returns {Promise<Response>} The created webhook response
 *
 * @example
 * const Data = { topic: "order:created", url: "https://example.com/webhooks/order/created" };
 * const response = await printify.webhooks.create('shopId', Data);
 * // Expected response:
 * // {
 * //   "topic": "order:created",
 * //   "url": "https://example.com/webhooks/order/created",
 * //   "shop_id": "1",
 * //   "id": "5cb87a8cd490a2ccb256cec4"
 * // }
 */
const create =
  (fetchData: FetchDataFunc) =>
  async (shopId: string, data: Data): Promise<Response> => {
    const response = await fetchData(`/v1/shops/${shopId}/webhooks.json`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return response.json();
  };

export default (fetchData: FetchDataFunc) => create(fetchData);
