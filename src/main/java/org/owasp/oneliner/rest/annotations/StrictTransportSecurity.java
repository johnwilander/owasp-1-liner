package org.owasp.oneliner.rest.annotations;

import java.lang.annotation.*;

/**
 * Author: @johnwilander
 * Date: 2010-nov-15
 */
@Inherited
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface StrictTransportSecurity { }
