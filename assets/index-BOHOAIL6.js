import{initializeApp as Qi}from"https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";import{getAuth as Zi,GoogleAuthProvider as tr,signOut as er,onAuthStateChanged as nr,signInWithPopup as sr}from"https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";import{getFirestore as ir,getDoc as Xs,setDoc as Ys,doc as cn}from"https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";import{GoogleGenAI as _e,Type as D}from"https://esm.run/@google/genai";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();try{const e=Qi({apiKey:"__FIREBASE_API_KEY__",authDomain:"__FIREBASE_AUTH_DOMAIN__",projectId:"__FIREBASE_PROJECT_ID__",storageBucket:"__FIREBASE_STORAGE_BUCKET__",messagingSenderId:"__FIREBASE_MESSAGING_SENDER_ID__",appId:"__FIREBASE_APP_ID__"}),n=Zi(e),r=ir(e),a=new tr;window.firebaseServices={auth:n,provider:a,firestore:r,signInWithPopup:sr,onAuthStateChanged:nr,signOut:er,doc:cn,setDoc:Ys,getDoc:Xs}}catch(s){console.error("Firebase initialization failed:",s),document.body.innerHTML="<h1>Ошибка инициализации Firebase. Проверьте конфигурацию.</h1>"}const rr=()=>{};var _s={};/**
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
 */const Qs=function(s){const e=[];let n=0;for(let r=0;r<s.length;r++){let a=s.charCodeAt(r);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(s.charCodeAt(++r)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},or=function(s){const e=[];let n=0,r=0;for(;n<s.length;){const a=s[n++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const c=s[n++];e[r++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=s[n++],d=s[n++],E=s[n++],_=((a&7)<<18|(c&63)<<12|(d&63)<<6|E&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const c=s[n++],d=s[n++];e[r++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},Zs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<s.length;a+=3){const c=s[a],d=a+1<s.length,E=d?s[a+1]:0,_=a+2<s.length,I=_?s[a+2]:0,A=c>>2,T=(c&3)<<4|E>>4;let b=(E&15)<<2|I>>6,M=I&63;_||(M=64,d||(b=64)),r.push(n[A],n[T],n[b],n[M])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Qs(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):or(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<s.length;){const c=n[s.charAt(a++)],E=a<s.length?n[s.charAt(a)]:0;++a;const I=a<s.length?n[s.charAt(a)]:64;++a;const T=a<s.length?n[s.charAt(a)]:64;if(++a,c==null||E==null||I==null||T==null)throw new ar;const b=c<<2|E>>4;if(r.push(b),I!==64){const M=E<<4&240|I>>2;if(r.push(M),T!==64){const P=I<<6&192|T;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class ar extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hr=function(s){const e=Qs(s);return Zs.encodeByteArray(e,!0)},Te=function(s){return hr(s).replace(/\./g,"")},cr=function(s){try{return Zs.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ur=()=>lr().__FIREBASE_DEFAULTS__,dr=()=>{if(typeof process>"u"||typeof _s>"u")return;const s=_s.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},pr=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&cr(s[1]);return e&&JSON.parse(e)},ti=()=>{try{return rr()||ur()||dr()||pr()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},fr=s=>{var e,n;return(n=(e=ti())==null?void 0:e.emulatorHosts)==null?void 0:n[s]},gr=s=>{const e=fr(s);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ei=()=>{var s;return(s=ti())==null?void 0:s.config};/**
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
 */class mr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ni(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yr(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function vr(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",a=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Te(JSON.stringify(n)),Te(JSON.stringify(d)),""].join(".")}const te={};function wr(){const s={prod:[],emulator:[]};for(const e of Object.keys(te))te[e]?s.emulator.push(e):s.prod.push(e);return s}function Er(s){let e=document.getElementById(s),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),n=!0),{created:n,element:e}}let Ss=!1;function _r(s,e){if(typeof window>"u"||typeof document>"u"||!ni(window.location.host)||te[s]===e||te[s]||Ss)return;te[s]=e;function n(b){return`__firebase__banner__${b}`}const r="__firebase__banner",c=wr().prod.length>0;function d(){const b=document.getElementById(r);b&&b.remove()}function E(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function _(b,M){b.setAttribute("width","24"),b.setAttribute("id",M),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function I(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Ss=!0,d()},b}function A(b,M){b.setAttribute("id",M),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=Er(r),M=n("text"),P=document.getElementById(M)||document.createElement("span"),O=n("learnmore"),$=document.getElementById(O)||document.createElement("a"),rt=n("preprendIcon"),Y=document.getElementById(rt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const K=b.element;E(K),A($,O);const ht=I();_(Y,rt),K.append(Y,P,$,ht),document.body.appendChild(K)}c?(P.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}function Sr(){try{return typeof indexedDB=="object"}catch{return!1}}function Ir(){return new Promise((s,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),s(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const br="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=br,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?Tr(c,r):"Error",E=`${this.serviceName}: ${d} (${a}).`;return new Ot(a,E,r)}}function Tr(s,e){return s.replace(Ar,(n,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const Ar=/\{\$([^}]+)}/g;function Ae(s,e){if(s===e)return!0;const n=Object.keys(s),r=Object.keys(e);for(const a of n){if(!r.includes(a))return!1;const c=s[a],d=e[a];if(Is(c)&&Is(d)){if(!Ae(c,d))return!1}else if(c!==d)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function Is(s){return s!==null&&typeof s=="object"}class ie{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bt="[DEFAULT]";/**
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
 */class Cr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Br(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});r.resolve(c)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,d]of this.instancesDeferred.entries()){const E=this.normalizeInstanceIdentifier(c);r===E&&d.resolve(a)}return a}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(r)??new Set;a.add(e),this.onInitCallbacks.set(r,a);const c=this.instances.get(r);return c&&e(c,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dr(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dr(s){return s===bt?void 0:s}function Br(s){return s.instantiationMode==="EAGER"}/**
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
 */class Lr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(N||(N={}));const Rr={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Pr=N.INFO,Nr={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Mr=(s,e,...n)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),a=Nr[e];if(a)console[a](`[${r}]  ${s.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ii{constructor(e){this.name=e,this._logLevel=Pr,this._logHandler=Mr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const kr=(s,e)=>e.some(n=>s instanceof n);let bs,Ts;function xr(){return bs||(bs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Or(){return Ts||(Ts=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ri=new WeakMap,ln=new WeakMap,oi=new WeakMap,nn=new WeakMap,mn=new WeakMap;function $r(s){const e=new Promise((n,r)=>{const a=()=>{s.removeEventListener("success",c),s.removeEventListener("error",d)},c=()=>{n(mt(s.result)),a()},d=()=>{r(s.error),a()};s.addEventListener("success",c),s.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&ri.set(n,s)}).catch(()=>{}),mn.set(e,s),e}function jr(s){if(ln.has(s))return;const e=new Promise((n,r)=>{const a=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",d),s.removeEventListener("abort",d)},c=()=>{n(),a()},d=()=>{r(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",c),s.addEventListener("error",d),s.addEventListener("abort",d)});ln.set(s,e)}let un={get(s,e,n){if(s instanceof IDBTransaction){if(e==="done")return ln.get(s);if(e==="objectStoreNames")return s.objectStoreNames||oi.get(s);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(s[e])},set(s,e,n){return s[e]=n,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Fr(s){un=s(un)}function Vr(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=s.call(sn(this),e,...n);return oi.set(r,e.sort?e.sort():[e]),mt(r)}:Or().includes(s)?function(...e){return s.apply(sn(this),e),mt(ri.get(this))}:function(...e){return mt(s.apply(sn(this),e))}}function Ur(s){return typeof s=="function"?Vr(s):(s instanceof IDBTransaction&&jr(s),kr(s,xr())?new Proxy(s,un):s)}function mt(s){if(s instanceof IDBRequest)return $r(s);if(nn.has(s))return nn.get(s);const e=Ur(s);return e!==s&&(nn.set(s,e),mn.set(e,s)),e}const sn=s=>mn.get(s);function Hr(s,e,{blocked:n,upgrade:r,blocking:a,terminated:c}={}){const d=indexedDB.open(s,e),E=mt(d);return r&&d.addEventListener("upgradeneeded",_=>{r(mt(d.result),_.oldVersion,_.newVersion,mt(d.transaction),_)}),n&&d.addEventListener("blocked",_=>n(_.oldVersion,_.newVersion,_)),E.then(_=>{c&&_.addEventListener("close",()=>c()),a&&_.addEventListener("versionchange",I=>a(I.oldVersion,I.newVersion,I))}).catch(()=>{}),E}const zr=["get","getKey","getAll","getAllKeys","count"],qr=["put","add","delete","clear"],rn=new Map;function As(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(rn.get(e))return rn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,a=qr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||zr.includes(n)))return;const c=async function(d,...E){const _=this.transaction(d,a?"readwrite":"readonly");let I=_.store;return r&&(I=I.index(E.shift())),(await Promise.all([I[n](...E),a&&_.done]))[0]};return rn.set(e,c),c}Fr(s=>({...s,get:(e,n,r)=>As(e,n)||s.get(e,n,r),has:(e,n)=>!!As(e,n)||s.has(e,n)}));/**
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
 */class Gr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wr(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dn="@firebase/app",Cs="0.14.3";/**
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
 */const at=new ii("@firebase/app"),Kr="@firebase/app-compat",Jr="@firebase/analytics-compat",Xr="@firebase/analytics",Yr="@firebase/app-check-compat",Qr="@firebase/app-check",Zr="@firebase/auth",to="@firebase/auth-compat",eo="@firebase/database",no="@firebase/data-connect",so="@firebase/database-compat",io="@firebase/functions",ro="@firebase/functions-compat",oo="@firebase/installations",ao="@firebase/installations-compat",ho="@firebase/messaging",co="@firebase/messaging-compat",lo="@firebase/performance",uo="@firebase/performance-compat",po="@firebase/remote-config",fo="@firebase/remote-config-compat",go="@firebase/storage",mo="@firebase/storage-compat",yo="@firebase/firestore",vo="@firebase/ai",wo="@firebase/firestore-compat",Eo="firebase",_o="12.3.0";/**
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
 */const pn="[DEFAULT]",So={[dn]:"fire-core",[Kr]:"fire-core-compat",[Xr]:"fire-analytics",[Jr]:"fire-analytics-compat",[Qr]:"fire-app-check",[Yr]:"fire-app-check-compat",[Zr]:"fire-auth",[to]:"fire-auth-compat",[eo]:"fire-rtdb",[no]:"fire-data-connect",[so]:"fire-rtdb-compat",[io]:"fire-fn",[ro]:"fire-fn-compat",[oo]:"fire-iid",[ao]:"fire-iid-compat",[ho]:"fire-fcm",[co]:"fire-fcm-compat",[lo]:"fire-perf",[uo]:"fire-perf-compat",[po]:"fire-rc",[fo]:"fire-rc-compat",[go]:"fire-gcs",[mo]:"fire-gcs-compat",[yo]:"fire-fst",[wo]:"fire-fst-compat",[vo]:"fire-vertex","fire-js":"fire-js",[Eo]:"fire-js-all"};/**
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
 */const Ce=new Map,Io=new Map,fn=new Map;function Ds(s,e){try{s.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,n)}}function De(s){const e=s.name;if(fn.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;fn.set(e,s);for(const n of Ce.values())Ds(n,s);for(const n of Io.values())Ds(n,s);return!0}function bo(s,e){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(e)}function To(s){return s==null?!1:s.settings!==void 0}/**
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
 */const Ao={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new si("app","Firebase",Ao);/**
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
 */class Co{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const Do=_o;function ai(s,e={}){let n=s;typeof e!="object"&&(e={name:e});const r={name:pn,automaticDataCollectionEnabled:!0,...e},a=r.name;if(typeof a!="string"||!a)throw yt.create("bad-app-name",{appName:String(a)});if(n||(n=ei()),!n)throw yt.create("no-options");const c=Ce.get(a);if(c){if(Ae(n,c.options)&&Ae(r,c.config))return c;throw yt.create("duplicate-app",{appName:a})}const d=new Lr(a);for(const _ of fn.values())d.addComponent(_);const E=new Co(n,r,d);return Ce.set(a,E),E}function Bo(s=pn){const e=Ce.get(s);if(!e&&s===pn&&ei())return ai();if(!e)throw yt.create("no-app",{appName:s});return e}function Mt(s,e,n){let r=So[s]??s;n&&(r+=`-${n}`);const a=r.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${r}" with version "${e}":`];a&&d.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(d.join(" "));return}De(new ie(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Lo="firebase-heartbeat-database",Ro=1,re="firebase-heartbeat-store";let on=null;function hi(){return on||(on=Hr(Lo,Ro,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(re)}catch(n){console.warn(n)}}}}).catch(s=>{throw yt.create("idb-open",{originalErrorMessage:s.message})})),on}async function Po(s){try{const n=(await hi()).transaction(re),r=await n.objectStore(re).get(ci(s));return await n.done,r}catch(e){if(e instanceof Ot)at.warn(e.message);else{const n=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function Bs(s,e){try{const r=(await hi()).transaction(re,"readwrite");await r.objectStore(re).put(e,ci(s)),await r.done}catch(n){if(n instanceof Ot)at.warn(n.message);else{const r=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(r.message)}}}function ci(s){return`${s.name}!${s.options.appId}`}/**
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
 */const No=1024,Mo=30;class ko{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Oo(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Ls();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>Mo){const d=$o(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ls(),{heartbeatsToSend:r,unsentEntries:a}=xo(this._heartbeatsCache.heartbeats),c=Te(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return at.warn(n),""}}}function Ls(){return new Date().toISOString().substring(0,10)}function xo(s,e=No){const n=[];let r=s.slice();for(const a of s){const c=n.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),Rs(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Rs(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sr()?Ir().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Po(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rs(s){return Te(JSON.stringify({version:2,heartbeats:s})).length}function $o(s){if(s.length===0)return-1;let e=0,n=s[0].date;for(let r=1;r<s.length;r++)s[r].date<n&&(n=s[r].date,e=r);return e}/**
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
 */function jo(s){De(new ie("platform-logger",e=>new Gr(e),"PRIVATE")),De(new ie("heartbeat",e=>new ko(e),"PRIVATE")),Mt(dn,Cs,s),Mt(dn,Cs,"esm2020"),Mt("fire-js","")}jo("");var Fo="firebase",Vo="12.3.0";/**
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
 */Mt(Fo,Vo,"app");var Ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yn;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,l){function p(){}p.prototype=l.prototype,g.F=l.prototype,g.prototype=new p,g.prototype.constructor=g,g.D=function(m,f,v){for(var u=Array(arguments.length-2),W=2;W<arguments.length;W++)u[W-2]=arguments[W];return l.prototype[f].apply(m,u)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(g,l,p){p||(p=0);const m=Array(16);if(typeof l=="string")for(var f=0;f<16;++f)m[f]=l.charCodeAt(p++)|l.charCodeAt(p++)<<8|l.charCodeAt(p++)<<16|l.charCodeAt(p++)<<24;else for(f=0;f<16;++f)m[f]=l[p++]|l[p++]<<8|l[p++]<<16|l[p++]<<24;l=g.g[0],p=g.g[1],f=g.g[2];let v=g.g[3],u;u=l+(v^p&(f^v))+m[0]+3614090360&4294967295,l=p+(u<<7&4294967295|u>>>25),u=v+(f^l&(p^f))+m[1]+3905402710&4294967295,v=l+(u<<12&4294967295|u>>>20),u=f+(p^v&(l^p))+m[2]+606105819&4294967295,f=v+(u<<17&4294967295|u>>>15),u=p+(l^f&(v^l))+m[3]+3250441966&4294967295,p=f+(u<<22&4294967295|u>>>10),u=l+(v^p&(f^v))+m[4]+4118548399&4294967295,l=p+(u<<7&4294967295|u>>>25),u=v+(f^l&(p^f))+m[5]+1200080426&4294967295,v=l+(u<<12&4294967295|u>>>20),u=f+(p^v&(l^p))+m[6]+2821735955&4294967295,f=v+(u<<17&4294967295|u>>>15),u=p+(l^f&(v^l))+m[7]+4249261313&4294967295,p=f+(u<<22&4294967295|u>>>10),u=l+(v^p&(f^v))+m[8]+1770035416&4294967295,l=p+(u<<7&4294967295|u>>>25),u=v+(f^l&(p^f))+m[9]+2336552879&4294967295,v=l+(u<<12&4294967295|u>>>20),u=f+(p^v&(l^p))+m[10]+4294925233&4294967295,f=v+(u<<17&4294967295|u>>>15),u=p+(l^f&(v^l))+m[11]+2304563134&4294967295,p=f+(u<<22&4294967295|u>>>10),u=l+(v^p&(f^v))+m[12]+1804603682&4294967295,l=p+(u<<7&4294967295|u>>>25),u=v+(f^l&(p^f))+m[13]+4254626195&4294967295,v=l+(u<<12&4294967295|u>>>20),u=f+(p^v&(l^p))+m[14]+2792965006&4294967295,f=v+(u<<17&4294967295|u>>>15),u=p+(l^f&(v^l))+m[15]+1236535329&4294967295,p=f+(u<<22&4294967295|u>>>10),u=l+(f^v&(p^f))+m[1]+4129170786&4294967295,l=p+(u<<5&4294967295|u>>>27),u=v+(p^f&(l^p))+m[6]+3225465664&4294967295,v=l+(u<<9&4294967295|u>>>23),u=f+(l^p&(v^l))+m[11]+643717713&4294967295,f=v+(u<<14&4294967295|u>>>18),u=p+(v^l&(f^v))+m[0]+3921069994&4294967295,p=f+(u<<20&4294967295|u>>>12),u=l+(f^v&(p^f))+m[5]+3593408605&4294967295,l=p+(u<<5&4294967295|u>>>27),u=v+(p^f&(l^p))+m[10]+38016083&4294967295,v=l+(u<<9&4294967295|u>>>23),u=f+(l^p&(v^l))+m[15]+3634488961&4294967295,f=v+(u<<14&4294967295|u>>>18),u=p+(v^l&(f^v))+m[4]+3889429448&4294967295,p=f+(u<<20&4294967295|u>>>12),u=l+(f^v&(p^f))+m[9]+568446438&4294967295,l=p+(u<<5&4294967295|u>>>27),u=v+(p^f&(l^p))+m[14]+3275163606&4294967295,v=l+(u<<9&4294967295|u>>>23),u=f+(l^p&(v^l))+m[3]+4107603335&4294967295,f=v+(u<<14&4294967295|u>>>18),u=p+(v^l&(f^v))+m[8]+1163531501&4294967295,p=f+(u<<20&4294967295|u>>>12),u=l+(f^v&(p^f))+m[13]+2850285829&4294967295,l=p+(u<<5&4294967295|u>>>27),u=v+(p^f&(l^p))+m[2]+4243563512&4294967295,v=l+(u<<9&4294967295|u>>>23),u=f+(l^p&(v^l))+m[7]+1735328473&4294967295,f=v+(u<<14&4294967295|u>>>18),u=p+(v^l&(f^v))+m[12]+2368359562&4294967295,p=f+(u<<20&4294967295|u>>>12),u=l+(p^f^v)+m[5]+4294588738&4294967295,l=p+(u<<4&4294967295|u>>>28),u=v+(l^p^f)+m[8]+2272392833&4294967295,v=l+(u<<11&4294967295|u>>>21),u=f+(v^l^p)+m[11]+1839030562&4294967295,f=v+(u<<16&4294967295|u>>>16),u=p+(f^v^l)+m[14]+4259657740&4294967295,p=f+(u<<23&4294967295|u>>>9),u=l+(p^f^v)+m[1]+2763975236&4294967295,l=p+(u<<4&4294967295|u>>>28),u=v+(l^p^f)+m[4]+1272893353&4294967295,v=l+(u<<11&4294967295|u>>>21),u=f+(v^l^p)+m[7]+4139469664&4294967295,f=v+(u<<16&4294967295|u>>>16),u=p+(f^v^l)+m[10]+3200236656&4294967295,p=f+(u<<23&4294967295|u>>>9),u=l+(p^f^v)+m[13]+681279174&4294967295,l=p+(u<<4&4294967295|u>>>28),u=v+(l^p^f)+m[0]+3936430074&4294967295,v=l+(u<<11&4294967295|u>>>21),u=f+(v^l^p)+m[3]+3572445317&4294967295,f=v+(u<<16&4294967295|u>>>16),u=p+(f^v^l)+m[6]+76029189&4294967295,p=f+(u<<23&4294967295|u>>>9),u=l+(p^f^v)+m[9]+3654602809&4294967295,l=p+(u<<4&4294967295|u>>>28),u=v+(l^p^f)+m[12]+3873151461&4294967295,v=l+(u<<11&4294967295|u>>>21),u=f+(v^l^p)+m[15]+530742520&4294967295,f=v+(u<<16&4294967295|u>>>16),u=p+(f^v^l)+m[2]+3299628645&4294967295,p=f+(u<<23&4294967295|u>>>9),u=l+(f^(p|~v))+m[0]+4096336452&4294967295,l=p+(u<<6&4294967295|u>>>26),u=v+(p^(l|~f))+m[7]+1126891415&4294967295,v=l+(u<<10&4294967295|u>>>22),u=f+(l^(v|~p))+m[14]+2878612391&4294967295,f=v+(u<<15&4294967295|u>>>17),u=p+(v^(f|~l))+m[5]+4237533241&4294967295,p=f+(u<<21&4294967295|u>>>11),u=l+(f^(p|~v))+m[12]+1700485571&4294967295,l=p+(u<<6&4294967295|u>>>26),u=v+(p^(l|~f))+m[3]+2399980690&4294967295,v=l+(u<<10&4294967295|u>>>22),u=f+(l^(v|~p))+m[10]+4293915773&4294967295,f=v+(u<<15&4294967295|u>>>17),u=p+(v^(f|~l))+m[1]+2240044497&4294967295,p=f+(u<<21&4294967295|u>>>11),u=l+(f^(p|~v))+m[8]+1873313359&4294967295,l=p+(u<<6&4294967295|u>>>26),u=v+(p^(l|~f))+m[15]+4264355552&4294967295,v=l+(u<<10&4294967295|u>>>22),u=f+(l^(v|~p))+m[6]+2734768916&4294967295,f=v+(u<<15&4294967295|u>>>17),u=p+(v^(f|~l))+m[13]+1309151649&4294967295,p=f+(u<<21&4294967295|u>>>11),u=l+(f^(p|~v))+m[4]+4149444226&4294967295,l=p+(u<<6&4294967295|u>>>26),u=v+(p^(l|~f))+m[11]+3174756917&4294967295,v=l+(u<<10&4294967295|u>>>22),u=f+(l^(v|~p))+m[2]+718787259&4294967295,f=v+(u<<15&4294967295|u>>>17),u=p+(v^(f|~l))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+l&4294967295,g.g[1]=g.g[1]+(f+(u<<21&4294967295|u>>>11))&4294967295,g.g[2]=g.g[2]+f&4294967295,g.g[3]=g.g[3]+v&4294967295}r.prototype.v=function(g,l){l===void 0&&(l=g.length);const p=l-this.blockSize,m=this.C;let f=this.h,v=0;for(;v<l;){if(f==0)for(;v<=p;)a(this,g,v),v+=this.blockSize;if(typeof g=="string"){for(;v<l;)if(m[f++]=g.charCodeAt(v++),f==this.blockSize){a(this,m),f=0;break}}else for(;v<l;)if(m[f++]=g[v++],f==this.blockSize){a(this,m),f=0;break}}this.h=f,this.o+=l},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var l=1;l<g.length-8;++l)g[l]=0;l=this.o*8;for(var p=g.length-8;p<g.length;++p)g[p]=l&255,l/=256;for(this.v(g),g=Array(16),l=0,p=0;p<4;++p)for(let m=0;m<32;m+=8)g[l++]=this.g[p]>>>m&255;return g};function c(g,l){var p=E;return Object.prototype.hasOwnProperty.call(p,g)?p[g]:p[g]=l(g)}function d(g,l){this.h=l;const p=[];let m=!0;for(let f=g.length-1;f>=0;f--){const v=g[f]|0;m&&v==l||(p[f]=v,m=!1)}this.g=p}var E={};function _(g){return-128<=g&&g<128?c(g,function(l){return new d([l|0],l<0?-1:0)}):new d([g|0],g<0?-1:0)}function I(g){if(isNaN(g)||!isFinite(g))return T;if(g<0)return $(I(-g));const l=[];let p=1;for(let m=0;g>=p;m++)l[m]=g/p|0,p*=4294967296;return new d(l,0)}function A(g,l){if(g.length==0)throw Error("number format error: empty string");if(l=l||10,l<2||36<l)throw Error("radix out of range: "+l);if(g.charAt(0)=="-")return $(A(g.substring(1),l));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=I(Math.pow(l,8));let m=T;for(let v=0;v<g.length;v+=8){var f=Math.min(8,g.length-v);const u=parseInt(g.substring(v,v+f),l);f<8?(f=I(Math.pow(l,f)),m=m.j(f).add(I(u))):(m=m.j(p),m=m.add(I(u)))}return m}var T=_(0),b=_(1),M=_(16777216);s=d.prototype,s.m=function(){if(O(this))return-$(this).m();let g=0,l=1;for(let p=0;p<this.g.length;p++){const m=this.i(p);g+=(m>=0?m:4294967296+m)*l,l*=4294967296}return g},s.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(P(this))return"0";if(O(this))return"-"+$(this).toString(g);const l=I(Math.pow(g,6));var p=this;let m="";for(;;){const f=ht(p,l).g;p=rt(p,f.j(l));let v=((p.g.length>0?p.g[0]:p.h)>>>0).toString(g);if(p=f,P(p))return v+m;for(;v.length<6;)v="0"+v;m=v+m}},s.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function P(g){if(g.h!=0)return!1;for(let l=0;l<g.g.length;l++)if(g.g[l]!=0)return!1;return!0}function O(g){return g.h==-1}s.l=function(g){return g=rt(this,g),O(g)?-1:P(g)?0:1};function $(g){const l=g.g.length,p=[];for(let m=0;m<l;m++)p[m]=~g.g[m];return new d(p,~g.h).add(b)}s.abs=function(){return O(this)?$(this):this},s.add=function(g){const l=Math.max(this.g.length,g.g.length),p=[];let m=0;for(let f=0;f<=l;f++){let v=m+(this.i(f)&65535)+(g.i(f)&65535),u=(v>>>16)+(this.i(f)>>>16)+(g.i(f)>>>16);m=u>>>16,v&=65535,u&=65535,p[f]=u<<16|v}return new d(p,p[p.length-1]&-2147483648?-1:0)};function rt(g,l){return g.add($(l))}s.j=function(g){if(P(this)||P(g))return T;if(O(this))return O(g)?$(this).j($(g)):$($(this).j(g));if(O(g))return $(this.j($(g)));if(this.l(M)<0&&g.l(M)<0)return I(this.m()*g.m());const l=this.g.length+g.g.length,p=[];for(var m=0;m<2*l;m++)p[m]=0;for(m=0;m<this.g.length;m++)for(let f=0;f<g.g.length;f++){const v=this.i(m)>>>16,u=this.i(m)&65535,W=g.i(f)>>>16,wt=g.i(f)&65535;p[2*m+2*f]+=u*wt,Y(p,2*m+2*f),p[2*m+2*f+1]+=v*wt,Y(p,2*m+2*f+1),p[2*m+2*f+1]+=u*W,Y(p,2*m+2*f+1),p[2*m+2*f+2]+=v*W,Y(p,2*m+2*f+2)}for(g=0;g<l;g++)p[g]=p[2*g+1]<<16|p[2*g];for(g=l;g<2*l;g++)p[g]=0;return new d(p,0)};function Y(g,l){for(;(g[l]&65535)!=g[l];)g[l+1]+=g[l]>>>16,g[l]&=65535,l++}function K(g,l){this.g=g,this.h=l}function ht(g,l){if(P(l))throw Error("division by zero");if(P(g))return new K(T,T);if(O(g))return l=ht($(g),l),new K($(l.g),$(l.h));if(O(l))return l=ht(g,$(l)),new K($(l.g),l.h);if(g.g.length>30){if(O(g)||O(l))throw Error("slowDivide_ only works with positive integers.");for(var p=b,m=l;m.l(g)<=0;)p=ct(p),m=ct(m);var f=J(p,1),v=J(m,1);for(m=J(m,2),p=J(p,2);!P(m);){var u=v.add(m);u.l(g)<=0&&(f=f.add(p),v=u),m=J(m,1),p=J(p,1)}return l=rt(g,f.j(l)),new K(f,l)}for(f=T;g.l(l)>=0;){for(p=Math.max(1,Math.floor(g.m()/l.m())),m=Math.ceil(Math.log(p)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),v=I(p),u=v.j(l);O(u)||u.l(g)>0;)p-=m,v=I(p),u=v.j(l);P(v)&&(v=b),f=f.add(v),g=rt(g,u)}return new K(f,g)}s.B=function(g){return ht(this,g).h},s.and=function(g){const l=Math.max(this.g.length,g.g.length),p=[];for(let m=0;m<l;m++)p[m]=this.i(m)&g.i(m);return new d(p,this.h&g.h)},s.or=function(g){const l=Math.max(this.g.length,g.g.length),p=[];for(let m=0;m<l;m++)p[m]=this.i(m)|g.i(m);return new d(p,this.h|g.h)},s.xor=function(g){const l=Math.max(this.g.length,g.g.length),p=[];for(let m=0;m<l;m++)p[m]=this.i(m)^g.i(m);return new d(p,this.h^g.h)};function ct(g){const l=g.g.length+1,p=[];for(let m=0;m<l;m++)p[m]=g.i(m)<<1|g.i(m-1)>>>31;return new d(p,g.h)}function J(g,l){const p=l>>5;l%=32;const m=g.g.length-p,f=[];for(let v=0;v<m;v++)f[v]=l>0?g.i(v+p)>>>l|g.i(v+p+1)<<32-l:g.i(v+p);return new d(f,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=I,d.fromString=A,yn=d}).apply(typeof Ps<"u"?Ps:typeof self<"u"?self:typeof window<"u"?window:{});var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Se=="object"&&Se];for(var i=0;i<t.length;++i){var o=t[i];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var r=n(this);function a(t,i){if(i)t:{var o=r;t=t.split(".");for(var h=0;h<t.length-1;h++){var y=t[h];if(!(y in o))break t;o=o[y]}t=t[t.length-1],h=o[t],i=i(h),i!=h&&i!=null&&e(o,t,{configurable:!0,writable:!0,value:i})}}a("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(t){return t||function(i){var o=[],h;for(h in i)Object.prototype.hasOwnProperty.call(i,h)&&o.push([h,i[h]]);return o}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function E(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function _(t,i,o){return t.call.apply(t.bind,arguments)}function I(t,i,o){return I=_,I.apply(null,arguments)}function A(t,i){var o=Array.prototype.slice.call(arguments,1);return function(){var h=o.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function T(t,i){function o(){}o.prototype=i.prototype,t.Z=i.prototype,t.prototype=new o,t.prototype.constructor=t,t.Ob=function(h,y,w){for(var S=Array(arguments.length-2),C=2;C<arguments.length;C++)S[C-2]=arguments[C];return i.prototype[y].apply(h,S)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function M(t){const i=t.length;if(i>0){const o=Array(i);for(let h=0;h<i;h++)o[h]=t[h];return o}return[]}function P(t,i){for(let h=1;h<arguments.length;h++){const y=arguments[h];var o=typeof y;if(o=o!="object"?o:y?Array.isArray(y)?"array":o:"null",o=="array"||o=="object"&&typeof y.length=="number"){o=t.length||0;const w=y.length||0;t.length=o+w;for(let S=0;S<w;S++)t[o+S]=y[S]}else t.push(y)}}class O{constructor(i,o){this.i=i,this.j=o,this.h=0,this.g=null}get(){let i;return this.h>0?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function $(t){d.setTimeout(()=>{throw t},0)}function rt(){var t=g;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class Y{constructor(){this.h=this.g=null}add(i,o){const h=K.get();h.set(i,o),this.h?this.h.next=h:this.g=h,this.h=h}}var K=new O(()=>new ht,t=>t.reset());class ht{constructor(){this.next=this.g=this.h=null}set(i,o){this.h=i,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,J=!1,g=new Y,l=()=>{const t=Promise.resolve(void 0);ct=()=>{t.then(p)}};function p(){for(var t;t=rt();){try{t.h.call(t.g)}catch(o){$(o)}var i=K;i.j(t),i.h<100&&(i.h++,t.next=i.g,i.g=t)}J=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function f(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}f.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};d.addEventListener("test",o,i),d.removeEventListener("test",o,i)}catch{}return t})();function u(t){return/^[\s\xa0]*$/.test(t)}function W(t,i){f.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,i)}T(W,f),W.prototype.init=function(t,i){const o=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget,i||(o=="mouseover"?i=t.fromElement:o=="mouseout"&&(i=t.toElement)),this.relatedTarget=i,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&W.Z.h.call(this)},W.prototype.h=function(){W.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wt="closure_listenable_"+(Math.random()*1e6|0),vi=0;function wi(t,i,o,h,y){this.listener=t,this.proxy=null,this.src=i,this.type=o,this.capture=!!h,this.ha=y,this.key=++vi,this.da=this.fa=!1}function ce(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function le(t,i,o){for(const h in t)i.call(o,t[h],h,t)}function Ei(t,i){for(const o in t)i.call(void 0,t[o],o,t)}function Sn(t){const i={};for(const o in t)i[o]=t[o];return i}const In="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bn(t,i){let o,h;for(let y=1;y<arguments.length;y++){h=arguments[y];for(o in h)t[o]=h[o];for(let w=0;w<In.length;w++)o=In[w],Object.prototype.hasOwnProperty.call(h,o)&&(t[o]=h[o])}}function ue(t){this.src=t,this.g={},this.h=0}ue.prototype.add=function(t,i,o,h,y){const w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);const S=Re(t,i,h,y);return S>-1?(i=t[S],o||(i.fa=!1)):(i=new wi(i,this.src,w,!!h,y),i.fa=o,t.push(i)),i};function Le(t,i){const o=i.type;if(o in t.g){var h=t.g[o],y=Array.prototype.indexOf.call(h,i,void 0),w;(w=y>=0)&&Array.prototype.splice.call(h,y,1),w&&(ce(i),t.g[o].length==0&&(delete t.g[o],t.h--))}}function Re(t,i,o,h){for(let y=0;y<t.length;++y){const w=t[y];if(!w.da&&w.listener==i&&w.capture==!!o&&w.ha==h)return y}return-1}var Pe="closure_lm_"+(Math.random()*1e6|0),Ne={};function Tn(t,i,o,h,y){if(Array.isArray(i)){for(let w=0;w<i.length;w++)Tn(t,i[w],o,h,y);return null}return o=Dn(o),t&&t[wt]?t.J(i,o,E(h)?!!h.capture:!1,y):_i(t,i,o,!1,h,y)}function _i(t,i,o,h,y,w){if(!i)throw Error("Invalid event type");const S=E(y)?!!y.capture:!!y;let C=ke(t);if(C||(t[Pe]=C=new ue(t)),o=C.add(i,o,h,S,w),o.proxy)return o;if(h=Si(),o.proxy=h,h.src=t,h.listener=o,t.addEventListener)v||(y=S),y===void 0&&(y=!1),t.addEventListener(i.toString(),h,y);else if(t.attachEvent)t.attachEvent(Cn(i.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Si(){function t(o){return i.call(t.src,t.listener,o)}const i=Ii;return t}function An(t,i,o,h,y){if(Array.isArray(i))for(var w=0;w<i.length;w++)An(t,i[w],o,h,y);else h=E(h)?!!h.capture:!!h,o=Dn(o),t&&t[wt]?(t=t.i,w=String(i).toString(),w in t.g&&(i=t.g[w],o=Re(i,o,h,y),o>-1&&(ce(i[o]),Array.prototype.splice.call(i,o,1),i.length==0&&(delete t.g[w],t.h--)))):t&&(t=ke(t))&&(i=t.g[i.toString()],t=-1,i&&(t=Re(i,o,h,y)),(o=t>-1?i[t]:null)&&Me(o))}function Me(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[wt])Le(i.i,t);else{var o=t.type,h=t.proxy;i.removeEventListener?i.removeEventListener(o,h,t.capture):i.detachEvent?i.detachEvent(Cn(o),h):i.addListener&&i.removeListener&&i.removeListener(h),(o=ke(i))?(Le(o,t),o.h==0&&(o.src=null,i[Pe]=null)):ce(t)}}}function Cn(t){return t in Ne?Ne[t]:Ne[t]="on"+t}function Ii(t,i){if(t.da)t=!0;else{i=new W(i,this);const o=t.listener,h=t.ha||t.src;t.fa&&Me(t),t=o.call(h,i)}return t}function ke(t){return t=t[Pe],t instanceof ue?t:null}var xe="__closure_events_fn_"+(Math.random()*1e9>>>0);function Dn(t){return typeof t=="function"?t:(t[xe]||(t[xe]=function(i){return t.handleEvent(i)}),t[xe])}function H(){m.call(this),this.i=new ue(this),this.M=this,this.G=null}T(H,m),H.prototype[wt]=!0,H.prototype.removeEventListener=function(t,i,o,h){An(this,t,i,o,h)};function z(t,i){var o,h=t.G;if(h)for(o=[];h;h=h.G)o.push(h);if(t=t.M,h=i.type||i,typeof i=="string")i=new f(i,t);else if(i instanceof f)i.target=i.target||t;else{var y=i;i=new f(h,t),bn(i,y)}y=!0;let w,S;if(o)for(S=o.length-1;S>=0;S--)w=i.g=o[S],y=de(w,h,!0,i)&&y;if(w=i.g=t,y=de(w,h,!0,i)&&y,y=de(w,h,!1,i)&&y,o)for(S=0;S<o.length;S++)w=i.g=o[S],y=de(w,h,!1,i)&&y}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var t=this.i;for(const i in t.g){const o=t.g[i];for(let h=0;h<o.length;h++)ce(o[h]);delete t.g[i],t.h--}}this.G=null},H.prototype.J=function(t,i,o,h){return this.i.add(String(t),i,!1,o,h)},H.prototype.K=function(t,i,o,h){return this.i.add(String(t),i,!0,o,h)};function de(t,i,o,h){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();let y=!0;for(let w=0;w<i.length;++w){const S=i[w];if(S&&!S.da&&S.capture==o){const C=S.listener,V=S.ha||S.src;S.fa&&Le(t.i,S),y=C.call(V,h)!==!1&&y}}return y&&!h.defaultPrevented}function bi(t,i){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=I(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(i)>2147483647?-1:d.setTimeout(t,i||0)}function Bn(t){t.g=bi(()=>{t.g=null,t.i&&(t.i=!1,Bn(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class Ti extends m{constructor(i,o){super(),this.m=i,this.l=o,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:Bn(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){m.call(this),this.h=t,this.g={}}T($t,m);var Ln=[];function Rn(t){le(t.g,function(i,o){this.g.hasOwnProperty(o)&&Me(i)},t),t.g={}}$t.prototype.N=function(){$t.Z.N.call(this),Rn(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oe=d.JSON.stringify,Ai=d.JSON.parse,Ci=class{stringify(t){return d.JSON.stringify(t,void 0)}parse(t){return d.JSON.parse(t,void 0)}};function Pn(){}function Di(){}var jt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $e(){f.call(this,"d")}T($e,f);function je(){f.call(this,"c")}T(je,f);var Lt={},Nn=null;function Fe(){return Nn=Nn||new H}Lt.Ia="serverreachability";function Mn(t){f.call(this,Lt.Ia,t)}T(Mn,f);function Ft(t){const i=Fe();z(i,new Mn(i))}Lt.STAT_EVENT="statevent";function kn(t,i){f.call(this,Lt.STAT_EVENT,t),this.stat=i}T(kn,f);function q(t){const i=Fe();z(i,new kn(i,t))}Lt.Ja="timingevent";function xn(t,i){f.call(this,Lt.Ja,t),this.size=i}T(xn,f);function Vt(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){t()},i)}function Ut(){this.g=!0}Ut.prototype.ua=function(){this.g=!1};function Bi(t,i,o,h,y,w){t.info(function(){if(t.g)if(w){var S="",C=w.split("&");for(let k=0;k<C.length;k++){var V=C[k].split("=");if(V.length>1){const U=V[0];V=V[1];const et=U.split("_");S=et.length>=2&&et[1]=="type"?S+(U+"="+V+"&"):S+(U+"=redacted&")}}}else S=null;else S=w;return"XMLHTTP REQ ("+h+") [attempt "+y+"]: "+i+`
`+o+`
`+S})}function Li(t,i,o,h,y,w,S){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+y+"]: "+i+`
`+o+`
`+w+" "+S})}function Rt(t,i,o,h){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+Pi(t,o)+(h?" "+h:"")})}function Ri(t,i){t.info(function(){return"TIMEOUT: "+i})}Ut.prototype.info=function(){};function Pi(t,i){if(!t.g)return i;if(!i)return null;try{const w=JSON.parse(i);if(w){for(t=0;t<w.length;t++)if(Array.isArray(w[t])){var o=w[t];if(!(o.length<2)){var h=o[1];if(Array.isArray(h)&&!(h.length<1)){var y=h[0];if(y!="noop"&&y!="stop"&&y!="close")for(let S=1;S<h.length;S++)h[S]=""}}}}return Oe(w)}catch{return i}}var Ve={NO_ERROR:0,TIMEOUT:8},Ni={},On;function Ue(){}T(Ue,Pn),Ue.prototype.g=function(){return new XMLHttpRequest},On=new Ue;function Ht(t){return encodeURIComponent(String(t))}function Mi(t){var i=1;t=t.split(":");const o=[];for(;i>0&&t.length;)o.push(t.shift()),i--;return t.length&&o.push(t.join(":")),o}function lt(t,i,o,h){this.j=t,this.i=i,this.l=o,this.S=h||1,this.V=new $t(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $n}function $n(){this.i=null,this.g="",this.h=!1}var jn={},He={};function ze(t,i,o){t.M=1,t.A=fe(tt(i)),t.u=o,t.R=!0,Fn(t,null)}function Fn(t,i){t.F=Date.now(),pe(t),t.B=tt(t.A);var o=t.B,h=t.S;Array.isArray(h)||(h=[String(h)]),Zn(o.i,"t",h),t.C=0,o=t.j.L,t.h=new $n,t.g=ys(t.j,o?i:null,!t.u),t.P>0&&(t.O=new Ti(I(t.Y,t,t.g),t.P)),i=t.V,o=t.g,h=t.ba;var y="readystatechange";Array.isArray(y)||(y&&(Ln[0]=y.toString()),y=Ln);for(let w=0;w<y.length;w++){const S=Tn(o,y[w],h||i.handleEvent,!1,i.h||i);if(!S)break;i.g[S.key]=S}i=t.J?Sn(t.J):{},t.u?(t.v||(t.v="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,i)):(t.v="GET",t.g.ea(t.B,t.v,null,i)),Ft(),Bi(t.i,t.v,t.B,t.l,t.S,t.u)}lt.prototype.ba=function(t){t=t.target;const i=this.O;i&&pt(t)==3?i.j():this.Y(t)},lt.prototype.Y=function(t){try{if(t==this.g)t:{const C=pt(this.g),V=this.g.ya(),k=this.g.ca();if(!(C<3)&&(C!=3||this.g&&(this.h.h||this.g.la()||os(this.g)))){this.K||C!=4||V==7||(V==8||k<=0?Ft(3):Ft(2)),qe(this);var i=this.g.ca();this.X=i;var o=ki(this);if(this.o=i==200,Li(this.i,this.v,this.B,this.l,this.S,C,i),this.o){if(this.U&&!this.L){e:{if(this.g){var h,y=this.g;if((h=y.g?y.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!u(h)){var w=h;break e}}w=null}if(t=w)Rt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,t);else{this.o=!1,this.m=3,q(12),Et(this),zt(this);break t}}if(this.R){t=!0;let U;for(;!this.K&&this.C<o.length;)if(U=xi(this,o),U==He){C==4&&(this.m=4,q(14),t=!1),Rt(this.i,this.l,null,"[Incomplete Response]");break}else if(U==jn){this.m=4,q(15),Rt(this.i,this.l,o,"[Invalid Chunk]"),t=!1;break}else Rt(this.i,this.l,U,null),Ge(this,U);if(Vn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),C!=4||o.length!=0||this.h.h||(this.m=1,q(16),t=!1),this.o=this.o&&t,!t)Rt(this.i,this.l,o,"[Invalid Chunked Response]"),Et(this),zt(this);else if(o.length>0&&!this.W){this.W=!0;var S=this.j;S.g==this&&S.aa&&!S.P&&(S.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tn(S),S.P=!0,q(11))}}else Rt(this.i,this.l,o,null),Ge(this,o);C==4&&Et(this),this.o&&!this.K&&(C==4?ps(this.j,this):(this.o=!1,pe(this)))}else Xi(this.g),i==400&&o.indexOf("Unknown SID")>0?(this.m=3,q(12)):(this.m=0,q(13)),Et(this),zt(this)}}}catch{}finally{}};function ki(t){if(!Vn(t))return t.g.la();const i=os(t.g);if(i==="")return"";let o="";const h=i.length,y=pt(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return Et(t),zt(t),"";t.h.i=new d.TextDecoder}for(let w=0;w<h;w++)t.h.h=!0,o+=t.h.i.decode(i[w],{stream:!(y&&w==h-1)});return i.length=0,t.h.g+=o,t.C=0,t.h.g}function Vn(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function xi(t,i){var o=t.C,h=i.indexOf(`
`,o);return h==-1?He:(o=Number(i.substring(o,h)),isNaN(o)?jn:(h+=1,h+o>i.length?He:(i=i.slice(h,h+o),t.C=h+o,i)))}lt.prototype.cancel=function(){this.K=!0,Et(this)};function pe(t){t.T=Date.now()+t.H,Un(t,t.H)}function Un(t,i){if(t.D!=null)throw Error("WatchDog timer not null");t.D=Vt(I(t.aa,t),i)}function qe(t){t.D&&(d.clearTimeout(t.D),t.D=null)}lt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Ri(this.i,this.B),this.M!=2&&(Ft(),q(17)),Et(this),this.m=2,zt(this)):Un(this,this.T-t)};function zt(t){t.j.I==0||t.K||ps(t.j,t)}function Et(t){qe(t);var i=t.O;i&&typeof i.dispose=="function"&&i.dispose(),t.O=null,Rn(t.V),t.g&&(i=t.g,t.g=null,i.abort(),i.dispose())}function Ge(t,i){try{var o=t.j;if(o.I!=0&&(o.g==t||We(o.h,t))){if(!t.L&&We(o.h,t)&&o.I==3){try{var h=o.Ba.g.parse(i)}catch{h=null}if(Array.isArray(h)&&h.length==3){var y=h;if(y[0]==0){t:if(!o.v){if(o.g)if(o.g.F+3e3<t.F)we(o),ye(o);else break t;Ze(o),q(18)}}else o.xa=y[1],0<o.xa-o.K&&y[2]<37500&&o.F&&o.A==0&&!o.C&&(o.C=Vt(I(o.Va,o),6e3));qn(o.h)<=1&&o.ta&&(o.ta=void 0)}else St(o,11)}else if((t.L||o.g==t)&&we(o),!u(i))for(y=o.Ba.g.parse(i),i=0;i<y.length;i++){let k=y[i];const U=k[0];if(!(U<=o.K))if(o.K=U,k=k[1],o.I==2)if(k[0]=="c"){o.M=k[1],o.ba=k[2];const et=k[3];et!=null&&(o.ka=et,o.j.info("VER="+o.ka));const It=k[4];It!=null&&(o.za=It,o.j.info("SVER="+o.za));const ft=k[5];ft!=null&&typeof ft=="number"&&ft>0&&(h=1.5*ft,o.O=h,o.j.info("backChannelRequestTimeoutMs_="+h)),h=o;const gt=t.g;if(gt){const Ee=gt.g?gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ee){var w=h.h;w.g||Ee.indexOf("spdy")==-1&&Ee.indexOf("quic")==-1&&Ee.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Ke(w,w.h),w.h=null))}if(h.G){const en=gt.g?gt.g.getResponseHeader("X-HTTP-Session-Id"):null;en&&(h.wa=en,x(h.J,h.G,en))}}o.I=3,o.l&&o.l.ra(),o.aa&&(o.T=Date.now()-t.F,o.j.info("Handshake RTT: "+o.T+"ms")),h=o;var S=t;if(h.na=ms(h,h.L?h.ba:null,h.W),S.L){Gn(h.h,S);var C=S,V=h.O;V&&(C.H=V),C.D&&(qe(C),pe(C)),h.g=S}else us(h);o.i.length>0&&ve(o)}else k[0]!="stop"&&k[0]!="close"||St(o,7);else o.I==3&&(k[0]=="stop"||k[0]=="close"?k[0]=="stop"?St(o,7):Qe(o):k[0]!="noop"&&o.l&&o.l.qa(k),o.A=0)}}Ft(4)}catch{}}var Oi=class{constructor(t,i){this.g=t,this.map=i}};function Hn(t){this.l=t||10,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qn(t){return t.h?1:t.g?t.g.size:0}function We(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function Ke(t,i){t.g?t.g.add(i):t.h=i}function Gn(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}Hn.prototype.cancel=function(){if(this.i=Wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wn(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const o of t.g.values())i=i.concat(o.G);return i}return M(t.i)}var Kn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $i(t,i){if(t){t=t.split("&");for(let o=0;o<t.length;o++){const h=t[o].indexOf("=");let y,w=null;h>=0?(y=t[o].substring(0,h),w=t[o].substring(h+1)):y=t[o],i(y,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ut(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let i;t instanceof ut?(this.l=t.l,qt(this,t.j),this.o=t.o,this.g=t.g,Gt(this,t.u),this.h=t.h,Je(this,ts(t.i)),this.m=t.m):t&&(i=String(t).match(Kn))?(this.l=!1,qt(this,i[1]||"",!0),this.o=Wt(i[2]||""),this.g=Wt(i[3]||"",!0),Gt(this,i[4]),this.h=Wt(i[5]||"",!0),Je(this,i[6]||"",!0),this.m=Wt(i[7]||"")):(this.l=!1,this.i=new Jt(null,this.l))}ut.prototype.toString=function(){const t=[];var i=this.j;i&&t.push(Kt(i,Jn,!0),":");var o=this.g;return(o||i=="file")&&(t.push("//"),(i=this.o)&&t.push(Kt(i,Jn,!0),"@"),t.push(Ht(o).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.u,o!=null&&t.push(":",String(o))),(o=this.h)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(Kt(o,o.charAt(0)=="/"?Vi:Fi,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",Kt(o,Hi)),t.join("")},ut.prototype.resolve=function(t){const i=tt(this);let o=!!t.j;o?qt(i,t.j):o=!!t.o,o?i.o=t.o:o=!!t.g,o?i.g=t.g:o=t.u!=null;var h=t.h;if(o)Gt(i,t.u);else if(o=!!t.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var y=i.h.lastIndexOf("/");y!=-1&&(h=i.h.slice(0,y+1)+h)}if(y=h,y==".."||y==".")h="";else if(y.indexOf("./")!=-1||y.indexOf("/.")!=-1){h=y.lastIndexOf("/",0)==0,y=y.split("/");const w=[];for(let S=0;S<y.length;){const C=y[S++];C=="."?h&&S==y.length&&w.push(""):C==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),h&&S==y.length&&w.push("")):(w.push(C),h=!0)}h=w.join("/")}else h=y}return o?i.h=h:o=t.i.toString()!=="",o?Je(i,ts(t.i)):o=!!t.m,o&&(i.m=t.m),i};function tt(t){return new ut(t)}function qt(t,i,o){t.j=o?Wt(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function Gt(t,i){if(i){if(i=Number(i),isNaN(i)||i<0)throw Error("Bad port number "+i);t.u=i}else t.u=null}function Je(t,i,o){i instanceof Jt?(t.i=i,zi(t.i,t.l)):(o||(i=Kt(i,Ui)),t.i=new Jt(i,t.l))}function x(t,i,o){t.i.set(i,o)}function fe(t){return x(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function Wt(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kt(t,i,o){return typeof t=="string"?(t=encodeURI(t).replace(i,ji),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ji(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jn=/[#\/\?@]/g,Fi=/[#\?:]/g,Vi=/[#\?]/g,Ui=/[#\?@]/g,Hi=/#/g;function Jt(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function _t(t){t.g||(t.g=new Map,t.h=0,t.i&&$i(t.i,function(i,o){t.add(decodeURIComponent(i.replace(/\+/g," ")),o)}))}s=Jt.prototype,s.add=function(t,i){_t(this),this.i=null,t=Pt(this,t);let o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(i),this.h+=1,this};function Xn(t,i){_t(t),i=Pt(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function Yn(t,i){return _t(t),i=Pt(t,i),t.g.has(i)}s.forEach=function(t,i){_t(this),this.g.forEach(function(o,h){o.forEach(function(y){t.call(i,y,h,this)},this)},this)};function Qn(t,i){_t(t);let o=[];if(typeof i=="string")Yn(t,i)&&(o=o.concat(t.g.get(Pt(t,i))));else for(t=Array.from(t.g.values()),i=0;i<t.length;i++)o=o.concat(t[i]);return o}s.set=function(t,i){return _t(this),this.i=null,t=Pt(this,t),Yn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},s.get=function(t,i){return t?(t=Qn(this,t),t.length>0?String(t[0]):i):i};function Zn(t,i,o){Xn(t,i),o.length>0&&(t.i=null,t.g.set(Pt(t,i),M(o)),t.h+=o.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(let h=0;h<i.length;h++){var o=i[h];const y=Ht(o);o=Qn(this,o);for(let w=0;w<o.length;w++){let S=y;o[w]!==""&&(S+="="+Ht(o[w])),t.push(S)}}return this.i=t.join("&")};function ts(t){const i=new Jt;return i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),i}function Pt(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function zi(t,i){i&&!t.j&&(_t(t),t.i=null,t.g.forEach(function(o,h){const y=h.toLowerCase();h!=y&&(Xn(this,h),Zn(this,y,o))},t)),t.j=i}function qi(t,i){const o=new Ut;if(d.Image){const h=new Image;h.onload=A(dt,o,"TestLoadImage: loaded",!0,i,h),h.onerror=A(dt,o,"TestLoadImage: error",!1,i,h),h.onabort=A(dt,o,"TestLoadImage: abort",!1,i,h),h.ontimeout=A(dt,o,"TestLoadImage: timeout",!1,i,h),d.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else i(!1)}function Gi(t,i){const o=new Ut,h=new AbortController,y=setTimeout(()=>{h.abort(),dt(o,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:h.signal}).then(w=>{clearTimeout(y),w.ok?dt(o,"TestPingServer: ok",!0,i):dt(o,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(y),dt(o,"TestPingServer: error",!1,i)})}function dt(t,i,o,h,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),h(o)}catch{}}function Wi(){this.g=new Ci}function Xe(t){this.i=t.Sb||null,this.h=t.ab||!1}T(Xe,Pn),Xe.prototype.g=function(){return new ge(this.i,this.h)};function ge(t,i){H.call(this),this.H=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(ge,H),s=ge.prototype,s.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=i,this.readyState=1,Yt(this)},s.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const i={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(i.body=t),(this.H||d).fetch(new Request(this.D,i)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xt(this)),this.readyState=0},s.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yt(this)),this.g&&(this.readyState=3,Yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;es(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function es(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}s.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.B.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?Xt(this):Yt(this),this.readyState==3&&es(this)}},s.Oa=function(t){this.g&&(this.response=this.responseText=t,Xt(this))},s.Na=function(t){this.g&&(this.response=t,Xt(this))},s.ga=function(){this.g&&Xt(this)};function Xt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Yt(t)}s.setRequestHeader=function(t,i){this.A.append(t,i)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var o=i.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=i.next();return t.join(`\r
`)};function Yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ge.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ns(t){let i="";return le(t,function(o,h){i+=h,i+=":",i+=o,i+=`\r
`}),i}function Ye(t,i,o){t:{for(h in o){var h=!1;break t}h=!0}h||(o=ns(o),typeof t=="string"?o!=null&&Ht(o):x(t,i,o))}function j(t){H.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(j,H);var Ki=/^https?$/i,Ji=["POST","PUT"];s=j.prototype,s.Fa=function(t){this.H=t},s.ea=function(t,i,o,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():On.g(),this.g.onreadystatechange=b(I(this.Ca,this));try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(w){ss(this,w);return}if(t=o||"",o=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var y in h)o.set(y,h[y]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())o.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(o.keys()).find(w=>w.toLowerCase()=="content-type"),y=d.FormData&&t instanceof d.FormData,!(Array.prototype.indexOf.call(Ji,i,void 0)>=0)||h||y||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of o)this.g.setRequestHeader(w,S);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(w){ss(this,w)}};function ss(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.o=5,is(t),me(t)}function is(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}s.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,z(this,"complete"),z(this,"abort"),me(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),me(this,!0)),j.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?rs(this):this.Xa())},s.Xa=function(){rs(this)};function rs(t){if(t.h&&typeof c<"u"){if(t.v&&pt(t)==4)setTimeout(t.Ca.bind(t),0);else if(z(t,"readystatechange"),pt(t)==4){t.h=!1;try{const w=t.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var o;if(!(o=i)){var h;if(h=w===0){let S=String(t.D).match(Kn)[1]||null;!S&&d.self&&d.self.location&&(S=d.self.location.protocol.slice(0,-1)),h=!Ki.test(S?S.toLowerCase():"")}o=h}if(o)z(t,"complete"),z(t,"success");else{t.o=6;try{var y=pt(t)>2?t.g.statusText:""}catch{y=""}t.l=y+" ["+t.ca()+"]",is(t)}}finally{me(t)}}}}function me(t,i){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const o=t.g;t.g=null,i||z(t,"ready");try{o.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function pt(t){return t.g?t.g.readyState:0}s.ca=function(){try{return pt(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),Ai(i)}};function os(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Xi(t){const i={};t=(t.g&&pt(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(u(t[h]))continue;var o=Mi(t[h]);const y=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const w=i[y]||[];i[y]=w,w.push(o)}Ei(i,function(h){return h.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qt(t,i,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||i}function as(t){this.za=0,this.i=[],this.j=new Ut,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qt("baseRetryDelayMs",5e3,t),this.Za=Qt("retryDelaySeedMs",1e4,t),this.Ta=Qt("forwardChannelMaxRetries",2,t),this.va=Qt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Hn(t&&t.concurrentRequestLimit),this.Ba=new Wi,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=as.prototype,s.ka=8,s.I=1,s.connect=function(t,i,o,h){q(0),this.W=t,this.H=i||{},o&&h!==void 0&&(this.H.OSID=o,this.H.OAID=h),this.F=this.X,this.J=ms(this,null,this.W),ve(this)};function Qe(t){if(hs(t),t.I==3){var i=t.V++,o=tt(t.J);if(x(o,"SID",t.M),x(o,"RID",i),x(o,"TYPE","terminate"),Zt(t,o),i=new lt(t,t.j,i),i.M=2,i.A=fe(tt(o)),o=!1,d.navigator&&d.navigator.sendBeacon)try{o=d.navigator.sendBeacon(i.A.toString(),"")}catch{}!o&&d.Image&&(new Image().src=i.A,o=!0),o||(i.g=ys(i.j,null),i.g.ea(i.A)),i.F=Date.now(),pe(i)}gs(t)}function ye(t){t.g&&(tn(t),t.g.cancel(),t.g=null)}function hs(t){ye(t),t.v&&(d.clearTimeout(t.v),t.v=null),we(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&d.clearTimeout(t.m),t.m=null)}function ve(t){if(!zn(t.h)&&!t.m){t.m=!0;var i=t.Ea;ct||l(),J||(ct(),J=!0),g.add(i,t),t.D=0}}function Yi(t,i){return qn(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=i.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=Vt(I(t.Ea,t,i),fs(t,t.D)),t.D++,!0)}s.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const y=new lt(this,this.j,t);let w=this.o;if(this.U&&(w?(w=Sn(w),bn(w,this.U)):w=this.U),this.u!==null||this.R||(y.J=w,w=null),this.S)t:{for(var i=0,o=0;o<this.i.length;o++){e:{var h=this.i[o];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(i+=h,i>4096){i=o;break t}if(i===4096||o===this.i.length-1){i=o+1;break t}}i=1e3}else i=1e3;i=ls(this,y,i),o=tt(this.J),x(o,"RID",t),x(o,"CVER",22),this.G&&x(o,"X-HTTP-Session-Id",this.G),Zt(this,o),w&&(this.R?i="headers="+Ht(ns(w))+"&"+i:this.u&&Ye(o,this.u,w)),Ke(this.h,y),this.Ra&&x(o,"TYPE","init"),this.S?(x(o,"$req",i),x(o,"SID","null"),y.U=!0,ze(y,o,null)):ze(y,o,i),this.I=2}}else this.I==3&&(t?cs(this,t):this.i.length==0||zn(this.h)||cs(this))};function cs(t,i){var o;i?o=i.l:o=t.V++;const h=tt(t.J);x(h,"SID",t.M),x(h,"RID",o),x(h,"AID",t.K),Zt(t,h),t.u&&t.o&&Ye(h,t.u,t.o),o=new lt(t,t.j,o,t.D+1),t.u===null&&(o.J=t.o),i&&(t.i=i.G.concat(t.i)),i=ls(t,o,1e3),o.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Ke(t.h,o),ze(o,h,i)}function Zt(t,i){t.H&&le(t.H,function(o,h){x(i,h,o)}),t.l&&le({},function(o,h){x(i,h,o)})}function ls(t,i,o){o=Math.min(t.i.length,o);const h=t.l?I(t.l.Ka,t.l,t):null;t:{var y=t.i;let C=-1;for(;;){const V=["count="+o];C==-1?o>0?(C=y[0].g,V.push("ofs="+C)):C=0:V.push("ofs="+C);let k=!0;for(let U=0;U<o;U++){var w=y[U].g;const et=y[U].map;if(w-=C,w<0)C=Math.max(0,y[U].g-100),k=!1;else try{w="req"+w+"_"||"";try{var S=et instanceof Map?et:Object.entries(et);for(const[It,ft]of S){let gt=ft;E(ft)&&(gt=Oe(ft)),V.push(w+It+"="+encodeURIComponent(gt))}}catch(It){throw V.push(w+"type="+encodeURIComponent("_badmap")),It}}catch{h&&h(et)}}if(k){S=V.join("&");break t}}S=void 0}return t=t.i.splice(0,o),i.G=t,S}function us(t){if(!t.g&&!t.v){t.Y=1;var i=t.Da;ct||l(),J||(ct(),J=!0),g.add(i,t),t.A=0}}function Ze(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=Vt(I(t.Da,t),fs(t,t.A)),t.A++,!0)}s.Da=function(){if(this.v=null,ds(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Vt(I(this.Wa,this),t)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,q(10),ye(this),ds(this))};function tn(t){t.B!=null&&(d.clearTimeout(t.B),t.B=null)}function ds(t){t.g=new lt(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var i=tt(t.na);x(i,"RID","rpc"),x(i,"SID",t.M),x(i,"AID",t.K),x(i,"CI",t.F?"0":"1"),!t.F&&t.ia&&x(i,"TO",t.ia),x(i,"TYPE","xmlhttp"),Zt(t,i),t.u&&t.o&&Ye(i,t.u,t.o),t.O&&(t.g.H=t.O);var o=t.g;t=t.ba,o.M=1,o.A=fe(tt(i)),o.u=null,o.R=!0,Fn(o,t)}s.Va=function(){this.C!=null&&(this.C=null,ye(this),Ze(this),q(19))};function we(t){t.C!=null&&(d.clearTimeout(t.C),t.C=null)}function ps(t,i){var o=null;if(t.g==i){we(t),tn(t),t.g=null;var h=2}else if(We(t.h,i))o=i.G,Gn(t.h,i),h=1;else return;if(t.I!=0){if(i.o)if(h==1){o=i.u?i.u.length:0,i=Date.now()-i.F;var y=t.D;h=Fe(),z(h,new xn(h,o)),ve(t)}else us(t);else if(y=i.m,y==3||y==0&&i.X>0||!(h==1&&Yi(t,i)||h==2&&Ze(t)))switch(o&&o.length>0&&(i=t.h,i.i=i.i.concat(o)),y){case 1:St(t,5);break;case 4:St(t,10);break;case 3:St(t,6);break;default:St(t,2)}}}function fs(t,i){let o=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(o*=2),o*i}function St(t,i){if(t.j.info("Error code "+i),i==2){var o=I(t.bb,t),h=t.Ua;const y=!h;h=new ut(h||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||qt(h,"https"),fe(h),y?qi(h.toString(),o):Gi(h.toString(),o)}else q(2);t.I=0,t.l&&t.l.pa(i),gs(t),hs(t)}s.bb=function(t){t?(this.j.info("Successfully pinged google.com"),q(2)):(this.j.info("Failed to ping google.com"),q(1))};function gs(t){if(t.I=0,t.ja=[],t.l){const i=Wn(t.h);(i.length!=0||t.i.length!=0)&&(P(t.ja,i),P(t.ja,t.i),t.h.i.length=0,M(t.i),t.i.length=0),t.l.oa()}}function ms(t,i,o){var h=o instanceof ut?tt(o):new ut(o);if(h.g!="")i&&(h.g=i+"."+h.g),Gt(h,h.u);else{var y=d.location;h=y.protocol,i=i?i+"."+y.hostname:y.hostname,y=+y.port;const w=new ut(null);h&&qt(w,h),i&&(w.g=i),y&&Gt(w,y),o&&(w.h=o),h=w}return o=t.G,i=t.wa,o&&i&&x(h,o,i),x(h,"VER",t.ka),Zt(t,h),h}function ys(t,i,o){if(i&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Aa&&!t.ma?new j(new Xe({ab:o})):new j(t.ma),i.Fa(t.L),i}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function vs(){}s=vs.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function X(t,i){H.call(this),this.g=new as(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.sa&&(t?t["X-WebChannel-Client-Profile"]=i.sa:t={"X-WebChannel-Client-Profile":i.sa}),this.g.U=t,(t=i&&i.Qb)&&!u(t)&&(this.g.u=t),this.A=i&&i.supportsCrossDomainXhr||!1,this.v=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!u(i)&&(this.g.G=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new Nt(this)}T(X,H),X.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},X.prototype.close=function(){Qe(this.g)},X.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.v&&(o={},o.__data__=Oe(t),t=o);i.i.push(new Oi(i.Ya++,t)),i.I==3&&ve(i)},X.prototype.N=function(){this.g.l=null,delete this.j,Qe(this.g),delete this.g,X.Z.N.call(this)};function ws(t){$e.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){t:{for(const o in i){t=o;break t}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}T(ws,$e);function Es(){je.call(this),this.status=1}T(Es,je);function Nt(t){this.g=t}T(Nt,vs),Nt.prototype.ra=function(){z(this.g,"a")},Nt.prototype.qa=function(t){z(this.g,new ws(t))},Nt.prototype.pa=function(t){z(this.g,new Es)},Nt.prototype.oa=function(){z(this.g,"b")},X.prototype.send=X.prototype.o,X.prototype.open=X.prototype.m,X.prototype.close=X.prototype.close,Ve.NO_ERROR=0,Ve.TIMEOUT=8,Ve.HTTP_ERROR=6,Ni.COMPLETE="complete",Di.EventType=jt,jt.OPEN="a",jt.CLOSE="b",jt.ERROR="c",jt.MESSAGE="d",H.prototype.listen=H.prototype.J,j.prototype.listenOnce=j.prototype.K,j.prototype.getLastError=j.prototype.Ha,j.prototype.getLastErrorCode=j.prototype.ya,j.prototype.getStatus=j.prototype.ca,j.prototype.getResponseJson=j.prototype.La,j.prototype.getResponseText=j.prototype.la,j.prototype.send=j.prototype.ea,j.prototype.setWithCredentials=j.prototype.Fa}).apply(typeof Se<"u"?Se:typeof self<"u"?self:typeof window<"u"?window:{});const Ns="@firebase/firestore",Ms="4.9.2";/**
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
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
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
 */let ae="12.3.0";/**
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
 */const xt=new ii("@firebase/firestore");function Z(s,...e){if(xt.logLevel<=N.DEBUG){const n=e.map(vn);xt.debug(`Firestore (${ae}): ${s}`,...n)}}function li(s,...e){if(xt.logLevel<=N.ERROR){const n=e.map(vn);xt.error(`Firestore (${ae}): ${s}`,...n)}}function Uo(s,...e){if(xt.logLevel<=N.WARN){const n=e.map(vn);xt.warn(`Firestore (${ae}): ${s}`,...n)}}function vn(s){if(typeof s=="string")return s;try{/**
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
*/return(function(n){return JSON.stringify(n)})(s)}catch{return s}}/**
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
 */function oe(s,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ui(s,r,n)}function ui(s,e,n){let r=`FIRESTORE (${ae}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw li(r),new Error(r)}function ee(s,e,n,r){let a="Unexpected state";typeof n=="string"?a=n:r=n,s||ui(e,a,r)}/**
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
 */const L={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class R extends Ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ne{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class di{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ho{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(G.UNAUTHENTICATED)))}shutdown(){}}class zo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class qo{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ee(this.o===void 0,42304);let r=this.i;const a=_=>this.i!==r?(r=this.i,n(_)):Promise.resolve();let c=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new ne,e.enqueueRetryable((()=>a(this.currentUser)))};const d=()=>{const _=c;e.enqueueRetryable((async()=>{await _.promise,await a(this.currentUser)}))},E=_=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((_=>E(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?E(_):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new ne)}}),0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string",31837,{l:r}),new di(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string",2055,{h:e}),new G(e)}}class Go{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=G.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Wo{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Go(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(G.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ks{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ko{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,To(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ee(this.o===void 0,3512);const r=c=>{c.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,Z("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>r(c)))};const a=c=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>a(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ks(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ee(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ks(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Jo(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<s;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Xo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=Jo(40);for(let c=0;c<a.length;++c)r.length<20&&a[c]<n&&(r+=e.charAt(a[c]%62))}return r}}function vt(s,e){return s<e?-1:s>e?1:0}function Yo(s,e){const n=Math.min(s.length,e.length);for(let r=0;r<n;r++){const a=s.charAt(r),c=e.charAt(r);if(a!==c)return an(a)===an(c)?vt(a,c):an(a)?1:-1}return vt(s.length,e.length)}const Qo=55296,Zo=57343;function an(s){const e=s.charCodeAt(0);return e>=Qo&&e<=Zo}/**
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
 */const xs="__name__";class nt{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let a=0;a<r;a++){const c=nt.compareSegments(e.get(a),n.get(a));if(c!==0)return c}return vt(e.length,n.length)}static compareSegments(e,n){const r=nt.isNumericId(e),a=nt.isNumericId(n);return r&&!a?-1:!r&&a?1:r&&a?nt.extractNumericId(e).compare(nt.extractNumericId(n)):Yo(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yn.fromString(e.substring(4,e.length-2))}}class Q extends nt{construct(e,n,r){return new Q(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((a=>a.length>0)))}return new Q(n)}static emptyPath(){return new Q([])}}const ta=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends nt{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return ta.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xs}static keyField(){return new Tt([xs])}static fromServerFormat(e){const n=[];let r="",a=0;const c=()=>{if(r.length===0)throw new R(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let d=!1;for(;a<e.length;){const E=e[a];if(E==="\\"){if(a+1===e.length)throw new R(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[a+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new R(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,a+=2}else E==="`"?(d=!d,a++):E!=="."||d?(r+=E,a++):(c(),a++)}if(c(),d)throw new R(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */class At{constructor(e){this.path=e}static fromPath(e){return new At(Q.fromString(e))}static fromName(e){return new At(Q.fromString(e).popFirst(5))}static empty(){return new At(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Q.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new At(new Q(e.slice()))}}function ea(s,e,n,r){if(e===!0&&r===!0)throw new R(L.INVALID_ARGUMENT,`${s} and ${n} cannot be used together.`)}function na(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function sa(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":oe(12329,{type:typeof s})}function ia(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new R(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sa(s);throw new R(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return s}/**
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
 */function F(s,e){const n={typeString:s};return e&&(n.value=e),n}function he(s,e){if(!na(s))throw new R(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const a=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in s)){n=`JSON missing required field: '${r}'`;break}const d=s[r];if(a&&typeof d!==a){n=`JSON field '${r}' must be a ${a}.`;break}if(c!==void 0&&d!==c.value){n=`Expected '${r}' field to equal '${c.value}'`;break}}if(n)throw new R(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Os=-62135596800,$s=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$s);return new st(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Os)throw new R(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$s}_compareTo(e){return this.seconds===e.seconds?vt(this.nanoseconds,e.nanoseconds):vt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(he(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Os;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:F("string",st._jsonSchemaVersion),seconds:F("number"),nanoseconds:F("number")};function ra(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class oa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new oa("Invalid base64 string: "+c):c}})(e);return new Bt(n)}static fromUint8Array(e){const n=(function(a){let c="";for(let d=0;d<a.length;++d)c+=String.fromCharCode(a[d]);return c})(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let a=0;a<n.length;a++)r[a]=n.charCodeAt(a);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return vt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const gn="(default)";class Be{constructor(e,n){this.projectId=e,this.database=n||gn}static empty(){return new Be("","")}get isDefaultDatabase(){return this.database===gn}isEqual(e){return e instanceof Be&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class aa{constructor(e,n=null,r=[],a=[],c=null,d="F",E=null,_=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=a,this.limit=c,this.limitType=d,this.startAt=E,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ha(s){return new aa(s)}/**
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
 */var js,B;(B=js||(js={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new yn([4294967295,4294967295],0);/**
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
 */const ca=41943040;/**
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
 */const la=1048576;function hn(){return typeof document<"u"?document:null}/**
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
 */class ua{constructor(e,n,r=1e3,a=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=a,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-r);a>0&&Z("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class wn{constructor(e,n,r,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=a,this.removalCallback=c,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,a,c){const d=Date.now()+r,E=new wn(e,n,d,a,c);return E.start(r),E}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Fs,Vs;(Vs=Fs||(Fs={})).Ma="default",Vs.Cache="cache";/**
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
 */function da(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const Us=new Map;/**
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
 */const pi="firestore.googleapis.com",Hs=!0;class zs{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new R(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pi,this.ssl=Hs}else this.host=e.host,this.ssl=e.ssl??Hs;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ca;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<la)throw new R(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ea("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=da(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new R(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new R(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new R(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,a){return r.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fi{constructor(e,n,r,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zs({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new R(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new R(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zs(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ho;switch(r.type){case"firstParty":return new Wo(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new R(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Us.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Us.delete(n),r.terminate())})(this),Promise.resolve()}}function pa(s,e,n,r={}){var I;s=ia(s,fi);const a=ni(e),c=s._getSettings(),d={...c,emulatorOptions:s._getEmulatorOptions()},E=`${e}:${n}`;a&&(yr(`https://${E}`),_r("Firestore",!0)),c.host!==pi&&c.host!==E&&Uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...c,host:E,ssl:a,emulatorOptions:r};if(!Ae(_,d)&&(s._setSettings(_),r.mockUserToken)){let A,T;if(typeof r.mockUserToken=="string")A=r.mockUserToken,T=G.MOCK_USER;else{A=vr(r.mockUserToken,(I=s._app)==null?void 0:I.options.projectId);const b=r.mockUserToken.sub||r.mockUserToken.user_id;if(!b)throw new R(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new G(b)}s._authCredentials=new zo(new di(A,T))}}/**
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
 */class En{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new En(this.firestore,e,this._query)}}class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(he(n,it._jsonSchema))return new it(e,r||null,new At(Q.fromString(n.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:F("string",it._jsonSchemaVersion),referencePath:F("string")};class _n extends En{constructor(e,n,r){super(e,n,ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new At(e))}withConverter(e){return new _n(this.firestore,e,this._path)}}/**
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
 */const qs="AsyncQueue";class Gs{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ua(this,"async_queue_retry"),this._c=()=>{const r=hn();r&&Z(qs,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=hn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ne;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ra(e))throw e;Z(qs,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,li("INTERNAL UNHANDLED ERROR: ",Ws(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=wn.createAndSchedule(this,e,n,r,(c=>this.hc(c)));return this.tc.push(a),a}uc(){this.nc&&oe(47125,{Pc:Ws(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ws(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class fa extends fi{constructor(e,n,r,a){super(e,n,r,a),this.type="firestore",this._queue=new Gs,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gs(e),this._firestoreClient=void 0,await e}}}function ga(s,e){const n=typeof s=="object"?s:Bo(),r=typeof s=="string"?s:gn,a=bo(n,"firestore").getImmediate({identifier:r});if(!a._initialized){const c=gr("firestore");c&&pa(a,...c)}return a}/**
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
 */class ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ot(Bt.fromBase64String(e))}catch(n){throw new R(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ot(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(he(e,ot._jsonSchema))return ot.fromBase64String(e.bytes)}}ot._jsonSchemaVersion="firestore/bytes/1.0",ot._jsonSchema={type:F("string",ot._jsonSchemaVersion),bytes:F("string")};/**
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
 */class gi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ct{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return vt(this._lat,e._lat)||vt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ct._jsonSchemaVersion}}static fromJSON(e){if(he(e,Ct._jsonSchema))return new Ct(e.latitude,e.longitude)}}Ct._jsonSchemaVersion="firestore/geoPoint/1.0",Ct._jsonSchema={type:F("string",Ct._jsonSchemaVersion),latitude:F("number"),longitude:F("number")};/**
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
 */class Dt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,a){if(r.length!==a.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==a[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(he(e,Dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Dt(e.vectorValues);throw new R(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dt._jsonSchemaVersion="firestore/vectorValue/1.0",Dt._jsonSchema={type:F("string",Dt._jsonSchemaVersion),vectorValues:F("object")};const ma=new RegExp("[~\\*/\\[\\]]");function ya(s,e,n){if(e.search(ma)>=0)throw Ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new gi(...e.split("."))._internalPath}catch{throw Ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function Ks(s,e,n,r,a){let c=`Function ${e}() called with invalid data`;c+=". ";let d="";return new R(L.INVALID_ARGUMENT,c+s+d)}/**
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
 */class mi{constructor(e,n,r,a,c){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new va(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class va extends mi{data(){return super.data()}}function yi(s,e){return typeof e=="string"?ya(s,e):e instanceof gi?e._internalPath:e._delegate._internalPath}class Ie{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kt extends mi{constructor(e,n,r,a,c,d){super(e,n,r,a,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new be(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new R(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=kt._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}kt._jsonSchemaVersion="firestore/documentSnapshot/1.0",kt._jsonSchema={type:F("string",kt._jsonSchemaVersion),bundleSource:F("string","DocumentSnapshot"),bundleName:F("string"),bundle:F("string")};class be extends kt{data(e={}){return super.data(e)}}class se{constructor(e,n,r,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new Ie(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new be(this._firestore,this._userDataWriter,r.key,r,new Ie(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(a,c){if(a._snapshot.oldDocs.isEmpty()){let d=0;return a._snapshot.docChanges.map((E=>{const _=new be(a._firestore,a._userDataWriter,E.doc.key,E.doc,new Ie(a._snapshot.mutatedKeys.has(E.doc.key),a._snapshot.fromCache),a.query.converter);return E.doc,{type:"added",doc:_,oldIndex:-1,newIndex:d++}}))}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((E=>c||E.type!==3)).map((E=>{const _=new be(a._firestore,a._userDataWriter,E.doc.key,E.doc,new Ie(a._snapshot.mutatedKeys.has(E.doc.key),a._snapshot.fromCache),a.query.converter);let I=-1,A=-1;return E.type!==0&&(I=d.indexOf(E.doc.key),d=d.delete(E.doc.key)),E.type!==1&&(d=d.add(E.doc),A=d.indexOf(E.doc.key)),{type:wa(E.type),doc:_,oldIndex:I,newIndex:A}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new R(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=se._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],a=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wa(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:s})}}se._jsonSchemaVersion="firestore/querySnapshot/1.0",se._jsonSchema={type:F("string",se._jsonSchemaVersion),bundleSource:F("string","QuerySnapshot"),bundleName:F("string"),bundle:F("string")};(function(e,n=!0){(function(a){ae=a})(Do),De(new ie("firestore",((r,{instanceIdentifier:a,options:c})=>{const d=r.getProvider("app").getImmediate(),E=new fa(new qo(r.getProvider("auth-internal")),new Ko(d,r.getProvider("app-check-internal")),(function(I,A){if(!Object.prototype.hasOwnProperty.apply(I.options,["projectId"]))throw new R(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Be(I.options.projectId,A)})(d,a),d);return c={useFetchStreams:n,...c},E._setSettings(c),E}),"PUBLIC").setMultipleInstances(!0)),Mt(Ns,Ms,e),Mt(Ns,Ms,"esm2020")})();const Ea={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},_a=ai(Ea),Js=ga(_a),Sa={version:"1.4.0",changelog:{"1.4.0":['Улучшена синхронизация: добавлена кнопка "Поделиться" для отправки данных через мессенджеры.',"Добавлена история изменений приложения, чтобы вы всегда были в курсе новшеств.","Интерфейс настроек стал более информативным и удобным."],"1.3.0":["Добавлен экран предпросмотра меню перед финальным сохранением.","Полностью переработана и исправлена логика перегенерации отдельных блюд и дней.","Заменена иконка перегенерации на более современную.","В список покупок добавлено отображение остатка, необходимого к покупке.",'При отметке блюда как "приготовленное" ингредиенты списываются из запасов.',"На экран бюджета добавлена диаграмма для визуализации трат за последние 7 дней."],"1.2.0":["Добавлена информация об авторе и версии приложения.","При перегенерации меню теперь учитываются уже купленные продукты.","Улучшена логика обработки остатков блюд в меню, добавлена кнопка регенерации.","Обновлен дизайн кнопки полной перегенерации.","Улучшена проверка API ключа при запуске приложения."],"1.1.0":["Добавлена анимированная заставка-презентация.","Реализованы расширенные настройки (кухня, сложность, время).",'Улучшен ИИ для генерации списка покупок с учетом "магазинных" единиц.',"В шагах рецепта теперь отображается количество ингредиентов.",'Добавлена функция "Попросить купить" недостающие продукты.'],"1.0.0":["Первоначальный выпуск."]},state:{settings:{apiKey:null,family:[],preferences:"Без рыбы, без грибов",menuDuration:7,totalBudget:1e4,cuisine:"Любая",difficulty:"Любая"},menu:[],recipes:{},shoppingList:[],cookedMeals:{},timestamp:null,currentDayIndex:0},tempState:null,dom:{},wizard:{currentStep:1,totalSteps:3},currentRecipe:{id:null,step:0},timer:{interval:null,timeLeft:0,initialTime:0,isRunning:!1},async init(){this.cacheDom(),this.addEventListeners(),await this.loadState(),await new Promise(s=>{const e=setInterval(()=>{window.firebaseServices&&(clearInterval(e),s())},50)}),this.addEventListeners(),this.setupAuthListener()},cacheDom(){this.dom={splashScreen:document.getElementById("splash-screen"),startAppBtn:document.getElementById("start-app-btn"),screens:document.querySelectorAll(".screen"),welcomeScreen:document.getElementById("welcome-screen"),googleSigninBtn:document.getElementById("google-signin-btn"),setupScreen:document.getElementById("setup-screen"),mainScreen:document.getElementById("main-screen"),recipeScreen:document.getElementById("recipe-screen"),settingsScreen:document.getElementById("settings-screen"),previewScreen:document.getElementById("preview-screen"),setupWizard:document.getElementById("setup-wizard"),wizardSteps:document.querySelectorAll(".wizard-step"),wizardNav:document.getElementById("wizard-nav"),wizardBackBtn:document.getElementById("wizard-back-btn"),wizardNextBtn:document.getElementById("wizard-next-btn"),wizardStepCounter:document.getElementById("wizard-step-counter"),wizardFamilyContainer:document.getElementById("wizard-family-members-container"),wizardAddMemberBtn:document.getElementById("wizard-add-family-member-btn"),wizardDuration:document.getElementById("wizard-menu-duration"),wizardBudget:document.getElementById("wizard-total-budget"),wizardPreferences:document.getElementById("wizard-preferences"),wizardCuisine:document.getElementById("wizard-cuisine"),wizardDifficulty:document.getElementById("wizard-difficulty"),generationProgress:document.getElementById("generation-progress"),progressBar:document.getElementById("progress-bar"),progressStatus:document.getElementById("progress-status"),progressDetails:document.getElementById("progress-details"),previewMenuContainer:document.getElementById("preview-menu-container"),previewRegenerateAllBtn:document.getElementById("preview-regenerate-all-btn"),previewAcceptBtn:document.getElementById("preview-accept-btn"),mainHeaderTitle:document.getElementById("main-header-title"),openSettingsBtn:document.getElementById("open-settings-btn"),closeSettingsBtn:document.getElementById("close-settings-btn"),bottomNav:document.querySelector(".bottom-nav"),mainContents:document.querySelectorAll(".main-content"),dateSelector:document.getElementById("date-selector"),prevDayBtn:document.getElementById("prev-day-btn"),currentDateDisplay:document.getElementById("current-date-display"),nextDayBtn:document.getElementById("next-day-btn"),dailyMenuContainer:document.getElementById("daily-menu-container"),shoppingListContainer:document.getElementById("shopping-list-container"),shoppingProgressText:document.getElementById("shopping-progress-text"),shoppingProgress:document.getElementById("shopping-progress"),shoppingListTotal:document.getElementById("shopping-list-total"),backToMenuBtn:document.getElementById("back-to-menu-btn"),recipeTitle:document.getElementById("recipe-title"),stepIndicator:document.getElementById("step-indicator"),stepImage:document.getElementById("step-image"),stepDescription:document.getElementById("step-description"),timerSection:document.getElementById("timer-section"),timerDisplay:document.getElementById("timer-display"),startTimerBtn:document.getElementById("start-timer-btn"),pauseTimerBtn:document.getElementById("pause-timer-btn"),resetTimerBtn:document.getElementById("reset-timer-btn"),stepIngredientsList:document.getElementById("step-ingredients"),stepIngredientsTitle:document.getElementById("step-ingredients-title"),prevStepBtn:document.getElementById("prev-step-btn"),nextStepBtn:document.getElementById("next-step-btn"),budget:{pieProducts:document.getElementById("pie-products"),spentTotal:document.getElementById("budget-spent-total"),total:document.getElementById("budget-total"),remaining:document.getElementById("budget-remaining"),barChart:document.getElementById("bar-chart")},settings:{content:document.getElementById("settings-content"),duration:document.getElementById("settings-menu-duration"),budget:document.getElementById("settings-total-budget"),preferences:document.getElementById("settings-preferences"),cuisine:document.getElementById("settings-cuisine"),difficulty:document.getElementById("settings-difficulty"),saveBtn:document.getElementById("save-settings-btn"),familyContainer:document.getElementById("family-members-container"),addMemberBtn:document.getElementById("add-family-member-btn"),regenerateAllBtn:document.getElementById("regenerate-all-btn"),apiKeyInput:document.getElementById("settings-api-key"),saveApiKeyBtn:document.getElementById("save-api-key-btn"),runWizardBtn:document.getElementById("run-wizard-btn"),appVersionInfo:document.getElementById("app-version-info"),showChangelogBtn:document.getElementById("show-changelog-btn")},exportBtn:document.getElementById("export-btn"),importBtn:document.getElementById("import-btn"),importFileInput:document.getElementById("import-file-input"),devConsole:document.getElementById("dev-console"),logOutput:document.getElementById("log-output"),commandInput:document.getElementById("command-input"),notification:document.getElementById("notification"),notificationSound:document.getElementById("notification-sound"),modalOverlay:document.getElementById("modal-overlay"),modalTitle:document.getElementById("modal-title"),modalBody:document.getElementById("modal-body"),modalButtons:document.getElementById("modal-buttons")}},addEventListeners(){this.dom.startAppBtn.addEventListener("click",()=>{localStorage.setItem("hasSeenSplash","true"),this.showScreen("welcome-screen")}),this.dom.googleSigninBtn.addEventListener("click",()=>this.signInWithGoogle()),this.dom.wizardNextBtn.addEventListener("click",()=>this.navigateWizard(1)),this.dom.wizardBackBtn.addEventListener("click",()=>this.navigateWizard(-1)),this.dom.previewAcceptBtn.addEventListener("click",()=>this.acceptPreview()),this.dom.previewRegenerateAllBtn.addEventListener("click",()=>this.startGenerationProcess(!0)),this.dom.bottomNav.addEventListener("click",e=>this.handleNav(e)),this.dom.backToMenuBtn.addEventListener("click",()=>this.showScreen("main-screen")),this.dom.prevStepBtn.addEventListener("click",()=>this.navigateRecipeStep(-1)),this.dom.nextStepBtn.addEventListener("click",()=>this.navigateRecipeStep(1)),this.dom.prevDayBtn.addEventListener("click",()=>this.navigateMenuDay(-1)),this.dom.nextDayBtn.addEventListener("click",()=>this.navigateMenuDay(1)),this.dom.startTimerBtn.addEventListener("click",()=>this.startTimer()),this.dom.pauseTimerBtn.addEventListener("click",()=>this.pauseTimer()),this.dom.resetTimerBtn.addEventListener("click",()=>this.resetTimer()),this.dom.openSettingsBtn.addEventListener("click",()=>this.showSettingsPanel()),this.dom.closeSettingsBtn.addEventListener("click",()=>this.hideSettingsPanel()),this.dom.settings.saveBtn.addEventListener("click",()=>this.saveSettings()),this.dom.settings.addMemberBtn.addEventListener("click",()=>this.openFamilyMemberModal()),this.dom.settings.regenerateAllBtn.addEventListener("click",()=>this.confirmRegenerateAll()),this.dom.settings.saveApiKeyBtn.addEventListener("click",()=>this.saveApiKey()),this.dom.wizardAddMemberBtn.addEventListener("click",()=>this.openFamilyMemberModal(!0)),this.dom.settings.runWizardBtn.addEventListener("click",()=>{this.hideSettingsPanel(),this.showWizard()}),this.dom.settings.showChangelogBtn.addEventListener("click",()=>this.showChangelogModal()),this.dom.exportBtn.addEventListener("click",()=>this.exportData()),this.dom.importBtn.addEventListener("click",()=>this.dom.importFileInput.click()),this.dom.importFileInput.addEventListener("change",e=>this.importData(e));let s;document.body.addEventListener("touchstart",e=>{e.touches.length===3&&(s=setTimeout(()=>this.toggleDevConsole(),1e3))}),document.body.addEventListener("touchend",()=>clearTimeout(s)),this.dom.commandInput.addEventListener("keydown",e=>{e.key==="Enter"&&this.executeCommand(e.target.value)}),this.dom.modalOverlay.addEventListener("click",e=>{e.target===this.dom.modalOverlay&&this.hideModal()})},setupAuthListener(){const{auth:s,onAuthStateChanged:e}=window.firebaseServices;e(s,n=>{if(n)this.currentUser=n,this.dom.openSettingsBtn.innerHTML=`<img src="${n.photoURL}" style="width: 32px; height: 32px; border-radius: 50%;" alt="User avatar">`,this.loadState();else{this.currentUser=null,this.dom.openSettingsBtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';const r=localStorage.getItem("hasSeenSplash")==="true";this.showScreen(r?"welcome-screen":"splash-screen")}})},async signInWithGoogle(){this.showNotification("Открываю окно входа...","loading");const{auth:s,provider:e,signInWithPopup:n}=window.firebaseServices;try{await n(s,e),this.hideNotification()}catch(r){console.error("Google Sign-in failed:",r),this.showNotification(`Ошибка входа: ${r.message}`,"error")}},async saveState(){try{await Ys(cn(Js,"user-data","main-config"),this.state)}catch(s){console.error("Error saving state to Firestore:",s),this.showNotification("Ошибка сохранения данных.","error")}},async loadState(){try{const s=cn(Js,"user-data","main-config"),e=await Xs(s);if(e.exists()){const n=e.data();n.settings&&(this.state=n,this.state.settings.family||(this.state.settings.family=[]),this.state.settings.menuDuration||(this.state.settings.menuDuration=7),this.state.cookedMeals||(this.state.cookedMeals={}),this.state.settings.cuisine||(this.state.settings.cuisine="Любая"),this.state.settings.difficulty||(this.state.settings.difficulty="Любая"),this.state.currentDayIndex===void 0&&(this.state.currentDayIndex=0),(this.state.shoppingList||[]).forEach(r=>{(r.items||[]).forEach(a=>{var c;a.purchases===void 0&&(a.purchases=a.completed?[{qty:((c=a.shoppingSuggestion)==null?void 0:c.qty)||1,price:a.price,date:new Date().toISOString()}]:[]),a.purchases.forEach(d=>{d.date||(d.date=new Date().toISOString())}),a.consumedQty===void 0&&(a.consumedQty=0)})}))}else console.log("No saved state found in Firestore.")}catch(s){console.error("Error loading state from Firestore:",s),this.showNotification("Ошибка загрузки данных.","error")}this.hideNotification()},resetState(){const{signOut:s,auth:e}=window.firebaseServices;s(e).catch(n=>console.error("Sign out failed",n))},showScreen(s){this.dom.screens.forEach(e=>{const n=e.id===s;e.classList.toggle("hidden",!n),["recipe-screen","splash-screen","settings-screen"].includes(e.id)&&e.classList.toggle("active",n)}),s==="main-screen"?(document.getElementById("main-screen").classList.remove("hidden"),this.renderAll()):["setup-screen","welcome-screen","preview-screen"].includes(s)&&document.getElementById(s).classList.remove("hidden")},showWizard(){this.showScreen("setup-screen"),this.wizard.currentStep=1,this.updateWizardView()},updateWizardView(){const{currentStep:s,totalSteps:e}=this.wizard;this.dom.wizardDuration.value=this.state.settings.menuDuration,this.dom.wizardBudget.value=this.state.settings.totalBudget,this.dom.wizardPreferences.value=this.state.settings.preferences,this.dom.wizardCuisine.value=this.state.settings.cuisine,this.dom.wizardDifficulty.value=this.state.settings.difficulty,this.dom.wizardNav.classList.remove("hidden"),this.dom.generationProgress.classList.add("hidden"),this.dom.setupWizard.classList.remove("hidden"),this.dom.wizardStepCounter.classList.remove("hidden"),this.dom.wizardStepCounter.textContent=`Шаг ${s} из ${e}`,this.dom.wizardSteps.forEach(r=>{r.classList.toggle("active",parseInt(r.dataset.step)===s)}),this.dom.wizardBackBtn.classList.toggle("hidden",s===1),this.dom.wizardNextBtn.textContent=s===e?"Начать генерацию":"Далее";let n=!1;switch(s){case 1:n=this.state.settings.family.length>0;break;default:n=!0}this.dom.wizardNextBtn.disabled=!n,s===1&&this.renderFamilyMembers(!0)},async navigateWizard(s){const{currentStep:e,totalSteps:n}=this.wizard;if(s>0){if(e===2)this.state.settings.menuDuration=parseInt(this.dom.wizardDuration.value)||7,this.state.settings.totalBudget=parseInt(this.dom.wizardBudget.value)||1e4,this.state.settings.preferences=this.dom.wizardPreferences.value,this.state.settings.cuisine=this.dom.wizardCuisine.value,this.state.settings.difficulty=this.dom.wizardDifficulty.value;else if(e===n){await this.saveState(),await this.startGenerationProcess();return}}this.wizard.currentStep+=s,this.updateWizardView()},async startGenerationProcess(s=!1,e="",n=""){if(!this.state.settings.apiKey){alert("API ключ не найден."),this.showWizard();return}this.dom.setupWizard.classList.add("hidden"),this.dom.wizardNav.classList.add("hidden"),this.dom.wizardStepCounter.classList.add("hidden"),this.dom.generationProgress.classList.remove("hidden"),this.showScreen("setup-screen");try{this.ai=new _e({apiKey:this.state.settings.apiKey}),await this.updateProgress(1,2,"Подключение к Google Gemini…","Проверка ключа..."),await this.ai.models.generateContent({model:"gemini-2.5-flash",contents:"test"}),this.logToConsole("✅ API KEY VALIDATED"),this.dom.progressDetails.innerHTML+="<br>✅ Ключ активен. Доступ к Gemini получен.",await this.updateProgress(2,2,"Магия ИИ в действии…","Создаем меню, рецепты и список покупок...");const r=await this.generateComprehensiveData(e,n);if(!r||!r.menu||r.menu.length===0)throw new Error("Menu generation failed or returned empty data. Please check your prompt and settings.");this.tempState=r,this.renderPreview(),this.showScreen("preview-screen")}catch(r){console.error("Generation failed:",r),this.updateProgress(0,2,"Ошибка!",`Не удалось сгенерировать меню. ${r.message}`),this.dom.generationProgress.innerHTML+='<button class="primary-button" onclick="window.location.reload()" style="margin-top: 20px;">Назад к настройкам</button>',s||(this.state.settings.apiKey=null,this.saveState())}},async updateProgress(s,e,n,r){return new Promise(a=>{const c=s/e*100;this.dom.progressBar.style.width=`${c}%`,this.dom.progressStatus.textContent=`Шаг ${s}/${e}: ${n}`,this.dom.progressDetails.innerHTML=r,setTimeout(a,300)})},async makeGeminiRequest(s,e){this.logToConsole(`🟡 REQUEST: ${s.substring(0,50)}...`);let n=3;for(;n>0;)try{const a=(await this.ai.models.generateContent({model:"gemini-2.5-flash",contents:s,config:{responseMimeType:"application/json",responseSchema:e}})).text.trim(),c=JSON.parse(a);return this.logToConsole("✅ RESPONSE RECEIVED"),c}catch(r){if(n--,this.logToConsole(`🔴 ERROR: ${r}. Retrying... (${n} left)`),n===0)throw r;await new Promise(a=>setTimeout(a,1e3))}},async generateComprehensiveData(s="",e=""){const{family:n,menuDuration:r,preferences:a,cuisine:c,difficulty:d,totalBudget:E}=this.state.settings,_=n.map(P=>`- ${P.name}: Вес ${P.weight}кг, Рост ${P.height}см. Цель: ${{lose:"постепенное снижение веса",maintain:"поддержание текущего веса",gain:"набор мышечной массы"}[P.goal]}.`).join(`
`);let I=`Сгенерируй одним JSON-ответом полный план питания. Ответ должен содержать три ключа верхнего уровня: "menu", "recipes", "shoppingList".

1.  **menu**: Разнообразное меню на ${r} дней (с воскресенья по субботу) для семьи:
${_}.
    *   Учти их потребности в калориях.
    *   Общие предпочтения: ${a}.
    *   Предпочитаемая кухня: ${c}.
    *   Желаемая сложность блюд: ${d}.
    *   Каждый день должен включать: Завтрак, Перекус, Обед, Полдник, Ужин.
    *   Иногда используй остатки от ужина на обед следующего дня (помечай их как "Название блюда (остатки)").

2.  **recipes**: Массив с детальными рецептами для КАЖДОГО уникального блюда из сгенерированного меню (кроме блюд с пометкой "остатки").
    *   Каждый рецепт должен иметь уникальный 'id' (например, 'borsch-s-govyadinoy').
    *   Название 'name' рецепта должно ТОЧНО соответствовать названию в меню.
    *   Включи полный список ингредиентов с количеством для семьи из ${n.length} человек.
    *   Предоставь пошаговые инструкции 'steps'. В каждом шаге укажи используемые ингредиенты и их количество.

3.  **shoppingList**: Сводный список покупок, сгруппированный по категориям.
    *   Суммируй ВСЕ ингредиенты из ВСЕХ сгенерированных рецептов.
    *   Категории: "Мясо и птица", "Молочные и яйца", "Овощи и зелень", "Фрукты и орехи", "Бакалея", "Хлеб и выпечка", "Напитки", "Прочее".
    *   Для каждого продукта укажи общее необходимое количество 'totalNeeded', а затем предложи 'shoppingSuggestion' — разумное количество для покупки в магазине, округляя в большую сторону до стандартной упаковки (например, для 750г муки предложи купить 1кг).
    *   Укажи примерную цену 'price' в рублях для 'shoppingSuggestion'. Общая стоимость всех продуктов не должна превышать бюджет ${E} рублей.
`;s&&(I+=`
ВАЖНО: При составлении меню отдай приоритет блюдам, в которых используются уже купленные продукты. Список купленных продуктов: ${s}.`),e&&(I+=`
ОСОБОЕ УКАЗАНИЕ: ${e}`);const A={type:D.ARRAY,items:{type:D.OBJECT,properties:{name:{type:D.STRING},quantity:{type:D.STRING,description:"Количество и единица измерения, например '200 г' или '1 шт'"}},required:["name","quantity"]}},T={type:D.OBJECT,properties:{menu:{type:D.ARRAY,description:"Меню на неделю.",items:{type:D.OBJECT,properties:{day:{type:D.STRING},meals:{type:D.OBJECT,properties:{breakfast:{type:D.STRING},snack1:{type:D.STRING},lunch:{type:D.STRING},snack2:{type:D.STRING},dinner:{type:D.STRING}},required:["breakfast","snack1","lunch","snack2","dinner"]}},required:["day","meals"]}},recipes:{type:D.ARRAY,description:"Рецепты для уникальных блюд из меню.",items:{type:D.OBJECT,properties:{id:{type:D.STRING,description:"Уникальный идентификатор рецепта"},name:{type:D.STRING,description:"Название, соответствующее меню"},ingredients:A,steps:{type:D.ARRAY,items:{type:D.OBJECT,properties:{description:{type:D.STRING},time:{type:D.NUMBER,description:"Время в минутах. 0 если таймер не нужен."},ingredients:A},required:["description","time","ingredients"]}}},required:["id","name","ingredients","steps"]}},shoppingList:{type:D.ARRAY,description:"Список покупок, сгруппированный по категориям.",items:{type:D.OBJECT,properties:{category:{type:D.STRING},items:{type:D.ARRAY,items:{type:D.OBJECT,properties:{name:{type:D.STRING},totalNeeded:{type:D.OBJECT,properties:{qty:{type:D.NUMBER},unit:{type:D.STRING}}},shoppingSuggestion:{type:D.OBJECT,properties:{qty:{type:D.NUMBER},unit:{type:D.STRING}}},price:{type:D.NUMBER}},required:["name","totalNeeded","shoppingSuggestion","price"]}}},required:["category","items"]}}},required:["menu","recipes","shoppingList"]},b=await this.makeGeminiRequest(I,T),M={};return b.recipes&&b.recipes.forEach(P=>{M[P.id]=P}),b.shoppingList&&b.shoppingList.forEach(P=>{(P.items||[]).forEach(O=>{O.purchases=[],O.consumedQty=0})}),{menu:b.menu||[],recipes:M,shoppingList:b.shoppingList||[]}},renderAll(){this.renderMenu(),this.renderShoppingList(),this.renderBudget()},getRegenerateIcon(){return'<svg class="regenerate-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.681 4.06c.064.155.19.284.348.348l4.06 1.68c.772.321.772 1.415 0 1.736l-4.06 1.68a.5.5 0 00-.348.349l-1.68 4.06c-.321-.772-1.415-.772-1.736 0l-1.681-4.06a.5.5 0 00-.348-.348l-4.06-1.68c-.772-.321-.772-1.415 0-1.736l4.06-1.68a.5.5 0 00.348-.348l1.68-4.06z" clip-rule="evenodd" /></svg>'},getSortedMenu(){const s=["ВОСКРЕСЕНЬЕ","ПОНЕДЕЛЬНИК","ВТОРНИК","СРЕДА","ЧЕТВЕРГ","ПЯТНИЦА","СУББОТА"];return JSON.parse(JSON.stringify(this.state.menu||[])).sort((n,r)=>s.indexOf(n.day.toUpperCase())-s.indexOf(r.day.toUpperCase()))},renderMenu(){if(!this.state.menu||this.state.menu.length===0){this.dom.dailyMenuContainer.innerHTML='<p style="text-align: center; color: var(--soft-text); margin-top: 30px;">Меню еще не создано. Перейдите в настройки для генерации.</p>',this.dom.currentDateDisplay.textContent="Нет меню";return}const s=this.getSortedMenu();(this.state.currentDayIndex>=s.length||this.state.currentDayIndex<0)&&(this.state.currentDayIndex=0);const e=s[this.state.currentDayIndex];if(!e){console.error("No day data found for index:",this.state.currentDayIndex);return}this.dom.currentDateDisplay.textContent=e.day;const n=(r,a,c,d)=>{const E=(a||"Не указано").replace(/\s*\(остатки\)/i,""),_=(a||"").includes("(остатки)"),I=a&&a.trim()!==""&&a.trim()!=="Не указано",A=!_&&I,T=this.state.cookedMeals[d]&&this.state.cookedMeals[d].includes(c);return`
            <div class="meal ${A?"clickable":""} ${T?"cooked":""}" data-meal-name="${a||""}" data-meal-key="${c}" data-day-name="${d}">
                <button class="cooked-toggle" data-day-name="${d}" data-meal-key="${c}" aria-label="Отметить как приготовленное">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </button>
                <span class="meal-icon">${r}</span>
                <span class="meal-name">${E}</span>
                ${_?'<span class="leftover-icon">🔄</span>':""}
                ${I?`<button class="regenerate-btn" title="Перегенерировать блюдо">${this.getRegenerateIcon()}</button>`:""}
            </div>`};this.dom.dailyMenuContainer.innerHTML=`
            ${n("☀️",e.meals.breakfast,"breakfast",e.day)}
            ${n("🍎",e.meals.snack1,"snack1",e.day)}
            ${n("🍲",e.meals.lunch,"lunch",e.day)}
            ${n("🥛",e.meals.snack2,"snack2",e.day)}
            ${n("🌙",e.meals.dinner,"dinner",e.day)}
        `,this.dom.dailyMenuContainer.querySelectorAll(".meal.clickable").forEach(r=>{r.addEventListener("click",a=>{if(a.target.closest(".regenerate-btn")||a.target.closest(".cooked-toggle"))return;const c=a.currentTarget.dataset.mealName.replace(/\s*\(остатки\)/i,"").trim(),d=Object.values(this.state.recipes).find(E=>E.name===c);d?this.checkIngredientsForRecipe(d.id):c&&this.showNotification(`Рецепт для "${c}" не найден.`,"error")})}),this.dom.dailyMenuContainer.querySelectorAll(".cooked-toggle").forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation();const{dayName:c,mealKey:d}=a.currentTarget.dataset;this.toggleCookedStatus(c,d)})}),this.dom.dailyMenuContainer.querySelectorAll(".regenerate-btn").forEach(r=>{r.addEventListener("click",a=>{a.stopPropagation();const d=a.currentTarget.closest(".meal"),{dayName:E,mealKey:_}=d.dataset;this.openRegenerateModal("meal",{dayName:E,mealKey:_})})})},navigateMenuDay(s){if(!this.state.menu||this.state.menu.length===0)return;const e=this.state.menu.length;let n=this.state.currentDayIndex+s;n<0?n=e-1:n>=e&&(n=0),this.state.currentDayIndex=n,this.saveState(),this.renderMenu()},toggleCookedStatus(s,e){var E;this.state.cookedMeals[s]||(this.state.cookedMeals[s]=[]);const n=!this.state.cookedMeals[s].includes(e),r=n?1:-1,a=(((E=this.state.menu.find(_=>_.day===s))==null?void 0:E.meals[e])||"").replace(/\s*\(остатки\)/i,"").trim(),c=Object.values(this.state.recipes).find(_=>_.name===a);c&&c.ingredients&&c.ingredients.forEach(_=>{const I=this.findShopItemByName(_.name),A=this.parseQuantity(_.quantity);I&&A&&(I.consumedQty===void 0&&(I.consumedQty=0),I.consumedQty+=r*A.qty,I.consumedQty=Math.max(0,I.consumedQty))});const d=this.state.cookedMeals[s].indexOf(e);d>-1?this.state.cookedMeals[s].splice(d,1):this.state.cookedMeals[s].push(e),this.saveState(),this.renderMenu(),this.showNotification(n?"Блюдо отмечено как приготовленное!":"Отметка о приготовлении снята.","success")},findShopItemByName(s){if(!s)return null;const e=s.toLowerCase().trim().replace(/ё/g,"е");for(const n of this.state.shoppingList)for(const r of n.items){const a=r.name.toLowerCase().trim().replace(/ё/g,"е");if(a.includes(e)||e.includes(a))return r}return null},parseQuantity(s){if(typeof s!="string")return null;const e=s.match(/(\d+[\.,]?\d*)\s*([а-яА-Яa-zA-Z]+)?/);return e?{qty:parseFloat(e[1].replace(",",".")),unit:(e[2]||"").toLowerCase()}:null},renderShoppingList(){if(!this.state.shoppingList)return;this.dom.shoppingListContainer.innerHTML="",this.state.shoppingList.forEach((e,n)=>{const r=document.createElement("div");r.className="category-group";const a=e.items.map((c,d)=>{const E=(c.purchases||[]).reduce((P,O)=>P+O.qty,0),_=Math.max(0,c.shoppingSuggestion.qty-E),I=_<=0,A=c.shoppingSuggestion.qty>0?Math.min(E/c.shoppingSuggestion.qty*100,100):0,T=10,b=2*Math.PI*T,M=b-A/100*b;return`
                <li class="shopping-item ${I?"completed":""}" data-cat-index="${n}" data-item-index="${d}">
                    <div class="item-checkbox-progress">
                        <svg viewBox="0 0 24 24">
                          <circle class="bg" cx="12" cy="12" r="${T}"></circle>
                          <circle class="progress" cx="12" cy="12" r="${T}" stroke-dasharray="${b}" stroke-dashoffset="${M}"></circle>
                        </svg>
                        <span class="checkmark">✔</span>
                    </div>
                    <div class="item-details">
                        <span class="item-name">${c.name}</span>
                        <div class="item-quantity">
                           Нужно: ${c.shoppingSuggestion.qty.toLocaleString("ru-RU")} ${c.shoppingSuggestion.unit} <br>
                           <span style="font-weight: bold; color: ${_>0?"var(--warning-color)":"var(--success-color)"};">Осталось купить: ${_.toLocaleString("ru-RU")} ${c.shoppingSuggestion.unit}</span>
                        </div>
                    </div>
                    <span class="item-price">${c.price} ₽</span>
                </li>
            `}).join("");r.innerHTML=`
                <button class="category-toggle">${e.category} ▼</button>
                <ul class="category-items">${a}</ul>
            `,this.dom.shoppingListContainer.appendChild(r)}),this.dom.shoppingListContainer.querySelectorAll(".shopping-item").forEach(e=>{e.addEventListener("click",n=>{const{catIndex:r,itemIndex:a}=n.currentTarget.dataset;this.openPurchaseModal(parseInt(r),parseInt(a))})}),this.dom.shoppingListContainer.querySelectorAll(".category-toggle").forEach(e=>{e.addEventListener("click",n=>{const r=n.target.nextElementSibling;r.classList.toggle("collapsed"),n.target.innerHTML=r.classList.contains("collapsed")?n.target.innerHTML.replace("▼","▶"):n.target.innerHTML.replace("▶","▼")})}),this.updateShoppingProgress();const s=this.state.shoppingList.flatMap(e=>e.items).reduce((e,n)=>e+(n.price||0),0);this.dom.shoppingListTotal.innerHTML=`<span>Примерная сумма:</span> ${s.toLocaleString("ru-RU")} ₽`},updateShoppingProgress(){if(!this.state.shoppingList)return;const s=this.state.shoppingList.flatMap(a=>a.items||[]);if(s.length===0)return;const e=s.length,n=s.filter(a=>(a.purchases||[]).reduce((d,E)=>d+E.qty,0)>=a.shoppingSuggestion.qty).length,r=e>0?n/e*100:0;this.dom.shoppingProgress.style.width=`${r}%`,this.dom.shoppingProgressText.textContent=`${n}/${e} куплено`},renderBudget(){const s=this.state.settings.totalBudget,e=this.state.shoppingList.flatMap(a=>a.items||[]).flatMap(a=>a.purchases||[]).reduce((a,c)=>a+c.price,0),n=s-e,r=s>0?Math.min(e/s*100,100):0;this.dom.budget.pieProducts.style.strokeDasharray=`${r} 100`,this.dom.budget.spentTotal.innerHTML=`${e.toLocaleString("ru-RU")} ₽ <span>потрачено</span>`,this.dom.budget.total.textContent=`${s.toLocaleString("ru-RU")} ₽`,this.dom.budget.remaining.textContent=`${n.toLocaleString("ru-RU")} ₽`,this.dom.budget.remaining.className=`amount ${n>=0?"ok":"warning"}`,this.renderBudgetChart()},renderBudgetChart(){const s=this.state.shoppingList.flatMap(a=>a.items||[]).flatMap(a=>a.purchases||[]),e={};for(let a=6;a>=0;a--){const c=new Date;c.setDate(c.getDate()-a);const d=c.toISOString().split("T")[0];e[d]={amount:0,label:c.toLocaleDateString("ru-RU",{weekday:"short"})}}s.forEach(a=>{const c=new Date(a.date).toISOString().split("T")[0];e[c]&&(e[c].amount+=a.price)});const n=Object.values(e).map(a=>a.amount),r=Math.max(...n,1);this.dom.budget.barChart.innerHTML=Object.values(e).map(a=>`
                <div class="bar-chart-item">
                    <div class="bar" style="height: ${a.amount/r*100}%;">
                        ${a.amount>0?`<div class="bar-value">${Math.round(a.amount)}</div>`:""}
                    </div>
                    <div class="bar-label">${a.label}</div>
                </div>
            `).join("")},checkIngredientsForRecipe(s){const e=this.state.recipes[s];if(!e||!e.ingredients){this.showRecipe(s);return}const n=[];e.ingredients.forEach(r=>{const a=this.findShopItemByName(r.name),c=this.parseQuantity(r.quantity);a&&c?(a.purchases||[]).reduce((_,I)=>_+I.qty,0)-(a.consumedQty||0)<c.qty&&n.push(a):n.push({name:r.name,shoppingSuggestion:{qty:(c==null?void 0:c.qty)||1,unit:(c==null?void 0:c.unit)||"шт"}})}),n.length>0?this.showMissingIngredientsWarning(n,s):this.showRecipe(s)},showRecipe(s){if(this.currentRecipe.id=s,this.currentRecipe.step=0,!this.state.recipes[s]){this.showNotification(`Не удалось найти рецепт с ID: ${s}.`,"error");return}this.showScreen("recipe-screen"),this.renderRecipeStep()},renderRecipeStep(){const{id:s,step:e}=this.currentRecipe,n=this.state.recipes[s];if(!n||!n.steps||!n.steps[e]){console.error("Invalid recipe or step:",s,e),this.showNotification("Ошибка при загрузке рецепта.","error"),this.showScreen("main-screen");return}const r=n.steps[e];this.dom.recipeTitle.textContent=n.name,this.dom.stepIndicator.textContent=`Шаг ${e+1}/${n.steps.length}`,this.dom.stepDescription.textContent=r.description,this.dom.stepImage.style.opacity="0.5",r.imageUrl?(this.dom.stepImage.src=r.imageUrl,this.dom.stepImage.alt=r.description,this.dom.stepImage.style.opacity="1"):(this.dom.stepImage.src="",this.dom.stepImage.alt="Генерация изображения...",this.generateStepImage(s,e)),this.stopTimer(),r.time&&r.time>0?(this.timer.initialTime=r.time*60,this.resetTimer(),this.dom.timerSection.classList.remove("hidden")):this.dom.timerSection.classList.add("hidden"),this.dom.stepIngredientsList.innerHTML="",r.ingredients&&r.ingredients.length>0?(this.dom.stepIngredientsTitle.classList.remove("hidden"),r.ingredients.forEach(a=>{const c=document.createElement("li"),d=this.findShopItemByName(a.name),E=this.parseQuantity(a.quantity);let _="unknown",I="❔";d&&E&&((d.purchases||[]).reduce((b,M)=>b+M.qty,0)-(d.consumedQty||0)>=E.qty?(_="completed",I="✅"):(_="missing",I="⚠️")),c.innerHTML=`<span><span class="ingredient-status ${_}">${I}</span> ${a.name}</span> <span class="ingredient-quantity">${a.quantity}</span>`,this.dom.stepIngredientsList.appendChild(c)})):this.dom.stepIngredientsTitle.classList.add("hidden"),this.dom.prevStepBtn.disabled=e===0,this.dom.nextStepBtn.textContent=e===n.steps.length-1?"Завершить ✅":"Далее →"},async generateStepImage(s,e){if(!this.ai)if(this.state.settings.apiKey)this.ai=new _e({apiKey:this.state.settings.apiKey});else return;try{const a=`Food photography, realistic, high-detail photo of a cooking step: "${this.state.recipes[s].steps[e].description}"`,E=`data:image/jpeg;base64,${(await this.ai.models.generateImages({model:"imagen-4.0-generate-001",prompt:a,config:{numberOfImages:1,outputMimeType:"image/jpeg",aspectRatio:"4:3"}})).generatedImages[0].image.imageBytes}`;this.currentRecipe.id===s&&this.currentRecipe.step===e&&(this.dom.stepImage.src=E,this.dom.stepImage.style.opacity="1"),this.state.recipes[s].steps[e].imageUrl=E,this.saveState()}catch(n){console.error("Image generation failed:",n),this.currentRecipe.id===s&&this.currentRecipe.step===e&&(this.dom.stepImage.alt="Не удалось загрузить изображение")}},navigateRecipeStep(s){const{id:e,step:n}=this.currentRecipe,r=this.state.recipes[e];if(s>0&&n===r.steps.length-1){this.finishCooking();return}const a=n+s;a>=0&&a<r.steps.length&&(this.currentRecipe.step=a,this.renderRecipeStep())},finishCooking(){const{id:s}=this.currentRecipe,e=this.state.recipes[s];let n=null;for(const r of this.state.menu){for(const a in r.meals)if((r.meals[a]||"").replace(/\s*\(остатки\)/i,"").trim()===e.name){n={dayName:r.day,mealKey:a};break}if(n)break}n&&this.toggleCookedStatus(n.dayName,n.mealKey),this.showNotification(`"${e.name}" приготовлено!`,"success"),this.showScreen("main-screen")},startTimer(){this.timer.isRunning||this.timer.timeLeft<=0||(this.timer.isRunning=!0,this.timer.interval=setInterval(()=>{this.timer.timeLeft--,this.updateTimerDisplay(),this.timer.timeLeft<=0&&this.stopTimer(!0)},1e3))},pauseTimer(){this.timer.isRunning=!1,clearInterval(this.timer.interval)},stopTimer(s=!1){this.pauseTimer(),s&&(this.dom.timerDisplay.textContent="Готово!",this.showNotification("Таймер завершен!","success"),this.dom.notificationSound.play().catch(e=>console.log("Audio play failed",e)))},resetTimer(){this.stopTimer(),this.timer.timeLeft=this.timer.initialTime,this.updateTimerDisplay()},updateTimerDisplay(){const s=Math.floor(this.timer.timeLeft/60),e=this.timer.timeLeft%60;this.dom.timerDisplay.textContent=`${String(s).padStart(2,"0")}:${String(e).padStart(2,"0")}`},handleNav(s){const e=s.target.closest(".nav-button");if(!e)return;this.dom.bottomNav.querySelectorAll(".nav-button").forEach(r=>r.classList.remove("active")),e.classList.add("active");const n=e.dataset.content;this.dom.mainHeaderTitle.textContent=e.dataset.title,this.dom.mainContents.forEach(r=>{r.classList.toggle("active",r.id===n)}),n==="budget-content"&&this.renderBudget()},showNotification(s,e="success"){this.dom.notification.textContent=s,this.dom.notification.className=e,this.dom.notification.classList.add("show"),e!=="loading"&&setTimeout(()=>{this.dom.notification.classList.remove("show")},3e3)},hideNotification(){this.dom.notification.classList.remove("show")},showModal(s,e,n){this.dom.modalTitle.textContent=s,this.dom.modalBody.innerHTML=e,this.dom.modalButtons.innerHTML="",n.forEach(r=>{const a=document.createElement("button");a.textContent=r.text,a.className=`modal-button ${r.class}`,a.addEventListener("click",()=>{r.action(),r.closes!==!1&&this.hideModal()}),this.dom.modalButtons.appendChild(a)}),this.dom.modalOverlay.classList.add("visible")},hideModal(){this.dom.modalOverlay.classList.remove("visible")},showApiKeyHelpModal(){this.showModal("Как получить API ключ?",`
            <style>
                .help-step { margin-bottom: 20px; }
                .help-step h5 { font-family: var(--font-nunito); font-weight: 700; color: var(--accent-color); margin: 0 0 8px 0; font-size: 18px; }
                .help-step p { margin: 0 0 10px 0; line-height: 1.5; font-size: 15px; }
                .help-step a { color: var(--accent-color); font-weight: 600; }
                .connection-check { background-color: var(--card-accent-bg); padding: 15px; border-radius: 12px; text-align: center; }
                #connection-status { font-weight: 600; margin-top: 10px; min-height: 20px; }
            </style>
            <div class="help-step">
                <h5>Шаг 1: Получение ключа</h5>
                <p>Для работы приложения нужен ваш персональный бесплатный ключ (API Key) от Google Gemini.</p>
                <p>1. Перейдите на сайт <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>.</p>
                <p>2. Нажмите на кнопку <strong>"Create API key in new project"</strong>.</p>
                <p>3. Скопируйте сгенерированный ключ и вставьте его в поле на предыдущем экране.</p>
            </div>
            <div class="help-step">
                <h5>Шаг 2: Проверка доступа</h5>
                <p>Иногда сервисы Google могут быть недоступны в некоторых регионах. Давайте проверим ваш доступ.</p>
                <div class="connection-check">
                    <button class="secondary-button" id="check-connection-btn" style="height: 45px; font-size: 16px;">Проверить доступ</button>
                    <div id="connection-status"></div>
                </div>
            </div>
            <div class="help-step" id="troubleshooting-step" style="display: none;">
                <h5>Что делать, если доступа нет?</h5>
                <p>Если вы видите ошибку или сайт из Шага 1 не открывается, это значит, что сервисы Google AI ограничены в вашем регионе.</p>
                <p><strong>Решение:</strong> Для доступа к таким сервисам можно использовать VPN. VPN изменяет ваше виртуальное местоположение.</p>
                <p>1. Включите любой VPN-сервис и выберите страну, где Gemini доступен (например, США, Великобритания).</p>
                <p>2. Повторите <strong>Шаг 1</strong> и <strong>Шаг 2</strong> с включенным VPN.</p>
                <p>После получения ключа, VPN можно будет отключить для работы с приложением.</p>
            </div>
        `,[{text:"Понятно",class:"primary",action:()=>{}}]),document.getElementById("check-connection-btn").addEventListener("click",async e=>{const n=e.target,r=document.getElementById("connection-status"),a=document.getElementById("troubleshooting-step");n.disabled=!0,r.textContent="Проверяем...",r.style.color="var(--soft-text)";try{await fetch("https://generativelanguage.googleapis.com/$rpc/google.ai.generativelanguage.v1beta.ModelService/ListModels",{method:"GET",mode:"cors"}),r.textContent="✅ Отлично! Доступ есть.",r.style.color="var(--success-color)",a.style.display="none"}catch(c){console.error("Connection check failed:",c),r.textContent="⚠️ Ошибка! Доступ, скорее всего, ограничен.",r.style.color="var(--danger-color)",a.style.display="block"}finally{n.disabled=!1}})},openPurchaseModal(s,e){const n=this.state.shoppingList[s].items[e],r=(n.purchases||[]).reduce((E,_)=>E+_.qty,0),a=Math.max(0,n.shoppingSuggestion.qty-r),c=`
            <p>Нужно купить: ${n.shoppingSuggestion.qty} ${n.shoppingSuggestion.unit}. Осталось: ${a} ${n.shoppingSuggestion.unit}</p>
            <div class="modal-form-group">
                <label for="purchase-qty">Сколько купили (${n.shoppingSuggestion.unit})</label>
                <input type="number" id="purchase-qty" class="modal-input" value="${a>0?a:""}" placeholder="0">
            </div>
            <div class="modal-form-group">
                <label for="purchase-price">Цена за эту покупку (₽)</label>
                <input type="number" id="purchase-price" class="modal-input" placeholder="0">
            </div>
        `,d=[{text:"Отмена",class:"secondary",action:()=>{}},{text:"Сохранить",class:"primary",action:()=>{const E=parseFloat(document.getElementById("purchase-qty").value)||0,_=parseFloat(document.getElementById("purchase-price").value)||0;E>0&&(n.purchases||(n.purchases=[]),n.purchases.push({qty:E,price:_,date:new Date().toISOString()}),this.saveState(),this.renderShoppingList(),this.renderBudget())}}];this.showModal(`Покупка: ${n.name}`,c,d)},async shareMissingItems(s){const e=`Привет! Пожалуйста, купи для ужина:
`+s.map(n=>`- ${n.name} (${n.shoppingSuggestion.qty} ${n.shoppingSuggestion.unit})`).join(`
`);try{navigator.share?await navigator.share({title:"Список покупок",text:e}):(await navigator.clipboard.writeText(e),this.showNotification("Список скопирован в буфер обмена!"))}catch(n){console.error("Share/Copy failed:",n),this.showNotification("Не удалось поделиться/скопировать.","error")}},showMissingIngredientsWarning(s,e){const n=`
            <p>Для приготовления этого блюда вам не хватает следующих продуктов:</p>
            <ul>${s.map(a=>`<li>${a.name}</li>`).join("")}</ul>
            <p>Хотите все равно продолжить или попросить кого-то сходить в магазин?</p>
        `,r=[{text:"Все равно готовить",class:"primary",action:()=>this.showRecipe(e)},{text:"🛒 Попросить купить",class:"secondary",action:()=>this.shareMissingItems(s)},{text:"Назад к меню",class:"secondary",action:()=>{}}];this.showModal("Не хватает ингредиентов",n,r)},showSettingsPanel(){this.renderSettings(),this.dom.settingsScreen.classList.remove("hidden"),setTimeout(()=>this.dom.settingsScreen.classList.add("active"),10)},hideSettingsPanel(){this.dom.settingsScreen.classList.remove("active"),setTimeout(()=>{this.dom.settingsScreen.classList.add("hidden")},500)},renderSettings(){const s=this.state.settings;this.dom.settings.duration.value=s.menuDuration,this.dom.settings.budget.value=s.totalBudget,this.dom.settings.preferences.value=s.preferences,this.dom.settings.cuisine.value=s.cuisine,this.dom.settings.difficulty.value=s.difficulty,this.dom.settings.apiKeyInput.value=s.apiKey||"",this.dom.settings.appVersionInfo.textContent=`Версия приложения: ${this.version}`,this.renderFamilyMembers()},saveSettings(){const s=this.state.settings;s.menuDuration=parseInt(this.dom.settings.duration.value)||7,s.totalBudget=parseInt(this.dom.settings.budget.value)||1e4,s.preferences=this.dom.settings.preferences.value,s.cuisine=this.dom.settings.cuisine.value,s.difficulty=this.dom.settings.difficulty.value,this.saveState(),this.renderBudget(),this.showNotification("Настройки сохранены. Чтобы они применились, перегенерируйте меню.")},async saveApiKey(){const s=this.dom.settings.apiKeyInput.value.trim();if(!s){this.showNotification("API ключ не может быть пустым","error");return}this.showNotification("Проверка ключа...","loading");try{const e=new _e({apiKey:s});await e.models.generateContent({model:"gemini-2.5-flash",contents:"test"}),this.state.settings.apiKey=s,this.ai=e,this.saveState(),this.showNotification("API ключ успешно сохранен и проверен!")}catch(e){console.error("API Key validation failed:",e),this.showNotification("Неверный API ключ. Проверьте его и попробуйте снова.","error")}},renderFamilyMembers(s=!1){const e=s?this.dom.wizardFamilyContainer:this.dom.settings.familyContainer;if(e.innerHTML="",this.state.settings.family.length===0&&!s){e.innerHTML='<p style="color: var(--soft-text); text-align: center;">Пока не добавлено ни одного члена семьи.</p>';return}this.state.settings.family.forEach((n,r)=>{const a=document.createElement("div");a.className="family-member-card",a.innerHTML=`
                <div>
                    <strong>${n.name}</strong>
                    <div style="font-size: 12px; color: var(--soft-text);">
                        ${n.weight}кг, ${n.height}см, Цель: ${{lose:"Снижение",maintain:"Поддержание",gain:"Набор"}[n.goal]}
                    </div>
                </div>
                <button class="edit-member-btn" data-index="${r}">✏️</button>
            `,e.appendChild(a)}),e.querySelectorAll(".edit-member-btn").forEach(n=>{n.addEventListener("click",r=>{const a=parseInt(r.currentTarget.dataset.index),c=this.state.settings.family[a];this.openFamilyMemberModal(s,c,a)})})},openFamilyMemberModal(s=!1,e=null,n=-1){const r=e?"Редактировать данные":"Добавить члена семьи",a=e?"Сохранить":"Добавить",c=`
            <div class="modal-form-group">
                <label for="modal-member-name">Имя</label>
                <input type="text" id="modal-member-name" class="modal-input" value="${(e==null?void 0:e.name)||""}" placeholder="Например, Папа">
            </div>
            <div class="modal-form-group">
                <label for="modal-member-weight">Вес (кг)</label>
                <input type="number" id="modal-member-weight" class="modal-input" value="${(e==null?void 0:e.weight)||70}" placeholder="70">
            </div>
            <div class="modal-form-group">
                <label for="modal-member-height">Рост (см)</label>
                <input type="number" id="modal-member-height" class="modal-input" value="${(e==null?void 0:e.height)||175}" placeholder="175">
            </div>
            <div class="modal-form-group">
                <label for="modal-member-goal">Цель</label>
                <select id="modal-member-goal" class="settings-select" style="height: 45px;">
                    <option value="lose" ${(e==null?void 0:e.goal)==="lose"?"selected":""}>Снижение веса</option>
                    <option value="maintain" ${!e||(e==null?void 0:e.goal)==="maintain"?"selected":""}>Поддержание веса</option>
                    <option value="gain" ${(e==null?void 0:e.goal)==="gain"?"selected":""}>Набор массы</option>
                </select>
            </div>
        `,d=[{text:"Отмена",class:"secondary",action:()=>{}},e?{text:"Удалить",class:"secondary",action:()=>{this.state.settings.family.splice(n,1),this.saveState(),this.renderFamilyMembers(s),s||this.renderFamilyMembers(!1),this.updateWizardView()}}:null,{text:a,class:"primary",action:()=>{const E={name:document.getElementById("modal-member-name").value.trim()||"Член семьи",weight:parseInt(document.getElementById("modal-member-weight").value)||70,height:parseInt(document.getElementById("modal-member-height").value)||175,goal:document.getElementById("modal-member-goal").value};n>-1?this.state.settings.family[n]=E:this.state.settings.family.push(E),this.saveState(),this.renderFamilyMembers(s),s||this.renderFamilyMembers(!1),this.updateWizardView()}}].filter(Boolean);this.showModal(r,c,d)},confirmRegenerateAll(){this.showModal("Подтверждение","<p>Вы уверены, что хотите полностью перегенерировать меню? Все текущие данные будут удалены, но ИИ постарается использовать уже купленные продукты.</p>",[{text:"Отмена",class:"secondary",action:()=>{}},{text:"Да, перегенерировать",class:"primary",action:()=>{const s=(this.state.shoppingList||[]).flatMap(e=>e.items||[]).filter(e=>(e.purchases||[]).length>0).map(e=>`${e.name} (${e.purchases.reduce((n,r)=>n+r.qty,0)} ${e.shoppingSuggestion.unit})`).join(", ");this.hideSettingsPanel(),this.startGenerationProcess(!0,s)}}])},showChangelogModal(){const e=Object.keys(this.changelog).sort((n,r)=>r.localeCompare(n,void 0,{numeric:!0})).map(n=>`
            <h4>Версия ${n}</h4>
            <ul>
                ${this.changelog[n].map(r=>`<li>${r}</li>`).join("")}
            </ul>
        `).join("");this.showModal("История изменений",e,[{text:"Закрыть",class:"primary",action:()=>{}}])},openRegenerateModal(s,e){const n=s==="meal"?"Перегенерировать блюдо":"Перегенерировать день",r=`
            <p>Вы можете указать дополнительные пожелания для этого обновления.</p>
            <div class="modal-form-group">
                <label for="regen-prompt">Пожелания (необязательно)</label>
                <textarea id="regen-prompt" class="modal-textarea" rows="2" placeholder="Например: что-то более легкое"></textarea>
            </div>
        `,a=[{text:"Отмена",class:"secondary",action:()=>{}},{text:"Перегенерировать",class:"primary",action:()=>{var d;const c=((d=document.getElementById("regen-prompt"))==null?void 0:d.value)||"";this.handleRegeneration(s,e,!1,c)}}];this.showModal(n,r,a)},async handleRegeneration(s,e,n=!1,r=""){var c;this.showNotification("Обновляем меню...","loading");const a=n?this.tempState:this.state;if(a){if(!this.ai)if(this.state.settings.apiKey)this.ai=new _e({apiKey:this.state.settings.apiKey});else{this.showNotification("API ключ не настроен.","error");return}try{let d="";const E=JSON.stringify(a.menu.map(A=>({day:A.day,meals:A.meals})));if(s==="meal"){const{dayName:A,mealKey:T}=e,b=(c=a.menu.find(M=>M.day===A))==null?void 0:c.meals[T];d=`Основываясь на существующем меню: ${E}. СДЕЛАЙ ТОЛЬКО ОДНО ИЗМЕНЕНИЕ: для дня "${A}" замени блюдо "${T}" ("${b}") на что-то другое. Пожелание: ${r||"сделай что-нибудь другое"}. Сохрани все остальные блюда в меню без изменений. Затем обнови список рецептов и покупок в соответствии с этим одним изменением.`}else{const{dayName:A}=e;d=`Основываясь на существующем меню: ${E}. СДЕЛАЙ ИЗМЕНЕНИЯ ТОЛЬКО ДЛЯ ОДНОГО ДНЯ: полностью обнови меню для дня "${A}". Пожелание: ${r||"сделай этот день разнообразнее"}. Сохрани меню для всех остальных дней без изменений. Затем обнови список рецептов и покупок в соответствии с изменениями этого дня.`}const _=(this.state.shoppingList||[]).flatMap(A=>A.items||[]).filter(A=>(A.purchases||[]).length>0).map(A=>A.name).join(", "),I=await this.generateComprehensiveData(_,d);n?(this.tempState=I,this.renderPreview(),this.showNotification("Предпросмотр обновлен!")):(Object.assign(this.state,I),this.saveState(),this.renderAll(),this.showNotification("Меню успешно обновлено!"))}catch(d){this.showNotification("Ошибка при обновлении.","error"),console.error(d)}}},renderPreview(){const s=this.dom.previewMenuContainer;s.innerHTML="",!(!this.tempState||!this.tempState.menu)&&(this.tempState.menu.forEach(e=>{const n=document.createElement("div");n.className="preview-day";const r=Object.entries(e.meals).map(([a,c])=>`
                <div class="preview-meal" data-day-name="${e.day}" data-meal-key="${a}">
                    <span class="preview-meal-name">${c||"..."}</span>
                    <button class="regenerate-btn" title="Изменить это блюдо">${this.getRegenerateIcon()}</button>
                </div>
            `).join("");n.innerHTML=`<h4 class="preview-day-title">${e.day}</h4>${r}`,s.appendChild(n)}),s.querySelectorAll(".regenerate-btn").forEach(e=>{e.addEventListener("click",n=>{const r=n.target.closest(".preview-meal"),{dayName:a,mealKey:c}=r.dataset,d=this.tempState.menu.find(E=>E.day===a).meals[c];this.showModal("Изменить блюдо",`<p>Что бы вы хотели видеть вместо "${d}"?</p>
                     <textarea id="regen-prompt" class="modal-textarea" rows="2" placeholder="Например: что-то из курицы"></textarea>`,[{text:"Отмена",class:"secondary",action:()=>{}},{text:"Изменить",class:"primary",action:()=>{var _;const E=((_=document.getElementById("regen-prompt"))==null?void 0:_.value)||"";this.handleRegeneration("meal",{dayName:a,mealKey:c},!0,E)}}])})}))},acceptPreview(){this.tempState&&(Object.assign(this.state,this.tempState),this.state.timestamp=new Date().toISOString(),this.state.currentDayIndex=0,this.saveState(),this.tempState=null,this.showScreen("main-screen"),this.renderAll(),this.showNotification("Меню сохранено!"))},async exportData(){const s=`family_menu_backup_${new Date().toISOString().split("T")[0]}.json`,e=new Blob([JSON.stringify(this.state)],{type:"application/json"});try{const n=new File([e],s,{type:"application/json"});if(navigator.share&&navigator.canShare({files:[n]})){await navigator.share({files:[n],title:"Конфигурация Семейного Меню",text:'Файл с данными меню. Загрузи его в приложении "Семейное меню+".'}),this.showNotification("Данными успешно поделились!");return}}catch(n){n.name!=="AbortError"&&console.error("Share failed:",n)}try{const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=s,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),this.showNotification("Файл для синхронизации скачан!")}catch(n){console.error("Fallback download failed:",n),this.showNotification("Не удалось поделиться или скачать файл.","error")}},importData(s){const e=s.target.files[0];if(!e)return;const n=new FileReader;n.onload=r=>{try{const a=JSON.parse(r.target.result);if(a.settings)this.state=a,this.saveState(),this.showNotification("Данные успешно импортированы!"),this.handleStartSetup();else throw new Error("Invalid file format")}catch{this.showNotification("Ошибка импорта: неверный формат файла.","error")}},n.readAsText(e),s.target.value=""},toggleDevConsole(){this.dom.devConsole.classList.toggle("visible")},logToConsole(s){const e=document.createElement("p");e.textContent=`[${new Date().toLocaleTimeString()}] ${s}`,this.dom.logOutput.appendChild(e),this.dom.logOutput.scrollTop=this.dom.logOutput.scrollHeight},executeCommand(s){this.logToConsole(`> ${s}`);try{switch(s.toLowerCase()){case"clear":this.dom.logOutput.innerHTML="";break;case"state":console.log(this.state),this.logToConsole("State logged to browser console.");break;case"reset":this.resetState();break;default:this.logToConsole("Unknown command. Available: clear, state, reset")}}catch(e){this.logToConsole(`Error: ${e.message}`)}this.dom.commandInput.value=""}};document.addEventListener("DOMContentLoaded",()=>Sa.init());
