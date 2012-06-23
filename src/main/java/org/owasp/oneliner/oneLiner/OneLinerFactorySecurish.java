package org.owasp.oneliner.oneLiner;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.validator.html.AntiSamy;
import org.owasp.validator.html.Policy;
import org.owasp.validator.html.PolicyException;

import java.util.Date;

/**
 * Author: @johnwilander
 * Date: 2010-12-14
 */
public class OneLinerFactorySecurish {
    private static final Log logger = LogFactory.getLog(OneLinerFactorySecurish.class);

    private AntiSamy antiSamy;

    public OneLinerSecurish createSecureOneLiner(String nickName, String oneLiner, Date timestamp) {
        return new OneLinerSecurish(-1, nickName, oneLiner, timestamp, antiSamy, policy);    // OneLinerDb responsible for oneliner IDs, hence -1
    }

    public OneLinerSecurish createSecureOneLiner(String nickName, String oneLiner) {
        return new OneLinerSecurish(-1, nickName, oneLiner, new Date(), antiSamy, policy);    // OneLinerDb responsible for oneliner IDs, hence -1
    }

    public void setAntiSamy(AntiSamy antiSamy) {
        this.antiSamy = antiSamy;
    }

    private static final String POLICY_FILE_LOCATION = "src/main/resources/antisamy-slashdot-1.4.2.xml";
    private static Policy policy;
    static {
        try {
            policy = Policy.getInstance(POLICY_FILE_LOCATION);
            policy.getClass();
            logger.debug(policy.toString());
        } catch (PolicyException e) {
            logger.fatal("Could not load AntiSamy policy file at location " + POLICY_FILE_LOCATION);
        }
    }

}
