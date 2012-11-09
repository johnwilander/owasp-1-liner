<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ page import="javax.servlet.http.Cookie" %>
<%@ page import="org.owasp.oneliner.util.RandomAlphaNumericString" %>
<%@ page import="org.owasp.oneliner.filters.CsrfProtectionFilter" %>

<%  // Triple submit cookie. Comment out if you want double submit
    //String randomName = new RandomAlphaNumericString(CsrfProtectionFilter.RANDOM_COOKIE_NAME_LENGTH).toString();
    //String randomValue = new RandomAlphaNumericString(CsrfProtectionFilter.RANDOM_COOKIE_VALUE_LENGTH).toString();
    String randomValue = "noTripleCommit";
    //response.addHeader("Set-Cookie", randomName + "=" + randomValue + "; HttpOnly; path=/; domain=.1-liner.org");
%>

<%  // Double submit cookie. Can be commented out when using triple submit to clean up.
    Cookie antiCsrf = new Cookie("cookieToken", "badc0ffee0123546");
    antiCsrf.setPath("/");
    antiCsrf.setDomain(".1-liner.org");
    response.addCookie(antiCsrf);
%>

<%  Cookie nickCookie = new Cookie("nickNameSecurish", "June");
    nickCookie.setPath("/");
    nickCookie.setDomain(".1-liner.org");
    response.addCookie(nickCookie);
%>

<!DOCTYPE html>
<html>
<head>
    <base href="https://local.1-liner.org:8444/" />
    <link rel="stylesheet" type="text/css" href="../css/userIcons.css">
    <link rel="stylesheet" type="text/css" href="../js/extjs-4.1.0/resources/css/ext-all.css">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

    <script src="../js/jquery-1.7.2.min.js"></script>
    <script src="../js/jquery-encoder-0.1.0.js"></script>
    <script src="../js/extjs-4.1.0/ext-all-dev.js"></script>
    <script>
        // Triple submit value deliberately leaked to the legitimate client. Comment out if you want double submit.
        //var ANTI_CSRF_TRIPLE = '<%= randomValue %>';
    </script>
    <script src="../js/appSec/app.js"></script>
    <title>Securish</title>

</head>
<body>
<div id="extOneLiner"></div>
</body>
</html>