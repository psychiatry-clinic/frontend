import{d as f,k as d,b8 as s,n as e,o as m,g as p,f as a,b as o,a0 as _,b2 as V,v as r,x as i,e as b,aj as v,z as g}from"./index-C5WQT9Zq.js";import{P as k}from"./vue3-perfect-scrollbar.esm-CnKZX5mG.js";import{u as y}from"./useAbility-CM5QU_uc.js";import{V as x}from"./VAvatar-7v6WnYoP.js";import{V as h}from"./VMenu-fu_cvwHm.js";import{V as w,a as C,b as B,d as L}from"./VList-C-vtgxvY.js";import{V as N}from"./VBadge-BZXIIoxL.js";const I={class:"px-4 py-2"},U=f({__name:"UserProfile",setup(P){const n=d(),u=y(),t=s("userData"),c=async()=>{s("accessToken").value=null,t.value=null,await n.push("/login"),s("userAbilityRules").value=null,u.update([])};return(z,l)=>e(t)?(m(),p(N,{key:0,dot:"",bordered:"",location:"bottom right","offset-x":"1","offset-y":"2",color:"success"},{default:a(()=>[o(x,{size:"38",class:"cursor-pointer",color:e(t)&&e(t).avatar?void 0:"primary",variant:e(t)&&e(t).avatar?void 0:"tonal"},{default:a(()=>[o(_,{icon:"tabler-user"}),o(h,{activator:"parent",width:"240",location:"bottom end",offset:"12px",onClick:l[0]||(l[0]=V(()=>{},["prevent"]))},{default:a(()=>[o(w,null,{default:a(()=>[o(C,null,{default:a(()=>[o(B,{class:"font-weight-medium"},{default:a(()=>[r(i(e(t).fullName||e(t).username),1)]),_:1}),o(L,null,{default:a(()=>[r(i(e(t).role),1)]),_:1})]),_:1}),o(e(k),{options:{wheelPropagation:!1}},{default:a(()=>[b("div",I,[o(v,{block:"",size:"small",color:"error","append-icon":"tabler-logout",onClick:c},{default:a(()=>[r(" Logout ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["color","variant"])]),_:1})):g("",!0)}});export{U as _};
