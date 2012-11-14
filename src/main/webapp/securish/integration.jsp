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
        .marginTopAndBotton {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .blackBorder {
            border: solid black;
        }
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
        GLOB.ajaxCall = function(url, requestMethod) {
            var method = requestMethod? requestMethod : "GET",
                    result = window.document.getElementById("status"),
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
            req.onreadystatechange = transferComplete;

            try {
                req.open(method, url);
                req.send();
            } catch (error) {
                result.textContent = error;
            }
        };
        GLOB.openPopup = function(url) {
            var strWindowFeatures = "menubar=no,scrollbars=no,status=no,height=200,width=200";
            GLOB.popup = window.open(url, "Other", strWindowFeatures);
            setTimeout('GLOB.popup.postMessage("I am your father.", "https://other.1-liner.org:8444")', 1000);
        };
        GLOB.receiveMessage = function(event) {
            if (event.origin !== "https://other.1-liner.org:8444") {
                return;
            }
            console.log(event.data);
        }
        window.addEventListener("message", GLOB.receiveMessage, false);

    </script>
</head>
<body>

<div class="container_24">

    <div class="grid_8 blackBorder">
        <h3>Status</h3>
        <div id="status"></div>
    </div>

    <div class="grid_16 blackBorder">
        <button onclick="GLOB.setDocumentDomain('1-liner.org')">Set document.domain to 1-liner.org</button>
        <button onclick="GLOB.jsonpCall('https://other.1-liner.org:8444/ws/jsonpBenign', 'GLOB.jsonpCallback')">benign jsonp call to another domain</button>
        <button onclick="GLOB.jsonpCall('https://other.1-liner.org:8444/ws/attacker/jsonpEvil', 'GLOB.jsonpCallback')">jsonp call to a compromised domain</button>
        <button onclick="GLOB.ajaxCall('https://other.1-liner.org:8444/ws/corsGet')">Ajax GET call to CORS-enabled domain</button>
        <button onclick="GLOB.ajaxCall('https://other.1-liner.org:8444/ws/corsGetMultipleAllowedOrigins')">Ajax GET call to CORS-enabled domain, multiple origins allowed</button>
        <button onclick="GLOB.ajaxCall('https://other.1-liner.org:8444/ws/corsPost', 'POST')">Ajax POST call to CORS-enabled domain</button>
        <button onclick="GLOB.ajaxCall('https://other.1-liner.org:8444/ws/non-corsPost', 'POST')">Ajax POST call to non-CORS-enabled domain</button>
        <button onclick="GLOB.ajaxCall('https://other.1-liner.org:8444/ws/non-corsPostCheckOrigin', 'POST')">Ajax POST call to non-CORS-enabled domain that checks origin</button>
        <button onclick="GLOB.openPopup('https://other.1-liner.org:8444/securish/subPages/postMessage.html')">Open popup for other domain</button>
    </div>

    <div class="clear"></div>

    <div class="sameDomain grid_8 marginTopAndBotton">
        <iframe id=sameDomainNoSandbox src="subPages/sameDomain.html" height="200" seamless></iframe>
    </div>

    <div class="sameDomainSandboxed grid_8 marginTopAndBotton">
        <iframe id=sameDomainSandbox src="subPages/sameDomain.html" height="200" sandbox="allow-scripts" seamless></iframe>
    </div>

    <div class="otherSubDomain grid_8 marginTopAndBotton">
        <iframe id=otherSubDomainNoSandbox src="https://other.1-liner.org:8444/securish/subPages/otherSubdomain.html" height="200" seamless></iframe>
    </div>

    <div class="clear"></div>

    <div class="otherSubDomainSandboxed grid_8 marginTopAndBotton">
        <iframe id=otherSubDomainSandbox src="https://other.1-liner.org:8444/securish/subPages/otherSubdomain.html" sandbox="allow-scripts" height="200" seamless></iframe>
    </div>

    <div class="otherDomain grid_8 marginTopAndBotton">
        <iframe id=otherDomainNoSandbox src="https://attackr.se:8444/securish/subPages/otherDomain.html" height="200" seamless></iframe>
    </div>

    <div class="otherDomainSandboxed grid_8 marginTopAndBotton">
        <iframe id=otherDomainSandbox src="https://attackr.se:8444/securish/subPages/otherDomain.html" sandbox="allow-scripts" height="200" seamless></iframe>
    </div>

</div>

</body>
</html>