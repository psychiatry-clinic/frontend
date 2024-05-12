import{_ as re}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-BwL2z7_Y.js";import{_ as ue}from"./AppSelect.vue_vue_type_script_setup_true_lang-CUM7xL_a.js";import{d as L,r as h,aJ as Z,aK as W,aL as H,a as d,o as g,c as C,e as l,n as s,b as e,f as t,v as V,F as j,i as E,g as J,aj as M,x as B,Q,R as Y,w as me,z as pe}from"./index-B-uKkDM3.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as _e,S as fe,P as ve,U as he,E as ge}from"./index-Tilyz8hk.js";import{T as xe}from"./index-oD9di0tv.js";import{_ as be}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import"./transition-93Gr3-GY.js";import"./form-CdnDFzDY.js";const q=x=>(Q("data-v-7711e76e"),x=x(),Y(),x),ye={class:"flex"},Ve={class:"w-full h-auto relative"},Ce={key:0,class:"d-flex flex-column justify-center align-center gap-y-2 pa-12 drop-zone rounded"},we=q(()=>l("h4",{class:"text-h4"}," Drag and drop your image here. ",-1)),Ae=q(()=>l("span",{class:"text-disabled"},"or",-1)),ke={key:1,class:"d-flex justify-center align-center gap-3 pa-8 drop-zone flex-wrap"},Se={class:"mt-2"},Te={class:"clamp-text text-wrap"},Ie=L({__name:"DropZone",setup(x){const A=h(),u=h([]),{open:S,onChange:P}=Z({accept:"image/*"});function a(_){_==null||_.forEach(o=>{if(o.type.slice(0,6)!=="image/"){alert("Only image files are allowed");return}u.value.push({file:o,url:W(o).value??""})})}return P(_=>{if(_)for(const o of _)u.value.push({file:o,url:W(o).value??""})}),H(A,a),(_,o)=>{const c=d("VIcon"),f=d("IconBtn"),k=d("VBtn"),v=d("VImg"),b=d("VCardText"),F=d("VCardActions"),y=d("VCard"),n=d("VCol"),w=d("VRow");return g(),C("div",ye,[l("div",Ve,[l("div",{ref_key:"dropZoneRef",ref:A,class:"cursor-pointer",onClick:o[1]||(o[1]=()=>s(S)())},[s(u).length===0?(g(),C("div",Ce,[e(f,{variant:"tonal",class:"rounded-sm"},{default:t(()=>[e(c,{icon:"tabler-upload"})]),_:1}),we,Ae,e(k,{variant:"tonal",size:"small"},{default:t(()=>[V(" Browse Images ")]),_:1})])):(g(),C("div",ke,[e(w,{class:"match-height w-100"},{default:t(()=>[(g(!0),C(j,null,E(s(u),(m,p)=>(g(),J(n,{key:p,cols:"12",sm:"4"},{default:t(()=>[e(y,{ripple:!1,border:""},{default:t(()=>[e(b,{class:"d-flex flex-column",onClick:o[0]||(o[0]=M(()=>{},["stop"]))},{default:t(()=>[e(v,{src:m.url,width:"200px",height:"150px",class:"w-100 mx-auto"},null,8,["src"]),l("div",Se,[l("span",Te,B(m.file.name),1),l("span",null,B(m.file.size/1e3)+" KB ",1)])]),_:2},1024),e(F,null,{default:t(()=>[e(k,{variant:"text",block:"",onClick:M(O=>s(u).splice(p,1),["stop"])},{default:t(()=>[V(" Remove File ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]))],512)])])}}}),De=X(Ie,[["__scopeId","data-v-7711e76e"]]),Pe={class:"pa-6 productDescriptionEditor"},$e={key:0,class:"d-flex gap-1 flex-wrap align-center"},ze=L({__name:"ProductDescriptionEditor",props:{modelValue:{},placeholder:{}},emits:["update:modelValue"],setup(x,{emit:A}){const u=x,S=A,P=h(),a=_e({content:u.modelValue,extensions:[fe,xe.configure({types:["heading","paragraph"]}),ve.configure({placeholder:u.placeholder??"Write something here..."}),he],onUpdate(){a.value&&S("update:modelValue",a.value.getHTML())}});return me(()=>u.modelValue,()=>{var o,c;((o=a.value)==null?void 0:o.getHTML())!==u.modelValue&&((c=a.value)==null||c.commands.setContent(u.modelValue))}),(_,o)=>{const c=d("VIcon"),f=d("VBtn"),k=d("VDivider");return g(),C("div",Pe,[s(a)?(g(),C("div",$e,[e(f,{size:"small",icon:"",rounded:"",variant:s(a).isActive("bold")?"tonal":"text",color:s(a).isActive("bold")?"primary":"default",onClick:o[0]||(o[0]=v=>s(a).chain().focus().toggleBold().run())},{default:t(()=>[e(c,{icon:"tabler-bold",class:"font-weight-medium"})]),_:1},8,["variant","color"]),e(f,{size:"small",icon:"",rounded:"",variant:s(a).isActive("underline")?"tonal":"text",color:s(a).isActive("underline")?"primary":"default",onClick:o[1]||(o[1]=v=>s(a).commands.toggleUnderline())},{default:t(()=>[e(c,{icon:"tabler-underline"})]),_:1},8,["variant","color"]),e(f,{size:"small",icon:"",rounded:"",variant:s(a).isActive("italic")?"tonal":"text",color:s(a).isActive("italic")?"primary":"default",onClick:o[2]||(o[2]=v=>s(a).chain().focus().toggleItalic().run())},{default:t(()=>[e(c,{icon:"tabler-italic",class:"font-weight-medium"})]),_:1},8,["variant","color"]),e(f,{size:"small",icon:"",rounded:"",variant:s(a).isActive("strike")?"tonal":"text",color:s(a).isActive("strike")?"primary":"default",onClick:o[3]||(o[3]=v=>s(a).chain().focus().toggleStrike().run())},{default:t(()=>[e(c,{icon:"tabler-strikethrough",size:"20"})]),_:1},8,["variant","color"]),e(f,{size:"small",icon:"",rounded:"",variant:s(a).isActive({textAlign:"left"})?"tonal":"text",color:s(a).isActive({textAlign:"left"})?"primary":"default",onClick:o[4]||(o[4]=v=>s(a).chain().focus().setTextAlign("left").run())},{default:t(()=>[e(c,{icon:"tabler-align-left",size:"20"})]),_:1},8,["variant","color"]),e(f,{size:"small",icon:"",rounded:"",color:s(a).isActive({textAlign:"center"})?"primary":"default",variant:s(a).isActive({textAlign:"center"})?"tonal":"text",onClick:o[5]||(o[5]=v=>s(a).chain().focus().setTextAlign("center").run())},{default:t(()=>[e(c,{icon:"tabler-align-center",size:"20"})]),_:1},8,["color","variant"]),e(f,{size:"small",icon:"",rounded:"",variant:s(a).isActive({textAlign:"right"})?"tonal":"text",color:s(a).isActive({textAlign:"right"})?"primary":"default",onClick:o[6]||(o[6]=v=>s(a).chain().focus().setTextAlign("right").run())},{default:t(()=>[e(c,{icon:"tabler-align-right",size:"20"})]),_:1},8,["variant","color"]),e(f,{size:"small",icon:"",rounded:"",variant:s(a).isActive({textAlign:"justify"})?"tonal":"text",color:s(a).isActive({textAlign:"justify"})?"primary":"default",onClick:o[7]||(o[7]=v=>s(a).chain().focus().setTextAlign("justify").run())},{default:t(()=>[e(c,{icon:"tabler-align-justified",size:"20"})]),_:1},8,["variant","color"])])):pe("",!0),e(k,{class:"my-4"}),e(s(ge),{ref_key:"editorRef",ref:P,editor:s(a)},null,8,["editor"])])}}}),r=x=>(Q("data-v-9da3d7c9"),x=x(),Y(),x),Be={class:"d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"},Re=r(()=>l("div",{class:"d-flex flex-column justify-center"},[l("h4",{class:"text-h4 font-weight-medium"}," Add a new product "),l("div",{class:"text-body-1"}," Orders placed across your store ")],-1)),Ue={class:"d-flex gap-4 align-center flex-wrap"},je=r(()=>l("span",{class:"mb-1"},"Description (optional)",-1)),Ee=r(()=>l("span",{class:"text-primary font-weight-medium text-sm cursor-pointer"},"Add Media from URL",-1)),We={class:"pe-3"},Fe={class:"text-truncate font-weight-medium text-start"},Le={class:"d-flex flex-column gap-y-4 ps-3"},Oe=r(()=>l("p",{class:"mb-0"}," Options ",-1)),Ke={class:"d-flex gap-x-4 align-center"},Ne=r(()=>l("div",null,[l("div",{class:"text-base text-high-emphasis pb-2"}," Product in stock now: 54 "),l("div",{class:"text-base text-high-emphasis pb-2"}," Product in transit: 390 "),l("div",{class:"text-base text-high-emphasis pb-2"}," Last time restocked: 24th June, 2022 "),l("div",{class:"text-base text-high-emphasis pb-2"}," Total stock over lifetime: 2,430 ")],-1)),Ge={class:"text-high-emphasis font-weight-medium mb-1"},Me={class:"text-sm"},Ze={class:"ps-3"},He=r(()=>l("h5",{class:"text-h5 mb-6"}," Global Delivery ",-1)),Je=r(()=>l("div",null,[l("div",{class:"text-high-emphasis font-weight-medium mb-1"}," Worldwide delivery "),l("div",{class:"text-sm"},[V(" Only available with Shipping method: "),l("span",{class:"text-primary"}," Fulfilled by Company name ")])],-1)),Qe=r(()=>l("div",{class:"text-high-emphasis font-weight-medium mb-1"}," Selected Countries ",-1)),Ye=r(()=>l("div",null,[l("div",{class:"text-high-emphasis font-weight-medium mb-1"}," Local delivery "),l("div",{class:"text-sm"},[V(" Deliver to your country of residence "),l("span",{class:"text-primary"}," Change profile address ")])],-1)),Xe={class:"ps-3"},qe=r(()=>l("div",{class:"mb-6 text-h6"}," Attributes ",-1)),et={class:"d-flex flex-column gap-y-1"},tt={class:"d-flex flex-column mb-1"},lt=r(()=>l("div",null,"Frozen Product",-1)),ot={class:"d-flex flex-column mb-1"},at=r(()=>l("div",null,"Expiry Date of Product",-1)),nt={class:"ps-3"},st=r(()=>l("h5",{class:"text-h5 mb-6"}," Advanced ",-1)),it={class:"d-flex flex-sm-row flex-column flex-wrap justify-space-between gap-x-6 gap-y-4"},dt={class:"d-flex flex-raw align-center justify-space-between"},ct=r(()=>l("span",null,"In stock",-1)),rt={class:"d-flex flex-column gap-y-4"},ut=r(()=>l("div",{class:"d-flex text-sm justify-space-between w-100"},[l("div",{class:"text-high-emphasis"}," Category ")],-1)),mt={class:"d-flex gap-x-4"},pt=L({__name:"index",setup(x){const A=h(1),u=h(),S=h([]),{onChange:P}=Z({accept:"image/*"});function a(y){y==null||y.forEach(n=>{if(n.type.slice(0,6)!=="image/"){alert("Only image files are allowed");return}S.value.push({file:n,url:W(n).value??""})})}P(y=>{if(y)for(const n of y)S.value.push({file:n,url:W(n).value??""})}),H(u,a);const _=h(`<p>
    Keep your account secure with authentication step.
    </p>`),o=h("Restock"),c=h(!0),f=[{desc:"You'll be responsible for product delivery.Any damage or delay during shipping may cost you a Damage fee",title:"Fulfilled by Seller",value:"Fulfilled by Seller"},{desc:"Your product, Our responsibility.For a measly fee, we will handle the delivery process for you.",title:"Fulfilled by Company name",value:"Fulfilled by Company name"}],k=h("Fulfilled by Company name"),v=h("Worldwide delivery"),b=h(["Biodegradable","Expiry Date"]),F=[{icon:"tabler-cube",title:"Restock",value:"Restock"},{icon:"tabler-car",title:"Shipping",value:"Shipping"},{icon:"tabler-map-pin",title:"Global Delivery",value:"Global Delivery"},{icon:"tabler-world",title:"Attributes",value:"Attributes"},{icon:"tabler-lock",title:"Advanced",value:"Advanced"}];return(y,n)=>{const w=d("VBtn"),m=be,p=d("VCol"),O=ze,R=d("VRow"),T=d("VCardText"),I=d("VCard"),ee=d("VCardItem"),te=De,D=ue,le=d("VIcon"),oe=d("VTab"),ae=d("VTabs"),K=d("VDivider"),$=d("VWindowItem"),U=d("VRadio"),N=d("VRadioGroup"),G=d("VTextField"),z=d("VCheckbox"),ne=re,se=d("VWindow"),ie=d("VSwitch"),de=d("VLabel");return g(),C("div",null,[l("div",Be,[Re,l("div",Ue,[e(w,{variant:"tonal",color:"secondary"},{default:t(()=>[V(" Discard ")]),_:1}),e(w,{variant:"tonal",color:"primary"},{default:t(()=>[V(" Save Draft ")]),_:1}),e(w,null,{default:t(()=>[V("Publish Product")]),_:1})])]),e(R,null,{default:t(()=>[e(p,{md:"8"},{default:t(()=>[e(I,{class:"mb-6",title:"Product Information"},{default:t(()=>[e(T,null,{default:t(()=>[e(R,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(m,{label:"Name",placeholder:"iPhone 14"})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(m,{label:"SKU",placeholder:"FXSK123U"})]),_:1}),e(p,{cols:"12",md:"6"},{default:t(()=>[e(m,{label:"Barcode",placeholder:"0123-4567"})]),_:1}),e(p,null,{default:t(()=>[je,e(O,{modelValue:_.value,"onUpdate:modelValue":n[0]||(n[0]=i=>_.value=i),placeholder:"Product Description",class:"border rounded"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(I,{class:"mb-6"},{default:t(()=>[e(ee,null,{title:t(()=>[V(" Product Image ")]),append:t(()=>[Ee]),_:1}),e(T,null,{default:t(()=>[e(te)]),_:1})]),_:1}),e(I,{title:"Variants",class:"mb-6"},{default:t(()=>[e(T,null,{default:t(()=>[(g(!0),C(j,null,E(A.value,i=>(g(),J(R,{key:i},{default:t(()=>[e(p,{cols:"12",md:"4"},{default:t(()=>[e(D,{items:["Size","Color","Weight","Smell"],placeholder:"Select Variant",label:"Options"})]),_:1}),e(p,{cols:"12",md:"8",class:"d-flex align-self-end"},{default:t(()=>[e(m,{placeholder:"38",type:"number"})]),_:1})]),_:1}))),128)),e(w,{class:"mt-6","prepend-icon":"tabler-plus",onClick:n[1]||(n[1]=i=>A.value++)},{default:t(()=>[V(" Add another option ")]),_:1})]),_:1})]),_:1}),e(I,{title:"Inventory",class:"inventory-card"},{default:t(()=>[e(T,null,{default:t(()=>[e(R,null,{default:t(()=>[e(p,{cols:"12",md:"4"},{default:t(()=>[l("div",We,[e(ae,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=i=>o.value=i),direction:"vertical",color:"primary",class:"v-tabs-pill"},{default:t(()=>[(g(),C(j,null,E(F,(i,ce)=>e(oe,{key:ce},{default:t(()=>[e(le,{icon:i.icon,class:"me-2"},null,8,["icon"]),l("div",Fe,B(i.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"])])]),_:1}),e(K,{vertical:!y.$vuetify.display.smAndDown},null,8,["vertical"]),e(p,{cols:"12",md:"8"},{default:t(()=>[e(se,{modelValue:o.value,"onUpdate:modelValue":n[9]||(n[9]=i=>o.value=i),class:"w-100",touch:!1},{default:t(()=>[e($,{value:"Restock"},{default:t(()=>[l("div",Le,[Oe,l("div",Ke,[e(m,{label:"Add to Stock",placeholder:"Quantity"}),e(w,{class:"align-self-end"},{default:t(()=>[V(" Confirm ")]),_:1})]),Ne])]),_:1}),e($,{value:"Shipping"},{default:t(()=>[e(N,{modelValue:k.value,"onUpdate:modelValue":n[3]||(n[3]=i=>k.value=i),label:"Shipping Type",class:"ms-3"},{default:t(()=>[(g(),C(j,null,E(f,i=>e(U,{key:i.value,value:i.value,class:"mb-4"},{label:t(()=>[l("div",null,[l("div",Ge,B(i.title),1),l("div",Me,B(i.desc),1)])]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1}),e($,{value:"Global Delivery"},{default:t(()=>[l("div",Ze,[He,e(N,{modelValue:v.value,"onUpdate:modelValue":n[4]||(n[4]=i=>v.value=i),label:"Global Delivery"},{default:t(()=>[e(U,{value:"Worldwide delivery",class:"mb-4"},{label:t(()=>[Je]),_:1}),e(U,{value:"Selected Countries",class:"mb-4"},{label:t(()=>[l("div",null,[Qe,e(G,{placeholder:"USA",style:{"min-inline-size":"200px"}})])]),_:1}),e(U,null,{label:t(()=>[Ye]),_:1})]),_:1},8,["modelValue"])])]),_:1}),e($,{value:"Attributes"},{default:t(()=>[l("div",Xe,[qe,l("div",et,[e(z,{modelValue:b.value,"onUpdate:modelValue":n[5]||(n[5]=i=>b.value=i),label:"Fragile Product",value:"Fragile Product"},null,8,["modelValue"]),e(z,{modelValue:b.value,"onUpdate:modelValue":n[6]||(n[6]=i=>b.value=i),value:"Biodegradable",label:"Biodegradable"},null,8,["modelValue"]),e(z,{modelValue:b.value,"onUpdate:modelValue":n[7]||(n[7]=i=>b.value=i),value:"Frozen Product"},{label:t(()=>[l("div",tt,[lt,e(G,{placeholder:"40 C",type:"number",style:{"min-inline-size":"250px"}})])]),_:1},8,["modelValue"]),e(z,{modelValue:b.value,"onUpdate:modelValue":n[8]||(n[8]=i=>b.value=i),value:"Expiry Date"},{label:t(()=>[l("div",ot,[at,e(ne,{"model-value":"2025-06-14",placeholder:"Select a Date"})])]),_:1},8,["modelValue"])])])]),_:1}),e($,{value:"Advanced"},{default:t(()=>[l("div",nt,[st,l("div",it,[e(D,{label:"Product ID Type",placeholder:"Select Product Type",items:["ISBN","UPC","EAN","JAN"]}),e(m,{label:"Product Id",placeholder:"100023"})])])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{md:"4",cols:"12"},{default:t(()=>[e(I,{title:"Pricing",class:"mb-6"},{default:t(()=>[e(T,null,{default:t(()=>[e(m,{label:"Best Price",placeholder:"Price",class:"mb-6"}),e(m,{label:"Discounted Price",placeholder:"$499",class:"mb-6"}),e(z,{modelValue:c.value,"onUpdate:modelValue":n[10]||(n[10]=i=>c.value=i),label:"Charge Tax on this product"},null,8,["modelValue"]),e(K,{class:"my-2"}),l("div",dt,[ct,e(ie,{density:"compact"})])]),_:1})]),_:1}),e(I,{title:"Organize"},{default:t(()=>[e(T,null,{default:t(()=>[l("div",rt,[e(D,{placeholder:"Select Vendor",label:"Vendor",items:["Men's Clothing","Women's Clothing","Kid's Clothing"]}),l("div",null,[e(de,{class:"d-flex"},{default:t(()=>[ut]),_:1}),l("div",mt,[e(D,{placeholder:"Select Category",items:["Household","Office","Electronics","Management","Automotive"]}),e(w,{rounded:"",icon:"tabler-plus",variant:"tonal"})])]),e(D,{placeholder:"Select Collection",label:"Collection",items:["Men's Clothing","Women's Clothing","Kid's Clothing"]}),e(D,{placeholder:"Select Status",label:"Status",items:["Published","Inactive","Scheduled"]}),e(m,{label:"Tags",placeholder:"Fashion, Trending, Summer"})])]),_:1})]),_:1})]),_:1})]),_:1})])}}}),Ct=X(pt,[["__scopeId","data-v-9da3d7c9"]]);export{Ct as default};
