import{a as avatarText}from"./formatters-DocrwTSm.js";import{_ as _sfc_main$8}from"./TablePagination.vue_vue_type_script_setup_true_lang-CtJ6Rg01.js";import{_ as _sfc_main$7}from"./AppSelect.vue_vue_type_script_setup_true_lang-eVRWKpYj.js";import{_ as _sfc_main$3}from"./AppTextField.vue_vue_type_script_setup_true_lang-DKaaay4V.js";import{r as requiredValidator,d as dateOfBirthValidator,p as phoneNumberValidator}from"./validators-DR7cptrM.js";import{c as cities,b as baghdadRegions,o as occupationSuggestions,a as childEducation,d as adultEducation}from"./suggestions-2VnU4gHn.js";import{d as defineComponent,aV as useI18n,b8 as useCookie,k as useRouter,r as ref,w as watch,o as openBlock,g as createBlock,f as withCtx,b as createVNode,n as unref,b2 as withModifiers,aX as isRef,e as createBaseVNode,x as toDisplayString,c as createElementBlock,z as createCommentVNode,i as renderList,F as Fragment,v as createTextVNode,aj as VBtn,ba as VProgressCircular,b9 as withAsyncContext,a6 as computed,a as resolveComponent}from"./index-Zv46-Gya.js";import{_ as _sfc_main$6}from"./AppTextarea.vue_vue_type_script_setup_true_lang-AmabcA3R.js";import{_ as _sfc_main$5}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-Cd0oq1ki.js";import{_ as _sfc_main$4}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-gyD60XZP.js";import{_ as __unplugin_components_1}from"./CustomRadios-CxnNIt0M.js";import{_ as _sfc_main$2}from"./AppDrawerHeaderSection.vue_vue_type_script_setup_true_lang-BGxw9BrR.js";import{P as PerfectScrollbar$1}from"./vue3-perfect-scrollbar.esm-CATWlHKm.js";import{$ as $api}from"./api-CHDttjGV.js";import{a as addTimeToDateString,c as calculateAge}from"./myFormat-BLp06kNT.js";import{B as BlobServiceClient}from"./BlobServiceClient-CR2xPX03.js";import{V as VDivider}from"./VDivider-D4LT_IZA.js";import{V as VCardText}from"./VCardText-CXJjmy2z.js";import{V as VForm}from"./VForm-Cdp_Jw3z.js";import{V as VRow,a as VCol}from"./VRow-Vam89E28.js";import{V as VAvatar}from"./VAvatar-pTMjHDOt.js";import{V as VImg}from"./VImg-CJB1qqlT.js";import{V as VRadioGroup,a as VRadio}from"./VRadioGroup-B_mA_yGX.js";import{V as VAlert}from"./VAlert-DWsTjUd1.js";import{V as VCard}from"./VCard-CiWjjGfx.js";import{V as VNavigationDrawer}from"./VNavigationDrawer-yGII5kxT.js";import{d as differenceInCalendarYears}from"./differenceInYears-BdTDs0wt.js";import{V as VChip}from"./VChip-BptNZpoN.js";import{u as useApi}from"./useApi-Bric0Kwu.js";import{c as createUrl}from"./createUrl-BemeYeAi.js";import{V as VDataTableServer}from"./VDataTableServer-C6izPy_v.js";import{_ as _export_sfc}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-BGv4x_9E.js";import"./VPagination-aHBobHZc.js";import"./form-D6XNUAbo.js";import"./VSelect-CuALLPRg.js";import"./VTextField-RrDujPJA.js";/* empty css                   */import"./VCounter-C6DrztUk.js";import"./index-DifqrChY.js";import"./index-B1MJiJKT.js";import"./VField-DpvJIASS.js";import"./easing-CjukEv2V.js";import"./VInput-CgPgm4GN.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-Cd60ZhXs.js";import"./ssrBoot-CPr38sYJ.js";import"./createSimpleFunctional-D4nPAYAv.js";import"./dialog-transition-xBwaSZZS.js";import"./VMenu-CZaRDmar.js";import"./VOverlay-WT56NA1t.js";import"./lazy-bOSG3YjZ.js";import"./scopeId-CWlglWpF.js";import"./VCheckboxBtn-6akwyW4c.js";import"./VSelectionControl-DsbR2dFO.js";import"./filter-BPxJCS7X.js";import"./VSpacer-E1V_zDpd.js";/* empty css              */import"./index-B3bPRkoL.js";import"./__vite-browser-external-DFygW7-s.js";import"./VSlideGroup-BXoC9GDz.js";import"./VDataTable-D229WDSb.js";import"./VTable-CSkEi-R9.js";const _hoisted_1$1={class:"text-h6 text-primary"},_hoisted_2$1={key:1,class:"text-5xl font-weight-medium"},_hoisted_3$1=createBaseVNode("label",{for:"picture"},null,-1),_hoisted_4$1={class:"text-h6 text-primary"},_hoisted_5$1={style:{color:`rgba(\r
                        var(--v-theme-on-surface),\r
                        var(--v-high-emphasis-opacity)\r
                      )`,"line-height":"15px"},class:"v-label mb-1 text-body-2 text-black"},_hoisted_6$1={class:"text-body-1 text-primary font-weight-medium text-high-emphasis"},_hoisted_7$1={class:"mt-5"},_hoisted_8$1={class:"mt-5"},_hoisted_9$1={class:"mt-5"},_hoisted_10$1={class:"text-body-1 text-primary font-weight-medium text-high-emphasis"},_hoisted_11$1={class:"text-body-1 text-primary font-weight-medium text-high-emphasis"},_hoisted_12={class:"text-body-1 text-primary font-weight-medium text-high-emphasis"},_hoisted_13={class:"text-body-1 text-primary font-weight-medium text-high-emphasis"},_hoisted_14={style:{color:`rgba(\r
                      var(--v-theme-on-surface),\r
                      var(--v-high-emphasis-opacity)\r
                    )`,"line-height":"15px"},class:"v-label mb-1 text-body-2 text-black"},_hoisted_15={class:"mt-5"},_hoisted_16={class:"mt-5"},_hoisted_17={class:"text-body-1 text-primary font-weight-medium text-high-emphasis"},_hoisted_18={style:{color:`rgba(\r
                      var(--v-theme-on-surface),\r
                      var(--v-high-emphasis-opacity)\r
                    )`,"line-height":"15px"},class:"v-label mb-1 text-body-2 text-black"},_hoisted_19={class:"mt-5"},_hoisted_20={class:"mt-5"},_hoisted_21={class:"text-body-1 text-primary font-weight-medium text-high-emphasis"},_hoisted_22={class:"d-flex gap-4 justify-start pb-10"},blobSasUrl="https://dakakean.blob.core.windows.net/psychiatry?sp=racwl&st=2024-05-02T06:46:34Z&se=2024-05-10T14:46:34Z&spr=https&sv=2022-11-02&sr=c&sig=oTStvDHsKPQiKZ4%2Bniqpd7Dt9w514Y52T6kIQlC5490%3D",containerName="psychiatry",_sfc_main$1=defineComponent({__name:"ECommerceAddCustomerDrawer",props:{isDrawerOpen:{type:Boolean}},emits:["update:isDrawerOpen"],setup(__props,{emit:__emit}){const{t}=useI18n(),blobServiceClient=new BlobServiceClient(blobSasUrl),containerClient=blobServiceClient.getContainerClient(containerName),storedUserData=useCookie("userData").value,uploadFiles=async()=>{const a=document.getElementById("picture");try{const e=[];if(a&&a.files){for(const s of a.files){const u=containerClient.getBlockBlobClient(s.name);e.push(u.uploadBrowserData(s))}await Promise.all(e),avatar.value=(await e[0])._response.request.url}}catch(e){console.log(e)}},props=__props,emit=__emit,router=useRouter(),handleDrawerModelValueUpdate=a=>{emit("update:isDrawerOpen",a)},errors=ref({message:void 0}),radioContent=[{title:t("Child"),value:"child"},{title:t("Adult"),value:"adult"}],selectedRadio=ref("child");(storedUserData==null?void 0:storedUserData.clinic.name)==="Kadhimiya"?selectedRadio.value="adult":selectedRadio.value="child";const refVForm=ref(),avatar=ref(),name=ref(),dob=ref("2024-01-01"),dobAdult=ref(),age=ref(),gender=ref("Male"),phone=ref(),father_dob=ref(),father_edu=ref(),father_age=ref(),father_work=ref(),mother_dob=ref(),mother_age=ref(),mother_edu=ref(),mother_work=ref(),related=ref(),siblings=ref(),order=ref(),familyHx=ref(),notes=ref(),marital_status=ref(),children=ref(),residence=ref(),neighborhood=ref(""),occupation=ref(),education=ref(),saving=ref(!1),resetForm=()=>{var a;(a=refVForm.value)==null||a.reset(),emit("update:isDrawerOpen",!1)},link=`/patients-new/${storedUserData==null?void 0:storedUserData.id}`,addPatient=async()=>{if(storedUserData){saving.value=!0;try{const a=await $api(link,{method:"POST",body:{doctor:storedUserData.id,name:name.value,dob:dobAdult.value?addTimeToDateString(convertDob(dobAdult.value)):addTimeToDateString(dob.value),gender:gender.value,phone:phone.value,avatar:avatar.value,father_dob:new Date(father_dob.value,0,1),father_age:+father_age.value,father_work:father_work.value,father_edu:father_edu.value,mother_dob:new Date(mother_dob.value,0,1),mother_age:+mother_age.value,mother_work:mother_work.value,mother_edu:mother_edu.value,related:related.value,siblings:+siblings.value,order:+order.value,familyHx:familyHx.value,notes:notes.value,marital_status:marital_status.value,children:children.value,residence:residence.value,neighborhood:neighborhood.value,occupation:occupation.value,education:education.value},onResponseError({response:e}){errors.value=e._data}});router.push(`/patients/${a.id}`),saving.value=!1}catch(a){console.error(a),saving.value=!1}}};watch(dob,a=>{a&&(age.value=calculateAge(a))}),watch(dobAdult,a=>{a&&a.toString().length===4&&(age.value=calculateAge(new Date(a).toString()))}),watch(father_dob,a=>{if(a.length===4){const e=new Date(father_dob.value,0,1);father_age.value=differenceInCalendarYears(dob.value,e)}else father_age.value=null}),watch(mother_dob,a=>{if(a.length===4){const e=new Date(mother_dob.value,0,1);mother_age.value=differenceInCalendarYears(dob.value,e)}else mother_age.value=null});const convertDob=a=>{const e=new Date(a);return e.setMonth(0),e.setDate(1),e.toISOString().slice(0,10)},toggleSuggestion=(modelName,suggestion)=>{const model=eval(modelName);if(model.value===void 0||model.value===null||model.value==="")model.value=suggestion;else{const a=model.value.split(", ").filter(s=>s),e=a.indexOf(suggestion);e===-1?a.push(suggestion):a.splice(e,1),model.value=a.join(", ")}};return(a,e)=>{const s=_sfc_main$2,u=__unplugin_components_1,r=_sfc_main$3,d=_sfc_main$4,i=_sfc_main$5,f=_sfc_main$6;return openBlock(),createBlock(VNavigationDrawer,{"model-value":props.isDrawerOpen,temporary:"",location:"end",width:"370",border:"none","onUpdate:modelValue":handleDrawerModelValueUpdate},{default:withCtx(()=>[createVNode(s,{title:"Add a Patient",onCancel:e[0]||(e[0]=o=>a.$emit("update:isDrawerOpen",!1))}),createVNode(VDivider),createVNode(VCard,{flat:""},{default:withCtx(()=>[createVNode(unref(PerfectScrollbar$1),{options:{wheelPropagation:!1},class:"h-100"},{default:withCtx(()=>[createVNode(VCardText,{style:{"block-size":"calc(100vh - 5rem)"}},{default:withCtx(()=>[createVNode(unref(VForm),{ref_key:"refVForm",ref:refVForm,onSubmit:e[25]||(e[25]=withModifiers(()=>{},["prevent"]))},{default:withCtx(()=>[createVNode(VRow,{class:"mb-2"},{default:withCtx(()=>[createVNode(VCol,null,{default:withCtx(()=>[createVNode(u,{"selected-radio":unref(selectedRadio),"onUpdate:selectedRadio":e[1]||(e[1]=o=>isRef(selectedRadio)?selectedRadio.value=o:null),"radio-content":radioContent,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createBaseVNode("h6",_hoisted_1$1,toDisplayString(unref(t)("Image")),1)]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createVNode(VAvatar,{circle:"",size:100,color:unref(avatar)?"undefined":"secondary",variant:unref(avatar)?void 0:"tonal"},{default:withCtx(()=>[unref(avatar)?(openBlock(),createBlock(VImg,{key:0,src:unref(avatar),style:{"object-fit":"cover"}},null,8,["src"])):(openBlock(),createElementBlock("span",_hoisted_2$1,toDisplayString(("avatarText"in a?a.avatarText:unref(avatarText))(unref(name))),1))]),_:1},8,["color","variant"])]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[_hoisted_3$1,createBaseVNode("input",{type:"file",id:"picture",name:"picture",accept:"image/*",capture:"environment",onChange:uploadFiles},null,32)]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createBaseVNode("h6",_hoisted_4$1,toDisplayString(unref(t)("Basic Information")),1)]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(name),"onUpdate:modelValue":e[2]||(e[2]=o=>isRef(name)?name.value=o:null),label:unref(t)("Name")+"*",rules:["requiredValidator"in a?a.requiredValidator:unref(requiredValidator)],placeholder:""},null,8,["modelValue","label","rules"])]),_:1}),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:0,cols:"12"},{default:withCtx(()=>[createVNode(d,{modelValue:unref(dob),"onUpdate:modelValue":e[3]||(e[3]=o=>isRef(dob)?dob.value=o:null),label:unref(t)("Birth Date")+"*",placeholder:unref(t)("Select date")},null,8,["modelValue","label","placeholder"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="adult"?(openBlock(),createBlock(VCol,{key:1,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(dobAdult),"onUpdate:modelValue":e[4]||(e[4]=o=>isRef(dobAdult)?dobAdult.value=o:null),label:unref(t)("Birth Date")+"*",placeholder:"",maxlength:"4",rules:["dateOfBirthValidator"in a?a.dateOfBirthValidator:unref(dateOfBirthValidator)]},null,8,["modelValue","label","rules"])]),_:1})):createCommentVNode("",!0),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createVNode(r,{disabled:"",modelValue:unref(age),"onUpdate:modelValue":e[5]||(e[5]=o=>isRef(age)?age.value=o:null),label:unref(t)("Age")+`(${unref(t)("Automatic")})`,placeholder:"",maxlength:"4"},null,8,["modelValue","label"])]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createVNode(VRadioGroup,{modelValue:unref(gender),"onUpdate:modelValue":e[6]||(e[6]=o=>isRef(gender)?gender.value=o:null),inline:""},{default:withCtx(()=>[createBaseVNode("span",_hoisted_5$1,toDisplayString(unref(t)("Gender"))+"*",1),createVNode(VRadio,{label:unref(t)("Male"),value:"Male"},null,8,["label"]),createVNode(VRadio,{label:unref(t)("Female"),value:"Female"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(phone),"onUpdate:modelValue":e[7]||(e[7]=o=>isRef(phone)?phone.value=o:null),label:unref(t)("Phone"),placeholder:"",rules:["phoneNumberValidator"in a?a.phoneNumberValidator:unref(phoneNumberValidator)],maxlength:"11"},null,8,["modelValue","label","rules"])]),_:1}),createVNode(VCol,null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_6$1,toDisplayString(unref(t)("Demographic Information")),1)]),_:1}),unref(selectedRadio)==="adult"?(openBlock(),createBlock(VCol,{key:2,cols:"12"},{default:withCtx(()=>[createVNode(i,{modelValue:unref(marital_status),"onUpdate:modelValue":e[8]||(e[8]=o=>isRef(marital_status)?marital_status.value=o:null),label:unref(t)("Marital Status"),placeholder:unref(t)("Select Status"),items:unref(gender)==="Male"?["متزوج","مطلق","اعزب","منفصل","ارمل"]:["متزوجة","مطلقة","عزباء","منفصلة","ارملة"]},null,8,["modelValue","label","placeholder","items"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="adult"?(openBlock(),createBlock(VCol,{key:3,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(children),"onUpdate:modelValue":e[9]||(e[9]=o=>isRef(children)?children.value=o:null),placeholder:unref(t)("Write a Number"),label:unref(t)("Children")},null,8,["modelValue","placeholder","label"])]),_:1})):createCommentVNode("",!0),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createVNode(i,{modelValue:unref(residence),"onUpdate:modelValue":e[10]||(e[10]=o=>isRef(residence)?residence.value=o:null),label:unref(t)("Residence"),placeholder:unref(t)("Select Residence"),items:"cities"in a?a.cities:unref(cities)},null,8,["modelValue","label","placeholder","items"]),createBaseVNode("div",_hoisted_7$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList("cities"in a?a.cities:unref(cities),o=>(openBlock(),createBlock(VChip,{class:"me-2 mb-2",size:"x-small",onClick:()=>{residence.value=o}},{default:withCtx(()=>[createTextVNode(toDisplayString(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1}),unref(residence)==="بغداد"?(openBlock(),createBlock(VCol,{key:4,cols:"12"},{default:withCtx(()=>[createVNode(i,{modelValue:unref(neighborhood),"onUpdate:modelValue":e[11]||(e[11]=o=>isRef(neighborhood)?neighborhood.value=o:null),label:unref(t)("Neighborhood"),placeholder:unref(t)("Select"),items:"baghdadRegions"in a?a.baghdadRegions:unref(baghdadRegions)},null,8,["modelValue","label","placeholder","items"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="adult"?(openBlock(),createBlock(VCol,{key:5,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(occupation),"onUpdate:modelValue":e[12]||(e[12]=o=>isRef(occupation)?occupation.value=o:null),placeholder:unref(t)("Write an Occupation"),label:unref(t)("Occupation")},null,8,["modelValue","placeholder","label"]),createBaseVNode("div",_hoisted_8$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList("occupationSuggestions"in a?a.occupationSuggestions:unref(occupationSuggestions),o=>(openBlock(),createBlock(VChip,{class:"me-2 mb-2",size:"x-small",onClick:()=>{occupation.value=unref(occupation)===""||unref(occupation)===void 0?o:`${unref(occupation)}, ${o}`}},{default:withCtx(()=>[createTextVNode(toDisplayString(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:6,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(education),"onUpdate:modelValue":e[13]||(e[13]=o=>isRef(education)?education.value=o:null),label:unref(t)("Education")},null,8,["modelValue","label"]),createBaseVNode("div",_hoisted_9$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList("childEducation"in a?a.childEducation:unref(childEducation),o=>(openBlock(),createBlock(VChip,{class:"me-2 mb-2",size:"x-small",onClick:c=>toggleSuggestion("education",o)},{default:withCtx(()=>[createTextVNode(toDisplayString(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="adult"?(openBlock(),createBlock(VCol,{key:7,cols:"12"},{default:withCtx(()=>[createVNode(i,{modelValue:unref(education),"onUpdate:modelValue":e[14]||(e[14]=o=>isRef(education)?education.value=o:null),label:unref(t)("Education"),placeholder:unref(t)("Select Education"),items:"adultEducation"in a?a.adultEducation:unref(adultEducation)},null,8,["modelValue","label","placeholder","items"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:8},{default:withCtx(()=>[createBaseVNode("div",_hoisted_10$1,toDisplayString(unref(t)("Parents Relationship")),1)]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:9,cols:"12"},{default:withCtx(()=>[createVNode(VRadioGroup,{modelValue:unref(related),"onUpdate:modelValue":e[15]||(e[15]=o=>isRef(related)?related.value=o:null),inline:""},{default:withCtx(()=>[createVNode(VRadio,{label:unref(t)("Related"),value:!0},null,8,["label"]),createVNode(VRadio,{label:unref(t)("Not Related"),value:!1},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:10},{default:withCtx(()=>[createBaseVNode("div",_hoisted_11$1,toDisplayString(unref(t)("Siblings")),1)]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:11,cols:"12"},{default:withCtx(()=>[createVNode(VRadioGroup,{modelValue:unref(siblings),"onUpdate:modelValue":e[16]||(e[16]=o=>isRef(siblings)?siblings.value=o:null),inline:""},{default:withCtx(()=>[createVNode(VRadio,{label:"0",value:0}),createVNode(VRadio,{label:"1",value:1}),createVNode(VRadio,{label:"2",value:2}),createVNode(VRadio,{label:"3",value:3}),createVNode(VRadio,{label:"4",value:4}),createVNode(VRadio,{label:"5",value:5}),createVNode(VRadio,{label:"6",value:6}),createVNode(VRadio,{label:"7",value:7}),createVNode(VRadio,{label:"8",value:8})]),_:1},8,["modelValue"])]),_:1})):createCommentVNode("",!0),unref(siblings)>=1?(openBlock(),createBlock(VCol,{key:12},{default:withCtx(()=>[createBaseVNode("div",_hoisted_12,toDisplayString(unref(t)("Order in Siblings")),1)]),_:1})):createCommentVNode("",!0),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createVNode(VRadioGroup,{modelValue:unref(order),"onUpdate:modelValue":e[17]||(e[17]=o=>isRef(order)?order.value=o:null),inline:""},{default:withCtx(()=>[unref(siblings)>=1?(openBlock(),createBlock(VRadio,{key:0,label:unref(t)("1st"),value:1},null,8,["label"])):createCommentVNode("",!0),unref(siblings)>=1?(openBlock(),createBlock(VRadio,{key:1,label:unref(t)("2nd"),value:2},null,8,["label"])):createCommentVNode("",!0),unref(siblings)>1?(openBlock(),createBlock(VRadio,{key:2,label:unref(t)("3rd"),value:3},null,8,["label"])):createCommentVNode("",!0),unref(siblings)>2?(openBlock(),createBlock(VRadio,{key:3,label:unref(t)("4th"),value:4},null,8,["label"])):createCommentVNode("",!0),unref(siblings)>3?(openBlock(),createBlock(VRadio,{key:4,label:unref(t)("5th"),value:5},null,8,["label"])):createCommentVNode("",!0),unref(siblings)>4?(openBlock(),createBlock(VRadio,{key:5,label:unref(t)("6th"),value:6},null,8,["label"])):createCommentVNode("",!0),unref(siblings)>5?(openBlock(),createBlock(VRadio,{key:6,label:unref(t)("7th"),value:7},null,8,["label"])):createCommentVNode("",!0),unref(siblings)>6?(openBlock(),createBlock(VRadio,{key:7,label:unref(t)("8th"),value:8},null,8,["label"])):createCommentVNode("",!0),unref(siblings)>7?(openBlock(),createBlock(VRadio,{key:8,label:unref(t)("9th"),value:8},null,8,["label"])):createCommentVNode("",!0)]),_:1},8,["modelValue"])]),_:1}),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:13},{default:withCtx(()=>[createBaseVNode("div",_hoisted_13,toDisplayString(unref(t)("Father Information")),1)]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:14,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(father_dob),"onUpdate:modelValue":e[18]||(e[18]=o=>isRef(father_dob)?father_dob.value=o:null),label:unref(t)("Date of Birth"),rules:["dateOfBirthValidator"in a?a.dateOfBirthValidator:unref(dateOfBirthValidator)],placeholder:"",maxlength:"4"},null,8,["modelValue","label","rules"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"&&unref(father_age)?(openBlock(),createBlock(VCol,{key:15,cols:"12"},{default:withCtx(()=>[createBaseVNode("span",_hoisted_14,toDisplayString(unref(t)("Father Age at Birth of Child")),1),createVNode(VAlert,{density:"compact",color:unref(father_age)>40?"error":"success",variant:"tonal"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(father_age)?unref(father_age):"0"),1)]),_:1},8,["color"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:16,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(father_edu),"onUpdate:modelValue":e[19]||(e[19]=o=>isRef(father_edu)?father_edu.value=o:null),label:unref(t)("Education"),placeholder:""},null,8,["modelValue","label"]),createBaseVNode("div",_hoisted_15,[(openBlock(!0),createElementBlock(Fragment,null,renderList("adultEducation"in a?a.adultEducation:unref(adultEducation),o=>(openBlock(),createBlock(VChip,{class:"me-2 mb-2",size:"x-small",onClick:c=>toggleSuggestion("father_edu",o)},{default:withCtx(()=>[createTextVNode(toDisplayString(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:17,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(father_work),"onUpdate:modelValue":e[20]||(e[20]=o=>isRef(father_work)?father_work.value=o:null),label:unref(t)("Work"),placeholder:""},null,8,["modelValue","label"]),createBaseVNode("div",_hoisted_16,[(openBlock(!0),createElementBlock(Fragment,null,renderList("occupationSuggestions"in a?a.occupationSuggestions:unref(occupationSuggestions),o=>(openBlock(),createBlock(VChip,{class:"me-2 mb-2",size:"x-small",onClick:c=>toggleSuggestion("father_work",o)},{default:withCtx(()=>[createTextVNode(toDisplayString(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:18},{default:withCtx(()=>[createBaseVNode("div",_hoisted_17,toDisplayString(unref(t)("Mother Information")),1)]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:19,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(mother_dob),"onUpdate:modelValue":e[21]||(e[21]=o=>isRef(mother_dob)?mother_dob.value=o:null),label:unref(t)("Date of Birth"),rules:["dateOfBirthValidator"in a?a.dateOfBirthValidator:unref(dateOfBirthValidator)],placeholder:"",maxlength:"4"},null,8,["modelValue","label","rules"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"&&unref(mother_age)?(openBlock(),createBlock(VCol,{key:20,cols:"12"},{default:withCtx(()=>[createBaseVNode("span",_hoisted_18,toDisplayString(unref(t)("Mother Age at Birth of Child")),1),createVNode(VAlert,{density:"compact",color:unref(mother_age)>35?"error":"success",variant:"tonal"},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(mother_age)?unref(mother_age):"0"),1)]),_:1},8,["color"])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:21,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(mother_edu),"onUpdate:modelValue":e[22]||(e[22]=o=>isRef(mother_edu)?mother_edu.value=o:null),label:unref(t)("Education"),placeholder:""},null,8,["modelValue","label"]),createBaseVNode("div",_hoisted_19,[(openBlock(!0),createElementBlock(Fragment,null,renderList("adultEducation"in a?a.adultEducation:unref(adultEducation),o=>(openBlock(),createBlock(VChip,{class:"me-2 mb-2",size:"x-small",onClick:c=>toggleSuggestion("mother_edu",o)},{default:withCtx(()=>[createTextVNode(toDisplayString(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1})):createCommentVNode("",!0),unref(selectedRadio)==="child"?(openBlock(),createBlock(VCol,{key:22,cols:"12"},{default:withCtx(()=>[createVNode(r,{modelValue:unref(mother_work),"onUpdate:modelValue":e[23]||(e[23]=o=>isRef(mother_work)?mother_work.value=o:null),label:unref(t)("Work"),placeholder:""},null,8,["modelValue","label"]),createBaseVNode("div",_hoisted_20,[(openBlock(!0),createElementBlock(Fragment,null,renderList("occupationSuggestions"in a?a.occupationSuggestions:unref(occupationSuggestions),o=>(openBlock(),createBlock(VChip,{class:"me-2 mb-2",size:"x-small",onClick:c=>toggleSuggestion("mother_work",o)},{default:withCtx(()=>[createTextVNode(toDisplayString(o),1)]),_:2},1032,["onClick"]))),256))])]),_:1})):createCommentVNode("",!0),createVNode(VCol,null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_21,toDisplayString(unref(t)("Notes")),1)]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createVNode(f,{modelValue:unref(notes),"onUpdate:modelValue":e[24]||(e[24]=o=>isRef(notes)?notes.value=o:null)},null,8,["modelValue"])]),_:1}),createVNode(VCol,{cols:"12"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_22,[unref(saving)?(openBlock(),createBlock(VProgressCircular,{key:1,size:30,width:"3",color:"primary",indeterminate:""})):(openBlock(),createBlock(VBtn,{key:0,type:"submit",color:"primary",disabled:!unref(name)||!unref(dob),onClickOnce:addPatient},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("Add")),1)]),_:1},8,["disabled"])),createVNode(VBtn,{color:"error",variant:"tonal",onClick:resetForm},{default:withCtx(()=>[createTextVNode(toDisplayString(unref(t)("Discard")),1)]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}}),_hoisted_1={class:"d-flex justify-space-between flex-wrap gap-y-4"},_hoisted_2={class:"d-flex flex-row gap-4 align-center flex-wrap"},_hoisted_3={class:"d-flex align-center gap-x-3"},_hoisted_4={key:1},_hoisted_5={class:"d-flex flex-column"},_hoisted_6={class:"text-body-2"},_hoisted_7={class:"text-body-1 text-high-emphasis"},_hoisted_8={class:"d-flex gap-x-2"},_hoisted_9=["src"],_hoisted_10={class:"text-body-1"},_hoisted_11={class:"text-h6"},_sfc_main=defineComponent({__name:"index",async setup(a){let e,s;const u=ref(""),r=ref(!1),d=ref(10),i=ref(1),f=ref(),o=ref(),c=[{title:"Customer",key:"customer"},{title:"Customer Id",key:"customerId"},{title:"Country",key:"country"},{title:"Orders",key:"orders"},{title:"Total Spent",key:"totalSpent"}],_=m=>{var n,p;f.value=(n=m.sortBy[0])==null?void 0:n.key,o.value=(p=m.sortBy[0])==null?void 0:p.order},{data:V}=([e,s]=withAsyncContext(()=>useApi(createUrl("/apps/ecommerce/customers",{query:{q:u,itemsPerPage:d,page:i,sortBy:f,orderBy:o}}))),e=await e,s(),e);console.log(V);const g=computed(()=>V.value.customers),h=computed(()=>V.value.total);return(m,n)=>{const p=_sfc_main$3,v=_sfc_main$7,C=resolveComponent("RouterLink"),b=_sfc_main$8;return openBlock(),createElementBlock("div",null,[createVNode(VCard,null,{default:withCtx(()=>[createVNode(VCardText,null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createVNode(p,{modelValue:unref(u),"onUpdate:modelValue":n[0]||(n[0]=l=>isRef(u)?u.value=l:null),style:{"max-inline-size":"280px","min-inline-size":"280px"},placeholder:"Search Name"},null,8,["modelValue"]),createBaseVNode("div",_hoisted_2,[createVNode(v,{modelValue:unref(d),"onUpdate:modelValue":n[1]||(n[1]=l=>isRef(d)?d.value=l:null),items:[5,10,20,50,100]},null,8,["modelValue"]),createVNode(VBtn,{"prepend-icon":"tabler-upload",variant:"tonal",color:"secondary"},{default:withCtx(()=>[createTextVNode(" Export ")]),_:1}),createVNode(VBtn,{"prepend-icon":"tabler-plus",onClick:n[2]||(n[2]=l=>r.value=!unref(r))},{default:withCtx(()=>[createTextVNode(" Add Customer ")]),_:1})])])]),_:1}),createVNode(VDivider),createVNode(VDataTableServer,{"items-per-page":unref(d),"onUpdate:itemsPerPage":n[4]||(n[4]=l=>isRef(d)?d.value=l:null),page:unref(i),"onUpdate:page":n[5]||(n[5]=l=>isRef(i)?i.value=l:null),items:unref(g),"item-value":"customer",headers:c,"items-length":unref(h),"show-select":"",class:"text-no-wrap","onUpdate:options":_},{"item.customer":withCtx(({item:l})=>[createBaseVNode("div",_hoisted_3,[createVNode(VAvatar,{size:"34",variant:l.avatar?void 0:"tonal"},{default:withCtx(()=>[l.avatar?(openBlock(),createBlock(VImg,{key:0,src:l.avatar},null,8,["src"])):(openBlock(),createElementBlock("span",_hoisted_4,toDisplayString(("avatarText"in m?m.avatarText:unref(avatarText))(l.customer)),1))]),_:2},1032,["variant"]),createBaseVNode("div",_hoisted_5,[createVNode(C,{to:{name:"apps-ecommerce-customer-details-id",params:{id:l.customerId}},class:"text-link font-weight-medium d-inline-block",style:{"line-height":"1.375rem"}},{default:withCtx(()=>[createTextVNode(toDisplayString(l.customer),1)]),_:2},1032,["to"]),createBaseVNode("div",_hoisted_6,toDisplayString(l.email),1)])])]),"item.customerId":withCtx(({item:l})=>[createBaseVNode("div",_hoisted_7," #"+toDisplayString(l.customerId),1)]),"item.orders":withCtx(({item:l})=>[createTextVNode(toDisplayString(l.order),1)]),"item.country":withCtx(({item:l})=>[createBaseVNode("div",_hoisted_8,[createBaseVNode("img",{src:l.countryFlag,height:"22",width:"22"},null,8,_hoisted_9),createBaseVNode("span",_hoisted_10,toDisplayString(l.country),1)])]),"item.totalSpent":withCtx(({item:l})=>[createBaseVNode("h6",_hoisted_11," $"+toDisplayString(l.totalSpent),1)]),bottom:withCtx(()=>[createVNode(b,{page:unref(i),"onUpdate:page":n[3]||(n[3]=l=>isRef(i)?i.value=l:null),"items-per-page":unref(d),"total-items":unref(h)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),createVNode(_sfc_main$1,{"is-drawer-open":unref(r),"onUpdate:isDrawerOpen":n[6]||(n[6]=l=>isRef(r)?r.value=l:null)},null,8,["is-drawer-open"])])}}}),index=_export_sfc(_sfc_main,[["__scopeId","data-v-903935fa"]]);export{index as default};
