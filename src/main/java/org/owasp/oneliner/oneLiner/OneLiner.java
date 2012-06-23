package org.owasp.oneliner.oneLiner;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

/**
 * Author: @johnwilander
 * Date: 2010-12-12
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement
public class OneLiner {
    protected int id;
    protected String nickName;
    protected String oneLiner;
    protected Date timestamp;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getOneLiner() {
        return oneLiner;
    }

    public void setOneLiner(String oneLiner) {
        this.oneLiner = oneLiner;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    OneLiner(int id, String nickName, String oneLiner, Date timestamp) throws IllegalArgumentException {
        if (nickOK(nickName) && oneLinerOK(oneLiner)) {
            this.id = id;
            this.nickName = nickName;
            this.oneLiner = oneLiner;
            this.timestamp = timestamp;
        } else {
            throw new IllegalArgumentException();
        }
    }

    public OneLiner() { } // Here for JAX-B

    private boolean nickOK(String nickName) {
        final int MAX_NICK_NAME_SIZE = 32;
        return (nickName != null && !"".equals(nickName) && nickName.length() <= MAX_NICK_NAME_SIZE);
    }

    private boolean oneLinerOK(String oneLiner) {
        final int MAX_ONE_LINER_SIZE = 160;
        return (oneLiner != null && !"".equals(oneLiner) && oneLiner.length() <= MAX_ONE_LINER_SIZE);
    }

    @Override
    public boolean equals(Object other) {
        if (other instanceof OneLiner) {
            OneLiner otherOneLiner = (OneLiner)other;
            return id == otherOneLiner.id &&
                    nickName != null && nickName.equals(otherOneLiner.nickName) &&
                    oneLiner != null && oneLiner.equals(otherOneLiner.oneLiner);
        } else {
            return false;
        }
    }

    @Override
    public String toString() {
        return "{" + id + " " + nickName + ":" + oneLiner + ":" + timestamp + "}";
    }
}
