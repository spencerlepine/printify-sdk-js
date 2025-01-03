import { FetchDataFn } from '../../client';
import { Order } from '../types';

export type GetOrderResponse = Order;

/**
 * Get order details by id
 *
 * @param {string} orderId - The ID of the order to retrieve
 * @returns {Promise<GetOrderResponse>}
 *
 * @example
 * const orderId = '5a96f649b2439217d070f507';
 * const response = await printify.orders.getOne(orderId);
 * // Expected response: {
 * //   id: "5a96f649b2439217d070f507",
 * //   address_to: {
 * //     first_name: "John",
 * //     last_name: "Smith",
 * //     region: "",
 * //     address1: "ExampleBaan 121",
 * //     city: "Retie",
 * //     zip: "2470",
 * //     email: "example@msn.com",
 * //     phone: "0574 69 21 90",
 * //     country: "BE",
 * //     company: "MSN"
 * //   },
 * //   line_items: [
 * //     {
 * //       product_id: "5b05842f3921c9547531758d",
 * //       quantity: 1,
 * //       variant_id: 17887,
 * //       print_provider_id: 5,
 * //       cost: 1050,
 * //       shipping_cost: 400,
 * //       status: "fulfilled",
 * //       metadata: {
 * //         title: "18K gold plated Necklace",
 * //         price: 2200,
 * //         variant_label: "Golden indigocoin",
 * //         sku: "168699843",
 * //         country: "United States"
 * //       },
 * //       sent_to_production_at: "2017-04-18 13:24:28+00:00",
 * //       fulfilled_at: "2017-04-18 13:24:28+00:00"
 * //     }
 * //   ],
 * //   metadata: {
 * //     order_type: "external",
 * //     shop_order_id: 1370762297,
 * //     shop_order_label: "1370762297",
 * //     shop_fulfilled_at: "2017-04-18 13:24:28+00:00"
 * //   },
 * //   total_price: 2200,
 * //   total_shipping: 400,
 * //   total_tax: 0,
 * //   status: "fulfilled",
 * //   shipping_method: 1,
 * //   is_printify_express: false,
 * //   is_economy_shipping: false,
 * //   shipments: [
 * //     {
 * //       carrier: "usps",
 * //       number: "94001116990045395649372",
 * //       url: "http://example.com/94001116990045395649372",
 * //       delivered_at: "2017-04-18 13:24:28+00:00"
 * //     }
 * //   ],
 * //   created_at: "2017-04-18 13:24:28+00:00",
 * //   sent_to_production_at: "2017-04-18 13:24:28+00:00",
 * //   fulfilled_at: "2017-04-18 13:24:28+00:00",
 * //   printify_connect: {
 * //     url: "https://example.com/printify_connect_hash",
 * //     id: "printify_connect_hash"
 * //   }
 * // }
 */
const getOne =
  (fetchData: FetchDataFn, shopId: string) =>
  (orderId: string): Promise<GetOrderResponse> => {
    return fetchData(`/v1/shops/${shopId}/orders/${orderId}.json`, { method: 'GET' });
  };

export default getOne;
