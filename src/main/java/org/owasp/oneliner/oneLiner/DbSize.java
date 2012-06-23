package org.owasp.oneliner.oneLiner;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

/**
 * User: jovi04 Date: 2011-10-14
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement
public class DbSize {
    private int size;
    private Date timeStamp;

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    @Override
    public String toString() {
        return "DbSize{" +
                "size=" + size +
                ", timeStamp=" + timeStamp +
                '}';
    }

    public DbSize(int size) {
        this.size = size;
        this.timeStamp = new Date();
    }

    public DbSize() {};  // Here for JAXB
}
