import{_ as g}from"./AppPricing-BkVCZfa1.js";import{_ as V}from"./DialogCloseBtn.vue_vue_type_script_setup_true_lang-DZaDyTKZ.js";import{d as f,a as i,o as D,g as C,f as a,b as e}from"./index-B-uKkDM3.js";const $=f({__name:"PricingPlanDialog",props:{isDialogVisible:{type:Boolean}},emits:["update:isDialogVisible"],setup(n,{emit:s}){const l=n,p=s,m=o=>{p("update:isDialogVisible",o)};return(o,t)=>{const d=V,_=g,c=i("VCardText"),r=i("VCard"),u=i("VDialog");return D(),C(u,{"model-value":l.isDialogVisible,width:o.$vuetify.display.smAndDown?"auto":1200,"onUpdate:modelValue":m},{default:a(()=>[e(d,{onClick:t[0]||(t[0]=b=>o.$emit("update:isDialogVisible",!1))}),e(r,{class:"pricing-dialog pa-2 pa-sm-10"},{default:a(()=>[e(c,null,{default:a(()=>[e(_,{md:"4"})]),_:1})]),_:1})]),_:1},8,["model-value","width"])}}});export{$ as _};