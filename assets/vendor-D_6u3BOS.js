function oy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var bh={exports:{}},ya={},Fh={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function DE(){if(Rm)return Te;Rm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,Q={};function H(O,B,ve){this.props=O,this.context=B,this.refs=Q,this.updater=ve||z}H.prototype.isReactComponent={},H.prototype.setState=function(O,B){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,B,"setState")},H.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _e(){}_e.prototype=H.prototype;function pe(O,B,ve){this.props=O,this.context=B,this.refs=Q,this.updater=ve||z}var we=pe.prototype=new _e;we.constructor=pe,Y(we,H.prototype),we.isPureReactComponent=!0;var Pe=Array.isArray,$e=Object.prototype.hasOwnProperty,ke={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(O,B,ve){var Ee,Ie={},Se=null,Me=null;if(B!=null)for(Ee in B.ref!==void 0&&(Me=B.ref),B.key!==void 0&&(Se=""+B.key),B)$e.call(B,Ee)&&!P.hasOwnProperty(Ee)&&(Ie[Ee]=B[Ee]);var Ve=arguments.length-2;if(Ve===1)Ie.children=ve;else if(1<Ve){for(var Ue=Array(Ve),Ft=0;Ft<Ve;Ft++)Ue[Ft]=arguments[Ft+2];Ie.children=Ue}if(O&&O.defaultProps)for(Ee in Ve=O.defaultProps,Ve)Ie[Ee]===void 0&&(Ie[Ee]=Ve[Ee]);return{$$typeof:i,type:O,key:Se,ref:Me,props:Ie,_owner:ke.current}}function R(O,B){return{$$typeof:i,type:O.type,key:B,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function k(O){var B={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ve){return B[ve]})}var x=/\/+/g;function S(O,B){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):B.toString(36)}function je(O,B,ve,Ee,Ie){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Se){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case i:case e:Me=!0}}if(Me)return Me=O,Ie=Ie(Me),O=Ee===""?"."+S(Me,0):Ee,Pe(Ie)?(ve="",O!=null&&(ve=O.replace(x,"$&/")+"/"),je(Ie,B,ve,"",function(Ft){return Ft})):Ie!=null&&(V(Ie)&&(Ie=R(Ie,ve+(!Ie.key||Me&&Me.key===Ie.key?"":(""+Ie.key).replace(x,"$&/")+"/")+O)),B.push(Ie)),1;if(Me=0,Ee=Ee===""?".":Ee+":",Pe(O))for(var Ve=0;Ve<O.length;Ve++){Se=O[Ve];var Ue=Ee+S(Se,Ve);Me+=je(Se,B,ve,Ue,Ie)}else if(Ue=D(O),typeof Ue=="function")for(O=Ue.call(O),Ve=0;!(Se=O.next()).done;)Se=Se.value,Ue=Ee+S(Se,Ve++),Me+=je(Se,B,ve,Ue,Ie);else if(Se==="object")throw B=String(O),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Me}function gt(O,B,ve){if(O==null)return O;var Ee=[],Ie=0;return je(O,Ee,"","",function(Se){return B.call(ve,Se,Ie++)}),Ee}function Pt(O){if(O._status===-1){var B=O._result;B=B(),B.then(function(ve){(O._status===0||O._status===-1)&&(O._status=1,O._result=ve)},function(ve){(O._status===0||O._status===-1)&&(O._status=2,O._result=ve)}),O._status===-1&&(O._status=0,O._result=B)}if(O._status===1)return O._result.default;throw O._result}var Ke={current:null},J={transition:null},ae={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:J,ReactCurrentOwner:ke};function te(){throw Error("act(...) is not supported in production builds of React.")}return Te.Children={map:gt,forEach:function(O,B,ve){gt(O,function(){B.apply(this,arguments)},ve)},count:function(O){var B=0;return gt(O,function(){B++}),B},toArray:function(O){return gt(O,function(B){return B})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Te.Component=H,Te.Fragment=t,Te.Profiler=a,Te.PureComponent=pe,Te.StrictMode=s,Te.Suspense=y,Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,Te.act=te,Te.cloneElement=function(O,B,ve){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ee=Y({},O.props),Ie=O.key,Se=O.ref,Me=O._owner;if(B!=null){if(B.ref!==void 0&&(Se=B.ref,Me=ke.current),B.key!==void 0&&(Ie=""+B.key),O.type&&O.type.defaultProps)var Ve=O.type.defaultProps;for(Ue in B)$e.call(B,Ue)&&!P.hasOwnProperty(Ue)&&(Ee[Ue]=B[Ue]===void 0&&Ve!==void 0?Ve[Ue]:B[Ue])}var Ue=arguments.length-2;if(Ue===1)Ee.children=ve;else if(1<Ue){Ve=Array(Ue);for(var Ft=0;Ft<Ue;Ft++)Ve[Ft]=arguments[Ft+2];Ee.children=Ve}return{$$typeof:i,type:O.type,key:Ie,ref:Se,props:Ee,_owner:Me}},Te.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Te.createElement=I,Te.createFactory=function(O){var B=I.bind(null,O);return B.type=O,B},Te.createRef=function(){return{current:null}},Te.forwardRef=function(O){return{$$typeof:m,render:O}},Te.isValidElement=V,Te.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Pt}},Te.memo=function(O,B){return{$$typeof:v,type:O,compare:B===void 0?null:B}},Te.startTransition=function(O){var B=J.transition;J.transition={};try{O()}finally{J.transition=B}},Te.unstable_act=te,Te.useCallback=function(O,B){return Ke.current.useCallback(O,B)},Te.useContext=function(O){return Ke.current.useContext(O)},Te.useDebugValue=function(){},Te.useDeferredValue=function(O){return Ke.current.useDeferredValue(O)},Te.useEffect=function(O,B){return Ke.current.useEffect(O,B)},Te.useId=function(){return Ke.current.useId()},Te.useImperativeHandle=function(O,B,ve){return Ke.current.useImperativeHandle(O,B,ve)},Te.useInsertionEffect=function(O,B){return Ke.current.useInsertionEffect(O,B)},Te.useLayoutEffect=function(O,B){return Ke.current.useLayoutEffect(O,B)},Te.useMemo=function(O,B){return Ke.current.useMemo(O,B)},Te.useReducer=function(O,B,ve){return Ke.current.useReducer(O,B,ve)},Te.useRef=function(O){return Ke.current.useRef(O)},Te.useState=function(O){return Ke.current.useState(O)},Te.useSyncExternalStore=function(O,B,ve){return Ke.current.useSyncExternalStore(O,B,ve)},Te.useTransition=function(){return Ke.current.useTransition()},Te.version="18.3.1",Te}var Cm;function Rf(){return Cm||(Cm=1,Fh.exports=DE()),Fh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function VE(){if(Pm)return ya;Pm=1;var i=Rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,A={},D=null,z=null;v!==void 0&&(D=""+v),y.key!==void 0&&(D=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(A[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)A[w]===void 0&&(A[w]=y[w]);return{$$typeof:e,type:m,key:D,ref:z,props:A,_owner:a.current}}return ya.Fragment=t,ya.jsx=h,ya.jsxs=h,ya}var km;function OE(){return km||(km=1,bh.exports=VE()),bh.exports}var GA=OE(),xE=Rf();const es=oy(xE);var uu={},Uh={exports:{}},Gt={},zh={exports:{}},jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function LE(){return Nm||(Nm=1,(function(i){function e(J,ae){var te=J.length;J.push(ae);e:for(;0<te;){var O=te-1>>>1,B=J[O];if(0<a(B,ae))J[O]=ae,J[te]=B,te=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ae=J[0],te=J.pop();if(te!==ae){J[0]=te;e:for(var O=0,B=J.length,ve=B>>>1;O<ve;){var Ee=2*(O+1)-1,Ie=J[Ee],Se=Ee+1,Me=J[Se];if(0>a(Ie,te))Se<B&&0>a(Me,Ie)?(J[O]=Me,J[Se]=te,O=Se):(J[O]=Ie,J[Ee]=te,O=Ee);else if(Se<B&&0>a(Me,te))J[O]=Me,J[Se]=te,O=Se;else break e}}return ae}function a(J,ae){var te=J.sortIndex-ae.sortIndex;return te!==0?te:J.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,A=null,D=3,z=!1,Y=!1,Q=!1,H=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function we(J){for(var ae=t(v);ae!==null;){if(ae.callback===null)s(v);else if(ae.startTime<=J)s(v),ae.sortIndex=ae.expirationTime,e(y,ae);else break;ae=t(v)}}function Pe(J){if(Q=!1,we(J),!Y)if(t(y)!==null)Y=!0,Pt($e);else{var ae=t(v);ae!==null&&Ke(Pe,ae.startTime-J)}}function $e(J,ae){Y=!1,Q&&(Q=!1,_e(I),I=-1),z=!0;var te=D;try{for(we(ae),A=t(y);A!==null&&(!(A.expirationTime>ae)||J&&!k());){var O=A.callback;if(typeof O=="function"){A.callback=null,D=A.priorityLevel;var B=O(A.expirationTime<=ae);ae=i.unstable_now(),typeof B=="function"?A.callback=B:A===t(y)&&s(y),we(ae)}else s(y);A=t(y)}if(A!==null)var ve=!0;else{var Ee=t(v);Ee!==null&&Ke(Pe,Ee.startTime-ae),ve=!1}return ve}finally{A=null,D=te,z=!1}}var ke=!1,P=null,I=-1,R=5,V=-1;function k(){return!(i.unstable_now()-V<R)}function x(){if(P!==null){var J=i.unstable_now();V=J;var ae=!0;try{ae=P(!0,J)}finally{ae?S():(ke=!1,P=null)}}else ke=!1}var S;if(typeof pe=="function")S=function(){pe(x)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,gt=je.port2;je.port1.onmessage=x,S=function(){gt.postMessage(null)}}else S=function(){H(x,0)};function Pt(J){P=J,ke||(ke=!0,S())}function Ke(J,ae){I=H(function(){J(i.unstable_now())},ae)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Y||z||(Y=!0,Pt($e))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(D){case 1:case 2:case 3:var ae=3;break;default:ae=D}var te=D;D=ae;try{return J()}finally{D=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ae){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var te=D;D=J;try{return ae()}finally{D=te}},i.unstable_scheduleCallback=function(J,ae,te){var O=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=te+B,J={id:w++,callback:ae,priorityLevel:J,startTime:te,expirationTime:B,sortIndex:-1},te>O?(J.sortIndex=te,e(v,J),t(y)===null&&J===t(v)&&(Q?(_e(I),I=-1):Q=!0,Ke(Pe,te-O))):(J.sortIndex=B,e(y,J),Y||z||(Y=!0,Pt($e))),J},i.unstable_shouldYield=k,i.unstable_wrapCallback=function(J){var ae=D;return function(){var te=D;D=ae;try{return J.apply(this,arguments)}finally{D=te}}}})(jh)),jh}var Dm;function ME(){return Dm||(Dm=1,zh.exports=LE()),zh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function bE(){if(Vm)return Gt;Vm=1;var i=Rf(),e=ME();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function D(n){return y.call(A,n)?!0:y.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function z(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,o,c){if(r===null||typeof r>"u"||z(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,o,c,f,d,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=d,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function pe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_e,pe);H[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_e,pe);H[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_e,pe);H[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function we(n,r,o,c){var f=H.hasOwnProperty(r)?H[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,o,f,c)&&(o=null),c||f===null?D(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var Pe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),ke=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),k=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Ke=Symbol.for("react.offscreen"),J=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,O;function B(n){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ve=!1;function Ee(n,r){if(!n||ve)return"";ve=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var f=F.stack.split(`
`),d=c.stack.split(`
`),_=f.length-1,T=d.length-1;1<=_&&0<=T&&f[_]!==d[T];)T--;for(;1<=_&&0<=T;_--,T--)if(f[_]!==d[T]){if(_!==1||T!==1)do if(_--,T--,0>T||f[_]!==d[T]){var C=`
`+f[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=T);break}}}finally{ve=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?B(n):""}function Ie(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case ke:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case je:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case gt:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case Pt:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ft(n){var r=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(_){c=""+_,d.call(this,_)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function hs(n){n._valueTracker||(n._valueTracker=Ft(n))}function Io(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function fs(n,r){var o=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ka(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=Ve(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ds(n,r){r=r.checked,r!=null&&we(n,"checked",r,!1)}function Si(n,r){ds(n,r);var o=Ve(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ot(n,r.type,o):r.hasOwnProperty("defaultValue")&&ot(n,r.type,Ve(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function So(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ot(n,r,o){(r!=="number"||kr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var nt=Array.isArray;function gn(n,r,o,c){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ve(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Ao(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ro(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(nt(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Ve(o)}}function Qa(n,r){var o=Ve(r.value),c=Ve(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Nr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Co(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Co(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Dr,Xa=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,f)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Dr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ai(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ya=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(n){Ya.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Vr[r]=Vr[n]})});function Or(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Vr.hasOwnProperty(n)&&Vr[n]?(""+r).trim():r+"px"}function ms(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Or(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Po=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yn(n,r){if(r){if(Po[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function gs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xr=null;function ys(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rr=null,ir=null,et=null;function ko(n){if(n=na(n)){if(typeof rr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Sl(r),rr(n.stateNode,n.type,r))}}function Lr(n){ir?et?et.push(n):et=[n]:ir=n}function Mr(){if(ir){var n=ir,r=et;if(et=ir=null,ko(n),r)for(n=0;n<r.length;n++)ko(r[n])}}function Ja(n,r){return n(r)}function Za(){}var kn=!1;function el(n,r,o){if(kn)return n(r,o);kn=!0;try{return Ja(n,r,o)}finally{kn=!1,(ir!==null||et!==null)&&(Za(),Mr())}}function Ri(n,r){var o=n.stateNode;if(o===null)return null;var c=Sl(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var br=!1;if(m)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){br=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{br=!1}function tl(n,r,o,c,f,d,_,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(o,F)}catch(W){this.onError(W)}}var sr=!1,Nn=null,_s=!1,an=null,nl={onError:function(n){sr=!0,Nn=n}};function rl(n,r,o,c,f,d,_,T,C){sr=!1,Nn=null,tl.apply(nl,arguments)}function No(n,r,o,c,f,d,_,T,C){if(rl.apply(this,arguments),sr){if(sr){var F=Nn;sr=!1,Nn=null}else throw Error(t(198));_s||(_s=!0,an=F)}}function _n(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Do(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function il(n){if(_n(n)!==n)throw Error(t(188))}function sl(n){var r=n.alternate;if(!r){if(r=_n(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var f=o.return;if(f===null)break;var d=f.alternate;if(d===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===o)return il(f),n;if(d===c)return il(f),r;d=d.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=d;else{for(var _=!1,T=f.child;T;){if(T===o){_=!0,o=f,c=d;break}if(T===c){_=!0,c=f,o=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===o){_=!0,o=d,c=f;break}if(T===c){_=!0,c=d,o=f;break}T=T.sibling}if(!_)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function ol(n){return n=sl(n),n!==null?Ci(n):null}function Ci(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ci(n);if(r!==null)return r;n=n.sibling}return null}var Vo=e.unstable_scheduleCallback,vs=e.unstable_cancelCallback,Pi=e.unstable_shouldYield,or=e.unstable_requestPaint,He=e.unstable_now,pc=e.unstable_getCurrentPriorityLevel,Es=e.unstable_ImmediatePriority,Oo=e.unstable_UserBlockingPriority,ki=e.unstable_NormalPriority,xo=e.unstable_LowPriority,ws=e.unstable_IdlePriority,Ni=null,Xt=null;function al(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Ni,n,void 0,(n.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Di,Dn=Math.log,ln=Math.LN2;function Di(n){return n>>>=0,n===0?32:31-(Dn(n)/ln|0)|0}var Vn=64,Ur=4194304;function Le(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ar(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,d=n.pingedLanes,_=o&268435455;if(_!==0){var T=_&~f;T!==0?c=Le(T):(d&=_,d!==0&&(c=Le(d)))}else _=o&~f,_!==0?c=Le(_):d!==0&&(c=Le(d));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,d=r&-r,f>=d||f===16&&(d&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-Yt(r),f=1<<o,c|=n[o],r&=~f;return c}function Vi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oi(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes;0<d;){var _=31-Yt(d),T=1<<_,C=f[_];C===-1?((T&o)===0||(T&c)!==0)&&(f[_]=Vi(T,r)):C<=r&&(n.expiredLanes|=T),d&=~T}}function Lo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mo(){var n=Vn;return Vn<<=1,(Vn&4194240)===0&&(Vn=64),n}function bo(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function xi(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Yt(r),n[r]=o}function mc(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Yt(o),d=1<<f;r[f]=0,c[f]=-1,n[f]=-1,o&=~d}}function Fo(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-Yt(o),f=1<<c;f&r|n[c]&r&&(n[c]|=r),o&=~f}}var Ne=0;function On(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Uo,Ts,zo,jo,Bo,xn=!1,Is=[],Ln=null,Mn=null,wt=null,Li=new Map,lr=new Map,Jt=[],ll="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zr(n,r){switch(n){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":Li.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(r.pointerId)}}function vn(n,r,o,c,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:d,targetContainers:[f]},r!==null&&(r=na(r),r!==null&&Ts(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function ul(n,r,o,c,f){switch(r){case"focusin":return Ln=vn(Ln,n,r,o,c,f),!0;case"dragenter":return Mn=vn(Mn,n,r,o,c,f),!0;case"mouseover":return wt=vn(wt,n,r,o,c,f),!0;case"pointerover":var d=f.pointerId;return Li.set(d,vn(Li.get(d)||null,n,r,o,c,f)),!0;case"gotpointercapture":return d=f.pointerId,lr.set(d,vn(lr.get(d)||null,n,r,o,c,f)),!0}return!1}function Ss(n){var r=Ui(n.target);if(r!==null){var o=_n(r);if(o!==null){if(r=o.tag,r===13){if(r=Do(o),r!==null){n.blockedOn=r,Bo(n.priority,function(){zo(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ze(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=As(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);xr=c,o.target.dispatchEvent(c),xr=null}else return r=na(o),r!==null&&Ts(r),n.blockedOn=o,!1;r.shift()}return!0}function cl(n,r,o){ze(n)&&o.delete(r)}function gc(){xn=!1,Ln!==null&&ze(Ln)&&(Ln=null),Mn!==null&&ze(Mn)&&(Mn=null),wt!==null&&ze(wt)&&(wt=null),Li.forEach(cl),lr.forEach(cl)}function jr(n,r){n.blockedOn===r&&(n.blockedOn=null,xn||(xn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gc)))}function Br(n){function r(f){return jr(f,n)}if(0<Is.length){jr(Is[0],n);for(var o=1;o<Is.length;o++){var c=Is[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Ln!==null&&jr(Ln,n),Mn!==null&&jr(Mn,n),wt!==null&&jr(wt,n),Li.forEach(r),lr.forEach(r),o=0;o<Jt.length;o++)c=Jt[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Jt.length&&(o=Jt[0],o.blockedOn===null);)Ss(o),o.blockedOn===null&&Jt.shift()}var ur=Pe.ReactCurrentBatchConfig,cr=!0;function bn(n,r,o,c){var f=Ne,d=ur.transition;ur.transition=null;try{Ne=1,$o(n,r,o,c)}finally{Ne=f,ur.transition=d}}function hl(n,r,o,c){var f=Ne,d=ur.transition;ur.transition=null;try{Ne=4,$o(n,r,o,c)}finally{Ne=f,ur.transition=d}}function $o(n,r,o,c){if(cr){var f=As(n,r,o,c);if(f===null)Cc(n,r,c,Fn,o),zr(n,c);else if(ul(f,n,r,o,c))c.stopPropagation();else if(zr(n,c),r&4&&-1<ll.indexOf(n)){for(;f!==null;){var d=na(f);if(d!==null&&Uo(d),d=As(n,r,o,c),d===null&&Cc(n,r,c,Fn,o),d===f)break;f=d}f!==null&&c.stopPropagation()}else Cc(n,r,c,null,o)}}var Fn=null;function As(n,r,o,c){if(Fn=null,n=ys(c),n=Ui(n),n!==null)if(r=_n(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Do(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Fn=n,null}function Rs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pc()){case Es:return 1;case Oo:return 4;case ki:case xo:return 16;case ws:return 536870912;default:return 16}default:return 16}}var Zt=null,Cs=null,hr=null;function fl(){if(hr)return hr;var n,r=Cs,o=r.length,c,f="value"in Zt?Zt.value:Zt.textContent,d=f.length;for(n=0;n<o&&r[n]===f[n];n++);var _=o-n;for(c=1;c<=_&&r[o-c]===f[d-c];c++);return hr=f.slice(n,1<c?1-c:void 0)}function Mi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Un(){return!0}function Ho(){return!1}function kt(n){function r(o,c,f,d,_){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(o=n[T],this[T]=o?o(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Un:Ho,this.isPropagationStopped=Ho,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),r}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=kt(zn),$r=te({},zn,{view:0,detail:0}),Ps=kt($r),ks,Ns,en,Fi=te({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ge,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==en&&(en&&n.type==="mousemove"?(ks=n.screenX-en.screenX,Ns=n.screenY-en.screenY):Ns=ks=0,en=n),ks)},movementY:function(n){return"movementY"in n?n.movementY:Ns}}),qo=kt(Fi),dl=te({},Fi,{dataTransfer:0}),pl=kt(dl),Ds=te({},$r,{relatedTarget:0}),Tt=kt(Ds),ml=te({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),gl=kt(ml),Hr=te({},zn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=kt(Hr),p=te({},zn,{data:0}),g=kt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function ge(){return X}var rt=te({},$r,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Mi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ge,charCode:function(n){return n.type==="keypress"?Mi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fe=kt(rt),at=te({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tn=kt(at),fr=te({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ge}),jn=kt(fr),Bn=te({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vs=kt(Bn),Wo=te({},Fi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=kt(Wo),Rv=[9,13,27,32],yc=m&&"CompositionEvent"in window,Go=null;m&&"documentMode"in document&&(Go=document.documentMode);var Cv=m&&"TextEvent"in window&&!Go,_d=m&&(!yc||Go&&8<Go&&11>=Go),vd=" ",Ed=!1;function wd(n,r){switch(n){case"keyup":return Rv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Os=!1;function Pv(n,r){switch(n){case"compositionend":return Td(r);case"keypress":return r.which!==32?null:(Ed=!0,vd);case"textInput":return n=r.data,n===vd&&Ed?null:n;default:return null}}function kv(n,r){if(Os)return n==="compositionend"||!yc&&wd(n,r)?(n=fl(),hr=Cs=Zt=null,Os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _d&&r.locale!=="ko"?null:r.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Nv[n.type]:r==="textarea"}function Sd(n,r,o,c){Lr(c),r=wl(r,"onChange"),0<r.length&&(o=new bi("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var Ko=null,Qo=null;function Dv(n){Bd(n,0)}function yl(n){var r=Fs(n);if(Io(r))return n}function Vv(n,r){if(n==="change")return r}var Ad=!1;if(m){var _c;if(m){var vc="oninput"in document;if(!vc){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),vc=typeof Rd.oninput=="function"}_c=vc}else _c=!1;Ad=_c&&(!document.documentMode||9<document.documentMode)}function Cd(){Ko&&(Ko.detachEvent("onpropertychange",Pd),Qo=Ko=null)}function Pd(n){if(n.propertyName==="value"&&yl(Qo)){var r=[];Sd(r,Qo,n,ys(n)),el(Dv,r)}}function Ov(n,r,o){n==="focusin"?(Cd(),Ko=r,Qo=o,Ko.attachEvent("onpropertychange",Pd)):n==="focusout"&&Cd()}function xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yl(Qo)}function Lv(n,r){if(n==="click")return yl(r)}function Mv(n,r){if(n==="input"||n==="change")return yl(r)}function bv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var En=typeof Object.is=="function"?Object.is:bv;function Xo(n,r){if(En(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!y.call(r,f)||!En(n[f],r[f]))return!1}return!0}function kd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nd(n,r){var o=kd(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=kd(o)}}function Dd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Dd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Vd(){for(var n=window,r=kr();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=kr(n.document)}return r}function Ec(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Fv(n){var r=Vd(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Dd(o.ownerDocument.documentElement,o)){if(c!==null&&Ec(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,d=Math.min(c.start,f);c=c.end===void 0?d:Math.min(c.end,f),!n.extend&&d>c&&(f=c,c=d,d=f),f=Nd(o,d);var _=Nd(o,c);f&&_&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),n.removeAllRanges(),d>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Uv=m&&"documentMode"in document&&11>=document.documentMode,xs=null,wc=null,Yo=null,Tc=!1;function Od(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Tc||xs==null||xs!==kr(c)||(c=xs,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Yo&&Xo(Yo,c)||(Yo=c,c=wl(wc,"onSelect"),0<c.length&&(r=new bi("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=xs)))}function _l(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ls={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Ic={},xd={};m&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function vl(n){if(Ic[n])return Ic[n];if(!Ls[n])return n;var r=Ls[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in xd)return Ic[n]=r[o];return n}var Ld=vl("animationend"),Md=vl("animationiteration"),bd=vl("animationstart"),Fd=vl("transitionend"),Ud=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(n,r){Ud.set(n,r),u(r,[n])}for(var Sc=0;Sc<zd.length;Sc++){var Ac=zd[Sc],zv=Ac.toLowerCase(),jv=Ac[0].toUpperCase()+Ac.slice(1);qr(zv,"on"+jv)}qr(Ld,"onAnimationEnd"),qr(Md,"onAnimationIteration"),qr(bd,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(Fd,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function jd(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,No(c,r,void 0,n),n.currentTarget=null}function Bd(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var d=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==d&&f.isPropagationStopped())break e;jd(f,T,F),d=C}else for(_=0;_<c.length;_++){if(T=c[_],C=T.instance,F=T.currentTarget,T=T.listener,C!==d&&f.isPropagationStopped())break e;jd(f,T,F),d=C}}}if(_s)throw n=an,_s=!1,an=null,n}function qe(n,r){var o=r[Oc];o===void 0&&(o=r[Oc]=new Set);var c=n+"__bubble";o.has(c)||($d(r,n,2,!1),o.add(c))}function Rc(n,r,o){var c=0;r&&(c|=4),$d(o,n,c,r)}var El="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[El]){n[El]=!0,s.forEach(function(o){o!=="selectionchange"&&(Bv.has(o)||Rc(o,!1,n),Rc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[El]||(r[El]=!0,Rc("selectionchange",!1,r))}}function $d(n,r,o,c){switch(Rs(r)){case 1:var f=bn;break;case 4:f=hl;break;default:f=$o}o=f.bind(null,r,o,n),f=void 0,!br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Cc(n,r,o,c,f){var d=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===f||T.nodeType===8&&T.parentNode===f)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;_=_.return}for(;T!==null;){if(_=Ui(T),_===null)return;if(C=_.tag,C===5||C===6){c=d=_;continue e}T=T.parentNode}}c=c.return}el(function(){var F=d,W=ys(o),G=[];e:{var $=Ud.get(n);if($!==void 0){var Z=bi,re=n;switch(n){case"keypress":if(Mi(o)===0)break e;case"keydown":case"keyup":Z=Fe;break;case"focusin":re="focus",Z=Tt;break;case"focusout":re="blur",Z=Tt;break;case"beforeblur":case"afterblur":Z=Tt;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=pl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=jn;break;case Ld:case Md:case bd:Z=gl;break;case Fd:Z=Vs;break;case"scroll":Z=Ps;break;case"wheel":Z=Av;break;case"copy":case"cut":case"paste":Z=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=tn}var ie=(r&4)!==0,it=!ie&&n==="scroll",L=ie?$!==null?$+"Capture":null:$;ie=[];for(var N=F,b;N!==null;){b=N;var K=b.stateNode;if(b.tag===5&&K!==null&&(b=K,L!==null&&(K=Ri(N,L),K!=null&&ie.push(ea(N,K,b)))),it)break;N=N.return}0<ie.length&&($=new Z($,re,null,o,W),G.push({event:$,listeners:ie}))}}if((r&7)===0){e:{if($=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",$&&o!==xr&&(re=o.relatedTarget||o.fromElement)&&(Ui(re)||re[dr]))break e;if((Z||$)&&($=W.window===W?W:($=W.ownerDocument)?$.defaultView||$.parentWindow:window,Z?(re=o.relatedTarget||o.toElement,Z=F,re=re?Ui(re):null,re!==null&&(it=_n(re),re!==it||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(ie=qo,K="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ie=tn,K="onPointerLeave",L="onPointerEnter",N="pointer"),it=Z==null?$:Fs(Z),b=re==null?$:Fs(re),$=new ie(K,N+"leave",Z,o,W),$.target=it,$.relatedTarget=b,K=null,Ui(W)===F&&(ie=new ie(L,N+"enter",re,o,W),ie.target=b,ie.relatedTarget=it,K=ie),it=K,Z&&re)t:{for(ie=Z,L=re,N=0,b=ie;b;b=Ms(b))N++;for(b=0,K=L;K;K=Ms(K))b++;for(;0<N-b;)ie=Ms(ie),N--;for(;0<b-N;)L=Ms(L),b--;for(;N--;){if(ie===L||L!==null&&ie===L.alternate)break t;ie=Ms(ie),L=Ms(L)}ie=null}else ie=null;Z!==null&&Hd(G,$,Z,ie,!1),re!==null&&it!==null&&Hd(G,it,re,ie,!0)}}e:{if($=F?Fs(F):window,Z=$.nodeName&&$.nodeName.toLowerCase(),Z==="select"||Z==="input"&&$.type==="file")var se=Vv;else if(Id($))if(Ad)se=Mv;else{se=xv;var le=Ov}else(Z=$.nodeName)&&Z.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(se=Lv);if(se&&(se=se(n,F))){Sd(G,se,o,W);break e}le&&le(n,$,F),n==="focusout"&&(le=$._wrapperState)&&le.controlled&&$.type==="number"&&ot($,"number",$.value)}switch(le=F?Fs(F):window,n){case"focusin":(Id(le)||le.contentEditable==="true")&&(xs=le,wc=F,Yo=null);break;case"focusout":Yo=wc=xs=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Od(G,o,W);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":Od(G,o,W)}var ue;if(yc)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Os?wd(n,o)&&(fe="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(fe="onCompositionStart");fe&&(_d&&o.locale!=="ko"&&(Os||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Os&&(ue=fl()):(Zt=W,Cs="value"in Zt?Zt.value:Zt.textContent,Os=!0)),le=wl(F,fe),0<le.length&&(fe=new g(fe,n,null,o,W),G.push({event:fe,listeners:le}),ue?fe.data=ue:(ue=Td(o),ue!==null&&(fe.data=ue)))),(ue=Cv?Pv(n,o):kv(n,o))&&(F=wl(F,"onBeforeInput"),0<F.length&&(W=new g("onBeforeInput","beforeinput",null,o,W),G.push({event:W,listeners:F}),W.data=ue))}Bd(G,r)})}function ea(n,r,o){return{instance:n,listener:r,currentTarget:o}}function wl(n,r){for(var o=r+"Capture",c=[];n!==null;){var f=n,d=f.stateNode;f.tag===5&&d!==null&&(f=d,d=Ri(n,o),d!=null&&c.unshift(ea(n,d,f)),d=Ri(n,r),d!=null&&c.push(ea(n,d,f))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hd(n,r,o,c,f){for(var d=r._reactName,_=[];o!==null&&o!==c;){var T=o,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,f?(C=Ri(o,d),C!=null&&_.unshift(ea(o,C,T))):f||(C=Ri(o,d),C!=null&&_.push(ea(o,C,T)))),o=o.return}_.length!==0&&n.push({event:r,listeners:_})}var $v=/\r\n?/g,Hv=/\u0000|\uFFFD/g;function qd(n){return(typeof n=="string"?n:""+n).replace($v,`
`).replace(Hv,"")}function Tl(n,r,o){if(r=qd(r),qd(n)!==r&&o)throw Error(t(425))}function Il(){}var Pc=null,kc=null;function Nc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(n){return Wd.resolve(null).then(n).catch(Gv)}:Dc;function Gv(n){setTimeout(function(){throw n})}function Vc(n,r){var o=r,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),Br(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);Br(r)}function Wr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Gd(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),$n="__reactFiber$"+bs,ta="__reactProps$"+bs,dr="__reactContainer$"+bs,Oc="__reactEvents$"+bs,Kv="__reactListeners$"+bs,Qv="__reactHandles$"+bs;function Ui(n){var r=n[$n];if(r)return r;for(var o=n.parentNode;o;){if(r=o[dr]||o[$n]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Gd(n);n!==null;){if(o=n[$n])return o;n=Gd(n)}return r}n=o,o=n.parentNode}return null}function na(n){return n=n[$n]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sl(n){return n[ta]||null}var xc=[],Us=-1;function Gr(n){return{current:n}}function We(n){0>Us||(n.current=xc[Us],xc[Us]=null,Us--)}function Be(n,r){Us++,xc[Us]=n.current,n.current=r}var Kr={},Nt=Gr(Kr),Bt=Gr(!1),zi=Kr;function zs(n,r){var o=n.type.contextTypes;if(!o)return Kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},d;for(d in o)f[d]=r[d];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=f),f}function $t(n){return n=n.childContextTypes,n!=null}function Al(){We(Bt),We(Nt)}function Kd(n,r,o){if(Nt.current!==Kr)throw Error(t(168));Be(Nt,r),Be(Bt,o)}function Qd(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(t(108,Me(n)||"Unknown",f));return te({},o,c)}function Rl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,zi=Nt.current,Be(Nt,n),Be(Bt,Bt.current),!0}function Xd(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Qd(n,r,zi),c.__reactInternalMemoizedMergedChildContext=n,We(Bt),We(Nt),Be(Nt,n)):We(Bt),Be(Bt,o)}var pr=null,Cl=!1,Lc=!1;function Yd(n){pr===null?pr=[n]:pr.push(n)}function Xv(n){Cl=!0,Yd(n)}function Qr(){if(!Lc&&pr!==null){Lc=!0;var n=0,r=Ne;try{var o=pr;for(Ne=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}pr=null,Cl=!1}catch(f){throw pr!==null&&(pr=pr.slice(n+1)),Vo(Es,Qr),f}finally{Ne=r,Lc=!1}}return null}var js=[],Bs=0,Pl=null,kl=0,un=[],cn=0,ji=null,mr=1,gr="";function Bi(n,r){js[Bs++]=kl,js[Bs++]=Pl,Pl=n,kl=r}function Jd(n,r,o){un[cn++]=mr,un[cn++]=gr,un[cn++]=ji,ji=n;var c=mr;n=gr;var f=32-Yt(c)-1;c&=~(1<<f),o+=1;var d=32-Yt(r)+f;if(30<d){var _=f-f%5;d=(c&(1<<_)-1).toString(32),c>>=_,f-=_,mr=1<<32-Yt(r)+f|o<<f|c,gr=d+n}else mr=1<<d|o<<f|c,gr=n}function Mc(n){n.return!==null&&(Bi(n,1),Jd(n,1,0))}function bc(n){for(;n===Pl;)Pl=js[--Bs],js[Bs]=null,kl=js[--Bs],js[Bs]=null;for(;n===ji;)ji=un[--cn],un[cn]=null,gr=un[--cn],un[cn]=null,mr=un[--cn],un[cn]=null}var nn=null,rn=null,Qe=!1,wn=null;function Zd(n,r){var o=pn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function ep(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=Wr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ji!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=pn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,nn=n,rn=null,!0):!1;default:return!1}}function Fc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Uc(n){if(Qe){var r=rn;if(r){var o=r;if(!ep(n,r)){if(Fc(n))throw Error(t(418));r=Wr(o.nextSibling);var c=nn;r&&ep(n,r)?Zd(c,o):(n.flags=n.flags&-4097|2,Qe=!1,nn=n)}}else{if(Fc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,nn=n}}}function tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Nl(n){if(n!==nn)return!1;if(!Qe)return tp(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Nc(n.type,n.memoizedProps)),r&&(r=rn)){if(Fc(n))throw np(),Error(t(418));for(;r;)Zd(n,r),r=Wr(r.nextSibling)}if(tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){rn=Wr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?Wr(n.stateNode.nextSibling):null;return!0}function np(){for(var n=rn;n;)n=Wr(n.nextSibling)}function $s(){rn=nn=null,Qe=!1}function zc(n){wn===null?wn=[n]:wn.push(n)}var Yv=Pe.ReactCurrentBatchConfig;function ra(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,d=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===d?r.ref:(r=function(_){var T=f.refs;_===null?delete T[d]:T[d]=_},r._stringRef=d,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Dl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function rp(n){var r=n._init;return r(n._payload)}function ip(n){function r(L,N){if(n){var b=L.deletions;b===null?(L.deletions=[N],L.flags|=16):b.push(N)}}function o(L,N){if(!n)return null;for(;N!==null;)r(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function f(L,N){return L=ri(L,N),L.index=0,L.sibling=null,L}function d(L,N,b){return L.index=b,n?(b=L.alternate,b!==null?(b=b.index,b<N?(L.flags|=2,N):b):(L.flags|=2,N)):(L.flags|=1048576,N)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,N,b,K){return N===null||N.tag!==6?(N=Dh(b,L.mode,K),N.return=L,N):(N=f(N,b),N.return=L,N)}function C(L,N,b,K){var se=b.type;return se===P?W(L,N,b.props.children,K,b.key):N!==null&&(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Pt&&rp(se)===N.type)?(K=f(N,b.props),K.ref=ra(L,N,b),K.return=L,K):(K=tu(b.type,b.key,b.props,null,L.mode,K),K.ref=ra(L,N,b),K.return=L,K)}function F(L,N,b,K){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Vh(b,L.mode,K),N.return=L,N):(N=f(N,b.children||[]),N.return=L,N)}function W(L,N,b,K,se){return N===null||N.tag!==7?(N=Xi(b,L.mode,K,se),N.return=L,N):(N=f(N,b),N.return=L,N)}function G(L,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Dh(""+N,L.mode,b),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case $e:return b=tu(N.type,N.key,N.props,null,L.mode,b),b.ref=ra(L,null,N),b.return=L,b;case ke:return N=Vh(N,L.mode,b),N.return=L,N;case Pt:var K=N._init;return G(L,K(N._payload),b)}if(nt(N)||ae(N))return N=Xi(N,L.mode,b,null),N.return=L,N;Dl(L,N)}return null}function $(L,N,b,K){var se=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return se!==null?null:T(L,N,""+b,K);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $e:return b.key===se?C(L,N,b,K):null;case ke:return b.key===se?F(L,N,b,K):null;case Pt:return se=b._init,$(L,N,se(b._payload),K)}if(nt(b)||ae(b))return se!==null?null:W(L,N,b,K,null);Dl(L,b)}return null}function Z(L,N,b,K,se){if(typeof K=="string"&&K!==""||typeof K=="number")return L=L.get(b)||null,T(N,L,""+K,se);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case $e:return L=L.get(K.key===null?b:K.key)||null,C(N,L,K,se);case ke:return L=L.get(K.key===null?b:K.key)||null,F(N,L,K,se);case Pt:var le=K._init;return Z(L,N,b,le(K._payload),se)}if(nt(K)||ae(K))return L=L.get(b)||null,W(N,L,K,se,null);Dl(N,K)}return null}function re(L,N,b,K){for(var se=null,le=null,ue=N,fe=N=0,vt=null;ue!==null&&fe<b.length;fe++){ue.index>fe?(vt=ue,ue=null):vt=ue.sibling;var xe=$(L,ue,b[fe],K);if(xe===null){ue===null&&(ue=vt);break}n&&ue&&xe.alternate===null&&r(L,ue),N=d(xe,N,fe),le===null?se=xe:le.sibling=xe,le=xe,ue=vt}if(fe===b.length)return o(L,ue),Qe&&Bi(L,fe),se;if(ue===null){for(;fe<b.length;fe++)ue=G(L,b[fe],K),ue!==null&&(N=d(ue,N,fe),le===null?se=ue:le.sibling=ue,le=ue);return Qe&&Bi(L,fe),se}for(ue=c(L,ue);fe<b.length;fe++)vt=Z(ue,L,fe,b[fe],K),vt!==null&&(n&&vt.alternate!==null&&ue.delete(vt.key===null?fe:vt.key),N=d(vt,N,fe),le===null?se=vt:le.sibling=vt,le=vt);return n&&ue.forEach(function(ii){return r(L,ii)}),Qe&&Bi(L,fe),se}function ie(L,N,b,K){var se=ae(b);if(typeof se!="function")throw Error(t(150));if(b=se.call(b),b==null)throw Error(t(151));for(var le=se=null,ue=N,fe=N=0,vt=null,xe=b.next();ue!==null&&!xe.done;fe++,xe=b.next()){ue.index>fe?(vt=ue,ue=null):vt=ue.sibling;var ii=$(L,ue,xe.value,K);if(ii===null){ue===null&&(ue=vt);break}n&&ue&&ii.alternate===null&&r(L,ue),N=d(ii,N,fe),le===null?se=ii:le.sibling=ii,le=ii,ue=vt}if(xe.done)return o(L,ue),Qe&&Bi(L,fe),se;if(ue===null){for(;!xe.done;fe++,xe=b.next())xe=G(L,xe.value,K),xe!==null&&(N=d(xe,N,fe),le===null?se=xe:le.sibling=xe,le=xe);return Qe&&Bi(L,fe),se}for(ue=c(L,ue);!xe.done;fe++,xe=b.next())xe=Z(ue,L,fe,xe.value,K),xe!==null&&(n&&xe.alternate!==null&&ue.delete(xe.key===null?fe:xe.key),N=d(xe,N,fe),le===null?se=xe:le.sibling=xe,le=xe);return n&&ue.forEach(function(NE){return r(L,NE)}),Qe&&Bi(L,fe),se}function it(L,N,b,K){if(typeof b=="object"&&b!==null&&b.type===P&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case $e:e:{for(var se=b.key,le=N;le!==null;){if(le.key===se){if(se=b.type,se===P){if(le.tag===7){o(L,le.sibling),N=f(le,b.props.children),N.return=L,L=N;break e}}else if(le.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Pt&&rp(se)===le.type){o(L,le.sibling),N=f(le,b.props),N.ref=ra(L,le,b),N.return=L,L=N;break e}o(L,le);break}else r(L,le);le=le.sibling}b.type===P?(N=Xi(b.props.children,L.mode,K,b.key),N.return=L,L=N):(K=tu(b.type,b.key,b.props,null,L.mode,K),K.ref=ra(L,N,b),K.return=L,L=K)}return _(L);case ke:e:{for(le=b.key;N!==null;){if(N.key===le)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){o(L,N.sibling),N=f(N,b.children||[]),N.return=L,L=N;break e}else{o(L,N);break}else r(L,N);N=N.sibling}N=Vh(b,L.mode,K),N.return=L,L=N}return _(L);case Pt:return le=b._init,it(L,N,le(b._payload),K)}if(nt(b))return re(L,N,b,K);if(ae(b))return ie(L,N,b,K);Dl(L,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(o(L,N.sibling),N=f(N,b),N.return=L,L=N):(o(L,N),N=Dh(b,L.mode,K),N.return=L,L=N),_(L)):o(L,N)}return it}var Hs=ip(!0),sp=ip(!1),Vl=Gr(null),Ol=null,qs=null,jc=null;function Bc(){jc=qs=Ol=null}function $c(n){var r=Vl.current;We(Vl),n._currentValue=r}function Hc(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Ws(n,r){Ol=n,jc=qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Ht=!0),n.firstContext=null)}function hn(n){var r=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:r,next:null},qs===null){if(Ol===null)throw Error(t(308));qs=n,Ol.dependencies={lanes:0,firstContext:n}}else qs=qs.next=n;return r}var $i=null;function qc(n){$i===null?$i=[n]:$i.push(n)}function op(n,r,o,c){var f=r.interleaved;return f===null?(o.next=o,qc(r)):(o.next=f.next,f.next=o),r.interleaved=o,yr(n,c)}function yr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Xr=!1;function Wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Yr(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,yr(n,o)}return f=c.interleaved,f===null?(r.next=r,qc(c)):(r.next=f.next,f.next=r),c.interleaved=r,yr(n,o)}function xl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Fo(n,o)}}function lp(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};d===null?f=d=_:d=d.next=_,o=o.next}while(o!==null);d===null?f=d=r:d=d.next=r}else f=d=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Ll(n,r,o,c){var f=n.updateQueue;Xr=!1;var d=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var C=T,F=C.next;C.next=null,_===null?d=F:_.next=F,_=C;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=C))}if(d!==null){var G=f.baseState;_=0,W=F=C=null,T=d;do{var $=T.lane,Z=T.eventTime;if((c&$)===$){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,ie=T;switch($=r,Z=o,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){G=re.call(Z,G,$);break e}G=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,$=typeof re=="function"?re.call(Z,G,$):re,$==null)break e;G=te({},G,$);break e;case 2:Xr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,$=f.effects,$===null?f.effects=[T]:$.push(T))}else Z={eventTime:Z,lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=Z,C=G):W=W.next=Z,_|=$;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;$=T,T=$.next,$.next=null,f.lastBaseUpdate=$,f.shared.pending=null}}while(!0);if(W===null&&(C=G),f.baseState=C,f.firstBaseUpdate=F,f.lastBaseUpdate=W,r=f.shared.interleaved,r!==null){f=r;do _|=f.lane,f=f.next;while(f!==r)}else d===null&&(f.shared.lanes=0);Wi|=_,n.lanes=_,n.memoizedState=G}}function up(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var ia={},Hn=Gr(ia),sa=Gr(ia),oa=Gr(ia);function Hi(n){if(n===ia)throw Error(t(174));return n}function Gc(n,r){switch(Be(oa,r),Be(sa,n),Be(Hn,ia),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ps(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ps(r,n)}We(Hn),Be(Hn,r)}function Gs(){We(Hn),We(sa),We(oa)}function cp(n){Hi(oa.current);var r=Hi(Hn.current),o=ps(r,n.type);r!==o&&(Be(sa,n),Be(Hn,o))}function Kc(n){sa.current===n&&(We(Hn),We(sa))}var Xe=Gr(0);function Ml(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Qc=[];function Xc(){for(var n=0;n<Qc.length;n++)Qc[n]._workInProgressVersionPrimary=null;Qc.length=0}var bl=Pe.ReactCurrentDispatcher,Yc=Pe.ReactCurrentBatchConfig,qi=0,Ye=null,ht=null,yt=null,Fl=!1,aa=!1,la=0,Jv=0;function Dt(){throw Error(t(321))}function Jc(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!En(n[o],r[o]))return!1;return!0}function Zc(n,r,o,c,f,d){if(qi=d,Ye=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bl.current=n===null||n.memoizedState===null?nE:rE,n=o(c,f),aa){d=0;do{if(aa=!1,la=0,25<=d)throw Error(t(301));d+=1,yt=ht=null,r.updateQueue=null,bl.current=iE,n=o(c,f)}while(aa)}if(bl.current=jl,r=ht!==null&&ht.next!==null,qi=0,yt=ht=Ye=null,Fl=!1,r)throw Error(t(300));return n}function eh(){var n=la!==0;return la=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ye.memoizedState=yt=n:yt=yt.next=n,yt}function fn(){if(ht===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=yt===null?Ye.memoizedState:yt.next;if(r!==null)yt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Ye.memoizedState=yt=n:yt=yt.next=n}return yt}function ua(n,r){return typeof r=="function"?r(n):r}function th(n){var r=fn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=ht,f=c.baseQueue,d=o.pending;if(d!==null){if(f!==null){var _=f.next;f.next=d.next,d.next=_}c.baseQueue=f=d,o.pending=null}if(f!==null){d=f.next,c=c.baseState;var T=_=null,C=null,F=d;do{var W=F.lane;if((qi&W)===W)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:W,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=G,_=c):C=C.next=G,Ye.lanes|=W,Wi|=W}F=F.next}while(F!==null&&F!==d);C===null?_=c:C.next=T,En(c,r.memoizedState)||(Ht=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=C,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do d=f.lane,Ye.lanes|=d,Wi|=d,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function nh(n){var r=fn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,d=r.memoizedState;if(f!==null){o.pending=null;var _=f=f.next;do d=n(d,_.action),_=_.next;while(_!==f);En(d,r.memoizedState)||(Ht=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),o.lastRenderedState=d}return[d,c]}function hp(){}function fp(n,r){var o=Ye,c=fn(),f=r(),d=!En(c.memoizedState,f);if(d&&(c.memoizedState=f,Ht=!0),c=c.queue,rh(mp.bind(null,o,c,n),[n]),c.getSnapshot!==r||d||yt!==null&&yt.memoizedState.tag&1){if(o.flags|=2048,ca(9,pp.bind(null,o,c,f,r),void 0,null),_t===null)throw Error(t(349));(qi&30)!==0||dp(o,r,f)}return f}function dp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function pp(n,r,o,c){r.value=o,r.getSnapshot=c,gp(r)&&yp(n)}function mp(n,r,o){return o(function(){gp(r)&&yp(n)})}function gp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!En(n,o)}catch{return!0}}function yp(n){var r=yr(n,1);r!==null&&An(r,n,1,-1)}function _p(n){var r=qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},r.queue=n,n=n.dispatch=tE.bind(null,Ye,n),[r.memoizedState,n]}function ca(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function vp(){return fn().memoizedState}function Ul(n,r,o,c){var f=qn();Ye.flags|=n,f.memoizedState=ca(1|r,o,void 0,c===void 0?null:c)}function zl(n,r,o,c){var f=fn();c=c===void 0?null:c;var d=void 0;if(ht!==null){var _=ht.memoizedState;if(d=_.destroy,c!==null&&Jc(c,_.deps)){f.memoizedState=ca(r,o,d,c);return}}Ye.flags|=n,f.memoizedState=ca(1|r,o,d,c)}function Ep(n,r){return Ul(8390656,8,n,r)}function rh(n,r){return zl(2048,8,n,r)}function wp(n,r){return zl(4,2,n,r)}function Tp(n,r){return zl(4,4,n,r)}function Ip(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Sp(n,r,o){return o=o!=null?o.concat([n]):null,zl(4,4,Ip.bind(null,r,n),o)}function ih(){}function Ap(n,r){var o=fn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Jc(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function Rp(n,r){var o=fn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Jc(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function Cp(n,r,o){return(qi&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=o):(En(o,r)||(o=Mo(),Ye.lanes|=o,Wi|=o,n.baseState=!0),r)}function Zv(n,r){var o=Ne;Ne=o!==0&&4>o?o:4,n(!0);var c=Yc.transition;Yc.transition={};try{n(!1),r()}finally{Ne=o,Yc.transition=c}}function Pp(){return fn().memoizedState}function eE(n,r,o){var c=ti(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},kp(n))Np(r,o);else if(o=op(n,r,o,c),o!==null){var f=zt();An(o,n,c,f),Dp(o,r,c)}}function tE(n,r,o){var c=ti(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(kp(n))Np(r,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var _=r.lastRenderedState,T=d(_,o);if(f.hasEagerState=!0,f.eagerState=T,En(T,_)){var C=r.interleaved;C===null?(f.next=f,qc(r)):(f.next=C.next,C.next=f),r.interleaved=f;return}}catch{}finally{}o=op(n,r,f,c),o!==null&&(f=zt(),An(o,n,c,f),Dp(o,r,c))}}function kp(n){var r=n.alternate;return n===Ye||r!==null&&r===Ye}function Np(n,r){aa=Fl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Dp(n,r,o){if((o&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Fo(n,o)}}var jl={readContext:hn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},nE={readContext:hn,useCallback:function(n,r){return qn().memoizedState=[n,r===void 0?null:r],n},useContext:hn,useEffect:Ep,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Ul(4194308,4,Ip.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Ul(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ul(4,2,n,r)},useMemo:function(n,r){var o=qn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=qn();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=eE.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var r=qn();return n={current:n},r.memoizedState=n},useState:_p,useDebugValue:ih,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=_p(!1),r=n[0];return n=Zv.bind(null,n[1]),qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=Ye,f=qn();if(Qe){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),_t===null)throw Error(t(349));(qi&30)!==0||dp(c,r,o)}f.memoizedState=o;var d={value:o,getSnapshot:r};return f.queue=d,Ep(mp.bind(null,c,d,n),[n]),c.flags|=2048,ca(9,pp.bind(null,c,d,o,r),void 0,null),o},useId:function(){var n=qn(),r=_t.identifierPrefix;if(Qe){var o=gr,c=mr;o=(c&~(1<<32-Yt(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=la++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Jv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},rE={readContext:hn,useCallback:Ap,useContext:hn,useEffect:rh,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Tp,useMemo:Rp,useReducer:th,useRef:vp,useState:function(){return th(ua)},useDebugValue:ih,useDeferredValue:function(n){var r=fn();return Cp(r,ht.memoizedState,n)},useTransition:function(){var n=th(ua)[0],r=fn().memoizedState;return[n,r]},useMutableSource:hp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1},iE={readContext:hn,useCallback:Ap,useContext:hn,useEffect:rh,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Tp,useMemo:Rp,useReducer:nh,useRef:vp,useState:function(){return nh(ua)},useDebugValue:ih,useDeferredValue:function(n){var r=fn();return ht===null?r.memoizedState=n:Cp(r,ht.memoizedState,n)},useTransition:function(){var n=nh(ua)[0],r=fn().memoizedState;return[n,r]},useMutableSource:hp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1};function Tn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function sh(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:te({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Bl={isMounted:function(n){return(n=n._reactInternals)?_n(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=zt(),f=ti(n),d=_r(c,f);d.payload=r,o!=null&&(d.callback=o),r=Yr(n,d,f),r!==null&&(An(r,n,f,c),xl(r,n,f))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=zt(),f=ti(n),d=_r(c,f);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=Yr(n,d,f),r!==null&&(An(r,n,f,c),xl(r,n,f))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=zt(),c=ti(n),f=_r(o,c);f.tag=2,r!=null&&(f.callback=r),r=Yr(n,f,c),r!==null&&(An(r,n,c,o),xl(r,n,c))}};function Vp(n,r,o,c,f,d,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,d,_):r.prototype&&r.prototype.isPureReactComponent?!Xo(o,c)||!Xo(f,d):!0}function Op(n,r,o){var c=!1,f=Kr,d=r.contextType;return typeof d=="object"&&d!==null?d=hn(d):(f=$t(r)?zi:Nt.current,c=r.contextTypes,d=(c=c!=null)?zs(n,f):Kr),r=new r(o,d),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Bl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=d),r}function xp(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&Bl.enqueueReplaceState(r,r.state,null)}function oh(n,r,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Wc(n);var d=r.contextType;typeof d=="object"&&d!==null?f.context=hn(d):(d=$t(r)?zi:Nt.current,f.context=zs(n,d)),f.state=n.memoizedState,d=r.getDerivedStateFromProps,typeof d=="function"&&(sh(n,r,d,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Bl.enqueueReplaceState(f,f.state,null),Ll(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,r){try{var o="",c=r;do o+=Ie(c),c=c.return;while(c);var f=o}catch(d){f=`
Error generating stack: `+d.message+`
`+d.stack}return{value:n,source:r,stack:f,digest:null}}function ah(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function lh(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var sE=typeof WeakMap=="function"?WeakMap:Map;function Lp(n,r,o){o=_r(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){Ql||(Ql=!0,Ih=c),lh(n,r)},o}function Mp(n,r,o){o=_r(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;o.payload=function(){return c(f)},o.callback=function(){lh(n,r)}}var d=n.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(o.callback=function(){lh(n,r),typeof c!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),o}function bp(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new sE;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(f.add(o),n=vE.bind(null,n,r,o),r.then(n,n))}function Fp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Up(n,r,o,c,f){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=_r(-1,1),r.tag=2,Yr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var oE=Pe.ReactCurrentOwner,Ht=!1;function Ut(n,r,o,c){r.child=n===null?sp(r,null,o,c):Hs(r,n.child,o,c)}function zp(n,r,o,c,f){o=o.render;var d=r.ref;return Ws(r,f),c=Zc(n,r,o,c,d,f),o=eh(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,vr(n,r,f)):(Qe&&o&&Mc(r),r.flags|=1,Ut(n,r,c,f),r.child)}function jp(n,r,o,c,f){if(n===null){var d=o.type;return typeof d=="function"&&!Nh(d)&&d.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=d,Bp(n,r,d,c,f)):(n=tu(o.type,null,c,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,(n.lanes&f)===0){var _=d.memoizedProps;if(o=o.compare,o=o!==null?o:Xo,o(_,c)&&n.ref===r.ref)return vr(n,r,f)}return r.flags|=1,n=ri(d,c),n.ref=r.ref,n.return=r,r.child=n}function Bp(n,r,o,c,f){if(n!==null){var d=n.memoizedProps;if(Xo(d,c)&&n.ref===r.ref)if(Ht=!1,r.pendingProps=c=d,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Ht=!0);else return r.lanes=n.lanes,vr(n,r,f)}return uh(n,r,o,c,f)}function $p(n,r,o){var c=r.pendingProps,f=c.children,d=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Xs,sn),sn|=o;else{if((o&1073741824)===0)return n=d!==null?d.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Be(Xs,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=d!==null?d.baseLanes:o,Be(Xs,sn),sn|=c}else d!==null?(c=d.baseLanes|o,r.memoizedState=null):c=o,Be(Xs,sn),sn|=c;return Ut(n,r,f,o),r.child}function Hp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function uh(n,r,o,c,f){var d=$t(o)?zi:Nt.current;return d=zs(r,d),Ws(r,f),o=Zc(n,r,o,c,d,f),c=eh(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,vr(n,r,f)):(Qe&&c&&Mc(r),r.flags|=1,Ut(n,r,o,f),r.child)}function qp(n,r,o,c,f){if($t(o)){var d=!0;Rl(r)}else d=!1;if(Ws(r,f),r.stateNode===null)Hl(n,r),Op(r,o,c),oh(r,o,c,f),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var C=_.context,F=o.contextType;typeof F=="object"&&F!==null?F=hn(F):(F=$t(o)?zi:Nt.current,F=zs(r,F));var W=o.getDerivedStateFromProps,G=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||C!==F)&&xp(r,_,c,F),Xr=!1;var $=r.memoizedState;_.state=$,Ll(r,c,_,f),C=r.memoizedState,T!==c||$!==C||Bt.current||Xr?(typeof W=="function"&&(sh(r,o,W,c),C=r.memoizedState),(T=Xr||Vp(r,o,T,c,$,C,F))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),_.props=c,_.state=C,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,ap(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Tn(r.type,T),_.props=F,G=r.pendingProps,$=_.context,C=o.contextType,typeof C=="object"&&C!==null?C=hn(C):(C=$t(o)?zi:Nt.current,C=zs(r,C));var Z=o.getDerivedStateFromProps;(W=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==G||$!==C)&&xp(r,_,c,C),Xr=!1,$=r.memoizedState,_.state=$,Ll(r,c,_,f);var re=r.memoizedState;T!==G||$!==re||Bt.current||Xr?(typeof Z=="function"&&(sh(r,o,Z,c),re=r.memoizedState),(F=Xr||Vp(r,o,F,c,$,re,C)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,C)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=C,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),c=!1)}return ch(n,r,o,c,d,f)}function ch(n,r,o,c,f,d){Hp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return f&&Xd(r,o,!1),vr(n,r,d);c=r.stateNode,oE.current=r;var T=_&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Hs(r,n.child,null,d),r.child=Hs(r,null,T,d)):Ut(n,r,T,d),r.memoizedState=c.state,f&&Xd(r,o,!0),r.child}function Wp(n){var r=n.stateNode;r.pendingContext?Kd(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Kd(n,r.context,!1),Gc(n,r.containerInfo)}function Gp(n,r,o,c,f){return $s(),zc(f),r.flags|=256,Ut(n,r,o,c),r.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function fh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,r,o){var c=r.pendingProps,f=Xe.current,d=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(f&2)!==0),T?(d=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Be(Xe,f&1),n===null)return Uc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,d?(c=r.mode,d=r.child,_={mode:"hidden",children:_},(c&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=_):d=nu(_,c,0,null),n=Xi(n,c,o,null),d.return=r,n.return=r,d.sibling=n,r.child=d,r.child.memoizedState=fh(o),r.memoizedState=hh,n):dh(r,_));if(f=n.memoizedState,f!==null&&(T=f.dehydrated,T!==null))return aE(n,r,_,c,T,f,o);if(d){d=c.fallback,_=r.mode,f=n.child,T=f.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=ri(f,C),c.subtreeFlags=f.subtreeFlags&14680064),T!==null?d=ri(T,d):(d=Xi(d,_,o,null),d.flags|=2),d.return=r,c.return=r,c.sibling=d,r.child=c,c=d,d=r.child,_=n.child.memoizedState,_=_===null?fh(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},d.memoizedState=_,d.childLanes=n.childLanes&~o,r.memoizedState=hh,c}return d=n.child,n=d.sibling,c=ri(d,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function dh(n,r){return r=nu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function $l(n,r,o,c){return c!==null&&zc(c),Hs(r,n.child,null,o),n=dh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function aE(n,r,o,c,f,d,_){if(o)return r.flags&256?(r.flags&=-257,c=ah(Error(t(422))),$l(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(d=c.fallback,f=r.mode,c=nu({mode:"visible",children:c.children},f,0,null),d=Xi(d,f,_,null),d.flags|=2,c.return=r,d.return=r,c.sibling=d,r.child=c,(r.mode&1)!==0&&Hs(r,n.child,null,_),r.child.memoizedState=fh(_),r.memoizedState=hh,d);if((r.mode&1)===0)return $l(n,r,_,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var T=c.dgst;return c=T,d=Error(t(419)),c=ah(d,c,void 0),$l(n,r,_,c)}if(T=(_&n.childLanes)!==0,Ht||T){if(c=_t,c!==null){switch(_&-_){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|_))!==0?0:f,f!==0&&f!==d.retryLane&&(d.retryLane=f,yr(n,f),An(c,n,f,-1))}return kh(),c=ah(Error(t(421))),$l(n,r,_,c)}return f.data==="$?"?(r.flags|=128,r.child=n.child,r=EE.bind(null,n),f._reactRetry=r,null):(n=d.treeContext,rn=Wr(f.nextSibling),nn=r,Qe=!0,wn=null,n!==null&&(un[cn++]=mr,un[cn++]=gr,un[cn++]=ji,mr=n.id,gr=n.overflow,ji=r),r=dh(r,c.children),r.flags|=4096,r)}function Qp(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Hc(n.return,r,o)}function ph(n,r,o,c,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=c,d.tail=o,d.tailMode=f)}function Xp(n,r,o){var c=r.pendingProps,f=c.revealOrder,d=c.tail;if(Ut(n,r,c.children,o),c=Xe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,o,r);else if(n.tag===19)Qp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Be(Xe,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&Ml(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),ph(r,!1,f,o,d);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&Ml(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}ph(r,!0,o,null,d);break;case"together":ph(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function vr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Wi|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=ri(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=ri(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function lE(n,r,o){switch(r.tag){case 3:Wp(r),$s();break;case 5:cp(r);break;case 1:$t(r.type)&&Rl(r);break;case 4:Gc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Be(Vl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Be(Xe,Xe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Kp(n,r,o):(Be(Xe,Xe.current&1),n=vr(n,r,o),n!==null?n.sibling:null);Be(Xe,Xe.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Xp(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Be(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,$p(n,r,o)}return vr(n,r,o)}var Yp,mh,Jp,Zp;Yp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},mh=function(){},Jp=function(n,r,o,c){var f=n.memoizedProps;if(f!==c){n=r.stateNode,Hi(Hn.current);var d=null;switch(o){case"input":f=fs(n,f),c=fs(n,c),d=[];break;case"select":f=te({},f,{value:void 0}),c=te({},c,{value:void 0}),d=[];break;case"textarea":f=Ao(n,f),c=Ao(n,c),d=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Il)}yn(o,c);var _;o=null;for(F in f)if(!c.hasOwnProperty(F)&&f.hasOwnProperty(F)&&f[F]!=null)if(F==="style"){var T=f[F];for(_ in T)T.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(a.hasOwnProperty(F)?d||(d=[]):(d=d||[]).push(F,null));for(F in c){var C=c[F];if(T=f!=null?f[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in C)C.hasOwnProperty(_)&&T[_]!==C[_]&&(o||(o={}),o[_]=C[_])}else o||(d||(d=[]),d.push(F,o)),o=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(d=d||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(d=d||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(a.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&qe("scroll",n),d||T===C||(d=[])):(d=d||[]).push(F,C))}o&&(d=d||[]).push("style",o);var F=d;(r.updateQueue=F)&&(r.flags|=4)}},Zp=function(n,r,o,c){o!==c&&(r.flags|=4)};function ha(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function uE(n,r,o){var c=r.pendingProps;switch(bc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return $t(r.type)&&Al(),Vt(r),null;case 3:return c=r.stateNode,Gs(),We(Bt),We(Nt),Xc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Nl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,wn!==null&&(Rh(wn),wn=null))),mh(n,r),Vt(r),null;case 5:Kc(r);var f=Hi(oa.current);if(o=r.type,n!==null&&r.stateNode!=null)Jp(n,r,o,c,f),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Hi(Hn.current),Nl(r)){c=r.stateNode,o=r.type;var d=r.memoizedProps;switch(c[$n]=r,c[ta]=d,n=(r.mode&1)!==0,o){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(f=0;f<Jo.length;f++)qe(Jo[f],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":Ka(c,d),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!d.multiple},qe("invalid",c);break;case"textarea":Ro(c,d),qe("invalid",c)}yn(o,d),f=null;for(var _ in d)if(d.hasOwnProperty(_)){var T=d[_];_==="children"?typeof T=="string"?c.textContent!==T&&(d.suppressHydrationWarning!==!0&&Tl(c.textContent,T,n),f=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(d.suppressHydrationWarning!==!0&&Tl(c.textContent,T,n),f=["children",""+T]):a.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&qe("scroll",c)}switch(o){case"input":hs(c),So(c,d,!0);break;case"textarea":hs(c),Nr(c);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(c.onclick=Il)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Co(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(o,{is:c.is}):(n=_.createElement(o),o==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,o),n[$n]=r,n[ta]=c,Yp(n,r,!1,!1),r.stateNode=n;e:{switch(_=gs(o,c),o){case"dialog":qe("cancel",n),qe("close",n),f=c;break;case"iframe":case"object":case"embed":qe("load",n),f=c;break;case"video":case"audio":for(f=0;f<Jo.length;f++)qe(Jo[f],n);f=c;break;case"source":qe("error",n),f=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),f=c;break;case"details":qe("toggle",n),f=c;break;case"input":Ka(n,c),f=fs(n,c),qe("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=te({},c,{value:void 0}),qe("invalid",n);break;case"textarea":Ro(n,c),f=Ao(n,c),qe("invalid",n);break;default:f=c}yn(o,f),T=f;for(d in T)if(T.hasOwnProperty(d)){var C=T[d];d==="style"?ms(n,C):d==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Xa(n,C)):d==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&Ai(n,C):typeof C=="number"&&Ai(n,""+C):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(a.hasOwnProperty(d)?C!=null&&d==="onScroll"&&qe("scroll",n):C!=null&&we(n,d,C,_))}switch(o){case"input":hs(n),So(n,c,!1);break;case"textarea":hs(n),Nr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,d=c.value,d!=null?gn(n,!!c.multiple,d,!1):c.defaultValue!=null&&gn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Il)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)Zp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=Hi(oa.current),Hi(Hn.current),Nl(r)){if(c=r.stateNode,o=r.memoizedProps,c[$n]=r,(d=c.nodeValue!==o)&&(n=nn,n!==null))switch(n.tag){case 3:Tl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Tl(c.nodeValue,o,(n.mode&1)!==0)}d&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[$n]=r,r.stateNode=c}return Vt(r),null;case 13:if(We(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&rn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)np(),$s(),r.flags|=98560,d=!1;else if(d=Nl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!d)throw Error(t(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(t(317));d[$n]=r}else $s(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vt(r),d=!1}else wn!==null&&(Rh(wn),wn=null),d=!0;if(!d)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?ft===0&&(ft=3):kh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Gs(),mh(n,r),n===null&&Zo(r.stateNode.containerInfo),Vt(r),null;case 10:return $c(r.type._context),Vt(r),null;case 17:return $t(r.type)&&Al(),Vt(r),null;case 19:if(We(Xe),d=r.memoizedState,d===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=d.rendering,_===null)if(c)ha(d,!1);else{if(ft!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Ml(n),_!==null){for(r.flags|=128,ha(d,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)d=o,n=c,d.flags&=14680066,_=d.alternate,_===null?(d.childLanes=0,d.lanes=n,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=_.childLanes,d.lanes=_.lanes,d.child=_.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=_.memoizedProps,d.memoizedState=_.memoizedState,d.updateQueue=_.updateQueue,d.type=_.type,n=_.dependencies,d.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Be(Xe,Xe.current&1|2),r.child}n=n.sibling}d.tail!==null&&He()>Ys&&(r.flags|=128,c=!0,ha(d,!1),r.lanes=4194304)}else{if(!c)if(n=Ml(_),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ha(d,!0),d.tail===null&&d.tailMode==="hidden"&&!_.alternate&&!Qe)return Vt(r),null}else 2*He()-d.renderingStartTime>Ys&&o!==1073741824&&(r.flags|=128,c=!0,ha(d,!1),r.lanes=4194304);d.isBackwards?(_.sibling=r.child,r.child=_):(o=d.last,o!==null?o.sibling=_:r.child=_,d.last=_)}return d.tail!==null?(r=d.tail,d.rendering=r,d.tail=r.sibling,d.renderingStartTime=He(),r.sibling=null,o=Xe.current,Be(Xe,c?o&1|2:o&1),r):(Vt(r),null);case 22:case 23:return Ph(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(sn&1073741824)!==0&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function cE(n,r){switch(bc(r),r.tag){case 1:return $t(r.type)&&Al(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Gs(),We(Bt),We(Nt),Xc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Kc(r),null;case 13:if(We(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));$s()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Xe),null;case 4:return Gs(),null;case 10:return $c(r.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var ql=!1,Ot=!1,hE=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Qs(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){tt(n,r,c)}else o.current=null}function gh(n,r,o){try{o()}catch(c){tt(n,r,c)}}var em=!1;function fE(n,r){if(Pc=cr,n=Vd(),Ec(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,d=c.focusNode;c=c.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var _=0,T=-1,C=-1,F=0,W=0,G=n,$=null;t:for(;;){for(var Z;G!==o||f!==0&&G.nodeType!==3||(T=_+f),G!==d||c!==0&&G.nodeType!==3||(C=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(Z=G.firstChild)!==null;)$=G,G=Z;for(;;){if(G===n)break t;if($===o&&++F===f&&(T=_),$===d&&++W===c&&(C=_),(Z=G.nextSibling)!==null)break;G=$,$=G.parentNode}G=Z}o=T===-1||C===-1?null:{start:T,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(kc={focusedElem:n,selectionRange:o},cr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,it=re.memoizedState,L=r.stateNode,N=L.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Tn(r.type,ie),it);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(K){tt(r,r.return,K)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=em,em=!1,re}function fa(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var d=f.destroy;f.destroy=void 0,d!==void 0&&gh(r,o,d)}f=f.next}while(f!==c)}}function Wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function yh(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function tm(n){var r=n.alternate;r!==null&&(n.alternate=null,tm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$n],delete r[ta],delete r[Oc],delete r[Kv],delete r[Qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nm(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||nm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _h(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Il));else if(c!==4&&(n=n.child,n!==null))for(_h(n,r,o),n=n.sibling;n!==null;)_h(n,r,o),n=n.sibling}function vh(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(vh(n,r,o),n=n.sibling;n!==null;)vh(n,r,o),n=n.sibling}var It=null,In=!1;function Jr(n,r,o){for(o=o.child;o!==null;)im(n,r,o),o=o.sibling}function im(n,r,o){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Ni,o)}catch{}switch(o.tag){case 5:Ot||Qs(o,r);case 6:var c=It,f=In;It=null,Jr(n,r,o),It=c,In=f,It!==null&&(In?(n=It,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):It.removeChild(o.stateNode));break;case 18:It!==null&&(In?(n=It,o=o.stateNode,n.nodeType===8?Vc(n.parentNode,o):n.nodeType===1&&Vc(n,o),Br(n)):Vc(It,o.stateNode));break;case 4:c=It,f=In,It=o.stateNode.containerInfo,In=!0,Jr(n,r,o),It=c,In=f;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var d=f,_=d.destroy;d=d.tag,_!==void 0&&((d&2)!==0||(d&4)!==0)&&gh(o,r,_),f=f.next}while(f!==c)}Jr(n,r,o);break;case 1:if(!Ot&&(Qs(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(T){tt(o,r,T)}Jr(n,r,o);break;case 21:Jr(n,r,o);break;case 22:o.mode&1?(Ot=(c=Ot)||o.memoizedState!==null,Jr(n,r,o),Ot=c):Jr(n,r,o);break;default:Jr(n,r,o)}}function sm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new hE),r.forEach(function(c){var f=wE.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Sn(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var d=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,In=!1;break e;case 3:It=T.stateNode.containerInfo,In=!0;break e;case 4:It=T.stateNode.containerInfo,In=!0;break e}T=T.return}if(It===null)throw Error(t(160));im(d,_,f),It=null,In=!1;var C=f.alternate;C!==null&&(C.return=null),f.return=null}catch(F){tt(f,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)om(r,n),r=r.sibling}function om(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Sn(r,n),Wn(n),c&4){try{fa(3,n,n.return),Wl(3,n)}catch(ie){tt(n,n.return,ie)}try{fa(5,n,n.return)}catch(ie){tt(n,n.return,ie)}}break;case 1:Sn(r,n),Wn(n),c&512&&o!==null&&Qs(o,o.return);break;case 5:if(Sn(r,n),Wn(n),c&512&&o!==null&&Qs(o,o.return),n.flags&32){var f=n.stateNode;try{Ai(f,"")}catch(ie){tt(n,n.return,ie)}}if(c&4&&(f=n.stateNode,f!=null)){var d=n.memoizedProps,_=o!==null?o.memoizedProps:d,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&d.type==="radio"&&d.name!=null&&ds(f,d),gs(T,_);var F=gs(T,d);for(_=0;_<C.length;_+=2){var W=C[_],G=C[_+1];W==="style"?ms(f,G):W==="dangerouslySetInnerHTML"?Xa(f,G):W==="children"?Ai(f,G):we(f,W,G,F)}switch(T){case"input":Si(f,d);break;case"textarea":Qa(f,d);break;case"select":var $=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!d.multiple;var Z=d.value;Z!=null?gn(f,!!d.multiple,Z,!1):$!==!!d.multiple&&(d.defaultValue!=null?gn(f,!!d.multiple,d.defaultValue,!0):gn(f,!!d.multiple,d.multiple?[]:"",!1))}f[ta]=d}catch(ie){tt(n,n.return,ie)}}break;case 6:if(Sn(r,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,d=n.memoizedProps;try{f.nodeValue=d}catch(ie){tt(n,n.return,ie)}}break;case 3:if(Sn(r,n),Wn(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Br(r.containerInfo)}catch(ie){tt(n,n.return,ie)}break;case 4:Sn(r,n),Wn(n);break;case 13:Sn(r,n),Wn(n),f=n.child,f.flags&8192&&(d=f.memoizedState!==null,f.stateNode.isHidden=d,!d||f.alternate!==null&&f.alternate.memoizedState!==null||(Th=He())),c&4&&sm(n);break;case 22:if(W=o!==null&&o.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||W,Sn(r,n),Ot=F):Sn(r,n),Wn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!W&&(n.mode&1)!==0)for(ne=n,W=n.child;W!==null;){for(G=ne=W;ne!==null;){switch($=ne,Z=$.child,$.tag){case 0:case 11:case 14:case 15:fa(4,$,$.return);break;case 1:Qs($,$.return);var re=$.stateNode;if(typeof re.componentWillUnmount=="function"){c=$,o=$.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){tt(c,o,ie)}}break;case 5:Qs($,$.return);break;case 22:if($.memoizedState!==null){um(G);continue}}Z!==null?(Z.return=$,ne=Z):um(G)}W=W.sibling}e:for(W=null,G=n;;){if(G.tag===5){if(W===null){W=G;try{f=G.stateNode,F?(d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(T=G.stateNode,C=G.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Or("display",_))}catch(ie){tt(n,n.return,ie)}}}else if(G.tag===6){if(W===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(ie){tt(n,n.return,ie)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;W===G&&(W=null),G=G.return}W===G&&(W=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Sn(r,n),Wn(n),c&4&&sm(n);break;case 21:break;default:Sn(r,n),Wn(n)}}function Wn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(nm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ai(f,""),c.flags&=-33);var d=rm(n);vh(n,d,f);break;case 3:case 4:var _=c.stateNode.containerInfo,T=rm(n);_h(n,T,_);break;default:throw Error(t(161))}}catch(C){tt(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function dE(n,r,o){ne=n,am(n)}function am(n,r,o){for(var c=(n.mode&1)!==0;ne!==null;){var f=ne,d=f.child;if(f.tag===22&&c){var _=f.memoizedState!==null||ql;if(!_){var T=f.alternate,C=T!==null&&T.memoizedState!==null||Ot;T=ql;var F=Ot;if(ql=_,(Ot=C)&&!F)for(ne=f;ne!==null;)_=ne,C=_.child,_.tag===22&&_.memoizedState!==null?cm(f):C!==null?(C.return=_,ne=C):cm(f);for(;d!==null;)ne=d,am(d),d=d.sibling;ne=f,ql=T,Ot=F}lm(n)}else(f.subtreeFlags&8772)!==0&&d!==null?(d.return=f,ne=d):lm(n)}}function lm(n){for(;ne!==null;){var r=ne;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ot||Wl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(o===null)c.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:Tn(r.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var d=r.updateQueue;d!==null&&up(r,d,c);break;case 3:var _=r.updateQueue;if(_!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}up(r,_,o)}break;case 5:var T=r.stateNode;if(o===null&&r.flags&4){o=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var W=F.memoizedState;if(W!==null){var G=W.dehydrated;G!==null&&Br(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&yh(r)}catch($){tt(r,r.return,$)}}if(r===n){ne=null;break}if(o=r.sibling,o!==null){o.return=r.return,ne=o;break}ne=r.return}}function um(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ne=o;break}ne=r.return}}function cm(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Wl(4,r)}catch(C){tt(r,o,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(C){tt(r,f,C)}}var d=r.return;try{yh(r)}catch(C){tt(r,d,C)}break;case 5:var _=r.return;try{yh(r)}catch(C){tt(r,_,C)}}}catch(C){tt(r,r.return,C)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var pE=Math.ceil,Gl=Pe.ReactCurrentDispatcher,Eh=Pe.ReactCurrentOwner,dn=Pe.ReactCurrentBatchConfig,Oe=0,_t=null,lt=null,St=0,sn=0,Xs=Gr(0),ft=0,da=null,Wi=0,Kl=0,wh=0,pa=null,qt=null,Th=0,Ys=1/0,Er=null,Ql=!1,Ih=null,Zr=null,Xl=!1,ei=null,Yl=0,ma=0,Sh=null,Jl=-1,Zl=0;function zt(){return(Oe&6)!==0?He():Jl!==-1?Jl:Jl=He()}function ti(n){return(n.mode&1)===0?1:(Oe&2)!==0&&St!==0?St&-St:Yv.transition!==null?(Zl===0&&(Zl=Mo()),Zl):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:Rs(n.type)),n)}function An(n,r,o,c){if(50<ma)throw ma=0,Sh=null,Error(t(185));xi(n,o,c),((Oe&2)===0||n!==_t)&&(n===_t&&((Oe&2)===0&&(Kl|=o),ft===4&&ni(n,St)),Wt(n,c),o===1&&Oe===0&&(r.mode&1)===0&&(Ys=He()+500,Cl&&Qr()))}function Wt(n,r){var o=n.callbackNode;Oi(n,r);var c=ar(n,n===_t?St:0);if(c===0)o!==null&&vs(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&vs(o),r===1)n.tag===0?Xv(fm.bind(null,n)):Yd(fm.bind(null,n)),Wv(function(){(Oe&6)===0&&Qr()}),o=null;else{switch(On(c)){case 1:o=Es;break;case 4:o=Oo;break;case 16:o=ki;break;case 536870912:o=ws;break;default:o=ki}o=Em(o,hm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function hm(n,r){if(Jl=-1,Zl=0,(Oe&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Js()&&n.callbackNode!==o)return null;var c=ar(n,n===_t?St:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=eu(n,c);else{r=c;var f=Oe;Oe|=2;var d=pm();(_t!==n||St!==r)&&(Er=null,Ys=He()+500,Ki(n,r));do try{yE();break}catch(T){dm(n,T)}while(!0);Bc(),Gl.current=d,Oe=f,lt!==null?r=0:(_t=null,St=0,r=ft)}if(r!==0){if(r===2&&(f=Lo(n),f!==0&&(c=f,r=Ah(n,f))),r===1)throw o=da,Ki(n,0),ni(n,c),Wt(n,He()),o;if(r===6)ni(n,c);else{if(f=n.current.alternate,(c&30)===0&&!mE(f)&&(r=eu(n,c),r===2&&(d=Lo(n),d!==0&&(c=d,r=Ah(n,d))),r===1))throw o=da,Ki(n,0),ni(n,c),Wt(n,He()),o;switch(n.finishedWork=f,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Qi(n,qt,Er);break;case 3:if(ni(n,c),(c&130023424)===c&&(r=Th+500-He(),10<r)){if(ar(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){zt(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Dc(Qi.bind(null,n,qt,Er),r);break}Qi(n,qt,Er);break;case 4:if(ni(n,c),(c&4194240)===c)break;for(r=n.eventTimes,f=-1;0<c;){var _=31-Yt(c);d=1<<_,_=r[_],_>f&&(f=_),c&=~d}if(c=f,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*pE(c/1960))-c,10<c){n.timeoutHandle=Dc(Qi.bind(null,n,qt,Er),c);break}Qi(n,qt,Er);break;case 5:Qi(n,qt,Er);break;default:throw Error(t(329))}}}return Wt(n,He()),n.callbackNode===o?hm.bind(null,n):null}function Ah(n,r){var o=pa;return n.current.memoizedState.isDehydrated&&(Ki(n,r).flags|=256),n=eu(n,r),n!==2&&(r=qt,qt=o,r!==null&&Rh(r)),n}function Rh(n){qt===null?qt=n:qt.push.apply(qt,n)}function mE(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],d=f.getSnapshot;f=f.value;try{if(!En(d(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ni(n,r){for(r&=~wh,r&=~Kl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Yt(r),c=1<<o;n[o]=-1,r&=~c}}function fm(n){if((Oe&6)!==0)throw Error(t(327));Js();var r=ar(n,0);if((r&1)===0)return Wt(n,He()),null;var o=eu(n,r);if(n.tag!==0&&o===2){var c=Lo(n);c!==0&&(r=c,o=Ah(n,c))}if(o===1)throw o=da,Ki(n,0),ni(n,r),Wt(n,He()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Qi(n,qt,Er),Wt(n,He()),null}function Ch(n,r){var o=Oe;Oe|=1;try{return n(r)}finally{Oe=o,Oe===0&&(Ys=He()+500,Cl&&Qr())}}function Gi(n){ei!==null&&ei.tag===0&&(Oe&6)===0&&Js();var r=Oe;Oe|=1;var o=dn.transition,c=Ne;try{if(dn.transition=null,Ne=1,n)return n()}finally{Ne=c,dn.transition=o,Oe=r,(Oe&6)===0&&Qr()}}function Ph(){sn=Xs.current,We(Xs)}function Ki(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,qv(o)),lt!==null)for(o=lt.return;o!==null;){var c=o;switch(bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Al();break;case 3:Gs(),We(Bt),We(Nt),Xc();break;case 5:Kc(c);break;case 4:Gs();break;case 13:We(Xe);break;case 19:We(Xe);break;case 10:$c(c.type._context);break;case 22:case 23:Ph()}o=o.return}if(_t=n,lt=n=ri(n.current,null),St=sn=r,ft=0,da=null,wh=Kl=Wi=0,qt=pa=null,$i!==null){for(r=0;r<$i.length;r++)if(o=$i[r],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,d=o.pending;if(d!==null){var _=d.next;d.next=f,c.next=_}o.pending=c}$i=null}return n}function dm(n,r){do{var o=lt;try{if(Bc(),bl.current=jl,Fl){for(var c=Ye.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Fl=!1}if(qi=0,yt=ht=Ye=null,aa=!1,la=0,Eh.current=null,o===null||o.return===null){ft=1,da=r,lt=null;break}e:{var d=n,_=o.return,T=o,C=r;if(r=St,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,W=T,G=W.tag;if((W.mode&1)===0&&(G===0||G===11||G===15)){var $=W.alternate;$?(W.updateQueue=$.updateQueue,W.memoizedState=$.memoizedState,W.lanes=$.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=Fp(_);if(Z!==null){Z.flags&=-257,Up(Z,_,T,d,r),Z.mode&1&&bp(d,F,r),r=Z,C=F;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(C),r.updateQueue=ie}else re.add(C);break e}else{if((r&1)===0){bp(d,F,r),kh();break e}C=Error(t(426))}}else if(Qe&&T.mode&1){var it=Fp(_);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Up(it,_,T,d,r),zc(Ks(C,T));break e}}d=C=Ks(C,T),ft!==4&&(ft=2),pa===null?pa=[d]:pa.push(d),d=_;do{switch(d.tag){case 3:d.flags|=65536,r&=-r,d.lanes|=r;var L=Lp(d,C,r);lp(d,L);break e;case 1:T=C;var N=d.type,b=d.stateNode;if((d.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Zr===null||!Zr.has(b)))){d.flags|=65536,r&=-r,d.lanes|=r;var K=Mp(d,T,r);lp(d,K);break e}}d=d.return}while(d!==null)}gm(o)}catch(se){r=se,lt===o&&o!==null&&(lt=o=o.return);continue}break}while(!0)}function pm(){var n=Gl.current;return Gl.current=jl,n===null?jl:n}function kh(){(ft===0||ft===3||ft===2)&&(ft=4),_t===null||(Wi&268435455)===0&&(Kl&268435455)===0||ni(_t,St)}function eu(n,r){var o=Oe;Oe|=2;var c=pm();(_t!==n||St!==r)&&(Er=null,Ki(n,r));do try{gE();break}catch(f){dm(n,f)}while(!0);if(Bc(),Oe=o,Gl.current=c,lt!==null)throw Error(t(261));return _t=null,St=0,ft}function gE(){for(;lt!==null;)mm(lt)}function yE(){for(;lt!==null&&!Pi();)mm(lt)}function mm(n){var r=vm(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?gm(n):lt=r,Eh.current=null}function gm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=uE(o,r,sn),o!==null){lt=o;return}}else{if(o=cE(o,r),o!==null){o.flags&=32767,lt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,lt=null;return}}if(r=r.sibling,r!==null){lt=r;return}lt=r=n}while(r!==null);ft===0&&(ft=5)}function Qi(n,r,o){var c=Ne,f=dn.transition;try{dn.transition=null,Ne=1,_E(n,r,o,c)}finally{dn.transition=f,Ne=c}return null}function _E(n,r,o,c){do Js();while(ei!==null);if((Oe&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var d=o.lanes|o.childLanes;if(mc(n,d),n===_t&&(lt=_t=null,St=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Xl||(Xl=!0,Em(ki,function(){return Js(),null})),d=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||d){d=dn.transition,dn.transition=null;var _=Ne;Ne=1;var T=Oe;Oe|=4,Eh.current=null,fE(n,o),om(o,n),Fv(kc),cr=!!Pc,kc=Pc=null,n.current=o,dE(o),or(),Oe=T,Ne=_,dn.transition=d}else n.current=o;if(Xl&&(Xl=!1,ei=n,Yl=f),d=n.pendingLanes,d===0&&(Zr=null),al(o.stateNode),Wt(n,He()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)f=r[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Ql)throw Ql=!1,n=Ih,Ih=null,n;return(Yl&1)!==0&&n.tag!==0&&Js(),d=n.pendingLanes,(d&1)!==0?n===Sh?ma++:(ma=0,Sh=n):ma=0,Qr(),null}function Js(){if(ei!==null){var n=On(Yl),r=dn.transition,o=Ne;try{if(dn.transition=null,Ne=16>n?16:n,ei===null)var c=!1;else{if(n=ei,ei=null,Yl=0,(Oe&6)!==0)throw Error(t(331));var f=Oe;for(Oe|=4,ne=n.current;ne!==null;){var d=ne,_=d.child;if((ne.flags&16)!==0){var T=d.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(ne=F;ne!==null;){var W=ne;switch(W.tag){case 0:case 11:case 15:fa(8,W,d)}var G=W.child;if(G!==null)G.return=W,ne=G;else for(;ne!==null;){W=ne;var $=W.sibling,Z=W.return;if(tm(W),W===F){ne=null;break}if($!==null){$.return=Z,ne=$;break}ne=Z}}}var re=d.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var it=ie.sibling;ie.sibling=null,ie=it}while(ie!==null)}}ne=d}}if((d.subtreeFlags&2064)!==0&&_!==null)_.return=d,ne=_;else e:for(;ne!==null;){if(d=ne,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:fa(9,d,d.return)}var L=d.sibling;if(L!==null){L.return=d.return,ne=L;break e}ne=d.return}}var N=n.current;for(ne=N;ne!==null;){_=ne;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,ne=b;else e:for(_=N;ne!==null;){if(T=ne,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Wl(9,T)}}catch(se){tt(T,T.return,se)}if(T===_){ne=null;break e}var K=T.sibling;if(K!==null){K.return=T.return,ne=K;break e}ne=T.return}}if(Oe=f,Qr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Ni,n)}catch{}c=!0}return c}finally{Ne=o,dn.transition=r}}return!1}function ym(n,r,o){r=Ks(o,r),r=Lp(n,r,1),n=Yr(n,r,1),r=zt(),n!==null&&(xi(n,1,r),Wt(n,r))}function tt(n,r,o){if(n.tag===3)ym(n,n,o);else for(;r!==null;){if(r.tag===3){ym(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Zr===null||!Zr.has(c))){n=Ks(o,n),n=Mp(r,n,1),r=Yr(r,n,1),n=zt(),r!==null&&(xi(r,1,n),Wt(r,n));break}}r=r.return}}function vE(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=zt(),n.pingedLanes|=n.suspendedLanes&o,_t===n&&(St&o)===o&&(ft===4||ft===3&&(St&130023424)===St&&500>He()-Th?Ki(n,0):wh|=o),Wt(n,r)}function _m(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ur,Ur<<=1,(Ur&130023424)===0&&(Ur=4194304)));var o=zt();n=yr(n,r),n!==null&&(xi(n,r,o),Wt(n,o))}function EE(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),_m(n,o)}function wE(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),_m(n,o)}var vm;vm=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Bt.current)Ht=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Ht=!1,lE(n,r,o);Ht=(n.flags&131072)!==0}else Ht=!1,Qe&&(r.flags&1048576)!==0&&Jd(r,kl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Hl(n,r),n=r.pendingProps;var f=zs(r,Nt.current);Ws(r,o),f=Zc(null,r,c,n,f,o);var d=eh();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,$t(c)?(d=!0,Rl(r)):d=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Wc(r),f.updater=Bl,r.stateNode=f,f._reactInternals=r,oh(r,c,n,o),r=ch(null,r,c,!0,d,o)):(r.tag=0,Qe&&d&&Mc(r),Ut(null,r,f,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Hl(n,r),n=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=IE(c),n=Tn(c,n),f){case 0:r=uh(null,r,c,n,o);break e;case 1:r=qp(null,r,c,n,o);break e;case 11:r=zp(null,r,c,n,o);break e;case 14:r=jp(null,r,c,Tn(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Tn(c,f),uh(n,r,c,f,o);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Tn(c,f),qp(n,r,c,f,o);case 3:e:{if(Wp(r),n===null)throw Error(t(387));c=r.pendingProps,d=r.memoizedState,f=d.element,ap(n,r),Ll(r,c,null,o);var _=r.memoizedState;if(c=_.element,d.isDehydrated)if(d={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){f=Ks(Error(t(423)),r),r=Gp(n,r,c,o,f);break e}else if(c!==f){f=Ks(Error(t(424)),r),r=Gp(n,r,c,o,f);break e}else for(rn=Wr(r.stateNode.containerInfo.firstChild),nn=r,Qe=!0,wn=null,o=sp(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if($s(),c===f){r=vr(n,r,o);break e}Ut(n,r,c,o)}r=r.child}return r;case 5:return cp(r),n===null&&Uc(r),c=r.type,f=r.pendingProps,d=n!==null?n.memoizedProps:null,_=f.children,Nc(c,f)?_=null:d!==null&&Nc(c,d)&&(r.flags|=32),Hp(n,r),Ut(n,r,_,o),r.child;case 6:return n===null&&Uc(r),null;case 13:return Kp(n,r,o);case 4:return Gc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Hs(r,null,c,o):Ut(n,r,c,o),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Tn(c,f),zp(n,r,c,f,o);case 7:return Ut(n,r,r.pendingProps,o),r.child;case 8:return Ut(n,r,r.pendingProps.children,o),r.child;case 12:return Ut(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,d=r.memoizedProps,_=f.value,Be(Vl,c._currentValue),c._currentValue=_,d!==null)if(En(d.value,_)){if(d.children===f.children&&!Bt.current){r=vr(n,r,o);break e}}else for(d=r.child,d!==null&&(d.return=r);d!==null;){var T=d.dependencies;if(T!==null){_=d.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(d.tag===1){C=_r(-1,o&-o),C.tag=2;var F=d.updateQueue;if(F!==null){F=F.shared;var W=F.pending;W===null?C.next=C:(C.next=W.next,W.next=C),F.pending=C}}d.lanes|=o,C=d.alternate,C!==null&&(C.lanes|=o),Hc(d.return,o,r),T.lanes|=o;break}C=C.next}}else if(d.tag===10)_=d.type===r.type?null:d.child;else if(d.tag===18){if(_=d.return,_===null)throw Error(t(341));_.lanes|=o,T=_.alternate,T!==null&&(T.lanes|=o),Hc(_,o,r),_=d.sibling}else _=d.child;if(_!==null)_.return=d;else for(_=d;_!==null;){if(_===r){_=null;break}if(d=_.sibling,d!==null){d.return=_.return,_=d;break}_=_.return}d=_}Ut(n,r,f.children,o),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Ws(r,o),f=hn(f),c=c(f),r.flags|=1,Ut(n,r,c,o),r.child;case 14:return c=r.type,f=Tn(c,r.pendingProps),f=Tn(c.type,f),jp(n,r,c,f,o);case 15:return Bp(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Tn(c,f),Hl(n,r),r.tag=1,$t(c)?(n=!0,Rl(r)):n=!1,Ws(r,o),Op(r,c,f),oh(r,c,f,o),ch(null,r,c,!0,n,o);case 19:return Xp(n,r,o);case 22:return $p(n,r,o)}throw Error(t(156,r.tag))};function Em(n,r){return Vo(n,r)}function TE(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,o,c){return new TE(n,r,o,c)}function Nh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function IE(n){if(typeof n=="function")return Nh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===gt)return 14}return 2}function ri(n,r){var o=n.alternate;return o===null?(o=pn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function tu(n,r,o,c,f,d){var _=2;if(c=n,typeof n=="function")Nh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case P:return Xi(o.children,f,d,r);case I:_=8,f|=8;break;case R:return n=pn(12,o,r,f|2),n.elementType=R,n.lanes=d,n;case S:return n=pn(13,o,r,f),n.elementType=S,n.lanes=d,n;case je:return n=pn(19,o,r,f),n.elementType=je,n.lanes=d,n;case Ke:return nu(o,f,d,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:_=10;break e;case k:_=9;break e;case x:_=11;break e;case gt:_=14;break e;case Pt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pn(_,o,r,f),r.elementType=n,r.type=c,r.lanes=d,r}function Xi(n,r,o,c){return n=pn(7,n,c,r),n.lanes=o,n}function nu(n,r,o,c){return n=pn(22,n,c,r),n.elementType=Ke,n.lanes=o,n.stateNode={isHidden:!1},n}function Dh(n,r,o){return n=pn(6,n,null,r),n.lanes=o,n}function Vh(n,r,o){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function SE(n,r,o,c,f){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Oh(n,r,o,c,f,d,_,T,C){return n=new SE(n,r,o,T,C),r===1?(r=1,d===!0&&(r|=8)):r=0,d=pn(3,null,null,r),n.current=d,d.stateNode=n,d.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(d),n}function AE(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function wm(n){if(!n)return Kr;n=n._reactInternals;e:{if(_n(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if($t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if($t(o))return Qd(n,o,r)}return r}function Tm(n,r,o,c,f,d,_,T,C){return n=Oh(o,c,!0,n,f,d,_,T,C),n.context=wm(null),o=n.current,c=zt(),f=ti(o),d=_r(c,f),d.callback=r??null,Yr(o,d,f),n.current.lanes=f,xi(n,f,c),Wt(n,c),n}function ru(n,r,o,c){var f=r.current,d=zt(),_=ti(f);return o=wm(o),r.context===null?r.context=o:r.pendingContext=o,r=_r(d,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Yr(f,r,_),n!==null&&(An(n,f,_,d),xl(n,f,_)),_}function iu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function xh(n,r){Im(n,r),(n=n.alternate)&&Im(n,r)}function RE(){return null}var Sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lh(n){this._internalRoot=n}su.prototype.render=Lh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ru(n,r,null,null)},su.prototype.unmount=Lh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Gi(function(){ru(null,n,null,null)}),r[dr]=null}};function su(n){this._internalRoot=n}su.prototype.unstable_scheduleHydration=function(n){if(n){var r=jo();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Jt.length&&r!==0&&r<Jt[o].priority;o++);Jt.splice(o,0,n),o===0&&Ss(n)}};function Mh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function CE(n,r,o,c,f){if(f){if(typeof c=="function"){var d=c;c=function(){var F=iu(_);d.call(F)}}var _=Tm(r,c,n,0,null,!1,!1,"",Am);return n._reactRootContainer=_,n[dr]=_.current,Zo(n.nodeType===8?n.parentNode:n),Gi(),_}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var T=c;c=function(){var F=iu(C);T.call(F)}}var C=Oh(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=C,n[dr]=C.current,Zo(n.nodeType===8?n.parentNode:n),Gi(function(){ru(r,C,o,c)}),C}function au(n,r,o,c,f){var d=o._reactRootContainer;if(d){var _=d;if(typeof f=="function"){var T=f;f=function(){var C=iu(_);T.call(C)}}ru(r,_,n,f)}else _=CE(o,r,n,f,c);return iu(_)}Uo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Le(r.pendingLanes);o!==0&&(Fo(r,o|1),Wt(r,He()),(Oe&6)===0&&(Ys=He()+500,Qr()))}break;case 13:Gi(function(){var c=yr(n,1);if(c!==null){var f=zt();An(c,n,1,f)}}),xh(n,1)}},Ts=function(n){if(n.tag===13){var r=yr(n,134217728);if(r!==null){var o=zt();An(r,n,134217728,o)}xh(n,134217728)}},zo=function(n){if(n.tag===13){var r=ti(n),o=yr(n,r);if(o!==null){var c=zt();An(o,n,r,c)}xh(n,r)}},jo=function(){return Ne},Bo=function(n,r){var o=Ne;try{return Ne=n,r()}finally{Ne=o}},rr=function(n,r,o){switch(r){case"input":if(Si(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var f=Sl(c);if(!f)throw Error(t(90));Io(c),Si(c,f)}}}break;case"textarea":Qa(n,o);break;case"select":r=o.value,r!=null&&gn(n,!!o.multiple,r,!1)}},Ja=Ch,Za=Gi;var PE={usingClientEntryPoint:!1,Events:[na,Fs,Sl,Lr,Mr,Ch]},ga={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kE={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ol(n),n===null?null:n.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||RE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Ni=lu.inject(kE),Xt=lu}catch{}}return Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE,Gt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(r))throw Error(t(200));return AE(n,r,null,o)},Gt.createRoot=function(n,r){if(!Mh(n))throw Error(t(299));var o=!1,c="",f=Sm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Oh(n,1,!1,null,null,o,!1,c,f),n[dr]=r.current,Zo(n.nodeType===8?n.parentNode:n),new Lh(r)},Gt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ol(r),n=n===null?null:n.stateNode,n},Gt.flushSync=function(n){return Gi(n)},Gt.hydrate=function(n,r,o){if(!ou(r))throw Error(t(200));return au(null,n,r,!0,o)},Gt.hydrateRoot=function(n,r,o){if(!Mh(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,d="",_=Sm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),r=Tm(r,null,n,1,o??null,f,!1,d,_),n[dr]=r.current,Zo(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new su(r)},Gt.render=function(n,r,o){if(!ou(r))throw Error(t(200));return au(null,n,r,!1,o)},Gt.unmountComponentAtNode=function(n){if(!ou(n))throw Error(t(40));return n._reactRootContainer?(Gi(function(){au(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Gt.unstable_batchedUpdates=Ch,Gt.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!ou(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return au(n,r,o,!1,c)},Gt.version="18.3.1-next-f1338f8080-20240426",Gt}var Om;function FE(){if(Om)return Uh.exports;Om=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Uh.exports=bE(),Uh.exports}var xm;function UE(){if(xm)return uu;xm=1;var i=FE();return uu.createRoot=i.createRoot,uu.hydrateRoot=i.hydrateRoot,uu}var zE=UE();const KA=oy(zE),jE=()=>{};var Lm={};/**
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
 */const ay=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},BE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=i[t++];e[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=i[t++],h=i[t++],m=i[t++],y=((a&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ly={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const u=i[a],h=a+1<i.length,m=h?i[a+1]:0,y=a+2<i.length,v=y?i[a+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let D=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(D=64)),s.push(t[w],t[A],t[D],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ay(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):BE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const u=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const v=a<i.length?t[i.charAt(a)]:64;++a;const A=a<i.length?t[i.charAt(a)]:64;if(++a,u==null||m==null||v==null||A==null)throw new $E;const D=u<<2|m>>4;if(s.push(D),v!==64){const z=m<<4&240|v>>2;if(s.push(z),A!==64){const Y=v<<6&192|A;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class $E extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HE=function(i){const e=ay(i);return ly.encodeByteArray(e,!0)},Ru=function(i){return HE(i).replace(/\./g,"")},uy=function(i){try{return ly.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WE=()=>qE().__FIREBASE_DEFAULTS__,GE=()=>{if(typeof process>"u"||typeof Lm>"u")return;const i=Lm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},KE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&uy(i[1]);return e&&JSON.parse(e)},Ku=()=>{try{return jE()||WE()||GE()||KE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},cy=i=>{var e,t;return(t=(e=Ku())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},QE=i=>{const e=cy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},hy=()=>{var i;return(i=Ku())==null?void 0:i.config},fy=i=>{var e;return(e=Ku())==null?void 0:e[`_${i}`]};/**
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
 */class XE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function go(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function YE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Ru(JSON.stringify(t)),Ru(JSON.stringify(h)),""].join(".")}const Ta={};function JE(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ta))Ta[e]?i.emulator.push(e):i.prod.push(e);return i}function ZE(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Mm=!1;function py(i,e){if(typeof window>"u"||typeof document>"u"||!go(window.location.host)||Ta[i]===e||Ta[i]||Mm)return;Ta[i]=e;function t(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=JE().prod.length>0;function h(){const D=document.getElementById(s);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function y(D,z){D.setAttribute("width","24"),D.setAttribute("id",z),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function v(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{Mm=!0,h()},D}function w(D,z){D.setAttribute("id",z),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function A(){const D=ZE(s),z=t("text"),Y=document.getElementById(z)||document.createElement("span"),Q=t("learnmore"),H=document.getElementById(Q)||document.createElement("a"),_e=t("preprendIcon"),pe=document.getElementById(_e)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const we=D.element;m(we),w(H,Q);const Pe=v();y(pe,_e),we.append(pe,Y,H,Pe),document.body.appendChild(we)}u?(Y.innerText="Preview backend disconnected.",pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ew(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function tw(){var e;const i=(e=Ku())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sw(){const i=bt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ow(){return!tw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aw(){try{return typeof indexedDB=="object"}catch{return!1}}function lw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var u;e(((u=a.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const uw="FirebaseError";class Cr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=uw,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,u=this.errors[e],h=u?cw(u,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new Cr(a,m,s)}}function cw(i,e){return i.replace(hw,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const hw=/\{\$([^}]+)}/g;function fw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const u=i[a],h=e[a];if(bm(u)&&bm(h)){if(!rs(u,h))return!1}else if(u!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function bm(i){return i!==null&&typeof i=="object"}/**
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
 */function Ua(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dw(i,e){const t=new pw(i,e);return t.subscribe.bind(t)}class pw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");mw(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Bh),a.error===void 0&&(a.error=Bh),a.complete===void 0&&(a.complete=Bh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Bh(){}/**
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
 */function jt(i){return i&&i._delegate?i._delegate:i}class is{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yi="[DEFAULT]";/**
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
 */class gw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new XE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_w(e))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:a});s.resolve(u)}catch{}}}}clearInstance(e=Yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yi){return this.instances.has(e)}getOptions(e=Yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yi){return this.component?this.component.multipleInstances?e:Yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yw(i){return i===Yi?void 0:i}function _w(i){return i.instantiationMode==="EAGER"}/**
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
 */class vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ae||(Ae={}));const Ew={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},ww=Ae.INFO,Tw={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},Iw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=Tw[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cf{constructor(e){this.name=e,this._logLevel=ww,this._logHandler=Iw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ew[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const Sw=(i,e)=>e.some(t=>i instanceof t);let Fm,Um;function Aw(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rw(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const my=new WeakMap,ef=new WeakMap,gy=new WeakMap,$h=new WeakMap,Pf=new WeakMap;function Cw(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(hi(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&my.set(t,i)}).catch(()=>{}),Pf.set(e,i),e}function Pw(i){if(ef.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});ef.set(i,e)}let tf={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ef.get(i);if(e==="objectStoreNames")return i.objectStoreNames||gy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function kw(i){tf=i(tf)}function Nw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Hh(this),e,...t);return gy.set(s,e.sort?e.sort():[e]),hi(s)}:Rw().includes(i)?function(...e){return i.apply(Hh(this),e),hi(my.get(this))}:function(...e){return hi(i.apply(Hh(this),e))}}function Dw(i){return typeof i=="function"?Nw(i):(i instanceof IDBTransaction&&Pw(i),Sw(i,Aw())?new Proxy(i,tf):i)}function hi(i){if(i instanceof IDBRequest)return Cw(i);if($h.has(i))return $h.get(i);const e=Dw(i);return e!==i&&($h.set(i,e),Pf.set(e,i)),e}const Hh=i=>Pf.get(i);function Vw(i,e,{blocked:t,upgrade:s,blocking:a,terminated:u}={}){const h=indexedDB.open(i,e),m=hi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(hi(h.result),y.oldVersion,y.newVersion,hi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),a&&y.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Ow=["get","getKey","getAll","getAllKeys","count"],xw=["put","add","delete","clear"],qh=new Map;function zm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(qh.get(e))return qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=xw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Ow.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,a?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),a&&y.done]))[0]};return qh.set(e,u),u}kw(i=>({...i,get:(e,t,s)=>zm(e,t)||i.get(e,t,s),has:(e,t)=>!!zm(e,t)||i.has(e,t)}));/**
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
 */class Lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Mw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nf="@firebase/app",jm="0.14.3";/**
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
 */const Ir=new Cf("@firebase/app"),bw="@firebase/app-compat",Fw="@firebase/analytics-compat",Uw="@firebase/analytics",zw="@firebase/app-check-compat",jw="@firebase/app-check",Bw="@firebase/auth",$w="@firebase/auth-compat",Hw="@firebase/database",qw="@firebase/data-connect",Ww="@firebase/database-compat",Gw="@firebase/functions",Kw="@firebase/functions-compat",Qw="@firebase/installations",Xw="@firebase/installations-compat",Yw="@firebase/messaging",Jw="@firebase/messaging-compat",Zw="@firebase/performance",e0="@firebase/performance-compat",t0="@firebase/remote-config",n0="@firebase/remote-config-compat",r0="@firebase/storage",i0="@firebase/storage-compat",s0="@firebase/firestore",o0="@firebase/ai",a0="@firebase/firestore-compat",l0="firebase",u0="12.3.0";/**
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
 */const rf="[DEFAULT]",c0={[nf]:"fire-core",[bw]:"fire-core-compat",[Uw]:"fire-analytics",[Fw]:"fire-analytics-compat",[jw]:"fire-app-check",[zw]:"fire-app-check-compat",[Bw]:"fire-auth",[$w]:"fire-auth-compat",[Hw]:"fire-rtdb",[qw]:"fire-data-connect",[Ww]:"fire-rtdb-compat",[Gw]:"fire-fn",[Kw]:"fire-fn-compat",[Qw]:"fire-iid",[Xw]:"fire-iid-compat",[Yw]:"fire-fcm",[Jw]:"fire-fcm-compat",[Zw]:"fire-perf",[e0]:"fire-perf-compat",[t0]:"fire-rc",[n0]:"fire-rc-compat",[r0]:"fire-gcs",[i0]:"fire-gcs-compat",[s0]:"fire-fst",[a0]:"fire-fst-compat",[o0]:"fire-vertex","fire-js":"fire-js",[l0]:"fire-js-all"};/**
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
 */const Cu=new Map,h0=new Map,sf=new Map;function Bm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ao(i){const e=i.name;if(sf.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;sf.set(e,i);for(const t of Cu.values())Bm(t,i);for(const t of h0.values())Bm(t,i);return!0}function kf(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Rn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const f0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new Fa("app","Firebase",f0);/**
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
 */class d0{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
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
 */const yo=u0;function p0(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:rf,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw fi.create("bad-app-name",{appName:String(a)});if(t||(t=hy()),!t)throw fi.create("no-options");const u=Cu.get(a);if(u){if(rs(t,u.options)&&rs(s,u.config))return u;throw fi.create("duplicate-app",{appName:a})}const h=new vw(a);for(const y of sf.values())h.addComponent(y);const m=new d0(t,s,h);return Cu.set(a,m),m}function yy(i=rf){const e=Cu.get(i);if(!e&&i===rf&&hy())return p0();if(!e)throw fi.create("no-app",{appName:i});return e}function di(i,e,t){let s=c0[i]??i;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(h.join(" "));return}ao(new is(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const m0="firebase-heartbeat-database",g0=1,ka="firebase-heartbeat-store";let Wh=null;function _y(){return Wh||(Wh=Vw(m0,g0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ka)}catch(t){console.warn(t)}}}}).catch(i=>{throw fi.create("idb-open",{originalErrorMessage:i.message})})),Wh}async function y0(i){try{const t=(await _y()).transaction(ka),s=await t.objectStore(ka).get(vy(i));return await t.done,s}catch(e){if(e instanceof Cr)Ir.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function $m(i,e){try{const s=(await _y()).transaction(ka,"readwrite");await s.objectStore(ka).put(e,vy(i)),await s.done}catch(t){if(t instanceof Cr)Ir.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function vy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const _0=1024,v0=30;class E0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new T0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Hm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats.length>v0){const h=I0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hm(),{heartbeatsToSend:s,unsentEntries:a}=w0(this._heartbeatsCache.heartbeats),u=Ru(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function Hm(){return new Date().toISOString().substring(0,10)}function w0(i,e=_0){const t=[];let s=i.slice();for(const a of i){const u=t.find(h=>h.agent===a.agent);if(u){if(u.dates.push(a.date),qm(t)>e){u.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),qm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class T0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aw()?lw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await y0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $m(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return $m(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qm(i){return Ru(JSON.stringify({version:2,heartbeats:i})).length}function I0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function S0(i){ao(new is("platform-logger",e=>new Lw(e),"PRIVATE")),ao(new is("heartbeat",e=>new E0(e),"PRIVATE")),di(nf,jm,i),di(nf,jm,"esm2020"),di("fire-js","")}S0("");var A0="firebase",R0="12.3.0";/**
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
 */di(A0,R0,"app");var Wm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pi,Ey;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function R(){}R.prototype=I.prototype,P.F=I.prototype,P.prototype=new R,P.prototype.constructor=P,P.D=function(V,k,x){for(var S=Array(arguments.length-2),je=2;je<arguments.length;je++)S[je-2]=arguments[je];return I.prototype[k].apply(V,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(P,I,R){R||(R=0);const V=Array(16);if(typeof I=="string")for(var k=0;k<16;++k)V[k]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(k=0;k<16;++k)V[k]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=P.g[0],R=P.g[1],k=P.g[2];let x=P.g[3],S;S=I+(x^R&(k^x))+V[0]+3614090360&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(k^I&(R^k))+V[1]+3905402710&4294967295,x=I+(S<<12&4294967295|S>>>20),S=k+(R^x&(I^R))+V[2]+606105819&4294967295,k=x+(S<<17&4294967295|S>>>15),S=R+(I^k&(x^I))+V[3]+3250441966&4294967295,R=k+(S<<22&4294967295|S>>>10),S=I+(x^R&(k^x))+V[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(k^I&(R^k))+V[5]+1200080426&4294967295,x=I+(S<<12&4294967295|S>>>20),S=k+(R^x&(I^R))+V[6]+2821735955&4294967295,k=x+(S<<17&4294967295|S>>>15),S=R+(I^k&(x^I))+V[7]+4249261313&4294967295,R=k+(S<<22&4294967295|S>>>10),S=I+(x^R&(k^x))+V[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(k^I&(R^k))+V[9]+2336552879&4294967295,x=I+(S<<12&4294967295|S>>>20),S=k+(R^x&(I^R))+V[10]+4294925233&4294967295,k=x+(S<<17&4294967295|S>>>15),S=R+(I^k&(x^I))+V[11]+2304563134&4294967295,R=k+(S<<22&4294967295|S>>>10),S=I+(x^R&(k^x))+V[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(k^I&(R^k))+V[13]+4254626195&4294967295,x=I+(S<<12&4294967295|S>>>20),S=k+(R^x&(I^R))+V[14]+2792965006&4294967295,k=x+(S<<17&4294967295|S>>>15),S=R+(I^k&(x^I))+V[15]+1236535329&4294967295,R=k+(S<<22&4294967295|S>>>10),S=I+(k^x&(R^k))+V[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^k&(I^R))+V[6]+3225465664&4294967295,x=I+(S<<9&4294967295|S>>>23),S=k+(I^R&(x^I))+V[11]+643717713&4294967295,k=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(k^x))+V[0]+3921069994&4294967295,R=k+(S<<20&4294967295|S>>>12),S=I+(k^x&(R^k))+V[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^k&(I^R))+V[10]+38016083&4294967295,x=I+(S<<9&4294967295|S>>>23),S=k+(I^R&(x^I))+V[15]+3634488961&4294967295,k=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(k^x))+V[4]+3889429448&4294967295,R=k+(S<<20&4294967295|S>>>12),S=I+(k^x&(R^k))+V[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^k&(I^R))+V[14]+3275163606&4294967295,x=I+(S<<9&4294967295|S>>>23),S=k+(I^R&(x^I))+V[3]+4107603335&4294967295,k=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(k^x))+V[8]+1163531501&4294967295,R=k+(S<<20&4294967295|S>>>12),S=I+(k^x&(R^k))+V[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^k&(I^R))+V[2]+4243563512&4294967295,x=I+(S<<9&4294967295|S>>>23),S=k+(I^R&(x^I))+V[7]+1735328473&4294967295,k=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(k^x))+V[12]+2368359562&4294967295,R=k+(S<<20&4294967295|S>>>12),S=I+(R^k^x)+V[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^k)+V[8]+2272392833&4294967295,x=I+(S<<11&4294967295|S>>>21),S=k+(x^I^R)+V[11]+1839030562&4294967295,k=x+(S<<16&4294967295|S>>>16),S=R+(k^x^I)+V[14]+4259657740&4294967295,R=k+(S<<23&4294967295|S>>>9),S=I+(R^k^x)+V[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^k)+V[4]+1272893353&4294967295,x=I+(S<<11&4294967295|S>>>21),S=k+(x^I^R)+V[7]+4139469664&4294967295,k=x+(S<<16&4294967295|S>>>16),S=R+(k^x^I)+V[10]+3200236656&4294967295,R=k+(S<<23&4294967295|S>>>9),S=I+(R^k^x)+V[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^k)+V[0]+3936430074&4294967295,x=I+(S<<11&4294967295|S>>>21),S=k+(x^I^R)+V[3]+3572445317&4294967295,k=x+(S<<16&4294967295|S>>>16),S=R+(k^x^I)+V[6]+76029189&4294967295,R=k+(S<<23&4294967295|S>>>9),S=I+(R^k^x)+V[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^k)+V[12]+3873151461&4294967295,x=I+(S<<11&4294967295|S>>>21),S=k+(x^I^R)+V[15]+530742520&4294967295,k=x+(S<<16&4294967295|S>>>16),S=R+(k^x^I)+V[2]+3299628645&4294967295,R=k+(S<<23&4294967295|S>>>9),S=I+(k^(R|~x))+V[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~k))+V[7]+1126891415&4294967295,x=I+(S<<10&4294967295|S>>>22),S=k+(I^(x|~R))+V[14]+2878612391&4294967295,k=x+(S<<15&4294967295|S>>>17),S=R+(x^(k|~I))+V[5]+4237533241&4294967295,R=k+(S<<21&4294967295|S>>>11),S=I+(k^(R|~x))+V[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~k))+V[3]+2399980690&4294967295,x=I+(S<<10&4294967295|S>>>22),S=k+(I^(x|~R))+V[10]+4293915773&4294967295,k=x+(S<<15&4294967295|S>>>17),S=R+(x^(k|~I))+V[1]+2240044497&4294967295,R=k+(S<<21&4294967295|S>>>11),S=I+(k^(R|~x))+V[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~k))+V[15]+4264355552&4294967295,x=I+(S<<10&4294967295|S>>>22),S=k+(I^(x|~R))+V[6]+2734768916&4294967295,k=x+(S<<15&4294967295|S>>>17),S=R+(x^(k|~I))+V[13]+1309151649&4294967295,R=k+(S<<21&4294967295|S>>>11),S=I+(k^(R|~x))+V[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~k))+V[11]+3174756917&4294967295,x=I+(S<<10&4294967295|S>>>22),S=k+(I^(x|~R))+V[2]+718787259&4294967295,k=x+(S<<15&4294967295|S>>>17),S=R+(x^(k|~I))+V[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,P.g[2]=P.g[2]+k&4294967295,P.g[3]=P.g[3]+x&4294967295}s.prototype.v=function(P,I){I===void 0&&(I=P.length);const R=I-this.blockSize,V=this.C;let k=this.h,x=0;for(;x<I;){if(k==0)for(;x<=R;)a(this,P,x),x+=this.blockSize;if(typeof P=="string"){for(;x<I;)if(V[k++]=P.charCodeAt(x++),k==this.blockSize){a(this,V),k=0;break}}else for(;x<I;)if(V[k++]=P[x++],k==this.blockSize){a(this,V),k=0;break}}this.h=k,this.o+=I},s.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;I=this.o*8;for(var R=P.length-8;R<P.length;++R)P[R]=I&255,I/=256;for(this.v(P),P=Array(16),I=0,R=0;R<4;++R)for(let V=0;V<32;V+=8)P[I++]=this.g[R]>>>V&255;return P};function u(P,I){var R=m;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=I(P)}function h(P,I){this.h=I;const R=[];let V=!0;for(let k=P.length-1;k>=0;k--){const x=P[k]|0;V&&x==I||(R[k]=x,V=!1)}this.g=R}var m={};function y(P){return-128<=P&&P<128?u(P,function(I){return new h([I|0],I<0?-1:0)}):new h([P|0],P<0?-1:0)}function v(P){if(isNaN(P)||!isFinite(P))return A;if(P<0)return H(v(-P));const I=[];let R=1;for(let V=0;P>=R;V++)I[V]=P/R|0,R*=4294967296;return new h(I,0)}function w(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return H(w(P.substring(1),I));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=v(Math.pow(I,8));let V=A;for(let x=0;x<P.length;x+=8){var k=Math.min(8,P.length-x);const S=parseInt(P.substring(x,x+k),I);k<8?(k=v(Math.pow(I,k)),V=V.j(k).add(v(S))):(V=V.j(R),V=V.add(v(S)))}return V}var A=y(0),D=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Q(this))return-H(this).m();let P=0,I=1;for(let R=0;R<this.g.length;R++){const V=this.i(R);P+=(V>=0?V:4294967296+V)*I,I*=4294967296}return P},i.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(Y(this))return"0";if(Q(this))return"-"+H(this).toString(P);const I=v(Math.pow(P,6));var R=this;let V="";for(;;){const k=Pe(R,I).g;R=_e(R,k.j(I));let x=((R.g.length>0?R.g[0]:R.h)>>>0).toString(P);if(R=k,Y(R))return x+V;for(;x.length<6;)x="0"+x;V=x+V}},i.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function Y(P){if(P.h!=0)return!1;for(let I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function Q(P){return P.h==-1}i.l=function(P){return P=_e(this,P),Q(P)?-1:Y(P)?0:1};function H(P){const I=P.g.length,R=[];for(let V=0;V<I;V++)R[V]=~P.g[V];return new h(R,~P.h).add(D)}i.abs=function(){return Q(this)?H(this):this},i.add=function(P){const I=Math.max(this.g.length,P.g.length),R=[];let V=0;for(let k=0;k<=I;k++){let x=V+(this.i(k)&65535)+(P.i(k)&65535),S=(x>>>16)+(this.i(k)>>>16)+(P.i(k)>>>16);V=S>>>16,x&=65535,S&=65535,R[k]=S<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function _e(P,I){return P.add(H(I))}i.j=function(P){if(Y(this)||Y(P))return A;if(Q(this))return Q(P)?H(this).j(H(P)):H(H(this).j(P));if(Q(P))return H(this.j(H(P)));if(this.l(z)<0&&P.l(z)<0)return v(this.m()*P.m());const I=this.g.length+P.g.length,R=[];for(var V=0;V<2*I;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(let k=0;k<P.g.length;k++){const x=this.i(V)>>>16,S=this.i(V)&65535,je=P.i(k)>>>16,gt=P.i(k)&65535;R[2*V+2*k]+=S*gt,pe(R,2*V+2*k),R[2*V+2*k+1]+=x*gt,pe(R,2*V+2*k+1),R[2*V+2*k+1]+=S*je,pe(R,2*V+2*k+1),R[2*V+2*k+2]+=x*je,pe(R,2*V+2*k+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function pe(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function we(P,I){this.g=P,this.h=I}function Pe(P,I){if(Y(I))throw Error("division by zero");if(Y(P))return new we(A,A);if(Q(P))return I=Pe(H(P),I),new we(H(I.g),H(I.h));if(Q(I))return I=Pe(P,H(I)),new we(H(I.g),I.h);if(P.g.length>30){if(Q(P)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var R=D,V=I;V.l(P)<=0;)R=$e(R),V=$e(V);var k=ke(R,1),x=ke(V,1);for(V=ke(V,2),R=ke(R,2);!Y(V);){var S=x.add(V);S.l(P)<=0&&(k=k.add(R),x=S),V=ke(V,1),R=ke(R,1)}return I=_e(P,k.j(I)),new we(k,I)}for(k=A;P.l(I)>=0;){for(R=Math.max(1,Math.floor(P.m()/I.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),x=v(R),S=x.j(I);Q(S)||S.l(P)>0;)R-=V,x=v(R),S=x.j(I);Y(x)&&(x=D),k=k.add(x),P=_e(P,S)}return new we(k,P)}i.B=function(P){return Pe(this,P).h},i.and=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let V=0;V<I;V++)R[V]=this.i(V)&P.i(V);return new h(R,this.h&P.h)},i.or=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let V=0;V<I;V++)R[V]=this.i(V)|P.i(V);return new h(R,this.h|P.h)},i.xor=function(P){const I=Math.max(this.g.length,P.g.length),R=[];for(let V=0;V<I;V++)R[V]=this.i(V)^P.i(V);return new h(R,this.h^P.h)};function $e(P){const I=P.g.length+1,R=[];for(let V=0;V<I;V++)R[V]=P.i(V)<<1|P.i(V-1)>>>31;return new h(R,P.h)}function ke(P,I){const R=I>>5;I%=32;const V=P.g.length-R,k=[];for(let x=0;x<V;x++)k[x]=I>0?P.i(x+R)>>>I|P.i(x+R+1)<<32-I:P.i(x+R);return new h(k,P.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ey=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,pi=h}).apply(typeof Wm<"u"?Wm:typeof self<"u"?self:typeof window<"u"?window:{});var cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wy,_a,Ty,gu,of,Iy,Sy,Ay;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof cu=="object"&&cu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}a("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function A(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,M,U){for(var X=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)X[ge-2]=arguments[ge];return p.prototype[M].apply(E,X)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function Y(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const U=M.length||0;l.length=g+U;for(let X=0;X<U;X++)l[g+X]=M[X]}else l.push(M)}}class Q{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function H(l){h.setTimeout(()=>{throw l},0)}function _e(){var l=P;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class pe{constructor(){this.h=this.g=null}add(p,g){const E=we.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var we=new Q(()=>new Pe,l=>l.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,ke=!1,P=new pe,I=()=>{const l=Promise.resolve(void 0);$e=()=>{l.then(R)}};function R(){for(var l;l=_e();){try{l.h.call(l.g)}catch(g){H(g)}var p=we;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}ke=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var x=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function je(l,p){k.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}A(je,k),je.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var gt="closure_listenable_"+(Math.random()*1e6|0),Pt=0;function Ke(l,p,g,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++Pt,this.da=this.fa=!1}function J(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ae(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function te(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function O(l){const p={};for(const g in l)p[g]=l[g];return p}const B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ve(l,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let U=0;U<B.length;U++)g=B[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function Ee(l){this.src=l,this.g={},this.h=0}Ee.prototype.add=function(l,p,g,E,M){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const X=Se(l,p,E,M);return X>-1?(p=l[X],g||(p.fa=!1)):(p=new Ke(p,this.src,U,!!E,M),p.fa=g,l.push(p)),p};function Ie(l,p){const g=p.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,p,void 0),U;(U=M>=0)&&Array.prototype.splice.call(E,M,1),U&&(J(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Se(l,p,g,E){for(let M=0;M<l.length;++M){const U=l[M];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==E)return M}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),Ve={};function Ue(l,p,g,E,M){if(Array.isArray(p)){for(let U=0;U<p.length;U++)Ue(l,p[U],g,E,M);return null}return g=So(g),l&&l[gt]?l.J(p,g,m(E)?!!E.capture:!1,M):Ft(l,p,g,!1,E,M)}function Ft(l,p,g,E,M,U){if(!p)throw Error("Invalid event type");const X=m(M)?!!M.capture:!!M;let ge=ds(l);if(ge||(l[Me]=ge=new Ee(l)),g=ge.add(p,g,E,X,U),g.proxy)return g;if(E=hs(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)x||(M=X),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(fs(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function hs(){function l(g){return p.call(l.src,l.listener,g)}const p=Ka;return l}function Io(l,p,g,E,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)Io(l,p[U],g,E,M);else E=m(E)?!!E.capture:!!E,g=So(g),l&&l[gt]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=Se(p,g,E,M),g>-1&&(J(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=ds(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Se(p,g,E,M)),(g=l>-1?p[l]:null)&&kr(g))}function kr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[gt])Ie(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(fs(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=ds(p))?(Ie(g,l),g.h==0&&(g.src=null,p[Me]=null)):J(l)}}}function fs(l){return l in Ve?Ve[l]:Ve[l]="on"+l}function Ka(l,p){if(l.da)l=!0;else{p=new je(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&kr(l),l=g.call(E,p)}return l}function ds(l){return l=l[Me],l instanceof Ee?l:null}var Si="__closure_events_fn_"+(Math.random()*1e9>>>0);function So(l){return typeof l=="function"?l:(l[Si]||(l[Si]=function(p){return l.handleEvent(p)}),l[Si])}function ot(){V.call(this),this.i=new Ee(this),this.M=this,this.G=null}A(ot,V),ot.prototype[gt]=!0,ot.prototype.removeEventListener=function(l,p,g,E){Io(this,l,p,g,E)};function nt(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new k(p,l);else if(p instanceof k)p.target=p.target||l;else{var M=p;p=new k(E,l),ve(p,M)}M=!0;let U,X;if(g)for(X=g.length-1;X>=0;X--)U=p.g=g[X],M=gn(U,E,!0,p)&&M;if(U=p.g=l,M=gn(U,E,!0,p)&&M,M=gn(U,E,!1,p)&&M,g)for(X=0;X<g.length;X++)U=p.g=g[X],M=gn(U,E,!1,p)&&M}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)J(g[E]);delete l.g[p],l.h--}}this.G=null},ot.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},ot.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function gn(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let U=0;U<p.length;++U){const X=p[U];if(X&&!X.da&&X.capture==g){const ge=X.listener,rt=X.ha||X.src;X.fa&&Ie(l.i,X),M=ge.call(rt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Ao(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Ro(l){l.g=Ao(()=>{l.g=null,l.i&&(l.i=!1,Ro(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class Qa extends V{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Ro(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nr(l){V.call(this),this.h=l,this.g={}}A(Nr,V);var Co=[];function ps(l){ae(l.g,function(p,g){this.g.hasOwnProperty(g)&&kr(p)},l),l.g={}}Nr.prototype.N=function(){Nr.Z.N.call(this),ps(this)},Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dr=h.JSON.stringify,Xa=h.JSON.parse,Ai=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Vr(){}function Ya(){}var Or={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ms(){k.call(this,"d")}A(ms,k);function Po(){k.call(this,"c")}A(Po,k);var yn={},gs=null;function xr(){return gs=gs||new ot}yn.Ia="serverreachability";function ys(l){k.call(this,yn.Ia,l)}A(ys,k);function rr(l){const p=xr();nt(p,new ys(p))}yn.STAT_EVENT="statevent";function ir(l,p){k.call(this,yn.STAT_EVENT,l),this.stat=p}A(ir,k);function et(l){const p=xr();nt(p,new ir(p,l))}yn.Ja="timingevent";function ko(l,p){k.call(this,yn.Ja,l),this.size=p}A(ko,k);function Lr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Mr(){this.g=!0}Mr.prototype.ua=function(){this.g=!1};function Ja(l,p,g,E,M,U){l.info(function(){if(l.g)if(U){var X="",ge=U.split("&");for(let Fe=0;Fe<ge.length;Fe++){var rt=ge[Fe].split("=");if(rt.length>1){const at=rt[0];rt=rt[1];const tn=at.split("_");X=tn.length>=2&&tn[1]=="type"?X+(at+"="+rt+"&"):X+(at+"=redacted&")}}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+X})}function Za(l,p,g,E,M,U,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+U+" "+X})}function kn(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ri(l,g)+(E?" "+E:"")})}function el(l,p){l.info(function(){return"TIMEOUT: "+p})}Mr.prototype.info=function(){};function Ri(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return Dr(U)}catch{return p}}var br={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Fr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tl;function sr(){}A(sr,Vr),sr.prototype.g=function(){return new XMLHttpRequest},tl=new sr;function Nn(l){return encodeURIComponent(String(l))}function _s(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function an(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Nr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var rl={},No={};function _n(l,p,g){l.M=1,l.A=ar(ln(p)),l.u=g,l.R=!0,Do(l,null)}function Do(l,p){l.F=Date.now(),Ci(l),l.B=ln(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),jo(g.i,"t",E),l.C=0,g=l.j.L,l.h=new nl,l.g=dl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new Qa(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Co[0]=M.toString()),M=Co);for(let U=0;U<M.length;U++){const X=Ue(g,M[U],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),rr(),Ja(l.i,l.v,l.B,l.l,l.S,l.u)}an.prototype.ba=function(l){l=l.target;const p=this.O;p&&bn(l)==3?p.j():this.Y(l)},an.prototype.Y=function(l){try{if(l==this.g)e:{const ge=bn(this.g),rt=this.g.ya(),Fe=this.g.ca();if(!(ge<3)&&(ge!=3||this.g&&(this.h.h||this.g.la()||hl(this.g)))){this.K||ge!=4||rt==7||(rt==8||Fe<=0?rr(3):rr(2)),vs(this);var p=this.g.ca();this.X=p;var g=il(this);if(this.o=p==200,Za(this.i,this.v,this.B,this.l,this.S,ge,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E)){var U=E;break t}}U=null}if(l=U)kn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,He(this,l);else{this.o=!1,this.m=3,et(12),or(this),Pi(this);break e}}if(this.R){l=!0;let at;for(;!this.K&&this.C<g.length;)if(at=ol(this,g),at==No){ge==4&&(this.m=4,et(14),l=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(at==rl){this.m=4,et(15),kn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else kn(this.i,this.l,at,null),He(this,at);if(sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||g.length!=0||this.h.h||(this.m=1,et(16),l=!1),this.o=this.o&&l,!l)kn(this.i,this.l,g,"[Invalid Chunked Response]"),or(this),Pi(this);else if(g.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),bi(X),X.P=!0,et(11))}}else kn(this.i,this.l,g,null),He(this,g);ge==4&&or(this),this.o&&!this.K&&(ge==4?ks(this.j,this):(this.o=!1,Ci(this)))}else $o(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),or(this),Pi(this)}}}catch{}finally{}};function il(l){if(!sl(l))return l.g.la();const p=hl(l.g);if(p==="")return"";let g="";const E=p.length,M=bn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return or(l),Pi(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<E;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(M&&U==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function sl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function ol(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?No:(g=Number(p.substring(g,E)),isNaN(g)?rl:(E+=1,E+g>p.length?No:(p=p.slice(E,E+g),l.C=E+g,p)))}an.prototype.cancel=function(){this.K=!0,or(this)};function Ci(l){l.T=Date.now()+l.H,Vo(l,l.H)}function Vo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Lr(v(l.aa,l),p)}function vs(l){l.D&&(h.clearTimeout(l.D),l.D=null)}an.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(el(this.i,this.B),this.M!=2&&(rr(),et(17)),or(this),this.m=2,Pi(this)):Vo(this,this.T-l)};function Pi(l){l.j.I==0||l.K||ks(l.j,l)}function or(l){vs(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ps(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function He(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||xo(g.h,l))){if(!l.L&&xo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Ps(g),Zt(g);else break e;zn(g),et(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Lr(v(g.Va,g),6e3));ki(g.h)<=1&&g.ta&&(g.ta=void 0)}else en(g,11)}else if((l.L||g.g==l)&&Ps(g),!S(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Fe=M[p];const at=Fe[0];if(!(at<=g.K))if(g.K=at,Fe=Fe[1],g.I==2)if(Fe[0]=="c"){g.M=Fe[1],g.ba=Fe[2];const tn=Fe[3];tn!=null&&(g.ka=tn,g.j.info("VER="+g.ka));const fr=Fe[4];fr!=null&&(g.za=fr,g.j.info("SVER="+g.za));const jn=Fe[5];jn!=null&&typeof jn=="number"&&jn>0&&(E=1.5*jn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Bn=l.g;if(Bn){const Vs=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vs){var U=E.h;U.g||Vs.indexOf("spdy")==-1&&Vs.indexOf("quic")==-1&&Vs.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ws(U,U.h),U.h=null))}if(E.G){const Wo=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Wo&&(E.wa=Wo,Le(E.J,E.G,Wo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var X=l;if(E.na=qo(E,E.L?E.ba:null,E.W),X.L){Ni(E.h,X);var ge=X,rt=E.O;rt&&(ge.H=rt),ge.D&&(vs(ge),Ci(ge)),E.g=X}else kt(E);g.i.length>0&&hr(g)}else Fe[0]!="stop"&&Fe[0]!="close"||en(g,7);else g.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?en(g,7):Rs(g):Fe[0]!="noop"&&g.l&&g.l.qa(Fe),g.A=0)}}rr(4)}catch{}}var pc=class{constructor(l,p){this.g=l,this.map=p}};function Es(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Oo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ki(l){return l.h?1:l.g?l.g.size:0}function xo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function ws(l,p){l.g?l.g.add(p):l.h=p}function Ni(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Es.prototype.cancel=function(){if(this.i=Xt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let M,U=null;E>=0?(M=l[g].substring(0,E),U=l[g].substring(E+1)):M=l[g],p(M,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Dn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Dn?(this.l=l.l,Di(this,l.j),this.o=l.o,this.g=l.g,Vn(this,l.u),this.h=l.h,Ur(this,Bo(l.i)),this.m=l.m):l&&(p=String(l).match(al))?(this.l=!1,Di(this,p[1]||"",!0),this.o=Vi(p[2]||""),this.g=Vi(p[3]||"",!0),Vn(this,p[4]),this.h=Vi(p[5]||"",!0),Ur(this,p[6]||"",!0),this.m=Vi(p[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}Dn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Oi(p,Mo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Oi(p,Mo,!0),"@"),l.push(Nn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Oi(g,g.charAt(0)=="/"?xi:bo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Oi(g,Fo)),l.join("")},Dn.prototype.resolve=function(l){const p=ln(this);let g=!!l.j;g?Di(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)Vn(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const U=[];for(let X=0;X<M.length;){const ge=M[X++];ge=="."?E&&X==M.length&&U.push(""):ge==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),E&&X==M.length&&U.push("")):(U.push(ge),E=!0)}E=U.join("/")}else E=M}return g?p.h=E:g=l.i.toString()!=="",g?Ur(p,Bo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function ln(l){return new Dn(l)}function Di(l,p,g){l.j=g?Vi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Vn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Ur(l,p,g){p instanceof Ne?(l.i=p,Is(l.i,l.l)):(g||(p=Oi(p,mc)),l.i=new Ne(p,l.l))}function Le(l,p,g){l.i.set(p,g)}function ar(l){return Le(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Vi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Oi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Lo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Lo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Mo=/[#\/\?@]/g,bo=/[#\?:]/g,xi=/[#\?]/g,mc=/[#\?@]/g,Fo=/#/g;function Ne(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function On(l){l.g||(l.g=new Map,l.h=0,l.i&&Yt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=Ne.prototype,i.add=function(l,p){On(this),this.i=null,l=xn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Uo(l,p){On(l),p=xn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ts(l,p){return On(l),p=xn(l,p),l.g.has(p)}i.forEach=function(l,p){On(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(p,M,E,this)},this)},this)};function zo(l,p){On(l);let g=[];if(typeof p=="string")Ts(l,p)&&(g=g.concat(l.g.get(xn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return On(this),this.i=null,l=xn(this,l),Ts(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=zo(this,l),l.length>0?String(l[0]):p):p};function jo(l,p,g){Uo(l,p),g.length>0&&(l.i=null,l.g.set(xn(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const M=Nn(g);g=zo(this,g);for(let U=0;U<g.length;U++){let X=M;g[U]!==""&&(X+="="+Nn(g[U])),l.push(X)}}return this.i=l.join("&")};function Bo(l){const p=new Ne;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function xn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Is(l,p){p&&!l.j&&(On(l),l.i=null,l.g.forEach(function(g,E){const M=E.toLowerCase();E!=M&&(Uo(this,E),jo(this,M,g))},l)),l.j=p}function Ln(l,p){const g=new Mr;if(h.Image){const E=new Image;E.onload=w(wt,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(wt,g,"TestLoadImage: error",!1,p,E),E.onabort=w(wt,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(wt,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function Mn(l,p){const g=new Mr,E=new AbortController,M=setTimeout(()=>{E.abort(),wt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(M),U.ok?wt(g,"TestPingServer: ok",!0,p):wt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),wt(g,"TestPingServer: error",!1,p)})}function wt(l,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function Li(){this.g=new Ai}function lr(l){this.i=l.Sb||null,this.h=l.ab||!1}A(lr,Vr),lr.prototype.g=function(){return new Jt(this.i,this.h)};function Jt(l,p){ot.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(Jt,ot),i=Jt.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,vn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ll(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function ll(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?zr(this):vn(this),this.readyState==3&&ll(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,zr(this))},i.Na=function(l){this.g&&(this.response=l,zr(this))},i.ga=function(){this.g&&zr(this)};function zr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,vn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function vn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ul(l){let p="";return ae(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function Ss(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ul(g),typeof l=="string"?g!=null&&Nn(g):Le(l,p,g))}function ze(l){ot.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(ze,ot);var cl=/^https?$/i,gc=["POST","PUT"];i=ze.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tl.g(),this.g.onreadystatechange=D(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){jr(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(gc,p,void 0)>=0)||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of g)this.g.setRequestHeader(U,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){jr(this,U)}};function jr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Br(l),cr(l)}function Br(l){l.A||(l.A=!0,nt(l,"complete"),nt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,nt(this,"complete"),nt(this,"abort"),cr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cr(this,!0)),ze.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?ur(this):this.Xa())},i.Xa=function(){ur(this)};function ur(l){if(l.h&&typeof u<"u"){if(l.v&&bn(l)==4)setTimeout(l.Ca.bind(l),0);else if(nt(l,"readystatechange"),bn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=U===0){let X=String(l.D).match(al)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!cl.test(X?X.toLowerCase():"")}g=E}if(g)nt(l,"complete"),nt(l,"success");else{l.o=6;try{var M=bn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Br(l)}}finally{cr(l)}}}}function cr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||nt(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function bn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return bn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Xa(p)}};function hl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function $o(l){const p={};l=(l.g&&bn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(S(l[E]))continue;var g=_s(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[M]||[];p[M]=U,U.push(g)}te(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function As(l){this.za=0,this.i=[],this.j=new Mr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fn("baseRetryDelayMs",5e3,l),this.Za=Fn("retryDelaySeedMs",1e4,l),this.Ta=Fn("forwardChannelMaxRetries",2,l),this.va=Fn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Es(l&&l.concurrentRequestLimit),this.Ba=new Li,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=As.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){et(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=qo(this,null,this.W),hr(this)};function Rs(l){if(Cs(l),l.I==3){var p=l.V++,g=ln(l.J);if(Le(g,"SID",l.M),Le(g,"RID",p),Le(g,"TYPE","terminate"),Un(l,g),p=new an(l,l.j,p),p.M=2,p.A=ar(ln(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=dl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Ci(p)}Fi(l)}function Zt(l){l.g&&(bi(l),l.g.cancel(),l.g=null)}function Cs(l){Zt(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ps(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function hr(l){if(!Oo(l.h)&&!l.m){l.m=!0;var p=l.Ea;$e||I(),ke||($e(),ke=!0),P.add(p,l),l.D=0}}function fl(l,p){return ki(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Lr(v(l.Ea,l,p),Ns(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new an(this,this.j,l);let U=this.o;if(this.U&&(U?(U=O(U),ve(U,this.U)):U=this.U),this.u!==null||this.R||(M.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Ho(this,M,p),g=ln(this.J),Le(g,"RID",l),Le(g,"CVER",22),this.G&&Le(g,"X-HTTP-Session-Id",this.G),Un(this,g),U&&(this.R?p="headers="+Nn(ul(U))+"&"+p:this.u&&Ss(g,this.u,U)),ws(this.h,M),this.Ra&&Le(g,"TYPE","init"),this.S?(Le(g,"$req",p),Le(g,"SID","null"),M.U=!0,_n(M,g,null)):_n(M,g,p),this.I=2}}else this.I==3&&(l?Mi(this,l):this.i.length==0||Oo(this.h)||Mi(this))};function Mi(l,p){var g;p?g=p.l:g=l.V++;const E=ln(l.J);Le(E,"SID",l.M),Le(E,"RID",g),Le(E,"AID",l.K),Un(l,E),l.u&&l.o&&Ss(E,l.u,l.o),g=new an(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Ho(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),ws(l.h,g),_n(g,E,p)}function Un(l,p){l.H&&ae(l.H,function(g,E){Le(p,E,g)}),l.l&&ae({},function(g,E){Le(p,E,g)})}function Ho(l,p,g){g=Math.min(l.i.length,g);const E=l.l?v(l.l.Ka,l.l,l):null;e:{var M=l.i;let ge=-1;for(;;){const rt=["count="+g];ge==-1?g>0?(ge=M[0].g,rt.push("ofs="+ge)):ge=0:rt.push("ofs="+ge);let Fe=!0;for(let at=0;at<g;at++){var U=M[at].g;const tn=M[at].map;if(U-=ge,U<0)ge=Math.max(0,M[at].g-100),Fe=!1;else try{U="req"+U+"_"||"";try{var X=tn instanceof Map?tn:Object.entries(tn);for(const[fr,jn]of X){let Bn=jn;m(jn)&&(Bn=Dr(jn)),rt.push(U+fr+"="+encodeURIComponent(Bn))}}catch(fr){throw rt.push(U+"type="+encodeURIComponent("_badmap")),fr}}catch{E&&E(tn)}}if(Fe){X=rt.join("&");break e}}X=void 0}return l=l.i.splice(0,g),p.G=l,X}function kt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;$e||I(),ke||($e(),ke=!0),P.add(p,l),l.A=0}}function zn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Lr(v(l.Da,l),Ns(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,$r(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Lr(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),Zt(this),$r(this))};function bi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function $r(l){l.g=new an(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=ln(l.na);Le(p,"RID","rpc"),Le(p,"SID",l.M),Le(p,"AID",l.K),Le(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Le(p,"TO",l.ia),Le(p,"TYPE","xmlhttp"),Un(l,p),l.u&&l.o&&Ss(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=ar(ln(p)),g.u=null,g.R=!0,Do(g,l)}i.Va=function(){this.C!=null&&(this.C=null,Zt(this),zn(this),et(19))};function Ps(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function ks(l,p){var g=null;if(l.g==p){Ps(l),bi(l),l.g=null;var E=2}else if(xo(l.h,p))g=p.G,Ni(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=xr(),nt(E,new ko(E,g)),hr(l)}else kt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&fl(l,p)||E==2&&zn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:en(l,5);break;case 4:en(l,10);break;case 3:en(l,6);break;default:en(l,2)}}}function Ns(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function en(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),E=l.Ua;const M=!E;E=new Dn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Di(E,"https"),ar(E),M?Ln(E.toString(),g):Mn(E.toString(),g)}else et(2);l.I=0,l.l&&l.l.pa(p),Fi(l),Cs(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Fi(l){if(l.I=0,l.ja=[],l.l){const p=Xt(l.h);(p.length!=0||l.i.length!=0)&&(Y(l.ja,p),Y(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function qo(l,p,g){var E=g instanceof Dn?ln(g):new Dn(g);if(E.g!="")p&&(E.g=p+"."+E.g),Vn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const U=new Dn(null);E&&Di(U,E),p&&(U.g=p),M&&Vn(U,M),g&&(U.h=g),E=U}return g=l.G,p=l.wa,g&&p&&Le(E,g,p),Le(E,"VER",l.ka),Un(l,E),E}function dl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new ze(new lr({ab:g})):new ze(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function pl(){}i=pl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ds(){}Ds.prototype.g=function(l,p){return new Tt(l,p)};function Tt(l,p){ot.call(this),this.g=new As(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Hr(this)}A(Tt,ot),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Rs(this.g)},Tt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Dr(l),l=g);p.i.push(new pc(p.Ya++,l)),p.I==3&&hr(p)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Rs(this.g),delete this.g,Tt.Z.N.call(this)};function ml(l){ms.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}A(ml,ms);function gl(){Po.call(this),this.status=1}A(gl,Po);function Hr(l){this.g=l}A(Hr,pl),Hr.prototype.ra=function(){nt(this.g,"a")},Hr.prototype.qa=function(l){nt(this.g,new ml(l))},Hr.prototype.pa=function(l){nt(this.g,new gl)},Hr.prototype.oa=function(){nt(this.g,"b")},Ds.prototype.createWebChannel=Ds.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Ay=function(){return new Ds},Sy=function(){return xr()},Iy=yn,of={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},br.NO_ERROR=0,br.TIMEOUT=8,br.HTTP_ERROR=6,gu=br,Fr.COMPLETE="complete",Ty=Fr,Ya.EventType=Or,Or.OPEN="a",Or.CLOSE="b",Or.ERROR="c",Or.MESSAGE="d",ot.prototype.listen=ot.prototype.J,_a=Ya,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,wy=ze}).apply(typeof cu<"u"?cu:typeof self<"u"?self:typeof window<"u"?window:{});const Gm="@firebase/firestore",Km="4.9.2";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let _o="12.3.0";/**
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
 */const ss=new Cf("@firebase/firestore");function Zs(){return ss.logLevel}function ee(i,...e){if(ss.logLevel<=Ae.DEBUG){const t=e.map(Nf);ss.debug(`Firestore (${_o}): ${i}`,...t)}}function Sr(i,...e){if(ss.logLevel<=Ae.ERROR){const t=e.map(Nf);ss.error(`Firestore (${_o}): ${i}`,...t)}}function lo(i,...e){if(ss.logLevel<=Ae.WARN){const t=e.map(Nf);ss.warn(`Firestore (${_o}): ${i}`,...t)}}function Nf(i){if(typeof i=="string")return i;try{/**
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
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function he(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Ry(i,s,t)}function Ry(i,e,t){let s=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Sr(s),new Error(s)}function be(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||Ry(e,a,s)}function ye(i,e){return i}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Cy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lt.UNAUTHENTICATED)))}shutdown(){}}class P0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class k0{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0,42304);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new mi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new mi,e.enqueueRetryable((()=>a(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await a(this.currentUser)}))},m=y=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new mi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new Cy(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new Lt(e)}}class N0{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class D0{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new N0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){be(this.o===void 0,3512);const s=u=>{u.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ee("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const a=u=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>a(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?a(u):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qm(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function O0(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=O0(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<t&&(s+=e.charAt(a[u]%62))}return s}}function Re(i,e){return i<e?-1:i>e?1:0}function af(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const a=i.charAt(s),u=e.charAt(s);if(a!==u)return Gh(a)===Gh(u)?Re(a,u):Gh(a)?1:-1}return Re(i.length,e.length)}const x0=55296,L0=57343;function Gh(i){const e=i.charCodeAt(0);return e>=x0&&e<=L0}function uo(i,e,t){return i.length===e.length&&i.every(((s,a)=>t(s,e[a])))}/**
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
 */const Xm="__name__";class Gn{constructor(e,t,s){t===void 0?t=0:t>e.length&&he(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&he(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const u=Gn.compareSegments(e.get(a),t.get(a));if(u!==0)return u}return Re(e.length,t.length)}static compareSegments(e,t){const s=Gn.isNumericId(e),a=Gn.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Gn.extractNumericId(e).compare(Gn.extractNumericId(t)):af(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pi.fromString(e.substring(4,e.length-2))}}class Je extends Gn{construct(e,t,s){return new Je(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new Je(t)}static emptyPath(){return new Je([])}}const M0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Gn{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return M0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xm}static keyField(){return new Rt([Xm])}static fromServerFormat(e){const t=[];let s="",a=0;const u=()=>{if(s.length===0)throw new oe(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new oe(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new oe(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(u(),a++)}if(u(),h)throw new oe(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Je.fromString(e))}static fromName(e){return new ce(Je.fromString(e).popFirst(5))}static empty(){return new ce(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Je(e.slice()))}}/**
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
 */function b0(i,e,t){if(!t)throw new oe(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function F0(i,e,t,s){if(e===!0&&s===!0)throw new oe(q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ym(i){if(!ce.isDocumentKey(i))throw new oe(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Py(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Vf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":he(12329,{type:typeof i})}function os(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new oe(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vf(i);throw new oe(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function ct(i,e){const t={typeString:i};return e&&(t.value=e),t}function za(i,e){if(!Py(i))throw new oe(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(a&&typeof h!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new oe(q.INVALID_ARGUMENT,t);return!0}/**
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
 */const Jm=-62135596800,Zm=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Zm);return new Ge(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jm)throw new oe(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zm}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(za(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:ct("string",Ge._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
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
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new Ge(0,0))}static max(){return new me(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Na=-1;function U0(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=me.fromTimestamp(s===1e9?new Ge(t+1,0):new Ge(t,s));return new gi(a,ce.empty(),e)}function z0(i){return new gi(i.readTime,i.key,Na)}class gi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new gi(me.min(),ce.empty(),Na)}static max(){return new gi(me.max(),ce.empty(),Na)}}function j0(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(i.documentKey,e.documentKey),t!==0?t:Re(i.largestBatchId,e.largestBatchId))}/**
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
 */const B0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function vo(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==B0)throw i;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j(((s,a)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,a)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):j.reject(t)}static resolve(e){return new j(((t,s)=>{t(e)}))}static reject(e){return new j(((t,s)=>{s(e)}))}static waitFor(e){return new j(((t,s)=>{let a=0,u=0,h=!1;e.forEach((m=>{++a,m.next((()=>{++u,h&&u===a&&t()}),(y=>s(y)))})),h=!0,u===a&&t()}))}static or(e){let t=j.resolve(!1);for(const s of e)t=t.next((a=>a?j.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,u)=>{s.push(t.call(this,a,u))})),this.waitFor(s)}static mapArray(e,t){return new j(((s,a)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((w=>{h[v]=w,++m,m===u&&s(h)}),(w=>a(w)))}}))}static doWhile(e,t){return new j(((s,a)=>{const u=()=>{e()===!0?t().next((()=>{u()}),a):s()};u()}))}}function H0(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Eo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Qu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qu.ce=-1;/**
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
 */const Of=-1;function Xu(i){return i==null}function Pu(i){return i===0&&1/i==-1/0}function q0(i){return typeof i=="number"&&Number.isInteger(i)&&!Pu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const ky="";function W0(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=eg(e)),e=G0(i.get(t),e);return eg(e)}function G0(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const u=i.charAt(a);switch(u){case"\0":t+="";break;case ky:t+="";break;default:t+=u}}return t}function eg(i){return i+ky+""}/**
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
 */function tg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ti(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Ny(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hu(this.root,e,this.comparator,!0)}}class hu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&a&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,a,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=a??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,u){return new At(e??this.key,t??this.value,s??this.color,a??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const u=s(e,a.key);return a=u<0?a.copy(null,null,null,a.left.insert(e,t,s),null):u===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return At.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,t,s,a,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(this.comparator(a,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class on{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new on([])}unionWith(e){let t=new mt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new on(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class Dy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Dy("Invalid base64 string: "+u):u}})(e);return new Ct(t)}static fromUint8Array(e){const t=(function(a){let u="";for(let h=0;h<a.length;++h)u+=String.fromCharCode(a[h]);return u})(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const K0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(i){if(be(!!i,39018),typeof i=="string"){let e=0;const t=K0.exec(i);if(be(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(i.seconds),nanos:st(i.nanos)}}function st(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function _i(i){return typeof i=="string"?Ct.fromBase64String(i):Ct.fromUint8Array(i)}/**
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
 */const Vy="server_timestamp",Oy="__type__",xy="__previous_value__",Ly="__local_write_time__";function xf(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[Oy])==null?void 0:s.stringValue)===Vy}function Yu(i){const e=i.mapValue.fields[xy];return xf(e)?Yu(e):e}function Da(i){const e=yi(i.mapValue.fields[Ly].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class Q0{constructor(e,t,s,a,u,h,m,y,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w}}const ku="(default)";class Va{constructor(e,t){this.projectId=e,this.database=t||ku}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database===ku}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const My="__type__",X0="__max__",fu={mapValue:{}},by="__vector__",Nu="value";function vi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?xf(i)?4:J0(i)?9007199254740991:Y0(i)?10:11:he(28295,{value:i})}function er(i,e){if(i===e)return!0;const t=vi(i);if(t!==vi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Da(i).isEqual(Da(e));case 3:return(function(a,u){if(typeof a.timestampValue=="string"&&typeof u.timestampValue=="string"&&a.timestampValue.length===u.timestampValue.length)return a.timestampValue===u.timestampValue;const h=yi(a.timestampValue),m=yi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,u){return _i(a.bytesValue).isEqual(_i(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,u){return st(a.geoPointValue.latitude)===st(u.geoPointValue.latitude)&&st(a.geoPointValue.longitude)===st(u.geoPointValue.longitude)})(i,e);case 2:return(function(a,u){if("integerValue"in a&&"integerValue"in u)return st(a.integerValue)===st(u.integerValue);if("doubleValue"in a&&"doubleValue"in u){const h=st(a.doubleValue),m=st(u.doubleValue);return h===m?Pu(h)===Pu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return uo(i.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return(function(a,u){const h=a.mapValue.fields||{},m=u.mapValue.fields||{};if(tg(h)!==tg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!er(h[y],m[y])))return!1;return!0})(i,e);default:return he(52216,{left:i})}}function Oa(i,e){return(i.values||[]).find((t=>er(t,e)))!==void 0}function co(i,e){if(i===e)return 0;const t=vi(i),s=vi(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=st(u.integerValue||u.doubleValue),y=st(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return rg(i.timestampValue,e.timestampValue);case 4:return rg(Da(i),Da(e));case 5:return af(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=_i(u),y=_i(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Re(m[v],y[v]);if(w!==0)return w}return Re(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Re(st(u.latitude),st(h.latitude));return m!==0?m:Re(st(u.longitude),st(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return ig(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var D,z,Y,Q;const m=u.fields||{},y=h.fields||{},v=(D=m[Nu])==null?void 0:D.arrayValue,w=(z=y[Nu])==null?void 0:z.arrayValue,A=Re(((Y=v==null?void 0:v.values)==null?void 0:Y.length)||0,((Q=w==null?void 0:w.values)==null?void 0:Q.length)||0);return A!==0?A:ig(v,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===fu.mapValue&&h===fu.mapValue)return 0;if(u===fu.mapValue)return 1;if(h===fu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let A=0;A<y.length&&A<w.length;++A){const D=af(y[A],w[A]);if(D!==0)return D;const z=co(m[y[A]],v[w[A]]);if(z!==0)return z}return Re(y.length,w.length)})(i.mapValue,e.mapValue);default:throw he(23264,{he:t})}}function rg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Re(i,e);const t=yi(i),s=yi(e),a=Re(t.seconds,s.seconds);return a!==0?a:Re(t.nanos,s.nanos)}function ig(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const u=co(t[a],s[a]);if(u)return u}return Re(t.length,s.length)}function ho(i){return lf(i)}function lf(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=yi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return _i(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ce.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",a=!0;for(const u of t.values||[])a?a=!1:s+=",",s+=lf(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",u=!0;for(const h of s)u?u=!1:a+=",",a+=`${h}:${lf(t.fields[h])}`;return a+"}"})(i.mapValue):he(61005,{value:i})}function yu(i){switch(vi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yu(i);return e?16+yu(e):16;case 5:return 2*i.stringValue.length;case 6:return _i(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,u)=>a+yu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let a=0;return Ti(s.fields,((u,h)=>{a+=u.length+yu(h)})),a})(i.mapValue);default:throw he(13486,{value:i})}}function uf(i){return!!i&&"integerValue"in i}function Lf(i){return!!i&&"arrayValue"in i}function sg(i){return!!i&&"nullValue"in i}function og(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function _u(i){return!!i&&"mapValue"in i}function Y0(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[My])==null?void 0:s.stringValue)===by}function Ia(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ti(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ia(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ia(i.arrayValue.values[t]);return e}return{...i}}function J0(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===X0}/**
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
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!_u(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(t)}setAll(e){let t=Rt.emptyPath(),s={},a=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}h?s[m.lastSegment()]=Ia(h):a.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,a)}delete(e){const t=this.field(e.popLast());_u(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];_u(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Ti(t,((a,u)=>e[a]=u));for(const a of s)delete e[a]}clone(){return new Qt(Ia(this.value))}}function Fy(i){const e=[];return Ti(i.fields,((t,s)=>{const a=new Rt([t]);if(_u(s)){const u=Fy(s.mapValue).fields;if(u.length===0)e.push(a);else for(const h of u)e.push(a.child(h))}else e.push(a)})),new on(e)}/**
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
 */class Mt{constructor(e,t,s,a,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,me.min(),me.min(),me.min(),Qt.empty(),0)}static newFoundDocument(e,t,s,a){return new Mt(e,1,t,me.min(),s,a,0)}static newNoDocument(e,t){return new Mt(e,2,t,me.min(),me.min(),Qt.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,me.min(),me.min(),Qt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Du{constructor(e,t){this.position=e,this.inclusive=t}}function ag(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const u=e[a],h=i.position[a];if(u.field.isKeyField()?s=ce.comparator(ce.fromName(h.referenceValue),t.key):s=co(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function lg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!er(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vu{constructor(e,t="asc"){this.field=e,this.dir=t}}function Z0(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Uy{}class dt extends Uy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new tT(e,t,s):t==="array-contains"?new iT(e,s):t==="in"?new sT(e,s):t==="not-in"?new oT(e,s):t==="array-contains-any"?new aT(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new nT(e,s):new rT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(co(t,this.value)):t!==null&&vi(this.value)===vi(t)&&this.matchesComparison(co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends Uy{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new tr(e,t)}matches(e){return zy(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zy(i){return i.op==="and"}function jy(i){return eT(i)&&zy(i)}function eT(i){for(const e of i.filters)if(e instanceof tr)return!1;return!0}function cf(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+ho(i.value);if(jy(i))return i.filters.map((e=>cf(e))).join(",");{const e=i.filters.map((t=>cf(t))).join(",");return`${i.op}(${e})`}}function By(i,e){return i instanceof dt?(function(s,a){return a instanceof dt&&s.op===a.op&&s.field.isEqual(a.field)&&er(s.value,a.value)})(i,e):i instanceof tr?(function(s,a){return a instanceof tr&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((u,h,m)=>u&&By(h,a.filters[m])),!0):!1})(i,e):void he(19439)}function $y(i){return i instanceof dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${ho(t.value)}`})(i):i instanceof tr?(function(t){return t.op.toString()+" {"+t.getFilters().map($y).join(" ,")+"}"})(i):"Filter"}class tT extends dt{constructor(e,t,s){super(e,t,s),this.key=ce.fromName(s.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class nT extends dt{constructor(e,t){super(e,"in",t),this.keys=Hy("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class rT extends dt{constructor(e,t){super(e,"not-in",t),this.keys=Hy("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Hy(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ce.fromName(s.referenceValue)))}class iT extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lf(t)&&Oa(t.arrayValue,this.value)}}class sT extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oa(this.value.arrayValue,t)}}class oT extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Oa(this.value.arrayValue,t)}}class aT extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Oa(this.value.arrayValue,s)))}}/**
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
 */class lT{constructor(e,t=null,s=[],a=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function ug(i,e=null,t=[],s=[],a=null,u=null,h=null){return new lT(i,e,t,s,a,u,h)}function Mf(i){const e=ye(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>cf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Xu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>ho(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>ho(s))).join(",")),e.Te=t}return e.Te}function bf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Z0(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!By(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!lg(i.startAt,e.startAt)&&lg(i.endAt,e.endAt)}function hf(i){return ce.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Ju{constructor(e,t=null,s=[],a=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function uT(i,e,t,s,a,u,h,m){return new Ju(i,e,t,s,a,u,h,m)}function Ff(i){return new Ju(i)}function cg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function cT(i){return i.collectionGroup!==null}function Sa(i){const e=ye(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new mt(Rt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Vu(u,s))})),t.has(Rt.keyField().canonicalString())||e.Ie.push(new Vu(Rt.keyField(),s))}return e.Ie}function Kn(i){const e=ye(i);return e.Ee||(e.Ee=hT(e,Sa(i))),e.Ee}function hT(i,e){if(i.limitType==="F")return ug(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const u=a.dir==="desc"?"asc":"desc";return new Vu(a.field,u)}));const t=i.endAt?new Du(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Du(i.startAt.position,i.startAt.inclusive):null;return ug(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ff(i,e,t){return new Ju(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Zu(i,e){return bf(Kn(i),Kn(e))&&i.limitType===e.limitType}function qy(i){return`${Mf(Kn(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>$y(a))).join(", ")}]`),Xu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>ho(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>ho(a))).join(",")),`Target(${s})`})(Kn(i))}; limitType=${i.limitType})`}function ec(i,e){return e.isFoundDocument()&&(function(s,a){const u=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ce.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,a){for(const u of Sa(s))if(!u.field.isKeyField()&&a.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,a){for(const u of s.filters)if(!u.matches(a))return!1;return!0})(i,e)&&(function(s,a){return!(s.startAt&&!(function(h,m,y){const v=ag(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,Sa(s),a)||s.endAt&&!(function(h,m,y){const v=ag(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,Sa(s),a))})(i,e)}function fT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Wy(i){return(e,t)=>{let s=!1;for(const a of Sa(i)){const u=dT(a,e,t);if(u!==0)return u;s=s||a.field.isKeyField()}return 0}}function dT(i,e,t){const s=i.field.isKeyField()?ce.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?co(y,v):he(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return he(19790,{direction:i.dir})}}/**
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
 */class us{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,u]of s)if(this.equalsFn(a,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return void(a[u]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ti(this.inner,((t,s)=>{for(const[a,u]of s)e(a,u)}))}isEmpty(){return Ny(this.inner)}size(){return this.innerSize}}/**
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
 */const pT=new Ze(ce.comparator);function Ar(){return pT}const Gy=new Ze(ce.comparator);function va(...i){let e=Gy;for(const t of i)e=e.insert(t.key,t);return e}function Ky(i){let e=Gy;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ji(){return Aa()}function Qy(){return Aa()}function Aa(){return new us((i=>i.toString()),((i,e)=>i.isEqual(e)))}const mT=new Ze(ce.comparator),gT=new mt(ce.comparator);function Ce(...i){let e=gT;for(const t of i)e=e.add(t);return e}const yT=new mt(Re);function _T(){return yT}/**
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
 */function Uf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function Xy(i){return{integerValue:""+i}}function vT(i,e){return q0(e)?Xy(e):Uf(i,e)}/**
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
 */class tc{constructor(){this._=void 0}}function ET(i,e,t){return i instanceof Ou?(function(a,u){const h={fields:{[Oy]:{stringValue:Vy},[Ly]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return u&&xf(u)&&(u=Yu(u)),u&&(h.fields[xy]=u),{mapValue:h}})(t,e):i instanceof xa?Jy(i,e):i instanceof La?Zy(i,e):(function(a,u){const h=Yy(a,u),m=hg(h)+hg(a.Ae);return uf(h)&&uf(a.Ae)?Xy(m):Uf(a.serializer,m)})(i,e)}function wT(i,e,t){return i instanceof xa?Jy(i,e):i instanceof La?Zy(i,e):t}function Yy(i,e){return i instanceof xu?(function(s){return uf(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ou extends tc{}class xa extends tc{constructor(e){super(),this.elements=e}}function Jy(i,e){const t=e_(e);for(const s of i.elements)t.some((a=>er(a,s)))||t.push(s);return{arrayValue:{values:t}}}class La extends tc{constructor(e){super(),this.elements=e}}function Zy(i,e){let t=e_(e);for(const s of i.elements)t=t.filter((a=>!er(a,s)));return{arrayValue:{values:t}}}class xu extends tc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function hg(i){return st(i.integerValue||i.doubleValue)}function e_(i){return Lf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function TT(i,e){return i.field.isEqual(e.field)&&(function(s,a){return s instanceof xa&&a instanceof xa||s instanceof La&&a instanceof La?uo(s.elements,a.elements,er):s instanceof xu&&a instanceof xu?er(s.Ae,a.Ae):s instanceof Ou&&a instanceof Ou})(i.transform,e.transform)}class IT{constructor(e,t){this.version=e,this.transformResults=t}}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class nc{}function t_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new r_(i.key,Qn.none()):new ja(i.key,i.data,Qn.none());{const t=i.data,s=Qt.empty();let a=new mt(Rt.comparator);for(let u of e.fields)if(!a.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),a=a.add(u)}return new Ii(i.key,s,new on(a.toArray()),Qn.none())}}function ST(i,e,t){i instanceof ja?(function(a,u,h){const m=a.value.clone(),y=dg(a.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Ii?(function(a,u,h){if(!vu(a.precondition,u))return void u.convertToUnknownDocument(h.version);const m=dg(a.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(n_(a)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(a,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ra(i,e,t,s){return i instanceof ja?(function(u,h,m,y){if(!vu(u.precondition,h))return m;const v=u.value.clone(),w=pg(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof Ii?(function(u,h,m,y){if(!vu(u.precondition,h))return m;const v=pg(u.fieldTransforms,y,h),w=h.data;return w.setAll(n_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return vu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function AT(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),u=Yy(s.transform,a||null);u!=null&&(t===null&&(t=Qt.empty()),t.set(s.field,u))}return t||null}function fg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&uo(s,a,((u,h)=>TT(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ja extends nc{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ii extends nc{constructor(e,t,s,a,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function n_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function dg(i,e,t){const s=new Map;be(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let a=0;a<t.length;a++){const u=i[a],h=u.transform,m=e.data.field(u.field);s.set(u.field,wT(h,m,t[a]))}return s}function pg(i,e,t){const s=new Map;for(const a of i){const u=a.transform,h=t.data.field(a.field);s.set(a.field,ET(u,h,e))}return s}class r_ extends nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RT extends nc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CT{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const u=this.mutations[a];u.key.isEqual(e.key)&&ST(u,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Qy();return this.mutations.forEach((a=>{const u=e.get(a.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(a.key)?null:m;const y=t_(h,m);y!==null&&s.set(a.key,y),h.isValidDocument()||h.convertToNoDocument(me.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,((t,s)=>fg(t,s)))&&uo(this.baseMutations,e.baseMutations,((t,s)=>fg(t,s)))}}class zf{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){be(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return mT})();const u=e.mutations;for(let h=0;h<u.length;h++)a=a.insert(u[h].key,s[h].version);return new zf(e,t,s,a)}}/**
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
 */class PT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ut,De;function NT(i){switch(i){case q.OK:return he(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return he(15467,{code:i})}}function i_(i){if(i===void 0)return Sr("GRPC error has no .code"),q.UNKNOWN;switch(i){case ut.OK:return q.OK;case ut.CANCELLED:return q.CANCELLED;case ut.UNKNOWN:return q.UNKNOWN;case ut.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ut.INTERNAL:return q.INTERNAL;case ut.UNAVAILABLE:return q.UNAVAILABLE;case ut.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ut.NOT_FOUND:return q.NOT_FOUND;case ut.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ut.ABORTED:return q.ABORTED;case ut.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ut.DATA_LOSS:return q.DATA_LOSS;default:return he(39323,{code:i})}}(De=ut||(ut={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function DT(){return new TextEncoder}/**
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
 */const VT=new pi([4294967295,4294967295],0);function mg(i){const e=DT().encode(i),t=new Ey;return t.update(e),new Uint8Array(t.digest())}function gg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new pi([t,s],0),new pi([a,u],0)]}class jf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ea(`Invalid padding: ${t}`);if(s<0)throw new Ea(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ea(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ea(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=pi.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(pi.fromNumber(s)));return a.compare(VT)===1&&(a=new pi([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=mg(e),[s,a]=gg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,a,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new jf(u,a,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=mg(e),[s,a]=gg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,a,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rc{constructor(e,t,s,a,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Ba.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new rc(me.min(),a,new Ze(Re),Ar(),Ce())}}class Ba{constructor(e,t,s,a,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ba(s,t,Ce(),Ce(),Ce())}}/**
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
 */class Eu{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class s_{constructor(e,t){this.targetId=e,this.Ce=t}}class o_{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class yg{constructor(){this.ve=0,this.Fe=_g(),this.Me=Ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ce(),t=Ce(),s=Ce();return this.Fe.forEach(((a,u)=>{switch(u){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:he(38017,{changeType:u})}})),new Ba(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=_g()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class OT{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ar(),this.Je=du(),this.He=du(),this.Ye=new Ze(Re)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const u=a.target;if(hf(u))if(s===0){const h=new ce(u.path);this.et(t,h,Mt.newNoDocument(h,me.min()))}else be(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:u=0}=t;let h,m;try{h=_i(s).toUint8Array()}catch(y){if(y instanceof Dy)return lo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new jf(h,a,u)}catch(y){return lo(y instanceof Ea?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&hf(m.target)){const y=new ce(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Mt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Ce();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const a=new rc(e,t,this.Ye,this.je,s);return this.je=Ar(),this.Je=du(),this.He=du(),this.Ye=new Ze(Re),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new yg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new mt(Re),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new mt(Re),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ee("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new yg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function du(){return new Ze(ce.comparator)}function _g(){return new Ze(ce.comparator)}const xT={asc:"ASCENDING",desc:"DESCENDING"},LT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MT={and:"AND",or:"OR"};class bT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function df(i,e){return i.useProto3Json||Xu(e)?e:{value:e}}function Lu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function a_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function FT(i,e){return Lu(i,e.toTimestamp())}function Xn(i){return be(!!i,49232),me.fromTimestamp((function(t){const s=yi(t);return new Ge(s.seconds,s.nanos)})(i))}function Bf(i,e){return pf(i,e).canonicalString()}function pf(i,e){const t=(function(a){return new Je(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function l_(i){const e=Je.fromString(i);return be(d_(e),10190,{key:e.toString()}),e}function mf(i,e){return Bf(i.databaseId,e.path)}function Kh(i,e){const t=l_(e);if(t.get(1)!==i.databaseId.projectId)throw new oe(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new oe(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ce(c_(t))}function u_(i,e){return Bf(i.databaseId,e)}function UT(i){const e=l_(i);return e.length===4?Je.emptyPath():c_(e)}function gf(i){return new Je(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function c_(i){return be(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function vg(i,e,t){return{name:mf(i,e),fields:t.value.mapValue.fields}}function zT(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:he(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],u=(function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string",58123),Ct.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Ct.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?q.UNKNOWN:i_(v.code);return new oe(w,v.message||"")})(h);t=new o_(s,a,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Kh(i,s.document.name),u=Xn(s.document.updateTime),h=s.document.createTime?Xn(s.document.createTime):me.min(),m=new Qt({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(a,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Eu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Kh(i,s.document),u=s.readTime?Xn(s.readTime):me.min(),h=Mt.newNoDocument(a,u),m=s.removedTargetIds||[];t=new Eu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Kh(i,s.document),u=s.removedTargetIds||[];t=new Eu([],u,a,null)}else{if(!("filter"in e))return he(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:u}=s,h=new kT(a,u),m=s.targetId;t=new s_(m,h)}}return t}function jT(i,e){let t;if(e instanceof ja)t={update:vg(i,e.key,e.value)};else if(e instanceof r_)t={delete:mf(i,e.key)};else if(e instanceof Ii)t={update:vg(i,e.key,e.data),updateMask:XT(e.fieldMask)};else{if(!(e instanceof RT))return he(16599,{Vt:e.type});t={verify:mf(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ou)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof La)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof xu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw he(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,u){return u.updateTime!==void 0?{updateTime:FT(a,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:he(27497)})(i,e.precondition)),t}function BT(i,e){return i&&i.length>0?(be(e!==void 0,14353),i.map((t=>(function(a,u){let h=a.updateTime?Xn(a.updateTime):Xn(u);return h.isEqual(me.min())&&(h=Xn(u)),new IT(h,a.transformResults||[])})(t,e)))):[]}function $T(i,e){return{documents:[u_(i,e.path)]}}function HT(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=u_(i,a);const u=(function(v){if(v.length!==0)return f_(tr.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((w=>(function(D){return{field:to(D.field),direction:GT(D.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=df(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:a}}function qT(i){let e=UT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){be(s===1,65062);const w=t.from[0];w.allDescendants?a=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(A){const D=h_(A);return D instanceof tr&&jy(D)?D.getFilters():[D]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((D=>(function(Y){return new Vu(no(Y.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(D)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let D;return D=typeof A=="object"?A.value:A,Xu(D)?null:D})(t.limit));let y=null;t.startAt&&(y=(function(A){const D=!!A.before,z=A.values||[];return new Du(z,D)})(t.startAt));let v=null;return t.endAt&&(v=(function(A){const D=!A.before,z=A.values||[];return new Du(z,D)})(t.endAt)),uT(e,a,h,u,m,"F",y,v)}function WT(i,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function h_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=no(t.unaryFilter.field);return dt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(i):i.fieldFilter!==void 0?(function(t){return dt.create(no(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return tr.create(t.compositeFilter.filters.map((s=>h_(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(t.compositeFilter.op))})(i):he(30097,{filter:i})}function GT(i){return xT[i]}function KT(i){return LT[i]}function QT(i){return MT[i]}function to(i){return{fieldPath:i.canonicalString()}}function no(i){return Rt.fromServerFormat(i.fieldPath)}function f_(i){return i instanceof dt?(function(t){if(t.op==="=="){if(og(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(sg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(og(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(sg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:KT(t.op),value:t.value}}})(i):i instanceof tr?(function(t){const s=t.getFilters().map((a=>f_(a)));return s.length===1?s[0]:{compositeFilter:{op:QT(t.op),filters:s}}})(i):he(54877,{filter:i})}function XT(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function d_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ci{constructor(e,t,s,a,u=me.min(),h=me.min(),m=Ct.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class YT{constructor(e){this.yt=e}}function JT(i){const e=qT({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ff(e,e.limit,"L"):e}/**
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
 */class ZT{constructor(){this.Cn=new e1}addToCollectionParentIndex(e,t){return this.Cn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(gi.min())}updateCollectionGroup(e,t,s){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class e1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new mt(Je.comparator),u=!a.has(s);return this.index[t]=a.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new mt(Je.comparator)).toArray()}}/**
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
 */const Eg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},p_=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(p_,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class fo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new fo(0)}static cr(){return new fo(-1)}}/**
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
 */const wg="LruGarbageCollector",t1=1048576;function Tg([i,e],[t,s]){const a=Re(i,t);return a===0?Re(e,s):a}class n1{constructor(e){this.Ir=e,this.buffer=new mt(Tg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Tg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class r1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(wg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Eo(t)?ee(wg,"Ignoring IndexedDB error during garbage collection: ",t):await vo(t)}await this.Vr(3e5)}))}}class i1{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return j.resolve(Qu.ce);const s=new n1(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Eg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Eg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),a=this.params.maximumSequenceNumbersToCollect):a=A,h=Date.now(),this.nthSequenceNumber(e,a)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(v=Date.now(),Zs()<=Ae.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:u,documentsRemoved:A}))))}}function s1(i,e){return new i1(i,e)}/**
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
 */class o1{constructor(){this.changes=new us((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?j.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class a1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class l1{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Ra(s.mutation,a,on.empty(),Ge.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ce()){const a=Ji();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((u=>{let h=va();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Ji();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ce())))}populateOverlays(e,t,s){const a=[];return s.forEach((u=>{t.has(u)||a.push(u)})),this.documentOverlayCache.getOverlays(e,a).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,a){let u=Ar();const h=Aa(),m=(function(){return Aa()})();return t.forEach(((y,v)=>{const w=s.get(v.key);a.has(v.key)&&(w===void 0||w.mutation instanceof Ii)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ra(w.mutation,v,w.mutation.getFieldMask(),Ge.now())):h.set(v.key,on.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>m.set(v,new a1(w,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Aa();let a=new Ze(((h,m)=>h-m)),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||on.empty();w=m.applyToLocalView(v,w),s.set(y,w);const A=(a.get(m.batchId)||Ce()).add(y);a=a.insert(m.batchId,A)}))})).next((()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,A=Qy();w.forEach((D=>{if(!u.has(D)){const z=t_(t.get(D),s.get(D));z!==null&&A.set(D,z),u=u.add(D)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return j.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(h){return ce.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((u=>{const h=a-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-u.size):j.resolve(Ji());let m=Na,y=u;return h.next((v=>j.forEach(v,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?j.resolve():this.remoteDocumentCache.getEntry(e,w).next((D=>{y=y.insert(w,D)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,Ce()))).next((w=>({batchId:m,changes:Ky(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next((s=>{let a=va();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const u=t.collectionGroup;let h=va();return this.indexManager.getCollectionParents(e,u).next((m=>j.forEach(m,(y=>{const v=(function(A,D){return new Ju(D,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,a).next((w=>{w.forEach(((A,D)=>{h=h.insert(A,D)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,a)))).next((h=>{u.forEach(((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))}));let m=va();return h.forEach(((y,v)=>{const w=u.get(y);w!==void 0&&Ra(w.mutation,v,on.empty(),Ge.now()),ec(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class u1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return j.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Xn(a.createTime)}})(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:JT(a.bundledQuery),readTime:Xn(a.readTime)}})(t)),j.resolve()}}/**
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
 */class c1{constructor(){this.overlays=new Ze(ce.comparator),this.qr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ji();return j.forEach(t,(a=>this.getOverlay(e,a).next((u=>{u!==null&&s.set(a,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,u)=>{this.St(e,t,u)})),j.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),j.resolve()}getOverlaysForCollection(e,t,s){const a=Ji(),u=t.length+1,h=new ce(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&a.set(y.getKey(),y)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let u=new Ze(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Ji(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Ji(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=a)););return j.resolve(m)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new PT(t,s));let u=this.qr.get(t);u===void 0&&(u=Ce(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class h1{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
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
 */class $f{constructor(){this.Qr=new mt(Et.$r),this.Ur=new mt(Et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Et(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ce(new Je([])),s=new Et(t,e),a=new Et(t,e+1),u=[];return this.Ur.forEachInRange([s,a],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ce(new Je([])),s=new Et(t,e),a=new Et(t,e+1);let u=Ce();return this.Ur.forEachInRange([s,a],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Et(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ce.comparator(e.key,t.key)||Re(e.Yr,t.Yr)}static Kr(e,t){return Re(e.Yr,t.Yr)||ce.comparator(e.key,t.key)}}/**
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
 */class f1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new mt(Et.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new CT(u,t,s,a);this.mutationQueue.push(h);for(const m of a)this.Zr=this.Zr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return j.resolve(h)}lookupMutationBatch(e,t){return j.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),u=a<0?0:a;return j.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Of:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),a=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,a],(h=>{const m=this.Xr(h.Yr);u.push(m)})),j.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(Re);return t.forEach((a=>{const u=new Et(a,0),h=new Et(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),j.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let u=s;ce.isDocumentKey(u)||(u=u.child(""));const h=new Et(new ce(u),0);let m=new mt(Re);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===a&&(m=m.add(y.Yr)),!0)}),h),j.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){be(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return j.forEach(t.mutations,(a=>{const u=new Et(a.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Et(t,0),a=this.Zr.firstAfterOrEqual(s);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class d1{constructor(e){this.ri=e,this.docs=(function(){return new Ze(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),u=a?a.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return j.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach((a=>{const u=this.docs.get(a);s=s.insert(a,u?u.document.mutableCopy():Mt.newInvalidDocument(a))})),j.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let u=Ar();const h=t.path,m=new ce(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||j0(z0(w),s)<=0||(a.has(w.key)||ec(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return j.resolve(u)}getAllFromCollectionGroup(e,t,s,a){he(9500)}ii(e,t){return j.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new p1(this)}getSize(e){return j.resolve(this.size)}}class p1 extends o1{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),j.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class m1{constructor(e){this.persistence=e,this.si=new us((t=>Mf(t)),bf),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.oi=0,this._i=new $f,this.targetCount=0,this.ai=fo.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),j.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new fo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Pr(t),j.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,s){let a=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)})),j.waitFor(u).next((()=>a))}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return j.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),j.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,u=[];return a&&t.forEach((h=>{u.push(a.markPotentiallyOrphaned(e,h))})),j.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return j.resolve(s)}containsKey(e,t){return j.resolve(this._i.containsKey(t))}}/**
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
 */class m_{constructor(e,t){this.ui={},this.overlays={},this.ci=new Qu(0),this.li=!1,this.li=!0,this.hi=new h1,this.referenceDelegate=e(this),this.Pi=new m1(this),this.indexManager=new ZT,this.remoteDocumentCache=(function(a){return new d1(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new YT(t),this.Ii=new u1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new c1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new f1(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ee("MemoryPersistence","Starting transaction:",e);const a=new g1(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((u=>this.referenceDelegate.di(a).next((()=>u)))).toPromise().then((u=>(a.raiseOnCommittedEvent(),u)))}Ai(e,t){return j.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class g1 extends $0{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Ri=new $f,this.Vi=null}static mi(e){return new Hf(e)}get fi(){if(this.Vi)return this.Vi;throw he(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),j.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),j.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,(s=>{const a=ce.fromPath(s);return this.gi(e,a).next((u=>{u||t.removeEntry(a,me.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return j.or([()=>j.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Mu{constructor(e,t){this.persistence=e,this.pi=new us((s=>W0(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=s1(this,t)}static mi(e,t){return new Mu(e,t)}Ei(){}di(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return j.forEach(this.pi,((s,a)=>this.br(e,s,a).next((u=>u?j.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),u=a.newChangeBuffer();return a.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,me.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),j.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yu(e.data.value)),t}br(e,t,s){return j.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return j.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qf{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Ce(),a=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:a=a.add(u.doc.key)}return new qf(e,t.fromCache,s,a)}}/**
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
 */class y1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ow()?8:H0(bt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,a,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new y1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Zs()<=Ae.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Zs()<=Ae.DEBUG&&ee("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Zs()<=Ae.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(t))):j.resolve())}ys(e,t){if(cg(t))return j.resolve(null);let s=Kn(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=ff(t,null,"F"),s=Kn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ce(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ds(t,m);return this.Cs(t,v,h,y.readTime)?this.ys(e,ff(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,s,a){return cg(t)||a.isEqual(me.min())?j.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,a)?j.resolve(null):(Zs()<=Ae.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),eo(t)),this.vs(e,h,t,U0(a,Na)).next((m=>m)))}))}Ds(e,t){let s=new mt(Wy(e));return t.forEach(((a,u)=>{ec(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(a)>0)}Ss(e,t,s){return Zs()<=Ae.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",eo(t)),this.ps.getDocumentsMatchingQuery(e,t,gi.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Wf="LocalStore",v1=3e8;class E1{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Ze(Re),this.xs=new us((u=>Mf(u)),bf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function w1(i,e,t,s){return new E1(i,e,t,s)}async function g_(i,e){const t=ye(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((u=>(a=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Ce();for(const v of a){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ls:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function T1(i,e){const t=ye(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,w){const A=v.batch,D=A.keys();let z=j.resolve();return D.forEach((Y=>{z=z.next((()=>w.getEntry(y,Y))).next((Q=>{const H=v.docVersions.get(Y);be(H!==null,48541),Q.version.compareTo(H)<0&&(A.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),w.addEntry(Q)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Ce();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function y_(i){const e=ye(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function I1(i,e){const t=ye(i),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const m=[];e.targetChanges.forEach(((w,A)=>{const D=a.get(A);if(!D)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,A).next((()=>t.Pi.addMatchingKeys(u,w.addedDocuments,A))));let z=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?z=z.withResumeToken(Ct.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),a=a.insert(A,z),(function(Q,H,_e){return Q.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=v1?!0:_e.addedDocuments.size+_e.modifiedDocuments.size+_e.removedDocuments.size>0})(D,z,w)&&m.push(t.Pi.updateTargetData(u,z))}));let y=Ar(),v=Ce();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(S1(u,h,e.documentUpdates).next((w=>{y=w.ks,v=w.qs}))),!s.isEqual(me.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next((A=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return j.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.Ms=a,u)))}function S1(i,e,t){let s=Ce(),a=Ce();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ar();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(me.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ee(Wf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{ks:h,qs:a}}))}function A1(i,e){const t=ye(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Of),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function R1(i,e){const t=ye(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((u=>u?(a=u,j.resolve(a)):t.Pi.allocateTargetId(s).next((h=>(a=new ci(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function yf(i,e,t){const s=ye(i),a=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,a)))}catch(h){if(!Eo(h))throw h;ee(Wf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function Ig(i,e,t){const s=ye(i);let a=me.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,w){const A=ye(y),D=A.xs.get(w);return D!==void 0?j.resolve(A.Ms.get(D)):A.Pi.getTargetData(v,w)})(s,h,Kn(e)).next((m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?a:me.min(),t?u:Ce()))).next((m=>(C1(s,fT(e),m),{documents:m,Qs:u})))))}function C1(i,e,t){let s=i.Os.get(e)||me.min();t.forEach(((a,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class Sg{constructor(){this.activeTargetIds=_T()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class P1{constructor(){this.Mo=new Sg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Sg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class k1{Oo(e){}shutdown(){}}/**
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
 */const Ag="ConnectivityMonitor";class Rg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Ag,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Ag,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pu=null;function _f(){return pu===null?pu=(function(){return 268435456+Math.round(2147483648*Math.random())})():pu++,"0x"+pu.toString(16)}/**
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
 */const Qh="RestConnection",N1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class D1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===ku?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,u){const h=_f(),m=this.zo(e,t.toUriEncodedString());ee(Qh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,a,u);const{host:v}=new URL(m),w=go(v);return this.Jo(e,m,y,s,w).then((A=>(ee(Qh,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw lo(Qh,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Ho(e,t,s,a,u,h){return this.Go(e,t,s,a,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_o})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,u)=>e[u]=a)),s&&s.headers.forEach(((a,u)=>e[u]=a))}zo(e,t){const s=N1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class V1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const xt="WebChannelConnection";class O1 extends D1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,u){const h=_f();return new Promise(((m,y)=>{const v=new wy;v.setWithCredentials(!0),v.listenOnce(Ty.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case gu.NO_ERROR:const A=v.getResponseJson();ee(xt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case gu.TIMEOUT:ee(xt,`RPC '${e}' ${h} timed out`),y(new oe(q.DEADLINE_EXCEEDED,"Request time out"));break;case gu.HTTP_ERROR:const D=v.getStatus();if(ee(xt,`RPC '${e}' ${h} failed with status:`,D,"response text:",v.getResponseText()),D>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const Y=z==null?void 0:z.error;if(Y&&Y.status&&Y.message){const Q=(function(_e){const pe=_e.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(pe)>=0?pe:q.UNKNOWN})(Y.status);y(new oe(Q,Y.message))}else y(new oe(q.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new oe(q.UNAVAILABLE,"Connection failed."));break;default:he(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ee(xt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(a);ee(xt,`RPC '${e}' ${h} sending request:`,a),v.send(t,"POST",w,s,15)}))}T_(e,t,s){const a=_f(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ay(),m=Sy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ee(xt,`Creating RPC '${e}' stream ${a}: ${w}`,y);const A=h.createWebChannel(w,y);this.I_(A);let D=!1,z=!1;const Y=new V1({Yo:H=>{z?ee(xt,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(D||(ee(xt,`Opening RPC '${e}' stream ${a} transport.`),A.open(),D=!0),ee(xt,`RPC '${e}' stream ${a} sending:`,H),A.send(H))},Zo:()=>A.close()}),Q=(H,_e,pe)=>{H.listen(_e,(we=>{try{pe(we)}catch(Pe){setTimeout((()=>{throw Pe}),0)}}))};return Q(A,_a.EventType.OPEN,(()=>{z||(ee(xt,`RPC '${e}' stream ${a} transport opened.`),Y.o_())})),Q(A,_a.EventType.CLOSE,(()=>{z||(z=!0,ee(xt,`RPC '${e}' stream ${a} transport closed`),Y.a_(),this.E_(A))})),Q(A,_a.EventType.ERROR,(H=>{z||(z=!0,lo(xt,`RPC '${e}' stream ${a} transport errored. Name:`,H.name,"Message:",H.message),Y.a_(new oe(q.UNAVAILABLE,"The operation could not be completed")))})),Q(A,_a.EventType.MESSAGE,(H=>{var _e;if(!z){const pe=H.data[0];be(!!pe,16349);const we=pe,Pe=(we==null?void 0:we.error)||((_e=we[0])==null?void 0:_e.error);if(Pe){ee(xt,`RPC '${e}' stream ${a} received error:`,Pe);const $e=Pe.status;let ke=(function(R){const V=ut[R];if(V!==void 0)return i_(V)})($e),P=Pe.message;ke===void 0&&(ke=q.INTERNAL,P="Unknown error status: "+$e+" with message "+Pe.message),z=!0,Y.a_(new oe(ke,P)),A.close()}else ee(xt,`RPC '${e}' stream ${a} received:`,pe),Y.u_(pe)}})),Q(m,Iy.STAT_EVENT,(H=>{H.stat===of.PROXY?ee(xt,`RPC '${e}' stream ${a} detected buffering proxy`):H.stat===of.NOPROXY&&ee(xt,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{Y.__()}),0),Y}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Xh(){return typeof document<"u"?document:null}/**
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
 */function ic(i){return new bT(i,!0)}/**
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
 */class __{constructor(e,t,s=1e3,a=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ee("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Cg="PersistentStream";class v_{constructor(e,t,s,a,u,h,m,y){this.Mi=e,this.S_=s,this.b_=a,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new __(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new oe(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ee(Cg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ee(Cg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class x1 extends v_{constructor(e,t,s,a,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=zT(this.serializer,e),s=(function(u){if(!("targetChange"in u))return me.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?Xn(h.readTime):me.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=gf(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=hf(y)?{documents:$T(u,y)}:{query:HT(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=a_(u,h.resumeToken);const v=df(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(me.min())>0){m.readTime=Lu(u,h.snapshotVersion.toTimestamp());const v=df(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=WT(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=gf(this.serializer),t.removeTarget=e,this.q_(t)}}class L1 extends v_{constructor(e,t,s,a,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=BT(e.writeResults,e.commitTime),s=Xn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=gf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>jT(this.serializer,s)))};this.q_(t)}}/**
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
 */class M1{}class b1 extends M1{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new oe(q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,pf(t,s),a,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(q.UNKNOWN,u.toString())}))}Ho(e,t,s,a,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,pf(t,s),a,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(q.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class F1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sr(t),this.aa=!1):ee("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const as="RemoteStore";class U1{constructor(e,t,s,a,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{cs(this)&&(ee(as,"Restarting streams for network reachability change."),await(async function(y){const v=ye(y);v.Ea.add(4),await $a(v),v.Ra.set("Unknown"),v.Ea.delete(4),await sc(v)})(this))}))})),this.Ra=new F1(s,a)}}async function sc(i){if(cs(i))for(const e of i.da)await e(!0)}async function $a(i){for(const e of i.da)await e(!1)}function E_(i,e){const t=ye(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Xf(t)?Qf(t):wo(t).O_()&&Kf(t,e))}function Gf(i,e){const t=ye(i),s=wo(t);t.Ia.delete(e),s.O_()&&w_(t,e),t.Ia.size===0&&(s.O_()?s.L_():cs(t)&&t.Ra.set("Unknown"))}function Kf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wo(i).Y_(e)}function w_(i,e){i.Va.Ue(e),wo(i).Z_(e)}function Qf(i){i.Va=new OT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),wo(i).start(),i.Ra.ua()}function Xf(i){return cs(i)&&!wo(i).x_()&&i.Ia.size>0}function cs(i){return ye(i).Ea.size===0}function T_(i){i.Va=void 0}async function z1(i){i.Ra.set("Online")}async function j1(i){i.Ia.forEach(((e,t)=>{Kf(i,e)}))}async function B1(i,e){T_(i),Xf(i)?(i.Ra.ha(e),Qf(i)):i.Ra.set("Unknown")}async function $1(i,e,t){if(i.Ra.set("Online"),e instanceof o_&&e.state===2&&e.cause)try{await(async function(a,u){const h=u.cause;for(const m of u.targetIds)a.Ia.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.Ia.delete(m),a.Va.removeTarget(m))})(i,e)}catch(s){ee(as,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await bu(i,s)}else if(e instanceof Eu?i.Va.Ze(e):e instanceof s_?i.Va.st(e):i.Va.tt(e),!t.isEqual(me.min()))try{const s=await y_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ia.get(v);w&&u.Ia.set(v,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const w=u.Ia.get(y);if(!w)return;u.Ia.set(y,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),w_(u,y);const A=new ci(w.target,y,v,w.sequenceNumber);Kf(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ee(as,"Failed to raise snapshot:",s),await bu(i,s)}}async function bu(i,e,t){if(!Eo(e))throw e;i.Ea.add(1),await $a(i),i.Ra.set("Offline"),t||(t=()=>y_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ee(as,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await sc(i)}))}function I_(i,e){return e().catch((t=>bu(i,t,e)))}async function oc(i){const e=ye(i),t=Ei(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Of;for(;H1(e);)try{const a=await A1(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,q1(e,a)}catch(a){await bu(e,a)}S_(e)&&A_(e)}function H1(i){return cs(i)&&i.Ta.length<10}function q1(i,e){i.Ta.push(e);const t=Ei(i);t.O_()&&t.X_&&t.ea(e.mutations)}function S_(i){return cs(i)&&!Ei(i).x_()&&i.Ta.length>0}function A_(i){Ei(i).start()}async function W1(i){Ei(i).ra()}async function G1(i){const e=Ei(i);for(const t of i.Ta)e.ea(t.mutations)}async function K1(i,e,t){const s=i.Ta.shift(),a=zf.from(s,e,t);await I_(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await oc(i)}async function Q1(i,e){e&&Ei(i).X_&&await(async function(s,a){if((function(h){return NT(h)&&h!==q.ABORTED})(a.code)){const u=s.Ta.shift();Ei(s).B_(),await I_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,a))),await oc(s)}})(i,e),S_(i)&&A_(i)}async function Pg(i,e){const t=ye(i);t.asyncQueue.verifyOperationInProgress(),ee(as,"RemoteStore received new credentials");const s=cs(t);t.Ea.add(3),await $a(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await sc(t)}async function X1(i,e){const t=ye(i);e?(t.Ea.delete(2),await sc(t)):e||(t.Ea.add(2),await $a(t),t.Ra.set("Unknown"))}function wo(i){return i.ma||(i.ma=(function(t,s,a){const u=ye(t);return u.sa(),new x1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)})(i.datastore,i.asyncQueue,{Xo:z1.bind(null,i),t_:j1.bind(null,i),r_:B1.bind(null,i),H_:$1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Xf(i)?Qf(i):i.Ra.set("Unknown")):(await i.ma.stop(),T_(i))}))),i.ma}function Ei(i){return i.fa||(i.fa=(function(t,s,a){const u=ye(t);return u.sa(),new L1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:W1.bind(null,i),r_:Q1.bind(null,i),ta:G1.bind(null,i),na:K1.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await oc(i)):(await i.fa.stop(),i.Ta.length>0&&(ee(as,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class Yf{constructor(e,t,s,a,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,u){const h=Date.now()+s,m=new Yf(e,t,h,a,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jf(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),Eo(i))return new oe(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class ro{static emptySet(e){return new ro(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ce.comparator(t.key,s.key):(t,s)=>ce.comparator(t.key,s.key),this.keyedMap=va(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(!a.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ro;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class kg{constructor(){this.ga=new Ze(ce.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):he(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class po{constructor(e,t,s,a,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,a,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new po(e,t,ro.emptySet(t),h,s,a,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class Y1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class J1{constructor(){this.queries=Ng(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=ye(t),u=a.queries;a.queries=Ng(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new oe(q.ABORTED,"Firestore shutting down"))}}function Ng(){return new us((i=>qy(i)),Zu)}async function Z1(i,e){const t=ye(i);let s=3;const a=e.query;let u=t.queries.get(a);u?!u.ba()&&e.Da()&&(s=2):(u=new Y1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(a,!0);break;case 1:u.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const m=Jf(h,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Zf(t)}async function eI(i,e){const t=ye(i),s=e.query;let a=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?a=e.Da()?0:1:!u.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function tI(i,e){const t=ye(i);let s=!1;for(const a of e){const u=a.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(a)&&(s=!0);h.wa=a}}s&&Zf(t)}function nI(i,e,t){const s=ye(i),a=s.queries.get(e);if(a)for(const u of a.Sa)u.onError(t);s.queries.delete(e)}function Zf(i){i.Ca.forEach((e=>{e.next()}))}var vf,Dg;(Dg=vf||(vf={})).Ma="default",Dg.Cache="cache";class rI{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==vf.Cache}}/**
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
 */class R_{constructor(e){this.key=e}}class C_{constructor(e){this.key=e}}class iI{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ce(),this.mutatedKeys=Ce(),this.eu=Wy(e),this.tu=new ro(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new kg,a=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,v=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((w,A)=>{const D=a.get(w),z=ec(this.query,A)?A:null,Y=!!D&&this.mutatedKeys.has(D.key),Q=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let H=!1;D&&z?D.data.isEqual(z.data)?Y!==Q&&(s.track({type:3,doc:z}),H=!0):this.su(D,z)||(s.track({type:2,doc:z}),H=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(m=!0)):!D&&z?(s.track({type:0,doc:z}),H=!0):D&&!z&&(s.track({type:1,doc:D}),H=!0,(y||v)&&(m=!0)),H&&(z?(h=h.add(z),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,A)=>(function(z,Y){const Q=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{Rt:H})}};return Q(z)-Q(Y)})(w.type,A.type)||this.eu(w.doc,A.doc))),this.ou(s),a=a??!1;const m=t&&!a?this._u():[],y=this.Xa.size===0&&this.current&&!a?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new po(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ce(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new C_(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new R_(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ce();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ed="SyncEngine";class sI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class oI{constructor(e){this.key=e,this.hu=!1}}class aI{constructor(e,t,s,a,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new us((m=>qy(m)),Zu),this.Iu=new Map,this.Eu=new Set,this.du=new Ze(ce.comparator),this.Au=new Map,this.Ru=new $f,this.Vu={},this.mu=new Map,this.fu=fo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lI(i,e,t=!0){const s=O_(i);let a;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),a=u.view.lu()):a=await P_(s,e,t,!0),a}async function uI(i,e){const t=O_(i);await P_(t,e,!0,!1)}async function P_(i,e,t,s){const a=await R1(i.localStore,Kn(e)),u=a.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await cI(i,e,u,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&E_(i.remoteStore,a),m}async function cI(i,e,t,s,a){i.pu=(A,D,z)=>(async function(Q,H,_e,pe){let we=H.view.ru(_e);we.Cs&&(we=await Ig(Q.localStore,H.query,!1).then((({documents:P})=>H.view.ru(P,we))));const Pe=pe&&pe.targetChanges.get(H.targetId),$e=pe&&pe.targetMismatches.get(H.targetId)!=null,ke=H.view.applyChanges(we,Q.isPrimaryClient,Pe,$e);return Og(Q,H.targetId,ke.au),ke.snapshot})(i,A,D,z);const u=await Ig(i.localStore,e,!0),h=new iI(e,u.Qs),m=h.ru(u.documents),y=Ba.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),v=h.applyChanges(m,i.isPrimaryClient,y);Og(i,t,v.au);const w=new sI(e,t,h);return i.Tu.set(e,w),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function hI(i,e,t){const s=ye(i),a=s.Tu.get(e),u=s.Iu.get(a.targetId);if(u.length>1)return s.Iu.set(a.targetId,u.filter((h=>!Zu(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await yf(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Gf(s.remoteStore,a.targetId),Ef(s,a.targetId)})).catch(vo)):(Ef(s,a.targetId),await yf(s.localStore,a.targetId,!0))}async function fI(i,e){const t=ye(i),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Gf(t.remoteStore,s.targetId))}async function dI(i,e,t){const s=EI(i);try{const a=await(function(h,m){const y=ye(h),v=Ge.now(),w=m.reduce(((z,Y)=>z.add(Y.key)),Ce());let A,D;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Y=Ar(),Q=Ce();return y.Ns.getEntries(z,w).next((H=>{Y=H,Y.forEach(((_e,pe)=>{pe.isValidDocument()||(Q=Q.add(_e))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,Y))).next((H=>{A=H;const _e=[];for(const pe of m){const we=AT(pe,A.get(pe.key).overlayedDocument);we!=null&&_e.push(new Ii(pe.key,we,Fy(we.value.mapValue),Qn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,_e,m)})).next((H=>{D=H;const _e=H.applyToLocalDocumentSet(A,Q);return y.documentOverlayCache.saveOverlays(z,H.batchId,_e)}))})).then((()=>({batchId:D.batchId,changes:Ky(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(h,m,y){let v=h.Vu[h.currentUser.toKey()];v||(v=new Ze(Re)),v=v.insert(m,y),h.Vu[h.currentUser.toKey()]=v})(s,a.batchId,t),await Ha(s,a.changes),await oc(s.remoteStore)}catch(a){const u=Jf(a,"Failed to persist write");t.reject(u)}}async function k_(i,e){const t=ye(i);try{const s=await I1(t.localStore,e);e.targetChanges.forEach(((a,u)=>{const h=t.Au.get(u);h&&(be(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?h.hu=!0:a.modifiedDocuments.size>0?be(h.hu,14607):a.removedDocuments.size>0&&(be(h.hu,42227),h.hu=!1))})),await Ha(t,s,e)}catch(s){await vo(s)}}function Vg(i,e,t){const s=ye(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&a.push(m.snapshot)})),(function(h,m){const y=ye(h);y.onlineState=m;let v=!1;y.queries.forEach(((w,A)=>{for(const D of A.Sa)D.va(m)&&(v=!0)})),v&&Zf(y)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function pI(i,e,t){const s=ye(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),u=a&&a.key;if(u){let h=new Ze(ce.comparator);h=h.insert(u,Mt.newNoDocument(u,me.min()));const m=Ce().add(u),y=new rc(me.min(),new Map,new Ze(Re),h,m);await k_(s,y),s.du=s.du.remove(u),s.Au.delete(e),td(s)}else await yf(s.localStore,e,!1).then((()=>Ef(s,e,t))).catch(vo)}async function mI(i,e){const t=ye(i),s=e.batch.batchId;try{const a=await T1(t.localStore,e);D_(t,s,null),N_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ha(t,a)}catch(a){await vo(a)}}async function gI(i,e,t){const s=ye(i);try{const a=await(function(h,m){const y=ye(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next((A=>(be(A!==null,37113),w=A.keys(),y.mutationQueue.removeMutationBatch(v,A)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>y.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);D_(s,e,t),N_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ha(s,a)}catch(a){await vo(a)}}function N_(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function D_(i,e,t){const s=ye(i);let a=s.Vu[s.currentUser.toKey()];if(a){const u=a.get(e);u&&(t?u.reject(t):u.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function Ef(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||V_(i,s)}))}function V_(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Gf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),td(i))}function Og(i,e,t){for(const s of t)s instanceof R_?(i.Ru.addReference(s.key,e),yI(i,s)):s instanceof C_?(ee(ed,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||V_(i,s.key)):he(19791,{wu:s})}function yI(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ee(ed,"New document in limbo: "+t),i.Eu.add(s),td(i))}function td(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new ce(Je.fromString(e)),s=i.fu.next();i.Au.set(s,new oI(t)),i.du=i.du.insert(t,s),E_(i.remoteStore,new ci(Kn(Ff(t.path)),s,"TargetPurposeLimboResolution",Qu.ce))}}async function Ha(i,e,t){const s=ye(i),a=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(v){a.push(v);const A=qf.As(y.targetId,v);u.push(A)}})))})),await Promise.all(h),s.Pu.H_(a),await(async function(y,v){const w=ye(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>j.forEach(v,(D=>j.forEach(D.Es,(z=>w.persistence.referenceDelegate.addReference(A,D.targetId,z))).next((()=>j.forEach(D.ds,(z=>w.persistence.referenceDelegate.removeReference(A,D.targetId,z)))))))))}catch(A){if(!Eo(A))throw A;ee(Wf,"Failed to update sequence numbers: "+A)}for(const A of v){const D=A.targetId;if(!A.fromCache){const z=w.Ms.get(D),Y=z.snapshotVersion,Q=z.withLastLimboFreeSnapshotVersion(Y);w.Ms=w.Ms.insert(D,Q)}}})(s.localStore,u))}async function _I(i,e){const t=ye(i);if(!t.currentUser.isEqual(e)){ee(ed,"User change. New user:",e.toKey());const s=await g_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new oe(q.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ha(t,s.Ls)}}function vI(i,e){const t=ye(i),s=t.Au.get(e);if(s&&s.hu)return Ce().add(s.key);{let a=Ce();const u=t.Iu.get(e);if(!u)return a;for(const h of u){const m=t.Tu.get(h);a=a.unionWith(m.view.nu)}return a}}function O_(i){const e=ye(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=k_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pI.bind(null,e),e.Pu.H_=tI.bind(null,e.eventManager),e.Pu.yu=nI.bind(null,e.eventManager),e}function EI(i){const e=ye(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gI.bind(null,e),e}class Fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return w1(this.persistence,new _1,e.initialUser,this.serializer)}Cu(e){return new m_(Hf.mi,this.serializer)}Du(e){return new P1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fu.provider={build:()=>new Fu};class wI extends Fu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){be(this.persistence.referenceDelegate instanceof Mu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new r1(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new m_((s=>Mu.mi(s,t)),this.serializer)}}class wf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_I.bind(null,this.syncEngine),await X1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new J1})()}createDatastore(e){const t=ic(e.databaseInfo.databaseId),s=(function(u){return new O1(u)})(e.databaseInfo);return(function(u,h,m,y){return new b1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,u,h,m){return new U1(s,a,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Vg(this.syncEngine,t,0)),(function(){return Rg.v()?new Rg:new k1})())}createSyncEngine(e,t){return(function(a,u,h,m,y,v,w){const A=new aI(a,u,h,m,y,v);return w&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const u=ye(a);ee(as,"RemoteStore shutting down."),u.Ea.add(5),await $a(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}wf.provider={build:()=>new wf};/**
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
 */class TI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const wi="FirestoreClient";class II{constructor(e,t,s,a,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=Lt.UNAUTHENTICATED,this.clientId=Df.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ee(wi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ee(wi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Jf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Yh(i,e){i.asyncQueue.verifyOperationInProgress(),ee(wi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async a=>{s.isEqual(a)||(await g_(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function xg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await SI(i);ee(wi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Pg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,a)=>Pg(e.remoteStore,a))),i._onlineComponents=e}async function SI(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ee(wi,"Using user provided OfflineComponentProvider");try{await Yh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===q.FAILED_PRECONDITION||a.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;lo("Error using user provided cache. Falling back to memory cache: "+t),await Yh(i,new Fu)}}else ee(wi,"Using default OfflineComponentProvider"),await Yh(i,new wI(void 0));return i._offlineComponents}async function x_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ee(wi,"Using user provided OnlineComponentProvider"),await xg(i,i._uninitializedComponentsProvider._online)):(ee(wi,"Using default OnlineComponentProvider"),await xg(i,new wf))),i._onlineComponents}function AI(i){return x_(i).then((e=>e.syncEngine))}async function RI(i){const e=await x_(i),t=e.eventManager;return t.onListen=lI.bind(null,e.syncEngine),t.onUnlisten=hI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fI.bind(null,e.syncEngine),t}function CI(i,e,t={}){const s=new mi;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,v){const w=new TI({next:D=>{w.Nu(),h.enqueueAndForget((()=>eI(u,A)));const z=D.docs.has(m);!z&&D.fromCache?v.reject(new oe(q.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&D.fromCache&&y&&y.source==="server"?v.reject(new oe(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(D)},error:D=>v.reject(D)}),A=new rI(Ff(m.path),w,{includeMetadataChanges:!0,qa:!0});return Z1(u,A)})(await RI(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function L_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Lg=new Map;/**
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
 */const M_="firestore.googleapis.com",Mg=!0;class bg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M_,this.ssl=Mg}else this.host=e.host,this.ssl=e.ssl??Mg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=p_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<t1)throw new oe(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=L_(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new oe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new oe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new oe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new C0;switch(s.type){case"firstParty":return new D0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Lg.get(t);s&&(ee("ComponentProvider","Removing Datastore"),Lg.delete(t),s.terminate())})(this),Promise.resolve()}}function PI(i,e,t,s={}){var v;i=os(i,nd);const a=go(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;a&&(dy(`https://${m}`),py("Firestore",!0)),u.host!==M_&&u.host!==m&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:a,emulatorOptions:s};if(!rs(y,h)&&(i._setSettings(y),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=Lt.MOCK_USER;else{w=YE(s.mockUserToken,(v=i._app)==null?void 0:v.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new oe(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Lt(D)}i._authCredentials=new P0(new Cy(w,A))}}/**
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
 */class rd{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rd(this.firestore,e,this._query)}}class pt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ma(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}toJSON(){return{type:pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(za(t,pt._jsonSchema))return new pt(e,s||null,new ce(Je.fromString(t.referencePath)))}}pt._jsonSchemaVersion="firestore/documentReference/1.0",pt._jsonSchema={type:ct("string",pt._jsonSchemaVersion),referencePath:ct("string")};class Ma extends rd{constructor(e,t,s){super(e,t,Ff(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new ce(e))}withConverter(e){return new Ma(this.firestore,e,this._path)}}function XA(i,e,...t){if(i=jt(i),arguments.length===1&&(e=Df.newId()),b0("doc","path",e),i instanceof nd){const s=Je.fromString(e,...t);return Ym(s),new pt(i,null,new ce(s))}{if(!(i instanceof pt||i instanceof Ma))throw new oe(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...t));return Ym(s),new pt(i.firestore,i instanceof Ma?i.converter:null,new ce(s))}}/**
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
 */const Fg="AsyncQueue";class Ug{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new __(this,"async_queue_retry"),this._c=()=>{const s=Xh();s&&ee(Fg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Xh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Xh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new mi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Eo(e))throw e;ee(Fg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Sr("INTERNAL UNHANDLED ERROR: ",zg(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=Yf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(a),a}uc(){this.nc&&he(47125,{Pc:zg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function zg(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class ac extends nd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new Ug,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ug(e),this._firestoreClient=void 0,await e}}}function YA(i,e){const t=typeof i=="object"?i:yy(),s=typeof i=="string"?i:ku,a=kf(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const u=QE("firestore");u&&PI(a,...u)}return a}function b_(i){if(i._terminated)throw new oe(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||kI(i),i._firestoreClient}function kI(i){var s,a,u;const e=i._freezeSettings(),t=(function(m,y,v,w){return new Q0(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,L_(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new II(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mn(Ct.fromBase64String(e))}catch(t){throw new oe(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mn(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(za(e,mn._jsonSchema))return mn.fromBase64String(e.bytes)}}mn._jsonSchemaVersion="firestore/bytes/1.0",mn._jsonSchema={type:ct("string",mn._jsonSchemaVersion),bytes:ct("string")};/**
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
 */class lc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class id{constructor(e){this._methodName=e}}/**
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
 */class Yn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yn._jsonSchemaVersion}}static fromJSON(e){if(za(e,Yn._jsonSchema))return new Yn(e.latitude,e.longitude)}}Yn._jsonSchemaVersion="firestore/geoPoint/1.0",Yn._jsonSchema={type:ct("string",Yn._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
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
 */class Jn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(za(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jn(e.vectorValues);throw new oe(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:ct("string",Jn._jsonSchemaVersion),vectorValues:ct("object")};/**
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
 */const NI=/^__.*__$/;class DI{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,t,this.fieldTransforms):new ja(e,this.data,t,this.fieldTransforms)}}class F_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ii(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function U_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ac:i})}}class sd{constructor(e,t,s,a,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Uu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(U_(this.Ac)&&NI.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class VI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ic(e)}Cc(e,t,s,a=!1){return new sd({Ac:e,methodName:t,Dc:s,path:Rt.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z_(i){const e=i._freezeSettings(),t=ic(i._databaseId);return new VI(i._databaseId,!!e.ignoreUndefinedProperties,t)}function OI(i,e,t,s,a,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,a);od("Data must be an object, but it was:",h,s);const m=j_(s,h);let y,v;if(u.merge)y=new on(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const D=Tf(e,A,t);if(!h.contains(D))throw new oe(q.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);$_(w,D)||w.push(D)}y=new on(w),v=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,v=h.fieldTransforms;return new DI(new Qt(m),y,v)}class uc extends id{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uc}}function xI(i,e,t,s){const a=i.Cc(1,e,t);od("Data must be an object, but it was:",a,s);const u=[],h=Qt.empty();Ti(s,((y,v)=>{const w=ad(e,y,t);v=jt(v);const A=a.yc(w);if(v instanceof uc)u.push(w);else{const D=cc(v,A);D!=null&&(u.push(w),h.set(w,D))}}));const m=new on(u);return new F_(h,m,a.fieldTransforms)}function LI(i,e,t,s,a,u){const h=i.Cc(1,e,t),m=[Tf(e,s,t)],y=[a];if(u.length%2!=0)throw new oe(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<u.length;D+=2)m.push(Tf(e,u[D])),y.push(u[D+1]);const v=[],w=Qt.empty();for(let D=m.length-1;D>=0;--D)if(!$_(v,m[D])){const z=m[D];let Y=y[D];Y=jt(Y);const Q=h.yc(z);if(Y instanceof uc)v.push(z);else{const H=cc(Y,Q);H!=null&&(v.push(z),w.set(z,H))}}const A=new on(v);return new F_(w,A,h.fieldTransforms)}function cc(i,e){if(B_(i=jt(i)))return od("Unsupported field value:",e,i),j_(i,e);if(i instanceof id)return(function(s,a){if(!U_(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(a);u&&a.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const u=[];let h=0;for(const m of s){let y=cc(m,a.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,a){if((s=jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return vT(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ge.fromDate(s);return{timestampValue:Lu(a.serializer,u)}}if(s instanceof Ge){const u=new Ge(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Lu(a.serializer,u)}}if(s instanceof Yn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof mn)return{bytesValue:a_(a.serializer,s._byteString)};if(s instanceof pt){const u=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw a.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Bf(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Jn)return(function(h,m){return{mapValue:{fields:{[My]:{stringValue:by},[Nu]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.Sc("VectorValues must only contain numeric values.");return Uf(m.serializer,v)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Vf(s)}`)})(i,e)}function j_(i,e){const t={};return Ny(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ti(i,((s,a)=>{const u=cc(a,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function B_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ge||i instanceof Yn||i instanceof mn||i instanceof pt||i instanceof id||i instanceof Jn)}function od(i,e,t){if(!B_(t)||!Py(t)){const s=Vf(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Tf(i,e,t){if((e=jt(e))instanceof lc)return e._internalPath;if(typeof e=="string")return ad(i,e);throw Uu("Field path arguments must be of type string or ",i,!1,void 0,t)}const MI=new RegExp("[~\\*/\\[\\]]");function ad(i,e,t){if(e.search(MI)>=0)throw Uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new lc(...e.split("."))._internalPath}catch{throw Uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Uu(i,e,t,s,a){const u=s&&!s.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${a}`),y+=")"),new oe(q.INVALID_ARGUMENT,m+i+y)}function $_(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class H_{constructor(e,t,s,a,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(q_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bI extends H_{data(){return super.data()}}function q_(i,e){return typeof e=="string"?ad(i,e):e instanceof lc?e._internalPath:e._delegate._internalPath}class FI{convertValue(e,t="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ti(e,((a,u)=>{s[a]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,a,u;const t=(u=(a=(s=e.fields)==null?void 0:s[Nu].arrayValue)==null?void 0:a.values)==null?void 0:u.map((h=>st(h.doubleValue)));return new Jn(t)}convertGeoPoint(e){return new Yn(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Yu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Da(e));default:return null}}convertTimestamp(e){const t=yi(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Je.fromString(e);be(d_(s),9688,{name:e});const a=new Va(s.get(1),s.get(3)),u=new ce(s.popFirst(5));return a.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function UI(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class wa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ts extends H_{constructor(e,t,s,a,u,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(q_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ts._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",ts._jsonSchema={type:ct("string",ts._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class wu extends ts{data(e={}){return super.data(e)}}class Ca{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new wa(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new wu(this._firestore,this._userDataWriter,s.key,s,new wa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,u){if(a._snapshot.oldDocs.isEmpty()){let h=0;return a._snapshot.docChanges.map((m=>{const y=new wu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new wa(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new wu(a._firestore,a._userDataWriter,m.doc.key,m.doc,new wa(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:zI(m.type),doc:y,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ca._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Df.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),a.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zI(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:i})}}/**
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
 */function JA(i){i=os(i,pt);const e=os(i.firestore,ac);return CI(b_(e),i._key).then((t=>BI(e,i,t)))}Ca._jsonSchemaVersion="firestore/querySnapshot/1.0",Ca._jsonSchema={type:ct("string",Ca._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class jI extends FI{constructor(e){super(),this.firestore=e}convertBytes(e){return new mn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function ZA(i,e,t){i=os(i,pt);const s=os(i.firestore,ac),a=UI(i.converter,e);return W_(s,[OI(z_(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,Qn.none())])}function eR(i,e,t,...s){i=os(i,pt);const a=os(i.firestore,ac),u=z_(a);let h;return h=typeof(e=jt(e))=="string"||e instanceof lc?LI(u,"updateDoc",i._key,e,t,s):xI(u,"updateDoc",i._key,e),W_(a,[h.toMutation(i._key,Qn.exists(!0))])}function W_(i,e){return(function(s,a){const u=new mi;return s.asyncQueue.enqueueAndForget((async()=>dI(await AI(s),a,u))),u.promise})(b_(i),e)}function BI(i,e,t){const s=t.docs.get(e._key),a=new jI(i);return new ts(i,a,e._key,s,new wa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){_o=a})(yo),ao(new is("firestore",((s,{instanceIdentifier:a,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new ac(new k0(s.getProvider("auth-internal")),new V0(h,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new oe(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(v.options.projectId,w)})(h,a),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),di(Gm,Km,e),di(Gm,Km,"esm2020")})();function G_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $I=G_,K_=new Fa("auth","Firebase",G_());/**
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
 */const zu=new Cf("@firebase/auth");function HI(i,...e){zu.logLevel<=Ae.WARN&&zu.warn(`Auth (${yo}): ${i}`,...e)}function Tu(i,...e){zu.logLevel<=Ae.ERROR&&zu.error(`Auth (${yo}): ${i}`,...e)}/**
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
 */function nr(i,...e){throw ud(i,...e)}function Pn(i,...e){return ud(i,...e)}function ld(i,e,t){const s={...$I(),[e]:t};return new Fa("auth","Firebase",s).create(e,{appName:i.name})}function ns(i){return ld(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qI(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&nr(i,"argument-error"),ld(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ud(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return K_.create(i,...e)}function de(i,e,...t){if(!i)throw ud(e,...t)}function wr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Tu(e),new Error(e)}function Rr(i,e){i||wr(e)}/**
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
 */function If(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function WI(){return jg()==="http:"||jg()==="https:"}function jg(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function GI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WI()||rw()||"connection"in navigator)?navigator.onLine:!0}function KI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=ew()||iw()}get(){return GI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cd(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Q_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YI=new qa(3e4,6e4);function hd(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function To(i,e,t,s,a={}){return X_(i,a,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ua({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return nw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&go(i.emulatorConfig.host)&&(v.credentials="include"),Q_.fetch()(await Y_(i,i.config.apiHost,t,m),v)})}async function X_(i,e,t){i._canInitEmulator=!1;const s={...QI,...e};try{const a=new ZI(i),u=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw mu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw mu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw mu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw mu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw ld(i,w,v);nr(i,w)}}catch(a){if(a instanceof Cr)throw a;nr(i,"network-request-failed",{message:String(a)})}}async function JI(i,e,t,s,a={}){const u=await To(i,e,t,s,a);return"mfaPendingCredential"in u&&nr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Y_(i,e,t,s){const a=`${e}${t}?${s}`,u=i,h=u.config.emulator?cd(i.config,a):`${i.config.apiScheme}://${a}`;return XI.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class ZI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Pn(this.auth,"network-request-failed")),YI.get())})}}function mu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Pn(i,e,s);return a.customData._tokenResponse=t,a}/**
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
 */async function eS(i,e){return To(i,"POST","/v1/accounts:delete",e)}async function ju(i,e){return To(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tS(i,e=!1){const t=jt(i),s=await t.getIdToken(e),a=fd(s);de(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:a,token:s,authTime:Pa(Jh(a.auth_time)),issuedAtTime:Pa(Jh(a.iat)),expirationTime:Pa(Jh(a.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Jh(i){return Number(i)*1e3}function fd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const a=uy(t);return a?JSON.parse(a):(Tu("Failed to decode base64 JWT payload"),null)}catch(a){return Tu("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Bg(i){const e=fd(i);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ba(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Cr&&nS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function nS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class rS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bu(i){var A;const e=i.auth,t=await i.getIdToken(),s=await ba(i,ju(e,{idToken:t}));de(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const u=(A=a.providerUserInfo)!=null&&A.length?J_(a.providerUserInfo):[],h=sS(i.providerData,u),m=i.isAnonymous,y=!(i.email&&a.passwordHash)&&!(h!=null&&h.length),v=m?y:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Sf(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(i,w)}async function iS(i){const e=jt(i);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sS(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function J_(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function oS(i,e){const t=await X_(i,{},async()=>{const s=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:u}=i.config,h=await Y_(i,a,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&go(i.emulatorConfig.host)&&(y.credentials="include"),Q_.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aS(i,e){return To(i,"POST","/v2/accounts:revokeToken",hd(i,e))}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=Bg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:u}=await oS(e,t);this.updateTokensAndExpiration(s,a,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:u}=t,h=new io;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(de(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),u&&(de(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function si(i,e){de(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Cn{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new rS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Sf(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ba(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tS(this,e)}reload(){return iS(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await ba(this,eS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:A,emailVerified:D,isAnonymous:z,providerData:Y,stsTokenManager:Q}=t;de(A&&Q,e,"internal-error");const H=io.fromJSON(this.name,Q);de(typeof A=="string",e,"internal-error"),si(s,e.name),si(a,e.name),de(typeof D=="boolean",e,"internal-error"),de(typeof z=="boolean",e,"internal-error"),si(u,e.name),si(h,e.name),si(m,e.name),si(y,e.name),si(v,e.name),si(w,e.name);const _e=new Cn({uid:A,auth:e,email:a,emailVerified:D,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:H,createdAt:v,lastLoginAt:w});return Y&&Array.isArray(Y)&&(_e.providerData=Y.map(pe=>({...pe}))),y&&(_e._redirectEventId=y),_e}static async _fromIdTokenResponse(e,t,s=!1){const a=new io;a.updateFromServerResponse(t);const u=new Cn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Bu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];de(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?J_(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!(u!=null&&u.length),m=new io;m.updateFromIdToken(s);const y=new Cn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Sf(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const $g=new Map;function Tr(i){Rr(i instanceof Function,"Expected a class definition");let e=$g.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,$g.set(i,e),e)}/**
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
 */class Z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Z_.type="NONE";const Hg=Z_;/**
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
 */function Iu(i,e,t){return`firebase:${i}:${e}:${t}`}class so{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:u}=this.auth;this.fullUserKey=Iu(this.userKey,a.apiKey,u),this.fullPersistenceKey=Iu("persistence",a.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ju(this.auth,{idToken:e}).catch(()=>{});return t?Cn._fromGetAccountInfoResponse(this.auth,t,e):null}return Cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new so(Tr(Hg),e,s);const a=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=a[0]||Tr(Hg);const h=Iu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let A;if(typeof w=="string"){const D=await ju(e,{idToken:w}).catch(()=>{});if(!D)break;A=await Cn._fromGetAccountInfoResponse(e,D,w)}else A=Cn._fromJSON(e,w);v!==u&&(m=A),u=v;break}}catch{}const y=a.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new so(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new so(u,e,s))}}/**
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
 */function qg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sv(e))return"Blackberry";if(ov(e))return"Webos";if(tv(e))return"Safari";if((e.includes("chrome/")||nv(e))&&!e.includes("edge/"))return"Chrome";if(iv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ev(i=bt()){return/firefox\//i.test(i)}function tv(i=bt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nv(i=bt()){return/crios\//i.test(i)}function rv(i=bt()){return/iemobile/i.test(i)}function iv(i=bt()){return/android/i.test(i)}function sv(i=bt()){return/blackberry/i.test(i)}function ov(i=bt()){return/webos/i.test(i)}function dd(i=bt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function lS(i=bt()){var e;return dd(i)&&!!((e=window.navigator)!=null&&e.standalone)}function uS(){return sw()&&document.documentMode===10}function av(i=bt()){return dd(i)||iv(i)||ov(i)||sv(i)||/windows phone/i.test(i)||rv(i)}/**
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
 */function lv(i,e=[]){let t;switch(i){case"Browser":t=qg(bt());break;case"Worker":t=`${qg(bt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yo}/${s}`}/**
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
 */class cS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function hS(i,e={}){return To(i,"GET","/v2/passwordPolicy",hd(i,e))}/**
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
 */const fS=6;class dS{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??fS,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class pS{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new cS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=K_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tr(t)),this._initializationPromise=this.queue(async()=>{var s,a,u;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ju(this,{idToken:e}),s=await Cn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Rn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(ns(this));const t=e?jt(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hS(this),t=new dS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await aS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tr(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&HI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function hc(i){return jt(i)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=dw(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mS(i){pd=i}function gS(i){return pd.loadJS(i)}function yS(){return pd.gapiScript}function _S(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vS(i,e){const t=kf(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),u=t.getOptions();if(rs(u,e??{}))return a;nr(a,"already-initialized")}return t.initialize({options:e})}function ES(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Tr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function wS(i,e,t){const s=hc(i);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,u=uv(e),{host:h,port:m}=TS(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de(rs(v,s.config.emulator)&&rs(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,go(h)?(dy(`${u}//${h}${y}`),py("Auth",!0)):IS()}function uv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function TS(i){const e=uv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const u=a[1];return{host:u,port:Gg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Gg(h)}}}function Gg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function IS(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class cv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,t){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
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
 */async function oo(i,e){return JI(i,"POST","/v1/accounts:signInWithIdp",hd(i,e))}/**
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
 */const SS="http://localhost";class ls extends cv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...u}=t;if(!s||!a)return null;const h=new ls(s,a);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return oo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,oo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oo(e,t)}buildRequest(){const e={requestUri:SS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ua(t)}return e}}/**
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
 */class md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oi extends Wa{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
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
 */class ai extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ls._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ai.credential(t,s)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
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
 */class li extends Wa{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
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
 */class ui extends Wa{constructor(){super("twitter.com")}static credential(e,t){return ls._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.TWITTER_SIGN_IN_METHOD="twitter.com";ui.PROVIDER_ID="twitter.com";/**
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
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const u=await Cn._fromIdTokenResponse(e,s,a),h=Kg(s);return new mo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=Kg(s);return new mo({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function Kg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class $u extends Cr{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,$u.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new $u(e,t,s,a)}}function hv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?$u._fromErrorAndOperation(i,u,e,s):u})}async function AS(i,e,t=!1){const s=await ba(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return mo._forOperation(i,"link",s)}/**
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
 */async function RS(i,e,t=!1){const{auth:s}=i;if(Rn(s.app))return Promise.reject(ns(s));const a="reauthenticate";try{const u=await ba(i,hv(s,a,e,i),t);de(u.idToken,s,"internal-error");const h=fd(u.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(i.uid===m,s,"user-mismatch"),mo._forOperation(i,a,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&nr(s,"user-mismatch"),u}}/**
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
 */async function CS(i,e,t=!1){if(Rn(i.app))return Promise.reject(ns(i));const s="signIn",a=await hv(i,s,e),u=await mo._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(u.user),u}function PS(i,e,t,s){return jt(i).onIdTokenChanged(e,t,s)}function kS(i,e,t){return jt(i).beforeAuthStateChanged(e,t)}function tR(i,e,t,s){return jt(i).onAuthStateChanged(e,t,s)}function nR(i){return jt(i).signOut()}const Hu="__sak";/**
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
 */class fv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NS=1e3,DS=10;class dv extends fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=av(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);uS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,DS):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},NS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dv.type="LOCAL";const VS=dv;/**
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
 */class pv extends fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pv.type="SESSION";const mv=pv;/**
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
 */function OS(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new fc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:u}=t.data,h=this.handlersMap[a];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await OS(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
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
 */function gd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class xS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=gd("",20);a.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(A){const D=A;if(D.data.eventId===v)switch(D.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Zn(){return window}function LS(i){Zn().location.href=i}/**
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
 */function gv(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function MS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bS(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function FS(){return gv()?self:null}/**
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
 */const yv="firebaseLocalStorageDb",US=1,qu="firebaseLocalStorage",_v="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dc(i,e){return i.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function zS(){const i=indexedDB.deleteDatabase(yv);return new Ga(i).toPromise()}function Af(){const i=indexedDB.open(yv,US);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qu,{keyPath:_v})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await zS(),e(await Af()))})})}async function Qg(i,e,t){const s=dc(i,!0).put({[_v]:e,value:t});return new Ga(s).toPromise()}async function jS(i,e){const t=dc(i,!1).get(e),s=await new Ga(t).toPromise();return s===void 0?null:s.value}function Xg(i,e){const t=dc(i,!0).delete(e);return new Ga(t).toPromise()}const BS=800,$S=3;class vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Af(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>$S)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(FS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await MS(),!this.activeServiceWorker)return;this.sender=new xS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Af();return await Qg(e,Hu,"1"),await Xg(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>jS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const u=dc(a,!1).getAll();return new Ga(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:u}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vv.type="LOCAL";const HS=vv;new qa(3e4,6e4);/**
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
 */function Ev(i,e){return e?Tr(e):(de(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class yd extends cv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qS(i){return CS(i.auth,new yd(i),i.bypassAuthState)}function WS(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),RS(t,new yd(i),i.bypassAuthState)}async function GS(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),AS(t,new yd(i),i.bypassAuthState)}/**
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
 */class wv{constructor(e,t,s,a,u=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qS;case"linkViaPopup":case"linkViaRedirect":return GS;case"reauthViaPopup":case"reauthViaRedirect":return WS;default:nr(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KS=new qa(2e3,1e4);async function rR(i,e,t){if(Rn(i.app))return Promise.reject(Pn(i,"operation-not-supported-in-this-environment"));const s=hc(i);qI(i,e,md);const a=Ev(s,t);return new Zi(s,"signInViaPopup",e,a).executeNotNull()}class Zi extends wv{constructor(e,t,s,a,u){super(e,t,a,u),this.provider=s,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KS.get())};e()}}Zi.currentPopupAction=null;/**
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
 */const QS="pendingRedirect",Su=new Map;class XS extends wv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const s=await YS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YS(i,e){const t=eA(e),s=ZS(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function JS(i,e){Su.set(i._key(),e)}function ZS(i){return Tr(i._redirectPersistence)}function eA(i){return Iu(QS,i.config.apiKey,i.name)}async function tA(i,e,t=!1){if(Rn(i.app))return Promise.reject(ns(i));const s=hc(i),a=Ev(s,e),h=await new XS(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const nA=600*1e3;class rA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Tv(e)){const a=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Pn(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Tv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(i);default:return!1}}/**
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
 */async function sA(i,e={}){return To(i,"GET","/v1/projects",e)}/**
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
 */const oA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aA=/^https?/;async function lA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await sA(i);for(const t of e)try{if(uA(t))return}catch{}nr(i,"unauthorized-domain")}function uA(i){const e=If(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!aA.test(t))return!1;if(oA.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const cA=new qa(3e4,6e4);function Jg(){const i=Zn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function hA(i){return new Promise((e,t)=>{var a,u,h;function s(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),t(Pn(i,"network-request-failed"))},timeout:cA.get()})}if((u=(a=Zn().gapi)==null?void 0:a.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=Zn().gapi)!=null&&h.load)s();else{const m=_S("iframefcb");return Zn()[m]=()=>{gapi.load?s():t(Pn(i,"network-request-failed"))},gS(`${yS()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Au=null,e})}let Au=null;function fA(i){return Au=Au||hA(i),Au}/**
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
 */const dA=new qa(5e3,15e3),pA="__/auth/iframe",mA="emulator/auth/iframe",gA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _A(i){const e=i.config;de(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?cd(e,mA):`https://${i.config.authDomain}/${pA}`,s={apiKey:e.apiKey,appName:i.name,v:yo},a=yA.get(i.config.apiHost);a&&(s.eid=a);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ua(s).slice(1)}`}async function vA(i){const e=await fA(i),t=Zn().gapi;return de(t,i,"internal-error"),e.open({where:document.body,url:_A(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gA,dontclear:!0},s=>new Promise(async(a,u)=>{await s.restyle({setHideOnLeave:!1});const h=Pn(i,"network-request-failed"),m=Zn().setTimeout(()=>{u(h)},dA.get());function y(){Zn().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const EA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wA=500,TA=600,IA="_blank",SA="http://localhost";class Zg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AA(i,e,t,s=wA,a=TA){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...EA,width:s.toString(),height:a.toString(),top:u,left:h},v=bt().toLowerCase();t&&(m=nv(v)?IA:t),ev(v)&&(e=e||SA,y.scrollbars="yes");const w=Object.entries(y).reduce((D,[z,Y])=>`${D}${z}=${Y},`,"");if(lS(v)&&m!=="_self")return RA(e||"",m),new Zg(null);const A=window.open(e||"",m,w);de(A,i,"popup-blocked");try{A.focus()}catch{}return new Zg(A)}function RA(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const CA="__/auth/handler",PA="emulator/auth/handler",kA=encodeURIComponent("fac");async function ey(i,e,t,s,a,u){de(i.config.authDomain,i,"auth-domain-config-required"),de(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:yo,eventId:a};if(e instanceof md){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",fw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Wa){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${kA}=${encodeURIComponent(y)}`:"";return`${NA(i)}?${Ua(m).slice(1)}${v}`}function NA({config:i}){return i.emulator?cd(i,PA):`https://${i.authDomain}/${CA}`}/**
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
 */const Zh="webStorageSupport";class DA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=tA,this._overrideRedirectResult=JS}async _openPopup(e,t,s,a){var h;Rr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await ey(e,t,s,If(),a);return AA(e,u,gd())}async _openRedirect(e,t,s,a){await this._originValidation(e);const u=await ey(e,t,s,If(),a);return LS(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:u}=this.eventManagers[t];return a?Promise.resolve(a):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await vA(e),s=new rA(e);return t.register("authEvent",a=>(de(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zh,{type:Zh},a=>{var h;const u=(h=a==null?void 0:a[0])==null?void 0:h[Zh];u!==void 0&&t(!!u),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return av()||tv()||dd()}}const VA=DA;var ty="@firebase/auth",ny="1.11.0";/**
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
 */class OA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xA(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LA(i){ao(new is("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lv(i)},v=new pS(s,a,u,y);return ES(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ao(new is("auth-internal",e=>{const t=hc(e.getProvider("auth").getImmediate());return(s=>new OA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),di(ty,ny,xA(i)),di(ty,ny,"esm2020")}/**
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
 */const MA=300,bA=fy("authIdTokenMaxAge")||MA;let ry=null;const FA=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>bA)return;const a=t==null?void 0:t.token;ry!==a&&(ry=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function iR(i=yy()){const e=kf(i,"auth");if(e.isInitialized())return e.getImmediate();const t=vS(i,{popupRedirectResolver:VA,persistence:[HS,VS,mv]}),s=fy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=FA(u.toString());kS(t,h,()=>h(t.currentUser)),PS(t,m=>h(m))}}const a=cy("auth");return a&&wS(t,`http://${a}`),t}function UA(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}mS({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const u=Pn("internal-error");u.customData=a,t(u)},s.type="text/javascript",s.charset="UTF-8",UA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LA("Browser");var Iv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iy=es.createContext&&es.createContext(Iv),zA=["attr","size","title"];function jA(i,e){if(i==null)return{};var t=BA(i,e),s,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(a=0;a<u.length;a++)s=u[a],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(i,s)&&(t[s]=i[s])}return t}function BA(i,e){if(i==null)return{};var t={};for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){if(e.indexOf(s)>=0)continue;t[s]=i[s]}return t}function Wu(){return Wu=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},Wu.apply(this,arguments)}function sy(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,s)}return t}function Gu(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?sy(Object(t),!0).forEach(function(s){$A(i,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):sy(Object(t)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(t,s))})}return i}function $A(i,e,t){return e=HA(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function HA(i){var e=qA(i,"string");return typeof e=="symbol"?e:e+""}function qA(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var s=t.call(i,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Sv(i){return i&&i.map((e,t)=>es.createElement(e.tag,Gu({key:t},e.attr),Sv(e.child)))}function Pr(i){return e=>es.createElement(WA,Wu({attr:Gu({},i.attr)},e),Sv(i.child))}function WA(i){var e=t=>{var{attr:s,size:a,title:u}=i,h=jA(i,zA),m=a||t.size||"1em",y;return t.className&&(y=t.className),i.className&&(y=(y?y+" ":"")+i.className),es.createElement("svg",Wu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,h,{className:y,style:Gu(Gu({color:i.color||t.color},t.style),i.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&es.createElement("title",null,u),i.children)};return iy!==void 0?es.createElement(iy.Consumer,null,t=>e(t)):e(Iv)}function sR(i){return Pr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(i)}function oR(i){return Pr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(i)}function aR(i){return Pr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(i)}function lR(i){return Pr({attr:{viewBox:"0 0 544 512"},child:[{tag:"path",attr:{d:"M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"},child:[]}]})(i)}function uR(i){return Pr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(i)}function cR(i){return Pr({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(i)}function hR(i){return Pr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(i)}function fR(i){return Pr({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(i)}function dR(i){return Pr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(i)}export{sR as F,ai as G,KA as R,YA as a,oR as b,cR as c,dR as d,hR as e,ZA as f,iR as g,XA as h,p0 as i,GA as j,uR as k,aR as l,fR as m,lR as n,JA as o,nR as p,tR as q,xE as r,rR as s,es as t,eR as u};
