import{_ as H}from"./AppTextarea.vue_vue_type_script_setup_true_lang-guWQwSSl.js";import{d as J,b_ as O,r as p,a as E,o as d,g as Q,f as e,b as l,n as m,ad as _,e as n,c as v,i as c,F as V,v as b,x as w}from"./index-B-uKkDM3.js";const X=n("h6",{class:"text-h6 font-weight-medium"},"Physical Examination",-1),Y=n("p",{class:"mb-0"},null,-1),Z={class:"my-5"},ll=n("h6",{class:"text-h6 font-weight-medium"},"Mental State Examination",-1),el=n("p",{class:"mb-0"},null,-1),ol={class:"my-5"},ul={class:"my-5"},al={class:"my-5"},nl={class:"my-5"},tl={class:"my-5"},sl={class:"my-5"},dl={class:"my-5"},ml={class:"my-5"},il={class:"my-5"},rl={class:"my-5"},vl=J({__name:"examination",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(j){var M,S,$,F,I,N,P,R,W,D,L;const s=O(j,"modelValue"),y=p((M=s.value)==null?void 0:M.physical),g=p((S=s.value)==null?void 0:S.appearance),x=p(($=s.value)==null?void 0:$.behavior),C=p((F=s.value)==null?void 0:F.speech),k=p((I=s.value)==null?void 0:I.mood),z=p((N=s.value)==null?void 0:N.affect),K=p((P=s.value)==null?void 0:P.form),U=p((R=s.value)==null?void 0:R.content),B=p((W=s.value)==null?void 0:W.perception),T=p((D=s.value)==null?void 0:D.cognition),h=p((L=s.value)==null?void 0:L.insight);function i(){s.value={physical:y.value,appearance:g.value,behavior:x.value,speech:C.value,mood:k.value,affect:z.value,form:K.value,content:U.value,perception:B.value,cognition:T.value,insight:h.value}}const q=(A,o)=>A===""||A===void 0?o:`${A}, ${o}`;return(A,o)=>{const a=E("VCol"),t=E("VRow"),r=H,f=E("VChip"),G=E("VWindowItem");return d(),Q(G,null,{default:e(()=>[l(t,null,{default:e(()=>[l(a,{cols:"12"},{default:e(()=>[X,Y]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(y),"onUpdate:modelValue":o[0]||(o[0]=u=>_(y)?y.value=u:null),label:"Physical Examination","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",Z,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:fl=>y.value=q(m(y),u)},{default:e(()=>[b(w(u),1)]),_:2},1032,["onClick"])),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"12"},{default:e(()=>[ll,el]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(g),"onUpdate:modelValue":o[1]||(o[1]=u=>_(g)?g.value=u:null),label:"Appearance","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",ol,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[2]||(o[2]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(x),"onUpdate:modelValue":o[3]||(o[3]=u=>_(x)?x.value=u:null),label:"Behavior","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",ul,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[4]||(o[4]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(C),"onUpdate:modelValue":o[5]||(o[5]=u=>_(C)?C.value=u:null),label:"Speech","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",al,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[6]||(o[6]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(k),"onUpdate:modelValue":o[7]||(o[7]=u=>_(k)?k.value=u:null),label:"Mood","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",nl,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[8]||(o[8]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(z),"onUpdate:modelValue":o[9]||(o[9]=u=>_(z)?z.value=u:null),label:"Affect","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",tl,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[10]||(o[10]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(K),"onUpdate:modelValue":o[11]||(o[11]=u=>_(K)?K.value=u:null),label:"Thought Form","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",sl,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[12]||(o[12]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(U),"onUpdate:modelValue":o[13]||(o[13]=u=>_(U)?U.value=u:null),label:"Thought Content","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",dl,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[14]||(o[14]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(B),"onUpdate:modelValue":o[15]||(o[15]=u=>_(B)?B.value=u:null),label:"Perceptual Abnormalities","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",ml,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[16]||(o[16]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(T),"onUpdate:modelValue":o[17]||(o[17]=u=>_(T)?T.value=u:null),label:"Cognitive State","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",il,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[18]||(o[18]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1}),l(t,null,{default:e(()=>[l(a,{cols:"6",md:"6"},{default:e(()=>[l(r,{modelValue:m(h),"onUpdate:modelValue":o[19]||(o[19]=u=>_(h)?h.value=u:null),label:"Insight","auto-grow":"",rows:"2",onKeyup:i},null,8,["modelValue"])]),_:1}),l(a,null,{default:e(()=>[n("div",rl,[(d(),v(V,null,c([],u=>l(f,{class:"me-2 mb-2",size:"x-small",onClick:o[20]||(o[20]=()=>{})},{default:e(()=>[b(w(u),1)]),_:2},1024)),64))])]),_:1})]),_:1})]),_:1})}}});export{vl as _};
