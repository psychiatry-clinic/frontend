import{_ as w}from"./AppTextarea.vue_vue_type_script_setup_true_lang-B9y5_ZHH.js";import{a as c,V as _}from"./VRow-CXoHp8QV.js";import{a as N}from"./VWindowItem-CLgdKtMQ.js";import{V as b}from"./VChip-CKlV-l8p.js";import{d as B,aV as S,dC as z,o as l,g as m,f as o,b as n,e as h,x as p,n as A,c as d,i as V,F as f,z as v,v as F}from"./index-3pGq2HFV.js";const I={class:"text-h6 font-weight-medium"},M=h("p",{class:"mb-0"},null,-1),T={key:0,class:"my-5"},L=B({__name:"notesVue",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(x){const{t:k}=S(),C={},g=["notesSuggestions"],e=z(x,"modelValue"),y=(s,u)=>{var r;if(e&&e.value)if(((r=e.value)==null?void 0:r[s])===void 0||e.value[s]==="")e.value[s]=u;else{const t=e.value[s].split(", ").filter(i=>i),a=t.indexOf(u);a===-1?t.push(u):t.splice(a,1),e.value[s]=t.join(", ")}};return(s,u)=>{const r=w;return l(),m(N,null,{default:o(()=>[n(_,null,{default:o(()=>[n(c,{cols:"12"},{default:o(()=>[h("h6",I,p(A(k)("Notes")),1),M]),_:1})]),_:1}),(l(),d(f,null,V(g,t=>n(_,{key:t},{default:o(()=>[e.value?(l(),m(c,{key:0,cols:"12"},{default:o(()=>[n(r,{modelValue:e.value[t],"onUpdate:modelValue":a=>e.value[t]=a,label:"","auto-grow":"",rows:"4"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):v("",!0),n(c,null,{default:o(()=>[e.value?(l(),d("div",T,[(l(!0),d(f,null,V(C[t],a=>(l(),m(b,{class:"me-2 mb-2",key:a,size:"x-small",onClick:i=>y(t,a)},{default:o(()=>[F(p(a),1)]),_:2},1032,["onClick"]))),128))])):v("",!0)]),_:2},1024)]),_:2},1024)),64))]),_:1})}}});export{L as _};
