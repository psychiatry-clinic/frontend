import{_ as N}from"./AppTextarea.vue_vue_type_script_setup_true_lang-DAjUHvV3.js";import{g as S}from"./suggestions-Bv8h1Bch.js";import{d as A,aV as I,dC as U,o as s,g as c,f as t,b as r,e as x,x as _,n as f,c as m,i as V,F as h,z as v,v as z}from"./index-D5RGqRWX.js";import{a as i,V as C}from"./VRow-CXPDeuUR.js";import{a as E}from"./VWindowItem-DCb2HZWi.js";import{V as F}from"./VChip-DQDH9nD2.js";const M={class:"text-h6 font-weight-medium"},O=x("p",{class:"mb-0"},null,-1),R={key:0,class:"my-5"},G=A({__name:"chiefComplaint",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(k){const{chief_complains:y,durations:w,sourceOfInfo:b}=S(),{t:d}=I(),g={Complaint:y,Duration:w,Source:b},B=["Complaint","Duration","Source","Referral"],D=(l,n)=>{var u;if(o&&o.value)if(((u=o.value)==null?void 0:u[l])===void 0||o.value[l]==="")o.value[l]=n;else{const e=o.value[l].split(", ").filter(p=>p),a=e.indexOf(n);a===-1?e.push(n):e.splice(a,1),o.value[l]=e.join(", ")}},o=U(k,"modelValue");return(l,n)=>{const u=N;return s(),c(E,null,{default:t(()=>[r(C,null,{default:t(()=>[r(i,{cols:"12"},{default:t(()=>[x("h6",M,_(f(d)("Chief Complaint")),1),O]),_:1})]),_:1}),(s(),m(h,null,V(B,e=>r(C,{key:e},{default:t(()=>[o.value?(s(),c(i,{key:0,cols:"6",md:"6"},{default:t(()=>[r(u,{modelValue:o.value[e],"onUpdate:modelValue":a=>o.value[e]=a,label:f(d)(e.charAt(0).toUpperCase()+e.slice(1)),"auto-grow":"",rows:"2"},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)):v("",!0),r(i,null,{default:t(()=>[o.value?(s(),m("div",R,[(s(!0),m(h,null,V(g[e],a=>(s(),c(F,{class:"me-2 mb-2",key:a,size:"x-small",color:a.color,onClick:p=>D(e,a.text)},{default:t(()=>[z(_(a.text),1)]),_:2},1032,["color","onClick"]))),128))])):v("",!0)]),_:2},1024)]),_:2},1024)),64))]),_:1})}}});export{G as _};
