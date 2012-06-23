package org.owasp.oneliner.exceptions;

/**
 * Author: @johnwilander
 * Date: 2010-12-18
 */
public class AuthenticationException extends Exception {
    public static final AuthenticationException INTERNAL_ERROR =
            new AuthenticationException("Could not authenticate due to an internal error");
    public static final AuthenticationException UNKNOWN_USER_NAME_OR_PASSWORD =
            new AuthenticationException("Wrong user name or password");

    // SecBug: Information leakage
    public static final AuthenticationException UNKNOWN_USER_NAME =
            new AuthenticationException("Wrong user name");
    public static final AuthenticationException NOT_AUTHENTICATED =
            new AuthenticationException("Authentication failed");

    private AuthenticationException (String message) {
        super(message);
        this.setStackTrace(new StackTraceElement[0]);  // No stack trace needed
    }
}
