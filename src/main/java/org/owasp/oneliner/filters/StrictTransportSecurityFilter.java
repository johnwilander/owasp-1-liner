package org.owasp.oneliner.filters;

import com.sun.jersey.spi.container.*;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.Response;

/**
 * Author: @johnwilander
 * Date: 2010-nov-15
 */
public class StrictTransportSecurityFilter implements ResourceFilter, ContainerResponseFilter {
    private static final Log logger = LogFactory.getLog(StrictTransportSecurityFilter.class);
    private HttpServletResponse httpServletResponse;

    public StrictTransportSecurityFilter(HttpServletResponse httpServletResponse) {
        this.httpServletResponse = httpServletResponse;
    }

    public ContainerResponse filter(ContainerRequest request, ContainerResponse response) {
        logger.info("filter");
        Response.ResponseBuilder responseBuilder = Response.ok();
        responseBuilder.header("Strict-Transport-Security", "max-age=5");
        response.setResponse(responseBuilder.build());
        return response;
    }

    public ContainerRequestFilter getRequestFilter() {
        return null;  // No request filtering
    }

    public ContainerResponseFilter getResponseFilter() {
        return this;
    }
}
