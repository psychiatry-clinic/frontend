import{_ as g}from"./AppTextarea.vue_vue_type_script_setup_true_lang-BbpdHDig.js";import{a as c,V as _}from"./VRow-c4vFAJ7q.js";import{a as U}from"./VWindowItem-BujJ415Q.js";import{V as B}from"./VChip-BB1INoVT.js";import{d as N,aV as A,dC as z,o as l,g as m,f as o,b as n,e as y,x as V,n as f,c as i,i as v,F as h,z as x,v as F}from"./index-CUq24_Fe.js";const H={class:"text-h6 font-weight-medium"},I=y("p",{class:"mb-0"},null,-1),J={key:0,class:"my-5"},j=N({__name:"occupationHx",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(k){const{t:d}=A(),C={Jobs:[],Unemployment:[]},b=["Jobs","Unemployment"],a=z(k,"modelValue"),w=(s,u)=>{var r;if(a&&a.value)if(((r=a.value)==null?void 0:r[s])===void 0||a.value[s]==="")a.value[s]=u;else{const e=a.value[s].split(", ").filter(p=>p),t=e.indexOf(u);t===-1?e.push(u):e.splice(t,1),a.value[s]=e.join(", ")}};return(s,u)=>{const r=g;return l(),m(U,null,{default:o(()=>[n(_,null,{default:o(()=>[n(c,{cols:"12"},{default:o(()=>[y("h6",H,V(f(d)("Occupational History")),1),I]),_:1})]),_:1}),(l(),i(h,null,v(b,e=>n(_,{key:e},{default:o(()=>[a.value?(l(),m(c,{key:0,cols:"6",md:"6"},{default:o(()=>[n(r,{modelValue:a.value[e],"onUpdate:modelValue":t=>a.value[e]=t,label:f(d)(e.charAt(0).toUpperCase()+e.slice(1)),"auto-grow":"",rows:"2"},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)):x("",!0),n(c,null,{default:o(()=>[a.value?(l(),i("div",J,[(l(!0),i(h,null,v(C[e],t=>(l(),m(B,{class:"me-2 mb-2",key:t,size:"x-small",onClick:p=>w(e,t)},{default:o(()=>[F(V(t),1)]),_:2},1032,["onClick"]))),128))])):x("",!0)]),_:2},1024)]),_:2},1024)),64))]),_:1})}}});export{j as _};