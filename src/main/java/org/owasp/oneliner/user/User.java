package org.owasp.oneliner.user;

import org.owasp.oneliner.password.HashedPassword;
import org.owasp.oneliner.session.SessionId;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

/**
 * Author: @johnwilander
 * Date: 2010-nov-06
 */
@XmlAccessorType(XmlAccessType.PUBLIC_MEMBER)
@XmlRootElement
public class User {
    public final String userName;
    public final String nickName;
    private HashedPassword hashedPassword;
    private SessionId sessionId;

    // Package default to give access to factory class only
    User(String userName, String nickName, HashedPassword hashedPassword) {
        this.userName = userName;
        this.nickName = nickName;
        this.hashedPassword = hashedPassword;
    }

    @Override
    public String toString() {
        return userName + ":" + nickName;
    }

    public String getUserName() {
        return userName;
    }

    public String getNickName() {
        return nickName;
    }

    public HashedPassword getHashedPassword() {
        return hashedPassword;
    }

    public SessionId getSessionId() {
        return sessionId;
    }

    public void setSessionId(SessionId sessionId) {
        this.sessionId = sessionId;
    }

    public boolean hasActiveSession() {
        Date now = new Date();
        return now.before(sessionId.expires()) && now.after(sessionId.starts());
    }

    // Here for JAXB
    public User() {
        this.userName = null;
        this.nickName = null;
    }
}
