import{_ as O}from"./AppTextarea.vue_vue_type_script_setup_true_lang-guWQwSSl.js";import{d as W,ap as E,k as I,j as K,r as _,a,o as f,g as V,f as o,b as s,n as y,ad as R,v as p,z as P}from"./index-B-uKkDM3.js";import{$ as T}from"./api-faFk6m2o.js";const F=W({__name:"therapyVue",props:{visit:{},psychologist:{type:Boolean}},setup($){var h;const t=E("userData").value;I(),K();const{visit:r}=$,i=_(!1),v=_(!1),c=_((h=r.therapy)==null?void 0:h.notes);function b(n){c.value=n.target.value}const k=r.active,C=async n=>{if(!k)return;const e=`/visits-edit/${t==null?void 0:t.id}/${r.id}/${r.patient.id}`;try{await T(e,{method:"POST",body:{therapyRequest:n},onResponseError({response:d}){console.log(d._data)}})==="OK"&&(v.value=n)}catch(l){console.error(l)}},g=async()=>{if(i.value=!0,!k)return;const n=`/therapy/${t==null?void 0:t.id}/${r.id}`;try{const e=await T(n,{method:"POST",body:{notes:c.value,clinic:t==null?void 0:t.clinic},onResponseError({response:l}){console.log(l._data)}})}catch(e){console.error(e)}};return(n,e)=>{const l=O,d=a("VCardText"),w=a("VDivider"),m=a("VBtn"),S=a("VCard"),q=a("VCol"),x=a("VRow"),B=a("VSnackbar"),N=a("VWindowItem");return f(),V(N,null,{default:o(()=>[s(x,null,{default:o(()=>[s(q,{cols:"12"},{default:o(()=>[s(S,{class:"mb-6",title:"Therapy Notes"},{default:o(()=>[s(d,null,{default:o(()=>[s(l,{modelValue:y(c),"onUpdate:modelValue":e[0]||(e[0]=u=>R(c)?c.value=u:null),label:"","auto-grow":"",rows:"3",onKeyup:b},null,8,["modelValue"])]),_:1}),s(w),s(d,{class:"d-flex gap-4"},{default:o(()=>[!y(v)&&!n.psychologist?(f(),V(m,{key:0,onClick:e[1]||(e[1]=u=>C(!0))},{default:o(()=>[p("Request Therapy")]),_:1})):n.psychologist?P("",!0):(f(),V(m,{key:1,onClick:e[2]||(e[2]=u=>C(!1)),color:"success"},{default:o(()=>[p("Requested")]),_:1})),s(m,{onClick:g},{default:o(()=>[p("Save")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(B,{modelValue:y(i),"onUpdate:modelValue":e[3]||(e[3]=u=>R(i)?i.value=u:null),color:"success"},{default:o(()=>[p(" Therapy Notes Was Saved Successfully ")]),_:1},8,["modelValue"])]),_:1})}}});export{F as _};
