import{r as q}from"./validators-DR7cptrM.js";import{_ as N}from"./AppTextarea.vue_vue_type_script_setup_true_lang-BGynulRt.js";import{a as u,V as i}from"./VRow-DRZjcEyV.js";import{a as T}from"./VWindowItem-CJs5Duwk.js";import{V as b}from"./VChip-CKqHp6FM.js";import{d as U,dB as z,r as y,o as c,g as F,f as l,b as e,n as m,aX as w,e as d,c as C,i as k,F as x,v as h,x as B}from"./index-C5WQT9Zq.js";const H=d("h6",{class:"text-h6 font-weight-medium"},"Occupational History",-1),K=d("p",{class:"mb-0"},null,-1),M={class:"my-5"},R={class:"my-5"},O=U({__name:"occupationHx",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup($){var _,V;const r=z($,"modelValue"),s=y((_=r.value)==null?void 0:_.jobs),t=y((V=r.value)==null?void 0:V.unemployment);function p(){r.value={jobs:s.value,unemployment:t.value}}const f=(n,a)=>n===""||n===void 0?a:`${n}, ${a}`;return(n,a)=>{const v=N;return c(),F(T,null,{default:l(()=>[e(i,null,{default:l(()=>[e(u,{cols:"12"},{default:l(()=>[H,K]),_:1})]),_:1}),e(i,{class:"mb-5"},{default:l(()=>[e(u,{cols:"6",md:"6"},{default:l(()=>[e(v,{modelValue:m(s),"onUpdate:modelValue":a[0]||(a[0]=o=>w(s)?s.value=o:null),label:"Jobs","auto-grow":"",rows:"2",onKeyup:p,rules:["requiredValidator"in n?n.requiredValidator:m(q)]},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"6",md:"6"},{default:l(()=>[d("div",M,[(c(),C(x,null,k([],o=>e(b,{class:"me-2 mb-2",size:"x-small",onClick:j=>s.value=f(m(s),o)},{default:l(()=>[h(B(o),1)]),_:2},1032,["onClick"])),64))])]),_:1})]),_:1}),e(i,{class:"mb-5"},{default:l(()=>[e(u,{cols:"6",md:"6"},{default:l(()=>[e(v,{modelValue:m(t),"onUpdate:modelValue":a[1]||(a[1]=o=>w(t)?t.value=o:null),label:"Unemployment","auto-grow":"",rows:"2",onKeyup:p,rules:[]},null,8,["modelValue"])]),_:1}),e(u,{cols:"6",md:"6"},{default:l(()=>[d("div",R,[(c(),C(x,null,k([],o=>e(b,{class:"me-2 mb-2",size:"x-small",onClick:j=>t.value=f(m(t),o)},{default:l(()=>[h(B(o),1)]),_:2},1032,["onClick"])),64))])]),_:1})]),_:1})]),_:1})}}});export{O as _};
