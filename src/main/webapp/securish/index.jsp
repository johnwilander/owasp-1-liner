<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ page import="javax.servlet.http.Cookie" %>
<%@ page import="java.security.SecureRandom" %>
<% SecureRandom secureRandom = new SecureRandom();
    String randomName = "" + secureRandom.nextLong();
    String randomValue = "" + secureRandom.nextLong();
//    response.setHeader("Set-Cookie", randomName + "=" + randomValue + "; HttpOnly; path='/'; domain=.1-liner.org");
%>
<% Cookie nickCookie = new Cookie("nickNameSecurish", "June"); nickCookie.setPath("/"); nickCookie.setDomain(".1-liner.org"); response.addCookie(nickCookie); %>
<% Cookie antiCsrf = new Cookie("cookieToken", "badc0ffee0123546"); antiCsrf.setPath("/"); antiCsrf.setDomain(".1-liner.org"); response.addCookie(antiCsrf); %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <base href="https://local.1-liner.org:8444/" />
    <link rel="stylesheet" type="text/css" href="../css/userIcons.css">
    <link rel="stylesheet" type="text/css" href="../js/extjs-4.1.0/resources/css/ext-all.css">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

    <script src="../js/jquery-1.7.2.min.js"></script>
    <script src="../js/jquery-encoder-0.1.0.js"></script>
    <script src="../js/extjs-4.1.0/ext-all-dev.js"></script>
    <script src="../js/appSec/app.js"></script>
<title>Securish</title>

    <script type="text/javascript">
        var ANTI_CSRF_TRIPLE = <%= randomValue %>;
    </script>
</head>
<body>
<div id="extOneLiner"></div>
</body>
</html>