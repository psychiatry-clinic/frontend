import{cp as ke,cq as Pe,a2 as U,r as H,cr as z,c9 as ce,w as B,cs as D,ct as He,cu as de,cv as ne,cw as oe,cx as me,a6 as C,b0 as Q,cy as ye,a8 as R,a7 as ge,cz as ue,cA as Ce,cB as De,bP as Ae,U as Te,cC as he,s as q,cD as Ve,a5 as K,be as Ie,H as We,cE as pe,O as qe,bh as ze,bf as $e,a3 as je,as as Ye,ay as Ke,az as Ue,aJ as Ge,aA as Xe,aK as Ze,aB as Je,$ as Qe,aD as et,bg as tt,c7 as nt,aa as ot,b as W,bi as at,K as rt,L as it,bZ as lt,F as st,T as ct,cF as ut}from"./index-CUq24_Fe.js";import{g as ft,B as ae,a as be,n as vt,b as dt,s as mt}from"./easing-CjukEv2V.js";import{m as yt,u as gt}from"./lazy-DMUNf1IF.js";import{u as ht}from"./scopeId-DWELbCgr.js";import{m as bt,M as wt}from"./index-CYM1QvHM.js";const G=new WeakMap;function Et(e,t){Object.keys(t).forEach(n=>{if(ke(n)){const o=Pe(n),a=G.get(e);if(t[n]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===t[n])){e.addEventListener(o,t[n]);const r=a||new Set;r.add([o,t[n]]),G.has(e)||G.set(e,r)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function St(e,t){Object.keys(t).forEach(n=>{if(ke(n)){const o=Pe(n),a=G.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(n)})}function Le(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Ot(e):fe(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(fe(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ot(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function kt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Pt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function we(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return re({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return re({x:a,y:r},t)}return re({x:t.width/2,y:t.height/2},t)}const Be={static:Tt,connected:Lt},Ct=U({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Be},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function At(e,t){const n=H({}),o=H();z&&ce(()=>!!(t.isActive.value&&e.locationStrategy),r=>{var l,i;B(()=>e.locationStrategy,r),D(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation:o.value=(i=Be[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:n,updateLocation:o}}function Tt(){}function pt(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=vt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Lt(e,t,n){(Array.isArray(e.target.value)||kt(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=He(()=>{const u=de(t.location,e.isRtl.value),f=t.origin==="overlap"?u:t.origin==="auto"?ne(u):de(t.origin,e.isRtl.value);return u.side===f.side&&u.align===oe(f).align?{preferredAnchor:me(u),preferredOrigin:me(f)}:{preferredAnchor:u,preferredOrigin:f}}),[l,i,d,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(u=>C(()=>{const f=parseFloat(t[u]);return isNaN(f)?1/0:f})),m=C(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const u=t.offset.split(" ").map(parseFloat);return u.length<2&&u.push(0),u}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const O=new ResizeObserver(()=>{g&&k()});B([e.target,e.contentEl],(u,f)=>{let[A,T]=u,[w,h]=f;w&&!Array.isArray(w)&&O.unobserve(w),A&&!Array.isArray(A)&&O.observe(A),h&&O.unobserve(h),T&&O.observe(T)},{immediate:!0}),D(()=>{O.disconnect()});function k(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const u=ft(e.target.value),f=pt(e.contentEl.value,e.isRtl.value),A=Z(e.contentEl.value),T=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=A.reduce((S,b)=>{const c=b.getBoundingClientRect(),y=new ae({x:b===document.documentElement?0:c.x,y:b===document.documentElement?0:c.y,width:b.clientWidth,height:b.clientHeight});return S?new ae({x:Math.max(S.left,y.left),y:Math.max(S.top,y.top),width:Math.min(S.right,y.right)-Math.max(S.left,y.left),height:Math.min(S.bottom,y.bottom)-Math.max(S.top,y.top)}):y},void 0);w.x+=T,w.y+=T,w.width-=T*2,w.height-=T*2;let h={anchor:a.value,origin:r.value};function V(S){const b=new ae(f),c=we(S.anchor,u),y=we(S.origin,b);let{x:L,y:M}=Pt(c,y);switch(S.anchor.side){case"top":M-=m.value[0];break;case"bottom":M+=m.value[0];break;case"left":L-=m.value[0];break;case"right":L+=m.value[0];break}switch(S.anchor.align){case"top":M-=m.value[1];break;case"bottom":M+=m.value[1];break;case"left":L-=m.value[1];break;case"right":L+=m.value[1];break}return b.x+=L,b.y+=M,b.width=Math.min(b.width,d.value),b.height=Math.min(b.height,v.value),{overflows:be(b,w),x:L,y:M}}let F=0,P=0;const s={x:0,y:0},p={x:!1,y:!1};let ee=-1;for(;!(ee++>10);){const{x:S,y:b,overflows:c}=V(h);F+=S,P+=b,f.x+=S,f.y+=b;{const y=ye(h.anchor),L=c.x.before||c.x.after,M=c.y.before||c.y.after;let $=!1;if(["x","y"].forEach(x=>{if(x==="x"&&L&&!p.x||x==="y"&&M&&!p.y){const I={anchor:{...h.anchor},origin:{...h.origin}},j=x==="x"?y==="y"?oe:ne:y==="y"?ne:oe;I.anchor=j(I.anchor),I.origin=j(I.origin);const{overflows:N}=V(I);(N[x].before<=c[x].before&&N[x].after<=c[x].after||N[x].before+N[x].after<(c[x].before+c[x].after)/2)&&(h=I,$=p[x]=!0)}}),$)continue}c.x.before&&(F+=c.x.before,f.x+=c.x.before),c.x.after&&(F-=c.x.after,f.x-=c.x.after),c.y.before&&(P+=c.y.before,f.y+=c.y.before),c.y.after&&(P-=c.y.after,f.y-=c.y.after);{const y=be(f,w);s.x=w.width-y.x.before-y.x.after,s.y=w.height-y.y.before-y.y.after,F+=y.x.before,f.x+=y.x.before,P+=y.y.before,f.y+=y.y.before}break}const te=ye(h.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${h.anchor.side} ${h.anchor.align}`,transformOrigin:`${h.origin.side} ${h.origin.align}`,top:R(ie(P)),left:e.isRtl.value?void 0:R(ie(F)),right:e.isRtl.value?R(ie(-F)):void 0,minWidth:R(te==="y"?Math.min(l.value,u.width):l.value),maxWidth:R(Ee(ge(s.x,l.value===1/0?0:l.value,d.value))),maxHeight:R(Ee(ge(s.y,i.value===1/0?0:i.value,v.value)))}),{available:s,contentBox:f}}return B(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>k()),Q(()=>{const u=k();if(!u)return;const{available:f,contentBox:A}=u;A.height>f.y&&requestAnimationFrame(()=>{k(),requestAnimationFrame(()=>{k()})})}),{updateLocation:k}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const J=[];function Bt(e){!le||J.length?(J.push(e),se()):(le=!1,e(),se())}let Se=-1;function se(){cancelAnimationFrame(Se),Se=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?se():le=!0})}const X={none:null,close:Rt,block:Nt,reposition:_t},Ft=U({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in X}},"VOverlay-scroll-strategies");function Mt(e,t){if(!z)return;let n;ue(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Ce(),await Q(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=X[e.scrollStrategy])==null||o.call(X,t,e,n)}))}),D(()=>{n==null||n.stop()})}function Rt(e){function t(n){e.isActive.value=!1}Fe(e.targetEl.value??e.contentEl.value,t)}function Nt(e,t){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...Z(e.targetEl.value,t.contained?n:void 0),...Z(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>fe(i)&&i)(n||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,d)=>{i.style.setProperty("--v-body-scroll-x",R(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",R(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",R(a)),i.classList.add("v-overlay-scroll-blocked")}),D(()=>{o.forEach((i,d)=>{const v=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),m=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),g=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-v,i.scrollTop=-m,i.style.scrollBehavior=g}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function _t(e,t,n){let o=!1,a=-1,r=-1;function l(i){Bt(()=>{var m,g;const d=performance.now();(g=(m=e.updateLocation).value)==null||g.call(m,i),o=(performance.now()-d)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{Fe(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),D(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Fe(e,t){const n=[document,...Z(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),D(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const Ht=Symbol.for("vuetify:v-menu"),Dt=U({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Vt(e,t){let n=()=>{};function o(l){n==null||n();const i=Number(l?e.openDelay:e.closeDelay);return new Promise(d=>{n=De(i,()=>{t==null||t(l),d(l)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:n,runOpenDelay:a,runCloseDelay:r}}const It=U({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Dt()},"VOverlay-activator");function Wt(e,t){let{isActive:n,isTop:o}=t;const a=Ae("useActivator"),r=H();let l=!1,i=!1,d=!0;const v=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),m=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!v.value),{runOpenDelay:g,runCloseDelay:O}=Vt(e,s=>{s===(e.openOnHover&&l||v.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==s&&(d=!0),n.value=s)}),k=H(),u={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,n.value||(k.value=[s.clientX,s.clientY]),n.value=!n.value},onMouseenter:s=>{var p;(p=s.sourceCapabilities)!=null&&p.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,g())},onMouseleave:s=>{l=!1,O()},onFocus:s=>{Ve(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,g())},onBlur:s=>{i=!1,s.stopPropagation(),O()}},f=C(()=>{const s={};return m.value&&(s.onClick=u.onClick),e.openOnHover&&(s.onMouseenter=u.onMouseenter,s.onMouseleave=u.onMouseleave),v.value&&(s.onFocus=u.onFocus,s.onBlur=u.onBlur),s}),A=C(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,g()},s.onMouseleave=()=>{l=!1,O()}),v.value&&(s.onFocusin=()=>{i=!0,g()},s.onFocusout=()=>{i=!1,O()}),e.closeOnContentClick){const p=Te(Ht,null);s.onClick=()=>{n.value=!1,p==null||p.closeParents()}}return s}),T=C(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{d&&(l=!0,d=!1,g())},s.onMouseleave=()=>{l=!1,O()}),s});B(o,s=>{s&&(e.openOnHover&&!l&&(!v.value||!i)||v.value&&!i&&(!e.openOnHover||!l))&&(n.value=!1)}),B(n,s=>{s||setTimeout(()=>{k.value=void 0})},{flush:"post"});const w=H();ue(()=>{w.value&&Q(()=>{r.value=he(w.value)})});const h=H(),V=C(()=>e.target==="cursor"&&k.value?k.value:h.value?he(h.value):Me(e.target,a)||r.value),F=C(()=>Array.isArray(V.value)?void 0:V.value);let P;return B(()=>!!e.activator,s=>{s&&z?(P=Ce(),P.run(()=>{qt(e,a,{activatorEl:r,activatorEvents:f})})):P&&P.stop()},{flush:"post",immediate:!0}),D(()=>{P==null||P.stop()}),{activatorEl:r,activatorRef:w,target:V,targetEl:F,targetRef:h,activatorEvents:f,contentEvents:A,scrimEvents:T}}function qt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;B(()=>e.activator,(d,v)=>{if(v&&d!==v){const m=i(v);m&&l(m)}d&&Q(()=>r())},{immediate:!0}),B(()=>e.activatorProps,()=>{r()}),D(()=>{l()});function r(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&Et(d,q(a.value,v))}function l(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;d&&St(d,q(a.value,v))}function i(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const v=Me(d,t);return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:void 0,o.value}}function Me(e,t){var o,a;if(!e)return;let n;if(e==="parent"){let r=(a=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;n=r}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function zt(){if(!z)return K(!1);const{ssr:e}=Ie();if(e){const t=K(!1);return We(()=>{t.value=!0}),t}else return K(!0)}const xe=Symbol.for("vuetify:stack"),Y=pe([]);function $t(e,t,n){const o=Ae("useStack"),a=!n,r=Te(xe,void 0),l=pe({activeChildren:new Set});qe(xe,l);const i=K(+t.value);ce(e,()=>{var g;const m=(g=Y.at(-1))==null?void 0:g[1];i.value=m?m+10:+t.value,a&&Y.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),D(()=>{if(a){const O=$e(Y).findIndex(k=>k[0]===o.uid);Y.splice(O,1)}r==null||r.activeChildren.delete(o.uid)})});const d=K(!0);a&&ue(()=>{var g;const m=((g=Y.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>d.value=m)});const v=C(()=>!l.activeChildren.size);return{globalTop:ze(d),localTop:v,stackStyles:C(()=>({zIndex:i.value}))}}function jt(e){return{teleportTarget:C(()=>{const n=e.value;if(n===!0||!z)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Yt(){return!0}function Re(e,t,n){if(!e||Ne(e,n)===!1)return!1;const o=Le(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function Ne(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Yt)(e)}function Kt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Re(e,t,n)&&setTimeout(()=>{Ne(e,n)&&o&&o(e)},0)}function Oe(e,t){const n=Le(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Ut={mounted(e,t){const n=a=>Kt(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Re(a,e,t)};Oe(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Oe(e,n=>{var r;if(!n||!((r=e._clickOutside)!=null&&r[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Gt(e){const{modelValue:t,color:n,...o}=e;return W(ct,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&W("div",q({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Xt=U({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...It(),...je(),...Ye(),...yt(),...Ct(),...Ft(),...Ke(),...bt()},"VOverlay"),nn=Ue()({name:"VOverlay",directives:{ClickOutside:Ut},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Xt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=Ge(e,"modelValue"),l=C({get:()=>r.value,set:E=>{E&&e.disabled||(r.value=E)}}),{teleportTarget:i}=jt(C(()=>e.attach||e.contained)),{themeClasses:d}=Xe(e),{rtlClasses:v,isRtl:m}=Ze(),{hasContent:g,onAfterLeave:O}=gt(e,l),k=Je(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:u,localTop:f,stackStyles:A}=$t(l,Qe(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:w,target:h,targetEl:V,targetRef:F,activatorEvents:P,contentEvents:s,scrimEvents:p}=Wt(e,{isActive:l,isTop:f}),{dimensionStyles:ee}=et(e),te=zt(),{scopeId:S}=ht();B(()=>e.disabled,E=>{E&&(l.value=!1)});const b=H(),c=H(),{contentStyles:y,updateLocation:L}=At(e,{isRtl:m,contentEl:c,target:h,isActive:l});Mt(e,{root:b,contentEl:c,targetEl:V,isActive:l,updateLocation:L});function M(E){a("click:outside",E),e.persistent?N():l.value=!1}function $(){return l.value&&u.value}z&&B(l,E=>{E?window.addEventListener("keydown",x):window.removeEventListener("keydown",x)},{immediate:!0}),tt(()=>{z&&window.removeEventListener("keydown",x)});function x(E){var _,ve;E.key==="Escape"&&u.value&&(e.persistent?N():(l.value=!1,(_=c.value)!=null&&_.contains(document.activeElement)&&((ve=T.value)==null||ve.focus())))}const I=nt();ce(()=>e.closeOnBack,()=>{ut(I,E=>{u.value&&l.value?(E(!1),e.persistent?N():l.value=!1):E()})});const j=H();B(()=>l.value&&(e.absolute||e.contained)&&i.value==null,E=>{if(E){const _=xt(b.value);_&&_!==document.scrollingElement&&(j.value=_.scrollTop)}});function N(){e.noClickAnimation||c.value&&dt(c.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:mt})}function _e(){O(),a("afterLeave")}return ot(()=>{var E;return W(st,null,[(E=n.activator)==null?void 0:E.call(n,{isActive:l.value,props:q({ref:w,targetRef:F},P.value,e.activatorProps)}),!e.disabled&&te.value&&g.value&&W(at,{disabled:!i.value,to:i.value},{default:()=>[W("div",q({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},d.value,v.value,e.class],style:[A.value,{top:R(j.value)},e.style],ref:b},S,o),[W(Gt,q({color:k,modelValue:!!e.scrim&&l.value},p.value),null),W(wt,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterLeave:_e},{default:()=>{var _;return[rt(W("div",q({ref:c,class:["v-overlay__content",e.contentClass],style:[ee.value,y.value]},s.value,e.contentProps),[(_=n.default)==null?void 0:_.call(n,{isActive:l})]),[[it,l.value],[lt("click-outside"),{handler:M,closeConditional:$,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,target:h,animateClick:N,contentEl:c,globalTop:u,localTop:f,updateLocation:L}}});export{Ht as V,nn as a,xt as g,Xt as m};