package org.owasp.oneliner.session;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.annotation.Resource;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

/**
 * Author: @johnwilander
 * Date: 2010-12-18
 */
public class SessionIdFactory {

    public SessionId createNewSessionId() {
        SecureRandom secureRandom = new SecureRandom();
        secureRandom.setSeed(System.currentTimeMillis());
        byte[] bytes = new byte[16];
        secureRandom.nextBytes(bytes);
        return new SessionId(new String(Hex.encodeHex(bytes)));
    }
}

/*
    Problem: The pseudo random generator is instantiated for every session id and it's
    seeded with a timestamp which is not a good source of randomness. If the attacker
    knows roughly when the victim logged in he/she can try to brute force the session
    id. 1,000 tries covers a second. 60,000 tries covers a minute.
 */
