import{_ as b}from"./AppTextarea.vue_vue_type_script_setup_true_lang-AmabcA3R.js";import{w as A,x as w,y as F,z as I}from"./suggestions-2VnU4gHn.js";import{a as m,V}from"./VRow-Vam89E28.js";import{a as R}from"./VWindowItem-KTs4h5aF.js";import{V as N}from"./VChip-BptNZpoN.js";import{d as B,dD as L,aV as M,dC as T,o as a,g as u,f as o,b as c,e as S,x as C,n as d,c as p,i as h,F as f,z as y,v as z}from"./index-Zv46-Gya.js";const U={class:"text-h6 font-weight-medium"},H=S("p",{class:"mb-0"},null,-1),$={key:0,class:"my-5"},G=B({__name:"presentIllnessChild",props:L({child:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(g){const k={Course:A,Circumstances:w,Vegetative:F,Associated:I,"Intellectual Disability":[],ASD:[],ADHD:[],Speech:[],ID:[],Language:[],Fluency:[],Communication:[],Learning:[],Movement:[],Coordination:[],Functioning:[],Relationships:[],Treatments:[],Substances:[],Risk:[]},{t:_}=M(),x=g;let r=[];x.child?r=["Course","Circumstances","Vegetative","ASD","ADHD","Speech","Intellectual Disability","Language","Fluency","Communication","Learning","Movement","Coordination","Associated","Functioning","Relationships","Treatments","Substances","Risk","Notes"]:r=["Course","Circumstances","Vegetative","Associated","Functioning","Relationships","Treatments","Substances","Risk","Notes"];const s=T(g,"modelValue"),D=(n,l)=>{var i;if(s&&s.value)if(((i=s.value)==null?void 0:i[n])===void 0||s.value[n]==="")s.value[n]=l;else{const e=s.value[n].split(", ").filter(v=>v),t=e.indexOf(l);t===-1?e.push(l):e.splice(t,1),s.value[n]=e.join(", ")}};return(n,l)=>{const i=b;return a(),u(R,null,{default:o(()=>[c(V,null,{default:o(()=>[c(m,{cols:"6"},{default:o(()=>[S("h6",U,C(d(_)("Present Illness")),1),H]),_:1})]),_:1}),(a(!0),p(f,null,h(d(r),e=>(a(),u(V,{key:e},{default:o(()=>[s.value?(a(),u(m,{key:0,cols:"6",md:"6"},{default:o(()=>[c(i,{modelValue:s.value[e],"onUpdate:modelValue":t=>s.value[e]=t,label:d(_)(e.charAt(0).toUpperCase()+e.slice(1)),"auto-grow":"",rows:"2"},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)):y("",!0),c(m,null,{default:o(()=>[s.value?(a(),p("div",$,[(a(!0),p(f,null,h(k[e],t=>(a(),u(N,{class:"me-2 mb-2",key:t,size:"x-small",onClick:v=>D(e,t)},{default:o(()=>[z(C(t),1)]),_:2},1032,["onClick"]))),128))])):y("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})}}});export{G as _};
