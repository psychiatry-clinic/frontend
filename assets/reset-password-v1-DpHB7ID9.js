import{d as k,r as m,a as n,o as T,c as B,e as a,b as e,n as o,M as V,f as s,I as w,x as I,aj as N,v as R,y as S}from"./index-B-uKkDM3.js";import{_ as j}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import{a as L,b as M}from"./auth-v1-top-shape-gPxasD3d.js";import{V as u}from"./VNodeRenderer-CuvnLh29.js";const $={class:"auth-wrapper d-flex align-center justify-center pa-4"},F={class:"position-relative my-sm-16"},U={class:"app-logo"},z={class:"app-logo-title"},A=a("h4",{class:"text-h4 mb-1"}," Reset Password 🔒 ",-1),H=a("p",{class:"mb-0"}," Your new password must be different from previously used passwords ",-1),D=a("span",null,"Back to login",-1),K=k({__name:"reset-password-v1",setup(E){const d=m({newPassword:"",confirmPassword:""}),i=m(!1),p=m(!1);return(l,t)=>{const h=n("VCardTitle"),b=n("VCardItem"),f=n("VCardText"),_=j,c=n("VCol"),v=n("VBtn"),y=n("VIcon"),C=n("RouterLink"),P=n("VRow"),x=n("VForm"),g=n("VCard");return T(),B("div",$,[a("div",F,[e(o(u),{nodes:("h"in l?l.h:o(V))("div",{innerHTML:o(L)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(o(u),{nodes:("h"in l?l.h:o(V))("div",{innerHTML:o(M)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(g,{class:S(["auth-card",l.$vuetify.display.smAndUp?"pa-6":"pa-2"]),"max-width":"460"},{default:s(()=>[e(b,{class:"justify-center"},{default:s(()=>[e(h,null,{default:s(()=>[a("div",U,[e(o(u),{nodes:o(w).app.logo},null,8,["nodes"]),a("h1",z,I(o(w).app.title),1)])]),_:1})]),_:1}),e(f,null,{default:s(()=>[A,H]),_:1}),e(f,null,{default:s(()=>[e(x,{onSubmit:N(()=>{},["prevent"])},{default:s(()=>[e(P,null,{default:s(()=>[e(c,{cols:"12"},{default:s(()=>[e(_,{modelValue:o(d).newPassword,"onUpdate:modelValue":t[0]||(t[0]=r=>o(d).newPassword=r),autofocus:"",label:"New Password",placeholder:"············",type:o(i)?"text":"password","append-inner-icon":o(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[1]||(t[1]=r=>i.value=!o(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(c,{cols:"12"},{default:s(()=>[e(_,{modelValue:o(d).confirmPassword,"onUpdate:modelValue":t[2]||(t[2]=r=>o(d).confirmPassword=r),label:"Confirm Password",placeholder:"············",type:o(p)?"text":"password","append-inner-icon":o(p)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[3]||(t[3]=r=>p.value=!o(p))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(c,{cols:"12"},{default:s(()=>[e(v,{block:"",type:"submit"},{default:s(()=>[R(" Set New Password ")]),_:1})]),_:1}),e(c,{cols:"12"},{default:s(()=>[e(C,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:s(()=>[e(y,{icon:"tabler-chevron-left",size:"20",class:"me-1 flip-in-rtl"}),D]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])])])}}});export{K as default};