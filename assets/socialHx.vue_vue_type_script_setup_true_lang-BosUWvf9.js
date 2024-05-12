import{r as T}from"./validators-DR7cptrM.js";import{_ as $}from"./AppTextarea.vue_vue_type_script_setup_true_lang-guWQwSSl.js";import{B as H,C as M}from"./suggestions-DtVrTijw.js";import{d as W,b_ as D,r as v,a as B,o as u,g as K,f as e,b as l,n as t,ad as V,e as d,c as b,i as w,F as C,v as y,x as g}from"./index-B-uKkDM3.js";const E=d("h6",{class:"text-h6 font-weight-medium"},"Social History",-1),L=d("p",{class:"mb-0"},null,-1),O={class:"my-5"},j={class:"my-5"},G={class:"my-5"},J={class:"my-5"},P={class:"my-5"},h=W({__name:"socialHx",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(N){var A,S,q,F,I;const m=D(N,"modelValue"),r=v((A=m.value)==null?void 0:A.accommodation),i=v((S=m.value)==null?void 0:S.finances),k=v((q=m.value)==null?void 0:q.indoor),x=v((F=m.value)==null?void 0:F.outdoor),z=v((I=m.value)==null?void 0:I.caregivers);function n(){m.value={accommodation:r.value,finances:i.value,indoor:k.value,outdoor:x.value,caregivers:z.value}}const U=(c,a)=>c===""||c===void 0?a:`${c}, ${a}`;return(c,a)=>{const s=B("VCol"),f=B("VRow"),_=$,p=B("VChip"),R=B("VWindowItem");return u(),K(R,null,{default:e(()=>[l(f,null,{default:e(()=>[l(s,{cols:"12"},{default:e(()=>[E,L]),_:1})]),_:1}),l(f,{class:"mb-5"},{default:e(()=>[l(s,{cols:"6",md:"6"},{default:e(()=>[l(_,{modelValue:t(r),"onUpdate:modelValue":a[0]||(a[0]=o=>V(r)?r.value=o:null),label:"Accommodation","auto-grow":"",rows:"2",onKeyup:n,rules:["requiredValidator"in c?c.requiredValidator:t(T)]},null,8,["modelValue","rules"])]),_:1}),l(s,{cols:"6",md:"6"},{default:e(()=>[d("div",O,[(u(!0),b(C,null,w(t(H),o=>(u(),K(p,{class:"me-2 mb-2",size:"x-small",onClick:()=>{r.value=U(t(r),o),n()}},{default:e(()=>[y(g(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1})]),_:1}),l(f,{class:"mb-5"},{default:e(()=>[l(s,{cols:"6",md:"6"},{default:e(()=>[l(_,{modelValue:t(i),"onUpdate:modelValue":a[1]||(a[1]=o=>V(i)?i.value=o:null),label:"Finances","auto-grow":"",rows:"2",onKeyup:n,rules:[]},null,8,["modelValue"])]),_:1}),l(s,{cols:"6",md:"6"},{default:e(()=>[d("div",j,[(u(!0),b(C,null,w(t(M),o=>(u(),K(p,{class:"me-2 mb-2",size:"x-small",onClick:()=>{i.value=U(t(i),o),n()}},{default:e(()=>[y(g(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1})]),_:1}),l(f,{class:"mb-5"},{default:e(()=>[l(s,{cols:"6",md:"6"},{default:e(()=>[l(_,{modelValue:t(k),"onUpdate:modelValue":a[2]||(a[2]=o=>V(k)?k.value=o:null),label:"Indoor Activity","auto-grow":"",rows:"2",onKeyup:n,rules:[]},null,8,["modelValue"])]),_:1}),l(s,{cols:"6",md:"6"},{default:e(()=>[d("div",G,[(u(),b(C,null,w([],o=>l(p,{class:"me-2 mb-2",size:"x-small",onClick:a[3]||(a[3]=()=>{})},{default:e(()=>[y(g(o),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(f,{class:"mb-5"},{default:e(()=>[l(s,{cols:"6",md:"6"},{default:e(()=>[l(_,{modelValue:t(x),"onUpdate:modelValue":a[4]||(a[4]=o=>V(x)?x.value=o:null),label:"Outdoor Activity","auto-grow":"",rows:"2",onKeyup:n,rules:[]},null,8,["modelValue"])]),_:1}),l(s,{cols:"6",md:"6"},{default:e(()=>[d("div",J,[(u(),b(C,null,w([],o=>l(p,{class:"me-2 mb-2",size:"x-small",onClick:a[5]||(a[5]=()=>{})},{default:e(()=>[y(g(o),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(f,{class:"mb-5"},{default:e(()=>[l(s,{cols:"6",md:"6"},{default:e(()=>[l(_,{modelValue:t(z),"onUpdate:modelValue":a[6]||(a[6]=o=>V(z)?z.value=o:null),label:"Caregivers","auto-grow":"",rows:"2",onKeyup:n,rules:[]},null,8,["modelValue"])]),_:1}),l(s,{cols:"6",md:"6"},{default:e(()=>[d("div",P,[(u(),b(C,null,w([],o=>l(p,{class:"me-2 mb-2",size:"x-small",onClick:a[7]||(a[7]=()=>{})},{default:e(()=>[y(g(o),1)]),_:2},1024)),64))])]),_:1})]),_:1})]),_:1})}}});export{h as _};