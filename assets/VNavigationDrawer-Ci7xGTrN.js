import{a5 as B,a6 as h,a8 as ee,H as Z,w as V,bg as U,c4 as te,a2 as ae,ar as ne,a3 as oe,c5 as le,at as ue,c6 as ie,aw as re,ax as se,ay as ce,az as ve,aK as de,aA as me,aC as fe,aB as $,$ as z,aE as ge,be as he,aH as we,c7 as ye,aJ as be,r as Se,c8 as ke,c9 as Y,ca as Ee,cb as Te,aL as Me,aa as xe,b as T,s as A,T as pe,F as Be,b0 as Ce}from"./index-C5WQT9Zq.js";import{u as He}from"./scopeId-B1B_DOqA.js";import{u as Pe}from"./ssrBoot-DZaVDsF1.js";function Ve(e){let{rootEl:s,isSticky:c,layoutItemStyles:i}=e;const a=B(!1),t=B(0),f=h(()=>{const g=typeof a.value=="boolean"?"top":a.value;return[c.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[g]:ee(t.value)}:{top:i.value.top}]});Z(()=>{V(c,g=>{g?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),U(()=>{window.removeEventListener("scroll",S)});let b=0;function S(){const g=b>window.scrollY?"up":"down",l=s.value.getBoundingClientRect(),v=parseFloat(i.value.top??0),r=window.scrollY-Math.max(0,t.value-v),m=l.height+Math.max(t.value,v)-window.scrollY-window.innerHeight,k=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-v?(a.value="top",t.value=v):g==="up"&&a.value==="bottom"||g==="down"&&a.value==="top"?(t.value=window.scrollY+l.top-k,a.value=!0):g==="down"&&m<=0?(t.value=0,a.value="bottom"):g==="up"&&r<=0&&(k?a.value!=="top"&&(t.value=-r+k+v,a.value="top"):(t.value=l.top+r,a.value="top")),b=window.scrollY}return{isStuck:a,stickyStyles:f}}const Re=100,Ye=20;function F(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function q(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let c=e.length-1;c>0;c--){if(e[c].t===e[c-1].t)continue;const i=F(s),a=(e[c].d-e[c-1].d)/(e[c].t-e[c-1].t);s+=(a-i)*Math.abs(a),c===e.length-1&&(s*=.5)}return F(s)*1e3}function Le(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new te(Ye))).push([a.timeStamp,t])})}function c(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function i(a){var g;const t=(g=e[a])==null?void 0:g.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const f=t[0],b=[],S=[];for(const l of t){if(f[0]-l[0]>Re)break;b.push({t:l[0],d:l[1].clientX}),S.push({t:l[0],d:l[1].clientY})}return{x:q(b),y:q(S),get direction(){const{x:l,y:v}=this,[r,m]=[Math.abs(l),Math.abs(v)];return r>m&&l>=0?"right":r>m&&l<=0?"left":m>r&&v>=0?"down":m>r&&v<=0?"up":Ie()}}}return{addMovement:s,endTouch:c,getVelocity:i}}function Ie(){throw new Error}function Ne(e){let{isActive:s,isTemporary:c,width:i,touchless:a,position:t}=e;Z(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",H,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),U(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",H),window.removeEventListener("touchend",M)});const f=h(()=>["left","right"].includes(t.value)),{addMovement:b,endTouch:S,getVelocity:g}=Le();let l=!1;const v=B(!1),r=B(0),m=B(0);let k;function w(o,n){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:p())-(n?i.value:0)}function R(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const u=t.value==="left"?(o-m.value)/i.value:t.value==="right"?(document.documentElement.clientWidth-o-m.value)/i.value:t.value==="top"?(o-m.value)/i.value:t.value==="bottom"?(document.documentElement.clientHeight-o-m.value)/i.value:p();return n?Math.max(0,Math.min(1,u)):u}function C(o){if(a.value)return;const n=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY,d=25,E=t.value==="left"?n<d:t.value==="right"?n>document.documentElement.clientWidth-d:t.value==="top"?u<d:t.value==="bottom"?u>document.documentElement.clientHeight-d:p(),x=s.value&&(t.value==="left"?n<i.value:t.value==="right"?n>document.documentElement.clientWidth-i.value:t.value==="top"?u<i.value:t.value==="bottom"?u>document.documentElement.clientHeight-i.value:p());(E||x||s.value&&c.value)&&(l=!0,k=[n,u],m.value=w(f.value?n:u,s.value),r.value=R(f.value?n:u),S(o),b(o))}function H(o){const n=o.changedTouches[0].clientX,u=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const E=Math.abs(n-k[0]),x=Math.abs(u-k[1]);(f.value?E>x&&E>3:x>E&&x>3)?(v.value=!0,l=!1):(f.value?x:E)>3&&(l=!1)}if(!v.value)return;o.preventDefault(),b(o);const d=R(f.value?n:u,!1);r.value=Math.max(0,Math.min(1,d)),d>1?m.value=w(f.value?n:u,!0):d<0&&(m.value=w(f.value?n:u,!1))}function M(o){if(l=!1,!v.value)return;b(o),v.value=!1;const n=g(o.changedTouches[0].identifier),u=Math.abs(n.x),d=Math.abs(n.y);(f.value?u>d&&u>400:d>u&&d>3)?s.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||p()):s.value=r.value>.5}const P=h(()=>v.value?{transform:t.value==="left"?`translateX(calc(-100% + ${r.value*i.value}px))`:t.value==="right"?`translateX(calc(100% - ${r.value*i.value}px))`:t.value==="top"?`translateY(calc(-100% + ${r.value*i.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${r.value*i.value}px))`:p(),transition:"none"}:void 0);return{isDragging:v,dragProgress:r,dragStyles:P}}function p(){throw new Error}const De=["start","end","left","right","top","bottom"],We=ae({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>De.includes(e)},sticky:Boolean,...ne(),...oe(),...le(),...ue(),...ie(),...re(),...se({tag:"nav"}),...ce()},"VNavigationDrawer"),$e=ve()({name:"VNavigationDrawer",props:We(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:c,emit:i,slots:a}=s;const{isRtl:t}=de(),{themeClasses:f}=me(e),{borderClasses:b}=fe(e),{backgroundColorClasses:S,backgroundColorStyles:g}=$(z(e,"color")),{elevationClasses:l}=ge(e),{displayClasses:v,mobile:r}=he(e),{roundedClasses:m}=we(e),k=ye(),w=be(e,"modelValue",null,y=>!!y),{ssrBootStyles:R}=Pe(),{scopeId:C}=He(),H=Se(),M=B(!1),P=h(()=>e.rail&&e.expandOnHover&&M.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=h(()=>ke(e.location,t.value)),n=h(()=>!e.permanent&&(r.value||e.temporary)),u=h(()=>e.sticky&&!n.value&&o.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{V(M,y=>i("update:rail",!y))}),Y(()=>!e.disableResizeWatcher,()=>{V(n,y=>!e.permanent&&Ce(()=>w.value=!y))}),Y(()=>!e.disableRouteWatcher&&!!k,()=>{V(k.currentRoute,()=>n.value&&(w.value=!1))}),V(()=>e.permanent,y=>{y&&(w.value=!0)}),Ee(()=>{e.modelValue!=null||n.value||(w.value=e.permanent||!r.value)});const{isDragging:d,dragProgress:E,dragStyles:x}=Ne({isActive:w,isTemporary:n,width:P,touchless:z(e,"touchless"),position:o}),L=h(()=>{const y=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):P.value;return d.value?y*E.value:y}),{layoutItemStyles:I,layoutItemScrimStyles:J}=Te({id:e.name,order:h(()=>parseInt(e.order,10)),position:o,layoutSize:L,elementSize:P,active:h(()=>w.value||d.value),disableTransitions:h(()=>d.value),absolute:h(()=>e.absolute||u.value&&typeof N.value!="string")}),{isStuck:N,stickyStyles:K}=Ve({rootEl:H,isSticky:u,layoutItemStyles:I}),D=$(h(()=>typeof e.scrim=="string"?e.scrim:null)),j=h(()=>({...d.value?{opacity:E.value*.2,transition:"none"}:void 0,...J.value}));Me({VList:{bgColor:"transparent"}});function G(){M.value=!0}function Q(){M.value=!1}return xe(()=>{const y=a.image||e.image;return T(Be,null,[T(e.tag,A({ref:H,onMouseenter:G,onMouseleave:Q,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":M.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":u.value},f.value,S.value,b.value,v.value,l.value,m.value,e.class],style:[g.value,I.value,x.value,R.value,K.value,e.style]},C,c),{default:()=>{var W,_,O,X;return[y&&T("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(W=a.image)==null?void 0:W.call(a,{image:e.image}):T("img",{src:e.image,alt:""},null)]),a.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[(_=a.prepend)==null?void 0:_.call(a)]),T("div",{class:"v-navigation-drawer__content"},[(O=a.default)==null?void 0:O.call(a)]),a.append&&T("div",{class:"v-navigation-drawer__append"},[(X=a.append)==null?void 0:X.call(a)])]}}),T(pe,{name:"fade-transition"},{default:()=>[n.value&&(d.value||w.value)&&!!e.scrim&&T("div",A({class:["v-navigation-drawer__scrim",D.backgroundColorClasses.value],style:[j.value,D.backgroundColorStyles.value],onClick:()=>w.value=!1},C),null)]})])}),{isStuck:N}}});export{$e as V};