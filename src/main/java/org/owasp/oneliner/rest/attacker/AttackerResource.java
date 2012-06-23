package org.owasp.oneliner.rest.attacker;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

/**
 * @johnwilander
 */
@Path("/attacker")
@Component
public class AttackerResource {
    private static final Log logger = LogFactory.getLog(AttackerResource.class);

    @GET
    @Path("/log")
    public Response log(@QueryParam("k") String key) {
        logger.debug(key);
        return Response.ok().build();
    }
}
