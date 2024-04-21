(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vn(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const le={},yt=[],Ee=()=>{},ri=()=>!1,ln=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Wn=e=>e.startsWith("onUpdate:"),ye=Object.assign,zn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},si=Object.prototype.hasOwnProperty,ee=(e,t)=>si.call(e,t),z=Array.isArray,bt=e=>an(e)==="[object Map]",zr=e=>an(e)==="[object Set]",J=e=>typeof e=="function",he=e=>typeof e=="string",pt=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Kr=e=>(ue(e)||J(e))&&J(e.then)&&J(e.catch),Xr=Object.prototype.toString,an=e=>Xr.call(e),ii=e=>an(e).slice(8,-1),Gr=e=>an(e)==="[object Object]",Kn=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=Vn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),un=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},oi=/-(\w)/g,Tt=un(e=>e.replace(oi,(t,n)=>n?n.toUpperCase():"")),li=/\B([A-Z])/g,$t=un(e=>e.replace(li,"-$1").toLowerCase()),qr=un(e=>e.charAt(0).toUpperCase()+e.slice(1)),xn=un(e=>e?`on${qr(e)}`:""),et=(e,t)=>!Object.is(e,t),Tn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Jr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ai=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let dr;const Yr=()=>dr||(dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cn(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=he(r)?di(r):cn(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(he(e)||ue(e))return e}const ui=/;(?![^(]*\))/g,ci=/:([^]+)/,fi=/\/\*[^]*?\*\//g;function di(e){const t={};return e.replace(fi,"").split(ui).forEach(n=>{if(n){const r=n.split(ci);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function fn(e){let t="";if(he(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=fn(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hi=Vn(pi);function Zr(e){return!!e||e===""}const Ht=e=>he(e)?e:e==null?"":z(e)||ue(e)&&(e.toString===Xr||!J(e.toString))?JSON.stringify(e,Qr,2):String(e),Qr=(e,t)=>t&&t.__v_isRef?Qr(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[Sn(r,s)+" =>"]=i,n),{})}:zr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Sn(n))}:pt(t)?Sn(t):ue(t)&&!z(t)&&!Gr(t)?String(t):t,Sn=(e,t="")=>{var n;return pt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class es{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ts(e){return new es(e)}function _i(e,t=we){t&&t.active&&t.effects.push(e)}function ns(){return we}function gi(e){we&&we.cleanups.push(e)}let ct;class Xn{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,_i(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,nt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(mi(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),rt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ze,n=ct;try{return Ze=!0,ct=this,this._runnings++,pr(this),this.fn()}finally{hr(this),this._runnings--,ct=n,Ze=t}}stop(){var t;this.active&&(pr(this),hr(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function mi(e){return e.value}function pr(e){e._trackId++,e._depsLength=0}function hr(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)rs(e.deps[t],e);e.deps.length=e._depsLength}}function rs(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ze=!0,Ln=0;const ss=[];function nt(){ss.push(Ze),Ze=!1}function rt(){const e=ss.pop();Ze=e===void 0?!0:e}function Gn(){Ln++}function qn(){for(Ln--;!Ln&&In.length;)In.shift()()}function is(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&rs(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const In=[];function os(e,t,n){Gn();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&In.push(r.scheduler)))}qn()}const ls=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},en=new WeakMap,ft=Symbol(""),On=Symbol("");function Se(e,t,n){if(Ze&&ct){let r=en.get(e);r||en.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=ls(()=>r.delete(n))),is(ct,i)}}function Ve(e,t,n,r,i,s){const o=en.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&z(e)){const u=Number(r);o.forEach((p,_)=>{(_==="length"||!pt(_)&&_>=u)&&l.push(p)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":z(e)?Kn(n)&&l.push(o.get("length")):(l.push(o.get(ft)),bt(e)&&l.push(o.get(On)));break;case"delete":z(e)||(l.push(o.get(ft)),bt(e)&&l.push(o.get(On)));break;case"set":bt(e)&&l.push(o.get(ft));break}Gn();for(const u of l)u&&os(u,4);qn()}function yi(e,t){var n;return(n=en.get(e))==null?void 0:n.get(t)}const bi=Vn("__proto__,__v_isRef,__isVue"),as=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pt)),_r=vi();function vi(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=te(this);for(let s=0,o=this.length;s<o;s++)Se(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nt(),Gn();const r=te(this)[t].apply(this,n);return qn(),rt(),r}}),e}function xi(e){pt(e)||(e=String(e));const t=te(this);return Se(t,"has",e),t.hasOwnProperty(e)}class us{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?ki:ps:s?ds:fs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=z(t);if(!i){if(o&&ee(_r,n))return Reflect.get(_r,n,r);if(n==="hasOwnProperty")return xi}const l=Reflect.get(t,n,r);return(pt(n)?as.has(n):bi(n))||(i||Se(t,"get",n),s)?l:fe(l)?o&&Kn(n)?l:l.value:ue(l)?i?hs(l):pn(l):l}}class cs extends us{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const u=Pt(s);if(!tn(r)&&!Pt(r)&&(s=te(s),r=te(r)),!z(t)&&fe(s)&&!fe(r))return u?!1:(s.value=r,!0)}const o=z(t)&&Kn(n)?Number(n)<t.length:ee(t,n),l=Reflect.set(t,n,r,i);return t===te(i)&&(o?et(r,s)&&Ve(t,"set",n,r):Ve(t,"add",n,r)),l}deleteProperty(t,n){const r=ee(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Ve(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!pt(n)||!as.has(n))&&Se(t,"has",n),r}ownKeys(t){return Se(t,"iterate",z(t)?"length":ft),Reflect.ownKeys(t)}}class Ti extends us{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Si=new cs,$i=new Ti,wi=new cs(!0),Jn=e=>e,dn=e=>Reflect.getPrototypeOf(e);function Wt(e,t,n=!1,r=!1){e=e.__v_raw;const i=te(e),s=te(t);n||(et(t,s)&&Se(i,"get",t),Se(i,"get",s));const{has:o}=dn(i),l=r?Jn:n?er:Nt;if(o.call(i,t))return l(e.get(t));if(o.call(i,s))return l(e.get(s));e!==i&&e.get(t)}function zt(e,t=!1){const n=this.__v_raw,r=te(n),i=te(e);return t||(et(e,i)&&Se(r,"has",e),Se(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Kt(e,t=!1){return e=e.__v_raw,!t&&Se(te(e),"iterate",ft),Reflect.get(e,"size",e)}function gr(e){e=te(e);const t=te(this);return dn(t).has.call(t,e)||(t.add(e),Ve(t,"add",e,e)),this}function mr(e,t){t=te(t);const n=te(this),{has:r,get:i}=dn(n);let s=r.call(n,e);s||(e=te(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?et(t,o)&&Ve(n,"set",e,t):Ve(n,"add",e,t),this}function yr(e){const t=te(this),{has:n,get:r}=dn(t);let i=n.call(t,e);i||(e=te(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&Ve(t,"delete",e,void 0),s}function br(){const e=te(this),t=e.size!==0,n=e.clear();return t&&Ve(e,"clear",void 0,void 0),n}function Xt(e,t){return function(r,i){const s=this,o=s.__v_raw,l=te(o),u=t?Jn:e?er:Nt;return!e&&Se(l,"iterate",ft),o.forEach((p,_)=>r.call(i,u(p),u(_),s))}}function Gt(e,t,n){return function(...r){const i=this.__v_raw,s=te(i),o=bt(s),l=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,p=i[e](...r),_=n?Jn:t?er:Nt;return!t&&Se(s,"iterate",u?On:ft),{next(){const{value:S,done:A}=p.next();return A?{value:S,done:A}:{value:l?[_(S[0]),_(S[1])]:_(S),done:A}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ci(){const e={get(s){return Wt(this,s)},get size(){return Kt(this)},has:zt,add:gr,set:mr,delete:yr,clear:br,forEach:Xt(!1,!1)},t={get(s){return Wt(this,s,!1,!0)},get size(){return Kt(this)},has:zt,add:gr,set:mr,delete:yr,clear:br,forEach:Xt(!1,!0)},n={get(s){return Wt(this,s,!0)},get size(){return Kt(this,!0)},has(s){return zt.call(this,s,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Xt(!0,!1)},r={get(s){return Wt(this,s,!0,!0)},get size(){return Kt(this,!0)},has(s){return zt.call(this,s,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Xt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Gt(s,!1,!1),n[s]=Gt(s,!0,!1),t[s]=Gt(s,!1,!0),r[s]=Gt(s,!0,!0)}),[e,n,t,r]}const[Fi,Ei,Ai,Li]=Ci();function Yn(e,t){const n=t?e?Li:Ai:e?Ei:Fi;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ee(n,i)&&i in r?n:r,i,s)}const Ii={get:Yn(!1,!1)},Oi={get:Yn(!1,!0)},Mi={get:Yn(!0,!1)},fs=new WeakMap,ds=new WeakMap,ps=new WeakMap,ki=new WeakMap;function Di(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pi(e){return e.__v_skip||!Object.isExtensible(e)?0:Di(ii(e))}function pn(e){return Pt(e)?e:Zn(e,!1,Si,Ii,fs)}function Ni(e){return Zn(e,!1,wi,Oi,ds)}function hs(e){return Zn(e,!0,$i,Mi,ps)}function Zn(e,t,n,r,i){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Pi(e);if(o===0)return e;const l=new Proxy(e,o===2?r:n);return i.set(e,l),l}function dt(e){return Pt(e)?dt(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function tn(e){return!!(e&&e.__v_isShallow)}function _s(e){return e?!!e.__v_raw:!1}function te(e){const t=e&&e.__v_raw;return t?te(t):e}function Qn(e){return Object.isExtensible(e)&&Jr(e,"__v_skip",!0),e}const Nt=e=>ue(e)?pn(e):e,er=e=>ue(e)?hs(e):e;class gs{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Xn(()=>t(this._value),()=>Jt(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=te(this);return(!t._cacheable||t.effect.dirty)&&et(t._value,t._value=t.effect.run())&&Jt(t,4),ms(t),t.effect._dirtyLevel>=2&&Jt(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ri(e,t,n=!1){let r,i;const s=J(e);return s?(r=e,i=Ee):(r=e.get,i=e.set),new gs(r,i,s||!i,n)}function ms(e){var t;Ze&&ct&&(e=te(e),is(ct,(t=e.dep)!=null?t:e.dep=ls(()=>e.dep=void 0,e instanceof gs?e:void 0)))}function Jt(e,t=4,n){e=te(e);const r=e.dep;r&&os(r,t)}function fe(e){return!!(e&&e.__v_isRef===!0)}function _e(e){return ji(e,!1)}function ji(e,t){return fe(e)?e:new Bi(e,t)}class Bi{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:te(t),this._value=n?t:Nt(t)}get value(){return ms(this),this._value}set value(t){const n=this.__v_isShallow||tn(t)||Pt(t);t=n?t:te(t),et(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Nt(t),Jt(this,4))}}function X(e){return fe(e)?e.value:e}const Hi={get:(e,t,n)=>X(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ys(e){return dt(e)?e:new Proxy(e,Hi)}function Ui(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=Wi(e,n);return t}class Vi{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return yi(te(this._object),this._key)}}function Wi(e,t,n){const r=e[t];return fe(r)?r:new Vi(e,t,n)}/**
* @vue/runtime-core v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qe(e,t,n,r){try{return r?e(...r):e()}catch(i){hn(i,t,n)}}function Oe(e,t,n,r){if(J(e)){const i=Qe(e,t,n,r);return i&&Kr(i)&&i.catch(s=>{hn(s,t,n)}),i}if(z(e)){const i=[];for(let s=0;s<e.length;s++)i.push(Oe(e[s],t,n,r));return i}}function hn(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const p=s.ec;if(p){for(let _=0;_<p.length;_++)if(p[_](e,o,l)===!1)return}s=s.parent}const u=t.appContext.config.errorHandler;if(u){nt(),Qe(u,null,10,[e,o,l]),rt();return}}zi(e,n,i,r)}function zi(e,t,n,r=!0){console.error(e)}let Rt=!1,Mn=!1;const ge=[];let je=0;const vt=[];let qe=null,ut=0;const bs=Promise.resolve();let tr=null;function vs(e){const t=tr||bs;return e?t.then(this?e.bind(this):e):t}function Ki(e){let t=je+1,n=ge.length;for(;t<n;){const r=t+n>>>1,i=ge[r],s=jt(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function nr(e){(!ge.length||!ge.includes(e,Rt&&e.allowRecurse?je+1:je))&&(e.id==null?ge.push(e):ge.splice(Ki(e.id),0,e),xs())}function xs(){!Rt&&!Mn&&(Mn=!0,tr=bs.then(Ss))}function Xi(e){const t=ge.indexOf(e);t>je&&ge.splice(t,1)}function Gi(e){z(e)?vt.push(...e):(!qe||!qe.includes(e,e.allowRecurse?ut+1:ut))&&vt.push(e),xs()}function vr(e,t,n=Rt?je+1:0){for(;n<ge.length;n++){const r=ge[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ge.splice(n,1),n--,r()}}}function Ts(e){if(vt.length){const t=[...new Set(vt)].sort((n,r)=>jt(n)-jt(r));if(vt.length=0,qe){qe.push(...t);return}for(qe=t,ut=0;ut<qe.length;ut++)qe[ut]();qe=null,ut=0}}const jt=e=>e.id==null?1/0:e.id,qi=(e,t)=>{const n=jt(e)-jt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ss(e){Mn=!1,Rt=!0,ge.sort(qi);try{for(je=0;je<ge.length;je++){const t=ge[je];t&&t.active!==!1&&Qe(t,null,14)}}finally{je=0,ge.length=0,Ts(),Rt=!1,tr=null,(ge.length||vt.length)&&Ss()}}function Ji(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const _=`${o==="modelValue"?"model":o}Modifiers`,{number:S,trim:A}=r[_]||le;A&&(i=n.map(D=>he(D)?D.trim():D)),S&&(i=n.map(ai))}let l,u=r[l=xn(t)]||r[l=xn(Tt(t))];!u&&s&&(u=r[l=xn($t(t))]),u&&Oe(u,e,6,i);const p=r[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Oe(p,e,6,i)}}function $s(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},l=!1;if(!J(e)){const u=p=>{const _=$s(p,t,!0);_&&(l=!0,ye(o,_))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!s&&!l?(ue(e)&&r.set(e,null),null):(z(s)?s.forEach(u=>o[u]=null):ye(o,s),ue(e)&&r.set(e,o),o)}function _n(e,t){return!e||!ln(t)?!1:(t=t.slice(2).replace(/Once$/,""),ee(e,t[0].toLowerCase()+t.slice(1))||ee(e,$t(t))||ee(e,t))}let ve=null,gn=null;function nn(e){const t=ve;return ve=e,gn=e&&e.type.__scopeId||null,t}function ws(e){gn=e}function Cs(){gn=null}function H(e,t=ve,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Lr(-1);const s=nn(t);let o;try{o=e(...i)}finally{nn(s),r._d&&Lr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $n(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:l,attrs:u,emit:p,render:_,renderCache:S,data:A,setupState:D,ctx:Y,inheritAttrs:P}=e;let R,V;const g=nn(e);try{if(n.shapeFlag&4){const v=i||r,x=v;R=Re(_.call(x,v,S,s,D,A,Y)),V=u}else{const v=t;R=Re(v.length>1?v(s,{attrs:u,slots:l,emit:p}):v(s,null)),V=t.props?u:Yi(u)}}catch(v){kt.length=0,hn(v,e,1),R=k(tt)}let d=R;if(V&&P!==!1){const v=Object.keys(V),{shapeFlag:x}=d;v.length&&x&7&&(o&&v.some(Wn)&&(V=Zi(V,o)),d=St(d,V))}return n.dirs&&(d=St(d),d.dirs=d.dirs?d.dirs.concat(n.dirs):n.dirs),n.transition&&(d.transition=n.transition),R=d,nn(g),R}const Yi=e=>{let t;for(const n in e)(n==="class"||n==="style"||ln(n))&&((t||(t={}))[n]=e[n]);return t},Zi=(e,t)=>{const n={};for(const r in e)(!Wn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Qi(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:l,patchFlag:u}=t,p=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?xr(r,o,p):!!o;if(u&8){const _=t.dynamicProps;for(let S=0;S<_.length;S++){const A=_[S];if(o[A]!==r[A]&&!_n(p,A))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?xr(r,o,p):!0:!!o;return!1}function xr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!_n(n,s))return!0}return!1}function eo({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const to=Symbol.for("v-ndc"),no=e=>e.__isSuspense;function ro(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Gi(e)}const so=Symbol.for("v-scx"),io=()=>Mt(so),qt={};function Yt(e,t,n){return Fs(e,t,n)}function Fs(e,t,{immediate:n,deep:r,flush:i,once:s,onTrack:o,onTrigger:l}=le){if(t&&s){const m=t;t=(...O)=>{m(...O),x()}}const u=me,p=m=>r===!0?m:mt(m,r===!1?1:void 0);let _,S=!1,A=!1;if(fe(e)?(_=()=>e.value,S=tn(e)):dt(e)?(_=()=>p(e),S=!0):z(e)?(A=!0,S=e.some(m=>dt(m)||tn(m)),_=()=>e.map(m=>{if(fe(m))return m.value;if(dt(m))return p(m);if(J(m))return Qe(m,u,2)})):J(e)?t?_=()=>Qe(e,u,2):_=()=>(D&&D(),Oe(e,u,3,[Y])):_=Ee,t&&r){const m=_;_=()=>mt(m())}let D,Y=m=>{D=d.onStop=()=>{Qe(m,u,4),D=d.onStop=void 0}},P;if(bn)if(Y=Ee,t?n&&Oe(t,u,3,[_(),A?[]:void 0,Y]):_(),i==="sync"){const m=io();P=m.__watcherHandles||(m.__watcherHandles=[])}else return Ee;let R=A?new Array(e.length).fill(qt):qt;const V=()=>{if(!(!d.active||!d.dirty))if(t){const m=d.run();(r||S||(A?m.some((O,I)=>et(O,R[I])):et(m,R)))&&(D&&D(),Oe(t,u,3,[m,R===qt?void 0:A&&R[0]===qt?[]:R,Y]),R=m)}else d.run()};V.allowRecurse=!!t;let g;i==="sync"?g=V:i==="post"?g=()=>Te(V,u&&u.suspense):(V.pre=!0,u&&(V.id=u.uid),g=()=>nr(V));const d=new Xn(_,Ee,g),v=ns(),x=()=>{d.stop(),v&&zn(v.effects,d)};return t?n?V():R=d.run():i==="post"?Te(d.run.bind(d),u&&u.suspense):d.run(),P&&P.push(x),x}function oo(e,t,n){const r=this.proxy,i=he(e)?e.includes(".")?Es(r,e):()=>r[e]:e.bind(r,r);let s;J(t)?s=t:(s=t.handler,n=t);const o=Ut(this),l=Fs(i,s.bind(r),n);return o(),l}function Es(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function mt(e,t,n=0,r){if(!ue(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),fe(e))mt(e.value,t,n,r);else if(z(e))for(let i=0;i<e.length;i++)mt(e[i],t,n,r);else if(zr(e)||bt(e))e.forEach(i=>{mt(i,t,n,r)});else if(Gr(e))for(const i in e)mt(e[i],t,n,r);return e}function lt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let u=l.dir[r];u&&(nt(),Oe(u,n,8,[e.el,l,e,t]),rt())}}const It=e=>!!e.type.__asyncLoader,As=e=>e.type.__isKeepAlive;function lo(e,t){Ls(e,"a",t)}function ao(e,t){Ls(e,"da",t)}function Ls(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(mn(t,r,n),n){let i=n.parent;for(;i&&i.parent;)As(i.parent.vnode)&&uo(r,t,n,i),i=i.parent}}function uo(e,t,n,r){const i=mn(t,e,r,!0);Is(()=>{zn(r[t],i)},n)}function mn(e,t,n=me,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nt();const l=Ut(n),u=Oe(t,n,e,o);return l(),rt(),u});return r?i.unshift(s):i.push(s),s}}const We=e=>(t,n=me)=>(!bn||e==="sp")&&mn(e,(...r)=>t(...r),n),co=We("bm"),rr=We("m"),fo=We("bu"),po=We("u"),ho=We("bum"),Is=We("um"),_o=We("sp"),go=We("rtg"),mo=We("rtc");function yo(e,t=me){mn("ec",e,t)}function Os(e,t,n={},r,i){if(ve.isCE||ve.parent&&It(ve.parent)&&ve.parent.isCE)return t!=="default"&&(n.name=t),k("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),$();const o=s&&Ms(s(n)),l=q(B,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Ms(e){return e.some(t=>Ks(t)?!(t.type===tt||t.type===B&&!Ms(t.children)):!0)?e:null}const kn=e=>e?Gs(e)?lr(e)||e.proxy:kn(e.parent):null,Ot=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kn(e.parent),$root:e=>kn(e.root),$emit:e=>e.emit,$options:e=>sr(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,nr(e.update)}),$nextTick:e=>e.n||(e.n=vs.bind(e.proxy)),$watch:e=>oo.bind(e)}),wn=(e,t)=>e!==le&&!e.__isScriptSetup&&ee(e,t),bo={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:u}=e;let p;if(t[0]!=="$"){const D=o[t];if(D!==void 0)switch(D){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(wn(r,t))return o[t]=1,r[t];if(i!==le&&ee(i,t))return o[t]=2,i[t];if((p=e.propsOptions[0])&&ee(p,t))return o[t]=3,s[t];if(n!==le&&ee(n,t))return o[t]=4,n[t];Dn&&(o[t]=0)}}const _=Ot[t];let S,A;if(_)return t==="$attrs"&&Se(e.attrs,"get",""),_(e);if((S=l.__cssModules)&&(S=S[t]))return S;if(n!==le&&ee(n,t))return o[t]=4,n[t];if(A=u.config.globalProperties,ee(A,t))return A[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return wn(i,t)?(i[t]=n,!0):r!==le&&ee(r,t)?(r[t]=n,!0):ee(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||e!==le&&ee(e,o)||wn(t,o)||(l=s[0])&&ee(l,o)||ee(r,o)||ee(Ot,o)||ee(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ee(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Tr(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dn=!0;function vo(e){const t=sr(e),n=e.proxy,r=e.ctx;Dn=!1,t.beforeCreate&&Sr(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:l,provide:u,inject:p,created:_,beforeMount:S,mounted:A,beforeUpdate:D,updated:Y,activated:P,deactivated:R,beforeDestroy:V,beforeUnmount:g,destroyed:d,unmounted:v,render:x,renderTracked:m,renderTriggered:O,errorCaptured:I,serverPrefetch:F,expose:G,inheritAttrs:ne,components:ce,directives:Be,filters:ze}=t;if(p&&xo(p,r,null),o)for(const ie in o){const K=o[ie];J(K)&&(r[ie]=K.bind(n))}if(i){const ie=i.call(n,n);ue(ie)&&(e.data=pn(ie))}if(Dn=!0,s)for(const ie in s){const K=s[ie],de=J(K)?K.bind(n,n):J(K.get)?K.get.bind(n,n):Ee,Ae=!J(K)&&J(K.set)?K.set.bind(n):Ee,Ce=Js({get:de,set:Ae});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:ae=>Ce.value=ae})}if(l)for(const ie in l)ks(l[ie],r,n,ie);if(u){const ie=J(u)?u.call(n):u;Reflect.ownKeys(ie).forEach(K=>{Fo(K,ie[K])})}_&&Sr(_,e,"c");function re(ie,K){z(K)?K.forEach(de=>ie(de.bind(n))):K&&ie(K.bind(n))}if(re(co,S),re(rr,A),re(fo,D),re(po,Y),re(lo,P),re(ao,R),re(yo,I),re(mo,m),re(go,O),re(ho,g),re(Is,v),re(_o,F),z(G))if(G.length){const ie=e.exposed||(e.exposed={});G.forEach(K=>{Object.defineProperty(ie,K,{get:()=>n[K],set:de=>n[K]=de})})}else e.exposed||(e.exposed={});x&&e.render===Ee&&(e.render=x),ne!=null&&(e.inheritAttrs=ne),ce&&(e.components=ce),Be&&(e.directives=Be)}function xo(e,t,n=Ee){z(e)&&(e=Pn(e));for(const r in e){const i=e[r];let s;ue(i)?"default"in i?s=Mt(i.from||r,i.default,!0):s=Mt(i.from||r):s=Mt(i),fe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function Sr(e,t,n){Oe(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ks(e,t,n,r){const i=r.includes(".")?Es(n,r):()=>n[r];if(he(e)){const s=t[e];J(s)&&Yt(i,s)}else if(J(e))Yt(i,e.bind(n));else if(ue(e))if(z(e))e.forEach(s=>ks(s,t,n,r));else{const s=J(e.handler)?e.handler.bind(n):t[e.handler];J(s)&&Yt(i,s,e)}}function sr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,l=s.get(t);let u;return l?u=l:!i.length&&!n&&!r?u=t:(u={},i.length&&i.forEach(p=>rn(u,p,o,!0)),rn(u,t,o)),ue(t)&&s.set(t,u),u}function rn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&rn(e,s,n,!0),i&&i.forEach(o=>rn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=To[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const To={data:$r,props:wr,emits:wr,methods:At,computed:At,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:At,directives:At,watch:$o,provide:$r,inject:So};function $r(e,t){return t?e?function(){return ye(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function So(e,t){return At(Pn(e),Pn(t))}function Pn(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?ye(Object.create(null),e,t):t}function wr(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:ye(Object.create(null),Tr(e),Tr(t??{})):t}function $o(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Ds(){return{app:null,config:{isNativeTag:ri,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wo=0;function Co(e,t){return function(r,i=null){J(r)||(r=ye({},r)),i!=null&&!ue(i)&&(i=null);const s=Ds(),o=new WeakSet;let l=!1;const u=s.app={_uid:wo++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Yo,get config(){return s.config},set config(p){},use(p,..._){return o.has(p)||(p&&J(p.install)?(o.add(p),p.install(u,..._)):J(p)&&(o.add(p),p(u,..._))),u},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),u},component(p,_){return _?(s.components[p]=_,u):s.components[p]},directive(p,_){return _?(s.directives[p]=_,u):s.directives[p]},mount(p,_,S){if(!l){const A=k(r,i);return A.appContext=s,S===!0?S="svg":S===!1&&(S=void 0),_&&t?t(A,p):e(A,p,S),l=!0,u._container=p,p.__vue_app__=u,lr(A.component)||A.component.proxy}},unmount(){l&&(e(null,u._container),delete u._container.__vue_app__)},provide(p,_){return s.provides[p]=_,u},runWithContext(p){const _=xt;xt=u;try{return p()}finally{xt=_}}};return u}}let xt=null;function Fo(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Mt(e,t,n=!1){const r=me||ve;if(r||xt){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xt._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&J(t)?t.call(r&&r.proxy):t}}function Eo(){return!!(me||ve||xt)}const Ps=Object.create(null),Nn=()=>Object.create(Ps),Ns=e=>Object.getPrototypeOf(e)===Ps;function Ao(e,t,n,r=!1){const i={},s=Nn();e.propsDefaults=Object.create(null),Rs(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Ni(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Lo(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,l=te(i),[u]=e.propsOptions;let p=!1;if((r||o>0)&&!(o&16)){if(o&8){const _=e.vnode.dynamicProps;for(let S=0;S<_.length;S++){let A=_[S];if(_n(e.emitsOptions,A))continue;const D=t[A];if(u)if(ee(s,A))D!==s[A]&&(s[A]=D,p=!0);else{const Y=Tt(A);i[Y]=Rn(u,l,Y,D,e,!1)}else D!==s[A]&&(s[A]=D,p=!0)}}}else{Rs(e,t,i,s)&&(p=!0);let _;for(const S in l)(!t||!ee(t,S)&&((_=$t(S))===S||!ee(t,_)))&&(u?n&&(n[S]!==void 0||n[_]!==void 0)&&(i[S]=Rn(u,l,S,void 0,e,!0)):delete i[S]);if(s!==l)for(const S in s)(!t||!ee(t,S))&&(delete s[S],p=!0)}p&&Ve(e.attrs,"set","")}function Rs(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,l;if(t)for(let u in t){if(Lt(u))continue;const p=t[u];let _;i&&ee(i,_=Tt(u))?!s||!s.includes(_)?n[_]=p:(l||(l={}))[_]=p:_n(e.emitsOptions,u)||(!(u in r)||p!==r[u])&&(r[u]=p,o=!0)}if(s){const u=te(n),p=l||le;for(let _=0;_<s.length;_++){const S=s[_];n[S]=Rn(i,u,S,p[S],e,!ee(p,S))}}return o}function Rn(e,t,n,r,i,s){const o=e[n];if(o!=null){const l=ee(o,"default");if(l&&r===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&J(u)){const{propsDefaults:p}=i;if(n in p)r=p[n];else{const _=Ut(i);r=p[n]=u.call(null,t),_()}}else r=u}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function js(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},l=[];let u=!1;if(!J(e)){const _=S=>{u=!0;const[A,D]=js(S,t,!0);ye(o,A),D&&l.push(...D)};!n&&t.mixins.length&&t.mixins.forEach(_),e.extends&&_(e.extends),e.mixins&&e.mixins.forEach(_)}if(!s&&!u)return ue(e)&&r.set(e,yt),yt;if(z(s))for(let _=0;_<s.length;_++){const S=Tt(s[_]);Cr(S)&&(o[S]=le)}else if(s)for(const _ in s){const S=Tt(_);if(Cr(S)){const A=s[_],D=o[S]=z(A)||J(A)?{type:A}:ye({},A);if(D){const Y=Ar(Boolean,D.type),P=Ar(String,D.type);D[0]=Y>-1,D[1]=P<0||Y<P,(Y>-1||ee(D,"default"))&&l.push(S)}}}const p=[o,l];return ue(e)&&r.set(e,p),p}function Cr(e){return e[0]!=="$"&&!Lt(e)}function Fr(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Er(e,t){return Fr(e)===Fr(t)}function Ar(e,t){return z(t)?t.findIndex(n=>Er(n,e)):J(t)&&Er(t,e)?0:-1}const Bs=e=>e[0]==="_"||e==="$stable",ir=e=>z(e)?e.map(Re):[Re(e)],Io=(e,t,n)=>{if(t._n)return t;const r=H((...i)=>ir(t(...i)),n);return r._c=!1,r},Hs=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Bs(i))continue;const s=e[i];if(J(s))t[i]=Io(i,s,r);else if(s!=null){const o=ir(s);t[i]=()=>o}}},Us=(e,t)=>{const n=ir(t);e.slots.default=()=>n},Oo=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=te(t),Jr(e.slots,"_",n)):Hs(t,e.slots=Nn())}else e.slots=Nn(),t&&Us(e,t)},Mo=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=le;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(ye(i,t),!n&&l===1&&delete i._):(s=!t.$stable,Hs(t,i)),o=t}else t&&(Us(e,t),o={default:1});if(s)for(const l in i)!Bs(l)&&o[l]==null&&delete i[l]};function jn(e,t,n,r,i=!1){if(z(e)){e.forEach((A,D)=>jn(A,t&&(z(t)?t[D]:t),n,r,i));return}if(It(r)&&!i)return;const s=r.shapeFlag&4?lr(r.component)||r.component.proxy:r.el,o=i?null:s,{i:l,r:u}=e,p=t&&t.r,_=l.refs===le?l.refs={}:l.refs,S=l.setupState;if(p!=null&&p!==u&&(he(p)?(_[p]=null,ee(S,p)&&(S[p]=null)):fe(p)&&(p.value=null)),J(u))Qe(u,l,12,[o,_]);else{const A=he(u),D=fe(u);if(A||D){const Y=()=>{if(e.f){const P=A?ee(S,u)?S[u]:_[u]:u.value;i?z(P)&&zn(P,s):z(P)?P.includes(s)||P.push(s):A?(_[u]=[s],ee(S,u)&&(S[u]=_[u])):(u.value=[s],e.k&&(_[e.k]=u.value))}else A?(_[u]=o,ee(S,u)&&(S[u]=o)):D&&(u.value=o,e.k&&(_[e.k]=o))};o?(Y.id=-1,Te(Y,n)):Y()}}}const Te=ro;function ko(e){return Do(e)}function Do(e,t){const n=Yr();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:u,setText:p,setElementText:_,parentNode:S,nextSibling:A,setScopeId:D=Ee,insertStaticContent:Y}=e,P=(a,c,h,y=null,b=null,C=null,L=void 0,w=null,E=!!c.dynamicChildren)=>{if(a===c)return;a&&!Et(a,c)&&(y=He(a),ae(a,b,C,!0),a=null),c.patchFlag===-2&&(E=!1,c.dynamicChildren=null);const{type:T,ref:M,shapeFlag:j}=c;switch(T){case yn:R(a,c,h,y);break;case tt:V(a,c,h,y);break;case Fn:a==null&&g(c,h,y,L);break;case B:ce(a,c,h,y,b,C,L,w,E);break;default:j&1?x(a,c,h,y,b,C,L,w,E):j&6?Be(a,c,h,y,b,C,L,w,E):(j&64||j&128)&&T.process(a,c,h,y,b,C,L,w,E,De)}M!=null&&b&&jn(M,a&&a.ref,C,c||a,!c)},R=(a,c,h,y)=>{if(a==null)r(c.el=l(c.children),h,y);else{const b=c.el=a.el;c.children!==a.children&&p(b,c.children)}},V=(a,c,h,y)=>{a==null?r(c.el=u(c.children||""),h,y):c.el=a.el},g=(a,c,h,y)=>{[a.el,a.anchor]=Y(a.children,c,h,y,a.el,a.anchor)},d=({el:a,anchor:c},h,y)=>{let b;for(;a&&a!==c;)b=A(a),r(a,h,y),a=b;r(c,h,y)},v=({el:a,anchor:c})=>{let h;for(;a&&a!==c;)h=A(a),i(a),a=h;i(c)},x=(a,c,h,y,b,C,L,w,E)=>{c.type==="svg"?L="svg":c.type==="math"&&(L="mathml"),a==null?m(c,h,y,b,C,L,w,E):F(a,c,b,C,L,w,E)},m=(a,c,h,y,b,C,L,w)=>{let E,T;const{props:M,shapeFlag:j,transition:N,dirs:W}=a;if(E=a.el=o(a.type,C,M&&M.is,M),j&8?_(E,a.children):j&16&&I(a.children,E,null,y,b,Cn(a,C),L,w),W&&lt(a,null,y,"created"),O(E,a,a.scopeId,L,y),M){for(const se in M)se!=="value"&&!Lt(se)&&s(E,se,null,M[se],C,a.children,y,b,xe);"value"in M&&s(E,"value",null,M.value,C),(T=M.onVnodeBeforeMount)&&Ne(T,y,a)}W&&lt(a,null,y,"beforeMount");const Z=Po(b,N);Z&&N.beforeEnter(E),r(E,c,h),((T=M&&M.onVnodeMounted)||Z||W)&&Te(()=>{T&&Ne(T,y,a),Z&&N.enter(E),W&&lt(a,null,y,"mounted")},b)},O=(a,c,h,y,b)=>{if(h&&D(a,h),y)for(let C=0;C<y.length;C++)D(a,y[C]);if(b){let C=b.subTree;if(c===C){const L=b.vnode;O(a,L,L.scopeId,L.slotScopeIds,b.parent)}}},I=(a,c,h,y,b,C,L,w,E=0)=>{for(let T=E;T<a.length;T++){const M=a[T]=w?Je(a[T]):Re(a[T]);P(null,M,c,h,y,b,C,L,w)}},F=(a,c,h,y,b,C,L)=>{const w=c.el=a.el;let{patchFlag:E,dynamicChildren:T,dirs:M}=c;E|=a.patchFlag&16;const j=a.props||le,N=c.props||le;let W;if(h&&at(h,!1),(W=N.onVnodeBeforeUpdate)&&Ne(W,h,c,a),M&&lt(c,a,h,"beforeUpdate"),h&&at(h,!0),T?G(a.dynamicChildren,T,w,h,y,Cn(c,b),C):L||K(a,c,w,null,h,y,Cn(c,b),C,!1),E>0){if(E&16)ne(w,c,j,N,h,y,b);else if(E&2&&j.class!==N.class&&s(w,"class",null,N.class,b),E&4&&s(w,"style",j.style,N.style,b),E&8){const Z=c.dynamicProps;for(let se=0;se<Z.length;se++){const oe=Z[se],pe=j[oe],Le=N[oe];(Le!==pe||oe==="value")&&s(w,oe,pe,Le,b,a.children,h,y,xe)}}E&1&&a.children!==c.children&&_(w,c.children)}else!L&&T==null&&ne(w,c,j,N,h,y,b);((W=N.onVnodeUpdated)||M)&&Te(()=>{W&&Ne(W,h,c,a),M&&lt(c,a,h,"updated")},y)},G=(a,c,h,y,b,C,L)=>{for(let w=0;w<c.length;w++){const E=a[w],T=c[w],M=E.el&&(E.type===B||!Et(E,T)||E.shapeFlag&70)?S(E.el):h;P(E,T,M,null,y,b,C,L,!0)}},ne=(a,c,h,y,b,C,L)=>{if(h!==y){if(h!==le)for(const w in h)!Lt(w)&&!(w in y)&&s(a,w,h[w],null,L,c.children,b,C,xe);for(const w in y){if(Lt(w))continue;const E=y[w],T=h[w];E!==T&&w!=="value"&&s(a,w,T,E,L,c.children,b,C,xe)}"value"in y&&s(a,"value",h.value,y.value,L)}},ce=(a,c,h,y,b,C,L,w,E)=>{const T=c.el=a?a.el:l(""),M=c.anchor=a?a.anchor:l("");let{patchFlag:j,dynamicChildren:N,slotScopeIds:W}=c;W&&(w=w?w.concat(W):W),a==null?(r(T,h,y),r(M,h,y),I(c.children||[],h,M,b,C,L,w,E)):j>0&&j&64&&N&&a.dynamicChildren?(G(a.dynamicChildren,N,h,b,C,L,w),(c.key!=null||b&&c===b.subTree)&&Vs(a,c,!0)):K(a,c,h,M,b,C,L,w,E)},Be=(a,c,h,y,b,C,L,w,E)=>{c.slotScopeIds=w,a==null?c.shapeFlag&512?b.ctx.activate(c,h,y,L,E):ze(c,h,y,b,C,L,E):Me(a,c,E)},ze=(a,c,h,y,b,C,L)=>{const w=a.component=zo(a,y,b);if(As(a)&&(w.ctx.renderer=De),Ko(w),w.asyncDep){if(b&&b.registerDep(w,re),!a.el){const E=w.subTree=k(tt);V(null,E,c,h)}}else re(w,a,c,h,b,C,L)},Me=(a,c,h)=>{const y=c.component=a.component;if(Qi(a,c,h))if(y.asyncDep&&!y.asyncResolved){ie(y,c,h);return}else y.next=c,Xi(y.update),y.effect.dirty=!0,y.update();else c.el=a.el,y.vnode=c},re=(a,c,h,y,b,C,L)=>{const w=()=>{if(a.isMounted){let{next:M,bu:j,u:N,parent:W,vnode:Z}=a;{const _t=Ws(a);if(_t){M&&(M.el=Z.el,ie(a,M,L)),_t.asyncDep.then(()=>{a.isUnmounted||w()});return}}let se=M,oe;at(a,!1),M?(M.el=Z.el,ie(a,M,L)):M=Z,j&&Tn(j),(oe=M.props&&M.props.onVnodeBeforeUpdate)&&Ne(oe,W,M,Z),at(a,!0);const pe=$n(a),Le=a.subTree;a.subTree=pe,P(Le,pe,S(Le.el),He(Le),a,b,C),M.el=pe.el,se===null&&eo(a,pe.el),N&&Te(N,b),(oe=M.props&&M.props.onVnodeUpdated)&&Te(()=>Ne(oe,W,M,Z),b)}else{let M;const{el:j,props:N}=c,{bm:W,m:Z,parent:se}=a,oe=It(c);if(at(a,!1),W&&Tn(W),!oe&&(M=N&&N.onVnodeBeforeMount)&&Ne(M,se,c),at(a,!0),j&&Ct){const pe=()=>{a.subTree=$n(a),Ct(j,a.subTree,a,b,null)};oe?c.type.__asyncLoader().then(()=>!a.isUnmounted&&pe()):pe()}else{const pe=a.subTree=$n(a);P(null,pe,h,y,a,b,C),c.el=pe.el}if(Z&&Te(Z,b),!oe&&(M=N&&N.onVnodeMounted)){const pe=c;Te(()=>Ne(M,se,pe),b)}(c.shapeFlag&256||se&&It(se.vnode)&&se.vnode.shapeFlag&256)&&a.a&&Te(a.a,b),a.isMounted=!0,c=h=y=null}},E=a.effect=new Xn(w,Ee,()=>nr(T),a.scope),T=a.update=()=>{E.dirty&&E.run()};T.id=a.uid,at(a,!0),T()},ie=(a,c,h)=>{c.component=a;const y=a.vnode.props;a.vnode=c,a.next=null,Lo(a,c.props,y,h),Mo(a,c.children,h),nt(),vr(a),rt()},K=(a,c,h,y,b,C,L,w,E=!1)=>{const T=a&&a.children,M=a?a.shapeFlag:0,j=c.children,{patchFlag:N,shapeFlag:W}=c;if(N>0){if(N&128){Ae(T,j,h,y,b,C,L,w,E);return}else if(N&256){de(T,j,h,y,b,C,L,w,E);return}}W&8?(M&16&&xe(T,b,C),j!==T&&_(h,j)):M&16?W&16?Ae(T,j,h,y,b,C,L,w,E):xe(T,b,C,!0):(M&8&&_(h,""),W&16&&I(j,h,y,b,C,L,w,E))},de=(a,c,h,y,b,C,L,w,E)=>{a=a||yt,c=c||yt;const T=a.length,M=c.length,j=Math.min(T,M);let N;for(N=0;N<j;N++){const W=c[N]=E?Je(c[N]):Re(c[N]);P(a[N],W,h,null,b,C,L,w,E)}T>M?xe(a,b,C,!0,!1,j):I(c,h,y,b,C,L,w,E,j)},Ae=(a,c,h,y,b,C,L,w,E)=>{let T=0;const M=c.length;let j=a.length-1,N=M-1;for(;T<=j&&T<=N;){const W=a[T],Z=c[T]=E?Je(c[T]):Re(c[T]);if(Et(W,Z))P(W,Z,h,null,b,C,L,w,E);else break;T++}for(;T<=j&&T<=N;){const W=a[j],Z=c[N]=E?Je(c[N]):Re(c[N]);if(Et(W,Z))P(W,Z,h,null,b,C,L,w,E);else break;j--,N--}if(T>j){if(T<=N){const W=N+1,Z=W<M?c[W].el:y;for(;T<=N;)P(null,c[T]=E?Je(c[T]):Re(c[T]),h,Z,b,C,L,w,E),T++}}else if(T>N)for(;T<=j;)ae(a[T],b,C,!0),T++;else{const W=T,Z=T,se=new Map;for(T=Z;T<=N;T++){const $e=c[T]=E?Je(c[T]):Re(c[T]);$e.key!=null&&se.set($e.key,T)}let oe,pe=0;const Le=N-Z+1;let _t=!1,ur=0;const Ft=new Array(Le);for(T=0;T<Le;T++)Ft[T]=0;for(T=W;T<=j;T++){const $e=a[T];if(pe>=Le){ae($e,b,C,!0);continue}let Pe;if($e.key!=null)Pe=se.get($e.key);else for(oe=Z;oe<=N;oe++)if(Ft[oe-Z]===0&&Et($e,c[oe])){Pe=oe;break}Pe===void 0?ae($e,b,C,!0):(Ft[Pe-Z]=T+1,Pe>=ur?ur=Pe:_t=!0,P($e,c[Pe],h,null,b,C,L,w,E),pe++)}const cr=_t?No(Ft):yt;for(oe=cr.length-1,T=Le-1;T>=0;T--){const $e=Z+T,Pe=c[$e],fr=$e+1<M?c[$e+1].el:y;Ft[T]===0?P(null,Pe,h,fr,b,C,L,w,E):_t&&(oe<0||T!==cr[oe]?Ce(Pe,h,fr,2):oe--)}}},Ce=(a,c,h,y,b=null)=>{const{el:C,type:L,transition:w,children:E,shapeFlag:T}=a;if(T&6){Ce(a.component.subTree,c,h,y);return}if(T&128){a.suspense.move(c,h,y);return}if(T&64){L.move(a,c,h,De);return}if(L===B){r(C,c,h);for(let j=0;j<E.length;j++)Ce(E[j],c,h,y);r(a.anchor,c,h);return}if(L===Fn){d(a,c,h);return}if(y!==2&&T&1&&w)if(y===0)w.beforeEnter(C),r(C,c,h),Te(()=>w.enter(C),b);else{const{leave:j,delayLeave:N,afterLeave:W}=w,Z=()=>r(C,c,h),se=()=>{j(C,()=>{Z(),W&&W()})};N?N(C,Z,se):se()}else r(C,c,h)},ae=(a,c,h,y=!1,b=!1)=>{const{type:C,props:L,ref:w,children:E,dynamicChildren:T,shapeFlag:M,patchFlag:j,dirs:N}=a;if(w!=null&&jn(w,null,h,a,!0),M&256){c.ctx.deactivate(a);return}const W=M&1&&N,Z=!It(a);let se;if(Z&&(se=L&&L.onVnodeBeforeUnmount)&&Ne(se,c,a),M&6)it(a.component,h,y);else{if(M&128){a.suspense.unmount(h,y);return}W&&lt(a,null,c,"beforeUnmount"),M&64?a.type.remove(a,c,h,b,De,y):T&&(C!==B||j>0&&j&64)?xe(T,c,h,!1,!0):(C===B&&j&384||!b&&M&16)&&xe(E,c,h),y&&Vt(a)}(Z&&(se=L&&L.onVnodeUnmounted)||W)&&Te(()=>{se&&Ne(se,c,a),W&&lt(a,null,c,"unmounted")},h)},Vt=a=>{const{type:c,el:h,anchor:y,transition:b}=a;if(c===B){ke(h,y);return}if(c===Fn){v(a);return}const C=()=>{i(h),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(a.shapeFlag&1&&b&&!b.persisted){const{leave:L,delayLeave:w}=b,E=()=>L(h,C);w?w(a.el,C,E):E()}else C()},ke=(a,c)=>{let h;for(;a!==c;)h=A(a),i(a),a=h;i(c)},it=(a,c,h)=>{const{bum:y,scope:b,update:C,subTree:L,um:w}=a;y&&Tn(y),b.stop(),C&&(C.active=!1,ae(L,a,c,h)),w&&Te(w,c),Te(()=>{a.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},xe=(a,c,h,y=!1,b=!1,C=0)=>{for(let L=C;L<a.length;L++)ae(a[L],c,h,y,b)},He=a=>a.shapeFlag&6?He(a.component.subTree):a.shapeFlag&128?a.suspense.next():A(a.anchor||a.el);let ot=!1;const wt=(a,c,h)=>{a==null?c._vnode&&ae(c._vnode,null,null,!0):P(c._vnode||null,a,c,null,null,null,h),ot||(ot=!0,vr(),Ts(),ot=!1),c._vnode=a},De={p:P,um:ae,m:Ce,r:Vt,mt:ze,mc:I,pc:K,pbc:G,n:He,o:e};let Ke,Ct;return t&&([Ke,Ct]=t(De)),{render:wt,hydrate:Ke,createApp:Co(wt,Ke)}}function Cn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Po(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vs(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Je(i[s]),l.el=o.el),n||Vs(o,l)),l.type===yn&&(l.el=o.el)}}function No(e){const t=e.slice(),n=[0];let r,i,s,o,l;const u=e.length;for(r=0;r<u;r++){const p=e[r];if(p!==0){if(i=n[n.length-1],e[i]<p){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,e[n[l]]<p?s=l+1:o=l;p<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function Ws(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ws(t)}const Ro=e=>e.__isTeleport,B=Symbol.for("v-fgt"),yn=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),Fn=Symbol.for("v-stc"),kt=[];let Ie=null;function $(e=!1){kt.push(Ie=e?null:[])}function jo(){kt.pop(),Ie=kt[kt.length-1]||null}let Bt=1;function Lr(e){Bt+=e}function zs(e){return e.dynamicChildren=Bt>0?Ie||yt:null,jo(),Bt>0&&Ie&&Ie.push(e),e}function U(e,t,n,r,i,s){return zs(f(e,t,n,r,i,s,!0))}function q(e,t,n,r,i){return zs(k(e,t,n,r,i,!0))}function Ks(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Xs=({key:e})=>e??null,Zt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||fe(e)||J(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,r=0,i=null,s=e===B?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xs(t),ref:t&&Zt(t),scopeId:gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ve};return l?(or(u,n),s&128&&e.normalize(u)):n&&(u.shapeFlag|=he(n)?8:16),Bt>0&&!o&&Ie&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&Ie.push(u),u}const k=Bo;function Bo(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===to)&&(e=tt),Ks(e)){const l=St(e,t,!0);return n&&or(l,n),Bt>0&&!s&&Ie&&(l.shapeFlag&6?Ie[Ie.indexOf(e)]=l:Ie.push(l)),l.patchFlag|=-2,l}if(Jo(e)&&(e=e.__vccOpts),t){t=Ho(t);let{class:l,style:u}=t;l&&!he(l)&&(t.class=fn(l)),ue(u)&&(_s(u)&&!z(u)&&(u=ye({},u)),t.style=cn(u))}const o=he(e)?1:no(e)?128:Ro(e)?64:ue(e)?4:J(e)?2:0;return f(e,t,n,r,i,o,s,!0)}function Ho(e){return e?_s(e)||Ns(e)?ye({},e):e:null}function St(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,l=t?Uo(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Xs(l),ref:t&&t.ref?n&&i?z(i)?i.concat(Zt(t)):[i,Zt(t)]:Zt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==B?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function sn(e=" ",t=0){return k(yn,null,e,t)}function Fe(e="",t=!1){return t?($(),q(tt,null,e)):k(tt,null,e)}function Re(e){return e==null||typeof e=="boolean"?k(tt):z(e)?k(B,null,e.slice()):typeof e=="object"?Je(e):k(yn,null,String(e))}function Je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function or(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),or(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ns(t)?t._ctx=ve:i===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[sn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Uo(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=fn([t.class,r.class]));else if(i==="style")t.style=cn([t.style,r.style]);else if(ln(i)){const s=t[i],o=r[i];o&&s!==o&&!(z(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function Ne(e,t,n,r=null){Oe(e,t,7,[n,r])}const Vo=Ds();let Wo=0;function zo(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Vo,s={uid:Wo++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new es(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:js(r,i),emitsOptions:$s(r,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ji.bind(null,s),e.ce&&e.ce(s),s}let me=null,on,Bn;{const e=Yr(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};on=t("__VUE_INSTANCE_SETTERS__",n=>me=n),Bn=t("__VUE_SSR_SETTERS__",n=>bn=n)}const Ut=e=>{const t=me;return on(e),e.scope.on(),()=>{e.scope.off(),on(t)}},Ir=()=>{me&&me.scope.off(),on(null)};function Gs(e){return e.vnode.shapeFlag&4}let bn=!1;function Ko(e,t=!1){t&&Bn(t);const{props:n,children:r}=e.vnode,i=Gs(e);Ao(e,n,i,t),Oo(e,r);const s=i?Xo(e,t):void 0;return t&&Bn(!1),s}function Xo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bo);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?qo(e):null,s=Ut(e);nt();const o=Qe(r,e,0,[e.props,i]);if(rt(),s(),Kr(o)){if(o.then(Ir,Ir),t)return o.then(l=>{Or(e,l,t)}).catch(l=>{hn(l,e,0)});e.asyncDep=o}else Or(e,o,t)}else qs(e,t)}function Or(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=ys(t)),qs(e,n)}let Mr;function qs(e,t,n){const r=e.type;if(!e.render){if(!t&&Mr&&!r.render){const i=r.template||sr(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:u}=r,p=ye(ye({isCustomElement:s,delimiters:l},o),u);r.render=Mr(i,p)}}e.render=r.render||Ee}{const i=Ut(e);nt();try{vo(e)}finally{rt(),i()}}}const Go={get(e,t){return Se(e,"get",""),e[t]}};function qo(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Go),slots:e.slots,emit:e.emit,expose:t}}function lr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ys(Qn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ot)return Ot[n](e)},has(t,n){return n in t||n in Ot}}))}function Jo(e){return J(e)&&"__vccOpts"in e}const Js=(e,t)=>Ri(e,t,bn),Yo="3.4.23";/**
* @vue/runtime-dom v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Zo="http://www.w3.org/2000/svg",Qo="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,kr=Ye&&Ye.createElement("template"),el={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Ye.createElementNS(Zo,e):t==="mathml"?Ye.createElementNS(Qo,e):Ye.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ye.createTextNode(e),createComment:e=>Ye.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ye.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{kr.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const l=kr.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},tl=Symbol("_vtc");function nl(e,t,n){const r=e[tl];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Dr=Symbol("_vod"),rl=Symbol("_vsh"),sl=Symbol(""),il=/(^|;)\s*display\s*:/;function ol(e,t,n){const r=e.style,i=he(n);let s=!1;if(n&&!i){if(t)if(he(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Qt(r,l,"")}else for(const o in t)n[o]==null&&Qt(r,o,"");for(const o in n)o==="display"&&(s=!0),Qt(r,o,n[o])}else if(i){if(t!==n){const o=r[sl];o&&(n+=";"+o),r.cssText=n,s=il.test(n)}}else t&&e.removeAttribute("style");Dr in e&&(e[Dr]=s?r.display:"",e[rl]&&(r.display="none"))}const Pr=/\s*!important$/;function Qt(e,t,n){if(z(n))n.forEach(r=>Qt(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ll(e,t);Pr.test(n)?e.setProperty($t(r),n.replace(Pr,""),"important"):e[r]=n}}const Nr=["Webkit","Moz","ms"],En={};function ll(e,t){const n=En[t];if(n)return n;let r=Tt(t);if(r!=="filter"&&r in e)return En[t]=r;r=qr(r);for(let i=0;i<Nr.length;i++){const s=Nr[i]+r;if(s in e)return En[t]=s}return t}const Rr="http://www.w3.org/1999/xlink";function al(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Rr,t.slice(6,t.length)):e.setAttributeNS(Rr,t,n);else{const s=hi(t);n==null||s&&!Zr(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function ul(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const p=l==="OPTION"?e.getAttribute("value")||"":e.value,_=n??"";(p!==_||!("_value"in e))&&(e.value=_),n==null&&e.removeAttribute(t),e._value=n;return}let u=!1;if(n===""||n==null){const p=typeof e[t];p==="boolean"?n=Zr(n):n==null&&p==="string"?(n="",u=!0):p==="number"&&(n=0,u=!0)}try{e[t]=n}catch{}u&&e.removeAttribute(t)}function cl(e,t,n,r){e.addEventListener(t,n,r)}function fl(e,t,n,r){e.removeEventListener(t,n,r)}const jr=Symbol("_vei");function dl(e,t,n,r,i=null){const s=e[jr]||(e[jr]={}),o=s[t];if(r&&o)o.value=r;else{const[l,u]=pl(t);if(r){const p=s[t]=gl(r,i);cl(e,l,p,u)}else o&&(fl(e,l,o,u),s[t]=void 0)}}const Br=/(?:Once|Passive|Capture)$/;function pl(e){let t;if(Br.test(e)){t={};let r;for(;r=e.match(Br);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let An=0;const hl=Promise.resolve(),_l=()=>An||(hl.then(()=>An=0),An=Date.now());function gl(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(ml(r,n.value),t,5,[r])};return n.value=e,n.attached=_l(),n}function ml(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Hr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yl=(e,t,n,r,i,s,o,l,u)=>{const p=i==="svg";t==="class"?nl(e,r,p):t==="style"?ol(e,n,r):ln(t)?Wn(t)||dl(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):bl(e,t,r,p))?ul(e,t,r,s,o,l,u):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),al(e,t,r,p))};function bl(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Hr(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Hr(t)&&he(n)?!1:t in e}const vl=ye({patchProp:yl},el);let Ur;function xl(){return Ur||(Ur=ko(vl))}const Tl=(...e)=>{const t=xl().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=$l(r);if(!i)return;const s=t._component;!J(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Sl(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Sl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $l(e){return he(e)?document.querySelector(e):e}const ht=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},wl={},Cl=e=>(ws("data-v-f5236462"),e=e(),Cs(),e),Fl={class:"AuthorDetails"},El=Cl(()=>f("div",{class:"CircularIndicator"},[f("div",{class:"indicatorOne"},[f("div",{class:"indicatorTwo"},[f("div",{class:"Author"}," Author: Sudipta Mandal ")])])],-1)),Al=[El];function Ll(e,t){return $(),U("div",Fl,Al)}const Il=ht(wl,[["render",Ll],["__scopeId","data-v-f5236462"]]),Ol={class:"DartTutorialDetails"},Ml={class:"CircularIndicator"},kl={class:"indicatorOne"},Dl={class:"DartTutorial"},Pl={__name:"dart",props:{dartText:String},setup(e){return(t,n)=>($(),U("div",Ol,[f("div",Ml,[f("div",kl,[f("div",Dl,Ht(e.dartText),1)])])]))}},Nl=ht(Pl,[["__scopeId","data-v-5bcd30ac"]]),Rl={class:"FlutterTutorialDetails"},jl={class:"CircularIndicator"},Bl={class:"indicatorOne"},Hl={class:"indicatorTwo"},Ul={class:"FlutterTutorial"},Vl={__name:"flutter",props:{flutterText:String},setup(e){return(t,n)=>($(),U("div",Rl,[f("div",jl,[f("div",Bl,[f("div",Hl,[f("div",Ul,Ht(e.flutterText),1)])])])]))}},Wl=ht(Vl,[["__scopeId","data-v-837d9558"]]),zl={class:"Loader"},Kl={class:"LoaderInnerWrapper"},Xl={class:"LoaderFirstChild"},Gl={class:"maintext"},ql={__name:"Base",setup(e){const t=_e(["Explore","Learn","Apply","Go Forword","Win"]);let n=_e(0),r=_e("Explore");const i=_e(["Dart Tutorial","Dart Basics","Conditions and Loops","Dart Functions","Dart Collection","File Handling","OOP In Dart","Null Safety","Asynchronous Programming"]);let s=_e(0),o=_e("Dart Tutorial");const l=_e(["Flutter Tutorial","StatLess/StateFul","Basics Widget","Scroll Widget","Overflow Widget","Reusabele Widget","Static Assetes","Local DB","Request Response","Asynchronous Widgets"]);let u=_e(0),p=_e("Flutter Tutorial"),_=_e(null);rr(()=>{S(),setInterval(()=>{n.value==t.value.length&&(n.value=0),n.value=n.value+1,r.value=t.value[n.value-1],s.value==i.value.length&&(s.value=0),s.value=s.value+1,o.value=i.value[s.value-1],u.value==l.value.length&&(u.value=0),u.value=u.value+1,p.value=l.value[u.value-1]},2e3)});const S=()=>{let A=_.value,D=A.parentElement.parentElement,Y=A.firstChild,P=D.getBoundingClientRect().height,R=D.getBoundingClientRect().width;A.style.height=`calc(${P}px - 3rem)`,A.style.width=`calc(${R}px - 3rem)`;let V=0;R>=P?V=P:V=R,Y.style.height=`calc(${V}px - 4rem)`,Y.style.width=`calc(${V}px - 4rem)`};return window.addEventListener("resize",function(){S()}),(A,D)=>($(),U("div",{class:"LoaderWrapper",ref_key:"LoaderWrapper",ref:_},[f("div",zl,[k(Wl,{flutterText:X(p)},null,8,["flutterText"]),f("div",Kl,[f("div",Xl,[f("div",Gl,Ht(X(r)),1),k(Il)]),k(Nl,{dartText:X(o)},null,8,["dartText"])])])],512))}},Jl=ht(ql,[["__scopeId","data-v-1248cf4c"]]),Yl={class:"NestedCardWrapper"},Zl={class:"NestedCardChildWrapper"},Ql={__name:"NestedCard",props:{buttonName:String,backGround:String},setup(e){let t=_e(!1);const n=()=>{t.value=!t.value};return(r,i)=>($(),U("div",Yl,[f("button",{onClick:n,style:cn({background:e.backGround})},Ht(e.buttonName),5),f("div",Zl,[X(t)?Os(r.$slots,"default",{key:0},void 0,!0):Fe("",!0)])]))}},Ue=ht(Ql,[["__scopeId","data-v-f661dfce"]]);var ea=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ys;const vn=e=>Ys=e,Zs=Symbol();function Hn(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Dt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Dt||(Dt={}));function ta(){const e=ts(!0),t=e.run(()=>_e({}));let n=[],r=[];const i=Qn({install(s){vn(i),i._a=s,s.provide(Zs,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!ea?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Qs=()=>{};function Vr(e,t,n,r=Qs){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&ns()&&gi(i),i}function gt(e,...t){e.slice().forEach(n=>{n(...t)})}const na=e=>e();function Un(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];Hn(i)&&Hn(r)&&e.hasOwnProperty(n)&&!fe(r)&&!dt(r)?e[n]=Un(i,r):e[n]=r}return e}const ra=Symbol();function sa(e){return!Hn(e)||!e.hasOwnProperty(ra)}const{assign:Ge}=Object;function ia(e){return!!(fe(e)&&e.effect)}function oa(e,t,n,r){const{state:i,actions:s,getters:o}=t,l=n.state.value[e];let u;function p(){l||(n.state.value[e]=i?i():{});const _=Ui(n.state.value[e]);return Ge(_,s,Object.keys(o||{}).reduce((S,A)=>(S[A]=Qn(Js(()=>{vn(n);const D=n._s.get(e);return o[A].call(D,D)})),S),{}))}return u=ei(e,p,t,n,r,!0),u}function ei(e,t,n={},r,i,s){let o;const l=Ge({actions:{}},n),u={deep:!0};let p,_,S=[],A=[],D;const Y=r.state.value[e];!s&&!Y&&(r.state.value[e]={}),_e({});let P;function R(I){let F;p=_=!1,typeof I=="function"?(I(r.state.value[e]),F={type:Dt.patchFunction,storeId:e,events:D}):(Un(r.state.value[e],I),F={type:Dt.patchObject,payload:I,storeId:e,events:D});const G=P=Symbol();vs().then(()=>{P===G&&(p=!0)}),_=!0,gt(S,F,r.state.value[e])}const V=s?function(){const{state:F}=n,G=F?F():{};this.$patch(ne=>{Ge(ne,G)})}:Qs;function g(){o.stop(),S=[],A=[],r._s.delete(e)}function d(I,F){return function(){vn(r);const G=Array.from(arguments),ne=[],ce=[];function Be(re){ne.push(re)}function ze(re){ce.push(re)}gt(A,{args:G,name:I,store:x,after:Be,onError:ze});let Me;try{Me=F.apply(this&&this.$id===e?this:x,G)}catch(re){throw gt(ce,re),re}return Me instanceof Promise?Me.then(re=>(gt(ne,re),re)).catch(re=>(gt(ce,re),Promise.reject(re))):(gt(ne,Me),Me)}}const v={_p:r,$id:e,$onAction:Vr.bind(null,A),$patch:R,$reset:V,$subscribe(I,F={}){const G=Vr(S,I,F.detached,()=>ne()),ne=o.run(()=>Yt(()=>r.state.value[e],ce=>{(F.flush==="sync"?_:p)&&I({storeId:e,type:Dt.direct,events:D},ce)},Ge({},u,F)));return G},$dispose:g},x=pn(v);r._s.set(e,x);const O=(r._a&&r._a.runWithContext||na)(()=>r._e.run(()=>(o=ts()).run(t)));for(const I in O){const F=O[I];if(fe(F)&&!ia(F)||dt(F))s||(Y&&sa(F)&&(fe(F)?F.value=Y[I]:Un(F,Y[I])),r.state.value[e][I]=F);else if(typeof F=="function"){const G=d(I,F);O[I]=G,l.actions[I]=F}}return Ge(x,O),Ge(te(x),O),Object.defineProperty(x,"$state",{get:()=>r.state.value[e],set:I=>{R(F=>{Ge(F,I)})}}),r._p.forEach(I=>{Ge(x,o.run(()=>I({store:x,app:r._a,pinia:r,options:l})))}),Y&&s&&n.hydrate&&n.hydrate(x.$state,Y),p=!0,_=!0,x}function la(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function o(l,u){const p=Eo();return l=l||(p?Mt(Zs,null):null),l&&vn(l),l=Ys,l._s.has(r)||(s?ei(r,t,i,l):oa(r,i,l)),l._s.get(r)}return o.$id=r,o}const st=la("tutorialEntryPointStore",()=>{let e=_e(null),t=_e(null);return{tutorialLanguage:e,tutorialCode:t,setTutorialData:(i,s)=>{e.value=i,t.value=s},removeTutorialData:()=>{console.warn("removeTutorialData")}}}),aa={__name:"DartTutorial",setup(e){const t=st(),n=i=>{t.setTutorialData("dart",i)},r=i=>{t.setTutorialData("dart",i)};return(i,s)=>($(),q(Ue,{buttonName:"Dart Tutorial",backGround:"var(--gradient-header)"},{default:H(()=>[k(Ue,{buttonName:"Dart Basics",backGround:"var(--gradient-one)"},{default:H(()=>[f("button",{onClick:s[0]||(s[0]=o=>n("1d1"))},"Dart Besic"),k(Ue,{buttonName:"Variables"},{default:H(()=>[f("ol",null,[f("li",{onClick:s[1]||(s[1]=o=>n("2d1"))},"Syntax"),f("li",{onClick:s[2]||(s[2]=o=>n("2d1_1"))},"Constant"),f("li",{onClick:s[3]||(s[3]=o=>n("2d1_2"))},"Naming Convention")])]),_:1}),k(Ue,{buttonName:"Data Types"},{default:H(()=>[f("ol",null,[f("li",{onClick:s[4]||(s[4]=o=>n("3d1"))},"Types"),f("li",{onClick:s[5]||(s[5]=o=>n("3d1_1"))},"Numbers"),f("li",{onClick:s[6]||(s[6]=o=>n("3d1_2"))},"String"),f("li",{onClick:s[7]||(s[7]=o=>n("3d1_3"))},"Boolean"),f("li",{onClick:s[8]||(s[8]=o=>n("3d1_4"))},"List"),f("li",{onClick:s[9]||(s[9]=o=>n("3d1_5"))},"Sets"),f("li",{onClick:s[10]||(s[10]=o=>n("3d1_6"))},"Maps"),f("li",{onClick:s[11]||(s[11]=o=>n("3d1_7"))},"Runes"),f("li",{onClick:s[12]||(s[12]=o=>n("3d1_8"))},"Statically Typed"),f("li",{onClick:s[13]||(s[13]=o=>n("3d1_9"))},"Dynamically Typed")])]),_:1}),f("button",{onClick:s[14]||(s[14]=o=>n("4d1"))},"Comments"),f("button",{onClick:s[15]||(s[15]=o=>n("5d1"))},"Operators"),f("button",{onClick:s[16]||(s[16]=o=>n("6d1"))},"Input"),k(Ue,{buttonName:"String"},{default:H(()=>[f("ol",null,[f("li",{onClick:s[17]||(s[17]=o=>n("7d1"))},"String"),f("li",{onClick:s[18]||(s[18]=o=>n("7d1_1"))},"String Concatenation"),f("li",{onClick:s[19]||(s[19]=o=>n("7d1_2"))},"String Properties"),f("li",{onClick:s[20]||(s[20]=o=>n("7d1_3"))},"Methods Of String")])]),_:1})]),_:1}),k(Ue,{buttonName:"Dart Conditions and Loops",backGround:"var(--gradient-one)"},{default:H(()=>[k(Ue,{buttonName:"Conditions"},{default:H(()=>[f("ol",null,[f("li",{onClick:s[21]||(s[21]=o=>n("1d2"))},"If Condition"),f("li",{onClick:s[22]||(s[22]=o=>n("1d2_1"))},"If-Else condition"),f("li",{onClick:s[23]||(s[23]=o=>n("1d2_2"))},"If-Else-If condition"),f("li",{onClick:s[24]||(s[24]=o=>n("1d2_3"))},"Switch-Case")])]),_:1}),f("button",{onClick:s[25]||(s[25]=o=>r("2d2"))},"Assert"),f("button",{onClick:s[26]||(s[26]=o=>r("3d2"))},"Tarnery Operator"),k(Ue,{buttonName:"Dart Loops"},{default:H(()=>[f("ol",null,[f("li",{onClick:s[27]||(s[27]=o=>n("4d2"))},"Loops Types"),f("li",{onClick:s[28]||(s[28]=o=>n("4d2_1"))},"For Loop"),f("li",{onClick:s[29]||(s[29]=o=>n("4d2_2"))},"For Each Loop"),f("li",{onClick:s[30]||(s[30]=o=>n("4d2_3"))},"For In Loop in Dart"),f("li",{onClick:s[31]||(s[31]=o=>n("4d2_4"))},"Find Key & Value"),f("li",{onClick:s[32]||(s[32]=o=>n("4d2_5"))},"While Loop"),f("li",{onClick:s[33]||(s[33]=o=>n("4d2_6"))},"Do While Loop")])]),_:1}),f("button",{onClick:s[34]||(s[34]=o=>r("5d2"))},"Break and Continue"),f("button",{onClick:s[35]||(s[35]=o=>r("6d2"))},"Try and Catch")]),_:1})]),_:1}))}},ua=ht(aa,[["__scopeId","data-v-5446c034"]]),ca={__name:"FlutterTutorial",setup(e){return(t,n)=>($(),q(Ue,{buttonName:"Flutter Tutorial",backGround:"var(--gradient-header)"},{default:H(()=>[sn(" not initiated yet ")]),_:1}))}};var Wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ti={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,o={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function g(d){return d instanceof u?new u(d.type,g(d.content),d.alias):Array.isArray(d)?d.map(g):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++s}),g.__id},clone:function g(d,v){v=v||{};var x,m;switch(l.util.type(d)){case"Object":if(m=l.util.objId(d),v[m])return v[m];x={},v[m]=x;for(var O in d)d.hasOwnProperty(O)&&(x[O]=g(d[O],v));return x;case"Array":return m=l.util.objId(d),v[m]?v[m]:(x=[],v[m]=x,d.forEach(function(I,F){x[F]=g(I,v)}),x);default:return d}},getLanguage:function(g){for(;g;){var d=i.exec(g.className);if(d)return d[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,d){g.className=g.className.replace(RegExp(i,"gi"),""),g.classList.add("language-"+d)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(x){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(g){var d=document.getElementsByTagName("script");for(var v in d)if(d[v].src==g)return d[v]}return null}},isActive:function(g,d,v){for(var x="no-"+d;g;){var m=g.classList;if(m.contains(d))return!0;if(m.contains(x))return!1;g=g.parentElement}return!!v}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(g,d){var v=l.util.clone(l.languages[g]);for(var x in d)v[x]=d[x];return v},insertBefore:function(g,d,v,x){x=x||l.languages;var m=x[g],O={};for(var I in m)if(m.hasOwnProperty(I)){if(I==d)for(var F in v)v.hasOwnProperty(F)&&(O[F]=v[F]);v.hasOwnProperty(I)||(O[I]=m[I])}var G=x[g];return x[g]=O,l.languages.DFS(l.languages,function(ne,ce){ce===G&&ne!=g&&(this[ne]=O)}),O},DFS:function g(d,v,x,m){m=m||{};var O=l.util.objId;for(var I in d)if(d.hasOwnProperty(I)){v.call(d,I,d[I],x||I);var F=d[I],G=l.util.type(F);G==="Object"&&!m[O(F)]?(m[O(F)]=!0,g(F,v,null,m)):G==="Array"&&!m[O(F)]&&(m[O(F)]=!0,g(F,v,I,m))}}},plugins:{},highlightAll:function(g,d){l.highlightAllUnder(document,g,d)},highlightAllUnder:function(g,d,v){var x={callback:v,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),l.hooks.run("before-all-elements-highlight",x);for(var m=0,O;O=x.elements[m++];)l.highlightElement(O,d===!0,x.callback)},highlightElement:function(g,d,v){var x=l.util.getLanguage(g),m=l.languages[x];l.util.setLanguage(g,x);var O=g.parentElement;O&&O.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(O,x);var I=g.textContent,F={element:g,language:x,grammar:m,code:I};function G(ce){F.highlightedCode=ce,l.hooks.run("before-insert",F),F.element.innerHTML=F.highlightedCode,l.hooks.run("after-highlight",F),l.hooks.run("complete",F),v&&v.call(F.element)}if(l.hooks.run("before-sanity-check",F),O=F.element.parentElement,O&&O.nodeName.toLowerCase()==="pre"&&!O.hasAttribute("tabindex")&&O.setAttribute("tabindex","0"),!F.code){l.hooks.run("complete",F),v&&v.call(F.element);return}if(l.hooks.run("before-highlight",F),!F.grammar){G(l.util.encode(F.code));return}if(d&&r.Worker){var ne=new Worker(l.filename);ne.onmessage=function(ce){G(ce.data)},ne.postMessage(JSON.stringify({language:F.language,code:F.code,immediateClose:!0}))}else G(l.highlight(F.code,F.grammar,F.language))},highlight:function(g,d,v){var x={code:g,grammar:d,language:v};if(l.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=l.tokenize(x.code,x.grammar),l.hooks.run("after-tokenize",x),u.stringify(l.util.encode(x.tokens),x.language)},tokenize:function(g,d){var v=d.rest;if(v){for(var x in v)d[x]=v[x];delete d.rest}var m=new S;return A(m,m.head,g),_(g,m,d,m.head,0),Y(m)},hooks:{all:{},add:function(g,d){var v=l.hooks.all;v[g]=v[g]||[],v[g].push(d)},run:function(g,d){var v=l.hooks.all[g];if(!(!v||!v.length))for(var x=0,m;m=v[x++];)m(d)}},Token:u};r.Prism=l;function u(g,d,v,x){this.type=g,this.content=d,this.alias=v,this.length=(x||"").length|0}u.stringify=function g(d,v){if(typeof d=="string")return d;if(Array.isArray(d)){var x="";return d.forEach(function(G){x+=g(G,v)}),x}var m={type:d.type,content:g(d.content,v),tag:"span",classes:["token",d.type],attributes:{},language:v},O=d.alias;O&&(Array.isArray(O)?Array.prototype.push.apply(m.classes,O):m.classes.push(O)),l.hooks.run("wrap",m);var I="";for(var F in m.attributes)I+=" "+F+'="'+(m.attributes[F]||"").replace(/"/g,"&quot;")+'"';return"<"+m.tag+' class="'+m.classes.join(" ")+'"'+I+">"+m.content+"</"+m.tag+">"};function p(g,d,v,x){g.lastIndex=d;var m=g.exec(v);if(m&&x&&m[1]){var O=m[1].length;m.index+=O,m[0]=m[0].slice(O)}return m}function _(g,d,v,x,m,O){for(var I in v)if(!(!v.hasOwnProperty(I)||!v[I])){var F=v[I];F=Array.isArray(F)?F:[F];for(var G=0;G<F.length;++G){if(O&&O.cause==I+","+G)return;var ne=F[G],ce=ne.inside,Be=!!ne.lookbehind,ze=!!ne.greedy,Me=ne.alias;if(ze&&!ne.pattern.global){var re=ne.pattern.toString().match(/[imsuy]*$/)[0];ne.pattern=RegExp(ne.pattern.source,re+"g")}for(var ie=ne.pattern||ne,K=x.next,de=m;K!==d.tail&&!(O&&de>=O.reach);de+=K.value.length,K=K.next){var Ae=K.value;if(d.length>g.length)return;if(!(Ae instanceof u)){var Ce=1,ae;if(ze){if(ae=p(ie,de,g,Be),!ae||ae.index>=g.length)break;var xe=ae.index,Vt=ae.index+ae[0].length,ke=de;for(ke+=K.value.length;xe>=ke;)K=K.next,ke+=K.value.length;if(ke-=K.value.length,de=ke,K.value instanceof u)continue;for(var it=K;it!==d.tail&&(ke<Vt||typeof it.value=="string");it=it.next)Ce++,ke+=it.value.length;Ce--,Ae=g.slice(de,ke),ae.index-=de}else if(ae=p(ie,0,Ae,Be),!ae)continue;var xe=ae.index,He=ae[0],ot=Ae.slice(0,xe),wt=Ae.slice(xe+He.length),De=de+Ae.length;O&&De>O.reach&&(O.reach=De);var Ke=K.prev;ot&&(Ke=A(d,Ke,ot),de+=ot.length),D(d,Ke,Ce);var Ct=new u(I,ce?l.tokenize(He,ce):He,Me,He);if(K=A(d,Ke,Ct),wt&&A(d,K,wt),Ce>1){var a={cause:I+","+G,reach:De};_(g,d,v,K.prev,de,a),O&&a.reach>O.reach&&(O.reach=a.reach)}}}}}}function S(){var g={value:null,prev:null,next:null},d={value:null,prev:g,next:null};g.next=d,this.head=g,this.tail=d,this.length=0}function A(g,d,v){var x=d.next,m={value:v,prev:d,next:x};return d.next=m,x.prev=m,g.length++,m}function D(g,d,v){for(var x=d.next,m=0;m<v&&x!==g.tail;m++)x=x.next;d.next=x,x.prev=d,g.length-=m}function Y(g){for(var d=[],v=g.head.next;v!==g.tail;)d.push(v.value),v=v.next;return d}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(g){var d=JSON.parse(g.data),v=d.language,x=d.code,m=d.immediateClose;r.postMessage(l.highlight(x,l.languages[v],v)),m&&r.close()},!1)),l;var P=l.util.currentScript();P&&(l.filename=P.src,P.hasAttribute("data-manual")&&(l.manual=!0));function R(){l.manual||l.highlightAll()}if(!l.manual){var V=document.readyState;V==="loading"||V==="interactive"&&P&&P.defer?document.addEventListener("DOMContentLoaded",R):window.requestAnimationFrame?window.requestAnimationFrame(R):window.setTimeout(R,16)}return l}(t);e.exports&&(e.exports=n),typeof Wr<"u"&&(Wr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,s){var o={};o["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[s]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};l["language-"+s]={pattern:/[\s\S]+/,inside:n.languages[s]};var u={};u[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:l},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(P,R){return"✖ Error "+P+" while fetching file: "+R},s="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",u="loading",p="loaded",_="failed",S="pre[data-src]:not(["+l+'="'+p+'"]):not(['+l+'="'+u+'"])';function A(P,R,V){var g=new XMLHttpRequest;g.open("GET",P,!0),g.onreadystatechange=function(){g.readyState==4&&(g.status<400&&g.responseText?R(g.responseText):g.status>=400?V(i(g.status,g.statusText)):V(s))},g.send(null)}function D(P){var R=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(P||"");if(R){var V=Number(R[1]),g=R[2],d=R[3];return g?d?[V,Number(d)]:[V,void 0]:[V,V]}}n.hooks.add("before-highlightall",function(P){P.selector+=", "+S}),n.hooks.add("before-sanity-check",function(P){var R=P.element;if(R.matches(S)){P.code="",R.setAttribute(l,u);var V=R.appendChild(document.createElement("CODE"));V.textContent=r;var g=R.getAttribute("data-src"),d=P.language;if(d==="none"){var v=(/\.(\w+)$/.exec(g)||[,"none"])[1];d=o[v]||v}n.util.setLanguage(V,d),n.util.setLanguage(R,d);var x=n.plugins.autoloader;x&&x.loadLanguages(d),A(g,function(m){R.setAttribute(l,p);var O=D(R.getAttribute("data-range"));if(O){var I=m.split(/\r\n?|\n/g),F=O[0],G=O[1]==null?I.length:O[1];F<0&&(F+=I.length),F=Math.max(0,Math.min(F-1,I.length)),G<0&&(G+=I.length),G=Math.max(0,Math.min(G,I.length)),m=I.slice(F,G).join(`
`),R.hasAttribute("data-start")||R.setAttribute("data-start",String(F+1))}V.textContent=m,n.highlightElement(V)},function(m){R.setAttribute(l,_),V.textContent=m})}}),n.plugins.fileHighlight={highlight:function(R){for(var V=(R||document).querySelectorAll(S),g=0,d;d=V[g++];)n.highlightElement(d)}};var Y=!1;n.fileHighlight=function(){Y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),Y=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ti);var da=ti.exports;const pa=fa(da);(function(e){var t=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],n=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};e.languages.dart=e.languages.extend("clike",{"class-name":[r,{pattern:RegExp(n+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:r.inside}],keyword:t,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),e.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.dart}}},string:/[\s\S]+/}},string:void 0}),e.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),e.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})})(Prism);const ha={class:"CodeWrapper"},_a={class:"SnippitTitle"},Q={__name:"DartCodeSnippt",props:{codeTitle:String},setup(e){let t=_e(null);const n=()=>{pa.highlightElement(t.value)};return rr(()=>{n()}),(r,i)=>($(),U("div",ha,[f("div",_a,Ht(e.codeTitle),1),f("pre",null,[f("code",{class:fn("language-dart"),ref_key:"codeRef",ref:t},[Os(r.$slots,"default")],512)])]))}},ga=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Basic ",-1),ma=f("pre",null,`void main(){
    int num1 = 10;
    int num2 = 5;
  
    int sum = num1 + num2;
    print("The sum is: $sum");
  
    int differance = num1 - num2;
    print("The difference is: $differance");
  
    int multiply = num1 * num2;
    print("The multiply is: $multiply");
  
    double division = num1 / num2;
    print("The division: $division");
}
        `,-1),ya={__name:"1d1_Besic",setup(e){return(t,n)=>($(),U(B,null,[ga,k(Q,{codeTitle:"Besic"},{default:H(()=>[ma]),_:1})],64))}},ba=f("div",{class:"FlxM XLT Tbold Tupper"}," Variables ",-1),va=f("pre",null,'void main(){\n    // ==========[ Syntax ]==========\n    var name = "Supriya";\n    String address = "Some Address";\n    num age = 25;\n    num height = 5.5;\n    bool isMarried = false;\n  \n    print("My Name Is: $name | Type Is:` + "${name.runtimeType}" +`");\n    print("My Address Is: $address | Type Is:` + "${address.runtimeType}" +`");\n    print("My Age Is: $age | Type Is: ` +"${age.runtimeType}" +`");\n    print("My Height Is: $height | Type Is: ` + "${height.runtimeType}"+ `");\n    print("My Is Married Is: $isMarried | Type Is:` +"${isMarried.runtimeType}"+`");\n\n}\n        ',-1),xa={__name:"2d1_0_Syntax",setup(e){return(t,n)=>($(),U(B,null,[ba,k(Q,{codeTitle:"Syntax"},{default:H(()=>[va]),_:1})],64))}},Ta=f("div",{class:"FlxM XLT Tbold Tupper"}," Variables ",-1),Sa=f("pre",null,`void main(){
    // ==========[ Dart Constant ]==========
    const pi = 3.14;
    // pi = 4.45; // Not possible
    print("Value of PI is: $pi");
}
        `,-1),$a={__name:"2d1_1_Constant",setup(e){return(t,n)=>($(),U(B,null,[Ta,k(Q,{codeTitle:"Dart Constant"},{default:H(()=>[Sa]),_:1})],64))}},wa=f("div",{class:"FlxM XLT Tbold Tupper"}," Variables ",-1),Ca=f("pre",null,`void main(){
    // ==========[ Naming Convention Example ]==========
    var fullname = "Supriya Singh"; // Not Standard Way
    var fullName = "Supriya Singh"; // Standard Way
}
        `,-1),Fa={__name:"2d1_2_Naming_Convention",setup(e){return(t,n)=>($(),U(B,null,[wa,k(Q,{codeTitle:"Naming Convention Example"},{default:H(()=>[Ca]),_:1})],64))}},Ea={__name:"2d1_Variables",setup(e){const t=st();return(n,r)=>X(t).tutorialCode=="2d1"?($(),q(xa,{key:0})):X(t).tutorialCode=="2d1_1"?($(),q($a,{key:1})):X(t).tutorialCode=="2d1_2"?($(),q(Fa,{key:2})):Fe("",!0)}},Aa=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),La=f("pre",null,`/*
Numbers
Strings
Booleans
Lists
Maps
Sets
Runes
Null
*/
        `,-1),Ia={__name:"3d1_0_Types",setup(e){return(t,n)=>($(),U(B,null,[Aa,k(Q,{codeTitle:"Data Types"},{default:H(()=>[La]),_:1})],64))}},Oa=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),Ma=f("pre",null,`import 'dart:io';

void main(){
  // ================================[ Numbers ]================================
  int num1 = 100;
  double num2 = 15.5;
  num num3 = 20;
  num num4 = 50.4;

  num sum = num1 + num2 + num3 + num4;

  print("Number One Is: $num1 | Type Is: \${num1.runtimeType}");
  print("Number Two Is: $num2 | Type Is: \${num2.runtimeType}");
  print("Number Three Is: $num3 | Type Is: \${num3.runtimeType}");
  print("Number Four Is: $num4 | Type Is: \${num4.runtimeType}");
  print("Sum Of Those Numbers Is: $sum | Type Is: \${sum.runtimeType}");

  // Round Double Value To 2 Decimal Places
  double price = 12.4568745;
  print("Product Price Is: \${price.toStringAsFixed(2)}");

}
        `,-1),ka={__name:"3d1_1_Numbers",setup(e){return(t,n)=>($(),U(B,null,[Oa,k(Q,{codeTitle:"Numbers"},{default:H(()=>[Ma]),_:1})],64))}},Da=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),Pa=f("pre",null,`import 'dart:io';

void main(){
    // ================================[ String ]================================
  String schoolName = "D.B.N. Vidyaniketan";
  String schoolAddress = "School Address, Pin-124525";

  print("School name is: $schoolName and address is $schoolAddress");

  // Create a multi-line string
  String multiLineString = '''
  Here we learn various data types of
  dart language such as
  Number, String, Booleans, Lists, Maps, Sets, Runes, Null
  ''';
  print(multiLineString);

  // Special character in String
  print("Good morning \\nto all of you.");
  print("Good morning \\tto all of you.");

  // raw String
  String rawString = r"This is an exam of \\traw string";
  print(rawString);

  // Convert String to Int
  String intString = "10";
  int convertedInt = int.parse(intString);
  print("Conversion Value: $convertedInt | Type Of: \${convertedInt.runtimeType}");

  // Convert String to Double
  String stringDouble = "127.8001";
  double convertedDouble = double.parse(stringDouble);
  print("Converted Value: $convertedDouble | Type Of: \${convertedDouble.runtimeType}");

  // Convert Int to String
  int intValue = 127;
  String convertedString = intValue.toString();
  print("Converted Value: $convertedString | Type Of: \${convertedString.runtimeType}");

  //Convert double to int
  double doubleNumber =10.01;
  int doubleToInt = doubleNumber.toInt();
  print("The Value: $doubleToInt | Type Of: \${doubleToInt.runtimeType}");
}
        `,-1),Na={__name:"3d1_2_String",setup(e){return(t,n)=>($(),U(B,null,[Da,k(Q,{codeTitle:"String"},{default:H(()=>[Pa]),_:1})],64))}},Ra=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),ja=f("pre",null,`import 'dart:io';

void main(){
    // ================================[ Boolean ]================================
  bool isMarried = false;
  print("Marital Status: $isMarried");

}
        `,-1),Ba={__name:"3d1_3_Boolean",setup(e){return(t,n)=>($(),U(B,null,[Ra,k(Q,{codeTitle:"Boolean"},{default:H(()=>[ja]),_:1})],64))}},Ha=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),Ua=f("pre",null,`import 'dart:io';

void main(){
    // ================================[ List ]================================
    List<String> nameList = ['Supriya', "Sudipta", "Soumen", "Tom"];
    print("Name List is: $nameList");
    print("3 Item in name list is: \${nameList[2]}");

    int lengthOfNameList = nameList.length;
    print("Name List Length: $lengthOfNameList");

}
        `,-1),Va={__name:"3d1_4_List",setup(e){return(t,n)=>($(),U(B,null,[Ha,k(Q,{codeTitle:"List"},{default:H(()=>[Ua]),_:1})],64))}},Wa=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),za=f("pre",null,`import 'dart:io';

void main(){
    // ================================[ Sets ]================================
    Set<String> weekdays = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    print(weekdays);

}
        `,-1),Ka={__name:"3d1_5_Sets",setup(e){return(t,n)=>($(),U(B,null,[Wa,k(Q,{codeTitle:"Sets"},{default:H(()=>[za]),_:1})],64))}},Xa=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),Ga=f("pre",null,`import 'dart:io';

void main(){
    // ================================[ Maps ]================================
    Map<int, String> country = {
        1: "India",
        2: "USA",
        3: "USSR",
        4: "UAE",
        5: "Bhutan",
    };
    print(country);
    print(country[5]);

}
        `,-1),qa={__name:"3d1_6_Maps",setup(e){return(t,n)=>($(),U(B,null,[Xa,k(Q,{codeTitle:"Maps"},{default:H(()=>[Ga]),_:1})],64))}},Ja=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),Ya=f("pre",null,`import 'dart:io';

void main(){
    // ================================[ Runes ]================================
  // Unicode values of String
  String runesValue = "Ola";
  print(runesValue.runes);

}
        `,-1),Za={__name:"3d1_7_Runes",setup(e){return(t,n)=>($(),U(B,null,[Ja,k(Q,{codeTitle:"Runes"},{default:H(()=>[Ya]),_:1})],64))}},Qa=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),eu=f("pre",null,`import 'dart:io';

void main(){
    // =============================[ Statically Typed ]==========================
  var myStaticalTypedData = 50;
  // myStaticalTypedData = "I love dart"; // This Will Throw Error
  print(myStaticalTypedData);

}
        `,-1),tu={__name:"3d1_8_Statically_Typed",setup(e){return(t,n)=>($(),U(B,null,[Qa,k(Q,{codeTitle:"Statically Typed"},{default:H(()=>[eu]),_:1})],64))}},nu=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Data Types ",-1),ru=f("pre",null,`import 'dart:io';

void main(){
    // ============================[ Dynamically Typed ]==========================
  dynamic myDynamicallyTypedData = 50;
  myDynamicallyTypedData = "I love dart";
  print(myDynamicallyTypedData);

}
        `,-1),su={__name:"3d1_9_Dynamically_Typed",setup(e){return(t,n)=>($(),U(B,null,[nu,k(Q,{codeTitle:"Dynamically Typed"},{default:H(()=>[ru]),_:1})],64))}},iu={__name:"3d1_Data_Types",setup(e){const t=st();return(n,r)=>X(t).tutorialCode=="3d1"?($(),q(Ia,{key:0})):X(t).tutorialCode=="3d1_1"?($(),q(ka,{key:1})):X(t).tutorialCode=="3d1_2"?($(),q(Na,{key:2})):X(t).tutorialCode=="3d1_3"?($(),q(Ba,{key:3})):X(t).tutorialCode=="3d1_4"?($(),q(Va,{key:4})):X(t).tutorialCode=="3d1_5"?($(),q(Ka,{key:5})):X(t).tutorialCode=="3d1_6"?($(),q(qa,{key:6})):X(t).tutorialCode=="3d1_7"?($(),q(Za,{key:7})):X(t).tutorialCode=="3d1_8"?($(),q(tu,{key:8})):X(t).tutorialCode=="3d1_9"?($(),q(su,{key:9})):Fe("",!0)}},ou=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Comments ",-1),lu=f("pre",null,`void main(){
  // This is Single Line Comments
  /*
  This is Multiline
  comment
  */

  /// Documentation comment
  print("This is Comment example");
}
        `,-1),au={__name:"4d1_Comments",setup(e){return(t,n)=>($(),U(B,null,[ou,k(Q,{codeTitle:"Comments"},{default:H(()=>[lu]),_:1})],64))}},uu=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Operators ",-1),cu=f("pre",null,`/*
Arithmetic Operators
Increment and Decrement Operators
Assignment Operators
Logical Operators
Type Test Operators
*/

void main(){
  int numberOne = 10;
  int numberTwo = 5;

  int sum = numberOne + numberTwo;
  int diff = numberOne + numberTwo;
  int unaryMinus = -numberOne;
  int mul = numberOne * numberTwo;
  double div = numberOne / numberTwo;
  int intDivision = numberOne ~/ numberTwo;
  int mod = numberOne%numberTwo;

  print("Summation: $sum");
  print("Difference: $diff");
  print("Unary Minus: $unaryMinus");
  print("Multiply: $mul");
  print("Division: $div");
  print("Integer Division: $intDivision");
  print("Mod: $mod");
}
        `,-1),fu={__name:"5d1_Operator",setup(e){return(t,n)=>($(),U(B,null,[uu,k(Q,{codeTitle:"Operators"},{default:H(()=>[cu]),_:1})],64))}},du=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Inputs ",-1),pu=f("pre",null,`import 'dart:io';

void main(){
  // String User Input
  print("Enter Your Name: ");
  String? name = stdin.readLineSync();
  print("Hi I'm $name");

  // Integer User Input
  print("Enter Your Age: ");
  var age = stdin.readLineSync();
  try{
    int.parse(age!);
    print("My Age Is: $age");
  }catch(e){
    print("invalid input");
  }

  // double input (floating point input)
  print('Enter Your Exam Marks: ');
  var marks = stdin.readLineSync();
  try{
    double.parse(marks!);
    print("You got $marks% marks");
  }catch(e){
    print("invalid input");
  }
}
        `,-1),hu={__name:"6d1_Input",setup(e){return(t,n)=>($(),U(B,null,[du,k(Q,{codeTitle:"Inputs"},{default:H(()=>[pu]),_:1})],64))}},_u=f("div",{class:"FlxM XLT Tbold Tupper"}," String & It's Method ",-1),gu=f("pre",null,`void main(){
    // ============================[ String ]=============================
  String textOne = 'This is single line string';
  String textTwo = "This is single line string inside 'double quotes'";
  String textThree = """
  Multiline string example:
  This is tutorial on dart string.
  """;

  print(textOne);
  print(textTwo);
  print(textThree);
}
        `,-1),mu={__name:"7d1__0_String",setup(e){return(t,n)=>($(),U(B,null,[_u,k(Q,{codeTitle:"String"},{default:H(()=>[gu]),_:1})],64))}},yu=f("div",{class:"FlxM XLT Tbold Tupper"}," String & It's Method ",-1),bu=f("pre",null,`void main(){
    // ==========================[ String Concatenation ]=========================
  String firstName = "Supriya";
  String lastName = "Singh";

  print("Using +, Full Name Is: " +firstName+ " "+lastName);
  print("Using interpolation, Full Name Is: $firstName $lastName");
}
        `,-1),vu={__name:"7d1_1_Concatenation",setup(e){return(t,n)=>($(),U(B,null,[yu,k(Q,{codeTitle:"String Concatenation"},{default:H(()=>[bu]),_:1})],64))}},xu=f("div",{class:"FlxM XLT Tbold Tupper"}," String & It's Method ",-1),Tu=f("pre",null,`void main(){
    // ============================[ String Properties ]==========================
  String spString = 'it is a string';
  print(spString.codeUnits);
  print(spString.isEmpty);
  print(spString.isNotEmpty);
  print("Length of the string is: \${spString.length}");
}
        `,-1),Su={__name:"7d1_2_Properties",setup(e){return(t,n)=>($(),U(B,null,[xu,k(Q,{codeTitle:"String Properties"},{default:H(()=>[Tu]),_:1})],64))}},$u=f("div",{class:"FlxM XLT Tbold Tupper"}," String & It's Method ",-1),wu=f("pre",null,`void main(){
    // ============================[ Methods Of String ]==========================
    String moStringOne = "First text";
    String moStringTwo = "Second text";
    String moStringThree = " Third text";
    String moStringFour = "Fourth text ";
    // Uppercase conversion
    print(moStringOne.toUpperCase());

    // Lowercase conversion
    print(moStringTwo.toLowerCase());

    // Trimming text
    print("Trim first string: \${moStringOne.trim()}");
    print("Trim Left Third string: \${moStringThree.trimLeft()}");
    print("Trim Left Forth string: \${moStringFour.trimRight()}");

    // Compare string
    print("Compare 1st string to 4th: \${moStringOne.compareTo(moStringFour)}");

    // Replace String
    String newString = moStringOne.replaceAll("First", "New String");
    print("The New String Is: \${newString}");

    // Split String
    String nameString = "Bose, Singh, Thakur, Patekar";
    List<String> splitList = nameString.split(",");
    print(splitList);
    print(splitList[2]);

    // ToString
    int numOne = 202;
    String result = numOne.toString();
    print("Result: $result | Type Is: \${result.runtimeType}");

    // SubsString
    String ssString = "We love coding, programs run in our ven";
    print("Print only computer: \${ssString.substring(14)}"); // from index 13 to the last index
    print("Print only love: \${ssString.substring(2,8)}");// from index 2 to the 8th index

    // Reverse String
    String input = "Hello World";
    print("\${input.split('').reversed.join()}");

    // Capitalize First Letter
    String notCapText = "truth is lie, lie is truth";
    print("Capitalize first letter: \${notCapText[0].toUpperCase()}\${notCapText.substring(1)}");
    List<String> textList = notCapText.split(", ");
    print(textList);
    print("\${textList[0][0].toUpperCase()}\${textList[0].substring(1)}, \${textList[1][0].toUpperCase()}\${textList[1].substring(1)}");

}
        `,-1),Cu={__name:"7d1_3_Methods",setup(e){return(t,n)=>($(),U(B,null,[$u,k(Q,{codeTitle:"Methods Of String"},{default:H(()=>[wu]),_:1})],64))}},Fu={__name:"7d1_String",setup(e){const t=st();return(n,r)=>X(t).tutorialCode=="7d1"?($(),q(mu,{key:0})):X(t).tutorialCode=="7d1_1"?($(),q(vu,{key:1})):X(t).tutorialCode=="7d1_2"?($(),q(Su,{key:2})):X(t).tutorialCode=="7d1_3"?($(),q(Cu,{key:3})):Fe("",!0)}},Eu=f("div",{class:"FlxM XLT Tbold Tupper"}," Conditions and Loops ",-1),Au=f("pre",null,`/*
If Condition
*/

void main(){
  // If condition
  var age = 10;
  if (age>=18){
    print("You are eligible for vote");
  }
}
        `,-1),Lu={__name:"1d2__0_if",setup(e){return(t,n)=>($(),U(B,null,[Eu,k(Q,{codeTitle:"If Condition"},{default:H(()=>[Au]),_:1})],64))}},Iu=f("div",{class:"FlxM XLT Tbold Tupper"}," Conditions and Loops ",-1),Ou=f("pre",null,`/*
If-Else condition
*/

void main(){
    // If-Else condition
  if(age>=18){
    print("You are eligible for vote");
  } else{
    print("You are not eligible for vote.");
  }
}
        `,-1),Mu={__name:"1d2__1_if_else",setup(e){return(t,n)=>($(),U(B,null,[Iu,k(Q,{codeTitle:"If-Else condition"},{default:H(()=>[Ou]),_:1})],64))}},ku=f("div",{class:"FlxM XLT Tbold Tupper"}," Conditions and Loops ",-1),Du=f("pre",null,`/*
If-Else-If condition
*/

void main(){
    // If-Else-If condition
  int monthNo = 9;
  if(monthNo==1){
    print("January");
  } else if(monthNo==2){
    print("February");
  } else if(monthNo==3){
    print("March");
  } else if(monthNo==4){
    print("April");
  } else if(monthNo==5){
    print("May");
  } else if(monthNo==6){
    print("Jun");
  } else if(monthNo==7){
    print("July");
  } else if(monthNo==8){
    print("August");
  } else if(monthNo==9){
    print("September");
  } else if(monthNo==10){
    print("October");
  } else if(monthNo==11){
    print("November");
  } else{
    print("December");
  }

  // Find Larges Number Among 3 Numbers
  int numOne = 100;
  int numTwo = 49;
  int numThree = 200;
  if(numOne>numTwo && numOne>numThree){
    print("Larger Number Is: $numOne");
  } else if(numTwo>numOne && numTwo>numThree){
    print("Larger Number Is: $numTwo");
  }else{
    print("Larger Number Is: $numThree");
  }
}
        `,-1),Pu={__name:"1d2__2_if_elese_if",setup(e){return(t,n)=>($(),U(B,null,[ku,k(Q,{codeTitle:"If-Else-If condition"},{default:H(()=>[Du]),_:1})],64))}},Nu=f("div",{class:"FlxM XLT Tbold Tupper"}," Conditions and Loops ",-1),Ru=f("pre",null,`/*
Switch-Case
*/

void main(){
    // Switch-Case
  switch(monthNo){
    case 1:
      print("January");
      break;
    case 2:
      print("February");
      break;
    case 3:
      print("March");
      break;
    case 4:
      print("April");
      break;
    case 5:
      print("May");
      break;
    case 6:
      print("Jun");
      break;
    case 7:
      print("July");
      break;
    case 8:
      print("August");
      break;
    case 9:
      print("September");
      break;
    case 10:
      print("October");
      break;
    case 11:
      print("November");
      break;
    default:
      print("December");
  }
}
        `,-1),ju={__name:"1d2__3_swithch_case",setup(e){return(t,n)=>($(),U(B,null,[Nu,k(Q,{codeTitle:"Switch-Case"},{default:H(()=>[Ru]),_:1})],64))}},Bu={__name:"1d2_Conditions",setup(e){const t=st();return(n,r)=>X(t).tutorialCode=="1d2"?($(),q(Lu,{key:0})):X(t).tutorialCode=="1d2_1"?($(),q(Mu,{key:1})):X(t).tutorialCode=="1d2_2"?($(),q(Pu,{key:2})):X(t).tutorialCode=="1d2_3"?($(),q(ju,{key:3})):Fe("",!0)}},Hu=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Conditions and Loops ",-1),Uu=f("pre",null,`void main(){
    var age = 25;
    // assert(age!=25);
    print("Age Should be 25");
}
        `,-1),Vu={__name:"2d2_Assert",setup(e){return(t,n)=>($(),U(B,null,[Hu,k(Q,{codeTitle:"Assert"},{default:H(()=>[Uu]),_:1})],64))}},Wu=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Conditions and Loops ",-1),zu=f("pre",null,`void main(){
  // condition ? expressionIfTrue : expressionIfFalse

  int num1 = 10;
  int num2 = 15;
  int max = (num1>num2) ? num1: num2;
  print("The larges number is: $max");

  print((num2>num1) ? num2 : num1);
  print((num1>num2) ? num1 : num2);
}
        `,-1),Ku={__name:"3d2_Tarnary_Operator",setup(e){return(t,n)=>($(),U(B,null,[Wu,k(Q,{codeTitle:"Tarnery Operator"},{default:H(()=>[zu]),_:1})],64))}},Xu=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Loops ",-1),Gu=f("pre",null,`/*
For Loop
For Each Loop
While Loop
Do While Loop
*/
        `,-1),qu={__name:"4d2_0_Loops",setup(e){return(t,n)=>($(),U(B,null,[Xu,k(Q,{codeTitle:"Type Of Dart Loops"},{default:H(()=>[Gu]),_:1})],64))}},Ju=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Loops ",-1),Yu=f("pre",null,`/* for(initialization; condition; increment/decrement){
    statements;
}
*/
void main(){
  for (int i=1; i<=15; i++){
    print(i);
  }
}
        `,-1),Zu={__name:"4d2_1_For_Loop",setup(e){return(t,n)=>($(),U(B,null,[Ju,k(Q,{codeTitle:"For Loop"},{default:H(()=>[Yu]),_:1})],64))}},Qu=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Loops ",-1),ec=f("pre",null,[sn(`void main(){
  List<String> fruits = ['Mango', 'Strawberry', 'banana', 'cherry'];
  fruits.forEach((name) => print(name));

  int total = 0;
  `),f("code",null,"List<int> numbers = [1, 2, 3, 4, 4, 6];"),sn(`
  numbers.forEach((element) => total= total+element);
  print(total);
}
        `)],-1),tc={__name:"4d2_2_For_Each_Loop",setup(e){return(t,n)=>($(),U(B,null,[Qu,k(Q,{codeTitle:"For Each Loop"},{default:H(()=>[ec]),_:1})],64))}},nc=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Loops ",-1),rc=f("pre",null,`void main() {
  List<String> names = ['Rimpa', 'Mou', 'Pritam', 'Ambar'];
  for (String name in names){
    print(name);
  }
}
        `,-1),sc={__name:"4d2_3_For_In_Loop",setup(e){return(t,n)=>($(),U(B,null,[nc,k(Q,{codeTitle:"For In Loop in Dart"},{default:H(()=>[rc]),_:1})],64))}},ic=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Loops ",-1),oc=f("pre",null,`void main(){
    List<String> names = ['Rimpa', 'Mou', 'Pritam', 'Ambar'];
    names.asMap().forEach((key, value) => print("Key: $key, Value: $value"));
}
        `,-1),lc={__name:"4d2_4_Find_List_KeyValue",setup(e){return(t,n)=>($(),U(B,null,[ic,k(Q,{codeTitle:"Find Key,Value of List"},{default:H(()=>[oc]),_:1})],64))}},ac=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Loops ",-1),uc=f("pre",null,`void main(){
  // Print 1 to 10
  int i = 1;
  while(i<=10){
    print(i);
    i++;
  }

  // Print 10 to 1
  int a = 10;
  while (a>=1){
    print(a);
    a--;
  }

  // Sum of first 100 natural numbers
  int total = 0;
  int x = 1;
  int y = 100;
  while(x<=y){
    total=total+x;
    x++;
  }
  print(total);
}
        `,-1),cc={__name:"4d2_5_While_Loop",setup(e){return(t,n)=>($(),U(B,null,[ac,k(Q,{codeTitle:"While Loop"},{default:H(()=>[uc]),_:1})],64))}},fc=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Loops ",-1),dc=f("pre",null,`/*
do{
    statement1;
    statement2;
    .
    .
    .
    statementN;
}while(condition);
*/

void main(){
  // Print 1 to 10
  int i = 1;
  do{
    print('drop of water...');
    print(i);
    i++;
  } while(i<=10);


  // Print 1 to 10
  int number = 0;
  do{
    print("are you ok?");
    number--;
  } while(number>1);
}
        `,-1),pc={__name:"4d2_6_Do_While_Loop",setup(e){return(t,n)=>($(),U(B,null,[fc,k(Q,{codeTitle:"Do While Loop"},{default:H(()=>[dc]),_:1})],64))}},hc={__name:"4d2_Loops",setup(e){const t=st();return(n,r)=>X(t).tutorialCode=="4d2"?($(),q(qu,{key:0})):X(t).tutorialCode=="4d2_1"?($(),q(Zu,{key:1})):X(t).tutorialCode=="4d2_2"?($(),q(tc,{key:2})):X(t).tutorialCode=="4d2_3"?($(),q(sc,{key:3})):X(t).tutorialCode=="4d2_4"?($(),q(lc,{key:4})):X(t).tutorialCode=="4d2_5"?($(),q(cc,{key:5})):X(t).tutorialCode=="4d2_6"?($(),q(pc,{key:6})):Fe("",!0)}},_c=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Conditions and Loops ",-1),gc=f("pre",null,`void main(){
  // CONTINUE & BREAK IN FOR LOOP
  for (int i=1; i<=15; i++){
    if(i == 5){
      continue;
    }
    if(i==10){
      break;
    }
    print(i);
  }

  // CONTINUE & BREAK IN WHILE LOOP
  int a = 1;
  while(a<27){
    print(a);
    if(a==15){
      a++; // Important (other wise suck)
      continue;
    }
    if(a==23){
      break;
    }
    a++;
  }
}
        `,-1),mc={__name:"5d2_Break_and_Continue",setup(e){return(t,n)=>($(),U(B,null,[_c,k(Q,{codeTitle:"BREAK & CONTINUE"},{default:H(()=>[gc]),_:1})],64))}},yc=f("div",{class:"FlxM XLT Tbold Tupper"}," Dart Conditions and Loops ",-1),bc=f("pre",null,`/*
try{
    your code
}
catch (ex){
    Exception here
}
*/
void main(){

  int a = 10;
  int b = 0;
  int res;
  try{
    res = a ~/ b;
    print("Result is $res");
  }
  catch(ex){
    print(ex);
  }

  // Finally in try-catch
  try{
    res = a~/b;
    print("Result is: $res");
  } on UnsupportedError{
    print("Can't divided by zero");
  } catch(ex){
    print(ex);
  } finally{
    print("block always executed");
  }

}
        `,-1),vc={__name:"6d2_Try_Catch",setup(e){return(t,n)=>($(),U(B,null,[yc,k(Q,{codeTitle:"Try, Catch, finally"},{default:H(()=>[bc]),_:1})],64))}},xc={__name:"VisualizeDartCode",setup(e){const t=st();return(n,r)=>($(),U(B,null,[f("div",null,[X(t).tutorialCode=="1d1"?($(),q(ya,{key:0})):Fe("",!0),k(Ea),k(iu),X(t).tutorialCode=="4d1"?($(),q(au,{key:1})):X(t).tutorialCode=="5d1"?($(),q(fu,{key:2})):X(t).tutorialCode=="6d1"?($(),q(hu,{key:3})):Fe("",!0),k(Fu)]),f("div",null,[k(Bu),X(t).tutorialCode=="2d2"?($(),q(Vu,{key:0})):Fe("",!0),X(t).tutorialCode=="3d2"?($(),q(Ku,{key:1})):Fe("",!0),k(hc),X(t).tutorialCode=="5d2"?($(),q(mc,{key:2})):Fe("",!0),X(t).tutorialCode=="6d2"?($(),q(vc,{key:3})):Fe("",!0)])],64))}},ar=e=>(ws("data-v-243dc3e0"),e=e(),Cs(),e),Tc=ar(()=>f("header",{class:"FlxM XLT Tcapital Tbold"}," code snippits ",-1)),Sc=ar(()=>f("hr",null,null,-1)),$c=ar(()=>f("hr",null,null,-1)),wc={key:0},Cc={key:1,class:"container"},Fc={__name:"HomePage",setup(e){const t=st();return(n,r)=>($(),U(B,null,[Tc,f("aside",null,[k(ua),Sc,k(ca),$c]),f("section",null,[X(t).tutorialLanguage=="dart"?($(),U("div",wc,[k(xc)])):($(),U("div",Cc,[k(Jl)]))])],64))}},Ec=ht(Fc,[["__scopeId","data-v-243dc3e0"]]),Ac={__name:"App",setup(e){return(t,n)=>($(),q(Ec))}},Lc=ta(),ni=Tl(Ac);ni.use(Lc);ni.mount("#app");
