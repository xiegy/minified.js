(function(){function h(a){return"function"==typeof a&&!a.item}function m(a){return a&&null!=a.length&&"string"!=typeof a&&!(a&&a.nodeType)&&!h(a)}function v(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function f(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function A(a,b){var c=[];f(a,function(a,d){b(a,d)&&c.push(a)});return c}function p(a,b){var c=[];f(a,function(a,d){m(a=b(a,d))?f(a,function(a){c.push(a)}):null!=a&&c.push(a)});return c}function l(a,b,c){return(null!=a?""+
a:"").replace(b,c||"")}function q(a){return parseFloat(l(a,/^[^\d-]+/))}function r(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:null},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function w(a){a()}function x(){f(B,w);B=null}function C(a){B?B.push(a):t.setTimeout(a,0)}function D(){var a,b=[],c=[],e=function(d,e){null==a&&(a=d,b=e,t.setTimeout(function(){f(c,w)},0))},d=e.then=function(d,e){var g=D(),f=function(){try{var c=a?d:e;if(h(c)){var f=c.apply(null,
b);f&&h(f.then)?f.then(function(a){g(!0,[a])},function(a){g(!1,[a])}):g(!0,[f])}else g(a,b)}catch(G){g(!1,[G])}};null!=a?t.setTimeout(f,0):c.push(f);return g};e.always=function(a){return d(a,a)};e.error=function(a){return d(0,a)};return e}function y(a,b,c){return h(a)?C(a):new H(u(a,b,c))}function u(a,b,c){function e(a){a=function G(a){return m(a)?p(a,G):a}(a);return d?A(a,function(a){for(;a=a.parentNode;){if(a===d)return!0;if(c)return!1}}):a}var d,f,j,g,k;if(b&&1!=(b=u(b)).length)return p(b,function(b){return u(a,
b,c)});d=b&&b[0];if("string"!=typeof a)return e(m(a)?a:[a]);if(1<(b=a.split(/\s*,\s*/)).length)return p(b,function(a){return u(a,d,c)});if(b=/(\S+)\s+(.+)$/.exec(a))return u(b[2],u(b[1],d),c);if(a!=(b=l(a,/^#/)))return e([z.getElementById(b)]);d=d||z;f=(b=/([^.]*)\.?([^.]*)/.exec(a))[1];g=b[2];b=(j=d.getElementsByClassName&&g)?d.getElementsByClassName(g):d.getElementsByTagName(f||"*");if(f=j?f:g)k=RegExp("\\b"+f+"\\b","i"),b=A(b,function(a){return k.test(a[j?"nodeName":"className"])});return d?e(b):
b}function H(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var t=this,z=document,B=[],E=[],I=p(["msR","webkitR","mozR","r"],function(a){return t[a+"equestAnimationFrame"]})[0]||function(a){t.setTimeout(a,33)},F=!!z.all&&!B.map;v({each:function(a){return f(this,a)},get:function(a,b){var c=this,e=c[0];if(e){if("string"==typeof a){var d=l(a,/^[$@]/),n;n="$"==a?e.className:"$$"==a?F?e.style.cssText:e.getAttribute("style"):/\$\$/.test(a)&&("hidden"==e.style.visibility||"none"==e.style.display)?
0:"$$fade"==a?isNaN(n=F?q(e.style.filter)/100:q(e.style.opacity))?1:n:"$$slide"==a?e.offsetHeight-c.get("$paddingTop",!0)-c.get("$paddingBottom",!0)+"px":/^\$/.test(a)?t.getComputedStyle?t.getComputedStyle(e,null).getPropertyValue(l(d,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(e.currentStyle||e.style)[d]:/^@/.test(a)?e.getAttribute(d):e[d];return b?q(n):n}var j={};(m(a)?f:v)(a,function(a){j[a]=c.get(a,b)});return j}},set:function(a,b){var c=this,e;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<
(e=q(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?F?{$filter:"alpha(opacity = "+100*e+")",$zoom:1}:{$opacity:e}:{$height:/px$/.test(b)?b:function(a,b,c){return e*(e&&r(y(c)))+"px"},$overflow:"hidden"}):f(c,function(c,e){var j=l(a,/^[@$]/),g=c.className||"",k=/^\$/.test(a)?c.style:c,s=h(b)?b(y(c).get(a),e,c):b;"$"==a?null!=s&&(f(s.split(/\s+/),function(a){var b=l(a,/^[+-]/),c=g;g=l(g,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==g)g+=" "+b}),c.className=l(g,/^\s+|\s+(?=\s|$)/g)):"$$"==
a?F?k.cssText=s:null!=s?c.setAttribute("style",s):c.removeAttribute("style"):/^@/.test(a)?null!=s?k.setAttribute(j,s):k.removeAttribute(j):k[j]=s}):"string"==typeof a||h(a)?c.set("$",a):v(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return f(this,function(c,e){var d;(function j(a){m(a)?f(a,j):h(a)?j(a(c,e)):null!=a&&(a=a&&a.nodeType?a:z.createTextNode(a),d?d.parentNode.insertBefore(a,d.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),d=a)})(a&&a.nodeType&&e?null:a)})},animate:function(a,
b,c,e){var d=this,n=[],j=/-?[\d.]+/,g,k=D(),s=h(c)?c:function(a,b,e){return a+e*(b-a)*(c+(1-c)*e*(3-2*e))};e=e||{};e.time=0;e.stop=function(){g();k(!1)};b=b||500;c=c||0;f(d,function(b){var c={o:y(b),e:{}};v(c.s=c.o.get(a),function(b,e){var d=a[b];"$$slide"==b&&(d=d*r(c.o)+"px");c.e[b]=/^[+-]=/.test(d)?l(d.substr(2),j,q(e)+q(l(d,/\+?=/))):d});n.push(c)});g=y.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(l(a,/[^\d,]+/g).split(",")[b])}
e.time=a;a>=b||0>a?(f(n,function(a){a.o.set(a.e)}),g(),e.time=null,k(!0,[d])):f(n,function(e){v(e.s,function(d,f){var g="rgb(",k=e.e[d],n=a/b;if(/^#|rgb\(/.test(k))for(var h=0;3>h;h++)g+=Math.round(s(c(f,h),c(k,h),n))+(2>h?",":")");else g=s(q(f),q(k),n),g=l(k,j,null!=g?""+g:"");e.o.set(d,g)})})});return k},toggle:function(a,b,c,e){var d=this,f={},j=!1,g=/\b(?=\w)/g;return!b?d.toggle(l(a,g,"-"),l(a,g,"+")):d.set(a)&&function(g){g!==j&&(j=!0===g||!1===g?g:!j,c?d.animate(j?b:a,f.stop?f.stop()||f.time:
c,e,f):d.set(j?b:a))}},on:function(a,b,c,e){return f(this,function(d,h){f(a.split(/\s/),function(a){var f=l(a,/\|/),k=function(d){d=d||t.event;if((!b.apply(e?c:d.target,e||c||[d,h])||e)&&a==f)d.stopPropagation&&(d.preventDefault(),d.stopPropagation()),d.returnValue=!1,d.cancelBubble=!0};(b.M=b.M||[]).push({e:d,h:k,n:f});d.addEventListener?d.addEventListener(f,k,!0):d.attachEvent("on"+f,k)})})}},function(a,b){H.prototype[a]=b});v({ready:C,loop:function(a){var b={c:a,t:(new Date).getTime(),s:function(){for(var a=
0;a<E.length;a++)E[a]===b&&E.splice(a--,1)}};2>E.push(b)&&function e(){f(E,function(a){a.c(Math.max(0,(new Date).getTime()-a.t),a.s)}).length&&I(e)}();return b.s},dummy:null},function(a,b){y[a]=b});t.onload=x;z.addEventListener&&z.addEventListener("DOMContentLoaded",x,!1);var J={$:y,EE:function(a,b,c,e){return function(){var d=y(z.createElement(a));m(b)||"object"!=typeof b?d.add(b):d.set(b).add(c);e&&e(d);return d}}};t.require=function(a){if("minified"==a)return J}})();var MINI=require("minified"),$=MINI.$,$$=MINI.$$,EE=MINI.EE;
$(function(){function h(){var f=Math.max(0,Math.min(Math.round(Math.random()*A-0.5),A));return f!=p?f:h()}function m(){C||($("#shareExt").add([EE("iframe",{"@allowtransparency":"true","@frameborder":0,"@scrolling":"no",$width:"100px",$height:"20px","@src":"http://ghbtns.com/github-btn.html?user=timjansen&repo=minified.js&type=watch&count=true"}),EE("iframe",{"@allowtransparency":"true","@frameborder":0,"@scrolling":"no",$width:"100px",$height:"20px","@src":"https://platform.twitter.com/widgets/tweet_button.html"}),
EE("div",{$:"g-plusone",$display:"inline","@data-size":"medium"})]),$("head").add(EE("script",{type:"text/javascript",async:!0,src:"https://apis.google.com/js/plusone.js"})),C=!0)}var v=["","-moz-","-ms-","-webkit-"],f="#f00 #0f0 #00f #0ff #f0f #ff0".split(" "),A=f.length,p=h(),l=h(),q=h(),r={percentage:0,preColor:f[p],postColor:f[q],running:!1},w=$(".shareButton"),x,C,D=$("#shareDiv").toggle({$$fade:0,$$slide:0},{$$fade:1,$$slide:1},700,1);w.on("mouseover",function(){m();x||(x=$.loop(function(){r.running||
(r.running=!0,$(r).animate({percentage:100,preColor:f[l],postColor:f[p]},2E3,1).then(function(){r.percentage=0;r.running=!1;q=p;p=l;l=h()}));var m="linear-gradient(-75deg, "+r.preColor+" 0%, "+f[p]+" "+Math.round(100*r.percentage)/100+"%, "+r.postColor+" 100%); ",u="";$(v).each(function(f){u+="background: "+f+m});w.set("$$",u)}))});w.on("mouseout",function(){x&&x();x=null;w.set("$$","")});w.on("click",function(){m();D()});"#share"==window.location.hash&&(m(),D(!0))});
