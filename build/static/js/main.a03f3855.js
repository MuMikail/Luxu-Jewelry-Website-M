/*! For license information please see main.a03f3855.js.LICENSE.txt */
(()=>{var e={49:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!E.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:S.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function D(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+j(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),D(a,t,i,"",function(e){return e})):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+j(s=e[u],u);l+=D(s,t,i,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=D(s=s.value,t,i,c=o+j(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function A(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",function(e){return t.call(n,e,i++)}),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},L={transition:null},M={ReactCurrentDispatcher:_,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.act=O,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)k.call(t,u)&&!E.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return _.current.useCallback(e,t)},t.useContext=function(e){return _.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return _.current.useDeferredValue(e)},t.useEffect=function(e,t){return _.current.useEffect(e,t)},t.useId=function(){return _.current.useId()},t.useImperativeHandle=function(e,t,n){return _.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return _.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return _.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return _.current.useMemo(e,t)},t.useReducer=function(e,t,n){return _.current.useReducer(e,t,n)},t.useRef=function(e){return _.current.useRef(e)},t.useState=function(e){return _.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return _.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return _.current.useTransition()},t.version="18.3.1"},119:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(345)},204:(e,t,n)=>{"use strict";e.exports=n(969)},345:(e,t,n)=>{"use strict";var r=n(950),i=n(204);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),T=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),_=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var L=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var M=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=M&&e[M]||e["@@iterator"])?e:null}var N,z=Object.assign;function F(e){if(void 0===N)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var I=!1;function V(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function B(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case E:return"StrictMode";case D:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case j:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function $(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function J(e,t){X(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var ve=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ee=null;function Ce(e){if(e=bi(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Pe(e){Se?Ee?Ee.push(e):Ee=[e]:Se=e}function Te(){if(Se){var e=Se,t=Ee;if(Ee=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function je(e,t){return e(t)}function De(){}var Ae=!1;function Re(e,t,n){if(Ae)return e(t,n);Ae=!0;try{return je(e,t,n)}finally{Ae=!1,(null!==Se||null!==Ee)&&(De(),Te())}}function _e(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Le=!1;if(c)try{var Me={};Object.defineProperty(Me,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,Me)}catch(ce){Le=!1}function Oe(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ne=!1,ze=null,Fe=!1,Ie=null,Ve={onError:function(e){Ne=!0,ze=e}};function Be(e,t,n,r,i,o,a,s,l){Ne=!1,ze=null,Oe.apply(Ve,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $e(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ue(e)!==e)throw Error(o(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return He(i),e;if(a===r)return He(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ge=i.unstable_scheduleCallback,qe=i.unstable_cancelCallback,Ke=i.unstable_shouldYield,Qe=i.unstable_requestPaint,Xe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,Et,Ct,Pt=!1,Tt=[],jt=null,Dt=null,At=null,Rt=new Map,_t=new Map,Lt=[],Mt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_t.delete(t.pointerId)}}function Nt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=bi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function zt(e){var t=yi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$e(n)))return e.blockedOn=t,void Ct(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Ft(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function It(e,t,n){Ft(e)&&n.delete(t)}function Vt(){Pt=!1,null!==jt&&Ft(jt)&&(jt=null),null!==Dt&&Ft(Dt)&&(Dt=null),null!==At&&Ft(At)&&(At=null),Rt.forEach(It),_t.forEach(It)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Tt.length){Bt(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==jt&&Bt(jt,e),null!==Dt&&Bt(Dt,e),null!==At&&Bt(At,e),Rt.forEach(t),_t.forEach(t),n=0;n<Lt.length;n++)(r=Lt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&null===(n=Lt[0]).blockedOn;)zt(n),null===n.blockedOn&&Lt.shift()}var $t=x.ReactCurrentBatchConfig,Ht=!0;function Wt(e,t,n,r){var i=bt,o=$t.transition;$t.transition=null;try{bt=1,Gt(e,t,n,r)}finally{bt=i,$t.transition=o}}function Yt(e,t,n,r){var i=bt,o=$t.transition;$t.transition=null;try{bt=4,Gt(e,t,n,r)}finally{bt=i,$t.transition=o}}function Gt(e,t,n,r){if(Ht){var i=Kt(e,t,n,r);if(null===i)Hr(e,t,r,qt,n),Ot(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return jt=Nt(jt,e,t,n,r,i),!0;case"dragenter":return Dt=Nt(Dt,e,t,n,r,i),!0;case"mouseover":return At=Nt(At,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rt.set(o,Nt(Rt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_t.set(o,Nt(_t.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Ot(e,r),4&t&&-1<Mt.indexOf(e)){for(;null!==i;){var o=bi(i);if(null!==o&&wt(o),null===(o=Kt(e,t,n,r))&&Hr(e,t,r,qt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var qt=null;function Kt(e,t,n,r){if(qt=null,null!==(e=yi(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$e(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Xt?Xt.value:Xt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=z({},un,{view:0,detail:0}),pn=on(dn),fn=z({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=on(fn),mn=on(z({},fn,{dataTransfer:0})),gn=on(z({},dn,{relatedTarget:0})),vn=on(z({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=z({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(yn),xn=on(z({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return En}var Pn=z({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tn=on(Pn),jn=on(z({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Dn=on(z({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),An=on(z({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=z({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_n=on(Rn),Ln=[9,13,27,32],Mn=c&&"CompositionEvent"in window,On=null;c&&"documentMode"in document&&(On=document.documentMode);var Nn=c&&"TextEvent"in window&&!On,zn=c&&(!Mn||On&&8<On&&11>=On),Fn=String.fromCharCode(32),In=!1;function Vn(e,t){switch(e){case"keyup":return-1!==Ln.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$n[e.type]:"textarea"===t}function Wn(e,t,n,r){Pe(r),0<(t=Yr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Gn=null;function qn(e){Fr(e,0)}function Kn(e){if(G(xi(e)))return e}function Qn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Gn=Yn=null)}function nr(e){if("value"===e.propertyName&&Kn(Gn)){var t=[];Wn(t,Gn,e,we(e)),Re(qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Gn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Gn)}function or(e,t){if("click"===e)return Kn(t)}function ar(e,t){if("input"===e||"change"===e)return Kn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=q((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cr(n,o);var a=cr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==q(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Er={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return Sr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Pr=Cr("animationend"),Tr=Cr("animationiteration"),jr=Cr("animationstart"),Dr=Cr("transitionend"),Ar=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(e,t){Ar.set(e,t),l(t,[e])}for(var Lr=0;Lr<Rr.length;Lr++){var Mr=Rr[Lr];_r(Mr.toLowerCase(),"on"+(Mr[0].toUpperCase()+Mr.slice(1)))}_r(Pr,"onAnimationEnd"),_r(Tr,"onAnimationIteration"),_r(jr,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(Dr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function zr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,u){if(Be.apply(this,arguments),Ne){if(!Ne)throw Error(o(198));var c=ze;Ne=!1,ze=null,Fe||(Fe=!0,Ie=c)}}(r,t,void 0,e),e.currentTarget=null}function Fr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;zr(i,s,u),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;zr(i,s,u),o=l}}}if(Fe)throw e=Ie,Fe=!1,Ie=null,e}function Ir(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||($r(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),$r(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,a.forEach(function(t){"selectionchange"!==t&&(Nr.has(t)||Vr(t,!1,e),Vr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Vr("selectionchange",!1,t))}}function $r(e,t,n,r){switch(Qt(t)){case 1:var i=Wt;break;case 4:i=Yt;break;default:i=Gt}n=i.bind(null,t,n,e),i=void 0,!Le||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=yi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Re(function(){var r=o,i=we(n),a=[];e:{var s=Ar.get(e);if(void 0!==s){var l=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Tn;break;case"focusin":u="focus",l=gn;break;case"focusout":u="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Dn;break;case Pr:case Tr:case jr:l=vn;break;case Dr:l=An;break;case"scroll":l=pn;break;case"wheel":l=_n;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=jn}var c=0!==(4&t),d=!c&&"scroll"===e,p=c?null!==s?s+"Capture":null:s;c=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=_e(h,p))&&c.push(Wr(h,m,f)))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,n,i),a.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!yi(u)&&!u[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?yi(u):null)&&(u!==(d=Ue(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=jn,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==l?s:xi(l),f=null==u?s:xi(u),(s=new c(m,h+"leave",l,n,i)).target=d,s.relatedTarget=f,m=null,yi(i)===r&&((c=new c(p,h+"enter",u,n,i)).target=f,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(p=u,h=0,f=c=l;f;f=Gr(f))h++;for(f=0,m=p;m;m=Gr(m))f++;for(;0<h-f;)c=Gr(c),h--;for(;0<f-h;)p=Gr(p),f--;for(;h--;){if(c===p||null!==p&&c===p.alternate)break e;c=Gr(c),p=Gr(p)}c=null}else c=null;null!==l&&qr(a,s,l,c,!1),null!==u&&null!==d&&qr(a,d,u,c,!0)}if("select"===(l=(s=r?xi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(Hn(s))if(Xn)g=ar;else{g=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Wn(a,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?xi(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(a,n,i)}var y;if(Mn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Un?Vn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(zn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==b?"onCompositionEnd"===b&&Un&&(y=en()):(Jt="value"in(Xt=i)?Xt.value:Xt.textContent,Un=!0)),0<(v=Yr(r,b)).length&&(b=new xn(b,e,null,n,i),a.push({event:b,listeners:v}),y?b.data=y:null!==(y=Bn(n))&&(b.data=y))),(y=Nn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(In=!0,Fn);case"textInput":return(e=t.data)===Fn&&In?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Mn&&Vn(e,t)?(e=en(),Zt=Jt=Xt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new xn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Fr(a,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=_e(e,n))&&r.unshift(Wr(e,o,i)),null!=(o=_e(e,t))&&r.push(Wr(e,o,i))),e=e.return}return r}function Gr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function qr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=_e(n,o))&&a.unshift(Wr(n,l,s)):i||null!=(l=_e(n,o))&&a.push(Wr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Kr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Kr,"\n").replace(Qr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,fi="__reactProps$"+di,hi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,vi="__reactHandles$"+di;function yi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[pi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function bi(e){return!(e=e[pi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[fi]||null}var ki=[],Si=-1;function Ei(e){return{current:e}}function Ci(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Pi(e,t){Si++,ki[Si]=e.current,e.current=t}var Ti={},ji=Ei(Ti),Di=Ei(!1),Ai=Ti;function Ri(e,t){var n=e.type.contextTypes;if(!n)return Ti;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _i(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Li(){Ci(Di),Ci(ji)}function Mi(e,t,n){if(ji.current!==Ti)throw Error(o(168));Pi(ji,t),Pi(Di,n)}function Oi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,$(e)||"Unknown",i));return z({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ti,Ai=ji.current,Pi(ji,e),Pi(Di,Di.current),!0}function zi(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Oi(e,t,Ai),r.__reactInternalMemoizedMergedChildContext=e,Ci(Di),Ci(ji),Pi(ji,e)):Ci(Di),Pi(Di,n)}var Fi=null,Ii=!1,Vi=!1;function Bi(e){null===Fi?Fi=[e]:Fi.push(e)}function Ui(){if(!Vi&&null!==Fi){Vi=!0;var e=0,t=bt;try{var n=Fi;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Fi=null,Ii=!1}catch(i){throw null!==Fi&&(Fi=Fi.slice(e+1)),Ge(Ze,Ui),i}finally{bt=t,Vi=!1}}return null}var $i=[],Hi=0,Wi=null,Yi=0,Gi=[],qi=0,Ki=null,Qi=1,Xi="";function Ji(e,t){$i[Hi++]=Yi,$i[Hi++]=Wi,Wi=e,Yi=t}function Zi(e,t,n){Gi[qi++]=Qi,Gi[qi++]=Xi,Gi[qi++]=Ki,Ki=e;var r=Qi;e=Xi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qi=1<<32-at(t)+i|n<<i|r,Xi=o+e}else Qi=1<<o|n<<i|r,Xi=e}function eo(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function to(e){for(;e===Wi;)Wi=$i[--Hi],$i[Hi]=null,Yi=$i[--Hi],$i[Hi]=null;for(;e===Ki;)Ki=Gi[--qi],Gi[qi]=null,Xi=Gi[--qi],Gi[qi]=null,Qi=Gi[--qi],Gi[qi]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Ru(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ki?{id:Qi,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ru(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ui(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!io)return co(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw fo(),Error(o(418));for(;t;)ao(e,t),t=ui(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ui(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=ui(e.nextSibling)}function ho(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Lu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=zu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===_&&bo(o)===t.type)?((r=i(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Mu(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Fu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Ou(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=zu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Mu(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case k:return(t=Fu(t,e.mode,n)).return=e,t;case _:return p(e,(0,t._init)(t._payload),n)}if(te(t)||O(t))return(t=Ou(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?u(e,t,n,r):null;case k:return n.key===i?c(e,t,n,r):null;case _:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||O(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case _:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||O(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function m(i,o,s,l){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=f(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return n(i,d),io&&Ji(i,m),u;if(null===d){for(;m<s.length;m++)null!==(d=p(i,s[m],l))&&(o=a(d,o,m),null===c?u=d:c.sibling=d,c=d);return io&&Ji(i,m),u}for(d=r(i,d);m<s.length;m++)null!==(g=h(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(i,e)}),io&&Ji(i,m),u}function g(i,s,l,u){var c=O(l);if("function"!==typeof c)throw Error(o(150));if(null==(l=c.call(l)))throw Error(o(151));for(var d=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=f(i,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(i,m),s=a(b,s,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(i,m),io&&Ji(i,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(i,y.value,u))&&(s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return io&&Ji(i,g),c}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=h(m,i,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(i,e)}),io&&Ji(i,g),c}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=o;null!==c;){if(c.key===u){if((u=a.type)===S){if(7===c.tag){n(r,c.sibling),(o=i(c,a.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===_&&bo(u)===c.type){n(r,c.sibling),(o=i(c,a.props)).ref=vo(r,c,a),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===S?((o=Ou(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Mu(a.type,a.key,a.props,null,r.mode,l)).ref=vo(r,o,a),l.return=r,r=l)}return s(r);case k:e:{for(c=a.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Fu(a,r.mode,l)).return=r,r=o}return s(r);case _:return e(r,o,(c=a._init)(a._payload),l)}if(te(a))return m(r,o,a,l);if(O(a))return g(r,o,a,l);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=zu(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=xo(!0),ko=xo(!1),So=Ei(null),Eo=null,Co=null,Po=null;function To(){Po=Co=Eo=null}function jo(e){var t=So.current;Ci(So),e._currentValue=t}function Do(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ao(e,t){Eo=e,Po=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bs=!0),e.firstContext=null)}function Ro(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===Eo)throw Error(o(308));Co=e,Eo.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var _o=null;function Lo(e){null===_o?_o=[e]:_o.push(e)}function Mo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Lo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Oo(e,r)}function Oo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var No=!1;function zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Io(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&jl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Oo(e,n)}return null===(i=r.interleaved)?(t.next=t,Lo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Oo(e,n)}function Bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;No=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?o=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,c=u=l=null,s=o;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==c&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=z({},d,p);break e;case 2:No=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=f,l=d):c=c.next=f,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Nl|=a,e.lanes=a,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Wo={},Yo=Ei(Wo),Go=Ei(Wo),qo=Ei(Wo);function Ko(e){if(e===Wo)throw Error(o(174));return e}function Qo(e,t){switch(Pi(qo,t),Pi(Go,e),Pi(Yo,Wo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Yo),Pi(Yo,t)}function Xo(){Ci(Yo),Ci(Go),Ci(qo)}function Jo(e){Ko(qo.current);var t=Ko(Yo.current),n=le(t,e.type);t!==n&&(Pi(Go,e),Pi(Yo,n))}function Zo(e){Go.current===e&&(Ci(Yo),Ci(Go))}var ea=Ei(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=x.ReactCurrentDispatcher,oa=x.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ua=null,ca=!1,da=!1,pa=0,fa=0;function ha(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:es,e=n(r,i),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(o(301));a+=1,ua=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Ja,t=null!==la&&null!==la.next,aa=0,ua=la=sa=null,ca=!1,t)throw Error(o(300));return e}function va(){var e=0!==pa;return pa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?sa.memoizedState=ua=e:ua=ua.next=e,ua}function ba(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ua?sa.memoizedState:ua.next;if(null!==t)ua=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ua?sa.memoizedState=ua=e:ua=ua.next=e}return ua}function xa(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ba(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=p,s=r):u=u.next=p,sa.lanes|=d,Nl|=d}c=c.next}while(null!==c&&c!==a);null===u?s=r:u.next=l,sr(r,t.memoizedState)||(bs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,Nl|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=ba(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(bs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function Ea(e,t){var n=sa,r=ba(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,bs=!0),r=r.queue,Na(Ta.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,Ra(9,Pa.bind(null,n,r,i,t),void 0,null),null===Dl)throw Error(o(349));0!==(30&aa)||Ca(n,t,i)}return i}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Pa(e,t,n,r){t.value=n,t.getSnapshot=r,ja(t)&&Da(e)}function Ta(e,t,n){return n(function(){ja(t)&&Da(e)})}function ja(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Da(e){var t=Oo(e,1);null!==t&&nu(t,e,1,-1)}function Aa(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=qa.bind(null,sa,e),[t.memoizedState,e]}function Ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function _a(){return ba().memoizedState}function La(e,t,n,r){var i=ya();sa.flags|=e,i.memoizedState=Ra(1|t,n,void 0,void 0===r?null:r)}function Ma(e,t,n,r){var i=ba();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=Ra(t,n,o,r))}sa.flags|=e,i.memoizedState=Ra(1|t,n,o,r)}function Oa(e,t){return La(8390656,8,e,t)}function Na(e,t){return Ma(2048,8,e,t)}function za(e,t){return Ma(4,2,e,t)}function Fa(e,t){return Ma(4,4,e,t)}function Ia(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Va(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4,4,Ia.bind(null,t,e),n)}function Ba(){}function Ua(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $a(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,bs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Nl|=n,e.baseState=!0),t)}function Wa(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{bt=n,oa.transition=r}}function Ya(){return ba().memoizedState}function Ga(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ka(e))Qa(t,n);else if(null!==(n=Mo(e,t,n,r))){nu(n,e,r,eu()),Xa(n,t,r)}}function qa(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ka(e))Qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,Lo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Mo(e,t,i,r))&&(nu(n,e,r,i=eu()),Xa(n,t,r))}}function Ka(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Qa(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Ja={readContext:Ro,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:Ro,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Ro,useEffect:Oa,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,La(4194308,4,Ia.bind(null,t,e),n)},useLayoutEffect:function(e,t){return La(4194308,4,e,t)},useInsertionEffect:function(e,t){return La(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ga.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Aa,useDebugValue:Ba,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Wa.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Dl)throw Error(o(349));0!==(30&aa)||Ca(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Oa(Ta.bind(null,r,a,e),[e]),r.flags|=2048,Ra(9,Pa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Dl.identifierPrefix;if(io){var n=Xi;t=":"+t+"R"+(n=(Qi&~(1<<32-at(Qi)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ro,useCallback:Ua,useContext:Ro,useEffect:Na,useImperativeHandle:Va,useInsertionEffect:za,useLayoutEffect:Fa,useMemo:$a,useReducer:wa,useRef:_a,useState:function(){return wa(xa)},useDebugValue:Ba,useDeferredValue:function(e){return Ha(ba(),la.memoizedState,e)},useTransition:function(){return[wa(xa)[0],ba().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Ea,useId:Ya,unstable_isNewReconciler:!1},ts={readContext:Ro,useCallback:Ua,useContext:Ro,useEffect:Na,useImperativeHandle:Va,useInsertionEffect:za,useLayoutEffect:Fa,useMemo:$a,useReducer:ka,useRef:_a,useState:function(){return ka(xa)},useDebugValue:Ba,useDeferredValue:function(e){var t=ba();return null===la?t.memoizedState=e:Ha(t,la.memoizedState,e)},useTransition:function(){return[ka(xa)[0],ba().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Ea,useId:Ya,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=z({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:z({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Io(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,i))&&(nu(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Io(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Vo(e,o,i))&&(nu(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=Io(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Vo(e,i,r))&&(nu(t,e,r,n),Bo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=Ti,o=t.contextType;return"object"===typeof o&&null!==o?o=Ro(o):(i=_i(t)?Ai:ji.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ri(e,i):Ti),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zo(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Ro(o):(o=_i(t)?Ai:ji.current,i.context=Ri(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function us(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Io(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,Wl=r),ds(0,t)},n}function hs(e,t,n){(n=Io(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Io(-1,1)).tag=2,Vo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=x.ReactCurrentOwner,bs=!1;function xs(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Ao(t,i),r=ga(e,t,n,r,o,i),n=va(),null===e||bs?(io&&n&&eo(t),t.flags|=1,xs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function ks(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||_u(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Mu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ss(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Hs(e,t,i)}return t.flags|=1,(e=Lu(o,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(bs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Hs(e,t,i);0!==(131072&e.flags)&&(bs=!0)}}return Ps(e,t,n,r,i)}function Es(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pi(Ll,_l),_l|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pi(Ll,_l),_l|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Pi(Ll,_l),_l|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Pi(Ll,_l),_l|=r;return xs(e,t,i,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,n,r,i){var o=_i(n)?Ai:ji.current;return o=Ri(t,o),Ao(t,i),n=ga(e,t,n,r,o,i),r=va(),null===e||bs?(io&&r&&eo(t),t.flags|=1,xs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function Ts(e,t,n,r,i){if(_i(n)){var o=!0;Ni(t)}else o=!1;if(Ao(t,i),null===t.stateNode)$s(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ro(u):u=Ri(t,u=_i(n)?Ai:ji.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==u)&&ss(t,a,r,u),No=!1;var p=t.memoizedState;a.state=p,$o(t,r,a,i),l=t.memoizedState,s!==r||p!==l||Di.current||No?("function"===typeof c&&(rs(t,n,c,r),l=t.memoizedState),(s=No||os(t,n,s,r,p,l,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Fo(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ns(t.type,s),a.props=u,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ro(l):l=Ri(t,l=_i(n)?Ai:ji.current);var f=n.getDerivedStateFromProps;(c="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),No=!1,p=t.memoizedState,a.state=p,$o(t,r,a,i);var h=t.memoizedState;s!==d||p!==h||Di.current||No?("function"===typeof f&&(rs(t,n,f,r),h=t.memoizedState),(u=No||os(t,n,u,r,p,h,l)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return js(e,t,n,r,o,i)}function js(e,t,n,r,i,o){Cs(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&zi(t,n,!1),Hs(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):xs(e,t,s,o),t.memoizedState=r.state,i&&zi(t,n,!0),t.child}function Ds(e){var t=e.stateNode;t.pendingContext?Mi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Mi(0,t.context,!1),Qo(e,t.containerInfo)}function As(e,t,n,r,i){return ho(),mo(i),t.flags|=256,xs(e,t,n,r),t.child}var Rs,_s,Ls,Ms,Os={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function zs(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Pi(ea,1&a),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Nu(l,i,0,null),e=Ou(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ns(n),t.memoizedState=Os,e):Fs(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Is(e,t,s,r=cs(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Nu({mode:"visible",children:r.children},i,0,null),(a=Ou(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=Ns(s),t.memoizedState=Os,a);if(0===(1&t.mode))return Is(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Is(e,t,s,r=cs(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),bs||l){if(null!==(r=Dl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Oo(e,i),nu(r,e,i,-1))}return mu(),Is(e,t,s,r=cs(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Tu.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ui(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Gi[qi++]=Qi,Gi[qi++]=Xi,Gi[qi++]=Ki,Qi=e.id,Xi=e.overflow,Ki=t),t=Fs(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=Lu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Lu(r,s):(s=Ou(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ns(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Os,i}return e=(s=e.child).sibling,i=Lu(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Fs(e,t){return(t=Nu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Is(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Fs(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Do(e.return,t,n)}function Bs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pi(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,o);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $s(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Nl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Lu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ws(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gs(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return _i(t.type)&&Li(),Ys(t),null;case 3:return r=t.stateNode,Xo(),Ci(Di),Ci(ji),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(au(oo),oo=null))),_s(e,t),Ys(t),null;case 5:Zo(t);var i=Ko(qo.current);if(n=t.type,null!==e&&null!=t.stateNode)Ls(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ys(t),null}if(e=Ko(Yo.current),po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pi]=t,r[fi]=a,e=0!==(1&t.mode),n){case"dialog":Ir("cancel",r),Ir("close",r);break;case"iframe":case"object":case"embed":Ir("load",r);break;case"video":case"audio":for(i=0;i<Or.length;i++)Ir(Or[i],r);break;case"source":Ir("error",r);break;case"img":case"image":case"link":Ir("error",r),Ir("load",r);break;case"details":Ir("toggle",r);break;case"input":Q(r,a),Ir("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ir("invalid",r);break;case"textarea":ie(r,a),Ir("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",""+u]):s.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Ir("scroll",r)}switch(n){case"input":Y(r),Z(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[fi]=r,Rs(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(n,r),n){case"dialog":Ir("cancel",e),Ir("close",e),i=r;break;case"iframe":case"object":case"embed":Ir("load",e),i=r;break;case"video":case"audio":for(i=0;i<Or.length;i++)Ir(Or[i],e);i=r;break;case"source":Ir("error",e),i=r;break;case"img":case"image":case"link":Ir("error",e),Ir("load",e),i=r;break;case"details":Ir("toggle",e),i=r;break;case"input":Q(e,r),i=K(e,r),Ir("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=z({},r,{value:void 0}),Ir("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Ir("invalid",e)}for(a in ye(n,i),u=i)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&pe(e,c):"number"===typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Ir("scroll",e):null!=c&&b(e,a,c,l))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)Ms(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Ko(qo.current),Ko(Yo.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Ys(t),null;case 13:if(Ci(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))fo(),ho(),t.flags|=98560,a=!1;else if(a=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),a=!1}else null!==oo&&(au(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ml&&(Ml=3):mu())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return Xo(),_s(e,t),null===e&&Ur(t.stateNode.containerInfo),Ys(t),null;case 10:return jo(t.type._context),Ys(t),null;case 19:if(Ci(ea),null===(a=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Ws(a,!1);else{if(0!==Ml||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Ws(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pi(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Ul&&(t.flags|=128,r=!0,Ws(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ws(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Ys(t),null}else 2*Xe()-a.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,Ws(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,n=ea.current,Pi(ea,r?1&n|2:1&n),t):(Ys(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&_l)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function qs(e,t){switch(to(t),t.tag){case 1:return _i(t.type)&&Li(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),Ci(Di),Ci(ji),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ci(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(ea),null;case 4:return Xo(),null;case 10:return jo(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Rs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_s=function(){},Ls=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ko(Yo.current);var o,a=null;switch(n){case"input":i=K(e,i),r=K(e,r),a=[];break;case"select":i=z({},i,{value:void 0}),r=z({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(s.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(s.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ir("scroll",e),a||l===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ms=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ks=!1,Qs=!1,Xs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[mi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}var cl=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Qs||Zs(n,t);case 6:var r=cl,i=dl;cl=null,pl(e,t,n),dl=i,null!==(cl=r)&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cl.removeChild(n.stateNode));break;case 18:null!==cl&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Ut(e)):li(cl,n.stateNode));break;case 4:r=cl,i=dl,cl=n.stateNode.containerInfo,dl=!0,pl(e,t,n),cl=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Qs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Eu(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,pl(e,t,n),Qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach(function(t){var r=ju.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:cl=l.stateNode,dl=!1;break e;case 3:case 4:cl=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===cl)throw Error(o(160));fl(a,s,i),cl=null,dl=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){Eu(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Eu(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===a.type&&null!=a.name&&X(i,a),be(l,s);var c=be(l,a);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):b(i,d,p,c)}switch(l){case"input":J(i,a);break;case"textarea":oe(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(i,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[fi]=a}catch(g){Eu(e,e.return,g)}}break;case 6:if(ml(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Eu(e,e.return,g)}}break;case 3:if(ml(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ml(t,e),vl(e);break;case 13:ml(t,e),vl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Bl=Xe())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Qs=(c=Qs)||d,ml(t,e),Qs=c):ml(t,e),vl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(p=Js=d;null!==Js;){switch(h=(f=Js).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:Zs(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Zs(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==h?(h.return=f,Js=h):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,c?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(u=p.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=me("display",s))}catch(g){Eu(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),vl(e),4&r&&hl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),ul(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Eu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Js=e,bl(e,t,n)}function bl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Ks;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Ks;var u=Qs;if(Ks=a,(Qs=l)&&!u)for(Js=i;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?kl(i):null!==l?(l.return=a,Js=l):kl(i);for(;null!==o;)Js=o,bl(o,t,n),o=o.sibling;Js=i,Ks=s,Qs=u}xl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Js=o):xl(e)}}function xl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ho(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(o(163))}Qs||512&t.flags&&il(t)}catch(f){Eu(t,t.return,f)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Eu(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Eu(t,i,l)}}var o=t.return;try{il(t)}catch(l){Eu(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Eu(t,a,l)}}}catch(l){Eu(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,El=Math.ceil,Cl=x.ReactCurrentDispatcher,Pl=x.ReactCurrentOwner,Tl=x.ReactCurrentBatchConfig,jl=0,Dl=null,Al=null,Rl=0,_l=0,Ll=Ei(0),Ml=0,Ol=null,Nl=0,zl=0,Fl=0,Il=null,Vl=null,Bl=0,Ul=1/0,$l=null,Hl=!1,Wl=null,Yl=null,Gl=!1,ql=null,Kl=0,Ql=0,Xl=null,Jl=-1,Zl=0;function eu(){return 0!==(6&jl)?Xe():-1!==Jl?Jl:Jl=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&jl)&&0!==Rl?Rl&-Rl:null!==go.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nu(e,t,n,r){if(50<Ql)throw Ql=0,Xl=null,Error(o(185));vt(e,n,r),0!==(2&jl)&&e===Dl||(e===Dl&&(0===(2&jl)&&(zl|=n),4===Ml&&su(e,Rl)),ru(e,r),1===n&&0===jl&&0===(1&t.mode)&&(Ul=Xe()+500,Ii&&Ui()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=ft(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=pt(e,e===Dl?Rl:0);if(0===r)null!==n&&qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&qe(n),1===t)0===e.tag?function(e){Ii=!0,Bi(e)}(lu.bind(null,e)):Bi(lu.bind(null,e)),ai(function(){0===(6&jl)&&Ui()}),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Du(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Jl=-1,Zl=0,0!==(6&jl))throw Error(o(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=pt(e,e===Dl?Rl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var i=jl;jl|=2;var a=hu();for(Dl===e&&Rl===t||($l=null,Ul=Xe()+500,pu(e,t));;)try{yu();break}catch(l){fu(e,l)}To(),Cl.current=a,jl=i,null!==Al?t=0:(Dl=null,Rl=0,t=Ml)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t)throw n=Ol,pu(e,0),su(e,r),ru(e,Xe()),n;if(6===t)su(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gu(e,r))&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t))throw n=Ol,pu(e,0),su(e,r),ru(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Vl,$l);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=Bl+500-Xe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wu.bind(null,e,Vl,$l),t);break}wu(e,Vl,$l);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*El(r/1960))-r)){e.timeoutHandle=ri(wu.bind(null,e,Vl,$l),r);break}wu(e,Vl,$l);break;default:throw Error(o(329))}}}return ru(e,Xe()),e.callbackNode===n?iu.bind(null,e):null}function ou(e,t){var n=Il;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Vl,Vl=n,null!==t&&au(t)),e}function au(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function su(e,t){for(t&=~Fl,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(0!==(6&jl))throw Error(o(327));ku();var t=pt(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ol,pu(e,0),su(e,t),ru(e,Xe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Vl,$l),ru(e,Xe()),null}function uu(e,t){var n=jl;jl|=1;try{return e(t)}finally{0===(jl=n)&&(Ul=Xe()+500,Ii&&Ui())}}function cu(e){null!==ql&&0===ql.tag&&0===(6&jl)&&ku();var t=jl;jl|=1;var n=Tl.transition,r=bt;try{if(Tl.transition=null,bt=1,e)return e()}finally{bt=r,Tl.transition=n,0===(6&(jl=t))&&Ui()}}function du(){_l=Ll.current,Ci(Ll)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Al)for(n=Al.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Li();break;case 3:Xo(),Ci(Di),Ci(ji),ra();break;case 5:Zo(r);break;case 4:Xo();break;case 13:case 19:Ci(ea);break;case 10:jo(r.type._context);break;case 22:case 23:du()}n=n.return}if(Dl=e,Al=e=Lu(e.current,null),Rl=_l=t,Ml=0,Ol=null,Fl=zl=Nl=0,Vl=Il=null,null!==_o){for(t=0;t<_o.length;t++)if(null!==(r=(n=_o[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}_o=null}return e}function fu(e,t){for(;;){var n=Al;try{if(To(),ia.current=Ja,ca){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ca=!1}if(aa=0,ua=la=sa=null,da=!1,pa=0,Pl.current=null,null===n||null===n.return){Ml=1,Ol=t,Al=null;break}e:{var a=e,s=n.return,l=n,u=t;if(t=Rl,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,vs(h,s,l,0,t),1&h.mode&&ms(a,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ms(a,c,t),mu();break e}u=Error(o(426))}else if(io&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),mo(us(u,l));break e}}a=u=us(u,l),4!==Ml&&(Ml=2),null===Il?Il=[a]:Il.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,fs(0,u,t));break e;case 1:l=u;var y=a.type,b=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Yl||!Yl.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,hs(a,l,t));break e}}a=a.return}while(null!==a)}xu(n)}catch(x){t=x,Al===n&&null!==n&&(Al=n=n.return);continue}break}}function hu(){var e=Cl.current;return Cl.current=Ja,null===e?Ja:e}function mu(){0!==Ml&&3!==Ml&&2!==Ml||(Ml=4),null===Dl||0===(268435455&Nl)&&0===(268435455&zl)||su(Dl,Rl)}function gu(e,t){var n=jl;jl|=2;var r=hu();for(Dl===e&&Rl===t||($l=null,pu(e,t));;)try{vu();break}catch(i){fu(e,i)}if(To(),jl=n,Cl.current=r,null!==Al)throw Error(o(261));return Dl=null,Rl=0,Ml}function vu(){for(;null!==Al;)bu(Al)}function yu(){for(;null!==Al&&!Ke();)bu(Al)}function bu(e){var t=Sl(e.alternate,e,_l);e.memoizedProps=e.pendingProps,null===t?xu(e):Al=t,Pl.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Gs(n,t,_l)))return void(Al=n)}else{if(null!==(n=qs(n,t)))return n.flags&=32767,void(Al=n);if(null===e)return Ml=6,void(Al=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Al=t);Al=t=e}while(null!==t);0===Ml&&(Ml=5)}function wu(e,t,n){var r=bt,i=Tl.transition;try{Tl.transition=null,bt=1,function(e,t,n,r){do{ku()}while(null!==ql);if(0!==(6&jl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Dl&&(Al=Dl=null,Rl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Gl||(Gl=!0,Du(tt,function(){return ku(),null})),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Tl.transition,Tl.transition=null;var s=bt;bt=1;var l=jl;jl|=4,Pl.current=null,function(e,t){if(ei=Ht,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(u=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++c===i&&(l=s),f===a&&++d===r&&(u=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),hr(ti),Ht=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Qe(),jl=l,bt=s,Tl.transition=a}else e.current=n;if(Gl&&(Gl=!1,ql=e,Kl=i),a=e.pendingLanes,0===a&&(Yl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,e=Wl,Wl=null,e;0!==(1&Kl)&&0!==e.tag&&ku(),a=e.pendingLanes,0!==(1&a)?e===Xl?Ql++:(Ql=0,Xl=e):Ql=0,Ui()}(e,t,n,r)}finally{Tl.transition=i,bt=r}return null}function ku(){if(null!==ql){var e=xt(Kl),t=Tl.transition,n=bt;try{if(Tl.transition=null,bt=16>e?16:e,null===ql)var r=!1;else{if(e=ql,ql=null,Kl=0,0!==(6&jl))throw Error(o(331));var i=jl;for(jl|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Js=c;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Js=p;else for(;null!==Js;){var f=(d=Js).sibling,h=d.return;if(ol(d),d===c){Js=null;break}if(null!==f){f.return=h,Js=f;break}Js=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Js=y;break e}Js=a.return}}var b=e.current;for(Js=b;null!==Js;){var x=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Js=x;else e:for(s=b;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){Eu(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(jl=i,Ui(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{bt=n,Tl.transition=t}}return!1}function Su(e,t,n){e=Vo(e,t=fs(0,t=us(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Vo(t,e=hs(t,e=us(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Dl===e&&(Rl&n)===n&&(4===Ml||3===Ml&&(130023424&Rl)===Rl&&500>Xe()-Bl?pu(e,0):Fl|=n),ru(e,t)}function Pu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Oo(e,t))&&(vt(e,t,n),ru(e,n))}function Tu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pu(e,n)}function ju(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Pu(e,n)}function Du(e,t){return Ge(e,t)}function Au(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ru(e,t,n,r){return new Au(e,t,n,r)}function _u(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lu(e,t){var n=e.alternate;return null===n?((n=Ru(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mu(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)_u(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Ou(n.children,i,a,t);case E:s=8,i|=8;break;case C:return(e=Ru(12,n,t,2|i)).elementType=C,e.lanes=a,e;case D:return(e=Ru(13,n,t,i)).elementType=D,e.lanes=a,e;case A:return(e=Ru(19,n,t,i)).elementType=A,e.lanes=a,e;case L:return Nu(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case P:s=10;break e;case T:s=9;break e;case j:s=11;break e;case R:s=14;break e;case _:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Ru(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Ou(e,t,n,r){return(e=Ru(7,e,r,t)).lanes=n,e}function Nu(e,t,n,r){return(e=Ru(22,e,r,t)).elementType=L,e.lanes=n,e.stateNode={isHidden:!1},e}function zu(e,t,n){return(e=Ru(6,e,null,t)).lanes=n,e}function Fu(e,t,n){return(t=Ru(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Iu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,o,a,s,l){return e=new Iu(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Ru(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zo(o),e}function Bu(e){if(!e)return Ti;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_i(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(_i(n))return Oi(e,n,t)}return t}function Uu(e,t,n,r,i,o,a,s,l){return(e=Vu(n,r,!0,e,0,o,0,s,l)).context=Bu(null),n=e.current,(o=Io(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,Vo(n,o,i),e.current.lanes=i,vt(e,i,r),ru(e,r),e}function $u(e,t,n,r){var i=t.current,o=eu(),a=tu(i);return n=Bu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Io(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Vo(i,t,a))&&(nu(e,i,a,o),Bo(e,i,a)),a}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Di.current)bs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bs=!1,function(e,t,n){switch(t.tag){case 3:Ds(t),ho();break;case 5:Jo(t);break;case 1:_i(t.type)&&Ni(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Pi(So,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Pi(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?zs(e,t,n):(Pi(ea,1&ea.current),null!==(e=Hs(e,t,n))?e.sibling:null);Pi(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pi(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,n)}return Hs(e,t,n)}(e,t,n);bs=0!==(131072&e.flags)}else bs=!1,io&&0!==(1048576&t.flags)&&Zi(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$s(e,t),e=t.pendingProps;var i=Ri(t,ji.current);Ao(t,n),i=ga(null,t,r,e,i,n);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_i(r)?(a=!0,Ni(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,zo(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=js(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),xs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($s(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return _u(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===j)return 11;if(e===R)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Ps(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ts(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Ds(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Fo(e,t),$o(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=As(e,t,r,n,i=us(Error(o(423)),t));break e}if(r!==i){t=As(e,t,r,n,i=us(Error(o(424)),t));break e}for(ro=ui(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===i){t=Hs(e,t,n);break e}xs(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&uo(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),Cs(e,t),xs(e,t,s,n),t.child;case 6:return null===e&&uo(t),null;case 13:return zs(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):xs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return xs(e,t,t.pendingProps,n),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Pi(So,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!Di.current){t=Hs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Io(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Do(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Do(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}xs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ao(t,n),r=r(i=Ro(i)),t.flags|=1,xs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),$s(e,t),t.tag=1,_i(r)?(e=!0,Ni(t)):e=!1,Ao(t,n),as(t,r,i),ls(t,r,i,n),js(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return Es(e,t,n)}throw Error(o(156,t.tag))};var Gu="function"===typeof reportError?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}function Ku(e){this._internalRoot=e}function Qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Hu(a);s.call(e)}}$u(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Hu(a);o.call(e)}}var a=Uu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=a,e[hi]=a.current,Ur(8===e.nodeType?e.parentNode:e),cu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Hu(l);s.call(e)}}var l=Vu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=l,e[hi]=l.current,Ur(8===e.nodeType?e.parentNode:e),cu(function(){$u(t,l,n,r)}),l}(n,t,e,i,r);return Hu(a)}Ku.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));$u(e,t,null,null)},Ku.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu(function(){$u(null,e,null,null)}),t[hi]=null}},Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&0!==t&&t<Lt[n].priority;n++);Lt.splice(n,0,e),0===n&&zt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Xe()),0===(6&jl)&&(Ul=Xe()+500,Ui()))}break;case 13:cu(function(){var t=Oo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}}),Yu(e,1)}},kt=function(e){if(13===e.tag){var t=Oo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Yu(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Oo(e,t);if(null!==n)nu(n,e,t,eu());Yu(e,t)}},Et=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));G(r),J(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},je=uu,De=cu;var ec={usingClientEntryPoint:!1,Events:[bi,xi,wi,Pe,Te,uu]},tc={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qu(e))throw Error(o(299));var n=!1,r="",i=Gu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Gu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uu(t,null,e,1,null!=n?n:null,i,0,a,s),e[hi]=t.current,Ur(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ku(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu(function(){Zu(null,null,e,!1,function(){e._reactRootContainer=null,e[hi]=null})}),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},352:(e,t,n)=>{"use strict";var r=n(119);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},403:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},414:(e,t,n)=>{"use strict";e.exports=n(654)},654:(e,t,n)=>{"use strict";var r=n(950),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},950:(e,t,n)=>{"use strict";e.exports=n(49)},969:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,n))u<i&&0>o(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<i&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,L(k);else{var t=r(c);null!==t&&M(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,y(P),P=-1),h=!0;var o=f;try{for(x(n),p=r(u);null!==p&&(!(p.expirationTime>n)||e&&!D());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(u)&&i(u),x(n)}else i(u);p=r(u)}if(null!==p)var l=!0;else{var d=r(c);null!==d&&M(w,d.startTime-n),l=!1}return l}finally{p=null,f=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,C=null,P=-1,T=5,j=-1;function D(){return!(t.unstable_now()-j<T)}function A(){if(null!==C){var e=t.unstable_now();j=e;var n=!0;try{n=C(!0,e)}finally{n?S():(E=!1,C=null)}}else E=!1}if("function"===typeof b)S=function(){b(A)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,_=R.port2;R.port1.onmessage=A,S=function(){_.postMessage(null)}}else S=function(){v(A,0)};function L(e){C=e,E||(E=!0,S())}function M(e,n){P=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,L(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(P),P=-1):g=!0,M(w,o-a))):(e.sortIndex=s,n(u,e),m||h||(m=!0,L(k))),e},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+"."+{206:"ac4d85e8",722:"c7f6f9d8"}[e]+".chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="jewelry-website:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach(e=>e(n)),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((n,r)=>i=e[t]=[n,r]);r.push(i[2]=o);var a=n.p+n.u(t),s=new Error;n.l(a,r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}},"chunk-"+t,t)}};var t=(t,r)=>{var i,o,a=r[0],s=r[1],l=r[2],u=0;if(a.some(t=>0!==e[t])){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkjewelry_website=self.webpackChunkjewelry_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(950),r=n.t(t,2),i=n(352);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const a="popstate";function s(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function l(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,r){return void 0===n&&(n=null),o({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function f(t,n,r,i){void 0===i&&(i={});let{window:l=document.defaultView,v5Compat:p=!1}=i,f=l.history,h=e.Pop,m=null,g=v();function v(){return(f.state||{idx:null}).idx}function y(){h=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:h,location:x.location,delta:n})}function b(e){let t="null"!==l.location.origin?l.location.origin:l.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),s(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,f.replaceState(o({},f.state,{idx:g}),""));let x={get action(){return h},get location(){return t(l,f)},listen(e){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(a,y),m=e,()=>{l.removeEventListener(a,y),m=null}},createHref:e=>n(l,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let i=c(x.location,t,n);r&&r(i,t),g=v()+1;let o=u(i,g),a=x.createHref(i);try{f.pushState(o,"",a)}catch(s){if(s instanceof DOMException&&"DataCloneError"===s.name)throw s;l.location.assign(a)}p&&m&&m({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let i=c(x.location,t,n);r&&r(i,t),g=v();let o=u(i,g),a=x.createHref(i);f.replaceState(o,"",a),p&&m&&m({action:h,location:x.location,delta:0})},go:e=>f.go(e)};return x}var h;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let i=A(("string"===typeof t?p(t):t).pathname||"/",n);if(null==i)return null;let o=v(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=D(i);a=T(o[s],e,r)}return a}function v(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(s(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=O([r,a.relativePath]),u=n.concat(a);e.children&&e.children.length>0&&(s(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),v(e.children,t,u,l)),(null!=e.path||e.index)&&t.push({path:l,score:P(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of y(e.path))i(e,t,r);else i(e,t)}),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=y(r.join("/")),s=[];return s.push(...a.map(e=>""===e?o:[o,e].join("/"))),i&&s.push(...a),s.map(t=>e.startsWith("/")&&""===t?"/":t)}const b=/^:[\w-]+$/,x=3,w=2,k=1,S=10,E=-2,C=e=>"*"===e;function P(e,t){let n=e.split("/"),r=n.length;return n.some(C)&&(r+=E),t&&(r+=w),n.filter(e=>!C(e)).reduce((e,t)=>e+(b.test(t)?x:""===t?k:S),r)}function T(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=j({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=j({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),a.push({params:i,pathname:O([o,c.pathname]),pathnameBase:N(O([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=O([o,c.pathnameBase]))}return a}function j(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);l("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),u=r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{});return{params:u,pathname:o,pathnameBase:a,pattern:e}}function D(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return l(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function R(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function _(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function L(e,t){let n=_(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function M(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=p(e):(i=o({},e),s(!i.pathname||!i.pathname.includes("?"),R("?","pathname","search",i)),s(!i.pathname||!i.pathname.includes("#"),R("#","pathname","hash",i)),s(!i.search||!i.search.includes("#"),R("#","search","hash",i)));let a,l=""===e||""===i.pathname,u=l?"/":i.pathname;if(null==u)a=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:z(r),hash:F(i)}}(i,a),d=u&&"/"!==u&&u.endsWith("/"),f=(l||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const O=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),z=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",F=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function I(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const V=["post","put","patch","delete"],B=(new Set(V),["get",...V]);new Set(B),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}const $=t.createContext(null);const H=t.createContext(null);const W=t.createContext(null);const Y=t.createContext(null);const G=t.createContext({outlet:null,matches:[],isDataRoute:!1});const q=t.createContext(null);function K(){return null!=t.useContext(Y)}function Q(){return K()||s(!1),t.useContext(Y).location}function X(e){t.useContext(W).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(G);return e?function(){let{router:e}=le(ae.UseNavigateStable),n=ce(se.UseNavigateStable),r=t.useRef(!1);X(()=>{r.current=!0});let i=t.useCallback(function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,U({fromRouteId:n},i)))},[e,n]);return i}():function(){K()||s(!1);let e=t.useContext($),{basename:n,future:r,navigator:i}=t.useContext(W),{matches:o}=t.useContext(G),{pathname:a}=Q(),l=JSON.stringify(L(o,r.v7_relativeSplatPath)),u=t.useRef(!1);return X(()=>{u.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!u.current)return;if("number"===typeof t)return void i.go(t);let o=M(t,JSON.parse(l),a,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:O([n,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)},[n,i,l,a,e])}()}function Z(e,n){let{relative:r}=void 0===n?{}:n,{future:i}=t.useContext(W),{matches:o}=t.useContext(G),{pathname:a}=Q(),s=JSON.stringify(L(o,i.v7_relativeSplatPath));return t.useMemo(()=>M(e,JSON.parse(s),a,"path"===r),[e,s,a,r])}function ee(n,r,i,o){K()||s(!1);let{navigator:a}=t.useContext(W),{matches:l}=t.useContext(G),u=l[l.length-1],c=u?u.params:{},d=(u&&u.pathname,u?u.pathnameBase:"/");u&&u.route;let f,h=Q();if(r){var g;let e="string"===typeof r?p(r):r;"/"===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||s(!1),f=e}else f=h;let v=f.pathname||"/",y=v;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=m(n,{pathname:y});let x=oe(b&&b.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:O([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:O([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),l,i,o);return r&&x?t.createElement(Y.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},x):x}function te(){let e=function(){var e;let n=t.useContext(q),r=ue(se.UseRouteError),i=ce(se.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[i]}(),n=I(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const ne=t.createElement(te,null);class re extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(G.Provider,{value:this.props.routeContext},t.createElement(q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ie(e){let{routeContext:n,match:r,children:i}=e,o=t.useContext($);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(G.Provider,{value:n},i)}function oe(e,n,r,i){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var a;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,u=null==(o=r)?void 0:o.errors;if(null!=u){let e=l.findIndex(e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id]));e>=0||s(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight((e,i,o)=>{let a,s=!1,p=null,f=null;var h;r&&(a=u&&i.route.id?u[i.route.id]:void 0,p=i.route.errorElement||ne,c&&(d<0&&0===o?(h="route-fallback",!1||de[h]||(de[h]=!0),s=!0,f=null):d===o&&(s=!0,f=i.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,o+1)),g=()=>{let n;return n=a?p:s?f:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ie,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?t.createElement(re,{location:r.location,revalidation:r.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),se=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(se||{});function le(e){let n=t.useContext($);return n||s(!1),n}function ue(e){let n=t.useContext(H);return n||s(!1),n}function ce(e){let n=function(){let e=t.useContext(G);return e||s(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||s(!1),r.route.id}const de={};function pe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function fe(e){s(!1)}function he(n){let{basename:r="/",children:i=null,location:o,navigationType:a=e.Pop,navigator:l,static:u=!1,future:c}=n;K()&&s(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo(()=>({basename:d,navigator:l,static:u,future:U({v7_relativeSplatPath:!1},c)}),[d,c,l,u]);"string"===typeof o&&(o=p(o));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:y="default"}=o,b=t.useMemo(()=>{let e=A(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:a}},[d,h,m,g,v,y,a]);return null==b?null:t.createElement(W.Provider,{value:f},t.createElement(Y.Provider,{children:i,value:b}))}function me(e){let{children:t,location:n}=e;return ee(ge(t),n)}new Promise(()=>{});t.Component;function ge(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,i)=>{if(!t.isValidElement(e))return;let o=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,ge(e.props.children,o));e.type!==fe&&s(!1),e.props.index&&e.props.children&&s(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ge(e.props.children,o)),r.push(a)}),r}var ve=n(119),ye=n.t(ve,2);function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Wh){}new Map;const ke=r.startTransition;ye.flushSync,r.useId;function Se(e){let{basename:n,children:r,future:i,window:o}=e,a=t.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),f(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return c("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:d(t)},null,s)));let l=a.current,[u,p]=t.useState({action:l.action,location:l.location}),{v7_startTransition:h}=i||{},m=t.useCallback(e=>{h&&ke?ke(()=>p(e)):p(e)},[p,h]);return t.useLayoutEffect(()=>l.listen(m),[l,m]),t.useEffect(()=>pe(i),[i]),t.createElement(he,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:l,future:i})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ce=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=t.forwardRef(function(e,n){let r,{onClick:i,relative:o,reloadDocument:a,replace:l,state:u,target:c,to:p,preventScrollReset:f,viewTransition:h}=e,m=xe(e,we),{basename:g}=t.useContext(W),v=!1;if("string"===typeof p&&Ce.test(p)&&(r=p,Ee))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=A(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:v=!0}catch(Wh){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;K()||s(!1);let{basename:i,navigator:o}=t.useContext(W),{hash:a,pathname:l,search:u}=Z(e,{relative:r}),c=l;return"/"!==i&&(c="/"===l?i:O([i,l])),o.createHref({pathname:c,search:u,hash:a})}(p,{relative:o}),b=function(e,n){let{target:r,replace:i,state:o,preventScrollReset:a,relative:s,viewTransition:l}=void 0===n?{}:n,u=J(),c=Q(),p=Z(e,{relative:s});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==i?i:d(c)===d(p);u(e,{replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:l})}},[c,u,p,i,o,r,e,a,s,l])}(p,{replace:l,state:u,target:c,preventScrollReset:f,relative:o,viewTransition:h});return t.createElement("a",be({},m,{href:r||y,onClick:v||a?i:function(e){i&&i(e),e.defaultPrevented||b(e)},ref:n,target:c}))});var Te,je;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Te||(Te={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(je||(je={}));var De=function(){return De=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},De.apply(this,arguments)};Object.create;function Ae(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Re=n(403),_e=n.n(Re),Le="-ms-",Me="-moz-",Oe="-webkit-",Ne="comm",ze="rule",Fe="decl",Ie="@keyframes",Ve=Math.abs,Be=String.fromCharCode,Ue=Object.assign;function $e(e){return e.trim()}function He(e,t){return(e=t.exec(e))?e[0]:e}function We(e,t,n){return e.replace(t,n)}function Ye(e,t,n){return e.indexOf(t,n)}function Ge(e,t){return 0|e.charCodeAt(t)}function qe(e,t,n){return e.slice(t,n)}function Ke(e){return e.length}function Qe(e){return e.length}function Xe(e,t){return t.push(e),e}function Je(e,t){return e.filter(function(e){return!He(e,t)})}var Ze=1,et=1,tt=0,nt=0,rt=0,it="";function ot(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ze,column:et,length:a,return:"",siblings:s}}function at(e,t){return Ue(ot("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function st(e){for(;e.root;)e=at(e.root,{children:[e]});Xe(e,e.siblings)}function lt(){return rt=nt>0?Ge(it,--nt):0,et--,10===rt&&(et=1,Ze--),rt}function ut(){return rt=nt<tt?Ge(it,nt++):0,et++,10===rt&&(et=1,Ze++),rt}function ct(){return Ge(it,nt)}function dt(){return nt}function pt(e,t){return qe(it,e,t)}function ft(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ht(e){return Ze=et=1,tt=Ke(it=e),nt=0,[]}function mt(e){return it="",e}function gt(e){return $e(pt(nt-1,bt(91===e?e+2:40===e?e+1:e)))}function vt(e){for(;(rt=ct())&&rt<33;)ut();return ft(e)>2||ft(rt)>3?"":" "}function yt(e,t){for(;--t&&ut()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return pt(e,dt()+(t<6&&32==ct()&&32==ut()))}function bt(e){for(;ut();)switch(rt){case e:return nt;case 34:case 39:34!==e&&39!==e&&bt(rt);break;case 40:41===e&&bt(e);break;case 92:ut()}return nt}function xt(e,t){for(;ut()&&e+rt!==57&&(e+rt!==84||47!==ct()););return"/*"+pt(t,nt-1)+"*"+Be(47===e?e:ut())}function wt(e){for(;!ft(ct());)ut();return pt(e,nt)}function kt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function St(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Fe:return e.return=e.return||e.value;case Ne:return"";case Ie:return e.return=e.value+"{"+kt(e.children,r)+"}";case ze:if(!Ke(e.value=e.props.join(",")))return""}return Ke(n=kt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Et(e,t,n){switch(function(e,t){return 45^Ge(e,0)?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}(e,t)){case 5103:return Oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+e+e;case 4789:return Me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+e+Me+e+Le+e+e;case 5936:switch(Ge(e,t+11)){case 114:return Oe+e+Le+We(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Oe+e+Le+We(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Oe+e+Le+We(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Oe+e+Le+e+e;case 6165:return Oe+e+Le+"flex-"+e+e;case 5187:return Oe+e+We(e,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return Oe+e+Le+"flex-item-"+We(e,/flex-|-self/g,"")+(He(e,/flex-|baseline/)?"":Le+"grid-row-"+We(e,/flex-|-self/g,""))+e;case 4675:return Oe+e+Le+"flex-line-pack"+We(e,/align-content|flex-|-self/g,"")+e;case 5548:return Oe+e+Le+We(e,"shrink","negative")+e;case 5292:return Oe+e+Le+We(e,"basis","preferred-size")+e;case 6060:return Oe+"box-"+We(e,"-grow","")+Oe+e+Le+We(e,"grow","positive")+e;case 4554:return Oe+We(e,/([^-])(transform)/g,"$1"+Oe+"$2")+e;case 6187:return We(We(We(e,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),e,"")+e;case 5495:case 3959:return We(e,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return We(We(e,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+e+e;case 4200:if(!He(e,/flex-|baseline/))return Le+"grid-column-align"+qe(e,t)+e;break;case 2592:case 3360:return Le+We(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,He(e.props,/grid-\w+-end/)})?~Ye(e+(n=n[t].value),"span",0)?e:Le+We(e,"-start","")+e+Le+"grid-row-span:"+(~Ye(n,"span",0)?He(n,/\d+/):+He(n,/\d+/)-+He(e,/\d+/))+";":Le+We(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return He(e.props,/grid-\w+-start/)})?e:Le+We(We(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return We(e,/(.+)-inline(.+)/,Oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ke(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(45!==Ge(e,t+4))break;case 102:return We(e,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Me+(108==Ge(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ye(e,"stretch",0)?Et(We(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return We(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,a,s){return Le+n+":"+r+s+(i?Le+n+"-span:"+(o?a:+a-+r)+s:"")+e});case 4949:if(121===Ge(e,t+6))return We(e,":",":"+Oe)+e;break;case 6444:switch(Ge(e,45===Ge(e,14)?18:11)){case 120:return We(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(45===Ge(e,14)?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+Le+"$2box$3")+e;case 100:return We(e,":",":"+Le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return We(e,"scroll-","scroll-snap-")+e}return e}function Ct(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Fe:return void(e.return=Et(e.value,e.length,n));case Ie:return kt([at(e,{value:We(e.value,"@","@"+Oe)})],r);case ze:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(He(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":st(at(e,{props:[We(t,/:(read-\w+)/,":-moz-$1")]})),st(at(e,{props:[t]})),Ue(e,{props:Je(n,r)});break;case"::placeholder":st(at(e,{props:[We(t,/:(plac\w+)/,":"+Oe+"input-$1")]})),st(at(e,{props:[We(t,/:(plac\w+)/,":-moz-$1")]})),st(at(e,{props:[We(t,/:(plac\w+)/,Le+"input-$1")]})),st(at(e,{props:[t]})),Ue(e,{props:Je(n,r)})}return""})}}function Pt(e){return mt(Tt("",null,null,null,[""],e=ht(e),0,[0],e))}function Tt(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,d=a,p=0,f=0,h=0,m=1,g=1,v=1,y=0,b="",x=i,w=o,k=r,S=b;g;)switch(h=y,y=ut()){case 40:if(108!=h&&58==Ge(S,d-1)){-1!=Ye(S+=We(gt(y),"&","&\f"),"&\f",Ve(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=gt(y);break;case 9:case 10:case 13:case 32:S+=vt(h);break;case 92:S+=yt(dt()-1,7);continue;case 47:switch(ct()){case 42:case 47:Xe(Dt(xt(ut(),dt()),t,n,l),l);break;default:S+="/"}break;case 123*m:s[u++]=Ke(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(S=We(S,/\f/g,"")),f>0&&Ke(S)-d&&Xe(f>32?At(S+";",r,n,d-1,l):At(We(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(Xe(k=jt(S,t,n,u,c,i,s,b,x=[],w=[],d,o),o),123===y)if(0===c)Tt(S,t,k,k,x,o,d,s,w);else switch(99===p&&110===Ge(S,3)?100:p){case 100:case 108:case 109:case 115:Tt(e,k,k,r&&Xe(jt(e,k,k,0,0,i,s,b,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:Tt(S,k,k,k,[""],w,0,s,w)}}u=c=f=0,m=v=1,b=S="",d=a;break;case 58:d=1+Ke(S),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==lt())continue;switch(S+=Be(y),y*m){case 38:v=c>0?1:(S+="\f",-1);break;case 44:s[u++]=(Ke(S)-1)*v,v=1;break;case 64:45===ct()&&(S+=gt(ut())),p=ct(),c=d=Ke(b=S+=wt(dt())),y++;break;case 45:45===h&&2==Ke(S)&&(m=0)}}return o}function jt(e,t,n,r,i,o,a,s,l,u,c,d){for(var p=i-1,f=0===i?o:[""],h=Qe(f),m=0,g=0,v=0;m<r;++m)for(var y=0,b=qe(e,p+1,p=Ve(g=a[m])),x=e;y<h;++y)(x=$e(g>0?f[y]+" "+b:We(b,/&\f/g,f[y])))&&(l[v++]=x);return ot(e,t,n,0===i?ze:s,l,u,c,d)}function Dt(e,t,n,r){return ot(e,t,n,Ne,Be(rt),qe(e,2,-2),0,r)}function At(e,t,n,r,i){return ot(e,t,n,Fe,qe(e,0,r),qe(e,r+1,-1),r,i)}var Rt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Lt="active",Mt="data-styled-version",Ot="6.1.19",Nt="/*!sc*/\n",zt="undefined"!=typeof window&&"undefined"!=typeof document,Ft=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),It={},Vt=(new Set,Object.freeze([])),Bt=Object.freeze({});function Ut(e,t,n){return void 0===n&&(n=Bt),e.theme!==n.theme&&e.theme||t||n.theme}var $t=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ht=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wt=/(^-|-$)/g;function Yt(e){return e.replace(Ht,"-").replace(Wt,"")}var Gt=/(a)(d)/gi,qt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=qt(t%52)+n;return(qt(t%52)+n).replace(Gt,"$1-$2")}var Qt,Xt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jt=function(e){return Xt(5381,e)};function Zt(e){return Kt(Jt(e)>>>0)}function en(e){return e.displayName||e.name||"Component"}function tn(e){return"string"==typeof e&&!0}var nn="function"==typeof Symbol&&Symbol.for,rn=nn?Symbol.for("react.memo"):60115,on=nn?Symbol.for("react.forward_ref"):60112,an={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},un=((Qt={})[on]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qt[rn]=ln,Qt);function cn(e){return("type"in(t=e)&&t.type.$$typeof)===rn?ln:"$$typeof"in e?un[e.$$typeof]:an;var t}var dn=Object.defineProperty,pn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,hn=Object.getOwnPropertyDescriptor,mn=Object.getPrototypeOf,gn=Object.prototype;function vn(e,t,n){if("string"!=typeof t){if(gn){var r=mn(t);r&&r!==gn&&vn(e,r,n)}var i=pn(t);fn&&(i=i.concat(fn(t)));for(var o=cn(e),a=cn(t),s=0;s<i.length;++s){var l=i[s];if(!(l in sn||n&&n[l]||a&&l in a||o&&l in o)){var u=hn(t,l);try{dn(e,l,u)}catch(e){}}}}return e}function yn(e){return"function"==typeof e}function bn(e){return"object"==typeof e&&"styledComponentId"in e}function xn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function kn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sn(e,t,n){if(void 0===n&&(n=!1),!n&&!kn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sn(e[r],t[r]);else if(kn(t))for(var r in t)e[r]=Sn(e[r],t[r]);return e}function En(e,t){Object.defineProperty(e,"toString",{value:t})}function Cn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Pn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Cn(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(Nt);return t},e}(),Tn=new Map,jn=new Map,Dn=1,An=function(e){if(Tn.has(e))return Tn.get(e);for(;jn.has(Dn);)Dn++;var t=Dn++;return Tn.set(e,t),jn.set(t,e),t},Rn=function(e,t){Dn=t+1,Tn.set(e,t),jn.set(t,e)},_n="style[".concat(_t,"][").concat(Mt,'="').concat(Ot,'"]'),Ln=new RegExp("^".concat(_t,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mn=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},On=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Nt),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(Ln);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(Rn(c,u),Mn(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},Nn=function(e){for(var t=document.querySelectorAll(_n),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(_t)!==Lt&&(On(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function zn(){return n.nc}var Fn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(_t,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(_t,Lt),r.setAttribute(Mt,Ot);var a=zn();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},In=function(){function e(e){this.element=Fn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw Cn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Vn=function(){function e(e){this.element=Fn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Bn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Un=zt,$n={isServer:!zt,useCSSOMInjection:!Ft},Hn=function(){function e(e,t,n){void 0===e&&(e=Bt),void 0===t&&(t={});var r=this;this.options=De(De({},$n),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&zt&&Un&&(Un=!1,Nn(this)),En(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return jn.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(_t,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Nt)},o=0;o<n;o++)i(o);return r}(r)})}return e.registerId=function(e){return An(e)},e.prototype.rehydrate=function(){!this.server&&zt&&Nn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(De(De({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Bn(n):t?new In(n):new Vn(n)}(this.options),new Pn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(An(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(An(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(An(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wn=/&/g,Yn=/^\s*\/\/.*$/gm;function Gn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Gn(e.children,t)),e})}function qn(e){var t,n,r,i=void 0===e?Bt:e,o=i.options,a=void 0===o?Bt:o,s=i.plugins,l=void 0===s?Vt:s,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push(function(e){e.type===ze&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Wn,n).replace(r,u))}),a.prefix&&c.push(Ct),c.push(St);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Yn,""),u=Pt(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(u=Gn(u,a.namespace));var d,p=[];return kt(u,function(e){var t=Qe(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(c.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce(function(e,t){return t.name||Cn(15),Xt(e,t.name)},5381).toString():"",d}var Kn=new Hn,Qn=qn(),Xn=t.createContext({shouldForwardProp:void 0,styleSheet:Kn,stylis:Qn}),Jn=(Xn.Consumer,t.createContext(void 0));function Zn(){return(0,t.useContext)(Xn)}function er(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],o=Zn().styleSheet,a=(0,t.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,t.useMemo)(function(){return qn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){_e()(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return t.createElement(Xn.Provider,{value:l},t.createElement(Jn.Provider,{value:s},e.children))}var tr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Qn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,En(this,function(){throw Cn(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Qn),this.name+e.hash},e}(),nr=function(e){return e>="A"&&e<="Z"};function rr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;nr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ir=function(e){return null==e||!1===e||""===e},or=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!ir(o)&&(Array.isArray(o)&&o.isCss||yn(o)?r.push("".concat(rr(i),":"),o,";"):kn(o)?r.push.apply(r,Ae(Ae(["".concat(i," {")],or(o),!1),["}"],!1)):r.push("".concat(rr(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Rt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ar(e,t,n,r){return ir(e)?[]:bn(e)?[".".concat(e.styledComponentId)]:yn(e)?!yn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:ar(e(t),t,n,r):e instanceof tr?n?(e.inject(n,r),[e.getName(r)]):[e]:kn(e)?or(e):Array.isArray(e)?Array.prototype.concat.apply(Vt,e.map(function(e){return ar(e,t,n,r)})):[e.toString()];var i}function sr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yn(n)&&!bn(n))return!1}return!0}var lr=Jt(Ot),ur=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&sr(e),this.componentId=t,this.baseHash=Xt(lr,t),this.baseStyle=n,Hn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=xn(r,this.staticRulesId);else{var i=wn(ar(this.rules,e,t,n)),o=Kt(Xt(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=xn(r,o),this.staticRulesId=o}else{for(var s=Xt(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=wn(ar(c,e,t,n));s=Xt(s,d+u),l+=d}}if(l){var p=Kt(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=xn(r,p)}}return r},e}(),cr=t.createContext(void 0);cr.Consumer;function dr(e){var n=t.useContext(cr),r=(0,t.useMemo)(function(){return function(e,t){if(!e)throw Cn(14);if(yn(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Cn(8);return t?De(De({},t),e):e}(e.theme,n)},[e.theme,n]);return e.children?t.createElement(cr.Provider,{value:r},e.children):null}var pr={};new Set;function fr(e,n,r){var i=bn(e),o=e,a=!tn(e),s=n.attrs,l=void 0===s?Vt:s,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Yt(e);pr[n]=(pr[n]||0)+1;var r="".concat(n,"-").concat(Zt(Ot+n+pr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,p=void 0===d?function(e){return tn(e)?"styled.".concat(e):"Styled(".concat(en(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(Yt(n.displayName),"-").concat(n.componentId):n.componentId||c,h=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new ur(r,f,i?o.componentStyle:void 0);function b(e,n){return function(e,n,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=t.useContext(cr),d=Zn(),p=e.shouldForwardProp||d.shouldForwardProp,f=Ut(n,c,a)||Bt,h=function(e,t,n){for(var r,i=De(De({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=yn(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?xn(i[s],a[s]):"style"===s?De(De({},i[s]),a[s]):a[s]}return t.className&&(i.className=xn(i.className,t.className)),i}(i,n,f),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===f||("forwardedAs"===v?g.as=h.forwardedAs:p&&!p(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Zn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=xn(s,l);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[tn(m)&&!$t.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}b.displayName=p;var x=t.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=i?xn(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=f,x.target=i?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Sn(e,i[r],!0);return e}({},o.defaultProps,e):e}}),En(x,function(){return".".concat(x.styledComponentId)}),a&&vn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function hr(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var mr=function(e){return Object.assign(e,{isCss:!0})};function gr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yn(e)||kn(e))return mr(ar(hr(Vt,Ae([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ar(r):mr(ar(hr(r,t)))}function vr(e,t,n){if(void 0===n&&(n=Bt),!t)throw Cn(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,gr.apply(void 0,Ae([r],i,!1)))};return r.attrs=function(r){return vr(e,t,De(De({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return vr(e,t,De(De({},n),r))},r}var yr=function(e){return vr(fr,e)},br=yr;$t.forEach(function(e){br[e]=yr(e)});var xr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=sr(e),Hn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(wn(ar(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Hn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function wr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=wn(gr.apply(void 0,Ae([e],t,!1))),i=Zt(r);return new tr(i,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=zn(),r=wn([n&&'nonce="'.concat(n,'"'),"".concat(_t,'="true"'),"".concat(Mt,'="').concat(Ot,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Cn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Cn(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[_t]="",n[Mt]=Ot,n.dangerouslySetInnerHTML={__html:r},n),o=zn();return o&&(i.nonce=o),[t.createElement("style",De({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Hn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Cn(2);return t.createElement(er,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Cn(3)}})(),"__sc-".concat(_t,"__");const kr="undefined"!==typeof document,Sr=kr?t.useLayoutEffect:t.useEffect;function Er(){const e=(0,t.useRef)(!1);return Sr(()=>(e.current=!0,()=>{e.current=!1}),[]),e}const Cr=e=>e;class Pr{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const Tr=["prepare","read","update","preRender","render","postRender"];const{schedule:jr,cancel:Dr,state:Ar,steps:Rr}=function(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=Tr.reduce((e,t)=>(e[t]=function(e){let t=new Pr,n=new Pr,r=0,i=!1,o=!1;const a=new WeakSet,s={schedule:function(e){const o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=o?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),s.add(e)&&o&&i&&(r=t.order.length),e},cancel:e=>{n.remove(e),a.delete(e)},process:l=>{if(i)o=!0;else{if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),a.has(r)&&(s.schedule(r),e())}i=!1,o&&(o=!1,s.process(l))}}};return s}(()=>n=!0),e),{}),a=e=>o[e].process(i),s=()=>{const o=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1),i.timestamp=o,i.isProcessing=!0,Tr.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=Tr.reduce((t,a)=>{const l=o[a];return t[a]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(s)),l.schedule(t,o,a)},t},{});return{schedule:l,cancel:e=>Tr.forEach(t=>o[t].cancel(e)),state:i,steps:o}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:Cr,!0);const _r=(0,t.createContext)(null);function Lr(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}class Mr extends t.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Or(e){let{children:n,isPresent:r}=e;const i=(0,t.useId)(),o=(0,t.useRef)(null),a=(0,t.useRef)({width:0,height:0,top:0,left:0});return(0,t.useInsertionEffect)(()=>{const{width:e,height:t,top:n,left:s}=a.current;if(r||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}},[r]),t.createElement(Mr,{isPresent:r,childRef:o,sizeRef:a},t.cloneElement(n,{ref:o}))}const Nr=e=>{let{children:n,initial:r,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:s,mode:l}=e;const u=Lr(zr),c=(0,t.useId)(),d=(0,t.useMemo)(()=>({id:c,initial:r,isPresent:i,custom:a,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;o&&o()},register:e=>(u.set(e,!1),()=>u.delete(e))}),s?void 0:[i]);return(0,t.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[i]),t.useEffect(()=>{!i&&!u.size&&o&&o()},[i]),"popLayout"===l&&(n=t.createElement(Or,{isPresent:i},n)),t.createElement(_r.Provider,{value:d},n)};function zr(){return new Map}const Fr=(0,t.createContext)({});let Ir=Cr,Vr=Cr;const Br=e=>e.key||"";const Ur=e=>{let{children:n,custom:r,initial:i=!0,onExitComplete:o,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:l="sync"}=e;Vr(!a,"Replace exitBeforeEnter with mode='wait'");const u=(0,t.useContext)(Fr).forceRender||function(){const e=Er(),[n,r]=(0,t.useState)(0),i=(0,t.useCallback)(()=>{e.current&&r(n+1)},[n]);return[(0,t.useCallback)(()=>jr.postRender(i),[i]),n]}()[0],c=Er(),d=function(e){const n=[];return t.Children.forEach(e,e=>{(0,t.isValidElement)(e)&&n.push(e)}),n}(n);let p=d;const f=(0,t.useRef)(new Map).current,h=(0,t.useRef)(p),m=(0,t.useRef)(new Map).current,g=(0,t.useRef)(!0);var v;if(Sr(()=>{g.current=!1,function(e,t){e.forEach(e=>{const n=Br(e);t.set(n,e)})}(d,m),h.current=p}),v=()=>{g.current=!0,m.clear(),f.clear()},(0,t.useEffect)(()=>()=>v(),[]),g.current)return t.createElement(t.Fragment,null,p.map(e=>t.createElement(Nr,{key:Br(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:s,mode:l},e)));p=[...p];const y=h.current.map(Br),b=d.map(Br),x=y.length;for(let t=0;t<x;t++){const e=y[t];-1!==b.indexOf(e)||f.has(e)||f.set(e,void 0)}return"wait"===l&&f.size&&(p=[]),f.forEach((e,n)=>{if(-1!==b.indexOf(n))return;const i=m.get(n);if(!i)return;const a=y.indexOf(n);let g=e;if(!g){const e=()=>{f.delete(n);const e=Array.from(m.keys()).filter(e=>!b.includes(e));if(e.forEach(e=>m.delete(e)),h.current=d.filter(t=>{const r=Br(t);return r===n||e.includes(r)}),!f.size){if(!1===c.current)return;u(),o&&o()}};g=t.createElement(Nr,{key:Br(i),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:s,mode:l},i),f.set(n,g)}p.splice(a,0,g)}),p=p.map(e=>{const n=e.key;return f.has(n)?e:t.createElement(Nr,{key:Br(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)}),t.createElement(t.Fragment,null,f.size?p:p.map(e=>(0,t.cloneElement)(e)))},$r=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=gr.apply(void 0,Ae([e],n,!1)),o="sc-global-".concat(Zt(JSON.stringify(i))),a=new xr(i,o),s=function(e){var n=Zn(),r=t.useContext(cr),i=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&l(i,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return l(i,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(i,n.styleSheet)}},[i,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,It,n,i);else{var o=De(De({},t),{theme:Ut(t,r,s.defaultProps)});a.renderStyles(e,o,n,i)}}return t.memo(s)})`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: #000000 !important; /* Force black background */
    color: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #root {
    background: #000000 !important; /* Root juga hitam */
    min-height: 100vh;
  }

  /* Prevent white flash during transitions */
  .page-transition-wrapper {
    background: #000000;
    min-height: 100vh;
  }
`,Hr={colors:{primary:"#C9A96E",secondary:"#1a1a1a",gold:"#D4AF37",silver:"#C0C0C0",lightGold:"#F4E4BC",darkGold:"#B8860B",white:"#FFFFFF",black:"#000000",gradient:{goldSilver:"linear-gradient(135deg, #D4AF37 0%, #C0C0C0 50%, #D4AF37 100%)",darkGold:"linear-gradient(135deg, #C9A96E 0%, #D4AF37 100%)",elegantGold:"linear-gradient(45deg, #F4E4BC 0%, #D4AF37 50%, #B8860B 100%)",silverGold:"linear-gradient(135deg, #C0C0C0 0%, #D4AF37 100%)",background:"linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)"}},fonts:{primary:"'Playfair Display', serif",secondary:"'Inter', sans-serif"},breakpoints:{mobile:"768px",tablet:"1024px",desktop:"1200px"}},Wr=()=>{(0,t.useEffect)(()=>{const e=document.createElement("div");e.className="cursor-dot",document.body.appendChild(e);const t=t=>{e.style.left=t.clientX+"px",e.style.top=t.clientY+"px"},n=()=>{e.style.transform="scale(3)",e.style.backgroundColor="#D4AF37"},r=()=>{e.style.transform="scale(1)",e.style.backgroundColor="#D4AF37"};document.addEventListener("mousemove",t);const i=document.querySelectorAll('button, a, [role="button"]');return i.forEach(e=>{e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",r)}),()=>{document.removeEventListener("mousemove",t),i.forEach(e=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",r)}),e.parentNode&&e.parentNode.removeChild(e)}},[])},Yr=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Gr=(0,t.createContext)({}),qr=(0,t.createContext)({strict:!1}),Kr=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Qr="data-"+Kr("framerAppearId");function Xr(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Jr(e){return"string"===typeof e||Array.isArray(e)}function Zr(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const ei=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ti=["initial",...ei];function ni(e){return Zr(e.animate)||ti.some(t=>Jr(e[t]))}function ri(e){return Boolean(ni(e)||e.variants)}function ii(e){const{initial:n,animate:r}=function(e,t){if(ni(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Jr(t)?t:void 0,animate:Jr(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(Gr));return(0,t.useMemo)(()=>({initial:n,animate:r}),[oi(n),oi(r)])}function oi(e){return Array.isArray(e)?e.join(" "):e}const ai={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},si={};for(const n in ai)si[n]={isEnabled:e=>ai[n].some(t=>!!e[t])};const li=(0,t.createContext)({}),ui=Symbol.for("motionComponentSymbol");function ci(e){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:o,Component:a}=e;n&&function(e){for(const t in e)si[t]={...si[t],...e[t]}}(n);const s=(0,t.forwardRef)(function(e,s){let l;const u={...(0,t.useContext)(Yr),...e,layoutId:di(e)},{isStatic:c}=u,d=ii(e),p=o(e,c);if(!c&&kr){d.visualElement=function(e,n,r,i){const{visualElement:o}=(0,t.useContext)(Gr),a=(0,t.useContext)(qr),s=(0,t.useContext)(_r),l=(0,t.useContext)(Yr).reducedMotion,u=(0,t.useRef)();i=i||a.renderer,!u.current&&i&&(u.current=i(e,{visualState:n,parent:o,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const c=u.current;(0,t.useInsertionEffect)(()=>{c&&c.update(r,s)});const d=(0,t.useRef)(Boolean(r[Qr]&&!window.HandoffComplete));return Sr(()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())}),(0,t.useEffect)(()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),c}(a,p,u,r);const e=(0,t.useContext)(li),i=(0,t.useContext)(qr).strict;d.visualElement&&(l=d.visualElement.loadFeatures(u,i,n,e))}return t.createElement(Gr.Provider,{value:d},l&&d.visualElement?t.createElement(l,{visualElement:d.visualElement,...u}):null,i(a,e,function(e,n,r){return(0,t.useCallback)(t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):Xr(r)&&(r.current=t))},[n])}(p,d.visualElement,s),p,c,d.visualElement))});return s[ui]=a,s}function di(e){let{layoutId:n}=e;const r=(0,t.useContext)(Fr).id;return r&&void 0!==n?r+"-"+n:n}function pi(e){function t(t){return ci(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const fi=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hi(e){return"string"===typeof e&&!e.includes("-")&&!!(fi.indexOf(e)>-1||/[A-Z]/.test(e))}const mi={};const gi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vi=new Set(gi);function yi(e,t){let{layout:n,layoutId:r}=t;return vi.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!mi[e]||"opacity"===e)}const bi=e=>Boolean(e&&e.getVelocity),xi={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},wi=gi.length;const ki=e=>t=>"string"===typeof t&&t.startsWith(e),Si=ki("--"),Ei=ki("var(--"),Ci=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Pi=(e,t,n)=>Math.min(Math.max(n,e),t),Ti={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},ji={...Ti,transform:e=>Pi(0,1,e)},Di={...Ti,default:1},Ai=e=>Math.round(1e5*e)/1e5,Ri=/(-)?([\d]*\.?[\d])+/g,_i=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Li=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Mi(e){return"string"===typeof e}const Oi=e=>({test:t=>Mi(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Ni=Oi("deg"),zi=Oi("%"),Fi=Oi("px"),Ii=Oi("vh"),Vi=Oi("vw"),Bi={...zi,parse:e=>zi.parse(e)/100,transform:e=>zi.transform(100*e)},Ui={...Ti,transform:Math.round},$i={borderWidth:Fi,borderTopWidth:Fi,borderRightWidth:Fi,borderBottomWidth:Fi,borderLeftWidth:Fi,borderRadius:Fi,radius:Fi,borderTopLeftRadius:Fi,borderTopRightRadius:Fi,borderBottomRightRadius:Fi,borderBottomLeftRadius:Fi,width:Fi,maxWidth:Fi,height:Fi,maxHeight:Fi,size:Fi,top:Fi,right:Fi,bottom:Fi,left:Fi,padding:Fi,paddingTop:Fi,paddingRight:Fi,paddingBottom:Fi,paddingLeft:Fi,margin:Fi,marginTop:Fi,marginRight:Fi,marginBottom:Fi,marginLeft:Fi,rotate:Ni,rotateX:Ni,rotateY:Ni,rotateZ:Ni,scale:Di,scaleX:Di,scaleY:Di,scaleZ:Di,skew:Ni,skewX:Ni,skewY:Ni,distance:Fi,translateX:Fi,translateY:Fi,translateZ:Fi,x:Fi,y:Fi,z:Fi,perspective:Fi,transformPerspective:Fi,opacity:ji,originX:Bi,originY:Bi,originZ:Fi,zIndex:Ui,fillOpacity:ji,strokeOpacity:ji,numOctaves:Ui};function Hi(e,t,n,r){const{style:i,vars:o,transform:a,transformOrigin:s}=e;let l=!1,u=!1,c=!0;for(const d in t){const e=t[d];if(Si(d)){o[d]=e;continue}const n=$i[d],r=Ci(e,n);if(vi.has(d)){if(l=!0,a[d]=r,!c)continue;e!==(n.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,s[d]=r):i[d]=r}if(t.transform||(l||r?i.transform=function(e,t,n,r){let{enableHardwareAcceleration:i=!0,allowTransformNone:o=!0}=t,a="";for(let s=0;s<wi;s++){const t=gi[s];void 0!==e[t]&&(a+=`${xi[t]||t}(${e[t]}) `)}return i&&!e.z&&(a+="translateZ(0)"),a=a.trim(),r?a=r(e,n?"":a):o&&n&&(a="none"),a}(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}const Wi=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Yi(e,t,n){for(const r in t)bi(t[r])||yi(r,n)||(e[r]=t[r])}function Gi(e,n,r){const i={};return Yi(i,e.style||{},e),Object.assign(i,function(e,n,r){let{transformTemplate:i}=e;return(0,t.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Hi(e,n,{enableHardwareAcceleration:!r},i),Object.assign({},e.vars,e.style)},[n])}(e,n,r)),e.transformValues?e.transformValues(i):i}function qi(e,t,n){const r={},i=Gi(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const Ki=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Qi(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ki.has(e)}let Xi=e=>!Qi(e);try{(Ji=require("@emotion/is-prop-valid").default)&&(Xi=e=>e.startsWith("on")?!Qi(e):Ji(e))}catch(Yh){}var Ji;function Zi(e,t,n){return"string"===typeof e?e:Fi.transform(t+n*e)}const eo={offset:"stroke-dashoffset",array:"stroke-dasharray"},to={offset:"strokeDashoffset",array:"strokeDasharray"};function no(e,t,n,r,i){let{attrX:o,attrY:a,attrScale:s,originX:l,originY:u,pathLength:c,pathSpacing:d=1,pathOffset:p=0,...f}=t;if(Hi(e,f,n,i),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:h,style:m,dimensions:g}=e;h.transform&&(g&&(m.transform=h.transform),delete h.transform),g&&(void 0!==l||void 0!==u||m.transform)&&(m.transformOrigin=function(e,t,n){return`${Zi(t,e.x,e.width)} ${Zi(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==u?u:.5)),void 0!==o&&(h.x=o),void 0!==a&&(h.y=a),void 0!==s&&(h.scale=s),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?eo:to;e[o.offset]=Fi.transform(-r);const a=Fi.transform(t),s=Fi.transform(n);e[o.array]=`${a} ${s}`}(h,c,d,p,!1)}const ro=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),io=e=>"string"===typeof e&&"svg"===e.toLowerCase();function oo(e,n,r,i){const o=(0,t.useMemo)(()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return no(t,n,{enableHardwareAcceleration:!1},io(i),e.transformTemplate),{...t.attrs,style:{...t.style}}},[n]);if(e.style){const t={};Yi(t,e.style,e),o.style={...t,...o.style}}return o}function ao(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,o,a)=>{let{latestValues:s}=o;const l=(hi(n)?oo:qi)(r,s,a,n),u=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(Xi(i)||!0===n&&Qi(i)||!t&&!Qi(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,e),c={...u,...l,ref:i},{children:d}=r,p=(0,t.useMemo)(()=>bi(d)?d.get():d,[d]);return(0,t.createElement)(n,{...c,children:p})}}function so(e,t,n,r){let{style:i,vars:o}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const a in o)e.style.setProperty(a,o[a])}const lo=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function uo(e,t,n,r){so(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(lo.has(i)?i:Kr(i),t.attrs[i])}function co(e,t){const{style:n}=e,r={};for(const i in n)(bi(n[i])||t.style&&bi(t.style[i])||yi(i,e))&&(r[i]=n[i]);return r}function po(e,t){const n=co(e,t);for(const r in e)if(bi(e[r])||bi(t[r])){n[-1!==gi.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function fo(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}const ho=e=>Array.isArray(e),mo=e=>ho(e)?e[e.length-1]||0:e;function go(e){const t=bi(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const vo=e=>(n,r)=>{const i=(0,t.useContext)(Gr),o=(0,t.useContext)(_r),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:o,onMount:a}=e;const s={latestValues:yo(t,n,r,i),renderState:o()};return a&&(s.mount=e=>a(t,e,s)),s}(e,n,i,o);return r?a():Lr(a)};function yo(e,t,n,r){const i={},o=r(e,{});for(const p in o)i[p]=go(o[p]);let{initial:a,animate:s}=e;const l=ni(e),u=ri(e);t&&u&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===a;const d=c?s:a;if(d&&"boolean"!==typeof d&&!Zr(d)){(Array.isArray(d)?d:[d]).forEach(t=>{const n=fo(e,t);if(!n)return;const{transitionEnd:r,transition:o,...a}=n;for(const e in a){let t=a[e];if(Array.isArray(t)){t=t[c?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in r)i[e]=r[e]})}return i}const bo={useVisualState:vo({scrapeMotionValuesFromProps:po,createRenderState:ro,onMount:(e,t,n)=>{let{renderState:r,latestValues:i}=n;jr.read(()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(Wh){r.dimensions={x:0,y:0,width:0,height:0}}}),jr.render(()=>{no(r,i,{enableHardwareAcceleration:!1},io(t.tagName),e.transformTemplate),uo(t,r)})}})},xo={useVisualState:vo({scrapeMotionValuesFromProps:co,createRenderState:Wi})};function wo(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const ko=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function So(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function Eo(e,t,n,r){return wo(e,t,(e=>t=>ko(t)&&e(t,So(t)))(n),r)}const Co=(e,t)=>n=>t(e(n)),Po=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Co)};function To(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const jo=To("dragHorizontal"),Do=To("dragVertical");function Ao(e){let t=!1;if("y"===e)t=Do();else if("x"===e)t=jo();else{const e=jo(),n=Do();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Ro(){const e=Ao(!0);return!e||(e(),!1)}class _o{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Lo(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return Eo(e.current,n,(n,i)=>{if("touch"===n.pointerType||Ro())return;const o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[r]&&jr.update(()=>o[r](n,i))},{passive:!e.getProps()[r]})}const Mo=(e,t)=>!!t&&(e===t||Mo(e,t.parentElement));function Oo(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,So(n))}const No=new WeakMap,zo=new WeakMap,Fo=e=>{const t=No.get(e.target);t&&t(e)},Io=e=>{e.forEach(Fo)};function Vo(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;zo.has(r)||zo.set(r,{});const i=zo.get(r),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(Io,{root:t,...n})),i[o]}(t);return No.set(e,n),r.observe(e),()=>{No.delete(e),r.unobserve(e)}}const Bo={some:0,all:1};const Uo={inView:{Feature:class extends _o{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Bo[r]};return Vo(this.node.current,o,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends _o{constructor(){super(...arguments),this.removeStartListeners=Cr,this.removeEndListeners=Cr,this.removeAccessibleListeners=Cr,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=Eo(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps();jr.update(()=>{i||Mo(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)})},{passive:!(n.onTap||n.onPointerUp)}),i=Eo(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Po(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=wo(this.node.current,"keydown",e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=wo(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&Oo("up",(e,t)=>{const{onTap:n}=this.node.getProps();n&&jr.update(()=>n(e,t))})}),Oo("down",(e,t)=>{this.startPress(e,t)})}),t=wo(this.node.current,"blur",()=>{this.isPressing&&Oo("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=Po(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&jr.update(()=>n(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Ro()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&jr.update(()=>n(e,t))}mount(){const e=this.node.getProps(),t=Eo(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=wo(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Po(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends _o{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Wh){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Po(wo(this.node.current,"focus",()=>this.onFocus()),wo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends _o{mount(){this.unmount=Po(Lo(this.node,!0),Lo(this.node,!1))}unmount(){}}}};function $o(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Ho(e,t,n){const r=e.getProps();return fo(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach((e,n)=>t[n]=e.get()),t}(e),function(e){const t={};return e.values.forEach((e,n)=>t[n]=e.getVelocity()),t}(e))}const Wo=e=>1e3*e,Yo=e=>e/1e3,Go=!1,qo=e=>Array.isArray(e)&&"number"===typeof e[0];function Ko(e){return Boolean(!e||"string"===typeof e&&Xo[e]||qo(e)||Array.isArray(e)&&e.every(Ko))}const Qo=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Xo={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qo([0,.65,.55,1]),circOut:Qo([.55,0,1,.45]),backIn:Qo([.31,.01,.66,-.59]),backOut:Qo([.33,1.53,.69,.99])};function Jo(e){if(e)return qo(e)?Qo(e):Array.isArray(e)?e.map(Jo):Xo[e]}const Zo=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function ea(e,t,n,r){if(e===t&&n===r)return Cr;const i=t=>function(e,t,n,r,i){let o,a,s=0;do{a=t+(n-t)/2,o=Zo(a,r,i)-e,o>0?n=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:Zo(i(e),t,r)}const ta=ea(.42,0,1,1),na=ea(0,0,.58,1),ra=ea(.42,0,.58,1),ia=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,oa=e=>t=>1-e(1-t),aa=e=>1-Math.sin(Math.acos(e)),sa=oa(aa),la=ia(aa),ua=ea(.33,1.53,.69,.99),ca=oa(ua),da=ia(ca),pa={linear:Cr,easeIn:ta,easeInOut:ra,easeOut:na,circIn:aa,circInOut:la,circOut:sa,backIn:ca,backInOut:da,backOut:ua,anticipate:e=>(e*=2)<1?.5*ca(e):.5*(2-Math.pow(2,-10*(e-1)))},fa=e=>{if(Array.isArray(e)){Vr(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return ea(t,n,r,i)}return"string"===typeof e?(Vr(void 0!==pa[e],`Invalid easing type '${e}'`),pa[e]):e},ha=(e,t)=>n=>Boolean(Mi(n)&&Li.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),ma=(e,t,n)=>r=>{if(!Mi(r))return r;const[i,o,a,s]=r.match(Ri);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},ga={...Ti,transform:e=>Math.round((e=>Pi(0,255,e))(e))},va={test:ha("rgb","red"),parse:ma("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+ga.transform(t)+", "+ga.transform(n)+", "+ga.transform(r)+", "+Ai(ji.transform(i))+")"}};const ya={test:ha("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:va.transform},ba={test:ha("hsl","hue"),parse:ma("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+zi.transform(Ai(n))+", "+zi.transform(Ai(r))+", "+Ai(ji.transform(i))+")"}},xa={test:e=>va.test(e)||ya.test(e)||ba.test(e),parse:e=>va.test(e)?va.parse(e):ba.test(e)?ba.parse(e):ya.parse(e),transform:e=>Mi(e)?e:e.hasOwnProperty("red")?va.transform(e):ba.transform(e)},wa=(e,t,n)=>-n*e+n*t+e;function ka(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const Sa=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Ea=[ya,va,ba];function Ca(e){const t=(e=>Ea.find(t=>t.test(e)))(e);Vr(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===ba&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let o=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;o=ka(i,e,t+1/3),a=ka(i,e,t),s=ka(i,e,t-1/3)}else o=a=s=r;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:i}}(n)),n}const Pa=(e,t)=>{const n=Ca(e),r=Ca(t),i={...n};return e=>(i.red=Sa(n.red,r.red,e),i.green=Sa(n.green,r.green,e),i.blue=Sa(n.blue,r.blue,e),i.alpha=wa(n.alpha,r.alpha,e),va.transform(i))};const Ta={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:Cr},ja={regex:_i,countKey:"Colors",token:"${c}",parse:xa.parse},Da={regex:Ri,countKey:"Numbers",token:"${n}",parse:Ti.parse};function Aa(e,t){let{regex:n,countKey:r,token:i,parse:o}=t;const a=e.tokenised.match(n);a&&(e["num"+r]=a.length,e.tokenised=e.tokenised.replace(n,i),e.values.push(...a.map(o)))}function Ra(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Aa(n,Ta),Aa(n,ja),Aa(n,Da),n}function _a(e){return Ra(e).values}function La(e){const{values:t,numColors:n,numVars:r,tokenised:i}=Ra(e),o=t.length;return e=>{let t=i;for(let i=0;i<o;i++)t=i<r?t.replace(Ta.token,e[i]):i<r+n?t.replace(ja.token,xa.transform(e[i])):t.replace(Da.token,Ai(e[i]));return t}}const Ma=e=>"number"===typeof e?0:e;const Oa={test:function(e){var t,n;return isNaN(e)&&Mi(e)&&((null===(t=e.match(Ri))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(_i))||void 0===n?void 0:n.length)||0)>0},parse:_a,createTransformer:La,getAnimatableNone:function(e){const t=_a(e);return La(e)(t.map(Ma))}},Na=(e,t)=>n=>`${n>0?t:e}`;function za(e,t){return"number"===typeof e?n=>wa(e,t,n):xa.test(e)?Pa(e,t):e.startsWith("var(")?Na(e,t):Va(e,t)}const Fa=(e,t)=>{const n=[...e],r=n.length,i=e.map((e,n)=>za(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},Ia=(e,t)=>{const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=za(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}},Va=(e,t)=>{const n=Oa.createTransformer(t),r=Ra(e),i=Ra(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Po(Fa(r.values,i.values),n):(Ir(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),Na(e,t))},Ba=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},Ua=(e,t)=>n=>wa(e,t,n);function $a(e,t,n){const r=[],i=n||function(e){return"number"===typeof e?Ua:"string"===typeof e?xa.test(e)?Pa:Va:Array.isArray(e)?Fa:"object"===typeof e?Ia:Ua}(e[0]),o=e.length-1;for(let a=0;a<o;a++){let n=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||Cr:t;n=Po(e,n)}r.push(n)}return r}function Ha(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(Vr(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=$a(t,r,i),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=Ba(e[n],e[n+1],t);return a[n](r)};return n?t=>l(Pi(e[0],e[o-1],t)):l}function Wa(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ba(0,t,r);e.push(wa(n,1,i))}}(t,e.length-1),t}function Ya(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(fa):fa(i),a={done:!1,value:n[0]},s=function(e,t){return e.map(e=>e*t)}(r&&r.length===n.length?r:Wa(n),t),l=Ha(s,n,{ease:Array.isArray(o)?o:(u=n,c=o,u.map(()=>c||ra).splice(0,u.length-1))});var u,c;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}function Ga(e,t){return t?e*(1e3/t):0}function qa(e,t,n){const r=Math.max(t-5,0);return Ga(n-e(r),t-r)}const Ka=.001;function Qa(e){let t,n,{duration:r=800,bounce:i=.25,velocity:o=0,mass:a=1}=e;Ir(r<=Wo(10),"Spring duration must be 10 seconds or less");let s=1-i;s=Pi(.05,1,s),r=Pi(.01,10,Yo(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-o,a=Ja(e,s),l=Math.exp(-n);return Ka-i/a*l},n=e=>{const n=e*s*r,i=n*o+o,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),u=Ja(Math.pow(e,2),s);return(-t(e)+Ka>0?-1:1)*((i-a)*l)/u}):(t=e=>Math.exp(-e*r)*((e-o)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(o-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Xa;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Wo(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const Xa=12;function Ja(e,t){return e*Math.sqrt(1-t*t)}const Za=["duration","bounce"],es=["stiffness","damping","mass"];function ts(e,t){return t.some(t=>void 0!==e[t])}function ns(e){let{keyframes:t,restDelta:n,restSpeed:r,...i}=e;const o=t[0],a=t[t.length-1],s={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:d,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!ts(e,es)&&ts(e,Za)){const n=Qa(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-Yo(i.velocity||0)}),h=p||0,m=u/(2*Math.sqrt(l*c)),g=a-o,v=Yo(Math.sqrt(l/c)),y=Math.abs(g)<5;let b;if(r||(r=y?.01:2),n||(n=y?.005:.5),m<1){const e=Ja(v,m);b=t=>{const n=Math.exp(-m*v*t);return a-n*((h+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)b=e=>a-Math.exp(-v*e)*(g+(h+v*g)*e);else{const e=v*Math.sqrt(m*m-1);b=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((h+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:f&&d||null,next:e=>{const t=b(e);if(f)s.done=e>=d;else{let i=h;0!==e&&(i=m<1?qa(b,e,t):0);const o=Math.abs(i)<=r,l=Math.abs(a-t)<=n;s.done=o&&l}return s.value=s.done?a:t,s}}}function rs(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:u,restDelta:c=.5,restSpeed:d}=e;const p=t[0],f={done:!1,value:p},h=e=>void 0===l?u:void 0===u||Math.abs(l-e)<Math.abs(u-e)?l:u;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/i),b=e=>v+y(e),x=e=>{const t=y(e),n=b(e);f.done=Math.abs(t)<=c,f.value=f.done?v:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==u&&e>u)(f.value)&&(w=e,k=ns({keyframes:[f.value,h(f.value)],velocity:qa(b,e,f.value),damping:o,stiffness:a,restDelta:c,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,x(e),S(e)),void 0!==w&&e>w?k.next(e-w):(!t&&x(e),f)}}}const is=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>jr.update(t,!0),stop:()=>Dr(t),now:()=>Ar.isProcessing?Ar.timestamp:performance.now()}};function os(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const as={decay:rs,inertia:rs,tween:Ya,keyframes:Ya,spring:ns};function ss(e){let t,n,{autoplay:r=!0,delay:i=0,driver:o=is,keyframes:a,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:c="loop",onPlay:d,onStop:p,onComplete:f,onUpdate:h,...m}=e,g=1,v=!1;const y=()=>{n=new Promise(e=>{t=e})};let b;y();const x=as[s]||Ya;let w;x!==Ya&&"number"!==typeof a[0]&&(w=Ha([0,100],a,{clamp:!1}),a=[0,100]);const k=x({...m,keyframes:a});let S;"mirror"===c&&(S=x({...m,keyframes:[...a].reverse(),velocity:-(m.velocity||0)}));let E="idle",C=null,P=null,T=null;null===k.calculatedDuration&&l&&(k.calculatedDuration=os(k));const{calculatedDuration:j}=k;let D=1/0,A=1/0;null!==j&&(D=j+u,A=D*(l+1)-u);let R=0;const _=e=>{if(null===P)return;g>0&&(P=Math.min(P,e)),g<0&&(P=Math.min(e-A/g,P)),R=null!==C?C:Math.round(e-P)*g;const t=R-i*(g>=0?1:-1),n=g>=0?t<0:t>A;R=Math.max(t,0),"finished"===E&&null===C&&(R=A);let r=R,o=k;if(l){const e=Math.min(R,A)/D;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===c?(n=1-n,u&&(n-=u/D)):"mirror"===c&&(o=S)),r=Pi(0,1,n)*D}const s=n?{done:!1,value:a[0]}:o.next(r);w&&(s.value=w(s.value));let{done:d}=s;n||null===j||(d=g>=0?R>=A:R<=0);const p=null===C&&("finished"===E||"running"===E&&d);return h&&h(s.value),p&&O(),s},L=()=>{b&&b.stop(),b=void 0},M=()=>{E="idle",L(),t(),y(),P=T=null},O=()=>{E="finished",f&&f(),L(),t()},N=()=>{if(v)return;b||(b=o(_));const e=b.now();d&&d(),null!==C?P=e-C:P&&"finished"!==E||(P=e),"finished"===E&&y(),T=P,C=null,E="running",b.start()};r&&N();const z={then:(e,t)=>n.then(e,t),get time(){return Yo(R)},set time(e){e=Wo(e),R=e,null===C&&b&&0!==g?P=b.now()-e/g:C=e},get duration(){const e=null===k.calculatedDuration?os(k):k.calculatedDuration;return Yo(e)},get speed(){return g},set speed(e){e!==g&&b&&(g=e,z.time=Yo(R))},get state(){return E},play:N,pause:()=>{E="paused",C=R},stop:()=>{v=!0,"idle"!==E&&(E="idle",p&&p(),M())},cancel:()=>{null!==T&&_(T),M()},complete:()=>{E="finished"},sample:e=>(P=0,_(e))};return z}const ls=function(e){let t;return()=>(void 0===t&&(t=e()),t)}(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),us=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function cs(e,t,n){let{onUpdate:r,onComplete:i,...o}=n;if(!(ls()&&us.has(t)&&!o.repeatDelay&&"mirror"!==o.repeatType&&0!==o.damping&&"inertia"!==o.type))return!1;let a,s,l=!1,u=!1;const c=()=>{s=new Promise(e=>{a=e})};c();let{keyframes:d,duration:p=300,ease:f,times:h}=o;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Ko(t.ease))(t,o)){const e=ss({...o,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;h=void 0,d=n,p=r-10,f="linear"}const m=function(e,t,n){let{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const u={[t]:n};l&&(u.offset=l);const c=Jo(s);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,d,{...o,duration:p,ease:f,times:h}),g=()=>{u=!1,m.cancel()},v=()=>{u=!0,jr.update(g),a(),c()};m.onfinish=()=>{u||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,o)),i&&i(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(m.timeline=e,m.onfinish=null,Cr),get time(){return Yo(m.currentTime||0)},set time(e){m.currentTime=Wo(e)},get speed(){return m.playbackRate},set speed(e){m.playbackRate=e},get duration(){return Yo(p)},play:()=>{l||(m.play(),Dr(g))},pause:()=>m.pause(),stop:()=>{if(l=!0,"idle"===m.playState)return;const{currentTime:t}=m;if(t){const n=ss({...o,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}v()},complete:()=>{u||m.finish()},cancel:v}}const ds={type:"spring",stiffness:500,damping:25,restSpeed:10},ps={type:"keyframes",duration:.8},fs={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hs=(e,t)=>{let{keyframes:n}=t;return n.length>2?ps:vi.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:ds:fs},ms=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!Oa.test(t)&&"0"!==t||t.startsWith("url("))),gs=new Set(["brightness","contrast","saturate","opacity"]);function vs(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Ri)||[];if(!r)return e;const i=n.replace(r,"");let o=gs.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const ys=/([a-z-]*)\(.*?\)/g,bs={...Oa,getAnimatableNone:e=>{const t=e.match(ys);return t?t.map(vs).join(" "):e}},xs={...$i,color:xa,backgroundColor:xa,outlineColor:xa,fill:xa,stroke:xa,borderColor:xa,borderTopColor:xa,borderRightColor:xa,borderBottomColor:xa,borderLeftColor:xa,filter:bs,WebkitFilter:bs},ws=e=>xs[e];function ks(e,t){let n=ws(e);return n!==bs&&(n=Oa),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Ss=e=>/^0[^.\s]+$/.test(e);function Es(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||Ss(e):void 0}function Cs(e,t){return e[t]||e.default||e}const Ps=!1,Ts=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const o=Cs(r,e)||{},a=o.delay||r.delay||0;let{elapsed:s=0}=r;s-=Wo(a);const l=function(e,t,n,r){const i=ms(t,n);let o;o=Array.isArray(n)?[...n]:[null,n];const a=void 0!==r.from?r.from:e.get();let s;const l=[];for(let u=0;u<o.length;u++)null===o[u]&&(o[u]=0===u?a:o[u-1]),Es(o[u])&&l.push(u),"string"===typeof o[u]&&"none"!==o[u]&&"0"!==o[u]&&(s=o[u]);if(i&&l.length&&s)for(let u=0;u<l.length;u++)o[l[u]]=ks(t,s);return o}(t,e,n,o),u=l[0],c=l[l.length-1],d=ms(e,u),p=ms(e,c);Ir(d===p,`You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);let f={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:l,from:u,elapsed:c,...d}=e;return!!Object.keys(d).length}(o)||(f={...f,...hs(e,f)}),f.duration&&(f.duration=Wo(f.duration)),f.repeatDelay&&(f.repeatDelay=Wo(f.repeatDelay)),!d||!p||Go||!1===o.type||Ps)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:i}=e;const o=()=>(r&&r(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Cr,pause:Cr,stop:Cr,then:e=>(e(),Promise.resolve()),cancel:Cr,complete:Cr});return n?ss({keyframes:[0,1],duration:0,delay:n,onComplete:o}):o()}(Go?{...f,delay:0}:f);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=cs(t,e,f);if(n)return n}return ss(f)}};function js(e){return Boolean(bi(e)&&e.add)}const Ds=e=>/^\-?\d*\.?\d+$/.test(e);function As(e,t){-1===e.indexOf(t)&&e.push(t)}function Rs(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class _s{constructor(){this.subscriptions=[]}add(e){return As(this.subscriptions,e),()=>Rs(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ls={current:void 0};class Ms{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:i}=Ar;t.lastUpdated!==i&&(t.timeDelta=r,t.lastUpdated=i,jr.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>jr.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new _s);const n=this.events[e].add(t);return"change"===e?()=>{n(),jr.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ls.current&&Ls.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ga(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Os(e,t){return new Ms(e,t)}const Ns=e=>t=>t.test(e),zs=[Ti,Fi,zi,Ni,Vi,Ii,{test:e=>"auto"===e,parse:e=>e}],Fs=e=>zs.find(Ns(e)),Is=[...zs,xa,Oa],Vs=e=>Is.find(Ns(e));function Bs(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Os(n))}function Us(e,t){const n=Ho(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){Bs(e,a,mo(o[a]))}}function $s(e,t){if(!t)return;return(t[e]||t.default||t).from}function Hs(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function Ws(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function Ys(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||c&&Hs(c,d))continue;const i={delay:n,elapsed:0,...Cs(o||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[Qr];if(n){const e=window.HandoffAppearAnimations(n,d,t,jr);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let a=!i.isHandoff&&!Ws(t,r);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(a=!1),t.animation&&(a=!1),a)continue;t.start(Ts(d,t,r,e.shouldReduceMotion&&vi.has(d)?{type:!1}:i));const p=t.animation;js(l)&&(l.add(d),p.then(()=>l.remove(d))),u.push(p)}return a&&Promise.all(u).then(()=>{a&&Us(e,a)}),u}function Gs(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=Ho(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(Ys(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(qs).forEach((e,r)=>{e.notify("AnimationStart",t),a.push(Gs(e,t,{...o,delay:n+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(a)}(e,t,o+r,a,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then(()=>t())}return Promise.all([o(),a(n.delay)])}function qs(e,t){return e.sortNodePosition(t)}const Ks=[...ei].reverse(),Qs=ei.length;function Xs(e){return t=>Promise.all(t.map(t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>Gs(e,t,r));n=Promise.all(i)}else if("string"===typeof t)n=Gs(e,t,r);else{const i="function"===typeof t?Ho(e,t,r.custom):t;n=Promise.all(Ys(e,i,r))}return n.then(()=>e.notify("AnimationComplete",t))}(e,n,r)}))}function Js(e){let t=Xs(e);const n={animate:el(!0),whileInView:el(),whileHover:el(),whileTap:el(),whileDrag:el(),whileFocus:el(),exit:el()};let r=!0;const i=(t,n)=>{const r=Ho(e,n);if(r){const{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};function o(o,a){const s=e.getProps(),l=e.getVariantContext(!0)||{},u=[],c=new Set;let d={},p=1/0;for(let t=0;t<Qs;t++){const f=Ks[t],h=n[f],m=void 0!==s[f]?s[f]:l[f],g=Jr(m),v=f===a?h.isActive:null;!1===v&&(p=t);let y=m===l[f]&&m!==s[f]&&g;if(y&&r&&e.manuallyAnimateOnMount&&(y=!1),h.protectedKeys={...d},!h.isActive&&null===v||!m&&!h.prevProp||Zr(m)||"boolean"===typeof m)continue;let b=Zs(h.prevProp,m)||f===a&&h.isActive&&!y&&g||t>p&&g,x=!1;const w=Array.isArray(m)?m:[m];let k=w.reduce(i,{});!1===v&&(k={});const{prevResolvedValues:S={}}=h,E={...S,...k},C=e=>{b=!0,c.has(e)&&(x=!0,c.delete(e)),h.needsAnimating[e]=!0};for(const e in E){const t=k[e],n=S[e];if(d.hasOwnProperty(e))continue;let r=!1;r=ho(t)&&ho(n)?!$o(t,n):t!==n,r?void 0!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):h.protectedKeys[e]=!0}h.prevProp=m,h.prevResolvedValues=k,h.isActive&&(d={...d,...k}),r&&e.blockInitialAnimation&&(b=!1),!b||y&&!x||u.push(...w.map(e=>({animation:e,options:{type:f,...o}})))}if(c.size){const t={};c.forEach(n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)}),u.push({animation:t})}let f=Boolean(u.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(f=!1),r=!1,f?t(u):Promise.resolve()}return{animateChanges:o,setActive:function(t,r,i){var a;if(n[t].isActive===r)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach(e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)}),n[t].isActive=r;const s=o(i,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function Zs(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!$o(t,e)}function el(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let tl=0;const nl={animation:{Feature:class extends _o{constructor(e){super(e),e.animationState||(e.animationState=Js(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Zr(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends _o{constructor(){super(...arguments),this.id=tl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&i.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},rl=(e,t)=>Math.abs(e-t);class il{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=sl(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=rl(e.x,t.x),r=rl(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Ar;this.history.push({...r,timestamp:i});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ol(t,this.transformPagePoint),jr.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=sl("pointercancel"===e.type?this.lastMoveEventInfo:ol(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!ko(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const o=ol(So(e),this.transformPagePoint),{point:a}=o,{timestamp:s}=Ar;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,sl(o,this.history)),this.removeListeners=Po(Eo(this.contextWindow,"pointermove",this.handlePointerMove),Eo(this.contextWindow,"pointerup",this.handlePointerUp),Eo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Dr(this.updatePoint)}}function ol(e,t){return t?{point:t(e.point)}:e}function al(e,t){return{x:e.x-t.x,y:e.y-t.y}}function sl(e,t){let{point:n}=e;return{point:n,delta:al(n,ul(t)),offset:al(n,ll(t)),velocity:cl(t,.1)}}function ll(e){return e[0]}function ul(e){return e[e.length-1]}function cl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=ul(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Wo(t)));)n--;if(!r)return{x:0,y:0};const o=Yo(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function dl(e){return e.max-e.min}function pl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function fl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=wa(t.min,t.max,e.origin),e.scale=dl(n)/dl(t),(pl(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=wa(n.min,n.max,e.origin)-e.originPoint,(pl(e.translate)||isNaN(e.translate))&&(e.translate=0)}function hl(e,t,n,r){fl(e.x,t.x,n.x,r?r.originX:void 0),fl(e.y,t.y,n.y,r?r.originY:void 0)}function ml(e,t,n){e.min=n.min+t.min,e.max=e.min+dl(t)}function gl(e,t,n){e.min=t.min-n.min,e.max=e.min+dl(t)}function vl(e,t,n){gl(e.x,t.x,n.x),gl(e.y,t.y,n.y)}function yl(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function bl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const xl=.35;function wl(e,t,n){return{min:kl(e,t),max:kl(e,n)}}function kl(e,t){return"number"===typeof e?e:e[t]||0}const Sl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function El(e){return[e("x"),e("y")]}function Cl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function Pl(e){return void 0===e||1===e}function Tl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Pl(t)||!Pl(n)||!Pl(r)}function jl(e){return Tl(e)||Dl(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Dl(e){return Al(e.x)||Al(e.y)}function Al(e){return e&&"0%"!==e}function Rl(e,t,n){return n+t*(e-n)}function _l(e,t,n,r,i){return void 0!==i&&(e=Rl(e,i,r)),Rl(e,n,r)+t}function Ll(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=_l(e.min,t,n,r,i),e.max=_l(e.max,t,n,r,i)}function Ml(e,t){let{x:n,y:r}=t;Ll(e.x,n.translate,n.scale,n.originPoint),Ll(e.y,r.translate,r.scale,r.originPoint)}function Ol(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Nl(e,t){e.min=e.min+t,e.max=e.max+t}function zl(e,t,n){let[r,i,o]=n;const a=void 0!==t[o]?t[o]:.5,s=wa(e.min,e.max,a);Ll(e,t[r],t[i],s,t.scale)}const Fl=["x","scaleX","originX"],Il=["y","scaleY","originY"];function Vl(e,t){zl(e.x,t,Fl),zl(e.y,t,Il)}function Bl(e,t){return Cl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Ul=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},$l=new WeakMap;class Hl{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new il(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(So(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ao(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),El(e=>{let t=this.getAxisMotionValue(e).get()||0;if(zi.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=dl(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&jr.update(()=>i(e,t),!1,!0);const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>El(e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:Ul(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&jr.update(()=>i(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!Wl(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?wa(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?wa(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Xr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:o}=t;return{x:yl(e.x,r,o),y:yl(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xl;return!1===e?e=0:!0===e&&(e=xl),{x:wl(e,"left","right"),y:wl(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&El(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Xr(e))return!1;const n=e.current;Vr(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Bl(e,n),{scroll:i}=t;return i&&(Nl(r.x,i.offset.x),Nl(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:bl(e.x,t.x),y:bl(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=Cl(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=El(a=>{if(!Wl(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});const u=r?200:1e6,c=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:u,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,d)});return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(Ts(e,n,0,t))}stopAnimation(){El(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){El(e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()})}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){El(t=>{const{drag:n}=this.getProps();if(!Wl(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-wa(n,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Xr(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};El(e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=dl(e),i=dl(t);return i>r?n=Ba(t.min,t.max-r,e.min):r>i&&(n=Ba(e.min,e.max-i,t.min)),Pi(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),El(t=>{if(!Wl(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(wa(i,o,r[t]))})}addListeners(){if(!this.visualElement.current)return;$l.set(this.visualElement,this);const e=Eo(this.visualElement.current,"pointerdown",e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{const{dragConstraints:e}=this.getProps();Xr(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const i=wo(window,"resize",()=>this.scalePositionWithinConstraints()),o=n.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(El(e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=xl,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function Wl(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Yl=e=>(t,n)=>{e&&jr.update(()=>e(t,n))};const Gl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ql(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Kl={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Fi.test(e))return e;e=parseFloat(e)}return`${ql(e,t.target.x)}% ${ql(e,t.target.y)}%`}},Ql={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,o=Oa.parse(e);if(o.length>5)return i;const a=Oa.createTransformer(e),s="number"!==typeof o[0]?1:0,l=r.x.scale*n.x,u=r.y.scale*n.y;o[0+s]/=l,o[1+s]/=u;const c=wa(l,u,.5);return"number"===typeof o[2+s]&&(o[2+s]/=c),"number"===typeof o[3+s]&&(o[3+s]/=c),a(o)}};class Xl extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var o;o=Zl,Object.assign(mi,o),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Gl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o?(o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||jr.postRender(()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Jl(e){const[n,r]=function(){const e=(0,t.useContext)(_r);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,o=(0,t.useId)();return(0,t.useEffect)(()=>i(o),[]),!n&&r?[!1,()=>r&&r(o)]:[!0]}(),i=(0,t.useContext)(Fr);return t.createElement(Xl,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(li),isPresent:n,safeToRemove:r})}const Zl={borderRadius:{...Kl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Kl,borderTopRightRadius:Kl,borderBottomLeftRadius:Kl,borderBottomRightRadius:Kl,boxShadow:Ql},eu=["TopLeft","TopRight","BottomLeft","BottomRight"],tu=eu.length,nu=e=>"string"===typeof e?parseFloat(e):e,ru=e=>"number"===typeof e||Fi.test(e);function iu(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const ou=su(0,.5,sa),au=su(.5,.95,Cr);function su(e,t,n){return r=>r<e?0:r>t?1:n(Ba(e,t,r))}function lu(e,t){e.min=t.min,e.max=t.max}function uu(e,t){lu(e.x,t.x),lu(e.y,t.y)}function cu(e,t,n,r,i){return e=Rl(e-=t,1/n,r),void 0!==i&&(e=Rl(e,1/i,r)),e}function du(e,t,n,r,i){let[o,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;zi.test(t)&&(t=parseFloat(t),t=wa(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=wa(o.min,o.max,r);e===o&&(s-=t),e.min=cu(e.min,t,n,s,i),e.max=cu(e.max,t,n,s,i)}(e,t[o],t[a],t[s],t.scale,r,i)}const pu=["x","scaleX","originX"],fu=["y","scaleY","originY"];function hu(e,t,n,r){du(e.x,t,pu,n?n.x:void 0,r?r.x:void 0),du(e.y,t,fu,n?n.y:void 0,r?r.y:void 0)}function mu(e){return 0===e.translate&&1===e.scale}function gu(e){return mu(e.x)&&mu(e.y)}function vu(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function yu(e){return dl(e.x)/dl(e.y)}class bu{constructor(){this.members=[]}add(e){As(this.members,e),e.scheduleRender()}remove(e){if(Rs(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex(t=>e===t);if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function xu(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return 1===a&&1===s||(r+=`scale(${a}, ${s})`),r||"none"}const wu=(e,t)=>e.depth-t.depth;class ku{constructor(){this.children=[],this.isDirty=!1}add(e){As(this.children,e),this.isDirty=!0}remove(e){Rs(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(wu),this.isDirty=!1,this.children.forEach(e)}}const Su=["","X","Y","Z"],Eu={visibility:"hidden"};let Cu=0;const Pu={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Tu(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=Cu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Pu.totalNodes=Pu.resolvedTargetDeltas=Pu.recalculatedProjection=0,this.nodes.forEach(Au),this.nodes.forEach(zu),this.nodes.forEach(Fu),this.nodes.forEach(Ru),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(Pu)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new ku)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new _s),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:o,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(o||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=i=>{let{timestamp:o}=i;const a=o-n;a>=t&&(Dr(r),e(a-t))};return jr.read(r,!0),()=>Dr(r)}(r,250),Gl.hasAnimatedSinceResize&&(Gl.hasAnimatedSinceResize=!1,this.nodes.forEach(Nu))})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&a&&(i||o)&&this.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||Hu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),u=!this.targetLayout||!vu(this.targetLayout,i)||r,c=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||c||n&&(u||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...Cs(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||Nu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Dr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Iu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Lu);this.isUpdating||this.nodes.forEach(Mu),this.isUpdating=!1,this.nodes.forEach(Ou),this.nodes.forEach(ju),this.nodes.forEach(Du),this.clearAllSnapshots();const e=performance.now();Ar.delta=Pi(0,1e3/60,e-Ar.timestamp),Ar.timestamp=e,Ar.isProcessing=!0,Rr.update.process(Ar),Rr.preRender.process(Ar),Rr.render.process(Ar),Ar.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(_u),this.sharedNodes.forEach(Vu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,jr.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){jr.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!gu(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||jl(this.latestValues)||i)&&(o(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Gu((r=n).x),Gu(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(Nl(t.x,n.offset.x),Nl(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};uu(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:o}=r;if(r!==this.root&&i&&o.layoutScroll){if(i.isRoot){uu(t,e);const{scroll:n}=this.root;n&&(Nl(t.x,-n.offset.x),Nl(t.y,-n.offset.y))}Nl(t.x,i.offset.x),Nl(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};uu(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Vl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),jl(e.latestValues)&&Vl(n,e.latestValues)}return jl(this.latestValues)&&Vl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};uu(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!jl(e.latestValues))continue;Tl(e.latestValues)&&e.updateSnapshot();const r=Sl();uu(r,e.measurePageBox()),hu(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return jl(this.latestValues)&&hu(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ar.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:o}=this.options;if(this.layout&&(i||o)){if(this.resolvedRelativeTargetAt=Ar.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},vl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),uu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,ml(a.x,s.x,l.x),ml(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):uu(this.target,this.layout.layoutBox),Ml(this.target,this.targetDelta)):uu(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},vl(this.relativeTargetOrigin,this.target,e.target),uu(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Pu.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Tl(this.parent.latestValues)&&!Dl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===Ar.timestamp&&(r=!1),r)return;const{layout:i,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!o)return;uu(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let o,a;t.x=t.y=1;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const i=o.instance;i&&i.style&&"contents"===i.style.display||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Vl(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ml(e,a)),r&&jl(o.latestValues)&&Vl(e,o.latestValues))}t.x=Ol(t.x),t.y=Ol(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const u=this.projectionTransform;hl(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=xu(this.projectionDelta,this.treeScale),this.projectionTransform===u&&this.treeScale.x===a&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Pu.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,c=Boolean(s&&!u&&!0===this.options.crossfade&&!this.path.some($u));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Bu(o.x,e.x,n),Bu(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vl(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){Uu(e.x,t.x,n.x,r),Uu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),uu(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,o){i?(e.opacity=wa(0,void 0!==n.opacity?n.opacity:1,ou(r)),e.opacityExit=wa(void 0!==t.opacity?t.opacity:1,0,au(r))):o&&(e.opacity=wa(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let a=0;a<tu;a++){const i=`border${eu[a]}Radius`;let o=iu(t,i),s=iu(n,i);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||ru(o)===ru(s)?(e[i]=Math.max(wa(nu(o),nu(s),r),0),(zi.test(s)||zi.test(o))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=wa(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,c,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Dr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=jr.update(()=>{Gl.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=bi(e)?e:Os(e);return r.start(Ts("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&qu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=dl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=dl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}uu(t,n),Vl(t,i),hl(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new bu);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let i=0;i<Su.length;i++){const t="rotate"+Su[i];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const i in r)e.setStaticValue(i,r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Eu;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=go(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=go(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!jl(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=xu(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?r.opacity=o===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:r.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const u in mi){if(void 0===a[u])continue;const{correct:e,applyTo:t}=mi[u],n="none"===r.transform?a[u]:e(a[u],o);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[u]=n}return this.options.layoutId&&(r.pointerEvents=o===this?go(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(Lu),this.root.sharedNodes.clear()}}}function ju(e){e.updateLayout()}function Du(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;"size"===i?El(e=>{const r=o?n.measuredBox[e]:n.layoutBox[e],i=dl(r);r.min=t[e].min,r.max=r.min+i}):qu(i,n.layoutBox,t)&&El(r=>{const i=o?n.measuredBox[r]:n.layoutBox[r],a=dl(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)});const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};hl(a,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?hl(s,e.applyTransform(r,!0),n.measuredBox):hl(s,t,n.layoutBox);const l=!gu(a);let u=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:o}=r;if(i&&o){const a={x:{min:0,max:0},y:{min:0,max:0}};vl(a,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};vl(s,t,o.layoutBox),vu(a,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Au(e){Pu.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Ru(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function _u(e){e.clearSnapshot()}function Lu(e){e.clearMeasurements()}function Mu(e){e.isLayoutDirty=!1}function Ou(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Nu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function zu(e){e.resolveTargetDelta()}function Fu(e){e.calcProjection()}function Iu(e){e.resetRotation()}function Vu(e){e.removeLeadSnapshot()}function Bu(e,t,n){e.translate=wa(t.translate,0,n),e.scale=wa(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Uu(e,t,n,r){e.min=wa(t.min,n.min,r),e.max=wa(t.max,n.max,r)}function $u(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Hu={duration:.45,ease:[.4,0,.1,1]},Wu=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Yu=Wu("applewebkit/")&&!Wu("chrome/")?Math.round:Cr;function Gu(e){e.min=Yu(e.min),e.max=Yu(e.max)}function qu(e,t,n){return"position"===e||"preserve-aspect"===e&&!pl(yu(t),yu(n),.2)}const Ku=Tu({attachResizeListener:(e,t)=>wo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qu={current:void 0},Xu=Tu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Qu.current){const e=new Ku({});e.mount(window),e.setOptions({layoutScroll:!0}),Qu.current=e}return Qu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Ju={pan:{Feature:class extends _o{constructor(){super(...arguments),this.removePointerDownListener=Cr}onPointerDown(e){this.session=new il(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ul(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Yl(e),onStart:Yl(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&jr.update(()=>r(e,t))}}}mount(){this.removePointerDownListener=Eo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends _o{constructor(e){super(e),this.removeGroupControls=Cr,this.removeListeners=Cr,this.controls=new Hl(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Cr}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Xu,MeasureLayout:Jl}},Zu=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function ec(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Vr(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=Zu.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const e=o.trim();return Ds(e)?parseFloat(e):e}return Ei(i)?ec(i,t,n+1):i}const tc=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),nc=e=>tc.has(e),rc=e=>e===Ti||e===Fi,ic=(e,t)=>parseFloat(e.split(", ")[t]),oc=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/);if(o)return ic(o[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?ic(t[1],e):0}},ac=new Set(["x","y","z"]),sc=gi.filter(e=>!ac.has(e));const lc={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:oc(4,13),y:oc(5,14)};lc.translateX=lc.x,lc.translateY=lc.y;const uc=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const i=Object.keys(t).filter(nc);let o=[],a=!1;const s=[];if(i.forEach(i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let u=n[i],c=Fs(u);const d=t[i];let p;if(ho(d)){const e=d.length,t=null===d[0]?1:0;u=d[t],c=Fs(u);for(let n=t;n<e&&null!==d[n];n++)p?Vr(Fs(d[n])===p,"All keyframes must be of the same type"):(p=Fs(d[n]),Vr(p===c||rc(c)&&rc(p),"Keyframes must be of the same dimension as the current value"))}else p=Fs(d);if(c!==p)if(rc(c)&&rc(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[i]=parseFloat(d):Array.isArray(d)&&p===Fi&&(t[i]=d.map(parseFloat))}else(null===c||void 0===c?void 0:c.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===u||0===d)?0===u?l.set(p.transform(u)):t[i]=c.transform(d):(a||(o=function(e){const t=[];return sc.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),a=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],l.jump(d))}),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),n.forEach(e=>{s[e]=lc[e](r,o)}),t.render();const l=t.measureViewportBox();return n.forEach(n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=lc[n](l,o)}),e})(t,e,s);return o.length&&o.forEach(t=>{let[n,r]=t;e.getValue(n).set(r)}),e.render(),kr&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}return{target:t,transitionEnd:r}};function cc(e,t,n,r){return(e=>Object.keys(e).some(nc))(t)?uc(e,t,n,r):{target:t,transitionEnd:r}}const dc=(e,t,n,r)=>{const i=function(e,t,n){let{...r}=t;const i=e.current;if(!(i instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach(e=>{const t=e.get();if(!Ei(t))return;const n=ec(t,i);n&&e.set(n)});for(const o in r){const e=r[o];if(!Ei(e))continue;const t=ec(e,i);t&&(r[o]=t,n||(n={}),void 0===n[o]&&(n[o]=e))}return{target:r,transitionEnd:n}}(e,t,r);return cc(e,t=i.target,n,r=i.transitionEnd)},pc={current:null},fc={current:!1};const hc=new WeakMap,mc=Object.keys(si),gc=mc.length,vc=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],yc=ti.length;class bc{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>jr.render(this.render,!1,!0);const{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=ni(n),this.isVariantNode=ri(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const e=c[d];void 0!==s[d]&&bi(e)&&(e.set(s[d],!1),js(u)&&u.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,hc.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),fc.current||function(){if(fc.current=!0,kr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>pc.current=e.matches;e.addListener(t),t()}else pc.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||pc.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){hc.delete(this.current),this.projection&&this.projection.unmount(),Dr(this.notifyUpdate),Dr(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=vi.has(e),r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&jr.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let i,o,{children:a,...s}=e;for(let l=0;l<gc;l++){const e=mc[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:a}=si[e];r&&(i=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),a&&(o=a))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:o,layoutScroll:a,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||o&&Xr(o),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:a,layoutRoot:l})}return o}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<vc.length;n++){const t=vc[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if(bi(o))e.addValue(i,o),js(r)&&r.add(i);else if(bi(a))e.addValue(i,Os(o,{owner:e})),js(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(o)}else{const t=e.getStaticValue(i);e.addValue(i,Os(void 0!==t?t:o,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<yc;t++){const n=ti[t],r=this.props[n];(Jr(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Os(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=fo(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||bi(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new _s),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class xc extends bc{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:i,...o}=e,{transformValues:a}=t,s=function(e,t,n){const r={};for(const i in e){const e=$s(i,t);if(void 0!==e)r[i]=e;else{const e=n.getValue(i);e&&(r[i]=e.get())}}return r}(o,r||{},this);if(a&&(i&&(i=a(i)),o&&(o=a(o)),s&&(s=a(s))),n){!function(e,t,n){var r,i;const o=Object.keys(t).filter(t=>!e.hasValue(t)),a=o.length;if(a)for(let s=0;s<a;s++){const a=o[s],l=t[a];let u=null;Array.isArray(l)&&(u=l[0]),null===u&&(u=null!==(i=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==i?i:t[a]),void 0!==u&&null!==u&&("string"===typeof u&&(Ds(u)||Ss(u))?u=parseFloat(u):!Vs(u)&&Oa.test(l)&&(u=ks(a,l)),e.addValue(a,Os(u,{owner:e})),void 0===n[a]&&(n[a]=u),null!==u&&e.setBaseTarget(a,u))}}(this,o,s);const e=dc(this,o,s,i);i=e.transitionEnd,o=e.target}return{transition:r,transitionEnd:i,...o}}}class wc extends xc{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(vi.has(t)){const e=ws(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(Si(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Bl(e,n)}build(e,t,n,r){Hi(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return co(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;bi(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,n,r){so(e,t,n,r)}}class kc extends xc{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(vi.has(t)){const e=ws(t);return e&&e.default||0}return t=lo.has(t)?t:Kr(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return po(e,t)}build(e,t,n,r){no(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){uo(e,t,0,r)}mount(e){this.isSVGTag=io(e.tagName),super.mount(e)}}const Sc=(e,t)=>hi(e)?new kc(t,{enableHardwareAcceleration:!1}):new wc(t,{enableHardwareAcceleration:!0}),Ec={...nl,...Uo,...Ju,...{layout:{ProjectionNode:Xu,MeasureLayout:Jl}}},Cc=pi((e,t)=>function(e,t,n,r){let{forwardMotionProps:i=!1}=t;return{...hi(e)?bo:xo,preloadedFeatures:n,useRender:ao(i),createVisualElement:r,Component:e}}(e,t,Ec,Sc));var Pc=n(414);const Tc=wr`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`,jc=wr`
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
`,Dc=wr`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Ac=br(Cc.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(192, 192, 192, 0.02) 0%, transparent 50%);
    animation: ${jc} 4s ease-in-out infinite;
  }
`,Rc=br(Cc.div)`
  position: relative;
  margin-bottom: 4rem;
  z-index: 2;
`,_c=br(Cc.div)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 100;
  letter-spacing: 8px;
  background: linear-gradient(
    45deg,
    #D4AF37 0%,
    #FFD700 25%,
    #C0C0C0 50%,
    #B8860B 75%,
    #D4AF37 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${Tc} 3s linear infinite;
  text-align: center;
  position: relative;
 
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    animation: ${jc} 2s ease-in-out infinite;
  }
`,Lc=br(Cc.p)`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-top: 2rem;
  text-transform: uppercase;
`,Mc=br.div`
  width: 400px;
  max-width: 80vw;
  margin-bottom: 3rem;
  position: relative;
`,Oc=br.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  overflow: hidden;
  position: relative;
 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg,
      transparent,
      rgba(212, 175, 55, 0.3),
      transparent
    );
    animation: ${Tc} 2s linear infinite;
  }
`,Nc=br(Cc.div)`
  height: 100%;
  background: linear-gradient(90deg,
    #D4AF37 0%,
    #FFD700 50%,
    #C0C0C0 100%
  );
  border-radius: 1px;
  position: relative;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
 
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    animation: ${jc} 1.5s ease-in-out infinite;
  }
`,zc=br(Cc.div)`
  text-align: center;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 2px;
`,Fc=br.div`
  width: 60px;
  height: 60px;
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-top: 2px solid #D4AF37;
  border-radius: 50%;
  animation: ${Dc} 1s linear infinite;
  margin-bottom: 2rem;
  position: relative;
 
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border: 2px solid rgba(192, 192, 192, 0.3);
    border-top: 2px solid #C0C0C0;
    border-radius: 50%;
    animation: ${Dc} 0.8s linear infinite reverse;
  }
`,Ic=br.div`
  display: flex;
  gap: 8px;
  margin-top: 2rem;
`,Vc=br(Cc.div)`
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
`,Bc=["Crafting your experience...","Preparing luxury collection...","Loading precious moments...","Polishing the details...","Almost ready..."],Uc=e=>{let{onLoadingComplete:n}=e;const[r,i]=(0,t.useState)(0),[o,a]=(0,t.useState)(!0),[s,l]=(0,t.useState)(0);(0,t.useEffect)(()=>{const e=setInterval(()=>{l(e=>(e+1)%Bc.length)},800),t=setInterval(()=>{i(r=>r>=100?(clearInterval(t),clearInterval(e),setTimeout(()=>{n(),a(!1)},1e3),100):r+5*Math.random()+1)},200);return()=>{clearInterval(t),clearInterval(e)}},[n]);const u={animate:e=>({scale:[1,1.5,1],opacity:[.5,1,.5],transition:{duration:1.2,repeat:1/0,delay:.2*e,ease:"easeInOut"}})};return(0,Pc.jsx)(Ur,{children:o&&(0,Pc.jsxs)(Ac,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.3,ease:"easeOut"},children:[(0,Pc.jsxs)(Rc,{children:[(0,Pc.jsx)(_c,{initial:{opacity:0,y:-50,scale:.8},animate:{opacity:1,y:0,scale:1},transition:{duration:1.2,ease:"easeOut"},children:"LUXE"}),(0,Pc.jsx)(Lc,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.5},children:"Jewelry Collection"})]}),(0,Pc.jsx)(Cc.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.8},children:(0,Pc.jsx)(Fc,{})}),(0,Pc.jsxs)(Mc,{children:[(0,Pc.jsx)(Oc,{children:(0,Pc.jsx)(Nc,{initial:{width:0},animate:{width:`${Math.min(r,100)}%`},transition:{duration:.3,ease:"easeOut"}})}),(0,Pc.jsxs)(zc,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:1},children:[Math.round(r),"%"]})]}),(0,Pc.jsx)(Cc.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"1.1rem",fontWeight:300,letterSpacing:"1px",textAlign:"center",marginBottom:"2rem"},children:Bc[s]},s),(0,Pc.jsx)(Ic,{children:[0,1,2].map(e=>(0,Pc.jsx)(Vc,{custom:e,variants:u,animate:"animate"},e))})]})})},$c=br.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: transparent;
`,Hc=()=>(0,Pc.jsx)($c,{}),Wc=br(Cc.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  background: ${e=>e.scrolled?"rgba(0, 0, 0, 0.95)":"transparent"};
  backdrop-filter: ${e=>e.scrolled?"blur(20px)":"none"};
  border-bottom: ${e=>e.scrolled?"1px solid rgba(212, 175, 55, 0.2)":"none"};
  transition: all 0.3s ease;
`,Yc=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Gc=br.div`
  font-size: 2.2rem;
  font-weight: 300;
  background: ${e=>e.theme.colors.gradient.goldSilver};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  letter-spacing: 4px;
  font-family: ${e=>e.theme.fonts.primary};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`,qc=br.nav`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    display: ${e=>e.isOpen?"flex":"none"};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 30px 20px;
    border-top: 1px solid rgba(212, 175, 55, 0.2);
  }
`,Kc=br.a`
  color: ${e=>e.active?e.theme.colors.gold:"rgba(255, 255, 255, 0.8)"};
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${e=>e.active?"100%":"0"};
    height: 1px;
    background: ${e=>e.theme.colors.gradient.goldSilver};
    transition: width 0.3s ease;
  }
  
  &:hover {
    background: ${e=>e.theme.colors.gradient.goldSilver};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    &::after {
      width: 100%;
    }
  }
`,Qc=br.button`
  display: none;
  background: none;
  border: none;
  background: ${e=>e.theme.colors.gradient.goldSilver};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`,Xc=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!1),o=Q(),a=J();(0,t.useEffect)(()=>{const e=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const s=e=>(e.preventDefault(),"/"!==o.pathname?(a("/"),void i(!1)):window.scrollY<100&&!window.location.hash?(console.log("Already at home top"),void i(!1)):(window.scrollTo({top:0,behavior:"smooth"}),window.history.pushState(null,null,"/"),void i(!1)));return(0,Pc.jsx)(Wc,{scrolled:e,initial:{y:-100},animate:{y:0},transition:{duration:.8},children:(0,Pc.jsxs)(Yc,{children:[(0,Pc.jsx)(Gc,{onClick:s,children:"LUXE"}),(0,Pc.jsx)(qc,{isOpen:r,children:[{name:"Home",path:"/",isHome:!0},{name:"Products",path:"/products"},{name:"Services",path:"/services"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}].map(e=>e.isHome?(0,Pc.jsx)(Kc,{href:"/",onClick:s,active:"/"===o.pathname&&!window.location.hash,children:e.name},e.name):(0,Pc.jsx)(Kc,{href:e.path,onClick:t=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e.preventDefault(),n){if("/"!==o.pathname)return a("/"),setTimeout(()=>{const e=document.getElementById(n);e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),window.history.pushState(null,null,`/#${n}`))},100),void i(!1);if(window.location.hash.replace("#","")===n)return console.log("Already at this section"),void i(!1);const e=document.getElementById(n);return e&&(e.scrollIntoView({behavior:"smooth",block:"start"}),window.history.pushState(null,null,`/#${n}`)),void i(!1)}if(o.pathname===t)return console.log("Already at this page"),void i(!1);a(t),i(!1)}(t,e.path,e.targetId),active:o.pathname===e.path||"/"===o.pathname&&window.location.hash===`#${e.targetId}`,children:e.name},e.name))}),(0,Pc.jsx)(Qc,{onClick:()=>i(!r),children:"\u2630"})]})})};const Jc=new WeakMap;let Zc;function ed(e){let{target:t,contentRect:n,borderBoxSize:r}=e;var i;null===(i=Jc.get(t))||void 0===i||i.forEach(e=>{e({target:t,contentSize:n,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(t,r)}})})}function td(e){e.forEach(ed)}function nd(e,t){Zc||"undefined"!==typeof ResizeObserver&&(Zc=new ResizeObserver(td));const n=function(e,t,n){var r;if("string"===typeof e){let i=document;t&&(Vr(Boolean(t.current),"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach(e=>{let n=Jc.get(e);n||(n=new Set,Jc.set(e,n)),n.add(t),null===Zc||void 0===Zc||Zc.observe(e)}),()=>{n.forEach(e=>{const n=Jc.get(e);null===n||void 0===n||n.delete(t),(null===n||void 0===n?void 0:n.size)||null===Zc||void 0===Zc||Zc.unobserve(e)})}}const rd=new Set;let id;function od(e){return rd.add(e),id||(id=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};rd.forEach(e=>e(t))},window.addEventListener("resize",id)),()=>{rd.delete(e),!rd.size&&id&&(id=void 0)}}const ad={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function sd(e,t,n,r){const i=n[t],{length:o,position:a}=ad[t],s=i.current,l=n.time;i.current=e["scroll"+a],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Ba(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>50?0:Ga(i.current-s,u)}const ld={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},ud={start:0,center:.5,end:1};function cd(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0;if(void 0!==ud[e]&&(e=ud[e]),"string"===typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"===typeof e&&(r=t*e),n+r}const dd=[0,0];function pd(e,t,n,r){let i=Array.isArray(e)?e:dd,o=0,a=0;return"number"===typeof e?i=[e,e]:"string"===typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,ud[e]?e:"0"]),o=cd(i[0],n,r),a=cd(i[1],t),o-a}const fd={x:0,y:0};function hd(e,t,n){let{offset:r=ld.All}=n;const{target:i=e,axis:o="y"}=n,a="y"===o?"height":"width",s=i!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}}return n}(i,e):fd,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate;const d=r.length;for(let p=0;p<d;p++){const e=pd(r[p],u[a],l[a],s[o]);c||e===t[o].interpolatorOffsets[p]||(c=!0),t[o].offset[p]=e}c&&(t[o].interpolate=Ha(t[o].offset,Wa(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function md(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2?arguments[2]:void 0;if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){sd(e,"x",t,n),sd(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&hd(e,n,r)},notify:()=>t(n)}}const gd=new WeakMap,vd=new WeakMap,yd=new WeakMap,bd=e=>e===document.documentElement?window:e;function xd(e){let{container:t=document.documentElement,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=yd.get(t);r||(r=new Set,yd.set(t,r));const i=md(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},n);if(r.add(i),!gd.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(Ar.timestamp)},i=()=>{for(const e of r)e.notify()},o=()=>{jr.read(e,!1,!0),jr.read(n,!1,!0),jr.update(i,!1,!0)};gd.set(t,o);const a=bd(t);window.addEventListener("resize",o,{passive:!0}),t!==document.documentElement&&vd.set(t,function(e,t){return"function"===typeof e?od(e):nd(e,t)}(t,o)),a.addEventListener("scroll",o,{passive:!0})}const o=gd.get(t);return jr.read(o,!1,!0),()=>{var e;Dr(o);const n=yd.get(t);if(!n)return;if(n.delete(i),n.size)return;const r=gd.get(t);gd.delete(t),r&&(bd(t).removeEventListener("scroll",r),null===(e=vd.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function wd(e,t){Ir(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const kd=()=>({scrollX:Os(0),scrollY:Os(0),scrollXProgress:Os(0),scrollYProgress:Os(0)});function Sd(){let{container:e,target:n,layoutEffect:r=!0,...i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=Lr(kd);return(r?Sr:t.useEffect)(()=>(wd("target",n),wd("container",e),xd(e=>{let{x:t,y:n}=e;o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)},{...i,container:(null===e||void 0===e?void 0:e.current)||void 0,target:(null===n||void 0===n?void 0:n.current)||void 0})),[e,n,JSON.stringify(i.offset)]),o}const Ed=e=>(e=>e&&"object"===typeof e&&e.mix)(e)?e.mix:void 0;function Cd(e,n){const r=function(e){const n=Lr(()=>Os(e)),{isStatic:r}=(0,t.useContext)(Yr);if(r){const[,r]=(0,t.useState)(e);(0,t.useEffect)(()=>n.on("change",r),[])}return n}(n()),i=()=>r.set(n());return i(),Sr(()=>{const t=()=>jr.update(i,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),Dr(i)}}),r}function Pd(e,t,n,r){if("function"===typeof e)return function(e){Ls.current=[],e();const t=Cd(Ls.current,e);return Ls.current=void 0,t}(e);const i="function"===typeof t?t:function(){const e=!Array.isArray(arguments.length<=0?void 0:arguments[0]),t=e?0:-1,n=0+t<0||arguments.length<=0+t?void 0:arguments[0+t],r=2+t<0||arguments.length<=2+t?void 0:arguments[2+t],i=3+t<0||arguments.length<=3+t?void 0:arguments[3+t],o=Ha(1+t<0||arguments.length<=1+t?void 0:arguments[1+t],r,{mixer:Ed(r[0]),...i});return e?o(n):o}(t,n,r);return Array.isArray(e)?Td(e,i):Td([e],e=>{let[t]=e;return i(t)})}function Td(e,t){const n=Lr(()=>[]);return Cd(e,()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}const jd=br.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #000;
`,Dd=br(Cc.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-image: url('https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.3) 40%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 2;
  }
`,Ad=br(Cc.div)`
  text-align: center;
  z-index: 10;
  position: relative;
  max-width: 900px;
  padding: 0 20px;
`,Rd=br(Cc.h1)`
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 100;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  letter-spacing: 12px;
  line-height: 0.9;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 5rem);
    letter-spacing: 6px;
  }
`,_d=br(Cc.h2)`
  font-size: clamp(1.3rem, 3.5vw, 2.2rem);
  font-weight: 200;
  color: #ffd700;
  margin-bottom: 40px;
  letter-spacing: 6px;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    letter-spacing: 3px;
    margin-bottom: 30px;
  }
`,Ld=br(Cc.p)`
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 50px;
  letter-spacing: 1.5px;
  line-height: 1.8;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  font-style: italic;
`,Md=br(Cc.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
`,Od=br(Cc.button)`
  padding: 25px 15px;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0);
  color: #000;
  border: none;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  flex: 1;
  min-width: 250px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 15px 35px;
    font-size: 1rem;
    letter-spacing: 2px;
    min-width: 200px;
  }
`,Nd=br(Od)`
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  border: 2px solid #D4AF37;
  
  &:hover {
    background: rgba(212, 175, 55, 0.1);
    color: #D4AF37;
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.2);
  }
`,zd=br(Cc.div)`
  position: absolute;
  bottom: 40px;
  left: 43.3%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  letter-spacing: 2px;
  z-index: 10;
  
  &::after {
    content: '';
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, #ffd700, transparent);
    margin-top: 15px;
    animation: pulse 2.5s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }
`,Fd=()=>{const{scrollY:e}=Sd(),t=Pd(e,[0,500],[0,150]),n=Pd(e,[0,500],[0,-50]),r={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.25,.46,.45,.94]}}};return(0,Pc.jsxs)(jd,{children:[(0,Pc.jsx)(Dd,{style:{y:t},initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:1},transition:{duration:1.5,ease:"easeOut"}}),(0,Pc.jsxs)(Ad,{style:{y:n},variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},initial:"hidden",animate:"visible",children:[(0,Pc.jsx)(Rd,{variants:{hidden:{opacity:0,y:100,scale:.8},visible:{opacity:1,y:0,scale:1,transition:{duration:1.2,ease:[.25,.46,.45,.94]}}},children:"LUXE"}),(0,Pc.jsx)(_d,{variants:{hidden:{opacity:0,y:60},visible:{opacity:1,y:0,transition:{duration:1,ease:[.25,.46,.45,.94]}}},children:"JEWELRY COLLECTION"}),(0,Pc.jsx)(Ld,{variants:{hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.8,ease:[.25,.46,.45,.94]}}},children:"Discover timeless elegance with our handcrafted jewelry pieces. Each design tells a story of luxury, sophistication, and unparalleled beauty that transcends generations."}),(0,Pc.jsxs)(Md,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},children:[(0,Pc.jsx)(Od,{variants:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:"EXPLORE COLLECTION"}),(0,Pc.jsx)(Nd,{variants:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:"WATCH STORY"})]})]}),(0,Pc.jsx)(zd,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:2.5,duration:1},children:"SCROLL TO DISCOVER"})]})},Id=br.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`,Vd=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,Bd=br.div`
  text-align: center;
  margin-bottom: 80px;
`,Ud=br(Cc.h2)`
  font-size: clamp(3rem, 6vw, 4rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 100;
  letter-spacing: 6px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`,$d=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 1px;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.8;
`,Hd=br(Cc(Pe))`
  display: inline-block;
  padding: 12px 30px;
  background: transparent;
  color: transparent;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: 1px solid;
  border-image: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B) 1;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
    color: #fff;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: #fff;
    background-clip: unset;
    transform: translateY(-2px);
  }
`,Wd=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`,Yd=br(Cc.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(212, 175, 55, 0.1);
  overflow: hidden;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(212, 175, 55, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`,Gd=br.div`
  height: 300px;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(212, 175, 55, 0.1), rgba(192, 192, 192, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${Yd}:hover &::before {
    opacity: 1;
  }
`,qd=br.div`
  padding: 30px;
  text-align: center;
`,Kd=br.h3`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: 'Playfair Display', serif;
`,Qd=br.p`
  background: linear-gradient(45deg, #D4AF37, #C0C0C0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1px;
`,Xd=()=>(0,Pc.jsx)(Id,{children:(0,Pc.jsxs)(Vd,{children:[(0,Pc.jsxs)(Bd,{children:[(0,Pc.jsx)(Ud,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:"FEATURED COLLECTION"}),(0,Pc.jsx)($d,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"Discover our handpicked selection of exquisite jewelry pieces"}),(0,Pc.jsx)(Hd,{to:"/products",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.4},viewport:{once:!0},whileHover:{scale:1.05},children:"VIEW ALL COLLECTION"})]}),(0,Pc.jsx)(Wd,{children:[{id:1,name:"Diamond Eternity Ring",price:"$2,850",image:"https://images.unsplash.com/photo-1677045419454-e8b201856472?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:2,name:"Pearl Elegance Necklace",price:"$1,650",image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},{id:3,name:"Sapphire Drop Earrings",price:"$3,200",image:"https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:4,name:"Gold Tennis Bracelet",price:"$4,100",image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},{id:5,name:"Emerald Vintage Ring",price:"$5,500",image:"https://plus.unsplash.com/premium_photo-1674581921333-959b929a2e0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:6,name:"Moissanite Earrings",price:"$2,200",image:"https://images.unsplash.com/photo-1727947553983-1e1aee64605b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:7,name:"Ouroboros Ring",price:"$2,300",image:"https://images.unsplash.com/photo-1677316732675-be39915a17d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:8,name:"Diamond Stud Earrings",price:"$2,050",image:"https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"}].map((e,t)=>(0,Pc.jsxs)(Yd,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.1*t},viewport:{once:!0},children:[(0,Pc.jsx)(Gd,{src:e.image}),(0,Pc.jsxs)(qd,{children:[(0,Pc.jsx)(Kd,{children:e.name}),(0,Pc.jsx)(Qd,{children:e.price})]})]},e.id))})]})}),Jd=br.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
`,Zd=br(Cc.div)`
  position: absolute;
  width: 120%;
  height: 120%;
  background-image: url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`,ep=br(Cc.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  padding: 60px 40px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  max-width: 800px;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    margin: 0 20px;
  }
`,tp=br(Cc.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 4rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  font-weight: 100;
  letter-spacing: 6px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`,np=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`,rp=()=>{const e=(0,t.useRef)(null),{scrollYProgress:n}=Sd({target:e,offset:["start end","end start"]}),r=Pd(n,[0,1],["-30%","30%"]),i=Pd(n,[0,1],["-10%","10%"]),o=Pd(n,[0,.2,.8,1],[0,1,1,0]),a=Pd(n,[0,.5,1],[.8,1,.8]);return(0,Pc.jsxs)(Jd,{ref:e,children:[(0,Pc.jsx)(Zd,{style:{y:r}}),(0,Pc.jsxs)(ep,{style:{opacity:o,scale:a,y:i},children:[(0,Pc.jsx)(tp,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8,delay:.3},viewport:{once:!0},children:"CRAFTED WITH PASSION"}),(0,Pc.jsx)(np,{initial:{y:30,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.8,delay:.6},viewport:{once:!0},children:"Each piece in our collection tells a story of meticulous craftsmanship, premium materials, and timeless design that transcends generations."})]})]})},ip=br.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
`,op=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,ap=br.div`
  text-align: center;
  margin-bottom: 100px;
`,sp=br(Cc.h2)`
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 100;
  letter-spacing: 8px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`,lp=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 2px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`,up=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`,cp=br(Cc.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 50px 40px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.05), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 215, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.05);
  }
`,dp=br.h3`
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;
`,pp=br.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`,fp=[{id:1,icon:"DESIGN",title:"CUSTOM DESIGN",description:"Create bespoke jewelry pieces tailored to your unique vision and personal style with our master craftsmen."},{id:2,icon:"REPAIR",title:"EXPERT REPAIR",description:"Professional restoration and repair services to bring your cherished jewelry back to its original glory."},{id:3,icon:"SIZING",title:"PRECISE SIZING",description:"Perfect fit guaranteed with our precision sizing service for rings, bracelets, and necklaces."},{id:4,icon:"LUXURY",title:"LUXURY PACKAGING",description:"Every piece comes beautifully presented in our signature luxury packaging, perfect for gifting."},{id:5,icon:"WARRANTY",title:"LIFETIME WARRANTY",description:"Comprehensive lifetime warranty on all our pieces, ensuring your investment is protected forever."},{id:6,icon:"CARE",title:"CLEANING SERVICE",description:"Complimentary professional cleaning service to keep your jewelry sparkling like new."}],hp=()=>(0,Pc.jsx)(ip,{id:"services",children:(0,Pc.jsxs)(op,{children:[(0,Pc.jsxs)(ap,{children:[(0,Pc.jsx)(sp,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:"OUR SERVICES"}),(0,Pc.jsx)(lp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"Exceptional service that matches the quality of our jewelry"})]}),(0,Pc.jsx)(up,{children:fp.map((e,t)=>(0,Pc.jsxs)(cp,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.1*t},viewport:{once:!0},children:[(0,Pc.jsx)(dp,{children:e.title}),(0,Pc.jsx)(pp,{children:e.description})]},e.id))})]})}),mp=br.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
`,gp=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,vp=br.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`,yp=br(Cc.div)``,bp=br(Cc.h2)`
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  font-weight: 100;
  letter-spacing: 8px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, #D4AF37, transparent);
  }
`,xp=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 300;
  letter-spacing: 0.5px;
`,wp=br(Cc.p)`
  font-size: 1.1rem;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-style: italic;
  margin-bottom: 40px;
  font-weight: 300;
  letter-spacing: 1px;
`,kp=br.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`,Sp=br(Cc.div)`
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(212, 175, 55, 0.3);
    transform: translateY(-5px);
  }
`,Ep=br.h3`
  font-size: 2.5rem;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 300;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
`,Cp=br.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`,Pp=br(Cc.div)`
  position: relative;
  height: 600px;
  background-image: url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 0 0 0 50px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3) 0%,
      transparent 50%,
      rgba(212, 175, 55, 0.1) 100%
    );
  }
`,Tp=()=>{const e=(0,t.useRef)(null),{scrollYProgress:n}=Sd({target:e,offset:["start end","end start"]}),r=Pd(n,[0,1],["-20%","20%"]),i=Pd(n,[0,1],["-10%","10%"]);return(0,Pc.jsx)(mp,{ref:e,id:"about",children:(0,Pc.jsx)(gp,{children:(0,Pc.jsxs)(vp,{children:[(0,Pc.jsxs)(yp,{style:{y:i},children:[(0,Pc.jsx)(bp,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:1},viewport:{once:!0},children:"OUR STORY"}),(0,Pc.jsx)(xp,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"For over three decades, we have been crafting exceptional jewelry pieces that tell stories of love, celebration, and timeless elegance. Our master artisans combine traditional techniques with contemporary design to create pieces that transcend generations."}),(0,Pc.jsx)(wp,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.4},viewport:{once:!0},children:'"Every piece we create is a testament to our commitment to excellence and our passion for the art of jewelry making."'}),(0,Pc.jsxs)(kp,{children:[(0,Pc.jsxs)(Sp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.6},viewport:{once:!0},children:[(0,Pc.jsx)(Ep,{children:"30+"}),(0,Pc.jsx)(Cp,{children:"Years Experience"})]}),(0,Pc.jsxs)(Sp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.7},viewport:{once:!0},children:[(0,Pc.jsx)(Ep,{children:"5000+"}),(0,Pc.jsx)(Cp,{children:"Happy Clients"})]}),(0,Pc.jsxs)(Sp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.8},viewport:{once:!0},children:[(0,Pc.jsx)(Ep,{children:"100%"}),(0,Pc.jsx)(Cp,{children:"Satisfaction"})]})]})]}),(0,Pc.jsx)(Pp,{style:{y:r},initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:1,delay:.3},viewport:{once:!0}})]})})})},jp=br.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
`,Dp=br.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,Ap=br.div`
  text-align: center;
  margin-bottom: 80px;
`,Rp=br(Cc.h2)`
  font-size: clamp(3rem, 6vw, 4rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 100;
  letter-spacing: 6px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`,_p=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 2px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`,Lp=br.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`,Mp=br(Cc.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 60px 50px;
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`,Op=br.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 40px;
  font-weight: 300;
  font-style: italic;
  letter-spacing: 0.5px;
  position: relative;
  
  &::before,
  &::after {
    content: '"';
    font-size: 4rem;
    color: #ffd700;
    position: absolute;
    font-family: 'Playfair Display', serif;
  }
  
  &::before {
    top: -20px;
    left: -20px;
  }
  
  &::after {
    bottom: -60px;
    right: -20px;
  }
`,Np=br.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`,zp=br.div`
  width: 60px;
  height: 60px;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  border: 2px solid #ffd700;
`,Fp=br.div`
  text-align: left;
`,Ip=br.h4`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-weight: 300;
  letter-spacing: 1px;
`,Vp=br.p`
  color: #ffd700;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.5px;
`,Bp=br.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 50px;
`,Up=br.button`
  width: 12px;
  height: 12px;
  background: ${e=>e.active?"#ffd700":"rgba(255, 255, 255, 0.3)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ffd700;
    transform: scale(1.2);
  }
`,$p=br.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  color: #ffd700;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev {
    left: -80px;
  }
  
  &.next {
    right: -80px;
  }
  
  @media (max-width: 968px) {
    display: none;
  }
`,Hp=[{id:1,quote:"The craftsmanship is absolutely stunning. My engagement ring exceeded all expectations and the service was impeccable. Truly a luxury experience from start to finish.",name:"Sarah Johnson",title:"Bride",image:"https://images.unsplash.com/photo-1601745398440-0118cf2a433f?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:2,quote:"I've been a customer for over 10 years and the quality never disappoints. Their custom design service brought my vision to life perfectly. Highly recommended!",name:"Michael Chen",title:"Collector",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"},{id:3,quote:"The attention to detail and personalized service made our anniversary gift shopping a memorable experience. The pearl necklace is absolutely gorgeous.",name:"Emily Rodriguez",title:"Anniversary Gift",image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"},{id:4,quote:"Professional, elegant, and trustworthy. They restored my grandmother's vintage ring to its original beauty. The sentimental value is priceless.",name:"David Thompson",title:"Restoration Client",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"}],Wp=()=>{const[e,n]=(0,t.useState)(0);return(0,Pc.jsx)(jp,{id:"testimonials",children:(0,Pc.jsxs)(Dp,{children:[(0,Pc.jsxs)(Ap,{children:[(0,Pc.jsx)(Rp,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:"CLIENT STORIES"}),(0,Pc.jsx)(_p,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"What our valued clients say about their experience with us"})]}),(0,Pc.jsxs)(Lp,{children:[(0,Pc.jsx)($p,{className:"prev",onClick:()=>{n(e=>(e-1+Hp.length)%Hp.length)},children:"\u2039"}),(0,Pc.jsx)(Ur,{mode:"wait",children:(0,Pc.jsxs)(Mp,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.5},children:[(0,Pc.jsx)(Op,{children:Hp[e].quote}),(0,Pc.jsxs)(Np,{children:[(0,Pc.jsx)(zp,{src:Hp[e].image}),(0,Pc.jsxs)(Fp,{children:[(0,Pc.jsx)(Ip,{children:Hp[e].name}),(0,Pc.jsx)(Vp,{children:Hp[e].title})]})]})]},e)}),(0,Pc.jsx)($p,{className:"next",onClick:()=>{n(e=>(e+1)%Hp.length)},children:"\u203a"})]}),(0,Pc.jsx)(Bp,{children:Hp.map((t,r)=>(0,Pc.jsx)(Up,{active:r===e,onClick:()=>(e=>{n(e)})(r)},r))})]})})},Yp=br.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
`,Gp=br.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`,qp=br.div`
  text-align: center;
  margin-bottom: 80px;
`,Kp=br(Cc.h2)`
  font-size: clamp(3rem, 6vw, 4rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 100;
  letter-spacing: 6px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`,Qp=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 2px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`,Xp=br.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Jp=br(Cc.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 215, 0, 0.3);
  }
`,Zp=br.button`
  width: 100%;
  padding: 30px;
  background: none;
  border: none;
  text-align: left;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`,ef=br.span`
  color: #ffd700;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${e=>e.isOpen?"rotate(45deg)":"rotate(0deg)"};
`,tf=br(Cc.div)`
  padding: 0 30px 30px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`,nf=[{id:1,question:"What materials do you use in your jewelry?",answer:"We use only the finest materials including 18k and 22k gold, platinum, sterling silver, and genuine gemstones. All our diamonds are certified and ethically sourced. We also work with precious stones like sapphires, emeralds, and rubies."},{id:2,question:"Do you offer custom jewelry design services?",answer:"Yes, we specialize in custom jewelry design. Our master craftsmen work closely with you to bring your vision to life. The process typically takes 4-6 weeks and includes initial consultation, design sketches, 3D modeling, and final crafting."},{id:3,question:"What is your warranty and return policy?",answer:"We offer a lifetime warranty on all our pieces covering manufacturing defects. Returns are accepted within 30 days of purchase in original condition. Custom pieces have a 14-day return window. All repairs and maintenance are covered under our warranty."},{id:4,question:"How do I care for my jewelry?",answer:"Store jewelry in individual soft pouches, avoid exposure to chemicals and perfumes, clean regularly with appropriate solutions, and bring pieces for professional cleaning every 6 months. We provide detailed care instructions with every purchase."},{id:5,question:"Do you offer financing options?",answer:"Yes, we offer flexible financing options including 0% interest plans for qualified customers. We accept major credit cards, PayPal, and offer layaway programs. Our financing partners provide competitive rates for larger purchases."},{id:6,question:"How long does custom jewelry take to complete?",answer:"Custom pieces typically take 4-6 weeks from design approval to completion. Complex designs may take longer. We provide regular updates throughout the process and will notify you of any delays. Rush orders may be available for additional fees."}],rf=()=>{const[e,n]=(0,t.useState)(new Set);return(0,Pc.jsx)(Yp,{id:"faq",children:(0,Pc.jsxs)(Gp,{children:[(0,Pc.jsxs)(qp,{children:[(0,Pc.jsx)(Kp,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:"FREQUENTLY ASKED"}),(0,Pc.jsx)(Qp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"Everything you need to know about our jewelry and services"})]}),(0,Pc.jsx)(Xp,{children:nf.map((t,r)=>(0,Pc.jsxs)(Jp,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1*r},viewport:{once:!0},children:[(0,Pc.jsxs)(Zp,{onClick:()=>(t=>{const r=new Set(e);r.has(t)?r.delete(t):r.add(t),n(r)})(t.id),children:[t.question,(0,Pc.jsx)(ef,{isOpen:e.has(t.id),children:"+"})]}),(0,Pc.jsx)(Ur,{children:e.has(t.id)&&(0,Pc.jsx)(tf,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:t.answer})})]},t.id))})]})})};var of=Object.defineProperty,af=(e,t,n)=>((e,t,n)=>t in e?of(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),sf=new Map,lf=new WeakMap,uf=0,cf=void 0;function df(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>`${t}_${"root"===t?function(e){return e?(lf.has(e)||(uf+=1,lf.set(e,uf.toString())),lf.get(e)):"0"}(e.root):e[t]}`).toString()}function pf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:cf;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=df(e);let n=sf.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(t=>{t.forEach(t=>{var n;const o=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach(e=>{e(o,t)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},sf.set(t,n)}return n}(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),sf.delete(i))}}t.Component;function ff(){let{threshold:e,delay:n,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:u,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[p,f]=t.useState(null),h=t.useRef(c),[m,g]=t.useState({inView:!!l,entry:void 0});h.current=c,t.useEffect(()=>{if(s||!p)return;let t;return t=pf(p,(e,n)=>{g({inView:e,entry:n}),h.current&&h.current(e,n),n.isIntersecting&&a&&t&&(t(),t=void 0)},{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:n},u),()=>{t&&t()}},[Array.isArray(e)?e.toString():e,p,o,i,a,s,r,u,n]);const v=null==(d=m.entry)?void 0:d.target,y=t.useRef(void 0);p||!v||a||s||y.current===v||(y.current=v,g({inView:!!l,entry:void 0}));const b=[f,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}const hf=br.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
`,mf=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,gf=br.div`
  text-align: center;
  margin-bottom: 80px;
`,vf=br(Cc.h2)`
  font-size: clamp(3rem, 6vw, 4rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 100;
  letter-spacing: 6px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`,yf=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 2px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`,bf=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`,xf=br(Cc.div)`
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Fallback jika gambar tidak load */
  background-color: rgba(255, 255, 255, 0.02);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg, 
      rgba(0, 0, 0, 0.7) 0%, 
      rgba(255, 215, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 215, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
`,wf=br.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 2px;
  opacity: 0;
  transition: all 0.4s ease;
  z-index: 2;
  text-align: center;

  ${xf}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
`,kf=br(Cc.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 18px 40px;
  background: linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
  color: #ffd700;
  text-decoration: none;
  border: 2px solid #ffd700;
  font-weight: 300;
  font-size: 1.1rem;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: rgba(255, 215, 0, 0.9);
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
  }
`,Sf=br(Cc.p)`
  font-size: 1.1rem;
  color: #ffd700;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 40px;
  font-style: italic;
`,Ef=()=>{const[e,t]=ff({threshold:.3,triggerOnce:!0});return(0,Pc.jsx)(hf,{ref:e,id:"instagram",children:(0,Pc.jsxs)(mf,{children:[(0,Pc.jsxs)(gf,{children:[(0,Pc.jsx)(vf,{initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{},transition:{duration:1},children:"FOLLOW OUR JOURNEY"}),(0,Pc.jsx)(yf,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2},children:"Get inspired by our latest creations and behind-the-scenes moments"}),(0,Pc.jsx)(Sf,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.4},children:"@qimik26"})]}),(0,Pc.jsx)(bf,{children:["https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1677045419454-e8b201856472?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1674581921333-959b929a2e0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"].map((e,n)=>(0,Pc.jsx)(xf,{src:e,initial:{opacity:0,y:60},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.1*n},whileHover:{scale:1.02},children:(0,Pc.jsx)(wf,{children:"VIEW POST"})},n))}),(0,Pc.jsx)("div",{style:{textAlign:"center"},children:(0,Pc.jsx)(kf,{href:"https://instagram.com/qimik26",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.95},children:"FOLLOW US ON INSTAGRAM"})})]})})},Cf=br.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.01) 0%, transparent 50%);
    pointer-events: none;
  }
`,Pf=br.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`,Tf=br.div`
  text-align: center;
  position: relative;
  z-index: 2;
`,jf=br(Cc.h2)`
  font-family: ${e=>e.theme.fonts.primary};
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #ffd700, transparent);
  }
`,Df=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  letter-spacing: 1px;
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.8;
`,Af=br(Cc.form)`
  display: flex;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 215, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 25px;
  }
`,Rf=br.input`
  flex: 1;
  padding: 18px 25px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
  }
  
  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.1);
  }
`,_f=br(Cc.button)`
  padding: 18px 35px;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  color: #000;
  border: 2px solid transparent;
  font-weight: 300;
  letter-spacing: 2px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: linear-gradient(45deg, #B8860B, #D4AF37, #C0C0C0);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 18px 25px;
  }
`,Lf=br(Cc.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.3);
  padding: 40px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  
  .highlight {
    color: #ffd700;
    font-weight: 400;
    display: block;
    margin-bottom: 15px;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
`,Mf=()=>{const[e,n]=(0,t.useState)(""),[r,i]=(0,t.useState)(!1),[o,a]=ff({threshold:.3,triggerOnce:!0});return(0,Pc.jsx)(Cf,{ref:o,id:"newsletter",children:(0,Pc.jsx)(Pf,{children:(0,Pc.jsxs)(Tf,{children:[(0,Pc.jsx)(jf,{initial:{opacity:0,y:50},animate:a?{opacity:1,y:0}:{},transition:{duration:1},children:"STAY CONNECTED"}),(0,Pc.jsx)(Df,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2},children:"Subscribe to our newsletter for exclusive offers, new collection previews, and jewelry care tips delivered straight to your inbox."}),r?(0,Pc.jsxs)(Lf,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},children:[(0,Pc.jsx)("span",{className:"highlight",children:"WELCOME TO LUXE"}),"Thank you for subscribing! You are now part of our exclusive community. You'll receive our latest updates and special offers soon."]}):(0,Pc.jsxs)(Af,{onSubmit:t=>{t.preventDefault(),e&&(i(!0),setTimeout(()=>{i(!1),n("")},4e3))},initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.8,delay:.4},children:[(0,Pc.jsx)(Rf,{type:"email",placeholder:"Enter your email address",value:e,onChange:e=>n(e.target.value),required:!0}),(0,Pc.jsx)(_f,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:"SUBSCRIBE"})]})]})})})},Of=br.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  position: relative;
`,Nf=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,zf=br.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`,Ff=br.div``,If=br(Cc.h2)`
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  font-weight: 100;
  letter-spacing: 8px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, #D4AF37, transparent);
  }
`,Vf=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 50px;
  font-weight: 300;
  letter-spacing: 0.5px;
`,Bf=br(Cc.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 215, 0, 0.3);
    transform: translateX(10px);
  }
`,Uf=br.div`
  font-size: 1.5rem;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-right: 20px;
  min-width: 40px;
`,$f=br.div`
  h4 {
    background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.1rem;
    margin-bottom: 5px;
    font-weight: 300;
    letter-spacing: 1px;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-weight: 300;
  }
`,Hf=br(Cc.form)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  padding: 50px;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`,Wf=br.div`
  margin-bottom: 30px;
`,Yf=br.label`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 300;
  letter-spacing: 1px;
`,Gf=br.input`
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,qf=br.textarea`
  width: 100%;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Kf=br(Cc.button)`
  width: 100%;
  padding: 18px;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  color: #000;
  border: 2px solid transparent;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: linear-gradient(45deg, #B8860B, #D4AF37, #C0C0C0);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
  }
`,Qf=()=>{const[e,n]=(0,t.useState)({name:"",email:"",subject:"",message:""}),r=t=>{n({...e,[t.target.name]:t.target.value})};return(0,Pc.jsx)(Of,{id:"contact",children:(0,Pc.jsx)(Nf,{children:(0,Pc.jsxs)(zf,{children:[(0,Pc.jsxs)(Ff,{children:[(0,Pc.jsx)(If,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:1},viewport:{once:!0},children:"GET IN TOUCH"}),(0,Pc.jsx)(Vf,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:"We'd love to hear from you. Visit our showroom, call us, or send us a message to discuss your jewelry needs."}),[{label:"LOCATION",text:"123 Luxury Avenue, Diamond District, New York, NY 10001"},{label:"PHONE",text:"+1 (555) 123-4567"},{label:"EMAIL",text:"info@luxejewelry.com"},{label:"HOURS",text:"Mon-Sat: 10AM-8PM, Sun: 12PM-6PM"}].map((e,t)=>(0,Pc.jsxs)(Bf,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.6,delay:.3+.1*t},viewport:{once:!0},children:[(0,Pc.jsx)(Uf,{children:e.label}),(0,Pc.jsxs)($f,{children:[(0,Pc.jsx)("h4",{children:e.title}),(0,Pc.jsx)("p",{children:e.text})]})]},t))]}),(0,Pc.jsxs)(Hf,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:1,delay:.3},viewport:{once:!0},onSubmit:t=>{t.preventDefault(),console.log("Form submitted:",e)},children:[(0,Pc.jsxs)(Wf,{children:[(0,Pc.jsx)(Yf,{htmlFor:"name",children:"Full Name"}),(0,Pc.jsx)(Gf,{type:"text",id:"name",name:"name",value:e.name,onChange:r,placeholder:"Enter your full name",required:!0})]}),(0,Pc.jsxs)(Wf,{children:[(0,Pc.jsx)(Yf,{htmlFor:"email",children:"Email Address"}),(0,Pc.jsx)(Gf,{type:"email",id:"email",name:"email",value:e.email,onChange:r,placeholder:"Enter your email address",required:!0})]}),(0,Pc.jsxs)(Wf,{children:[(0,Pc.jsx)(Yf,{htmlFor:"subject",children:"Subject"}),(0,Pc.jsx)(Gf,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:r,placeholder:"What can we help you with?",required:!0})]}),(0,Pc.jsxs)(Wf,{children:[(0,Pc.jsx)(Yf,{htmlFor:"message",children:"Message"}),(0,Pc.jsx)(qf,{id:"message",name:"message",value:e.message,onChange:r,placeholder:"Tell us more about your inquiry...",required:!0})]}),(0,Pc.jsx)(Kf,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.98},children:"SEND MESSAGE"})]})]})})})},Xf=br.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #000000 100%);
  padding: 80px 0 30px;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
`,Jf=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`,Zf=br.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,eh=br(Cc.div)``,th=br.h3`
  font-size: 2.5rem;
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 4px;
  font-family: 'Playfair Display', serif;
`,nh=br.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 300;
  letter-spacing: 0.5px;
`,rh=br.h4`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 25px;
  font-weight: 300;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 1px;
    background: #ffd700;
  }
`,ih=br.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 12px;
  font-weight: 300;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffd700;
    transform: translateX(5px);
  }
`,oh=br.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`,ah=br.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 215, 0, 0.1);
    border-color: #ffd700;
    color: #ffd700;
    transform: translateY(-3px);
  }
`,sh=br.div`
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  line-height: 1.6;
  
  .label {
    margin-right: 15px;
    color: #ffd700;
    font-weight: 400;
    min-width: 80px;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  
  .info {
    flex: 1;
  }
`,lh=br.div`
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`,uh=br.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.5px;
`,ch=br.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`,dh=br.a`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`,ph=()=>(0,Pc.jsx)(Xf,{children:(0,Pc.jsxs)(Jf,{children:[(0,Pc.jsxs)(Zf,{children:[(0,Pc.jsxs)(eh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:[(0,Pc.jsx)(th,{children:"LUXE"}),(0,Pc.jsx)(nh,{children:"Creating timeless jewelry pieces that celebrate life's most precious moments. Our commitment to excellence and craftsmanship has made us a trusted name in luxury jewelry for over three decades."}),(0,Pc.jsx)(oh,{children:[{text:"FB",href:"#",name:"Facebook"},{text:"IG",href:"#",name:"Instagram"},{text:"TW",href:"#",name:"Twitter"},{text:"LI",href:"#",name:"LinkedIn"}].map((e,t)=>(0,Pc.jsx)(ah,{href:e.href,title:e.name,children:e.text},t))})]}),(0,Pc.jsxs)(eh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.1},viewport:{once:!0},children:[(0,Pc.jsx)(rh,{children:"Quick Links"}),[{name:"Home",href:"#home"},{name:"Collection",href:"#products"},{name:"Services",href:"#services"},{name:"About Us",href:"#about"},{name:"Contact",href:"#contact"}].map((e,t)=>(0,Pc.jsx)(ih,{href:e.href,children:e.name},t))]}),(0,Pc.jsxs)(eh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:[(0,Pc.jsx)(rh,{children:"Services"}),[{name:"Custom Design",href:"#"},{name:"Jewelry Repair",href:"#"},{name:"Ring Sizing",href:"#"},{name:"Appraisals",href:"#"},{name:"Cleaning Service",href:"#"}].map((e,t)=>(0,Pc.jsx)(ih,{href:e.href,children:e.name},t))]}),(0,Pc.jsxs)(eh,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3},viewport:{once:!0},children:[(0,Pc.jsx)(rh,{children:"Contact Info"}),(0,Pc.jsxs)(sh,{children:[(0,Pc.jsx)("span",{className:"label",children:"ADDRESS"}),(0,Pc.jsxs)("span",{className:"info",children:["123 Luxury Avenue",(0,Pc.jsx)("br",{}),"Diamond District, NY 10001"]})]}),(0,Pc.jsxs)(sh,{children:[(0,Pc.jsx)("span",{className:"label",children:"PHONE"}),(0,Pc.jsx)("span",{className:"info",children:"+1 (555) 123-4567"})]}),(0,Pc.jsxs)(sh,{children:[(0,Pc.jsx)("span",{className:"label",children:"EMAIL"}),(0,Pc.jsx)("span",{className:"info",children:"info@luxejewelry.com"})]}),(0,Pc.jsxs)(sh,{children:[(0,Pc.jsx)("span",{className:"label",children:"HOURS"}),(0,Pc.jsxs)("span",{className:"info",children:["Mon-Sat: 10AM-8PM",(0,Pc.jsx)("br",{}),"Sun: 12PM-6PM"]})]})]})]}),(0,Pc.jsxs)(lh,{children:[(0,Pc.jsx)(uh,{children:"\xa9 2024 Mikail. All rights reserved."}),(0,Pc.jsxs)(ch,{children:[(0,Pc.jsx)(dh,{href:"#",children:"Privacy Policy"}),(0,Pc.jsx)(dh,{href:"#",children:"Terms of Service"}),(0,Pc.jsx)(dh,{href:"#",children:"Sitemap"})]})]})]})}),fh=()=>{const{pathname:e}=Q();return(0,t.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]),null},hh=br(Cc.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, ${e=>e.theme.colors.primary}, ${e=>e.theme.colors.gold});
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
  &:hover {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  }
`,mh=()=>{const[e,n]=(0,t.useState)(!1);(0,t.useEffect)(()=>{const e=()=>{window.pageYOffset>300?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);return(0,Pc.jsx)(Ur,{children:e&&(0,Pc.jsx)(hh,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2191"})})},gh=br.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 4px;
  height: 4px;
  background: rgba(255, 215, 0, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  mix-blend-mode: difference;
  
  /* Hanya tampil saat hover pada elemen tertentu */
  opacity: 0;
  
  &.active {
    opacity: 1;
    transform: scale(3);
  }
`,vh=()=>(0,Pc.jsx)(gh,{className:"cursor-dot"}),yh=br(Cc.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${e=>e.theme.colors.secondary};
  color: white;
  padding: 1.5rem 2rem;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`,bh=br.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
`,xh=br.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`,wh=br(Cc.button)`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  
  &.accept {
    background: ${e=>e.theme.colors.primary};
    color: white;
  }
  
  &.decline {
    background: transparent;
    color: white;
    border: 1px solid white;
  }
`,kh=()=>{const[e,n]=(0,t.useState)(!1);(0,t.useEffect)(()=>{localStorage.getItem("cookieConsent")||setTimeout(()=>n(!0),2e3)},[]);return(0,Pc.jsx)(Ur,{children:e&&(0,Pc.jsxs)(yh,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{duration:.5},children:[(0,Pc.jsx)(bh,{children:"We use cookies to enhance your browsing experience and provide personalized content. By continuing to use our site, you consent to our use of cookies."}),(0,Pc.jsxs)(xh,{children:[(0,Pc.jsx)(wh,{className:"accept",onClick:()=>{localStorage.setItem("cookieConsent","accepted"),n(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Accept"}),(0,Pc.jsx)(wh,{className:"decline",onClick:()=>{localStorage.setItem("cookieConsent","declined"),n(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Decline"})]})]})})},Sh=br(Cc.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`,Eh=br(Cc.div)`
  text-align: center;
  color: #fff;
`,Ch=br(Cc.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Playfair Display', serif;
  font-weight: 100;
  letter-spacing: 4px;
  margin-bottom: 20px;
`,Ph=e=>{let{children:t,pageName:n}=e;return(0,Pc.jsxs)(Pc.Fragment,{children:[(0,Pc.jsx)(Sh,{initial:{x:"0%"},animate:{x:"-100%"},exit:{x:"0%"},transition:{duration:.8,ease:[.76,0,.24,1]},children:(0,Pc.jsx)(Eh,{children:(0,Pc.jsx)(Ch,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:n})})}),(0,Pc.jsx)(Cc.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.6,delay:.4,ease:[.76,0,.24,1]},children:t})]})},Th=br(Cc.div)`
  padding-top: 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`,jh=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  padding-bottom: 0;
`,Dh=br(Cc.div)`
  text-align: center;
  margin-bottom: 80px;
  padding: 60px 0;
`,Ah=br(Cc.h1)`
  font-size: clamp(3rem, 6vw, 5rem);
  background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  font-weight: 100;
  letter-spacing: 8px;
  font-family: 'Playfair Display', serif;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`,Rh=br(Cc.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 300;
  letter-spacing: 0.5px;
`,_h=br(Cc.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`,Lh=br.button`
  padding: 12px 24px;
  background: ${e=>e.active?"linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B)":"transparent"};
  color: ${e=>e.active?"#000":"transparent"};
  ${e=>!e.active&&"\n    background: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  "}
  border: 1px solid;
  border-image: linear-gradient(45deg, #D4AF37, #C0C0C0, #B8860B) 1;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: transparent;
    color: #fff;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: #fff;
    background-clip: unset;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
  }
`,Mh=br(Cc.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 0;
  padding-bottom: 60px;
`,Oh=br(Cc.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  overflow: hidden;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 215, 0, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`,Nh=br.div`
  height: 300px;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${Oh}:hover &::before {
    opacity: 1;
  }
`,zh=br.div`
  padding: 30px;
  text-align: center;
`,Fh=br.h3`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: 'Playfair Display', serif;
`,Ih=br.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
`,Vh=br.p`
  background: linear-gradient(45deg, #D4AF37, #C0C0C0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1px;
`,Bh=()=>{const[e,n]=(0,t.useState)("All"),r={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},i={hidden:{opacity:0,y:60},visible:{opacity:1,y:0,transition:{duration:.8}}},o=[{id:1,name:"Diamond Eternity Ring",category:"Rings",price:"$2,850",image:"https://images.unsplash.com/photo-1677045419454-e8b201856472?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:2,name:"Emerald Vintage Ring",category:"Rings",price:"$5,500",image:"https://plus.unsplash.com/premium_photo-1674581921333-959b929a2e0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:3,name:"Rose Gold Engagement Ring",category:"Rings",price:"$3,200",image:"https://images.unsplash.com/photo-1603561593143-2d9242789dfb?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:4,name:"Sapphire Wedding Band",category:"Rings",price:"$1,800",image:"https://images.pexels.com/photos/15684184/pexels-photo-15684184.jpeg?_gl=1*1td5vso*_ga*NzgyMjk5MzQ0LjE3MzgyMzkxNjU.*_ga_8JE65Q40S6*czE3NTE5NjE5NjkkbzMkZzEkdDE3NTE5NjQxNTUkajMzJGwwJGgw"},{id:5,name:"Pearl Elegance Necklace",category:"Necklaces",price:"$1,650",image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},{id:6,name:"Diamond Tennis Necklace",category:"Necklaces",price:"$4,200",image:"https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:7,name:"Gold Chain Pendant",category:"Necklaces",price:"$980",image:"https://images.unsplash.com/photo-1656428361240-47e1737b7dce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:8,name:"Ruby Heart Necklace",category:"Necklaces",price:"$2,400",image:"https://images.pexels.com/photos/15684182/pexels-photo-15684182.jpeg?_gl=1*ci5isi*_ga*NzgyMjk5MzQ0LjE3MzgyMzkxNjU.*_ga_8JE65Q40S6*czE3NTE5NjE5NjkkbzMkZzEkdDE3NTE5NjQ2MjkkajU0JGwwJGgw"},{id:9,name:"Sapphire Drop Earrings",category:"Earrings",price:"$3,200",image:"https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:10,name:"Diamond Stud Earrings",category:"Earrings",price:"$2,050",image:"https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},{id:11,name:"Pearl Dangle Earrings",category:"Earrings",price:"$5,100",image:"https://images.pexels.com/photos/13595830/pexels-photo-13595830.jpeg?_gl=1*1s1kyvl*_ga*NzgyMjk5MzQ0LjE3MzgyMzkxNjU.*_ga_8JE65Q40S6*czE3NTE5NjE5NjkkbzMkZzEkdDE3NTE5NjQ4MjgkajMyJGwwJGgw"},{id:12,name:"Gold Hoop Earrings",category:"Earrings",price:"$1.050",image:"https://images.unsplash.com/photo-1689775703005-94770a8b561d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:13,name:"Gold Tennis Bracelet",category:"Bracelets",price:"$4,100",image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},{id:14,name:"Diamond Link Bracelet",category:"Bracelets",price:"$6,800",image:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"},{id:15,name:"Pearl Charm Bracelet",category:"Bracelets",price:"$1,350",image:"https://images.pexels.com/photos/20768643/pexels-photo-20768643.jpeg?_gl=1*23xvlt*_ga*NzgyMjk5MzQ0LjE3MzgyMzkxNjU.*_ga_8JE65Q40S6*czE3NTE5NjE5NjkkbzMkZzEkdDE3NTE5NjUxNzUkajQzJGwwJGgw"},{id:16,name:"Silver Bangle Set",category:"Bracelets",price:"$5.890",image:"https://cdn.pixabay.com/photo/2015/03/13/14/44/bracelet-671791_1280.jpg"}],a="All"===e?o:o.filter(t=>t.category===e);return(0,Pc.jsx)(Th,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8,staggerChildren:.1,delayChildren:.2}}},initial:"hidden",animate:"visible",children:(0,Pc.jsxs)(jh,{children:[(0,Pc.jsxs)(Dh,{children:[(0,Pc.jsx)(Ah,{variants:r,children:"OUR COLLECTION"}),(0,Pc.jsx)(Rh,{variants:r,children:"Explore our complete collection of handcrafted jewelry pieces, each designed with precision and passion for timeless elegance."})]}),(0,Pc.jsx)(_h,{variants:r,children:["All","Rings","Necklaces","Earrings","Bracelets"].map(t=>(0,Pc.jsx)(Lh,{active:e===t,onClick:()=>n(t),children:t},t))}),(0,Pc.jsx)(Mh,{children:a.map((e,t)=>(0,Pc.jsxs)(Oh,{variants:i,initial:"hidden",animate:"visible",transition:{delay:.1*t},whileHover:{y:-10},children:[(0,Pc.jsx)(Nh,{src:e.image}),(0,Pc.jsxs)(zh,{children:[(0,Pc.jsx)(Ih,{children:e.category}),(0,Pc.jsx)(Fh,{children:e.name}),(0,Pc.jsx)(Vh,{children:e.price})]})]},e.id))})]})})},Uh=()=>{const e=Q(),t=()=>(0,Pc.jsxs)(Ph,{pageName:"LUXE JEWELRY",children:[(0,Pc.jsx)(Fd,{}),(0,Pc.jsx)(rp,{}),(0,Pc.jsx)(Xd,{}),(0,Pc.jsx)(Wp,{}),(0,Pc.jsx)(rf,{}),(0,Pc.jsx)(Ef,{}),(0,Pc.jsx)(Mf,{})]}),n=()=>(0,Pc.jsx)(Ph,{pageName:"LUXE JEWELRY",children:(0,Pc.jsx)(Bh,{})}),r=()=>(0,Pc.jsx)(Ph,{pageName:"LUXE JEWELRY",children:(0,Pc.jsx)(hp,{})}),i=()=>(0,Pc.jsx)(Ph,{pageName:"LUXE JEWELRY",children:(0,Pc.jsx)(Tp,{})}),o=()=>(0,Pc.jsx)(Ph,{pageName:"LUXE JEWELRY",children:(0,Pc.jsx)(Qf,{})});return(0,Pc.jsx)(Ur,{mode:"wait",children:(0,Pc.jsxs)(me,{location:e,children:[(0,Pc.jsx)(fe,{path:"/",element:(0,Pc.jsx)(t,{})}),(0,Pc.jsx)(fe,{path:"/Products",element:(0,Pc.jsx)(n,{})}),(0,Pc.jsx)(fe,{path:"/Services",element:(0,Pc.jsx)(r,{})}),(0,Pc.jsx)(fe,{path:"/About",element:(0,Pc.jsx)(i,{})}),(0,Pc.jsx)(fe,{path:"/Contact",element:(0,Pc.jsx)(o,{})})]},e.pathname)})};const $h=function(){const[e,r]=(0,t.useState)(!0);return Wr(),(0,t.useEffect)(()=>{let t;return e||(async()=>{try{const r=(await n.e(722).then(n.bind(n,722))).default;function i(e){t.raf(e),requestAnimationFrame(i)}t=new r({duration:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),direction:"vertical",gestureDirection:"vertical",smooth:!0,mouseMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1}),requestAnimationFrame(i)}catch(e){console.log("Lenis not available, using default scrolling")}})(),()=>{t&&t.destroy()}},[e]),(0,Pc.jsx)(dr,{theme:Hr,children:(0,Pc.jsxs)(Se,{children:[(0,Pc.jsx)($r,{}),(0,Pc.jsx)(fh,{}),e?(0,Pc.jsx)(Uc,{onLoadingComplete:()=>{r(!1)}}):(0,Pc.jsxs)(Pc.Fragment,{children:[(0,Pc.jsx)(Hc,{}),(0,Pc.jsx)(vh,{}),(0,Pc.jsx)(Xc,{}),(0,Pc.jsx)(Uh,{}),(0,Pc.jsx)(ph,{}),(0,Pc.jsx)(mh,{}),(0,Pc.jsx)(kh,{})]})]})})},Hh=e=>{e&&e instanceof Function&&n.e(206).then(n.bind(n,206)).then(t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=t;n(e),r(e),i(e),o(e),a(e)})};i.createRoot(document.getElementById("root")).render((0,Pc.jsx)(t.StrictMode,{children:(0,Pc.jsx)($h,{})})),Hh()})()})();