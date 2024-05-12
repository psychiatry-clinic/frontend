import{_ as y}from"./AppTextField.vue_vue_type_script_setup_true_lang-C59T6Uyw.js";import{_ as B}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-CmvA2ZRS.js";import{d as T,dC as U,dB as k,r as I,bg as E,o as p,g as d,f as t,b as o,c as M,i as A,n as F,F as $,aj as L,b2 as H,a0 as R,e as v,z as S}from"./index-C5WQT9Zq.js";import{a as c,V as f}from"./VRow-DRZjcEyV.js";import{a as j}from"./VWindowItem-CJs5Duwk.js";import"./form-DZjWB9DY.js";import"./VTextField-C6MDyt68.js";/* empty css                   */import"./VCounter-QYLqHjuy.js";import"./index-DZvt-9Pr.js";import"./index-CK4sZXkx.js";import"./VField-BE7mYYdn.js";import"./easing-CjukEv2V.js";import"./VInput-D6PwPnL5.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-QLnwBfw_.js";import"./VList-C-vtgxvY.js";import"./ssrBoot-DZaVDsF1.js";import"./createSimpleFunctional-CpJFqdGN.js";import"./VAvatar-7v6WnYoP.js";import"./VImg-nmMi926b.js";import"./VDivider-BcGK93XG.js";import"./dialog-transition-D0QLIQjY.js";import"./VMenu-fu_cvwHm.js";import"./VOverlay-DdBE7t30.js";import"./lazy-CFIHLmxg.js";import"./scopeId-B1B_DOqA.js";import"./VCheckboxBtn-qHKcB-5X.js";import"./VSelectionControl-CtZGpdA_.js";import"./VChip-CKqHp6FM.js";import"./VSlideGroup-DTiaAquR.js";import"./filter-DIAkksj9.js";/* empty css              */const x=v("h6",{class:"text-h6 font-weight-medium"},"Consultation",-1),z=v("p",{class:"mb-0"},null,-1),O=v("span",null," Add New Consultation ",-1),Ne=T({__name:"consult",props:U({edit:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(h){var b;const C=h,n=k(h,"modelValue"),e=I(((b=n.value)==null?void 0:b.consultations)||[]);n.value&&C.edit&&(console.log(n.value),console.log(e.value),e.value=n.value);let u=null;document.addEventListener("blur",()=>{u&&clearTimeout(u),u=setTimeout(V,2e3)},!0),E(()=>{document.removeEventListener("blur",V,!0),u&&clearTimeout(u)});function N(){e.value&&(e.value&&e.value[e.value.length-1].branch===""||e.value[e.value.length-1].result===""||e.value.push({branch:"",result:""}))}function _(l){var i;const a=(i=e.value)==null?void 0:i[l];return!!(a!=null&&a.branch)}function w(l){!e.value||!e.value[l]||(e.value[l].branch=e.value[l].branch.toUpperCase())}function V(){if(!n.value||!e.value||!e.value[0])return;const l=e.value[0];e.value=[l,...e.value.slice(1).filter((a,i)=>!("result"in a)||a.branch.trim()!=="")]}return(l,a)=>{const i=B,g=y;return p(),d(j,null,{default:t(()=>[o(f,null,{default:t(()=>[o(c,{cols:"12"},{default:t(()=>[x,z]),_:1})]),_:1}),(p(!0),M($,null,A(F(e),(r,m)=>(p(),d(f,{key:m},{default:t(()=>[o(c,{cols:"6"},{default:t(()=>[o(i,{placeholder:r.branch?"":"Type branch for consultation",items:["Neurology","Hearing","Medicine","ENT","Speech & Hearing","Ophthalmology"],modelValue:r.branch,"onUpdate:modelValue":s=>r.branch=s,onInput:s=>w(m)},null,8,["placeholder","modelValue","onUpdate:modelValue","onInput"])]),_:2},1024),o(c,{cols:"6"},{default:t(()=>[_(m)?(p(),d(g,{key:0,placeholder:r.result?"":"Type Result of consultation",modelValue:r.result,"onUpdate:modelValue":s=>r.result=s,onInput:s=>_(m)},null,8,["placeholder","modelValue","onUpdate:modelValue","onInput"])):S("",!0)]),_:2},1024)]),_:2},1024))),128)),o(f,null,{default:t(()=>[o(c,{cols:"12"},{default:t(()=>[o(L,{variant:"outlined",onClick:H(N,["prevent"])},{default:t(()=>[o(R,{icon:"tabler-plus",end:"",class:"flip-in-rtl me-2"}),O]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Ne as default};
