import{_ as b}from"./AppTextField.vue_vue_type_script_setup_true_lang-C59T6Uyw.js";import{d as B,dB as U,r as g,bg as k,o as m,g as p,f as l,b as a,c as y,i as C,F as I,aj as E,b2 as F,a0 as L,e as v,z as M}from"./index-C5WQT9Zq.js";import{a as i,V as f}from"./VRow-DRZjcEyV.js";import{a as $}from"./VWindowItem-CJs5Duwk.js";import"./form-DZjWB9DY.js";import"./VTextField-C6MDyt68.js";/* empty css                   */import"./VCounter-QYLqHjuy.js";import"./index-DZvt-9Pr.js";import"./index-CK4sZXkx.js";import"./VField-BE7mYYdn.js";import"./easing-CjukEv2V.js";import"./VInput-D6PwPnL5.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./lazy-CFIHLmxg.js";import"./ssrBoot-DZaVDsF1.js";const x=v("h6",{class:"text-h6 font-weight-medium"},"Psychometric Tests",-1),A=v("p",{class:"mb-0"},null,-1),R=v("span",null," Add New test ",-1),te=B({__name:"testsVue",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(T){var h;const e=U(T,"modelValue");e.value&&(e.value.tests[0]={name:"",result:""}),g((h=e.value)==null?void 0:h.tests);let o=null;document.addEventListener("blur",()=>{o&&clearTimeout(o),o=setTimeout(V,1e3)},!0),k(()=>{document.removeEventListener("blur",V,!0),o&&clearTimeout(o)});function w(){if(!e.value||e.value.tests[e.value.tests.length-1].name===""||e.value.tests[e.value.tests.length-1].result==="")return;const t={name:"",result:""};e.value.tests.push(t)}function _(t){return e.value?!!e.value.tests[t].name:void 0}function N(t){e.value&&(e.value.tests[t].name=e.value.tests[t].name.toUpperCase())}function V(){if(!e.value)return;const t=e.value.tests[0];e.value.tests=[t,...e.value.tests.slice(1).filter((u,d)=>!("result"in u)||u.name.trim()!=="")]}return(t,u)=>{const d=b;return m(),p($,null,{default:l(()=>{var c;return[a(f,null,{default:l(()=>[a(i,{cols:"12"},{default:l(()=>[x,A]),_:1})]),_:1}),(m(!0),y(I,null,C((c=e.value)==null?void 0:c.tests,(s,r)=>(m(),p(f,{key:r},{default:l(()=>[a(i,{cols:"6"},{default:l(()=>[a(d,{placeholder:s.name?"":"Type Name of test",modelValue:s.name,"onUpdate:modelValue":n=>s.name=n,onInput:n=>N(r)},null,8,["placeholder","modelValue","onUpdate:modelValue","onInput"])]),_:2},1024),a(i,{cols:"6"},{default:l(()=>[_(r)?(m(),p(d,{key:0,placeholder:s.result?"":"Type Result of test",modelValue:s.result,"onUpdate:modelValue":n=>s.result=n,onInput:n=>_(r)},null,8,["placeholder","modelValue","onUpdate:modelValue","onInput"])):M("",!0)]),_:2},1024)]),_:2},1024))),128)),a(f,null,{default:l(()=>[a(i,{cols:"12"},{default:l(()=>[a(E,{variant:"outlined",onClick:F(w,["prevent"])},{default:l(()=>[a(L,{icon:"tabler-plus",end:"",class:"flip-in-rtl me-2"}),R]),_:1})]),_:1})]),_:1})]}),_:1})}}});export{te as default};
