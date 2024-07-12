# Overview

This documentation describes various ways to access Printify services by using the Printify API. Each section has a detailed description as well as code examples to help you easily
start creating products and fulfilling orders.

## API Usage Guidelines

All integrations must comply with the Printify Terms and Printify API Terms. Please see these pages for more details:

- [https://printify.com/terms-of-service/](https://printify.com/terms-of-service/)
- [https://printify.com/API-terms/](https://printify.com/API-terms/)

The Printify public endpoints are powered by the same underlying technology that powers the core Printify Platform. As a result, Printify engineering closely monitors usage of the
public APIs to ensure a quality experience for users of the Printify platform.

Below, you'll find the limits by which a single integration (identified per account and not per access token) can consume the Printify APIs. If you have any questions, please
[create a support ticket](https://help.printify.com/hc/en-us/requests/new?ticket_form_id=4421334895377) by selecting one of the topics on the support page and indicating "API" as
the option chosen under "Channels". Please add more information to provide full details and we will contact you shortly.

Printify has the following global limit in place for API requests:

- 600 requests per minute.

Customers exceeding this limit will receive error responses with a 429 response code.

Integrations that use Printify's API to create products and generate mockups have an additional daily limit. The
[product publishing endpoint](https://developers.printify.com/#publish-a-product) has a limit of 200 requests per 30 minutes, product creation as a result of Order creation is not
limited. If your application will require heavy usage of the Product or Mockup generation functions, please
[create a support ticket](https://help.printify.com/hc/en-us/requests/new?ticket_form_id=4421334895377) by selecting one of the topics on the support page and indicating "API" as
the option chosen under "Channels". Please add more information to provide full details and we will contact you shortly.

Requests resulting in an error response may not exceed 5% of your total requests.

We reserve the right to change or deprecate the APIs over time - we will provide developers ample notification in those cases. These notifications will be sent to the email
provided in your API settings.

# API features

## REST API

Printify's REST API allows your application to manage a Printify shop on behalf of a Printify Merchant. Create products, submit orders, and more...

Check out all available methods: [API Reference](https://developers.printify.com/#api-reference)

## Webhooks and Events

Webhooks allow you to get an instant notification after an event occurrs in a Printify shop.

Send information to accounting right after an order was placed, send tracking to end customers as soon as it's available, sync product descriptions, etc... - it's totally up to
you.

More information: [Webhooks](https://developers.printify.com/#webhooks)

# Access the Printify API

You can access the Printify API as an individual merchant or as a platform. Both of them require different types of authentication. Learn about each of them below.

## Individual Accounts

Connect to a single Printify Merchant account and the shops that are a part of that account. Create products, submit artwork, create and receive orders and more. Authentication is
achieved through a Personal Access Token.

See more details in [Authentication](https://developers.printify.com/#authentication).

## Platforms

Connect applications that offer services to multiple merchants each with different Printify merchant accounts. Manage orders for multiple Printify Merchants, offer merchants the
option to sell on your platform, and more. Authentication is achieved through OAuth 2.0

See more details in [Authentication](https://developers.printify.com/#authentication)

## Use cases

### Create orders with user-generated content

Regardless of whether you use your own mockup generator, or you capture user generated content. Through the Printify API you can easily place those images on any products in our
catalog, offer them for purchase, and fulfill.

### Connect your own E-commerce channel

Don't use Etsy, Shopify, Woocommerce, or any of our other available E-commerce solutions? Connect your own with the Printify API. Enjoy the same benefits of automation that
merchants using our existing integrations do.

### Support existing integrations with more functionality

Already using one of our integrations such as Shopify or Woocommerce? Build any additional functionality you need and connect via Printify API to continue to get all of your sales
and order data in your existing shop.

### Start offering merchandise sales to your community

Do you have an application or platform with an engaged community. Connect to the Printify API and easily start monetizing your community by allowing them to sell Print on Demand
merchandise through your platform.

# Authentication

The Printify platform provides two ways of integrating. You can integrate with a Personal Access Token that you can use to manage a single Printify account, or you can integrate
through OAuth 2.0 as a platform that will be managing multiple Printify Merchant accounts.

Unless otherwise mentioned in the documentation for a specific endpoint, all endpoints support both OAuth 2.0 and Personal Access Token.

## Create a personal access token

A personal access token allows your application to connect to a single Printify Merchant account and the shops created within that account.

#### Step 1

Before creating your personal access token, you will first need a Printify account. If you haven't created an account yet, [please do so here](https://printify.com/app/register)
and complete the onboarding procedure.

#### Step 2

Now that you have your Printify account, navigate to My Profile, then Connections. In the Connections section you will be able to generate your Personal Access Tokens and set your
Token Access Scopes.

#### Step 3

You will be able to generate multiple tokens. Tokens can be set to have different Access Scopes.

Please note that for security purposes, this token will only be visible immediately after generating only. Please make sure you store it in a secure location.

Access tokens are valid for one year, they expire after that timeframe and you will need to generate a new one to replace it. If you lose your access token, you will also need to
generate a new one.

[Generate token](https://printify.com/app/account/api)

#### Step 4

Once generated, you can use that token as credentials for API requests in place of a user name and password.

All requests must also specify a _User-Agent_ header. The value of this header should either be the type of client, such as "NodeJS" or "PHP," or the name of your application.

After you have authenticated to the API, you can send requests to the API using any programming language or program that can send HTTP requests. The base URL for all endpoints is
`_[https://api.printify.com/v1/](https://api.printify.com/v1/)_`.

Here is an example:

`curl -X GET https://api.printify.com/v1/shops.json --header "Authorization: Bearer $PRINTIFY_API_TOKEN"`

#### Step 5

Once you’ve set the API up, go to your store by clicking on My Stores, then Add new store. You should see Shopify, Etsy, WooCommerce, and the new option, API.

Click connect to connect your store to Printify via the API.

## OAuth 2.0

Using OAuth 2.0 you will be able to offer your application to the growing community of Printify Merchants.

On this page:

- [Prerequisites](https://developers.printify.com/#prerequisites)
- [Connecting your app to Printify](https://developers.printify.com/#connecting-your-app-to-printify)
  - [Getting grant codes](https://developers.printify.com/#getting-grant-codes)
  - [Getting tokens](https://developers.printify.com/#getting-tokens)
  - [Refreshing access tokens](https://developers.printify.com/#refreshing-access-tokens)
  - [Using access tokens](https://developers.printify.com/#using-access-tokens)
- [Endpoints](https://developers.printify.com/#authentication-endpoints)

### Prerequisites

1. Authentication for your integration starts with [registering your app.](https://printify.typeform.com/to/sDrLZo) This link takes you to an application form where you will answer
   some questions about your business, expected integration timeline and your applications functionality. If your application is approved, you will receive instructions via email
   for how to receive your app ID, and how to set the required [access scopes](https://developers.printify.com/#access-scopes) your application will need.
2. You'll use the app ID to initiate the OAuth handshake between Printify and your integration.

**Note:** Reviewing applications can take up to 1 week.

[![Register your app](./PrintifyAPIComplete_files/1-bc328d09.svg)](https://printify.typeform.com/to/sDrLZo)

### Connecting your app to Printify

There are 4 steps to connecting your integration to a Merchant's Printify account using OAuth:

1. The Printify merchant will be presented with a screen that allows them to [grant access to your integration](https://developers.printify.com/#getting-grant-codes).
2. After the Merchant grants access, they'll be returned to your app, with a code appended to the URL. Use that code and your app ID to get an
   [access_token and refresh_token.](https://developers.printify.com/#getting-tokens)
3. Use that access_token to [authenticate any API calls](https://developers.printify.com/#using-access-tokens) that you make for that Printify account.
4. Once that access_token expires, use the refresh_token from Step 2 to [generate a new access_token.](https://developers.printify.com/#refreshing-access-tokens)

### Getting grant codes

Initiating OAuth access is the first step for having merchants grant your application access to their Printify account. In order to initiate OAuth connection for your App, you'll
first need to send a Printify merchant to an authorization page, where that merchant will need to grant access to your app. When your app sends a merchant to that authorization
page, you'll use the query parameters detailed below to identify your app.

Merchants must be signed into Printify to grant access, so any user that is not logged into Printify will be directed to a login screen before being directed back to the
authorization page. The authorization screen will show the details of your app.

Depending on whether or not the merchant grants access, they will be redirected to the accept_url or decline_url that you specified, if access was granted, a code query parameter
is appended to the URL and you'll use that code to get an access token from Printify.

#### URL fields

app_id REQUIRED

`app_id=x` The app ID provided to you after registering your app.

accept_url REQUIRED

`accept_url=x` The URL that you want the visitor redirected to after granting access to your app. A code that can be used to exchange for tokens will be appended to the end of the
URL.

decline_url REQUIRED

`decline_url=x` The URL that you want the visitor redirected to after denying access to your app.

state RECOMMENDED OPTIONAL

`state=123` Persistent variable during connection flow.

⚠

For security reasons, the accept and decline URL must use https in production. When testing using localhost, http can be used. Also, you must use a domain, as IP addresses are not
supported.

### Getting tokens

Use the grant code you get after a user authorizes your app to exchange for an access token and refresh token. The access token will be used to authenticate requests that your app
makes. When you get the Access tokens, you also get expiration time for the token. When token expires you have to use Refresh token to get a new Access token.

#### Request parameters

app_id REQUIRED

`app_id=x` The app ID provided to you after registering your app.

code REQUIRED

`code=y` The code parameter returned to your accept_url when the user authorized your app, it is returned by the GET /app/oauth/accept endpoint and passed back to the consumer app.

⚠

Printify access tokens will fluctuate in size as we change the information that is encoded in the tokens. We recommend allowing for tokens to be up to 3,000 characters to account
for any changes we may make.

### Refreshing access tokens

Use a previously obtained refresh token to generate a new access token. Access tokens expire after 6 hours, so if you need offline access to data in Printify, you'll need to store
the refresh token you get when initiating your OAuth integration, and use that to generate a new access token once the initial access token expires.

#### Request parameters

app_id REQUIRED

`app_id=x` The app ID provided to you after registering your app.

refresh_token REQUIRED

`refresh_token=x` The refresh token returned by POST /app/oauth/tokens in the previous step.

### Using access tokens

OAuth 2.0 access tokens are provided as a bearer token, in the Authorization http header.

The header format is: `Authorization: Bearer {token}`

### Endpoints

#### Get grant code

This request is made to the base URL `_[https://printify.com/](https://printify.com/)_`.

GET

/app/authorize?{URL_fields}

**Authorization request** **URL fields** `app_id=x &accept_url=https://example.com &decline_url=https://example.com &state=123`

**Possible outcomes** **If access is granted, a URL redirect will follow with a grant code appended to the url** `https://www.example.com/?code=aabbccxxeeaabbccxxeeaabbccxxee` **If
there are any problems with the authorization, error parameters will be received instead of the code**
`https://www.example.com/?error=error_code &error_description=Human%20readable%20description%20of%20the%20error`

### Convert grant code to tokens

Requests after authentication are made to the base URL `_[https://api.printify.com/v1/](https://api.printify.com/v1/)_`.

POST

/app/oauth/tokens

**Convert grant code to tokens** **Request parameters** `app_id=x &code=y`

**Possible responses** **If successful, a JSON response with the tokens will be received** [View Response](https://developers.printify.com/#)
`{ "access_token": "...", "refresh_token": "...", "expire_at": "2020-10-14 11:26:10+00:00" }`

**If there are any problems with the request, a 400 response will be received with an error message** [View Response](https://developers.printify.com/#)
`{ "error": "error_code", "error_description": "A human readable error message" }`

### Refresh access token

POST

/app/oauth/tokens/refresh

**Refresh access token** **Request parameters** `app_id=x &refresh_token={from-the-get-tokens-request}`

**Possible responses** **If successful, a JSON response with the tokens will be received** [View Response](https://developers.printify.com/#)
`{ "access_token": "...", "refresh_token": "...", "expire_at": "2020-10-14 11:26:10+00:00" }`

**If there are any problems with the request, a 400 response will be received with an error message** [View Response](https://developers.printify.com/#)
`{ "error": "error_code", "error_description": "A human readable error message" }`

## Access scopes

Scopes are permissions that identify the scope of access your application requests from the Printify Merchant Account. Below you can see the names of access scopes that exist in
Printify and their description.

Access Scope

Notes

`shops.read`

Access shops in a Merchant's account

`catalog.read`

See Products and Print Providers from the Printify Product Catalog

`products.read`

See products created in a Merchant's shop

`products.write`

Create products in a Merchant's shop

`orders.read`

See orders created in a Merchant shop

`orders.write`

Create orders in a Merchant's shop

`webhooks.read`

Read installed webhooks

`webhooks.write`

Install, update and delete Webhooks

`uploads.read`

See uploaded files in a Merchant's account

`uploads.write`

Upload image files and archive them

`print_providers.read`

See available print providers

# V1 API Reference

The Printify API is organized around [REST](https://en.wikipedia.org/wiki/Representational_State_Transfer).

Our API has predictable resource-oriented URLs, accepts [form-encoded](<https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms>) request bodies, returns
[JSON-encoded](http://www.json.org/) responses, and uses standard HTTP [response codes](https://tools.ietf.org/html/rfc7231#section-6.1), authentication, and verbs.

(function (p,o,s,t,m,a,n) { !p\[s\] && (p\[s\] = function () { (p\[t\] || (p\[t\] = \[\])).push(arguments); }); !o.getElementById(s+t) &&
o.getElementsByTagName("head")\[0\].appendChild(( (n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n )); }(window, document, "\_pm", "PostmanRunObject",
"<https://run.pstmn.io/button.js>"));

## API basics

- All requests are done via HTTPs. Requests via insecure HTTP are not supported.
- Printify API works with UTF-8 encoded data. Please make sure everything you send over in API calls also uses UTF-8.
- All data received from API and submitted to API is JSON, so the content type should be: `application/json;charset=utf-8`
- Date/time values returned by Printify API are in UTC unless stated otherwise.
- The base URL for all endpoints is `_[https://api.printify.com/v1/](https://api.printify.com/v1/shops.json)_`.
- `{variable}` in the URLs means you should substitute it with the proper variable value.
- The API currently does not support CORS and requests from a frontend application will not be processed for security reasons. You will need to set up a server-side application to
  access the API and ensure secure storing of the API token.

## API pagination

Besides the `data` property returned in response, there are also other properties that are helpful for paginating over the resources.

first_page_url

`"first_page_url": "/?page=1"` URL for the first page of results - helpful in rewinding to the beginning of batch processing.

prev_page_url

`"prev_page_url": "/?page=2"` URL for the previous page of results - helpful in going back or iterating from the last resource.

next_page_url

`"next_page_url": "/?page=4"` URL for next page of results - helpful in iterating over results without doing page calculations.

last_page_url

`"last_page_url": "/?page=5"` URL for the last page of results - helpful in jumping to the end of results.

current_page

`"current_page": 3` Current page of results.

last_page

`"last_page": 5` Last page of results.

total

`"total": 49` The total number of results.

per_page

`"per_page": 10` The number of items retrieved in response.

from

`"from": 21` The ordinal number of first item in response.

to

`"to": 30` The ordinal number of last item in response.

## Shops

All product creation and order submission in a Printify Merchant's account happens through a shop. Merchant's can have multiple shops in one Printify account. Each of these shops
can be connected to different sales channels and each has independent products, orders, and analytics.

On this page:

- [What you can do with the shops resource](https://developers.printify.com/#what-you-can-do-with-the-shops-resource)
- [Shop properties](https://developers.printify.com/#shop-properties)
- [Endpoints](https://developers.printify.com/#shops-endpoints)

### What you can do with the shops resource

The shops resource serves one purpose, it allows you to view the list of existing shops in a Printify account.

- [GET /v1/shops.json](https://developers.printify.com/#retrieve-a-list-of-existing-shops) Retrieve a list of existing shops in a Printify account
- [DELETE /v1/shops/{shop_id}/connection.json](https://developers.printify.com/#disconnect-a-shop) Disconnect a shop from a Printify account

### Shop properties

id READ-ONLY

`"id": 12345` A unique int identifier for the shop. Each id is unique across the Printify system.

title READ-ONLY

`"title": "Shop's title"` The name of the shop.

sales_channel READ-ONLY

`"sales_channel": "Sales channel name"` The name of the associated sales channel. If none are connected it defaults to "disconnected".

### Endpoints

### Retrieve list of shops in a Printify account

GET

/v1/shops.json

**Retrieve a list of shops in a Printify account** `GET /v1/shops.json` [View Response](https://developers.printify.com/#)
`[ { "id": 5432, "title": "My new store", "sales_channel": "My Sales Channel" }, { "id": 9876, "title": "My other new store", "sales_channel": "disconnected" } ]`

#### Disconnect a shop

DELETE

/v1/shops/{shop_id}/connection.json

**Disconnect a shop** `DELETE /v1/shops/{shop_id}/connection.json` [View Response](https://developers.printify.com/#) `{}`

## Catalog

Through the Catalog resource you can see all of the products, product variants, variant options and print providers available in the Printify catalog.

Products in the Printify catalog are referred to as blueprints (only after user artwork has been added, are they referred to as products).

Every blueprint in the printify catalog has multiple Print Providers that offer that blueprint. In addition to general differences between Print Providers including location and
print technology employed, each Print Provider also offers different colors, sizes, print areas and prices.

Each Print Provider's blueprint has specific size and color combinations known as variants. Variants also contain information on a products available print areas and sizes.

On this page:

- [What you can do with the catalog resource](https://developers.printify.com/#what-you-can-do-with-the-catalog-resource)
- [Blueprint properties](https://developers.printify.com/#blueprint-properties)
  - [Print provider properties](https://developers.printify.com/#print-provider-properties)
  - [Variant properties](https://developers.printify.com/#catalog-variant-properties)
  - [Placeholder properties](https://developers.printify.com/#catalog-placeholder-properties)
  - [Shipping properties](https://developers.printify.com/#catalog-shipping-properties)
  - [Profile properties](https://developers.printify.com/#profile-properties)
- [Endpoints](https://developers.printify.com/#catalog-endpoints)
- [Structure](https://developers.printify.com/#catalog-structure)

### What you can do with the catalog resource

The Printify Public API lets you do the following with the Catalog resource:

- [GET /v1/catalog/blueprints.json](https://developers.printify.com/#retrieve-a-list-of-available-blueprints) Retrieve a list of all available blueprints
- [GET /v1/catalog/blueprints/{blueprint_id}.json](https://developers.printify.com/#retrieve-a-specific-blueprint) Retrieve a specific blueprint
- [GET /v1/catalog/blueprints/{blueprint_id}/print_providers.json](https://developers.printify.com/#retrieve-a-list-of-print-providers) Retrieve a list of all print providers that
  fulfill orders for a specific blueprint
- [GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/variants.json](https://developers.printify.com/#retrieve-a-list-of-variants) Retrieve a list of all
  variants of a blueprint from a specific print provider
- [GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping.json](https://developers.printify.com/#retrieve-shipping-information) Retrieve the
  shipping information for all variants of a blueprint from a specific print provider
- [GET /v1/catalog/print_providers.json](https://developers.printify.com/#retrieve-a-list-of-available-print-providers) Retrieve a list of all available print-providers
- [GET /v1/catalog/print_providers/{print_provider_id}.json](https://developers.printify.com/#retrieve-a-specific-print-provider) Retrieve a specific print-provider and a list of
  associated blueprint offerings

### Blueprint properties

id READ-ONLY

`"id": 5` A unique int identifier for the blueprint. Each id is unique across the Printify system.

title READ-ONLY

`"title": "Blueprint's title"` The name of the blueprint.

brand READ-ONLY

`"brand": "Blueprint's brand"` The brand of the blueprint (i.e. the name of the blank product's manufacturer).

model READ-ONLY

`"model": "Blueprint's brand model"` The specific model of the blueprint's brand (i.e. the unique identifier of the blank product's model or style).

images READ-ONLY

`"images": [ "https://images.example.com/869549a1a0894a4692371b1f9928e14a.png", "https://images.example.com/878331a2b0876c9801746d2e2454f14a.png" ]` Links to the title image
wrappers displayed on the catalog.

### Print provider properties

id READ-ONLY

`"id": 3` A unique int identifier for the print provider. Each id is unique across the Printify system.

title READ-ONLY

`"title": "Print provider's title"` The name of the print provider.

location READ-ONLY

`"location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" }` The return address of the print provider.

### Variant properties

id READ-ONLY

`"id": 17390` A unique int identifier for the blueprint variant. Each id is unique across the Printify system.

title READ-ONLY

`"title": "Variant's title"` The name of the variant.

options READ-ONLY

`"options": { "color": "Heather Grey", "size": "XS" }` Options are read only values and describes blueprint variant options. There can be up to 3 options for a blueprint.

placeholders READ-ONLY

`"placeholders": [{ "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 }]` Placeholders describe the available printable
areas for a blueprint. See [placeholder properties](https://developers.printify.com/#catalog-placeholder-properties) for reference.

### Placeholder properties

position READ-ONLY

`"position": "front"` Position states the available printable areas for a blueprint fulfilled by a specific print provider.

height READ-ONLY

`"height": 3995` Integer value for printable area height in pixels.

width READ-ONLY

`"width": 3153` Integer value for printable area width in pixels.

### Shipping properties

handling_time READ-ONLY

`"handling_time": { "value":10, "unit": "day" }` The standard shipping timeframe for a blueprint from a specific print provider.

profiles READ-ONLY

`"profiles": [ { "variant_ids": [1,2], "first_item": { "currency": "USD", "cost": 1000 }, "additional_items": { "currency": "USD", "cost": 1000 }, "countries":["US"] }, { "variant_ids": [1,2], "first_item": { "currency": "USD", "cost": 1000 }, "additional_items": { "currency": "USD", "cost": 1000 }, "countries":["REST_OF_THE_WORLD"] } ]`
The list of shipping locations and flat shipping costs for all variants of a blueprint from a specific print provider. See
[profile properties](https://developers.printify.com/#profile-properties) for reference.

### Profile properties

variant_ids READ-ONLY

`"variant_ids": [ 1,2,3,4,5,6,7 ]` Lists the ids of all blueprint variants the specific profile is associated to in an array.

first_item READ-ONLY

`"first_item": { "currency": "USD", "cost": 1000 }` The currency and flat cost of shipping for a line item if identified as the first item in an order.

additional_items READ-ONLY

`"additional_items": { "currency": "USD", "cost": 1000 }` The currency and flat cost of shipping for all other line items of the specific blueprint and print provider in the same
order.

countries READ-ONLY

`"countries": [ US ]` Lists the countries or delivery locations the shipping profile applies to.

### Print details properties

print_on_side OPTIONAL

`"print_on_side": "regular"` States the type of side print. possible values are "regular" for extending print area to the sides of canvas and "mirror" to keep original print area
and mirror it to the sides.

separator_type OPTIONAL

`"separator_type": "Numbers"` Required with "separator_color" and specific to clock type blueprints, States the type clock separator. Possible string values are "Numbers" numeric
separators, "Lines" for single bar separators, and "None" to specify that no separators be used.

separator_color OPTIONAL

`"separator_color": "#f100ff"` Required with "separator_type" and specific to clock type blueprints, States the type clock separator. Value must be a valid string hexadecimal color
code.

### Endpoints

#### Retrieve a list of available blueprints

GET

/v1/catalog/blueprints.json

**Retrieve a list of available blueprints** `GET /v1/catalog/blueprints.json` [View Response](https://developers.printify.com/#)
`[ { "id": 3, "title": "Kids Regular Fit Tee", "description": "Description goes here", "brand": "Delta", "model": "11736", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f5cd", "https://images.printify.com/5c487ee2a342bc9b8b2fc4d2" ] }, { "id": 5, "title": "Men's Cotton Crew Tee", "description": "Description goes here", "brand": "Next Level", "model": "3600", "images": [ "https://images.printify.com/5a2ffc81b8e7e3656268fb44", "https://images.printify.com/5cdc0126b97b6a00091b58f7" ] }, { "id": 6, "title": "Unisex Heavy Cotton Tee", "description": "Description goes here", "brand": "Gildan", "model": "5000", "images": [ "https://images.printify.com/5a2fd7d9b8e7e36658795dc0", "https://images.printify.com/5c595436a342bc1670049902", "https://images.printify.com/5c595427a342bc166b6d3002", "https://images.printify.com/5a2fd022b8e7e3666c70623a" ] }, { "id": 9, "title": "Women's Favorite Tee", "description": "Description goes here", "brand": "Bella+Canvas", "model": "6004", "images": [ "https://images.printify.com/5a2ffeeab8e7e364d660836f", "https://images.printify.com/59e362cab8e7e30a5b0a55bd", "https://images.printify.com/59e362d2b8e7e30b9f576691", "https://images.printify.com/59e362ddb8e7e3174f3196ee", "https://images.printify.com/59e362eab8e7e3593e2ac98d" ] }, { "id": 10, "title": "Women's Flowy Racerback Tank", "description": "Description goes here", "brand": "Bella+Canvas", "model": "8800", "images": [ "https://images.printify.com/5a27eb68b8e7e364d6608322", "https://images.printify.com/5c485236a342bc521c2a0beb", "https://images.printify.com/5c485217a342bc686053da46", "https://images.printify.com/5c485225a342bc52fe5fee83" ] }, { "id": 11, "title": "Women's Jersey Short Sleeve Deep V-Neck Tee", "description": "Description goes here", "brand": "Bella+Canvas", "model": "6035", "images": [ "https://images.printify.com/5a27f20fb8e7e316f403a3b1", "https://images.printify.com/5c472ff0a342bcad97372d72", "https://images.printify.com/5c472ff8a342bcad9964d115" ] }, { "id": 12, "title": "Unisex Jersey Short Sleeve Tee", "description": "Description goes here", "brand": "Bella+Canvas", "model": "3001", "images": [ "https://images.printify.com/5a2ff5b0b8e7e36669068406", "https://images.printify.com/59e35414b8e7e30aa625995c", "https://images.printify.com/5cd579548c3769000f274cac", "https://images.printify.com/5cd579558c37690008453286", "https://images.printify.com/59e3541bb8e7e30a60795f9c", "https://images.printify.com/59e35428b8e7e30a1a4de812", "https://images.printify.com/59e3552db8e7e3174714887a", "https://images.printify.com/5a8beec5b8e7e304614eb59c" ] } ]`

#### Retrieve a specific blueprint

GET

/v1/catalog/blueprints/{blueprint_id}.json

**Retrieve a specific blueprint** `GET /v1/catalog/blueprints/{blueprint_id}.json` [View Response](https://developers.printify.com/#)
`{ "id": 3, "title": "Kids Regular Fit Tee", "description": "Description goes here", "brand": "Delta", "model": "11736", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f5cd", "https://images.printify.com/5c487ee2a342bc9b8b2fc4d2" ] }`

#### Retrieve a list of all print providers that fulfill orders for a specific blueprint

GET

/v1/catalog/blueprints/{blueprint_id}/print_providers.json

**Retrieve a list of all print providers that fulfill orders for a specific blueprint** `GET /v1/catalog/blueprints/{blueprint_id}/print_providers.json`
[View Response](https://developers.printify.com/#)
`[ { "id": 3, "title": "DJ" }, { "id": 8, "title": "Fifth Sun" }, { "id": 16, "title": "MyLocker" }, { "id": 24, "title": "Inklocker" } ]`

#### Retrieve a list of variants of a blueprint from a specific print provider

GET

/v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/variants.json

show-out-of-stock OPTIONAL

Depending on the value, it shows all variants or only those not out of stock. Without passing this query param, the list will contain only those variants in stock. 0 - show only
variants that are in stock. 1 - also show variants out of stock (all variants).

**Retrieve a list of variants of a blueprint from a specific print provider** `GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/variants.json`
[View Response](https://developers.printify.com/#)
`{ "id": 3, "title": "DJ", "variants": [ { "id": 17390, "title": "Heather Grey / XS", "options": { "color": "Heather Grey", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17426, "title": "Solid Black / XS", "options": { "color": "Solid Black", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17435, "title": "Solid Scarlet / XS", "options": { "color": "Solid Scarlet", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17444, "title": "Solid Cool Blue / XS", "options": { "color": "Solid Cool Blue", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17453, "title": "Solid Cream / XS", "options": { "color": "Solid Cream", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17462, "title": "Solid Dark Chocolate / XS", "options": { "color": "Solid Dark Chocolate", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17480, "title": "Solid Heavy Metal / XS", "options": { "color": "Solid Heavy Metal", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17489, "title": "Solid Indigo / XS", "options": { "color": "Solid Indigo", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17516, "title": "Solid Light Blue / XS", "options": { "color": "Solid Light Blue", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17552, "title": "Solid Maroon / XS", "options": { "color": "Solid Maroon", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17588, "title": "Solid Red / XS", "options": { "color": "Solid Red", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17597, "title": "Solid Royal / XS", "options": { "color": "Solid Royal", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17606, "title": "Solid Sand / XS", "options": { "color": "Solid Sand", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17642, "title": "Solid White / XS", "options": { "color": "Solid White", "size": "XS" }, "placeholders": [ { "position": "back", "height": 3995, "width": 3153 }, { "position": "front", "height": 3995, "width": 3153 } ] }, { "id": 17391, "title": "Heather Grey / S", "options": { "color": "Heather Grey", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17427, "title": "Solid Black / S", "options": { "color": "Solid Black", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17436, "title": "Solid Scarlet / S", "options": { "color": "Solid Scarlet", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17445, "title": "Solid Cool Blue / S", "options": { "color": "Solid Cool Blue", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17454, "title": "Solid Cream / S", "options": { "color": "Solid Cream", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17463, "title": "Solid Dark Chocolate / S", "options": { "color": "Solid Dark Chocolate", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17481, "title": "Solid Heavy Metal / S", "options": { "color": "Solid Heavy Metal", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17490, "title": "Solid Indigo / S", "options": { "color": "Solid Indigo", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17517, "title": "Solid Light Blue / S", "options": { "color": "Solid Light Blue", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17553, "title": "Solid Maroon / S", "options": { "color": "Solid Maroon", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17589, "title": "Solid Red / S", "options": { "color": "Solid Red", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17598, "title": "Solid Royal / S", "options": { "color": "Solid Royal", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17607, "title": "Solid Sand / S", "options": { "color": "Solid Sand", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17643, "title": "Solid White / S", "options": { "color": "Solid White", "size": "S" }, "placeholders": [ { "position": "back", "height": 4563, "width": 3602 }, { "position": "front", "height": 4563, "width": 3602 } ] }, { "id": 17392, "title": "Heather Grey / M", "options": { "color": "Heather Grey", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17428, "title": "Solid Black / M", "options": { "color": "Solid Black", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17437, "title": "Solid Scarlet / M", "options": { "color": "Solid Scarlet", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17446, "title": "Solid Cool Blue / M", "options": { "color": "Solid Cool Blue", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17455, "title": "Solid Cream / M", "options": { "color": "Solid Cream", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17464, "title": "Solid Dark Chocolate / M", "options": { "color": "Solid Dark Chocolate", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17482, "title": "Solid Heavy Metal / M", "options": { "color": "Solid Heavy Metal", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17491, "title": "Solid Indigo / M", "options": { "color": "Solid Indigo", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17518, "title": "Solid Light Blue / M", "options": { "color": "Solid Light Blue", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17554, "title": "Solid Maroon / M", "options": { "color": "Solid Maroon", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17590, "title": "Solid Red / M", "options": { "color": "Solid Red", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17599, "title": "Solid Royal / M", "options": { "color": "Solid Royal", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17608, "title": "Solid Sand / M", "options": { "color": "Solid Sand", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17644, "title": "Solid White / M", "options": { "color": "Solid White", "size": "M" }, "placeholders": [ { "position": "back", "height": 5131, "width": 4051 }, { "position": "front", "height": 5131, "width": 4051 } ] }, { "id": 17393, "title": "Heather Grey / L", "options": { "color": "Heather Grey", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17429, "title": "Solid Black / L", "options": { "color": "Solid Black", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17438, "title": "Solid Scarlet / L", "options": { "color": "Solid Scarlet", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17447, "title": "Solid Cool Blue / L", "options": { "color": "Solid Cool Blue", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17456, "title": "Solid Cream / L", "options": { "color": "Solid Cream", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17465, "title": "Solid Dark Chocolate / L", "options": { "color": "Solid Dark Chocolate", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17483, "title": "Solid Heavy Metal / L", "options": { "color": "Solid Heavy Metal", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17492, "title": "Solid Indigo / L", "options": { "color": "Solid Indigo", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17519, "title": "Solid Light Blue / L", "options": { "color": "Solid Light Blue", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17555, "title": "Solid Maroon / L", "options": { "color": "Solid Maroon", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17591, "title": "Solid Red / L", "options": { "color": "Solid Red", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17600, "title": "Solid Royal / L", "options": { "color": "Solid Royal", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17609, "title": "Solid Sand / L", "options": { "color": "Solid Sand", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17645, "title": "Solid White / L", "options": { "color": "Solid White", "size": "L" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17394, "title": "Heather Grey / XL", "options": { "color": "Heather Grey", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17430, "title": "Solid Black / XL", "options": { "color": "Solid Black", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17439, "title": "Solid Scarlet / XL", "options": { "color": "Solid Scarlet", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17448, "title": "Solid Cool Blue / XL", "options": { "color": "Solid Cool Blue", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17457, "title": "Solid Cream / XL", "options": { "color": "Solid Cream", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17466, "title": "Solid Dark Chocolate / XL", "options": { "color": "Solid Dark Chocolate", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17484, "title": "Solid Heavy Metal / XL", "options": { "color": "Solid Heavy Metal", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17493, "title": "Solid Indigo / XL", "options": { "color": "Solid Indigo", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17520, "title": "Solid Light Blue / XL", "options": { "color": "Solid Light Blue", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17556, "title": "Solid Maroon / XL", "options": { "color": "Solid Maroon", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17592, "title": "Solid Red / XL", "options": { "color": "Solid Red", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17601, "title": "Solid Royal / XL", "options": { "color": "Solid Royal", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17610, "title": "Solid Sand / XL", "options": { "color": "Solid Sand", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17646, "title": "Solid White / XL", "options": { "color": "Solid White", "size": "XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17395, "title": "Heather Grey / 2XL", "options": { "color": "Heather Grey", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17431, "title": "Solid Black / 2XL", "options": { "color": "Solid Black", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17440, "title": "Solid Scarlet / 2XL", "options": { "color": "Solid Scarlet", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17449, "title": "Solid Cool Blue / 2XL", "options": { "color": "Solid Cool Blue", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17458, "title": "Solid Cream / 2XL", "options": { "color": "Solid Cream", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17467, "title": "Solid Dark Chocolate / 2XL", "options": { "color": "Solid Dark Chocolate", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17485, "title": "Solid Heavy Metal / 2XL", "options": { "color": "Solid Heavy Metal", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17494, "title": "Solid Indigo / 2XL", "options": { "color": "Solid Indigo", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17521, "title": "Solid Light Blue / 2XL", "options": { "color": "Solid Light Blue", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17557, "title": "Solid Maroon / 2XL", "options": { "color": "Solid Maroon", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17593, "title": "Solid Red / 2XL", "options": { "color": "Solid Red", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17602, "title": "Solid Royal / 2XL", "options": { "color": "Solid Royal", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17611, "title": "Solid Sand / 2XL", "options": { "color": "Solid Sand", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17647, "title": "Solid White / 2XL", "options": { "color": "Solid White", "size": "2XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17396, "title": "Heather Grey / 3XL", "options": { "color": "Heather Grey", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17432, "title": "Solid Black / 3XL", "options": { "color": "Solid Black", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17441, "title": "Solid Scarlet / 3XL", "options": { "color": "Solid Scarlet", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17450, "title": "Solid Cool Blue / 3XL", "options": { "color": "Solid Cool Blue", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17459, "title": "Solid Cream / 3XL", "options": { "color": "Solid Cream", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17468, "title": "Solid Dark Chocolate / 3XL", "options": { "color": "Solid Dark Chocolate", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17486, "title": "Solid Heavy Metal / 3XL", "options": { "color": "Solid Heavy Metal", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17495, "title": "Solid Indigo / 3XL", "options": { "color": "Solid Indigo", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17522, "title": "Solid Light Blue / 3XL", "options": { "color": "Solid Light Blue", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17558, "title": "Solid Maroon / 3XL", "options": { "color": "Solid Maroon", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17594, "title": "Solid Red / 3XL", "options": { "color": "Solid Red", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17603, "title": "Solid Royal / 3XL", "options": { "color": "Solid Royal", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17612, "title": "Solid Sand / 3XL", "options": { "color": "Solid Sand", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] }, { "id": 17648, "title": "Solid White / 3XL", "options": { "color": "Solid White", "size": "3XL" }, "placeholders": [ { "position": "back", "height": 5700, "width": 4500 }, { "position": "front", "height": 5700, "width": 4500 } ] } ] }`

#### Retrieve shipping information

GET

/v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping.json

**Retrieve shipping information** `GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping.json` [View Response](https://developers.printify.com/#)
`{ "handling_time": { "value": 30, "unit": "day" }, "profiles": [ { "variant_ids": [ 42716, 42717, 42718, 42719, 42720, 12144, 12143, 12142, 12145, 12146, 12150, 12149, 12148, 12151, 12152, 12162, 12161, 12160, 12163, 12164, 12180, 12179, 12178, 12181, 12182, 12192, 12191, 12190, 12193, 12194, 11874, 11873, 11872, 11875, 11876, 11892, 11891, 11890, 11893, 11894, 11898, 11897, 11896, 11899, 11900, 11934, 11933, 11932, 11935, 11936, 11946, 11945, 11944, 11947, 11948, 11952, 11951, 11950, 11953, 11954, 11958, 11957, 11956, 11959, 11960, 11976, 11975, 11974, 11977, 11978, 11988, 11987, 11986, 11989, 11990, 12012, 12011, 12010, 12013, 12014, 12018, 12017, 12016, 12019, 12020, 12024, 12023, 12022, 12025, 12026, 12030, 12029, 12028, 12031, 12032, 12054, 12053, 12052, 12055, 12056, 12072, 12071, 12070, 12073, 12074, 12102, 12101, 12100, 12103, 12104, 12126, 12125, 12124, 12127, 12128 ], "first_item": { "cost": 450, "currency": "USD" }, "additional_items": { "cost": 0, "currency": "USD" }, "countries": [ "US" ] }, { "variant_ids": [ 42716, 42717, 42718, 42719, 42720, 12144, 12143, 12142, 12145, 12146, 12150, 12149, 12148, 12151, 12152, 12162, 12161, 12160, 12163, 12164, 12180, 12179, 12178, 12181, 12182, 12192, 12191, 12190, 12193, 12194, 11874, 11873, 11872, 11875, 11876, 11892, 11891, 11890, 11893, 11894, 11898, 11897, 11896, 11899, 11900, 11934, 11933, 11932, 11935, 11936, 11946, 11945, 11944, 11947, 11948, 11952, 11951, 11950, 11953, 11954, 11958, 11957, 11956, 11959, 11960, 11976, 11975, 11974, 11977, 11978, 11988, 11987, 11986, 11989, 11990, 12012, 12011, 12010, 12013, 12014, 12018, 12017, 12016, 12019, 12020, 12024, 12023, 12022, 12025, 12026, 12030, 12029, 12028, 12031, 12032, 12054, 12053, 12052, 12055, 12056, 12072, 12071, 12070, 12073, 12074, 12102, 12101, 12100, 12103, 12104, 12126, 12125, 12124, 12127, 12128 ], "first_item": { "cost": 650, "currency": "USD" }, "additional_items": { "cost": 0, "currency": "USD" }, "countries": [ "CA", "AU", "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LT", "LV", "LU", "MT", "NL", "NO", "PT", "PL", "RO", "SK", "SI", "ES", "SE", "CH", "TR", "GB", "GI", "AX" ] }, { "variant_ids": [ 42716, 42717, 42718, 42719, 42720, 12144, 12143, 12142, 12145, 12146, 12150, 12149, 12148, 12151, 12152, 12162, 12161, 12160, 12163, 12164, 12180, 12179, 12178, 12181, 12182, 12192, 12191, 12190, 12193, 12194, 11874, 11873, 11872, 11875, 11876, 11892, 11891, 11890, 11893, 11894, 11898, 11897, 11896, 11899, 11900, 11934, 11933, 11932, 11935, 11936, 11946, 11945, 11944, 11947, 11948, 11952, 11951, 11950, 11953, 11954, 11958, 11957, 11956, 11959, 11960, 11976, 11975, 11974, 11977, 11978, 11988, 11987, 11986, 11989, 11990, 12012, 12011, 12010, 12013, 12014, 12018, 12017, 12016, 12019, 12020, 12024, 12023, 12022, 12025, 12026, 12030, 12029, 12028, 12031, 12032, 12054, 12053, 12052, 12055, 12056, 12072, 12071, 12070, 12073, 12074, 12102, 12101, 12100, 12103, 12104, 12126, 12125, 12124, 12127, 12128 ], "first_item": { "cost": 1100, "currency": "USD" }, "additional_items": { "cost": 0, "currency": "USD" }, "countries": [ "REST_OF_THE_WORLD" ] } ] }`

#### Retrieve a list of available print providers

GET

/v1/catalog/print_providers.json

**Retrieve a list of available print providers** `GET /v1/catalog/print_providers.json` [View Response](https://developers.printify.com/#)
`[ { "id": 1, "title": "SPOKE Custom Products", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 2, "title": "CG Pro prints", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 3, "title": "The Dream Junction ", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 5, "title": "ArtGun", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 6, "title": "T shirt and Sons", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 7, "title": "Prodigi", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 8, "title": "Fifth Sun", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 9, "title": "WPaPS", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 10, "title": "MWW On Demand", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 14, "title": "ArtsAdd", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 16, "title": "MyLocker", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 20, "title": "Troupe Jewelry", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 23, "title": "WOYC", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 24, "title": "Inklocker", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } }, { "id": 25, "title": "DTG2Go", "location": { "address1": "89 Weirfield St", "address2": "", "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" } } ]`

#### Retrieve a specific print provider

GET

/v1/catalog/print_providers/{print_provider_id}.json

**Retrieve a specific print provider and a list of associated blueprint offerings** `GET /v1/catalog/print_providers/{print_provider_id}.json`
[View Response](https://developers.printify.com/#)
`{ "id": 1, "title": "SPOKE Custom Products", "location": { "address1": "89 Weirfield St", "address2": null, "city": "Brooklyn", "country": "US", "region": "NY", "zip": "11221-5120" }, "blueprints": [ { "id": 265, "title": "Slim Iphone 8", "brand": "Case Mate", "model": "Slim Iphone 8", "images": [ "https://images.printify.com/59b261c9b8e7e361c9147b1b.png" ] }, { "id": 266, "title": "Tough Iphone 8", "brand": "Case Mate", "model": "Tough Iphone 8", "images": [ "https://images.printify.com/59b26fbfb8e7e36254554a34.png" ] }, { "id": 52, "title": "Slim Iphone 6/6s", "brand": "Case Mate", "model": "6/6s Slim", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f5eb.png", "https://images.printify.com/5853fe7dce46f30f8327f5ee.png" ] }, { "id": 53, "title": "Tough Iphone 6/6s", "brand": "Case Mate", "model": "6/6s Tough", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f5f1.png", "https://images.printify.com/5853fe7dce46f30f8327f5f4.png" ] }, { "id": 54, "title": "Slim Iphone 6/6s Plus", "brand": "Case Mate", "model": "6/6s Plus Slim", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f61b.png", "https://images.printify.com/5853fe7dce46f30f8327f61e.png" ] }, { "id": 55, "title": "Tough Iphone 6/6s Plus", "brand": "Case Mate", "model": "6/6s Plus Tough", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f615.png", "https://images.printify.com/5853fe7dce46f30f8327f618.png" ] }, { "id": 56, "title": "Slim Iphone 5/5s/5se", "brand": "Case Mate", "model": "5/5s/5se Slim", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f5f7.png", "https://images.printify.com/5853fe7dce46f30f8327f5fa.png" ] }, { "id": 57, "title": "Tough Iphone 5/5s/5se", "brand": "Case Mate", "model": "5/5s/5se Tough", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f5fd.png", "https://images.printify.com/5853fe7dce46f30f8327f600.png" ] }, { "id": 58, "title": "Slim Iphone 5C", "brand": "Case Mate", "model": "5C Slim", "images": [ "https://images.printify.com/5853fe80ce46f30f8327f7cf.png", "https://images.printify.com/5853fe80ce46f30f8327f7d7.png" ] }, { "id": 59, "title": "Slim Iphone 4/4s", "brand": "Case Mate", "model": "4/4s Slim", "images": [ "https://images.printify.com/5853fe7ece46f30f8327f639.png", "https://images.printify.com/5853fe7ece46f30f8327f63c.png" ] }, { "id": 60, "title": "Tough Iphone 4/4s", "brand": "Case Mate", "model": "4/4s Tough", "images": [ "https://images.printify.com/5853fe7ece46f30f8327f63f.png", "https://images.printify.com/5853fe7ece46f30f8327f642.png" ] }, { "id": 61, "title": "Slim Samsung Galaxy S7", "brand": "Case Mate", "model": "S7 Slim", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f621.png", "https://images.printify.com/5853fe7dce46f30f8327f624.png" ] }, { "id": 62, "title": "Slim Samsung Galaxy S6", "brand": "Case Mate", "model": "S6 Slim", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f627.png", "https://images.printify.com/5853fe7ece46f30f8327f62a.png" ] }, { "id": 63, "title": "Tough Samsung Galaxy S6", "brand": "Case Mate", "model": "S6 Tough", "images": [ "https://images.printify.com/5853fe7ece46f30f8327f62d.png", "https://images.printify.com/5853fe7ece46f30f8327f630.png" ] }, { "id": 64, "title": "Slim Samsung Galaxy S5", "brand": "Case Mate", "model": "S5 Slim", "images": [ "https://images.printify.com/5853fe7ece46f30f8327f633.png", "https://images.printify.com/5853fe7ece46f30f8327f636.png" ] }, { "id": 68, "title": "Mug 11oz", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d09e78c47045f00083cd10d.png", "https://images.printify.com/58ac5d64b2439213b51b25ff.png" ] }, { "id": 69, "title": "Mug 15oz", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5853fe7bce46f30f8327f4ff.png", "https://images.printify.com/5c5c1516a342bcb8e421d242.png" ] }, { "id": 70, "title": "Stainless Steel Travel Mug", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d09f7e247045f00083cd110.png", "https://images.printify.com/5853fe7bce46f30f8327f502.png", "https://images.printify.com/58ac0e46b2439209155d3375.png", "https://images.printify.com/58ac5ac0b2439214ad09bd1b.png" ] }, { "id": 71, "title": "Laptop Sleeve", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5853fe7bce46f30f8327f4e2.png", "https://images.printify.com/58ac0dadb2439209e3265564.png", "https://images.printify.com/58ac0db9b24392090e55b2f8.png", "https://images.printify.com/58cbdd4eb24392676d7f6961.png", "https://images.printify.com/58cbdd67b243926fe26236c2.png" ] }, { "id": 74, "title": "Spiral Notebook - Ruled Line", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d03643bd155b4000a00cae5.png", "https://images.printify.com/58cbed76b2439279864551c0.png", "https://images.printify.com/58cbf1ddb243926fe909d567.png" ] }, { "id": 75, "title": "Journal - Ruled Line", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d03aa7dd155b400094c4d60.png", "https://images.printify.com/5853fe7bce46f30f8327f4de.png", "https://images.printify.com/5c49c395a342bc53475e5412.png" ] }, { "id": 76, "title": "Journal - Blank", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d03aad4d155b4000a00cb82.png", "https://images.printify.com/585a7e24ce46f3416b5db1c7.png", "https://images.printify.com/5c49c3cba342bc53c0283808.png" ] }, { "id": 84, "title": "Slim iPhone 7, iPhone 8", "brand": "Case Mate", "model": "Slim iPhone 7, iPhone 8", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f603.png", "https://images.printify.com/5853fe7dce46f30f8327f606.png" ] }, { "id": 85, "title": "Tough iPhone 7, IPhone 8", "brand": "Case Mate", "model": "Tough iPhone 7, IPhone 8", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f5e5.png", "https://images.printify.com/5853fe7dce46f30f8327f5e8.png" ] }, { "id": 86, "title": "Slim iPhone 7 Plus, iPhone 8 Plus", "brand": "Case Mate", "model": "Slim iPhone 7 Plus, , iPhone 8 Plus", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f609.png", "https://images.printify.com/5853fe7dce46f30f8327f60c.png" ] }, { "id": 87, "title": "Tough iPhone 7 Plus, iPhone 8 Plus", "brand": "Case Mate", "model": "Tough iPhone 7 Plus, iPhone 8 Plus", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f60f.png", "https://images.printify.com/5853fe7dce46f30f8327f612.png" ] }, { "id": 99, "title": "All US Phone cases", "brand": "Case Mate", "model": "", "images": [ "https://images.printify.com/5853fe7dce46f30f8327f5eb.png", "https://images.printify.com/5853fe7dce46f30f8327f5ee.png", "https://images.printify.com/5853fe7dce46f30f8327f5f1.png", "https://images.printify.com/5853fe7dce46f30f8327f5f4.png", "https://images.printify.com/5853fe7dce46f30f8327f61b.png", "https://images.printify.com/5853fe7dce46f30f8327f61e.png", "https://images.printify.com/5853fe7dce46f30f8327f615.png", "https://images.printify.com/5853fe7dce46f30f8327f618.png", "https://images.printify.com/5853fe7dce46f30f8327f5f7.png", "https://images.printify.com/5853fe7dce46f30f8327f5fa.png", "https://images.printify.com/5853fe7dce46f30f8327f5fd.png", "https://images.printify.com/5853fe7dce46f30f8327f600.png", "https://images.printify.com/5853fe80ce46f30f8327f7cf.png", "https://images.printify.com/5853fe80ce46f30f8327f7d7.png", "https://images.printify.com/5853fe7ece46f30f8327f639.png", "https://images.printify.com/5853fe7ece46f30f8327f63c.png", "https://images.printify.com/5853fe7ece46f30f8327f63f.png", "https://images.printify.com/5853fe7ece46f30f8327f642.png", "https://images.printify.com/5853fe7dce46f30f8327f621.png", "https://images.printify.com/5853fe7dce46f30f8327f624.png", "https://images.printify.com/5853fe7dce46f30f8327f627.png", "https://images.printify.com/5853fe7ece46f30f8327f62a.png", "https://images.printify.com/5853fe7ece46f30f8327f62d.png", "https://images.printify.com/5853fe7ece46f30f8327f630.png", "https://images.printify.com/5853fe7ece46f30f8327f633.png", "https://images.printify.com/5853fe7ece46f30f8327f636.png", "https://images.printify.com/5853fe7dce46f30f8327f603.png", "https://images.printify.com/5853fe7dce46f30f8327f606.png", "https://images.printify.com/5853fe7dce46f30f8327f5e5.png", "https://images.printify.com/5853fe7dce46f30f8327f5e8.png", "https://images.printify.com/5853fe7dce46f30f8327f609.png", "https://images.printify.com/5853fe7dce46f30f8327f60c.png", "https://images.printify.com/5853fe7dce46f30f8327f60f.png", "https://images.printify.com/5853fe7dce46f30f8327f612.png" ] }, { "id": 125, "title": "Mugs", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5853fe7bce46f30f8327f4fc.png", "https://images.printify.com/58ac5d64b2439213b51b25ff.png", "https://images.printify.com/5853fe7bce46f30f8327f4ff.png", "https://images.printify.com/5c5c1516a342bcb8e421d242.png" ] }, { "id": 268, "title": "Case Mate Slim Phone Cases", "brand": "Case Mate", "model": "", "images": [ "https://images.printify.com/5d08c85847045f00097be5b3.png" ] }, { "id": 269, "title": "Case Mate Tough Phone Cases", "brand": "Case Mate", "model": "", "images": [ "https://images.printify.com/5d132242c1bdb8000a6e474c.png", "https://images.printify.com/5d131fadc1bdb800125d2efd.png" ] }, { "id": 277, "title": "Wall clock", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d0b31f347045f01ae2eeb1f.png", "https://images.printify.com/5a033c07b8e7e328100d3c27.png" ] }, { "id": 289, "title": "Latte mug", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d0a0e6047045f0189376682.png", "https://images.printify.com/5a325c76b8e7e355db3449e8.png" ] }, { "id": 352, "title": "Beach Towel", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5afeba40a342bcea7045d84e.png" ] }, { "id": 353, "title": "Tumbler 20oz", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5ad0a5baa342bc91115b6927.png" ] }, { "id": 354, "title": "Tumbler 10oz", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5ad0a68ca342bc911954d928.png" ] }, { "id": 355, "title": "Can Holder", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5ad0a53ca342bc9114070039.png" ] }, { "id": 376, "title": "Sublimation Socks", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d13450ec1bdb800125d2f0d.png", "https://images.printify.com/5be1ae47a342bc3390628e22.png", "https://images.printify.com/5bbc8702a342bc24e4283e2c.png" ] }, { "id": 384, "title": "Square Stickers", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5cf4f606705f1900141a667c.png", "https://images.printify.com/5c6685a6a342bc4c6340bf82.png" ] }, { "id": 400, "title": "Kiss-Cut Stickers", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5cf4fabe705f190009393f38.png", "https://images.printify.com/5c48648aa342bc7e304661f2.png", "https://images.printify.com/5c4864a2a342bc7e256c1d6c.png" ] }, { "id": 423, "title": "Alex' Test Product (do not delete)", "brand": "Bella+Canvas", "model": "9999", "images": [ "https://images.printify.com/5c8bdf3d21a6ed001111c202.png", "https://images.printify.com/5c7565d51e58a3000964b4e2.png", "https://images.printify.com/5c8bdfa721a6ed000f1d19d2.png", "https://images.printify.com/5c8be08a21a6ed00102eaa97.png", "https://images.printify.com/5c8be09321a6ed0014663572.png" ] }, { "id": 425, "title": "Mug 15oz", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d0a08d647045f00097be6cd.png", "https://images.printify.com/5d0a07b547045f00083cd116.png", "https://images.printify.com/5cab36e06b4a8300124cea40.png", "https://images.printify.com/5cab21ef6b4a83000970c497.png" ] }, { "id": 427, "title": "Magnets", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d0b831a47045f02006b0b7a.png", "https://images.printify.com/5ce534113aa847000600d60c.png" ] }, { "id": 429, "title": "Laptop Sleeve", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5d2325ebce7a9c07c221c926.png", "https://images.printify.com/5d23233fce7a9c07c105f393.png", "https://images.printify.com/5d232340ce7a9c07c04f9aa7.png", "https://images.printify.com/5d23233ece7a9c07c04f9aa3.png" ] }, { "id": 430, "title": "Pin Buttons", "brand": "Generic brand", "model": "", "images": [ "https://images.printify.com/5cfa4880cf4eed002673c8c2.png", "https://images.printify.com/5cfa46a8cf4eed00101202d9.png", "https://images.printify.com/5cfa0db8cf4eed00101202d2.png" ] } ] }`

### Structure

Structure of Catalog resource with possible transitions between endpoints.

[![catalog structure](./PrintifyAPIComplete_files/CatalogStructure-4035cf82.jpg)](./PrintifyAPIComplete_files/CatalogStructure-4035cf82.jpg)

## Products

The Product resource lets you list, create, update, delete and publish products to a store.

On this page:

- [What you can do with the product resource](https://developers.printify.com/#what-you-can-do-with-the-product-resource)
- [Product properties](https://developers.printify.com/#product-properties)
  - [Variant properties](https://developers.printify.com/#product-variant-properties)
  - [Placeholder properties](https://developers.printify.com/#product-placeholder-properties)
  - [Image properties](https://developers.printify.com/#image-properties)
  - [Mock-up image properties](https://developers.printify.com/#mock-up-image-properties)
  - [Publishing properties](https://developers.printify.com/#publishing-properties)
- [Endpoints](https://developers.printify.com/#products-endpoints)
- [Products Structure](https://developers.printify.com/#products-structure)
- [Image positioning](https://developers.printify.com/#image-positioning)
- [Common error cases](https://developers.printify.com/#products-common-error-cases)

### What you can do with the product resource

The Printify Public API lets you do the following with the Product resource:

- [GET /v1/shops/{shop_id}/products.json](https://developers.printify.com/#retrieve-a-list-of-products) Retrieve a list of all products
- [GET /v1/shops/{shop_id}/products/{product_id}.json](https://developers.printify.com/#retrieve-a-product) Retrieve a product
- [POST /v1/shops/{shop_id}/products.json](https://developers.printify.com/#create-a-new-product) Create a new product
- [PUT /v1/shops/{shop_id}/products/{product_id}.json](https://developers.printify.com/#update-a-product) Update a product
- [DELETE /v1/shops/{shop_id}/products/{product_id}.json](https://developers.printify.com/#delete-a-product) Delete a product
- [POST /v1/shops/{shop_id}/products/{product_id}/publish.json](https://developers.printify.com/#publish-a-product) Publish a product
- [POST /v1/shops/{shop_id}/products/{product_id}/publishing_succeeded.json](https://developers.printify.com/#set-product-publish-status-to-succeeded) Set product publish status to
  succeeded
- [POST /v1/shops/{shop_id}/products/{product_id}/publishing_failed.json](https://developers.printify.com/#set-product-publish-status-to-failed) Set product publish status to
  failed
- [POST /v1/shops/{shop_id}/products/{product_id}/unpublish.json](https://developers.printify.com/#notify-that-a-product-has-been-unpublished) Notify that a product has been
  unpublished

### Product properties

id READ-ONLY

`"id": "5cb87a8cd490a2ccb256cec4"` A unique string identifier for the product. Each id is unique across the Printify system.

title REQUIRED

`"title": "Product's title"` The name of the product.

description REQUIRED

`"description": "Product's description"` A description of the product. Supports HTML formatting.

tags OPTIONAL

`"tags": ["T-shirt", "Men's"]` Tags are also published to sales channel.

options READ-ONLY

`"options": [{ "name": "Colors", "type": "color", "values": [{ "id": 751, "title": "Solid White", "colors": [ "#F9F9F9" ] }] }]` Options are read only values and describes product
options. There can be up to 3 options for a product.

variants REQUIRED

`"variants": [{ "id": 123, "price": 1000, "title": "Solid Dark Gray / S", "sku": "PRY-123", "grams": 120, "is_enabled": true, "is_default": false, "is_printify_express_eligible": true, "options": [751, 2] }]`
A list of all product variants, each representing a different version of the product. But during product creation, only the variant id and price are necessary. See
[variant properties](https://developers.printify.com/#variant-properties) for reference.

images READ-ONLY

`"images": [{ "src": "http://example.com/tee.jpg", "variant_ids": [123, 124], "position": "front", "is_default" : false, }]` Mock-up images are read only values. The mock-up images
are grouped by variants and position. See [mock-up image properties](https://developers.printify.com/#mock-up-image-properties) for reference.

created_at READ-ONLY

`"created_at": "2017-04-18 13:24:28+00:00"` The date and time when a product was created.

update_at READ-ONLY

`"update_at": "2017-04-18 13:24:28+00:00"` The date and time when a product was last updated.

visible READ-ONLY

`"visible": true` Used for publishing. Visibility in sales channel. Can be `true` or `false`, defaults to `true`.

blueprint_id REQUIRED READ-ONLY

`"blueprint_id": 5` Required when creating a product, but is read only after. See [catalog](https://developers.printify.com/#catalog) for how to get `blueprint_id`.

print_provider_id REQUIRED READ-ONLY

`"print_provider_id": 5` Required when creating a product, but is read only after. See [catalog](https://developers.printify.com/#catalog) for how to get `print_provider_id`.

user_id READ-ONLY

`"user_id": 5` User id that a product belongs to.

shop_id READ-ONLY

`"shop_id": 1` Shop id that a product belongs to.

print_areas REQUIRED

`"print_areas": [{ "variant_ids": [123, 124], "placeholders": [{ "position": "front", "images": [] }], }]` All print area values are required. Each variant has a print area
attached to it. Each print area has placeholders which represent printable areas on a product. For example the front of the t-shirt, back of the t-shirt etc. Each placeholder has
images and their positions, where they need to be printed in the printable area. See [placeholder properties](https://developers.printify.com/#product-placeholder-properties) for
reference.

print_details OPTIONAL

`"print_details": { "print_on_side": "regular" } }]` "print_on_side" key is used to set the type of side printing for canvases. There are three possible values:

- "regular" - to extend print area to the sides of canvas
- "mirror" - to keep original print area and mirror it to the sides
- "off" - stop printing on sides

external CONDITIONAL

`"external": [{ "id": "A123abceASd", "handle": "/path/to/product", "shipping_template_id": "B123abceASd" }]` Updated by sales channel with publishing succeeded endpoint. Id and
handle are external references in the sales channel. See [publishing succeeded](https://developers.printify.com/#set-product-publish-status-to-succeeded) endpoint for more
reference. Shipping Template ID is optional and can be passed during product creation or update.

is_locked READ-ONLY

`"is_locked": true` A product is locked during publishing. Locked products can't be updated until unlocked.

is_printify_express_eligible READ-ONLY

`"is_printify_express_eligible": true` Flag to indicate if product could be eligible for
[Printify Express Delivery](https://help.printify.com/hc/en-us/sections/9116968124689-Printify-Express-Delivery), depending on selection of its variant.

is_economy_shipping_eligible READ-ONLY

`"is_economy_shipping_eligible": true` Flag to indicate if product could be eligible for
[Economy Shipping](https://help.printify.com/hc/en-us/sections/22109518886161-Economy-Shipping), depending on selection of its variant.

is_printify_express_enabled OPTIONAL

`"is_printify_express_enabled": true` Flag to indicate if [Printify Express Delivery](https://help.printify.com/hc/en-us/sections/9116968124689-Printify-Express-Delivery) is
enabled for the product. Printify Express Delivery can be enabled only for eligible products (see `is_printify_express_eligible` flag). Defaults to `false`.

is_economy_shipping_enabled READ-ONLY

`"is_economy_shipping_enabled": true` Flag to indicate if [Economy Shipping](https://help.printify.com/hc/en-us/sections/22109518886161-Economy-Shipping) is enabled for the
product. Economy Shipping can be enabled only for eligible products (see `is_economy_shipping_eligible` flag). Defaults to `false`.

sales_channel_properties READ-ONLY

`"sales_channel_properties": []` Lists product properties specific to the sales channel associated with the product, if the sales channel has such custom properties, the attributes
are listed in the array and may be actionable, but for all custom integrations, it will either be null or an empty array.

### Variant properties

id REQUIRED READ-ONLY

`"id": 123` A unique int identifier for the product variant from the blueprint. Each id is unique across the Printify system. See catalog for instructions on how to get variant
ids.

sku OPTIONAL

`"sku": "SKU-123"` Optional unique string identifier for the product variant. If one is not provided, one will be generated by Printify.

price REQUIRED

`"price": 1000` Price in cents, integer value.

cost READ-ONLY

`"cost": 400` Product variant's fulfillment cost in cents, integer value.

title READ-ONLY

`"title": "Solid Dark Gray / S"` Variant title.

grams READ-ONLY

`"grams": 120` Weight in grams for a product variant

is_enabled OPTIONAL

`"is_enabled": true` Used for publishing, the value is true if one has the variant in question selected as an offering and wants it published.

is_default OPTIONAL

`"is_default": true` Only one variant can be default. Used when publishing to sales channel. Default variant's image will be the title image of the product.

is_available READ-ONLY

`"is_available": true` Actual stock status of the variant, if false, the variant is out of stock and vice versa.

is_printify_express_eligible READ-ONLY

`"is_printify_express_eligible": true` Flag to indicate if product's variant is eligible for
[Printify Express](https://help.printify.com/hc/en-us/sections/9116968124689-Printify-Express-Delivery) delivery.

options READ-ONLY

`"options": [751, 2]` Reference to options by id.

### Placeholder properties

position REQUIRED

`"position": "front"` See [blueprint placeholder properties](https://developers.printify.com/#catalog-placeholder-properties) from the catalog endpoint for reference on how to get
positions.

images REQUIRED

`"images": []` Array of images. See [image properties](https://developers.printify.com/#image-properties) for reference.

### Image properties

id REQUIRED

`"id": 123` See [upload images](https://developers.printify.com/#uploads) for reference on how to upload images and get all needed properties.

name READ-ONLY

`"name": "image.jpg"` Name of an image file.

type READ-ONLY

`"type": "image/png"` Type of an image. Valid image types are `image/png`, `image/jpg`, `image/jpeg`.

height READ-ONLY

`"height": 100` Float value for image height in pixels. See [upload images](https://developers.printify.com/#uploads) for reference on how to upload images and get all needed
properties.

width READ-ONLY

`"width": 100` Float value for image width in pixels. See [upload images](https://developers.printify.com/#uploads) for reference on how to upload images and get all needed
properties.

x REQUIRED

`"x": 100` Float value to position an image on the x axis. See [image positioning](https://developers.printify.com/#image-positioning) for reference on how to position images.

y REQUIRED

`"y": 100` Float value to position an image on the y axis. See [image positioning](https://developers.printify.com/#image-positioning) for reference on how to position images.

scale REQUIRED

`"scale": 1` Float value to scale image up or down. See [image positioning](https://developers.printify.com/#image-positioning) for reference on how to position images.

angle REQUIRED

`"angle": 180` Integer value used to rotate image. See [image positioning](https://developers.printify.com/#image-positioning) for reference on how to position images.

### Mock-up image properties

src READ-ONLY

`"src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg"` Url of a mock-up image.

variant_ids READ-ONLY

`"variant_ids": [ 61618, 61619, 61620, 61621, 61622 ]` Array of integer ids for variants illustrated by the mock-up image.

position READ-ONLY

`"position": "front"` Camera position of a mockup (i.e. what part of the product is being displayed).

is_default READ-ONLY

`"is_default": true` Used by the sales channel. If set to `true`, The specific mockup is the title image. Can be used to decide the first image displayed when a product's page is
accessed.

### Publishing properties

The "publish" button in the Printify app only locks the product on the Printify app and triggers the product:publish:started event if you are subscribed to it, see See
[Product events](https://developers.printify.com/#product-events) for reference. To publish a product, you need to create it manually on your store from the data you can obtain
from the product resource or develop a system to automate that. Once done, you can use the
[Publish succeeded endpoint](https://developers.printify.com/#set-product-publish-status-to-succeeded) or
[Publish failed endpoint](https://developers.printify.com/#set-product-publish-status-to-failed) to unlock the product.

images REQUIRED

`"images": true` Used by the sales channel. If set to `false`, Images will not be published, and existing images will be used instead.

variants REQUIRED

`"variants": true` Used by the sales channel. If set to `false`, product variations will not be published.

title REQUIRED

`"title": true` Used by sales channel. If set to `false`, product title will not be updated.

description REQUIRED

`"description": true` Used by sales channel. If set to `false`, product description will not be updated.

tags REQUIRED

`"tags": true` Used by sales channel. If set to `false`, product tags will not be updated.

keyFeatures OPTIONAL

`"keyFeatures": true` Used by Walmart sales channel only. If set to `false`, product key features will not be updated.

shipping_template OPTIONAL

`"shipping_template": true` Used by Etsy and Walmart sales channels only. If set to `false`, product shipping template will not be updated.

### Endpoints

### Retrieve a list of products

GET

/v1/shops/{shop_id}/products.json

limit OPTIONAL

Results per page (default: 10, maximum: 100)

page OPTIONAL

Paginate through list of results

**Retrieve all products** `GET /v1/shops/{shop_id}/products.json` [View Response](https://developers.printify.com/#)
`{ "current_page": 1, "data": [ { "id": "5d39b159e7c48c000728c89f", "title": "Mug 11oz", "description": "Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. .: White ceramic .: 11 oz (0.33 l) .: Rounded corners .: C-Handle", "tags": [ "Home & Living", "Mugs", "11 oz", "White base", "Sublimation" ], "options": [ { "name": "Sizes", "type": "size", "values": [ { "id": 1189, "title": "11oz" } ] } ], "variants": [ { "id": 33719, "sku": "866366009", "cost": 516, "price": 860, "title": "11oz", "grams": 460, "is_enabled": true, "is_default": true, "is_available": true, "is_printify_express_eligible": true, "options": [ 1189 ] } ], "images": [ { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "other", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "other", "is_default": true } ], "created_at": "2019-07-25 13:40:41+00:00", "updated_at": "2019-07-25 13:40:59+00:00", "visible": true, "is_locked": false, "is_printify_express_eligible": true, "is_printify_express_enabled": true, "is_economy_shipping_eligible": true, "is_economy_shipping_enabled": true, "blueprint_id": 68, "user_id": 1337, "shop_id": 1337, "print_provider_id": 9, "print_areas": [ { "variant_ids": [ 33719 ], "placeholders": [ { "position": "front", "images": [ { "id": "5c7665205342af161e1cb26e", "name": "Test.png", "type": "image/png", "height": 5850, "width": 4350, "x": 0.5, "y": 0.5, "scale": 1.01, "angle": 0 } ] } ], "background": "#ffffff" } ], "sales_channel_properties": [] } ], "first_page_url": "/?page=1", "from": 1, "last_page": 22, "last_page_url": "/?page=22", "next_page_url": "/?page=2", "path": "/", "per_page": 1, "prev_page_url": null, "to": 1, "total": 22 }`

**Retrieve specific page from results** `GET /v1/shops/{shop_id}/products.json?page=2` [View Response](https://developers.printify.com/#)
`{ "current_page": 2, "data": [ { "id": "5d39b159e7c48c000728c89f", "title": "Mug 11oz", "description": "Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. .: White ceramic .: 11 oz (0.33 l) .: Rounded corners .: C-Handle", "tags": [ "Home & Living", "Mugs", "11 oz", "White base", "Sublimation" ], "options": [ { "name": "Sizes", "type": "size", "values": [ { "id": 1189, "title": "11oz" } ] } ], "variants": [ { "id": 33719, "sku": "866366009", "cost": 516, "price": 860, "title": "11oz", "grams": 460, "is_enabled": true, "is_default": true, "is_available": true, "is_printify_express_eligible": true, "options": [ 1189 ] } ], "images": [ { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "other", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "other", "is_default": true } ], "created_at": "2019-07-25 13:40:41+00:00", "updated_at": "2019-07-25 13:40:59+00:00", "visible": true, "is_locked": false, "is_printify_express_eligible": true, "is_printify_express_enabled": true, "is_economy_shipping_eligible": true, "is_economy_shipping_enabled": true, "blueprint_id": 68, "user_id": 1337, "shop_id": 1337, "print_provider_id": 9, "print_areas": [ { "variant_ids": [ 33719 ], "placeholders": [ { "position": "front", "images": [ { "id": "5c7665205342af161e1cb26e", "name": "Test.png", "type": "image/png", "height": 5850, "width": 4350, "x": 0.5, "y": 0.5, "scale": 1.01, "angle": 0 } ] } ], "background": "#ffffff" } ], "sales_channel_properties": [] } ], "first_page_url": "/?page=1", "from": 2, "last_page": 22, "last_page_url": "/?page=22", "next_page_url": "/?page=3", "path": "/", "per_page": 1, "prev_page_url": "/?page=1", "to": 2, "total": 22 }`

**Retrieve limited results** `GET /v1/shops/{shop_id}/products.json?limit=1` [View Response](https://developers.printify.com/#)
`{ "current_page": 1, "data": [ { "id": "5d39b159e7c48c000728c89f", "title": "Mug 11oz", "description": "Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. .: White ceramic .: 11 oz (0.33 l) .: Rounded corners .: C-Handle", "tags": [ "Home & Living", "Mugs", "11 oz", "White base", "Sublimation" ], "options": [ { "name": "Sizes", "type": "size", "values": [ { "id": 1189, "title": "11oz" } ] } ], "variants": [ { "id": 33719, "sku": "866366009", "cost": 516, "price": 860, "title": "11oz", "grams": 460, "is_enabled": true, "is_default": true, "is_available": true, "is_printify_express_eligible": true, "options": [ 1189 ] } ], "images": [ { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "other", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "other", "is_default": true } ], "created_at": "2019-07-25 13:40:41+00:00", "updated_at": "2019-07-25 13:40:59+00:00", "visible": true, "is_locked": false, "is_printify_express_eligible": true, "is_printify_express_enabled": true, "is_economy_shipping_eligible": true, "is_economy_shipping_enabled": true, "blueprint_id": 68, "user_id": 1337, "shop_id": 1337, "print_provider_id": 9, "print_areas": [ { "variant_ids": [ 33719 ], "placeholders": [ { "position": "front", "images": [ { "id": "5c7665205342af161e1cb26e", "name": "Test.png", "type": "image/png", "height": 5850, "width": 4350, "x": 0.5, "y": 0.5, "scale": 1.01, "angle": 0 } ] } ], "background": "#ffffff" } ], "sales_channel_properties": [] } ], "first_page_url": "/?page=1", "from": 1, "last_page": 10, "last_page_url": "/?page=10", "next_page_url": "/?page=2", "path": "/", "per_page": 1, "prev_page_url": null, "to": 1, "total": 10 }`

#### Retrieve a product

GET

/v1/shops/{shop_id}/products/{product_id}.json

**Retrieve a product** `GET /v1/shops/{shop_id}/products/{product_id}.json` [View Response](https://developers.printify.com/#)
`{ "id": "5d39b159e7c48c000728c89f", "title": "Mug 11oz", "description": "Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover.Perfect for coffee, tea and hot chocolate, this classic shape white, durable ceramic mug in the most popular size. High quality sublimation printing makes it an appreciated gift to every true hot beverage lover. .: White ceramic .: 11 oz (0.33 l) .: Rounded corners .: C-Handle", "tags": [ "Home & Living", "Mugs", "11 oz", "White base", "Sublimation" ], "options": [ { "name": "Sizes", "type": "size", "values": [ { "id": 1189, "title": "11oz" } ] } ], "variants": [ { "id": 33719, "sku": "866366009", "cost": 516, "price": 860, "title": "11oz", "grams": 460, "is_enabled": true, "is_default": true, "is_available": true, "is_printify_express_eligible": true, "options": [ 1189 ] } ], "images": [ { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "other", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg", "variant_ids": [ 33719 ], "position": "other", "is_default": true } ], "created_at": "2019-07-25 13:40:41+00:00", "updated_at": "2019-07-25 13:40:59+00:00", "visible": true, "is_locked": false, "is_printify_express_eligible": true, "is_printify_express_enabled": true, "is_economy_shipping_eligible": true, "is_economy_shipping_enabled": true, "blueprint_id": 68, "user_id": 1337, "shop_id": 1337, "print_provider_id": 9, "print_areas": [ { "variant_ids": [ 33719 ], "placeholders": [ { "position": "front", "images": [ { "id": "5c7665205342af161e1cb26e", "name": "Test.png", "type": "image/png", "height": 5850, "width": 4350, "x": 0.5, "y": 0.5, "scale": 1.01, "angle": 0 } ] } ], "background": "#ffffff" } ], "sales_channel_properties": [] }`

#### Create a new product

POST

/v1/shops/{shop_id}/products.json

**Create a new product** `POST /v1/shops/{shop_id}/products.json`
`{ "title": "Product", "description": "Good product", "blueprint_id": 384, "print_provider_id": 1, "variants": [ { "id": 45740, "price": 400, "is_enabled": true }, { "id": 45742, "price": 400, "is_enabled": true }, { "id": 45744, "price": 400, "is_enabled": false }, { "id": 45746, "price": 400, "is_enabled": false } ], "print_areas": [ { "variant_ids": [45740,45742,45744,45746], "placeholders": [ { "position": "front", "images": [ { "id": "5d15ca551163cde90d7b2203", "x": 0.5, "y": 0.5, "scale": 1, "angle": 0 } ] } ] } ] }`
[View Response](https://developers.printify.com/#)
`{ "id": "5d39b411749d0a000f30e0f4", "title": "Product", "description": "Good product", "tags": [ "Home & Living", "Stickers" ], "options": [ { "name": "Size", "type": "size", "values": [ { "id": 2017, "title": "2x2\"" }, { "id": 2018, "title": "3x3\"" }, { "id": 2019, "title": "4x4\"" }, { "id": 2020, "title": "6x6\"" } ] }, { "name": "Type", "type": "surface", "values": [ { "id": 2114, "title": "White" } ] } ], "variants": [ { "id": 45740, "sku": "866375988", "cost": 134, "price": 400, "title": "2x2\" / White", "grams": 10, "is_enabled": true, "is_default": true, "is_available": true, "is_printify_express_eligible": true, "options": [ 2017, 2114 ] }, { "id": 45742, "sku": "866375989", "cost": 149, "price": 400, "title": "3x3\" / White", "grams": 10, "is_enabled": true, "is_default": false, "is_available": true, "is_printify_express_eligible": true, "options": [ 2018, 2114 ] }, { "id": 45744, "sku": "866375990", "cost": 187, "price": 400, "title": "4x4\" / White", "grams": 10, "is_enabled": true, "is_default": false, "is_available": true, "is_printify_express_eligible": true, "options": [ 2019, 2114 ] }, { "id": 45746, "sku": "866375991", "cost": 216, "price": 400, "title": "6x6\" / White", "grams": 10, "is_enabled": true, "is_default": false, "is_available": true, "is_printify_express_eligible": true, "options": [ 2020, 2114 ] } ], "images": [ { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2187/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": true }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2188/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2189/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2190/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2191/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2192/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2193/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2194/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2195/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2196/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2197/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2198/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2199/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2200/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2201/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2202/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2187/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2188/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2189/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": true }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2190/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2191/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2192/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2193/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2194/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2195/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2196/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2197/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2198/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2199/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2200/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2201/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2202/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2187/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2188/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2189/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2190/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": true }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2191/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2192/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2193/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2194/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2195/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2196/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2197/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2198/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2199/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2200/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2201/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2202/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2187/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2188/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2189/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2190/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2191/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": true }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2192/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2193/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2194/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2195/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2196/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2197/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2198/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2199/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2200/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2201/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2202/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false } ], "created_at": "2019-07-25 13:52:17+00:00", "updated_at": "2019-07-25 13:52:18+00:00", "visible": true, "is_locked": false, "is_printify_express_eligible": true, "is_printify_express_enabled": true, "is_economy_shipping_eligible": true, "is_economy_shipping_enabled": true, "blueprint_id": 384, "user_id": 1337, "shop_id": 1337, "print_provider_id": 1, "print_areas": [ { "variant_ids": [ 45740, 45742, 45744, 45746 ], "placeholders": [ { "position": "front", "images": [ { "id": "5d15ca551163cde90d7b2203", "name": "Asset 65@3x.png", "type": "image/png", "height": 1200, "width": 1200, "x": 0.5, "y": 0.5, "scale": 1, "angle": 0 } ] } ], "background": "#ffffff" } ], "sales_channel_properties": [] }`

#### Update a product

A product can be updated partially or as a whole document. When updating variants, all variants must be present in the request.

PUT

/v1/shops/{shop_id}/products/{product_id}.json

**Update a product** `PUT /v1/shops/{shop_id}/products/{product_id}.json` `{ "title": "Product" }` [View Response](https://developers.printify.com/#)
`{ "id": "5d39b411749d0a000f30e0f4", "title": "Product", "description": "Good product", "tags": [ "Home & Living", "Stickers" ], "options": [ { "name": "Size", "type": "size", "values": [ { "id": 2017, "title": "2x2\"" }, { "id": 2018, "title": "3x3\"" }, { "id": 2019, "title": "4x4\"" }, { "id": 2020, "title": "6x6\"" } ] }, { "name": "Type", "type": "surface", "values": [ { "id": 2114, "title": "White" } ] } ], "variants": [ { "id": 45740, "sku": "866375988", "cost": 134, "price": 400, "title": "2x2\" / White", "grams": 10, "is_enabled": true, "is_default": true, "is_available": true, "is_printify_express_eligible": true, "options": [ 2017, 2114 ] }, { "id": 45742, "sku": "866375989", "cost": 149, "price": 400, "title": "3x3\" / White", "grams": 10, "is_enabled": true, "is_default": false, "is_available": true, "is_printify_express_eligible": true, "options": [ 2018, 2114 ] }, { "id": 45744, "sku": "866375990", "cost": 187, "price": 400, "title": "4x4\" / White", "grams": 10, "is_enabled": true, "is_default": false, "is_available": true, "is_printify_express_eligible": true, "options": [ 2019, 2114 ] }, { "id": 45746, "sku": "866375991", "cost": 216, "price": 400, "title": "6x6\" / White", "grams": 10, "is_enabled": true, "is_default": false, "is_available": true, "is_printify_express_eligible": true, "options": [ 2020, 2114 ] } ], "images": [ { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2187/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": true }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2188/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2189/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2190/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2191/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2192/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2193/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2194/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2195/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2196/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2197/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2198/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2199/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2200/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2201/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45740/2202/product.jpg", "variant_ids": [ 45740 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2187/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2188/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2189/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": true }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2190/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2191/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2192/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2193/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2194/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2195/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2196/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2197/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2198/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2199/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2200/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2201/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45742/2202/product.jpg", "variant_ids": [ 45742 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2187/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2188/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2189/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2190/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": true }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2191/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2192/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2193/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2194/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2195/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2196/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2197/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2198/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2199/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2200/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2201/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45744/2202/product.jpg", "variant_ids": [ 45744 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2187/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2188/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2189/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2190/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2191/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": true }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2192/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2193/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2194/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2195/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2196/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2197/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2198/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2199/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2200/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2201/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false }, { "src": "https://images.printify.com/mockup/5d39b411749d0a000f30e0f4/45746/2202/product.jpg", "variant_ids": [ 45746 ], "position": "front", "is_default": false } ], "created_at": "2019-07-25 13:52:17+00:00", "updated_at": "2019-07-25 13:52:18+00:00", "visible": true, "is_locked": false, "is_printify_express_eligible": true, "is_printify_express_enabled": true, "is_economy_shipping_eligible": true, "is_economy_shipping_enabled": true, "blueprint_id": 384, "user_id": 1337, "shop_id": 1337, "print_provider_id": 1, "print_areas": [ { "variant_ids": [ 45740, 45742, 45744, 45746 ], "placeholders": [ { "position": "front", "images": [ { "id": "5d15ca551163cde90d7b2203", "name": "Asset 65@3x.png", "type": "image/png", "height": 1200, "width": 1200, "x": 0.5, "y": 0.5, "scale": 1, "angle": 0 } ] } ], "background": "#ffffff" } ], "sales_channel_properties": [] }`

#### Delete a product

DELETE

/v1/shops/{shop_id}/products/{product_id}.json

**Delete a product** `DELETE /v1/shops/{shop_id}/products/{product_id}.json` [View Response](https://developers.printify.com/#) `{}`

#### Publish a product

This does not implement any publishing action unless the Printify store is connected to one of our other supported sales channel integrations, if your store is custom and is
subscribed to the product::pubish::started event, that event will be triggered and the properties that are set in the request body will be set in the event payload for your store
to react to if implemented. The case is the same for attempting to publish a product from the Printify app. See [product events](https://developers.printify.com/#product-events)
for reference.

POST

/v1/shops/{shop_id}/products/{product_id}/publish.json

**Publish a product** `POST /v1/shops/{shop_id}/products/{product_id}/publish.json`
`{ "title": true, "description": true, "images": true, "variants": true, "tags": true, "keyFeatures": true, "shipping_template": true }`
[View Response](https://developers.printify.com/#) `{}`

#### Set product publish status to succeeded

Using this endpoint removes the product from the locked status on the Printify app and sets the the it's external property with the handle you provide in the request body.

POST

/v1/shops/{shop_id}/products/{product_id}/publishing_succeeded.json

**Set product publish status to succeeded** `POST /v1/shops/{shop_id}/products/{product_id}/publishing_succeeded.json`
`{ "external": { "id": "5941187eb8e7e37b3f0e62e5", "handle": "https://example.com/path/to/product" } }` [View Response](https://developers.printify.com/#) `{}`

#### Set product publish status to failed

Using this endpoint removes the product from the locked status on the Printify app.

POST

/v1/shops/{shop_id}/products/{product_id}/publishing_failed.json

**Set product publish status to failed** `POST /v1/shops/{shop_id}/products/{product_id}/publishing_failed.json` `{ "reason": "Request timed out" }`
[View Response](https://developers.printify.com/#) `{}`

#### Notify that a product has been unpublished

POST

/v1/shops/{shop_id}/products/{product_id}/unpublish.json

**Notify that a product has been unpublished** `POST /v1/shops/{shop_id}/products/{product_id}/unpublish.json` [View Response](https://developers.printify.com/#) `{}`

### Structure

Structure of Product resource with possible transitions between endpoints.

[![products structure](./PrintifyAPIComplete_files/ProductsStructure-3ee43e23.jpg)](./PrintifyAPIComplete_files/ProductsStructure-3ee43e23.jpg)

#### Image positioning

- Coordinate system ![coordinate system](./PrintifyAPIComplete_files/PrintifyCoordinates-de432f5b.jpg) Printify uses the `[0,00; 0,00] .. [1,00; 1,00]` cartesian coordinate system,
  with the placeholder center being `x=0,5`, `y=0,5`.
- Artwork scale ![scale 1,00](./PrintifyAPIComplete_files/PrintifyScaling100-e3fd98cf.jpg) ![scale 0,5](./PrintifyAPIComplete_files/PrintifyScaling50-2f37033c.jpg) The scale of the
  image (width) relative to the print area placeholder (width). Scale can be anything from `0,00` to infinity.

  - `1,00` - scale image to fill the print area fully
  - `0,5` - scale image to fill 1/2 of the the print area

- Artwork angle - 360° angle

Rule of thumb: if you use artwork with width equal to print area placeholder width, set scale to `1,00` and position it at `x=0,5` `y=0,5` - your design will be horizontally and
vertically aligned and fill all the print area fully.

### Creating Products

Flow of transitions between resources for making the product - with two possible paths of coming from Blueprint or Print Provider.

[![creating product by blueprint](./PrintifyAPIComplete_files/CreatingProductByBlueprint-dca33213.jpg)](./PrintifyAPIComplete_files/CreatingProductByBlueprint-dca33213.jpg)
[![creating product by blueprint](./PrintifyAPIComplete_files/CreatingProductByPrintProvider-43daac81.jpg)](./PrintifyAPIComplete_files/CreatingProductByPrintProvider-43daac81.jpg)

### Common error cases

You may receive errors when trying to create or update a product. A common error is due failing dpi validation because the image is low quality. If this happens, you will receive a
detailed error message similar to the one shown here.

POST

/v1/shops/{shop_id}/products.json

**Common error cases** `POST /v1/shops/{shop_id}/products.json` 400 Image has low quality error example (See HTTP Status Codes below)
[View Response](https://developers.printify.com/#)
`{ "status": "error", // Exact error codes and messages are subject to change. "code": 8203, "message": "Validation failed.", "errors": { "reason": "Image has low quality", "code": 8203 } }`

PUT

/v1/shops/{shop_id}/products/{product_id}.json

**Common error cases** `PUT /v1/shops/{shop_id}/products/{product_id}.json` 400 Image has low quality error example (See HTTP Status Codes below)
[View Response](https://developers.printify.com/#)
`{ "status": "error", // Exact error codes and messages are subject to change. "code": 8203, "message": "Validation failed.", "errors": { "reason": "Image has low quality", "code": 8203 } }`

## Orders

Printify API lets your application manage orders in a Merchants shop. You can submit orders for existing products in a merchant's shop or you can create new products with every
order as in the case with merchandise created with customizable user-generated content.

Ordering existing products or creating products with orders will require different line item entries so that should be kept in mind.

On this page:

- [What you can do with the order resource](https://developers.printify.com/#what-you-can-do-with-the-order-resource)
- [Order properties](https://developers.printify.com/#order-properties)
  - [Line item properties](https://developers.printify.com/#line-item-properties)
  - [Line item metadata properties](https://developers.printify.com/#line-item-metadata-properties)
  - [Metadata properties](https://developers.printify.com/#metadata-properties)
  - [Shipment properties](https://developers.printify.com/#shipment-properties)
  - [Order submission properties](https://developers.printify.com/#order-submission-properties)
  - [Print area properties](https://developers.printify.com/#print-area-properties)
  - [Print details properties](https://developers.printify.com/#print-details-properties)
- [Endpoints](https://developers.printify.com/#orders-endpoints)
- [Structure](https://developers.printify.com/#orders-structure)
- [Making Order](https://developers.printify.com/#making-order)
- [Common error cases](https://developers.printify.com/#orders-common-error-cases)

### What you can do with the order resource

The Printify Public API lets you do the following with the Order resource:

- [GET /v1/shops/{shop_id}/orders.json](https://developers.printify.com/#retrieve-a-list-of-orders) Retrieve a list of orders
- [GET /v1/shops/{shop_id}/orders/{order_id}.json](https://developers.printify.com/#get-order-details-by-id) Get order details by id
- [POST /v1/shops/{shop_id}/orders.json](https://developers.printify.com/#submit-an-order) Submit an order
- [POST /v1/shops/{shop_id}/express.json](https://developers.printify.com/#submit-a-printify-express-order) Submit a Printify Express order
- [POST /v1/shops/{shop_id}/orders/{order_id}/send_to_production.json](https://developers.printify.com/#send-an-existing-order-to-production) Send an existing order to production
- [POST /v1/shops/{shop_id}/orders/shipping.json](https://developers.printify.com/#calculate-the-shipping-cost-of-an-order) Calculate the shipping cost of an order
- [POST /v1/shops/{shop_id}/orders/{order_id}/cancel.json](https://developers.printify.com/#cancel-an-order) Cancel an unpaid order

### Order properties

id READ-ONLY

`"id": "5a96f649b2439217d070f507"` A unique string identifier for the order. Each id is unique across the Printify system.

address_to REQUIRED READ-ONLY

`"address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "Retie", "zip": "2470", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "company": "MSN" }`
The delivery details of the order's recipient.

line_items REQUIRED READ-ONLY

`"line_items": [{ "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "pending", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" }]`
A list of all line items in the order. See [line item properties](https://developers.printify.com/#line-item-properties) for reference.

metadata READ-ONLY

`"metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }` Other data about the
order. See [metadata properties](https://developers.printify.com/#metadata-properties) for reference.

total_price READ-ONLY

`"total_price": 2200` Retail price in cents, integer value.

total_shipping READ-ONLY

`"total_shipping": 400` Shipping price in cents, integer value.

total_tax READ-ONLY

`"total_tax": 0` Tax cost in cents, integer value.

status READ-ONLY

`"status": "pending"`

Production status of the entire order in string format, it can be any of the following:

Status

Definition

`pending`

An order is created in the `pending` status. Orders should not stay in this status for a long time.

`on-hold`

The order is ready to handle user actions. Users can edit orders in this status. The order gets this status at later stages for various reasons:

- Line items are discontinued during the order processing
- Line items go out of stock during the order processing
- The order contain items with shipping restricted line items

User needs to take actions upon orders that got the status during the submission.

`sending-to-production`

Order is picked for sending to production. The status should be changed when the system receives updates from print providers.

`in-production`

Order has been received by the print providers successfully. Print providers start the fulfillment process on their side.

`canceled`

The order is canceled. No actions can be taken towards the order by the user.

`fulfilled`

All line items are fulfilled by all print providers. The last status for successful order fulfillment.

`partially-fulfilled`

At least one of the line items is fulfilled, but not all of them.

`payment-not-received`

The order could not be charged during the submission in our system. It can be retried by the merchant. The order waits for merchant actions.

`had-issues`

If an order encounters any issue during its lifecycle it will get this status. For instance, the shipping address is invalid.

shipping_method REQUIRED

`"shipping_method": 1`

Method of shipping selected for the order, "1" is for standard shipping and "2" is for express priority shipping, "3" is for
[Printify Express](https://help.printify.com/hc/en-us/sections/9116968124689-Printify-Express-Delivery) shipping and "4" is for
[Economy](https://help.printify.com/hc/en-us/sections/22109518886161-Economy-Shipping) shipping. Please note, that express order can only contain products eligible for express
delivery. Similarly, economy order can only contain products eligible for economy delivery. More about shipping methods can be read here:
[Printify's shipping options](https://help.printify.com/hc/en-us/articles/4483626155409-What-are-Printify-s-shipping-options)

⚠

Please be aware that Printify Express Delivery is using carriers that might not be supported by all sales channels (e.g. Amazon, Tik Tok).

⚠

Please be aware that only the [Product's](https://developers.printify.com/#product-properties) and the [Variant's](https://developers.printify.com/#product-variant-properties)
eligibility (`is_printify_express_eligible` flag) is taken into account. Eligible but disabled products (`is_printify_express_enabled` flag) can still be ordered with
[Printify Express Delivery](https://help.printify.com/hc/en-us/sections/9116968124689-Printify-Express-Delivery).

⚠

Please be aware that shipping method 4 (`economy`) will not be usable when creating a product with an order. Therefore, for this shipping method the product must already exist
before placing an order on it.

Property value should be decoded based on the following table:

Code

Old version

Transitional version \[active\]

Final version

1

standard

standard

standard

2

express

express priority

priority

3

printify_express

express

4

economy

economy

economy

The **printify_express** is a new shipping option that will later in the future change its name to the **express**. Current **express** option will be renamed to the **priority**
name.

is_printify_express READ-ONLY

`"is_printify_express": true`

Boolean value that indicates if the order is using [Printify Express](https://help.printify.com/hc/en-us/sections/9116968124689-Printify-Express-Delivery) shipping.

is_economy_shipping READ-ONLY

`"is_economy_shipping": true`

Boolean value that indicates if the order is using [Economy](https://help.printify.com/hc/en-us/sections/22109518886161-Economy-Shipping) shipping.

shipments READ-ONLY

`"shipments": [{ "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" }]`
Tracking details of the order after fulfillment. See [shipment properties](https://developers.printify.com/#shipment-properties) for reference.

created_at READ-ONLY

`"created_at": "2017-04-18 13:24:28+00:00"` The date and time the order was created. It is stored in ISO date format.

sent_to_production_at READ-ONLY

`"sent_to_production_at": "2017-04-18 13:24:28+00:00"` The date and time the order was sent to production. It is stored in ISO date format.

fulfilled_at READ-ONLY

`"fulfilled_at": "2017-04-18 13:24:28+00:00"` The date and time the order was fulfilled. It is stored in ISO date format.

printify_connect READ-ONLY

`"printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }` Printify Connect data containing link to the order in the Printify
Connect page and the unique hash for the order. More about Printify Connect can be read in our
[Help Center](https://help.printify.com/hc/en-us/articles/7810118238097-What-is-Printify-Connect-) or [Blog](https://printify.com/blog/introducing-printify-connect/).

### Line item properties

product_id READ-ONLY

`"product_id": "5b05842f3921c9547531758d"` A unique string identifier for the product. Each id is unique across the Printify system.

variant_id REQUIRED READ-ONLY

`"variant_id": 17887` A unique int identifier for the product variant from the blueprint. Each id is unique across the Printify system.

quantity REQUIRED

`"quantity": 1` Describes the number of said product ordered as an integer.

print_provider_id REQUIRED READ-ONLY

`"print_provider_id": 5` A unique int identifier for the print provider. Each id is unique across the Printify system.

cost READ-ONLY

`"cost": 1050` Product variant's fulfillment cost in cents, integer value.

shipping_cost READ-ONLY

`"shipping_cost": 400` Product variant's shipment cost in cents, integer value.

status READ-ONLY

`"status": "in-production"`

Specific line item fulfillment status:

Status

Definition

`on-hold`

The item waits for user actions. Items get this status when:

- The order is created.
- The order fails at one of the checks in the submission process.
- The order fails with payments.

`in-production`

Print provider received the item for production.

`sending-to-production`

Says that the order is picked for sending to production. The status is changed once the system receives updates from print providers.

`has-issues`

Line item encountered an issue during its lifecycle.

`fulfilled`

The item is fulfilled by the print provider.

`canceled`

The item is canceled.

metadata READ-ONLY

`"metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }` Other details about the
specific product variant. See [line item metadata properties](https://developers.printify.com/#line-item-metadata-properties) for reference.

sent_to_production_at READ-ONLY

`"sent_to_production_at": "2017-04-18 13:24:28+00:00"` The date and time the product variant was sent to production. It is stored in ISO date format.

fulfilled_at READ-ONLY

`"fulfilled_at": "2017-04-18 13:24:28+00:00"` The date and time the product variant was fulfilled. It is stored in ISO date format.

#### Line item metadata properties

title READ-ONLY

`"title": "Product's title"` The name of the product.

price READ-ONLY

`"price": 1000` Retail price in cents, integer value.

variant_label READ-ONLY

`"variant_label": "Golden indigocoin"` Name of the product variant.

sku READ-ONLY

`"sku": "168699843"` A unique string identifier for the product variant.

country READ-ONLY

`"country": "United States"` Location of print provider handling fulfillment.

### Metadata properties

order_type READ-ONLY

`"order_type": "external"` Describes the order type, can be external, manual, or sample.

shop_order_id READ-ONLY

`"shop_order_id": 1370762297` A unique integer identifier for the order in the external sales channel.

shop_order_label READ-ONLY

`"shop_order_id": "1370762297"` A unique string identifier for the order in the external sales channel.

shop_fulfilled_at READ-ONLY

`"shop_fulfilled_at": "2017-04-18 13:24:28+00:00"` The date and time the order was fulfilled. It is stored in ISO date format.

### Shipment properties

carrier READ-ONLY

`"carrier": "usps"` Name of the shipping courier used to deliver the order to its recipient.

number READ-ONLY

`"number": "123"` A unique string tracking number from the shipping courier used to track the status of the shipment.

url READ-ONLY

`"url": "http://example.com/94001116990045395649372"` A unique string tracking link from the shipping courier used to track the status of the shipment.

delivered_at READ-ONLY

`"delivered_at": "2017-04-18 13:24:28+00:00"` The date and time the order was delivered. It is stored in ISO date format.

### Order submission properties

external_id REQUIRED

`"external_id": "2750e210-39bb-11e9-a503-452618153e4a"` A unique string identifier from the sales channel specifying the order name or id.

label OPTIONAL

`"label": "000012"` Optional value to specify order label instead of using "external_id"

line_items REQUIRED

`"line_items": [{ "product_id": "5bfd0b66a342bcc9b5563216", "variant_id": 17887, "quantity": 1 }]` Required for ordering existing products. Provide the product_id (Printify Product
ID), variant_id (selected variant, e.g. 'White / XXL') and desired item quantity. If creating a product from the order is required, then additional attributes will need to be
provided, specifically the blueprint_id and print_areas.
`"line_items": [{ "print_provider_id": 5, "blueprint_id": 9, "variant_id": 17887, "print_areas": { "front": "https://images.example.com/image.png" }, "quantity": 1 }]` See
[product properties](https://developers.printify.com/#product-properties) and [variant properties](https://developers.printify.com/#product-variant-properties) for reference. Also,
see [print area properties](https://developers.printify.com/#print-area-properties) for reference on print_areas for product creation during order submission. It is also possible
to order existing products by providing the product variant's SKU alone. `"line_items": [{ "sku": "MY-SKU", "quantity": 1 }]` See
[variant properties](https://developers.printify.com/#product-variant-properties) for reference.

shipping_method REQUIRED

`"shipping_method": 1` Required to specify what method of shipping is desired, "1" means standard shipping, "2" means priority shipping, "3" means printify express shipping and "4"
means economy shipping. It is stored as an integer.

send_shipping_notification BOOLEAN

`"send_shipping_notification": false` A boolean for choosing whether or not to receive email notifications after an order is shipped.

address_to REQUIRED

`"address_to": { "first_name": "John", "last_name": "Smith", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "region": "", "address1": "ExampleBaan 121", "address2": "45", "city": "Retie", "zip": "2470" }`
The delivery details of the order's recipient.

### Print area properties

placeholder position and image url REQUIRED

`"print_areas": { "front": "https://images.example.com/image.png", "back": "https://images.example.com/image.png" }` Required for creating products during order submission, See
[placeholder properties](https://developers.printify.com/#placeholder-properties) for reference. Instead of specifing the url, it is also possible to provide an array with image
objects that have additional keys for the advanced positioning:
`"print_areas": { "front": [ { "src": "https://images.example.com/image.png", "scale": 0.15, "x": 0.80, "y": 0.34, "angle": 215 }, { "src": "https://images.example.com/image2.png", "scale": 1, "x": 0.5, "y": 0.5, "angle": 0 } ], "back": [ { "src": "https://images.example.com/image3.png", "scale": 1, "x": 0.5, "y": 0.5, "angle": 0 } ] }`

### Print details properties

Special print options OPTIONAL

`"print_details": { "print_on_side": "mirror" }` Used to store properties for special cases like printing on canvas sides or clock separators, See
[print details properties](https://developers.printify.com/#print-details-properties) for reference.

### Endpoints

#### Retrieve a list of orders

GET

/v1/shops/{shop_id}/orders.json

limit OPTIONAL

Results per page (default: 10, maximum: 10)

page OPTIONAL

Paginate through list of results

status OPTIONAL

Filter results by order status

sku OPTIONAL

Filter results by product SKU - response will contain only those orders that have at least one product with passed SKU

**Retrieve all orders** `GET /v1/shops/{shop_id}/orders.json` [View Response](https://developers.printify.com/#)
`{ "current_page": 1, "data": [ { "id": "5a96f649b2439217d070f507", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "Retie", "zip": "2470", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00", "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }`

**Retrieve limited results** `GET /v1/shops/{shop_id}/orders.json?limit=1` [View Response](https://developers.printify.com/#)
`{ "current_page": 1, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "Jane", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "Retie", "zip": "2470", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }`

**Retrieve specific page from results.** `GET /v1/shops/{shop_id}/orders.json?page=2` [View Response](https://developers.printify.com/#)
`{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "Jack", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }`

**Filter results by order status.** `GET /v1/shops/{shop_id}/orders.json?status=fulfilled` [View Response](https://developers.printify.com/#)
`{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }`

**Filter results by product SKU.** `GET /v1/shops/{shop_id}/orders.json?sku=168699843` [View Response](https://developers.printify.com/#)
`{ "current_page": 2, "data": [ { "id": "5a6e03bd2f7d8055768923c8", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "A city", "zip": "4321", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "SW", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, } ] }`

#### Get order details by ID

GET

/v1/shops/{shop_id}/orders/{order_id}.json

**Get order details by ID** `GET /v1/shops/{shop_id}/orders/{order_id}.json` [View Response](https://developers.printify.com/#)
`{ "id": "5a96f649b2439217d070f507", "address_to": { "first_name": "John", "last_name": "Smith", "region": "", "address1": "ExampleBaan 121", "city": "Retie", "zip": "2470", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "company": "MSN" }, "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "fulfilled", "metadata": { "title": "18K gold plated Necklace", "price": 2200, "variant_label": "Golden indigocoin", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" } ], "metadata": { "order_type": "external", "shop_order_id": 1370762297, "shop_order_label": "1370762297", "shop_fulfilled_at": "2017-04-18 13:24:28+00:00" }, "total_price": 2200, "total_shipping": 400, "total_tax": 0, "status": "fulfilled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "shipments": [ { "carrier": "usps", "number": "94001116990045395649372", "url": "http://example.com/94001116990045395649372", "delivered_at": "2017-04-18 13:24:28+00:00" } ], "created_at": "2017-04-18 13:24:28+00:00", "sent_to_production_at": "2017-04-18 13:24:28+00:00", "fulfilled_at": "2017-04-18 13:24:28+00:00" "printify_connect": { "url": "https://example.com/printify_connect_hash", "id": "printify_connect_hash" }, }`

#### Submit an order

POST

/v1/shops/{shop_id}/orders.json

**Order an existing product** `POST /v1/shops/{shop_id}/orders.json`
`{ "external_id": "2750e210-39bb-11e9-a503-452618153e4a", "label": "00012", "line_items": [ { "product_id": "5bfd0b66a342bcc9b5563216", "variant_id": 17887, "quantity": 1 } ], "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "send_shipping_notification": false, "address_to": { "first_name": "John", "last_name": "Smith", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "region": "", "address1": "ExampleBaan 121", "address2": "45", "city": "Retie", "zip": "2470" } }`
[View Response](https://developers.printify.com/#) `{ "id": "5a96f649b2439217d070f507" }`

**Create a product with an order (simple image positioning)** `POST /v1/shops/{shop_id}/orders.json`
`{ "external_id": "2750e210-39bb-11e9-a503-452618153e5a", "label": "00012", "line_items": [ { "print_provider_id": 5, "blueprint_id": 9, "variant_id": 17887, "print_areas": { "front": "https://images.example.com/image.png" }, "quantity": 1 } ], "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "send_shipping_notification": false, "address_to": { "first_name": "John", "last_name": "Smith", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "region": "", "address1": "ExampleBaan 121", "address2": "45", "city": "Retie", "zip": "2470" } }`
[View Response](https://developers.printify.com/#) `{ "id": "5a96f649b2439217d070f508" }`

**Create a product with an order (advanced image positioning)** `POST /v1/shops/{shop_id}/orders.json`
`{ "external_id": "2750e210-39bb-11e9-a503-452618153e5a", "label": "00012", "line_items": [ { "print_provider_id": 5, "blueprint_id": 9, "variant_id": 17887, "print_areas": { "front": [ { "src": "https://images.example.com/image.png", "scale": 0.15, "x": 0.80, "y": 0.34, "angle": 0.34 }, { "src": "https://images.example.com/image.png", "scale": 1, "x": 0.5, "y": 0.5, "angle": 1 } ] }, "quantity": 1 } ], "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "send_shipping_notification": false, "address_to": { "first_name": "John", "last_name": "Smith", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "region": "", "address1": "ExampleBaan 121", "address2": "45", "city": "Retie", "zip": "2470" } }`
[View Response](https://developers.printify.com/#) `{ "id": "5a96f649b2439217d070f508" }`

**Create a product with an order (with specifying print details for printing on sides)** `POST /v1/shops/{shop_id}/orders.json`
`{ "external_id": "2750e210-39bb-11e9-a503-452618153e5a", "label": "00012", "line_items": [ { "print_provider_id": 5, "blueprint_id": 9, "variant_id": 17887, "print_areas": { "front": "https://images.example.com/image.png" }, "print_details": { "print_on_side": "mirror" }, "quantity": 1 } ], "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "send_shipping_notification": false, "address_to": { "first_name": "John", "last_name": "Smith", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "region": "", "address1": "ExampleBaan 121", "address2": "45", "city": "Retie", "zip": "2470" } }`
[View Response](https://developers.printify.com/#) `{ "id": "5a96f649b2439217d070f508" }`

**Order an existing product using only an SKU** `POST /v1/shops/{shop_id}/orders.json`
`"external_id": "2750e210-39bb-11e9-a503-452618153e6a", "label": "00012", "line_items": [ { "sku": "MY-SKU", "quantity": 1 } ], "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "send_shipping_notification": false, "address_to": { "first_name": "John", "last_name": "Smith", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "region": "", "address1": "ExampleBaan 121", "address2": "45", "city": "Retie", "zip": "2470" } }`
[View Response](https://developers.printify.com/#) `{ "id": "5a96f649b2439217d070f509" }`

#### Submit a Printify Express order

POST

/v1/shops/{shop_id}/orders/express.json

**Order an existing product with Printify Express Delivery**

This API method creates one or two separate orders using the following logic:

1. If **none** of the line items are Printify Express eligible: one order with `"fulfilment_type": "ordinary"`
2. If **all** of the line items are Printify Express eligible: one order with `"fulfilment_type": "express"`
3. If at least one line item is Printify Express eligible, and at least one isn't: two separate orders, one `express`, and one `ordinary`

Read more about Printify Express Delivery in [a dedicated Help center section](https://help.printify.com/hc/en-us/sections/9116968124689-Printify-Express-Delivery).

⚠

`address_to.email` and `address_to.phone` fields are required for Printify Express eligibility.

⚠

The endpoint works only with already existing products.

Please be aware that Printify Express Delivery is using carriers that might not be supported by all sales channels (e.g. Amazon, Tik Tok).

⚠

Please be aware that only the [Product's](https://developers.printify.com/#product-properties) and the [Variant's](https://developers.printify.com/#product-variant-properties)
eligibility (`is_printify_express_eligible` flag) is taken into account. Eligible but disabled products (`is_printify_express_enabled` flag) can still be ordered with
[Printify Express Delivery](https://help.printify.com/hc/en-us/sections/9116968124689-Printify-Express-Delivery).

`POST /v1/shops/{shop_id}/orders/express.json`
`{ "external_id": "2750e210-39bb-11e9-a503-452618153e4a", "label": "00012", "line_items": [ { "product_id": "5b05842f3921c9547531758d", "variant_id": 12359, "quantity": 1 }, { "product_id": "5b05842f3921c34764fa478bc", "variant_id": 17887, "quantity": 1 } ], "shipping_method": 3, "send_shipping_notification": false, "address_to": { "first_name": "John", "last_name": "Smith", "email": "example@example.com", "phone": "0574 69 21 90", "country": "BE", "region": "", "address1": "ExampleBaan 121", "address2": "45", "city": "Retie", "zip": "2470" } }`
[View Response](https://developers.printify.com/#)
`{ "data": [ { "type": "order", "id": "5a96f649b2439217d070f508", "attributes": { "fulfilment_type": "express", "line_items": [ { "product_id": "5b05842f3921c9547531758d", "quantity": 1, "variant_id": 12359, "print_provider_id": 5, "cost": 2200, "shipping_cost": 799, "status": "pending", "metadata": { "title": "T-shirt", "price": 2200, "variant_label": "Blue / S", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2023-10-18 13:24:28+00:00", "fulfilled_at": null } ] } }, { "type": "order", "id": "5a96f649b2439597d020a9b4", "attributes": { "fulfilment_type": "ordinary", "line_items": [ { "product_id": "5b05842f3921c34764fa478bc", "quantity": 1, "variant_id": 17887, "print_provider_id": 5, "cost": 1050, "shipping_cost": 400, "status": "pending", "metadata": { "title": "Mug 11oz", "price": 1050, "variant_label": "11oz", "sku": "168699843", "country": "United States" }, "sent_to_production_at": "2023-10-18 13:24:28+00:00", "fulfilled_at": null } ] } } ] }`

#### Send an existing order to production

POST

/v1/shops/{shop_id}/orders/{order_id}/send_to_production.json

**Send an existing order to production** `POST /v1/shops/{shop_id}/orders/{order_id}/send_to_production.json` [View Response](https://developers.printify.com/#)
`{ "id": "5d65c6ac01b403000a5d24d3", "address_to": { "first_name": "John ", "last_name": "Doe", "phone": "0000000", "country": "United States", "region": "AL", "address1": "Happy St 1", "city": "Sun City", "zip": "00000" }, "line_items": [ { "quantity": 1, "product_id": "5d6549359105f6000a0c17f7", "variant_id": 43424, "print_provider_id": 16, "shipping_cost": 400, "cost": 1149, "status": "on-hold", "metadata": { "title": "POD Water Bottle 2", "price": 1915, "variant_label": "14oz", "sku": "901426000", "country": "United States" } } ], "metadata": { "order_type": "manual", "shop_fulfilled_at": "1970-01-01 00:00:00+00:00" }, "total_price": 1149, "total_shipping": 400, "total_tax": 0, "status": "on-hold", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "created_at": "2019-08-28 00:11:24+00:00" }`

#### Calculate the shipping cost of an order

POST

/v1/shops/{shop_id}/orders/shipping.json

**Calculate the shipping cost of an order** `POST /v1/shops/{shop_id}/orders/shipping.json`
`{ "line_items": [{ "product_id": "5bfd0b66a342bcc9b5563216", "variant_id": 17887, "quantity": 1 },{ "print_provider_id": 5, "blueprint_id": 9, "variant_id": 17887, "quantity": 1 },{ "sku": "MY-SKU", "quantity": 1 }], "address_to": { "first_name": "John", "last_name": "Smith", "email": "example@msn.com", "phone": "0574 69 21 90", "country": "BE", "region": "", "address1": "ExampleBaan 121", "address2": "45", "city": "Retie", "zip": "2470" } }`

Response

`{ "standard": 1000, "express": 5000, "priority": 5000, "printify_express": 799, "economy": 399 }`

Response contains the shipping options that are defined in the following table:

Code

Old version

Transitional version \[active\]

Final version

1

standard

standard

standard

2

express

express priority

priority

3

printify_express

express

4

economy

economy

economy

The **printify_express** is a new shipping option that will later in the future change its name to the **express**. Current **express** option will be renamed to the **priority**
name.

#### Cancel an order

This request will only be accepted if the order to be canceled has the status "on-hold" or "payment-not-received".

POST

/v1/shops/{shop_id}/orders/{order_id}/cancel.json

**Cancel an order** `POST /v1/shops/{shop_id}/orders/{order_id}/cancel.json` [View Response](https://developers.printify.com/#)
`{ "id": "5dee261dc400914833007902", "address_to": { "first_name": "John", "last_name": "Smith", "email": "example@msn.com", "country": "United States", "region": "CA", "address1": "31677 Virginia Way", "city": "Laguna Beach", "zip": "92653" }, "line_items": [ { "quantity": 1, "product_id": "5de6593ebff03b5313567d22", "variant_id": 34509, "print_provider_id": 6, "shipping_cost": 450, "cost": 0, "status": "canceled", "metadata": { "title": "Men's Organic Tee - Product 1", "variant_label": "S / Red", "sku": "3640", "country": "United Kingdom" } } ], "metadata": { "order_type": "api", "shop_order_id": "2750e210-39bb-11e9-a503-452618153e4a", "shop_order_label": "2750e210-39bb-11e9-a503-452618153e4a", "shop_fulfilled_at": "1970-01-01 00:00:00+00:00" }, "total_price": 0, "total_shipping": 0, "total_tax": 0, "status": "canceled", "shipping_method": 1, "is_printify_express": false, "is_economy_shipping": false, "created_at": "2019-12-09 10:46:53+00:00" }`

### Structure

Structure of Orders resource with possible transitions between endpoints.

[![orders structure](./PrintifyAPIComplete_files/OrdersStructure-083cde66.jpg)](./PrintifyAPIComplete_files/OrdersStructure-083cde66.jpg)

### Making Order

Flow of transitions between resources for making an order.

[![making order](./PrintifyAPIComplete_files/MakingOrder-ac8e4c60.jpg)](./PrintifyAPIComplete_files/MakingOrder-ac8e4c60.jpg)

### Common error cases

POST

/v1/shops/{shop_id}/orders.json

**Common error cases** `POST /v1/shops/{shop_id}/orders.json` 400 Invalid address validation error example (See HTTP Status Codes below)
[View Response](https://developers.printify.com/#)
`{ "status": "error", // Exact error codes and messages are subject to change. "code": 8103, "message": "Validation failed.", "errors": { "reason": "{\"zip\":[\"The zip field is required.\"]}", "code": 8103 } }`

## Uploads

Artwork added to a Printify Product can be saved in the Media library to be reused on additional products.

You can use this API to directly add files to the media library, and later use image IDs when creating or modifying products.

On this page:

- [What you can do with the uploads resource](https://developers.printify.com/#what-you-can-do-with-the-uploads-resource)
- [Image properties](https://developers.printify.com/#uploads-image-properties)
- [Endpoints](https://developers.printify.com/#uploads-endpoints)
- [Structure](https://developers.printify.com/#uploads-structure)
- [Common Error cases](https://developers.printify.com/#uploads-common-error-cases)

### What you can do with the uploads resource

The Printify Public API lets you do the following with the Uploads resource:

- [GET /v1/uploads.json](https://developers.printify.com/#retrieve-a-list-of-uploaded-images) Retrieve a list of uploaded images
- [GET /v1/uploads/{image_id}.json](https://developers.printify.com/#retrieve-an-uploaded-image-by-id) Retrieve an uploaded image by id
- [POST /v1/uploads/images.json](https://developers.printify.com/#upload-an-image) Upload an image
- [POST /v1/uploads/{image_id}/archive.json](https://developers.printify.com/#archive-an-uploaded-image) Archive an uploaded image

### Image properties

id READ-ONLY

`"id": "5e16d66791287a0006e522b2"` A unique string identifier for the image. Each id is unique across the Printify system.

file_name READ-ONLY

`"file_name": "Image's file name"` The file name of the image.

height READ-ONLY

`"height": 5979` The height of the image in pixels.

width READ-ONLY

`"width": 17045` The width of the image in pixels.

size READ-ONLY

`"size": 1138575` The file size of the image in bytes.

mime_type READ-ONLY

`"mime_type": "image/png"` The media type of the image file.

preview_url READ-ONLY

`"preview_url": "https://example.com/artwork"` A url to preview the image.

upload_time READ-ONLY

`"upload_time": "2020-01-09 07:29:43"` The date and time the image was uploaded in ISO date format.

### Endpoints

#### Retrieve a list of uploaded images

GET

/v1/uploads.json

limit OPTIONAL

Results per page (default: 10, maximum: 100)

page OPTIONAL

Paginate through list of results

**Retrieve all uploaded images** `GET /v1/uploads.json` [View Response](https://developers.printify.com/#)
`{ "current_page": 1, "data": [ { "id": "5e16d66791287a0006e522b2", "file_name": "png-images-logo-1.jpg", "height": 5979, "width": 17045, "size": 1138575, "mime_type": "image/png", "preview_url": "https://example.com/image-storage/uuid1", "upload_time": "2020-01-09 07:29:43" }, { "id": "5de50bf612c348000892b366", "file_name": "png-images-logo-2.jpg", "height": 360, "width": 360, "size": 19589, "mime_type": "image/jpeg", "preview_url": "https://example.com/image-storage/uuid2", "upload_time": "2019-12-02 13:04:54" } ], "first_page_url": "/?page=1", "from": 1, "last_page": 1, "last_page_url": "/?page=1", "next_page_url": null, "path": "/", "per_page": 10, "prev_page_url": null, "to": 2, "total": 2 }`

**Retrieve specific page from results** `GET /v1/uploads.json?page=2` [View Response](https://developers.printify.com/#)
`{ "current_page": 2, "data": [ { "id": "5e16d66791287a0006e522b2", "file_name": "png-images-logo-1.jpg", "height": 5979, "width": 17045, "size": 1138575, "mime_type": "image/png", "preview_url": "https://example.com/image-storage/uuid1", "upload_time": "2020-01-09 07:29:43" }, { "id": "5de50bf612c348000892b366", "file_name": "png-images-logo-2.jpg", "height": 360, "width": 360, "size": 19589, "mime_type": "image/jpeg", "preview_url": "https://example.com/image-storage/uuid2", "upload_time": "2019-12-02 13:04:54" } ], "first_page_url": "/?page=1", "from": 1, "last_page": 2, "last_page_url": "/?page=2", "next_page_url": null, "path": "/", "per_page": 10, "prev_page_url": 1, "to": 2, "total": 2 }`

**Retrieve limited results** `GET /v1/uploads.json?limit=1` [View Response](https://developers.printify.com/#)
`{ "current_page": 1, "data": [ { "id": "5e16d66791287a0006e522b2", "file_name": "png-images-logo-1.jpg", "height": 5979, "width": 17045, "size": 1138575, "mime_type": "image/png", "preview_url": "https://example.com/image-storage/uuid1", "upload_time": "2020-01-09 07:29:43" } ], "first_page_url": "/?page=1", "from": 1, "last_page": 2, "last_page_url": "/?page=2", "next_page_url": /?page=2, "path": "/", "per_page": 1, "prev_page_url": null, "to": 2, "total": 2 }`

#### Retrieve an uploaded image by id

GET

/v1/uploads/{image_id}.json

**Retrieve an uploaded image by id** `GET /v1/uploads/{image_id}.json` [View Response](https://developers.printify.com/#)
`{ "id": "5e16d66791287a0006e522b2", "file_name": "png-images-logo-1.jpg", "height": 5979, "width": 17045, "size": 1138575, "mime_type": "image/png", "preview_url": "https://example.com/image-storage/uuid1", "upload_time": "2020-01-09 07:29:43" }`

#### Upload an image

Upload image files either via image URL or image file base64-encoded contents. The file will be stored in the Merchant's account Media Library.

⚠

We highly recommend using upload via image URL for files larger than 5MB. Upload via image URL is the future-proof solution, as we plan to drop support for base64-encoded content
uploads larger than 5MB in the future.

POST

/v1/uploads/images.json

**Upload image to a Printify account's media library** `POST /v1/uploads/images.json` Body parameter (upload image by URL)
`{ "file_name": "1x1-ff00007f.png", "url": "http://png-pixel.com/1x1-ff00007f.png" }` Body parameter (upload image by base64-encoded contents)
`{ "file_name": "image.png", "contents": "base-64-encoded-content" }` [View Response](https://developers.printify.com/#)
`{ "id": "5941187eb8e7e37b3f0e62e5", "file_name": "image.png", "height": 200, "width": 400, "size": 1021, "mime_type": "image/png", "preview_url": "https://example.com/image-storage/uuid3", "upload_time": "2020-01-09 07:29:43" }`

#### Archive an uploaded image

POST

/v1/uploads/{image_id}/archive.json

**Archive an uploaded image** `GET /v1/uploads/{image_id}/archive.json` [View Response](https://developers.printify.com/#) `{}`

### Structure

Structure of Image Uploads resource with possible transitions between endpoints.

[![uploads structure](./PrintifyAPIComplete_files/UploadsStructure-9fc6242b.jpg)](./PrintifyAPIComplete_files/UploadsStructure-9fc6242b.jpg)

### Common Error cases

When uploading images to the library, you may encounter errors. These are commonly due to download errors, incorrect file formats, or your image being too large. If these are the
case, you will receive messages similar to these outlined here.

POST

/v1/uploads/images.json

**Common error cases** `POST /v1/uploads/images.json` 400 Image download error example (See HTTP Status Codes below) [View Response](https://developers.printify.com/#)
`{ "status": "error", // Exact error codes and messages are subject to change. "code": 10300, "message": "Operation failed.", "errors": { "reason": "cURL error 6: Could not resolve host: png1-pixel.com", "code": 10300 } }`

400 Image too large error example (See HTTP Status Codes below) [View Response](https://developers.printify.com/#)
`{ "status": "error", // Exact error codes and messages are subject to change. "code": 8201, "message": "Validation failed.", "errors": { "reason": "Failed to upload image. Cause: {\"code\":\"error.file.size.limit.exceeded\"}", "code": 8201 } }`

400 Unsupported file format error example (See HTTP Status Codes below) [View Response](https://developers.printify.com/#)
`{ "status": "error", // Exact error codes and messages are subject to change. "code": 8201, "message": "Validation failed.", "errors": { "reason": "Failed to upload image. Cause: {\"code\":\"error.file.wrong.format\"}", "code": 8201 } }`

## Events

Events are generated by some resources when certain actions are completed, such as the creation of a product, the fulfillment of an order. By requesting events, your app can know
when certain actions have occurred in the shop.

On this page:

- [Shop events](https://developers.printify.com/#shop-events)
- [Product events](https://developers.printify.com/#product-events)
- [Order events](https://developers.printify.com/#order-events)
- [Event properties](https://developers.printify.com/#event-properties)
- [Resource properties](https://developers.printify.com/#resource-properties)
- [Resource data examples](https://developers.printify.com/#resource-data-examples)
  - [Shop resource data examples](https://developers.printify.com/#shop-resource-data-examples)
  - [Product resource data examples](https://developers.printify.com/#product-resource-data-examples)
  - [Order resource data examples](https://developers.printify.com/#order-resource-data-examples)
- [Payload examples](https://developers.printify.com/#payload-examples)

### Shop events

Event

Description

`shop:disconnected`

The shop was disconnected.

### Product events

Event

Description

`product:deleted`

The product was deleted.

`product:publish:started`

The product publishing was started.

### Order events

Event

Description

`order:created`

The order was created.

`order:updated`

The order's status was updated.

`order:sent-to-production`

The order was sent to production.

`order:shipment:created`

Some/all items have been fulfilled.

`order:shipment:delivered`

Some/all items have been delivered.

### Event properties

id

`"id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5"` A unique string identifier for the event. Each id is unique across the Printify system.

type

`"type": "order:created"` The type of event that occurred. Different resources generate different types of event.

created_at

`"created_at": "2017-04-18 13:24:28+00:00"` The date and time when the event was triggered.

resource

`"resource": { "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "product", "data": { "shop_id": 1234567, "reason": "Request timed out" } }` Information about the resource that
triggered the event. Check [Resource properties](https://developers.printify.com/#resource-properties) for reference.

### Resource properties

id

`"id": "5cb87a8cd490a2ccb256cec4"` A unique string identifier for the resource. Each id is unique across the Printify system.

type

`"type": "product"` Resource type, currently valid types are `shop`, `product` and `order`.

data

`"data": { "shop_id": 1234567, "reason": "Request timed out" }` For more information see [Resource data examples](https://developers.printify.com/#resource-data-examples).

### Resource data examples

### Shop events

`shop:disconnected`

No resource data is sent.

### Product events

`product:deleted`

No resource data is sent.

`product:publish:started`

The values for the action property determine the resource data payload, the values can be "create", "update", or "delete". For "create" and "update" actions, the payload is as
follows:
`"data": { "shop_id": 1234567, "publish_details": { "title": true, "description": true, "images": true, "variants": true, "tags": true, "key_features": true, "shipping_template": true }, "action": "create", }`
For the "delete" action, the payload is as follows: `"data": { "action": "delete" }` For reference on what other properties mean, check
[Publishing properties](https://developers.printify.com/#publishing-properties).

### Order events

`order:created`

No resource data is sent with this event.

`order:updated`

`"data": { "shop_id": 815256, "status": "in-production" }` For information on what production statuses can be expected, check
[Order properties](https://developers.printify.com/#order-properties) for reference.

`order:shipment:created`

`"data": { "shop_id": 815256, "shipped_at": "2017-04-18 13:24:28+00:00", "carrier": { "code": "USPS", "tracking_number": "9400110200828911663274" }, "skus": [ "6220" ] }`

`order:shipment:delivered`

`"data": { "shop_id": 815256, "delivered_at": "2017-04-18 13:24:28+00:00", "carrier": { "code": "USPS", "tracking_number": "9400110200828911663274" }, "skus": [ "6220" ] }`

`order:sent-to-production`

No resource data is sent with this event.

### Payload examples

`shop:disconnected`

`{ "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "shop:disconnected", "created_at": "2022-05-17 15:00:00+00:00", "resource": { "id": 815256, "type": "shop", "data": null } }`

`product:deleted`

`{ "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "product:deleted", "created_at": "2022-05-17 15:00:00+00:00", "resource": { "id": "5cb87a8cd490a2ccb256cec4", "type": "product", "data": { "shop_id": 815256 } } }`

`product:publish:started`

`{ "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "product:publish:started", "created_at": "2022-05-17 15:00:00+00:00", "resource": { "id": "5cb87a8cd490a2ccb256cec4", "type": "product", "data": { "shop_id": 815256, "publish_details": { "title": true, "variants": false, "description": true, "tags": true, "images": false, "key_features": false, "shipping_template": true }, "action": "create", "out_of_stock_publishing": 0 } } }`

`order:created`

`{ "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "order:created", "created_at": "2022-05-17 15:00:00+00:00", "resource": { "id": "5a96f649b2439217d070f507", "type": "order", "data": { "shop_id": 815256 } } }`

`order:updated`

`{ "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "order:updated", "created_at": "2022-05-17 15:00:00+00:00", "resource": { "id": "5a96f649b2439217d070f507", "type": "order", "data": { "shop_id": 815256, "status": "in-production" } } }`

`order:shipment:created`

`{ "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "order:shipment:created", "created_at": "2022-05-17 15:00:00+00:00", "resource": { "id": "5a96f649b2439217d070f507", "type": "order", "data": { "shop_id": 815256, "shipped_at": "2022-05-17 15:00:00+00:00", "carrier": { "code": "USPS", "tracking_number": "9400110200828911663274", "tracking_url": "https://example.com/track/9400110200828911663274" }, "skus": [ "6202" ] } } }`

`order:shipment:delivered`

`{ "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "order:shipment:delivered", "created_at": "2022-05-17 15:00:00+00:00", "resource": { "id": "5a96f649b2439217d070f507", "type": "order", "data": { "shop_id": 815256, "delivered_at": "2022-05-17 15:00:00+00:00", "carrier": { "code": "USPS", "tracking_number": "9400110200828911663274", "tracking_url": "https://example.com/track/9400110200828911663274" }, "skus": [ "6202" ] } } }`

`order:sent-to-production`

`{ "id": "653b6be8-2ff7-4ab5-a7a6-6889a8b3bbf5", "type": "order:sent-to-production", "created_at": "2022-05-17 15:00:00+00:00", "resource": { "id": "5a96f649b2439217d070f507", "type": "order", "data": { "shop_id": 815256 } } }`

## Webhooks

You can use webhook subscriptions to receive notifications about particular events in a shop. After you've subscribed to a webhook, you can let your app execute code immediately
after specific events occur in shops that have your app connected, instead of having to make API calls periodically to check their status. For example, you can rely on webhooks to
trigger an action in your app when a merchant creates a new product in a store. By using webhooks subscriptions you can make fewer API calls overall, which makes sure that your
apps are more efficient and update quickly. For more information what actually gets sent by a webhook check [Event properties](https://developers.printify.com/#event-properties)
and [Resource data examples](https://developers.printify.com/#resource-data-examples).

On this page:

- [Webhook rules to follow](https://developers.printify.com/#webhook-rules-to-follow)
- [What you can do with the webhooks resource](https://developers.printify.com/#what-you-can-do-with-the-webhooks-resource)
- [Webhook properties](https://developers.printify.com/#webhook-properties)
- [Webhook endpoints](https://developers.printify.com/#webhook-endpoints)
- [Securing your Webhooks](https://developers.printify.com/#securing-your-webhooks)

### Webhook rules to follow

To ensure that your webhook works correctly, follow these good practices:

- Printify will send a POST request to the URL you specify when the event occurs.
- This POST request will contain a JSON payload with information about the event.
- The expected response is a **200 OK**.
- In case of a 4xx or 5xx response, Printify will retry the request up to 3 times, after which the webhook will be **blocked** for 1 hour.
- If the webhook is blocked, no new requests will be sent to the URL until the block is lifted.

### What you can do with the Webhooks resource

The Printify Public API lets you do the following with the Webhook resource:

- [GET /v1/shops/{shop_id}/webhooks.json](https://developers.printify.com/#retrieve-a-list-of-webhooks) Retrieve a list of webhooks
- [POST /v1/shops/{shop_id}/webhooks.json](https://developers.printify.com/#create-a-new-webhook) Create a new webhook
- [PUT /v1/shops/{shop_id}/webhooks/{webhook_id}.json](https://developers.printify.com/#modify-a-webhook) Modify a webhook
- [DELETE /v1/shops/{shop_id}/webhooks/{webhook_id}.json](https://developers.printify.com/#delete-a-webhook) Delete a webhook

### Webhook properties

id READ-ONLY

`"id": "5cb87a8cd490a2ccb256cec4"` A unique string identifier for the webhook. Each id is unique across the Printify system.

topic REQUIRED READ-ONLY

`"topic": "product:publish:started"` Event that triggers the webhook. See [Events](https://developers.printify.com/#events) for reference. Can't be changed.

url REQUIRED

`"url": "https://example.com/webhooks"` URI where the webhook subscription should send the POST request when the event occurs.

shop_id READ-ONLY

`"shop_id": 1` Id of merchant's store.

secret OPTIONAL

`"secret": "optional-secret-value"` Secret that will be used to sign requests for webhook. See [Securing your webhooks](https://developers.printify.com/#securing-your-webhooks) for
more information.

### Webhook endpoints

### Retrieve a list of webhooks

GET

/v1/shops/{shop_id}/webhooks.json

**Retrieve a list of webhooks** `GET /v1/shops/{shop_id}/webhooks.json` [View Response](https://developers.printify.com/#)
`[ { "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }, { "topic": "order:updated", "url": "https://example.com/webhooks/order/updated", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec5" } ]`

### Create a new webhook

POST

/v1/shops/{shop_id}/webhooks.json

**Create a new webhook** `POST /v1/shops/{shop_id}/webhooks.json` `{ "topic": "order:created", "url": "https://example.com/webhooks/order/created" }`
[View Response](https://developers.printify.com/#)
`{ "topic": "order:created", "url": "https://example.com/webhooks/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }`

### Modify a webhook

PUT

/v1/shops/{shop_id}/webhooks/{webhook_id}.json

**Modify a webhook** `PUT /v1/shops/{shop_id}/webhooks/{webhook_id}.json` `{ "url": "https://example.com/callback/order/created" }`
[View Response](https://developers.printify.com/#)
`{ "topic": "order:created", "url": "https://example.com/callback/order/created", "shop_id": "1", "id": "5cb87a8cd490a2ccb256cec4" }`

### Delete a webhook

DELETE

/v1/shops/{shop_id}/webhooks/{webhook_id}.json

**Delete a webhook** `DELETE /v1/shops/{shop_id}/webhooks/{webhook_id}.json` [View Response](https://developers.printify.com/#) `{ "id": "5cb87a8cd490a2ccb256cec4" }`

### Securing your Webhooks

Once your server is configured to receive payloads, it'll listen for any payload sent to the endpoint you configured. For security reasons, you probably want to limit requests to
those coming from Printify.

There are a few ways to go about this - for example, you could opt to whitelist requests from Printify's IP address - but a far easier method is to set up a secret token and
validate the information.

Summary:

- [Setting your shared secret with Printify](https://developers.printify.com/#setting-your-shared-secret-with-printify)
- [Accessing the Secret from your backend](https://developers.printify.com/#accessing-the-secret-from-your-backend)
- [Validating payloads from Printify](https://developers.printify.com/#validating-payloads-from-printify)

#### Setting your shared secret with Printify

You can generate the secret by running '`openssl rand -hex 20`'.

When your secret token is set, Printify will use it to create a hash signature with each payload body. Printify uses an HMAC hexdigest to compute the hash `sha256` signature with
your provided secret.

Secret example `7afa37fd47d7a52ea644382e04962a83c16aef62`

This payload body signature is passed along with each request in the headers as `X-Pfy-Signature`. The signature format is: `sha256={digest}`.

Signature example `x-pfy-signature: sha256=4260d30ec4ee2a17181ae5072c846d8dfcb5ceb195e24de055fd9a21d8c6648f`

#### Accessing the Secret from your backend

Next, set up a `SECRET_TOKEN` environment variable on your server that stores this token. **Never hardcode the secret into your app!**

Setting the SECRET_TOKEN environment variable example `$ export SECRET_TOKEN=your_token`

#### Validating payloads from Printify

Next, compute a request body hash using your `SECRET_TOKEN`, and ensure that the hash from Printify matches. Printify uses an HMAC hexdigest to compute the hash. **Always use
"constant time" string comparisons, which renders it safe from certain timing attacks against regular equality operators.**

Validation sample (python)
`import os import hmac def sha256hash(request): hash = hmac.new(os.environ['SECRET_TOKEN'].encode('utf-8'), request.data.encode('utf-8'), 'sha256') return 'sha256=' + hash.hexdigest() def secure_compare(a, b): return hmac.compare_digest(a, b) print('%r' % secure_compare(request.headers['x-pfy-signature'], sha256hash(request)))`

# V2 API Reference

The second version of the API is organized around the [JSON:API](https://jsonapi.org/) specification. This version of the API is designed to be more consistent and predictable, and
to provide a better foundation for future improvements. It follows JSON API standard on pagination, linking and can support the filtering if it is mentioned in the endpoint
documentation.

New features and improvements are being added to the V2 API, and we encourage you to use it for new integrations. The V1 API will continue to be supported, but new features will
only be added to the V2 API.

The V2 API is available at the following base URL: `https://api.printify.com/v2/`.

The [Economy Shipping](https://help.printify.com/hc/en-us/sections/22109518886161-Economy-Shipping) costs listing is available only in the V2 API.

## Catalog V2

Through the Catalog resource you can see all of the products, product variants, variant options and print providers available in the Printify catalog.

Products in the Printify catalog are referred to as blueprints (only after user artwork has been added, they are referred to as products).

Every blueprint in the Printify catalog has multiple Print Providers that offer that blueprint. In addition to general differences between Print Providers including location and
print technology employed, each Print Provider also offers different colors, sizes, print areas and prices.

Each Print Provider's blueprint has specific option (e.g. color, size) combinations known as variants. Variants also contain information on a products' available print areas and
sizes.

On this page:

- [What you can do with the catalog resource](https://developers.printify.com/#v2-what-you-can-do-with-the-catalog-resource)
- [Shipping properties](https://developers.printify.com/#v2-catalog-shipping-attributes)
- [Endpoints](https://developers.printify.com/#v2-catalog-endpoints)

### [](https://developers.printify.com/#v2-what-you-can-do-with-the-catalog-resource)What you can do with the catalog resource

The Printify Public API lets you do the following with the Catalog resource:

- [GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping.json](https://developers.printify.com/#v2-catalog-endpoints) Retrieve the list of
  available shipping for all variants of a blueprint from a specific print provider
- [GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/standard.json](https://developers.printify.com/#v2-catalog-endpoints) Retrieve the
  standard shipping handling time and shipping costs for all variants of a blueprint from a specific print provider.
- [GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/priority.json](https://developers.printify.com/#v2-catalog-endpoints) Retrieve the
  priority shipping handling time and shipping costs for all variants of a blueprint from a specific print provider.
- [GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/express.json](https://developers.printify.com/#v2-catalog-endpoints)Retrieve the express
  shipping handling time and shipping costs for all variants of a blueprint from a specific print provider.
- [GET /v1/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/economy.json](https://developers.printify.com/#v2-catalog-endpoints) Retrieve the economy
  shipping handling time and shipping costs for all variants of a blueprint from a specific print provider.

### [](https://developers.printify.com/#v2-catalog-shipping-propertiese)Shipping list attributes

Attribute

Description

name READ-ONLY

`"name": "standard"` The shipping type (method) name

#### Specific Shipping attributes

Attribute

Description

shippingType READ-ONLY

`"shippingType": "economy"` The shipping type (method) name

country READ-ONLY

`"country": { "code": "US" }` The code of the country the shipping costs apply to. Can be also `REST_OF_THE_WORLD` which means it applies to all the countries that don't have the
costs specified.

variantId READ-ONLY

`"variantId": 1` Variant ID for which this shipping is available

shippingPlanId READ-ONLY

`"shippingPlanId": "65a7c0825b50fcd56a018e02"` Internal Shipping Plan ID that is used to calculate shipping costs

handlingTime READ-ONLY

`"handlingTime": { "from": 4, "to": 8 }` Delivery time in days

shippingCost READ-ONLY

`"shippingCost": { "firstItem": { "amount": 399, "currency": "USD" }, "additionalItems": { "amount": 219, "currency": "USD" }` Shipping cost for first, and potentially additional
items. Returned in cents (1/100), for example: 399 = $3.99.

### [](https://developers.printify.com/#v2-catalog-endpoints)Endpoints

#### Retrieve available shipping list information

GET

/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping.json

**Retrieve available shipping list information** `GET /v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping.json`
[View Response](https://developers.printify.com/#)
`{ "data": [ { "type": "shipping_method", "id": "1", "attributes": { "name": "standard" } }, { "type": "shipping_method", "id": "2", "attributes": { "name": "priority" } }, { "type": "shipping_method", "id": "3", "attributes": { "name": "express" } }, { "type": "shipping_method", "id": "4", "attributes": { "name": "economy" } } ], "links": { "standard": "https://api.printify.com/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/standard.json", "priority": "https://api.printify.com/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/priority.json", "priority": "https://api.printify.com/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/express.json", "economy": "https://api.printify.com/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/economy.json" } }`

#### Retrieve specific shipping method information

GET

/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/standard.json

**Retrieve standard shipping method information** `GET /v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/standard.json`
[View Response](https://developers.printify.com/#)
`{ "data": [ { "type": "variant_shipping_standard_us", "id": "23494", "attributes": { "shippingType": "standard", "country": { "code": "US" }, "variantId": 23494, "shippingPlanId": "65a7c0825b50fcd56a018e02", "handlingTime": { "from": 4, "to": 8 }, "shippingCost": { "firstItem": { "amount": 399, "currency": "USD" }, "additionalItems": { "amount": 219, "currency": "USD" } } } } ] }`

GET

/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/priority.json

**Retrieve priority shipping method information** `GET /v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/priority.json`
[View Response](https://developers.printify.com/#)
`{ "data": [ { "type": "variant_shipping_priority_us", "id": "23494", "attributes": { "shippingType": "priority", "country": { "code": "US" }, "variantId": 23494, "shippingPlanId": "65a7c0825b50fcd56a018e02", "handlingTime": { "from": 4, "to": 8 }, "shippingCost": { "firstItem": { "amount": 399, "currency": "USD" }, "additionalItems": { "amount": 219, "currency": "USD" } } } } ] }`

GET

/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/express.json

**Retrieve express shipping method information** `GET /v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/express.json`
[View Response](https://developers.printify.com/#)
`{ "data": [ { "type": "variant_shipping_express_us", "id": "23494", "attributes": { "shippingType": "express", "country": { "code": "US" }, "variantId": 23494, "shippingPlanId": "65a7c0825b50fcd56a018e02", "handlingTime": { "from": 4, "to": 8 }, "shippingCost": { "firstItem": { "amount": 399, "currency": "USD" }, "additionalItems": { "amount": 219, "currency": "USD" } } } } ] }`

GET

/v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/economy.json

**Retrieve economy shipping method information** `GET /v2/catalog/blueprints/{blueprint_id}/print_providers/{print_provider_id}/shipping/economy.json`
[View Response](https://developers.printify.com/#)
`{ "data": [ { "type": "variant_shipping_economy_us", "id": "23494", "attributes": { "shippingType": "economy", "country": { "code": "US" }, "variantId": 23494, "shippingPlanId": "65a7c0825b50fcd56a018e02", "handlingTime": { "from": 4, "to": 8 }, "shippingCost": { "firstItem": { "amount": 399, "currency": "USD" }, "additionalItems": { "amount": 219, "currency": "USD" } } } } ] }`

# HTTP Status Codes

Printify API relies heavily on standard [HTTP response codes](https://tools.ietf.org/html/rfc7231#section-6.1) codes. Please find the brief summary of status codes used below.

### Success

Code

Name

Description

200

OK

Request completed successfully.

201

Created

The request has been fulfilled and has resulted in one or more new resources being created.

202

Accepted

The request has been accepted for processing, but the processing has not been completed.

204

No Content

Indicates that the server has successfully fulfilled the request and that there is no content to send in the response payload body.

### User error codes

These errors generally indicate a problem on the client side. If you are getting one of these, check your code and the request details.

Code

Name

Description

400

Bad Request

The request encoding is invalid; the request can't be parsed as a valid JSON.

401

Unauthorized

Accessing a protected resource without authorization or with invalid credentials.

402

Payment Required

The account associated with the API key making requests hits a quota that can be increased by upgrading the Printify API account plan.

403

Forbidden

Accessing a protected resource with API credentials that don't have access to that resource.

404

Not Found

Route or resource is not found. This error is returned when the request hits an undefined route, or if the resource doesn't exist (e.g. has been deleted).

413

Request Entity Too Large

The request exceeded the maximum allowed payload size. You shouldn't encounter this under normal use.

422

Invalid Request

The request data is invalid. This includes most of the base-specific validations. You will receive a detailed error message and code pointing to the exact issue.

429

Too Many Requests

Too Many Requests response status code indicates you have sent too many requests in a given amount of time ("rate limiting").

### Server error codes

These errors generally represent an error on our side. In the event of a 5xx error code, detailed information about the error will be automatically recorded, and Printify's
developers will be notified.

Code

Name

Description

500

Internal Server Error

The server encountered an unexpected condition.

502

Bad Gateway

Printify's servers are restarting or an unexpected outage is in progress. You should generally not receive this error, and requests are safe to retry.

503

Service Unavailable

The server could not process your request in time. The server could be temporarily unavailable, or it could have timed out processing your request. You should retry the request
with backoffs.

# History

- Last update Mar 18 2024.
