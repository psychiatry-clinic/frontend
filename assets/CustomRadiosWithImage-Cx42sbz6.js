import{d as v,a as t,o as a,g as n,f as s,b as r,c as d,F as R,i as y,s as k,y as h,A as u,h as w,v as I,x as $,z as i}from"./index-B-uKkDM3.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L=["src"],N=v({__name:"CustomRadiosWithImage",props:{selectedRadio:{},radioContent:{},gridColumn:{}},emits:["update:selectedRadio"],setup(m,{emit:p}){const l=m,_=p,g=o=>{o!==null&&_("update:selectedRadio",o)};return(o,S)=>{const f=t("VRadio"),c=t("VLabel"),b=t("VCol"),C=t("VRow"),V=t("VRadioGroup");return l.radioContent?(a(),n(V,{key:0,"model-value":l.selectedRadio,class:"custom-input-wrapper","onUpdate:modelValue":g},{default:s(()=>[r(C,null,{default:s(()=>[(a(!0),d(R,null,y(l.radioContent,e=>(a(),n(b,k({key:e.bgImage},o.gridColumn),{default:s(()=>[r(c,{class:h(["custom-input custom-radio rounded cursor-pointer w-100",l.selectedRadio===e.value?"active":""])},{default:s(()=>[u(o.$slots,"content",{item:e},()=>[typeof e.bgImage=="object"?(a(),n(w(e.bgImage),{key:0,class:"custom-radio-image"})):(a(),d("img",{key:1,src:e.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,L))],!0),r(f,{id:`custom-radio-with-img-${e.value}`,value:e.value},null,8,["id","value"])]),_:2},1032,["class"]),e.label||o.$slots.label?(a(),n(c,{key:0,for:`custom-radio-with-img-${e.value}`,class:"cursor-pointer"},{default:s(()=>[u(o.$slots,"label",{label:e.label},()=>[I($(e.label),1)],!0)]),_:2},1032,["for"])):i("",!0)]),_:2},1040))),128))]),_:3})]),_:3},8,["model-value"])):i("",!0)}}}),D=B(N,[["__scopeId","data-v-638132f3"]]);export{D as _};
