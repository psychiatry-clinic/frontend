import{r as R}from"./validators-DR7cptrM.js";import{_ as T}from"./AppTextarea.vue_vue_type_script_setup_true_lang-guWQwSSl.js";import{d as U,b_ as z,r as w,a as d,o as p,g as F,f as o,b as e,n as m,ad as y,e as r,c as h,i as k,F as x,v as $,x as B}from"./index-B-uKkDM3.js";const H=r("h6",{class:"text-h6 font-weight-medium"},"Occupational History",-1),I=r("p",{class:"mb-0"},null,-1),K={class:"my-5"},M={class:"my-5"},E=U({__name:"occupationHx",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(j){var V,v;const c=z(j,"modelValue"),s=w((V=c.value)==null?void 0:V.jobs),n=w((v=c.value)==null?void 0:v.unemployment);function _(){c.value={jobs:s.value,unemployment:n.value}}const f=(t,a)=>t===""||t===void 0?a:`${t}, ${a}`;return(t,a)=>{const u=d("VCol"),i=d("VRow"),b=T,C=d("VChip"),q=d("VWindowItem");return p(),F(q,null,{default:o(()=>[e(i,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[H,I]),_:1})]),_:1}),e(i,{class:"mb-5"},{default:o(()=>[e(u,{cols:"6",md:"6"},{default:o(()=>[e(b,{modelValue:m(s),"onUpdate:modelValue":a[0]||(a[0]=l=>y(s)?s.value=l:null),label:"Jobs","auto-grow":"",rows:"2",onKeyup:_,rules:["requiredValidator"in t?t.requiredValidator:m(R)]},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"6",md:"6"},{default:o(()=>[r("div",K,[(p(),h(x,null,k([],l=>e(C,{class:"me-2 mb-2",size:"x-small",onClick:N=>s.value=f(m(s),l)},{default:o(()=>[$(B(l),1)]),_:2},1032,["onClick"])),64))])]),_:1})]),_:1}),e(i,{class:"mb-5"},{default:o(()=>[e(u,{cols:"6",md:"6"},{default:o(()=>[e(b,{modelValue:m(n),"onUpdate:modelValue":a[1]||(a[1]=l=>y(n)?n.value=l:null),label:"Unemployment","auto-grow":"",rows:"2",onKeyup:_,rules:[]},null,8,["modelValue"])]),_:1}),e(u,{cols:"6",md:"6"},{default:o(()=>[r("div",M,[(p(),h(x,null,k([],l=>e(C,{class:"me-2 mb-2",size:"x-small",onClick:N=>n.value=f(m(n),l)},{default:o(()=>[$(B(l),1)]),_:2},1032,["onClick"])),64))])]),_:1})]),_:1})]),_:1})}}});export{E as _};