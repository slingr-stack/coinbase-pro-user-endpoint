package io.slingr.endpoints.coinbase;

import io.slingr.endpoints.utils.Json;

public class UserData {

    public final static String API_KEY = "apiKey";
    public final static String API_SECRET = "apiSecret";
    public final static String PASSPHRASE = "passphrase";

    private String apiKey;
    private String apiSecret;
    private String passphrase;

    public UserData(Json userConnData, String userId) {
        this.apiKey = userConnData.string(API_KEY);
        this.apiSecret = userConnData.string(API_SECRET);
        this.passphrase = userConnData.string(PASSPHRASE);
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getApiSecret() {
        return apiSecret;
    }

    public void setApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
    }

    public String getPassphrase() {
        return passphrase;
    }

    public void setPassphrase(String passphrase) {
        this.passphrase = passphrase;
    }
}
