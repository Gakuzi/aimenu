function $y(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Wh={exports:{}},Sa={},Kh={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function Iw(){if($m)return Te;$m=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=S&&V[S]||V["@@iterator"],typeof V=="function"?V:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,Q={};function q(V,$,ve){this.props=V,this.context=$,this.refs=Q,this.updater=ve||F}q.prototype.isReactComponent={},q.prototype.setState=function(V,$){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,$,"setState")},q.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function _e(){}_e.prototype=q.prototype;function pe(V,$,ve){this.props=V,this.context=$,this.refs=Q,this.updater=ve||F}var we=pe.prototype=new _e;we.constructor=pe,W(we,q.prototype),we.isPureReactComponent=!0;var Pe=Array.isArray,He=Object.prototype.hasOwnProperty,ke={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function I(V,$,ve){var Ee,Ie={},Se=null,Me=null;if($!=null)for(Ee in $.ref!==void 0&&(Me=$.ref),$.key!==void 0&&(Se=""+$.key),$)He.call($,Ee)&&!k.hasOwnProperty(Ee)&&(Ie[Ee]=$[Ee]);var Oe=arguments.length-2;if(Oe===1)Ie.children=ve;else if(1<Oe){for(var Ue=Array(Oe),jt=0;jt<Oe;jt++)Ue[jt]=arguments[jt+2];Ie.children=Ue}if(V&&V.defaultProps)for(Ee in Oe=V.defaultProps,Oe)Ie[Ee]===void 0&&(Ie[Ee]=Oe[Ee]);return{$$typeof:r,type:V,key:Se,ref:Me,props:Ie,_owner:ke.current}}function R(V,$){return{$$typeof:r,type:V.type,key:$,ref:V.ref,props:V.props,_owner:V._owner}}function O(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function N(V){var $={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ve){return $[ve]})}var x=/\/+/g;function A(V,$){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):$.toString(36)}function Be(V,$,ve,Ee,Ie){var Se=typeof V;(Se==="undefined"||Se==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(Se){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case r:case e:Me=!0}}if(Me)return Me=V,Ie=Ie(Me),V=Ee===""?"."+A(Me,0):Ee,Pe(Ie)?(ve="",V!=null&&(ve=V.replace(x,"$&/")+"/"),Be(Ie,$,ve,"",function(jt){return jt})):Ie!=null&&(O(Ie)&&(Ie=R(Ie,ve+(!Ie.key||Me&&Me.key===Ie.key?"":(""+Ie.key).replace(x,"$&/")+"/")+V)),$.push(Ie)),1;if(Me=0,Ee=Ee===""?".":Ee+":",Pe(V))for(var Oe=0;Oe<V.length;Oe++){Se=V[Oe];var Ue=Ee+A(Se,Oe);Me+=Be(Se,$,ve,Ue,Ie)}else if(Ue=C(V),typeof Ue=="function")for(V=Ue.call(V),Oe=0;!(Se=V.next()).done;)Se=Se.value,Ue=Ee+A(Se,Oe++),Me+=Be(Se,$,ve,Ue,Ie);else if(Se==="object")throw $=String(V),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Me}function gt(V,$,ve){if(V==null)return V;var Ee=[],Ie=0;return Be(V,Ee,"","",function(Se){return $.call(ve,Se,Ie++)}),Ee}function kt(V){if(V._status===-1){var $=V._result;$=$(),$.then(function(ve){(V._status===0||V._status===-1)&&(V._status=1,V._result=ve)},function(ve){(V._status===0||V._status===-1)&&(V._status=2,V._result=ve)}),V._status===-1&&(V._status=0,V._result=$)}if(V._status===1)return V._result.default;throw V._result}var Qe={current:null},J={transition:null},le={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:J,ReactCurrentOwner:ke};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Te.Children={map:gt,forEach:function(V,$,ve){gt(V,function(){$.apply(this,arguments)},ve)},count:function(V){var $=0;return gt(V,function(){$++}),$},toArray:function(V){return gt(V,function($){return $})||[]},only:function(V){if(!O(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Te.Component=q,Te.Fragment=t,Te.Profiler=o,Te.PureComponent=pe,Te.StrictMode=s,Te.Suspense=y,Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Te.act=ne,Te.cloneElement=function(V,$,ve){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ee=W({},V.props),Ie=V.key,Se=V.ref,Me=V._owner;if($!=null){if($.ref!==void 0&&(Se=$.ref,Me=ke.current),$.key!==void 0&&(Ie=""+$.key),V.type&&V.type.defaultProps)var Oe=V.type.defaultProps;for(Ue in $)He.call($,Ue)&&!k.hasOwnProperty(Ue)&&(Ee[Ue]=$[Ue]===void 0&&Oe!==void 0?Oe[Ue]:$[Ue])}var Ue=arguments.length-2;if(Ue===1)Ee.children=ve;else if(1<Ue){Oe=Array(Ue);for(var jt=0;jt<Ue;jt++)Oe[jt]=arguments[jt+2];Ee.children=Oe}return{$$typeof:r,type:V.type,key:Ie,ref:Se,props:Ee,_owner:Me}},Te.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Te.createElement=I,Te.createFactory=function(V){var $=I.bind(null,V);return $.type=V,$},Te.createRef=function(){return{current:null}},Te.forwardRef=function(V){return{$$typeof:m,render:V}},Te.isValidElement=O,Te.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:kt}},Te.memo=function(V,$){return{$$typeof:_,type:V,compare:$===void 0?null:$}},Te.startTransition=function(V){var $=J.transition;J.transition={};try{V()}finally{J.transition=$}},Te.unstable_act=ne,Te.useCallback=function(V,$){return Qe.current.useCallback(V,$)},Te.useContext=function(V){return Qe.current.useContext(V)},Te.useDebugValue=function(){},Te.useDeferredValue=function(V){return Qe.current.useDeferredValue(V)},Te.useEffect=function(V,$){return Qe.current.useEffect(V,$)},Te.useId=function(){return Qe.current.useId()},Te.useImperativeHandle=function(V,$,ve){return Qe.current.useImperativeHandle(V,$,ve)},Te.useInsertionEffect=function(V,$){return Qe.current.useInsertionEffect(V,$)},Te.useLayoutEffect=function(V,$){return Qe.current.useLayoutEffect(V,$)},Te.useMemo=function(V,$){return Qe.current.useMemo(V,$)},Te.useReducer=function(V,$,ve){return Qe.current.useReducer(V,$,ve)},Te.useRef=function(V){return Qe.current.useRef(V)},Te.useState=function(V){return Qe.current.useState(V)},Te.useSyncExternalStore=function(V,$,ve){return Qe.current.useSyncExternalStore(V,$,ve)},Te.useTransition=function(){return Qe.current.useTransition()},Te.version="18.3.1",Te}var Hm;function Mf(){return Hm||(Hm=1,Kh.exports=Iw()),Kh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function Sw(){if(qm)return Sa;qm=1;var r=Mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var w,S={},C=null,F=null;_!==void 0&&(C=""+_),y.key!==void 0&&(C=""+y.key),y.ref!==void 0&&(F=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(S[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)S[w]===void 0&&(S[w]=y[w]);return{$$typeof:e,type:m,key:C,ref:F,props:S,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var Gm;function Aw(){return Gm||(Gm=1,Wh.exports=Sw()),Wh.exports}var nR=Aw(),Cw=Mf();const rR=$y(Cw);var wu={},Qh={exports:{}},Kt={},Yh={exports:{}},Xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function Rw(){return Wm||(Wm=1,(function(r){function e(J,le){var ne=J.length;J.push(le);e:for(;0<ne;){var V=ne-1>>>1,$=J[V];if(0<o($,le))J[V]=le,J[ne]=$,ne=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],ne=J.pop();if(ne!==le){J[0]=ne;e:for(var V=0,$=J.length,ve=$>>>1;V<ve;){var Ee=2*(V+1)-1,Ie=J[Ee],Se=Ee+1,Me=J[Se];if(0>o(Ie,ne))Se<$&&0>o(Me,Ie)?(J[V]=Me,J[Se]=ne,V=Se):(J[V]=Ie,J[Ee]=ne,V=Ee);else if(Se<$&&0>o(Me,ne))J[V]=Me,J[Se]=ne,V=Se;else break e}}return le}function o(J,le){var ne=J.sortIndex-le.sortIndex;return ne!==0?ne:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var y=[],_=[],w=1,S=null,C=3,F=!1,W=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function we(J){for(var le=t(_);le!==null;){if(le.callback===null)s(_);else if(le.startTime<=J)s(_),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(_)}}function Pe(J){if(Q=!1,we(J),!W)if(t(y)!==null)W=!0,kt(He);else{var le=t(_);le!==null&&Qe(Pe,le.startTime-J)}}function He(J,le){W=!1,Q&&(Q=!1,_e(I),I=-1),F=!0;var ne=C;try{for(we(le),S=t(y);S!==null&&(!(S.expirationTime>le)||J&&!N());){var V=S.callback;if(typeof V=="function"){S.callback=null,C=S.priorityLevel;var $=V(S.expirationTime<=le);le=r.unstable_now(),typeof $=="function"?S.callback=$:S===t(y)&&s(y),we(le)}else s(y);S=t(y)}if(S!==null)var ve=!0;else{var Ee=t(_);Ee!==null&&Qe(Pe,Ee.startTime-le),ve=!1}return ve}finally{S=null,C=ne,F=!1}}var ke=!1,k=null,I=-1,R=5,O=-1;function N(){return!(r.unstable_now()-O<R)}function x(){if(k!==null){var J=r.unstable_now();O=J;var le=!0;try{le=k(!0,J)}finally{le?A():(ke=!1,k=null)}}else ke=!1}var A;if(typeof pe=="function")A=function(){pe(x)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,gt=Be.port2;Be.port1.onmessage=x,A=function(){gt.postMessage(null)}}else A=function(){q(x,0)};function kt(J){k=J,ke||(ke=!0,A())}function Qe(J,le){I=q(function(){J(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){W||F||(W=!0,kt(He))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(y)},r.unstable_next=function(J){switch(C){case 1:case 2:case 3:var le=3;break;default:le=C}var ne=C;C=le;try{return J()}finally{C=ne}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ne=C;C=J;try{return le()}finally{C=ne}},r.unstable_scheduleCallback=function(J,le,ne){var V=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,J){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,J={id:w++,callback:le,priorityLevel:J,startTime:ne,expirationTime:$,sortIndex:-1},ne>V?(J.sortIndex=ne,e(_,J),t(y)===null&&J===t(_)&&(Q?(_e(I),I=-1):Q=!0,Qe(Pe,ne-V))):(J.sortIndex=$,e(y,J),W||F||(W=!0,kt(He))),J},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(J){var le=C;return function(){var ne=C;C=le;try{return J.apply(this,arguments)}finally{C=ne}}}})(Xh)),Xh}var Km;function Pw(){return Km||(Km=1,Yh.exports=Rw()),Yh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function kw(){if(Qm)return Kt;Qm=1;var r=Mf(),e=Pw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function C(n){return y.call(S,n)?!0:y.call(w,n)?!1:_.test(n)?S[n]=!0:(w[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Q(n,i,a,c,f,d,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=d,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];q[i]=new Q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function pe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_e,pe);q[i]=new Q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_e,pe);q[i]=new Q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_e,pe);q[i]=new Q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function we(n,i,a,c){var f=q.hasOwnProperty(i)?q[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(W(i,a,f,c)&&(a=null),c||f===null?C(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Pe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),ke=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),N=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Qe=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,V;function $(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var ve=!1;function Ee(n,i){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var f=U.stack.split(`
`),d=c.stack.split(`
`),v=f.length-1,T=d.length-1;1<=v&&0<=T&&f[v]!==d[T];)T--;for(;1<=v&&0<=T;v--,T--)if(f[v]!==d[T]){if(v!==1||T!==1)do if(v--,T--,0>T||f[v]!==d[T]){var P=`
`+f[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=T);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ie(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case ke:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case Be:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case x:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case gt:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case kt:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jt(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,d.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ms(n){n._valueTracker||(n._valueTracker=jt(n))}function No(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gs(n,i){var a=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ol(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Oe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ys(n,i){i=i.checked,i!=null&&we(n,"checked",i,!1)}function ki(n,i){ys(n,i);var a=Oe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?at(n,i.type,a):i.hasOwnProperty("defaultValue")&&at(n,i.type,Oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Do(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function at(n,i,a){(i!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var nt=Array.isArray;function yn(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Oe(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Oo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vo(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(nt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Oe(a)}}function al(n,i){var a=Oe(i.value),c=Oe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Or(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function xo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?xo(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vr,ll=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Vr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ni(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ul=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(n){ul.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xr[i]=xr[n]})});function Lr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||xr.hasOwnProperty(n)&&xr[n]?(""+i).trim():i+"px"}function vs(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Lr(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Lo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _n(n,i){if(i){if(Lo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Es(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mr=null;function ws(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ir=null,sr=null,et=null;function Mo(n){if(n=ua(n)){if(typeof ir!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ml(i),ir(n.stateNode,n.type,i))}}function br(n){sr?et?et.push(n):et=[n]:sr=n}function Fr(){if(sr){var n=sr,i=et;if(et=sr=null,Mo(n),i)for(n=0;n<i.length;n++)Mo(i[n])}}function cl(n,i){return n(i)}function hl(){}var Dn=!1;function fl(n,i,a){if(Dn)return n(i,a);Dn=!0;try{return cl(n,i,a)}finally{Dn=!1,(sr!==null||et!==null)&&(hl(),Fr())}}function Di(n,i){var a=n.stateNode;if(a===null)return null;var c=Ml(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ur=!1;if(m)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Ur=!1}function dl(n,i,a,c,f,d,v,T,P){var U=Array.prototype.slice.call(arguments,3);try{i.apply(a,U)}catch(G){this.onError(G)}}var or=!1,On=null,Ts=!1,ln=null,pl={onError:function(n){or=!0,On=n}};function ml(n,i,a,c,f,d,v,T,P){or=!1,On=null,dl.apply(pl,arguments)}function bo(n,i,a,c,f,d,v,T,P){if(ml.apply(this,arguments),or){if(or){var U=On;or=!1,On=null}else throw Error(t(198));Ts||(Ts=!0,ln=U)}}function vn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Fo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function gl(n){if(vn(n)!==n)throw Error(t(188))}function yl(n){var i=n.alternate;if(!i){if(i=vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return gl(f),n;if(d===c)return gl(f),i;d=d.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=d;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,c=d;break}if(T===c){v=!0,c=f,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,c=f;break}if(T===c){v=!0,c=d,a=f;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _l(n){return n=yl(n),n!==null?Oi(n):null}function Oi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Oi(n);if(i!==null)return i;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,Is=e.unstable_cancelCallback,Vi=e.unstable_shouldYield,ar=e.unstable_requestPaint,qe=e.unstable_now,Sc=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,jo=e.unstable_UserBlockingPriority,xi=e.unstable_NormalPriority,Bo=e.unstable_LowPriority,As=e.unstable_IdlePriority,Li=null,Xt=null;function vl(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Li,n,void 0,(n.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:Mi,Vn=Math.log,un=Math.LN2;function Mi(n){return n>>>=0,n===0?32:31-(Vn(n)/un|0)|0}var xn=64,Br=4194304;function Le(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function lr(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,d=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~f;T!==0?c=Le(T):(d&=v,d!==0&&(c=Le(d)))}else v=a&~f,v!==0?c=Le(v):d!==0&&(c=Le(d));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,d=i&-i,f>=d||f===16&&(d&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Jt(i),f=1<<a,c|=n[a],i&=~f;return c}function bi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fi(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes;0<d;){var v=31-Jt(d),T=1<<v,P=f[v];P===-1?((T&a)===0||(T&c)!==0)&&(f[v]=bi(T,i)):P<=i&&(n.expiredLanes|=T),d&=~T}}function zo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $o(){var n=xn;return xn<<=1,(xn&4194240)===0&&(xn=64),n}function Ho(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ui(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Jt(i),n[i]=a}function Ac(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Jt(a),d=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~d}}function qo(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Jt(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Ne=0;function Ln(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Go,Cs,Wo,Ko,Qo,Mn=!1,Rs=[],bn=null,Fn=null,wt=null,ji=new Map,ur=new Map,Zt=[],El="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zr(n,i){switch(n){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":ji.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(i.pointerId)}}function En(n,i,a,c,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:d,targetContainers:[f]},i!==null&&(i=ua(i),i!==null&&Cs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function wl(n,i,a,c,f){switch(i){case"focusin":return bn=En(bn,n,i,a,c,f),!0;case"dragenter":return Fn=En(Fn,n,i,a,c,f),!0;case"mouseover":return wt=En(wt,n,i,a,c,f),!0;case"pointerover":var d=f.pointerId;return ji.set(d,En(ji.get(d)||null,n,i,a,c,f)),!0;case"gotpointercapture":return d=f.pointerId,ur.set(d,En(ur.get(d)||null,n,i,a,c,f)),!0}return!1}function Ps(n){var i=Hi(n.target);if(i!==null){var a=vn(i);if(a!==null){if(i=a.tag,i===13){if(i=Fo(a),i!==null){n.blockedOn=i,Qo(n.priority,function(){Wo(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function je(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ks(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Mr=c,a.target.dispatchEvent(c),Mr=null}else return i=ua(a),i!==null&&Cs(i),n.blockedOn=a,!1;i.shift()}return!0}function Tl(n,i,a){je(n)&&a.delete(i)}function Cc(){Mn=!1,bn!==null&&je(bn)&&(bn=null),Fn!==null&&je(Fn)&&(Fn=null),wt!==null&&je(wt)&&(wt=null),ji.forEach(Tl),ur.forEach(Tl)}function $r(n,i){n.blockedOn===i&&(n.blockedOn=null,Mn||(Mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cc)))}function Hr(n){function i(f){return $r(f,n)}if(0<Rs.length){$r(Rs[0],n);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(bn!==null&&$r(bn,n),Fn!==null&&$r(Fn,n),wt!==null&&$r(wt,n),ji.forEach(i),ur.forEach(i),a=0;a<Zt.length;a++)c=Zt[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Zt.length&&(a=Zt[0],a.blockedOn===null);)Ps(a),a.blockedOn===null&&Zt.shift()}var cr=Pe.ReactCurrentBatchConfig,hr=!0;function Un(n,i,a,c){var f=Ne,d=cr.transition;cr.transition=null;try{Ne=1,Yo(n,i,a,c)}finally{Ne=f,cr.transition=d}}function Il(n,i,a,c){var f=Ne,d=cr.transition;cr.transition=null;try{Ne=4,Yo(n,i,a,c)}finally{Ne=f,cr.transition=d}}function Yo(n,i,a,c){if(hr){var f=ks(n,i,a,c);if(f===null)bc(n,i,c,jn,a),zr(n,c);else if(wl(f,n,i,a,c))c.stopPropagation();else if(zr(n,c),i&4&&-1<El.indexOf(n)){for(;f!==null;){var d=ua(f);if(d!==null&&Go(d),d=ks(n,i,a,c),d===null&&bc(n,i,c,jn,a),d===f)break;f=d}f!==null&&c.stopPropagation()}else bc(n,i,c,null,a)}}var jn=null;function ks(n,i,a,c){if(jn=null,n=ws(c),n=Hi(n),n!==null)if(i=vn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Fo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return jn=n,null}function Ns(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case Ss:return 1;case jo:return 4;case xi:case Bo:return 16;case As:return 536870912;default:return 16}default:return 16}}var en=null,Ds=null,fr=null;function Sl(){if(fr)return fr;var n,i=Ds,a=i.length,c,f="value"in en?en.value:en.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===f[d-c];c++);return fr=f.slice(n,1<c?1-c:void 0)}function Bi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Xo(){return!1}function Nt(n){function i(a,c,f,d,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Bn:Xo,this.isPropagationStopped=Xo,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),i}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Nt(zn),qr=ne({},zn,{view:0,detail:0}),Os=Nt(qr),Vs,xs,tn,$i=ne({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ge,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==tn&&(tn&&n.type==="mousemove"?(Vs=n.screenX-tn.screenX,xs=n.screenY-tn.screenY):xs=Vs=0,tn=n),Vs)},movementY:function(n){return"movementY"in n?n.movementY:xs}}),Jo=Nt($i),Al=ne({},$i,{dataTransfer:0}),Cl=Nt(Al),Ls=ne({},qr,{relatedTarget:0}),Tt=Nt(Ls),Rl=ne({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pl=Nt(Rl),Gr=ne({},zn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Nt(Gr),p=ne({},zn,{data:0}),g=Nt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j[n])?!!i[n]:!1}function ge(){return X}var rt=ne({},qr,{key:function(n){if(n.key){var i=E[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Bi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ge,charCode:function(n){return n.type==="keypress"?Bi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fe=Nt(rt),lt=ne({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nn=Nt(lt),dr=ne({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ge}),$n=Nt(dr),Hn=ne({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ms=Nt(Hn),Zo=ne({},$i,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yE=Nt(Zo),_E=[9,13,27,32],Rc=m&&"CompositionEvent"in window,ea=null;m&&"documentMode"in document&&(ea=document.documentMode);var vE=m&&"TextEvent"in window&&!ea,Ld=m&&(!Rc||ea&&8<ea&&11>=ea),Md=" ",bd=!1;function Fd(n,i){switch(n){case"keyup":return _E.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function EE(n,i){switch(n){case"compositionend":return Ud(i);case"keypress":return i.which!==32?null:(bd=!0,Md);case"textInput":return n=i.data,n===Md&&bd?null:n;default:return null}}function wE(n,i){if(bs)return n==="compositionend"||!Rc&&Fd(n,i)?(n=Sl(),fr=Ds=en=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ld&&i.locale!=="ko"?null:i.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!TE[n.type]:i==="textarea"}function Bd(n,i,a,c){br(c),i=Vl(i,"onChange"),0<i.length&&(a=new zi("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ta=null,na=null;function IE(n){sp(n,0)}function kl(n){var i=zs(n);if(No(i))return n}function SE(n,i){if(n==="change")return i}var zd=!1;if(m){var Pc;if(m){var kc="oninput"in document;if(!kc){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),kc=typeof $d.oninput=="function"}Pc=kc}else Pc=!1;zd=Pc&&(!document.documentMode||9<document.documentMode)}function Hd(){ta&&(ta.detachEvent("onpropertychange",qd),na=ta=null)}function qd(n){if(n.propertyName==="value"&&kl(na)){var i=[];Bd(i,na,n,ws(n)),fl(IE,i)}}function AE(n,i,a){n==="focusin"?(Hd(),ta=i,na=a,ta.attachEvent("onpropertychange",qd)):n==="focusout"&&Hd()}function CE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kl(na)}function RE(n,i){if(n==="click")return kl(i)}function PE(n,i){if(n==="input"||n==="change")return kl(i)}function kE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var wn=typeof Object.is=="function"?Object.is:kE;function ra(n,i){if(wn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!y.call(i,f)||!wn(n[f],i[f]))return!1}return!0}function Gd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wd(n,i){var a=Gd(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gd(a)}}function Kd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Kd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qd(){for(var n=window,i=Dr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Dr(n.document)}return i}function Nc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function NE(n){var i=Qd(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Kd(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,d=Math.min(c.start,f);c=c.end===void 0?d:Math.min(c.end,f),!n.extend&&d>c&&(f=c,c=d,d=f),f=Wd(a,d);var v=Wd(a,c);f&&v&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),d>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var DE=m&&"documentMode"in document&&11>=document.documentMode,Fs=null,Dc=null,ia=null,Oc=!1;function Yd(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||Fs==null||Fs!==Dr(c)||(c=Fs,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=Vl(Dc,"onSelect"),0<c.length&&(i=new zi("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Fs)))}function Nl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},Vc={},Xd={};m&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Dl(n){if(Vc[n])return Vc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Xd)return Vc[n]=i[a];return n}var Jd=Dl("animationend"),Zd=Dl("animationiteration"),ep=Dl("animationstart"),tp=Dl("transitionend"),np=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,i){np.set(n,i),u(i,[n])}for(var xc=0;xc<rp.length;xc++){var Lc=rp[xc],OE=Lc.toLowerCase(),VE=Lc[0].toUpperCase()+Lc.slice(1);Wr(OE,"on"+VE)}Wr(Jd,"onAnimationEnd"),Wr(Zd,"onAnimationIteration"),Wr(ep,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(tp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function ip(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,bo(c,i,void 0,n),n.currentTarget=null}function sp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var d=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],P=T.instance,U=T.currentTarget;if(T=T.listener,P!==d&&f.isPropagationStopped())break e;ip(f,T,U),d=P}else for(v=0;v<c.length;v++){if(T=c[v],P=T.instance,U=T.currentTarget,T=T.listener,P!==d&&f.isPropagationStopped())break e;ip(f,T,U),d=P}}}if(Ts)throw n=ln,Ts=!1,ln=null,n}function Ge(n,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var c=n+"__bubble";a.has(c)||(op(i,n,2,!1),a.add(c))}function Mc(n,i,a){var c=0;i&&(c|=4),op(a,n,c,i)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Ol]){n[Ol]=!0,s.forEach(function(a){a!=="selectionchange"&&(xE.has(a)||Mc(a,!1,n),Mc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ol]||(i[Ol]=!0,Mc("selectionchange",!1,i))}}function op(n,i,a,c){switch(Ns(i)){case 1:var f=Un;break;case 4:f=Il;break;default:f=Yo}a=f.bind(null,i,a,n),f=void 0,!Ur||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function bc(n,i,a,c,f){var d=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===f||T.nodeType===8&&T.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;v=v.return}for(;T!==null;){if(v=Hi(T),v===null)return;if(P=v.tag,P===5||P===6){c=d=v;continue e}T=T.parentNode}}c=c.return}fl(function(){var U=d,G=ws(a),K=[];e:{var H=np.get(n);if(H!==void 0){var ee=zi,ie=n;switch(n){case"keypress":if(Bi(a)===0)break e;case"keydown":case"keyup":ee=Fe;break;case"focusin":ie="focus",ee=Tt;break;case"focusout":ie="blur",ee=Tt;break;case"beforeblur":case"afterblur":ee=Tt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Cl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=$n;break;case Jd:case Zd:case ep:ee=Pl;break;case tp:ee=Ms;break;case"scroll":ee=Os;break;case"wheel":ee=yE;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=nn}var se=(i&4)!==0,it=!se&&n==="scroll",L=se?H!==null?H+"Capture":null:H;se=[];for(var D=U,b;D!==null;){b=D;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,L!==null&&(Y=Di(D,L),Y!=null&&se.push(aa(D,Y,b)))),it)break;D=D.return}0<se.length&&(H=new ee(H,ie,null,a,G),K.push({event:H,listeners:se}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",H&&a!==Mr&&(ie=a.relatedTarget||a.fromElement)&&(Hi(ie)||ie[pr]))break e;if((ee||H)&&(H=G.window===G?G:(H=G.ownerDocument)?H.defaultView||H.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=U,ie=ie?Hi(ie):null,ie!==null&&(it=vn(ie),ie!==it||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=U),ee!==ie)){if(se=Jo,Y="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(se=nn,Y="onPointerLeave",L="onPointerEnter",D="pointer"),it=ee==null?H:zs(ee),b=ie==null?H:zs(ie),H=new se(Y,D+"leave",ee,a,G),H.target=it,H.relatedTarget=b,Y=null,Hi(G)===U&&(se=new se(L,D+"enter",ie,a,G),se.target=b,se.relatedTarget=it,Y=se),it=Y,ee&&ie)t:{for(se=ee,L=ie,D=0,b=se;b;b=js(b))D++;for(b=0,Y=L;Y;Y=js(Y))b++;for(;0<D-b;)se=js(se),D--;for(;0<b-D;)L=js(L),b--;for(;D--;){if(se===L||L!==null&&se===L.alternate)break t;se=js(se),L=js(L)}se=null}else se=null;ee!==null&&ap(K,H,ee,se,!1),ie!==null&&it!==null&&ap(K,it,ie,se,!0)}}e:{if(H=U?zs(U):window,ee=H.nodeName&&H.nodeName.toLowerCase(),ee==="select"||ee==="input"&&H.type==="file")var oe=SE;else if(jd(H))if(zd)oe=PE;else{oe=CE;var ue=AE}else(ee=H.nodeName)&&ee.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(oe=RE);if(oe&&(oe=oe(n,U))){Bd(K,oe,a,G);break e}ue&&ue(n,H,U),n==="focusout"&&(ue=H._wrapperState)&&ue.controlled&&H.type==="number"&&at(H,"number",H.value)}switch(ue=U?zs(U):window,n){case"focusin":(jd(ue)||ue.contentEditable==="true")&&(Fs=ue,Dc=U,ia=null);break;case"focusout":ia=Dc=Fs=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Yd(K,a,G);break;case"selectionchange":if(DE)break;case"keydown":case"keyup":Yd(K,a,G)}var ce;if(Rc)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else bs?Fd(n,a)&&(fe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(Ld&&a.locale!=="ko"&&(bs||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&bs&&(ce=Sl()):(en=G,Ds="value"in en?en.value:en.textContent,bs=!0)),ue=Vl(U,fe),0<ue.length&&(fe=new g(fe,n,null,a,G),K.push({event:fe,listeners:ue}),ce?fe.data=ce:(ce=Ud(a),ce!==null&&(fe.data=ce)))),(ce=vE?EE(n,a):wE(n,a))&&(U=Vl(U,"onBeforeInput"),0<U.length&&(G=new g("onBeforeInput","beforeinput",null,a,G),K.push({event:G,listeners:U}),G.data=ce))}sp(K,i)})}function aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Vl(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,d=f.stateNode;f.tag===5&&d!==null&&(f=d,d=Di(n,a),d!=null&&c.unshift(aa(n,d,f)),d=Di(n,i),d!=null&&c.push(aa(n,d,f))),n=n.return}return c}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ap(n,i,a,c,f){for(var d=i._reactName,v=[];a!==null&&a!==c;){var T=a,P=T.alternate,U=T.stateNode;if(P!==null&&P===c)break;T.tag===5&&U!==null&&(T=U,f?(P=Di(a,d),P!=null&&v.unshift(aa(a,P,T))):f||(P=Di(a,d),P!=null&&v.push(aa(a,P,T)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var LE=/\r\n?/g,ME=/\u0000|\uFFFD/g;function lp(n){return(typeof n=="string"?n:""+n).replace(LE,`
`).replace(ME,"")}function xl(n,i,a){if(i=lp(i),lp(n)!==i&&a)throw Error(t(425))}function Ll(){}var Fc=null,Uc=null;function jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,bE=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,FE=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(n){return up.resolve(null).then(n).catch(UE)}:Bc;function UE(n){setTimeout(function(){throw n})}function zc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Hr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Hr(i)}function Kr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function cp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Bs,la="__reactProps$"+Bs,pr="__reactContainer$"+Bs,$c="__reactEvents$"+Bs,jE="__reactListeners$"+Bs,BE="__reactHandles$"+Bs;function Hi(n){var i=n[qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[pr]||a[qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=cp(n);n!==null;){if(a=n[qn])return a;n=cp(n)}return i}n=a,a=n.parentNode}return null}function ua(n){return n=n[qn]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ml(n){return n[la]||null}var Hc=[],$s=-1;function Qr(n){return{current:n}}function We(n){0>$s||(n.current=Hc[$s],Hc[$s]=null,$s--)}function ze(n,i){$s++,Hc[$s]=n.current,n.current=i}var Yr={},Dt=Qr(Yr),$t=Qr(!1),qi=Yr;function Hs(n,i){var a=n.type.contextTypes;if(!a)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},d;for(d in a)f[d]=i[d];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Ht(n){return n=n.childContextTypes,n!=null}function bl(){We($t),We(Dt)}function hp(n,i,a){if(Dt.current!==Yr)throw Error(t(168));ze(Dt,i),ze($t,a)}function fp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Me(n)||"Unknown",f));return ne({},a,c)}function Fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,qi=Dt.current,ze(Dt,n),ze($t,$t.current),!0}function dp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=fp(n,i,qi),c.__reactInternalMemoizedMergedChildContext=n,We($t),We(Dt),ze(Dt,n)):We($t),ze($t,a)}var mr=null,Ul=!1,qc=!1;function pp(n){mr===null?mr=[n]:mr.push(n)}function zE(n){Ul=!0,pp(n)}function Xr(){if(!qc&&mr!==null){qc=!0;var n=0,i=Ne;try{var a=mr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}mr=null,Ul=!1}catch(f){throw mr!==null&&(mr=mr.slice(n+1)),Uo(Ss,Xr),f}finally{Ne=i,qc=!1}}return null}var qs=[],Gs=0,jl=null,Bl=0,cn=[],hn=0,Gi=null,gr=1,yr="";function Wi(n,i){qs[Gs++]=Bl,qs[Gs++]=jl,jl=n,Bl=i}function mp(n,i,a){cn[hn++]=gr,cn[hn++]=yr,cn[hn++]=Gi,Gi=n;var c=gr;n=yr;var f=32-Jt(c)-1;c&=~(1<<f),a+=1;var d=32-Jt(i)+f;if(30<d){var v=f-f%5;d=(c&(1<<v)-1).toString(32),c>>=v,f-=v,gr=1<<32-Jt(i)+f|a<<f|c,yr=d+n}else gr=1<<d|a<<f|c,yr=n}function Gc(n){n.return!==null&&(Wi(n,1),mp(n,1,0))}function Wc(n){for(;n===jl;)jl=qs[--Gs],qs[Gs]=null,Bl=qs[--Gs],qs[Gs]=null;for(;n===Gi;)Gi=cn[--hn],cn[hn]=null,yr=cn[--hn],cn[hn]=null,gr=cn[--hn],cn[hn]=null}var rn=null,sn=null,Ye=!1,Tn=null;function gp(n,i){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function yp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,rn=n,sn=Kr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,rn=n,sn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gi!==null?{id:gr,overflow:yr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qc(n){if(Ye){var i=sn;if(i){var a=i;if(!yp(n,i)){if(Kc(n))throw Error(t(418));i=Kr(a.nextSibling);var c=rn;i&&yp(n,i)?gp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,rn=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,rn=n}}}function _p(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function zl(n){if(n!==rn)return!1;if(!Ye)return _p(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jc(n.type,n.memoizedProps)),i&&(i=sn)){if(Kc(n))throw vp(),Error(t(418));for(;i;)gp(n,i),i=Kr(i.nextSibling)}if(_p(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){sn=Kr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}sn=null}}else sn=rn?Kr(n.stateNode.nextSibling):null;return!0}function vp(){for(var n=sn;n;)n=Kr(n.nextSibling)}function Ws(){sn=rn=null,Ye=!1}function Yc(n){Tn===null?Tn=[n]:Tn.push(n)}var $E=Pe.ReactCurrentBatchConfig;function ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,d=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===d?i.ref:(i=function(v){var T=f.refs;v===null?delete T[d]:T[d]=v},i._stringRef=d,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $l(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ep(n){var i=n._init;return i(n._payload)}function wp(n){function i(L,D){if(n){var b=L.deletions;b===null?(L.deletions=[D],L.flags|=16):b.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)i(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function f(L,D){return L=si(L,D),L.index=0,L.sibling=null,L}function d(L,D,b){return L.index=b,n?(b=L.alternate,b!==null?(b=b.index,b<D?(L.flags|=2,D):b):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,D,b,Y){return D===null||D.tag!==6?(D=Bh(b,L.mode,Y),D.return=L,D):(D=f(D,b),D.return=L,D)}function P(L,D,b,Y){var oe=b.type;return oe===k?G(L,D,b.props.children,Y,b.key):D!==null&&(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===kt&&Ep(oe)===D.type)?(Y=f(D,b.props),Y.ref=ca(L,D,b),Y.return=L,Y):(Y=du(b.type,b.key,b.props,null,L.mode,Y),Y.ref=ca(L,D,b),Y.return=L,Y)}function U(L,D,b,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==b.containerInfo||D.stateNode.implementation!==b.implementation?(D=zh(b,L.mode,Y),D.return=L,D):(D=f(D,b.children||[]),D.return=L,D)}function G(L,D,b,Y,oe){return D===null||D.tag!==7?(D=ts(b,L.mode,Y,oe),D.return=L,D):(D=f(D,b),D.return=L,D)}function K(L,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Bh(""+D,L.mode,b),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case He:return b=du(D.type,D.key,D.props,null,L.mode,b),b.ref=ca(L,null,D),b.return=L,b;case ke:return D=zh(D,L.mode,b),D.return=L,D;case kt:var Y=D._init;return K(L,Y(D._payload),b)}if(nt(D)||le(D))return D=ts(D,L.mode,b,null),D.return=L,D;$l(L,D)}return null}function H(L,D,b,Y){var oe=D!==null?D.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return oe!==null?null:T(L,D,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case He:return b.key===oe?P(L,D,b,Y):null;case ke:return b.key===oe?U(L,D,b,Y):null;case kt:return oe=b._init,H(L,D,oe(b._payload),Y)}if(nt(b)||le(b))return oe!==null?null:G(L,D,b,Y,null);$l(L,b)}return null}function ee(L,D,b,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(b)||null,T(D,L,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case He:return L=L.get(Y.key===null?b:Y.key)||null,P(D,L,Y,oe);case ke:return L=L.get(Y.key===null?b:Y.key)||null,U(D,L,Y,oe);case kt:var ue=Y._init;return ee(L,D,b,ue(Y._payload),oe)}if(nt(Y)||le(Y))return L=L.get(b)||null,G(D,L,Y,oe,null);$l(D,Y)}return null}function ie(L,D,b,Y){for(var oe=null,ue=null,ce=D,fe=D=0,vt=null;ce!==null&&fe<b.length;fe++){ce.index>fe?(vt=ce,ce=null):vt=ce.sibling;var xe=H(L,ce,b[fe],Y);if(xe===null){ce===null&&(ce=vt);break}n&&ce&&xe.alternate===null&&i(L,ce),D=d(xe,D,fe),ue===null?oe=xe:ue.sibling=xe,ue=xe,ce=vt}if(fe===b.length)return a(L,ce),Ye&&Wi(L,fe),oe;if(ce===null){for(;fe<b.length;fe++)ce=K(L,b[fe],Y),ce!==null&&(D=d(ce,D,fe),ue===null?oe=ce:ue.sibling=ce,ue=ce);return Ye&&Wi(L,fe),oe}for(ce=c(L,ce);fe<b.length;fe++)vt=ee(ce,L,fe,b[fe],Y),vt!==null&&(n&&vt.alternate!==null&&ce.delete(vt.key===null?fe:vt.key),D=d(vt,D,fe),ue===null?oe=vt:ue.sibling=vt,ue=vt);return n&&ce.forEach(function(oi){return i(L,oi)}),Ye&&Wi(L,fe),oe}function se(L,D,b,Y){var oe=le(b);if(typeof oe!="function")throw Error(t(150));if(b=oe.call(b),b==null)throw Error(t(151));for(var ue=oe=null,ce=D,fe=D=0,vt=null,xe=b.next();ce!==null&&!xe.done;fe++,xe=b.next()){ce.index>fe?(vt=ce,ce=null):vt=ce.sibling;var oi=H(L,ce,xe.value,Y);if(oi===null){ce===null&&(ce=vt);break}n&&ce&&oi.alternate===null&&i(L,ce),D=d(oi,D,fe),ue===null?oe=oi:ue.sibling=oi,ue=oi,ce=vt}if(xe.done)return a(L,ce),Ye&&Wi(L,fe),oe;if(ce===null){for(;!xe.done;fe++,xe=b.next())xe=K(L,xe.value,Y),xe!==null&&(D=d(xe,D,fe),ue===null?oe=xe:ue.sibling=xe,ue=xe);return Ye&&Wi(L,fe),oe}for(ce=c(L,ce);!xe.done;fe++,xe=b.next())xe=ee(ce,L,fe,xe.value,Y),xe!==null&&(n&&xe.alternate!==null&&ce.delete(xe.key===null?fe:xe.key),D=d(xe,D,fe),ue===null?oe=xe:ue.sibling=xe,ue=xe);return n&&ce.forEach(function(Tw){return i(L,Tw)}),Ye&&Wi(L,fe),oe}function it(L,D,b,Y){if(typeof b=="object"&&b!==null&&b.type===k&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case He:e:{for(var oe=b.key,ue=D;ue!==null;){if(ue.key===oe){if(oe=b.type,oe===k){if(ue.tag===7){a(L,ue.sibling),D=f(ue,b.props.children),D.return=L,L=D;break e}}else if(ue.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===kt&&Ep(oe)===ue.type){a(L,ue.sibling),D=f(ue,b.props),D.ref=ca(L,ue,b),D.return=L,L=D;break e}a(L,ue);break}else i(L,ue);ue=ue.sibling}b.type===k?(D=ts(b.props.children,L.mode,Y,b.key),D.return=L,L=D):(Y=du(b.type,b.key,b.props,null,L.mode,Y),Y.ref=ca(L,D,b),Y.return=L,L=Y)}return v(L);case ke:e:{for(ue=b.key;D!==null;){if(D.key===ue)if(D.tag===4&&D.stateNode.containerInfo===b.containerInfo&&D.stateNode.implementation===b.implementation){a(L,D.sibling),D=f(D,b.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else i(L,D);D=D.sibling}D=zh(b,L.mode,Y),D.return=L,L=D}return v(L);case kt:return ue=b._init,it(L,D,ue(b._payload),Y)}if(nt(b))return ie(L,D,b,Y);if(le(b))return se(L,D,b,Y);$l(L,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,D!==null&&D.tag===6?(a(L,D.sibling),D=f(D,b),D.return=L,L=D):(a(L,D),D=Bh(b,L.mode,Y),D.return=L,L=D),v(L)):a(L,D)}return it}var Ks=wp(!0),Tp=wp(!1),Hl=Qr(null),ql=null,Qs=null,Xc=null;function Jc(){Xc=Qs=ql=null}function Zc(n){var i=Hl.current;We(Hl),n._currentValue=i}function eh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ys(n,i){ql=n,Xc=Qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(qt=!0),n.firstContext=null)}function fn(n){var i=n._currentValue;if(Xc!==n)if(n={context:n,memoizedValue:i,next:null},Qs===null){if(ql===null)throw Error(t(308));Qs=n,ql.dependencies={lanes:0,firstContext:n}}else Qs=Qs.next=n;return i}var Ki=null;function th(n){Ki===null?Ki=[n]:Ki.push(n)}function Ip(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,th(i)):(a.next=f.next,f.next=a),i.interleaved=a,_r(n,c)}function _r(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Zr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,_r(n,a)}return f=c.interleaved,f===null?(i.next=i,th(c)):(i.next=f.next,f.next=i),c.interleaved=i,_r(n,a)}function Gl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qo(n,a)}}function Ap(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};d===null?f=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Wl(n,i,a,c){var f=n.updateQueue;Jr=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var P=T,U=P.next;P.next=null,v===null?d=U:v.next=U,v=P;var G=n.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=U:T.next=U,G.lastBaseUpdate=P))}if(d!==null){var K=f.baseState;v=0,G=U=P=null,T=d;do{var H=T.lane,ee=T.eventTime;if((c&H)===H){G!==null&&(G=G.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ie=n,se=T;switch(H=i,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){K=ie.call(ee,K,H);break e}K=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,H=typeof ie=="function"?ie.call(ee,K,H):ie,H==null)break e;K=ne({},K,H);break e;case 2:Jr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,H=f.effects,H===null?f.effects=[T]:H.push(T))}else ee={eventTime:ee,lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(U=G=ee,P=K):G=G.next=ee,v|=H;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;H=T,T=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);if(G===null&&(P=K),f.baseState=P,f.firstBaseUpdate=U,f.lastBaseUpdate=G,i=f.shared.interleaved,i!==null){f=i;do v|=f.lane,f=f.next;while(f!==i)}else d===null&&(f.shared.lanes=0);Xi|=v,n.lanes=v,n.memoizedState=K}}function Cp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var ha={},Gn=Qr(ha),fa=Qr(ha),da=Qr(ha);function Qi(n){if(n===ha)throw Error(t(174));return n}function rh(n,i){switch(ze(da,i),ze(fa,n),ze(Gn,ha),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_s(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_s(i,n)}We(Gn),ze(Gn,i)}function Xs(){We(Gn),We(fa),We(da)}function Rp(n){Qi(da.current);var i=Qi(Gn.current),a=_s(i,n.type);i!==a&&(ze(fa,n),ze(Gn,a))}function ih(n){fa.current===n&&(We(Gn),We(fa))}var Xe=Qr(0);function Kl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sh=[];function oh(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var Ql=Pe.ReactCurrentDispatcher,ah=Pe.ReactCurrentBatchConfig,Yi=0,Je=null,dt=null,yt=null,Yl=!1,pa=!1,ma=0,HE=0;function Ot(){throw Error(t(321))}function lh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!wn(n[a],i[a]))return!1;return!0}function uh(n,i,a,c,f,d){if(Yi=d,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ql.current=n===null||n.memoizedState===null?KE:QE,n=a(c,f),pa){d=0;do{if(pa=!1,ma=0,25<=d)throw Error(t(301));d+=1,yt=dt=null,i.updateQueue=null,Ql.current=YE,n=a(c,f)}while(pa)}if(Ql.current=Zl,i=dt!==null&&dt.next!==null,Yi=0,yt=dt=Je=null,Yl=!1,i)throw Error(t(300));return n}function ch(){var n=ma!==0;return ma=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Je.memoizedState=yt=n:yt=yt.next=n,yt}function dn(){if(dt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var i=yt===null?Je.memoizedState:yt.next;if(i!==null)yt=i,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},yt===null?Je.memoizedState=yt=n:yt=yt.next=n}return yt}function ga(n,i){return typeof i=="function"?i(n):i}function hh(n){var i=dn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,f=c.baseQueue,d=a.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}c.baseQueue=f=d,a.pending=null}if(f!==null){d=f.next,c=c.baseState;var T=v=null,P=null,U=d;do{var G=U.lane;if((Yi&G)===G)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(T=P=K,v=c):P=P.next=K,Je.lanes|=G,Xi|=G}U=U.next}while(U!==null&&U!==d);P===null?v=c:P.next=T,wn(c,i.memoizedState)||(qt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do d=f.lane,Je.lanes|=d,Xi|=d,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fh(n){var i=dn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do d=n(d,v.action),v=v.next;while(v!==f);wn(d,i.memoizedState)||(qt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,c]}function Pp(){}function kp(n,i){var a=Je,c=dn(),f=i(),d=!wn(c.memoizedState,f);if(d&&(c.memoizedState=f,qt=!0),c=c.queue,dh(Op.bind(null,a,c,n),[n]),c.getSnapshot!==i||d||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,ya(9,Dp.bind(null,a,c,f,i),void 0,null),_t===null)throw Error(t(349));(Yi&30)!==0||Np(a,i,f)}return f}function Np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Dp(n,i,a,c){i.value=a,i.getSnapshot=c,Vp(i)&&xp(n)}function Op(n,i,a){return a(function(){Vp(i)&&xp(n)})}function Vp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!wn(n,a)}catch{return!0}}function xp(n){var i=_r(n,1);i!==null&&Cn(i,n,1,-1)}function Lp(n){var i=Wn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},i.queue=n,n=n.dispatch=WE.bind(null,Je,n),[i.memoizedState,n]}function ya(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Mp(){return dn().memoizedState}function Xl(n,i,a,c){var f=Wn();Je.flags|=n,f.memoizedState=ya(1|i,a,void 0,c===void 0?null:c)}function Jl(n,i,a,c){var f=dn();c=c===void 0?null:c;var d=void 0;if(dt!==null){var v=dt.memoizedState;if(d=v.destroy,c!==null&&lh(c,v.deps)){f.memoizedState=ya(i,a,d,c);return}}Je.flags|=n,f.memoizedState=ya(1|i,a,d,c)}function bp(n,i){return Xl(8390656,8,n,i)}function dh(n,i){return Jl(2048,8,n,i)}function Fp(n,i){return Jl(4,2,n,i)}function Up(n,i){return Jl(4,4,n,i)}function jp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Bp(n,i,a){return a=a!=null?a.concat([n]):null,Jl(4,4,jp.bind(null,i,n),a)}function ph(){}function zp(n,i){var a=dn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function $p(n,i){var a=dn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Hp(n,i,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=a):(wn(a,i)||(a=$o(),Je.lanes|=a,Xi|=a,n.baseState=!0),i)}function qE(n,i){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=ah.transition;ah.transition={};try{n(!1),i()}finally{Ne=a,ah.transition=c}}function qp(){return dn().memoizedState}function GE(n,i,a){var c=ri(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Gp(n))Wp(i,a);else if(a=Ip(n,i,a,c),a!==null){var f=zt();Cn(a,n,c,f),Kp(a,i,c)}}function WE(n,i,a){var c=ri(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gp(n))Wp(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(f.hasEagerState=!0,f.eagerState=T,wn(T,v)){var P=i.interleaved;P===null?(f.next=f,th(i)):(f.next=P.next,P.next=f),i.interleaved=f;return}}catch{}finally{}a=Ip(n,i,f,c),a!==null&&(f=zt(),Cn(a,n,c,f),Kp(a,i,c))}}function Gp(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function Wp(n,i){pa=Yl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Kp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qo(n,a)}}var Zl={readContext:fn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},KE={readContext:fn,useCallback:function(n,i){return Wn().memoizedState=[n,i===void 0?null:i],n},useContext:fn,useEffect:bp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Xl(4194308,4,jp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Xl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Xl(4,2,n,i)},useMemo:function(n,i){var a=Wn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Wn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=GE.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=Wn();return n={current:n},i.memoizedState=n},useState:Lp,useDebugValue:ph,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=Lp(!1),i=n[0];return n=qE.bind(null,n[1]),Wn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,f=Wn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_t===null)throw Error(t(349));(Yi&30)!==0||Np(c,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,bp(Op.bind(null,c,d,n),[n]),c.flags|=2048,ya(9,Dp.bind(null,c,d,a,i),void 0,null),a},useId:function(){var n=Wn(),i=_t.identifierPrefix;if(Ye){var a=yr,c=gr;a=(c&~(1<<32-Jt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=HE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},QE={readContext:fn,useCallback:zp,useContext:fn,useEffect:dh,useImperativeHandle:Bp,useInsertionEffect:Fp,useLayoutEffect:Up,useMemo:$p,useReducer:hh,useRef:Mp,useState:function(){return hh(ga)},useDebugValue:ph,useDeferredValue:function(n){var i=dn();return Hp(i,dt.memoizedState,n)},useTransition:function(){var n=hh(ga)[0],i=dn().memoizedState;return[n,i]},useMutableSource:Pp,useSyncExternalStore:kp,useId:qp,unstable_isNewReconciler:!1},YE={readContext:fn,useCallback:zp,useContext:fn,useEffect:dh,useImperativeHandle:Bp,useInsertionEffect:Fp,useLayoutEffect:Up,useMemo:$p,useReducer:fh,useRef:Mp,useState:function(){return fh(ga)},useDebugValue:ph,useDeferredValue:function(n){var i=dn();return dt===null?i.memoizedState=n:Hp(i,dt.memoizedState,n)},useTransition:function(){var n=fh(ga)[0],i=dn().memoizedState;return[n,i]},useMutableSource:Pp,useSyncExternalStore:kp,useId:qp,unstable_isNewReconciler:!1};function In(n,i){if(n&&n.defaultProps){i=ne({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function mh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ne({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var eu={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=zt(),f=ri(n),d=vr(c,f);d.payload=i,a!=null&&(d.callback=a),i=Zr(n,d,f),i!==null&&(Cn(i,n,f,c),Gl(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=zt(),f=ri(n),d=vr(c,f);d.tag=1,d.payload=i,a!=null&&(d.callback=a),i=Zr(n,d,f),i!==null&&(Cn(i,n,f,c),Gl(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=zt(),c=ri(n),f=vr(a,c);f.tag=2,i!=null&&(f.callback=i),i=Zr(n,f,c),i!==null&&(Cn(i,n,c,a),Gl(i,n,c))}};function Qp(n,i,a,c,f,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,d,v):i.prototype&&i.prototype.isPureReactComponent?!ra(a,c)||!ra(f,d):!0}function Yp(n,i,a){var c=!1,f=Yr,d=i.contextType;return typeof d=="object"&&d!==null?d=fn(d):(f=Ht(i)?qi:Dt.current,c=i.contextTypes,d=(c=c!=null)?Hs(n,f):Yr),i=new i(a,d),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=eu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=d),i}function Xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&eu.enqueueReplaceState(i,i.state,null)}function gh(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},nh(n);var d=i.contextType;typeof d=="object"&&d!==null?f.context=fn(d):(d=Ht(i)?qi:Dt.current,f.context=Hs(n,d)),f.state=n.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(mh(n,i,d,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&eu.enqueueReplaceState(f,f.state,null),Wl(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var f=a}catch(d){f=`
Error generating stack: `+d.message+`
`+d.stack}return{value:n,source:i,stack:f,digest:null}}function yh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function _h(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var XE=typeof WeakMap=="function"?WeakMap:Map;function Jp(n,i,a){a=vr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){au||(au=!0,Vh=c),_h(n,i)},a}function Zp(n,i,a){a=vr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){_h(n,i)}}var d=n.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(a.callback=function(){_h(n,i),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function em(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new XE;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=hw.bind(null,n,i,a),i.then(n,n))}function tm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function nm(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=vr(-1,1),i.tag=2,Zr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var JE=Pe.ReactCurrentOwner,qt=!1;function Bt(n,i,a,c){i.child=n===null?Tp(i,null,a,c):Ks(i,n.child,a,c)}function rm(n,i,a,c,f){a=a.render;var d=i.ref;return Ys(i,f),c=uh(n,i,a,c,d,f),a=ch(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Er(n,i,f)):(Ye&&a&&Gc(i),i.flags|=1,Bt(n,i,c,f),i.child)}function im(n,i,a,c,f){if(n===null){var d=a.type;return typeof d=="function"&&!jh(d)&&d.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=d,sm(n,i,d,c,f)):(n=du(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,(n.lanes&f)===0){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(v,c)&&n.ref===i.ref)return Er(n,i,f)}return i.flags|=1,n=si(d,c),n.ref=i.ref,n.return=i,i.child=n}function sm(n,i,a,c,f){if(n!==null){var d=n.memoizedProps;if(ra(d,c)&&n.ref===i.ref)if(qt=!1,i.pendingProps=c=d,(n.lanes&f)!==0)(n.flags&131072)!==0&&(qt=!0);else return i.lanes=n.lanes,Er(n,i,f)}return vh(n,i,a,c,f)}function om(n,i,a){var c=i.pendingProps,f=c.children,d=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(eo,on),on|=a;else{if((a&1073741824)===0)return n=d!==null?d.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,ze(eo,on),on|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=d!==null?d.baseLanes:a,ze(eo,on),on|=c}else d!==null?(c=d.baseLanes|a,i.memoizedState=null):c=a,ze(eo,on),on|=c;return Bt(n,i,f,a),i.child}function am(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function vh(n,i,a,c,f){var d=Ht(a)?qi:Dt.current;return d=Hs(i,d),Ys(i,f),a=uh(n,i,a,c,d,f),c=ch(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Er(n,i,f)):(Ye&&c&&Gc(i),i.flags|=1,Bt(n,i,a,f),i.child)}function lm(n,i,a,c,f){if(Ht(a)){var d=!0;Fl(i)}else d=!1;if(Ys(i,f),i.stateNode===null)nu(n,i),Yp(i,a,c),gh(i,a,c,f),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=fn(U):(U=Ht(a)?qi:Dt.current,U=Hs(i,U));var G=a.getDerivedStateFromProps,K=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||P!==U)&&Xp(i,v,c,U),Jr=!1;var H=i.memoizedState;v.state=H,Wl(i,c,v,f),P=i.memoizedState,T!==c||H!==P||$t.current||Jr?(typeof G=="function"&&(mh(i,a,G,c),P=i.memoizedState),(T=Jr||Qp(i,a,T,c,H,P,U))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=U,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Sp(n,i),T=i.memoizedProps,U=i.type===i.elementType?T:In(i.type,T),v.props=U,K=i.pendingProps,H=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=fn(P):(P=Ht(a)?qi:Dt.current,P=Hs(i,P));var ee=a.getDerivedStateFromProps;(G=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==K||H!==P)&&Xp(i,v,c,P),Jr=!1,H=i.memoizedState,v.state=H,Wl(i,c,v,f);var ie=i.memoizedState;T!==K||H!==ie||$t.current||Jr?(typeof ee=="function"&&(mh(i,a,ee,c),ie=i.memoizedState),(U=Jr||Qp(i,a,U,c,H,ie,P)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ie),v.props=c,v.state=ie,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),c=!1)}return Eh(n,i,a,c,d,f)}function Eh(n,i,a,c,f,d){am(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return f&&dp(i,a,!1),Er(n,i,d);c=i.stateNode,JE.current=i;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Ks(i,n.child,null,d),i.child=Ks(i,null,T,d)):Bt(n,i,T,d),i.memoizedState=c.state,f&&dp(i,a,!0),i.child}function um(n){var i=n.stateNode;i.pendingContext?hp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&hp(n,i.context,!1),rh(n,i.containerInfo)}function cm(n,i,a,c,f){return Ws(),Yc(f),i.flags|=256,Bt(n,i,a,c),i.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(n){return{baseLanes:n,cachePool:null,transitions:null}}function hm(n,i,a){var c=i.pendingProps,f=Xe.current,d=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(f&2)!==0),T?(d=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),ze(Xe,f&1),n===null)return Qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,d?(c=i.mode,d=i.child,v={mode:"hidden",children:v},(c&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=v):d=pu(v,c,0,null),n=ts(n,c,a,null),d.return=i,n.return=i,d.sibling=n,i.child=d,i.child.memoizedState=Th(a),i.memoizedState=wh,n):Ih(i,v));if(f=n.memoizedState,f!==null&&(T=f.dehydrated,T!==null))return ZE(n,i,v,c,T,f,a);if(d){d=c.fallback,v=i.mode,f=n.child,T=f.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=si(f,P),c.subtreeFlags=f.subtreeFlags&14680064),T!==null?d=si(T,d):(d=ts(d,v,a,null),d.flags|=2),d.return=i,c.return=i,c.sibling=d,i.child=c,c=d,d=i.child,v=n.child.memoizedState,v=v===null?Th(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},d.memoizedState=v,d.childLanes=n.childLanes&~a,i.memoizedState=wh,c}return d=n.child,n=d.sibling,c=si(d,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ih(n,i){return i=pu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tu(n,i,a,c){return c!==null&&Yc(c),Ks(i,n.child,null,a),n=Ih(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ZE(n,i,a,c,f,d,v){if(a)return i.flags&256?(i.flags&=-257,c=yh(Error(t(422))),tu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(d=c.fallback,f=i.mode,c=pu({mode:"visible",children:c.children},f,0,null),d=ts(d,f,v,null),d.flags|=2,c.return=i,d.return=i,c.sibling=d,i.child=c,(i.mode&1)!==0&&Ks(i,n.child,null,v),i.child.memoizedState=Th(v),i.memoizedState=wh,d);if((i.mode&1)===0)return tu(n,i,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var T=c.dgst;return c=T,d=Error(t(419)),c=yh(d,c,void 0),tu(n,i,v,c)}if(T=(v&n.childLanes)!==0,qt||T){if(c=_t,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|v))!==0?0:f,f!==0&&f!==d.retryLane&&(d.retryLane=f,_r(n,f),Cn(c,n,f,-1))}return Uh(),c=yh(Error(t(421))),tu(n,i,v,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=fw.bind(null,n),f._reactRetry=i,null):(n=d.treeContext,sn=Kr(f.nextSibling),rn=i,Ye=!0,Tn=null,n!==null&&(cn[hn++]=gr,cn[hn++]=yr,cn[hn++]=Gi,gr=n.id,yr=n.overflow,Gi=i),i=Ih(i,c.children),i.flags|=4096,i)}function fm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),eh(n.return,i,a)}function Sh(n,i,a,c,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=c,d.tail=a,d.tailMode=f)}function dm(n,i,a){var c=i.pendingProps,f=c.revealOrder,d=c.tail;if(Bt(n,i,c.children,a),c=Xe.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fm(n,a,i);else if(n.tag===19)fm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(ze(Xe,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Kl(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Sh(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Kl(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Sh(i,!0,a,null,d);break;case"together":Sh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Er(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=si(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=si(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ew(n,i,a){switch(i.tag){case 3:um(i),Ws();break;case 5:Rp(i);break;case 1:Ht(i.type)&&Fl(i);break;case 4:rh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;ze(Hl,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(ze(Xe,Xe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?hm(n,i,a):(ze(Xe,Xe.current&1),n=Er(n,i,a),n!==null?n.sibling:null);ze(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return dm(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ze(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,om(n,i,a)}return Er(n,i,a)}var pm,Ah,mm,gm;pm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ah=function(){},mm=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Qi(Gn.current);var d=null;switch(a){case"input":f=gs(n,f),c=gs(n,c),d=[];break;case"select":f=ne({},f,{value:void 0}),c=ne({},c,{value:void 0}),d=[];break;case"textarea":f=Oo(n,f),c=Oo(n,c),d=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ll)}_n(a,c);var v;a=null;for(U in f)if(!c.hasOwnProperty(U)&&f.hasOwnProperty(U)&&f[U]!=null)if(U==="style"){var T=f[U];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?d||(d=[]):(d=d||[]).push(U,null));for(U in c){var P=c[U];if(T=f!=null?f[U]:void 0,c.hasOwnProperty(U)&&P!==T&&(P!=null||T!=null))if(U==="style")if(T){for(v in T)!T.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&T[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(d||(d=[]),d.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,T=T?T.__html:void 0,P!=null&&T!==P&&(d=d||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(d=d||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Ge("scroll",n),d||T===P||(d=[])):(d=d||[]).push(U,P))}a&&(d=d||[]).push("style",a);var U=d;(i.updateQueue=U)&&(i.flags|=4)}},gm=function(n,i,a,c){a!==c&&(i.flags|=4)};function _a(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function tw(n,i,a){var c=i.pendingProps;switch(Wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(i),null;case 1:return Ht(i.type)&&bl(),Vt(i),null;case 3:return c=i.stateNode,Xs(),We($t),We(Dt),oh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(zl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Tn!==null&&(Mh(Tn),Tn=null))),Ah(n,i),Vt(i),null;case 5:ih(i);var f=Qi(da.current);if(a=i.type,n!==null&&i.stateNode!=null)mm(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Vt(i),null}if(n=Qi(Gn.current),zl(i)){c=i.stateNode,a=i.type;var d=i.memoizedProps;switch(c[qn]=i,c[la]=d,n=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(f=0;f<sa.length;f++)Ge(sa[f],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":ol(c,d),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!d.multiple},Ge("invalid",c);break;case"textarea":Vo(c,d),Ge("invalid",c)}_n(a,d),f=null;for(var v in d)if(d.hasOwnProperty(v)){var T=d[v];v==="children"?typeof T=="string"?c.textContent!==T&&(d.suppressHydrationWarning!==!0&&xl(c.textContent,T,n),f=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(d.suppressHydrationWarning!==!0&&xl(c.textContent,T,n),f=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Ge("scroll",c)}switch(a){case"input":ms(c),Do(c,d,!0);break;case"textarea":ms(c),Or(c);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(c.onclick=Ll)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=xo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[qn]=i,n[la]=c,pm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Es(a,c),a){case"dialog":Ge("cancel",n),Ge("close",n),f=c;break;case"iframe":case"object":case"embed":Ge("load",n),f=c;break;case"video":case"audio":for(f=0;f<sa.length;f++)Ge(sa[f],n);f=c;break;case"source":Ge("error",n),f=c;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),f=c;break;case"details":Ge("toggle",n),f=c;break;case"input":ol(n,c),f=gs(n,c),Ge("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ne({},c,{value:void 0}),Ge("invalid",n);break;case"textarea":Vo(n,c),f=Oo(n,c),Ge("invalid",n);break;default:f=c}_n(a,f),T=f;for(d in T)if(T.hasOwnProperty(d)){var P=T[d];d==="style"?vs(n,P):d==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ll(n,P)):d==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Ni(n,P):typeof P=="number"&&Ni(n,""+P):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(o.hasOwnProperty(d)?P!=null&&d==="onScroll"&&Ge("scroll",n):P!=null&&we(n,d,P,v))}switch(a){case"input":ms(n),Do(n,c,!1);break;case"textarea":ms(n),Or(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Oe(c.value));break;case"select":n.multiple=!!c.multiple,d=c.value,d!=null?yn(n,!!c.multiple,d,!1):c.defaultValue!=null&&yn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ll)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vt(i),null;case 6:if(n&&i.stateNode!=null)gm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Qi(da.current),Qi(Gn.current),zl(i)){if(c=i.stateNode,a=i.memoizedProps,c[qn]=i,(d=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:xl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xl(c.nodeValue,a,(n.mode&1)!==0)}d&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qn]=i,i.stateNode=c}return Vt(i),null;case 13:if(We(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&sn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)vp(),Ws(),i.flags|=98560,d=!1;else if(d=zl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!d)throw Error(t(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(t(317));d[qn]=i}else Ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vt(i),d=!1}else Tn!==null&&(Mh(Tn),Tn=null),d=!0;if(!d)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xe.current&1)!==0?pt===0&&(pt=3):Uh())),i.updateQueue!==null&&(i.flags|=4),Vt(i),null);case 4:return Xs(),Ah(n,i),n===null&&oa(i.stateNode.containerInfo),Vt(i),null;case 10:return Zc(i.type._context),Vt(i),null;case 17:return Ht(i.type)&&bl(),Vt(i),null;case 19:if(We(Xe),d=i.memoizedState,d===null)return Vt(i),null;if(c=(i.flags&128)!==0,v=d.rendering,v===null)if(c)_a(d,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Kl(n),v!==null){for(i.flags|=128,_a(d,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)d=a,n=c,d.flags&=14680066,v=d.alternate,v===null?(d.childLanes=0,d.lanes=n,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=v.childLanes,d.lanes=v.lanes,d.child=v.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=v.memoizedProps,d.memoizedState=v.memoizedState,d.updateQueue=v.updateQueue,d.type=v.type,n=v.dependencies,d.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return ze(Xe,Xe.current&1|2),i.child}n=n.sibling}d.tail!==null&&qe()>to&&(i.flags|=128,c=!0,_a(d,!1),i.lanes=4194304)}else{if(!c)if(n=Kl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),_a(d,!0),d.tail===null&&d.tailMode==="hidden"&&!v.alternate&&!Ye)return Vt(i),null}else 2*qe()-d.renderingStartTime>to&&a!==1073741824&&(i.flags|=128,c=!0,_a(d,!1),i.lanes=4194304);d.isBackwards?(v.sibling=i.child,i.child=v):(a=d.last,a!==null?a.sibling=v:i.child=v,d.last=v)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=qe(),i.sibling=null,a=Xe.current,ze(Xe,c?a&1|2:a&1),i):(Vt(i),null);case 22:case 23:return Fh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(on&1073741824)!==0&&(Vt(i),i.subtreeFlags&6&&(i.flags|=8192)):Vt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function nw(n,i){switch(Wc(i),i.tag){case 1:return Ht(i.type)&&bl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),We($t),We(Dt),oh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ih(i),null;case 13:if(We(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return We(Xe),null;case 4:return Xs(),null;case 10:return Zc(i.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var ru=!1,xt=!1,rw=typeof WeakSet=="function"?WeakSet:Set,re=null;function Zs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Ch(n,i,a){try{a()}catch(c){tt(n,i,c)}}var ym=!1;function iw(n,i){if(Fc=hr,n=Qd(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,d=c.focusNode;c=c.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,P=-1,U=0,G=0,K=n,H=null;t:for(;;){for(var ee;K!==a||f!==0&&K.nodeType!==3||(T=v+f),K!==d||c!==0&&K.nodeType!==3||(P=v+c),K.nodeType===3&&(v+=K.nodeValue.length),(ee=K.firstChild)!==null;)H=K,K=ee;for(;;){if(K===n)break t;if(H===a&&++U===f&&(T=v),H===d&&++G===c&&(P=v),(ee=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=ee}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},hr=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var ie=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,it=ie.memoizedState,L=i.stateNode,D=L.getSnapshotBeforeUpdate(i.elementType===i.type?se:In(i.type,se),it);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){tt(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return ie=ym,ym=!1,ie}function va(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var d=f.destroy;f.destroy=void 0,d!==void 0&&Ch(i,a,d)}f=f.next}while(f!==c)}}function iu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Rh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function _m(n){var i=n.alternate;i!==null&&(n.alternate=null,_m(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qn],delete i[la],delete i[$c],delete i[jE],delete i[BE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function vm(n){return n.tag===5||n.tag===3||n.tag===4}function Em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||vm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ph(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ll));else if(c!==4&&(n=n.child,n!==null))for(Ph(n,i,a),n=n.sibling;n!==null;)Ph(n,i,a),n=n.sibling}function kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kh(n,i,a),n=n.sibling;n!==null;)kh(n,i,a),n=n.sibling}var It=null,Sn=!1;function ei(n,i,a){for(a=a.child;a!==null;)wm(n,i,a),a=a.sibling}function wm(n,i,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Li,a)}catch{}switch(a.tag){case 5:xt||Zs(a,i);case 6:var c=It,f=Sn;It=null,ei(n,i,a),It=c,Sn=f,It!==null&&(Sn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Sn?(n=It,a=a.stateNode,n.nodeType===8?zc(n.parentNode,a):n.nodeType===1&&zc(n,a),Hr(n)):zc(It,a.stateNode));break;case 4:c=It,f=Sn,It=a.stateNode.containerInfo,Sn=!0,ei(n,i,a),It=c,Sn=f;break;case 0:case 11:case 14:case 15:if(!xt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var d=f,v=d.destroy;d=d.tag,v!==void 0&&((d&2)!==0||(d&4)!==0)&&Ch(a,i,v),f=f.next}while(f!==c)}ei(n,i,a);break;case 1:if(!xt&&(Zs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){tt(a,i,T)}ei(n,i,a);break;case 21:ei(n,i,a);break;case 22:a.mode&1?(xt=(c=xt)||a.memoizedState!==null,ei(n,i,a),xt=c):ei(n,i,a);break;default:ei(n,i,a)}}function Tm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new rw),i.forEach(function(c){var f=dw.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function An(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var d=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Sn=!1;break e;case 3:It=T.stateNode.containerInfo,Sn=!0;break e;case 4:It=T.stateNode.containerInfo,Sn=!0;break e}T=T.return}if(It===null)throw Error(t(160));wm(d,v,f),It=null,Sn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(U){tt(f,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Im(i,n),i=i.sibling}function Im(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(i,n),Kn(n),c&4){try{va(3,n,n.return),iu(3,n)}catch(se){tt(n,n.return,se)}try{va(5,n,n.return)}catch(se){tt(n,n.return,se)}}break;case 1:An(i,n),Kn(n),c&512&&a!==null&&Zs(a,a.return);break;case 5:if(An(i,n),Kn(n),c&512&&a!==null&&Zs(a,a.return),n.flags&32){var f=n.stateNode;try{Ni(f,"")}catch(se){tt(n,n.return,se)}}if(c&4&&(f=n.stateNode,f!=null)){var d=n.memoizedProps,v=a!==null?a.memoizedProps:d,T=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{T==="input"&&d.type==="radio"&&d.name!=null&&ys(f,d),Es(T,v);var U=Es(T,d);for(v=0;v<P.length;v+=2){var G=P[v],K=P[v+1];G==="style"?vs(f,K):G==="dangerouslySetInnerHTML"?ll(f,K):G==="children"?Ni(f,K):we(f,G,K,U)}switch(T){case"input":ki(f,d);break;case"textarea":al(f,d);break;case"select":var H=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!d.multiple;var ee=d.value;ee!=null?yn(f,!!d.multiple,ee,!1):H!==!!d.multiple&&(d.defaultValue!=null?yn(f,!!d.multiple,d.defaultValue,!0):yn(f,!!d.multiple,d.multiple?[]:"",!1))}f[la]=d}catch(se){tt(n,n.return,se)}}break;case 6:if(An(i,n),Kn(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,d=n.memoizedProps;try{f.nodeValue=d}catch(se){tt(n,n.return,se)}}break;case 3:if(An(i,n),Kn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Hr(i.containerInfo)}catch(se){tt(n,n.return,se)}break;case 4:An(i,n),Kn(n);break;case 13:An(i,n),Kn(n),f=n.child,f.flags&8192&&(d=f.memoizedState!==null,f.stateNode.isHidden=d,!d||f.alternate!==null&&f.alternate.memoizedState!==null||(Oh=qe())),c&4&&Tm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(xt=(U=xt)||G,An(i,n),xt=U):An(i,n),Kn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!G&&(n.mode&1)!==0)for(re=n,G=n.child;G!==null;){for(K=re=G;re!==null;){switch(H=re,ee=H.child,H.tag){case 0:case 11:case 14:case 15:va(4,H,H.return);break;case 1:Zs(H,H.return);var ie=H.stateNode;if(typeof ie.componentWillUnmount=="function"){c=H,a=H.return;try{i=c,ie.props=i.memoizedProps,ie.state=i.memoizedState,ie.componentWillUnmount()}catch(se){tt(c,a,se)}}break;case 5:Zs(H,H.return);break;case 22:if(H.memoizedState!==null){Cm(K);continue}}ee!==null?(ee.return=H,re=ee):Cm(K)}G=G.sibling}e:for(G=null,K=n;;){if(K.tag===5){if(G===null){G=K;try{f=K.stateNode,U?(d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(T=K.stateNode,P=K.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,T.style.display=Lr("display",v))}catch(se){tt(n,n.return,se)}}}else if(K.tag===6){if(G===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(se){tt(n,n.return,se)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;G===K&&(G=null),K=K.return}G===K&&(G=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:An(i,n),Kn(n),c&4&&Tm(n);break;case 21:break;default:An(i,n),Kn(n)}}function Kn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(vm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ni(f,""),c.flags&=-33);var d=Em(n);kh(n,d,f);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Em(n);Ph(n,T,v);break;default:throw Error(t(161))}}catch(P){tt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function sw(n,i,a){re=n,Sm(n)}function Sm(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var f=re,d=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||ru;if(!v){var T=f.alternate,P=T!==null&&T.memoizedState!==null||xt;T=ru;var U=xt;if(ru=v,(xt=P)&&!U)for(re=f;re!==null;)v=re,P=v.child,v.tag===22&&v.memoizedState!==null?Rm(f):P!==null?(P.return=v,re=P):Rm(f);for(;d!==null;)re=d,Sm(d),d=d.sibling;re=f,ru=T,xt=U}Am(n)}else(f.subtreeFlags&8772)!==0&&d!==null?(d.return=f,re=d):Am(n)}}function Am(n){for(;re!==null;){var i=re;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xt||iu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!xt)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:In(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var d=i.updateQueue;d!==null&&Cp(i,d,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Cp(i,v,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var K=G.dehydrated;K!==null&&Hr(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xt||i.flags&512&&Rh(i)}catch(H){tt(i,i.return,H)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function Cm(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function Rm(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{iu(4,i)}catch(P){tt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(P){tt(i,f,P)}}var d=i.return;try{Rh(i)}catch(P){tt(i,d,P)}break;case 5:var v=i.return;try{Rh(i)}catch(P){tt(i,v,P)}}}catch(P){tt(i,i.return,P)}if(i===n){re=null;break}var T=i.sibling;if(T!==null){T.return=i.return,re=T;break}re=i.return}}var ow=Math.ceil,su=Pe.ReactCurrentDispatcher,Nh=Pe.ReactCurrentOwner,pn=Pe.ReactCurrentBatchConfig,Ve=0,_t=null,ut=null,St=0,on=0,eo=Qr(0),pt=0,Ea=null,Xi=0,ou=0,Dh=0,wa=null,Gt=null,Oh=0,to=1/0,wr=null,au=!1,Vh=null,ti=null,lu=!1,ni=null,uu=0,Ta=0,xh=null,cu=-1,hu=0;function zt(){return(Ve&6)!==0?qe():cu!==-1?cu:cu=qe()}function ri(n){return(n.mode&1)===0?1:(Ve&2)!==0&&St!==0?St&-St:$E.transition!==null?(hu===0&&(hu=$o()),hu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:Ns(n.type)),n)}function Cn(n,i,a,c){if(50<Ta)throw Ta=0,xh=null,Error(t(185));Ui(n,a,c),((Ve&2)===0||n!==_t)&&(n===_t&&((Ve&2)===0&&(ou|=a),pt===4&&ii(n,St)),Wt(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(to=qe()+500,Ul&&Xr()))}function Wt(n,i){var a=n.callbackNode;Fi(n,i);var c=lr(n,n===_t?St:0);if(c===0)a!==null&&Is(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Is(a),i===1)n.tag===0?zE(km.bind(null,n)):pp(km.bind(null,n)),FE(function(){(Ve&6)===0&&Xr()}),a=null;else{switch(Ln(c)){case 1:a=Ss;break;case 4:a=jo;break;case 16:a=xi;break;case 536870912:a=As;break;default:a=xi}a=bm(a,Pm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Pm(n,i){if(cu=-1,hu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(no()&&n.callbackNode!==a)return null;var c=lr(n,n===_t?St:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=fu(n,c);else{i=c;var f=Ve;Ve|=2;var d=Dm();(_t!==n||St!==i)&&(wr=null,to=qe()+500,Zi(n,i));do try{uw();break}catch(T){Nm(n,T)}while(!0);Jc(),su.current=d,Ve=f,ut!==null?i=0:(_t=null,St=0,i=pt)}if(i!==0){if(i===2&&(f=zo(n),f!==0&&(c=f,i=Lh(n,f))),i===1)throw a=Ea,Zi(n,0),ii(n,c),Wt(n,qe()),a;if(i===6)ii(n,c);else{if(f=n.current.alternate,(c&30)===0&&!aw(f)&&(i=fu(n,c),i===2&&(d=zo(n),d!==0&&(c=d,i=Lh(n,d))),i===1))throw a=Ea,Zi(n,0),ii(n,c),Wt(n,qe()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:es(n,Gt,wr);break;case 3:if(ii(n,c),(c&130023424)===c&&(i=Oh+500-qe(),10<i)){if(lr(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){zt(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Bc(es.bind(null,n,Gt,wr),i);break}es(n,Gt,wr);break;case 4:if(ii(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var v=31-Jt(c);d=1<<v,v=i[v],v>f&&(f=v),c&=~d}if(c=f,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ow(c/1960))-c,10<c){n.timeoutHandle=Bc(es.bind(null,n,Gt,wr),c);break}es(n,Gt,wr);break;case 5:es(n,Gt,wr);break;default:throw Error(t(329))}}}return Wt(n,qe()),n.callbackNode===a?Pm.bind(null,n):null}function Lh(n,i){var a=wa;return n.current.memoizedState.isDehydrated&&(Zi(n,i).flags|=256),n=fu(n,i),n!==2&&(i=Gt,Gt=a,i!==null&&Mh(i)),n}function Mh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function aw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],d=f.getSnapshot;f=f.value;try{if(!wn(d(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ii(n,i){for(i&=~Dh,i&=~ou,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Jt(i),c=1<<a;n[a]=-1,i&=~c}}function km(n){if((Ve&6)!==0)throw Error(t(327));no();var i=lr(n,0);if((i&1)===0)return Wt(n,qe()),null;var a=fu(n,i);if(n.tag!==0&&a===2){var c=zo(n);c!==0&&(i=c,a=Lh(n,c))}if(a===1)throw a=Ea,Zi(n,0),ii(n,i),Wt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,es(n,Gt,wr),Wt(n,qe()),null}function bh(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(to=qe()+500,Ul&&Xr())}}function Ji(n){ni!==null&&ni.tag===0&&(Ve&6)===0&&no();var i=Ve;Ve|=1;var a=pn.transition,c=Ne;try{if(pn.transition=null,Ne=1,n)return n()}finally{Ne=c,pn.transition=a,Ve=i,(Ve&6)===0&&Xr()}}function Fh(){on=eo.current,We(eo)}function Zi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,bE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bl();break;case 3:Xs(),We($t),We(Dt),oh();break;case 5:ih(c);break;case 4:Xs();break;case 13:We(Xe);break;case 19:We(Xe);break;case 10:Zc(c.type._context);break;case 22:case 23:Fh()}a=a.return}if(_t=n,ut=n=si(n.current,null),St=on=i,pt=0,Ea=null,Dh=ou=Xi=0,Gt=wa=null,Ki!==null){for(i=0;i<Ki.length;i++)if(a=Ki[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,d=a.pending;if(d!==null){var v=d.next;d.next=f,c.next=v}a.pending=c}Ki=null}return n}function Nm(n,i){do{var a=ut;try{if(Jc(),Ql.current=Zl,Yl){for(var c=Je.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Yl=!1}if(Yi=0,yt=dt=Je=null,pa=!1,ma=0,Nh.current=null,a===null||a.return===null){pt=1,Ea=i,ut=null;break}e:{var d=n,v=a.return,T=a,P=i;if(i=St,T.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,G=T,K=G.tag;if((G.mode&1)===0&&(K===0||K===11||K===15)){var H=G.alternate;H?(G.updateQueue=H.updateQueue,G.memoizedState=H.memoizedState,G.lanes=H.lanes):(G.updateQueue=null,G.memoizedState=null)}var ee=tm(v);if(ee!==null){ee.flags&=-257,nm(ee,v,T,d,i),ee.mode&1&&em(d,U,i),i=ee,P=U;var ie=i.updateQueue;if(ie===null){var se=new Set;se.add(P),i.updateQueue=se}else ie.add(P);break e}else{if((i&1)===0){em(d,U,i),Uh();break e}P=Error(t(426))}}else if(Ye&&T.mode&1){var it=tm(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),nm(it,v,T,d,i),Yc(Js(P,T));break e}}d=P=Js(P,T),pt!==4&&(pt=2),wa===null?wa=[d]:wa.push(d),d=v;do{switch(d.tag){case 3:d.flags|=65536,i&=-i,d.lanes|=i;var L=Jp(d,P,i);Ap(d,L);break e;case 1:T=P;var D=d.type,b=d.stateNode;if((d.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ti===null||!ti.has(b)))){d.flags|=65536,i&=-i,d.lanes|=i;var Y=Zp(d,T,i);Ap(d,Y);break e}}d=d.return}while(d!==null)}Vm(a)}catch(oe){i=oe,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function Dm(){var n=su.current;return su.current=Zl,n===null?Zl:n}function Uh(){(pt===0||pt===3||pt===2)&&(pt=4),_t===null||(Xi&268435455)===0&&(ou&268435455)===0||ii(_t,St)}function fu(n,i){var a=Ve;Ve|=2;var c=Dm();(_t!==n||St!==i)&&(wr=null,Zi(n,i));do try{lw();break}catch(f){Nm(n,f)}while(!0);if(Jc(),Ve=a,su.current=c,ut!==null)throw Error(t(261));return _t=null,St=0,pt}function lw(){for(;ut!==null;)Om(ut)}function uw(){for(;ut!==null&&!Vi();)Om(ut)}function Om(n){var i=Mm(n.alternate,n,on);n.memoizedProps=n.pendingProps,i===null?Vm(n):ut=i,Nh.current=null}function Vm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=tw(a,i,on),a!==null){ut=a;return}}else{if(a=nw(a,i),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=n}while(i!==null);pt===0&&(pt=5)}function es(n,i,a){var c=Ne,f=pn.transition;try{pn.transition=null,Ne=1,cw(n,i,a,c)}finally{pn.transition=f,Ne=c}return null}function cw(n,i,a,c){do no();while(ni!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var d=a.lanes|a.childLanes;if(Ac(n,d),n===_t&&(ut=_t=null,St=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||lu||(lu=!0,bm(xi,function(){return no(),null})),d=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||d){d=pn.transition,pn.transition=null;var v=Ne;Ne=1;var T=Ve;Ve|=4,Nh.current=null,iw(n,a),Im(a,n),NE(Uc),hr=!!Fc,Uc=Fc=null,n.current=a,sw(a),ar(),Ve=T,Ne=v,pn.transition=d}else n.current=a;if(lu&&(lu=!1,ni=n,uu=f),d=n.pendingLanes,d===0&&(ti=null),vl(a.stateNode),Wt(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(au)throw au=!1,n=Vh,Vh=null,n;return(uu&1)!==0&&n.tag!==0&&no(),d=n.pendingLanes,(d&1)!==0?n===xh?Ta++:(Ta=0,xh=n):Ta=0,Xr(),null}function no(){if(ni!==null){var n=Ln(uu),i=pn.transition,a=Ne;try{if(pn.transition=null,Ne=16>n?16:n,ni===null)var c=!1;else{if(n=ni,ni=null,uu=0,(Ve&6)!==0)throw Error(t(331));var f=Ve;for(Ve|=4,re=n.current;re!==null;){var d=re,v=d.child;if((re.flags&16)!==0){var T=d.deletions;if(T!==null){for(var P=0;P<T.length;P++){var U=T[P];for(re=U;re!==null;){var G=re;switch(G.tag){case 0:case 11:case 15:va(8,G,d)}var K=G.child;if(K!==null)K.return=G,re=K;else for(;re!==null;){G=re;var H=G.sibling,ee=G.return;if(_m(G),G===U){re=null;break}if(H!==null){H.return=ee,re=H;break}re=ee}}}var ie=d.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var it=se.sibling;se.sibling=null,se=it}while(se!==null)}}re=d}}if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,re=v;else e:for(;re!==null;){if(d=re,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:va(9,d,d.return)}var L=d.sibling;if(L!==null){L.return=d.return,re=L;break e}re=d.return}}var D=n.current;for(re=D;re!==null;){v=re;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,re=b;else e:for(v=D;re!==null;){if(T=re,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:iu(9,T)}}catch(oe){tt(T,T.return,oe)}if(T===v){re=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,re=Y;break e}re=T.return}}if(Ve=f,Xr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Li,n)}catch{}c=!0}return c}finally{Ne=a,pn.transition=i}}return!1}function xm(n,i,a){i=Js(a,i),i=Jp(n,i,1),n=Zr(n,i,1),i=zt(),n!==null&&(Ui(n,1,i),Wt(n,i))}function tt(n,i,a){if(n.tag===3)xm(n,n,a);else for(;i!==null;){if(i.tag===3){xm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){n=Js(a,n),n=Zp(i,n,1),i=Zr(i,n,1),n=zt(),i!==null&&(Ui(i,1,n),Wt(i,n));break}}i=i.return}}function hw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=zt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(pt===4||pt===3&&(St&130023424)===St&&500>qe()-Oh?Zi(n,0):Dh|=a),Wt(n,i)}function Lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Br,Br<<=1,(Br&130023424)===0&&(Br=4194304)));var a=zt();n=_r(n,i),n!==null&&(Ui(n,i,a),Wt(n,a))}function fw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Lm(n,a)}function dw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Lm(n,a)}var Mm;Mm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||$t.current)qt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return qt=!1,ew(n,i,a);qt=(n.flags&131072)!==0}else qt=!1,Ye&&(i.flags&1048576)!==0&&mp(i,Bl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nu(n,i),n=i.pendingProps;var f=Hs(i,Dt.current);Ys(i,a),f=uh(null,i,c,n,f,a);var d=ch();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ht(c)?(d=!0,Fl(i)):d=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,nh(i),f.updater=eu,i.stateNode=f,f._reactInternals=i,gh(i,c,n,a),i=Eh(null,i,c,!0,d,a)):(i.tag=0,Ye&&d&&Gc(i),Bt(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nu(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=mw(c),n=In(c,n),f){case 0:i=vh(null,i,c,n,a);break e;case 1:i=lm(null,i,c,n,a);break e;case 11:i=rm(null,i,c,n,a);break e;case 14:i=im(null,i,c,In(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:In(c,f),vh(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:In(c,f),lm(n,i,c,f,a);case 3:e:{if(um(i),n===null)throw Error(t(387));c=i.pendingProps,d=i.memoizedState,f=d.element,Sp(n,i),Wl(i,c,null,a);var v=i.memoizedState;if(c=v.element,d.isDehydrated)if(d={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){f=Js(Error(t(423)),i),i=cm(n,i,c,a,f);break e}else if(c!==f){f=Js(Error(t(424)),i),i=cm(n,i,c,a,f);break e}else for(sn=Kr(i.stateNode.containerInfo.firstChild),rn=i,Ye=!0,Tn=null,a=Tp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===f){i=Er(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return Rp(i),n===null&&Qc(i),c=i.type,f=i.pendingProps,d=n!==null?n.memoizedProps:null,v=f.children,jc(c,f)?v=null:d!==null&&jc(c,d)&&(i.flags|=32),am(n,i),Bt(n,i,v,a),i.child;case 6:return n===null&&Qc(i),null;case 13:return hm(n,i,a);case 4:return rh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ks(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:In(c,f),rm(n,i,c,f,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,d=i.memoizedProps,v=f.value,ze(Hl,c._currentValue),c._currentValue=v,d!==null)if(wn(d.value,v)){if(d.children===f.children&&!$t.current){i=Er(n,i,a);break e}}else for(d=i.child,d!==null&&(d.return=i);d!==null;){var T=d.dependencies;if(T!==null){v=d.child;for(var P=T.firstContext;P!==null;){if(P.context===c){if(d.tag===1){P=vr(-1,a&-a),P.tag=2;var U=d.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?P.next=P:(P.next=G.next,G.next=P),U.pending=P}}d.lanes|=a,P=d.alternate,P!==null&&(P.lanes|=a),eh(d.return,a,i),T.lanes|=a;break}P=P.next}}else if(d.tag===10)v=d.type===i.type?null:d.child;else if(d.tag===18){if(v=d.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),eh(v,a,i),v=d.sibling}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===i){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}Bt(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ys(i,a),f=fn(f),c=c(f),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,f=In(c,i.pendingProps),f=In(c.type,f),im(n,i,c,f,a);case 15:return sm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:In(c,f),nu(n,i),i.tag=1,Ht(c)?(n=!0,Fl(i)):n=!1,Ys(i,a),Yp(i,c,f),gh(i,c,f,a),Eh(null,i,c,!0,n,a);case 19:return dm(n,i,a);case 22:return om(n,i,a)}throw Error(t(156,i.tag))};function bm(n,i){return Uo(n,i)}function pw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,i,a,c){return new pw(n,i,a,c)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mw(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===gt)return 14}return 2}function si(n,i){var a=n.alternate;return a===null?(a=mn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function du(n,i,a,c,f,d){var v=2;if(c=n,typeof n=="function")jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return ts(a.children,f,d,i);case I:v=8,f|=8;break;case R:return n=mn(12,a,i,f|2),n.elementType=R,n.lanes=d,n;case A:return n=mn(13,a,i,f),n.elementType=A,n.lanes=d,n;case Be:return n=mn(19,a,i,f),n.elementType=Be,n.lanes=d,n;case Qe:return pu(a,f,d,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:v=10;break e;case N:v=9;break e;case x:v=11;break e;case gt:v=14;break e;case kt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=mn(v,a,i,f),i.elementType=n,i.type=c,i.lanes=d,i}function ts(n,i,a,c){return n=mn(7,n,c,i),n.lanes=a,n}function pu(n,i,a,c){return n=mn(22,n,c,i),n.elementType=Qe,n.lanes=a,n.stateNode={isHidden:!1},n}function Bh(n,i,a){return n=mn(6,n,null,i),n.lanes=a,n}function zh(n,i,a){return i=mn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function gw(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function $h(n,i,a,c,f,d,v,T,P){return n=new gw(n,i,a,T,P),i===1?(i=1,d===!0&&(i|=8)):i=0,d=mn(3,null,null,i),n.current=d,d.stateNode=n,d.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(d),n}function yw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Fm(n){if(!n)return Yr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return fp(n,a,i)}return i}function Um(n,i,a,c,f,d,v,T,P){return n=$h(a,c,!0,n,f,d,v,T,P),n.context=Fm(null),a=n.current,c=zt(),f=ri(a),d=vr(c,f),d.callback=i??null,Zr(a,d,f),n.current.lanes=f,Ui(n,f,c),Wt(n,c),n}function mu(n,i,a,c){var f=i.current,d=zt(),v=ri(f);return a=Fm(a),i.context===null?i.context=a:i.pendingContext=a,i=vr(d,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Zr(f,i,v),n!==null&&(Cn(n,f,v,d),Gl(n,f,v)),v}function gu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Hh(n,i){jm(n,i),(n=n.alternate)&&jm(n,i)}function _w(){return null}var Bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qh(n){this._internalRoot=n}yu.prototype.render=qh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));mu(n,i,null,null)},yu.prototype.unmount=qh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ji(function(){mu(null,n,null,null)}),i[pr]=null}};function yu(n){this._internalRoot=n}yu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ko();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zt.length&&i!==0&&i<Zt[a].priority;a++);Zt.splice(a,0,n),a===0&&Ps(n)}};function Gh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function vw(n,i,a,c,f){if(f){if(typeof c=="function"){var d=c;c=function(){var U=gu(v);d.call(U)}}var v=Um(i,c,n,0,null,!1,!1,"",zm);return n._reactRootContainer=v,n[pr]=v.current,oa(n.nodeType===8?n.parentNode:n),Ji(),v}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var T=c;c=function(){var U=gu(P);T.call(U)}}var P=$h(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=P,n[pr]=P.current,oa(n.nodeType===8?n.parentNode:n),Ji(function(){mu(i,P,a,c)}),P}function vu(n,i,a,c,f){var d=a._reactRootContainer;if(d){var v=d;if(typeof f=="function"){var T=f;f=function(){var P=gu(v);T.call(P)}}mu(i,v,n,f)}else v=vw(a,i,n,f,c);return gu(v)}Go=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Le(i.pendingLanes);a!==0&&(qo(i,a|1),Wt(i,qe()),(Ve&6)===0&&(to=qe()+500,Xr()))}break;case 13:Ji(function(){var c=_r(n,1);if(c!==null){var f=zt();Cn(c,n,1,f)}}),Hh(n,1)}},Cs=function(n){if(n.tag===13){var i=_r(n,134217728);if(i!==null){var a=zt();Cn(i,n,134217728,a)}Hh(n,134217728)}},Wo=function(n){if(n.tag===13){var i=ri(n),a=_r(n,i);if(a!==null){var c=zt();Cn(a,n,i,c)}Hh(n,i)}},Ko=function(){return Ne},Qo=function(n,i){var a=Ne;try{return Ne=n,i()}finally{Ne=a}},ir=function(n,i,a){switch(i){case"input":if(ki(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Ml(c);if(!f)throw Error(t(90));No(c),ki(c,f)}}}break;case"textarea":al(n,a);break;case"select":i=a.value,i!=null&&yn(n,!!a.multiple,i,!1)}},cl=bh,hl=Ji;var Ew={usingClientEntryPoint:!1,Events:[ua,zs,Ml,br,Fr,bh]},Ia={findFiberByHostInstance:Hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ww={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_l(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||_w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{Li=Eu.inject(ww),Xt=Eu}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew,Kt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(i))throw Error(t(200));return yw(n,i,null,a)},Kt.createRoot=function(n,i){if(!Gh(n))throw Error(t(299));var a=!1,c="",f=Bm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=$h(n,1,!1,null,null,a,!1,c,f),n[pr]=i.current,oa(n.nodeType===8?n.parentNode:n),new qh(i)},Kt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_l(i),n=n===null?null:n.stateNode,n},Kt.flushSync=function(n){return Ji(n)},Kt.hydrate=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!0,a)},Kt.hydrateRoot=function(n,i,a){if(!Gh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,d="",v=Bm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Um(i,null,n,1,a??null,f,!1,d,v),n[pr]=i.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new yu(i)},Kt.render=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!1,a)},Kt.unmountComponentAtNode=function(n){if(!_u(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){vu(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},Kt.unstable_batchedUpdates=bh,Kt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_u(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vu(n,i,a,!1,c)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var Ym;function Nw(){if(Ym)return Qh.exports;Ym=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Qh.exports=kw(),Qh.exports}var Xm;function Dw(){if(Xm)return wu;Xm=1;var r=Nw();return wu.createRoot=r.createRoot,wu.hydrateRoot=r.hydrateRoot,wu}var Ow=Dw();const iR=$y(Ow),Vw=()=>{};var Jm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},xw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],m=r[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,y=o+2<r.length,_=y?r[o+2]:0,w=u>>2,S=(u&3)<<4|m>>4;let C=(m&15)<<2|_>>6,F=_&63;y||(F=64,h||(C=64)),s.push(t[w],t[S],t[C],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Hy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):xw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],m=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||m==null||_==null||S==null)throw new Lw;const C=u<<2|m>>4;if(s.push(C),_!==64){const F=m<<4&240|_>>2;if(s.push(F),S!==64){const W=_<<6&192|S;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Lw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mw=function(r){const e=Hy(r);return qy.encodeByteArray(e,!0)},Uu=function(r){return Mw(r).replace(/\./g,"")},Gy=function(r){try{return qy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=()=>bw().__FIREBASE_DEFAULTS__,Uw=()=>{if(typeof process>"u"||typeof Jm>"u")return;const r=Jm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},jw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Gy(r[1]);return e&&JSON.parse(e)},sc=()=>{try{return Vw()||Fw()||Uw()||jw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Wy=r=>{var e,t;return(t=(e=sc())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Bw=r=>{const e=Wy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ky=()=>{var r;return(r=sc())==null?void 0:r.config},Qy=r=>{var e;return(e=sc())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yy(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Uu(JSON.stringify(t)),Uu(JSON.stringify(h)),""].join(".")}const ka={};function Hw(){const r={prod:[],emulator:[]};for(const e of Object.keys(ka))ka[e]?r.emulator.push(e):r.prod.push(e);return r}function qw(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Zm=!1;function Xy(r,e){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||ka[r]===e||ka[r]||Zm)return;ka[r]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=Hw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,F){C.setAttribute("width","24"),C.setAttribute("id",F),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Zm=!0,h()},C}function w(C,F){C.setAttribute("id",F),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function S(){const C=qw(s),F=t("text"),W=document.getElementById(F)||document.createElement("span"),Q=t("learnmore"),q=document.getElementById(Q)||document.createElement("a"),_e=t("preprendIcon"),pe=document.getElementById(_e)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const we=C.element;m(we),w(q,Q);const Pe=_();y(pe,_e),we.append(pe,W,q,Pe),document.body.appendChild(we)}u?(W.innerText="Preview backend disconnected.",pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(pe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function Ww(){var e;const r=(e=sc())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Kw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xw(){const r=Ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Jw(){return!Ww()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zw(){try{return typeof indexedDB=="object"}catch{return!1}}function eT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="FirebaseError";class Nr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tT,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?nT(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Nr(o,m,s)}}function nT(r,e){return r.replace(rT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const rT=/\{\$([^}]+)}/g;function iT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function as(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(eg(u)&&eg(h)){if(!as(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function eg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function sT(r,e){const t=new oT(r,e);return t.subscribe.bind(t)}class oT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");aT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Jh),o.error===void 0&&(o.error=Jh),o.complete===void 0&&(o.complete=Jh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Jh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(r){return r&&r._delegate?r._delegate:r}class ls{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new zw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cT(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uT(r){return r===ns?void 0:r}function cT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ae||(Ae={}));const fT={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},dT=Ae.INFO,pT={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},mT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=pT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bf{constructor(e){this.name=e,this._logLevel=dT,this._logHandler=mT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const gT=(r,e)=>e.some(t=>r instanceof t);let tg,ng;function yT(){return tg||(tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _T(){return ng||(ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jy=new WeakMap,hf=new WeakMap,Zy=new WeakMap,Zh=new WeakMap,Ff=new WeakMap;function vT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(pi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Jy.set(t,r)}).catch(()=>{}),Ff.set(e,r),e}function ET(r){if(hf.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});hf.set(r,e)}let ff={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return hf.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Zy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function wT(r){ff=r(ff)}function TT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ef(this),e,...t);return Zy.set(s,e.sort?e.sort():[e]),pi(s)}:_T().includes(r)?function(...e){return r.apply(ef(this),e),pi(Jy.get(this))}:function(...e){return pi(r.apply(ef(this),e))}}function IT(r){return typeof r=="function"?TT(r):(r instanceof IDBTransaction&&ET(r),gT(r,yT())?new Proxy(r,ff):r)}function pi(r){if(r instanceof IDBRequest)return vT(r);if(Zh.has(r))return Zh.get(r);const e=IT(r);return e!==r&&(Zh.set(r,e),Ff.set(e,r)),e}const ef=r=>Ff.get(r);function ST(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),m=pi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(pi(h.result),y.oldVersion,y.newVersion,pi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const AT=["get","getKey","getAll","getAllKeys","count"],CT=["put","add","delete","clear"],tf=new Map;function rg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=CT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||AT.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return tf.set(e,u),u}wT(r=>({...r,get:(e,t,s)=>rg(e,t)||r.get(e,t,s),has:(e,t)=>!!rg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function PT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const df="@firebase/app",ig="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new bf("@firebase/app"),kT="@firebase/app-compat",NT="@firebase/analytics-compat",DT="@firebase/analytics",OT="@firebase/app-check-compat",VT="@firebase/app-check",xT="@firebase/auth",LT="@firebase/auth-compat",MT="@firebase/database",bT="@firebase/data-connect",FT="@firebase/database-compat",UT="@firebase/functions",jT="@firebase/functions-compat",BT="@firebase/installations",zT="@firebase/installations-compat",$T="@firebase/messaging",HT="@firebase/messaging-compat",qT="@firebase/performance",GT="@firebase/performance-compat",WT="@firebase/remote-config",KT="@firebase/remote-config-compat",QT="@firebase/storage",YT="@firebase/storage-compat",XT="@firebase/firestore",JT="@firebase/ai",ZT="@firebase/firestore-compat",eI="firebase",tI="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="[DEFAULT]",nI={[df]:"fire-core",[kT]:"fire-core-compat",[DT]:"fire-analytics",[NT]:"fire-analytics-compat",[VT]:"fire-app-check",[OT]:"fire-app-check-compat",[xT]:"fire-auth",[LT]:"fire-auth-compat",[MT]:"fire-rtdb",[bT]:"fire-data-connect",[FT]:"fire-rtdb-compat",[UT]:"fire-fn",[jT]:"fire-fn-compat",[BT]:"fire-iid",[zT]:"fire-iid-compat",[$T]:"fire-fcm",[HT]:"fire-fcm-compat",[qT]:"fire-perf",[GT]:"fire-perf-compat",[WT]:"fire-rc",[KT]:"fire-rc-compat",[QT]:"fire-gcs",[YT]:"fire-gcs-compat",[XT]:"fire-fst",[ZT]:"fire-fst-compat",[JT]:"fire-vertex","fire-js":"fire-js",[eI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map,rI=new Map,mf=new Map;function sg(r,e){try{r.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function po(r){const e=r.name;if(mf.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;mf.set(e,r);for(const t of ju.values())sg(t,r);for(const t of rI.values())sg(t,r);return!0}function Uf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Rn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new Wa("app","Firebase",iI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=tI;function oI(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:pf,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw mi.create("bad-app-name",{appName:String(o)});if(t||(t=Ky()),!t)throw mi.create("no-options");const u=ju.get(o);if(u){if(as(t,u.options)&&as(s,u.config))return u;throw mi.create("duplicate-app",{appName:o})}const h=new hT(o);for(const y of mf.values())h.addComponent(y);const m=new sI(t,s,h);return ju.set(o,m),m}function e_(r=pf){const e=ju.get(r);if(!e&&r===pf&&Ky())return oI();if(!e)throw mi.create("no-app",{appName:r});return e}function gi(r,e,t){let s=nI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(h.join(" "));return}po(new ls(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="firebase-heartbeat-database",lI=1,Ma="firebase-heartbeat-store";let nf=null;function t_(){return nf||(nf=ST(aI,lI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ma)}catch(t){console.warn(t)}}}}).catch(r=>{throw mi.create("idb-open",{originalErrorMessage:r.message})})),nf}async function uI(r){try{const t=(await t_()).transaction(Ma),s=await t.objectStore(Ma).get(n_(r));return await t.done,s}catch(e){if(e instanceof Nr)Ar.warn(e.message);else{const t=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(t.message)}}}async function og(r,e){try{const s=(await t_()).transaction(Ma,"readwrite");await s.objectStore(Ma).put(e,n_(r)),await s.done}catch(t){if(t instanceof Nr)Ar.warn(t.message);else{const s=mi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ar.warn(s.message)}}}function n_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=1024,hI=30;class fI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=ag();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>hI){const h=mI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ar.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ag(),{heartbeatsToSend:s,unsentEntries:o}=dI(this._heartbeatsCache.heartbeats),u=Uu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ar.warn(t),""}}}function ag(){return new Date().toISOString().substring(0,10)}function dI(r,e=cI){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),lg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),lg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class pI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zw()?eT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return og(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return og(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lg(r){return Uu(JSON.stringify({version:2,heartbeats:r})).length}function mI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(r){po(new ls("platform-logger",e=>new RT(e),"PRIVATE")),po(new ls("heartbeat",e=>new fI(e),"PRIVATE")),gi(df,ig,r),gi(df,ig,"esm2020"),gi("fire-js","")}gI("");function r_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yI=r_,i_=new Wa("auth","Firebase",r_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new bf("@firebase/auth");function _I(r,...e){Bu.logLevel<=Ae.WARN&&Bu.warn(`Auth (${Io}): ${r}`,...e)}function Pu(r,...e){Bu.logLevel<=Ae.ERROR&&Bu.error(`Auth (${Io}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(r,...e){throw Bf(r,...e)}function kn(r,...e){return Bf(r,...e)}function jf(r,e,t){const s={...yI(),[e]:t};return new Wa("auth","Firebase",s).create(e,{appName:r.name})}function ss(r){return jf(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vI(r,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&nr(r,"argument-error"),jf(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return i_.create(r,...e)}function de(r,e,...t){if(!r)throw Bf(e,...t)}function Tr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Pu(e),new Error(e)}function Cr(r,e){r||Tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function EI(){return ug()==="http:"||ug()==="https:"}function ug(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EI()||Qw()||"connection"in navigator)?navigator.onLine:!0}function TI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cr(t>e,"Short delay should be less than long delay!"),this.isMobile=Gw()||Yw()}get(){return wI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(r,e){Cr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],AI=new Qa(3e4,6e4);function $f(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function So(r,e,t,s,o={}){return o_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ka({key:r.config.apiKey,...h}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const _={method:e,headers:y,...u};return Kw()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&To(r.emulatorConfig.host)&&(_.credentials="include"),s_.fetch()(await a_(r,r.config.apiHost,t,m),_)})}async function o_(r,e,t){r._canInitEmulator=!1;const s={...II,...e};try{const o=new RI(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Tu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(r,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Tu(r,"email-already-in-use",h);if(y==="USER_DISABLED")throw Tu(r,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw jf(r,w,_);nr(r,w)}}catch(o){if(o instanceof Nr)throw o;nr(r,"network-request-failed",{message:String(o)})}}async function CI(r,e,t,s,o={}){const u=await So(r,e,t,s,o);return"mfaPendingCredential"in u&&nr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function a_(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?zf(r.config,o):`${r.config.apiScheme}://${o}`;return SI.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class RI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(kn(this.auth,"network-request-failed")),AI.get())})}}function Tu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=kn(r,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(r,e){return So(r,"POST","/v1/accounts:delete",e)}async function zu(r,e){return So(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kI(r,e=!1){const t=Rt(r),s=await t.getIdToken(e),o=Hf(s);de(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Na(rf(o.auth_time)),issuedAtTime:Na(rf(o.iat)),expirationTime:Na(rf(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rf(r){return Number(r)*1e3}function Hf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Gy(t);return o?JSON.parse(o):(Pu("Failed to decode base64 JWT payload"),null)}catch(o){return Pu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function cg(r){const e=Hf(r);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Nr&&NI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function NI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(r){var S;const e=r.auth,t=await r.getIdToken(),s=await ba(r,zu(e,{idToken:t}));de(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?l_(o.providerUserInfo):[],h=VI(r.providerData,u),m=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new yf(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(r,w)}async function OI(r){const e=Rt(r);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function l_(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(r,e){const t=await o_(r,{},async()=>{const s=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await a_(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return r.emulatorConfig&&To(r.emulatorConfig.host)&&(y.credentials="include"),s_.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function LI(r,e){return So(r,"POST","/v2/accounts:revokeToken",$f(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=cg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await xI(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new lo;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(de(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(de(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(r,e){de(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Pn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new DI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new yf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ba(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kI(this,e)}reload(){return OI(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await $u(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(ss(this.auth));const e=await this.getIdToken();return await ba(this,PI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:S,emailVerified:C,isAnonymous:F,providerData:W,stsTokenManager:Q}=t;de(S&&Q,e,"internal-error");const q=lo.fromJSON(this.name,Q);de(typeof S=="string",e,"internal-error"),ai(s,e.name),ai(o,e.name),de(typeof C=="boolean",e,"internal-error"),de(typeof F=="boolean",e,"internal-error"),ai(u,e.name),ai(h,e.name),ai(m,e.name),ai(y,e.name),ai(_,e.name),ai(w,e.name);const _e=new Pn({uid:S,auth:e,email:o,emailVerified:C,displayName:s,isAnonymous:F,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:q,createdAt:_,lastLoginAt:w});return W&&Array.isArray(W)&&(_e.providerData=W.map(pe=>({...pe}))),y&&(_e._redirectEventId=y),_e}static async _fromIdTokenResponse(e,t,s=!1){const o=new lo;o.updateFromServerResponse(t);const u=new Pn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await $u(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];de(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?l_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new lo;m.updateFromIdToken(s);const y=new Pn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new yf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function Ir(r){Cr(r instanceof Function,"Expected a class definition");let e=hg.get(r);return e?(Cr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,hg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}u_.type="NONE";const fg=u_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(r,e,t){return`firebase:${r}:${e}:${t}`}class uo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=ku(this.userKey,o.apiKey,u),this.fullPersistenceKey=ku("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zu(this.auth,{idToken:e}).catch(()=>{});return t?Pn._fromGetAccountInfoResponse(this.auth,t,e):null}return Pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new uo(Ir(fg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ir(fg);const h=ku(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let S;if(typeof w=="string"){const C=await zu(e,{idToken:w}).catch(()=>{});if(!C)break;S=await Pn._fromGetAccountInfoResponse(e,C,w)}else S=Pn._fromJSON(e,w);_!==u&&(m=S),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new uo(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new uo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m_(e))return"Blackberry";if(g_(e))return"Webos";if(h_(e))return"Safari";if((e.includes("chrome/")||f_(e))&&!e.includes("edge/"))return"Chrome";if(p_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function c_(r=Ut()){return/firefox\//i.test(r)}function h_(r=Ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function f_(r=Ut()){return/crios\//i.test(r)}function d_(r=Ut()){return/iemobile/i.test(r)}function p_(r=Ut()){return/android/i.test(r)}function m_(r=Ut()){return/blackberry/i.test(r)}function g_(r=Ut()){return/webos/i.test(r)}function qf(r=Ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function MI(r=Ut()){var e;return qf(r)&&!!((e=window.navigator)!=null&&e.standalone)}function bI(){return Xw()&&document.documentMode===10}function y_(r=Ut()){return qf(r)||p_(r)||g_(r)||m_(r)||/windows phone/i.test(r)||d_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(r,e=[]){let t;switch(r){case"Browser":t=dg(Ut());break;case"Worker":t=`${dg(Ut())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Io}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(r,e={}){return So(r,"GET","/v2/passwordPolicy",$f(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=6;class BI{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pg(this),this.idTokenSubscription=new pg(this),this.beforeStateQueue=new FI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ir(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zu(this,{idToken:e}),s=await Pn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Rn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(ss(this));const t=e?Rt(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UI(this),t=new BI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await LI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ir(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[Ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=__(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&_I(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oc(r){return Rt(r)}class pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=sT(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $I(r){Gf=r}function HI(r){return Gf.loadJS(r)}function qI(){return Gf.gapiScript}function GI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(r,e){const t=Uf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(as(u,e??{}))return o;nr(o,"already-initialized")}return t.initialize({options:e})}function KI(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ir);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function QI(r,e,t){const s=oc(r);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=v_(e),{host:h,port:m}=YI(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(as(_,s.config.emulator)&&as(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,To(h)?(Yy(`${u}//${h}${y}`),Xy("Auth",!0)):XI()}function v_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function YI(r){const e=v_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:mg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:mg(h)}}}function mg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function XI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,t){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(r,e){return CI(r,"POST","/v1/accounts:signInWithIdp",$f(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="http://localhost";class us extends E_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new us(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return co(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,co(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,co(e,t)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends Wf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Ya{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Ya{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Ya{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Pn._fromIdTokenResponse(e,s,o),h=gg(s);return new mo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=gg(s);return new mo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function gg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends Nr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Hu(e,t,s,o)}}function w_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(r,u,e,s):u})}async function ZI(r,e,t=!1){const s=await ba(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return mo._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(r,e,t=!1){const{auth:s}=r;if(Rn(s.app))return Promise.reject(ss(s));const o="reauthenticate";try{const u=await ba(r,w_(s,o,e,r),t);de(u.idToken,s,"internal-error");const h=Hf(u.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(r.uid===m,s,"user-mismatch"),mo._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&nr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(r,e,t=!1){if(Rn(r.app))return Promise.reject(ss(r));const s="signIn",o=await w_(r,s,e),u=await mo._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}function n0(r,e,t,s){return Rt(r).onIdTokenChanged(e,t,s)}function r0(r,e,t){return Rt(r).beforeAuthStateChanged(e,t)}function sR(r,e,t,s){return Rt(r).onAuthStateChanged(e,t,s)}function oR(r){return Rt(r).signOut()}const qu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=1e3,s0=10;class I_ extends T_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);bI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,s0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},i0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}I_.type="LOCAL";const o0=I_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends T_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}S_.type="SESSION";const A_=S_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ac(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await a0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=Kf("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}function u0(r){Yn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function c0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h0(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function f0(){return C_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="firebaseLocalStorageDb",d0=1,Gu="firebaseLocalStorage",P_="fbase_key";class Xa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lc(r,e){return r.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function p0(){const r=indexedDB.deleteDatabase(R_);return new Xa(r).toPromise()}function _f(){const r=indexedDB.open(R_,d0);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Gu,{keyPath:P_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Gu)?e(s):(s.close(),await p0(),e(await _f()))})})}async function yg(r,e,t){const s=lc(r,!0).put({[P_]:e,value:t});return new Xa(s).toPromise()}async function m0(r,e){const t=lc(r,!1).get(e),s=await new Xa(t).toPromise();return s===void 0?null:s.value}function _g(r,e){const t=lc(r,!0).delete(e);return new Xa(t).toPromise()}const g0=800,y0=3;class k_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _f(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>y0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(f0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await c0(),!this.activeServiceWorker)return;this.sender=new l0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _f();return await yg(e,qu,"1"),await _g(e,qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>yg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>m0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_g(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=lc(o,!1).getAll();return new Xa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k_.type="LOCAL";const _0=k_;new Qa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(r,e){return e?Ir(e):(de(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends E_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function v0(r){return t0(r.auth,new Qf(r),r.bypassAuthState)}function E0(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),e0(t,new Qf(r),r.bypassAuthState)}async function w0(r){const{auth:e,user:t}=r;return de(t,e,"internal-error"),ZI(t,new Qf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v0;case"linkViaPopup":case"linkViaRedirect":return w0;case"reauthViaPopup":case"reauthViaRedirect":return E0;default:nr(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=new Qa(2e3,1e4);async function aR(r,e,t){if(Rn(r.app))return Promise.reject(kn(r,"operation-not-supported-in-this-environment"));const s=oc(r);vI(r,e,Wf);const o=N_(s,t);return new rs(s,"signInViaPopup",e,o).executeNotNull()}class rs extends D_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=Kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T0.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="pendingRedirect",Nu=new Map;class S0 extends D_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nu.get(this.auth._key());if(!e){try{const s=await A0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nu.set(this.auth._key(),e)}return this.bypassAuthState||Nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A0(r,e){const t=P0(e),s=R0(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function C0(r,e){Nu.set(r._key(),e)}function R0(r){return Ir(r._redirectPersistence)}function P0(r){return ku(I0,r.config.apiKey,r.name)}async function k0(r,e,t=!1){if(Rn(r.app))return Promise.reject(ss(r));const s=oc(r),o=N_(s,e),h=await new S0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=600*1e3;class D0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!O_(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(kn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N0&&this.cachedEventUids.clear(),this.cachedEventUids.has(vg(e))}saveEventToCache(e){this.cachedEventUids.add(vg(e)),this.lastProcessedEventTime=Date.now()}}function vg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function O_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O0(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(r,e={}){return So(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L0=/^https?/;async function M0(r){if(r.config.emulator)return;const{authorizedDomains:e}=await V0(r);for(const t of e)try{if(b0(t))return}catch{}nr(r,"unauthorized-domain")}function b0(r){const e=gf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!L0.test(t))return!1;if(x0.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=new Qa(3e4,6e4);function Eg(){const r=Yn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function U0(r){return new Promise((e,t)=>{var o,u,h;function s(){Eg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eg(),t(kn(r,"network-request-failed"))},timeout:F0.get()})}if((u=(o=Yn().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Yn().gapi)!=null&&h.load)s();else{const m=GI("iframefcb");return Yn()[m]=()=>{gapi.load?s():t(kn(r,"network-request-failed"))},HI(`${qI()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Du=null,e})}let Du=null;function j0(r){return Du=Du||U0(r),Du}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Qa(5e3,15e3),z0="__/auth/iframe",$0="emulator/auth/iframe",H0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G0(r){const e=r.config;de(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?zf(e,$0):`https://${r.config.authDomain}/${z0}`,s={apiKey:e.apiKey,appName:r.name,v:Io},o=q0.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ka(s).slice(1)}`}async function W0(r){const e=await j0(r),t=Yn().gapi;return de(t,r,"internal-error"),e.open({where:document.body,url:G0(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H0,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=kn(r,"network-request-failed"),m=Yn().setTimeout(()=>{u(h)},B0.get());function y(){Yn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Q0=500,Y0=600,X0="_blank",J0="http://localhost";class wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z0(r,e,t,s=Q0,o=Y0){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...K0,width:s.toString(),height:o.toString(),top:u,left:h},_=Ut().toLowerCase();t&&(m=f_(_)?X0:t),c_(_)&&(e=e||J0,y.scrollbars="yes");const w=Object.entries(y).reduce((C,[F,W])=>`${C}${F}=${W},`,"");if(MI(_)&&m!=="_self")return eS(e||"",m),new wg(null);const S=window.open(e||"",m,w);de(S,r,"popup-blocked");try{S.focus()}catch{}return new wg(S)}function eS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="__/auth/handler",nS="emulator/auth/handler",rS=encodeURIComponent("fac");async function Tg(r,e,t,s,o,u){de(r.config.authDomain,r,"auth-domain-config-required"),de(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Io,eventId:o};if(e instanceof Wf){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",iT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))h[w]=S}if(e instanceof Ya){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await r._getAppCheckToken(),_=y?`#${rS}=${encodeURIComponent(y)}`:"";return`${iS(r)}?${Ka(m).slice(1)}${_}`}function iS({config:r}){return r.emulator?zf(r,nS):`https://${r.authDomain}/${tS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="webStorageSupport";class sS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A_,this._completeRedirectFn=k0,this._overrideRedirectResult=C0}async _openPopup(e,t,s,o){var h;Cr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Tg(e,t,s,gf(),o);return Z0(e,u,Kf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Tg(e,t,s,gf(),o);return u0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Cr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await W0(e),s=new D0(e);return t.register("authEvent",o=>(de(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sf,{type:sf},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[sf];u!==void 0&&t(!!u),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=M0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return y_()||h_()||qf()}}const oS=sS;var Ig="@firebase/auth",Sg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uS(r){po(new ls("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:__(r)},_=new zI(s,o,u,y);return KI(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),po(new ls("auth-internal",e=>{const t=oc(e.getProvider("auth").getImmediate());return(s=>new aS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(Ig,Sg,lS(r)),gi(Ig,Sg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=300,hS=Qy("authIdTokenMaxAge")||cS;let Ag=null;const fS=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>hS)return;const o=t==null?void 0:t.token;Ag!==o&&(Ag=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lR(r=e_()){const e=Uf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=WI(r,{popupRedirectResolver:oS,persistence:[_0,o0,A_]}),s=Qy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=fS(u.toString());r0(t,h,()=>h(t.currentUser)),n0(t,m=>h(m))}}const o=Wy("auth");return o&&QI(t,`http://${o}`),t}function dS(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}$I({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=kn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",dS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uS("Browser");var pS="firebase",mS="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gi(pS,mS,"app");var Cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,V_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,I){function R(){}R.prototype=I.prototype,k.F=I.prototype,k.prototype=new R,k.prototype.constructor=k,k.D=function(O,N,x){for(var A=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)A[Be-2]=arguments[Be];return I.prototype[N].apply(O,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,I,R){R||(R=0);const O=Array(16);if(typeof I=="string")for(var N=0;N<16;++N)O[N]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(N=0;N<16;++N)O[N]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=k.g[0],R=k.g[1],N=k.g[2];let x=k.g[3],A;A=I+(x^R&(N^x))+O[0]+3614090360&4294967295,I=R+(A<<7&4294967295|A>>>25),A=x+(N^I&(R^N))+O[1]+3905402710&4294967295,x=I+(A<<12&4294967295|A>>>20),A=N+(R^x&(I^R))+O[2]+606105819&4294967295,N=x+(A<<17&4294967295|A>>>15),A=R+(I^N&(x^I))+O[3]+3250441966&4294967295,R=N+(A<<22&4294967295|A>>>10),A=I+(x^R&(N^x))+O[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=x+(N^I&(R^N))+O[5]+1200080426&4294967295,x=I+(A<<12&4294967295|A>>>20),A=N+(R^x&(I^R))+O[6]+2821735955&4294967295,N=x+(A<<17&4294967295|A>>>15),A=R+(I^N&(x^I))+O[7]+4249261313&4294967295,R=N+(A<<22&4294967295|A>>>10),A=I+(x^R&(N^x))+O[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=x+(N^I&(R^N))+O[9]+2336552879&4294967295,x=I+(A<<12&4294967295|A>>>20),A=N+(R^x&(I^R))+O[10]+4294925233&4294967295,N=x+(A<<17&4294967295|A>>>15),A=R+(I^N&(x^I))+O[11]+2304563134&4294967295,R=N+(A<<22&4294967295|A>>>10),A=I+(x^R&(N^x))+O[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=x+(N^I&(R^N))+O[13]+4254626195&4294967295,x=I+(A<<12&4294967295|A>>>20),A=N+(R^x&(I^R))+O[14]+2792965006&4294967295,N=x+(A<<17&4294967295|A>>>15),A=R+(I^N&(x^I))+O[15]+1236535329&4294967295,R=N+(A<<22&4294967295|A>>>10),A=I+(N^x&(R^N))+O[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=x+(R^N&(I^R))+O[6]+3225465664&4294967295,x=I+(A<<9&4294967295|A>>>23),A=N+(I^R&(x^I))+O[11]+643717713&4294967295,N=x+(A<<14&4294967295|A>>>18),A=R+(x^I&(N^x))+O[0]+3921069994&4294967295,R=N+(A<<20&4294967295|A>>>12),A=I+(N^x&(R^N))+O[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=x+(R^N&(I^R))+O[10]+38016083&4294967295,x=I+(A<<9&4294967295|A>>>23),A=N+(I^R&(x^I))+O[15]+3634488961&4294967295,N=x+(A<<14&4294967295|A>>>18),A=R+(x^I&(N^x))+O[4]+3889429448&4294967295,R=N+(A<<20&4294967295|A>>>12),A=I+(N^x&(R^N))+O[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=x+(R^N&(I^R))+O[14]+3275163606&4294967295,x=I+(A<<9&4294967295|A>>>23),A=N+(I^R&(x^I))+O[3]+4107603335&4294967295,N=x+(A<<14&4294967295|A>>>18),A=R+(x^I&(N^x))+O[8]+1163531501&4294967295,R=N+(A<<20&4294967295|A>>>12),A=I+(N^x&(R^N))+O[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=x+(R^N&(I^R))+O[2]+4243563512&4294967295,x=I+(A<<9&4294967295|A>>>23),A=N+(I^R&(x^I))+O[7]+1735328473&4294967295,N=x+(A<<14&4294967295|A>>>18),A=R+(x^I&(N^x))+O[12]+2368359562&4294967295,R=N+(A<<20&4294967295|A>>>12),A=I+(R^N^x)+O[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=x+(I^R^N)+O[8]+2272392833&4294967295,x=I+(A<<11&4294967295|A>>>21),A=N+(x^I^R)+O[11]+1839030562&4294967295,N=x+(A<<16&4294967295|A>>>16),A=R+(N^x^I)+O[14]+4259657740&4294967295,R=N+(A<<23&4294967295|A>>>9),A=I+(R^N^x)+O[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=x+(I^R^N)+O[4]+1272893353&4294967295,x=I+(A<<11&4294967295|A>>>21),A=N+(x^I^R)+O[7]+4139469664&4294967295,N=x+(A<<16&4294967295|A>>>16),A=R+(N^x^I)+O[10]+3200236656&4294967295,R=N+(A<<23&4294967295|A>>>9),A=I+(R^N^x)+O[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=x+(I^R^N)+O[0]+3936430074&4294967295,x=I+(A<<11&4294967295|A>>>21),A=N+(x^I^R)+O[3]+3572445317&4294967295,N=x+(A<<16&4294967295|A>>>16),A=R+(N^x^I)+O[6]+76029189&4294967295,R=N+(A<<23&4294967295|A>>>9),A=I+(R^N^x)+O[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=x+(I^R^N)+O[12]+3873151461&4294967295,x=I+(A<<11&4294967295|A>>>21),A=N+(x^I^R)+O[15]+530742520&4294967295,N=x+(A<<16&4294967295|A>>>16),A=R+(N^x^I)+O[2]+3299628645&4294967295,R=N+(A<<23&4294967295|A>>>9),A=I+(N^(R|~x))+O[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=x+(R^(I|~N))+O[7]+1126891415&4294967295,x=I+(A<<10&4294967295|A>>>22),A=N+(I^(x|~R))+O[14]+2878612391&4294967295,N=x+(A<<15&4294967295|A>>>17),A=R+(x^(N|~I))+O[5]+4237533241&4294967295,R=N+(A<<21&4294967295|A>>>11),A=I+(N^(R|~x))+O[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=x+(R^(I|~N))+O[3]+2399980690&4294967295,x=I+(A<<10&4294967295|A>>>22),A=N+(I^(x|~R))+O[10]+4293915773&4294967295,N=x+(A<<15&4294967295|A>>>17),A=R+(x^(N|~I))+O[1]+2240044497&4294967295,R=N+(A<<21&4294967295|A>>>11),A=I+(N^(R|~x))+O[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=x+(R^(I|~N))+O[15]+4264355552&4294967295,x=I+(A<<10&4294967295|A>>>22),A=N+(I^(x|~R))+O[6]+2734768916&4294967295,N=x+(A<<15&4294967295|A>>>17),A=R+(x^(N|~I))+O[13]+1309151649&4294967295,R=N+(A<<21&4294967295|A>>>11),A=I+(N^(R|~x))+O[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=x+(R^(I|~N))+O[11]+3174756917&4294967295,x=I+(A<<10&4294967295|A>>>22),A=N+(I^(x|~R))+O[2]+718787259&4294967295,N=x+(A<<15&4294967295|A>>>17),A=R+(x^(N|~I))+O[9]+3951481745&4294967295,k.g[0]=k.g[0]+I&4294967295,k.g[1]=k.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+x&4294967295}s.prototype.v=function(k,I){I===void 0&&(I=k.length);const R=I-this.blockSize,O=this.C;let N=this.h,x=0;for(;x<I;){if(N==0)for(;x<=R;)o(this,k,x),x+=this.blockSize;if(typeof k=="string"){for(;x<I;)if(O[N++]=k.charCodeAt(x++),N==this.blockSize){o(this,O),N=0;break}}else for(;x<I;)if(O[N++]=k[x++],N==this.blockSize){o(this,O),N=0;break}}this.h=N,this.o+=I},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var I=1;I<k.length-8;++I)k[I]=0;I=this.o*8;for(var R=k.length-8;R<k.length;++R)k[R]=I&255,I/=256;for(this.v(k),k=Array(16),I=0,R=0;R<4;++R)for(let O=0;O<32;O+=8)k[I++]=this.g[R]>>>O&255;return k};function u(k,I){var R=m;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=I(k)}function h(k,I){this.h=I;const R=[];let O=!0;for(let N=k.length-1;N>=0;N--){const x=k[N]|0;O&&x==I||(R[N]=x,O=!1)}this.g=R}var m={};function y(k){return-128<=k&&k<128?u(k,function(I){return new h([I|0],I<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return S;if(k<0)return q(_(-k));const I=[];let R=1;for(let O=0;k>=R;O++)I[O]=k/R|0,R*=4294967296;return new h(I,0)}function w(k,I){if(k.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(k.charAt(0)=="-")return q(w(k.substring(1),I));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(I,8));let O=S;for(let x=0;x<k.length;x+=8){var N=Math.min(8,k.length-x);const A=parseInt(k.substring(x,x+N),I);N<8?(N=_(Math.pow(I,N)),O=O.j(N).add(_(A))):(O=O.j(R),O=O.add(_(A)))}return O}var S=y(0),C=y(1),F=y(16777216);r=h.prototype,r.m=function(){if(Q(this))return-q(this).m();let k=0,I=1;for(let R=0;R<this.g.length;R++){const O=this.i(R);k+=(O>=0?O:4294967296+O)*I,I*=4294967296}return k},r.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(W(this))return"0";if(Q(this))return"-"+q(this).toString(k);const I=_(Math.pow(k,6));var R=this;let O="";for(;;){const N=Pe(R,I).g;R=_e(R,N.j(I));let x=((R.g.length>0?R.g[0]:R.h)>>>0).toString(k);if(R=N,W(R))return x+O;for(;x.length<6;)x="0"+x;O=x+O}},r.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function W(k){if(k.h!=0)return!1;for(let I=0;I<k.g.length;I++)if(k.g[I]!=0)return!1;return!0}function Q(k){return k.h==-1}r.l=function(k){return k=_e(this,k),Q(k)?-1:W(k)?0:1};function q(k){const I=k.g.length,R=[];for(let O=0;O<I;O++)R[O]=~k.g[O];return new h(R,~k.h).add(C)}r.abs=function(){return Q(this)?q(this):this},r.add=function(k){const I=Math.max(this.g.length,k.g.length),R=[];let O=0;for(let N=0;N<=I;N++){let x=O+(this.i(N)&65535)+(k.i(N)&65535),A=(x>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);O=A>>>16,x&=65535,A&=65535,R[N]=A<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function _e(k,I){return k.add(q(I))}r.j=function(k){if(W(this)||W(k))return S;if(Q(this))return Q(k)?q(this).j(q(k)):q(q(this).j(k));if(Q(k))return q(this.j(q(k)));if(this.l(F)<0&&k.l(F)<0)return _(this.m()*k.m());const I=this.g.length+k.g.length,R=[];for(var O=0;O<2*I;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(let N=0;N<k.g.length;N++){const x=this.i(O)>>>16,A=this.i(O)&65535,Be=k.i(N)>>>16,gt=k.i(N)&65535;R[2*O+2*N]+=A*gt,pe(R,2*O+2*N),R[2*O+2*N+1]+=x*gt,pe(R,2*O+2*N+1),R[2*O+2*N+1]+=A*Be,pe(R,2*O+2*N+1),R[2*O+2*N+2]+=x*Be,pe(R,2*O+2*N+2)}for(k=0;k<I;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=I;k<2*I;k++)R[k]=0;return new h(R,0)};function pe(k,I){for(;(k[I]&65535)!=k[I];)k[I+1]+=k[I]>>>16,k[I]&=65535,I++}function we(k,I){this.g=k,this.h=I}function Pe(k,I){if(W(I))throw Error("division by zero");if(W(k))return new we(S,S);if(Q(k))return I=Pe(q(k),I),new we(q(I.g),q(I.h));if(Q(I))return I=Pe(k,q(I)),new we(q(I.g),I.h);if(k.g.length>30){if(Q(k)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,O=I;O.l(k)<=0;)R=He(R),O=He(O);var N=ke(R,1),x=ke(O,1);for(O=ke(O,2),R=ke(R,2);!W(O);){var A=x.add(O);A.l(k)<=0&&(N=N.add(R),x=A),O=ke(O,1),R=ke(R,1)}return I=_e(k,N.j(I)),new we(N,I)}for(N=S;k.l(I)>=0;){for(R=Math.max(1,Math.floor(k.m()/I.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),x=_(R),A=x.j(I);Q(A)||A.l(k)>0;)R-=O,x=_(R),A=x.j(I);W(x)&&(x=C),N=N.add(x),k=_e(k,A)}return new we(N,k)}r.B=function(k){return Pe(this,k).h},r.and=function(k){const I=Math.max(this.g.length,k.g.length),R=[];for(let O=0;O<I;O++)R[O]=this.i(O)&k.i(O);return new h(R,this.h&k.h)},r.or=function(k){const I=Math.max(this.g.length,k.g.length),R=[];for(let O=0;O<I;O++)R[O]=this.i(O)|k.i(O);return new h(R,this.h|k.h)},r.xor=function(k){const I=Math.max(this.g.length,k.g.length),R=[];for(let O=0;O<I;O++)R[O]=this.i(O)^k.i(O);return new h(R,this.h^k.h)};function He(k){const I=k.g.length+1,R=[];for(let O=0;O<I;O++)R[O]=k.i(O)<<1|k.i(O-1)>>>31;return new h(R,k.h)}function ke(k,I){const R=I>>5;I%=32;const O=k.g.length-R,N=[];for(let x=0;x<O;x++)N[x]=I>0?k.i(x+R)>>>I|k.i(x+R+1)<<32-I:k.i(x+R);return new h(N,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,V_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,yi=h}).apply(typeof Cg<"u"?Cg:typeof self<"u"?self:typeof window<"u"?window:{});var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x_,Aa,L_,Ou,vf,M_,b_,F_;(function(){var r,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Iu=="object"&&Iu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function S(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,M,j){for(var X=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)X[ge-2]=arguments[ge];return p.prototype[M].apply(E,X)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function F(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function W(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const j=M.length||0;l.length=g+j;for(let X=0;X<j;X++)l[g+X]=M[X]}else l.push(M)}}class Q{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function q(l){h.setTimeout(()=>{throw l},0)}function _e(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class pe{constructor(){this.h=this.g=null}add(p,g){const E=we.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var we=new Q(()=>new Pe,l=>l.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let He,ke=!1,k=new pe,I=()=>{const l=Promise.resolve(void 0);He=()=>{l.then(R)}};function R(){for(var l;l=_e();){try{l.h.call(l.g)}catch(g){q(g)}var p=we;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}ke=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var x=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function Be(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}S(Be,N),Be.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var gt="closure_listenable_"+(Math.random()*1e6|0),kt=0;function Qe(l,p,g,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++kt,this.da=this.fa=!1}function J(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function le(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function V(l){const p={};for(const g in l)p[g]=l[g];return p}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ve(l,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let j=0;j<$.length;j++)g=$[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function Ee(l){this.src=l,this.g={},this.h=0}Ee.prototype.add=function(l,p,g,E,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const X=Se(l,p,E,M);return X>-1?(p=l[X],g||(p.fa=!1)):(p=new Qe(p,this.src,j,!!E,M),p.fa=g,l.push(p)),p};function Ie(l,p){const g=p.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(J(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Se(l,p,g,E){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==E)return M}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),Oe={};function Ue(l,p,g,E,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)Ue(l,p[j],g,E,M);return null}return g=Do(g),l&&l[gt]?l.J(p,g,m(E)?!!E.capture:!1,M):jt(l,p,g,!1,E,M)}function jt(l,p,g,E,M,j){if(!p)throw Error("Invalid event type");const X=m(M)?!!M.capture:!!M;let ge=ys(l);if(ge||(l[Me]=ge=new Ee(l)),g=ge.add(p,g,E,X,j),g.proxy)return g;if(E=ms(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)x||(M=X),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(gs(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ms(){function l(g){return p.call(l.src,l.listener,g)}const p=ol;return l}function No(l,p,g,E,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)No(l,p[j],g,E,M);else E=m(E)?!!E.capture:!!E,g=Do(g),l&&l[gt]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],g=Se(p,g,E,M),g>-1&&(J(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=ys(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Se(p,g,E,M)),(g=l>-1?p[l]:null)&&Dr(g))}function Dr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[gt])Ie(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(gs(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=ys(p))?(Ie(g,l),g.h==0&&(g.src=null,p[Me]=null)):J(l)}}}function gs(l){return l in Oe?Oe[l]:Oe[l]="on"+l}function ol(l,p){if(l.da)l=!0;else{p=new Be(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Dr(l),l=g.call(E,p)}return l}function ys(l){return l=l[Me],l instanceof Ee?l:null}var ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function Do(l){return typeof l=="function"?l:(l[ki]||(l[ki]=function(p){return l.handleEvent(p)}),l[ki])}function at(){O.call(this),this.i=new Ee(this),this.M=this,this.G=null}S(at,O),at.prototype[gt]=!0,at.prototype.removeEventListener=function(l,p,g,E){No(this,l,p,g,E)};function nt(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var M=p;p=new N(E,l),ve(p,M)}M=!0;let j,X;if(g)for(X=g.length-1;X>=0;X--)j=p.g=g[X],M=yn(j,E,!0,p)&&M;if(j=p.g=l,M=yn(j,E,!0,p)&&M,M=yn(j,E,!1,p)&&M,g)for(X=0;X<g.length;X++)j=p.g=g[X],M=yn(j,E,!1,p)&&M}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)J(g[E]);delete l.g[p],l.h--}}this.G=null},at.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},at.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function yn(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const X=p[j];if(X&&!X.da&&X.capture==g){const ge=X.listener,rt=X.ha||X.src;X.fa&&Ie(l.i,X),M=ge.call(rt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Oo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Vo(l){l.g=Oo(()=>{l.g=null,l.i&&(l.i=!1,Vo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class al extends O{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(l){O.call(this),this.h=l,this.g={}}S(Or,O);var xo=[];function _s(l){le(l.g,function(p,g){this.g.hasOwnProperty(g)&&Dr(p)},l),l.g={}}Or.prototype.N=function(){Or.Z.N.call(this),_s(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=h.JSON.stringify,ll=h.JSON.parse,Ni=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function xr(){}function ul(){}var Lr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vs(){N.call(this,"d")}S(vs,N);function Lo(){N.call(this,"c")}S(Lo,N);var _n={},Es=null;function Mr(){return Es=Es||new at}_n.Ia="serverreachability";function ws(l){N.call(this,_n.Ia,l)}S(ws,N);function ir(l){const p=Mr();nt(p,new ws(p))}_n.STAT_EVENT="statevent";function sr(l,p){N.call(this,_n.STAT_EVENT,l),this.stat=p}S(sr,N);function et(l){const p=Mr();nt(p,new sr(p,l))}_n.Ja="timingevent";function Mo(l,p){N.call(this,_n.Ja,l),this.size=p}S(Mo,N);function br(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Fr(){this.g=!0}Fr.prototype.ua=function(){this.g=!1};function cl(l,p,g,E,M,j){l.info(function(){if(l.g)if(j){var X="",ge=j.split("&");for(let Fe=0;Fe<ge.length;Fe++){var rt=ge[Fe].split("=");if(rt.length>1){const lt=rt[0];rt=rt[1];const nn=lt.split("_");X=nn.length>=2&&nn[1]=="type"?X+(lt+"="+rt+"&"):X+(lt+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+X})}function hl(l,p,g,E,M,j,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+j+" "+X})}function Dn(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Di(l,g)+(E?" "+E:"")})}function fl(l,p){l.info(function(){return"TIMEOUT: "+p})}Fr.prototype.info=function(){};function Di(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var g=j[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return Vr(j)}catch{return p}}var Ur={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},dl;function or(){}S(or,xr),or.prototype.g=function(){return new XMLHttpRequest},dl=new or;function On(l){return encodeURIComponent(String(l))}function Ts(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function ln(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var ml={},bo={};function vn(l,p,g){l.M=1,l.A=lr(un(p)),l.u=g,l.R=!0,Fo(l,null)}function Fo(l,p){l.F=Date.now(),Oi(l),l.B=un(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Ko(g.i,"t",E),l.C=0,g=l.j.L,l.h=new pl,l.g=Al(l.j,g?p:null,!l.u),l.P>0&&(l.O=new al(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(xo[0]=M.toString()),M=xo);for(let j=0;j<M.length;j++){const X=Ue(g,M[j],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),ir(),cl(l.i,l.v,l.B,l.l,l.S,l.u)}ln.prototype.ba=function(l){l=l.target;const p=this.O;p&&Un(l)==3?p.j():this.Y(l)},ln.prototype.Y=function(l){try{if(l==this.g)e:{const ge=Un(this.g),rt=this.g.ya(),Fe=this.g.ca();if(!(ge<3)&&(ge!=3||this.g&&(this.h.h||this.g.la()||Il(this.g)))){this.K||ge!=4||rt==7||(rt==8||Fe<=0?ir(3):ir(2)),Is(this);var p=this.g.ca();this.X=p;var g=gl(this);if(this.o=p==200,hl(this.i,this.v,this.B,this.l,this.S,ge,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(E)){var j=E;break t}}j=null}if(l=j)Dn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qe(this,l);else{this.o=!1,this.m=3,et(12),ar(this),Vi(this);break e}}if(this.R){l=!0;let lt;for(;!this.K&&this.C<g.length;)if(lt=_l(this,g),lt==bo){ge==4&&(this.m=4,et(14),l=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==ml){this.m=4,et(15),Dn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Dn(this.i,this.l,lt,null),qe(this,lt);if(yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||g.length!=0||this.h.h||(this.m=1,et(16),l=!1),this.o=this.o&&l,!l)Dn(this.i,this.l,g,"[Invalid Chunked Response]"),ar(this),Vi(this);else if(g.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),zi(X),X.P=!0,et(11))}}else Dn(this.i,this.l,g,null),qe(this,g);ge==4&&ar(this),this.o&&!this.K&&(ge==4?Vs(this.j,this):(this.o=!1,Oi(this)))}else Yo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),ar(this),Vi(this)}}}catch{}finally{}};function gl(l){if(!yl(l))return l.g.la();const p=Il(l.g);if(p==="")return"";let g="";const E=p.length,M=Un(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return ar(l),Vi(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,g+=l.h.i.decode(p[j],{stream:!(M&&j==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function yl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function _l(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?bo:(g=Number(p.substring(g,E)),isNaN(g)?ml:(E+=1,E+g>p.length?bo:(p=p.slice(E,E+g),l.C=E+g,p)))}ln.prototype.cancel=function(){this.K=!0,ar(this)};function Oi(l){l.T=Date.now()+l.H,Uo(l,l.H)}function Uo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=br(_(l.aa,l),p)}function Is(l){l.D&&(h.clearTimeout(l.D),l.D=null)}ln.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(fl(this.i,this.B),this.M!=2&&(ir(),et(17)),ar(this),this.m=2,Vi(this)):Uo(this,this.T-l)};function Vi(l){l.j.I==0||l.K||Vs(l.j,l)}function ar(l){Is(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,_s(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function qe(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||Bo(g.h,l))){if(!l.L&&Bo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Os(g),en(g);else break e;zn(g),et(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=br(_(g.Va,g),6e3));xi(g.h)<=1&&g.ta&&(g.ta=void 0)}else tn(g,11)}else if((l.L||g.g==l)&&Os(g),!A(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Fe=M[p];const lt=Fe[0];if(!(lt<=g.K))if(g.K=lt,Fe=Fe[1],g.I==2)if(Fe[0]=="c"){g.M=Fe[1],g.ba=Fe[2];const nn=Fe[3];nn!=null&&(g.ka=nn,g.j.info("VER="+g.ka));const dr=Fe[4];dr!=null&&(g.za=dr,g.j.info("SVER="+g.za));const $n=Fe[5];$n!=null&&typeof $n=="number"&&$n>0&&(E=1.5*$n,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Hn=l.g;if(Hn){const Ms=Hn.g?Hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var j=E.h;j.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(As(j,j.h),j.h=null))}if(E.G){const Zo=Hn.g?Hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(E.wa=Zo,Le(E.J,E.G,Zo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var X=l;if(E.na=Jo(E,E.L?E.ba:null,E.W),X.L){Li(E.h,X);var ge=X,rt=E.O;rt&&(ge.H=rt),ge.D&&(Is(ge),Oi(ge)),E.g=X}else Nt(E);g.i.length>0&&fr(g)}else Fe[0]!="stop"&&Fe[0]!="close"||tn(g,7);else g.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?tn(g,7):Ns(g):Fe[0]!="noop"&&g.l&&g.l.qa(Fe),g.A=0)}}ir(4)}catch{}}var Sc=class{constructor(l,p){this.g=l,this.map=p}};function Ss(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function xi(l){return l.h?1:l.g?l.g.size:0}function Bo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function As(l,p){l.g?l.g.add(p):l.h=p}function Li(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ss.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return F(l.i)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let M,j=null;E>=0?(M=l[g].substring(0,E),j=l[g].substring(E+1)):M=l[g],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Vn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Vn?(this.l=l.l,Mi(this,l.j),this.o=l.o,this.g=l.g,xn(this,l.u),this.h=l.h,Br(this,Qo(l.i)),this.m=l.m):l&&(p=String(l).match(vl))?(this.l=!1,Mi(this,p[1]||"",!0),this.o=bi(p[2]||""),this.g=bi(p[3]||"",!0),xn(this,p[4]),this.h=bi(p[5]||"",!0),Br(this,p[6]||"",!0),this.m=bi(p[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}Vn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Fi(p,$o,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Fi(p,$o,!0),"@"),l.push(On(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Fi(g,g.charAt(0)=="/"?Ui:Ho,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Fi(g,qo)),l.join("")},Vn.prototype.resolve=function(l){const p=un(this);let g=!!l.j;g?Mi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)xn(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let X=0;X<M.length;){const ge=M[X++];ge=="."?E&&X==M.length&&j.push(""):ge==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&X==M.length&&j.push("")):(j.push(ge),E=!0)}E=j.join("/")}else E=M}return g?p.h=E:g=l.i.toString()!=="",g?Br(p,Qo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function un(l){return new Vn(l)}function Mi(l,p,g){l.j=g?bi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function xn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Br(l,p,g){p instanceof Ne?(l.i=p,Rs(l.i,l.l)):(g||(p=Fi(p,Ac)),l.i=new Ne(p,l.l))}function Le(l,p,g){l.i.set(p,g)}function lr(l){return Le(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function bi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,zo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function zo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $o=/[#\/\?@]/g,Ho=/[#\?:]/g,Ui=/[#\?]/g,Ac=/[#\?@]/g,qo=/#/g;function Ne(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Ln(l){l.g||(l.g=new Map,l.h=0,l.i&&Jt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}r=Ne.prototype,r.add=function(l,p){Ln(this),this.i=null,l=Mn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Go(l,p){Ln(l),p=Mn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Cs(l,p){return Ln(l),p=Mn(l,p),l.g.has(p)}r.forEach=function(l,p){Ln(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Wo(l,p){Ln(l);let g=[];if(typeof p=="string")Cs(l,p)&&(g=g.concat(l.g.get(Mn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}r.set=function(l,p){return Ln(this),this.i=null,l=Mn(this,l),Cs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=Wo(this,l),l.length>0?String(l[0]):p):p};function Ko(l,p,g){Go(l,p),g.length>0&&(l.i=null,l.g.set(Mn(l,p),F(g)),l.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const M=On(g);g=Wo(this,g);for(let j=0;j<g.length;j++){let X=M;g[j]!==""&&(X+="="+On(g[j])),l.push(X)}}return this.i=l.join("&")};function Qo(l){const p=new Ne;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Mn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Rs(l,p){p&&!l.j&&(Ln(l),l.i=null,l.g.forEach(function(g,E){const M=E.toLowerCase();E!=M&&(Go(this,E),Ko(this,M,g))},l)),l.j=p}function bn(l,p){const g=new Fr;if(h.Image){const E=new Image;E.onload=w(wt,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(wt,g,"TestLoadImage: error",!1,p,E),E.onabort=w(wt,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(wt,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Fn(l,p){const g=new Fr,E=new AbortController,M=setTimeout(()=>{E.abort(),wt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?wt(g,"TestPingServer: ok",!0,p):wt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),wt(g,"TestPingServer: error",!1,p)})}function wt(l,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function ji(){this.g=new Ni}function ur(l){this.i=l.Sb||null,this.h=l.ab||!1}S(ur,xr),ur.prototype.g=function(){return new Zt(this.i,this.h)};function Zt(l,p){at.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Zt,at),r=Zt.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,En(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=0},r.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;El(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function El(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}r.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?zr(this):En(this),this.readyState==3&&El(this)}},r.Oa=function(l){this.g&&(this.response=this.responseText=l,zr(this))},r.Na=function(l){this.g&&(this.response=l,zr(this))},r.ga=function(){this.g&&zr(this)};function zr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,En(l)}r.setRequestHeader=function(l,p){this.A.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function En(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function wl(l){let p="";return le(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function Ps(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=wl(g),typeof l=="string"?g!=null&&On(g):Le(l,p,g))}function je(l){at.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(je,at);var Tl=/^https?$/i,Cc=["POST","PUT"];r=je.prototype,r.Fa=function(l){this.H=l},r.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():dl.g(),this.g.onreadystatechange=C(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){$r(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Cc,p,void 0)>=0)||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of g)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){$r(this,j)}};function $r(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Hr(l),hr(l)}function Hr(l){l.A||(l.A=!0,nt(l,"complete"),nt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,nt(this,"complete"),nt(this,"abort"),hr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hr(this,!0)),je.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?cr(this):this.Xa())},r.Xa=function(){cr(this)};function cr(l){if(l.h&&typeof u<"u"){if(l.v&&Un(l)==4)setTimeout(l.Ca.bind(l),0);else if(nt(l,"readystatechange"),Un(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=j===0){let X=String(l.D).match(vl)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!Tl.test(X?X.toLowerCase():"")}g=E}if(g)nt(l,"complete"),nt(l,"success");else{l.o=6;try{var M=Un(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Hr(l)}}finally{hr(l)}}}}function hr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||nt(l,"ready");try{g.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Un(l){return l.g?l.g.readyState:0}r.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),ll(p)}};function Il(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Yo(l){const p={};l=(l.g&&Un(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(A(l[E]))continue;var g=Ts(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[M]||[];p[M]=j,j.push(g)}ne(p,function(E){return E.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function ks(l){this.za=0,this.i=[],this.j=new Fr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=jn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=jn("baseRetryDelayMs",5e3,l),this.Za=jn("retryDelaySeedMs",1e4,l),this.Ta=jn("forwardChannelMaxRetries",2,l),this.va=jn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ss(l&&l.concurrentRequestLimit),this.Ba=new ji,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=ks.prototype,r.ka=8,r.I=1,r.connect=function(l,p,g,E){et(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=Jo(this,null,this.W),fr(this)};function Ns(l){if(Ds(l),l.I==3){var p=l.V++,g=un(l.J);if(Le(g,"SID",l.M),Le(g,"RID",p),Le(g,"TYPE","terminate"),Bn(l,g),p=new ln(l,l.j,p),p.M=2,p.A=lr(un(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Al(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Oi(p)}$i(l)}function en(l){l.g&&(zi(l),l.g.cancel(),l.g=null)}function Ds(l){en(l),l.v&&(h.clearTimeout(l.v),l.v=null),Os(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function fr(l){if(!jo(l.h)&&!l.m){l.m=!0;var p=l.Ea;He||I(),ke||(He(),ke=!0),k.add(p,l),l.D=0}}function Sl(l,p){return xi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=br(_(l.Ea,l,p),xs(l,l.D)),l.D++,!0)}r.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new ln(this,this.j,l);let j=this.o;if(this.U&&(j?(j=V(j),ve(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Xo(this,M,p),g=un(this.J),Le(g,"RID",l),Le(g,"CVER",22),this.G&&Le(g,"X-HTTP-Session-Id",this.G),Bn(this,g),j&&(this.R?p="headers="+On(wl(j))+"&"+p:this.u&&Ps(g,this.u,j)),As(this.h,M),this.Ra&&Le(g,"TYPE","init"),this.S?(Le(g,"$req",p),Le(g,"SID","null"),M.U=!0,vn(M,g,null)):vn(M,g,p),this.I=2}}else this.I==3&&(l?Bi(this,l):this.i.length==0||jo(this.h)||Bi(this))};function Bi(l,p){var g;p?g=p.l:g=l.V++;const E=un(l.J);Le(E,"SID",l.M),Le(E,"RID",g),Le(E,"AID",l.K),Bn(l,E),l.u&&l.o&&Ps(E,l.u,l.o),g=new ln(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Xo(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),As(l.h,g),vn(g,E,p)}function Bn(l,p){l.H&&le(l.H,function(g,E){Le(p,E,g)}),l.l&&le({},function(g,E){Le(p,E,g)})}function Xo(l,p,g){g=Math.min(l.i.length,g);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let ge=-1;for(;;){const rt=["count="+g];ge==-1?g>0?(ge=M[0].g,rt.push("ofs="+ge)):ge=0:rt.push("ofs="+ge);let Fe=!0;for(let lt=0;lt<g;lt++){var j=M[lt].g;const nn=M[lt].map;if(j-=ge,j<0)ge=Math.max(0,M[lt].g-100),Fe=!1;else try{j="req"+j+"_"||"";try{var X=nn instanceof Map?nn:Object.entries(nn);for(const[dr,$n]of X){let Hn=$n;m($n)&&(Hn=Vr($n)),rt.push(j+dr+"="+encodeURIComponent(Hn))}}catch(dr){throw rt.push(j+"type="+encodeURIComponent("_badmap")),dr}}catch{E&&E(nn)}}if(Fe){X=rt.join("&");break e}}X=void 0}return l=l.i.splice(0,g),p.G=l,X}function Nt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;He||I(),ke||(He(),ke=!0),k.add(p,l),l.A=0}}function zn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=br(_(l.Da,l),xs(l,l.A)),l.A++,!0)}r.Da=function(){if(this.v=null,qr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=br(_(this.Wa,this),l)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),en(this),qr(this))};function zi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function qr(l){l.g=new ln(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=un(l.na);Le(p,"RID","rpc"),Le(p,"SID",l.M),Le(p,"AID",l.K),Le(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Le(p,"TO",l.ia),Le(p,"TYPE","xmlhttp"),Bn(l,p),l.u&&l.o&&Ps(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=lr(un(p)),g.u=null,g.R=!0,Fo(g,l)}r.Va=function(){this.C!=null&&(this.C=null,en(this),zn(this),et(19))};function Os(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Vs(l,p){var g=null;if(l.g==p){Os(l),zi(l),l.g=null;var E=2}else if(Bo(l.h,p))g=p.G,Li(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=Mr(),nt(E,new Mo(E,g)),fr(l)}else Nt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&Sl(l,p)||E==2&&zn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:tn(l,5);break;case 4:tn(l,10);break;case 3:tn(l,6);break;default:tn(l,2)}}}function xs(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function tn(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),E=l.Ua;const M=!E;E=new Vn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Mi(E,"https"),lr(E),M?bn(E.toString(),g):Fn(E.toString(),g)}else et(2);l.I=0,l.l&&l.l.pa(p),$i(l),Ds(l)}r.bb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function $i(l){if(l.I=0,l.ja=[],l.l){const p=Xt(l.h);(p.length!=0||l.i.length!=0)&&(W(l.ja,p),W(l.ja,l.i),l.h.i.length=0,F(l.i),l.i.length=0),l.l.oa()}}function Jo(l,p,g){var E=g instanceof Vn?un(g):new Vn(g);if(E.g!="")p&&(E.g=p+"."+E.g),xn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Vn(null);E&&Mi(j,E),p&&(j.g=p),M&&xn(j,M),g&&(j.h=g),E=j}return g=l.G,p=l.wa,g&&p&&Le(E,g,p),Le(E,"VER",l.ka),Bn(l,E),E}function Al(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new je(new ur({ab:g})):new je(l.ma),p.Fa(l.L),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cl(){}r=Cl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Ls(){}Ls.prototype.g=function(l,p){return new Tt(l,p)};function Tt(l,p){at.call(this),this.g=new ks(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Gr(this)}S(Tt,at),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Ns(this.g)},Tt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Vr(l),l=g);p.i.push(new Sc(p.Ya++,l)),p.I==3&&fr(p)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Ns(this.g),delete this.g,Tt.Z.N.call(this)};function Rl(l){vs.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}S(Rl,vs);function Pl(){Lo.call(this),this.status=1}S(Pl,Lo);function Gr(l){this.g=l}S(Gr,Cl),Gr.prototype.ra=function(){nt(this.g,"a")},Gr.prototype.qa=function(l){nt(this.g,new Rl(l))},Gr.prototype.pa=function(l){nt(this.g,new Pl)},Gr.prototype.oa=function(){nt(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,F_=function(){return new Ls},b_=function(){return Mr()},M_=_n,vf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ur.NO_ERROR=0,Ur.TIMEOUT=8,Ur.HTTP_ERROR=6,Ou=Ur,jr.COMPLETE="complete",L_=jr,ul.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",at.prototype.listen=at.prototype.J,Aa=ul,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,x_=je}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});const Rg="@firebase/firestore",Pg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new bf("@firebase/firestore");function io(){return cs.logLevel}function te(r,...e){if(cs.logLevel<=Ae.DEBUG){const t=e.map(Yf);cs.debug(`Firestore (${Ao}): ${r}`,...t)}}function Rr(r,...e){if(cs.logLevel<=Ae.ERROR){const t=e.map(Yf);cs.error(`Firestore (${Ao}): ${r}`,...t)}}function go(r,...e){if(cs.logLevel<=Ae.WARN){const t=e.map(Yf);cs.warn(`Firestore (${Ao}): ${r}`,...t)}}function Yf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,U_(r,s,t)}function U_(r,e,t){let s=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rr(s),new Error(s)}function be(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||U_(e,o,s)}function ye(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Nr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Mt.UNAUTHENTICATED)))}shutdown(){}}class yS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _S{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Sr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Sr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new j_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new Mt(e)}}class vS{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ES{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new vS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){be(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new kg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new kg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=TS(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(r,e){return r<e?-1:r>e?1:0}function Ef(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return of(o)===of(u)?Ce(o,u):of(o)?1:-1}return Ce(r.length,e.length)}const IS=55296,SS=57343;function of(r){const e=r.charCodeAt(0);return e>=IS&&e<=SS}function yo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="__name__";class Qn{constructor(e,t,s){t===void 0?t=0:t>e.length&&he(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&he(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Qn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Qn.isNumericId(e),o=Qn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Qn.extractNumericId(e).compare(Qn.extractNumericId(t)):Ef(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yi.fromString(e.substring(4,e.length-2))}}class $e extends Qn{construct(e,t,s){return new $e(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new $e(t)}static emptyPath(){return new $e([])}}const AS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Qn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return AS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ng}static keyField(){return new Ct([Ng])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae($e.fromString(e))}static fromName(e){return new ae($e.fromString(e).popFirst(5))}static empty(){return new ae($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return $e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new $e(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(r,e,t){if(!t)throw new Z(B.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function CS(r,e,t,s){if(e===!0&&s===!0)throw new Z(B.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Dg(r){if(!ae.isDocumentKey(r))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Og(r){if(ae.isDocumentKey(r))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function z_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function uc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":he(12329,{type:typeof r})}function Pr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uc(r);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(r,e){const t={typeString:r};return e&&(t.value=e),t}function Ja(r,e){if(!z_(r))throw new Z(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new Z(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=-62135596800,xg=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xg);return new Ke(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vg)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xg}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ja(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:ft("string",Ke._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new Ke(0,0))}static max(){return new me(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=-1;function RS(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=me.fromTimestamp(s===1e9?new Ke(t+1,0):new Ke(t,s));return new Ei(o,ae.empty(),e)}function PS(r){return new Ei(r.readTime,r.key,Fa)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(me.min(),ae.empty(),Fa)}static max(){return new Ei(me.max(),ae.empty(),Fa)}}function kS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(r.documentKey,e.documentKey),t!==0?t:Ce(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(r){if(r.code!==B.FAILED_PRECONDITION||r.message!==NS)throw r;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):z.reject(t)}static resolve(e){return new z(((t,s)=>{t(e)}))}static reject(e){return new z(((t,s)=>{s(e)}))}static waitFor(e){return new z(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=z.resolve(!1);for(const s of e)t=t.next((o=>o?z.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new z(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new z(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function OS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=-1;function hc(r){return r==null}function Wu(r){return r===0&&1/r==-1/0}function VS(r){return typeof r=="number"&&Number.isInteger(r)&&!Wu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="";function xS(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Lg(e)),e=LS(r.get(t),e);return Lg(e)}function LS(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case $_:t+="";break;default:t+=u}}return t}function Lg(r){return r+$_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ci(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function H_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Su(this.root,e,this.comparator,!1)}getReverseIterator(){return new Su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Su(this.root,e,this.comparator,!0)}}class Su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bg(this.data.getIterator())}getIteratorFrom(e){return new bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new an([])}unionWith(e){let t=new mt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new an(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new q_("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const MS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(r){if(be(!!r,39018),typeof r=="string"){let e=0;const t=MS.exec(r);if(be(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ti(r){return typeof r=="string"?Pt.fromBase64String(r):Pt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="server_timestamp",W_="__type__",K_="__previous_value__",Q_="__local_write_time__";function Zf(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[W_])==null?void 0:s.stringValue)===G_}function fc(r){const e=r.mapValue.fields[K_];return Zf(e)?fc(e):e}function Ua(r){const e=wi(r.mapValue.fields[Q_].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t,s,o,u,h,m,y,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=w}}const Ku="(default)";class ja{constructor(e,t){this.projectId=e,this.database=t||Ku}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database===Ku}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="__type__",FS="__max__",Au={mapValue:{}},X_="__vector__",Qu="value";function Ii(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Zf(r)?4:jS(r)?9007199254740991:US(r)?10:11:he(28295,{value:r})}function rr(r,e){if(r===e)return!0;const t=Ii(r);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ua(r).isEqual(Ua(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=wi(o.timestampValue),m=wi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,u){return Ti(o.bytesValue).isEqual(Ti(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,u){return st(o.geoPointValue.latitude)===st(u.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(u.geoPointValue.longitude)})(r,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return st(o.integerValue)===st(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=st(o.doubleValue),m=st(u.doubleValue);return h===m?Wu(h)===Wu(m):isNaN(h)&&isNaN(m)}return!1})(r,e);case 9:return yo(r.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Mg(h)!==Mg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!rr(h[y],m[y])))return!1;return!0})(r,e);default:return he(52216,{left:r})}}function Ba(r,e){return(r.values||[]).find((t=>rr(t,e)))!==void 0}function _o(r,e){if(r===e)return 0;const t=Ii(r),s=Ii(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(r.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=st(u.integerValue||u.doubleValue),y=st(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(r,e);case 3:return Fg(r.timestampValue,e.timestampValue);case 4:return Fg(Ua(r),Ua(e));case 5:return Ef(r.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ti(u),y=Ti(h);return m.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const w=Ce(m[_],y[_]);if(w!==0)return w}return Ce(m.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ce(st(u.latitude),st(h.latitude));return m!==0?m:Ce(st(u.longitude),st(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Ug(r.arrayValue,e.arrayValue);case 10:return(function(u,h){var C,F,W,Q;const m=u.fields||{},y=h.fields||{},_=(C=m[Qu])==null?void 0:C.arrayValue,w=(F=y[Qu])==null?void 0:F.arrayValue,S=Ce(((W=_==null?void 0:_.values)==null?void 0:W.length)||0,((Q=w==null?void 0:w.values)==null?void 0:Q.length)||0);return S!==0?S:Ug(_,w)})(r.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Au.mapValue&&h===Au.mapValue)return 0;if(u===Au.mapValue)return 1;if(h===Au.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},w=Object.keys(_);y.sort(),w.sort();for(let S=0;S<y.length&&S<w.length;++S){const C=Ef(y[S],w[S]);if(C!==0)return C;const F=_o(m[y[S]],_[w[S]]);if(F!==0)return F}return Ce(y.length,w.length)})(r.mapValue,e.mapValue);default:throw he(23264,{he:t})}}function Fg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ce(r,e);const t=wi(r),s=wi(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function Ug(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=_o(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function vo(r){return wf(r)}function wf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ti(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ae.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=wf(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${wf(t.fields[h])}`;return o+"}"})(r.mapValue):he(61005,{value:r})}function Vu(r){switch(Ii(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fc(r);return e?16+Vu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ti(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Vu(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Ci(s.fields,((u,h)=>{o+=u.length+Vu(h)})),o})(r.mapValue);default:throw he(13486,{value:r})}}function jg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Tf(r){return!!r&&"integerValue"in r}function ed(r){return!!r&&"arrayValue"in r}function Bg(r){return!!r&&"nullValue"in r}function zg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function xu(r){return!!r&&"mapValue"in r}function US(r){var t,s;return((s=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Y_])==null?void 0:s.stringValue)===X_}function Da(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Ci(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Da(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Da(r.arrayValue.values[t]);return e}return{...r}}function jS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===FS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!xu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Da(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());xu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];xu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ci(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Yt(Da(this.value))}}function J_(r){const e=[];return Ci(r.fields,((t,s)=>{const o=new Ct([t]);if(xu(s)){const u=J_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,me.min(),me.min(),me.min(),Yt.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,me.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,me.min(),me.min(),Yt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,me.min(),me.min(),Yt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.position=e,this.inclusive=t}}function $g(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ae.comparator(ae.fromName(h.referenceValue),t.key):s=_o(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t="asc"){this.field=e,this.dir=t}}function BS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{}class ht extends Z_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $S(e,t,s):t==="array-contains"?new GS(e,s):t==="in"?new WS(e,s):t==="not-in"?new KS(e,s):t==="array-contains-any"?new QS(e,s):new ht(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new HS(e,s):new qS(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_o(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(_o(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends Z_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Nn(e,t)}matches(e){return ev(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ev(r){return r.op==="and"}function tv(r){return zS(r)&&ev(r)}function zS(r){for(const e of r.filters)if(e instanceof Nn)return!1;return!0}function If(r){if(r instanceof ht)return r.field.canonicalString()+r.op.toString()+vo(r.value);if(tv(r))return r.filters.map((e=>If(e))).join(",");{const e=r.filters.map((t=>If(t))).join(",");return`${r.op}(${e})`}}function nv(r,e){return r instanceof ht?(function(s,o){return o instanceof ht&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)})(r,e):r instanceof Nn?(function(s,o){return o instanceof Nn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&nv(h,o.filters[m])),!0):!1})(r,e):void he(19439)}function rv(r){return r instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${vo(t.value)}`})(r):r instanceof Nn?(function(t){return t.op.toString()+" {"+t.getFilters().map(rv).join(" ,")+"}"})(r):"Filter"}class $S extends ht{constructor(e,t,s){super(e,t,s),this.key=ae.fromName(s.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class HS extends ht{constructor(e,t){super(e,"in",t),this.keys=iv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class qS extends ht{constructor(e,t){super(e,"not-in",t),this.keys=iv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function iv(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ae.fromName(s.referenceValue)))}class GS extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ed(t)&&Ba(t.arrayValue,this.value)}}class WS extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ba(this.value.arrayValue,t)}}class KS extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ba(this.value.arrayValue,t)}}class QS extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ed(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ba(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function qg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new YS(r,e,t,s,o,u,h)}function td(r){const e=ye(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>If(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>vo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>vo(s))).join(",")),e.Te=t}return e.Te}function nd(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!BS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!nv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Hg(r.startAt,e.startAt)&&Hg(r.endAt,e.endAt)}function Sf(r){return ae.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function XS(r,e,t,s,o,u,h,m){return new Po(r,e,t,s,o,u,h,m)}function rd(r){return new Po(r)}function Gg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sv(r){return r.collectionGroup!==null}function Oa(r){const e=ye(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new mt(Ct.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new za(u,s))})),t.has(Ct.keyField().canonicalString())||e.Ie.push(new za(Ct.keyField(),s))}return e.Ie}function Xn(r){const e=ye(r);return e.Ee||(e.Ee=JS(e,Oa(r))),e.Ee}function JS(r,e){if(r.limitType==="F")return qg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new za(o.field,u)}));const t=r.endAt?new Yu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Yu(r.startAt.position,r.startAt.inclusive):null;return qg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Af(r,e){const t=r.filters.concat([e]);return new Po(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Xu(r,e,t){return new Po(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function dc(r,e){return nd(Xn(r),Xn(e))&&r.limitType===e.limitType}function ov(r){return`${td(Xn(r))}|lt:${r.limitType}`}function so(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>rv(o))).join(", ")}]`),hc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>vo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>vo(o))).join(",")),`Target(${s})`})(Xn(r))}; limitType=${r.limitType})`}function pc(r,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ae.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,o){for(const u of Oa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=$g(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,Oa(s),o)||s.endAt&&!(function(h,m,y){const _=$g(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,Oa(s),o))})(r,e)}function ZS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function av(r){return(e,t)=>{let s=!1;for(const o of Oa(r)){const u=eA(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function eA(r,e,t){const s=r.field.isKeyField()?ae.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?_o(y,_):he(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return he(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return H_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=new Ze(ae.comparator);function kr(){return tA}const lv=new Ze(ae.comparator);function Ca(...r){let e=lv;for(const t of r)e=e.insert(t.key,t);return e}function uv(r){let e=lv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function is(){return Va()}function cv(){return Va()}function Va(){return new ds((r=>r.toString()),((r,e)=>r.isEqual(e)))}const nA=new Ze(ae.comparator),rA=new mt(ae.comparator);function Re(...r){let e=rA;for(const t of r)e=e.add(t);return e}const iA=new mt(Ce);function sA(){return iA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function hv(r){return{integerValue:""+r}}function oA(r,e){return VS(e)?hv(e):id(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this._=void 0}}function aA(r,e,t){return r instanceof Ju?(function(o,u){const h={fields:{[W_]:{stringValue:G_},[Q_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Zf(u)&&(u=fc(u)),u&&(h.fields[K_]=u),{mapValue:h}})(t,e):r instanceof $a?dv(r,e):r instanceof Ha?pv(r,e):(function(o,u){const h=fv(o,u),m=Wg(h)+Wg(o.Ae);return Tf(h)&&Tf(o.Ae)?hv(m):id(o.serializer,m)})(r,e)}function lA(r,e,t){return r instanceof $a?dv(r,e):r instanceof Ha?pv(r,e):t}function fv(r,e){return r instanceof Zu?(function(s){return Tf(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ju extends mc{}class $a extends mc{constructor(e){super(),this.elements=e}}function dv(r,e){const t=mv(e);for(const s of r.elements)t.some((o=>rr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ha extends mc{constructor(e){super(),this.elements=e}}function pv(r,e){let t=mv(e);for(const s of r.elements)t=t.filter((o=>!rr(o,s)));return{arrayValue:{values:t}}}class Zu extends mc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Wg(r){return st(r.integerValue||r.doubleValue)}function mv(r){return ed(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function uA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof $a&&o instanceof $a||s instanceof Ha&&o instanceof Ha?yo(s.elements,o.elements,rr):s instanceof Zu&&o instanceof Zu?rr(s.Ae,o.Ae):s instanceof Ju&&o instanceof Ju})(r.transform,e.transform)}class cA{constructor(e,t){this.version=e,this.transformResults=t}}class Jn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jn}static exists(e){return new Jn(void 0,e)}static updateTime(e){return new Jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class gc{}function gv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new _v(r.key,Jn.none()):new Za(r.key,r.data,Jn.none());{const t=r.data,s=Yt.empty();let o=new mt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ri(r.key,s,new an(o.toArray()),Jn.none())}}function hA(r,e,t){r instanceof Za?(function(o,u,h){const m=o.value.clone(),y=Qg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(r,e,t):r instanceof Ri?(function(o,u,h){if(!Lu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Qg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(yv(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(r,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function xa(r,e,t,s){return r instanceof Za?(function(u,h,m,y){if(!Lu(u.precondition,h))return m;const _=u.value.clone(),w=Yg(u.fieldTransforms,y,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Ri?(function(u,h,m,y){if(!Lu(u.precondition,h))return m;const _=Yg(u.fieldTransforms,y,h),w=h.data;return w.setAll(yv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,e,t,s):(function(u,h,m){return Lu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(r,e,t)}function fA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=fv(s.transform,o||null);u!=null&&(t===null&&(t=Yt.empty()),t.set(s.field,u))}return t||null}function Kg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&yo(s,o,((u,h)=>uA(u,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Za extends gc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ri extends gc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function yv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Qg(r,e,t){const s=new Map;be(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,lA(h,m,t[o]))}return s}function Yg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,aA(u,h,e))}return s}class _v extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dA extends gc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&hA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=xa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=xa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=cv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=gv(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(me.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Re())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,((t,s)=>Kg(t,s)))&&yo(this.baseMutations,e.baseMutations,((t,s)=>Kg(t,s)))}}class sd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return nA})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new sd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,De;function yA(r){switch(r){case B.OK:return he(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return he(15467,{code:r})}}function vv(r){if(r===void 0)return Rr("GRPC error has no .code"),B.UNKNOWN;switch(r){case ct.OK:return B.OK;case ct.CANCELLED:return B.CANCELLED;case ct.UNKNOWN:return B.UNKNOWN;case ct.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ct.INTERNAL:return B.INTERNAL;case ct.UNAVAILABLE:return B.UNAVAILABLE;case ct.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ct.NOT_FOUND:return B.NOT_FOUND;case ct.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ct.ABORTED:return B.ABORTED;case ct.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ct.DATA_LOSS:return B.DATA_LOSS;default:return he(39323,{code:r})}}(De=ct||(ct={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=new yi([4294967295,4294967295],0);function Xg(r){const e=_A().encode(r),t=new V_;return t.update(e),new Uint8Array(t.digest())}function Jg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new yi([t,s],0),new yi([o,u],0)]}class od{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ra(`Invalid padding: ${t}`);if(s<0)throw new Ra(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=yi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(yi.fromNumber(s)));return o.compare(vA)===1&&(o=new yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Xg(e),[s,o]=Jg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new od(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Xg(e),[s,o]=Jg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new yc(me.min(),o,new Ze(Ce),kr(),Re())}}class el{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new el(s,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Ev{constructor(e,t){this.targetId=e,this.Ce=t}}class wv{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Zg{constructor(){this.ve=0,this.Fe=ey(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Re(),t=Re(),s=Re();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:he(38017,{changeType:u})}})),new el(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=ey()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class EA{constructor(e){this.Ge=e,this.ze=new Map,this.je=kr(),this.Je=Cu(),this.He=Cu(),this.Ye=new Ze(Ce)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Sf(u))if(s===0){const h=new ae(u.path);this.et(t,h,bt.newNoDocument(h,me.min()))}else be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(y){if(y instanceof q_)return go("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new od(h,o,u)}catch(y){return go(y instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Sf(m.target)){const y=new ae(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,bt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Re();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new yc(e,t,this.Ye,this.je,s);return this.je=kr(),this.Je=Cu(),this.He=Cu(),this.Ye=new Ze(Ce),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Zg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new mt(Ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new mt(Ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Cu(){return new Ze(ae.comparator)}function ey(){return new Ze(ae.comparator)}const wA={asc:"ASCENDING",desc:"DESCENDING"},TA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IA={and:"AND",or:"OR"};class SA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cf(r,e){return r.useProto3Json||hc(e)?e:{value:e}}function ec(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function AA(r,e){return ec(r,e.toTimestamp())}function Zn(r){return be(!!r,49232),me.fromTimestamp((function(t){const s=wi(t);return new Ke(s.seconds,s.nanos)})(r))}function ad(r,e){return Rf(r,e).canonicalString()}function Rf(r,e){const t=(function(o){return new $e(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Iv(r){const e=$e.fromString(r);return be(Pv(e),10190,{key:e.toString()}),e}function Pf(r,e){return ad(r.databaseId,e.path)}function af(r,e){const t=Iv(e);if(t.get(1)!==r.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ae(Av(t))}function Sv(r,e){return ad(r.databaseId,e)}function CA(r){const e=Iv(r);return e.length===4?$e.emptyPath():Av(e)}function kf(r){return new $e(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Av(r){return be(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ty(r,e,t){return{name:Pf(r,e),fields:t.value.mapValue.fields}}function RA(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:he(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(be(w===void 0||typeof w=="string",58123),Pt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Pt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?B.UNKNOWN:vv(_.code);return new Z(w,_.message||"")})(h);t=new wv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=af(r,s.document.name),u=Zn(s.document.updateTime),h=s.document.createTime?Zn(s.document.createTime):me.min(),m=new Yt({mapValue:{fields:s.document.fields}}),y=bt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Mu(_,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=af(r,s.document),u=s.readTime?Zn(s.readTime):me.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Mu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=af(r,s.document),u=s.removedTargetIds||[];t=new Mu([],u,o,null)}else{if(!("filter"in e))return he(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new gA(o,u),m=s.targetId;t=new Ev(m,h)}}return t}function PA(r,e){let t;if(e instanceof Za)t={update:ty(r,e.key,e.value)};else if(e instanceof _v)t={delete:Pf(r,e.key)};else if(e instanceof Ri)t={update:ty(r,e.key,e.data),updateMask:bA(e.fieldMask)};else{if(!(e instanceof dA))return he(16599,{Vt:e.type});t={verify:Pf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ju)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof $a)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Zu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw he(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:AA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:he(27497)})(r,e.precondition)),t}function kA(r,e){return r&&r.length>0?(be(e!==void 0,14353),r.map((t=>(function(o,u){let h=o.updateTime?Zn(o.updateTime):Zn(u);return h.isEqual(me.min())&&(h=Zn(u)),new cA(h,o.transformResults||[])})(t,e)))):[]}function NA(r,e){return{documents:[Sv(r,e.path)]}}function DA(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Sv(r,o);const u=(function(_){if(_.length!==0)return Rv(Nn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(C){return{field:oo(C.field),direction:xA(C.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Cf(r,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function OA(r){let e=CA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(S){const C=Cv(S);return C instanceof Nn&&tv(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(S){return S.map((C=>(function(W){return new za(ao(W.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(C)))})(t.orderBy));let m=null;t.limit&&(m=(function(S){let C;return C=typeof S=="object"?S.value:S,hc(C)?null:C})(t.limit));let y=null;t.startAt&&(y=(function(S){const C=!!S.before,F=S.values||[];return new Yu(F,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(S){const C=!S.before,F=S.values||[];return new Yu(F,C)})(t.endAt)),XS(e,o,h,u,m,"F",y,_)}function VA(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Cv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ao(t.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ao(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ao(t.unaryFilter.field);return ht.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ao(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(r):r.fieldFilter!==void 0?(function(t){return ht.create(ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Nn.create(t.compositeFilter.filters.map((s=>Cv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(t.compositeFilter.op))})(r):he(30097,{filter:r})}function xA(r){return wA[r]}function LA(r){return TA[r]}function MA(r){return IA[r]}function oo(r){return{fieldPath:r.canonicalString()}}function ao(r){return Ct.fromServerFormat(r.fieldPath)}function Rv(r){return r instanceof ht?(function(t){if(t.op==="=="){if(zg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(Bg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(Bg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:LA(t.op),value:t.value}}})(r):r instanceof Nn?(function(t){const s=t.getFilters().map((o=>Rv(o)));return s.length===1?s[0]:{compositeFilter:{op:MA(t.op),filters:s}}})(r):he(54877,{filter:r})}function bA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Pv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,s,o,u=me.min(),h=me.min(),m=Pt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.yt=e}}function UA(r){const e=OA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Xu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.Cn=new BA}addToCollectionParentIndex(e,t){return this.Cn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(Ei.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class BA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt($e.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kv=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(kv,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Eo(0)}static cr(){return new Eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="LruGarbageCollector",zA=1048576;function iy([r,e],[t,s]){const o=Ce(r,t);return o===0?Ce(e,s):o}class $A{constructor(e){this.Ir=e,this.buffer=new mt(iy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();iy(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HA{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){te(ry,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?te(ry,"Ignoring IndexedDB error during garbage collection: ",t):await Co(t)}await this.Vr(3e5)}))}}class qA{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return z.resolve(cc.ce);const s=new $A(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(ny)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ny):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,m=Date.now(),this.removeTargets(e,s,t)))).next((S=>(u=S,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(_=Date.now(),io()<=Ae.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${S} documents in `+(_-y)+`ms
Total Duration: ${_-w}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S}))))}}function GA(r,e){return new qA(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.changes=new ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&xa(s.mutation,o,an.empty(),Ke.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Re()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Re()){const o=is();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ca();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=is();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Re())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=kr();const h=Va(),m=(function(){return Va()})();return t.forEach(((y,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Ri)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),xa(w.mutation,_,w.mutation.getFieldMask(),Ke.now())):h.set(_.key,an.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>m.set(_,new KA(w,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Va();let o=new Ze(((h,m)=>h-m)),u=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let w=s.get(y)||an.empty();w=m.applyToLocalView(_,w),s.set(y,w);const S=(o.get(m.batchId)||Re()).add(y);o=o.insert(m.batchId,S)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,w=y.value,S=cv();w.forEach((C=>{if(!u.has(C)){const F=gv(t.get(C),s.get(C));F!==null&&S.set(C,F),u=u.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return z.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ae.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):z.resolve(is());let m=Fa,y=u;return h.next((_=>z.forEach(_,((w,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(w)?z.resolve():this.remoteDocumentCache.getEntry(e,w).next((C=>{y=y.insert(w,C)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Re()))).next((w=>({batchId:m,changes:uv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((s=>{let o=Ca();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next((m=>z.forEach(m,(y=>{const _=(function(S,C){return new Po(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((S,C)=>{h=h.insert(S,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))}));let m=Ca();return h.forEach(((y,_)=>{const w=u.get(y);w!==void 0&&xa(w.mutation,_,an.empty(),Ke.now()),pc(t,_)&&(m=m.insert(y,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Zn(o.createTime)}})(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:UA(o.bundledQuery),readTime:Zn(o.readTime)}})(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.overlays=new Ze(ae.comparator),this.qr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=is();return z.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){const o=is(),u=t.length+1,h=new ae(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ze(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=is(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=is(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return z.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new mA(t,s));let u=this.qr.get(t);u===void 0&&(u=Re(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.Qr=new mt(Et.$r),this.Ur=new mt(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Et(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ae(new $e([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ae(new $e([])),s=new Et(t,e),o=new Et(t,e+1);let u=Re();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Et(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ae.comparator(e.key,t.key)||Ce(e.Yr,t.Yr)}static Kr(e,t){return Ce(e.Yr,t.Yr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new mt(Et.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new pA(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return z.resolve(h)}lookupMutationBatch(e,t){return z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Jf:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(Ce);return t.forEach((o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),z.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ae.isDocumentKey(u)||(u=u.child(""));const h=new Et(new ae(u),0);let m=new mt(Ce);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)}),h),z.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){be(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return z.forEach(t.mutations,(o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Et(t,0),o=this.Zr.firstAfterOrEqual(s);return z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.ri=e,this.docs=(function(){return new Ze(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=kr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))})),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=kr();const h=t.path,m=new ae(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:w}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||kS(PS(w),s)<=0||(o.has(w.key)||pc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){he(9500)}ii(e,t){return z.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new t1(this)}getSize(e){return z.resolve(this.size)}}class t1 extends WA{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.persistence=e,this.si=new ds((t=>td(t)),nd),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.oi=0,this._i=new ld,this.targetCount=0,this.ai=Eo.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Eo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Pr(t),z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),z.waitFor(u).next((()=>o))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),z.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){this.ui={},this.overlays={},this.ci=new cc(0),this.li=!1,this.li=!0,this.hi=new JA,this.referenceDelegate=e(this),this.Pi=new n1(this),this.indexManager=new jA,this.remoteDocumentCache=(function(o){return new e1(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new FA(t),this.Ii=new YA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new ZA(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new r1(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return z.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class r1 extends DS{constructor(e){super(),this.currentSequenceNumber=e}}class ud{constructor(e){this.persistence=e,this.Ri=new ld,this.Vi=null}static mi(e){return new ud(e)}get fi(){if(this.Vi)return this.Vi;throw he(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,(s=>{const o=ae.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,me.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return z.or([()=>z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class tc{constructor(e,t){this.persistence=e,this.pi=new ds((s=>xS(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=GA(this,t)}static mi(e,t){return new tc(e,t)}Ei(){}di(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return z.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?z.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,me.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vu(e.data.value)),t}br(e,t,s){return z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Re(),o=Re();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new cd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Jw()?8:OS(Ut())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new i1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(io()<=Ae.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(io()<=Ae.DEBUG&&te("QueryEngine","Query:",so(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(io()<=Ae.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):z.resolve())}ys(e,t){if(Gg(t))return z.resolve(null);let s=Xn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Xu(t,null,"F"),s=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Re(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,Xu(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ws(e,t,s,o){return Gg(t)||o.isEqual(me.min())?z.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?z.resolve(null):(io()<=Ae.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(t)),this.vs(e,h,t,RS(o,Fa)).next((m=>m)))}))}Ds(e,t){let s=new mt(av(e));return t.forEach(((o,u)=>{pc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return io()<=Ae.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",so(t)),this.ps.getDocumentsMatchingQuery(e,t,Ei.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="LocalStore",o1=3e8;class a1{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new Ze(Ce),this.xs=new ds((u=>td(u)),nd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function l1(r,e,t,s){return new a1(r,e,t,s)}async function Dv(r,e){const t=ye(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Re();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function u1(r,e){const t=ye(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,w){const S=_.batch,C=S.keys();let F=z.resolve();return C.forEach((W=>{F=F.next((()=>w.getEntry(y,W))).next((Q=>{const q=_.docVersions.get(W);be(q!==null,48541),Q.version.compareTo(q)<0&&(S.applyToRemoteDocument(Q,_),Q.isValidDocument()&&(Q.setReadTime(_.commitVersion),w.addEntry(Q)))}))})),F.next((()=>m.mutationQueue.removeMutationBatch(y,S)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Re();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Ov(r){const e=ye(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function c1(r,e){const t=ye(r),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((w,S)=>{const C=o.get(S);if(!C)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,S).next((()=>t.Pi.addMatchingKeys(u,w.addedDocuments,S))));let F=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?F=F.withResumeToken(Pt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(w.resumeToken,s)),o=o.insert(S,F),(function(Q,q,_e){return Q.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=o1?!0:_e.addedDocuments.size+_e.modifiedDocuments.size+_e.removedDocuments.size>0})(C,F,w)&&m.push(t.Pi.updateTargetData(u,F))}));let y=kr(),_=Re();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(h1(u,h,e.documentUpdates).next((w=>{y=w.ks,_=w.qs}))),!s.isEqual(me.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next((S=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return z.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function h1(r,e,t){let s=Re(),o=Re();return t.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let h=kr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(me.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te(hd,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function f1(r,e){const t=ye(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Jf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function d1(r,e){const t=ye(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,z.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new di(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Nf(r,e,t){const s=ye(r),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ro(h))throw h;te(hd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function sy(r,e,t){const s=ye(r);let o=me.min(),u=Re();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,w){const S=ye(y),C=S.xs.get(w);return C!==void 0?z.resolve(S.Ms.get(C)):S.Pi.getTargetData(_,w)})(s,h,Xn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:me.min(),t?u:Re()))).next((m=>(p1(s,ZS(e),m),{documents:m,Qs:u})))))}function p1(r,e,t){let s=r.Os.get(e)||me.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(e,s)}class oy{constructor(){this.activeTargetIds=sA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m1{constructor(){this.Mo=new oy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new oy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="ConnectivityMonitor";class ly{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){te(ay,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){te(ay,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru=null;function Df(){return Ru===null?Ru=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ru++,"0x"+Ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="RestConnection",y1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Ku?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Df(),m=this.zo(e,t.toUriEncodedString());te(lf,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),w=To(_);return this.Jo(e,m,y,s,w).then((S=>(te(lf,`Received RPC '${e}' ${h}: `,S),S)),(S=>{throw go(lf,`RPC '${e}' ${h} failed with error: `,S,"url: ",m,"request:",s),S}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ao})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=y1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class E1 extends _1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Df();return new Promise(((m,y)=>{const _=new x_;_.setWithCredentials(!0),_.listenOnce(L_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Ou.NO_ERROR:const S=_.getResponseJson();te(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),m(S);break;case Ou.TIMEOUT:te(Lt,`RPC '${e}' ${h} timed out`),y(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const C=_.getStatus();if(te(Lt,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let F=_.getResponseJson();Array.isArray(F)&&(F=F[0]);const W=F==null?void 0:F.error;if(W&&W.status&&W.message){const Q=(function(_e){const pe=_e.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(pe)>=0?pe:B.UNKNOWN})(W.status);y(new Z(Q,W.message))}else y(new Z(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new Z(B.UNAVAILABLE,"Connection failed."));break;default:he(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{te(Lt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);te(Lt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Df(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=F_(),m=b_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");te(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const S=h.createWebChannel(w,y);this.I_(S);let C=!1,F=!1;const W=new v1({Yo:q=>{F?te(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(C||(te(Lt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),C=!0),te(Lt,`RPC '${e}' stream ${o} sending:`,q),S.send(q))},Zo:()=>S.close()}),Q=(q,_e,pe)=>{q.listen(_e,(we=>{try{pe(we)}catch(Pe){setTimeout((()=>{throw Pe}),0)}}))};return Q(S,Aa.EventType.OPEN,(()=>{F||(te(Lt,`RPC '${e}' stream ${o} transport opened.`),W.o_())})),Q(S,Aa.EventType.CLOSE,(()=>{F||(F=!0,te(Lt,`RPC '${e}' stream ${o} transport closed`),W.a_(),this.E_(S))})),Q(S,Aa.EventType.ERROR,(q=>{F||(F=!0,go(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),W.a_(new Z(B.UNAVAILABLE,"The operation could not be completed")))})),Q(S,Aa.EventType.MESSAGE,(q=>{var _e;if(!F){const pe=q.data[0];be(!!pe,16349);const we=pe,Pe=(we==null?void 0:we.error)||((_e=we[0])==null?void 0:_e.error);if(Pe){te(Lt,`RPC '${e}' stream ${o} received error:`,Pe);const He=Pe.status;let ke=(function(R){const O=ct[R];if(O!==void 0)return vv(O)})(He),k=Pe.message;ke===void 0&&(ke=B.INTERNAL,k="Unknown error status: "+He+" with message "+Pe.message),F=!0,W.a_(new Z(ke,k)),S.close()}else te(Lt,`RPC '${e}' stream ${o} received:`,pe),W.u_(pe)}})),Q(m,M_.STAT_EVENT,(q=>{q.stat===vf.PROXY?te(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===vf.NOPROXY&&te(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{W.__()}),0),W}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function uf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r){return new SA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="PersistentStream";class xv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new Z(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(uy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(te(uy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class w1 extends xv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=RA(this.serializer,e),s=(function(u){if(!("targetChange"in u))return me.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?Zn(h.readTime):me.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=kf(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Sf(y)?{documents:NA(u,y)}:{query:DA(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Tv(u,h.resumeToken);const _=Cf(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(me.min())>0){m.readTime=ec(u,h.snapshotVersion.toTimestamp());const _=Cf(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=VA(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=kf(this.serializer),t.removeTarget=e,this.q_(t)}}class T1 extends xv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kA(e.writeResults,e.commitTime),s=Zn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=kf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>PA(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{}class S1 extends I1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,Rf(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Z(B.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Rf(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new Z(B.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class A1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rr(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="RemoteStore";class C1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{ps(this)&&(te(hs,"Restarting streams for network reachability change."),await(async function(y){const _=ye(y);_.Ea.add(4),await tl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await vc(_)})(this))}))})),this.Ra=new A1(s,o)}}async function vc(r){if(ps(r))for(const e of r.da)await e(!0)}async function tl(r){for(const e of r.da)await e(!1)}function Lv(r,e){const t=ye(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),md(t)?pd(t):ko(t).O_()&&dd(t,e))}function fd(r,e){const t=ye(r),s=ko(t);t.Ia.delete(e),s.O_()&&Mv(t,e),t.Ia.size===0&&(s.O_()?s.L_():ps(t)&&t.Ra.set("Unknown"))}function dd(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ko(r).Y_(e)}function Mv(r,e){r.Va.Ue(e),ko(r).Z_(e)}function pd(r){r.Va=new EA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),ko(r).start(),r.Ra.ua()}function md(r){return ps(r)&&!ko(r).x_()&&r.Ia.size>0}function ps(r){return ye(r).Ea.size===0}function bv(r){r.Va=void 0}async function R1(r){r.Ra.set("Online")}async function P1(r){r.Ia.forEach(((e,t)=>{dd(r,e)}))}async function k1(r,e){bv(r),md(r)?(r.Ra.ha(e),pd(r)):r.Ra.set("Unknown")}async function N1(r,e,t){if(r.Ra.set("Online"),e instanceof wv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(r,e)}catch(s){te(hs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await nc(r,s)}else if(e instanceof Mu?r.Va.Ze(e):e instanceof Ev?r.Va.st(e):r.Va.tt(e),!t.isEqual(me.min()))try{const s=await Ov(r.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const w=u.Ia.get(y);if(!w)return;u.Ia.set(y,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),Mv(u,y);const S=new di(w.target,y,_,w.sequenceNumber);dd(u,S)})),u.remoteSyncer.applyRemoteEvent(m)})(r,t)}catch(s){te(hs,"Failed to raise snapshot:",s),await nc(r,s)}}async function nc(r,e,t){if(!Ro(e))throw e;r.Ea.add(1),await tl(r),r.Ra.set("Offline"),t||(t=()=>Ov(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{te(hs,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await vc(r)}))}function Fv(r,e){return e().catch((t=>nc(r,t,e)))}async function Ec(r){const e=ye(r),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jf;for(;D1(e);)try{const o=await f1(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,O1(e,o)}catch(o){await nc(e,o)}Uv(e)&&jv(e)}function D1(r){return ps(r)&&r.Ta.length<10}function O1(r,e){r.Ta.push(e);const t=Si(r);t.O_()&&t.X_&&t.ea(e.mutations)}function Uv(r){return ps(r)&&!Si(r).x_()&&r.Ta.length>0}function jv(r){Si(r).start()}async function V1(r){Si(r).ra()}async function x1(r){const e=Si(r);for(const t of r.Ta)e.ea(t.mutations)}async function L1(r,e,t){const s=r.Ta.shift(),o=sd.from(s,e,t);await Fv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Ec(r)}async function M1(r,e){e&&Si(r).X_&&await(async function(s,o){if((function(h){return yA(h)&&h!==B.ABORTED})(o.code)){const u=s.Ta.shift();Si(s).B_(),await Fv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Ec(s)}})(r,e),Uv(r)&&jv(r)}async function cy(r,e){const t=ye(r);t.asyncQueue.verifyOperationInProgress(),te(hs,"RemoteStore received new credentials");const s=ps(t);t.Ea.add(3),await tl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await vc(t)}async function b1(r,e){const t=ye(r);e?(t.Ea.delete(2),await vc(t)):e||(t.Ea.add(2),await tl(t),t.Ra.set("Unknown"))}function ko(r){return r.ma||(r.ma=(function(t,s,o){const u=ye(t);return u.sa(),new w1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:R1.bind(null,r),t_:P1.bind(null,r),r_:k1.bind(null,r),H_:N1.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),md(r)?pd(r):r.Ra.set("Unknown")):(await r.ma.stop(),bv(r))}))),r.ma}function Si(r){return r.fa||(r.fa=(function(t,s,o){const u=ye(t);return u.sa(),new T1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:V1.bind(null,r),r_:M1.bind(null,r),ta:x1.bind(null,r),na:L1.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await Ec(r)):(await r.fa.stop(),r.Ta.length>0&&(te(hs,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new gd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yd(r,e){if(Rr("AsyncQueue",`${e}: ${r}`),Ro(r))return new Z(B.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static emptySet(e){return new ho(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ae.comparator(t.key,s.key):(t,s)=>ae.comparator(t.key,s.key),this.keyedMap=Ca(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ho)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ho;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.ga=new Ze(ae.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):he(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class wo{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new wo(e,t,ho.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class U1{constructor(){this.queries=fy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ye(t),u=o.queries;o.queries=fy(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function fy(){return new ds((r=>ov(r)),dc)}async function Bv(r,e){const t=ye(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new F1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=yd(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&_d(t)}async function zv(r,e){const t=ye(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function j1(r,e){const t=ye(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&_d(t)}function B1(r,e,t){const s=ye(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function _d(r){r.Ca.forEach((e=>{e.next()}))}var Of,dy;(dy=Of||(Of={})).Ma="default",dy.Cache="cache";class $v{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Of.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.key=e}}class qv{constructor(e){this.key=e}}class z1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Re(),this.mutatedKeys=Re(),this.eu=av(e),this.tu=new ho(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new hy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,S)=>{const C=o.get(w),F=pc(this.query,S)?S:null,W=!!C&&this.mutatedKeys.has(C.key),Q=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let q=!1;C&&F?C.data.isEqual(F.data)?W!==Q&&(s.track({type:3,doc:F}),q=!0):this.su(C,F)||(s.track({type:2,doc:F}),q=!0,(y&&this.eu(F,y)>0||_&&this.eu(F,_)<0)&&(m=!0)):!C&&F?(s.track({type:0,doc:F}),q=!0):C&&!F&&(s.track({type:1,doc:C}),q=!0,(y||_)&&(m=!0)),q&&(F?(h=h.add(F),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,S)=>(function(F,W){const Q=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{Rt:q})}};return Q(F)-Q(W)})(w.type,S.type)||this.eu(w.doc,S.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new wo(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Re(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new qv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Hv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return wo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const vd="SyncEngine";class $1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class H1{constructor(e){this.key=e,this.hu=!1}}class q1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ds((m=>ov(m)),dc),this.Iu=new Map,this.Eu=new Set,this.du=new Ze(ae.comparator),this.Au=new Map,this.Ru=new ld,this.Vu={},this.mu=new Map,this.fu=Eo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function G1(r,e,t=!0){const s=Xv(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Gv(s,e,t,!0),o}async function W1(r,e){const t=Xv(r);await Gv(t,e,!0,!1)}async function Gv(r,e,t,s){const o=await d1(r.localStore,Xn(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await K1(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Lv(r.remoteStore,o),m}async function K1(r,e,t,s,o){r.pu=(S,C,F)=>(async function(Q,q,_e,pe){let we=q.view.ru(_e);we.Cs&&(we=await sy(Q.localStore,q.query,!1).then((({documents:k})=>q.view.ru(k,we))));const Pe=pe&&pe.targetChanges.get(q.targetId),He=pe&&pe.targetMismatches.get(q.targetId)!=null,ke=q.view.applyChanges(we,Q.isPrimaryClient,Pe,He);return my(Q,q.targetId,ke.au),ke.snapshot})(r,S,C,F);const u=await sy(r.localStore,e,!0),h=new z1(e,u.Qs),m=h.ru(u.documents),y=el.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(m,r.isPrimaryClient,y);my(r,t,_.au);const w=new $1(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),_.snapshot}async function Q1(r,e,t){const s=ye(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!dc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Nf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&fd(s.remoteStore,o.targetId),Vf(s,o.targetId)})).catch(Co)):(Vf(s,o.targetId),await Nf(s.localStore,o.targetId,!0))}async function Y1(r,e){const t=ye(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),fd(t.remoteStore,s.targetId))}async function X1(r,e,t){const s=iC(r);try{const o=await(function(h,m){const y=ye(h),_=Ke.now(),w=m.reduce(((F,W)=>F.add(W.key)),Re());let S,C;return y.persistence.runTransaction("Locally write mutations","readwrite",(F=>{let W=kr(),Q=Re();return y.Ns.getEntries(F,w).next((q=>{W=q,W.forEach(((_e,pe)=>{pe.isValidDocument()||(Q=Q.add(_e))}))})).next((()=>y.localDocuments.getOverlayedDocuments(F,W))).next((q=>{S=q;const _e=[];for(const pe of m){const we=fA(pe,S.get(pe.key).overlayedDocument);we!=null&&_e.push(new Ri(pe.key,we,J_(we.value.mapValue),Jn.exists(!0)))}return y.mutationQueue.addMutationBatch(F,_,_e,m)})).next((q=>{C=q;const _e=q.applyToLocalDocumentSet(S,Q);return y.documentOverlayCache.saveOverlays(F,q.batchId,_e)}))})).then((()=>({batchId:C.batchId,changes:uv(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new Ze(Ce)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await nl(s,o.changes),await Ec(s.remoteStore)}catch(o){const u=yd(o,"Failed to persist write");t.reject(u)}}async function Wv(r,e){const t=ye(r);try{const s=await c1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?be(h.hu,14607):o.removedDocuments.size>0&&(be(h.hu,42227),h.hu=!1))})),await nl(t,s,e)}catch(s){await Co(s)}}function py(r,e,t){const s=ye(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=ye(h);y.onlineState=m;let _=!1;y.queries.forEach(((w,S)=>{for(const C of S.Sa)C.va(m)&&(_=!0)})),_&&_d(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function J1(r,e,t){const s=ye(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new Ze(ae.comparator);h=h.insert(u,bt.newNoDocument(u,me.min()));const m=Re().add(u),y=new yc(me.min(),new Map,new Ze(Ce),h,m);await Wv(s,y),s.du=s.du.remove(u),s.Au.delete(e),Ed(s)}else await Nf(s.localStore,e,!1).then((()=>Vf(s,e,t))).catch(Co)}async function Z1(r,e){const t=ye(r),s=e.batch.batchId;try{const o=await u1(t.localStore,e);Qv(t,s,null),Kv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await nl(t,o)}catch(o){await Co(o)}}async function eC(r,e,t){const s=ye(r);try{const o=await(function(h,m){const y=ye(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return y.mutationQueue.lookupMutationBatch(_,m).next((S=>(be(S!==null,37113),w=S.keys(),y.mutationQueue.removeMutationBatch(_,S)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>y.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Qv(s,e,t),Kv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await nl(s,o)}catch(o){await Co(o)}}function Kv(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Qv(r,e,t){const s=ye(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Vf(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||Yv(r,s)}))}function Yv(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(fd(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),Ed(r))}function my(r,e,t){for(const s of t)s instanceof Hv?(r.Ru.addReference(s.key,e),tC(r,s)):s instanceof qv?(te(vd,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||Yv(r,s.key)):he(19791,{wu:s})}function tC(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Eu.has(s)||(te(vd,"New document in limbo: "+t),r.Eu.add(s),Ed(r))}function Ed(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ae($e.fromString(e)),s=r.fu.next();r.Au.set(s,new H1(t)),r.du=r.du.insert(t,s),Lv(r.remoteStore,new di(Xn(rd(t.path)),s,"TargetPurposeLimboResolution",cc.ce))}}async function nl(r,e,t){const s=ye(r),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,S?"current":"not-current")}if(_){o.push(_);const S=cd.As(y.targetId,_);u.push(S)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const w=ye(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>z.forEach(_,(C=>z.forEach(C.Es,(F=>w.persistence.referenceDelegate.addReference(S,C.targetId,F))).next((()=>z.forEach(C.ds,(F=>w.persistence.referenceDelegate.removeReference(S,C.targetId,F)))))))))}catch(S){if(!Ro(S))throw S;te(hd,"Failed to update sequence numbers: "+S)}for(const S of _){const C=S.targetId;if(!S.fromCache){const F=w.Ms.get(C),W=F.snapshotVersion,Q=F.withLastLimboFreeSnapshotVersion(W);w.Ms=w.Ms.insert(C,Q)}}})(s.localStore,u))}async function nC(r,e){const t=ye(r);if(!t.currentUser.isEqual(e)){te(vd,"User change. New user:",e.toKey());const s=await Dv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new Z(B.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nl(t,s.Ls)}}function rC(r,e){const t=ye(r),s=t.Au.get(e);if(s&&s.hu)return Re().add(s.key);{let o=Re();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Xv(r){const e=ye(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J1.bind(null,e),e.Pu.H_=j1.bind(null,e.eventManager),e.Pu.yu=B1.bind(null,e.eventManager),e}function iC(r){const e=ye(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eC.bind(null,e),e}class rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return l1(this.persistence,new s1,e.initialUser,this.serializer)}Cu(e){return new Nv(ud.mi,this.serializer)}Du(e){return new m1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rc.provider={build:()=>new rc};class sC extends rc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){be(this.persistence.referenceDelegate instanceof tc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new HA(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new Nv((s=>tc.mi(s,t)),this.serializer)}}class xf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>py(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=nC.bind(null,this.syncEngine),await b1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new U1})()}createDatastore(e){const t=_c(e.databaseInfo.databaseId),s=(function(u){return new E1(u)})(e.databaseInfo);return(function(u,h,m,y){return new S1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new C1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>py(this.syncEngine,t,0)),(function(){return ly.v()?new ly:new g1})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,w){const S=new q1(o,u,h,m,y,_);return w&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=ye(o);te(hs,"RemoteStore shutting down."),u.Ea.add(5),await tl(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}xf.provider={build:()=>new xf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="FirestoreClient";class oC{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=Xf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{te(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(te(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yd(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function cf(r,e){r.asyncQueue.verifyOperationInProgress(),te(Ai,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Dv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function gy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await aC(r);te(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>cy(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>cy(e.remoteStore,o))),r._onlineComponents=e}async function aC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){te(Ai,"Using user provided OfflineComponentProvider");try{await cf(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;go("Error using user provided cache. Falling back to memory cache: "+t),await cf(r,new rc)}}else te(Ai,"Using default OfflineComponentProvider"),await cf(r,new sC(void 0));return r._offlineComponents}async function Zv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(te(Ai,"Using user provided OnlineComponentProvider"),await gy(r,r._uninitializedComponentsProvider._online)):(te(Ai,"Using default OnlineComponentProvider"),await gy(r,new xf))),r._onlineComponents}function lC(r){return Zv(r).then((e=>e.syncEngine))}async function eE(r){const e=await Zv(r),t=e.eventManager;return t.onListen=G1.bind(null,e.syncEngine),t.onUnlisten=Q1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=W1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Y1.bind(null,e.syncEngine),t}function uC(r,e,t={}){const s=new Sr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const w=new Jv({next:C=>{w.Nu(),h.enqueueAndForget((()=>zv(u,S)));const F=C.docs.has(m);!F&&C.fromCache?_.reject(new Z(B.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&C.fromCache&&y&&y.source==="server"?_.reject(new Z(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(C)},error:C=>_.reject(C)}),S=new $v(rd(m.path),w,{includeMetadataChanges:!0,qa:!0});return Bv(u,S)})(await eE(r),r.asyncQueue,e,t,s))),s.promise}function cC(r,e,t={}){const s=new Sr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const w=new Jv({next:C=>{w.Nu(),h.enqueueAndForget((()=>zv(u,S))),C.fromCache&&y.source==="server"?_.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(C)},error:C=>_.reject(C)}),S=new $v(m,w,{includeMetadataChanges:!0,qa:!0});return Bv(u,S)})(await eE(r),r.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="firestore.googleapis.com",_y=!0;class vy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nE,this.ssl=_y}else this.host=e.host,this.ssl=e.ssl??_y;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zA)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tE(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new gS;switch(s.type){case"firstParty":return new ES(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=yy.get(t);s&&(te("ComponentProvider","Removing Datastore"),yy.delete(t),s.terminate())})(this),Promise.resolve()}}function hC(r,e,t,s={}){var _;r=Pr(r,wc);const o=To(e),u=r._getSettings(),h={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;o&&(Yy(`https://${m}`),Xy("Firestore",!0)),u.host!==nE&&u.host!==m&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!as(y,h)&&(r._setSettings(y),s.mockUserToken)){let w,S;if(typeof s.mockUserToken=="string")w=s.mockUserToken,S=Mt.MOCK_USER;else{w=$w(s.mockUserToken,(_=r._app)==null?void 0:_.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Mt(C)}r._authCredentials=new yS(new j_(w,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pi(this.firestore,e,this._query)}}class ot{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ja(t,ot._jsonSchema))return new ot(e,s||null,new ae($e.fromString(t.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:ft("string",ot._jsonSchemaVersion),referencePath:ft("string")};class _i extends Pi{constructor(e,t,s){super(e,t,rd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new ae(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function cR(r,e,...t){if(r=Rt(r),B_("collection","path",e),r instanceof wc){const s=$e.fromString(e,...t);return Og(s),new _i(r,null,s)}{if(!(r instanceof ot||r instanceof _i))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child($e.fromString(e,...t));return Og(s),new _i(r.firestore,null,s)}}function hR(r,e,...t){if(r=Rt(r),arguments.length===1&&(e=Xf.newId()),B_("doc","path",e),r instanceof wc){const s=$e.fromString(e,...t);return Dg(s),new ot(r,null,new ae(s))}{if(!(r instanceof ot||r instanceof _i))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child($e.fromString(e,...t));return Dg(s),new ot(r.firestore,r instanceof _i?r.converter:null,new ae(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="AsyncQueue";class wy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vv(this,"async_queue_retry"),this._c=()=>{const s=uf();s&&te(Ey,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=uf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=uf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Sr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;te(Ey,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Rr("INTERNAL UNHANDLED ERROR: ",Ty(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=gd.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&he(47125,{Pc:Ty(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ty(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class rl extends wc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new wy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wy(e),this._firestoreClient=void 0,await e}}}function fR(r,e){const t=typeof r=="object"?r:e_(),s=typeof r=="string"?r:Ku,o=Uf(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Bw("firestore");u&&hC(o,...u)}return o}function wd(r){if(r._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||fC(r),r._firestoreClient}function fC(r){var s,o,u;const e=r._freezeSettings(),t=(function(m,y,_,w){return new bS(m,y,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,tE(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new oC(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(Pt.fromBase64String(e))}catch(t){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ja(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:ft("string",gn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Ja(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:ft("string",er._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ja(e,tr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tr(e.vectorValues);throw new Z(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tr._jsonSchemaVersion="firestore/vectorValue/1.0",tr._jsonSchema={type:ft("string",tr._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=/^__.*__$/;class pC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,t,this.fieldTransforms):new Za(e,this.data,t,this.fieldTransforms)}}class rE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ri(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function iE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ac:r})}}class Id{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Id({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ic(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(iE(this.Ac)&&dC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class mC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||_c(e)}Cc(e,t,s,o=!1){return new Id({Ac:e,methodName:t,Dc:s,path:Ct.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sd(r){const e=r._freezeSettings(),t=_c(r._databaseId);return new mC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function gC(r,e,t,s,o,u={}){const h=r.Cc(u.merge||u.mergeFields?2:0,e,t,o);Ad("Data must be an object, but it was:",h,s);const m=sE(s,h);let y,_;if(u.merge)y=new an(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const S of u.mergeFields){const C=Lf(e,S,t);if(!h.contains(C))throw new Z(B.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);aE(w,C)||w.push(C)}y=new an(w),_=h.fieldTransforms.filter((S=>y.covers(S.field)))}else y=null,_=h.fieldTransforms;return new pC(new Yt(m),y,_)}class Ic extends Td{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function yC(r,e,t,s){const o=r.Cc(1,e,t);Ad("Data must be an object, but it was:",o,s);const u=[],h=Yt.empty();Ci(s,((y,_)=>{const w=Cd(e,y,t);_=Rt(_);const S=o.yc(w);if(_ instanceof Ic)u.push(w);else{const C=il(_,S);C!=null&&(u.push(w),h.set(w,C))}}));const m=new an(u);return new rE(h,m,o.fieldTransforms)}function _C(r,e,t,s,o,u){const h=r.Cc(1,e,t),m=[Lf(e,s,t)],y=[o];if(u.length%2!=0)throw new Z(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(Lf(e,u[C])),y.push(u[C+1]);const _=[],w=Yt.empty();for(let C=m.length-1;C>=0;--C)if(!aE(_,m[C])){const F=m[C];let W=y[C];W=Rt(W);const Q=h.yc(F);if(W instanceof Ic)_.push(F);else{const q=il(W,Q);q!=null&&(_.push(F),w.set(F,q))}}const S=new an(_);return new rE(w,S,h.fieldTransforms)}function vC(r,e,t,s=!1){return il(t,r.Cc(s?4:3,e))}function il(r,e){if(oE(r=Rt(r)))return Ad("Unsupported field value:",e,r),sE(r,e);if(r instanceof Td)return(function(s,o){if(!iE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=il(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(r,e)}return(function(s,o){if((s=Rt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return oA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ke.fromDate(s);return{timestampValue:ec(o.serializer,u)}}if(s instanceof Ke){const u=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ec(o.serializer,u)}}if(s instanceof er)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof gn)return{bytesValue:Tv(o.serializer,s._byteString)};if(s instanceof ot){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ad(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof tr)return(function(h,m){return{mapValue:{fields:{[Y_]:{stringValue:X_},[Qu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return id(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${uc(s)}`)})(r,e)}function sE(r,e){const t={};return H_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(r,((s,o)=>{const u=il(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function oE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ke||r instanceof er||r instanceof gn||r instanceof ot||r instanceof Td||r instanceof tr)}function Ad(r,e,t){if(!oE(t)||!z_(t)){const s=uc(t);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function Lf(r,e,t){if((e=Rt(e))instanceof Tc)return e._internalPath;if(typeof e=="string")return Cd(r,e);throw ic("Field path arguments must be of type string or ",r,!1,void 0,t)}const EC=new RegExp("[~\\*/\\[\\]]");function Cd(r,e,t){if(e.search(EC)>=0)throw ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Tc(...e.split("."))._internalPath}catch{throw ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ic(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new Z(B.INVALID_ARGUMENT,m+r+y)}function aE(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wC extends lE{data(){return super.data()}}function Rd(r,e){return typeof e=="string"?Cd(r,e):e instanceof Tc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pd{}class kd extends Pd{}function dR(r,e,...t){let s=[];e instanceof Pd&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof Dd)).length,m=u.filter((y=>y instanceof Nd)).length;if(h>1||h>0&&m>0)throw new Z(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Nd extends kd{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Nd(e,t,s)}_apply(e){const t=this._parse(e);return uE(e._query,t),new Pi(e.firestore,e.converter,Af(e._query,t))}_parse(e){const t=Sd(e.firestore);return(function(u,h,m,y,_,w,S){let C;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new Z(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Sy(S,w);const W=[];for(const Q of S)W.push(Iy(y,u,Q));C={arrayValue:{values:W}}}else C=Iy(y,u,S)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Sy(S,w),C=vC(m,h,S,w==="in"||w==="not-in");return ht.create(_,w,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Dd extends Pd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Dd(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Nn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)uE(h,y),h=Af(h,y)})(e._query,t),new Pi(e.firestore,e.converter,Af(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Od extends kd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Od(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new Z(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new Z(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new za(u,h)})(e._query,this._field,this._direction);return new Pi(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Po(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function pR(r,e="asc"){const t=e,s=Rd("orderBy",r);return Od._create(s,t)}class Vd extends kd{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Vd(e,t,s)}_apply(e){return new Pi(e.firestore,e.converter,Xu(e._query,this._limit,this._limitType))}}function mR(r){return Vd._create("limit",r,"F")}function Iy(r,e,t){if(typeof(t=Rt(t))=="string"){if(t==="")throw new Z(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sv(e)&&t.indexOf("/")!==-1)throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child($e.fromString(t));if(!ae.isDocumentKey(s))throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jg(r,new ae(s))}if(t instanceof ot)return jg(r,t._key);throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(t)}.`)}function Sy(r,e){if(!Array.isArray(r)||r.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uE(r,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class IC{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ci(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Qu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>st(h.doubleValue)));return new tr(t)}convertGeoPoint(e){return new er(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=fc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ua(e));default:return null}}convertTimestamp(e){const t=wi(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=$e.fromString(e);be(Pv(s),9688,{name:e});const o=new ja(s.get(1),s.get(3)),u=new ae(s.popFirst(5));return o.isEqual(t)||Rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Pa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class os extends lE{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Rd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=os._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}os._jsonSchemaVersion="firestore/documentSnapshot/1.0",os._jsonSchema={type:ft("string",os._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class bu extends os{data(e={}){return super.data(e)}}class fo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new bu(this._firestore,this._userDataWriter,s.key,s,new Pa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:AC(m.type),doc:y,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function AC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(r){r=Pr(r,ot);const e=Pr(r.firestore,rl);return uC(wd(e),r._key).then((t=>CC(e,r,t)))}fo._jsonSchemaVersion="firestore/querySnapshot/1.0",fo._jsonSchema={type:ft("string",fo._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class cE extends IC{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,t)}}function yR(r){r=Pr(r,Pi);const e=Pr(r.firestore,rl),t=wd(e),s=new cE(e);return TC(r._query),cC(t,r._query).then((o=>new fo(e,s,r,o)))}function _R(r,e,t){r=Pr(r,ot);const s=Pr(r.firestore,rl),o=SC(r.converter,e);return hE(s,[gC(Sd(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Jn.none())])}function vR(r,e,t,...s){r=Pr(r,ot);const o=Pr(r.firestore,rl),u=Sd(o);let h;return h=typeof(e=Rt(e))=="string"||e instanceof Tc?_C(u,"updateDoc",r._key,e,t,s):yC(u,"updateDoc",r._key,e),hE(o,[h.toMutation(r._key,Jn.exists(!0))])}function hE(r,e){return(function(s,o){const u=new Sr;return s.asyncQueue.enqueueAndForget((async()=>X1(await lC(s),o,u))),u.promise})(wd(r),e)}function CC(r,e,t){const s=t.docs.get(e._key),o=new cE(r);return new os(r,o,e._key,s,new Pa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Ao=o})(Io),po(new ls("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new rl(new _S(s.getProvider("auth-internal")),new wS(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(_.options.projectId,w)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),gi(Rg,Pg,e),gi(Rg,Pg,"esm2020")})();var Ay;(function(r){r.STRING="string",r.NUMBER="number",r.INTEGER="integer",r.BOOLEAN="boolean",r.ARRAY="array",r.OBJECT="object"})(Ay||(Ay={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cy;(function(r){r.LANGUAGE_UNSPECIFIED="language_unspecified",r.PYTHON="python"})(Cy||(Cy={}));var Ry;(function(r){r.OUTCOME_UNSPECIFIED="outcome_unspecified",r.OUTCOME_OK="outcome_ok",r.OUTCOME_FAILED="outcome_failed",r.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Ry||(Ry={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=["user","model","function","system"];var ky;(function(r){r.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",r.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",r.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",r.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",r.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",r.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(ky||(ky={}));var Ny;(function(r){r.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",r.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",r.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",r.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",r.BLOCK_NONE="BLOCK_NONE"})(Ny||(Ny={}));var Dy;(function(r){r.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",r.NEGLIGIBLE="NEGLIGIBLE",r.LOW="LOW",r.MEDIUM="MEDIUM",r.HIGH="HIGH"})(Dy||(Dy={}));var Oy;(function(r){r.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER"})(Oy||(Oy={}));var La;(function(r){r.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.BLOCKLIST="BLOCKLIST",r.PROHIBITED_CONTENT="PROHIBITED_CONTENT",r.SPII="SPII",r.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",r.OTHER="OTHER"})(La||(La={}));var Vy;(function(r){r.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",r.RETRIEVAL_QUERY="RETRIEVAL_QUERY",r.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",r.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",r.CLASSIFICATION="CLASSIFICATION",r.CLUSTERING="CLUSTERING"})(Vy||(Vy={}));var xy;(function(r){r.MODE_UNSPECIFIED="MODE_UNSPECIFIED",r.AUTO="AUTO",r.ANY="ANY",r.NONE="NONE"})(xy||(xy={}));var Ly;(function(r){r.MODE_UNSPECIFIED="MODE_UNSPECIFIED",r.MODE_DYNAMIC="MODE_DYNAMIC"})(Ly||(Ly={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class ro extends Ft{constructor(e,t){super(e),this.response=t}}class fE extends Ft{constructor(e,t,s,o){super(e),this.status=t,this.statusText=s,this.errorDetails=o}}class vi extends Ft{}class dE extends Ft{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="https://generativelanguage.googleapis.com",PC="v1beta",kC="0.24.1",NC="genai-js";var fs;(function(r){r.GENERATE_CONTENT="generateContent",r.STREAM_GENERATE_CONTENT="streamGenerateContent",r.COUNT_TOKENS="countTokens",r.EMBED_CONTENT="embedContent",r.BATCH_EMBED_CONTENTS="batchEmbedContents"})(fs||(fs={}));class DC{constructor(e,t,s,o,u){this.model=e,this.task=t,this.apiKey=s,this.stream=o,this.requestOptions=u}toString(){var e,t;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||PC;let u=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||RC}/${s}/${this.model}:${this.task}`;return this.stream&&(u+="?alt=sse"),u}}function OC(r){const e=[];return r!=null&&r.apiClient&&e.push(r.apiClient),e.push(`${NC}/${kC}`),e.join(" ")}async function VC(r){var e;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",OC(r.requestOptions)),t.append("x-goog-api-key",r.apiKey);let s=(e=r.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new vi(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,u]of s.entries()){if(o==="x-goog-api-key")throw new vi(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new vi(`Header name ${o} can only be set using the apiClient field`);t.append(o,u)}}return t}async function xC(r,e,t,s,o,u){const h=new DC(r,e,t,s,u);return{url:h.toString(),fetchOptions:Object.assign(Object.assign({},FC(u)),{method:"POST",headers:await VC(h),body:o})}}async function sl(r,e,t,s,o,u={},h=fetch){const{url:m,fetchOptions:y}=await xC(r,e,t,s,o,u);return LC(m,y,h)}async function LC(r,e,t=fetch){let s;try{s=await t(r,e)}catch(o){MC(o,r)}return s.ok||await bC(s,r),s}function MC(r,e){let t=r;throw t.name==="AbortError"?(t=new dE(`Request aborted when fetching ${e.toString()}: ${r.message}`),t.stack=r.stack):r instanceof fE||r instanceof vi||(t=new Ft(`Error fetching from ${e.toString()}: ${r.message}`),t.stack=r.stack),t}async function bC(r,e){let t="",s;try{const o=await r.json();t=o.error.message,o.error.details&&(t+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new fE(`Error fetching from ${e.toString()}: [${r.status} ${r.statusText}] ${t}`,r.status,r.statusText,s)}function FC(r){const e={};if((r==null?void 0:r.signal)!==void 0||(r==null?void 0:r.timeout)>=0){const t=new AbortController;(r==null?void 0:r.timeout)>=0&&setTimeout(()=>t.abort(),r.timeout),r!=null&&r.signal&&r.signal.addEventListener("abort",()=>{t.abort()}),e.signal=t.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(r){return r.text=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Fu(r.candidates[0]))throw new ro(`${li(r)}`,r);return UC(r)}else if(r.promptFeedback)throw new ro(`Text not available. ${li(r)}`,r);return""},r.functionCall=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Fu(r.candidates[0]))throw new ro(`${li(r)}`,r);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),My(r)[0]}else if(r.promptFeedback)throw new ro(`Function call not available. ${li(r)}`,r)},r.functionCalls=()=>{if(r.candidates&&r.candidates.length>0){if(r.candidates.length>1&&console.warn(`This response had ${r.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Fu(r.candidates[0]))throw new ro(`${li(r)}`,r);return My(r)}else if(r.promptFeedback)throw new ro(`Function call not available. ${li(r)}`,r)},r}function UC(r){var e,t,s,o;const u=[];if(!((t=(e=r.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const h of(o=(s=r.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)h.text&&u.push(h.text),h.executableCode&&u.push("\n```"+h.executableCode.language+`
`+h.executableCode.code+"\n```\n"),h.codeExecutionResult&&u.push("\n```\n"+h.codeExecutionResult.output+"\n```\n");return u.length>0?u.join(""):""}function My(r){var e,t,s,o;const u=[];if(!((t=(e=r.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const h of(o=(s=r.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)h.functionCall&&u.push(h.functionCall);if(u.length>0)return u}const jC=[La.RECITATION,La.SAFETY,La.LANGUAGE];function Fu(r){return!!r.finishReason&&jC.includes(r.finishReason)}function li(r){var e,t,s;let o="";if((!r.candidates||r.candidates.length===0)&&r.promptFeedback)o+="Response was blocked",!((e=r.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${r.promptFeedback.blockReason}`),!((t=r.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(o+=`: ${r.promptFeedback.blockReasonMessage}`);else if(!((s=r.candidates)===null||s===void 0)&&s[0]){const u=r.candidates[0];Fu(u)&&(o+=`Candidate was blocked due to ${u.finishReason}`,u.finishMessage&&(o+=`: ${u.finishMessage}`))}return o}function qa(r){return this instanceof qa?(this.v=r,this):new qa(r)}function BC(r,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=t.apply(r,e||[]),o,u=[];return o={},h("next"),h("throw"),h("return"),o[Symbol.asyncIterator]=function(){return this},o;function h(C){s[C]&&(o[C]=function(F){return new Promise(function(W,Q){u.push([C,F,W,Q])>1||m(C,F)})})}function m(C,F){try{y(s[C](F))}catch(W){S(u[0][3],W)}}function y(C){C.value instanceof qa?Promise.resolve(C.value.v).then(_,w):S(u[0][2],C)}function _(C){m("next",C)}function w(C){m("throw",C)}function S(C,F){C(F),u.shift(),u.length&&m(u[0][0],u[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function zC(r){const e=r.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=qC(e),[s,o]=t.tee();return{stream:HC(s),response:$C(o)}}async function $C(r){const e=[],t=r.getReader();for(;;){const{done:s,value:o}=await t.read();if(s)return xd(GC(e));e.push(o)}}function HC(r){return BC(this,arguments,function*(){const t=r.getReader();for(;;){const{value:s,done:o}=yield qa(t.read());if(o)break;yield yield qa(xd(s))}})}function qC(r){const e=r.getReader();return new ReadableStream({start(s){let o="";return u();function u(){return e.read().then(({value:h,done:m})=>{if(m){if(o.trim()){s.error(new Ft("Failed to parse stream"));return}s.close();return}o+=h;let y=o.match(by),_;for(;y;){try{_=JSON.parse(y[1])}catch{s.error(new Ft(`Error parsing JSON response: "${y[1]}"`));return}s.enqueue(_),o=o.substring(y[0].length),y=o.match(by)}return u()}).catch(h=>{let m=h;throw m.stack=h.stack,m.name==="AbortError"?m=new dE("Request aborted when reading from the stream"):m=new Ft("Error reading from the stream"),m})}}})}function GC(r){const e=r[r.length-1],t={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of r){if(s.candidates){let o=0;for(const u of s.candidates)if(t.candidates||(t.candidates=[]),t.candidates[o]||(t.candidates[o]={index:o}),t.candidates[o].citationMetadata=u.citationMetadata,t.candidates[o].groundingMetadata=u.groundingMetadata,t.candidates[o].finishReason=u.finishReason,t.candidates[o].finishMessage=u.finishMessage,t.candidates[o].safetyRatings=u.safetyRatings,u.content&&u.content.parts){t.candidates[o].content||(t.candidates[o].content={role:u.content.role||"user",parts:[]});const h={};for(const m of u.content.parts)m.text&&(h.text=m.text),m.functionCall&&(h.functionCall=m.functionCall),m.executableCode&&(h.executableCode=m.executableCode),m.codeExecutionResult&&(h.codeExecutionResult=m.codeExecutionResult),Object.keys(h).length===0&&(h.text=""),t.candidates[o].content.parts.push(h)}o++}s.usageMetadata&&(t.usageMetadata=s.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(r,e,t,s){const o=await sl(e,fs.STREAM_GENERATE_CONTENT,r,!0,JSON.stringify(t),s);return zC(o)}async function mE(r,e,t,s){const u=await(await sl(e,fs.GENERATE_CONTENT,r,!1,JSON.stringify(t),s)).json();return{response:xd(u)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(r){if(r!=null){if(typeof r=="string")return{role:"system",parts:[{text:r}]};if(r.text)return{role:"system",parts:[r]};if(r.parts)return r.role?r:{role:"system",parts:r.parts}}}function Ga(r){let e=[];if(typeof r=="string")e=[{text:r}];else for(const t of r)typeof t=="string"?e.push({text:t}):e.push(t);return WC(e)}function WC(r){const e={role:"user",parts:[]},t={role:"function",parts:[]};let s=!1,o=!1;for(const u of r)"functionResponse"in u?(t.parts.push(u),o=!0):(e.parts.push(u),s=!0);if(s&&o)throw new Ft("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new Ft("No content is provided for sending chat message.");return s?e:t}function KC(r,e){var t;let s={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(t=e==null?void 0:e.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const o=r.generateContentRequest!=null;if(r.contents){if(o)throw new vi("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=r.contents}else if(o)s=Object.assign(Object.assign({},s),r.generateContentRequest);else{const u=Ga(r);s.contents=[u]}return{generateContentRequest:s}}function Fy(r){let e;return r.contents?e=r:e={contents:[Ga(r)]},r.systemInstruction&&(e.systemInstruction=gE(r.systemInstruction)),e}function QC(r){return typeof r=="string"||Array.isArray(r)?{content:Ga(r)}:r}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],YC={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function XC(r){let e=!1;for(const t of r){const{role:s,parts:o}=t;if(!e&&s!=="user")throw new Ft(`First content should be with role 'user', got ${s}`);if(!Py.includes(s))throw new Ft(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Py)}`);if(!Array.isArray(o))throw new Ft("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new Ft("Each Content should have at least one part");const u={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const m of o)for(const y of Uy)y in m&&(u[y]+=1);const h=YC[s];for(const m of Uy)if(!h.includes(m)&&u[m]>0)throw new Ft(`Content with role '${s}' can't contain '${m}' part`);e=!0}}function jy(r){var e;if(r.candidates===void 0||r.candidates.length===0)return!1;const t=(e=r.candidates[0])===null||e===void 0?void 0:e.content;if(t===void 0||t.parts===void 0||t.parts.length===0)return!1;for(const s of t.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="SILENT_ERROR";class JC{constructor(e,t,s,o={}){this.model=t,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(XC(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var s,o,u,h,m,y;await this._sendPromise;const _=Ga(e),w={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(u=this.params)===null||u===void 0?void 0:u.tools,toolConfig:(h=this.params)===null||h===void 0?void 0:h.toolConfig,systemInstruction:(m=this.params)===null||m===void 0?void 0:m.systemInstruction,cachedContent:(y=this.params)===null||y===void 0?void 0:y.cachedContent,contents:[...this._history,_]},S=Object.assign(Object.assign({},this._requestOptions),t);let C;return this._sendPromise=this._sendPromise.then(()=>mE(this._apiKey,this.model,w,S)).then(F=>{var W;if(jy(F.response)){this._history.push(_);const Q=Object.assign({parts:[],role:"model"},(W=F.response.candidates)===null||W===void 0?void 0:W[0].content);this._history.push(Q)}else{const Q=li(F.response);Q&&console.warn(`sendMessage() was unsuccessful. ${Q}. Inspect response object for details.`)}C=F}).catch(F=>{throw this._sendPromise=Promise.resolve(),F}),await this._sendPromise,C}async sendMessageStream(e,t={}){var s,o,u,h,m,y;await this._sendPromise;const _=Ga(e),w={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(u=this.params)===null||u===void 0?void 0:u.tools,toolConfig:(h=this.params)===null||h===void 0?void 0:h.toolConfig,systemInstruction:(m=this.params)===null||m===void 0?void 0:m.systemInstruction,cachedContent:(y=this.params)===null||y===void 0?void 0:y.cachedContent,contents:[...this._history,_]},S=Object.assign(Object.assign({},this._requestOptions),t),C=pE(this._apiKey,this.model,w,S);return this._sendPromise=this._sendPromise.then(()=>C).catch(F=>{throw new Error(By)}).then(F=>F.response).then(F=>{if(jy(F)){this._history.push(_);const W=Object.assign({},F.candidates[0].content);W.role||(W.role="model"),this._history.push(W)}else{const W=li(F);W&&console.warn(`sendMessageStream() was unsuccessful. ${W}. Inspect response object for details.`)}}).catch(F=>{F.message!==By&&console.error(F)}),C}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(r,e,t,s){return(await sl(e,fs.COUNT_TOKENS,r,!1,JSON.stringify(t),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(r,e,t,s){return(await sl(e,fs.EMBED_CONTENT,r,!1,JSON.stringify(t),s)).json()}async function tR(r,e,t,s){const o=t.requests.map(h=>Object.assign(Object.assign({},h),{model:e}));return(await sl(e,fs.BATCH_EMBED_CONTENTS,r,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t,s={}){this.apiKey=e,this._requestOptions=s,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=gE(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var s;const o=Fy(e),u=Object.assign(Object.assign({},this._requestOptions),t);return mE(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),u)}async generateContentStream(e,t={}){var s;const o=Fy(e),u=Object.assign(Object.assign({},this._requestOptions),t);return pE(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),u)}startChat(e){var t;return new JC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const s=KC(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return ZC(this.apiKey,this.model,s,o)}async embedContent(e,t={}){const s=QC(e),o=Object.assign(Object.assign({},this._requestOptions),t);return eR(this.apiKey,this.model,s,o)}async batchEmbedContents(e,t={}){const s=Object.assign(Object.assign({},this._requestOptions),t);return tR(this.apiKey,this.model,e,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new Ft("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new zy(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,s){if(!e.name)throw new vi("Cached content must contain a `name` field.");if(!e.model)throw new vi("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const h of o)if(t!=null&&t[h]&&e[h]&&(t==null?void 0:t[h])!==e[h]){if(h==="model"){const m=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,y=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(m===y)continue}throw new vi(`Different value for "${h}" specified in modelParams (${t[h]}) and cachedContent (${e[h]})`)}const u=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new zy(this.apiKey,u,s)}}export{ci as G,iR as R,fR as a,_R as b,ER as c,hR as d,gR as e,cR as f,lR as g,yR as h,oI as i,nR as j,oR as k,mR as l,sR as m,rR as n,pR as o,dR as q,Cw as r,aR as s,vR as u};
