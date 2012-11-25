(function(global) {
    "use strict";

    global.GLOB = {};

    var fragments = [],
        loadFragment = function(views, callback) {

            var deferreds = [];

            $.each(views, function(index, view) {
                deferreds.push($.get(view + '_fragment.html', function(data) {
                    fragments[view] = data;
                }));
            });

            $.when.apply(null, deferreds).done(callback);
        },

        activateMenuItem = function (menuItem) {
            $('.nav li').removeClass('active');
            $('#' + menuItem + '-menu').addClass('active');
        },

        resultDiv = '<div>Status: <p id="status"></p> </div>',

        nav = {
            "#hacks" : function () {
                $('#hero-content').html(fragments["hacks"] + resultDiv);
                $('#content').html(fragments["non-sandboxed_iframes"]);
                activateMenuItem("hacks");
            },
            "#cors" : function () {
                $('#hero-content').html(fragments["cors"]);
                $('#content').html("");
                activateMenuItem("cors");
            },
            "#iframes" : function () {
                $('#hero-content').html(fragments["hacks"]);
                $('#content').html(fragments["iframes_accordion"]);
                /*
                $('#content').html('<div class="row"><div class="span6 marginTopAndBotton"><div class="legendNoSandbox">Ordinary iframes</div></div><div class="span6 marginTopAndBotton"><div class="legendSandboxed">Sandboxed iframes</div></div></div>' +
                    fragments["same_domain_iframes"] + fragments["sub_domain_iframes"] + fragments["other_domain_iframes"]);
                    */
                activateMenuItem("iframes");
            },
            "#postMessage" : function () {
                $('#hero-content').html(fragments["postMessage"]);
                $('#content').html("");
                activateMenuItem("postMessage");
            }
        },

        locationHashChanged = function() {
            if (nav[location.hash]) {
                nav[location.hash]();
            }
        };

    loadFragment(['hacks', 'non-sandboxed_iframes', 'cors', 'same_domain_iframes', 'sub_domain_iframes', 'other_domain_iframes', 'iframes_accordion', 'postMessage'], function() {});

//    $.get(view + '_fragment.html');

    global.onhashchange = locationHashChanged;

})(window);

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
GLOB.openTab = function(url) {
    GLOB.popup = window.open(url, "_blank");
    setTimeout('GLOB.popup.postMessage("Luke, I am your father.", "http://other.1-liner.org:8081")', 2000);
};
GLOB.receiveMessage = function(event) {
    if (event.origin !== "http://other.1-liner.org:8081") {
        return;
    }
    window.document.getElementById("status").textContent = event.data;
}
window.addEventListener("message", GLOB.receiveMessage, false);


