import{d as z,aM as I,r as f,k as P,w as N,a as $,o as r,c,e as o,b as s,f as a,a0 as p,n,z as V,s as E,g as y,F as d,i as h,x as m,v as _,aX as F,b6 as M,b7 as Q}from"./index-CtKWXR1f.js";import{S}from"./shepherd.esm-ByKGJf9j.js";import{w as U}from"./index-Dz1rBMAR.js";import{u as j}from"./useApi-CoH36B53.js";import{V as q}from"./VCardText-B3s4VqAO.js";import{V as G,a as K}from"./VRow-wVefHPDJ.js";import{V as O,a as A,b as R,c as X}from"./VList-Dzx6YNwD.js";const H=o("span",{class:"me-2"},"Search",-1),J=o("span",{class:"meta-key"},"⌘K",-1),W=[H,J],Y={class:"custom-letter-spacing text-disabled text-uppercase py-2 px-4 mb-0",style:{"font-size":"0.75rem","line-height":"0.875rem"}},Z={class:"mt-9"},ee=o("span",{class:"d-flex justify-center text-disabled mb-2"},"Try searching for",-1),te=["onClick"],de=z({inheritAttrs:!1,__name:"NavSearchBar",setup(ae){const T=I(),i=f(!1),g=f(!1),v=[{title:"Popular Searches",content:[{icon:"tabler-chart-bar",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-donut-3",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-shopping-cart",title:"eCommerce",url:{name:"dashboards-ecommerce"}},{icon:"tabler-truck",title:"Logistics",url:{name:"dashboards-logistics"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-lock",title:"Roles & Permissions",url:{name:"apps-roles"}},{icon:"tabler-settings",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-copy",title:"Dialog Examples",url:{name:"pages-dialog-examples"}}]},{title:"User Interface",content:[{icon:"tabler-typography",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-menu-2",title:"Accordion",url:{name:"components-expansion-panel"}},{icon:"tabler-info-triangle",title:"Alert",url:{name:"components-alert"}},{icon:"tabler-checkbox",title:"Cards",url:{name:"pages-cards-card-basic"}}]},{title:"Forms & Tables",content:[{icon:"tabler-circle-dot",title:"Radio",url:{name:"forms-radio"}},{icon:"tabler-file-invoice",title:"Form Layouts",url:{name:"forms-form-layouts"}},{icon:"tabler-table",title:"Table",url:{name:"tables-data-table"}},{icon:"tabler-edit",title:"Editor",url:{name:"forms-editors"}}]}],L=[{title:"Analytics",icon:"tabler-chart-bar",url:{name:"dashboards-analytics"}},{title:"CRM",icon:"tabler-chart-donut-3",url:{name:"dashboards-crm"}},{title:"eCommerce",icon:"tabler-shopping-cart",url:{name:"dashboards-ecommerce"}}],b=f(""),w=P(),C=f([]);N(b,async()=>{g.value=!0;const{data:u}=await j(U("/app-bar/search",{q:b.value}));C.value=u.value,setTimeout(()=>{g.value=!1},500)});const k=()=>{i.value=!1,b.value=""},x=u=>{w.push(u.url),k()},B=M(()=>Q(()=>import("./AppBarSearch-DROo3tVj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url));return(u,l)=>{const D=$("IconBtn");return r(),c(d,null,[o("div",E({class:"d-flex align-center cursor-pointer"},u.$attrs,{style:{"user-select":"none"},onClick:l[2]||(l[2]=e=>i.value=!n(i))}),[s(D,{onClick:l[0]||(l[0]=e=>{var t;return(t=n(S).activeTour)==null?void 0:t.cancel()})},{default:a(()=>[s(p,{icon:"tabler-search"})]),_:1}),n(T).appContentLayoutNav==="vertical"?(r(),c("span",{key:0,class:"d-none d-md-flex align-center text-disabled ms-2",onClick:l[1]||(l[1]=e=>{var t;return(t=n(S).activeTour)==null?void 0:t.cancel()})},W)):V("",!0)],16),s(n(B),{isDialogVisible:n(i),"onUpdate:isDialogVisible":l[3]||(l[3]=e=>F(i)?i.value=e:null),"search-results":n(C),"is-loading":n(g),onSearch:l[4]||(l[4]=e=>b.value=e)},{suggestions:a(()=>[s(q,{class:"app-bar-search-suggestions pa-12"},{default:a(()=>[v?(r(),y(G,{key:0},{default:a(()=>[(r(),c(d,null,h(v,e=>s(K,{key:e.title,cols:"12",sm:"6"},{default:a(()=>[o("p",Y,m(e.title),1),s(O,{class:"card-list"},{default:a(()=>[(r(!0),c(d,null,h(e.content,t=>(r(),y(A,{key:t.title,class:"app-bar-search-suggestion mx-4 mt-2",onClick:le=>x(t)},{prepend:a(()=>[s(p,{icon:t.icon,size:"20",class:"me-n1"},null,8,["icon"])]),default:a(()=>[s(R,null,{default:a(()=>[_(m(t.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1024)),64))]),_:1})):V("",!0)]),_:1})]),noDataSuggestion:a(()=>[o("div",Z,[ee,(r(),c(d,null,h(L,e=>o("h6",{key:e.title,class:"app-bar-search-suggestion text-h6 font-weight-regular cursor-pointer py-2 px-4",onClick:t=>x(e)},[s(p,{size:"20",icon:e.icon,class:"me-2"},null,8,["icon"]),o("span",null,m(e.title),1)],8,te)),64))])]),searchResult:a(({item:e})=>[s(X,{class:"text-disabled custom-letter-spacing font-weight-regular ps-4"},{default:a(()=>[_(m(e.title),1)]),_:2},1024),(r(!0),c(d,null,h(e.children,t=>(r(),y(A,{key:t.title,to:t.url,onClick:k},{prepend:a(()=>[s(p,{size:"20",icon:t.icon,class:"me-n1"},null,8,["icon"])]),append:a(()=>[s(p,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon flip-in-rtl"})]),default:a(()=>[s(R,null,{default:a(()=>[_(m(t.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1},8,["isDialogVisible","search-results","is-loading"])],64)}}});export{de as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AppBarSearch-DROo3tVj.js","./index-CtKWXR1f.js","./index-Dy_H5x8z.css","./vue3-perfect-scrollbar.esm-CQRTHFsy.js","./VCard-Bp-n6mxj.js","./createSimpleFunctional-DfppPX5g.js","./VAvatar-Cioy9C--.js","./VImg-DZ-rodP_.js","./index-BUJI5O_j.js","./VImg-Brws63li.css","./VAvatar-DxeXIdOc.css","./VCardText-B3s4VqAO.js","./VCard-UTL5cq6h.css","./VTextField-DhP3KMUS.js","./VCounter-C6GPP6-x.js","./index-D0p4QYlD.js","./VCounter-FWZaU3c3.css","./VField-B3rRpEM3.js","./form-Bgif39SN.js","./form-DKvmeY5J.css","./easing-CjukEv2V.js","./VField-BVnXoKAU.css","./VInput-V8m5mUYp.js","./VInput-CFdIjHfO.css","./forwardRefs-C-GTDzx5.js","./VTextField-CEcEcuol.css","./VDivider-DfDZL3qK.js","./VDivider-BFIVjcbw.css","./VList-Dzx6YNwD.js","./ssrBoot-CccmqE5a.js","./VList-BRtbaBmK.css","./VDialog-JMiBdp4Q.js","./VOverlay-CtS3PLv2.js","./lazy-DBdDxf2u.js","./scopeId-RDRHYTbi.js","./VOverlay-BDsRuhz8.css","./dialog-transition-Cotruf-s.js","./VDialog-BpgSThq_.css","./_plugin-vue_export-helper-DlAUqK2U.js","./AppBarSearch-CG6mdxX_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
