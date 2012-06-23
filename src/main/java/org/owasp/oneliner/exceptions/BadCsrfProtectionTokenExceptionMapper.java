package org.owasp.oneliner.exceptions;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 * Author: @johnwilander
 * Date: 2010-nov-07
 */
@Component
@Provider
public class BadCsrfProtectionTokenExceptionMapper implements ExceptionMapper<BadCsrfProtectionTokenException> {
    private static final Log logger = LogFactory.getLog(BadCsrfProtectionTokenExceptionMapper.class);

    public Response toResponse(BadCsrfProtectionTokenException e) {
        logger.info("Mapping [" + e.getClass() + "] to response via BadCsrfProtectionTokenExceptionMapper.", e);
        return Response.status(
                e.reason.status)
                .entity(e.reasonWrapper)
                .type(MediaType.APPLICATION_JSON_TYPE)
                .build();
    }
}
