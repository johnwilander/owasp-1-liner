package org.owasp.oneliner.user;

import org.owasp.oneliner.password.HashedPassword;
import org.owasp.oneliner.password.HashedPasswordFactory;

import javax.annotation.Resource;

/**
 * Author: @johnwilander
 * Date: 2010-12-18
 */
public class UserFactory {
    @Resource
    HashedPasswordFactory hashedPasswordFactory;

    public User createUser(String userName, String nickName, String password) {
        return createUser(userName, nickName, hashedPasswordFactory.createHashedPassword(password));
    }

    public User createUser(String userName, String nickName, HashedPassword hashedPassword) {
        return new User(userName, nickName, hashedPassword);
    }
}
