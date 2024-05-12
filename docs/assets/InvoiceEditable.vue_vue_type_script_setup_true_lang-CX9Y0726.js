import{_ as F}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-Bbbk2KJN.js";import{_ as N}from"./AppTextField.vue_vue_type_script_setup_true_lang-0HTERlGV.js";import{_ as j,V as E}from"./AppTextarea.vue_vue_type_script_setup_true_lang-Dfy0HsoT.js";import{_ as M}from"./AppSelect.vue_vue_type_script_setup_true_lang-CrhVdGdy.js";import{a as p,V as T}from"./VRow-DQz_f7lW.js";import{V as z}from"./VTooltip-qjivppBe.js";import{d as P,r as h,bf as O,w as U,a6 as W,a as H,o as V,c as $,e,b as t,f as o,n as s,aX as C,v as g,x as c,y,a0 as J,F as S,g as L,I as B,z as X,i as q,aj as G}from"./index-CG4YDle8.js";import{V as R}from"./VCard-B4eAm_FF.js";import{V as K}from"./VNodeRenderer-Dj87acqk.js";import{u as Q}from"./useApi-1RPI4bAV.js";import{V as Z}from"./VSelect-DpGjWdw8.js";import{V as w}from"./VDivider-XAO4Isda.js";const ee={class:"add-products-header mb-2 d-none d-md-flex mb-4"},te=e("h6",{class:"text-h6"}," Item ",-1),se=e("h6",{class:"text-h6 ps-2"}," Cost ",-1),le=e("h6",{class:"text-h6 ps-2"}," Hours ",-1),oe=e("h6",{class:"text-h6"}," Price ",-1),ae={class:"pa-6 flex-grow-1"},ne={class:"text-high-emphasis text-no-wrap mt-4"},ie=e("p",{class:"mb-1"}," Discount ",-1),de=e("span",null,"0%",-1),ce={class:"mx-2"},me={class:"my-2"},re=e("span",{class:"d-inline d-md-none"},"Price: ",-1),ue={class:"text-high-emphasis"},pe=P({__name:"InvoiceProductEdit",props:{id:{},data:{default:()=>({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(A,{emit:I}){const i=A,x=I,a=[{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,hours:1,description:"Vuetify admin template."},{title:"App Development",cost:32,hours:1,description:"Native App Development."}],_=h("App Customization"),d=h(structuredClone(O(i.data)));U(_,()=>{const D=a.filter(m=>m.title===_.value);d.value=D[0]});const v=()=>{x("removeProduct",i.id)},f=W(()=>Number(d.value.cost)*Number(d.value.hours));return U(f,()=>{x("totalAmount",f.value)},{immediate:!0}),(D,m)=>{const k=M,r=j,l=N,b=H("IconBtn");return V(),$(S,null,[e("div",ee,[t(T,{class:"me-10"},{default:o(()=>[t(p,{cols:"12",md:"6"},{default:o(()=>[te]),_:1}),t(p,{cols:"12",md:"2"},{default:o(()=>[se]),_:1}),t(p,{cols:"12",md:"2"},{default:o(()=>[le]),_:1}),t(p,{cols:"12",md:"2"},{default:o(()=>[oe]),_:1})]),_:1})]),t(R,{flat:"",border:"",class:"d-flex flex-sm-row flex-column-reverse"},{default:o(()=>[e("div",ae,[t(T,null,{default:o(()=>[t(p,{cols:"12",md:"6"},{default:o(()=>[t(k,{modelValue:s(_),"onUpdate:modelValue":m[0]||(m[0]=u=>C(_)?_.value=u:null),items:a,"item-title":"title","item-value":"title",placeholder:"Select Item",class:"mb-6"},null,8,["modelValue"]),t(r,{modelValue:s(d).description,"onUpdate:modelValue":m[1]||(m[1]=u=>s(d).description=u),rows:"2",placeholder:"Item description","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t(l,{modelValue:s(d).cost,"onUpdate:modelValue":m[2]||(m[2]=u=>s(d).cost=u),type:"number",placeholder:"Cost",class:"mb-6"},null,8,["modelValue"]),e("div",ne,[ie,de,e("span",ce,[g(" 0% "),t(z,{activator:"parent"},{default:o(()=>[g("Tax 1")]),_:1})]),e("span",null,[g(" 0% "),t(z,{activator:"parent"},{default:o(()=>[g("Tax 2")]),_:1})])])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:o(()=>[t(l,{modelValue:s(d).hours,"onUpdate:modelValue":m[3]||(m[3]=u=>s(d).hours=u),type:"number",placeholder:"5"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:o(()=>[e("p",me,[re,e("span",ue,"$"+c(s(f)),1)])]),_:1})]),_:1})]),e("div",{class:y(["d-flex flex-column align-end item-actions",D.$vuetify.display.smAndUp?"border-s":"border-b"])},[t(b,{size:"36",onClick:v},{default:o(()=>[t(J,{size:24,icon:"tabler-x"})]),_:1})],2)]),_:1})],64)}}}),_e={class:"d-flex flex-wrap justify-space-between flex-column rounded bg-var-theme-background flex-sm-row gap-6 pa-6 mb-6"},he={class:"d-flex align-center app-logo mb-6"},fe={class:"app-logo-title"},xe=e("p",{class:"text-high-emphasis mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),ve=e("p",{class:"text-high-emphasis mb-0"}," San Diego County, CA 91905, USA ",-1),be=e("p",{class:"text-high-emphasis mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),Ve={class:"d-flex flex-column gap-2"},ge={class:"d-flex align-start align-sm-center gap-x-4 font-weight-medium text-lg flex-column flex-sm-row"},ye=e("span",{class:"text-high-emphasis text-sm-end",style:{"inline-size":"5.625rem"}},"Invoice:",-1),De={class:"d-flex gap-x-4 align-start align-sm-center flex-column flex-sm-row"},we=e("span",{class:"text-high-emphasis text-sm-end",style:{"inline-size":"5.625rem"}},"Date Issued:",-1),$e={style:{"inline-size":"9.5rem"}},Ce={class:"d-flex gap-x-4 align-start align-sm-center flex-column flex-sm-row"},Ae=e("span",{class:"text-high-emphasis text-sm-end",style:{"inline-size":"5.625rem"}},"Due Date:",-1),Ie={style:{"min-inline-size":"9.5rem"}},ke=e("h6",{class:"text-h6 mb-4"}," Invoice To: ",-1),Te={class:"mb-0"},ze={class:"mb-0"},Ue={key:0,class:"mb-0"},Be={class:"mb-0"},Ne={class:"mb-0"},Pe=e("h6",{class:"text-h6 mb-4"}," Bill To: ",-1),Se=e("td",{class:"pe-4"}," Total Due: ",-1),Re=e("td",{class:"pe-4"}," Bank Name: ",-1),Ye=e("td",{class:"pe-4"}," Country: ",-1),Fe=e("td",{class:"pe-4"}," IBAN: ",-1),je={class:"text-wrap me-4"},Ee=e("td",{class:"pe-4"}," SWIFT Code: ",-1),Me={class:"add-products-form"},Oe={class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},We={class:"mb-6 mb-sm-0"},He={class:"d-flex align-center mb-4"},Je=e("h6",{class:"text-h6 me-2"}," Salesperson: ",-1),Le={class:"w-100"},Xe=e("td",{class:"pe-16"}," Subtotal: ",-1),qe=e("h6",{class:"text-h6"}," $1800 ",-1),Ge=[qe],Ke=e("td",{class:"pe-16"}," Discount: ",-1),Qe=e("h6",{class:"text-h6"}," $28 ",-1),Ze=[Qe],et=e("td",{class:"pe-16"}," Tax: ",-1),tt=e("h6",{class:"text-h6"}," 21% ",-1),st=[tt],lt={class:"w-100"},ot=e("td",{class:"pe-16"}," Total: ",-1),at=e("h6",{class:"text-h6"}," $1690 ",-1),nt=[at],it=e("h6",{class:"text-h6 mb-2"}," Note: ",-1),Vt=P({__name:"InvoiceEditable",props:{data:{}},emits:["push","remove"],setup(A,{emit:I}){const i=A,x=I,a=h(i.data.invoice),_=h(i.data.salesperson),d=h(i.data.thanksNote),v=h(i.data.note),f=h([]);(async()=>{const{data:r,error:l}=await Q("/apps/invoice/clients");l.value?console.log(l.value):f.value=r.value})();const m=()=>{x("push",{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})},k=r=>{x("remove",r)};return(r,l)=>{const b=N,u=F;return V(),L(R,{class:"pa-6 pa-sm-12"},{default:o(()=>[e("div",_e,[e("div",null,[e("div",he,[t(s(K),{nodes:s(B).app.logo},null,8,["nodes"]),e("h6",fe,c(s(B).app.title),1)]),xe,ve,be]),e("div",Ve,[e("div",ge,[ye,e("span",null,[t(b,{modelValue:s(a).id,"onUpdate:modelValue":l[0]||(l[0]=n=>s(a).id=n),disabled:"",prefix:"#",style:{"inline-size":"9.5rem"}},null,8,["modelValue"])])]),e("div",De,[we,e("span",$e,[t(u,{modelValue:s(a).issuedDate,"onUpdate:modelValue":l[1]||(l[1]=n=>s(a).issuedDate=n),placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])]),e("div",Ce,[Ae,e("span",Ie,[t(u,{modelValue:s(a).dueDate,"onUpdate:modelValue":l[2]||(l[2]=n=>s(a).dueDate=n),placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])])])]),t(T,null,{default:o(()=>[t(p,{class:"text-no-wrap"},{default:o(()=>[ke,t(Z,{modelValue:s(a).client,"onUpdate:modelValue":l[3]||(l[3]=n=>s(a).client=n),items:s(f),"item-title":"name","item-value":"name",placeholder:"Select Client","return-object":"",class:"mb-4",style:{"inline-size":"11.875rem"}},null,8,["modelValue","items"]),e("p",Te,c(s(a).client.name),1),e("p",ze,c(s(a).client.company),1),s(a).client.address?(V(),$("p",Ue,c(s(a).client.address)+", "+c(s(a).client.country),1)):X("",!0),e("p",Be,c(s(a).client.contact),1),e("p",Ne,c(s(a).client.companyEmail),1)]),_:1}),t(p,{class:"text-no-wrap"},{default:o(()=>[Pe,e("table",null,[e("tbody",null,[e("tr",null,[Se,e("td",null,c(i.data.paymentDetails.totalDue),1)]),e("tr",null,[Re,e("td",null,c(i.data.paymentDetails.bankName),1)]),e("tr",null,[Ye,e("td",null,c(i.data.paymentDetails.country),1)]),e("tr",null,[Fe,e("td",null,[e("p",je,c(i.data.paymentDetails.iban),1)])]),e("tr",null,[Ee,e("td",null,c(i.data.paymentDetails.swiftCode),1)])])])]),_:1})]),_:1}),t(w,{class:"my-6 border-dashed"}),e("div",Me,[(V(!0),$(S,null,q(i.data.purchasedProducts,(n,Y)=>(V(),$("div",{key:n.title,class:"mb-4"},[t(pe,{id:Y,data:n,onRemoveProduct:k},null,8,["id","data"])]))),128)),t(G,{size:"small","prepend-icon":"tabler-plus",onClick:m},{default:o(()=>[g(" Add Item ")]),_:1})]),t(w,{class:"my-6 border-dashed"}),e("div",Oe,[e("div",We,[e("div",He,[Je,t(b,{modelValue:s(_),"onUpdate:modelValue":l[4]||(l[4]=n=>C(_)?_.value=n:null),style:{"inline-size":"8rem"},placeholder:"John Doe"},null,8,["modelValue"])]),t(b,{modelValue:s(d),"onUpdate:modelValue":l[5]||(l[5]=n=>C(d)?d.value=n:null),placeholder:"Thanks for your business"},null,8,["modelValue"])]),e("div",null,[e("table",Le,[e("tbody",null,[e("tr",null,[Xe,e("td",{class:y(r.$vuetify.locale.isRtl?"text-start":"text-end")},Ge,2)]),e("tr",null,[Ke,e("td",{class:y(r.$vuetify.locale.isRtl?"text-start":"text-end")},Ze,2)]),e("tr",null,[et,e("td",{class:y(r.$vuetify.locale.isRtl?"text-start":"text-end")},st,2)])])]),t(w,{class:"mt-4 mb-3"}),e("table",lt,[e("tbody",null,[e("tr",null,[ot,e("td",{class:y(r.$vuetify.locale.isRtl?"text-start":"text-end")},nt,2)])])])])]),t(w,{class:"my-6 border-dashed"}),e("div",null,[it,t(E,{modelValue:s(v),"onUpdate:modelValue":l[6]||(l[6]=n=>C(v)?v.value=n:null),placeholder:"Write note here...",rows:2},null,8,["modelValue"])])]),_:1})}}});export{Vt as _};
