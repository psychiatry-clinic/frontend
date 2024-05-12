import{a as se,p as oe}from"./formatters-DocrwTSm.js";import{_ as re}from"./TablePagination.vue_vue_type_script_setup_true_lang-BLzMRQig.js";import{_ as ie}from"./AppTextField.vue_vue_type_script_setup_true_lang-0HTERlGV.js";import{_ as ne}from"./AppSelect.vue_vue_type_script_setup_true_lang-CrhVdGdy.js";import{_ as ce}from"./AddNewUserDrawer.vue_vue_type_script_setup_true_lang-z_jbKZ8e.js";import{u as ue}from"./useApi-1RPI4bAV.js";import{c as pe}from"./createUrl-Bk9dXhS4.js";import{$ as N}from"./api-Dy4JcHNd.js";import{V as R,a as y}from"./VRow-DQz_f7lW.js";import{a as de,b as me,V as W}from"./VCard-B4eAm_FF.js";import{V as U}from"./VCardText-BBHH7cpX.js";import{V as O}from"./VDivider-XAO4Isda.js";import{V as fe}from"./VSpacer-DOoRScom.js";import{d as ve,r as i,b9 as _e,a6 as F,a as j,o as v,c as C,e as s,b as t,f as a,F as be,i as xe,n as o,v as c,aX as u,aj as A,g as q,x as n,a0 as p,y as ge}from"./index-CG4YDle8.js";import{V as Ve}from"./VDataTableServer-6pmQbLqo.js";import{V as M}from"./VAvatar-Cpp5lqjt.js";import{V as he}from"./VImg-Ceae0joh.js";import{V as ye}from"./VChip-BK4rdGTF.js";import{V as we}from"./VMenu-CimFr0Yj.js";import{V as ke,a as P,b as S}from"./VList-DGHKEnZt.js";import"./helpers-BGv4x_9E.js";import"./VPagination-Bc9YScpW.js";import"./form-CZkM9Veq.js";import"./VTextField-C70jzcwf.js";/* empty css                   */import"./VCounter-CAk6rpva.js";import"./index-3yW8ycYk.js";import"./index-BqfGL0sV.js";import"./VField-0RQfECqQ.js";import"./easing-CjukEv2V.js";import"./VInput-BdawH32X.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-DpGjWdw8.js";import"./dialog-transition-D266Airq.js";import"./VOverlay-CTys7ddd.js";import"./lazy-4Tgz6YKL.js";import"./scopeId-HaKwWatL.js";import"./VCheckboxBtn-D6KcQavv.js";import"./VSelectionControl-C1v3DFU4.js";import"./validators-DR7cptrM.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-CvCamUm2.js";import"./vue3-perfect-scrollbar.esm-BWLe2sAZ.js";import"./VForm-1JrjLAGr.js";import"./VNavigationDrawer-B7NnahHd.js";import"./ssrBoot-Cols04Sp.js";import"./index-B3bPRkoL.js";/* empty css              */import"./createSimpleFunctional-DJacVvXz.js";import"./VDataTable-X0kH0C9S.js";import"./VTable-D_zizoqw.js";import"./filter-DDWJXbXz.js";import"./VSlideGroup-Dou1qSvD.js";const Ue={class:"d-flex mb-6"},Ce={class:"d-flex justify-space-between"},Ae={class:"d-flex flex-column gap-y-1"},Pe={class:"text-body-1 text-high-emphasis"},Se={class:"d-flex gap-x-2 align-center"},Le={class:"text-h4"},Te={class:"text-sm"},Be={class:"me-3 d-flex gap-3"},De={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},ze={style:{"inline-size":"15.625rem"}},$e={class:"d-flex align-center gap-x-4"},Ie={key:1},Ee={class:"d-flex flex-column"},Ne={class:"text-base"},Re={class:"text-sm"},We={class:"d-flex align-center gap-x-2"},Oe={class:"text-capitalize text-high-emphasis text-body-1"},Fe={class:"text-body-1 text-high-emphasis text-capitalize"},Ft=ve({__name:"index",async setup(je){let _,L;const b=i(""),x=i(),g=i(),V=i(),d=i(10),m=i(1),T=i(),B=i(),Q=r=>{var l,f;T.value=(l=r.sortBy[0])==null?void 0:l.key,B.value=(f=r.sortBy[0])==null?void 0:f.order},X=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:D,execute:z}=([_,L]=_e(()=>ue(pe("/apps/users",{query:{q:b,status:V,plan:g,role:x,itemsPerPage:d,page:m,sortBy:T,orderBy:B}}))),_=await _,L(),_),G=F(()=>D.value.users),$=F(()=>D.value.totalUsers),H=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],J=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],K=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],w=r=>{const l=r.toLowerCase();return l==="subscriber"?{color:"success",icon:"tabler-user"}:l==="author"?{color:"error",icon:"tabler-device-desktop"}:l==="maintainer"?{color:"info",icon:"tabler-chart-pie"}:l==="editor"?{color:"warning",icon:"tabler-edit"}:l==="admin"?{color:"primary",icon:"tabler-crown"}:{color:"primary",icon:"tabler-user"}},Y=r=>{const l=r.toLowerCase();return l==="pending"?"warning":l==="active"?"success":l==="inactive"?"secondary":"primary"},h=i(!1),Z=async r=>{await N("/apps/users",{method:"POST",body:r}),z()},I=async r=>{await N(`/apps/users/${r}`,{method:"DELETE"}),z()},ee=i([{title:"Session",value:"21,459",change:29,desc:"Total Users",icon:"tabler-users",iconColor:"primary"},{title:"Paid Users",value:"4,567",change:18,desc:"Last Week Analytics",icon:"tabler-user-plus",iconColor:"error"},{title:"Active Users",value:"19,860",change:-14,desc:"Last Week Analytics",icon:"tabler-user-check",iconColor:"success"},{title:"Pending Users",value:"237",change:42,desc:"Last Week Analytics",icon:"tabler-user-search",iconColor:"warning"}]);return(r,l)=>{const f=ne,te=ie,ae=j("RouterLink"),E=j("IconBtn"),le=re;return v(),C("section",null,[s("div",Ue,[t(R,null,{default:a(()=>[(v(!0),C(be,null,xe(o(ee),(e,k)=>(v(),q(y,{key:k,cols:"12",md:"3",sm:"6"},{default:a(()=>[t(W,null,{default:a(()=>[t(U,null,{default:a(()=>[s("div",Ce,[s("div",Ae,[s("div",Pe,n(e.title),1),s("div",Se,[s("h4",Le,n(e.value),1),s("div",{class:ge(["text-base",e.change>0?"text-success":"text-error"])}," ("+n(("prefixWithPlus"in r?r.prefixWithPlus:o(oe))(e.change))+"%) ",3)]),s("div",Te,n(e.desc),1)]),t(M,{color:e.iconColor,variant:"tonal",rounded:"",size:"42"},{default:a(()=>[t(p,{icon:e.icon,size:"26"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(W,{class:"mb-6"},{default:a(()=>[t(de,{class:"pb-4"},{default:a(()=>[t(me,null,{default:a(()=>[c("Filters")]),_:1})]),_:1}),t(U,null,{default:a(()=>[t(R,null,{default:a(()=>[t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(x),"onUpdate:modelValue":l[0]||(l[0]=e=>u(x)?x.value=e:null),placeholder:"Select Role",items:H,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(g),"onUpdate:modelValue":l[1]||(l[1]=e=>u(g)?g.value=e:null),placeholder:"Select Plan",items:J,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1}),t(y,{cols:"12",sm:"4"},{default:a(()=>[t(f,{modelValue:o(V),"onUpdate:modelValue":l[2]||(l[2]=e=>u(V)?V.value=e:null),placeholder:"Select Status",items:K,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(O),t(U,{class:"d-flex flex-wrap gap-4"},{default:a(()=>[s("div",Be,[t(f,{"model-value":o(d),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":l[3]||(l[3]=e=>d.value=parseInt(e,10))},null,8,["model-value"])]),t(fe),s("div",De,[s("div",ze,[t(te,{modelValue:o(b),"onUpdate:modelValue":l[4]||(l[4]=e=>u(b)?b.value=e:null),placeholder:"Search User"},null,8,["modelValue"])]),t(A,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload"},{default:a(()=>[c(" Export ")]),_:1}),t(A,{"prepend-icon":"tabler-plus",onClick:l[5]||(l[5]=e=>h.value=!0)},{default:a(()=>[c(" Add New User ")]),_:1})])]),_:1}),t(O),t(Ve,{"items-per-page":o(d),"onUpdate:itemsPerPage":l[7]||(l[7]=e=>u(d)?d.value=e:null),page:o(m),"onUpdate:page":l[8]||(l[8]=e=>u(m)?m.value=e:null),items:o(G),"items-length":o($),headers:X,class:"text-no-wrap","show-select":"","onUpdate:options":Q},{"item.user":a(({item:e})=>[s("div",$e,[t(M,{size:"34",variant:e.avatar?void 0:"tonal",color:e.avatar?void 0:w(e.role).color},{default:a(()=>[e.avatar?(v(),q(he,{key:0,src:e.avatar},null,8,["src"])):(v(),C("span",Ie,n(("avatarText"in r?r.avatarText:o(se))(e.fullName)),1))]),_:2},1032,["variant","color"]),s("div",Ee,[s("h6",Ne,[t(ae,{to:{name:"apps-user-view-id",params:{id:e.id}},class:"font-weight-medium text-link"},{default:a(()=>[c(n(e.fullName),1)]),_:2},1032,["to"])]),s("div",Re,n(e.email),1)])])]),"item.role":a(({item:e})=>[s("div",We,[t(p,{size:22,icon:w(e.role).icon,color:w(e.role).color},null,8,["icon","color"]),s("div",Oe,n(e.role),1)])]),"item.plan":a(({item:e})=>[s("div",Fe,n(e.currentPlan),1)]),"item.status":a(({item:e})=>[t(ye,{color:Y(e.status),size:"small",label:"",class:"text-capitalize"},{default:a(()=>[c(n(e.status),1)]),_:2},1032,["color"])]),"item.actions":a(({item:e})=>[t(E,{onClick:k=>I(e.id)},{default:a(()=>[t(p,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),t(E,null,{default:a(()=>[t(p,{icon:"tabler-eye"})]),_:1}),t(A,{icon:"",variant:"text",color:"medium-emphasis"},{default:a(()=>[t(p,{icon:"tabler-dots-vertical"}),t(we,{activator:"parent"},{default:a(()=>[t(ke,null,{default:a(()=>[t(P,{to:{name:"apps-user-view-id",params:{id:e.id}}},{prepend:a(()=>[t(p,{icon:"tabler-eye"})]),default:a(()=>[t(S,null,{default:a(()=>[c("View")]),_:1})]),_:2},1032,["to"]),t(P,{link:""},{prepend:a(()=>[t(p,{icon:"tabler-pencil"})]),default:a(()=>[t(S,null,{default:a(()=>[c("Edit")]),_:1})]),_:1}),t(P,{onClick:k=>I(e.id)},{prepend:a(()=>[t(p,{icon:"tabler-trash"})]),default:a(()=>[t(S,null,{default:a(()=>[c("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(le,{page:o(m),"onUpdate:page":l[6]||(l[6]=e=>u(m)?m.value=e:null),"items-per-page":o(d),"total-items":o($)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),t(ce,{isDrawerOpen:o(h),"onUpdate:isDrawerOpen":l[9]||(l[9]=e=>u(h)?h.value=e:null),onUserData:Z},null,8,["isDrawerOpen"])])}}});export{Ft as default};
