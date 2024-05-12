import{_ as O}from"./TablePagination.vue_vue_type_script_setup_true_lang-C-jzG2jl.js";import{_ as S}from"./AppSelect.vue_vue_type_script_setup_true_lang-qm0fZmBv.js";import{_ as R}from"./AppTextField.vue_vue_type_script_setup_true_lang-BwfyKR3S.js";import{_ as z}from"./ECommerceAddCustomerDrawer.vue_vue_type_style_index_0_lang-J6ZJsGmD.js";import{d as j,k as q,r as m,b8 as F,b9 as h,a6 as A,a as E,o as g,c as G,b as r,f as s,e as v,n as e,aX as n,g as w,v as M,aj as Q,z as X,a0 as H}from"./index-CyOif7-e.js";import{u as J}from"./useApi-DlR3sOK4.js";import{c as K}from"./createUrl-BBvZVb5z.js";import{r as B,c as L}from"./myFormat-D_0w4-pK.js";import{V as W}from"./VCardText-BrsMDHTf.js";import{V as Y}from"./VDivider-DIySTNqq.js";import{V as Z}from"./VDataTableServer-D_Gl5bwK.js";import{V as tt}from"./VCard-D27vUuY5.js";import{_ as et}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VPagination-F2U-IuPc.js";import"./form-CGVp-LIP.js";import"./VSelect-Bf_KjErP.js";import"./VTextField-NUu-TFjo.js";/* empty css                   */import"./VCounter-DfizXV53.js";import"./index-XAMUSjhF.js";import"./index-s9ZoCVnZ.js";import"./VField-CLp_wSa4.js";import"./easing-CjukEv2V.js";import"./VInput-DdeapERl.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-D6yt74Vq.js";import"./ssrBoot-CPCpLQVP.js";import"./createSimpleFunctional-cIh8enrN.js";import"./VAvatar-h8Uq1eGR.js";import"./VImg-C93O-6K8.js";import"./dialog-transition-BmBm3H6R.js";import"./VMenu-UxbzfuJj.js";import"./VOverlay-DGiLNSaN.js";import"./lazy-JvajtX1z.js";import"./scopeId-DMvkJ6oD.js";import"./VCheckboxBtn-D7GPLkhD.js";import"./VSelectionControl-tjrC9Tsv.js";import"./VChip-DPuKVeJv.js";import"./VSlideGroup-HpbF2ug-.js";import"./formatters-DocrwTSm.js";import"./helpers-BGv4x_9E.js";import"./validators-DR7cptrM.js";import"./suggestions-DtVrTijw.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-CGzaNKA4.js";import"./AppAutocomplete.vue_vue_type_script_setup_true_lang-DV7IUblc.js";import"./filter-BhFYly77.js";import"./AppDateTimePicker.vue_vue_type_style_index_0_lang-BwIL-bZZ.js";import"./CustomRadios-BNPeMCZs.js";import"./VRow-BScj5SVI.js";/* empty css              */import"./VRadioGroup-CWvSiCYZ.js";import"./VSpacer-dZs9CpDs.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-D5XGf6ev.js";import"./vue3-perfect-scrollbar.esm-lznjiNQk.js";import"./api-MDXZjLBk.js";import"./index-B3bPRkoL.js";import"./BlobServiceClient-CR2xPX03.js";import"./__vite-browser-external-DFygW7-s.js";import"./VForm-Wjco7drK.js";import"./VNavigationDrawer-BQrZSLtj.js";import"./differenceInYears-BdTDs0wt.js";import"./VDataTable-CknPGwqg.js";import"./VTable-DJMRHyqI.js";const ot={class:"d-flex justify-space-between flex-wrap gap-y-4"},rt={class:"d-flex flex-row gap-4 align-center flex-wrap"},it={class:"d-flex gap-1"},at=j({__name:"index",async setup(pt){let u,V;const P=q(),c=m(""),l=m(!1),i=m(10),p=m(1),y=m(),x=m(),D=[{title:"Patient",key:"name"},{title:"Gender",key:"gender"},{title:"Date of Birth",key:"dob"},{title:"Age",key:"age"},{title:"Visits",key:"visits.length"},{title:"Registration",key:"createdAt"},{title:"ACTIONS",key:"actions"}],N=a=>{var t,_;y.value=(t=a.sortBy[0])==null?void 0:t.key,x.value=(_=a.sortBy[0])==null?void 0:_.order},f=F("userData").value,T=`/patients/${f==null?void 0:f.id}`;let{data:k}=([u,V]=h(()=>J(K(T,{query:{q:c,itemsPerPage:i,page:p,sortBy:y,orderBy:x}}))),u=await u,V(),u);const C=A(()=>k.value.patients.map(a=>({...a,createdAt:B(a.createdAt),age:L(a.dob.toString()),dob:B(a.dob)}))),b=A(()=>k.value.total);return(a,t)=>{const _=R,$=S,U=O,I=E("IconBtn");return g(),G("div",null,[r(tt,null,{default:s(()=>[r(W,null,{default:s(()=>{var o;return[v("div",ot,[r(_,{modelValue:e(c),"onUpdate:modelValue":t[0]||(t[0]=d=>n(c)?c.value=d:null),style:{"max-inline-size":"280px","min-inline-size":"280px"},placeholder:"Search Name"},null,8,["modelValue"]),v("div",rt,[r($,{modelValue:e(i),"onUpdate:modelValue":t[1]||(t[1]=d=>n(i)?i.value=d:null),items:[5,10,20,50,100]},null,8,["modelValue"]),((o=e(f))==null||o.role,g(),w(Q,{key:0,"prepend-icon":"tabler-plus",onClick:t[2]||(t[2]=d=>l.value=!e(l))},{default:s(()=>[M(" Add Patient ")]),_:1}))])])]}),_:1}),r(Y),e(C)!==null?(g(),w(Z,{key:0,"items-per-page":e(i),"onUpdate:itemsPerPage":t[4]||(t[4]=o=>n(i)?i.value=o:null),page:e(p),"onUpdate:page":t[5]||(t[5]=o=>n(p)?p.value=o:null),items:e(C),"item-value":"name",headers:D,"items-length":e(b),class:"text-no-wrap","onUpdate:options":N},{bottom:s(()=>[r(U,{page:e(p),"onUpdate:page":t[3]||(t[3]=o=>n(p)?p.value=o:null),"items-per-page":e(i),"total-items":e(b)},null,8,["page","items-per-page","total-items"])]),"item.actions":s(({item:o})=>[v("div",it,[r(I,{onClick:d=>e(P).push(`/patients/${o.id}`)},{default:s(()=>[r(H,{icon:"tabler-edit"})]),_:2},1032,["onClick"])])]),_:1},8,["items-per-page","page","items","items-length"])):X("",!0)]),_:1}),r(z,{"is-drawer-open":e(l),"onUpdate:isDrawerOpen":t[6]||(t[6]=o=>n(l)?l.value=o:null)},null,8,["is-drawer-open"])])}}}),ge=et(at,[["__scopeId","data-v-7288f130"]]);export{ge as default};