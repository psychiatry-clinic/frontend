import{_ as ie}from"./AppTextField.vue_vue_type_script_setup_true_lang-CxhAA9zg.js";import{_ as ve}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-C76X6QRU.js";import{V as Q}from"./VCard-Bp-n6mxj.js";import{V as I}from"./VCardText-B3s4VqAO.js";import{V as ge}from"./VForm-DSBabaxY.js";import{V as be}from"./VTable-DpmrS2m6.js";import{V as j}from"./VCheckbox-D0nF89nS.js";import{d as W,r as c,a6 as X,w as F,o as f,g as M,f as t,b as e,e as a,x,n as o,aX as h,c as D,F as z,i as te,aj as K,v as U,a as ae,bb as B,bc as E,b5 as T,b3 as L,b4 as O,bn as J,bm as oe,da as he,db as Ve,dc as we,z as Y,a0 as C,b9 as xe}from"./index-CtKWXR1f.js";import{V as ye}from"./VDialog-JMiBdp4Q.js";import{a as P,V as se}from"./VRow-wVefHPDJ.js";import{V as ue}from"./VSpacer-mo66jKHS.js";import{V as q}from"./VAvatar-Cioy9C--.js";import{a as Ue}from"./formatters-DocrwTSm.js";import{_ as $e}from"./TablePagination.vue_vue_type_script_setup_true_lang-B3YS3LYr.js";import{_ as ke}from"./AppSelect.vue_vue_type_script_setup_true_lang-BI4YQV1C.js";import{_ as Ce}from"./AddNewUserDrawer.vue_vue_type_script_setup_true_lang-C274DUmU.js";import{u as De}from"./useApi-CoH36B53.js";import{c as Pe}from"./createUrl-5333VhMG.js";import{$ as ne}from"./api-Ddicx8wO.js";import{V as Re}from"./VDivider-DfDZL3qK.js";import{V as Ae}from"./VDataTableServer-dJbRfLLR.js";import{V as Me}from"./VImg-DZ-rodP_.js";import{V as Se}from"./VChip-DYqDojPr.js";import{V as Be}from"./VMenu-D9iKCvt9.js";import{V as Ee,a as Z,b as ee}from"./VList-Dzx6YNwD.js";import"./form-Bgif39SN.js";import"./VTextField-DhP3KMUS.js";/* empty css                   */import"./VCounter-C6GPP6-x.js";import"./index-D0p4QYlD.js";import"./index-BUJI5O_j.js";import"./VField-B3rRpEM3.js";import"./easing-CjukEv2V.js";import"./VInput-V8m5mUYp.js";import"./forwardRefs-C-GTDzx5.js";import"./createSimpleFunctional-DfppPX5g.js";import"./VCheckboxBtn-_XugU8JA.js";import"./VSelectionControl-Cpt18XeF.js";import"./VOverlay-CtS3PLv2.js";import"./lazy-DBdDxf2u.js";import"./scopeId-RDRHYTbi.js";import"./dialog-transition-Cotruf-s.js";/* empty css              */import"./helpers-BGv4x_9E.js";import"./VPagination-DhJXdj5k.js";import"./VSelect-C-E6mXSI.js";import"./validators-DR7cptrM.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-C_lW01lG.js";import"./vue3-perfect-scrollbar.esm-CQRTHFsy.js";import"./VNavigationDrawer-BFnTRS5x.js";import"./ssrBoot-CccmqE5a.js";import"./index-Dz1rBMAR.js";import"./VDataTable-5E0gZQCg.js";import"./filter-B1WGC2i5.js";import"./VSlideGroup-BEIQnT9U.js";const Te={class:"text-h4 text-center mb-2"},Le=a("p",{class:"text-body-1 text-center mb-6"}," Set Role Permissions ",-1),ze=a("h5",{class:"text-h5 my-6"}," Role Permissions ",-1),Ie=a("td",null,[a("h6",{class:"text-h6"}," Administrator Access ")],-1),Ne={colspan:"3"},je={class:"d-flex justify-end"},Fe={class:"text-h6"},Oe={class:"d-flex justify-end"},qe={class:"d-flex justify-end"},Qe={class:"d-flex justify-end"},Xe={class:"d-flex align-center justify-center gap-4"},Ke=W({__name:"AddEditRoleDialog",props:{rolePermissions:{default:()=>({name:"",permissions:[]})},isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible","update:rolePermissions"],setup(N,{emit:$}){const p=N,_=$,i=c([{name:"User Management",read:!1,write:!1,create:!1},{name:"Content Management",read:!1,write:!1,create:!1},{name:"Disputes Management",read:!1,write:!1,create:!1},{name:"Database Management",read:!1,write:!1,create:!1},{name:"Financial Management",read:!1,write:!1,create:!1},{name:"Reporting",read:!1,write:!1,create:!1},{name:"API Control",read:!1,write:!1,create:!1},{name:"Repository Management",read:!1,write:!1,create:!1},{name:"Payroll",read:!1,write:!1,create:!1}]),b=c(!1),V=c(""),u=c(),v=X(()=>{let n=0;return i.value.forEach(d=>{Object.entries(d).forEach(([k,R])=>{k!=="name"&&R&&n++})}),n}),w=X(()=>v.value>0&&v.value<i.value.length*3);F(b,n=>{i.value=i.value.map(d=>({...d,read:n,write:n,create:n}))}),F(w,()=>{w.value||(b.value=!1)}),F(i,()=>{v.value===i.value.length*3&&(b.value=!0)},{deep:!0}),F(p,()=>{p.rolePermissions&&p.rolePermissions.permissions.length&&(V.value=p.rolePermissions.name,i.value=i.value.map(n=>{var k;const d=(k=p.rolePermissions)==null?void 0:k.permissions.find(R=>R.name===n.name);return d?{...n,...d}:n}))});const r=()=>{var d;const n={name:V.value,permissions:i.value};_("update:rolePermissions",n),_("update:isDialogVisible",!1),b.value=!1,(d=u.value)==null||d.reset()},y=()=>{var n;_("update:isDialogVisible",!1),b.value=!1,(n=u.value)==null||n.reset()};return(n,d)=>{const k=ve,R=ie;return f(),M(ye,{width:n.$vuetify.display.smAndDown?"auto":900,"model-value":p.isDialogVisible,"onUpdate:modelValue":y},{default:t(()=>[e(k,{onClick:y}),e(Q,{class:"pa-sm-10 pa-2"},{default:t(()=>[e(I,null,{default:t(()=>[a("h4",Te,x(p.rolePermissions.name?"Edit":"Add New")+" Role ",1),Le,e(o(ge),{ref_key:"refPermissionForm",ref:u},{default:t(()=>[e(R,{modelValue:o(V),"onUpdate:modelValue":d[0]||(d[0]=m=>h(V)?V.value=m:null),label:"Role Name",placeholder:"Enter Role Name"},null,8,["modelValue"]),ze,e(be,{class:"permission-table text-no-wrap mb-6"},{default:t(()=>[a("tr",null,[Ie,a("td",Ne,[a("div",je,[e(j,{modelValue:o(b),"onUpdate:modelValue":d[1]||(d[1]=m=>h(b)?b.value=m:null),indeterminate:o(w),"onUpdate:indeterminate":d[2]||(d[2]=m=>h(w)?w.value=m:null),label:"Select All"},null,8,["modelValue","indeterminate"])])])]),(f(!0),D(z,null,te(o(i),m=>(f(),D("tr",{key:m.name},[a("td",null,[a("h6",Fe,x(m.name),1)]),a("td",null,[a("div",Oe,[e(j,{modelValue:m.read,"onUpdate:modelValue":A=>m.read=A,label:"Read"},null,8,["modelValue","onUpdate:modelValue"])])]),a("td",null,[a("div",qe,[e(j,{modelValue:m.write,"onUpdate:modelValue":A=>m.write=A,label:"Write"},null,8,["modelValue","onUpdate:modelValue"])])]),a("td",null,[a("div",Qe,[e(j,{modelValue:m.create,"onUpdate:modelValue":A=>m.create=A,label:"Create"},null,8,["modelValue","onUpdate:modelValue"])])])]))),128))]),_:1}),a("div",Xe,[e(K,{onClick:r},{default:t(()=>[U(" Submit ")]),_:1}),e(K,{color:"secondary",variant:"tonal",onClick:y},{default:t(()=>[U(" Cancel ")]),_:1})])]),_:1},512)]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}}),We=""+new URL("girl-using-mobile-CKXBkoEQ.png",import.meta.url).href,Ge={class:"text-body-1"},He={class:"v-avatar-group"},Je={class:"d-flex justify-space-between align-center"},Ye={class:"text-h5"},Ze={class:"d-flex align-center"},et=["onClick"],tt=["src"],at=a("div",{class:"text-end"},[U(" Add new role,"),a("br"),U(" if it doesn't exist. ")],-1),st=W({__name:"RoleCards",setup(N){const $=c([{role:"Administrator",users:[B,E,T,L],details:{name:"Administrator",permissions:[{name:"User Management",read:!0,write:!0,create:!0},{name:"Disputes Management",read:!0,write:!0,create:!0},{name:"API Control",read:!0,write:!0,create:!0}]}},{role:"Manager",users:[B,E,T,L,O,J,oe],details:{name:"Manager",permissions:[{name:"Reporting",read:!0,write:!0,create:!1},{name:"Payroll",read:!0,write:!0,create:!0},{name:"User Management",read:!0,write:!0,create:!0}]}},{role:"Users",users:[B,E,T,L,O],details:{name:"Users",permissions:[{name:"User Management",read:!0,write:!1,create:!1},{name:"Content Management",read:!0,write:!1,create:!1},{name:"Disputes Management",read:!0,write:!1,create:!1},{name:"Database Management",read:!0,write:!1,create:!1}]}},{role:"Support",users:[B,E,T,L,O,J],details:{name:"Support",permissions:[{name:"Repository Management",read:!0,write:!0,create:!1},{name:"Content Management",read:!0,write:!0,create:!1},{name:"Database Management",read:!0,write:!0,create:!1}]}},{role:"Restricted User",users:[B,E,T,L,O,J,oe,he,Ve,we],details:{name:"Restricted User",permissions:[{name:"User Management",read:!0,write:!1,create:!1},{name:"Content Management",read:!0,write:!1,create:!1},{name:"Disputes Management",read:!0,write:!1,create:!1},{name:"Database Management",read:!0,write:!1,create:!1}]}}]),p=c(!1),_=c(),i=c(!1),b=V=>{p.value=!0,_.value=V};return(V,u)=>{const v=ae("IconBtn"),w=Ke;return f(),D(z,null,[e(se,null,{default:t(()=>[(f(!0),D(z,null,te(o($),r=>(f(),M(P,{key:r.role,cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(Q,null,{default:t(()=>[e(I,{class:"d-flex align-center pb-4"},{default:t(()=>[a("div",Ge," Total "+x(r.users.length)+" users ",1),e(ue),a("div",He,[(f(!0),D(z,null,te(r.users,(y,n)=>(f(),D(z,{key:y},[r.users.length>4&&r.users.length!==4&&n<3?(f(),M(q,{key:0,size:"40",image:y},null,8,["image"])):Y("",!0),r.users.length===4?(f(),M(q,{key:1,size:"40",image:y},null,8,["image"])):Y("",!0)],64))),128)),r.users.length>4?(f(),M(q,{key:0,color:V.$vuetify.theme.current.dark?"#373B50":"#EEEDF0"},{default:t(()=>[a("span",null," +"+x(r.users.length-3),1)]),_:2},1032,["color"])):Y("",!0)])]),_:2},1024),e(I,null,{default:t(()=>[a("div",Je,[a("div",null,[a("h5",Ye,x(r.role),1),a("div",Ze,[a("a",{href:"javascript:void(0)",onClick:y=>b(r.details)}," Edit Role ",8,et)])]),e(v,null,{default:t(()=>[e(C,{icon:"tabler-copy",class:"text-high-emphasis"})]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(P,{cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(Q,{class:"h-100",ripple:!1},{default:t(()=>[e(se,{"no-gutters":"",class:"h-100"},{default:t(()=>[e(P,{cols:"5",class:"d-flex flex-column justify-end align-center mt-5"},{default:t(()=>[a("img",{width:"85",src:o(We)},null,8,tt)]),_:1}),e(P,{cols:"7"},{default:t(()=>[e(I,{class:"d-flex flex-column align-end justify-end gap-4"},{default:t(()=>[e(K,{size:"small",onClick:u[0]||(u[0]=r=>i.value=!0)},{default:t(()=>[U(" Add New Role ")]),_:1}),at]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{"is-dialog-visible":o(i),"onUpdate:isDialogVisible":u[1]||(u[1]=r=>h(i)?i.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(w,{"is-dialog-visible":o(p),"onUpdate:isDialogVisible":u[2]||(u[2]=r=>h(p)?p.value=r:null),"role-permissions":o(_),"onUpdate:rolePermissions":u[3]||(u[3]=r=>h(_)?_.value=r:null)},null,8,["is-dialog-visible","role-permissions"])],64)}}}),lt={class:"d-flex gap-2 align-center"},rt=a("p",{class:"text-body-1 mb-0"}," Show ",-1),ot={class:"d-flex align-center flex-wrap gap-4"},nt={class:"d-flex align-center gap-x-4"},it={key:1},ut={class:"d-flex flex-column"},dt={class:"text-base"},mt={class:"text-sm"},ct={class:"d-flex align-center gap-x-2"},pt={class:"text-capitalize text-high-emphasis text-body-1"},ft={class:"text-body-1 text-high-emphasis text-capitalize"},_t=W({__name:"UserList",async setup(N){let $,p;const _=c(""),i=c(),b=c(),V=c(),u=c(10),v=c(1),w=c(),r=c(),y=g=>{var l,S;w.value=(l=g.sortBy[0])==null?void 0:l.key,r.value=(S=g.sortBy[0])==null?void 0:S.order},n=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:d,execute:k}=([$,p]=xe(()=>De(Pe("/apps/users",{query:{q:_,status:V,plan:b,role:i,itemsPerPage:u,page:v,sortBy:w,orderBy:r}}))),$=await $,p(),$),R=X(()=>d.value.users),m=X(()=>d.value.totalUsers),A=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],G=g=>{const l=g.toLowerCase();return l==="subscriber"?{color:"primary",icon:"tabler-user"}:l==="author"?{color:"warning",icon:"tabler-settings"}:l==="maintainer"?{color:"success",icon:"tabler-chart-donut"}:l==="editor"?{color:"info",icon:"tabler-pencil"}:l==="admin"?{color:"error",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"}},de=g=>{const l=g.toLowerCase();return l==="pending"?"warning":l==="active"?"success":l==="inactive"?"secondary":"primary"},H=c(!1),me=async g=>{await ne("/apps/users",{method:"POST",body:g}),k()},le=async g=>{await ne(`/apps/users/${g}`,{method:"DELETE"}),k()};return(g,l)=>{const S=ke,ce=ie,pe=ae("RouterLink"),re=ae("IconBtn"),fe=$e;return f(),D("section",null,[e(Q,null,{default:t(()=>[e(I,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[a("div",lt,[rt,e(S,{"model-value":o(u),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":l[0]||(l[0]=s=>u.value=parseInt(s,10))},null,8,["model-value"])]),e(ue),a("div",ot,[e(ce,{modelValue:o(_),"onUpdate:modelValue":l[1]||(l[1]=s=>h(_)?_.value=s:null),placeholder:"Search User",style:{"inline-size":"15.625rem"}},null,8,["modelValue"]),e(S,{modelValue:o(i),"onUpdate:modelValue":l[2]||(l[2]=s=>h(i)?i.value=s:null),placeholder:"Select Role",items:A,clearable:"","clear-icon":"tabler-x",style:{"inline-size":"10rem"}},null,8,["modelValue"])])]),_:1}),e(Re),e(Ae,{"items-per-page":o(u),"onUpdate:itemsPerPage":l[4]||(l[4]=s=>h(u)?u.value=s:null),page:o(v),"onUpdate:page":l[5]||(l[5]=s=>h(v)?v.value=s:null),"items-per-page-options":[{value:10,title:"10"},{value:20,title:"20"},{value:50,title:"50"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],items:o(R),"items-length":o(m),headers:n,class:"text-no-wrap","show-select":"","onUpdate:options":y},{"item.user":t(({item:s})=>[a("div",nt,[e(q,{size:"34",variant:s.avatar?void 0:"tonal",color:s.avatar?void 0:G(s.role).color},{default:t(()=>[s.avatar?(f(),M(Me,{key:0,src:s.avatar},null,8,["src"])):(f(),D("span",it,x(("avatarText"in g?g.avatarText:o(Ue))(s.fullName)),1))]),_:2},1032,["variant","color"]),a("div",ut,[a("h6",dt,[e(pe,{to:{name:"apps-user-view-id",params:{id:s.id}},class:"font-weight-medium text-link"},{default:t(()=>[U(x(s.fullName),1)]),_:2},1032,["to"])]),a("div",mt,x(s.email),1)])])]),"item.role":t(({item:s})=>[a("div",ct,[e(C,{size:22,icon:G(s.role).icon,color:G(s.role).color},null,8,["icon","color"]),a("div",pt,x(s.role),1)])]),"item.plan":t(({item:s})=>[a("div",ft,x(s.currentPlan),1)]),"item.status":t(({item:s})=>[e(Se,{color:de(s.status),size:"small",label:"",class:"text-capitalize"},{default:t(()=>[U(x(s.status),1)]),_:2},1032,["color"])]),"item.actions":t(({item:s})=>[e(re,{onClick:_e=>le(s.id)},{default:t(()=>[e(C,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(re,null,{default:t(()=>[e(C,{icon:"tabler-eye"})]),_:1}),e(K,{icon:"",variant:"text",color:"medium-emphasis"},{default:t(()=>[e(C,{icon:"tabler-dots-vertical"}),e(Be,{activator:"parent"},{default:t(()=>[e(Ee,null,{default:t(()=>[e(Z,{to:{name:"apps-user-view-id",params:{id:s.id}}},{prepend:t(()=>[e(C,{icon:"tabler-eye"})]),default:t(()=>[e(ee,null,{default:t(()=>[U("View")]),_:1})]),_:2},1032,["to"]),e(Z,{link:""},{prepend:t(()=>[e(C,{icon:"tabler-pencil"})]),default:t(()=>[e(ee,null,{default:t(()=>[U("Edit")]),_:1})]),_:1}),e(Z,{onClick:_e=>le(s.id)},{prepend:t(()=>[e(C,{icon:"tabler-trash"})]),default:t(()=>[e(ee,null,{default:t(()=>[U("Delete")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:t(()=>[e(fe,{page:o(v),"onUpdate:page":l[3]||(l[3]=s=>h(v)?v.value=s:null),"items-per-page":o(u),"total-items":o(m)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items-per-page-options","items","items-length"])]),_:1}),e(Ce,{isDrawerOpen:o(H),"onUpdate:isDrawerOpen":l[6]||(l[6]=s=>h(H)?H.value=s:null),onUserData:me},null,8,["isDrawerOpen"])])}}}),vt=a("h4",{class:"text-h4 mb-1"}," Roles List ",-1),gt=a("p",{class:"text-body-1 mb-0"}," A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ",-1),bt=a("h4",{class:"text-h4 mb-1 mt-6"}," Total users with their roles ",-1),ht=a("p",{class:"text-body-1 mb-0"}," Find all of your company’s administrator accounts and their associate roles. ",-1),wa=W({__name:"index",setup(N){return($,p)=>(f(),M(se,null,{default:t(()=>[e(P,{cols:"12"},{default:t(()=>[vt,gt]),_:1}),e(P,{cols:"12"},{default:t(()=>[e(st)]),_:1}),e(P,{cols:"12"},{default:t(()=>[bt,ht]),_:1}),e(P,{cols:"12"},{default:t(()=>[e(_t)]),_:1})]),_:1}))}});export{wa as default};
