import{a as _e,k as fe}from"./formatters-DocrwTSm.js";import{_ as be}from"./ConfirmDialog.vue_vue_type_script_setup_true_lang-DPXlzQRk.js";import{_ as ee}from"./AppSelect.vue_vue_type_script_setup_true_lang-DhpyrUw1.js";import{_ as he}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-B2Ll9o-7.js";import{d as N,r as w,a,o as x,g as S,f as o,b as e,e as t,n as s,ad as B,v as d,c as j,x as i,z as J,F as z,i as F,Q as ve,R as ge,aq as te,a4 as q,s as xe,ar as M,as as G,am as Y,bG as Ve,bD as H,aE as X,bH as ye,al as we,bI as De,bJ as $e,ak as Z,aD as Ce,bK as ke,bL as Te,bM as Pe,aj as Ae,j as Ie}from"./index-DrFL9zv-.js";import{_ as Ue}from"./UserInfoEditDialog.vue_vue_type_script_setup_true_lang-BhGCXCvG.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ae}from"./TablePagination.vue_vue_type_script_setup_true_lang-ClsTNhYF.js";import{_ as se}from"./MoreBtn.vue_vue_type_script_setup_true_lang--Q98wTdS.js";import{_ as le}from"./AppTextField.vue_vue_type_script_setup_true_lang-CZ5Ws0u7.js";import{u as ne}from"./useApi-CF-Kf49g.js";import{c as Se}from"./createUrl-BtuJzAQ-.js";import{$ as Be}from"./api-Bb9MUQYX.js";import{p as Ee}from"./pdf-CjLd7jFM.js";import{_ as je}from"./AddEditAddressDialog.vue_vue_type_script_setup_true_lang-D8Ti8Hkl.js";import{_ as Le,a as ze}from"./TwoFactorAuthDialog.vue_vue_type_script_setup_true_lang-GorKf0-M.js";import{m as Ne,v as Re,g as Me,s as Fe,a as We,b as Oe,c as He,f as Je,t as qe,l as Ge,d as Ye,e as Ke}from"./twitter-1yzK7rjs.js";import"./helpers-BGv4x_9E.js";import"./validators-DR7cptrM.js";import"./suggestions-DtVrTijw.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-YWI8lO30.js";import"./AppAutocomplete.vue_vue_type_script_setup_true_lang-BGs8UniO.js";import"./myFormat-D_0w4-pK.js";import"./differenceInYears-BdTDs0wt.js";import"./index-B3bPRkoL.js";import"./CustomRadiosWithIcon-DZ16BWXL.js";import"./office-Cuvo0JQB.js";import"./CustomRadios-CJNUlgu8.js";const Qe=t("h4",{class:"text-h4 text-center mb-2"}," Upgrade Plan ",-1),Xe=t("p",{class:"text-body-1 text-center mb-6"}," Choose the best plan for user. ",-1),Ze={class:"d-flex justify-space-between flex-column flex-sm-row gap-4"},et=t("p",{class:"text-body-1 mb-1"}," User current plan is standard plan ",-1),tt={class:"d-flex justify-space-between align-center flex-wrap"},ot=t("div",{class:"d-flex align-center gap-1 me-3"},[t("sup",{class:"text-body-1 text-primary"},"$"),t("h1",{class:"text-h1 text-primary"}," 99 "),t("sub",{class:"text-body-2 mt-5"}," / month ")],-1),ie=N({__name:"UserUpgradePlanDialog",props:{isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible"],setup(E,{emit:n}){const D=E,V=n,p=w("standard"),h=[{desc:"Standard - $99/month",title:"Standard",value:"standard"},{desc:"Basic - $0/month",title:"Basic",value:"basic"},{desc:"Enterprise - $499/month",title:"Enterprise",value:"enterprice"},{desc:"Company - $999/month",title:"Company",value:"company"}],r=w(!1),_=c=>{V("update:isDialogVisible",c)};return(c,v)=>{const g=he,l=ee,C=a("VBtn"),y=a("VDivider"),A=a("VCardText"),$=be,f=a("VCard"),b=a("VDialog");return x(),S(b,{width:c.$vuetify.display.smAndDown?"auto":650,"model-value":D.isDialogVisible,"onUpdate:modelValue":_},{default:o(()=>[e(g,{onClick:v[0]||(v[0]=I=>_(!1))}),e(f,{class:"pa-2 pa-sm-10"},{default:o(()=>[e(A,null,{default:o(()=>[Qe,Xe,t("div",Ze,[e(l,{modelValue:s(p),"onUpdate:modelValue":v[1]||(v[1]=I=>B(p)?p.value=I:null),items:h,label:"Choose a plan",placeholder:"Basic"},null,8,["modelValue"]),e(C,{class:"align-self-end",block:c.$vuetify.display.xs},{default:o(()=>[d(" Upgrade ")]),_:1},8,["block"])]),e(y,{class:"my-6"}),et,t("div",tt,[ot,e(C,{color:"error",variant:"tonal",onClick:v[2]||(v[2]=I=>r.value=!0)},{default:o(()=>[d(" Cancel Subscription ")]),_:1})])]),_:1}),e($,{isDialogVisible:s(r),"onUpdate:isDialogVisible":v[3]||(v[3]=I=>B(r)?r.value=I:null),"cancel-title":"Cancelled","confirm-title":"Unsubscribed!","confirm-msg":"Your subscription cancelled successfully.","confirmation-question":"Are you sure to cancel your subscription?","cancel-msg":"Unsubscription Cancelled!!"},null,8,["isDialogVisible"])]),_:1})]),_:1},8,["width","model-value"])}}}),W=E=>(ve("data-v-b3384cfe"),E=E(),ge(),E),at={key:1,class:"text-5xl font-weight-medium"},st={class:"text-h5 mt-4"},lt={class:"d-flex justify-space-around gap-x-6 gap-y-2 flex-wrap mb-6"},nt={class:"d-flex align-center me-8"},it={class:"text-h5"},rt=W(()=>t("span",{class:"text-sm"},"Task Done",-1)),ct={class:"d-flex align-center me-4"},dt={class:"text-h5"},ut=W(()=>t("span",{class:"text-sm"},"Project Done",-1)),pt=W(()=>t("h5",{class:"text-h5"}," Details ",-1)),mt={class:"text-h6"},_t={class:"d-inline-block text-body-1"},ft=W(()=>t("span",{class:"text-h6"}," Billing Email: ",-1)),bt={class:"text-body-1"},ht={class:"text-h6"},vt={class:"d-inline-block text-body-1 text-capitalize"},gt={class:"text-h6"},xt={class:"d-inline-block text-capitalize text-body-1"},Vt={class:"text-h6"},yt={class:"d-inline-block text-body-1"},wt={class:"text-h6"},Dt={class:"d-inline-block text-body-1"},$t={class:"text-h6"},Ct={class:"d-inline-block text-body-1"},kt={class:"text-h6"},Tt={class:"d-inline-block text-body-1"},Pt=W(()=>t("div",{class:"d-flex align-center"},[t("sup",{class:"text-h5 text-primary mt-1"},"$"),t("h1",{class:"text-h1 text-primary"}," 99 "),t("sub",{class:"mt-3"},[t("h6",{class:"text-h6 font-weight-regular mb-n1"},"/ month")])],-1)),At={class:"d-flex align-center gap-x-2"},It={class:"text-medium-emphasis"},Ut={class:"my-6"},St=W(()=>t("div",{class:"d-flex justify-space-between mb-1"},[t("h6",{class:"text-h6"}," Days "),t("h6",{class:"text-h6"}," 26 of 30 Days ")],-1)),Bt=W(()=>t("p",{class:"mt-1"}," 4 days remaining ",-1)),Et={class:"d-flex gap-4"},jt=N({__name:"UserBioPanel",props:{userData:{}},setup(E){const n=E,D={plan:"Standard",price:99,benefits:["10 Users","Up to 10GB storage","Basic Support"]},V=w(!1),p=w(!1),h=r=>r==="subscriber"?{color:"warning",icon:"tabler-user"}:r==="author"?{color:"success",icon:"tabler-circle-check"}:r==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:r==="editor"?{color:"info",icon:"tabler-pencil"}:r==="admin"?{color:"secondary",icon:"tabler-server-2"}:{color:"primary",icon:"tabler-user"};return(r,_)=>{const c=a("VImg"),v=a("VAvatar"),g=a("VChip"),l=a("VCardText"),C=a("VIcon"),y=a("VDivider"),A=a("VListItemTitle"),$=a("VListItem"),f=a("VList"),b=a("VBtn"),I=a("VCard"),m=a("VCol"),k=a("VSpacer"),L=a("VProgressLinear"),U=a("VRow"),T=Ue,R=ie;return x(),j(z,null,[e(U,null,{default:o(()=>[e(m,{cols:"12"},{default:o(()=>[n.userData?(x(),S(I,{key:0},{default:o(()=>[e(l,{class:"text-center pt-12"},{default:o(()=>[e(v,{rounded:"",size:100,color:n.userData.avatar?void 0:"primary",variant:n.userData.avatar?void 0:"tonal"},{default:o(()=>[n.userData.avatar?(x(),S(c,{key:0,src:n.userData.avatar},null,8,["src"])):(x(),j("span",at,i(("avatarText"in r?r.avatarText:s(_e))(n.userData.fullName)),1))]),_:1},8,["color","variant"]),t("h5",st,i(n.userData.fullName),1),e(g,{label:"",color:h(n.userData.role).color,size:"small",class:"text-capitalize mt-4"},{default:o(()=>[d(i(n.userData.role),1)]),_:1},8,["color"])]),_:1}),e(l,null,{default:o(()=>[t("div",lt,[t("div",nt,[e(v,{size:40,rounded:"",color:"primary",variant:"tonal",class:"me-4"},{default:o(()=>[e(C,{icon:"tabler-checkbox",size:"24"})]),_:1}),t("div",null,[t("h5",it,i(`${(n.userData.taskDone/1e3).toFixed(2)}k`),1),rt])]),t("div",ct,[e(v,{size:38,rounded:"",color:"primary",variant:"tonal",class:"me-4"},{default:o(()=>[e(C,{icon:"tabler-briefcase",size:"24"})]),_:1}),t("div",null,[t("h5",dt,i(("kFormatter"in r?r.kFormatter:s(fe))(n.userData.projectDone)),1),ut])])]),pt,e(y,{class:"my-4"}),e(f,{class:"card-list mt-2"},{default:o(()=>[e($,null,{default:o(()=>[e(A,null,{default:o(()=>[t("h6",mt,[d(" Username: "),t("div",_t,i(n.userData.fullName),1)])]),_:1})]),_:1}),e($,null,{default:o(()=>[e(A,null,{default:o(()=>[ft,t("span",bt,i(n.userData.email),1)]),_:1})]),_:1}),e($,null,{default:o(()=>[e(A,null,{default:o(()=>[t("h6",ht,[d(" Status: "),t("div",vt,i(n.userData.status),1)])]),_:1})]),_:1}),e($,null,{default:o(()=>[e(A,null,{default:o(()=>[t("h6",gt,[d(" Role: "),t("div",xt,i(n.userData.role),1)])]),_:1})]),_:1}),e($,null,{default:o(()=>[e(A,null,{default:o(()=>[t("h6",Vt,[d(" Tax ID: "),t("div",yt,i(n.userData.taxId),1)])]),_:1})]),_:1}),e($,null,{default:o(()=>[e(A,null,{default:o(()=>[t("h6",wt,[d(" Contact: "),t("div",Dt,i(n.userData.contact),1)])]),_:1})]),_:1}),e($,null,{default:o(()=>[e(A,null,{default:o(()=>[t("h6",$t,[d(" Language: "),t("div",Ct,i(n.userData.language),1)])]),_:1})]),_:1}),e($,null,{default:o(()=>[e(A,null,{default:o(()=>[t("h6",kt,[d(" Country: "),t("div",Tt,i(n.userData.country),1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{class:"d-flex justify-center gap-x-4"},{default:o(()=>[e(b,{variant:"elevated",onClick:_[0]||(_[0]=u=>V.value=!0)},{default:o(()=>[d(" Edit ")]),_:1}),e(b,{variant:"tonal",color:"error"},{default:o(()=>[d(" Suspend ")]),_:1})]),_:1})]),_:1})):J("",!0)]),_:1}),e(m,{cols:"12"},{default:o(()=>[e(I,null,{default:o(()=>[e(l,{class:"d-flex"},{default:o(()=>[e(g,{label:"",color:"primary",size:"small",class:"font-weight-medium"},{default:o(()=>[d(" Popular ")]),_:1}),e(k),Pt]),_:1}),e(l,null,{default:o(()=>[e(f,{class:"card-list"},{default:o(()=>[(x(!0),j(z,null,F(D.benefits,u=>(x(),S($,{key:u},{default:o(()=>[t("div",At,[e(C,{size:"10",color:"secondary",icon:"tabler-circle-filled"}),t("div",It,i(u),1)])]),_:2},1024))),128))]),_:1}),t("div",Ut,[St,e(L,{rounded:"","rounded-bar":"","model-value":65,color:"primary"}),Bt]),t("div",Et,[e(b,{block:"",onClick:_[1]||(_[1]=u=>p.value=!0)},{default:o(()=>[d(" Upgrade Plan ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),e(T,{isDialogVisible:s(V),"onUpdate:isDialogVisible":_[2]||(_[2]=u=>B(V)?V.value=u:null),"user-data":n.userData},null,8,["isDialogVisible","user-data"]),e(R,{isDialogVisible:s(p),"onUpdate:isDialogVisible":_[3]||(_[3]=u=>B(p)?p.value=u:null)},null,8,["isDialogVisible"])],64)}}}),Lt=oe(jt,[["__scopeId","data-v-b3384cfe"]]),zt={key:0},Nt={class:"d-flex align-center justify-space-between flex-wrap gap-4"},Rt=t("div",{class:"text-h5"}," Invoice List ",-1),Mt={class:"d-flex align-center gap-x-4"},Ft={class:"mb-0"},Wt={class:"mb-0"},Ot={class:"mb-0"},Ht=N({__name:"UserInvoiceTable",async setup(E){let n,D;const V=w(""),p=w(),h=w(10),r=w(1),_=w(),c=w(),v=m=>{var k,L;_.value=(k=m.sortBy[0])==null?void 0:k.key,c.value=(L=m.sortBy[0])==null?void 0:L.order},g=w(!1),l=[{title:"#",key:"id"},{title:"Status",key:"trending",sortable:!1},{title:"Total",key:"total"},{title:"Issued Date",key:"date"},{title:"Actions",key:"actions",sortable:!1}],{data:C,execute:y}=([n,D]=te(()=>ne(Se("/apps/invoice",{query:{q:V,status:p,itemsPerPage:h,page:r,sortBy:_,orderBy:c}}))),n=await n,D(),n),A=q(()=>{var m;return(m=C.value)==null?void 0:m.invoices}),$=q(()=>{var m;return(m=C.value)==null?void 0:m.totalInvoices}),f=m=>m==="Partial Payment"?{variant:"success",icon:"tabler-check"}:m==="Paid"?{variant:"warning",icon:"tabler-chart-pie"}:m==="Downloaded"?{variant:"info",icon:"tabler-arrow-down"}:m==="Draft"?{variant:"primary",icon:"tabler-folder"}:m==="Sent"?{variant:"secondary",icon:"tabler-mail"}:m==="Past Due"?{variant:"error",icon:"tabler-info-circle"}:{variant:"secondary",icon:"tabler-x"},b=q(()=>m=>[{title:"Download",value:"download",prependIcon:"tabler-download"},{title:"Edit",value:"edit",prependIcon:"tabler-pencil",to:{name:"apps-invoice-edit-id",params:{id:m}}},{title:"Duplicate",value:"duplicate",prependIcon:"tabler-layers-intersect"}]),I=async m=>{await Be(`/apps/invoice/${m}`,{method:"DELETE"}),y()};return(m,k)=>{const L=ee,U=a("VBtn"),T=a("VCardText"),R=a("VDivider"),u=a("RouterLink"),O=a("VIcon"),re=a("VAvatar"),ce=a("VTooltip"),K=a("IconBtn"),de=se,ue=ae,pe=a("VDataTableServer"),me=a("VCard");return s(A)?(x(),j("section",zt,[e(me,{id:"invoice-list"},{default:o(()=>[e(T,null,{default:o(()=>[t("div",Nt,[Rt,t("div",Mt,[e(L,{"model-value":s(h),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":k[0]||(k[0]=P=>h.value=parseInt(P,10))},null,8,["model-value"]),e(U,{"append-icon":"tabler-upload",variant:"tonal",color:"secondary"},{default:o(()=>[d(" Export ")]),_:1})])])]),_:1}),e(R),e(pe,{"items-per-page":s(h),"onUpdate:itemsPerPage":k[2]||(k[2]=P=>B(h)?h.value=P:null),page:s(r),"onUpdate:page":k[3]||(k[3]=P=>B(r)?r.value=P:null),loading:s(g),"items-length":s($),headers:l,items:s(A),"item-value":"total",class:"text-no-wrap text-sm rounded-0","onUpdate:options":v},{"item.id":o(({item:P})=>[e(u,{to:{name:"apps-invoice-preview-id",params:{id:P.id}}},{default:o(()=>[d(" #"+i(P.id),1)]),_:2},1032,["to"])]),"item.trending":o(({item:P})=>[e(ce,null,{activator:o(({props:Q})=>[e(re,xe({size:28},Q,{color:f(P.invoiceStatus).variant,variant:"tonal"}),{default:o(()=>[e(O,{size:16,icon:f(P.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:o(()=>[t("p",Ft,i(P.invoiceStatus),1),t("p",Wt," Balance: "+i(P.balance),1),t("p",Ot," Due date: "+i(P.dueDate),1)]),_:2},1024)]),"item.total":o(({item:P})=>[d(" $"+i(P.total),1)]),"item.date":o(({item:P})=>[d(i(P.issuedDate),1)]),"item.actions":o(({item:P})=>[e(K,{onClick:Q=>I(P.id)},{default:o(()=>[e(O,{icon:"tabler-trash"})]),_:2},1032,["onClick"]),e(K,{to:{name:"apps-invoice-preview-id",params:{id:P.id}}},{default:o(()=>[e(O,{icon:"tabler-eye"})]),_:2},1032,["to"]),e(de,{"menu-list":s(b)(P.id),color:"undefined","item-props":""},null,8,["menu-list"])]),bottom:o(()=>[e(ue,{page:s(r),"onUpdate:page":k[1]||(k[1]=P=>B(r)?r.value=P:null),"items-per-page":s(h),"total-items":s($)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items-length","items"])]),_:1})])):J("",!0)}}}),Jt=t("h5",{class:"text-h5"}," User's Projects List ",-1),qt={style:{"inline-size":"250px"}},Gt={class:"d-flex align-center gap-x-3"},Yt={class:"text-h6 text-no-wrap"},Kt={class:"text-body-2"},Qt={class:"text-base text-high-emphasis"},Xt={class:"d-flex"},Zt={class:"v-avatar-group"},eo={class:"text-caption text-high-emphasis"},to={class:"d-flex align-center gap-3"},oo={class:"flex-grow-1"},ao={class:"text-body-1 text-high-emphasis"},so=t("div",{class:"d-flex justify-space-between align-center gap-2 flex-wrap mb-2"},[t("span",{class:"app-timeline-title"}," 12 Invoices have been paid "),t("span",{class:"app-timeline-meta"},"12 min ago")],-1),lo=t("div",{class:"app-timeline-text mt-1"}," Invoices have been paid to the company ",-1),no={class:"d-inline-flex align-center timeline-chip mt-2"},io=["src"],ro=t("span",{class:"app-timeline-text font-weight-medium"}," invoice.pdf ",-1),co=t("div",{class:"d-flex justify-space-between align-center flex-wrap mb-2"},[t("div",{class:"app-timeline-title"}," Client Meeting "),t("span",{class:"app-timeline-meta"},"45 min ago")],-1),uo=t("div",{class:"app-timeline-text mt-1"}," Project meeting with john @10:15am ",-1),po={class:"d-flex justify-space-between align-center flex-wrap"},mo={class:"d-flex align-center mt-2"},_o=t("div",{class:"d-flex flex-column"},[t("p",{class:"text-sm font-weight-medium text-medium-emphasis mb-0"}," Lester McCarthy (Client) "),t("span",{class:"text-sm"},"CEO of ThemeSelection")],-1),fo=t("div",{class:"d-flex justify-space-between align-center flex-wrap mb-2"},[t("span",{class:"app-timeline-title"}," Create a new project for client "),t("span",{class:"app-timeline-meta"},"2 Day Ago")],-1),bo=t("p",{class:"app-timeline-text mt-1 mb-2"}," 6 team members in a project ",-1),ho={class:"v-avatar-group demo-avatar-group"},vo=N({__name:"UserTabAccount",setup(E){const n=[{title:"PROJECT",key:"project"},{title:"LEADER",key:"leader"},{title:"Team",key:"team"},{title:"PROGRESS",key:"progress"},{title:"Action",key:"Action",sortable:!1}],D=w(""),V=w({itemsPerPage:5,page:1}),p=[{logo:Ve,name:"BGC eCommerce App",project:"React Project",leader:"Eileen",progress:78,hours:"18:42",team:[M,H,X],extraMembers:3},{logo:ye,name:"Falcon Logo Design",project:"Figma Project",leader:"Owen",progress:25,hours:"20:42",team:[we,G]},{logo:De,name:"Dashboard Design",project:"Vuejs Project",leader:"Keith",progress:62,hours:"120:87",team:[H,G,M]},{logo:$e,name:"Foodista mobile app",project:"Xamarin Project",leader:"Merline",progress:8,hours:"120:87",team:[Y,Z,Ce],extraMembers:8},{logo:ke,name:"Dojo Email App",project:"Python Project",leader:"Harmonia",progress:51,hours:"230:10",team:[Z,Y,M],extraMembers:5},{logo:Te,name:"Blockchain Website",project:"Sketch Project",leader:"Allyson",progress:92,hours:"342:41",team:[M,H]},{logo:Pe,name:"Hoffman Website",project:"HTML Project",leader:"Georgie",progress:80,hours:"12:45",team:[M,H,X]}],h=[{title:"Download",value:"Download"},{title:"Delete",value:"Delete"},{title:"View",value:"View"}];return(r,_)=>{const c=le,v=a("VCardText"),g=a("VDivider"),l=a("VAvatar"),C=a("VImg"),y=a("VProgressLinear"),A=se,$=ae,f=a("VDataTable"),b=a("VCard"),I=a("VCol"),m=a("VTimelineItem"),k=a("VTooltip"),L=a("VTimeline"),U=a("VRow");return x(),S(U,null,{default:o(()=>[e(I,{cols:"12"},{default:o(()=>[e(b,null,{default:o(()=>[e(v,{class:"d-flex justify-space-between align-center flex-wrap gap-4"},{default:o(()=>[Jt,t("div",qt,[e(c,{modelValue:s(D),"onUpdate:modelValue":_[0]||(_[0]=T=>B(D)?D.value=T:null),placeholder:"Search Project"},null,8,["modelValue"])])]),_:1}),e(g),e(f,{page:s(V).page,"onUpdate:page":_[2]||(_[2]=T=>s(V).page=T),headers:n,"items-per-page":s(V).itemsPerPage,items:p,"item-value":"name","hide-default-footer":"",search:s(D),"show-select":"",class:"text-no-wrap"},{"item.project":o(({item:T})=>[t("div",Gt,[e(l,{size:34,image:T.logo},null,8,["image"]),t("div",null,[t("h6",Yt,i(T.name),1),t("div",Kt,i(T.project),1)])])]),"item.leader":o(({item:T})=>[t("div",Qt,i(T.leader),1)]),"item.team":o(({item:T})=>[t("div",Xt,[t("div",Zt,[(x(!0),j(z,null,F(T.team,(R,u)=>(x(),S(l,{key:u,size:"26"},{default:o(()=>[e(C,{src:R},null,8,["src"])]),_:2},1024))),128)),T.extraMembers?(x(),S(l,{key:0,color:r.$vuetify.theme.current.dark?"#373b50":"#eeedf0",size:26},{default:o(()=>[t("div",eo," +"+i(T.extraMembers),1)]),_:2},1032,["color"])):J("",!0)])])]),"item.progress":o(({item:T})=>[t("div",to,[t("div",oo,[e(y,{height:6,"model-value":T.progress,color:"primary",rounded:""},null,8,["model-value"])]),t("div",ao,i(T.progress)+"% ",1)])]),"item.Action":o(()=>[e(A,{"menu-list":h})]),bottom:o(()=>[e($,{page:s(V).page,"onUpdate:page":_[1]||(_[1]=T=>s(V).page=T),"items-per-page":s(V).itemsPerPage,"total-items":p.length},null,8,["page","items-per-page","total-items"])]),_:1},8,["page","items-per-page","search"])]),_:1})]),_:1}),e(I,{cols:"12"},{default:o(()=>[e(b,{title:"User Activity Timeline"},{default:o(()=>[e(v,null,{default:o(()=>[e(L,{side:"end",align:"start","line-inset":"8","truncate-line":"start",density:"compact"},{default:o(()=>[e(m,{"dot-color":"primary",size:"x-small"},{default:o(()=>[so,lo,t("div",no,[t("img",{src:s(Ee),height:"20",class:"me-2",alt:"img"},null,8,io),ro])]),_:1}),e(m,{size:"x-small","dot-color":"success"},{default:o(()=>[co,uo,t("div",po,[t("div",mo,[e(l,{size:"32",class:"me-2",image:s(M)},null,8,["image"]),_o])])]),_:1}),e(m,{size:"x-small","dot-color":"info"},{default:o(()=>[fo,bo,t("div",ho,[e(l,{size:40},{default:o(()=>[e(C,{src:s(M)},null,8,["src"]),e(k,{activator:"parent",location:"top"},{default:o(()=>[d(" John Doe ")]),_:1})]),_:1}),e(l,{size:40},{default:o(()=>[e(C,{src:s(G)},null,8,["src"]),e(k,{activator:"parent",location:"top"},{default:o(()=>[d(" Jennie Obrien ")]),_:1})]),_:1}),e(l,{size:40},{default:o(()=>[e(C,{src:s(Y)},null,8,["src"]),e(k,{activator:"parent",location:"top"},{default:o(()=>[d(" Peter Harper ")]),_:1})]),_:1}),e(l,{size:40,color:r.$vuetify.theme.current.dark?"#373b50":"#eeedf0"},{default:o(()=>[d(" +3 ")]),_:1},8,["color"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(I,{cols:"12"},{default:o(()=>[e(Ht)]),_:1})]),_:1})}}}),go=""+new URL("american-express-01wsbv3N.png",import.meta.url).href,xo=t("h6",{class:"text-h6 mb-1"}," Your Current Plan is Basic ",-1),Vo=t("p",null," A simple start for everyone ",-1),yo=t("h6",{class:"text-h6 mb-1"}," Active until Dec 09, 2021 ",-1),wo=t("p",null," We will send you a notification upon Subscription expiration ",-1),Do={class:"text-h6 mb-1"},$o=t("span",{class:"d-inline-block me-2"},"$99 Per Month",-1),Co=t("p",{class:"mb-0"}," Standard plan for small to medium businesses ",-1),ko=t("div",{class:"text-base"}," Your plan requires update ",-1),To=t("div",{class:"d-flex justify-space-between font-weight-bold mt-4 mb-2"},[t("h6",{class:"text-h6"}," Days "),t("h6",{class:"text-h6"}," 26 of 30 Days ")],-1),Po=t("p",{class:"text-sm mt-1"}," Your plan requires update ",-1),Ao={class:"d-flex flex-wrap gap-4"},Io={class:"text-no-wrap"},Uo=["src"],So={class:"my-2 d-flex gap-x-2 align-center"},Bo={class:"text-h6"},Eo={class:"text-body-1"},jo={class:"d-flex flex-column text-sm-end gap-y-4"},Lo={class:"order-sm-0 order-1"},zo={class:"order-sm-1 order-0 text-sm"},No=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Company Name: ")],-1),Ro={class:"text-body-1 mb-2"},Mo=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Billing Email: ")],-1),Fo={class:"text-body-1 mb-2"},Wo=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Tax ID: ")],-1),Oo={class:"text-body-1 mb-2"},Ho=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," VAT Number: ")],-1),Jo={class:"text-body-1 mb-2"},qo=t("td",{class:"d-flex align-baseline"},[t("h6",{class:"text-h6 text-no-wrap"}," Billing Address: ")],-1),Go={class:"text-body-1 mb-2"},Yo=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Contact: ")],-1),Ko={class:"text-body-1 mb-2"},Qo=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Country: ")],-1),Xo={class:"text-body-1 mb-2"},Zo=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," State: ")],-1),ea={class:"text-body-1 mb-2"},ta=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Zip Code: ")],-1),oa={class:"text-body-1 mb-2"},aa=N({__name:"UserTabBillingsPlans",setup(E){const n=w(!1),D=w(),V=w(!1),p=w(!1),h=w(!1),r=g=>{D.value=g,V.value=!0},_=[{name:"Tom McBride",number:"4851234567899865",expiry:"12/24",isPrimary:!0,isExpired:!1,type:"mastercard",cvv:"123",image:Ne},{name:"Mildred Wagner",number:"5531234567895678",expiry:"02/24",isPrimary:!1,isExpired:!1,type:"visa",cvv:"456",image:Re},{name:"Lester Jennings",number:"5531234567890002",expiry:"08/20",isPrimary:!1,isExpired:!0,type:"visa",cvv:"456",image:go}],c={companyName:"Pixinvent",billingEmail:"gertrude@gmail.com",taxID:"TAX-875623",vatNumber:"SDF754K77",address:"100 Water Plant Avenue, Building 1303 Wake Island",contact:"+1(609) 933-44-22",country:"USA",state:"Queensland",zipCode:403114},v={firstName:"Shamus",lastName:"Tuttle",selectedCountry:"USA",addressLine1:"45 Rocker Terrace",addressLine2:"Latheronwheel",landmark:"KW5 8NW, London",contact:"+1 (609) 972-22-22",country:"USA",city:"London",state:"London",zipCode:110001};return(g,l)=>{const C=a("VChip"),y=a("VCol"),A=a("VAlertTitle"),$=a("VAlert"),f=a("VProgressLinear"),b=a("VBtn"),I=a("VRow"),m=a("VCardText"),k=a("VCard"),L=a("VTable"),U=Le,T=je,R=ie;return x(),j(z,null,[e(I,null,{default:o(()=>[e(y,{cols:"12"},{default:o(()=>[e(k,{title:"Current Plan"},{default:o(()=>[e(m,null,{default:o(()=>[e(I,null,{default:o(()=>[e(y,{cols:"12",md:"6","order-md":"1",order:"2"},{default:o(()=>[xo,Vo,yo,wo,t("h6",Do,[$o,e(C,{color:"primary",size:"small",label:""},{default:o(()=>[d(" Popular ")]),_:1})]),Co]),_:1}),e(y,{cols:"12",md:"6","order-md":"2",order:"1"},{default:o(()=>[e($,{color:"warning",variant:"tonal"},{default:o(()=>[e(A,{class:"mb-1"},{default:o(()=>[d(" We need your attention! ")]),_:1}),ko]),_:1}),To,e(f,{rounded:"",color:"primary",height:10,"model-value":75}),Po]),_:1}),e(y,{cols:"12",order:"3"},{default:o(()=>[t("div",Ao,[e(b,{onClick:l[0]||(l[0]=u=>n.value=!0)},{default:o(()=>[d(" upgrade plan ")]),_:1}),e(b,{color:"error",variant:"tonal"},{default:o(()=>[d(" Cancel Subscription ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(y,{cols:"12"},{default:o(()=>[e(k,{title:"Payment Methods"},{append:o(()=>[e(b,{"prepend-icon":"tabler-plus",size:"small",onClick:l[1]||(l[1]=u=>p.value=!s(p))},{default:o(()=>[d(" Add Card ")]),_:1})]),default:o(()=>[e(m,{class:"d-flex flex-column gap-y-4"},{default:o(()=>[(x(),j(z,null,F(_,u=>e(k,{key:u.name,border:"",flat:""},{default:o(()=>[e(m,{class:"d-flex flex-sm-row flex-column gap-6 justify-space-between"},{default:o(()=>[t("div",Io,[t("img",{src:u.image,height:25},null,8,Uo),t("div",So,[t("h6",Bo,i(u.name),1),u.isPrimary||u.isExpired?(x(),S(C,{key:0,label:"",color:u.isPrimary?"primary":u.isExpired?"error":"secondary",size:"small"},{default:o(()=>[d(i(u.isPrimary?"Popular":u.isExpired?"Expired":""),1)]),_:2},1032,["color"])):J("",!0)]),t("div",Eo," **** **** **** "+i(u.number.substring(u.number.length-4)),1)]),t("div",jo,[t("div",Lo,[e(b,{variant:"tonal",size:"small",class:"me-4",onClick:O=>r(u)},{default:o(()=>[d(" Edit ")]),_:2},1032,["onClick"]),e(b,{color:"error",variant:"tonal",size:"small"},{default:o(()=>[d(" Delete ")]),_:1})]),t("div",zo," Card expires at "+i(u.expiry),1)])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),e(y,{cols:"12"},{default:o(()=>[e(k,{title:"Billing Address"},{append:o(()=>[e(b,{size:"small","prepend-icon":"tabler-plus",onClick:l[2]||(l[2]=u=>h.value=!s(h))},{default:o(()=>[d(" Edit Address ")]),_:1})]),default:o(()=>[e(m,null,{default:o(()=>[e(I,null,{default:o(()=>[e(y,{cols:"12",lg:"6"},{default:o(()=>[e(L,{class:"billing-address-table"},{default:o(()=>[t("tr",null,[No,t("td",null,[t("p",Ro,i(c.companyName),1)])]),t("tr",null,[Mo,t("td",null,[t("p",Fo,i(c.billingEmail),1)])]),t("tr",null,[Wo,t("td",null,[t("p",Oo,i(c.taxID),1)])]),t("tr",null,[Ho,t("td",null,[t("p",Jo,i(c.vatNumber),1)])]),t("tr",null,[qo,t("td",null,[t("p",Go,i(c.address),1)])])]),_:1})]),_:1}),e(y,{cols:"12",lg:"6"},{default:o(()=>[e(L,{class:"billing-address-table"},{default:o(()=>[t("tr",null,[Yo,t("td",null,[t("p",Ko,i(c.contact),1)])]),t("tr",null,[Qo,t("td",null,[t("p",Xo,i(c.country),1)])]),t("tr",null,[Zo,t("td",null,[t("p",ea,i(c.state),1)])]),t("tr",null,[ta,t("td",null,[t("p",oa,i(c.zipCode),1)])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(U,{isDialogVisible:s(V),"onUpdate:isDialogVisible":l[3]||(l[3]=u=>B(V)?V.value=u:null),"card-details":s(D)},null,8,["isDialogVisible","card-details"]),e(U,{isDialogVisible:s(p),"onUpdate:isDialogVisible":l[4]||(l[4]=u=>B(p)?p.value=u:null)},null,8,["isDialogVisible"]),e(T,{isDialogVisible:s(h),"onUpdate:isDialogVisible":l[5]||(l[5]=u=>B(h)?h.value=u:null),"billing-address":v},null,8,["isDialogVisible"]),e(R,{isDialogVisible:s(n),"onUpdate:isDialogVisible":l[6]||(l[6]=u=>B(n)?n.value=u:null)},null,8,["isDialogVisible"])],64)}}}),sa={class:"text-h6"},la={class:"text-h6"},na=["href"],ia=N({__name:"UserTabConnections",setup(E){const n=w([{img:Me,title:"Google",text:"Calendar and contacts",connected:!0},{img:Fe,title:"Slack",text:"Communication",connected:!1},{img:We,title:"GitHub",text:"Manage your Git repositories",connected:!0},{img:Oe,title:"Mailchimp",text:"Email marketing service",connected:!1},{img:He,title:"Asana",text:"Communication",connected:!1}]),D=w([{img:Je,title:"Facebook",connected:!1},{img:qe,title:"Twitter",link:"https://twitter.com/pixinvents",username:"@Pixinvent",connected:!0},{img:Ge,title:"LinkedIn",link:"https://www.linkedin.com/company/pixinvent",username:"@Pixinvent",connected:!0},{img:Ye,title:"Dribbble",connected:!1},{img:Ke,title:"Behance",connected:!1}]);return(V,p)=>{const h=a("VAvatar"),r=a("VSwitch"),_=a("VListItem"),c=a("VList"),v=a("VCardText"),g=a("VCard"),l=a("VCol"),C=a("VListItemSubtitle"),y=a("VIcon"),A=a("IconBtn"),$=a("VRow");return x(),S($,null,{default:o(()=>[e(l,{cols:"12"},{default:o(()=>[e(g,{title:"Connected Accounts",subtitle:"Display content from your connected accounts on your site"},{default:o(()=>[e(v,null,{default:o(()=>[e(c,{class:"card-list"},{default:o(()=>[(x(!0),j(z,null,F(s(n),f=>(x(),S(_,{key:f.title,subtitle:f.text},{title:o(()=>[t("h6",sa,i(f.title),1)]),prepend:o(()=>[e(h,{start:"",size:36,image:f.img,class:"me-1"},null,8,["image"])]),append:o(()=>[e(r,{modelValue:f.connected,"onUpdate:modelValue":b=>f.connected=b,density:"compact",class:"me-1"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["subtitle"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:o(()=>[e(g,{title:"Social Accounts",subtitle:"Display content from social accounts on your site"},{default:o(()=>[e(v,null,{default:o(()=>[e(c,{class:"card-list"},{default:o(()=>[(x(!0),j(z,null,F(s(D),f=>(x(),S(_,{key:f.title},{prepend:o(()=>[e(h,{start:"",size:"36",rounded:"0",class:"me-1",image:f.img},null,8,["image"])]),append:o(()=>[e(A,{variant:"tonal",color:f.connected?"error":"secondary",class:"rounded"},{default:o(()=>[e(y,{icon:f.connected?"tabler-trash":"tabler-link"},null,8,["icon"])]),_:2},1032,["color"])]),default:o(()=>[t("h6",la,i(f.title),1),f.connected?(x(),S(C,{key:0},{default:o(()=>[t("a",{href:f.link,target:"_blank",rel:"noopener noreferrer"},i(f.username),9,na)]),_:2},1024)):(x(),S(C,{key:1},{default:o(()=>[d(" Not connected ")]),_:1}))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),ra=oe(ia,[["__scopeId","data-v-36f98ed5"]]),ca=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," BROWSER "),t("th",{scope:"col"}," APP ")])],-1),da={class:"text-high-emphasis"},ua=N({__name:"UserTabNotifications",setup(E){const n=w([{type:"New for you",email:!0,browser:!1,app:!1},{type:"Account activity",email:!1,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!0},{type:"A new device is linked",email:!1,browser:!0,app:!1}]);return(D,V)=>{const p=a("VDivider"),h=a("VCheckbox"),r=a("VTable"),_=a("VCardText"),c=a("VBtn"),v=a("VCard");return x(),S(v,{class:"user-tab-notification",title:"Notifications",subtitle:"You will receive notification for the below selected items."},{default:o(()=>[e(_,{class:"px-0"},{default:o(()=>[e(p),e(r,{class:"text-no-wrap"},{default:o(()=>[ca,t("tbody",null,[(x(!0),j(z,null,F(s(n),g=>(x(),j("tr",{key:g.type},[t("td",da,i(g.type),1),t("td",null,[e(h,{modelValue:g.email,"onUpdate:modelValue":l=>g.email=l},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(h,{modelValue:g.browser,"onUpdate:modelValue":l=>g.browser=l},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e(h,{modelValue:g.app,"onUpdate:modelValue":l=>g.app=l},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),e(p)]),_:1}),e(_,{class:"d-flex flex-wrap gap-4"},{default:o(()=>[e(c,null,{default:o(()=>[d("Save changes")]),_:1}),e(c,{color:"secondary",variant:"tonal"},{default:o(()=>[d(" Discard ")]),_:1})]),_:1})]),_:1})}}}),pa=t("div",{class:"text-h6 mb-1"}," SMS ",-1),ma=t("p",{class:"mb-0 mt-4"},[d(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),t("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more"),d(". ")],-1),_a={class:"d-flex align-center gap-x-4"},fa={class:"text-body-1 text-high-emphasis"},ba=N({__name:"UserTabSecurity",setup(E){const n=w(!1),D=w(!1),V=w("+1(968) 819-2547"),p=w(!1),h=[{title:"BROWSER",key:"browser"},{title:"DEVICE",key:"device"},{title:"LOCATION",key:"location"},{title:"RECENT ACTIVITY",key:"activity"}],r=[{browser:" Chrome on Windows",icon:"tabler-brand-windows",color:"info",device:"HP Spectre 360",location:"Switzerland",activity:"10, July 2021 20:07"},{browser:"Chrome on Android",icon:"tabler-brand-android",color:"success",device:"Oneplus 9 Pro",location:"Dubai",activity:"14, July 2021 15:15"},{browser:"Chrome on macOS",icon:"tabler-brand-apple",color:"secondary",device:"Apple iMac",location:"India",activity:"16, July 2021 16:17"},{browser:"Chrome on iPhone",icon:"tabler-device-mobile",color:"error",device:"iPhone 12x",location:"Australia",activity:"13, July 2021 10:10"}];return(_,c)=>{const v=a("VAlert"),g=le,l=a("VCol"),C=a("VBtn"),y=a("VRow"),A=a("VForm"),$=a("VCardText"),f=a("VCard"),b=a("VIcon"),I=a("IconBtn"),m=a("VDivider"),k=a("VDataTable"),L=ze;return x(),j(z,null,[e(y,null,{default:o(()=>[e(l,{cols:"12"},{default:o(()=>[e(f,{title:"Change Password"},{default:o(()=>[e($,null,{default:o(()=>[e(v,{closable:"",variant:"tonal",color:"warning",class:"mb-4",title:"Ensure that these requirements are met",text:"Minimum 8 characters long, uppercase & symbol"}),e(A,{onSubmit:Ae(()=>{},["prevent"])},{default:o(()=>[e(y,null,{default:o(()=>[e(l,{cols:"12",md:"6"},{default:o(()=>[e(g,{label:"New Password",placeholder:"············",type:s(n)?"text":"password","append-inner-icon":s(n)?"tabler-eye-off":"tabler-eye","onClick:appendInner":c[0]||(c[0]=U=>n.value=!s(n))},null,8,["type","append-inner-icon"])]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[e(g,{label:"Confirm Password",placeholder:"············",type:s(D)?"text":"password","append-inner-icon":s(D)?"tabler-eye-off":"tabler-eye","onClick:appendInner":c[1]||(c[1]=U=>D.value=!s(D))},null,8,["type","append-inner-icon"])]),_:1}),e(l,{cols:"12"},{default:o(()=>[e(C,{type:"submit"},{default:o(()=>[d(" Change Password ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:o(()=>[e(f,{title:"Two-steps verification",subtitle:"Keep your account secure with authentication step."},{default:o(()=>[e($,null,{default:o(()=>[pa,e(g,{placeholder:"+1(968) 819-2547"},{append:o(()=>[e(I,{color:"secondary"},{default:o(()=>[e(b,{icon:"tabler-edit",size:"22"})]),_:1}),e(I,{color:"secondary"},{default:o(()=>[e(b,{icon:"tabler-user-plus",size:"22"})]),_:1})]),_:1}),ma]),_:1})]),_:1})]),_:1}),e(l,{cols:"12"},{default:o(()=>[e(f,{title:"Recent devices"},{default:o(()=>[e(m),e(k,{items:r,headers:h,"hide-default-footer":"",class:"text-no-wrap"},{"item.browser":o(({item:U})=>[t("div",_a,[e(b,{icon:U.icon,color:U.color,size:22},null,8,["icon","color"]),t("div",fa,i(U.browser),1)])]),bottom:o(()=>[]),_:1})]),_:1})]),_:1})]),_:1}),e(L,{isDialogVisible:s(p),"onUpdate:isDialogVisible":c[2]||(c[2]=U=>B(p)?p.value=U:null),"sms-code":s(V)},null,8,["isDialogVisible","sms-code"])],64)}}}),ha={key:1},Ja=N({__name:"[id]",async setup(E){let n,D;const V=Ie(),p=w(null),h=[{icon:"tabler-users",title:"Account"},{icon:"tabler-lock",title:"Security"},{icon:"tabler-bookmark",title:"Billing & Plan"},{icon:"tabler-bell",title:"Notifications"},{icon:"tabler-link",title:"Connections"}],{data:r}=([n,D]=te(()=>ne(`/apps/users/${V.params.id}`)),n=await n,D(),n);if(r.value){const[_,c]=r.value.fullName.split(" ");r.value.firstName=_,r.value.lastName=c}return(_,c)=>{const v=a("VCol"),g=a("VIcon"),l=a("VTab"),C=a("VTabs"),y=a("VWindowItem"),A=a("VWindow"),$=a("VRow"),f=a("VAlert");return s(r)?(x(),S($,{key:0},{default:o(()=>[e(v,{cols:"12",md:"5",lg:"4"},{default:o(()=>[e(Lt,{"user-data":s(r)},null,8,["user-data"])]),_:1}),e(v,{cols:"12",md:"7",lg:"8"},{default:o(()=>[e(C,{modelValue:s(p),"onUpdate:modelValue":c[0]||(c[0]=b=>B(p)?p.value=b:null),class:"v-tabs-pill"},{default:o(()=>[(x(),j(z,null,F(h,b=>e(l,{key:b.icon},{default:o(()=>[e(g,{size:18,icon:b.icon,class:"me-1"},null,8,["icon"]),t("span",null,i(b.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(A,{modelValue:s(p),"onUpdate:modelValue":c[1]||(c[1]=b=>B(p)?p.value=b:null),class:"mt-6 disable-tab-transition",touch:!1},{default:o(()=>[e(y,null,{default:o(()=>[e(vo)]),_:1}),e(y,null,{default:o(()=>[e(ba)]),_:1}),e(y,null,{default:o(()=>[e(aa)]),_:1}),e(y,null,{default:o(()=>[e(ua)]),_:1}),e(y,null,{default:o(()=>[e(ra)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):(x(),j("div",ha,[e(f,{type:"error",variant:"tonal"},{default:o(()=>[d(" Invoice with ID "+i(s(V).params.id)+" not found! ",1)]),_:1})]))}}});export{Ja as default};
