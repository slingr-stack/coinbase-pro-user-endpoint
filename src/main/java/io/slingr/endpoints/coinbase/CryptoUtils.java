package io.slingr.endpoints.coinbase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;

public class CryptoUtils {

    private static final Logger logger = LoggerFactory.getLogger(CryptoUtils.class);

    public static String getSignature(String secret, long timestamp, String method, String URL, String body) {

        try {

            body = body != null ? body : "";
            String message = timestamp + method + URL + body;

            Mac mac = Mac.getInstance("HmacSHA256");
            byte[] decodeSecret = Base64.decodeBase64(secret);
            SecretKeySpec secretKey = new SecretKeySpec(decodeSecret, "HmacSHA256");

            mac.init(secretKey);

            byte[] src = mac.doFinal(message.getBytes());

            return Base64.encodeBase64String(src);

        } catch (Exception e) {
            logger.warn("Error when enconde the request");
        }

        return null;
    }

}
