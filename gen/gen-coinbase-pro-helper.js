var fs = require('fs');

var FILE_NAME = "coinbase-pro-user-helpers.js";
var CODE = '';
var SRC_USR = '';
var cache = {};

var API = [
    {namespace: 'accounts', method: 'GET', URL: 'accounts'},
    {namespace: 'accounts', method: 'GET', URL: 'accounts/:account_id'},
    {namespace: 'accounts', method: 'GET', URL: 'accounts/:account_id/ledger'},
    {namespace: 'accounts', method: 'GET', URL: 'accounts/:account_id/holds'},
    {namespace: 'orders', method: 'POST', URL: 'orders'},
    {namespace: 'orders', method: 'DELETE', URL: 'orders/:order_id'},
    {namespace: 'orders', method: 'DELETE', URL: 'orders', params: true},
    {namespace: 'orders', method: 'GET', URL: 'orders', params: true},
    {namespace: 'orders', method: 'GET', URL: 'orders/order_id'},
    {namespace: 'fills', method: 'GET', URL: 'fills', params: true},
    {namespace: 'deposits', method: 'POST', URL: 'deposits/payment-method'},
    {namespace: 'deposits', method: 'POST', URL: 'deposits/coinbase-account'},
    {namespace: 'withdrawals', method: 'POST', URL: 'withdrawals/coinbase-account'},
    {namespace: 'withdrawals', method: 'POST', URL: 'withdrawals/crypto'},
    {namespace: 'conversions', method: 'POST', URL: 'conversions'},
    {namespace: 'paymentsMethods', method: 'GET', URL: 'payment-methods'},
    {namespace: 'coinbaseAccounts', method: 'GET', URL: 'coinbase-accounts'},
    {namespace: 'reports', method: 'POST', URL: 'reports'},
    {namespace: 'reports', method: 'GET', URL: 'reports/:report_id'},
    {namespace: 'users', method: 'GET', URL: 'users/self/trailing-volume'},
    {namespace: 'products', method: 'GET', URL: 'products'},
    {namespace: 'products', method: 'GET', URL: 'products/:product_id/book'},
    {namespace: 'products', method: 'GET', URL: 'products/:product_id/ticker'},
    {namespace: 'products', method: 'GET', URL: 'products/:product_id/trades'},
    {namespace: 'products', method: 'GET', URL: 'products/:product_id/candles'},
    {namespace: 'products', method: 'GET', URL: 'products/:product_id/stats'},
    {namespace: 'products', method: 'GET', URL: 'currencies'},
    {namespace: 'products', method: 'GET', URL: 'time'},
];

var urlsData = {get: {}, post: {}, put: {}, patch: {}, delete: {}};
var endpoint = {};
var NAMESPACE = 'endpoint.';
var NAMESPACE_USR = 'endpoint.user.';

