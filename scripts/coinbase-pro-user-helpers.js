/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
//   This file is generated with coinbase/gen/gen-coinbase-pro-user-helpers.js     //
//                                                                                 //
//                Mon Jan 07 2019 17:28:46 GMT-0300 (-03)                          //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////


var urlsData = {
	"get": {
		"accounts": {
			"0": "/accounts",
			"1": "/accounts/:account_id"
		},
		"accounts.ledger": {
			"1": "/accounts/:account_id/ledger"
		},
		"accounts.holds": {
			"1": "/accounts/:account_id/holds"
		},
		"orders": {
			"0": "/orders",
			"args": true
		},
		"orders.order_id": {
			"0": "/orders/order_id"
		},
		"fills": {
			"0": "/fills",
			"args": true
		},
		"paymentMethods": {
			"0": "/payment-methods"
		},
		"coinbaseAccounts": {
			"0": "/coinbase-accounts"
		},
		"reports": {
			"1": "/reports/:report_id"
		},
		"users.self.trailingVolume": {
			"0": "/users/self/trailing-volume"
		},
		"products": {
			"0": "/products"
		},
		"products.book": {
			"1": "/products/:product_id/book"
		},
		"products.ticker": {
			"1": "/products/:product_id/ticker"
		},
		"products.trades": {
			"1": "/products/:product_id/trades"
		},
		"products.candles": {
			"1": "/products/:product_id/candles"
		},
		"products.stats": {
			"1": "/products/:product_id/stats"
		},
		"currencies": {
			"0": "/currencies"
		},
		"time": {
			"0": "/time"
		}
	},
	"post": {
		"orders": {
			"0": "/orders"
		},
		"deposits.paymentMethod": {
			"0": "/deposits/payment-method"
		},
		"deposits.coinbaseAccount": {
			"0": "/deposits/coinbase-account"
		},
		"withdrawals.coinbaseAccount": {
			"0": "/withdrawals/coinbase-account"
		},
		"withdrawals.crypto": {
			"0": "/withdrawals/crypto"
		},
		"conversions": {
			"0": "/conversions"
		},
		"reports": {
			"0": "/reports"
		}
	},
	"put": {},
	"patch": {},
	"delete": {
		"orders": {
			"0": "/orders",
			"1": "/orders/:order_id",
			"args": true
		}
	}
};

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1],
                i = 0;
            return str.replace(/:(\w+)/g, function () {
                return args[i++];
            });

        } else {
            if (str) {
                return str;
            }
            throw 'Function is not valid.';
        }
    } catch (err) {
        throw 'Function is not valid for given arguments.';
    }
};

