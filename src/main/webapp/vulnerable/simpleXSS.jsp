<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <base href="https://other.1-liner.org:8444/" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <title>Other Subdomain</title>

    <script src="../js/jquery-1.7.2.min.js"></script>
    <script src="../js/jquery.cookie.js"></script>
    <script>
        $(document).ready(function() {
            $("#searchButton").click(function(event) {
                var searchText = $("#searchField").val();
                event.preventDefault();
                $("#output").html(searchText);
            });
        });

        $.cookie("cookieToken", "bogus", {path: "/", domain: ".1-liner.org"});
    </script>

</head>
<body>
<form method="POST" action="">
    <input id="searchField" type="text" />
    <button id="searchButton">Search</button>
</form>
<div id="output">

</div>
</body>
</html>