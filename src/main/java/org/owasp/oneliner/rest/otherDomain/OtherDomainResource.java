package org.owasp.oneliner.rest.otherDomain;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @johnwilander
 */
@Path("/")
@Component
public class OtherDomainResource {
    private static final Log logger = LogFactory.getLog(OtherDomainResource.class);
    private static final String jsonpBody = "{\"data\": \"nothing\"}";

    @GET
    @Path("/jsonpBenign")
    public Response jsonpBenign(@QueryParam("callback") String callback) {
        GenericEntity entity = new GenericEntity<String>(callback + "(" + jsonpBody + ");") {};
        return Response.ok(entity, MediaType.APPLICATION_JSON_TYPE).build();
    }

    @GET
    @Path("/corsGet")
    public Response corsGet() {
        if (logger.isDebugEnabled()) { logger.debug("CORS GET resource called"); }
        GenericEntity entity = new GenericEntity<String>("From another domain") {};
        Response.ResponseBuilder responseBuilder = Response.ok(entity, MediaType.TEXT_PLAIN_TYPE);
        responseBuilder.header("Access-Control-Allow-Origin", "https://local.1-liner.org:8444");
        return responseBuilder.build();
    }

    @POST
    @Path("/corsPost")
    public Response corsPost() {
        if (logger.isDebugEnabled()) { logger.debug("CORS POST resource called"); }
        Response.ResponseBuilder responseBuilder = Response.ok();
        responseBuilder.header("Access-Control-Allow-Origin", "https://local.1-liner.org:8444");
        return responseBuilder.build();
    }

    @POST
    @Path("/non-corsPost")
    public Response nonCorsPost() {
        if (logger.isDebugEnabled()) { logger.debug("Non-CORS POST resource called"); }
        Response.ResponseBuilder responseBuilder = Response.ok();
        return responseBuilder.build();
    }

    @POST
    @Path("/non-corsPostCheckOrigin")
    public Response nonCorsPostCheckOrigin(@Context HttpServletRequest request) {
        Response.ResponseBuilder responseBuilder;

        // Check that calls are only made from our own origin
        // For Jetty 7+ we should use the provided filter: http://wiki.eclipse.org/Jetty/Feature/Cross_Origin_Filter
        if (request.getHeader("Origin").equals("https://other.1-liner.org:8444")) {
            if (logger.isDebugEnabled()) { logger.debug("Non-CORS POST resource called, origin OK"); }
            responseBuilder = Response.ok();
        } else {
            if (logger.isDebugEnabled()) { logger.debug("Non-CORS POST resource called, bad origin, returning UNAUTHORIZED"); }
            responseBuilder = Response.status(Response.Status.UNAUTHORIZED);
        }

        return responseBuilder.build();
    }
}
