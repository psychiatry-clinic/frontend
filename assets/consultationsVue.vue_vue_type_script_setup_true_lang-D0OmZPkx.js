import{_ as g}from"./AppTextField.vue_vue_type_script_setup_true_lang-D3fvFnUs.js";import{_ as y}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-B3wpqFHW.js";import{d as B,dC as N,dB as k,r as w,o as r,g as m,f as l,b as o,c as U,i as M,n as A,F,aj as I,b2 as T,a0 as $,e as _,z as E}from"./index-BeLTEjCy.js";import{a as c,V as p}from"./VRow-ByV45v36.js";import{a as H}from"./VWindowItem-CgvFcyWY.js";const R=_("h6",{class:"text-h6 font-weight-medium"},"Consultation",-1),S=_("span",null," Add New Consultation ",-1),W=B({__name:"consultationsVue",props:N({edit:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(h){var f;const i=k(h,"modelValue");i.value;const e=w(((f=i.value)==null?void 0:f.consultations)||[]);function V(){if(!e.value)return;const a=e.value[e.value.length-1];!a||a.branch===""&&a.result===""||e.value.push({branch:"",result:""})}function v(a){var s;const t=(s=e.value)==null?void 0:s[a];return!!(t!=null&&t.branch)}function b(a){var t;!e.value||!e.value[a]||(e.value[a].branch=(t=e.value[a].branch)==null?void 0:t.toUpperCase())}return(a,t)=>{const s=y,C=g;return r(),m(H,null,{default:l(()=>[o(p,null,{default:l(()=>[o(c,{cols:"12"},{default:l(()=>[R]),_:1})]),_:1}),(r(!0),U(F,null,M(A(e),(n,d)=>(r(),m(p,{key:d},{default:l(()=>[o(c,{cols:"6"},{default:l(()=>[o(s,{placeholder:n.branch?"":"Type branch for consultation",items:["Neurology","Hearing","Medicine","ENT","Speech & Hearing","Ophthalmology"],modelValue:n.branch,"onUpdate:modelValue":u=>n.branch=u,onInput:u=>b(d)},null,8,["placeholder","modelValue","onUpdate:modelValue","onInput"])]),_:2},1024),o(c,{cols:"6"},{default:l(()=>[v(d)?(r(),m(C,{key:0,placeholder:n.result?"":"Type Result of consultation",modelValue:n.result,"onUpdate:modelValue":u=>n.result=u},null,8,["placeholder","modelValue","onUpdate:modelValue"])):E("",!0)]),_:2},1024)]),_:2},1024))),128)),o(p,null,{default:l(()=>[o(c,{cols:"12"},{default:l(()=>[o(I,{variant:"outlined",onClick:T(V,["prevent"])},{default:l(()=>[o($,{icon:"tabler-plus",end:"",class:"flip-in-rtl me-2"}),S]),_:1})]),_:1})]),_:1})]),_:1})}}});export{W as _};