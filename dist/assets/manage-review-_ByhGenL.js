import{_ as X}from"./TablePagination.vue_vue_type_script_setup_true_lang-D1-a-YZ9.js";import{_ as G}from"./AppSelect.vue_vue_type_script_setup_true_lang-BIKIBclC.js";import{_ as J}from"./AppTextField.vue_vue_type_script_setup_true_lang-DVmY9CA8.js";import{q as K}from"./vue3-apexcharts-14BlBLtd.js";import{u as Y}from"./useApi-B3JBUzi4.js";import{c as Z}from"./createUrl-xcKMc8F_.js";import{$ as ee}from"./api-DrljkMd9.js";import{V as g}from"./VCard-fyGiGoR0.js";import{V as w}from"./VCardText-CxtBxXM8.js";import{d as te,r as m,b9 as se,a6 as P,a as A,o as B,g as oe,f as o,b as s,e as t,a0 as W,v as r,c as ae,i as le,F as ie,n as l,aX as u,aj as re,x as i,y as ne,b1 as de}from"./index-D5RGqRWX.js";import{V as x}from"./VChip-DQDH9nD2.js";import{V as O}from"./VDivider-B-GSMBPC.js";import{a as y,V as ce}from"./VRow-CXPDeuUR.js";import{V as pe}from"./VDataTableServer-vg52_Xy9.js";import{V as T}from"./VAvatar-UGmDTgW3.js";import{V as me}from"./VRating-D4sf70hz.js";import{V as ue}from"./VMenu-DklSwZ0e.js";import{V as he,a as D}from"./VList-Bj1pnPzM.js";import"./VPagination-DVcCK3CX.js";import"./form-eyOzVGLC.js";import"./VSelect-BwBd6keG.js";import"./VTextField-DU42iz1L.js";/* empty css                   */import"./VCounter-C7RInydd.js";import"./index-HyA-AI0P.js";import"./index-BZhaH00k.js";import"./VField-DeGbkOa7.js";import"./easing-CjukEv2V.js";import"./VInput-BF9u6u1K.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DhJwfYBk.js";import"./VOverlay-DK_GJGXD.js";import"./lazy-MPMx-enN.js";import"./scopeId-BznQc9nT.js";import"./VCheckboxBtn-CJLDweMb.js";import"./VSelectionControl-BT6z8mOJ.js";import"./index-B3bPRkoL.js";import"./createSimpleFunctional-4pAU72TT.js";import"./VImg-CTRzm68e.js";import"./VSlideGroup-lxP2-7D8.js";/* empty css              */import"./VDataTable-7aqXWbiF.js";import"./VTable-C-tr6tyO.js";import"./filter-DudtC8ZS.js";import"./ssrBoot-1R9RYTM1.js";const ve={class:"d-flex gap-6 flex-column flex-sm-row"},fe={class:"d-flex align-center gap-x-2"},_e=t("h3",{class:"text-h3 text-primary"}," 4.89 ",-1),be=t("h6",{class:"my-2 text-h6"}," Total 187 reviews ",-1),ge=t("div",{class:"mb-2 text-wrap"}," All reviews are from genuine customers ",-1),we={class:"flex-grow-1"},xe={class:"text-no-wrap text-sm"},ye={class:"flex-grow-1",style:{"min-inline-size":"150px"}},Ve={class:"text-sm"},ke={class:"d-flex justify-space-between flex-sm-row flex-column"},Re=t("h5",{class:"text-h5 mb-2"}," Reviews statistics ",-1),Ce={class:"mb-8 mb-sm-12"},ze=t("div",{class:"d-inline-block me-2"}," 12 New Reviews ",-1),Le=t("div",null,[t("div",{class:"text-high-emphasis text-body-1 mb-2"},[t("span",{class:"text-success"},"87%"),r(" Positive Reviews ")]),t("div",{class:"text-body-2"}," Weekly Report ")],-1),Se={class:"d-flex justify-space-between flex-wrap gap-6"},Pe={class:"d-flex flex-row gap-4 align-center flex-wrap"},Ae={class:"d-flex gap-x-4 align-center"},Be={class:"d-flex flex-column"},We={class:"text-h6"},Oe={class:"text-body-2 text-wrap clamp-text"},Te={class:"d-flex align-center gap-x-4"},De={class:"d-flex flex-column"},Ue={class:"text-body-2"},$e={class:"my-4"},Ee={class:"text-h6 mb-1"},Ie={class:"text-sm text-wrap mb-0"},Ne="rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))",Ot=te({__name:"manage-review",async setup(qe){let h,V;const v=m("All"),f=m(""),n=m(10),d=m(1),k=m(),R=m(),{data:C,execute:U}=([h,V]=se(()=>Y(Z("/apps/ecommerce/reviews",{query:{q:f,status:v,page:d,itemsPerPage:n,sortBy:k,orderBy:R}}))),h=await h,V(),h),$=P(()=>C.value.reviews),z=P(()=>C.value.total),E=p=>{var a,_;k.value=(a=p.sortBy[0])==null?void 0:a.key,R.value=(_=p.sortBy[0])==null?void 0:_.order},I=async p=>{await ee(`/apps/ecommerce/reviews/${p}`,{method:"DELETE"}),U()},L=[{rating:5,value:124},{rating:4,value:40},{rating:3,value:12},{rating:2,value:7},{rating:1,value:2}],N=[{title:"Product",key:"product"},{title:"Reviewer",key:"reviewer"},{title:"Review",key:"review",sortable:!1},{title:"Date",key:"date"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],c={colorsLabel:{success:"#28c76f29"},colors:{success:"#28c76f"}},q=[{data:[20,40,60,80,100,80,60]}],F={chart:{height:160,width:190,type:"bar",toolbar:{show:!1}},legend:{show:!1},grid:{show:!1,padding:{top:-25,bottom:-12}},colors:[c.colorsLabel.success,c.colorsLabel.success,c.colorsLabel.success,c.colorsLabel.success,c.colors.success,c.colorsLabel.success,c.colorsLabel.success],plotOptions:{bar:{barHeight:"75%",columnWidth:"25%",borderRadius:4,distributed:!0}},dataLabels:{enabled:!1},xaxis:{categories:["M","T","W","T","F","S","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:Ne,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:0,options:{chart:{width:"100%"},plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1440,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:1400,options:{plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:1200,options:{chart:{height:130,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:992,chart:{height:150,width:190,toolbar:{show:!1}},options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:883,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:768,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:600,options:{chart:{width:"100%",height:"200",type:"bar"},plotOptions:{bar:{borderRadius:6,columnWidth:"30% "}}}},{breakpoint:420,options:{plotOptions:{chart:{width:"100%",height:"200",type:"bar"},bar:{borderRadius:4,columnWidth:"30%"}}}}]};return(p,a)=>{const _=K,j=J,S=G,M=A("RouterLink"),H=A("IconBtn"),Q=X;return B(),oe(ce,{class:"match-height"},{default:o(()=>[s(y,{cols:"12",md:"6"},{default:o(()=>[s(g,null,{default:o(()=>[s(w,null,{default:o(()=>[t("div",ve,[t("div",null,[t("div",fe,[_e,s(W,{icon:"tabler-star-filled",color:"primary",size:"32"})]),be,ge,s(x,{color:"primary",label:"",size:"small"},{default:o(()=>[r(" +5 This week ")]),_:1})]),s(O,{vertical:p.$vuetify.display.smAndUp},null,8,["vertical"]),t("div",we,[(B(),ae(ie,null,le(L,(e,b)=>t("div",{key:b,class:ne(["d-flex align-center gap-x-4",b!==L.length-1?"mb-3":""])},[t("div",xe,i(e.rating)+" Star ",1),t("div",ye,[s(de,{color:"primary",height:"8","model-value":e.value/185*100,rounded:""},null,8,["model-value"])]),t("div",Ve,i(e.value),1)],2)),64))])])]),_:1})]),_:1})]),_:1}),s(y,{cols:"12",md:"6"},{default:o(()=>[s(g,null,{default:o(()=>[s(w,null,{default:o(()=>[t("div",ke,[t("div",null,[Re,t("div",Ce,[ze,s(x,{color:"success",size:"small",label:""},{default:o(()=>[r(" +8.4% ")]),_:1})]),Le]),t("div",null,[s(_,{id:"shipment-statistics",type:"bar",height:"152",options:F,series:q})])])]),_:1})]),_:1})]),_:1}),s(y,{cols:"12"},{default:o(()=>[s(g,null,{default:o(()=>[s(w,null,{default:o(()=>[t("div",Se,[t("div",null,[s(j,{modelValue:l(f),"onUpdate:modelValue":a[0]||(a[0]=e=>u(f)?f.value=e:null),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search Review"},null,8,["modelValue"])]),t("div",Pe,[s(S,{modelValue:l(n),"onUpdate:modelValue":a[1]||(a[1]=e=>u(n)?n.value=e:null),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"]),s(S,{modelValue:l(v),"onUpdate:modelValue":a[2]||(a[2]=e=>u(v)?v.value=e:null),style:{"max-inline-size":"7.5rem","min-inline-size":"7.5rem"},items:[{title:"All",value:"All"},{title:"Published",value:"Published"},{title:"Pending",value:"Pending"}]},null,8,["modelValue"]),s(re,{"prepend-icon":"tabler-upload",variant:"tonal",color:"default"},{default:o(()=>[r(" Export ")]),_:1})])])]),_:1}),s(O),s(pe,{"items-per-page":l(n),"onUpdate:itemsPerPage":a[4]||(a[4]=e=>u(n)?n.value=e:null),page:l(d),"onUpdate:page":a[5]||(a[5]=e=>u(d)?d.value=e:null),headers:N,items:l($),"show-select":"","items-length":l(z),class:"text-no-wrap","onUpdate:options":E},{"item.product":o(({item:e})=>[t("div",Ae,[s(T,{image:e.productImage,size:38,variant:"tonal",rounded:""},null,8,["image"]),t("div",Be,[t("h6",We,i(e.product),1),t("div",Oe,i(e.companyName),1)])])]),"item.reviewer":o(({item:e})=>[t("div",Te,[s(T,{image:e.avatar,size:"34"},null,8,["image"]),t("div",De,[s(M,{to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}},class:"font-weight-medium",style:{"line-height":"1.375rem"}},{default:o(()=>[r(i(e.reviewer),1)]),_:2},1024),t("div",Ue,i(e.email),1)])])]),"item.review":o(({item:e})=>[t("div",$e,[s(me,{readonly:"","model-value":e.review,size:"24",class:"mb-1"},null,8,["model-value"]),t("h6",Ee,i(e.head),1),t("p",Ie,i(e.para),1)])]),"item.date":o(({item:e})=>[r(i(new Date(e.date).toDateString()),1)]),"item.status":o(({item:e})=>[s(x,{color:e.status==="Published"?"success":"warning",label:"",size:"small"},{default:o(()=>[r(i(e.status),1)]),_:2},1032,["color"])]),"item.actions":o(({item:e})=>[s(H,null,{default:o(()=>[s(W,{icon:"tabler-dots-vertical"}),s(ue,{activator:"parent"},{default:o(()=>[s(he,null,{default:o(()=>[s(D,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:e.id}}},{default:o(()=>[r(" View ")]),_:2},1032,["to"]),s(D,{value:"delete",onClick:b=>I(e.id)},{default:o(()=>[r(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[s(Q,{page:l(d),"onUpdate:page":a[3]||(a[3]=e=>u(d)?d.value=e:null),"items-per-page":l(n),"total-items":l(z)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})]),_:1})]),_:1})}}});export{Ot as default};
