import{r as g,t as w,u as z,v as B}from"./suggestions-2VnU4gHn.js";import{d as I,aV as M,dC as T,r as j,o as s,g as i,f as a,b as t,e as m,x as f,n as u,c as r,i as v,F as k,aj as A,b2 as $,a0 as E,z as V}from"./index-Zv46-Gya.js";import{_ as L}from"./AppTextField.vue_vue_type_script_setup_true_lang-DKaaay4V.js";import{a as _,V as F}from"./VRow-Vam89E28.js";import{a as O}from"./VWindowItem-KTs4h5aF.js";import{V as U}from"./VChip-BptNZpoN.js";const R={class:"text-h6 font-weight-medium"},W={class:"mt-5"},q={key:1,class:"mt-5"},G={key:1,class:"mt-5"},H={key:1,class:"mt-5"},Z=I({__name:"managementVue",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(S){var N;const{t:p}=M(),y=T(S,"modelValue"),n=j(((N=y.value)==null?void 0:N.managements)||[]);function D(){if(!n.value)return;const o=n.value[n.value.length-1];!o||Object.values(o).some(d=>d==="")||n.value.push({Name:"",Form:"",Dose:"",Use:""})}function C(o){var c;const d=(c=n.value)==null?void 0:c[o];return!!(d!=null&&d.Name)}function b(o){var d;!n.value||!n.value[o]||(n.value[o].Name=(d=n.value[o].Name)==null?void 0:d.toUpperCase())}return(o,d)=>{const c=L;return s(),i(O,null,{default:a(()=>[t(F,null,{default:a(()=>[t(_,{cols:"12"},{default:a(()=>[m("h6",R,f(u(p)("Management")),1)]),_:1})]),_:1}),(s(!0),r(k,null,v(u(n),(e,h)=>(s(),i(F,{key:h},{default:a(()=>[t(_,{cols:"3"},{default:a(()=>[t(c,{placeholder:e.Name?"":u(p)("Type Name"),modelValue:e.Name,"onUpdate:modelValue":l=>e.Name=l,onInput:l=>b(h)},null,8,["placeholder","modelValue","onUpdate:modelValue","onInput"]),m("div",W,[(s(!0),r(k,null,v("medicationSuggestions"in o?o.medicationSuggestions:u(g),l=>(s(),i(U,{class:"me-2 mb-2",size:"x-small",onClick:()=>{e.Name=l}},{default:a(()=>[m("span",null,f(l),1)]),_:2},1032,["onClick"]))),256))])]),_:2},1024),t(_,{cols:"3"},{default:a(()=>[C(h)?(s(),i(c,{key:0,placeholder:e.Form?"":u(p)("Type Form"),modelValue:e.Form,"onUpdate:modelValue":l=>e.Form=l},null,8,["placeholder","modelValue","onUpdate:modelValue"])):V("",!0),e.Name?(s(),r("div",q,[(s(!0),r(k,null,v("medicationFormSuggestions"in o?o.medicationFormSuggestions:u(w),l=>(s(),i(U,{class:"me-2 mb-2",size:"x-small",onClick:()=>{e.Form=l}},{default:a(()=>[m("span",null,f(l),1)]),_:2},1032,["onClick"]))),256))])):V("",!0)]),_:2},1024),t(_,{cols:"3"},{default:a(()=>[e.Form&&C(h)?(s(),i(c,{key:0,placeholder:e.Dose?"":u(p)("Type Dose"),modelValue:e.Dose,"onUpdate:modelValue":l=>e.Dose=l},null,8,["placeholder","modelValue","onUpdate:modelValue"])):V("",!0),e.Form?(s(),r("div",G,[(s(!0),r(k,null,v("medicationDoseSuggestions"in o?o.medicationDoseSuggestions:u(z),l=>(s(),i(U,{class:"me-2 mb-2",size:"x-small",onClick:()=>{e.Dose=l}},{default:a(()=>[m("span",null,f(l),1)]),_:2},1032,["onClick"]))),256))])):V("",!0)]),_:2},1024),t(_,{cols:"3"},{default:a(()=>[e.Dose&&C(h)?(s(),i(c,{key:0,placeholder:e.Use?"":u(p)("Type Use"),modelValue:e.Use,"onUpdate:modelValue":l=>e.Use=l},null,8,["placeholder","modelValue","onUpdate:modelValue"])):V("",!0),e.Dose?(s(),r("div",H,[(s(!0),r(k,null,v("medicationUseSuggestions"in o?o.medicationUseSuggestions:u(B),l=>(s(),i(U,{class:"me-2 mb-2",size:"x-small",onClick:()=>{e.Use=l}},{default:a(()=>[m("span",null,f(l),1)]),_:2},1032,["onClick"]))),256))])):V("",!0)]),_:2},1024)]),_:2},1024))),128)),t(F,null,{default:a(()=>[t(_,{cols:"12"},{default:a(()=>[t(A,{variant:"outlined",onClick:$(D,["prevent"])},{default:a(()=>[t(E,{icon:"tabler-plus",end:"",class:"flip-in-rtl me-2"}),m("span",null,f(u(p)("Add")),1)]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Z as _};
