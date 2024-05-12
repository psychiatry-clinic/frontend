import{_ as R}from"./AppSearchHeader.vue_vue_type_style_index_0_lang-COURFSyj.js";import{N as z,F as N}from"./front-page-navbar-Clx5DtLa.js";import{d as w,a as s,o as a,g as _,f as e,c as u,i as C,F as b,z as k,b as t,e as n,x as v,v as m,r as F,n as p}from"./index-B-uKkDM3.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{$ as S}from"./api-faFk6m2o.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import"./VNodeRenderer-CuvnLh29.js";import"./useGenerateImageVariant-hbipeH-m.js";import"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-CI_eT-m9.js";import"./index-B3bPRkoL.js";const I=["src"],D={class:"text-h5"},K={class:"text-body-1 mb-0"},y=w({__name:"HelpCenterLandingArticlesOverview",props:{articles:{}},setup(d){const o=d;return(c,h)=>{const l=s("VBtn"),r=s("VCardText"),f=s("VCard"),x=s("VCol"),V=s("VRow");return o.articles.length?(a(),_(V,{key:0},{default:e(()=>[(a(!0),u(b,null,C(o.articles,i=>(a(),_(x,{key:i.title,cols:"12",md:"4"},{default:e(()=>[t(f,{flat:"",border:""},{default:e(()=>[t(r,{class:"align-center text-center d-flex flex-column gap-3"},{default:e(()=>[n("img",{src:i.img,alt:"svg",height:"58",width:"58"},null,8,I),n("h5",D,v(i.title),1),n("p",K,v(i.subtitle),1),t(l,{size:"small",variant:"tonal",to:{name:"front-pages-help-center-article-title",params:{title:"how-to-add-product-in-cart"}}},{default:e(()=>[m(" Read More ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):k("",!0)}}}),O={},j=n("h4",{class:"text-h4 text-center"}," Still need help? ",-1),q=n("p",{class:"my-4 text-body-1"},[m(" Our specialists are always happy to help. "),n("br"),m(" Contact us during standard business hours or email us 24/7, and we'll get back to you. ")],-1),E={class:"d-flex justify-center gap-4 flex-wrap"};function M(d,o){const c=s("VBtn"),h=s("VCardText");return a(),_(h,{class:"text-center py-4"},{default:e(()=>[j,q,n("div",E,[t(c,null,{default:e(()=>[m("Visit our community")]),_:1}),t(c,null,{default:e(()=>[m("Contact us")]),_:1})])]),_:1})}const P=H(O,[["render",M]]),G={class:"mt-6"},J=n("span",{class:"d-inline-block"}," See All Articles ",-1),Q=w({__name:"HelpCenterLandingKnowledgeBase",props:{categories:{}},setup(d){const o=d;return(c,h)=>{const l=s("VIcon"),r=s("VAvatar"),f=s("RouterLink"),x=s("VListItem"),V=s("VList"),i=s("VCardText"),$=s("VCard"),L=s("VCol"),B=s("VRow");return a(),_(B,null,{default:e(()=>[(a(!0),u(b,null,C(o.categories,g=>(a(),_(L,{key:g.title,cols:"12",sm:"6",lg:"4"},{default:e(()=>[t($,{title:g.title},{prepend:e(()=>[t(r,{rounded:"",color:"primary",variant:"tonal",size:"32",class:"me-1"},{default:e(()=>[t(l,{icon:g.icon,size:"20"},null,8,["icon"])]),_:2},1024)]),default:e(()=>[t(i,null,{default:e(()=>[t(V,{class:"card-list"},{default:e(()=>[(a(!0),u(b,null,C(g.articles,(A,T)=>(a(),_(x,{key:T,class:"text-disabled"},{append:e(()=>[t(l,{icon:"tabler-chevron-right",class:"flip-in-rtl",size:"20"})]),default:e(()=>[t(f,{to:{name:"front-pages-help-center-article-title",params:{title:"how-to-add-product-in-cart"}},class:"text-high-emphasis"},{default:e(()=>[n("div",null,v(A.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024),n("div",G,[t(f,{to:{name:"front-pages-help-center-article-title",params:{title:"how-to-add-product-in-cart"}},class:"text-base d-flex align-center font-weight-medium d-inline-block"},{default:e(()=>[J,t(l,{icon:"tabler-arrow-right",size:"18",class:"ms-3 flip-in-rtl"})]),_:1})])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})}}}),U={class:"help-center-page"},W={key:0},X=n("h4",{class:"text-h4 font-weight-medium",style:{color:"rgba(var(--v-theme-primary), 1)"}}," Hello, how can we help? ",-1),Y={class:"help-center-section bg-surface"},Z=n("h4",{class:"text-h4 text-center mb-6"}," Popular Articles ",-1),tt={class:"help-center-section"},et=n("h4",{class:"text-h4 text-center mb-6"}," Knowledge Base ",-1),nt={class:"help-center-section bg-surface"},st=n("h4",{class:"text-h4 text-center mb-6"}," Keep Learning ",-1),ot={class:"help-center-section"},ht=w({__name:"index",setup(d){const o=F();return setTimeout(async()=>{const c=await S("/pages/help-center");o.value=c},1e3),(c,h)=>{const l=R,r=s("VContainer");return a(),u("div",U,[t(z),p(o)&&p(o).allArticles.length?(a(),u("div",W,[t(l,{subtitle:"Common troubleshooting topics: eCommerce, Blogging to payment","custom-class":"rounded-0",placeholder:"Search"},{title:e(()=>[X]),_:1}),n("div",Y,[t(r,null,{default:e(()=>[Z,t(y,{articles:p(o).popularArticles},null,8,["articles"])]),_:1})]),n("div",tt,[t(r,null,{default:e(()=>[et,t(Q,{categories:p(o).allArticles},null,8,["categories"])]),_:1})]),n("div",nt,[t(r,null,{default:e(()=>[st,t(y,{articles:p(o).keepLearning},null,8,["articles"])]),_:1})]),n("div",ot,[t(P)]),n("div",null,[t(N)])])):k("",!0)])}}});export{ht as default};
