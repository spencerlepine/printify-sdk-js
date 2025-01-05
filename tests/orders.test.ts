import Printify from '../src/client';
import { assertAxiosCall } from './testUtils';

describe('Orders V1', () => {
  let printify: Printify;

  beforeAll(() => {
    printify = new Printify({ shopId: '123456', accessToken: 'mockAccessToken' });
  });

  it('should handle the calculate shipping endpoint', async () => {
    // Act
    const mockData = {
      line_items: [
        { product_id: '5bfd0b66a342bcc9b5563216', variant_id: 17887, quantity: 1 },
        { print_provider_id: 5, blueprint_id: 9, variant_id: 17887, quantity: 1 },
        { sku: 'MY-SKU', quantity: 1 },
      ],
      address_to: {
        first_name: 'John',
        last_name: 'Smith',
        email: 'example@msn.com',
        phone: '0574 69 21 90',
        country: 'BE',
        region: '',
        address1: 'ExampleBaan 121',
        address2: '45',
        city: 'Retie',
        zip: '2470',
      },
    };
    await printify.orders.calculateShipping(mockData);

    // Assert
    assertAxiosCall('post', `/v1/shops/${printify.shopId}/orders/shipping.json`, mockData);
  });

  it('should handle the cancel unpaid order endpoint', async () => {
    // Act
    const mockOrderId = '5dee261dc400914833007902';
    await printify.orders.cancelUnpaid(mockOrderId);

    // Assert
    assertAxiosCall('post', `/v1/shops/${printify.shopId}/orders/${mockOrderId}/cancel.json`);
  });

  it('should handle the get order details endpoint', async () => {
    // Act
    const mockOrderId = '5a96f649b2439217d070f507';
    await printify.orders.getOne(mockOrderId);

    // Assert
    assertAxiosCall('get', `/v1/shops/${printify.shopId}/orders/${mockOrderId}.json`);
  });

  it('should handle submitting an order by productId', async () => {
    const mockData = {
      external_id: '2750e210-39bb-11e9-a503-452618153e4a',
      label: '00012',
      line_items: [{ product_id: '5bfd0b66a342bcc9b5563216', variant_id: 17887, quantity: 1 }],
      shipping_method: 1,
      is_printify_express: false,
      is_economy_shipping: false,
      send_shipping_notification: false,
      address_to: {
        first_name: 'John',
        last_name: 'Smith',
        email: 'example@msn.com',
        phone: '0574 69 21 90',
        country: 'BE',
        region: '',
        address1: 'ExampleBaan 121',
        address2: '45',
        city: 'Retie',
        zip: '2470',
      },
    };
    await printify.orders.submit(mockData);

    assertAxiosCall('post', `/v1/shops/${printify.shopId}/orders.json`, mockData);
  });

  it('should handle submitting an order by external image URL (simple image positioning)', async () => {
    const mockData = {
      external_id: '2750e210-39bb-11e9-a503-452618153e5a',
      label: '00012',
      line_items: [{ print_provider_id: 5, blueprint_id: 9, variant_id: 17887, print_areas: { front: 'https://images.example.com/image.png' }, quantity: 1 }],
      shipping_method: 1,
      is_printify_express: false,
      is_economy_shipping: false,
      send_shipping_notification: false,
      address_to: {
        first_name: 'John',
        last_name: 'Smith',
        email: 'example@msn.com',
        phone: '0574 69 21 90',
        country: 'BE',
        region: '',
        address1: 'ExampleBaan 121',
        address2: '45',
        city: 'Retie',
        zip: '2470',
      },
    };
    await printify.orders.submit(mockData);

    assertAxiosCall('post', `/v1/shops/${printify.shopId}/orders.json`, mockData);
  });

  it('should handle submitting an order by external image URL (advanced image positioning)', async () => {
    const mockData = {
      external_id: '2750e210-39bb-11e9-a503-452618153e5a',
      label: '00012',
      line_items: [
        {
          print_provider_id: 5,
          blueprint_id: 9,
          variant_id: 17887,
          print_areas: {
            front: [
              { src: 'https://images.example.com/image.png', scale: 0.15, x: 0.8, y: 0.34, angle: 0.34 },
              { src: 'https://images.example.com/image.png', scale: 1, x: 0.5, y: 0.5, angle: 1 },
            ],
          },
          quantity: 1,
        },
      ],
      shipping_method: 1,
      is_printify_express: false,
      is_economy_shipping: false,
      send_shipping_notification: false,
      address_to: {
        first_name: 'John',
        last_name: 'Smith',
        email: 'example@msn.com',
        phone: '0574 69 21 90',
        country: 'BE',
        region: '',
        address1: 'ExampleBaan 121',
        address2: '45',
        city: 'Retie',
        zip: '2470',
      },
    };
    await printify.orders.submit(mockData);

    assertAxiosCall('post', `/v1/shops/${printify.shopId}/orders.json`, mockData);
  });

  it('should handle submitting an order with specifying print details for printing on sides', async () => {
    const mockData = {
      external_id: '2750e210-39bb-11e9-a503-452618153e5a',
      label: '00012',
      line_items: [
        {
          print_provider_id: 5,
          blueprint_id: 9,
          variant_id: 17887,
          print_areas: {
            front: 'https://images.example.com/image.png',
          },
          print_details: {
            print_on_side: 'mirror',
          },
          quantity: 1,
        },
      ],
      shipping_method: 1,
      is_printify_express: false,
      is_economy_shipping: false,
      send_shipping_notification: false,
      address_to: {
        first_name: 'John',
        last_name: 'Smith',
        email: 'example@msn.com',
        phone: '0574 69 21 90',
        country: 'BE',
        region: '',
        address1: 'ExampleBaan 121',
        address2: '45',
        city: 'Retie',
        zip: '2470',
      },
    };
    await printify.orders.submit(mockData);

    assertAxiosCall('post', `/v1/shops/${printify.shopId}/orders.json`, mockData);
  });

  it('should handle submitting an order by only an existing SKU', async () => {
    const mockData = {
      external_id: '2750e210-39bb-11e9-a503-452618153e6a',
      label: '00012',
      line_items: [
        {
          sku: 'MY-SKU',
          quantity: 1,
        },
      ],
      shipping_method: 1,
      is_printify_express: false,
      is_economy_shipping: false,
      send_shipping_notification: false,
      address_to: {
        first_name: 'John',
        last_name: 'Smith',
        email: 'example@msn.com',
        phone: '0574 69 21 90',
        country: 'BE',
        region: '',
        address1: 'ExampleBaan 121',
        address2: '45',
        city: 'Retie',
        zip: '2470',
      },
    };
    await printify.orders.submit(mockData);

    assertAxiosCall('post', `/v1/shops/${printify.shopId}/orders.json`, mockData);
  });

  it('should handle the list orders endpoint', async () => {
    // Act
    const mockPage = 2;
    await printify.orders.list({ page: mockPage });

    // Assert
    assertAxiosCall('get', `/v1/shops/${printify.shopId}/orders.json?page=${mockPage}`);
  });

  it('should handle the send order to production endpoint', async () => {
    // Act
    const mockOrderId = '5d65c6ac01b403000a5d24d3';
    await printify.orders.sendToProduction(mockOrderId);

    // Assert
    assertAxiosCall('post', `/v1/shops/${printify.shopId}/orders/${mockOrderId}/send_to_production.json`);
  });

  it('should handle the submit express order endpoint', async () => {
    // Act
    const mockData = {
      external_id: '2750e210-39bb-11e9-a503-452618153e4a',
      label: '00012',
      line_items: [
        { product_id: '5b05842f3921c9547531758d', variant_id: 12359, quantity: 1 },
        { product_id: '5b05842f3921c34764fa478bc', variant_id: 17887, quantity: 1 },
      ],
      shipping_method: 3,
      send_shipping_notification: false,
      address_to: {
        first_name: 'John',
        last_name: 'Smith',
        email: 'example@example.com',
        phone: '0574 69 21 90',
        country: 'BE',
        region: '',
        address1: 'ExampleBaan 121',
        address2: '45',
        city: 'Retie',
        zip: '2470',
      },
    };
    await printify.orders.submitExpress(mockData);

    // Assert
    assertAxiosCall('post', `/v1/shops/${printify.shopId}/express.json`, mockData);
  });
});
