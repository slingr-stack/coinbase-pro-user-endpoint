---
title: Coinbase Pro User endpoint
keywords: 
last_updated: January 07, 2019
tags: []
summary: "Detailed description of the API of the Coinbase Pro User endpoint."
---

## Overview

Coinbase Pro is a trading platform for individual traders and crypto enthusiasts. It offers a secure and easy way for 
individuals to buy, sell, and trade digital assets online instantly across various trading pairs. With a Coinbase Pro 
account, these individuals can track the market, view trading history, monitor open orders, and more.

The endpoint supports the following features:

- Authentication
- Signing of requests
- Shortcuts for features available in the REST API

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = app.endpoints.coinbasepro.get('/coinbase-accounts');
```

However you probably want to use the shortcuts:

```js
var res = app.endpoints.coinbasepro.coinbaseAccounts.get(); 
```

These shortcuts are based on the [Coinbase Pro REST API](https://docs.pro.coinbase.com/).
You can see more information about that in the [shortcuts section](#shortcuts).

## Configuration

You can configure the endpoint just by indicating if you will be using the sandbox or production. As this
is a user endpoint, in order to access the API you will need to connect users to the endpoint.

### Server

Defines which server will be used. Available values are:
 
- `production`: this is for production accounts. You probably only want to set this value in your
  production environment.
- `sandbox`: this is for development, where the sandbox of Coinbase Pro will be use. This is the
  default value.

## User Configurations

Before being able to sign any requests, you must create an API key via the Coinbase Pro website. When you
do so, you will have 3 pieces of information that will be needed to connect a user to the endpoint: 

- API key
- API secret
- Passphrase

Keep in mind that **API secret is only displayed when the API key is created**, so make sure you take note
of it. You can find more information about that [here](https://docs.pro.coinbase.com/#authentication).

### API key

This is the API key generated. Go API Settings and after that create new API key. Just copy the generated API key to this field.

### API secret

This is the API secret generated at same time the API key. API secret is just displayed when create an API key. 
Just copy the generated API secret to this field.

### Passphrase

The passphrase will be provided by you to further secure your API access.

## Javascript API

The user token (for authentication) will be automatically attach in each request when is used Coinbase Pro endpoint, either
when using shortcuts or directly making HTTP requests.

```js
// HTTP requests
var res = app.endpoints.coinbasepro.get('/coinbase-accounts');

// shortcuts
var res = app.endpoints.coinbasepro.coinbaseAccounts.get(); 
```

- **HTTP request**: this allows to make regular HTTP requests like `GET`, `POST` or `PUT` to the API.
- **Shortcuts**: these are helpers to make HTTP request to the API in a more convenient way. Requests are signed automatically.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the [Coinbase Pro API](https://docs.pro.coinbase.com) like this:

```js
var res = app.endpoints.coinbasepro.get('/coinbase-accounts');
```

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts

Instead of having to use the generic HTTP methods, you can make use of the shortcuts provided in the endpoint.
There are two groups of shortcuts:

These shortcuts follow these rules:

- **Path sections get converted to namespaces**: for example if the method is GET `~/accounts/:account_id/transactions` 
  it is converted to `app.endpoints.coinbase.accounts.transactions.get(accountId)`. 
- **If they have dashes, we should convert them to camel case**: `~/exchange-rates` is converted to 
  `app.endpoints.coinbase.exchangeRates.get()`. 
- **HTTP method is appended at the end of the method**: for example if the method is `GET`, you will see a method with 
  the suffix `.get(...)`. For example `GET ~/accounts/:account_id` will become `app.endpoints.coinbase.accounts.get(accountId)`. 
  This is the mapping of names:
  - `GET`: `get`
  - `POST`: `post`
  - `PUT`: `put`
  - `DELETE`: `delete`
- **Path variables become method parameters**: if the method has variables in the path, they will become parameters for 
  the method. For example `GET ~/accounts/:account_id/withdrawals/:withdrawal_id` will become 
  `app.endpoints.coinbase.accounts.withdrawals.get(accountId, withdrawalId)`.
- **Body are sent in the last param as JSON**: if the method accepts more parameters or it allows to send a body, 
   that will be sent in the last parameter. For example the method `PUT ~/accounts/:account_id`  will become 
   `app.endpoints.coinbase.accounts.put(accountId, {...params to update...})`
- **Arguments are sent in the last param as JSON. After the body**: if the method accepts argument, 
   that will be sent in the last parameter. In case of PUT or POST after the body. For example the method `PUT ~/accounts/:account_id`  will become 
   `app.endpoints.coinbase.accounts.put(accountId, {...params to update...}, {... arguments...})`.
  
Here are some URLs of the REST API and their corresponding shortcut:

```js
// DELETE /orders
var res = app.endpoints.coinbasepro.orders.delete({/*params here*/});

// GET ~/coinbase-accounts
var res = app.endpoints.coinbasepro.coinbaseAccounts.get();

// POST ~/deposits/coinbase-account 
var res = app.endpoints.coinbasepro.deposits.coinbaseAccount.post({
    "amount": 10.00,
    "currency": "BTC",
    "coinbase_account_id": "95671473-4dda-5264-a654-fc6923e8a334",
});
```

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
