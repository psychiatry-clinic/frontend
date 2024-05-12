import{_ as $}from"./AppSearchHeader.vue_vue_type_style_index_0_lang-COURFSyj.js";import{d as D,r as h,w as C,a,o as i,c as d,b as e,f as o,K as k,L as I,n as l,ad as b,F as V,i as v,y as H,e as n,v as z,g as y,x as m}from"./index-B-uKkDM3.js";import{s as j}from"./sitting-girl-with-laptop-C0ZOUcQD.js";import{$ as G}from"./api-faFk6m2o.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import"./index-B3bPRkoL.js";const K={class:"d-flex align-center mb-4"},Y={class:"text-h5"},J={class:"text-body-1"},M=n("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),O={class:"text-center pt-16"},X=n("h4",{class:"text-h4 mb-2"}," You still have a question? ",-1),Z=n("p",{class:"text-body-1 mb-6"}," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),ee={class:"text-h5 mb-1"},ce=D({__name:"faq",setup(te){const g=h(""),r=h([]),W=async()=>{const w=await G("/pages/faq",{query:{q:g.value}}).catch(s=>console.log(s));r.value=w},c=h("Payment"),_=h(0);C(c,()=>_.value=0),C(g,W,{immediate:!0});const L=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(w,s)=>{const S=$,p=a("VIcon"),A=a("VTab"),B=a("VTabs"),E=a("VImg"),f=a("VCol"),x=a("VAvatar"),F=a("VExpansionPanel"),P=a("VExpansionPanels"),N=a("VWindowItem"),Q=a("VWindow"),q=a("VRow"),R=a("VChip"),T=a("VCardText"),U=a("VCard");return i(),d("section",null,[e(S,{title:"Hello, how can we help?",subtitle:"or choose a category to quickly find the help you need","custom-class":"mb-6",placeholder:"Search Articles...",density:"comfortable","is-reverse":""}),e(q,null,{default:o(()=>[k(e(f,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:o(()=>[e(B,{modelValue:l(c),"onUpdate:modelValue":s[0]||(s[0]=t=>b(c)?c.value=t:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:o(()=>[(i(!0),d(V,null,v(l(r),t=>(i(),y(A,{key:t.faqTitle,value:t.faqTitle},{default:o(()=>[e(p,{icon:t.faqIcon,size:20,start:""},null,8,["icon"]),z(" "+m(t.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(E,{width:245,src:l(j),class:"d-none d-sm-block mt-4 mx-auto"},null,8,["src"])]),_:1},512),[[I,l(r).length]]),e(f,{cols:"12",sm:"8",lg:"9"},{default:o(()=>[e(Q,{modelValue:l(c),"onUpdate:modelValue":s[2]||(s[2]=t=>b(c)?c.value=t:null),class:"faq-v-window disable-tab-transition"},{default:o(()=>[(i(!0),d(V,null,v(l(r),t=>(i(),y(N,{key:t.faqTitle,value:t.faqTitle},{default:o(()=>[n("div",K,[e(x,{rounded:"",color:"primary",variant:"tonal",class:"me-4",size:"50"},{default:o(()=>[e(p,{size:30,icon:t.faqIcon},null,8,["icon"])]),_:2},1024),n("div",null,[n("h5",Y,m(t.faqTitle),1),n("div",J,m(t.faqSubtitle),1)])]),e(P,{modelValue:l(_),"onUpdate:modelValue":s[1]||(s[1]=u=>b(_)?_.value=u:null),multiple:""},{default:o(()=>[(i(!0),d(V,null,v(t.faqs,u=>(i(),y(F,{key:u.question,title:u.question,text:u.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),k(e(f,{cols:"12",class:H(l(r).length?"":"d-flex justify-center align-center")},{default:o(()=>[e(p,{icon:"tabler-help",start:"",size:"20"}),M]),_:1},8,["class"]),[[I,!l(r).length]])]),_:1}),n("div",O,[e(R,{label:"",color:"primary",size:"small",class:"mb-2"},{default:o(()=>[z(" Question ")]),_:1}),X,Z,e(q,{class:"mt-9"},{default:o(()=>[(i(),d(V,null,v(L,t=>e(f,{key:t.icon,sm:"6",cols:"12"},{default:o(()=>[e(U,{flat:"",style:{"background-color":"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}},{default:o(()=>[e(T,{class:"pb-4"},{default:o(()=>[e(x,{rounded:"",color:"primary",variant:"tonal",size:"46"},{default:o(()=>[e(p,{icon:t.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),_:2},1024),e(T,null,{default:o(()=>[n("h5",ee,m(t.via),1),n("div",null,m(t.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])])}}});export{ce as default};
