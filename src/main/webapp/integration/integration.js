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
            },
            "#cookies" : function () {
                $('#hero-content').html("");
                $('#content').html(fragments["cookie_wipe_iframe"]);
                activateMenuItem("cookies");
            }
        },

        locationHashChanged = function() {
            if (nav[location.hash]) {
                nav[location.hash]();
            }
        };

    if (global.location.hash === "") {
        global.location.hash = "hacked";  // Set to start
    }
    global.onhashchange = locationHashChanged;

    loadFragment(['hacks', 'non-sandboxed_iframes', 'cors', 'same_domain_iframes', 'sub_domain_iframes', 'other_domain_iframes', 'iframes_accordion', 'postMessage', 'cookie_wipe_iframe'],
        function() {
            locationHashChanged();  // All fragments loaded, load the current one
        });

//    $.get(view + '_fragment.html');


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

    if (GLOB.corsWithCredentials) {
        req.withCredentials = true;
    }

    try {
        req.open(method, url);

        // Setting custom headers will trigger a preflight request to the server
        //req.setRequestHeader("X-Requested-With", "XMLHttpRequest");  // Add Ajax header

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

GLOB.toggleCorsWithCredentials = function() {
    console.log("toggleCorsWithCredentials() called, GLOB.corsWithCredentials == " + GLOB.corsWithCredentials);
    if (GLOB.corsWithCredentials) {
        GLOB.corsWithCredentials = false;
        $("#toggleCorsWithCredentials").text("Set withCredentials");
    } else {
        GLOB.corsWithCredentials = true;
        $("#toggleCorsWithCredentials").text("Unset withCredentials");
    }
}

$(document).ready( function() {
    $("#clearStatusBar").click(function(event) {
        window.document.getElementById("status").textContent = "Status";
    })
});
