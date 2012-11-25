package org.owasp.oneliner.rest.otherDomain;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.servlet.http.Cookie;
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
    private static final String jsonpBody = "{\"data\": \"someData\"}";

    @GET
    @Path("/jsonpBenign")
    public Response jsonpBenign(@QueryParam("callback") String callback) {
        GenericEntity entity = new GenericEntity<String>(callback + "(" + jsonpBody + ");") {};
        return Response.ok(entity, MediaType.APPLICATION_JSON_TYPE).build();
    }

    @GET
    @Path("/corsGet")
    public Response corsGet(@Context HttpServletRequest request) {
        if (logger.isDebugEnabled()) { logger.debug("CORS GET resource called, cookies: " + allCookiesAsString(request)); }

        GenericEntity entity = new GenericEntity<String>("From another domain") {};
        Response.ResponseBuilder responseBuilder = Response.ok(entity, MediaType.TEXT_PLAIN_TYPE);
        responseBuilder.header("Access-Control-Allow-Origin", AllowedCorsOrigin.LOCAL_1_LINER.origin);
        return responseBuilder.build();
    }

    // http://www.w3.org/2011/webappsec/cors-draft/#access-control-allow-origin-response-header:
    // Note: In practice the origin-list-or-null production is more constrained. Rather than allowing a space-separated
    // list of origins, it is either a single origin or the string "null".

    // http://lists.w3.org/Archives/Public/public-webapps/2009JulSep/1251.html:
    // > When we used this syntax for the Sec-From header, Mark Nottingham
    // > advocated using commas to separate the origins to better align with
    // > other HTTP headers.
    //
    // That would also allow multiple headers to be used I think. Since
    // Access-Control-Allow-Origin needs to have an identical value to the Origin
    // header I do not think that would work well. Well, it would probably work,
    // but would make all the processing a lot more complicated than it needs to
    // be. (I'd prefer it to just be a simple string comparison.)

    // http://www.w3.org/TR/html-design-principles/#priority-of-constituencies:
    // In case of conflict, consider users over authors over implementors over specifiers over theoretical purity. In
    // other words costs or difficulties to the user should be given more weight than costs to authors; which in turn
    // should be given more weight than costs to implementors; which should be given more weight than costs to authors
    // of the spec itself, which should be given more weight than those proposing changes for theoretical reasons
    // alone. Of course, it is preferred to make things better for multiple constituencies at once.
    @GET
    @Path("/corsGetMultipleAllowedOrigins")
    public Response corsGetMultipleAllowedOrigins(@Context HttpServletRequest request) {
        if (logger.isDebugEnabled()) { logger.debug("CORS GET resource called, multiple origins allowed: " + AllowedCorsOrigin.getAllAsString() + ", cookies: " + allCookiesAsString(request)); }
        GenericEntity entity = new GenericEntity<String>("From another domain") {};
        // Does not check request origin
        Response.ResponseBuilder responseBuilder = Response.ok(entity, MediaType.TEXT_PLAIN_TYPE);
        responseBuilder.header("Access-Control-Allow-Origin", AllowedCorsOrigin.getAllAsString());
        return responseBuilder.build();
    }

    @POST
    @Path("/corsPost")
    public Response corsPost(@Context HttpServletRequest request) {
        if (logger.isDebugEnabled()) { logger.debug("CORS POST resource called, cookies: " + allCookiesAsString(request)); }
        // Does not check request origin
        Response.ResponseBuilder responseBuilder = Response.ok();
        responseBuilder.header("Access-Control-Allow-Origin", AllowedCorsOrigin.LOCAL_1_LINER.origin);
        return responseBuilder.build();
    }

    @POST
    @Path("/non-corsPost")
    public Response nonCorsPost(@Context HttpServletRequest request) {
        if (logger.isDebugEnabled()) { logger.debug("Non-CORS POST resource called, cookies: " + allCookiesAsString(request)); }
        // Does not check request origin
        Response.ResponseBuilder responseBuilder = Response.ok();
        return responseBuilder.build();
    }

    @POST
    @Path("/non-corsPostCheckOrigin")
    public Response nonCorsPostCheckOrigin(@Context HttpServletRequest request) {
        Response.ResponseBuilder responseBuilder;

        // Check that calls are only made from our own origin
        // For Jetty 7+ we should use the provided filter: http://wiki.eclipse.org/Jetty/Feature/Cross_Origin_Filter
        if (AllowedCorsOrigin.LOCAL_1_LINER.origin.equals(request.getHeader("Origin"))) {
            if (logger.isDebugEnabled()) { logger.debug("Non-CORS POST resource called, origin is myself which is OK, cookies: " + allCookiesAsString(request)); }
            responseBuilder = Response.ok();
        } else {
            if (logger.isDebugEnabled()) { logger.debug("Non-CORS POST resource called, bad origin, returning UNAUTHORIZED, cookies: " + allCookiesAsString(request)); }
            responseBuilder = Response.status(Response.Status.UNAUTHORIZED);
        }

        return responseBuilder.build();
    }

    private String allCookiesAsString(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null || cookies.length == 0) {
            return "";
        } else {
            StringBuilder stringBuilder = new StringBuilder();
            boolean firstCookie = true;
            for (Cookie cookie : cookies) {
                if(firstCookie) {
                    firstCookie = false;
                } else {
                    stringBuilder.append(", ");
                }
                stringBuilder.append(cookie.getName() + ": " + cookie.getValue());
            }
            return stringBuilder.toString();
        }
    }

    private enum AllowedCorsOrigin {
        LOCAL_1_LINER("http://local.1-liner.org:8081"), OTHER_1_LINER("http://local.1-liner.org:8081");

        public static final String ORIGIN_SEPARATOR = " ";
        public final String origin;
        private AllowedCorsOrigin(String origin) {
            this.origin = origin;
        }

        public static boolean contains(String origin) {
            for (AllowedCorsOrigin allowedOrigin : AllowedCorsOrigin.values()) {
                if (allowedOrigin.origin.equals(origin)) {
                    return true;
                }
            }
            return false;
        }

        static final String ALL_ORIGINS_AS_STRING;
        static {
            StringBuilder stringBuilder = new StringBuilder();
            for (AllowedCorsOrigin allowedOrigin : AllowedCorsOrigin.values()) {
                if (stringBuilder.length() == 0) {
                    stringBuilder.append(allowedOrigin.origin);
                } else {
                    stringBuilder.append(ORIGIN_SEPARATOR).append(allowedOrigin.origin);
                }
            }
            ALL_ORIGINS_AS_STRING = stringBuilder.toString();
        }

        public static String getAllAsString() {
            return ALL_ORIGINS_AS_STRING;
        }
    }
}
