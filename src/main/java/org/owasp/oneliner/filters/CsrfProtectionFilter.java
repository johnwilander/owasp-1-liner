package org.owasp.oneliner.filters;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;
import com.sun.jersey.spi.container.ContainerResponseFilter;
import com.sun.jersey.spi.container.ResourceFilter;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.exceptions.BadCsrfProtectionTokenException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

/**
 * Author: @johnwilander
 * Date: 2010-nov-07
 */
public class CsrfProtectionFilter implements ResourceFilter, ContainerRequestFilter {
    private static final Log logger = LogFactory.getLog(CsrfProtectionFilter.class);
    public static final String COOKIE_TOKEN = "cookieToken";
    public static final String PARAM_TOKEN = "paramToken";
    private HttpServletRequest httpServletRequest;

    public CsrfProtectionFilter(HttpServletRequest httpServletRequest) {
        this.httpServletRequest = httpServletRequest;
    }

    public ContainerRequest filter(ContainerRequest containerRequest) throws BadCsrfProtectionTokenException {
        if(logger.isDebugEnabled()) { logger.debug("Checking anti-csrf cookie against anti-csrf request parameter"); }
        if (isTokenOK()) {
            if(logger.isDebugEnabled()) { logger.debug("Anti-csrf cookie and/or request parameter OK"); }
            return containerRequest;
        } else {
            if(logger.isDebugEnabled()) { logger.debug("Anti-csrf cookie and/or request parameter bad"); }
            throw BadCsrfProtectionTokenException.INSTANCE;
        }
    }

    public void setHttpServletRequest(HttpServletRequest httpServletRequest) {
        this.httpServletRequest = httpServletRequest;
    }

    public ContainerRequestFilter getRequestFilter() {
        return this;
    }

    public ContainerResponseFilter getResponseFilter() {
        return null;  // No response filter
    }

    // Private help methods

    private String getCsrfProtectionTokenCookie() {
        Cookie[] cookies = httpServletRequest.getCookies();
        String csrfProtectionCookieValue = null;
        for (Cookie cookie : cookies) {
            if (COOKIE_TOKEN.equals(cookie.getName())) {
                csrfProtectionCookieValue = cookie.getValue();
            }
        }
        return csrfProtectionCookieValue;
    }

    private String getCsrfProtectionTokenFormParam() {
        return httpServletRequest.getParameter(PARAM_TOKEN);
    }

    private boolean isTokenOK() {
        String cookie = getCsrfProtectionTokenCookie();
        return cookie != null && !"".equals(cookie) && cookie.equals(getCsrfProtectionTokenFormParam());
    }
}