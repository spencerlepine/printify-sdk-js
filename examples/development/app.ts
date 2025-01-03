// @ts-expect-error - doesn't automatically detect "dist/index.d.mts"
import Printify from './dist/index.cjs.js';
import type { Webhook } from './dist/index.d.mts';

const printify = new Printify({
  shopId: '123456',
  accessToken: process.env.PRINTIFY_API_TOKEN,
  enableLogging: true,
});

(async () => {
  const result: Webhook[] = await printify.webhooks.list();
  console.log(result);
})();
