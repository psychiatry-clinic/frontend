import{_ as y}from"./AppTextarea.vue_vue_type_script_setup_true_lang-guWQwSSl.js";import{e as B,f as N,s as I}from"./suggestions-DtVrTijw.js";import{d as T,b_ as U,a as n,o as t,g as u,f as o,b as s,c as _,i as p,F as i,e as f,z as V,v as g,x as z}from"./index-B-uKkDM3.js";const A=f("h6",{class:"text-h6 font-weight-medium"},"Chief Complaint",-1),F=f("p",{class:"mb-0"},null,-1),M={key:0,class:"my-5"},E=T({__name:"chiefComplaint",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(h){const C={complaint:B,duration:N,source:I},v=["complaint","duration","source","referral"],a=U(h,"modelValue"),k=(c,r)=>c?c+", "+r:r;return(c,r)=>{const m=n("VCol"),d=n("VRow"),w=y,x=n("VChip"),b=n("VWindowItem");return t(),u(b,null,{default:o(()=>[s(d,null,{default:o(()=>[s(m,{cols:"12"},{default:o(()=>[A,F]),_:1})]),_:1}),(t(),_(i,null,p(v,e=>s(d,{key:e},{default:o(()=>[a.value?(t(),u(m,{key:0,cols:"6",md:"6"},{default:o(()=>[s(w,{modelValue:a.value[e],"onUpdate:modelValue":l=>a.value[e]=l,label:e.charAt(0).toUpperCase()+e.slice(1),"auto-grow":"",rows:"2"},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)):V("",!0),s(m,null,{default:o(()=>[a.value?(t(),_("div",M,[(t(!0),_(i,null,p(C[e],l=>(t(),u(x,{class:"me-2 mb-2",key:l,size:"x-small",onClick:R=>a.value[e]=k(a.value[e],l)},{default:o(()=>[g(z(l),1)]),_:2},1032,["onClick"]))),128))])):V("",!0)]),_:2},1024)]),_:2},1024)),64))]),_:1})}}});export{E as _};