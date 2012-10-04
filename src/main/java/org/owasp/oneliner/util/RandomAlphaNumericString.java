package org.owasp.oneliner.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.security.SecureRandom;

/**
 * @johnwilander
 */
public class RandomAlphaNumericString {
    private static final Log logger = LogFactory.getLog(RandomAlphaNumericString.class);

    private SecureRandom secureRandom = new SecureRandom();

    private final String str;

    private static final int MAX_SIZE = 1024;
    private static final String CHARS;
    static {
        int numOfChars = 36;
        char[] buf = new char[numOfChars];
        for (int index = 0; index < 10; index++)
            buf[index] = (char) ('0' + index);
        for (int index = 10; index < numOfChars; index++)
            buf[index] = (char) ('a' + index - 10);
        CHARS = new String(buf);
    }

    public RandomAlphaNumericString(int length) {
        if (length < 1) {
            throw new IllegalArgumentException("length < 1: " + length);
        }
        if (length > MAX_SIZE) {
            throw new IllegalArgumentException("length > max size: " + length);
        }
        char[] buf = new char[length];
        for (int index = 0; index < buf.length; index++) {
            buf[index] = CHARS.charAt(secureRandom.nextInt(CHARS.length()));
        }
        str = new String(buf);
    }

    public static boolean isValidAlphaNumericString(String string) {
        int length = string.length();
        if (length > MAX_SIZE) {
            return false;
        }
        for (int index=0; index < length; index++) {
            if (CHARS.indexOf(string.charAt(index)) == -1) {
                if (logger.isDebugEnabled()) { logger.debug("Found illegal cookie character: " + string.charAt(index)); }
                return false;
            }
        }
        return true;
    }

    @Override
    public String toString() {
        return str;
    }
}
