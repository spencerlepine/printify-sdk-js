const Printify = require('spencerlepine-sdk-js');

const printify = new Printify({
  shopId: '16326523', // global query by shop_id
  accessToken: API_TOKEN,
});

(async () => {
  const result = await printify.order.listBlueprints();
  console.log(result);
})();
