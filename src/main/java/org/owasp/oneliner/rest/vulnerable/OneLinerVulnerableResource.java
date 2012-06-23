package org.owasp.oneliner.rest.vulnerable;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.oneLiner.DbSize;
import org.owasp.oneliner.oneLiner.OneLiner;
import org.owasp.oneliner.oneLiner.OneLinerFactory;
import org.owasp.oneliner.persistence.OneLinerDb;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Author: @johnwilander
 * Date: 2010-12-12
 */
@Path("/vulnerable/oneliners")
@Component
public class OneLinerVulnerableResource {
    private static final Log logger = LogFactory.getLog(OneLinerVulnerableResource.class);

    private static final int MAX_NUMBER_OF_ONE_LINERS_TO_RETRIEVE = 20;

    @Resource
    private OneLinerDb oneLinerDb;
    @Resource
    private OneLinerFactory oneLinerFactory;

    @GET
    @Path("/size")
    @Produces({MediaType.APPLICATION_JSON})
    public Response getNumberOfOneLiners(
            @Context HttpServletResponse response)
    {
        setNoCache(response);
        DbSize dbSize = oneLinerDb.getNumberOfOneliners();
        GenericEntity entity = new GenericEntity<DbSize>(dbSize) {};
        return Response.ok(entity).build();
    }

    @GET
    @Path("/{numberOfOneLiners}")
    @Produces({MediaType.APPLICATION_JSON})
    public Response getLatestOneLiners(
            @DefaultValue(MAX_NUMBER_OF_ONE_LINERS_TO_RETRIEVE+"") @PathParam("numberOfOneLiners") int numberOfOneLiners,
            @Context HttpServletResponse response)
    {
        setNoCache(response);
        if(numberOfOneLiners < 1 || numberOfOneLiners > MAX_NUMBER_OF_ONE_LINERS_TO_RETRIEVE) {
            logger.warn("Specified number of one liners not OK. Number of one liners = " + numberOfOneLiners);
            return Response.status(Response.Status.BAD_REQUEST).build();
        } else {
            List<OneLiner> result = oneLinerDb.getLatestOneLiners(numberOfOneLiners);
            if (logger.isDebugEnabled()) {
                logger.debug("Returning list of one liners, size = " + result.size());
                for (OneLiner oneLiner : result) {
                    logger.debug(oneLiner);
                }
            }
            GenericEntity entity = new GenericEntity<List<OneLiner>>(result) {};
            return Response.ok(entity).build();
        }
    }

    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    public Response putNewOneLiner(@CookieParam("nickNameVulnerable") String nickName,
                                   List<OneLiner> oneLiners) {
        try {
            for (OneLiner oneLiner : oneLiners) {
                if(nickName != null && oneLiner != null) {
                    oneLiner.setNickName(nickName);  // Should be real session handling and userid lookup server-side :)
                    oneLinerDb.putOneLiner(oneLiner);
                    if (logger.isDebugEnabled()) { logger.debug("Added one line: " + oneLiner); }
                    return Response.status(Response.Status.CREATED).build();
                } else {
                    logger.warn("One liner data not OK, nicknames don't match. Nickname cookie = " + nickName +
                            (oneLiner != null ? ", nickname in one liner = " + oneLiner.getNickName() : ", one liner = " + oneLiner));
                    return Response.status(Response.Status.BAD_REQUEST).build();
                }
            }
        } catch (IllegalArgumentException e) {
            logger.warn("One liner data not OK. Nickname = " + nickName);
            return Response.status(Response.Status.BAD_REQUEST).build();
        } catch (Exception e) {
            logger.error("One liner data not OK. Nickname = " + nickName + ". Exception: " + e.toString());
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
        return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
    }

    @POST
    public Response putNewOneLinerText(@CookieParam("nickNameVulnerable") String nickName,
                                       String oneLinerJson) {
        try {
            OneLiner oneLiner = oneLinerFactory.createOneLiner(oneLinerJson);
            if(nickName != null && oneLiner != null) {
                oneLiner.setNickName(nickName);  // Should be real session handling and userid lookup server-side :)
                oneLinerDb.putOneLiner(oneLiner);
                if (logger.isDebugEnabled()) { logger.debug("Added one line: " + oneLiner); }
                return Response.status(Response.Status.CREATED).build();
            } else {
                logger.warn("One liner data not OK, nicknames don't match. Nickname cookie = " + nickName +
                        (oneLiner != null ? ", nickname in one liner = " + oneLiner.getNickName() : ", one liner = " + oneLiner));
                return Response.status(Response.Status.BAD_REQUEST).build();
            }
        } catch (IllegalArgumentException e) {
            logger.warn("One liner data not OK. Nickname = " + nickName);
            return Response.status(Response.Status.BAD_REQUEST).build();
        } catch (Exception e) {
            logger.error("One liner data not OK. Nickname = " + nickName + ". Exception: " + e.toString());
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }

    @POST
    @Path("/reset")
    public void resetOneLinerList() {
        oneLinerDb.initializeOneLinerDb();
        if (logger.isDebugEnabled()) { logger.debug("One liner DB reset"); }
    }

    private void setNoCache(HttpServletResponse response) {
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
    }


    // For testing
    void setOneLinerDb(OneLinerDb oneLinerDb) {
        this.oneLinerDb = oneLinerDb;
    }
    void setOneLinerFactory(OneLinerFactory oneLinerFactory) {
        this.oneLinerFactory = oneLinerFactory;
    }

}
