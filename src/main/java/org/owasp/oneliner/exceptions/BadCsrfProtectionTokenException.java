package org.owasp.oneliner.exceptions;

import javax.ws.rs.core.Response;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Author: @johnwilander
 * Date: 2010-nov-07
 */
public class BadCsrfProtectionTokenException extends RuntimeException {

    public static final BadCsrfProtectionTokenException INSTANCE = new BadCsrfProtectionTokenException();
    public final ReasonWrapper reasonWrapper;
    public final Reason reason;

    private BadCsrfProtectionTokenException() {
        this.reason = Reason.FORBIDDEN;
        this.reasonWrapper = new ReasonWrapper(reason);
        this.setStackTrace(new StackTraceElement[]{});  // Empty stack trace since this is a signaling exception
    }

    public enum Reason {
        FORBIDDEN (Response.Status.FORBIDDEN);

        public final Response.Status status;
        Reason(Response.Status status) {
            this.status = status;
        }
    }

    @XmlRootElement
    public static class ReasonWrapper {
        public final Reason reason;
        public ReasonWrapper(Reason reason) { this.reason = reason; }
        private ReasonWrapper() { this.reason = null; } // here for JAXB
    }
}
