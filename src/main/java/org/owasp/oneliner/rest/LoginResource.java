package org.owasp.oneliner.rest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.authentication.Authenticator;
import org.owasp.oneliner.exceptions.AuthenticationException;
import org.owasp.oneliner.session.SessionId;
import org.owasp.oneliner.session.SessionManager;
import org.owasp.oneliner.user.User;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

/**
 * Author: @johnwilander
 * Date: 2010-12-18
 */
@Path("/login")
@Component
public class LoginResource {
    private static final Log logger = LogFactory.getLog(UserResource.class);

    @Resource
    private Authenticator authenticator;
    @Resource
    private SessionManager sessionManager;

    @POST
    @Produces({MediaType.APPLICATION_JSON})
    public User login(@FormParam("userName") String userName,
                      @FormParam("password")String password,
                      @Context HttpServletResponse response
    ) throws AuthenticationException {
        User authenticatedUser = authenticator.authenticate(userName, password);
        SessionId sessionId = sessionManager.createAuthenticatedSession(authenticatedUser);
        Cookie sessionCookie = new Cookie("sessionId", sessionId.toString());
        sessionCookie.setMaxAge(sessionId.maxAgeInSeconds());
        response.addCookie(sessionCookie);
        return authenticatedUser;
    }
}
