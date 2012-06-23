package org.owasp.oneliner.exceptions;

/**
 * Author: @johnwilander
 * Date: 2010-12-18
 */
public class NoSuchUserException extends Exception {
    public static final NoSuchUserException NO_SUCH_USER = new NoSuchUserException("No such user");

    public NoSuchUserException(String message) {
        super(message);
    }
}
