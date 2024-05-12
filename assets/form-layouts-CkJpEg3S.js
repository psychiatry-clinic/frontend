import{_ as re}from"./CustomRadiosWithIcon-Chf4bF2J.js";import{_ as J}from"./AppSelect.vue_vue_type_script_setup_true_lang-CUM7xL_a.js";import{_ as oe}from"./AppTextarea.vue_vue_type_script_setup_true_lang-guWQwSSl.js";import{_ as P}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import{d as I,r as i,a,o as N,g as B,f as l,e as u,b as e,v as y,n as o,c as W,F as K,i as te,y as H,K as ee,L as le,Q as me,R as ie,aj as M,ad as p,x as ce}from"./index-B-uKkDM3.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ue}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-BwL2z7_Y.js";import{r as q,e as Ve}from"./validators-DR7cptrM.js";import{_ as be}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-D4FjpNKY.js";import{_ as fe}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import"./transition-93Gr3-GY.js";import"./form-CdnDFzDY.js";import"./helpers-BGv4x_9E.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const z=L=>(me("data-v-f9a7bb63"),L=L(),ie(),L),Ce={class:"w-100 sticky-header overflow-hidden rounded-t"},_e={class:"d-flex align-center gap-4 flex-wrap bg-custom-background pa-6"},he=z(()=>u("h5",{class:"text-h5 mb-6"}," 1. Delivery Address ",-1)),ve=z(()=>u("p",{class:"text-high-emphasis text-base mb-1"}," Address Type ",-1)),xe=z(()=>u("h5",{class:"text-h5 mb-6"}," 2. Delivery Type ",-1)),ye=z(()=>u("h5",{class:"text-h5 mb-6"}," 3. Apply Promo code ",-1)),we={class:"d-flex align-center gap-4"},Fe={class:"d-flex align-center gap-2 my-4"},ge=z(()=>u("span",null,"OR",-1)),ke=z(()=>u("h5",{class:"text-h5 mb-6"}," 4. Payment Method ",-1)),Ae=z(()=>u("p",null," Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ",-1)),Te=z(()=>u("p",null,"You can pay cash or make the payment via debit/credit card directly to the delivery person.",-1)),Re=[Ae,Te],Ne=I({__name:"DemoFormLayoutSticky",setup(L){const _=[{title:"Standard",desc:"Delivery in 3-5 days.",value:"standard",icon:{icon:"tabler-briefcase-2",size:"32"}},{title:"Express",desc:"Delivery within 2 days.",value:"express",icon:{icon:"tabler-rocket",size:"32"}},{title:"Overnight",desc:"Delivery within a days.",value:"overnight",icon:{icon:"tabler-crown",size:"32"}}],h=[{code:"TAKEITALL",desc:"Apply this code to get 15% discount on orders above 20$."},{code:"FESTIVE10",desc:"Apply this code to get 10% discount on all orders."},{code:"MYSTERYDEAL",desc:"Apply this code to get discount between 10% - 50%."}],n=i({fullName:"",email:"",contactNumber:null,altContactNumber:null,address:"",pincode:null,Landmark:"",city:"",state:null,defaultAddress:!1,addressType:"home",deliveryType:"overnight",promoCode:"",paymentMethod:"card",cardNumber:null,cardName:"",cardExDate:"",cardCvv:""});return(V,s)=>{const g=a("VCardTitle"),m=a("VSpacer"),t=a("VBtn"),d=P,r=a("VCol"),f=oe,k=J,F=a("VCheckbox"),c=a("VRadio"),T=a("VRadioGroup"),b=a("VRow"),A=a("VDivider"),D=re,U=a("VListItem"),S=a("VList"),E=a("VForm"),$=a("VCardText"),C=a("VCard");return N(),B(C,{class:"overflow-visible"},{default:l(()=>[u("div",Ce,[u("div",_e,[e(g,null,{default:l(()=>[y("Sticky Action Bar")]),_:1}),e(m),u("div",null,[e(t,{variant:"tonal",class:"me-4"},{default:l(()=>[y(" Back ")]),_:1}),e(t,null,{default:l(()=>[y("Place Order")]),_:1})])])]),e($,null,{default:l(()=>[e(b,null,{default:l(()=>[e(r,{md:"8",cols:"12",class:"mx-auto"},{default:l(()=>[e(E,null,{default:l(()=>[he,e(b,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:o(n).fullName,"onUpdate:modelValue":s[0]||(s[0]=v=>o(n).fullName=v),label:"Full Name",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:o(n).email,"onUpdate:modelValue":s[1]||(s[1]=v=>o(n).email=v),label:"Email",placeholder:"john.doe",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:o(n).contactNumber,"onUpdate:modelValue":s[2]||(s[2]=v=>o(n).contactNumber=v),label:"Contact Number",placeholder:"658 123 4567",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:o(n).altContactNumber,"onUpdate:modelValue":s[3]||(s[3]=v=>o(n).altContactNumber=v),label:"Alternate Number",placeholder:"658 123 4567",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(f,{modelValue:o(n).address,"onUpdate:modelValue":s[4]||(s[4]=v=>o(n).address=v),label:"Address",placeholder:"1456, Mall Road",rows:"2"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:o(n).pincode,"onUpdate:modelValue":s[5]||(s[5]=v=>o(n).pincode=v),label:"Pincode",placeholder:"658468",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:o(n).Landmark,"onUpdate:modelValue":s[6]||(s[6]=v=>o(n).Landmark=v),label:"Landmark",placeholder:"Nr. Wall Street"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{modelValue:o(n).city,"onUpdate:modelValue":s[7]||(s[7]=v=>o(n).city=v),label:"City",placeholder:"Jackson"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(k,{modelValue:o(n).state,"onUpdate:modelValue":s[8]||(s[8]=v=>o(n).state=v),label:"State",placeholder:"Select State",items:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(F,{modelValue:o(n).defaultAddress,"onUpdate:modelValue":s[9]||(s[9]=v=>o(n).defaultAddress=v),label:"Use this as default delivery address"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[ve,e(T,{modelValue:o(n).addressType,"onUpdate:modelValue":s[10]||(s[10]=v=>o(n).addressType=v),inline:""},{default:l(()=>[e(c,{label:"Home (All day delivery)",value:"home"}),e(c,{label:"Office (Delivery between 10 AM - 5 PM)",value:"work"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(A,{class:"my-4"}),xe,e(D,{"selected-radio":o(n).deliveryType,"onUpdate:selectedRadio":s[11]||(s[11]=v=>o(n).deliveryType=v),"radio-content":_,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"]),e(A,{class:"my-4"}),ye,u("div",we,[e(d,{modelValue:o(n).promoCode,"onUpdate:modelValue":s[12]||(s[12]=v=>o(n).promoCode=v),placeholder:"TAKEITALL"},null,8,["modelValue"]),e(t,null,{default:l(()=>[y("Apply")]),_:1})]),u("div",Fe,[e(A,{style:{"border-style":"dashed"}}),ge,e(A,{style:{"border-style":"dashed"}})]),e(S,{class:"border rounded py-0",lines:"two"},{default:l(()=>[(N(),W(K,null,te(h,(v,j)=>e(U,{key:v.code,title:v.code,subtitle:v.desc,class:H(j!==0?"border-t":"")},{append:l(()=>[e(t,{variant:"tonal"},{default:l(()=>[y(" Apply ")]),_:1})]),_:2},1032,["title","subtitle","class"])),64))]),_:1}),e(A,{class:"my-4"}),ke,e(T,{modelValue:o(n).paymentMethod,"onUpdate:modelValue":s[13]||(s[13]=v=>o(n).paymentMethod=v),inline:"",class:"mb-4"},{default:l(()=>[e(c,{value:"card",label:"Credit/Debit/ATM Card"}),e(c,{value:"cash-on-delivery",label:"Cash On Delivery"})]),_:1},8,["modelValue"]),ee(e(b,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(d,{label:"Card Number",placeholder:"1356 3215 6548 7898"})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(d,{label:"Name",placeholder:"John Doe"})]),_:1}),e(r,{cols:"6",md:"3"},{default:l(()=>[e(d,{label:"Exp. Date",placeholder:"MM/YY"})]),_:1}),e(r,{cols:"6",md:"3"},{default:l(()=>[e(d,{label:"CVV Code",placeholder:"654"})]),_:1})]),_:1},512),[[le,o(n).paymentMethod==="card"]]),ee(u("div",null,Re,512),[[le,o(n).paymentMethod==="cash-on-delivery"]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Le=pe(Ne,[["__scopeId","data-v-f9a7bb63"]]),Be=u("div",{class:"w-100"},[u("div",{class:"d-flex justify-space-between"},[u("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),u("h6",{class:"text-base font-weight-medium"}," Free ")]),u("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1),Ie=u("div",{class:"w-100"},[u("div",{class:"d-flex justify-space-between"},[u("h5",{class:"text-base font-weight-medium"}," Express "),u("h6",{class:"text-base font-weight-medium"}," $5.00 ")]),u("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1),Se=u("div",{class:"w-100"},[u("div",{class:"d-flex justify-space-between"},[u("h6",{class:"text-base font-weight-medium"}," Overnight "),u("h6",{class:"text-base font-weight-medium"}," $10.00 ")]),u("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1),Pe={class:"me-1"},Ue=u("div",{class:"text-high-emphasis"}," Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ",-1),De={class:"d-flex gap-4"},Ee=I({__name:"DemoFormLayoutCollapsible",setup(L){const _=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],h=i("home"),n=i("standard"),V=i("credit-debit-card"),s=i(0),g=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"tabler-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"tabler-help"}];return(m,t)=>{const d=a("VExpansionPanelTitle"),r=P,f=a("VCol"),k=oe,F=J,c=a("VLabel"),T=a("VRadio"),b=a("VRadioGroup"),A=a("VRow"),D=a("VForm"),U=a("VExpansionPanelText"),S=a("VExpansionPanel"),E=a("VIcon"),$=a("VTextField"),C=a("VDivider"),v=a("VBtn"),j=a("VExpansionPanels");return N(),B(j,{modelValue:o(s),"onUpdate:modelValue":t[6]||(t[6]=w=>p(s)?s.value=w:null)},{default:l(()=>[e(S,null,{default:l(()=>[e(d,null,{default:l(()=>[y("Delivery Address")]),_:1}),e(U,null,{default:l(()=>[e(D,{class:"pt-4 pb-2",onSubmit:M(()=>{},["prevent"])},{default:l(()=>[e(A,null,{default:l(()=>[e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Full Name",placeholder:"John Doe"})]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Phone No",type:"number",placeholder:"+1 123 456 7890"})]),_:1}),e(f,{cols:"12"},{default:l(()=>[e(k,{label:"Address",placeholder:"1234 Main St, New York, NY 10001, USA",rows:"3"})]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Pincode",placeholder:"123456",type:"number"})]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"Landmark",placeholder:"Near City Mall"})]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{label:"City",placeholder:"New York"})]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(F,{items:_,label:"State",placeholder:"Select State"})]),_:1}),e(f,{cols:"12"},{default:l(()=>[e(c,{class:"mb-3"},{default:l(()=>[y(" Address Type ")]),_:1}),e(b,{modelValue:o(h),"onUpdate:modelValue":t[0]||(t[0]=w=>p(h)?h.value=w:null),inline:""},{default:l(()=>[u("div",null,[e(T,{label:"Home (All day delivery)",value:"home"}),e(T,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(S,null,{default:l(()=>[e(d,null,{default:l(()=>[y("Delivery Options")]),_:1}),e(U,null,{default:l(()=>[e(b,{modelValue:o(n),"onUpdate:modelValue":t[4]||(t[4]=w=>p(n)?n.value=w:null),class:"delivery-options pt-4 pb-2"},{default:l(()=>[u("div",{class:H(["delivery-option d-flex rounded-t",o(n)==="standard"?"active":""]),onClick:t[1]||(t[1]=w=>n.value="standard")},[e(T,{inline:"",value:"standard",class:"mt-n4"}),Be],2),u("div",{class:H(["delivery-option d-flex",o(n)==="express"?"active":""]),onClick:t[2]||(t[2]=w=>n.value="express")},[e(T,{inline:"",class:"mt-n4",value:"express"}),Ie],2),u("div",{class:H(["delivery-option d-flex rounded-b",o(n)==="overnight"?"active":""]),onClick:t[3]||(t[3]=w=>n.value="overnight")},[e(T,{inline:"",class:"mt-n4",value:"overnight"}),Se],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(S,null,{default:l(()=>[e(d,null,{default:l(()=>[y("Payment Method")]),_:1}),e(U,null,{default:l(()=>[e(A,null,{default:l(()=>[e(f,{md:"6",cols:"12"},{default:l(()=>[e(D,{class:"pt-4 pb-2"},{default:l(()=>[u("div",null,[e(b,{modelValue:o(V),"onUpdate:modelValue":t[5]||(t[5]=w=>p(V)?V.value=w:null),inline:""},{default:l(()=>[u("div",null,[(N(),W(K,null,te(g,w=>e(T,{key:w.radioValue,value:w.radioValue},{label:l(()=>[u("span",Pe,ce(w.radioLabel),1),e(E,{size:"18",icon:w.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),o(V)==="credit-debit-card"?(N(),B(A,{key:0},{default:l(()=>[e(f,{cols:"12"},{default:l(()=>[e(r,{label:"Card Number",type:"number",placeholder:"1234 5678 9012 3456"})]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e($,{label:"Name",placeholder:"john doe"})]),_:1}),e(f,{cols:"6",md:"3"},{default:l(()=>[e($,{label:"Expiry Date",placeholder:"MM/YY"})]),_:1}),e(f,{cols:"6",md:"3"},{default:l(()=>[e($,{label:"CVV Code",type:"number",max:"3",placeholder:"123"})]),_:1})]),_:1})):(N(),B(A,{key:1},{default:l(()=>[e(f,null,{default:l(()=>[Ue]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1}),e(C,{class:"my-5"}),u("div",De,[e(v,null,{default:l(()=>[y("Place Order")]),_:1}),e(v,{color:"secondary",variant:"tonal"},{default:l(()=>[y(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),ze=I({__name:"DemoFormLayoutFormWithTabs",setup(L){const _=i("personal-info"),h=i(""),n=i(""),V=i(),s=i(""),g=i(),m=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],t=["English","German","French","Spanish","Portuguese","Russian","Korean"],d=i(""),r=i(""),f=i(""),k=i(""),F=i(""),c=i(""),T=i(""),b=i(""),A=i(""),D=i(""),U=i([]),S=i(!1),E=i(!1);return($,C)=>{const v=a("VTab"),j=a("VTabs"),w=P,R=a("VCol"),Q=J,ae=ue,Y=a("VRow"),G=a("VForm"),O=a("VWindowItem"),se=a("VWindow"),X=a("VCardText"),ne=a("VDivider"),Z=a("VBtn"),de=a("VCard");return N(),W(K,null,[e(j,{modelValue:o(_),"onUpdate:modelValue":C[0]||(C[0]=x=>p(_)?_.value=x:null)},{default:l(()=>[e(v,{value:"personal-info"},{default:l(()=>[y(" Personal Info ")]),_:1}),e(v,{value:"account-details"},{default:l(()=>[y(" Account Details ")]),_:1}),e(v,{value:"social-links"},{default:l(()=>[y(" Social Links ")]),_:1})]),_:1},8,["modelValue"]),e(de,{flat:""},{default:l(()=>[e(X,null,{default:l(()=>[e(se,{modelValue:o(_),"onUpdate:modelValue":C[19]||(C[19]=x=>p(_)?_.value=x:null),class:"disable-tab-transition"},{default:l(()=>[e(O,{value:"personal-info"},{default:l(()=>[e(G,{class:"mt-2"},{default:l(()=>[e(Y,null,{default:l(()=>[e(R,{md:"6",cols:"12"},{default:l(()=>[e(w,{modelValue:o(h),"onUpdate:modelValue":C[1]||(C[1]=x=>p(h)?h.value=x:null),label:"First name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(R,{md:"6",cols:"12"},{default:l(()=>[e(w,{modelValue:o(n),"onUpdate:modelValue":C[2]||(C[2]=x=>p(n)?n.value=x:null),label:"Last name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(Q,{modelValue:o(V),"onUpdate:modelValue":C[3]||(C[3]=x=>p(V)?V.value=x:null),items:m,label:"Country",placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(Q,{modelValue:o(U),"onUpdate:modelValue":C[4]||(C[4]=x=>p(U)?U.value=x:null),items:t,multiple:"",chips:"",clearable:"",label:"Language",placeholder:"Select Language"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(ae,{modelValue:o(s),"onUpdate:modelValue":C[5]||(C[5]=x=>p(s)?s.value=x:null),label:"Birth Date",placeholder:"Select Birth Date"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(g),"onUpdate:modelValue":C[6]||(C[6]=x=>p(g)?g.value=x:null),type:"number",label:"Phone No.",placeholder:"+1 123 456 7890"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"account-details"},{default:l(()=>[e(G,{class:"mt-2"},{default:l(()=>[e(Y,null,{default:l(()=>[e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(d),"onUpdate:modelValue":C[7]||(C[7]=x=>p(d)?d.value=x:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(r),"onUpdate:modelValue":C[8]||(C[8]=x=>p(r)?r.value=x:null),label:"Email",suffix:"@example.com",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(f),"onUpdate:modelValue":C[9]||(C[9]=x=>p(f)?f.value=x:null),label:"Password",placeholder:"············",type:o(S)?"text":"password","append-inner-icon":o(S)?"tabler-eye-off":"tabler-eye","onClick:appendInner":C[10]||(C[10]=x=>S.value=!o(S))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(k),"onUpdate:modelValue":C[11]||(C[11]=x=>p(k)?k.value=x:null),label:"Confirm Password",placeholder:"············",type:o(E)?"text":"password","append-inner-icon":o(E)?"tabler-eye-off":"tabler-eye","onClick:appendInner":C[12]||(C[12]=x=>E.value=!o(E))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"social-links"},{default:l(()=>[e(G,{class:"mt-2"},{default:l(()=>[e(Y,null,{default:l(()=>[e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(F),"onUpdate:modelValue":C[13]||(C[13]=x=>p(F)?F.value=x:null),label:"Twitter",placeholder:"https://twitter.com/username"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(c),"onUpdate:modelValue":C[14]||(C[14]=x=>p(c)?c.value=x:null),label:"Facebook",placeholder:"https://facebook.com/username"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(T),"onUpdate:modelValue":C[15]||(C[15]=x=>p(T)?T.value=x:null),label:"Google+",placeholder:"https://plus.google.com/username"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(b),"onUpdate:modelValue":C[16]||(C[16]=x=>p(b)?b.value=x:null),label:"LinkedIn",placeholder:"https://linkedin.com/username"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(A),"onUpdate:modelValue":C[17]||(C[17]=x=>p(A)?A.value=x:null),label:"Instagram",placeholder:"https://instagram.com/username"},null,8,["modelValue"])]),_:1}),e(R,{cols:"12",md:"6"},{default:l(()=>[e(w,{modelValue:o(D),"onUpdate:modelValue":C[18]||(C[18]=x=>p(D)?D.value=x:null),label:"Quora",placeholder:"https://quora.com/username"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(ne),e(X,{class:"d-flex gap-4"},{default:l(()=>[e(Z,null,{default:l(()=>[y("Submit")]),_:1}),e(Z,{color:"secondary",variant:"tonal"},{default:l(()=>[y(" Cancel ")]),_:1})]),_:1})]),_:1})],64)}}}),Me=I({__name:"DemoFormLayoutFormValidation",setup(L){const _=i(""),h=i(""),n=["Item 1","Item 2","Item 3","Item 4"],V=i(),s=i(!1),g=i();return(m,t)=>{const d=P,r=a("VCol"),f=J,k=a("VCheckbox"),F=a("VBtn"),c=a("VRow"),T=a("VForm");return N(),B(T,{ref_key:"form",ref:g,"lazy-validation":""},{default:l(()=>[e(c,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(d,{modelValue:o(_),"onUpdate:modelValue":t[0]||(t[0]=b=>p(_)?_.value=b:null),rules:["requiredValidator"in m?m.requiredValidator:o(q)],label:"Name",placeholder:"John Doe",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(d,{modelValue:o(h),"onUpdate:modelValue":t[1]||(t[1]=b=>p(h)?h.value=b:null),rules:["emailValidator"in m?m.emailValidator:o(Ve),"requiredValidator"in m?m.requiredValidator:o(q)],label:"E-mail",placeholder:"johndoe@email.com",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(f,{modelValue:o(V),"onUpdate:modelValue":t[2]||(t[2]=b=>p(V)?V.value=b:null),items:n,rules:["requiredValidator"in m?m.requiredValidator:o(q)],placeholder:"Select an Item",label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(k,{modelValue:o(s),"onUpdate:modelValue":t[3]||(t[3]=b=>p(s)?s.value=b:null),rules:["requiredValidator"in m?m.requiredValidator:o(q)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(F,{color:"success",onClick:t[4]||(t[4]=b=>{var A;return(A=o(g))==null?void 0:A.validate()})},{default:l(()=>[y(" Validate ")]),_:1}),e(F,{color:"error",onClick:t[5]||(t[5]=b=>{var A;return(A=o(g))==null?void 0:A.reset()})},{default:l(()=>[y(" Reset Form ")]),_:1}),e(F,{color:"warning",onClick:t[6]||(t[6]=b=>{var A;return(A=o(g))==null?void 0:A.resetValidation()})},{default:l(()=>[y(" Reset Validation ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}}),$e=I({__name:"DemoFormLayoutFormHint",setup(L){const _=i(""),h=i(""),n=i(),V=i(!1),s=["foo","bar","fizz","buzz"],g=i([]);return(m,t)=>{const d=P,r=a("VCol"),f=be,k=a("VCheckbox"),F=a("VBtn"),c=a("VRow"),T=a("VForm");return N(),B(T,{onSubmit:M(()=>{},["prevent"])},{default:l(()=>[e(c,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(d,{modelValue:o(_),"onUpdate:modelValue":t[0]||(t[0]=b=>p(_)?_.value=b:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(d,{modelValue:o(h),"onUpdate:modelValue":t[1]||(t[1]=b=>p(h)?h.value=b:null),label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(d,{modelValue:o(n),"onUpdate:modelValue":t[2]||(t[2]=b=>p(n)?n.value=b:null),label:"Password",autocomplete:"on",type:"password","persistent-hint":"",placeholder:"············",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(f,{modelValue:o(g),"onUpdate:modelValue":t[3]||(t[3]=b=>p(g)?g.value=b:null),items:s,chips:"",multiple:"",label:"Autocomplete",placeholder:"Select"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(k,{modelValue:o(V),"onUpdate:modelValue":t[4]||(t[4]=b=>p(V)?V.value=b:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[y(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[y(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}}),je=I({__name:"DemoFormLayoutMultipleColumn",setup(L){const _=i(""),h=i(""),n=i(""),V=i(""),s=i(""),g=i(""),m=i(!1);return(t,d)=>{const r=P,f=a("VCol"),k=a("VCheckbox"),F=a("VBtn"),c=a("VRow"),T=a("VForm");return N(),B(T,{onSubmit:M(()=>{},["prevent"])},{default:l(()=>[e(c,null,{default:l(()=>[e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{modelValue:o(_),"onUpdate:modelValue":d[0]||(d[0]=b=>p(_)?_.value=b:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{modelValue:o(h),"onUpdate:modelValue":d[1]||(d[1]=b=>p(h)?h.value=b:null),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{modelValue:o(g),"onUpdate:modelValue":d[2]||(d[2]=b=>p(g)?g.value=b:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{modelValue:o(n),"onUpdate:modelValue":d[3]||(d[3]=b=>p(n)?n.value=b:null),label:"City",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{modelValue:o(V),"onUpdate:modelValue":d[4]||(d[4]=b=>p(V)?V.value=b:null),label:"Country",placeholder:"United States"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",md:"6"},{default:l(()=>[e(r,{modelValue:o(s),"onUpdate:modelValue":d[5]||(d[5]=b=>p(s)?s.value=b:null),label:"Company",placeholder:"Pixinvent"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:l(()=>[e(k,{modelValue:o(m),"onUpdate:modelValue":d[6]||(d[6]=b=>p(m)?m.value=b:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[y(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[y(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}}),qe=I({__name:"DemoFormLayoutVerticalFormWithIcons",setup(L){const _=i(""),h=i(""),n=i(),V=i(),s=i(!1);return(g,m)=>{const t=P,d=a("VCol"),r=a("VCheckbox"),f=a("VBtn"),k=a("VRow"),F=a("VForm");return N(),B(F,{onSubmit:M(c=>({}),["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(t,{modelValue:o(_),"onUpdate:modelValue":m[0]||(m[0]=c=>p(_)?_.value=c:null),"prepend-inner-icon":"tabler-user",label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(t,{modelValue:o(h),"onUpdate:modelValue":m[1]||(m[1]=c=>p(h)?h.value=c:null),"prepend-inner-icon":"tabler-mail",label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(t,{modelValue:o(n),"onUpdate:modelValue":m[2]||(m[2]=c=>p(n)?n.value=c:null),"prepend-inner-icon":"tabler-device-mobile",label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(t,{modelValue:o(V),"onUpdate:modelValue":m[3]||(m[3]=c=>p(V)?V.value=c:null),"prepend-inner-icon":"tabler-lock",label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(r,{modelValue:o(s),"onUpdate:modelValue":m[4]||(m[4]=c=>p(s)?s.value=c:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(f,{type:"submit",class:"me-2"},{default:l(()=>[y(" Submit ")]),_:1}),e(f,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[y(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}}),He=I({__name:"DemoFormLayoutVerticalForm",setup(L){const _=i(""),h=i(""),n=i(),V=i(),s=i(!1);return(g,m)=>{const t=P,d=a("VCol"),r=a("VCheckbox"),f=a("VBtn"),k=a("VRow"),F=a("VForm");return N(),B(F,{onSubmit:M(()=>{},["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(t,{modelValue:o(_),"onUpdate:modelValue":m[0]||(m[0]=c=>p(_)?_.value=c:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(t,{modelValue:o(h),"onUpdate:modelValue":m[1]||(m[1]=c=>p(h)?h.value=c:null),label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(t,{modelValue:o(n),"onUpdate:modelValue":m[2]||(m[2]=c=>p(n)?n.value=c:null),label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(t,{modelValue:o(V),"onUpdate:modelValue":m[3]||(m[3]=c=>p(V)?V.value=c:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(r,{modelValue:o(s),"onUpdate:modelValue":m[4]||(m[4]=c=>p(s)?s.value=c:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(f,{type:"submit"},{default:l(()=>[y(" Submit ")]),_:1}),e(f,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[y(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}}),Je=u("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstNameHorizontalIcons"},"First Name",-1),We=u("label",{class:"v-label text-body-2 text-high-emphasis",for:"emailHorizontalIcons"},"Email",-1),Ye=u("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobileHorizontalIcons"},"Mobile",-1),Ge=u("label",{class:"v-label text-body-2 text-high-emphasis",for:"passwordHorizontalIcons"},"Password",-1),Oe=I({__name:"DemoFormLayoutHorizontalFormWithIcons",setup(L){const _=i(""),h=i(""),n=i(),V=i(),s=i(!1);return(g,m)=>{const t=a("VCol"),d=P,r=a("VRow"),f=a("VCheckbox"),k=a("VBtn"),F=a("VForm");return N(),B(F,{onSubmit:M(()=>{},["prevent"])},{default:l(()=>[e(r,null,{default:l(()=>[e(t,{cols:"12"},{default:l(()=>[e(r,{"no-gutters":""},{default:l(()=>[e(t,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Je]),_:1}),e(t,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"firstNameHorizontalIcons",modelValue:o(_),"onUpdate:modelValue":m[0]||(m[0]=c=>p(_)?_.value=c:null),"prepend-inner-icon":"tabler-user",placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(r,{"no-gutters":""},{default:l(()=>[e(t,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[We]),_:1}),e(t,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"emailHorizontalIcons",modelValue:o(h),"onUpdate:modelValue":m[1]||(m[1]=c=>p(h)?h.value=c:null),"prepend-inner-icon":"tabler-mail",placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(r,{"no-gutters":""},{default:l(()=>[e(t,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Ye]),_:1}),e(t,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"mobileHorizontalIcons",modelValue:o(n),"onUpdate:modelValue":m[2]||(m[2]=c=>p(n)?n.value=c:null),type:"number","prepend-inner-icon":"tabler-device-mobile",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(r,{"no-gutters":""},{default:l(()=>[e(t,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Ge]),_:1}),e(t,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"passwordHorizontalIcons",modelValue:o(V),"onUpdate:modelValue":m[3]||(m[3]=c=>p(V)?V.value=c:null),"prepend-inner-icon":"tabler-lock",autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{"offset-md":"3",cols:"12",md:"9",class:"px-2"},{default:l(()=>[e(f,{modelValue:o(s),"onUpdate:modelValue":m[4]||(m[4]=c=>p(s)?s.value=c:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(t,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(k,{type:"submit"},{default:l(()=>[y(" Submit ")]),_:1}),e(k,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[y(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}}),Ke=u("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstName"},"First Name",-1),Qe=u("label",{class:"v-label text-body-2 text-high-emphasis",for:"email"},"Email",-1),Xe=u("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobile"},"Mobile",-1),Ze=u("label",{class:"v-label text-body-2 text-high-emphasis",for:"password"},"Password",-1),el=I({__name:"DemoFormLayoutHorizontalForm",setup(L){const _=i(""),h=i(""),n=i(),V=i(),s=i(!1);return(g,m)=>{const t=a("VCol"),d=P,r=a("VRow"),f=a("VCheckbox"),k=a("VBtn"),F=a("VForm");return N(),B(F,{onSubmit:M(()=>{},["prevent"])},{default:l(()=>[e(r,null,{default:l(()=>[e(t,{cols:"12"},{default:l(()=>[e(r,{"no-gutters":""},{default:l(()=>[e(t,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Ke]),_:1}),e(t,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"firstName",modelValue:o(_),"onUpdate:modelValue":m[0]||(m[0]=c=>p(_)?_.value=c:null),placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(r,{"no-gutters":""},{default:l(()=>[e(t,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Qe]),_:1}),e(t,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"email",modelValue:o(h),"onUpdate:modelValue":m[1]||(m[1]=c=>p(h)?h.value=c:null),placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(r,{"no-gutters":""},{default:l(()=>[e(t,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Xe]),_:1}),e(t,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"mobile",modelValue:o(n),"onUpdate:modelValue":m[2]||(m[2]=c=>p(n)?n.value=c:null),type:"number",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{cols:"12"},{default:l(()=>[e(r,{"no-gutters":""},{default:l(()=>[e(t,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[Ze]),_:1}),e(t,{cols:"12",md:"9"},{default:l(()=>[e(d,{id:"password",modelValue:o(V),"onUpdate:modelValue":m[3]||(m[3]=c=>p(V)?V.value=c:null),autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(t,{"offset-md":"3",cols:"12",md:"9",class:"px-2"},{default:l(()=>[e(f,{modelValue:o(s),"onUpdate:modelValue":m[4]||(m[4]=c=>p(s)?s.value=c:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(t,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(k,{type:"submit"},{default:l(()=>[y(" Submit ")]),_:1}),e(k,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[y(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})}}}),ll={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ol={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},tl={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},al={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="px-2"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="px-2"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},sl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="px-2"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="px-2"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},nl={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},dl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},rl={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ml=u("h6",{class:"text-h6 mb-6"}," Collapsible Section ",-1),il=u("h6",{class:"text-h6 mb-6"}," Sticky Section ",-1),gl=I({__name:"form-layouts",setup(L){return(_,h)=>{const n=el,V=fe,s=a("VCol"),g=Oe,m=He,t=qe,d=je,r=a("VRow"),f=$e,k=Me,F=ze,c=Ee,T=Le;return N(),W("div",null,[e(r,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Horizontal Form",code:al},{default:l(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Horizontal Form with Icons",code:sl},{default:l(()=>[e(g)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Vertical Form",code:dl},{default:l(()=>[e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Vertical Form with Icons",code:rl},{default:l(()=>[e(t)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(V,{title:"Multiple Column",code:nl},{default:l(()=>[e(d)]),_:1},8,["code"])]),_:1})]),_:1}),e(r,{class:"match-height my-3"},{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Form Hint",code:ll},{default:l(()=>[e(f)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Form Validation",code:ol},{default:l(()=>[e(k)]),_:1},8,["code"])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(V,{title:"Form with Tabs","no-padding":"",code:tl},{default:l(()=>[e(F)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[ml,e(c)]),_:1}),e(s,{cols:"12"},{default:l(()=>[il,e(T)]),_:1})]),_:1})])}}});export{gl as default};
