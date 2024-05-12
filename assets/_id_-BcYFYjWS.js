import{V as B}from"./VNodeRenderer-CLzHspki.js";import{d as $,j as O,r as h,b9 as N,n as e,o as v,c as y,b as s,f as a,e as t,I as D,x as o,F as P,i as R,y as f,aj as d,v as c,aX as k}from"./index-BeLTEjCy.js";import{_ as A}from"./InvoiceAddPaymentDrawer.vue_vue_type_script_setup_true_lang-Cq3zw2M5.js";import{_ as E}from"./InvoiceSendInvoiceDrawer.vue_vue_type_script_setup_true_lang-BwrwuBux.js";import{u as j}from"./useApi-BsF5RjSM.js";import{a as b,V}from"./VRow-ByV45v36.js";import{V as S}from"./VCard-DURbdVXM.js";import{V as q}from"./VTable-dXT6FESf.js";import{V as C}from"./VDivider-CTPUEoQR.js";import{V as L}from"./VCardText-Bnw_0Ad8.js";import{V as U}from"./VAlert-6Th87USg.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-8xBr4Ndp.js";import"./form-BdvgVXut.js";/* empty css                   */import"./VCounter-BO-S6CfJ.js";import"./index-Ca8VmAEl.js";import"./index-DtJPKLW_.js";import"./VField-CcQl1I3Y.js";import"./easing-CjukEv2V.js";import"./VInput-COVG7mi8.js";import"./forwardRefs-C-GTDzx5.js";import"./AppSelect.vue_vue_type_script_setup_true_lang-C88Pl2Sk.js";import"./VSelect-Dk_LXVUv.js";import"./VTextField-BwMufIF5.js";import"./VList-CTSQos4i.js";import"./ssrBoot-d_gcbXPz.js";import"./createSimpleFunctional-CzKn2eea.js";import"./VAvatar-CfEzLxMA.js";import"./VImg-DpV41Ira.js";import"./dialog-transition-6jHcHDj8.js";import"./VMenu-BsQUD-MO.js";import"./VOverlay-BqK74oON.js";import"./lazy-LEasqoyO.js";import"./scopeId-C7hiE21k.js";import"./VCheckboxBtn-PVW3ceH_.js";import"./VSelectionControl-Cx1kK85d.js";import"./VChip-DMUNy-6X.js";import"./VSlideGroup-CgFdL3xr.js";import"./AppDateTimePicker.vue_vue_type_style_index_0_lang-DntyYcMd.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-D3fvFnUs.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-BlaiTfLl.js";import"./VSpacer-zZMlcYr2.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-TsRbaCTd.js";import"./VForm-CGMpyZQJ.js";import"./VNavigationDrawer-BebF79bm.js";const W={key:0},F={class:"invoice-header-preview d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded pa-6 mb-6"},M={class:"d-flex align-center app-logo mb-6"},z={class:"app-logo-title"},G=t("h6",{class:"text-h6 font-weight-regular"}," Office 149, 450 South Brand Brooklyn ",-1),Y=t("h6",{class:"text-h6 font-weight-regular"}," San Diego County, CA 91905, USA ",-1),H=t("h6",{class:"text-h6 font-weight-regular"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),J={class:"font-weight-medium text-lg mb-6"},Q={class:"text-h6 font-weight-regular"},X=t("span",null,"Date Issued: ",-1),K={class:"text-h6 font-weight-regular"},Z=t("span",null,"Due Date: ",-1),tt=t("h6",{class:"text-h6 mb-4"}," Invoice To: ",-1),et={class:"mb-0"},st={class:"mb-0"},ot={class:"mb-0"},at={class:"mb-0"},nt={class:"mb-0"},lt=t("h6",{class:"text-h6 mb-4"}," Bill To: ",-1),it=t("td",{class:"pe-4"}," Total Due: ",-1),rt=t("td",{class:"pe-4"}," Bank Name: ",-1),ct=t("td",{class:"pe-4"}," Country: ",-1),dt=t("td",{class:"pe-4"}," IBAN: ",-1),pt=t("td",{class:"pe-4"}," SWIFT Code: ",-1),mt=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," ITEM "),t("th",{scope:"col"}," DESCRIPTION "),t("th",{scope:"col",class:"text-center"}," HOURS "),t("th",{scope:"col",class:"text-center"}," QTY "),t("th",{scope:"col",class:"text-center"}," TOTAL ")])],-1),ut={class:"text-base"},_t={class:"text-no-wrap"},ht={class:"text-no-wrap"},ft={class:"text-center"},bt={class:"text-center"},wt={class:"text-center"},xt={class:"d-flex justify-space-between flex-column flex-sm-row print-row"},vt=t("div",{class:"mb-2"},[t("div",{class:"d-flex align-center mb-1"},[t("h6",{class:"text-h6 me-2"}," Salesperson: "),t("span",null,"Jenny Parker")]),t("p",null,"Thanks for your business")],-1),yt={class:"w-100"},gt=t("td",{class:"pe-16"}," Subtotal: ",-1),Dt=t("h6",{class:"text-base font-weight-medium"}," $1800 ",-1),kt=[Dt],Vt=t("td",{class:"pe-16"}," Discount: ",-1),St=t("h6",{class:"text-base font-weight-medium"}," $28 ",-1),Ct=[St],Tt=t("td",{class:"pe-16"}," Tax: ",-1),It=t("h6",{class:"text-base font-weight-medium"}," 21% ",-1),Bt=[It],$t={class:"w-100"},Ot=t("td",{class:"pe-16"}," Total: ",-1),Nt=t("h6",{class:"text-base font-weight-medium"}," $1690 ",-1),Pt=[Nt],Rt=t("p",{class:"mb-0"},[t("span",{class:"text-high-emphasis font-weight-medium me-1"}," Note: "),t("span",null,"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")],-1),At={class:"d-flex flex-wrap gap-4"},Et={key:1},$e=$({__name:"[id]",async setup(jt){let p,g;const w=O(),m=h(!1),u=h(!1),l=h(),r=h(),{data:x}=([p,g]=N(()=>j(`/apps/invoice/${Number(w.params.id)}`)),p=await p,g(),p);x.value&&(l.value=x.value.invoice,r.value=x.value.paymentDetails);const T=[{name:"Premium Branding Package",description:"Branding & Promotion",qty:1,hours:15,price:32},{name:"SMM",description:"Social media templates",qty:1,hours:14,price:28},{name:"Web Design",description:"Web designing package",qty:1,hours:12,price:24},{name:"SEO",description:"Search engine optimization",qty:1,hours:5,price:22}],I=()=>{window.print()};return(_,i)=>e(l)&&e(r)?(v(),y("section",W,[s(V,null,{default:a(()=>[s(b,{cols:"12",md:"9"},{default:a(()=>[s(S,{class:"invoice-preview-wrapper pa-6 pa-sm-12"},{default:a(()=>[t("div",F,[t("div",null,[t("div",M,[s(e(B),{nodes:e(D).app.logo},null,8,["nodes"]),t("h6",z,o(e(D).app.title),1)]),G,Y,H]),t("div",null,[t("h6",J," Invoice #"+o(e(l).id),1),t("h6",Q,[X,t("span",null,o(new Date(e(l).issuedDate).toLocaleDateString("en-GB")),1)]),t("h6",K,[Z,t("span",null,o(new Date(e(l).dueDate).toLocaleDateString("en-GB")),1)])])]),s(V,{class:"print-row mb-6"},{default:a(()=>[s(b,{class:"text-no-wrap"},{default:a(()=>[tt,t("p",et,o(e(l).client.name),1),t("p",st,o(e(l).client.company),1),t("p",ot,o(e(l).client.address)+", "+o(e(l).client.country),1),t("p",at,o(e(l).client.contact),1),t("p",nt,o(e(l).client.companyEmail),1)]),_:1}),s(b,{class:"text-no-wrap"},{default:a(()=>[lt,t("table",null,[t("tbody",null,[t("tr",null,[it,t("td",null,o(e(r).totalDue),1)]),t("tr",null,[rt,t("td",null,o(e(r).bankName),1)]),t("tr",null,[ct,t("td",null,o(e(r).country),1)]),t("tr",null,[dt,t("td",null,o(e(r).iban),1)]),t("tr",null,[pt,t("td",null,o(e(r).swiftCode),1)])])])]),_:1})]),_:1}),s(q,{class:"invoice-preview-table border text-high-emphasis overflow-hidden mb-6"},{default:a(()=>[mt,t("tbody",ut,[(v(),y(P,null,R(T,n=>t("tr",{key:n.name},[t("td",_t,o(n.name),1),t("td",ht,o(n.description),1),t("td",ft,o(n.hours),1),t("td",bt,o(n.qty),1),t("td",wt," $"+o(n.price),1)])),64))])]),_:1}),t("div",xt,[vt,t("div",null,[t("table",yt,[t("tbody",null,[t("tr",null,[gt,t("td",{class:f(_.$vuetify.locale.isRtl?"text-start":"text-end")},kt,2)]),t("tr",null,[Vt,t("td",{class:f(_.$vuetify.locale.isRtl?"text-start":"text-end")},Ct,2)]),t("tr",null,[Tt,t("td",{class:f(_.$vuetify.locale.isRtl?"text-start":"text-end")},Bt,2)])])]),s(C,{class:"my-2"}),t("table",$t,[t("tbody",null,[t("tr",null,[Ot,t("td",{class:f(_.$vuetify.locale.isRtl?"text-start":"text-end")},Pt,2)])])])])]),s(C,{class:"my-6 border-dashed"}),Rt]),_:1})]),_:1}),s(b,{cols:"12",md:"3",class:"d-print-none"},{default:a(()=>[s(S,null,{default:a(()=>[s(L,null,{default:a(()=>[s(d,{block:"","prepend-icon":"tabler-send",class:"mb-4",onClick:i[0]||(i[0]=n=>u.value=!0)},{default:a(()=>[c(" Send Invoice ")]),_:1}),s(d,{block:"",color:"secondary",variant:"tonal",class:"mb-4"},{default:a(()=>[c(" Download ")]),_:1}),t("div",At,[s(d,{variant:"tonal",color:"secondary",class:"flex-grow-1",onClick:I},{default:a(()=>[c(" Print ")]),_:1}),s(d,{color:"secondary",variant:"tonal",class:"mb-4 flex-grow-1",to:{name:"apps-invoice-edit-id",params:{id:e(w).params.id}}},{default:a(()=>[c(" Edit ")]),_:1},8,["to"])]),s(d,{block:"","prepend-icon":"tabler-currency-dollar",color:"success",onClick:i[1]||(i[1]=n=>m.value=!0)},{default:a(()=>[c(" Add Payment ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(A,{isDrawerOpen:e(m),"onUpdate:isDrawerOpen":i[2]||(i[2]=n=>k(m)?m.value=n:null)},null,8,["isDrawerOpen"]),s(E,{isDrawerOpen:e(u),"onUpdate:isDrawerOpen":i[3]||(i[3]=n=>k(u)?u.value=n:null)},null,8,["isDrawerOpen"])])):(v(),y("section",Et,[s(U,{type:"error",variant:"tonal"},{default:a(()=>[c(" Invoice with ID "+o(e(w).params.id)+" not found! ",1)]),_:1})]))}});export{$e as default};