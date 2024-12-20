import{_ as ne}from"./AppStepper.vue_vue_type_style_index_0_lang-DheQ5akS.js";import{_ as ue}from"./chiefComplaint.vue_vue_type_script_setup_true_lang-CZQ0lehh.js";import{_ as re}from"./consultationsVue.vue_vue_type_script_setup_true_lang-BQqyNeqi.js";import{_ as me}from"./ddxVue.vue_vue_type_script_setup_true_lang-QH0eJ1YK.js";import{_ as pe}from"./developmentVue.vue_vue_type_script_setup_true_lang-DVK9SrHZ.js";import{_ as de}from"./examination.vue_vue_type_script_setup_true_lang-ne4_1mpY.js";import{_ as fe}from"./familyHx.vue_vue_type_script_setup_true_lang-DSc6N63h.js";import{_ as ce}from"./forensicHx.vue_vue_type_script_setup_true_lang-De6iHztE.js";import{_ as ve}from"./ixVue.vue_vue_type_script_setup_true_lang-Bcs888LY.js";import{_ as _e}from"./managementVue.vue_vue_type_script_setup_true_lang-BHXcqGZg.js";import{_ as Ve}from"./notesVue.vue_vue_type_script_setup_true_lang-BR4prZSn.js";import{_ as be}from"./occupationHx.vue_vue_type_script_setup_true_lang-D2v60Kpu.js";import{_ as ye}from"./pastHx.vue_vue_type_script_setup_true_lang-C16m9Uq1.js";import{_ as xe}from"./personalHx.vue_vue_type_script_setup_true_lang-CiGhoOPx.js";import{_ as ke}from"./presentIllnessChild.vue_vue_type_script_setup_true_lang-DvZKgiFB.js";import{_ as $e}from"./socialHx.vue_vue_type_script_setup_true_lang-C1Nbbnf6.js";import{_ as J}from"./therapyVue.vue_vue_type_script_setup_true_lang-BpZbBi1i.js";import{d as ge,aV as Ce,b8 as we,k as Se,j as Ue,b9 as He,r as i,w as Pe,o as n,c as K,e as E,b as s,f as r,v as b,x as V,n as e,aj as y,g as m,aX as p,z as d,a0 as Q,ba as Ne,F as Te}from"./index-CUq24_Fe.js";import{u as Ie}from"./useApi-BqVAN00G.js";import{$ as he}from"./api-D4r4OcVS.js";import{V as De,a as G}from"./VRow-c4vFAJ7q.js";import{V as Y}from"./VCardText-DvT4gKIo.js";import{V as Oe,a as Z}from"./VRadioGroup-CMhoPfii.js";import{V as ee}from"./VForm-CpDXNOsR.js";import{V as te}from"./VWindowItem-BujJ415Q.js";import{V as Fe}from"./VCard-haZoNGks.js";import{a as Be}from"./differenceInYears-BdTDs0wt.js";import"./VSlideGroup-BddQbfzx.js";import"./index-Di9BiCad.js";import"./VSlideGroupItem-CGrzhE_t.js";import"./VAvatar-CP-t1hAh.js";import"./VImg-dAreq1ZE.js";import"./index-CYM1QvHM.js";import"./AppTextarea.vue_vue_type_script_setup_true_lang-BbpdHDig.js";import"./form-9u_3hlfJ.js";/* empty css                   */import"./VCounter-qduikmhS.js";import"./VField-DJPodexg.js";import"./easing-CjukEv2V.js";import"./VInput-B6KGWHid.js";import"./forwardRefs-C-GTDzx5.js";import"./suggestions-uy40kO-q.js";import"./VChip-BB1INoVT.js";import"./AppTextField.vue_vue_type_script_setup_true_lang-Cad4y1Xm.js";import"./VTextField-Ccn8tHsN.js";import"./AppAutocomplete.vue_vue_type_script_setup_true_lang-D5Xa-i8z.js";import"./VSelect-CesTJAVx.js";import"./VList-BGxwOgHd.js";import"./ssrBoot-D6qqRZdf.js";import"./createSimpleFunctional-pdbxtRIz.js";import"./VDivider-DYLyIdVc.js";import"./dialog-transition-Bcgz64UU.js";import"./VMenu-BjdcrVys.js";import"./VOverlay-BHLbEMSo.js";import"./lazy-DMUNf1IF.js";import"./scopeId-DWELbCgr.js";import"./VCheckboxBtn-DhbT4HAD.js";import"./VSelectionControl-DdtYOovP.js";import"./filter-DEBEH1dI.js";import"./VTabs-Dn0Ifgtn.js";import"./VCheckbox-Cp9wofYb.js";import"./VSnackbar-hgYz21HW.js";import"./index-B3bPRkoL.js";/* empty css              */const Re={class:"d-flex justify-space-between"},je={key:0,class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Kt=ge({__name:"[id]",async setup(Ye){let k,L;const{t:o}=Ce(),c=we("userData").value,M=Se(),$=Ue(),{data:le}=([k,L]=He(()=>Ie(`/patients/visits/${c==null?void 0:c.id}/${$.query.visit}`)),k=await k,L(),k),a=le.value,u=i(a.follow_up),v=Be(new Date,new Date(a.patient.dob))<14,q=[{title:o("Chief Complaint"),subtitle:""},{title:o("Present Illness"),subtitle:""},{title:o("Family History"),subtitle:""},{title:o("Past History"),subtitle:""},{title:o("Social History"),subtitle:""},{title:o("Personal History"),subtitle:""},{title:o("Occupational History"),subtitle:""},{title:o("Forensic History"),subtitle:""},{title:o("Examination"),subtitle:""},{title:o("Differential Diagnosis"),subtitle:""},{title:o("Investigation"),subtitle:""},{title:o("Notes"),subtitle:""},{title:o("Management"),subtitle:""},{title:o("Therapy"),subtitle:""}],z=[{title:o("Follow up Notes"),subtitle:""},{title:o("Management"),subtitle:""}],W=[{title:o("Chief Complaint"),subtitle:""},{title:"Present Illness",subtitle:""},{title:"Development History",subtitle:""},{title:o("Family History"),subtitle:""},{title:o("Past History"),subtitle:""},{title:o("Social History"),subtitle:""},{title:o("Examination"),subtitle:""},{title:o("Consultations"),subtitle:""},{title:o("Differential Diagnosis"),subtitle:""},{title:o("Investigations"),subtitle:""},{title:o("Notes"),subtitle:""},{title:o("Management"),subtitle:""},{title:o("Therapy"),subtitle:""}],A=()=>{window.scrollTo({top:0,behavior:"smooth"})};let _=i();_.value=u.value?z:v?W:q,Pe(u,j=>{_.value=u.value?z:v?W:q});const f=i(0);i($.params.id),i(),i(a.clinic),i();const g=i(a.chief_complaint||{Complaint:""}),C=i(a.present_illness||{Notes:""}),w=i(a.patient.development||{selectedYear:[],selectedPeripartum:[]}),S=i(a.patient.family_hx||{}),U=i(a.patient.past_hx||{}),H=i(a.patient.social_hx||{}),P=i(a.patient.personal_hx||{}),N=i(a.patient.occupation_hx||{}),T=i(a.patient.forensic_hx||{}),I=i(a.ix||{}),h=i(a.examination||{}),D=i(a.consultations||{}),O=i(a.management||{managements:[]}),F=i(a.ddx||{"Differential Diagnosis":""}),B=i(a.notes||{Notes:""}),oe=`/visits-edit/${c==null?void 0:c.id}/${$.query.visit}/${a.patient.id}`,R=i(!1),ae=async()=>{if(c){R.value=!0;try{const j=await he(oe,{method:"POST",body:{patient_id:a.patient.id,chief_complaint:g.value,examination:h.value,ddx:F.value,present_illness:C.value,consultations:D.value,ix:I.value,management:O.value,notes:B.value,social_hx:H.value,family_hx:S.value,personal_hx:P.value,forensic_hx:T.value,occupation_hx:N.value,past_hx:U.value,development:w.value,follow_up:u.value},onResponseError({response:t}){console.log(t._data)}});M.push(`/patients/${$.params.id}`),R.value=!1}catch(j){console.error(j),R.value=!1}}};return(j,t)=>{const ie=ne;return n(),K(Te,null,[E("div",Re,[s(y,{variant:"flat",color:"warning",class:"mb-5",onClick:e(M).back},{default:r(()=>[b(V(e(o)("Back")),1)]),_:1},8,["onClick"]),s(y,{variant:"outlined",color:"secondary"},{default:r(()=>[b(V(e(o)("Patient"))+" : "+V(e(a).patient.name),1)]),_:1}),s(y,{variant:"outlined",color:"secondary"},{default:r(()=>{var x;return[b(V("Dr")+". "+V((x=e(a).doctor)==null?void 0:x.fullName),1)]}),_:1})]),s(Fe,null,{default:r(()=>[s(De,null,{default:r(()=>{var x,X;return[e(_)&&((x=e(c))==null?void 0:x.role)!=="PSYCHOLOGIST"?(n(),m(G,{key:0,cols:"12",md:"3",class:"border-e"},{default:r(()=>[s(Y,null,{default:r(()=>[s(Oe,{modelValue:e(u),"onUpdate:modelValue":t[0]||(t[0]=l=>p(u)?u.value=l:null),inline:""},{default:r(()=>[s(Z,{label:"Classic",value:!1}),s(Z,{label:"Follow Up",value:!0})]),_:1},8,["modelValue"])]),_:1}),s(Y,null,{default:r(()=>{var l;return[e(_)&&((l=e(c))==null?void 0:l.role)!=="PSYCHOLOGIST"?(n(),m(ie,{key:0,"current-step":e(f),"onUpdate:currentStep":t[1]||(t[1]=se=>p(f)?f.value=se:null),direction:"vertical",items:e(_),onClick:A},null,8,["current-step","items"])):d("",!0)]}),_:1})]),_:1})):d("",!0),e(_)&&((X=e(c))==null?void 0:X.role)!=="PSYCHOLOGIST"?(n(),m(G,{key:1,cols:"12",md:"9"},{default:r(()=>[s(Y,null,{default:r(()=>[s(ee,null,{default:r(()=>[E("div",null,[s(te,{modelValue:e(f),"onUpdate:modelValue":t[17]||(t[17]=l=>p(f)?f.value=l:null),class:"disable-tab-transition"},{default:r(()=>[e(u)?d("",!0):(n(),m(ue,{key:0,modelValue:e(g),"onUpdate:modelValue":t[2]||(t[2]=l=>p(g)?g.value=l:null)},null,8,["modelValue"])),e(u)?d("",!0):(n(),m(ke,{key:1,modelValue:e(C),"onUpdate:modelValue":t[3]||(t[3]=l=>p(C)?C.value=l:null),child:v},null,8,["modelValue"])),v&&!e(u)?(n(),m(pe,{key:2,modelValue:e(w),"onUpdate:modelValue":t[4]||(t[4]=l=>p(w)?w.value=l:null)},null,8,["modelValue"])):d("",!0),e(u)?d("",!0):(n(),m(fe,{key:3,modelValue:e(S),"onUpdate:modelValue":t[5]||(t[5]=l=>p(S)?S.value=l:null)},null,8,["modelValue"])),e(u)?d("",!0):(n(),m(ye,{key:4,modelValue:e(U),"onUpdate:modelValue":t[6]||(t[6]=l=>p(U)?U.value=l:null)},null,8,["modelValue"])),e(u)?d("",!0):(n(),m($e,{key:5,modelValue:e(H),"onUpdate:modelValue":t[7]||(t[7]=l=>p(H)?H.value=l:null)},null,8,["modelValue"])),!v&&!e(u)?(n(),m(xe,{key:6,modelValue:e(P),"onUpdate:modelValue":t[8]||(t[8]=l=>p(P)?P.value=l:null)},null,8,["modelValue"])):d("",!0),!v&&!e(u)?(n(),m(be,{key:7,modelValue:e(N),"onUpdate:modelValue":t[9]||(t[9]=l=>p(N)?N.value=l:null)},null,8,["modelValue"])):d("",!0),!v&&!e(u)?(n(),m(ce,{key:8,modelValue:e(T),"onUpdate:modelValue":t[10]||(t[10]=l=>p(T)?T.value=l:null)},null,8,["modelValue"])):d("",!0),e(u)?d("",!0):(n(),m(de,{key:9,modelValue:e(h),"onUpdate:modelValue":t[11]||(t[11]=l=>p(h)?h.value=l:null)},null,8,["modelValue"])),v&&!e(u)?(n(),m(re,{key:10,modelValue:e(D),"onUpdate:modelValue":t[12]||(t[12]=l=>p(D)?D.value=l:null)},null,8,["modelValue"])):d("",!0),e(u)?d("",!0):(n(),m(me,{key:11,modelValue:e(F),"onUpdate:modelValue":t[13]||(t[13]=l=>p(F)?F.value=l:null),child:v},null,8,["modelValue"])),e(u)?d("",!0):(n(),m(ve,{key:12,modelValue:e(I),"onUpdate:modelValue":t[14]||(t[14]=l=>p(I)?I.value=l:null)},null,8,["modelValue"])),s(Ve,{modelValue:e(B),"onUpdate:modelValue":t[15]||(t[15]=l=>p(B)?B.value=l:null)},null,8,["modelValue"]),s(_e,{modelValue:e(O),"onUpdate:modelValue":t[16]||(t[16]=l=>p(O)?O.value=l:null)},null,8,["modelValue"]),s(J,{visit:e(a),psychologist:!1},null,8,["visit"])]),_:1},8,["modelValue"])]),e(f)!==e(_).length-1||e(u)?(n(),K("div",je,[s(y,{color:"secondary",variant:"tonal",disabled:e(f)===0,onClick:t[18]||(t[18]=l=>(f.value--,A()))},{default:r(()=>[s(Q,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),b(" "+V(e(o)("Previous")),1)]),_:1},8,["disabled"]),e(R)?(n(),m(Ne,{key:1,size:30,width:"3",color:"success",indeterminate:""})):(n(),m(y,{key:0,color:"success",onClickOnce:ae},{default:r(()=>[b(V(e(o)("Save")),1)]),_:1})),e(f)!==e(_).length-1?(n(),m(y,{key:2,onClick:t[19]||(t[19]=l=>(f.value++,A()))},{default:r(()=>[b(V(e(o)("Next"))+" ",1),s(Q,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1})):d("",!0)])):d("",!0)]),_:1})]),_:1})]),_:1})):(n(),m(G,{key:2},{default:r(()=>[s(Y,null,{default:r(()=>[s(ee,null,{default:r(()=>[E("div",null,[s(te,null,{default:r(()=>[s(J,{visit:e(a),psychologist:!0},null,8,["visit"])]),_:1})])]),_:1})]),_:1})]),_:1}))]}),_:1})]),_:1})],64)}}});export{Kt as default};