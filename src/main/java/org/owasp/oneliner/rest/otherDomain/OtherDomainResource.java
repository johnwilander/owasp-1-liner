package org.owasp.oneliner.rest.otherDomain;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
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
    @Path("/cors")
    public Response cors() {
        GenericEntity entity = new GenericEntity<String>("From another domain") {};
        return Response.ok(entity, MediaType.TEXT_PLAIN_TYPE).build();
    }

}
