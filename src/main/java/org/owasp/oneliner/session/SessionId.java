package org.owasp.oneliner.session;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.util.Date;

/**
 * Author: @johnwilander
 * Date: 2010-12-18
 */
public class SessionId {
    private static final Log logger = LogFactory.getLog(SessionId.class);
    private static final long SESSION_MAX_AGE_IN_MILLIS = 1000L * 60 * 60 * 24; // One day

    private final String sessionId;
    private final Date starts;
    private final Date expires;

    public Date starts() {
        return starts;
    }

    public Date expires() {
        return expires;
    }

    public int maxAgeInSeconds() {
        int currentMaxAgeInSeconds = (int)((expires.getTime() - System.currentTimeMillis()) / 1000);
        int returnValue;
        return currentMaxAgeInSeconds > 0 ? currentMaxAgeInSeconds : 0;
    }

    @Override
    public String toString() {
        return sessionId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SessionId)) return false;

        SessionId sessionId1 = (SessionId) o;

        if (sessionId != null ? !sessionId.equals(sessionId1.sessionId) : sessionId1.sessionId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return sessionId != null ? sessionId.hashCode() : 0;
    }

    // Package default to give access to factory class only
    SessionId(String sessionId) {
        this.sessionId = sessionId;
        this.starts = new Date();
        this.expires = new Date(System.currentTimeMillis() + SESSION_MAX_AGE_IN_MILLIS);
        if(logger.isDebugEnabled()) { logger.debug("New session id: " + sessionId + ", expires " + expires); }
    }

    // Here for JAXB
    public SessionId() {
        this.sessionId = null;
        this.starts = null;
        this.expires = null;
    }
}
