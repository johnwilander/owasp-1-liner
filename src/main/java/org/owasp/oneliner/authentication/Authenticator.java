package org.owasp.oneliner.authentication;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.exceptions.AuthenticationException;
import org.owasp.oneliner.exceptions.NoSuchUserException;
import org.owasp.oneliner.password.HashedPassword;
import org.owasp.oneliner.password.HashedPasswordFactory;
import org.owasp.oneliner.user.User;

import javax.annotation.Resource;

/**
 * Author: @johnwilander
 * Date: 2010-dec-05
 */
public class Authenticator {
    private static final Log logger = LogFactory.getLog(Authenticator.class);

    @Resource
    private UserDataBase userDataBase;
    @Resource
    private HashedPasswordFactory hashedPasswordFactory;

    public User authenticate(String userName, String suppliedPassword) throws AuthenticationException {
        User user;
        try {
            user = userDataBase.getUserByUserName(userName);
        } catch (NoSuchUserException e) {
            logger.info("No such user: " + userName);
            // SecBug: Information leakage
            // throw AuthenticationException.UNKNOWN_USER_NAME;
            throw AuthenticationException.UNKNOWN_USER_NAME_OR_PASSWORD;
        }
        HashedPassword realHashedPassword = user.getHashedPassword();
        HashedPassword suppliedHashedPassword = hashedPasswordFactory.createHashedPassword(suppliedPassword, realHashedPassword.getSalt());
        boolean successfulLogin = realHashedPassword.equals(suppliedHashedPassword);
        if(successfulLogin) {
            logger.debug("Successful login of user " + userName);
            return user;
        } else {
            logger.debug("Unsuccessful login of user " + userName);
            // SecBug: Information leakage
            // throw AuthenticationException.NOT_AUTHENTICATED;
            throw AuthenticationException.UNKNOWN_USER_NAME_OR_PASSWORD;
        }
    }
}
