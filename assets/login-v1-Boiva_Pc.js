import{d as R,r as b,a,o as j,c as L,e as s,b as e,n as o,M as x,f as t,I as c,x as y,v as p,aj as N,y as U}from"./index-B-uKkDM3.js";import{_ as F}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import{_ as I}from"./AuthProvider.vue_vue_type_script_setup_true_lang-sXg161x2.js";import{a as M,b as P}from"./auth-v1-top-shape-gPxasD3d.js";import{V as u}from"./VNodeRenderer-CuvnLh29.js";const S={class:"auth-wrapper d-flex align-center justify-center pa-4"},$={class:"position-relative my-sm-16"},D={class:"app-logo"},z={class:"app-logo-title"},A={class:"text-h4 mb-1"},E={class:"text-capitalize"},H=s("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),W={class:"d-flex align-center justify-space-between flex-wrap my-6"},q=s("span",{class:"d-inline-block"}," New on our platform? ",-1),G=s("span",{class:"mx-4 text-high-emphasis"},"or",-1),Z=R({__name:"login-v1",setup(J){const l=b({email:"",password:"",remember:!1}),m=b(!1);return(d,n)=>{const v=a("VCardTitle"),C=a("VCardItem"),_=a("VCardText"),f=F,i=a("VCol"),g=a("VCheckbox"),V=a("RouterLink"),w=a("VBtn"),h=a("VDivider"),k=a("VRow"),T=a("VForm"),B=a("VCard");return j(),L("div",S,[s("div",$,[e(o(u),{nodes:("h"in d?d.h:o(x))("div",{innerHTML:o(M)}),class:"text-primary auth-v1-top-shape d-none d-sm-block"},null,8,["nodes"]),e(o(u),{nodes:("h"in d?d.h:o(x))("div",{innerHTML:o(P)}),class:"text-primary auth-v1-bottom-shape d-none d-sm-block"},null,8,["nodes"]),e(B,{class:U(["auth-card",d.$vuetify.display.smAndUp?"pa-6":"pa-0"]),"max-width":"460"},{default:t(()=>[e(C,{class:"justify-center"},{default:t(()=>[e(v,null,{default:t(()=>[s("div",D,[e(o(u),{nodes:o(c).app.logo},null,8,["nodes"]),s("h1",z,y(o(c).app.title),1)])]),_:1})]),_:1}),e(_,null,{default:t(()=>[s("h4",A,[p(" Welcome to "),s("span",E,y(o(c).app.title),1),p("! 👋🏻 ")]),H]),_:1}),e(_,null,{default:t(()=>[e(T,{onSubmit:N(()=>{},["prevent"])},{default:t(()=>[e(k,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(f,{modelValue:o(l).email,"onUpdate:modelValue":n[0]||(n[0]=r=>o(l).email=r),autofocus:"",label:"Email or Username",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(f,{modelValue:o(l).password,"onUpdate:modelValue":n[1]||(n[1]=r=>o(l).password=r),label:"Password",placeholder:"············",type:o(m)?"text":"password","append-inner-icon":o(m)?"tabler-eye-off":"tabler-eye","onClick:appendInner":n[2]||(n[2]=r=>m.value=!o(m))},null,8,["modelValue","type","append-inner-icon"]),s("div",W,[e(g,{modelValue:o(l).remember,"onUpdate:modelValue":n[3]||(n[3]=r=>o(l).remember=r),label:"Remember me"},null,8,["modelValue"]),e(V,{class:"text-primary",to:{name:"pages-authentication-forgot-password-v1"}},{default:t(()=>[p(" Forgot Password? ")]),_:1})]),e(w,{block:"",type:"submit"},{default:t(()=>[p(" Login ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-body-1 text-center"},{default:t(()=>[q,e(V,{class:"text-primary ms-1 d-inline-block text-body-1",to:{name:"pages-authentication-register-v1"}},{default:t(()=>[p(" Create an account ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(h),G,e(h)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(I)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])])])}}});export{Z as default};
