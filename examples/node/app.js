import Printify from 'printify-sdk-js';

const printify = new Printify({
  shopId: '123456',
  accessToken: process.env.PRINTIFY_API_TOKEN, // UPDATE ME
  enableLogging: true,
});

const orderData = {
  external_id: 'unique_external_id',
  label: 'Order Label',
  line_items: [
    {
      print_provider_id: 12345,
      blueprint_id: 67890,
      variant_id: 112233,
      print_areas: {
        front: 'https://example.com/path/to/sticker.png',
      },
      quantity: 1,
    },
    // ...
  ],
  shipping_method: 1,
  is_printify_express: true,
  is_economy_shipping: false,
  send_shipping_notification: true,
  address_to: {
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    phone: 'string',
    region: 'NY',
    address1: '123 Main Street',
    address2: '',
    city: 'New York',
    zip: '10001',
    country: 'US',
  },
};

(async () => {
  const result = await printify.orders.submit(orderData);
  console.log(result); // { "id": "5a96f649b2439217d070f507" }
})();
