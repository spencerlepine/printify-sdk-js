I am building a TypeScript SDK and need to generate files. I will give you the documentation for an SDK function. I want you to use the input and output two generate two files. The
first file is the actual business logic, and the second file is the unit test. Wait for my input, here is the example code you will use. Make sure to keep {printify.shopId} in the
mockUrl, don't change it. Also, please generate just the it block in the unit test, don't fill in any code for fetch or describe

// upload/archive.ts import { FetchDataFunc } from '../printify';

export interface Data { imageId: string; }

export interface Response {}

export type ArchiveFunc = (imageId: string) => Promise<Response>;

/\*\*

- Archive an uploaded image
-
- @param {string} imageId - The ID of the image to be archived
- @returns {Promise<Response>}
-
- @example
- const imageId = "5cb87a8cd490a2ccb256cec4";
- await printify.uploads.archive(imageId);
- // Expected response: {} \*/ const archive = (fetchData: FetchDataFunc) => async (imageId: string): Promise<Response> => { await fetchData(`/v1/uploads/${imageId}/archive.json`,
  { method: 'POST', }); };

export default Z archive(fetchData);

// upload.test.ts

it('should handle the archive upload endpoint', async () => { // Act const mockImageId = '5cb87a8cd490a2ccb256cec4'; await printify.uploads.archive(mockImageId);

// Assert const mockUrl = `https://api.printify.com/v1/uploads/${mockImageId}/archive.json`; const mockOptions = { method: 'POST', headers: { Authorization:
`Bearer mockAccessToken`, }, }; expect(global.fetch).toHaveBeenCalledWith(mockUrl, mockOptions); });
