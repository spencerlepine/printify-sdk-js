I am building a TypeScript SDK. I will give you the documentation for an SDK function. I want you to use the input and output two generate two files. The first file is the actual
business logic, and the second file is the unit test. Wait for my input, here is the example code you will use. Make sure to keep {printify.shopId} in the mockUrl, don't change it.
Also, please generate just the it block in the unit test, don't fill in any code for fetch or describe

// webhooks/create.ts

import { FetchDataFunc } from '../printify';

interface Data { topic: string; url: string; }

interface Response { topic: string; url: string; shop_id: string; id: string; }

export type CreateFunc = (data: Data) => Promise<Response>;

/\*\*

- Create a new webhook
-
- @param {Data} data - The webhook data to be sent in the request body
- @returns {Promise<Response>} The created webhook response
-
- @example
- const data = { topic: "order:created", url: "https://example.com/webhooks/order/created" };
- const response = await printify.webhooks.create(data);
- // Expected response:
- // {
- // "topic": "order:created",
- // "url": "https://example.com/webhooks/order/created",
- // "shop_id": "1",
- // "id": "5cb87a8cd490a2ccb256cec4"
- // } \*/ const create = (fetchData: FetchDataFunc, shopId: string) => async (data: Data): Promise<Response> => { const response = await
  fetchData(`/v1/shops/${shopId}/webhooks.json`, { method: 'POST', body: JSON.stringify(data), }); return response; };

export default (fetchData: FetchDataFunc, shopId: string) => create(fetchData, shopId);

// webhooks.test.ts

it('should handle the create webhook endpoint', async () => { // Act const mockData = { topic: 'order:created', url: 'https://example.com/webhooks/order/created' }; await
printify.webhooks.create(mockData);

// Assert const mockUrl = `https://api.printify.com/v1/shops/${printify.shopId}/webhooks.json`; const mockOptions = { method: 'POST', headers: { 'Content-Type': 'application/json',
Authorization: `Bearer mockAccessToken`, }, body: JSON.stringify(mockData), }; expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions); });
