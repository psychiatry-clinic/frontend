import{d as S,r as i,k as A,o as y,c as g,e as l,b as s,n as e,M as w,f as t,I as c,x as f,b2 as B,aX as F,aj as M,ba as j,z as L,y as N,b8 as _,b0 as U}from"./index-CG4YDle8.js";import{_ as $}from"./AppTextField.vue_vue_type_script_setup_true_lang-0HTERlGV.js";import{a as z,b as D}from"./auth-v1-top-shape-gPxasD3d.js";import{V as h}from"./VNodeRenderer-Dj87acqk.js";import{u as I}from"./useAbility-ClD5mEIB.js";import{$ as E}from"./api-Dy4JcHNd.js";import{a as H,b as O,V as X}from"./VCard-B4eAm_FF.js";import{V as x}from"./VCardText-BBHH7cpX.js";import{V as q}from"./VForm-1JrjLAGr.js";import{V as G,a as C}from"./VRow-DQz_f7lW.js";import{V as J}from"./VCheckbox-M8fRiY_b.js";import"./form-CZkM9Veq.js";import"./VTextField-C70jzcwf.js";/* empty css                   */import"./VCounter-CAk6rpva.js";import"./index-3yW8ycYk.js";import"./index-BqfGL0sV.js";import"./VField-0RQfECqQ.js";import"./easing-CjukEv2V.js";import"./VInput-BdawH32X.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3bPRkoL.js";import"./createSimpleFunctional-DJacVvXz.js";import"./VAvatar-Cpp5lqjt.js";import"./VImg-Ceae0joh.js";/* empty css              */import"./VCheckboxBtn-D6KcQavv.js";import"./VSelectionControl-C1v3DFU4.js";const K={class:"auth-wrapper d-flex align-center justify-center pa-4"},Q={class:"position-relative my-sm-16"},W={class:"app-logo"},Y={class:"app-logo-title"},Z={class:"text-h4 mb-1"},ee={class:"text-capitalize"},se=l("p",{class:"mb-0"},"Please sign-in to your account",-1),ae={class:"align-self-center text-warning"},oe={class:"d-flex align-center justify-space-between flex-wrap my-6"},te=l("a",{class:"text-primary",href:"https://wa.me/+9647812135916"}," Forgot Password? ",-1),le={key:0},re=l("span",null," Login ",-1),Ne=S({__name:"login",setup(ne){const d=i(!1),p=i(!1),k=A(),T=I(),V=i({message:void 0}),b=i(),n=i({username:"",password:""}),u=i(!1),R=async()=>{p.value=!0;try{const o=await E("/login",{method:"POST",body:{username:n.value.username,password:n.value.password},onResponseError({response:v}){V.value.message=v._data,console.log(v._data)}}),{accessToken:a,userData:m,userAbilityRules:r}=o;_("userAbilityRules").value=r,T.update(r),_("userData").value=m,_("accessToken").value=a,await U(()=>{k.push("/patients")}),p.value=!1}catch(o){console.error(o),p.value=!1}},P=()=>{var o;(o=b.value)==null||o.validate().then(({valid:a})=>{a&&R()})};return(o,a)=>{const m=$;return y(),g("div",K,[l("div",Q,[s(e(h),{nodes:("h"in o?o.h:e(w))("div",{innerHTML:e(z)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),s(e(h),{nodes:("h"in o?o.h:e(w))("div",{innerHTML:e(D)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),s(X,{class:N(["auth-card","pa-6"]),"max-width":"460"},{default:t(()=>[s(H,{class:"justify-center"},{default:t(()=>[s(O,null,{default:t(()=>[l("div",W,[s(e(h),{nodes:e(c).app.logo},null,8,["nodes"]),l("h1",Y,f(e(c).app.title),1)])]),_:1})]),_:1}),s(x,null,{default:t(()=>[l("h4",Z,[l("span",ee,f(e(c).app.title)+" Clinic Application",1)]),se]),_:1}),s(x,null,{default:t(()=>[s(e(q),{ref_key:"refVForm",ref:b,onSubmit:B(P,["prevent"])},{default:t(()=>[l("p",ae,f(e(V).message),1),s(G,null,{default:t(()=>[s(C,{cols:"12"},{default:t(()=>[s(m,{modelValue:e(n).username,"onUpdate:modelValue":a[0]||(a[0]=r=>e(n).username=r),autofocus:"",label:"Username",type:"text",placeholder:""},null,8,["modelValue"])]),_:1}),s(C,{cols:"12"},{default:t(()=>[s(m,{modelValue:e(n).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(n).password=r),label:"Password",placeholder:"",type:e(d)?"text":"password","append-inner-icon":e(d)?"tabler-eye-off":"tabler-eye","onClick:appendInner":a[2]||(a[2]=r=>d.value=!e(d))},null,8,["modelValue","type","append-inner-icon"]),l("div",oe,[s(J,{modelValue:e(u),"onUpdate:modelValue":a[3]||(a[3]=r=>F(u)?u.value=r:null),label:"Remember me"},null,8,["modelValue"]),te]),s(M,{block:"",type:"submit",disabled:e(p)},{default:t(()=>[e(p)?(y(),g("span",le,[s(j,{indeterminate:"",color:"success"})])):L("",!0),re]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})])])}}});export{Ne as default};
