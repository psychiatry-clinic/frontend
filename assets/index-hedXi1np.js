import{a as W}from"./formatters-DocrwTSm.js";import{_ as Y}from"./TablePagination.vue_vue_type_script_setup_true_lang-BLzMRQig.js";import{_ as Z}from"./AppSelect.vue_vue_type_script_setup_true_lang-CrhVdGdy.js";import{_ as ee}from"./AppTextField.vue_vue_type_script_setup_true_lang-0HTERlGV.js";import{m as te,a as ae}from"./mastercard-g84VFOh-.js";import{p as oe,a as re}from"./paypal-light-Brvcm0WZ.js";import{u as B}from"./useGenerateImageVariant-BhHHDtLi.js";import{u as se}from"./useApi-1RPI4bAV.js";import{c as le}from"./createUrl-Bk9dXhS4.js";import{$ as ie}from"./api-Dy4JcHNd.js";import{V as z}from"./VCardText-BBHH7cpX.js";import{V as ne,a as me}from"./VRow-DQz_f7lW.js";import{V as T}from"./VCard-B4eAm_FF.js";import{d as de,r as p,b9 as pe,a6 as U,a as A,o as c,c as x,b as t,f as a,F as L,i as ce,n as r,e as s,aX as u,aj as ue,v as f,x as n,g as O,a0 as h,y as S,s as fe,z as ve}from"./index-CG4YDle8.js";import{V as I}from"./VDivider-XAO4Isda.js";import{V as _e}from"./VDataTableServer-6pmQbLqo.js";import{V as R}from"./VAvatar-Cpp5lqjt.js";import{V as ye}from"./VImg-Ceae0joh.js";import{V as ge}from"./VChip-BK4rdGTF.js";import{V as xe}from"./VMenu-CimFr0Yj.js";import{V as he,a as E}from"./VList-DGHKEnZt.js";import{_ as Ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-BGv4x_9E.js";import"./VPagination-Bc9YScpW.js";import"./form-CZkM9Veq.js";import"./VSelect-DpGjWdw8.js";import"./VTextField-C70jzcwf.js";/* empty css                   */import"./VCounter-CAk6rpva.js";import"./index-3yW8ycYk.js";import"./index-BqfGL0sV.js";import"./VField-0RQfECqQ.js";import"./easing-CjukEv2V.js";import"./VInput-BdawH32X.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-D266Airq.js";import"./VOverlay-CTys7ddd.js";import"./lazy-4Tgz6YKL.js";import"./scopeId-HaKwWatL.js";import"./VCheckboxBtn-D6KcQavv.js";import"./VSelectionControl-C1v3DFU4.js";import"./index-B3bPRkoL.js";import"./createSimpleFunctional-DJacVvXz.js";/* empty css              */import"./VDataTable-X0kH0C9S.js";import"./VTable-D_zizoqw.js";import"./filter-DDWJXbXz.js";import"./VSlideGroup-Dou1qSvD.js";import"./ssrBoot-Cols04Sp.js";const be={class:"d-flex flex-column"},ke={class:"text-h4"},we={class:"text-body-1"},De={class:"d-flex justify-sm-space-between justify-start flex-wrap gap-4"},Ce={class:"d-flex gap-x-4 align-center"},Pe={class:"d-flex align-center gap-x-3"},$e={key:1,class:"font-weight-medium"},Be={class:"d-flex flex-column"},ze={class:"text-body-1 font-weight-medium"},Te={class:"text-body-2"},Ue={style:{"line-height":"22px"}},Ae={class:"d-flex align-center"},Le=["src"],Oe={class:"text-body-1"},Se=de({__name:"index",async setup(Ie){let v,V;const _=p([{title:"Pending Payment",value:56,icon:"tabler-calendar-stats"},{title:"Completed",value:12689,icon:"tabler-checks"},{title:"Refunded",value:124,icon:"tabler-wallet"},{title:"Failed",value:32,icon:"tabler-alert-octagon"}]),F=B(ae,te),N=B(re,oe),y=p(""),m=p(10),d=p(1),b=p(),k=p(),j=[{title:"Order",key:"order"},{title:"Date",key:"date"},{title:"Customers",key:"customers"},{title:"Payment",key:"payment",sortable:!1},{title:"Status",key:"status"},{title:"Method",key:"method",sortable:!1},{title:"Action",key:"actions",sortable:!1}],q=o=>{var l,g;b.value=(l=o.sortBy[0])==null?void 0:l.key,k.value=(g=o.sortBy[0])==null?void 0:g.order},w=o=>{if(o===1)return{text:"Paid",color:"success"};if(o===2)return{text:"Pending",color:"warning"};if(o===3)return{text:"Cancelled",color:"secondary"};if(o===4)return{text:"Failed",color:"error"}},M=o=>{if(o==="Delivered")return{text:"Delivered",color:"success"};if(o==="Out for Delivery")return{text:"Out for Delivery",color:"primary"};if(o==="Ready to Pickup")return{text:"Ready to Pickup",color:"info"};if(o==="Dispatched")return{text:"Dispatched",color:"warning"}},{data:D,execute:G}=([v,V]=pe(()=>se(le("/apps/ecommerce/orders",{query:{q:y,page:d,itemsPerPage:m,sortBy:b,orderBy:k}}))),v=await v,V(),v),Q=U(()=>D.value.orders),C=U(()=>D.value.total),X=async o=>{await ie(`/apps/ecommerce/orders/${o}`,{method:"DELETE"}),G()};return(o,l)=>{const g=ee,H=Z,P=A("RouterLink"),J=A("IconBtn"),K=Y;return c(),x("div",null,[t(T,{class:"mb-6"},{default:a(()=>[t(z,null,{default:a(()=>[t(ne,null,{default:a(()=>[(c(!0),x(L,null,ce(r(_),(e,i)=>(c(),x(L,{key:i},[t(me,{cols:"12",sm:"6",md:"3",class:"px-6"},{default:a(()=>[s("div",{class:S(["d-flex justify-space-between",o.$vuetify.display.xs?i!==r(_).length-1?"border-b pb-4":"":o.$vuetify.display.sm&&i<r(_).length/2?"border-b pb-4":""])},[s("div",be,[s("h4",ke,n(e.value),1),s("div",we,n(e.title),1)]),t(R,{variant:"tonal",rounded:"",size:"42"},{default:a(()=>[t(h,{icon:e.icon,size:"26",class:"text-high-emphasis"},null,8,["icon"])]),_:2},1024)],2)]),_:2},1024),(o.$vuetify.display.mdAndUp?i!==r(_).length-1:o.$vuetify.display.smAndUp&&i%2===0)?(c(),O(I,{key:0,vertical:"",inset:"",length:"60"})):ve("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t(T,null,{default:a(()=>[t(z,null,{default:a(()=>[s("div",De,[t(g,{modelValue:r(y),"onUpdate:modelValue":l[0]||(l[0]=e=>u(y)?y.value=e:null),placeholder:"Search Order",style:{"max-inline-size":"200px","min-inline-size":"200px"}},null,8,["modelValue"]),s("div",Ce,[t(H,{modelValue:r(m),"onUpdate:modelValue":l[1]||(l[1]=e=>u(m)?m.value=e:null),style:{"min-inline-size":"6.25rem"},items:[5,10,20,50,100]},null,8,["modelValue"]),t(ue,{variant:"tonal",color:"secondary","prepend-icon":"tabler-upload",text:"Export"})])])]),_:1}),t(I),t(_e,{"items-per-page":r(m),"onUpdate:itemsPerPage":l[3]||(l[3]=e=>u(m)?m.value=e:null),page:r(d),"onUpdate:page":l[4]||(l[4]=e=>u(d)?d.value=e:null),headers:j,items:r(Q),"item-value":"order","items-length":r(C),"show-select":"",class:"text-no-wrap","onUpdate:options":q},{"item.order":a(({item:e})=>[t(P,{to:{name:"apps-ecommerce-order-details-id",params:{id:e.order}}},{default:a(()=>[f(" #"+n(e.order),1)]),_:2},1032,["to"])]),"item.date":a(({item:e})=>[f(n(new Date(e.date).toDateString()),1)]),"item.customers":a(({item:e})=>[s("div",Pe,[t(R,{size:"34",color:e.avatar.length?"":"primary",variant:e.avatar.length?void 0:"tonal"},{default:a(()=>[e.avatar?(c(),O(ye,{key:0,src:e.avatar},null,8,["src"])):(c(),x("span",$e,n(("avatarText"in o?o.avatarText:r(W))(e.customer)),1))]),_:2},1032,["color","variant"]),s("div",Be,[s("div",ze,[t(P,{to:{name:"pages-user-profile-tab",params:{tab:"profile"}},class:"text-link"},{default:a(()=>[f(n(e.customer),1)]),_:2},1024)]),s("div",Te,n(e.email),1)])])]),"item.payment":a(({item:e})=>{var i,$;return[s("div",{class:S([`text-${(i=w(e.payment))==null?void 0:i.color}`,"font-weight-medium d-flex align-center gap-x-2"])},[t(h,{icon:"tabler-circle-filled",size:"10"}),s("div",Ue,n(($=w(e.payment))==null?void 0:$.text),1)],2)]}),"item.status":a(({item:e})=>[t(ge,fe(M(e.status),{label:"",size:"small"}),null,16)]),"item.method":a(({item:e})=>[s("div",Ae,[s("img",{src:e.method==="mastercard"?r(F):r(N),height:"18"},null,8,Le),s("div",Oe," ..."+n(e.method==="mastercard"?e.methodNumber:"@gmail.com"),1)])]),"item.actions":a(({item:e})=>[t(J,null,{default:a(()=>[t(h,{icon:"tabler-dots-vertical"}),t(xe,{activator:"parent"},{default:a(()=>[t(he,null,{default:a(()=>[t(E,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:e.order}}},{default:a(()=>[f(" View ")]),_:2},1032,["to"]),t(E,{value:"delete",onClick:i=>X(e.id)},{default:a(()=>[f(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:a(()=>[t(K,{page:r(d),"onUpdate:page":l[2]||(l[2]=e=>u(d)?d.value=e:null),"items-per-page":r(m),"total-items":r(C)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})])}}}),At=Ve(Se,[["__scopeId","data-v-7a1bb51b"]]);export{At as default};
