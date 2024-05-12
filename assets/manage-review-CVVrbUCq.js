import{_ as te}from"./TablePagination.vue_vue_type_script_setup_true_lang-12Id8OkK.js";import{_ as se}from"./AppSelect.vue_vue_type_script_setup_true_lang-CUM7xL_a.js";import{_ as oe}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import{q as ae}from"./vue3-apexcharts-CMOaC9Q0.js";import{u as le}from"./useApi-CiYK4OrD.js";import{c as ie}from"./createUrl-CkR9s17f.js";import{$ as ne}from"./api-faFk6m2o.js";import{d as re,r as m,aq as ce,a4 as D,a,o as W,g as de,f as o,b as s,e as t,v as r,c as pe,i as ue,F as me,n as i,ad as _,x as n,y as _e}from"./index-B-uKkDM3.js";import"./index-B3bPRkoL.js";const he={class:"d-flex gap-6 flex-column flex-sm-row"},ve={class:"d-flex align-center gap-x-2"},be=t("h3",{class:"text-h3 text-primary"}," 4.89 ",-1),fe=t("h6",{class:"my-2 text-h6"}," Total 187 reviews ",-1),ge=t("div",{class:"mb-2 text-wrap"}," All reviews are from genuine customers ",-1),we={class:"flex-grow-1"},xe={class:"text-no-wrap text-sm"},ye={class:"flex-grow-1",style:{"min-inline-size":"150px"}},Ve={class:"text-sm"},ke={class:"d-flex justify-space-between flex-sm-row flex-column"},Re=t("h5",{class:"text-h5 mb-2"}," Reviews statistics ",-1),Ce={class:"mb-8 mb-sm-12"},Le=t("div",{class:"d-inline-block me-2"}," 12 New Reviews ",-1),ze=t("div",null,[t("div",{class:"text-high-emphasis text-body-1 mb-2"},[t("span",{class:"text-success"},"87%"),r(" Positive Reviews ")]),t("div",{class:"text-body-2"}," Weekly Report ")],-1),Se={class:"d-flex justify-space-between flex-wrap gap-6"},Pe={class:"d-flex flex-row gap-4 align-center flex-wrap"},Ae={class:"d-flex gap-x-4 align-center"},Be={class:"d-flex flex-column"},Te={class:"text-h6"},De={class:"text-body-2 text-wrap clamp-text"},We={class:"d-flex align-center gap-x-4"},Oe={class:"d-flex flex-column"},Ue={class:"text-body-2"},$e={class:"my-4"},Ie={class:"text-h6 mb-1"},qe={class:"text-sm text-wrap mb-0"},Ee="rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))",Ye=re({__name:"manage-review",async setup(Ne){let v,k;const b=m("All"),f=m(""),c=m(10),d=m(1),R=m(),C=m(),{data:L,execute:O}=([v,k]=ce(()=>le(ie("/apps/ecommerce/reviews",{query:{q:f,status:b,page:d,itemsPerPage:c,sortBy:R,orderBy:C}}))),v=await v,k(),v),U=D(()=>L.value.reviews),z=D(()=>L.value.total),$=u=>{var l,h;R.value=(l=u.sortBy[0])==null?void 0:l.key,C.value=(h=u.sortBy[0])==null?void 0:h.order},I=async u=>{await ne(`/apps/ecommerce/reviews/${u}`,{method:"DELETE"}),O()},S=[{rating:5,value:124},{rating:4,value:40},{rating:3,value:12},{rating:2,value:7},{rating:1,value:2}],q=[{title:"Product",key:"product"},{title:"Reviewer",key:"reviewer"},{title:"Review",key:"review",sortable:!1},{title:"Date",key:"date"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],p={colorsLabel:{success:"#28c76f29"},colors:{success:"#28c76f"}},E=[{data:[20,40,60,80,100,80,60]}],N={chart:{height:160,width:190,type:"bar",toolbar:{show:!1}},legend:{show:!1},grid:{show:!1,padding:{top:-25,bottom:-12}},colors:[p.colorsLabel.success,p.colorsLabel.success,p.colorsLabel.success,p.colorsLabel.success,p.colors.success,p.colorsLabel.success,p.colorsLabel.success],plotOptions:{bar:{barHeight:"75%",columnWidth:"25%",borderRadius:4,distributed:!0}},dataLabels:{enabled:!1},xaxis:{categories:["M","T","W","T","F","S","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:Ee,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:0,options:{chart:{width:"100%"},plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1440,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:1400,options:{plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:1200,options:{chart:{height:130,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:992,chart:{height:150,width:190,toolbar:{show:!1}},options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:883,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:768,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:600,options:{chart:{width:"100%",height:"200",type:"bar"},plotOptions:{bar:{borderRadius:6,columnWidth:"30% "}}}},{breakpoint:420,options:{plotOptions:{chart:{width:"100%",height:"200",type:"bar"},bar:{borderRadius:4,columnWidth:"30%"}}}}]};return(u,l)=>{const h=a("VIcon"),g=a("VChip"),P=a("VDivider"),F=a("VProgressLinear"),w=a("VCardText"),x=a("VCard"),y=a("VCol"),M=ae,j=oe,A=se,H=a("VBtn"),B=a("VAvatar"),Q=a("RouterLink"),G=a("VRating"),T=a("VListItem"),J=a("VList"),K=a("VMenu"),X=a("IconBtn"),Y=te,Z=a("VDataTableServer"),ee=a("VRow");return W(),de(ee,{class:"match-height"},{default:o(()=>[s(y,{cols:"12",md:"6"},{default:o(()=>[s(x,null,{default:o(()=>[s(w,null,{default:o(()=>[t("div",he,[t("div",null,[t("div",ve,[be,s(h,{icon:"tabler-star-filled",color:"primary",size:"32"})]),fe,ge,s(g,{color:"primary",label:"",size:"small"},{default:o(()=>[r(" +5 This week ")]),_:1})]),s(P,{vertical:u.$vuetify.display.smAndUp},null,8,["vertical"]),t("div",we,[(W(),pe(me,null,ue(S,(e,V)=>t("div",{key:V,class:_e(["d-flex align-center gap-x-4",V!==S.length-1?"mb-3":""])},[t("div",xe,n(e.rating)+" Star ",1),t("div",ye,[s(F,{color:"primary",height:"8","model-value":e.value/185*100,rounded:""},null,8,["model-value"])]),t("div",Ve,n(e.value),1)],2)),64))])])]),_:1})]),_:1})]),_:1}),s(y,{cols:"12",md:"6"},{default:o(()=>[s(x,null,{default:o(()=>[s(w,null,{default:o(()=>[t("div",ke,[t("div",null,[Re,t("div",Ce,[Le,s(g,{color:"success",size:"small",label:""},{default:o(()=>[r(" +8.4% ")]),_:1})]),ze]),t("div",null,[s(M,{id:"shipment-statistics",type:"bar",height:"152",options:N,series:E})])])]),_:1})]),_:1})]),_:1}),s(y,{cols:"12"},{default:o(()=>[s(x,null,{default:o(()=>[s(w,null,{default:o(()=>[t("div",Se,[t("div",null,[s(j,{modelValue:i(f),"onUpdate:modelValue":l[0]||(l[0]=e=>_(f)?f.value=e:null),style:{"max-inline-size":"200px","min-inline-size":"200px"},placeholder:"Search Review"},null,8,["modelValue"])]),t("div",Pe,[s(A,{modelValue:i(c),"onUpdate:modelValue":l[1]||(l[1]=e=>_(c)?c.value=e:null),items:[10,25,50,100],style:{"inline-size":"6.25rem"}},null,8,["modelValue"]),s(A,{modelValue:i(b),"onUpdate:modelValue":l[2]||(l[2]=e=>_(b)?b.value=e:null),style:{"max-inline-size":"7.5rem","min-inline-size":"7.5rem"},items:[{title:"All",value:"All"},{title:"Published",value:"Published"},{title:"Pending",value:"Pending"}]},null,8,["modelValue"]),s(H,{"prepend-icon":"tabler-upload",variant:"tonal",color:"default"},{default:o(()=>[r(" Export ")]),_:1})])])]),_:1}),s(P),s(Z,{"items-per-page":i(c),"onUpdate:itemsPerPage":l[4]||(l[4]=e=>_(c)?c.value=e:null),page:i(d),"onUpdate:page":l[5]||(l[5]=e=>_(d)?d.value=e:null),headers:q,items:i(U),"show-select":"","items-length":i(z),class:"text-no-wrap","onUpdate:options":$},{"item.product":o(({item:e})=>[t("div",Ae,[s(B,{image:e.productImage,size:38,variant:"tonal",rounded:""},null,8,["image"]),t("div",Be,[t("h6",Te,n(e.product),1),t("div",De,n(e.companyName),1)])])]),"item.reviewer":o(({item:e})=>[t("div",We,[s(B,{image:e.avatar,size:"34"},null,8,["image"]),t("div",Oe,[s(Q,{to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}},class:"font-weight-medium",style:{"line-height":"1.375rem"}},{default:o(()=>[r(n(e.reviewer),1)]),_:2},1024),t("div",Ue,n(e.email),1)])])]),"item.review":o(({item:e})=>[t("div",$e,[s(G,{readonly:"","model-value":e.review,size:"24",class:"mb-1"},null,8,["model-value"]),t("h6",Ie,n(e.head),1),t("p",qe,n(e.para),1)])]),"item.date":o(({item:e})=>[r(n(new Date(e.date).toDateString()),1)]),"item.status":o(({item:e})=>[s(g,{color:e.status==="Published"?"success":"warning",label:"",size:"small"},{default:o(()=>[r(n(e.status),1)]),_:2},1032,["color"])]),"item.actions":o(({item:e})=>[s(X,null,{default:o(()=>[s(h,{icon:"tabler-dots-vertical"}),s(K,{activator:"parent"},{default:o(()=>[s(J,null,{default:o(()=>[s(T,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:e.id}}},{default:o(()=>[r(" View ")]),_:2},1032,["to"]),s(T,{value:"delete",onClick:V=>I(e.id)},{default:o(()=>[r(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[s(Y,{page:i(d),"onUpdate:page":l[3]||(l[3]=e=>_(d)?d.value=e:null),"items-per-page":i(c),"total-items":i(z)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})]),_:1})]),_:1})}}});export{Ye as default};
