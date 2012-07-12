<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ page import="javax.servlet.http.Cookie" %>
<% Cookie nickCookie = new Cookie("nickNameVulnerable", "John"); nickCookie.setPath("/"); nickCookie.setDomain(".1-liner.org"); response.addCookie(nickCookie); %>

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
    <script src="../js/appVuln/app.js"></script>
<title>Vulnerable</title>

</head>
<body>
<div id="extOneLiner"></div>
</body>
</html>