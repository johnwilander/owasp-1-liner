<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <!--<base href="https://local.1-liner.org:8444/" />-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <!--<link rel="stylesheet" href="../css/reset-min.css" />-->
    <link rel="stylesheet" href="../css/960-min.css" />
    <script src="../js/jquery-1.7.2.min.js"></script>
    <title>Integration</title>
    <style>
        .sameDomain {
            border: solid #adff2f;
        }
        .sameDomainSandboxed {
            border: dashed #adff2f;
        }
        .otherSubDomain {
            border: solid #40e0d0;
        }
        .otherSubDomainSandboxed {
            border: dashed #40e0d0;
        }
        .otherDomain {
            border: solid red;
        }
        .otherDomainSandboxed {
            border: dashed red;
        }
    </style>
    <script>
        "use strict";
        var GLOB = {};
        GLOB.setDocumentDomain = function(parentDomainName) {
            var result = window.document.getElementById("status");
            document.domain = parentDomainName;
            result.textContent = "document.domain == " + document.domain;
        };
        GLOB.jsonpCallback = function(json) {
            var result = window.document.getElementById("status");
            result.textContent = "json.data == " + json.data;
        };
        GLOB.jsonpCall = function(url, callbackName) {
            var bodyElement = window.document.getElementsByTagName("body")[0],
                scriptElement = document.createElement("script");
            scriptElement.setAttribute("src", url + (url.indexOf("?") !== -1? "" : "?") + "callback=" + callbackName);
            bodyElement.appendChild(scriptElement);
        };
        GLOB.ajaxCall = function(url) {
            var result = window.document.getElementById("status"),
                    req = new XMLHttpRequest(),
                    transferComplete = function(e) {
                        result.textContent = req.responseText;
                    },
                    transferFailed = function(e) {
                        result.textContent = req.response;
                    },
                    transferCanceled = function(e) {
                        result.textContent = req.response;
                    };

            req.addEventListener("load", transferComplete, false);
            req.addEventListener("error", transferFailed, false);
            req.addEventListener("abort", transferCanceled, false);

            req.open('GET', url);
            req.send();
        };
    </script>
</head>
<body>

<div class="container_24">

    <div class="grid_24">
        <h3>Status</h3>
        <div id="status"></div>
        <button onclick="GLOB.setDocumentDomain('1-liner.org')">Set document.domain to 1-liner.org</button>
        <button onclick="GLOB.ajaxCall('https://local.1-liner.org:8444/ws/attacker/jsonpBenign?callback=myCallback')">Ajax call to same domain</button>
        <button onclick="GLOB.jsonpCall('https://local.1-liner.org:8444/ws/attacker/jsonpBenign', 'GLOB.jsonpCallback')">jsonp call to another domain</button>
    </div>

    <!--  -->

    <div class="sameDomain grid_8">
        <iframe id=sameDomainNoSandbox src="subPages/sameDomain.html" height="200" seamless></iframe>
    </div>

    <div class="sameDomainSandboxed grid_8">
        <iframe id=sameDomainSandbox src="subPages/sameDomain.html" height="200" sandbox="allow-scripts" seamless></iframe>
    </div>

    <div class="otherSubDomain grid_8">
        <iframe id=otherSubDomainNoSandbox src="https://other.1-liner.org:8444/securish/subPages/otherSubdomain.html" height="200" seamless></iframe>
    </div>

    <div class="clear"></div>

    <div class="otherSubDomainSandboxed grid_8">
        <iframe id=otherSubDomainSandbox src="https://other.1-liner.org:8444/securish/subPages/otherSubdomain.html" height="200" seamless></iframe>
    </div>

    <div class="otherDomain grid_8">
        <iframe id=otherDomainNoSandbox src="https://attackr.se:8444/securish/subPages/otherDomain.html" height="200" seamless></iframe>
    </div>

    <div class="otherDomainSandboxed grid_8">
        <iframe id=otherDomainSandbox src="https://attackr.se:8444/securish/subPages/otherDomain.html" height="200" seamless></iframe>
    </div>

</div>

</body>
</html>