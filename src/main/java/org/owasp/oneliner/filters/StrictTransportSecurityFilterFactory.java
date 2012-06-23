package org.owasp.oneliner.filters;

import com.sun.jersey.api.model.AbstractMethod;
import com.sun.jersey.spi.container.ResourceFilter;
import com.sun.jersey.spi.container.ResourceFilterFactory;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.rest.annotations.StrictTransportSecurity;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.Context;
import java.util.Collections;
import java.util.List;

/**
 * Author: @johnwilander
 * Date: 2010-nov-15
 */
public class StrictTransportSecurityFilterFactory implements ResourceFilterFactory {
    private static final Log logger = LogFactory.getLog(StrictTransportSecurityFilterFactory.class);
    private final HttpServletResponse httpServletResponse;

    public StrictTransportSecurityFilterFactory(@Context HttpServletResponse httpServletResponse) {
        this.httpServletResponse = httpServletResponse;
    }

    public List<ResourceFilter> create(AbstractMethod am) {
        if (am.isAnnotationPresent(StrictTransportSecurity.class)) {
            StrictTransportSecurity strictTransportSecurity = am.getAnnotation(StrictTransportSecurity.class);
            logger.info("Adding StrictTransportSecurityFilter to: " + am.getMethod());
            return Collections.<ResourceFilter>singletonList(new StrictTransportSecurityFilter(httpServletResponse));
        } else {
            return null;
        }
    }

}
