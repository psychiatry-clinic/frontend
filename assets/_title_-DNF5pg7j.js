import{N as T,F as A}from"./front-page-navbar-Bj5DVRoQ.js";import{u as H}from"./useApi-1RPI4bAV.js";import{V as z,a as P}from"./VRow-DQz_f7lW.js";import{a2 as k,a3 as B,az as S,aa as I,b as a,bS as M,ax as L,bV as $,a6 as C,bI as E,bG as G,bR as Q,aw as U,aB as X,$ as f,bX as j,aH as q,aL as J,a0 as R,bM as K,F,s as O,d as W,r as Y,o as _,c as y,f as p,n,e as m,x as V,i as Z,z as ee,Q as te,R as ae,g as re}from"./index-CG4YDle8.js";import{V as se}from"./VDivider-XAO4Isda.js";import{V as w}from"./VImg-Ceae0joh.js";import{V as ie}from"./VTextField-C70jzcwf.js";import{V as oe,a as le}from"./VList-DGHKEnZt.js";import{V as ce}from"./VContainer-7C5ybZad.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-0HTERlGV.js";import"./form-CZkM9Veq.js";import"./VNodeRenderer-Dj87acqk.js";import"./useGenerateImageVariant-BhHHDtLi.js";import"./VForm-1JrjLAGr.js";import"./forwardRefs-C-GTDzx5.js";import"./VChip-BK4rdGTF.js";import"./index-3yW8ycYk.js";import"./VSlideGroup-Dou1qSvD.js";import"./VAvatar-Cpp5lqjt.js";import"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-BqbEkUFL.js";import"./VTooltip-qjivppBe.js";import"./VOverlay-CTys7ddd.js";import"./easing-CjukEv2V.js";import"./lazy-4Tgz6YKL.js";import"./scopeId-HaKwWatL.js";import"./index-BqfGL0sV.js";import"./VMenu-CimFr0Yj.js";import"./dialog-transition-D266Airq.js";import"./VNavigationDrawer-B7NnahHd.js";import"./ssrBoot-Cols04Sp.js";import"./VToolbar-PTZ_pclD.js";import"./VCard-B4eAm_FF.js";import"./createSimpleFunctional-DJacVvXz.js";import"./VCardText-BBHH7cpX.js";import"./VSpacer-DOoRScom.js";/* empty css              *//* empty css                   */import"./VCounter-CAk6rpva.js";import"./VField-0RQfECqQ.js";import"./VInput-BdawH32X.js";const de=k({divider:[Number,String],...B()},"VBreadcrumbsDivider"),ue=S()({name:"VBreadcrumbsDivider",props:de(),setup(e,r){let{slots:t}=r;return I(()=>{var l;return a("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((l=t==null?void 0:t.default)==null?void 0:l.call(t))??e.divider])}),{}}}),me=k({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...B(),...M(),...L({tag:"li"})},"VBreadcrumbsItem"),ve=S()({name:"VBreadcrumbsItem",props:me(),setup(e,r){let{slots:t,attrs:l}=r;const c=$(e,l),s=C(()=>{var o;return e.active||((o=c.isActive)==null?void 0:o.value)}),d=C(()=>s.value?e.activeColor:e.color),{textColorClasses:u,textColorStyles:i}=E(d);return I(()=>a(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:s.value&&e.activeClass},u.value,e.class],style:[i.value,e.style],"aria-current":s.value?"page":void 0},{default:()=>{var o,v;return[c.isLink.value?a("a",{class:"v-breadcrumbs-item--link",href:c.href.value,"aria-current":s.value?"page":void 0,onClick:c.navigate},[((v=t.default)==null?void 0:v.call(t))??e.title]):((o=t.default)==null?void 0:o.call(t))??e.title]}})),{}}}),pe=k({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:G,items:{type:Array,default:()=>[]},...B(),...Q(),...U(),...L({tag:"ul"})},"VBreadcrumbs"),be=S()({name:"VBreadcrumbs",props:pe(),setup(e,r){let{slots:t}=r;const{backgroundColorClasses:l,backgroundColorStyles:c}=X(f(e,"bgColor")),{densityClasses:s}=j(e),{roundedClasses:d}=q(e);J({VBreadcrumbsDivider:{divider:f(e,"divider")},VBreadcrumbsItem:{activeClass:f(e,"activeClass"),activeColor:f(e,"activeColor"),color:f(e,"color"),disabled:f(e,"disabled")}});const u=C(()=>e.items.map(i=>typeof i=="string"?{item:{title:i},raw:i}:{item:i,raw:i}));return I(()=>{const i=!!(t.prepend||e.icon);return a(e.tag,{class:["v-breadcrumbs",l.value,s.value,d.value,e.class],style:[c.value,e.style]},{default:()=>{var o;return[i&&a("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?a(K,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):a(R,{key:"prepend-icon",start:!0,icon:e.icon},null)]),u.value.map((v,b,x)=>{var D;let{item:g,raw:N}=v;return a(F,null,[((D=t.item)==null?void 0:D.call(t,{item:g,index:b}))??a(ve,O({key:b,disabled:b>=x.length-1},typeof g=="string"?{title:g}:g),{default:t.title?()=>{var h;return(h=t.title)==null?void 0:h.call(t,{item:g,index:b})}:void 0}),b<x.length-1&&a(ue,null,{default:t.divider?()=>{var h;return(h=t.divider)==null?void 0:h.call(t,{item:N,index:b})}:void 0})])}),(o=t.default)==null?void 0:o.call(t)]}})}),{}}}),fe=e=>(te("data-v-17e2307b"),e=e(),ae(),e),ge={class:"bg-surface help-center-article"},he={key:0,class:"article-section"},_e={class:"text-h4 mb-2"},Ve={class:"text-body-1"},ye=["innerHTML"],Ce={class:"my-6 text-body-1"},ke=fe(()=>m("h5",{class:"text-h5 px-6 py-2 mb-4 rounded",style:{background:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))"}}," Articles in this section ",-1)),Be={class:"text-body-1 text-high-emphasis"},Se=W({__name:"[title]",setup(e){const r=Y();return setTimeout(async()=>{const{data:t,error:l}=await H("/pages/help-center/article");l.value?console.log(l.value):r.value=t.value},1e3),(t,l)=>(_(),y("div",ge,[a(T),a(ce,null,{default:p(()=>{var c;return[n(r)&&((c=n(r))!=null&&c.title)?(_(),y("div",he,[a(z,null,{default:p(()=>[a(P,{cols:"12",md:"8"},{default:p(()=>{var s,d,u,i,o,v;return[m("div",null,[a(be,{class:"px-0 pb-2 pt-0 help-center-breadcrumbs",items:[{title:"Help Center",to:{name:"front-pages-help-center"},class:"text-primary"},{title:"how to add product in cart"}]}),m("h4",_e,V((s=n(r))==null?void 0:s.title),1),m("div",Ve,V((d=n(r))==null?void 0:d.lastUpdated),1)]),a(se,{class:"my-6"}),m("div",{class:"mb-6 text-body-1",innerHTML:(u=n(r))==null?void 0:u.productContent},null,8,ye),a(w,{class:"rounded-lg",src:(i=n(r))==null?void 0:i.productImg},null,8,["src"]),m("p",Ce,V((o=n(r))==null?void 0:o.checkoutContent),1),a(w,{class:"rounded-lg",src:(v=n(r))==null?void 0:v.checkoutImg},null,8,["src"])]}),_:1}),a(P,{cols:"12",md:"4"},{default:p(()=>[a(ie,{"prepend-inner-icon":"tabler-search",placeholder:"Search...",class:"mb-6"}),m("div",null,[ke,a(oe,{class:"card-list"},{default:p(()=>{var s;return[(_(!0),y(F,null,Z((s=n(r))==null?void 0:s.articleList,(d,u)=>(_(),re(le,{key:u,link:"",class:"text-disabled"},{append:p(()=>[a(R,{icon:t.$vuetify.locale.isRtl?"tabler-chevron-left":"tabler-chevron-right",size:"20"},null,8,["icon"])]),default:p(()=>[m("div",Be,V(d),1)]),_:2},1024))),128))]}),_:1})])]),_:1})]),_:1})])):ee("",!0)]}),_:1}),a(A)]))}}),vt=ne(Se,[["__scopeId","data-v-17e2307b"]]);export{vt as default};
