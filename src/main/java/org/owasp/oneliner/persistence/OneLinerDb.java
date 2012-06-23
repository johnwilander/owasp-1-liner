package org.owasp.oneliner.persistence;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.owasp.oneliner.oneLiner.DbSize;
import org.owasp.oneliner.oneLiner.OneLiner;

import java.util.ArrayList;
import java.util.List;

/**
 * Author: @johnwilander
 * Date: 2010-12-12
 */
public class OneLinerDb {
    private static final Log logger = LogFactory.getLog(OneLinerDb.class);
    private List<OneLiner> initialList;
    private List<OneLiner> oneLiners;

    public List<OneLiner> getLatestOneLiners(int maxNumber) {
        if (logger.isDebugEnabled()) { logger.debug("Getting latest one liners. DB size = " + oneLiners.size()); }
        if (maxNumber >= oneLiners.size()) {
            return oneLiners;
        } else {
            int endIndex = oneLiners.size() - 1;
            return oneLiners.subList(endIndex - maxNumber, endIndex);
        }
    }

    public DbSize getNumberOfOneliners() {
        return new DbSize(oneLiners.size());
    }

    public void putOneLiner(OneLiner newOneLiner) {
        if (logger.isDebugEnabled()) { logger.debug("Putting a new one liner."); }
        synchronized (oneLiners) {
            newOneLiner.setId(oneLiners.size() + 1); // Here the oneliner gets its ID
            oneLiners.add(newOneLiner);
        }
    }

    public OneLinerDb(List<OneLiner> initialList) {
        this.initialList = initialList;
        oneLiners = new ArrayList<OneLiner>();
        oneLiners.addAll(initialList);
        int id = 1;
        for (OneLiner oneLiner : oneLiners) {
            oneLiner.setId(id++);
        }
    }

    public void initializeOneLinerDb() {
        synchronized (oneLiners) {
            oneLiners = new ArrayList<OneLiner>();
            oneLiners.addAll(initialList);
        }
    }
}
