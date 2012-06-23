package org.owasp.oneliner.rest.annotations;

import java.lang.annotation.*;

/**
 * Author: @johnwilander
 * Date: 2010-nov-06
 */
@Inherited
@Target({ElementType.METHOD})  // This annotation can only be applied to class methods
@Retention(RetentionPolicy.RUNTIME)  // Make this annotation accessible at runtime via reflection
public @interface CsrfProtection {}


