package org.owasp.oneliner.authentication;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.exceptions.NoSuchUserException;
import org.owasp.oneliner.user.User;

import java.util.HashSet;
import java.util.Set;

/**
 * Author: @johnwilander
 * Date: 2010-nov-06
 */
public class UserDataBase {
    private static final Log logger = LogFactory.getLog(UserDataBase.class);
    private final Set<User> userSet = new HashSet<User>();

    public UserDataBase() {}

    public UserDataBase(Set<User> initialUsers) {
        userSet.addAll(initialUsers);
    }

    public boolean addUser(User user) {
        boolean wasAdded;
        synchronized (userSet) {
            wasAdded = userSet.add(user);
        }
        if (!wasAdded) {
            logger.info("User " + user + " was already present in the database.");
        }
        return wasAdded;
    }

    public User getUserByUserName(String userName) throws NoSuchUserException {
        for (User user : userSet) {
            if (user.getUserName().equals(userName)) {
                return user;
            }
        }
        throw NoSuchUserException.NO_SUCH_USER;
    }
}
