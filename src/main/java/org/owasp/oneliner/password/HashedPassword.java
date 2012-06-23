package org.owasp.oneliner.password;

/**
 * Author: @johnwilander
 * Date: 2010-dec-05
 */
public class HashedPassword {
    private final String hashedPassword;
    private final long salt;

    // Package default to give access to factory class only
    HashedPassword(String hashedPassword, long salt) {
        this.salt = salt;
        this.hashedPassword = hashedPassword;
    }

    public long getSalt() {
        return salt;
    }

    public boolean equals(Object other) {
        if (!(other instanceof HashedPassword)) {
            return false;
        } else {
            HashedPassword otherHashedPassword = (HashedPassword)other;
            return hashedPassword.equals(otherHashedPassword.hashedPassword) &&
                    salt == otherHashedPassword.salt;
        }
    }
}
