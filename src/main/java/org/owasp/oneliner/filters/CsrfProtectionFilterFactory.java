package org.owasp.oneliner.filters;

import com.sun.jersey.api.model.AbstractMethod;
import com.sun.jersey.spi.container.ResourceFilter;
import com.sun.jersey.spi.container.ResourceFilterFactory;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.rest.annotations.CsrfProtection;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Context;
import java.util.Collections;
import java.util.List;

/**
 * Author: @johnwilander
 * Date: 2010-nov-06
 */
public class CsrfProtectionFilterFactory implements ResourceFilterFactory {
    private static final Log logger = LogFactory.getLog(CsrfProtectionFilterFactory.class);
    private final HttpServletRequest httpServletRequest;

    public CsrfProtectionFilterFactory(@Context HttpServletRequest httpServletRequest) {
        this.httpServletRequest = httpServletRequest;
    }

    public List<ResourceFilter> create(AbstractMethod am) {
        if (am.isAnnotationPresent(CsrfProtection.class)) {
            CsrfProtection csrfProtection = am.getAnnotation(CsrfProtection.class);
            logger.info("Adding CsrfProtectionFilter to: " + am.getMethod());
            return Collections.<ResourceFilter>singletonList(new CsrfProtectionFilter(httpServletRequest));
        } else {
            return null;
        }
    }
}
