package io.slingr.endpoints.coinbase;

import org.junit.Assert;
import org.junit.Test;

import java.util.Date;

public class UtilsTest {

    private final String APKI_SECRET = "5/MfbfxmTAr/dQyBVcUzB4ggiGHyziwkLN+wFJ/qmlrZoIfP/p4uTZcaxu2CQ/Y8c04+iyl2g8sUJcZqDrZLRw==";

    @Test
    public void testGetSignature() {

        Date date = new Date();
        long timestamp = date.getTime() / 1000;

        String method = "GET";
        String URL = "/accounts";
        long timestampStr = 1544638334;

        String expectedSign = "kM766CsLGFA1NDULsWm+i0TEK8NuJs1xhhD9/GCjaVI=";

        String result = CryptoUtils.getSignature(APKI_SECRET, timestampStr, method, URL, null);

        Assert.assertEquals(expectedSign, result);

    }

}