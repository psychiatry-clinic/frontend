import{_ as w}from"./AppTextarea.vue_vue_type_script_setup_true_lang-BbpdHDig.js";import{t as N}from"./suggestions-uy40kO-q.js";import{a as m,V as _}from"./VRow-c4vFAJ7q.js";import{a as b}from"./VWindowItem-BujJ415Q.js";import{V as B}from"./VChip-BB1INoVT.js";import{d as S,aV as z,dC as A,o as l,g as c,f as a,b as n,e as h,x as p,n as F,c as i,i as f,F as V,z as v,v as I}from"./index-CUq24_Fe.js";const M={class:"text-h6 font-weight-medium"},T=h("p",{class:"mb-0"},null,-1),U={key:0,class:"my-5"},R=S({__name:"notesVue",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(x){const{t:g}=z(),k={notesSuggestions:N},C=["notesSuggestions"],e=A(x,"modelValue"),y=(s,u)=>{var r;if(e&&e.value)if(((r=e.value)==null?void 0:r[s])===void 0||e.value[s]==="")e.value[s]=u;else{const t=e.value[s].split(", ").filter(d=>d),o=t.indexOf(u);o===-1?t.push(u):t.splice(o,1),e.value[s]=t.join(", ")}};return(s,u)=>{const r=w;return l(),c(b,null,{default:a(()=>[n(_,null,{default:a(()=>[n(m,{cols:"12"},{default:a(()=>[h("h6",M,p(F(g)("Notes")),1),T]),_:1})]),_:1}),(l(),i(V,null,f(C,t=>n(_,{key:t},{default:a(()=>[e.value?(l(),c(m,{key:0,cols:"12"},{default:a(()=>[n(r,{modelValue:e.value[t],"onUpdate:modelValue":o=>e.value[t]=o,label:"","auto-grow":"",rows:"4"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):v("",!0),n(m,null,{default:a(()=>[e.value?(l(),i("div",U,[(l(!0),i(V,null,f(k[t],o=>(l(),c(B,{class:"me-2 mb-2",key:o,size:"x-small",onClick:d=>y(t,o)},{default:a(()=>[I(p(o),1)]),_:2},1032,["onClick"]))),128))])):v("",!0)]),_:2},1024)]),_:2},1024)),64))]),_:1})}}});export{R as _};
