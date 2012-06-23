package org.owasp.oneliner.oneLiner;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.owasp.validator.html.AntiSamy;
import org.owasp.validator.html.Policy;
import org.owasp.validator.html.PolicyException;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.Date;

/**
 * Author: @johnwilander
 * Date: 2010-12-14
 */
public class OneLinerFactory {
    private static final Log logger = LogFactory.getLog(OneLinerFactory.class);

    @Resource
    private ObjectMapper objectMapper;

    public OneLiner createOneLiner(String nickName, String oneLiner, Date timestamp) {
        return new OneLiner(-1, nickName, oneLiner, timestamp);  // OneLinerDb responsible for oneliner IDs, hence -1
    }

    public OneLiner createOneLiner(String nickName, String oneLiner) {
        return new OneLiner(-1, nickName, oneLiner, new Date());  // OneLinerDb responsible for oneliner IDs, hence -1
    }

    public OneLiner createOneLiner(String oneLinerJson) {
        try {
            if(logger.isDebugEnabled()) { logger.debug(oneLinerJson); }
            return objectMapper.readValue(oneLinerJson, OneLiner.class);
        } catch (JsonMappingException e) {
            logger.warn("Could not map JSON to OneLiner", e);
            throw new IllegalArgumentException(e);
        } catch (JsonParseException e) {
            logger.warn("Could not parse JSON", e);
            throw new IllegalArgumentException(e);
        } catch (IOException e) {
            logger.warn("Could not parse JSON due to IO problems", e);
            throw new IllegalArgumentException(e);
        }
    }
}
