import{_ as O}from"./TablePagination.vue_vue_type_script_setup_true_lang-DwDpKnLp.js";import{_ as S}from"./AppSelect.vue_vue_type_script_setup_true_lang-Dh48_hnO.js";import{_ as R}from"./AppTextField.vue_vue_type_script_setup_true_lang-D2ym4mTB.js";import{_ as z}from"./ECommerceAddCustomerDrawer.vue_vue_type_style_index_0_lang-BnrJTQdf.js";import{d as j,k as q,r as m,b8 as F,b9 as h,a6 as A,a as E,o as v,c as G,b as i,f as s,e as V,n as t,aX as n,g as w,v as M,aj as Q,z as X,a0 as H}from"./index-BgCxDybL.js";import{u as J}from"./useApi-DBVx0MM5.js";import{c as K}from"./createUrl-BYknXFNY.js";import{r as B,c as L}from"./myFormat-D_0w4-pK.js";import{V as W}from"./VCardText-DcC-tSsD.js";import{V as Y}from"./VDivider-Bbsfv9YA.js";import{V as Z}from"./VDataTableServer-CjA4O3dt.js";import{V as ee}from"./VCard-JMA7DU3d.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VPagination-CVH8bgIa.js";import"./form-Cgm8e0On.js";import"./VSelect-Dt5b_MdX.js";import"./VTextField-BKoM0I-Z.js";/* empty css                   */import"./VCounter-gyJ5h4WJ.js";import"./index-Cy7xuZ2b.js";import"./index-gdm8rwAa.js";import"./VField-C0axO0PV.js";import"./easing-CjukEv2V.js";import"./VInput-iGCkx6cu.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-BReecrc0.js";import"./ssrBoot-BzWK76bK.js";import"./createSimpleFunctional-Bx05GkOD.js";import"./VAvatar-C8sniZoQ.js";import"./VImg-BFZj8wJb.js";import"./dialog-transition-BearmyBu.js";import"./VMenu-xJbQ7buZ.js";import"./VOverlay-D7ep9jy9.js";import"./lazy-CSiNBxlj.js";import"./scopeId-Cl8nLuXj.js";import"./VCheckboxBtn-DMECHPt5.js";import"./VSelectionControl-DjVc0MBS.js";import"./VChip-D2-WWurK.js";import"./VSlideGroup-lrbTzarS.js";import"./formatters-DocrwTSm.js";import"./helpers-BGv4x_9E.js";import"./validators-DR7cptrM.js";import"./suggestions-C480CM6P.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-DnskFq9T.js";import"./AppAutocomplete.vue_vue_type_script_setup_true_lang-C2LujEVt.js";import"./filter-COTcwO7C.js";import"./AppDateTimePicker.vue_vue_type_style_index_0_lang-2Ob3ropL.js";import"./CustomRadios-DcnC_1Ds.js";import"./VRow-CAgjSbAz.js";/* empty css              */import"./VRadioGroup-DMNnvfqf.js";import"./VSpacer-BuzFitx-.js";import"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-BfnPOac0.js";import"./vue3-perfect-scrollbar.esm-DF0x2ufy.js";import"./api-8AbSiVmD.js";import"./index-B3bPRkoL.js";import"./BlobServiceClient-CR2xPX03.js";import"./__vite-browser-external-DFygW7-s.js";import"./VForm-D_AaGDRI.js";import"./VAlert-BdO7ZL9u.js";import"./VNavigationDrawer-B4q0DbYQ.js";import"./differenceInYears-BdTDs0wt.js";import"./VDataTable-CI4x14i5.js";import"./VTable-fzdXkMn2.js";const oe={class:"d-flex justify-space-between flex-wrap gap-y-4"},re={class:"d-flex flex-row gap-4 align-center flex-wrap"},ie={class:"d-flex gap-1"},ae=j({__name:"index",async setup(pe){let u,y;const P=q(),c=m(""),l=m(!1),a=m(10),p=m(1),x=m(),k=m(),D=[{title:"Patient",key:"name"},{title:"Gender",key:"gender"},{title:"Date of Birth",key:"dob"},{title:"Age",key:"age"},{title:"Visits",key:"visits.length"},{title:"Registration",key:"createdAt"},{title:"ACTIONS",key:"actions"}],N=r=>{var e,_;x.value=(e=r.sortBy[0])==null?void 0:e.key,k.value=(_=r.sortBy[0])==null?void 0:_.order},f=F("userData").value,T=`/patients/${f==null?void 0:f.id}`;let{data:g}=([u,y]=h(()=>J(K(T,{query:{q:c,itemsPerPage:a,page:p,sortBy:x,orderBy:k}}))),u=await u,y(),u);const b=A(()=>g.value?g.value.patients.map(r=>({...r,createdAt:B(r.createdAt),age:L(r.dob.toString()),dob:B(r.dob)})):[]),C=A(()=>{var r;return(r=g.value)==null?void 0:r.total});return(r,e)=>{const _=R,$=S,U=O,I=E("IconBtn");return v(),G("div",null,[i(ee,null,{default:s(()=>[i(W,null,{default:s(()=>{var o;return[V("div",oe,[i(_,{modelValue:t(c),"onUpdate:modelValue":e[0]||(e[0]=d=>n(c)?c.value=d:null),style:{"max-inline-size":"280px","min-inline-size":"280px"},placeholder:"Search Name"},null,8,["modelValue"]),V("div",re,[i($,{modelValue:t(a),"onUpdate:modelValue":e[1]||(e[1]=d=>n(a)?a.value=d:null),items:[5,10,20,50,100]},null,8,["modelValue"]),((o=t(f))==null||o.role,v(),w(Q,{key:0,"prepend-icon":"tabler-plus",onClick:e[2]||(e[2]=d=>l.value=!t(l))},{default:s(()=>[M(" Add Patient ")]),_:1}))])])]}),_:1}),i(Y),t(b)!==null?(v(),w(Z,{key:0,"items-per-page":t(a),"onUpdate:itemsPerPage":e[4]||(e[4]=o=>n(a)?a.value=o:null),page:t(p),"onUpdate:page":e[5]||(e[5]=o=>n(p)?p.value=o:null),items:t(b),"item-value":"name",headers:D,"items-length":t(C),class:"text-no-wrap","onUpdate:options":N},{bottom:s(()=>[i(U,{page:t(p),"onUpdate:page":e[3]||(e[3]=o=>n(p)?p.value=o:null),"items-per-page":t(a),"total-items":t(C)},null,8,["page","items-per-page","total-items"])]),"item.actions":s(({item:o})=>[V("div",ie,[i(I,{onClick:d=>t(P).push(`/patients/${o.id}`)},{default:s(()=>[i(H,{icon:"tabler-edit"})]),_:2},1032,["onClick"])])]),_:1},8,["items-per-page","page","items","items-length"])):X("",!0)]),_:1}),i(z,{"is-drawer-open":t(l),"onUpdate:isDrawerOpen":e[6]||(e[6]=o=>n(l)?l.value=o:null)},null,8,["is-drawer-open"])])}}}),vt=te(ae,[["__scopeId","data-v-c2bc3fe7"]]);export{vt as default};
