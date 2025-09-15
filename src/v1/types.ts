// Global
declare global {
  type RequestFn = (url: string, config: Record<string, any>) => Promise<any>;
  type method = { request: RequestFn; shopId?: string };
}

// Catalog
export interface PrintProvider {
  id: number;
  title: string;
  location?: Location;
}

export interface Placeholder {
  position: string;
  height: number;
  width: number;
}

export interface Variant {
  id: number;
  title: string;
  options: {
    color: string;
    size: string;
  };
  placeholders: Placeholder[];
}

export interface Location {
  address1: string;
  address2: string | null;
  city: string;
  country: string;
  region: string;
  zip: string;
}

export interface Blueprint {
  id: number;
  title: string;
  description?: string;
  brand: string;
  model: string;
  images: string[];
}

export interface ShippingProfile {
  variant_ids: number[];
  first_item: { cost: number; currency: string };
  additional_items: { cost: number; currency: string };
  countries: string[];
}

export interface Location {
  address1: string;
  address2: string | null;
  city: string;
  country: string;
  region: string;
  zip: string;
}

// Orders
export interface Address {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  region: string;
  address1: string;
  address2?: string;
  city: string;
  zip: string;
  company?: string;
}

export interface OrderShipment {
  carrier: string;
  number: string;
  url: string;
  delivered_at: string;
}

export interface PrintifyConnection {
  id: string;
  url: string;
}

export interface LineItem {
  product_id: string;
  quantity: number;
  variant_id: number;
  print_provider_id: number;
  cost: number;
  shipping_cost: number;
  status: string;
  metadata: {
    title: string;
    price: number;
    variant_label: string;
    sku: string;
    country: string;
  };
  sent_to_production_at?: string;
  fulfilled_at?: string;
}

export interface ShippingLineItem {
  product_id?: string;
  variant_id?: number;
  quantity: number;
  print_provider_id?: number;
  blueprint_id?: number;
  sku?: string;
}

export interface NewLineItem {
  product_id?: string;
  print_provider_id?: number;
  blueprint_id?: number;
  variant_id?: number;
  print_areas?: {
    front?: string | { src: string; scale: number; x: number; y: number; angle: number }[];
    back?: string | { src: string; scale: number; x: number; y: number; angle: number }[];
  };
  print_details?: {
    print_on_side?: string;
  };
  sku?: string;
  quantity: number;
}

export interface ExpressLineItem {
  product_id: string;
  variant_id: number;
  quantity: number;
}

export interface Order {
  id: string;
  address_to: Address;
  line_items: LineItem[];
  metadata: {
    order_type: string;
    shop_order_id: number;
    shop_order_label: string;
    shop_fulfilled_at: string;
  };
  total_price: number;
  total_shipping: number;
  total_tax: number;
  status: string;
  shipping_method: number;
  is_printify_express: boolean;
  is_economy_shipping: boolean;
  shipments: OrderShipment[];
  created_at: string;
  sent_to_production_at: string;
  fulfilled_at: string;
  printify_connect: PrintifyConnection;
}

export interface CalculateShippingData {
  line_items: ShippingLineItem[];
  address_to: Address;
}

// Products
export interface Product {
  id: string;
  title: string;
  description: string;
  safety_information?: string;
  tags?: string[];
  options?: Array<{ name: string; type: string; values: Array<{ id: number; title: string }> }>;
  variants: Array<{
    id: number;
    sku: string;
    cost: number;
    price: number;
    title: string;
    grams: number;
    is_enabled: boolean;
    is_default: boolean;
    is_available: boolean;
    is_printify_express_eligible: boolean;
    options: number[];
  }>;
  images: Array<{
    src: string;
    variant_ids: number[];
    position: string;
    is_default: boolean;
  }>;
  created_at: string;
  updated_at: string;
  visible: boolean;
  blueprint_id: number;
  print_provider_id: number;
  user_id: number;
  shop_id: number;
  print_areas: Array<{
    variant_ids: number[];
    placeholders: Array<{
      position: string;
      images: Array<{
        id: string;
        name: string;
        type: string;
        height: number;
        width: number;
        x: number;
        y: number;
        scale: number;
        angle: number;
      }>;
    }>;
    background: string;
  }>;
  print_details?: { print_on_side: 'regular' | 'mirror' | 'off' };
  external?: ExternalProductData[];
  is_locked: boolean;
  is_printify_express_eligible: boolean;
  is_printify_express_enabled?: boolean;
  is_economy_shipping_eligible: boolean;
  is_economy_shipping_enabled: boolean;
  sales_channel_properties?: { [key: string]: any };
  views?: Array<{ [key: string]: any }>;
}

export interface NewProduct {
  title: string;
  description: string;
  blueprint_id: number;
  print_provider_id: number;
  variants: Array<{
    id: number;
    price: number;
    is_enabled: boolean;
  }>;
  print_areas: PrintArea[];
}

export interface UpdateProductData {
  title?: string;
  description?: string;
  images?: string[];
  variants?: any[];
  tags?: string[];
  keyFeatures?: string[];
  shipping_template?: string;
}

export interface PrintArea {
  variant_ids: number[];
  placeholders: {
    position: string;
    images: {
      id: string;
      x: number;
      y: number;
      scale: number;
      angle: number;
    }[];
  }[];
}

export interface ExternalProductData {
  id: string;
  handle: string;
}

// Shops
export interface Shop {
  id: number;
  title: string;
  sales_channel: string;
}

// Uploads
export interface ImageUpload {
  id: string;
  file_name: string;
  height: number;
  width: number;
  size: number;
  mime_type: string;
  preview_url: string;
  upload_time: string;
}

// Webhooks
export interface Webhook {
  topic: string;
  url: string;
  shop_id: string;
  id: string;
}

export interface NewWebhook {
  topic: string;
  url: string;
  secret?: string;
}
