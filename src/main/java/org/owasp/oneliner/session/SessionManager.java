package org.owasp.oneliner.session;

import org.owasp.oneliner.user.User;

import javax.annotation.Resource;

/**
 * Author: @johnwilander
 * Date: 2010-12-18
 */
public class SessionManager {
    @Resource
    SessionIdFactory sessionIdFactory;

    public SessionId createAuthenticatedSession(User user) {
        SessionId sessionId = sessionIdFactory.createNewSessionId();
        user.setSessionId(sessionId);
        return sessionId;
    }
}
