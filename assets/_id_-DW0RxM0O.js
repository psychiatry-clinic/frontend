import{_ as ie}from"./AppStepper.vue_vue_type_style_index_0_lang-Yk1IOs4Y.js";import{_ as ne}from"./chiefComplaint.vue_vue_type_script_setup_true_lang-CCQmYq_7.js";import{_ as se}from"./consultationsVue.vue_vue_type_script_setup_true_lang-DKP13pSj.js";import{_ as ue}from"./ddxVue.vue_vue_type_script_setup_true_lang-DPllgqxm.js";import{_ as re}from"./developmentVue.vue_vue_type_script_setup_true_lang-CuWatmHw.js";import{_ as me}from"./examination.vue_vue_type_script_setup_true_lang-Tu2GuJRy.js";import{_ as pe}from"./familyHx.vue_vue_type_script_setup_true_lang-CHCI_n2E.js";import{_ as de}from"./forensicHx.vue_vue_type_script_setup_true_lang-BdbfOubs.js";import{_ as fe}from"./ixVue.vue_vue_type_script_setup_true_lang-CfCU37I-.js";import{_ as ve}from"./managementVue.vue_vue_type_script_setup_true_lang-Bq9d0DDq.js";import{_ as _e}from"./notesVue.vue_vue_type_script_setup_true_lang-NqWjTltH.js";import{_ as ce}from"./occupationHx.vue_vue_type_script_setup_true_lang-0hnRD0MA.js";import Ve from"./pastHx-uV3NXPI6.js";import{_ as be}from"./personalHx.vue_vue_type_script_setup_true_lang-CcIq1ZRL.js";import{_ as ye}from"./presentIllnessChild.vue_vue_type_script_setup_true_lang-DQq-w7c0.js";import{_ as xe}from"./socialHx.vue_vue_type_script_setup_true_lang-DTy321mt.js";import{_ as z}from"./therapyVue.vue_vue_type_script_setup_true_lang-BzysBw1C.js";import{d as ke,b8 as $e,k as ge,j as Ce,b9 as we,r as i,w as Se,o as s,c as W,e as h,b as a,f as u,v as c,n as e,aj as V,x as X,g as r,aX as m,z as p,a0 as J,F as Ue}from"./index-BkoIr6yh.js";import{u as He}from"./useApi-oKKtsx7i.js";import{$ as Pe}from"./api-2K6V6dEN.js";import{V as Ie,a as j}from"./VRow-D85Ewhef.js";import{V as R}from"./VCardText-xMOIUJ2c.js";import{V as Fe,a as K}from"./VRadioGroup-BMiRip3N.js";import{V as Q}from"./VForm-C8CGEDOh.js";import{V as Z}from"./VWindowItem-LuYIX6zQ.js";import{V as Ne}from"./VCard-Dmj-2I2I.js";import{a as Oe}from"./differenceInYears-BdTDs0wt.js";import"./VSlideGroup-_w52RLV9.js";import"./index-Ds37CoIQ.js";import"./VSlideGroupItem-psc1lA1j.js";import"./VAvatar-CivDSueD.js";import"./VImg-CowEZo-Q.js";import"./index-NnWhEr9J.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-5gXiowcq.js";import"./form-CJv9Io97.js";/* empty css                   */import"./VCounter-CBD31Zsb.js";import"./VField-CRHXbthh.js";import"./easing-CjukEv2V.js";import"./VInput-Bn4cjs5o.js";import"./forwardRefs-C-GTDzx5.js";import"./suggestions-C480CM6P.js";import"./VChip-HOpiRy-7.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-Zh-LuDbe.js";import"./VTextField-C2gSdMZL.js";import"./AppAutocomplete.vue_vue_type_script_setup_true_lang-BNBYpHIT.js";import"./VSelect-BMkNHuyW.js";import"./VList-CvvyJ3Y3.js";import"./ssrBoot-BGlu6d5Z.js";import"./createSimpleFunctional-Bs0Jn_G0.js";import"./VDivider-Dq5etA6h.js";import"./dialog-transition-BWJ0TDCH.js";import"./VMenu-CNYWrpFA.js";import"./VOverlay-Dx-gzjuP.js";import"./lazy-BdnWOK3a.js";import"./scopeId-DB_d-rAg.js";import"./VCheckboxBtn-B6KL9PVT.js";import"./VSelectionControl-Bt0dhks5.js";import"./filter-C3316zaz.js";import"./VTabs-CP9CdYFW.js";import"./VCheckbox-DVp0Qu2S.js";import"./validators-DR7cptrM.js";import"./helpers-BGv4x_9E.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css              */import"./VSnackbar-BxGub9Fq.js";import"./index-Dz1rBMAR.js";const Te={class:"d-flex justify-space-between"},Be={key:0,class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Jt=ke({__name:"[id]",async setup(De){var M;let y,Y;const f=$e("userData").value,A=ge(),x=Ce(),{data:ee}=([y,Y]=we(()=>He(`/patients/visits/${f==null?void 0:f.id}/${x.query.visit}`)),y=await y,Y(),y),o=ee.value,n=i(o.follow_up),v=Oe(new Date,new Date(o.patient.dob))<14,E=[{title:"Chief Complaint",subtitle:""},{title:"Present Illness",subtitle:""},{title:"Family History",subtitle:""},{title:"Past History",subtitle:""},{title:"Social History",subtitle:""},{title:"Personal History",subtitle:""},{title:"Occupational History",subtitle:""},{title:"Forensic History",subtitle:""},{title:"Examination",subtitle:""},{title:"Differential Diagnosis",subtitle:""},{title:"Investigation",subtitle:""},{title:"Notes",subtitle:""},{title:"Management",subtitle:""},{title:"Therapy",subtitle:""}],G=[{title:"Follow up Notes",subtitle:""},{title:"Management",subtitle:""}],L=[{title:"Chief Complaint",subtitle:""},{title:"Present Illness",subtitle:""},{title:"Development History",subtitle:""},{title:"Family History",subtitle:""},{title:"Past History",subtitle:""},{title:"Social History",subtitle:""},{title:"Examination",subtitle:""},{title:"Consultations",subtitle:""},{title:"Differential Diagnosis",subtitle:""},{title:"Investigations",subtitle:""},{title:"Notes",subtitle:""},{title:"Management",subtitle:""},{title:"Therapy",subtitle:""}];let _=i();_.value=n.value?G:v?L:E,Se(n,D=>{_.value=n.value?G:v?L:E});const d=i(0);i(x.params.id),i((M=o.doctor)==null?void 0:M.name),i(),i(o.clinic),i();const k=i(o.chief_complaint||{complaint:""}),$=i(o.present_illness||{notes:""}),g=i(o.patient.development||{selectedYear:[""],selectedPeripartum:[""]}),C=i(o.patient.family_hx),w=i(o.patient.past_hx),S=i(o.patient.social_hx),U=i(o.patient.personal_hx),H=i(o.patient.occupation_hx),P=i(o.patient.forensic_hx),I=i(o.ix),F=i(o.examination),N=i(o.consultations),O=i(o.management),T=i(o.ddx),B=i(o.notes),te=`/visits-edit/${f==null?void 0:f.id}/${x.query.visit}/${o.patient.id}`,le=async()=>{if(f){console.log("short.value"),console.log(n.value);try{const D=await Pe(te,{method:"POST",body:{patient_id:o.patient.id,chief_complaint:k.value,examination:F.value,ddx:T.value,present_illness:$.value,consultations:N.value,ix:I.value,management:O.value,notes:B.value,social_hx:S.value,family_hx:C.value,personal_hx:U.value,forensic_hx:P.value,occupation_hx:H.value,past_hx:w.value,development:g.value,follow_up:n.value},onResponseError({response:t}){console.log(t._data)}});A.push(`/patients/${x.params.id}`)}catch(D){console.error(D)}}};return(D,t)=>{const oe=ie;return s(),W(Ue,null,[h("div",Te,[a(V,{variant:"flat",color:"warning",class:"mb-5",onClick:e(A).back},{default:u(()=>[c(" Back ")]),_:1},8,["onClick"]),a(V,{variant:"outlined",color:"secondary"},{default:u(()=>[c(" Patient : "+X(e(o).patient.name),1)]),_:1}),a(V,{variant:"outlined",color:"secondary"},{default:u(()=>{var b;return[c(" Dr. "+X((b=e(o).doctor)==null?void 0:b.name),1)]}),_:1})]),a(Ne,null,{default:u(()=>[a(Ie,null,{default:u(()=>{var b,q;return[e(_)&&((b=e(f))==null?void 0:b.role)!=="PSYCHOLOGIST"?(s(),r(j,{key:0,cols:"12",md:"3",class:"border-e"},{default:u(()=>[a(R,null,{default:u(()=>[a(Fe,{modelValue:e(n),"onUpdate:modelValue":t[0]||(t[0]=l=>m(n)?n.value=l:null),inline:""},{default:u(()=>[a(K,{label:"Classic",value:!1}),a(K,{label:"Follow Up",value:!0})]),_:1},8,["modelValue"])]),_:1}),a(R,null,{default:u(()=>{var l;return[e(_)&&((l=e(f))==null?void 0:l.role)!=="PSYCHOLOGIST"?(s(),r(oe,{key:0,"current-step":e(d),"onUpdate:currentStep":t[1]||(t[1]=ae=>m(d)?d.value=ae:null),direction:"vertical",items:e(_)},null,8,["current-step","items"])):p("",!0)]}),_:1})]),_:1})):p("",!0),e(_)&&((q=e(f))==null?void 0:q.role)!=="PSYCHOLOGIST"?(s(),r(j,{key:1,cols:"12",md:"9"},{default:u(()=>[a(R,null,{default:u(()=>[a(Q,null,{default:u(()=>[h("div",null,[a(Z,{modelValue:e(d),"onUpdate:modelValue":t[17]||(t[17]=l=>m(d)?d.value=l:null),class:"disable-tab-transition"},{default:u(()=>[e(n)?p("",!0):(s(),r(ne,{key:0,modelValue:e(k),"onUpdate:modelValue":t[2]||(t[2]=l=>m(k)?k.value=l:null)},null,8,["modelValue"])),e(n)?p("",!0):(s(),r(ye,{key:1,modelValue:e($),"onUpdate:modelValue":t[3]||(t[3]=l=>m($)?$.value=l:null),child:v},null,8,["modelValue"])),v&&!e(n)?(s(),r(re,{key:2,modelValue:e(g),"onUpdate:modelValue":t[4]||(t[4]=l=>m(g)?g.value=l:null)},null,8,["modelValue"])):p("",!0),e(n)?p("",!0):(s(),r(pe,{key:3,modelValue:e(C),"onUpdate:modelValue":t[5]||(t[5]=l=>m(C)?C.value=l:null)},null,8,["modelValue"])),e(n)?p("",!0):(s(),r(Ve,{key:4,modelValue:e(w),"onUpdate:modelValue":t[6]||(t[6]=l=>m(w)?w.value=l:null)},null,8,["modelValue"])),e(n)?p("",!0):(s(),r(xe,{key:5,modelValue:e(S),"onUpdate:modelValue":t[7]||(t[7]=l=>m(S)?S.value=l:null)},null,8,["modelValue"])),!v&&!e(n)?(s(),r(be,{key:6,modelValue:e(U),"onUpdate:modelValue":t[8]||(t[8]=l=>m(U)?U.value=l:null)},null,8,["modelValue"])):p("",!0),!v&&!e(n)?(s(),r(ce,{key:7,modelValue:e(H),"onUpdate:modelValue":t[9]||(t[9]=l=>m(H)?H.value=l:null)},null,8,["modelValue"])):p("",!0),!v&&!e(n)?(s(),r(de,{key:8,modelValue:e(P),"onUpdate:modelValue":t[10]||(t[10]=l=>m(P)?P.value=l:null)},null,8,["modelValue"])):p("",!0),e(n)?p("",!0):(s(),r(me,{key:9,modelValue:e(F),"onUpdate:modelValue":t[11]||(t[11]=l=>m(F)?F.value=l:null)},null,8,["modelValue"])),v&&!e(n)?(s(),r(se,{key:10,modelValue:e(N),"onUpdate:modelValue":t[12]||(t[12]=l=>m(N)?N.value=l:null)},null,8,["modelValue"])):p("",!0),e(n)?p("",!0):(s(),r(ue,{key:11,modelValue:e(T),"onUpdate:modelValue":t[13]||(t[13]=l=>m(T)?T.value=l:null),child:v},null,8,["modelValue"])),e(n)?p("",!0):(s(),r(fe,{key:12,modelValue:e(I),"onUpdate:modelValue":t[14]||(t[14]=l=>m(I)?I.value=l:null)},null,8,["modelValue"])),a(_e,{modelValue:e(B),"onUpdate:modelValue":t[15]||(t[15]=l=>m(B)?B.value=l:null)},null,8,["modelValue"]),a(ve,{modelValue:e(O),"onUpdate:modelValue":t[16]||(t[16]=l=>m(O)?O.value=l:null)},null,8,["modelValue"]),a(z,{visit:e(o),psychologist:!1},null,8,["visit"])]),_:1},8,["modelValue"])]),e(d)!==e(_).length-1||e(n)?(s(),W("div",Be,[a(V,{color:"secondary",variant:"tonal",disabled:e(d)===0,onClick:t[18]||(t[18]=l=>d.value--)},{default:u(()=>[a(J,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),c(" Previous ")]),_:1},8,["disabled"]),a(V,{color:"success",onClick:le},{default:u(()=>[c(" Save ")]),_:1}),e(d)!==e(_).length-1?(s(),r(V,{key:0,onClick:t[19]||(t[19]=l=>d.value++)},{default:u(()=>[c(" Next "),a(J,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1})):p("",!0)])):p("",!0)]),_:1})]),_:1})]),_:1})):(s(),r(j,{key:2},{default:u(()=>[a(R,null,{default:u(()=>[a(Q,null,{default:u(()=>[h("div",null,[a(Z,null,{default:u(()=>[a(z,{visit:e(o),psychologist:!0},null,8,["visit"])]),_:1})])]),_:1})]),_:1})]),_:1}))]}),_:1})]),_:1})],64)}}});export{Jt as default};