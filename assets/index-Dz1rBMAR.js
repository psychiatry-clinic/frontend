const C=/#/g,p=/&/g,O=/\//g,I=/=/g,f=/\+/g,P=/%5e/gi,S=/%60/gi,T=/%7c/gi,w=/%20/gi;function N(e){return encodeURI(""+e).replace(T,"|")}function i(e){return N(typeof e=="string"?e:JSON.stringify(e)).replace(f,"%2B").replace(w,"+").replace(C,"%23").replace(p,"%26").replace(S,"`").replace(P,"^").replace(O,"%2F")}function a(e){return i(e).replace(I,"%3D")}function _(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function Q(e){return _(e.replace(f," "))}function b(e){return _(e.replace(f," "))}function U(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const o of e.split("&")){const n=o.match(/([^=]+)=?(.*)/)||[];if(n.length<2)continue;const r=Q(n[1]);if(r==="__proto__"||r==="constructor")continue;const c=b(n[2]||"");t[r]===void 0?t[r]=c:Array.isArray(t[r])?t[r].push(c):t[r]=[t[r],c]}return t}function j(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(o=>`${a(e)}=${i(o)}`).join("&"):`${a(e)}=${i(t)}`:a(e)}function $(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>j(t,e[t])).filter(Boolean).join("&")}const x=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,G=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,H=/^([/\\]\s*){2,}[^/\\]/,B=/\/$|\/\?|\/#/,K=/^\.?\//;function E(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?x.test(e):G.test(e)||(t.acceptRelative?H.test(e):!1)}function h(e="",t){return t?B.test(e):e.endsWith("/")}function W(e="",t){if(!t)return(h(e)?e.slice(0,-1):e)||"/";if(!h(e,!0))return e||"/";let o=e,n="";const r=e.indexOf("#");r>=0&&(o=e.slice(0,r),n=e.slice(r));const[c,...s]=o.split("?");return(c.slice(0,-1)||"/")+(s.length>0?`?${s.join("?")}`:"")+n}function v(e="",t){if(!t)return e.endsWith("/")?e:e+"/";if(h(e,!0))return e||"/";let o=e,n="";const r=e.indexOf("#");if(r>=0&&(o=e.slice(0,r),n=e.slice(r),!o))return n;const[c,...s]=o.split("?");return c+"/"+(s.length>0?`?${s.join("?")}`:"")+n}function J(e,t){if(D(t)||E(e))return e;const o=W(t);return e.startsWith(o)?e:V(o,e)}function z(e,t){const o=g(e),n={...U(o.search),...t};return o.search=$(n),X(o)}function D(e){return!e||e==="/"}function M(e){return e&&e!=="/"}function V(e,...t){let o=e||"";for(const n of t.filter(r=>M(r)))if(o){const r=n.replace(K,"");o=v(o)+r}else o=n;return o}const m=Symbol.for("ufo:protocolRelative");function g(e="",t){const o=e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(o){const[,l,u=""]=o;return{protocol:l.toLowerCase(),pathname:u,href:l+u,auth:"",host:"",search:"",hash:""}}if(!E(e,{acceptRelative:!0}))return t?g(t+e):R(e);const[,n="",r,c=""]=e.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,s="",y=""]=c.match(/([^#/?]*)(.*)?/)||[],{pathname:A,search:L,hash:d}=R(y.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:s,pathname:A,search:L,hash:d,[m]:!n}}function R(e=""){const[t="",o="",n=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:o,hash:n}}function X(e){const t=e.pathname||"",o=e.search?(e.search.startsWith("?")?"":"?")+e.search:"",n=e.hash||"",r=e.auth?e.auth+"@":"",c=e.host||"";return(e.protocol||e[m]?(e.protocol||"")+"//":"")+r+c+t+o+n}export{J as a,$ as s,z as w};