<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<% response.addHeader("Set-Cookie", "httpOnlyCookie=untouchable;Path=/;Domain=.1-liner.org;httpOnly");%>
<% response.addHeader("Set-Cookie", "ordinaryCookie=serverValue;Path=/;Domain=.1-liner.org");%>

<!DOCTYPE html>
<html>
<head>
    <!--<base href="https://local.1-liner.org:8444/" />-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <!--<link rel="stylesheet" href="../css/reset-min.css" />-->
    <link href="../css/bootstrap.css" rel="stylesheet" media="screen">
    <script src="../js/jquery-1.7.2.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="integration.js"></script>
    <title>Integration</title>
    <style>
        .top-bar-margins {
            margin-top: 5px;
            margin-bottom: 5px;
        }
        .status-bar {
            color: #111111;
            width: 310px;
        }
        .marginTopAndBotton {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .blackBorder {
            border: solid black;
        }
        .legendNoSandbox {
            padding: 2px;
            border: solid #c0c0c0;
        }
        .legendSandboxed {
            padding: 2px;
            border: dashed #c0c0c0;
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
    </script>
</head>
<body>

<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <a class="brand" href="#">Integration Patterns</a>
            <div class="nav-collapse collapse">
                <ul class="nav">
                    <li id="hacks-menu" class="active"><a href="#hacks">Hacks</a></li>
                    <li id="cors-menu"><a href="#cors">CORS</a></li>
                    <li id="iframes-menu"><a href="#iframes">iframes</a></li>
                    <li id="postMessage-menu"><a href="#postMessage">postMessage</a></li>
                    <li id="cookies-menu"><a href="#cookies">Cookies</a></li>
                    <!--
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li class="nav-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                    -->
                </ul>
                <div class="pull-right uneditable-input status-bar top-bar-margins">

                    <div id="clearStatusBar" class="icon-remove pull-left"></div>
                    <div id="status" class="pull-right">
                        Status
                    </div>
                </div>
            </div><!--/.nav-collapse -->
        </div>
    </div>
</div>

<div class="container">
    <div id="hero-content" class="hero-unit">
    </div>

    <div id="content"></div>

    <hr>

    <footer>
    </footer>

</div><!--/container-->

</body>
</html>