import{p as oe}from"./formatters-DocrwTSm.js";import{_ as le}from"./TablePagination.vue_vue_type_script_setup_true_lang-D1-a-YZ9.js";import{_ as ae}from"./AppTextField.vue_vue_type_script_setup_true_lang-DVmY9CA8.js";import{_ as se}from"./AppSelect.vue_vue_type_script_setup_true_lang-BIKIBclC.js";import{u as re}from"./useApi-B3JBUzi4.js";import{c as ie}from"./createUrl-xcKMc8F_.js";import{$ as ne}from"./api-DrljkMd9.js";import{V as O}from"./VCardText-CxtBxXM8.js";import{V as F,a as x}from"./VRow-CXPDeuUR.js";import{V as L}from"./VCard-fyGiGoR0.js";import{V as S}from"./VDivider-B-GSMBPC.js";import{V as ce}from"./VSpacer-zRdYcvFO.js";import{d as ue,r as i,b9 as de,a6 as W,a as pe,o as f,c as w,b as t,f as o,F as q,i as me,n as s,aX as u,e as r,aj as G,v,g as P,z as C,x as m,a0 as k,s as fe,y as ve}from"./index-D5RGqRWX.js";import{V as ge}from"./VDataTableServer-vg52_Xy9.js";import{V as $}from"./VAvatar-UGmDTgW3.js";import{V as he}from"./VSwitch-D0cTNHPG.js";import{V as H}from"./VChip-DQDH9nD2.js";import{V as _e}from"./VMenu-DklSwZ0e.js";import{V as be,a as A}from"./VList-Bj1pnPzM.js";import"./helpers-BGv4x_9E.js";import"./VPagination-DVcCK3CX.js";import"./form-eyOzVGLC.js";import"./VTextField-DU42iz1L.js";/* empty css                   */import"./VCounter-C7RInydd.js";import"./index-HyA-AI0P.js";import"./index-BZhaH00k.js";import"./VField-DeGbkOa7.js";import"./easing-CjukEv2V.js";import"./VInput-BF9u6u1K.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-BwBd6keG.js";import"./dialog-transition-DhJwfYBk.js";import"./VOverlay-DK_GJGXD.js";import"./lazy-MPMx-enN.js";import"./scopeId-BznQc9nT.js";import"./VCheckboxBtn-CJLDweMb.js";import"./VSelectionControl-BT6z8mOJ.js";import"./index-B3bPRkoL.js";import"./createSimpleFunctional-4pAU72TT.js";/* empty css              */import"./VImg-CTRzm68e.js";import"./VDataTable-7aqXWbiF.js";import"./VTable-C-tr6tyO.js";import"./filter-DudtC8ZS.js";import"./VSlideGroup-lxP2-7D8.js";import"./ssrBoot-1R9RYTM1.js";const ye={class:"d-flex flex-column gap-y-1"},Ve={class:"text-body-1 text-capitalize"},xe={class:"text-h4"},ke={class:"d-flex align-center gap-x-2"},Se={class:"text-no-wrap"},we={class:"d-flex flex-wrap gap-4 ma-6"},Pe={class:"d-flex align-center"},Ce={class:"d-flex gap-4 flex-wrap align-center"},$e={class:"d-flex align-center gap-x-4"},Ae={class:"d-flex flex-column"},De={class:"text-body-1 font-weight-medium text-high-emphasis"},Ue={class:"text-body-2"},Be={class:"text-body-1 text-high-emphasis"},Ct=ue({__name:"index",async setup(ze){let g,D;const h=i([{title:"In-Store Sales",value:"$5,345",icon:"tabler-smart-home",desc:"5k orders",change:5.7},{title:"Website Sales",value:"$674,347",icon:"tabler-device-laptop",desc:"21k orders",change:12.4},{title:"Discount",value:"$14,235",icon:"tabler-gift",desc:"6k orders"},{title:"Affiliate",value:"$8,345",icon:"tabler-wallet",desc:"150 orders",change:-3.5}]),j=[{title:"Product",key:"product"},{title:"Category",key:"category"},{title:"Stock",key:"stock",sortable:!1},{title:"SKU",key:"sku"},{title:"Price",key:"price"},{title:"QTY",key:"qty"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],_=i(),b=i(),y=i(),V=i(""),Q=i([{title:"Scheduled",value:"Scheduled"},{title:"Publish",value:"Published"},{title:"Inactive",value:"Inactive"}]),R=i([{title:"Accessories",value:"Accessories"},{title:"Home Decor",value:"Home Decor"},{title:"Electronics",value:"Electronics"},{title:"Shoes",value:"Shoes"},{title:"Office",value:"Office"},{title:"Games",value:"Games"}]),K=i([{title:"In Stock",value:!0},{title:"Out of Stock",value:!1}]),c=i(10),d=i(1),U=i(),B=i(),X=l=>{var a,p;U.value=(a=l.sortBy[0])==null?void 0:a.key,B.value=(p=l.sortBy[0])==null?void 0:p.order},z=l=>{if(l==="Accessories")return{color:"error",icon:"tabler-device-watch"};if(l==="Home Decor")return{color:"info",icon:"tabler-home"};if(l==="Electronics")return{color:"primary",icon:"tabler-device-imac"};if(l==="Shoes")return{color:"success",icon:"tabler-shoe"};if(l==="Office")return{color:"warning",icon:"tabler-briefcase"};if(l==="Games")return{color:"primary",icon:"tabler-device-gamepad-2"}},Y=l=>{if(l==="Scheduled")return{text:"Scheduled",color:"warning"};if(l==="Published")return{text:"Publish",color:"success"};if(l==="Inactive")return{text:"Inactive",color:"error"}},{data:I,execute:J}=([g,D]=de(()=>re(ie("/apps/ecommerce/products",{query:{q:V,stock:y,category:b,status:_,page:d,itemsPerPage:c,sortBy:U,orderBy:B}}))),g=await g,D(),g),Z=W(()=>I.value.products),E=W(()=>I.value.total),M=async l=>{await ne(`apps/ecommerce/products/${l}`,{method:"DELETE"}),J()};return(l,a)=>{const p=se,ee=ae,T=pe("IconBtn"),te=le;return f(),w("div",null,[t(L,{class:"mb-6"},{default:o(()=>[t(O,{class:"px-3"},{default:o(()=>[t(F,null,{default:o(()=>[(f(!0),w(q,null,me(s(h),(e,n)=>(f(),w(q,{key:n},[t(x,{cols:"12",sm:"6",md:"3",class:"px-6"},{default:o(()=>[r("div",{class:ve(["d-flex justify-space-between",l.$vuetify.display.xs?n!==s(h).length-1?"border-b pb-4":"":l.$vuetify.display.sm&&n<s(h).length/2?"border-b pb-4":""])},[r("div",ye,[r("div",Ve,m(e.title),1),r("h4",xe,m(e.value),1),r("div",ke,[r("div",Se,m(e.desc),1),e.change?(f(),P(H,{key:0,label:"",color:e.change>0?"success":"error",size:"small"},{default:o(()=>[v(m(("prefixWithPlus"in l?l.prefixWithPlus:s(oe))(e.change))+"% ",1)]),_:2},1032,["color"])):C("",!0)])]),t($,{variant:"tonal",rounded:"",size:"44"},{default:o(()=>[t(k,{icon:e.icon,size:"28",class:"text-high-emphasis"},null,8,["icon"])]),_:2},1024)],2)]),_:2},1024),(l.$vuetify.display.mdAndUp?n!==s(h).length-1:l.$vuetify.display.smAndUp&&n%2===0)?(f(),P(S,{key:0,vertical:"",inset:"",length:"92"})):C("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t(L,{title:"Filters",class:"mb-6"},{default:o(()=>[t(O,null,{default:o(()=>[t(F,null,{default:o(()=>[t(x,{cols:"12",sm:"4"},{default:o(()=>[t(p,{modelValue:s(_),"onUpdate:modelValue":a[0]||(a[0]=e=>u(_)?_.value=e:null),placeholder:"Status",items:s(Q),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1}),t(x,{cols:"12",sm:"4"},{default:o(()=>[t(p,{modelValue:s(b),"onUpdate:modelValue":a[1]||(a[1]=e=>u(b)?b.value=e:null),placeholder:"Category",items:s(R),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1}),t(x,{cols:"12",sm:"4"},{default:o(()=>[t(p,{modelValue:s(y),"onUpdate:modelValue":a[2]||(a[2]=e=>u(y)?y.value=e:null),placeholder:"Stock",items:s(K),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),t(S),r("div",we,[r("div",Pe,[t(ee,{modelValue:s(V),"onUpdate:modelValue":a[3]||(a[3]=e=>u(V)?V.value=e:null),placeholder:"Search Product",style:{"inline-size":"200px"},class:"me-3"},null,8,["modelValue"])]),t(ce),r("div",Ce,[t(p,{modelValue:s(c),"onUpdate:modelValue":a[4]||(a[4]=e=>u(c)?c.value=e:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(G,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload"},{default:o(()=>[v(" Export ")]),_:1}),t(G,{color:"primary","prepend-icon":"tabler-plus",onClick:a[5]||(a[5]=e=>l.$router.push("/apps/ecommerce/product/add"))},{default:o(()=>[v(" Add Product ")]),_:1})])]),t(S,{class:"mt-4"}),t(ge,{"items-per-page":s(c),"onUpdate:itemsPerPage":a[7]||(a[7]=e=>u(c)?c.value=e:null),page:s(d),"onUpdate:page":a[8]||(a[8]=e=>u(d)?d.value=e:null),headers:j,"show-select":"",items:s(Z),"items-length":s(E),class:"text-no-wrap","onUpdate:options":X},{"item.product":o(({item:e})=>[r("div",$e,[e.image?(f(),P($,{key:0,size:"38",variant:"tonal",rounded:"",image:e.image},null,8,["image"])):C("",!0),r("div",Ae,[r("span",De,m(e.productName),1),r("span",Ue,m(e.productBrand),1)])])]),"item.category":o(({item:e})=>{var n;return[t($,{size:"30",variant:"tonal",color:(n=z(e.category))==null?void 0:n.color,class:"me-4"},{default:o(()=>{var N;return[t(k,{icon:(N=z(e.category))==null?void 0:N.icon,size:"18"},null,8,["icon"])]}),_:2},1032,["color"]),r("span",Be,m(e.category),1)]}),"item.stock":o(({item:e})=>[t(he,{"model-value":e.stock},null,8,["model-value"])]),"item.status":o(({item:e})=>[t(H,fe(Y(e.status),{density:"default",label:"",size:"small"}),null,16)]),"item.actions":o(({item:e})=>[t(T,null,{default:o(()=>[t(k,{icon:"tabler-edit"})]),_:1}),t(T,null,{default:o(()=>[t(k,{icon:"tabler-dots-vertical"}),t(_e,{activator:"parent"},{default:o(()=>[t(be,null,{default:o(()=>[t(A,{value:"download","prepend-icon":"tabler-download"},{default:o(()=>[v(" Download ")]),_:1}),t(A,{value:"delete","prepend-icon":"tabler-trash",onClick:n=>M(e.id)},{default:o(()=>[v(" Delete ")]),_:2},1032,["onClick"]),t(A,{value:"duplicate","prepend-icon":"tabler-copy"},{default:o(()=>[v(" Duplicate ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[t(te,{page:s(d),"onUpdate:page":a[6]||(a[6]=e=>u(d)?d.value=e:null),"items-per-page":s(c),"total-items":s(E)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})])}}});export{Ct as default};
