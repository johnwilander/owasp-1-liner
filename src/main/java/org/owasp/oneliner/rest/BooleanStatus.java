package org.owasp.oneliner.rest;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Author: @johnwilander
 * Date: 2010-nov-06
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement
public class BooleanStatus {
    private boolean status;
    public BooleanStatus() { /* Here for JAXB's sake */ }

    public BooleanStatus(boolean status) {
        this.status = status;
    }

    public boolean getStatus() {
        return status;
    }
}