endpoint.accounts = {};
endpoint.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['accounts'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.accounts.ledger = {};
endpoint.accounts.ledger.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['accounts.ledger'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.accounts.holds = {};
endpoint.accounts.holds.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['accounts.holds'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders = {};
endpoint.orders.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";

	if(size >= 1 && typeof arguments[size-1] === "object") {
		index = 1;
		args = "?";
		for(var j in arguments[size-1]) {
			args += j + "=" + arguments[size-1][j];
		}
	}

	var url = parse(urlsData['get']['orders'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.order_id = {};
endpoint.orders.order_id.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['orders.order_id'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.fills = {};
endpoint.fills.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";

	if(size >= 1 && typeof arguments[size-1] === "object") {
		index = 1;
		args = "?";
		for(var j in arguments[size-1]) {
			args += j + "=" + arguments[size-1][j];
		}
	}

	var url = parse(urlsData['get']['fills'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.paymentMethods = {};
endpoint.paymentMethods.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['paymentMethods'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.coinbaseAccounts = {};
endpoint.coinbaseAccounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['coinbaseAccounts'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.reports = {};
endpoint.reports.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['reports'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.users = {};
endpoint.users.self = {};
endpoint.users.self.trailingVolume = {};
endpoint.users.self.trailingVolume.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['users.self.trailingVolume'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.products = {};
endpoint.products.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.products.book = {};
endpoint.products.book.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.book'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.products.ticker = {};
endpoint.products.ticker.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.ticker'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.products.trades = {};
endpoint.products.trades.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.trades'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.products.candles = {};
endpoint.products.candles.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.candles'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.products.stats = {};
endpoint.products.stats.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.stats'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.currencies = {};
endpoint.currencies.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['currencies'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.time = {};
endpoint.time.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['time'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.get(url);
};

endpoint.orders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['orders'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - index]);
};

endpoint.deposits = {};
endpoint.deposits.paymentMethod = {};
endpoint.deposits.paymentMethod.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for deposits.paymentMethod.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['deposits.paymentMethod'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - index]);
};

endpoint.deposits.coinbaseAccount = {};
endpoint.deposits.coinbaseAccount.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for deposits.coinbaseAccount.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['deposits.coinbaseAccount'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - index]);
};

endpoint.withdrawals = {};
endpoint.withdrawals.coinbaseAccount = {};
endpoint.withdrawals.coinbaseAccount.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for withdrawals.coinbaseAccount.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['withdrawals.coinbaseAccount'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - index]);
};

endpoint.withdrawals.crypto = {};
endpoint.withdrawals.crypto.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for withdrawals.crypto.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['withdrawals.crypto'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - index]);
};

endpoint.conversions = {};
endpoint.conversions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for conversions.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['conversions'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - index]);
};

endpoint.reports.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for reports.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['reports'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.post(url, arguments[arguments.length - index]);
};

endpoint.orders.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";

	if(size >= 1 && typeof arguments[size-1] === "object") {
		index = 1;
		args = "?";
		for(var j in arguments[size-1]) {
			args += j + "=" + arguments[size-1][j];
		}
	}

	var url = parse(urlsData['delete']['orders'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] DELETE from: ' + url);
	return endpoint.delete(url);
};


endpoint.user.accounts = {};
endpoint.user.accounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['accounts'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.accounts.ledger = {};
endpoint.user.accounts.ledger.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['accounts.ledger'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.accounts.holds = {};
endpoint.user.accounts.holds.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['accounts.holds'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.orders = {};
endpoint.user.orders.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";

	if(size >= 1 && typeof arguments[size-1] === "object") {
		index = 1;
		args = "?";
		for(var j in arguments[size-1]) {
			args += j + "=" + arguments[size-1][j];
		}
	}

	var url = parse(urlsData['get']['orders'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.orders.order_id = {};
endpoint.user.orders.order_id.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['orders.order_id'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.fills = {};
endpoint.user.fills.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";

	if(size >= 1 && typeof arguments[size-1] === "object") {
		index = 1;
		args = "?";
		for(var j in arguments[size-1]) {
			args += j + "=" + arguments[size-1][j];
		}
	}

	var url = parse(urlsData['get']['fills'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.paymentMethods = {};
endpoint.user.paymentMethods.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['paymentMethods'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.coinbaseAccounts = {};
endpoint.user.coinbaseAccounts.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['coinbaseAccounts'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.reports = {};
endpoint.user.reports.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['reports'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.users = {};
endpoint.user.users.self = {};
endpoint.user.users.self.trailingVolume = {};
endpoint.user.users.self.trailingVolume.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['users.self.trailingVolume'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.products = {};
endpoint.user.products.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.products.book = {};
endpoint.user.products.book.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.book'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.products.ticker = {};
endpoint.user.products.ticker.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.ticker'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.products.trades = {};
endpoint.user.products.trades.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.trades'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.products.candles = {};
endpoint.user.products.candles.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.candles'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.products.stats = {};
endpoint.user.products.stats.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['products.stats'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.currencies = {};
endpoint.user.currencies.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['currencies'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.time = {};
endpoint.user.time.get = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";
	var url = parse(urlsData['get']['time'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] GET from: ' + url);
	return endpoint.userGet(url);
};

endpoint.user.orders.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for orders.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['orders'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.userPost(url, arguments[arguments.length - index]);
};

endpoint.user.deposits = {};
endpoint.user.deposits.paymentMethod = {};
endpoint.user.deposits.paymentMethod.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for deposits.paymentMethod.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['deposits.paymentMethod'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.userPost(url, arguments[arguments.length - index]);
};

endpoint.user.deposits.coinbaseAccount = {};
endpoint.user.deposits.coinbaseAccount.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for deposits.coinbaseAccount.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['deposits.coinbaseAccount'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.userPost(url, arguments[arguments.length - index]);
};

endpoint.user.withdrawals = {};
endpoint.user.withdrawals.coinbaseAccount = {};
endpoint.user.withdrawals.coinbaseAccount.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for withdrawals.coinbaseAccount.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['withdrawals.coinbaseAccount'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.userPost(url, arguments[arguments.length - index]);
};

endpoint.user.withdrawals.crypto = {};
endpoint.user.withdrawals.crypto.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for withdrawals.crypto.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['withdrawals.crypto'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.userPost(url, arguments[arguments.length - index]);
};

endpoint.user.conversions = {};
endpoint.user.conversions.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for conversions.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['conversions'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.userPost(url, arguments[arguments.length - index]);
};

endpoint.user.reports.post = function() {
	var size = arguments.length > 0 ? arguments.length : 0;
	if(size <= 0) { return;
		sys.logs.warn('wrong numbers of arguments for reports.post');
	}

	var index = 1;
	var args = "";
	var url = parse(urlsData['post']['reports'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] POST from: ' + url);
	return endpoint.userPost(url, arguments[arguments.length - index]);
};

endpoint.user.orders.delete = function() {
	var size = arguments.length > 0 ? arguments.length : 0;

	var index = 0;
	var args = "";

	if(size >= 1 && typeof arguments[size-1] === "object") {
		index = 1;
		args = "?";
		for(var j in arguments[size-1]) {
			args += j + "=" + arguments[size-1][j];
		}
	}

	var url = parse(urlsData['delete']['orders'][size-index], Array.prototype.slice.call(arguments, 0, size-index));
	url += args;
	sys.logs.debug('[CoinbaseProUser] DELETE from: ' + url);
	return endpoint.userDelete(url);
};

