import{d as p,a as e,o as _,c as m,e as d,x as f,b as o,A as V,f as x}from"./index-B-uKkDM3.js";const B={class:"pa-6 d-flex align-center"},C={class:"text-h5"},h=p({__name:"AppDrawerHeaderSection",props:{title:{}},emits:["cancel"],setup(s){const a=s;return(t,n)=>{const c=e("VSpacer"),r=e("VIcon"),l=e("IconBtn");return _(),m("div",B,[d("h5",C,f(a.title),1),o(c),V(t.$slots,"beforeClose"),o(l,{size:"small",onClick:n[0]||(n[0]=i=>t.$emit("cancel",i))},{default:x(()=>[o(r,{size:"24",icon:"tabler-x"})]),_:1})])}}});export{h as _};