import{d as x,a as o,o as n,g as r,f as l,b as c,c as i,i as h,F as y,z as u,s as k,y as w,e as s,A as S,x as d}from"./index-B-uKkDM3.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"flex-grow-1"},N={class:"d-flex align-center mb-2"},z={class:"cr-title text-base"},F={key:0,class:"text-disabled text-body-2"},G={class:"text-body-2 mb-0"},A=x({__name:"CustomRadios",props:{selectedRadio:{},radioContent:{},gridColumn:{}},emits:["update:selectedRadio"],setup(_,{emit:p}){const a=_,m=p,V=t=>{t!==null&&m("update:selectedRadio",t)};return(t,D)=>{const f=o("VRadio"),C=o("VSpacer"),R=o("VLabel"),b=o("VCol"),v=o("VRow"),g=o("VRadioGroup");return a.radioContent?(n(),r(g,{key:0,"model-value":a.selectedRadio,class:"custom-input-wrapper","onUpdate:modelValue":V},{default:l(()=>[c(v,null,{default:l(()=>[(n(!0),i(y,null,h(a.radioContent,e=>(n(),r(b,k({key:e.title},t.gridColumn),{default:l(()=>[c(R,{class:w(["custom-input custom-radio rounded cursor-pointer",a.selectedRadio===e.value?"active":""])},{default:l(()=>[s("div",null,[c(f,{value:e.value},null,8,["value"])]),S(t.$slots,"default",{item:e},()=>[s("div",L,[s("div",N,[s("h6",z,d(e.title),1),c(C),e.subtitle?(n(),i("span",F,d(e.subtitle),1)):u("",!0)]),s("p",G,d(e.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):u("",!0)}}}),O=B(A,[["__scopeId","data-v-ef823923"]]);export{O as _};
