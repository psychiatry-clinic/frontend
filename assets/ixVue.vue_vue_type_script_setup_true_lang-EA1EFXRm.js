import{_ as g}from"./AppTextField.vue_vue_type_script_setup_true_lang-C59T6Uyw.js";import{d as k,dB as w,r as B,o as u,g as m,f as l,b as t,c as C,i as N,n as U,F as b,aj as y,b2 as F,a0 as M,e as f,z as T}from"./index-C5WQT9Zq.js";import{a as r,V as c}from"./VRow-DRZjcEyV.js";import{a as x}from"./VWindowItem-CJs5Duwk.js";const A=f("h6",{class:"text-h6 font-weight-medium"},"Investigation",-1),R=f("span",null," Add New Investigation ",-1),L=k({__name:"ixVue",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(_){var p;const V=w(_,"modelValue"),e=B(((p=V.value)==null?void 0:p.investigations)||[]);function v(){if(!e.value)return;const a=e.value[e.value.length-1];!a||a.name===""&&a.result===""||e.value.push({name:"",result:""})}function h(a){const o=e.value[a];return!!(o!=null&&o.name)}function I(a){var o;!e.value||!e.value[a]||(e.value[a].name=(o=e.value[a].name)==null?void 0:o.toUpperCase())}return(a,o)=>{const i=g;return u(),m(x,null,{default:l(()=>[t(c,null,{default:l(()=>[t(r,{cols:"12"},{default:l(()=>[A]),_:1})]),_:1}),(u(!0),C(b,null,N(U(e),(n,d)=>(u(),m(c,{key:d},{default:l(()=>[t(r,{cols:"6"},{default:l(()=>[t(i,{placeholder:n.name?"":"Type Name of Investigation",modelValue:n.name,"onUpdate:modelValue":s=>n.name=s,onInput:s=>I(d)},null,8,["placeholder","modelValue","onUpdate:modelValue","onInput"])]),_:2},1024),t(r,{cols:"6"},{default:l(()=>[h(d)?(u(),m(i,{key:0,placeholder:n.result?"":"Type Result of Investigation",modelValue:n.result,"onUpdate:modelValue":s=>n.result=s},null,8,["placeholder","modelValue","onUpdate:modelValue"])):T("",!0)]),_:2},1024)]),_:2},1024))),128)),t(c,null,{default:l(()=>[t(r,{cols:"12"},{default:l(()=>[t(y,{variant:"outlined",onClick:F(v,["prevent"])},{default:l(()=>[t(M,{icon:"tabler-plus",end:"",class:"flip-in-rtl me-2"}),R]),_:1})]),_:1})]),_:1})]),_:1})}}});export{L as _};
