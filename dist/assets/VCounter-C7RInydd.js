import{a2 as r,a3 as s,az as i,a6 as u,aa as m,b as n,K as l,L as c}from"./index-D5RGqRWX.js";import{c as v}from"./index-HyA-AI0P.js";import{m as d,M as f}from"./index-BZhaH00k.js";const V=r({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...s(),...d({transition:{component:v}})},"VCounter"),S=i()({name:"VCounter",functional:!0,props:V(),setup(a,o){let{slots:e}=o;const t=u(()=>a.max?`${a.value} / ${a.max}`:String(a.value));return m(()=>n(f,{transition:a.transition},{default:()=>[l(n("div",{class:["v-counter",a.class],style:a.style},[e.default?e.default({counter:t.value,max:a.max,value:a.value}):t.value]),[[c,a.active]])]})),{}}});export{S as V};
