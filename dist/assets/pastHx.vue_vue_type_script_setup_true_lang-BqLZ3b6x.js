import{_ as C}from"./AppTextarea.vue_vue_type_script_setup_true_lang-DAjUHvV3.js";import{p as b,m as w,n as H}from"./suggestions-Bv8h1Bch.js";import{a as c,V as _}from"./VRow-CXPDeuUR.js";import{a as M}from"./VWindowItem-DCb2HZWi.js";import{V as B}from"./VChip-DQDH9nD2.js";import{d as N,aV as A,dC as U,o as l,g as i,f as s,b as r,e as y,x as V,n as f,c as m,i as g,F as h,z as v,v as z}from"./index-D5RGqRWX.js";const F={class:"text-h6 font-weight-medium"},I=y("p",{class:"mb-0"},null,-1),T={key:0,class:"my-5"},R=N({__name:"pastHx",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(P){const{t:d}=A(),x={"Past Psychiatric":b,"Past Medical":w,"Past Surgical":H,"Past Substance":[]},S=["Past Psychiatric","Past Medical","Past Surgical","Past Substance"],a=U(P,"modelValue"),k=(o,n)=>{var u;if(a&&a.value)if(((u=a.value)==null?void 0:u[o])===void 0||a.value[o]==="")a.value[o]=n;else{const e=a.value[o].split(", ").filter(p=>p),t=e.indexOf(n);t===-1?e.push(n):e.splice(t,1),a.value[o]=e.join(", ")}};return(o,n)=>{const u=C;return l(),i(M,null,{default:s(()=>[r(_,null,{default:s(()=>[r(c,{cols:"12"},{default:s(()=>[y("h6",F,V(f(d)("Past History")),1),I]),_:1})]),_:1}),(l(),m(h,null,g(S,e=>r(_,{key:e},{default:s(()=>[a.value?(l(),i(c,{key:0,cols:"6",md:"6"},{default:s(()=>[r(u,{modelValue:a.value[e],"onUpdate:modelValue":t=>a.value[e]=t,label:f(d)(e.charAt(0).toUpperCase()+e.slice(1)),"auto-grow":"",rows:"2"},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)):v("",!0),r(c,null,{default:s(()=>[a.value?(l(),m("div",T,[(l(!0),m(h,null,g(x[e],t=>(l(),i(B,{class:"me-2 mb-2",key:t,size:"x-small",onClick:p=>k(e,t)},{default:s(()=>[z(V(t),1)]),_:2},1032,["onClick"]))),128))])):v("",!0)]),_:2},1024)]),_:2},1024)),64))]),_:1})}}});export{R as _};
