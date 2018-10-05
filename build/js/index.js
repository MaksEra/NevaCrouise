/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* $(document).ready(function () {
    !function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicScroll=t()}}(function(){return function t(n,e,r){function o(i,c){if(!e[i]){if(!n[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var f=e[i]={exports:{}};n[i][0].call(f.exports,function(t){var e=n[i][1][t];return o(e||t)},f,f.exports,t,n,e,r)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(t,n,e){"use strict";n.exports=function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},{}],2:[function(t,n,e){"use strict";n.exports=function(t){var n=1.70158;return t*t*((n+1)*t-n)}},{}],3:[function(t,n,e){"use strict";n.exports=function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1}},{}],4:[function(t,n,e){"use strict";var r=t("./bounce-out");n.exports=function(t){return t<.5?.5*(1-r(1-2*t)):.5*r(2*t-1)+.5}},{"./bounce-out":6}],5:[function(t,n,e){"use strict";var r=t("./bounce-out");n.exports=function(t){return 1-r(1-t)}},{"./bounce-out":6}],6:[function(t,n,e){"use strict";n.exports=function(t){var n=t*t;return t<4/11?7.5625*n:t<8/11?9.075*n-9.9*t+3.4:t<.9?4356/361*n-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}},{}],7:[function(t,n,e){"use strict";n.exports=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},{}],8:[function(t,n,e){"use strict";n.exports=function(t){return 1-Math.sqrt(1-t*t)}},{}],9:[function(t,n,e){"use strict";n.exports=function(t){return Math.sqrt(1- --t*t)}},{}],10:[function(t,n,e){"use strict";n.exports=function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}},{}],11:[function(t,n,e){"use strict";n.exports=function(t){return t*t*t}},{}],12:[function(t,n,e){"use strict";n.exports=function(t){var n=t-1;return n*n*n+1}},{}],13:[function(t,n,e){"use strict";n.exports=function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}},{}],14:[function(t,n,e){"use strict";n.exports=function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}},{}],15:[function(t,n,e){"use strict";n.exports=function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}},{}],16:[function(t,n,e){"use strict";n.exports=function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}},{}],17:[function(t,n,e){"use strict";n.exports=function(t){return 0===t?t:Math.pow(2,10*(t-1))}},{}],18:[function(t,n,e){"use strict";n.exports=function(t){return 1===t?t:1-Math.pow(2,-10*t)}},{}],19:[function(t,n,e){"use strict";n.exports={backInOut:t("./back-in-out"),backIn:t("./back-in"),backOut:t("./back-out"),bounceInOut:t("./bounce-in-out"),bounceIn:t("./bounce-in"),bounceOut:t("./bounce-out"),circInOut:t("./circ-in-out"),circIn:t("./circ-in"),circOut:t("./circ-out"),cubicInOut:t("./cubic-in-out"),cubicIn:t("./cubic-in"),cubicOut:t("./cubic-out"),elasticInOut:t("./elastic-in-out"),elasticIn:t("./elastic-in"),elasticOut:t("./elastic-out"),expoInOut:t("./expo-in-out"),expoIn:t("./expo-in"),expoOut:t("./expo-out"),linear:t("./linear"),quadInOut:t("./quad-in-out"),quadIn:t("./quad-in"),quadOut:t("./quad-out"),quartInOut:t("./quart-in-out"),quartIn:t("./quart-in"),quartOut:t("./quart-out"),quintInOut:t("./quint-in-out"),quintIn:t("./quint-in"),quintOut:t("./quint-out"),sineInOut:t("./sine-in-out"),sineIn:t("./sine-in"),sineOut:t("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(t,n,e){"use strict";n.exports=function(t){return t}},{}],21:[function(t,n,e){"use strict";n.exports=function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}},{}],22:[function(t,n,e){"use strict";n.exports=function(t){return t*t}},{}],23:[function(t,n,e){"use strict";n.exports=function(t){return-t*(t-2)}},{}],24:[function(t,n,e){"use strict";n.exports=function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}},{}],25:[function(t,n,e){"use strict";n.exports=function(t){return Math.pow(t,4)}},{}],26:[function(t,n,e){"use strict";n.exports=function(t){return Math.pow(t-1,3)*(1-t)+1}},{}],27:[function(t,n,e){"use strict";n.exports=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},{}],28:[function(t,n,e){"use strict";n.exports=function(t){return t*t*t*t*t}},{}],29:[function(t,n,e){"use strict";n.exports=function(t){return--t*t*t*t*t+1}},{}],30:[function(t,n,e){"use strict";n.exports=function(t){return-.5*(Math.cos(Math.PI*t)-1)}},{}],31:[function(t,n,e){"use strict";n.exports=function(t){var n=Math.cos(t*Math.PI*.5);return Math.abs(n)<1e-14?1:1-n}},{}],32:[function(t,n,e){"use strict";n.exports=function(t){return Math.sin(t*Math.PI/2)}},{}],33:[function(t,n,e){(function(t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=200,u="__lodash_hash_undefined__",i=9007199254740991,c="[object Arguments]",a="[object Boolean]",s="[object Date]",f="[object Function]",l="[object GeneratorFunction]",p="[object Map]",d="[object Number]",h="[object Object]",v="[object Promise]",b="[object RegExp]",y="[object Set]",_="[object String]",m="[object Symbol]",g="[object WeakMap]",w="[object ArrayBuffer]",x="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",M="[object Int8Array]",q="[object Int16Array]",I="[object Int32Array]",E="[object Uint8Array]",A="[object Uint8ClampedArray]",k="[object Uint16Array]",P="[object Uint32Array]",S=/\w*$/,$=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,T={};T[c]=T["[object Array]"]=T[w]=T[x]=T[a]=T[s]=T[j]=T[O]=T[M]=T[q]=T[I]=T[p]=T[d]=T[h]=T[b]=T[y]=T[_]=T[m]=T[E]=T[A]=T[k]=T[P]=!0,T["[object Error]"]=T[f]=T[g]=!1;var D="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,U="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,z=D||U||Function("return this")(),B="object"==(void 0===e?"undefined":r(e))&&e&&!e.nodeType&&e,L=B&&"object"==(void 0===n?"undefined":r(n))&&n&&!n.nodeType&&n,N=L&&L.exports===B;function C(t,n){return t.set(n[0],n[1]),t}function H(t,n){return t.add(n),t}function R(t,n,e,r){var o=-1,u=t?t.length:0;for(r&&u&&(e=t[++o]);++o<u;)e=n(e,t[o],o,t);return e}function V(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function W(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}function G(t,n){return function(e){return t(n(e))}}function J(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}var K,Q=Array.prototype,X=Function.prototype,Y=Object.prototype,Z=z["__core-js_shared__"],tt=(K=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",nt=X.toString,et=Y.hasOwnProperty,rt=Y.toString,ot=RegExp("^"+nt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ut=N?z.Buffer:void 0,it=z.Symbol,ct=z.Uint8Array,at=G(Object.getPrototypeOf,Object),st=Object.create,ft=Y.propertyIsEnumerable,lt=Q.splice,pt=Object.getOwnPropertySymbols,dt=ut?ut.isBuffer:void 0,ht=G(Object.keys,Object),vt=Lt(z,"DataView"),bt=Lt(z,"Map"),yt=Lt(z,"Promise"),_t=Lt(z,"Set"),mt=Lt(z,"WeakMap"),gt=Lt(Object,"create"),wt=Vt(vt),xt=Vt(bt),jt=Vt(yt),Ot=Vt(_t),Mt=Vt(mt),qt=it?it.prototype:void 0,It=qt?qt.valueOf:void 0;function Et(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function At(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function kt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Pt(t){this.__data__=new At(t)}function St(t,n){var e,o,u,i=Gt(t)||(u=o=e=t)&&"object"==(void 0===u?"undefined":r(u))&&Jt(o)&&et.call(e,"callee")&&(!ft.call(e,"callee")||rt.call(e)==c)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],a=i.length,s=!!a;for(var f in t)!n&&!et.call(t,f)||s&&("length"==f||Ht(f,a))||i.push(f);return i}function $t(t,n,e){var r=t[n];et.call(t,n)&&Wt(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function Ft(t,n){for(var e=t.length;e--;)if(Wt(t[e][0],n))return e;return-1}function Tt(t,n,e,r,o,u,i){var v;if(r&&(v=u?r(t,o,u,i):r(t)),void 0!==v)return v;if(!Xt(t))return t;var g,$,F,D,U,z,B=Gt(t);if(B){if(v=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&et.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,v)}else{var L=Ct(t),N=L==f||L==l;if(Kt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(L==h||L==c||N&&!u){if(V(t))return u?t:{};if(v="function"!=typeof(U=N?{}:t).constructor||Rt(U)?{}:Xt(z=at(U))?st(z):{},!n)return g=t,D=t,$=(F=v)&&zt(D,Yt(D),F),zt(g,Nt(g),$)}else{if(!T[L])return u?t:{};v=function(t,n,e,r){var o=t.constructor;switch(n){case w:return Ut(t);case a:case s:return new o(+t);case x:return F=t,T=r?Ut(F.buffer):F.buffer,new F.constructor(T,F.byteOffset,F.byteLength);case j:case O:case M:case q:case I:case E:case A:case k:case P:return g=t,$=r?Ut(g.buffer):g.buffer,new g.constructor($,g.byteOffset,g.length);case p:return h=t,v=e,R(r?v(W(h),!0):W(h),C,new h.constructor);case d:case _:return new o(t);case b:return(l=new(f=t).constructor(f.source,S.exec(f))).lastIndex=f.lastIndex,l;case y:return i=t,c=e,R(r?c(J(i),!0):J(i),H,new i.constructor);case m:return u=t,It?Object(It.call(u)):{}}var u;var i,c;var f,l;var h,v;var g,$;var F,T}(t,L,Tt,n)}}i||(i=new Pt);var G,K,Q,X=i.get(t);if(X)return X;if(i.set(t,v),!B)var Y=e?(K=Nt,Q=Yt(G=t),Gt(G)?Q:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(Q,K(G))):Yt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(Y||t,function(o,u){Y&&(o=t[u=o]),$t(v,u,Tt(o,n,e,r,u,t,i))}),v}function Dt(t){return!(!Xt(t)||(n=t,tt&&tt in n))&&(Qt(t)||V(t)?ot:$).test(Vt(t));var n}function Ut(t){var n=new t.constructor(t.byteLength);return new ct(n).set(new ct(t)),n}function zt(t,n,e,r){e||(e={});for(var o=-1,u=n.length;++o<u;){var i=n[o],c=r?r(e[i],t[i],i,e,t):void 0;$t(e,i,void 0===c?t[i]:c)}return e}function Bt(t,n){var e,o,u=t.__data__;return("string"==(o=void 0===(e=n)?"undefined":r(e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?u["string"==typeof n?"string":"hash"]:u.map}function Lt(t,n){var e,r,o=(r=n,null==(e=t)?void 0:e[r]);return Dt(o)?o:void 0}Et.prototype.clear=function(){this.__data__=gt?gt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var n=this.__data__;if(gt){var e=n[t];return e===u?void 0:e}return et.call(n,t)?n[t]:void 0},Et.prototype.has=function(t){var n=this.__data__;return gt?void 0!==n[t]:et.call(n,t)},Et.prototype.set=function(t,n){return this.__data__[t]=gt&&void 0===n?u:n,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var n=this.__data__,e=Ft(n,t);return!(e<0||(e==n.length-1?n.pop():lt.call(n,e,1),0))},At.prototype.get=function(t){var n=this.__data__,e=Ft(n,t);return e<0?void 0:n[e][1]},At.prototype.has=function(t){return Ft(this.__data__,t)>-1},At.prototype.set=function(t,n){var e=this.__data__,r=Ft(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},kt.prototype.clear=function(){this.__data__={hash:new Et,map:new(bt||At),string:new Et}},kt.prototype.delete=function(t){return Bt(this,t).delete(t)},kt.prototype.get=function(t){return Bt(this,t).get(t)},kt.prototype.has=function(t){return Bt(this,t).has(t)},kt.prototype.set=function(t,n){return Bt(this,t).set(t,n),this},Pt.prototype.clear=function(){this.__data__=new At},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,n){var e=this.__data__;if(e instanceof At){var r=e.__data__;if(!bt||r.length<o-1)return r.push([t,n]),this;e=this.__data__=new kt(r)}return e.set(t,n),this};var Nt=pt?G(pt,Object):function(){return[]},Ct=function(t){return rt.call(t)};function Ht(t,n){return!!(n=null==n?i:n)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<n}function Rt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||Y)}function Vt(t){if(null!=t){try{return nt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,n){return t===n||t!=t&&n!=n}(vt&&Ct(new vt(new ArrayBuffer(1)))!=x||bt&&Ct(new bt)!=p||yt&&Ct(yt.resolve())!=v||_t&&Ct(new _t)!=y||mt&&Ct(new mt)!=g)&&(Ct=function(t){var n=rt.call(t),e=n==h?t.constructor:void 0,r=e?Vt(e):void 0;if(r)switch(r){case wt:return x;case xt:return p;case jt:return v;case Ot:return y;case Mt:return g}return n});var Gt=Array.isArray;function Jt(t){return null!=t&&("number"==typeof(n=t.length)&&n>-1&&n%1==0&&n<=i)&&!Qt(t);var n}var Kt=dt||function(){return!1};function Qt(t){var n=Xt(t)?rt.call(t):"";return n==f||n==l}function Xt(t){var n=void 0===t?"undefined":r(t);return!!t&&("object"==n||"function"==n)}function Yt(t){return Jt(t)?St(t):function(t){if(!Rt(t))return ht(t);var n=[];for(var e in Object(t))et.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}n.exports=function(t){return Tt(t,!0,!0)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],34:[function(t,n,e){"use strict";n.exports=function(t,n){n||(n=[0,""]),t=String(t);var e=parseFloat(t,10);return n[0]=e,n[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",n}},{}],35:[function(t,n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=void 0;var r=i(t("parse-unit")),o=i(t("lodash.clonedeep")),u=i(t("eases"));function i(t){return t&&t.__esModule?t:{default:t}}var c,a,s,f=[],l=function(){return(document.scrollingElement||document.documentElement).scrollTop},p=function(t){return!1===isNaN((0,r.default)(t)[0])},d=function(t){var n=(0,r.default)(t);return{value:n[0],unit:n[1]}},h=function(t){return null!==String(t).match(/^[a-z]+-[a-z]+$/)},v=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.innerHeight||window.outerHeight,o=n.getBoundingClientRect(),u=t.match(/^[a-z]+/)[0],i=t.match(/[a-z]+$/)[0],c=0;return"top"===i&&(c-=0),"middle"===i&&(c-=r/2),"bottom"===i&&(c-=r),"top"===u&&(c+=o.top+e),"middle"===u&&(c+=o.top+e+o.height/2),"bottom"===u&&(c+=o.top+e+o.height),c+"px"},b=function(t){var n,e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l(),o=t.getData(),u=o.to.value-o.from.value,i=(r-o.from.value)/(u/100),c=Math.min(Math.max(i,0),100),a=(n=o.direct,e={global:document.documentElement,elem:o.elem,direct:o.direct},!0===n?e.elem:n instanceof HTMLElement==1?e.direct:e.global),s=Object.keys(o.props).reduce(function(t,n){var e=o.props[n],r=e.from.unit||e.to.unit,u=e.from.value-e.to.value,i=e.timing(c/100),a=e.from.value-u*i,s=Math.round(100*a)/100;return t[n]=s+r,t},{}),f=i<0||i>100;return!0===(i>=0&&i<=100)&&o.inside(t,i,s),!0===f&&o.outside(t,i,s),{elem:a,props:s}},y=function(t,n){Object.keys(n).forEach(function(e){return r=t,o={key:e,value:n[e]},void r.style.setProperty(o.key,o.value);var r,o})};e.create=function(t){var n=null,e=!1,r={isActive:function(){return e},getData:function(){return n},calculate:function(){n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=(0,o.default)(t)).from)throw new Error("Missing property `from`");if(null==t.to)throw new Error("Missing property `to`");if(null==t.inside&&(t.inside=function(){}),null==t.outside&&(t.outside=function(){}),!0===t.direct&&null==t.elem)throw new Error("Property `elem` required when `direct` is true");if(!0!==t.direct&&t.direct instanceof HTMLElement==0&&(t.direct=!1),!1!==t.track&&(t.track=!0),"function"!=typeof t.inside)throw new Error("Property `inside` must be a function");if("function"!=typeof t.outside)throw new Error("Property `outside` must be a function");if(null==t.elem){if(!1===p(t.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===p(t.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===h(t.from)&&(t.from=v(t.from,t.elem)),!0===h(t.to)&&(t.to=v(t.to,t.elem));return t.from=d(t.from),t.to=d(t.to),null==t.props&&(t.props={}),Object.keys(t.props).forEach(function(n){var e=t.props[n];if(!1===p(e.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===p(e.to))throw new Error("Property `from` of prop must be a absolute value");if(e.from=d(e.from),e.to=d(e.to),"string"==typeof e.timing&&null==u.default[e.timing])throw new Error("Unknown timing for property `timing` of prop");null==e.timing&&(e.timing=u.default.linear),"string"==typeof e.timing&&(e.timing=u.default[e.timing])}),t}(t)},update:function(){var t=b(r),n=t.elem,e=t.props;return y(n,e),e},start:function(){e=!0},stop:function(){e=!1},destroy:function(){f[i]=void 0}},i=f.push(r)-1;return r.calculate(),r};!function t(n,e){var r=function(){requestAnimationFrame(function(){return t(n,e)})},o=f.filter(function(t){return null!=t&&t.isActive()});if(0===o.length)return r();var u=l();if(e===u)return r();e=u,o.map(function(t){return b(t,u)}).forEach(function(t){var n=t.elem,e=t.props;return y(n,e)}),r()}(),window.addEventListener("resize",(c=function(){f.filter(function(t){return null!=t&&t.getData().track}).forEach(function(t){t.calculate(),t.update()})},a=50,s=null,function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];clearTimeout(s),s=setTimeout(function(){return c.apply(void 0,n)},a)}))},{eases:19,"lodash.clonedeep":33,"parse-unit":34}]},{},[35])(35)});

    document.querySelectorAll('.scene').forEach(function (elem) {

        var modifier = elem.getAttribute('data-modifier');
    
        basicScroll.create({
            elem: elem,
            from: 0,
            to: 519,
            direct: true,
            props: {
                '--translateY': {
                    from: '0',
                    to: 20 * modifier + 'px' } } }).
    
    
        start();
    
    });
}) */

/* $(document).scroll(function() {
    var st = $(this).scrollTop();
    $(".catalog-main").css({
      "background-position-y": (-st/20)
    })
    $("#headerc").css({
      "top": (-st/5),
      "bottom": (st/5)
    })
  });

 */
/* (function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "1";
		//if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		//if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top - pos < height || top > windowHeight - pos) {
					return;
				}

                //$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
                $this.css('marginTop', xpos * Math.round(pos * -1.5) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
$(document).ready(function(){
	//$('#first').parallax(1);
	// $('#second').parallax("50%", 0.1);
    // $('#third').parallax("50%", 0.3);
    $('#second').parallax(1);
	$('#third').parallax(2);

}) */

$(document).ready(function () {
    //debounce
    function debounce(wait, func, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    //disableScrollbar
    var body = $('body');
    function scrollbarWidth() {
        var documentWidth = parseInt(document.documentElement.clientWidth);
        var windowsWidth = parseInt(window.innerWidth);
        var scrollbarWidth = windowsWidth - documentWidth;
        return scrollbarWidth;
    }
    function removeScroll() {
        body.css({ 'overflow': 'hidden', 'padding-right': scrollbarWidth() + "px", 'position': 'fixed' });
    }
    function addScroll() {
        body.css({ 'overflow': 'visible', 'padding-right': scrollbarWidth() * 0 + "px", 'position': 'relative' });
    }
    //viewport
    function setViewport() {
        var w = $(window);
        var ww = w.width();
        var vps, viewport;
        viewport = document.querySelector("meta[name=viewport]");
        if (ww <= 415) {
            vps = 'width=375, user-scalable=no';
        } else {
            vps = 'width=device-width, user-scalable=no';
        }
        //console.log(vps);
        viewport.setAttribute('content', vps);
    }
    //viewport change
    $(window).resize(function () {
        setViewport();
    });
    //load viewport
    setViewport();

    //document.addEventListener("touchstart", function(){}, true);

    AOS.init();

    if ($('.order__form').length) {
        $("#CODE_PHONE").inputmask({
            mask: "+7 (999) 999-99-99"
            /* definitions: {
                i: {
                    validator: "[8,9]"
                }
            } */
        });
    }
    if ($('.order__form').length) {
        $("#CODE_PHONE-O").inputmask({
            mask: "+7 (999) 999-99-99"
            /* definitions: {
                i: {
                    validator: "[8,9]"
                }
            } */
        });
    }

    $("[data-fancybox]").fancybox({
        touch: false,
        animationEffect: "zoom-in-out"

    });

    //------------------ОТКРЫТИЕ/ЗАКРЫТИЕ МЕНЮ
    body.on('click', '.hamburger', function () {
        var self = $(this);
        self.toggleClass('close');
        $('.hidden-menu').toggleClass('open');
        if (self.hasClass('close')) {
            removeScroll();
        } else {
            addScroll();
        }
    });
    //------------------анимация разрыва билета
    body.on('click', '.root__button a', function () {
        var self = $(this);
        var catalog = self.parent().parent().parent().parent().parent();
        catalog.find('.slider').addClass('crack');
        catalog.find('.root').addClass('crack');
    });

    //------------задержка перехода по ссылке
    /* $('.root__button').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href'),
            timeout = 500;
        setTimeout(function() {
           //window.open(href, '_self');
           location.href = href;
        }, timeout);
        
     }); */

    body.on('click', '.main-sliders .tabs__link', function () {
        var self = $(this);
        var parent = self.closest('.main-sliders');
        var target = parent.find('#' + self.data('target'));
        self.addClass('active').siblings().removeClass('active');
        parent.find('.excursion__slider-container').removeClass('active');
        target.addClass('active');
    });

    body.on('click', '.main-about__tabs .tabs__link', function () {
        var self = $(this);
        var parent = self.closest('.main-about__tabs');
        self.addClass('active').siblings().removeClass('active');
        parent.find('.about-tabs__container .tabs-content').removeClass('active');
        parent.find('#' + self.data('target')).addClass('active');
    });

    $('.route').hover(function () {
        $('.route').toggleClass('hover');
        $(this).toggleClass('hover-this');
    });

    //----------------СКРОЛЛИНГ ДО ЭЛЕМЕНТА ФОТО НА СТРАНИЦЕ ЭКСКУРСИИ
    $(document).ready(function () {
        $('button.see').click(function () {
            var scrollEl = $(this).attr('data-scroll');
            if ($(scrollEl).length != 0) {
                $('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 500);
            }

            return false;
        });
    });

    //-------------СЛАЙДЕР ЭКСКУРСИЙ ВО ВСЮ ШИРИНУ
    if ($('.excursion__slider').length) {
        var vacancySwiper = new Swiper('.excursion__slider-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            //slidesPerView: 'auto',
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 28,
            autoHeight: true,
            //freeMode: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function renderBullet(index, className) {
                    // window.urlImgTovar = $(this.find('.swiper-wrapper').items[index].el).data('thumb');
                    return '<span class="' + className + '">' + '</span>';
                }
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            //hashNavigation: true,
            a11y: {
                paginationBulletMessage: 'Go to slide {{index}}'
            },
            /* autoplay: {
                delay: 0,
            }, */
            breakpoints: {
                1259: {
                    loop: false,
                    centeredSlides: false,
                    slidesPerView: 2,
                    spaceBetween: 7
                },
                767: {
                    loop: false,
                    centeredSlides: false,
                    slidesPerView: 1,
                    spaceBetween: 7
                }
            }
        });
    }
    //-----------------СЛАЙДЕР НА СТРАНИЦЕ КАТАЛОГА
    if ($('.catalog-list').length) {
        var ticketSwiper = new Swiper('.slider-container-wrapper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                dynamicBullets: true,
                clickable: true,
                renderBullet: function renderBullet(index, className) {
                    // window.urlImgTovar = $(this.find('.swiper-wrapper').items[index].el).data('thumb');
                    return '<span class="' + className + '">' + '</span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            a11y: {
                paginationBulletMessage: 'Go to slide {{index}}'
            }
            /* autoplay: {
                delay: 1000,
            } */
        });
        console.log(ticketSwiper);
    }
    //----------------------СЛАЙДЕР НА ГЛАВНОЙ ПОЯВЛЕНИЕ В МОБИЛЬНОЙ ВЕРСИИ
    var ww = $(window).width();
    if (ww < 768) {
        if ($('.main-top__excursions').length) {
            var mainMobileSwiper = new Swiper('.main-top__excursions-slider', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 1, //number and 'bool'
                centeredSlides: false,
                //slideClass: 'swiper-slide',
                spaceBetween: 7,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                    renderBullet: function renderBullet(index, className) {
                        return '<span class="' + className + '">' + '</span>';
                    }
                },
                a11y: {
                    paginationBulletMessage: 'Go to slide {{index}}'
                }
            });
            $(window).on("load resize", debounce(150, function () {
                mainMobileSwiper.init();
            }));
        }
    }

    //----------------------СЛАЙДЕР НА ГЛАВНОЙ МАЛЕНЬКИЙ
    if ($('.main-top__slider').length) {
        var mainSwiper = new Swiper('.slider-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            //slidesPerView: 'auto',
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 10,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function renderBullet(index, className) {
                    // window.urlImgTovar = $(this.find('.swiper-wrapper').items[index].el).data('thumb');
                    return '<span class="' + className + '">' + '</span>';
                }
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            //hashNavigation: true,
            a11y: {
                paginationBulletMessage: 'Go to slide {{index}}'
            },
            /* autoplay: {
                delay: 1000,
            } */
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    spaceBetween: 90
                }
            }
        });
    }
});

//---------яндекс карты на странице контактов
$(document).ready(function () {
    if ($('.contacts').length) {
        var init = function init() {
            myMap = new ymaps.Map("contacts-map", {
                center: [59.927768, 30.332101],
                zoom: 12,
                controls: []
            });
            //myMap.behaviors.disable('scrollZoom');
            var coords = [[59.927768, 30.332101]],
                myCollection = new ymaps.GeoObjectCollection({}, {
                draggable: false
            });
            myCollection.add(new ymaps.Placemark([59.927768, 30.332101], {
                iconCaption: 'Невская классика'
            }, {
                //preset: 'islands#governmentCircleIcon',
                iconColor: '#ff0000'
            }));
            myMap.geoObjects.add(myCollection);
        };

        ymaps.ready(init);
        var myMap;
    }
});
//---------яндекс карты 
$(document).ready(function () {
    /* window.map1 = [
        [59.942030, 30.314133],
        [59.944671, 30.310665],
        [59.945984, 30.304614],
        [59.946770, 30.294014],
        [59.948740, 30.286267],
        [59.953069, 30.273105],
        [59.958740, 30.255011],
        [59.962172, 30.235935],
        [59.965608, 30.217775],
        [59.967888, 30.188365],
        [59.968404, 30.136180],
        [59.966683, 30.081248],
        [59.957215, 30.029063],
        [59.946366, 29.988895],
        [59.930345, 29.956279],
        [59.914833, 29.931560],
        [59.901368, 29.917607],
        [59.891761, 29.913390]
    ] */

    ymaps.ready(['AnimatedLine']).then(init);
    function init(ymaps) {
        // Создаем карту.
        var myMap = new ymaps.Map("route-1", {
            center: [59.916248, 30.137011],
            zoom: 10,
            controls: []
        });

        // Создаем ломаные линии.
        var animatedLine = new ymaps.AnimatedLine([[59.942030, 30.314133], [59.944671, 30.310665], [59.945984, 30.304614], [59.946770, 30.294014], [59.948740, 30.286267], [59.953069, 30.273105], [59.958740, 30.255011], [59.962172, 30.235935], [59.965608, 30.217775], [59.967888, 30.188365], [59.968404, 30.136180], [59.966683, 30.081248], [59.957215, 30.029063], [59.946366, 29.988895], [59.930345, 29.956279], [59.914833, 29.931560], [59.901368, 29.917607], [59.891761, 29.913390]], {}, {
            strokeColor: "#ED4543",
            strokeWidth: 10,
            animationTime: 400
        });
        // Добавляем линии на карту.
        myMap.geoObjects.add(animatedLine);
        // Создаем метки.
        var firstPoint = new ymaps.Placemark([59.942030, 30.314133], { iconCaption: 'Причал' }, {
            iconColor: '#ff0000'
        });
        var secondPoint = new ymaps.Placemark([59.891761, 29.913390], { iconCaption: 'Петергоф' }, {
            iconColor: '#ff0000'
        });
        // Функция анимации пути.
        function playAnimation() {
            // Убираем линию.
            animatedLine.reset();
            // Добавляем первую метку на карту.
            myMap.geoObjects.add(firstPoint);
            // Анимируем первую линию.
            animatedLine.animate()
            // После окончания анимации первой линии добавляем вторую метку на карту и анимируем вторую линию.
            .then(function () {
                myMap.geoObjects.add(secondPoint);
            });
        }
        // Запускаем анимацию пути.
        var body = $('body');
        body.on('click', '.route', function () {
            playAnimation();
        });
    }
    ymaps.modules.define('AnimatedLine', ['util.defineClass', 'Polyline', 'vow'], function (provide, defineClass, Polyline, vow) {
        /**
         * @fileOverview Анимированная линия.
         */
        /**
         * Создает экземпляр анимированной линии.
         * @class AnimatedLine. Представляет собой геообъект с геометрией geometry.LineString.
         * @param {Boolean} [options.animationTime = 4000] Длительность анимации.
         **/
        function AnimatedLine(geometry, properties, options) {
            AnimatedLine.superclass.constructor.call(this, geometry, properties, options);
            this._loopTime = 50;
            this._animationTime = this.options.get('animationTime', 4000);
            // Вычислим длину переданной линии.
            var distance = 0;
            var previousElem = geometry[0];
            this.geometry.getCoordinates().forEach(function (elem) {
                distance += getDistance(elem, previousElem);
                previousElem = elem;
            });
            // Вычислим минимальный интервал отрисовки.
            this._animationInterval = distance / this._animationTime * this._loopTime;
            // Создадим массив с более частым расположением промежуточных точек.
            this._smoothCoords = generateSmoothCoords(geometry, this._animationInterval);
        }
        defineClass(AnimatedLine, Polyline, {
            // Анимировать линию.
            start: function start() {
                var value = 0;
                var coords = this._smoothCoords;
                var line = this;
                var loopTime = this._loopTime;
                // Будем добавлять по одной точке каждые 50 мс.
                function loop(value, currentTime, previousTime) {
                    if (value < coords.length) {
                        if (!currentTime || currentTime - previousTime > loopTime) {
                            line.geometry.set(value, coords[value]);
                            value++;
                            previousTime = currentTime;
                        }
                        requestAnimationFrame(function (time) {
                            loop(value, time, previousTime || time);
                        });
                    } else {
                        // Бросаем событие окончания отрисовки линии.
                        line.events.fire('animationfinished');
                    }
                }

                loop(value);
            },
            // Убрать отрисованную линию.
            reset: function reset() {
                this.geometry.setCoordinates([]);
            },
            // Запустить полный цикл анимации.
            animate: function animate() {
                this.reset();
                this.start();
                var deferred = vow.defer();
                this.events.once('animationfinished', function () {
                    deferred.resolve();
                });
                return deferred.promise();
            }

        });
        // Функция генерации частых координат по заданной линии.
        function generateSmoothCoords(coords, interval) {
            var smoothCoords = [];
            smoothCoords.push(coords[0]);
            for (var i = 1; i < coords.length; i++) {
                var difference = [coords[i][0] - coords[i - 1][0], coords[i][1] - coords[i - 1][1]];
                var maxAmount = Math.max(Math.abs(difference[0] / interval), Math.abs(difference[1] / interval));
                var minDifference = [difference[0] / maxAmount, difference[1] / maxAmount];
                var lastCoord = coords[i - 1];
                while (maxAmount > 1) {
                    lastCoord = [lastCoord[0] + minDifference[0], lastCoord[1] + minDifference[1]];
                    smoothCoords.push(lastCoord);
                    maxAmount--;
                }
                smoothCoords.push(coords[i]);
            }
            return smoothCoords;
        }
        // Функция нахождения расстояния между двумя точками на плоскости.
        function getDistance(point1, point2) {
            return Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2));
        }
        provide(AnimatedLine);
    });
});

$(document).ready(function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var resolution = window.devicePixelRatio || 1;

    var waves = [];
    var resized = false;

    var vw, vh;
    resizeCanvas();

    var wave1 = createWave(context, {
        amplitude: 50,
        duration: 2,
        //fillStyle: "rgba(97,198,224,1)",
        fillStyle: "rgba(255,255,255,0.68)",
        frequency: 1.5,
        width: vw,
        height: vh,
        segments: 100,
        waveHeight: 200 * 0.25
    });

    var wave2 = createWave(context, {
        amplitude: 30,
        duration: 3,
        //fillStyle: "rgba(97,198,224,0.68)",
        fillStyle: "rgba(255,255,255,1)",
        frequency: 1.5,
        width: vw,
        height: vh,
        segments: 100,
        waveHeight: 100 * 0.25
    });

    waves.push(wave1, wave2);

    TweenMax.to(waves, 10, {
        waveHeight: vh / 3,
        ease: Sine.easeInOut,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
    });

    TweenMax.to(wave1, 6, {
        amplitude: 40,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true
    });

    TweenMax.to(wave2, 7, {
        amplitude: 35,
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: true
    });

    window.addEventListener("resize", function () {
        resized = true;
    });

    TweenLite.ticker.addEventListener("tick", update);

    function update() {

        var len = waves.length;

        if (resized) {

            resizeCanvas();

            for (var i = 0; i < len; i++) {
                waves[i].resize(vw, vh);
            }

            resized = false;
        }

        context.clearRect(0, 0, vw, vh);
        context.globalCompositeOperation = "soft";

        for (var i = 0; i < len; i++) {
            waves[i].draw();
        }
    }

    function createWave(context, options) {

        options = options || {};

        // API
        var wave = {

            // Properties
            amplitude: options.amplitude || 200,
            context: context,
            curviness: options.curviness || 0.75,
            duration: options.duration || 2,
            fillStyle: options.fillStyle || "rgba(255,255,255)",
            frequency: options.frequency || 4,
            height: options.height || 600,
            points: [],
            segments: options.segments || 100,
            tweens: [],
            waveHeight: options.waveHeight || 300,
            width: options.width || 800,
            x: options.x || 0,
            y: options.y || 0,

            // Methods
            init: init,
            resize: resize,
            draw: draw,
            kill: kill
        };

        init();

        function kill() {

            var tweens = wave.tweens;
            var len = tweens.length;

            for (var i = 0; i < len; i++) {
                tweens[i].kill();
            }

            tweens.length = 0;
            wave.points.length = 0;
        }

        function init() {

            kill();

            var segments = wave.segments;
            var interval = wave.width / segments;

            for (var i = 0; i <= segments; i++) {

                var norm = i / segments;
                var point = {
                    x: wave.x + i * interval,
                    y: 1
                };

                var tween = TweenMax.to(point, wave.duration, {
                    y: -1,
                    repeat: -1,
                    yoyo: true,
                    ease: Sine.easeInOut
                }).progress(norm * wave.frequency);

                wave.tweens.push(tween);
                wave.points.push(point);
            }
        }

        function draw() {

            var points = wave.points;
            var len = points.length;

            var startY = wave.waveHeight;
            var height = wave.amplitude / 2;

            context.beginPath();
            context.moveTo(points[0].x, startY + points[0].y * height);

            for (var i = 1; i < len; i++) {

                var point = points[i];
                context.lineTo(point.x, startY + point.y * height);
            }

            context.lineTo(wave.x + wave.width, wave.y + wave.height);
            context.lineTo(wave.x, wave.y + wave.height);
            context.closePath();
            context.fillStyle = wave.fillStyle;
            context.fill();
        }

        function resize(width, height) {

            wave.width = width;
            wave.height = height;

            var points = wave.points;
            var len = points.length;
            var interval = wave.width / wave.segments;

            for (var i = 0; i < len; i++) {

                var point = points[i];
                point.x = wave.x + i * interval;
            }
        }

        return wave;
    }

    function resizeCanvas() {

        vw = window.innerWidth;
        //vh = window.innerHeight;
        vh = 100;

        canvas.width = vw * resolution;
        canvas.height = vh * resolution;

        canvas.style.width = vw + "px";
        canvas.style.height = vh + "px";

        context.scale(resolution, resolution);
    }
});

$(document).ready(function () {
    if ($('.catalog').length) {
        var video = document.querySelector('video'),
            container = document.querySelector('.catalog-main');

        var setVideoDimensions = function setVideoDimensions() {
            // Video's intrinsic dimensions
            var w = video.videoWidth,
                h = video.videoHeight;

            // Intrinsic Ratio
            // Will be more than 1 if W > H and less if W < H
            var videoRatio = (w / h).toFixed(2);

            // Get the container's computed styles
            //
            // Also calculate the min dimensions required (this will be
            // the container dimentions)
            var containerStyles = window.getComputedStyle(container),
                minW = parseInt(containerStyles.getPropertyValue('width')),
                minH = parseInt(containerStyles.getPropertyValue('height'));

            // What's the min:intrinsic dimensions
            //
            // The idea is to get which of the container dimension
            // has a higher value when compared with the equivalents
            // of the video. Imagine a 1200x700 container and
            // 1000x500 video. Then in order to find the right balance
            // and do minimum scaling, we have to find the dimension
            // with higher ratio.
            //
            // Ex: 1200/1000 = 1.2 and 700/500 = 1.4 - So it is best to
            // scale 500 to 700 and then calculate what should be the
            // right width. If we scale 1000 to 1200 then the height
            // will become 600 proportionately.
            var widthRatio = minW / w,
                heightRatio = minH / h;

            // Whichever ratio is more, the scaling
            // has to be done over that dimension
            if (widthRatio > heightRatio) {
                var newWidth = minW;
                var newHeight = Math.ceil(newWidth / videoRatio);
            } else {
                var newHeight = minH;
                var newWidth = Math.ceil(newHeight * videoRatio);
            }

            video.style.width = newWidth + 'px';
            video.style.height = newHeight + 'px';
        };

        video.addEventListener('loadedmetadata', setVideoDimensions, false);
        window.addEventListener('resize', setVideoDimensions, false);
    }
});

$(document).ready(function () {
    var ww = $(window).width();
    if (ww > 1259) {
        $('.excursion__photo-content').masonry({
            itemSelector: '.grid-item',
            columnWidth: 536,
            gutter: 28,
            horizontalOrder: true,
            resize: true
        });
    } else if (ww < 1260) {
        $('.excursion__photo-content').masonry({
            itemSelector: '.grid-item',
            columnWidth: 335,
            gutter: 18,
            horizontalOrder: true,
            resize: true
        });
    } else if (ww < 768) {
        $('.excursion__photo-content').masonry({
            itemSelector: '.grid-item',
            columnWidth: 335,
            gutter: 0,
            horizontalOrder: true,
            resize: true
        });
    }
});
$(function () {
    $('.main').addClass('loaded');
    $('.excursion').addClass('loaded');
});

/* $(document).scroll(function() {
    var st = $('.hidden-menu .open').scrollTop();
    if (st > 1){
        $('.header__logo').css("display", "none");

    } else {
        $('.header__logo').css("opacity", "1");
        
    }
  }); */

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map