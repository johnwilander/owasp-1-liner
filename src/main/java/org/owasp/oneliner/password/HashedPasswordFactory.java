package org.owasp.oneliner.password;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

/**
 * Author: @johnwilander
 * Date: 2010-12-18
 */
public class HashedPasswordFactory {
    @Resource
    private SecureRandom secureRandom;

    public HashedPassword createHashedPassword(String plainTextPassword) {
        long salt = secureRandom.nextLong();
        return createHashedPassword(plainTextPassword, salt);
    }

    public HashedPassword createHashedPassword(String plainTextPassword, long salt) {
        String hashedPasswordStr = null;
        try {
            hashedPasswordStr = new String(sha256.digest((plainTextPassword + salt).getBytes("UTF8")));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return new HashedPassword(hashedPasswordStr, salt);
    }

    private static MessageDigest sha256;
    static {
        try {
            sha256 = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }
}
