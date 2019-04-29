package io.slingr.endpoints.coinbase;

import io.slingr.endpoints.HttpPerUserEndpoint;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.exchange.ReservedName;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;

/**
 * <p>Coinbase Pro User endpoint
 * <p>
 * <p>Created by hpacini on 01/03/19.
 */
@SlingrEndpoint(name = "coinbase-pro-user", functionPrefix = "_")
public class CoinbaseProUserEndpoint extends HttpPerUserEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(CoinbaseProUserEndpoint.class);

    private final static String API_URL_SANDBOX = "https://api-public.sandbox.pro.coinbase.com";
    private final static String API_URL_PRODUCTION = "https://api.pro.coinbase.com";

    private final static String METHOD_GET = "GET";
    private final static String METHOD_POST = "POST";
    private final static String METHOD_PUT = "PUT";
    private final static String METHOD_DELETE = "DELETE";

    @EndpointProperty
    private String server;

    @ApplicationLogger
    private AppLogs appLogger;

    @Override
    public String getApiUri() {
        return "production".equals(server) ? API_URL_PRODUCTION : API_URL_SANDBOX;
    }

    @Override
    public void endpointStarted() {
        httpService().setupDefaultHeader("Content-Type", "application/json");
        httpService().setAllowExternalUrl(true);
    }


    @EndpointFunction(name = ReservedName.CONNECT_USER)
    public Json connectUser(FunctionRequest request) {
        final String userId = request.getUserId();
        if (StringUtils.isNotBlank(userId)) {
            // checks if the user includes a non-empty 'code' on the request
            final Json jsonBody = request.getJsonParams();
            if (jsonBody != null) {

                String apiKey = jsonBody.string(UserData.API_KEY);
                String apiSecretKey = jsonBody.string(UserData.API_SECRET);
                String passphrase = jsonBody.string(UserData.PASSPHRASE);

                if (StringUtils.isBlank(apiKey) || StringUtils.isBlank(apiSecretKey) || StringUtils.isBlank(passphrase)) {
                    logger.warn(String.format("AIP key, API secret and passphrase are required. User [%s] won't be connected.", userId));
                    appLogger.warn(String.format("AIP key, API secret and passphrase are required. User [%s] won't be connected.", userId));

                    defaultMethodDisconnectUsers(request);
                    return Json.map();
                }

                Json userConnectionData = Json.map()
                        .set(UserData.API_KEY, apiKey)
                        .set(UserData.API_SECRET, apiSecretKey)
                        .set(UserData.PASSPHRASE, passphrase);

                // saves the information on the users data store
                Json conf = users().save(userId, userConnectionData);
                logger.info(String.format("User connected [%s]", userId));

                // sends connected user event
                users().sendUserConnectedEvent(request.getFunctionId(), userId, conf);

                return conf;

            } else {
                logger.info(String.format("Empty payload received when try to connect user [%s] [%s]", userId, request.getParams() != null ? request.getParams().toString() : "-"));
            }
        }
        defaultMethodDisconnectUsers(request);
        return Json.map();
    }

    private long getTimestamp() {
        return new Date().getTime() / 1000L;
    }

    @EndpointFunction(name = "_get")
    public Json getRequest(FunctionRequest request) {

        Json req = request.getJsonParams();
        String path = req.string("path");

        UserData userData = new UserData(users().findById(request.getUserId()), request.getUserId());

        long timestamp = getTimestamp();
        String accessSign = CryptoUtils.getSignature(userData.getApiSecret(), timestamp, METHOD_GET, path, null);
        this.setHttpHeaders(accessSign, timestamp, userData.getApiKey(), userData.getPassphrase());

        return httpService().defaultGetRequest(req);

    }

    @EndpointFunction(name = "_delete")
    public Json deleteRequest(FunctionRequest request) {

        Json req = request.getJsonParams();
        String path = req.string("path");

        UserData userData = new UserData(users().findById(request.getUserId()), request.getUserId());

        long timestamp = getTimestamp();
        String accessSign = CryptoUtils.getSignature(userData.getApiSecret(), timestamp, METHOD_DELETE, path, null);
        this.setHttpHeaders(accessSign, timestamp, userData.getApiKey(), userData.getPassphrase());

        return httpService().defaultDeleteRequest(req);

    }

    @EndpointFunction(name = "_post")
    public Json postRequest(FunctionRequest request) {

        Json req = request.getJsonParams();
        String path = req.string("path");

        UserData userData = new UserData(users().findById(request.getUserId()), request.getUserId());

        long timestamp = getTimestamp();

        Json body = req.json("body");
        String strBody = body != null ? body.toString() : "";

        req.set("body", body);

        String accessSign = CryptoUtils.getSignature(userData.getApiSecret(), timestamp, METHOD_POST, path, strBody);
        this.setHttpHeaders(accessSign, timestamp, userData.getApiKey(), userData.getPassphrase());

        return httpService().defaultPostRequest(req);

    }

    @EndpointFunction(name = "_put")
    public Json putRequest(FunctionRequest request) {

        Json req = request.getJsonParams();
        String path = req.string("path");

        UserData userData = new UserData(users().findById(request.getUserId()), request.getUserId());

        long timestamp = getTimestamp();

        Json body = req.json("body");
        String strBody = body != null ? body.toString() : "";

        req.set("body", body);

        String accessSign = CryptoUtils.getSignature(userData.getApiSecret(), timestamp, METHOD_PUT, path, strBody);
        this.setHttpHeaders(accessSign, timestamp, userData.getApiKey(), userData.getPassphrase());

        return httpService().defaultPutRequest(req);

    }

    private void setHttpHeaders(String accessSign, long timestamp, String apiKye, String passphrase) {
        httpService().setupDefaultHeader("CB-ACCESS-SIGN", accessSign);
        httpService().setupDefaultHeader("CB-ACCESS-TIMESTAMP", Long.toString(timestamp));
        httpService().setupDefaultHeader("CB-ACCESS-KEY", apiKye);
        httpService().setupDefaultHeader("CB-ACCESS-PASSPHRASE", passphrase);
    }

}
