package org.owasp.oneliner.oneLiner;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.validator.html.AntiSamy;
import org.owasp.validator.html.Policy;
import org.owasp.validator.html.PolicyException;
import org.owasp.validator.html.ScanException;

import java.util.Date;

/**
 * Author: @johnwilander
 * Date: 2010-12-14
 */
public class OneLinerSecurish extends OneLiner {
    private static final Log logger = LogFactory.getLog(OneLinerSecurish.class);

    // int id, String nickName, String oneLiner, Date timestamp
    OneLinerSecurish(int id, String nickName, String oneLiner, Date timestamp, AntiSamy antiSamy, Policy policy) throws IllegalArgumentException {
        super(id, nickName, oneLiner, timestamp);
        try {

            this.nickName = antiSamy.scan(this.nickName, policy).getCleanHTML();
            this.oneLiner = antiSamy.scan(this.oneLiner, policy).getCleanHTML();

        } catch (ScanException e) {
            logger.error("Could not scan input data. Clearing nick name and one liner");
            this.nickName = "";
            this.oneLiner = "";
        } catch (PolicyException e) {
            logger.error("Got a policy exception during scan of input data. Clearing nick name and one liner");
            this.nickName = "";
            this.oneLiner = "";
        }
    }
}

/*
    Note: This class uses the OWASP AntiSamy for filtering and encoding HTML output. Check it out:
    http://www.owasp.org/index.php/Category:OWASP_AntiSamy_Project
    http://code.google.com/p/owaspantisamy/downloads/list
 */