var camelCase = function (input) {
    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
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

var setInitializers = function (fnName, givenNamespace) {

    var tmpCode = '',
        namesArr = fnName.split('.'),
        path = '';

    for (var i in namesArr) {

        if (i == 0) {
            path = namesArr[0];
        } else {
            path += '.' + namesArr[i];
        }

        if (!cache[path]) {
            tmpCode += NAMESPACE + givenNamespace + path + ' = {};\n';
            cache[path] = path;
        }

        if (!cache[givenNamespace + path]) {
            tmpCode += NAMESPACE + givenNamespace + path + ' = {};\n';
            cache[givenNamespace + path] = givenNamespace + path;
        }
    }

    return tmpCode;
};

var capitalizeFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var getMethod = function (method, space) {

    if (space) {
        return space + capitalizeFirstLetter(method);
    }
    return method;
};

var makeEndpointsHelpers = function () {

    for (var i in API) {
        var apiInfo = API[i];
        var numVars = 0;
        var fnNames = [];
        var newPath = '';
        var method = apiInfo.method.toLowerCase();

        var urlParts = apiInfo.URL.split('/');
        for (var p in urlParts) {
            if (urlParts[p] != "") {
                if (urlParts[p].substr(0, 1) == ':') {
                    numVars++;
                    newPath += '/%s'
                } else {
                    fnNames.push(urlParts[p]);
                    newPath += '/' + urlParts[p];
                }
            }
        }

        var functionName = camelCase(fnNames.join('.'));
        if (!urlsData[method][functionName]) {
            urlsData[method][functionName] = {};
        }

        urlsData[method][functionName][numVars] = '/' + apiInfo.URL;
        if (apiInfo.params) {
            urlsData[method][functionName]['args'] = true;
        }
    }

    for (var method in urlsData) {
        for (var fn in urlsData[method]) {

            CODE += setInitializers(fn, '');
            SRC_USR += setInitializers(fn, 'user.');

            if (method == 'get' || method == 'delete') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;';

                var hasArguments = '\n\n\tvar index = 0;';
                hasArguments += '\n\tvar args = "";';

                if (urlsData[method][fn]['args']) {
                    hasArguments += '\n\n\tif(size >= 1 && typeof arguments[size-1] === "object") {';
                    hasArguments += '\n\t\tindex = 1;';
                    hasArguments += '\n\t\targs = "?";';
                    hasArguments += '\n\t\tfor(var j in arguments[size-1]) {';
                    hasArguments += '\n\t\t\targs += j + "=" + arguments[size-1][j];';
                    hasArguments += '\n\t\t}';
                    hasArguments += '\n\t}\n';
                }


                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size-index], Array.prototype.slice.call(arguments, 0, size-index));';

                var getSrcFn = function (fn, method, sizeStr, hasArguments, parseStr, space) {

                    var src = fn + '.' + method + ' = function() {';
                    src += '\n\t' + sizeStr;
                    src += hasArguments;
                    src += '\n\tvar url = ' + parseStr;
                    src += '\n\turl += args;';
                    src += '\n\tsys.logs.debug(\'[CoinbaseProUser] ' + method.toUpperCase() + ' from: \' + url);';
                    src += '\n\treturn ' + NAMESPACE + getMethod(method, space) + '(url);\n};\n\n';

                    return src;
                };

                CODE += NAMESPACE + getSrcFn(fn, method, sizeStr, hasArguments, parseStr, '');
                SRC_USR += NAMESPACE_USR + getSrcFn(fn, method, sizeStr, hasArguments, parseStr, 'user');

            } else if (method == 'post' || method == 'put' || method == 'patch') {
                var sizeStr = 'var size = arguments.length > 0 ? arguments.length : 0;\n\t';
                sizeStr += 'if(size <= 0) { return;\n\t\tsys.logs.warn(\'wrong numbers of arguments for ' + fn + '.' + method + '\');\n\t}';

                var hasArguments = '\n\n\tvar index = 1;';
                hasArguments += '\n\tvar args = "";';

                if (urlsData[method][fn]['args']) {
                    hasArguments += '\n\n\tif(size >= 2 && typeof arguments[size-1] === "object" && typeof arguments[size-2] === "object" ){';
                    hasArguments += '\n\t\tindex = 2;';
                    hasArguments += '\n\t\targs = "?";';
                    hasArguments += '\n\t\tfor(var j in arguments[size-1]) {';
                    hasArguments += '\n\t\t\targs += j + "=" + arguments[size-1][j];';
                    hasArguments += '\n\t\t}';
                    hasArguments += '\n\n\t}';
                }

                var parseStr = 'parse(urlsData[\'' + method + '\'][\'' + fn + '\'][size - 1], Array.prototype.slice.call(arguments, 0, size-index));';

                var getSrcFn = function (fn, method, sizeStr, hasArguments, parseStr, space) {
                    var src = fn + '.' + method + ' = function() {';
                    src += '\n\t' + sizeStr;
                    src += hasArguments;
                    src += '\n\tvar url = ' + parseStr;
                    src += '\n\turl += args;';
                    src += '\n\tsys.logs.debug(\'[CoinbaseProUser] ' + method.toUpperCase() + ' from: \' + url);';
                    src += '\n\treturn ' + NAMESPACE + getMethod(method, space) + '(url, arguments[arguments.length - index]);\n};\n\n';

                    return src;
                };

                CODE += NAMESPACE + getSrcFn(fn, method, sizeStr, hasArguments, parseStr, '');
                SRC_USR += NAMESPACE_USR + getSrcFn(fn, method, sizeStr, hasArguments, parseStr, 'user');
            }

        }
    }


    var MESSAGE = '/////////////////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                                 //\n';
    MESSAGE += '//   This file is generated with coinbase/gen/gen-coinbase-pro-user-helpers.js     //\n';
    MESSAGE += '//                                                                                 //\n';
    MESSAGE += '//                ' + new Date() + '                          //\n';
    MESSAGE += '//                                                                                 //\n';
    MESSAGE += '/////////////////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\nvar parse = ' + parse.toString() + ';\n\n' + CODE + '\n' + SRC_USR;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
