import{_ as I}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import{d as b,b_ as F,r as M,a as r,o as d,g as p,f as o,b as l,c as N,i as T,n as j,F as A,aj as R,e as h,z as V}from"./index-B-uKkDM3.js";const W=h("h6",{class:"text-h6 font-weight-medium"},"Management",-1),$=h("span",null," Add ",-1),E=b({__name:"managementVue",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(v){var i;const U=F(v,"modelValue"),a=M(((i=U.value)==null?void 0:i.managements)||[]);function k(){if(!a.value)return;const t=a.value[a.value.length-1];!t||Object.values(t).some(u=>u==="")||a.value.push({name:"",form:"",dose:"",use:""})}function _(t){var n;const u=(n=a.value)==null?void 0:n[t];return!!(u!=null&&u.name)}function y(t){var u;!a.value||!a.value[t]||(a.value[t].name=(u=a.value[t].name)==null?void 0:u.toUpperCase())}return(t,u)=>{const n=r("VCol"),f=r("VRow"),m=I,C=r("VIcon"),w=r("VBtn"),B=r("VWindowItem");return d(),p(B,null,{default:o(()=>[l(f,null,{default:o(()=>[l(n,{cols:"12"},{default:o(()=>[W]),_:1})]),_:1}),(d(!0),N(A,null,T(j(a),(e,c)=>(d(),p(f,{key:c},{default:o(()=>[l(n,{cols:"3"},{default:o(()=>[l(m,{placeholder:e.name?"":"Type Name",modelValue:e.name,"onUpdate:modelValue":s=>e.name=s,onInput:s=>y(c)},null,8,["placeholder","modelValue","onUpdate:modelValue","onInput"])]),_:2},1024),l(n,{cols:"3"},{default:o(()=>[_(c)?(d(),p(m,{key:0,placeholder:e.form?"":"Type Form",modelValue:e.form,"onUpdate:modelValue":s=>e.form=s},null,8,["placeholder","modelValue","onUpdate:modelValue"])):V("",!0)]),_:2},1024),l(n,{cols:"3"},{default:o(()=>[e.form&&_(c)?(d(),p(m,{key:0,placeholder:e.dose?"":"Type Dose",modelValue:e.dose,"onUpdate:modelValue":s=>e.dose=s},null,8,["placeholder","modelValue","onUpdate:modelValue"])):V("",!0)]),_:2},1024),l(n,{cols:"3"},{default:o(()=>[e.dose&&_(c)?(d(),p(m,{key:0,placeholder:e.use?"":"Type Use",modelValue:e.use,"onUpdate:modelValue":s=>e.use=s},null,8,["placeholder","modelValue","onUpdate:modelValue"])):V("",!0)]),_:2},1024)]),_:2},1024))),128)),l(f,null,{default:o(()=>[l(n,{cols:"12"},{default:o(()=>[l(w,{variant:"outlined",onClick:R(k,["prevent"])},{default:o(()=>[l(C,{icon:"tabler-plus",end:"",class:"flip-in-rtl me-2"}),$]),_:1})]),_:1})]),_:1})]),_:1})}}});export{E as _};
