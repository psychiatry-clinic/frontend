import{be as d,r as V,w as f,a2 as c,a3 as i,cL as p,az as m,cM as L,aa as y,b as u,ax as b,cN as k}from"./index-C5WQT9Zq.js";import{u as S}from"./ssrBoot-DZaVDsF1.js";const w=(e=void 0)=>{const{mdAndDown:o,name:a}=d(),t=e||o,s=V(!0);return(()=>{s.value=!t.value})(),f(a,()=>{s.value=!t.value}),{isLeftSidebarOpen:s}},g=c({...i(),...p()},"VLayout"),C=m()({name:"VLayout",props:g(),setup(e,o){let{slots:a}=o;const{layoutClasses:t,layoutStyles:s,getLayoutItem:l,items:n,layoutRef:v}=L(e);return y(()=>{var r;return u("div",{ref:v,class:[t.value,e.class],style:[s.value,e.style]},[(r=a.default)==null?void 0:r.call(a)])}),{getLayoutItem:l,items:n}}}),B=c({scrollable:Boolean,...i(),...b({tag:"main"})},"VMain"),I=m()({name:"VMain",props:B(),setup(e,o){let{slots:a}=o;const{mainStyles:t}=k(),{ssrBootStyles:s}=S();return y(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,s.value,e.style]},{default:()=>{var l,n;return[e.scrollable?u("div",{class:"v-main__scroller"},[(l=a.default)==null?void 0:l.call(a)]):(n=a.default)==null?void 0:n.call(a)]}})),{}}});export{I as V,C as a,w as u};
