import{_ as B}from"./AppSearchHeader.vue_vue_type_style_index_0_lang-rGoJLJhN.js";import{d as F,r as p,w,o as i,c as u,b as e,f as a,K as x,L as q,n as l,aX as V,F as f,i as h,y as W,a0 as _,e as o,v as T,g as y,x as m}from"./index-D5RGqRWX.js";import{s as A}from"./sitting-girl-with-laptop-BFobHDw_.js";import{$ as N}from"./api-DrljkMd9.js";import{a as v,V as k}from"./VRow-CXPDeuUR.js";import{V as Q,a as U}from"./VTabs-DceoMOqL.js";import{V as E}from"./VImg-CTRzm68e.js";import{V as P,a as R}from"./VWindowItem-DCb2HZWi.js";import{V as $}from"./VChip-DQDH9nD2.js";import{V as z}from"./VAvatar-UGmDTgW3.js";import{V as D,a as H}from"./VExpansionPanel-54m7NF9Y.js";import{V as j}from"./VCard-fyGiGoR0.js";import{V as C}from"./VCardText-CxtBxXM8.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-DVmY9CA8.js";import"./form-eyOzVGLC.js";import"./VTextField-DU42iz1L.js";/* empty css                   */import"./VCounter-C7RInydd.js";import"./index-HyA-AI0P.js";import"./index-BZhaH00k.js";import"./VField-DeGbkOa7.js";import"./easing-CjukEv2V.js";import"./VInput-BF9u6u1K.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VSlideGroup-lxP2-7D8.js";import"./lazy-MPMx-enN.js";import"./ssrBoot-1R9RYTM1.js";import"./createSimpleFunctional-4pAU72TT.js";const G={class:"d-flex align-center mb-4"},K={class:"text-h5"},X={class:"text-body-1"},Y=o("span",{class:"text-base font-weight-medium"}," No Results Found!! ",-1),J={class:"text-center pt-16"},M=o("h4",{class:"text-h4 mb-2"}," You still have a question? ",-1),O=o("p",{class:"text-body-1 mb-6"}," If you can't find question in our FAQ, you can contact us. We'll answer you shortly! ",-1),Z={class:"text-h5 mb-1"},Se=F({__name:"faq",setup(ee){const b=p(""),n=p([]),I=async()=>{const g=await N("/pages/faq",{query:{q:b.value}}).catch(s=>console.log(s));n.value=g},r=p("Payment"),d=p(0);w(r,()=>d.value=0),w(b,I,{immediate:!0});const L=[{icon:"tabler-phone",via:"+ (810) 2548 2568",tagLine:"We are always happy to help!"},{icon:"tabler-mail",via:"hello@help.com",tagLine:"Best way to get answer faster!"}];return(g,s)=>{const S=B;return i(),u("section",null,[e(S,{title:"Hello, how can we help?",subtitle:"or choose a category to quickly find the help you need","custom-class":"mb-6",placeholder:"Search Articles...",density:"comfortable","is-reverse":""}),e(k,null,{default:a(()=>[x(e(v,{cols:"12",sm:"4",lg:"3",class:"position-relative"},{default:a(()=>[e(Q,{modelValue:l(r),"onUpdate:modelValue":s[0]||(s[0]=t=>V(r)?r.value=t:null),direction:"vertical",class:"v-tabs-pill",grow:""},{default:a(()=>[(i(!0),u(f,null,h(l(n),t=>(i(),y(U,{key:t.faqTitle,value:t.faqTitle},{default:a(()=>[e(_,{icon:t.faqIcon,size:20,start:""},null,8,["icon"]),T(" "+m(t.faqTitle),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(E,{width:245,src:l(A),class:"d-none d-sm-block mt-4 mx-auto"},null,8,["src"])]),_:1},512),[[q,l(n).length]]),e(v,{cols:"12",sm:"8",lg:"9"},{default:a(()=>[e(P,{modelValue:l(r),"onUpdate:modelValue":s[2]||(s[2]=t=>V(r)?r.value=t:null),class:"faq-v-window disable-tab-transition"},{default:a(()=>[(i(!0),u(f,null,h(l(n),t=>(i(),y(R,{key:t.faqTitle,value:t.faqTitle},{default:a(()=>[o("div",G,[e(z,{rounded:"",color:"primary",variant:"tonal",class:"me-4",size:"50"},{default:a(()=>[e(_,{size:30,icon:t.faqIcon},null,8,["icon"])]),_:2},1024),o("div",null,[o("h5",K,m(t.faqTitle),1),o("div",X,m(t.faqSubtitle),1)])]),e(D,{modelValue:l(d),"onUpdate:modelValue":s[1]||(s[1]=c=>V(d)?d.value=c:null),multiple:""},{default:a(()=>[(i(!0),u(f,null,h(t.faqs,c=>(i(),y(H,{key:c.question,title:c.question,text:c.answer},null,8,["title","text"]))),128))]),_:2},1032,["modelValue"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),x(e(v,{cols:"12",class:W(l(n).length?"":"d-flex justify-center align-center")},{default:a(()=>[e(_,{icon:"tabler-help",start:"",size:"20"}),Y]),_:1},8,["class"]),[[q,!l(n).length]])]),_:1}),o("div",J,[e($,{label:"",color:"primary",size:"small",class:"mb-2"},{default:a(()=>[T(" Question ")]),_:1}),M,O,e(k,{class:"mt-9"},{default:a(()=>[(i(),u(f,null,h(L,t=>e(v,{key:t.icon,sm:"6",cols:"12"},{default:a(()=>[e(j,{flat:"",style:{"background-color":"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}},{default:a(()=>[e(C,{class:"pb-4"},{default:a(()=>[e(z,{rounded:"",color:"primary",variant:"tonal",size:"46"},{default:a(()=>[e(_,{icon:t.icon,size:"26"},null,8,["icon"])]),_:2},1024)]),_:2},1024),e(C,null,{default:a(()=>[o("h5",Z,m(t.via),1),o("div",null,m(t.tagLine),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})])])}}});export{Se as default};
