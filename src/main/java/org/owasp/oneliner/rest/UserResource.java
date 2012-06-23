package org.owasp.oneliner.rest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.authentication.UserDataBase;
import org.owasp.oneliner.exceptions.NoSuchUserException;
import org.owasp.oneliner.user.User;
import org.owasp.oneliner.user.UserFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Author: @johnwilander
 * Date: 2010-nov-06
 */
@Path("/user")
@Component
public class UserResource {
	private static final Log logger = LogFactory.getLog(UserResource.class);

    @Resource
    private UserDataBase userDataBase;
    @Resource
    private UserFactory userFactory;

    @GET
    @Path("/{userName}")
    @Produces({MediaType.APPLICATION_JSON})
    public Response getUser(@PathParam("userName") String userName) throws NoSuchUserException {
        User user = userDataBase.getUserByUserName(userName);
        if (user != null) {
            return Response.ok(user).build();
        } else {
            return Response.ok(new BooleanStatus(false)).build();
        }
    }

	@PUT
    @Path("/{userName}")
    @Produces({MediaType.APPLICATION_JSON})
	public Response newUser(
            @PathParam("userName") String userName,
            @QueryParam("nickName") @DefaultValue("Anonymous") String nickName,
            @QueryParam("password") String password
                         ) {
        return Response.ok(new BooleanStatus(userDataBase.addUser(userFactory.createUser(userName, nickName, password)))).build();
	}

    @GET
    @Path("/token")
    @Produces({MediaType.APPLICATION_JSON})
    public Response getCsrfProtectionToken(@Context HttpServletResponse servletResponse) {
        logger.info("Call to getCsrfProtectionToken()");
        return Response.ok(new BooleanStatus(true)).build();
    }

    @GET
    @Path("/{userName}/friends")
    @Produces({MediaType.APPLICATION_JSON})
    public Response getFriends(@PathParam("userName") String userName) throws NoSuchUserException {
        User user = userDataBase.getUserByUserName(userName);
        if (user != null) {
            return Response.ok(user).build();
        } else {
            return Response.ok(new BooleanStatus(false)).build();
        }
    }
}