import{u as re}from"./useApi-_N0GFxm1.js";import{V as S}from"./VImg-nmMi926b.js";import{V as b}from"./VAvatar-7v6WnYoP.js";import{d as V,r as C,b9 as de,n as r,o as l,g as _,f as t,b as e,e as s,x as a,a0 as w,aj as Y,v as g,z as B,j as L,w as U,a as R,c as x,i as $,F as y,Q as Z,R as ee,bb as z,bc as X,b5 as K,aX as Q,b1 as le,dd as ue,da as F,bn as ae,de as pe,b4 as me,df as _e,dg as fe,b3 as oe,bm as he,dh as ge,di as ve,dj as xe,a6 as be}from"./index-C5WQT9Zq.js";import{V as j}from"./VCardText-DZQapI2c.js";import{V as k,a as N,b as te}from"./VCard-BGo43tDb.js";import{_ as M}from"./MoreBtn.vue_vue_type_script_setup_true_lang-Br05Jvmv.js";import{$ as G}from"./api-C2AlK1gs.js";import{V as A,a as T}from"./VRow-DRZjcEyV.js";import{V as W}from"./VChip-CKqHp6FM.js";import{V as I,a as P,b as D,d as ne}from"./VList-C-vtgxvY.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{p as ye}from"./pdf-CjLd7jFM.js";import{V as $e,a as J}from"./VTimelineItem-kjU8kd1q.js";import{V as O}from"./VTooltip-PwkO0haS.js";import{_ as we}from"./TablePagination.vue_vue_type_script_setup_true_lang-_XdDwHJC.js";import{_ as je}from"./AppTextField.vue_vue_type_script_setup_true_lang-C59T6Uyw.js";import{V as ie}from"./VDivider-BcGK93XG.js";import{V as Ve}from"./VDataTable-BtPS7sb8.js";import{V as ke}from"./VSpacer-BnhK7dSD.js";import{V as Te,a as Pe}from"./VTabs-DZIJtl_a.js";import{a as H,V as De}from"./VWindowItem-CJs5Duwk.js";import"./index-CK4sZXkx.js";import"./createSimpleFunctional-CpJFqdGN.js";import"./VMenu-fu_cvwHm.js";import"./VOverlay-DdBE7t30.js";import"./easing-CjukEv2V.js";import"./lazy-CFIHLmxg.js";import"./scopeId-B1B_DOqA.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-D0QLIQjY.js";import"./index-B3bPRkoL.js";/* empty css              */import"./index-DZvt-9Pr.js";import"./VSlideGroup-DTiaAquR.js";import"./ssrBoot-DZaVDsF1.js";import"./VPagination-DG1r4wOT.js";import"./form-DZjWB9DY.js";import"./VTextField-C6MDyt68.js";/* empty css                   */import"./VCounter-QYLqHjuy.js";import"./VField-BE7mYYdn.js";import"./VInput-D6PwPnL5.js";import"./VSelect-QLnwBfw_.js";import"./VCheckboxBtn-qHKcB-5X.js";import"./VSelectionControl-CtZGpdA_.js";import"./VTable-DJ1KTf5I.js";import"./filter-DIAkksj9.js";const ze={class:"d-flex h-0"},Ce={class:"user-profile-info w-100 mt-16 pt-6 pt-sm-0 mt-sm-0"},Ie={class:"text-h4 text-center text-sm-start font-weight-medium mb-2"},Se={class:"d-flex align-center justify-center justify-sm-space-between flex-wrap gap-5"},Ae={class:"d-flex flex-wrap justify-center justify-sm-start flex-grow-1 gap-6"},Be={class:"d-flex gap-x-2 align-center"},Le={class:"text-body-1 font-weight-medium"},Re={class:"d-flex gap-x-2 align-center"},Me={class:"text-body-1 font-weight-medium"},Ee={class:"d-flex gap-x-2 align-center"},Fe={class:"text-body-1 font-weight-medium"},He=V({__name:"UserProfileHeader",async setup(p){let i,c;const f=C(),{data:o,error:m}=([i,c]=de(()=>re("/pages/profile/header")),i=await i,c(),i);return m.value?console.log(m.value):o.value&&(f.value=o.value),(d,h)=>r(f)?(l(),_(k,{key:0},{default:t(()=>[e(S,{src:r(f).coverImg,"min-height":"125","max-height":"250",cover:""},null,8,["src"]),e(j,{class:"d-flex align-bottom flex-sm-row flex-column justify-center gap-x-6"},{default:t(()=>{var n,v,u,E;return[s("div",ze,[e(b,{rounded:"",size:"130",image:r(f).profileImg,class:"user-profile-avatar mx-auto"},null,8,["image"])]),s("div",Ce,[s("h4",Ie,a((n=r(f))==null?void 0:n.fullName),1),s("div",Se,[s("div",Ae,[s("span",Be,[e(w,{size:"24",icon:"tabler-palette"}),s("div",Le,a((v=r(f))==null?void 0:v.designation),1)]),s("span",Re,[e(w,{size:"24",icon:"tabler-map-pin"}),s("div",Me,a((u=r(f))==null?void 0:u.location),1)]),s("span",Ee,[e(w,{size:"24",icon:"tabler-calendar"}),s("div",Fe,a((E=r(f))==null?void 0:E.joiningDate),1)])]),e(Y,{"prepend-icon":"tabler-user-check"},{default:t(()=>[g(" Connected ")]),_:1})])])]}),_:1})]),_:1})):B("",!0)}}),Oe={class:"vertical-more"},Ue={class:"text-center"},Ne={class:"text-h5"},Ge={class:"text-body-1"},We={class:"d-flex align-center flex-wrap gap-4"},qe={class:"d-flex justify-space-around mb-2"},Je={class:"text-center"},Xe={class:"text-h5"},Ke=s("div",{class:"text-body-1"}," Projects ",-1),Qe={class:"text-center"},Ye={class:"text-h5"},Ze=s("div",{class:"text-body-1"}," Tasks ",-1),et={class:"text-center"},tt={class:"text-h5"},st=s("div",{class:"text-body-1"}," Connections ",-1),at={class:"d-flex justify-center gap-4 mt-6"},ot=V({__name:"index",setup(p){const i=L(),c=C([]);return U(i,async()=>{if(i.params.tab==="connections"){const o=await G("/pages/profile",{query:{tab:i.params.tab}}).catch(m=>console.log(m));c.value=o}},{immediate:!0}),(o,m)=>{const d=M,h=R("IconBtn");return l(),_(A,null,{default:t(()=>[(l(!0),x(y,null,$(r(c),n=>(l(),_(T,{key:n.name,sm:"6",lg:"4",cols:"12"},{default:t(()=>[e(k,null,{default:t(()=>[s("div",Oe,[e(d,{"menu-list":[{title:"Share connection",value:"Share connection"},{title:"Block connection",value:"Block connection"},{type:"divider",class:"my-2"},{title:"Delete",value:"Delete",class:"text-error"}],"item-props":""})]),e(N,null,{default:t(()=>[e(te,{class:"d-flex flex-column align-center justify-center gap-y-6"},{default:t(()=>[e(b,{size:"100",image:n.avatar,class:"mt-5"},null,8,["image"]),s("div",Ue,[s("h5",Ne,a(n.name),1),s("h6",Ge,a(n.designation),1)]),s("div",We,[(l(!0),x(y,null,$(n.chips,v=>(l(),_(W,{key:v.title,label:"",color:v.color,size:"small"},{default:t(()=>[g(a(v.title),1)]),_:2},1032,["color"]))),128))])]),_:2},1024)]),_:2},1024),e(j,null,{default:t(()=>[s("div",qe,[s("div",Je,[s("h5",Xe,a(n.projects),1),Ke]),s("div",Qe,[s("h5",Ye,a(n.tasks),1),Ze]),s("div",et,[s("h5",tt,a(n.connections),1),st])]),s("div",at,[e(Y,{"prepend-icon":n.isConnected?"tabler-user-check":"tabler-user-plus",variant:n.isConnected?"elevated":"tonal"},{default:t(()=>[g(a(n.isConnected?"connected":"connect"),1)]),_:2},1032,["prepend-icon","variant"]),e(h,{variant:"tonal",class:"rounded"},{default:t(()=>[e(w,{icon:"tabler-mail",color:"secondary"})]),_:1})])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}}}),q=p=>(Z("data-v-bd1c9d2d"),p=p(),ee(),p),lt=q(()=>s("p",{class:"text-sm text-disabled"}," ABOUT ",-1)),nt={class:"d-flex align-center"},it={class:"text-body-1 font-weight-medium me-2"},ct=q(()=>s("p",{class:"text-sm text-disabled mt-6"}," CONTACTS ",-1)),rt={class:"d-flex align-center"},dt={class:"text-body-1 font-weight-medium me-2"},ut=q(()=>s("p",{class:"text-sm text-disabled mt-6"}," TEAMS ",-1)),pt={class:"d-flex align-center"},mt={class:"text-body-1 font-weight-medium me-2"},_t=q(()=>s("p",{class:"text-sm text-disabled"}," OVERVIEW ",-1)),ft={class:"d-flex align-center"},ht={class:"text-body-1 font-weight-medium me-2"},gt=V({__name:"About",props:{data:{}},setup(p){const i=p;return(c,f)=>(l(),x(y,null,[e(k,{class:"mb-6"},{default:t(()=>[e(j,null,{default:t(()=>[lt,e(I,{class:"card-list text-medium-emphasis"},{default:t(()=>[(l(!0),x(y,null,$(i.data.about,o=>(l(),_(P,{key:o.property},{default:t(()=>[e(D,null,{default:t(()=>[s("span",nt,[e(w,{icon:o.icon,size:"24",class:"me-2"},null,8,["icon"]),s("div",it,a(o.property)+":",1),s("div",null,a(o.value),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),ct,e(I,{class:"card-list text-medium-emphasis"},{default:t(()=>[(l(!0),x(y,null,$(i.data.contacts,o=>(l(),_(P,{key:o.property},{default:t(()=>[e(D,null,{default:t(()=>[s("span",rt,[e(w,{icon:o.icon,size:"24",class:"me-2"},null,8,["icon"]),s("div",dt,a(o.property)+":",1),s("div",null,a(o.value),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1}),ut,e(I,{class:"card-list text-medium-emphasis"},{default:t(()=>[(l(!0),x(y,null,$(i.data.teams,o=>(l(),_(P,{key:o.property},{default:t(()=>[e(D,null,{default:t(()=>[s("span",pt,[s("div",mt,a(o.property),1),s("div",null,a(o.value),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(j,null,{default:t(()=>[_t,e(I,{class:"card-list text-medium-emphasis"},{default:t(()=>[(l(!0),x(y,null,$(i.data.overview,o=>(l(),_(P,{key:o.property},{default:t(()=>[e(D,null,{default:t(()=>[s("span",ft,[e(w,{icon:o.icon,size:"24",class:"me-2"},null,8,["icon"]),s("div",ht,a(o.property)+":",1),s("div",null,a(o.value),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64))}}),vt=se(gt,[["__scopeId","data-v-bd1c9d2d"]]),xt=s("div",{class:"d-flex justify-space-between align-center gap-2 flex-wrap mb-2"},[s("span",{class:"app-timeline-title"}," 12 Invoices have been paid "),s("span",{class:"app-timeline-meta"},"12 min ago")],-1),bt=s("div",{class:"app-timeline-text mt-1"}," Invoices have been paid to the company ",-1),yt={class:"d-inline-flex align-center timeline-chip mt-2"},$t=["src"],wt=s("span",{class:"app-timeline-text font-weight-medium"}," invoice.pdf ",-1),jt=s("div",{class:"d-flex justify-space-between align-center flex-wrap mb-2"},[s("div",{class:"app-timeline-title"}," Client Meeting "),s("span",{class:"app-timeline-meta"},"45 min ago")],-1),Vt=s("div",{class:"app-timeline-text mt-1"}," Project meeting with john @10:15am ",-1),kt={class:"d-flex justify-space-between align-center flex-wrap"},Tt={class:"d-flex align-center mt-2"},Pt=s("div",{class:"d-flex flex-column"},[s("p",{class:"text-sm font-weight-medium text-medium-emphasis mb-0"}," Lester McCarthy (Client) "),s("span",{class:"text-sm"},"CEO of ThemeSelection")],-1),Dt=s("div",{class:"d-flex justify-space-between align-center flex-wrap mb-2"},[s("span",{class:"app-timeline-title"}," Create a new project for client "),s("span",{class:"app-timeline-meta"},"2 Day Ago")],-1),zt=s("p",{class:"app-timeline-text mt-1 mb-2"}," 6 team members in a project ",-1),Ct={class:"v-avatar-group demo-avatar-group"},It=V({__name:"ActivityTimeline",setup(p){return(i,c)=>(l(),_(k,null,{default:t(()=>[e(N,null,{prepend:t(()=>[e(w,{icon:"tabler-chart-bar",size:"24",class:"me-2"})]),default:t(()=>[e(te,null,{default:t(()=>[g("Activity Timeline")]),_:1})]),_:1}),e(j,null,{default:t(()=>[e($e,{side:"end",align:"start","line-inset":"8","truncate-line":"start",density:"compact"},{default:t(()=>[e(J,{"dot-color":"primary",size:"x-small"},{default:t(()=>[xt,bt,s("div",yt,[s("img",{src:r(ye),height:"20",class:"me-2",alt:"img"},null,8,$t),wt])]),_:1}),e(J,{size:"x-small","dot-color":"success"},{default:t(()=>[jt,Vt,s("div",kt,[s("div",Tt,[e(b,{size:"32",class:"me-2",image:r(z)},null,8,["image"]),Pt])])]),_:1}),e(J,{size:"x-small","dot-color":"info"},{default:t(()=>[Dt,zt,s("div",Ct,[e(b,{size:40},{default:t(()=>[e(S,{src:r(z)},null,8,["src"]),e(O,{activator:"parent",location:"top"},{default:t(()=>[g(" John Doe ")]),_:1})]),_:1}),e(b,{size:40},{default:t(()=>[e(S,{src:r(X)},null,8,["src"]),e(O,{activator:"parent",location:"top"},{default:t(()=>[g(" Jennie Obrien ")]),_:1})]),_:1}),e(b,{size:40},{default:t(()=>[e(S,{src:r(K)},null,8,["src"]),e(O,{activator:"parent",location:"top"},{default:t(()=>[g(" Peter Harper ")]),_:1})]),_:1}),e(b,{size:40,color:i.$vuetify.theme.current.dark?"#373b50":"#eeedf0"},{default:t(()=>[g(" +3 ")]),_:1},8,["color"])])]),_:1})]),_:1})]),_:1})]),_:1}))}}),St=p=>(Z("data-v-c36444f3"),p=p(),ee(),p),At=St(()=>s("p",{class:"mb-0"}," View all connections ",-1)),Bt=V({__name:"Connection",props:{connectionsData:{}},setup(p){const i=p,c=[{title:"Share connections",value:"Share connections"},{title:"Suggest edits",value:"Suggest edits"},{title:"Report Bug",value:"Report Bug"}];return(f,o)=>{const m=M,d=R("RouterLink");return l(),_(k,{title:"Connection"},{append:t(()=>[s("div",null,[e(m,{"menu-list":c})])]),default:t(()=>[e(j,null,{default:t(()=>[e(I,{class:"card-list"},{default:t(()=>[(l(!0),x(y,null,$(i.connectionsData,h=>(l(),_(P,{key:h.name},{prepend:t(()=>[e(b,{size:"38",image:h.avatar},null,8,["image"])]),append:t(()=>[e(Y,{icon:"",size:"38",class:"rounded",variant:h.isFriend?"elevated":"tonal"},{default:t(()=>[e(w,{size:"22",icon:h.isFriend?"tabler-user-x":"tabler-user-check"},null,8,["icon"])]),_:2},1032,["variant"])]),default:t(()=>[e(D,{class:"font-weight-medium"},{default:t(()=>[g(a(h.name),1)]),_:2},1024),e(ne,null,{default:t(()=>[g(a(h.connections)+" Connections",1)]),_:2},1024)]),_:2},1024))),128)),e(P,null,{default:t(()=>[e(D,{class:"pt-2 text-center"},{default:t(()=>[e(d,{to:{name:"pages-user-profile-tab",params:{tab:"connections"}}},{default:t(()=>[At]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Lt=se(Bt,[["__scopeId","data-v-c36444f3"]]),Rt=s("h5",{class:"text-h5"}," Project List ",-1),Mt={style:{"inline-size":"272px"}},Et={class:"d-flex align-center gap-x-3"},Ft={class:"text-h6 text-no-wrap"},Ht={class:"text-body-2"},Ot={class:"text-base text-high-emphasis"},Ut={class:"d-flex"},Nt={class:"v-avatar-group"},Gt={class:"text-caption text-high-emphasis"},Wt={class:"d-flex align-center gap-3"},qt={class:"flex-grow-1"},Jt={class:"text-body-1 text-high-emphasis"},Xt=V({__name:"ProjectList",setup(p){const i=[{title:"PROJECT",key:"project"},{title:"LEADER",key:"leader"},{title:"Team",key:"team"},{title:"PROGRESS",key:"progress"},{title:"Action",key:"Action",sortable:!1}],c=[{logo:ue,name:"BGC eCommerce App",project:"React Project",leader:"Eileen",progress:78,hours:"18:42",team:[z,F,ae],extraMembers:3},{logo:pe,name:"Falcon Logo Design",project:"Figma Project",leader:"Owen",progress:25,hours:"20:42",team:[me,X]},{logo:_e,name:"Dashboard Design",project:"Vuejs Project",leader:"Keith",progress:62,hours:"120:87",team:[F,X,z]},{logo:fe,name:"Foodista mobile app",project:"Xamarin Project",leader:"Merline",progress:8,hours:"120:87",team:[K,oe,he],extraMembers:8},{logo:ge,name:"Dojo Email App",project:"Python Project",leader:"Harmonia",progress:51,hours:"230:10",team:[oe,K,z],extraMembers:5},{logo:ve,name:"Blockchain Website",project:"Sketch Project",leader:"Allyson",progress:92,hours:"342:41",team:[z,F]},{logo:xe,name:"Hoffman Website",project:"HTML Project",leader:"Georgie",progress:80,hours:"12:45",team:[z,F,ae]}],f=C(""),o=C({page:1,itemsPerPage:5});return(m,d)=>{const h=je,n=R("IconBtn"),v=we;return l(),_(k,null,{default:t(()=>[e(j,{class:"d-flex justify-space-between align-center flex-wrap gap-4"},{default:t(()=>[Rt,s("div",Mt,[e(h,{modelValue:r(f),"onUpdate:modelValue":d[0]||(d[0]=u=>Q(f)?f.value=u:null),placeholder:"Search Project"},null,8,["modelValue"])])]),_:1}),e(ie),e(Ve,{page:r(o).page,"onUpdate:page":d[2]||(d[2]=u=>r(o).page=u),headers:i,"items-per-page":r(o).itemsPerPage,items:c,"item-value":"name","hide-default-footer":"",search:r(f),"show-select":"",class:"text-no-wrap"},{"item.project":t(({item:u})=>[s("div",Et,[e(b,{size:34,image:u.logo},null,8,["image"]),s("div",null,[s("h6",Ft,a(u.name),1),s("div",Ht,a(u.project),1)])])]),"item.leader":t(({item:u})=>[s("div",Ot,a(u.leader),1)]),"item.team":t(({item:u})=>[s("div",Ut,[s("div",Nt,[(l(!0),x(y,null,$(u.team,(E,ce)=>(l(),_(b,{key:ce,size:"26"},{default:t(()=>[e(S,{src:E},null,8,["src"])]),_:2},1024))),128)),u.extraMembers?(l(),_(b,{key:0,color:m.$vuetify.theme.current.dark?"#373b50":"#eeedf0",size:26},{default:t(()=>[s("div",Gt," +"+a(u.extraMembers),1)]),_:2},1032,["color"])):B("",!0)])])]),"item.progress":t(({item:u})=>[s("div",Wt,[s("div",qt,[e(le,{height:6,"model-value":u.progress,color:"primary",rounded:""},null,8,["model-value"])]),s("div",Jt,a(u.progress)+"% ",1)])]),"item.Action":t(()=>[e(n,null,{default:t(()=>[e(w,{icon:"tabler-dots-vertical"})]),_:1})]),bottom:t(()=>[e(v,{page:r(o).page,"onUpdate:page":d[1]||(d[1]=u=>r(o).page=u),"items-per-page":r(o).itemsPerPage,"total-items":c.length},null,8,["page","items-per-page","total-items"])]),_:1},8,["page","items-per-page","search"])]),_:1})}}}),Kt=p=>(Z("data-v-d8e59153"),p=p(),ee(),p),Qt=Kt(()=>s("p",{class:"mb-0"}," View all Teams ",-1)),Yt=V({__name:"Teams",props:{teamsData:{}},setup(p){const i=p,c=[{title:"Share connections",value:"Share connections"},{title:"Suggest edits",value:"Suggest edits"},{title:"Report Bug",value:"Report Bug"}];return(f,o)=>{const m=M,d=R("RouterLink");return l(),_(k,{title:"Teams"},{append:t(()=>[s("div",null,[e(m,{"menu-list":c})])]),default:t(()=>[e(j,null,{default:t(()=>[e(I,{class:"card-list"},{default:t(()=>[(l(!0),x(y,null,$(i.teamsData,h=>(l(),_(P,{key:h.title},{prepend:t(()=>[e(b,{size:"38",image:h.avatar},null,8,["image"])]),append:t(()=>[e(W,{label:"",color:h.ChipColor,size:"small",class:"font-weight-medium"},{default:t(()=>[g(a(h.chipText),1)]),_:2},1032,["color"])]),default:t(()=>[e(D,{class:"font-weight-medium"},{default:t(()=>[g(a(h.title),1)]),_:2},1024),e(ne,null,{default:t(()=>[g(a(h.members)+" Members",1)]),_:2},1024)]),_:2},1024))),128)),e(P,null,{default:t(()=>[e(D,{class:"pt-2 text-center"},{default:t(()=>[e(d,{to:{name:"pages-user-profile-tab",params:{tab:"teams"}}},{default:t(()=>[Qt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Zt=se(Yt,[["__scopeId","data-v-d8e59153"]]),es=V({__name:"index",setup(p){const i=L(),c=C();return U(i,async()=>{if(i.params.tab==="profile"){const o=await G("/pages/profile",{query:{tab:i.params.tab}}).catch(m=>console.log(m));c.value=o}},{immediate:!0}),(o,m)=>r(c)?(l(),_(A,{key:0},{default:t(()=>[e(T,{md:"4",cols:"12"},{default:t(()=>[e(vt,{data:r(c)},null,8,["data"])]),_:1}),e(T,{cols:"12",md:"8"},{default:t(()=>[e(A,null,{default:t(()=>[e(T,{cols:"12"},{default:t(()=>[e(It)]),_:1}),e(T,{cols:"12",md:"6"},{default:t(()=>[e(Lt,{"connections-data":r(c).connections},null,8,["connections-data"])]),_:1}),e(T,{cols:"12",md:"6"},{default:t(()=>[e(Zt,{"teams-data":r(c).teamsTech},null,8,["teams-data"])]),_:1}),e(T,{cols:"12"},{default:t(()=>[e(Xt)]),_:1})]),_:1})]),_:1})]),_:1})):B("",!0)}}),ts={class:"mb-0 text-body-1 d-flex align-center"},ss=s("div",{class:"font-weight-medium me-1"}," Client: ",-1),as={class:"mt-n2"},os={class:"d-flex align-center justify-space-between flex-wrap gap-x-2 gap-y-4"},ls={class:"px-3 py-2 bg-var-theme-background rounded"},ns={class:"text-base font-weight-medium"},is={class:"text-body-1"},cs=s("div",null,"Total Budget",-1),rs={class:"text-base font-weight-medium"},ds={class:"text-body-1"},us={class:"text-base font-weight-medium"},ps={class:"text-body-1"},ms={class:"mt-4 mb-0 clamp-text"},_s={class:"d-flex align-center justify-space-between flex-wrap gap-2"},fs={class:"text-base font-weight-medium"},hs={class:"text-body-1"},gs={class:"d-flex align-center justify-space-between flex-wrap text-caption text-medium-emphasis mt-4 mb-2"},vs={class:"d-flex align-center justify-space-between flex-wrap gap-2 mt-4"},xs={class:"d-flex align-center"},bs={class:"v-avatar-group me-3"},ys={class:"text-body-2 text-disabled"},$s={class:"d-flex align-center"},ws={class:"text-disabled text-body-1"},js=V({__name:"index",setup(p){const i=L(),c=C([]);U(i,async()=>{if(i.params.tab==="projects"){const m=await G("/pages/profile",{query:{tab:i.params.tab}}).catch(d=>console.log(d));c.value=m}},{immediate:!0});const o=[{title:"Rename Project",value:"Rename Project"},{title:"View Details",value:"View Details"},{title:"Add to favorites",value:"Add to favorites"},{type:"divider",class:"my-2"},{title:"Leave Project",value:"Leave Project",class:"text-error"}];return(m,d)=>{const h=M;return r(c)?(l(),_(A,{key:0},{default:t(()=>[(l(!0),x(y,null,$(r(c),n=>(l(),_(T,{key:n.title,cols:"12",sm:"6",lg:"4"},{default:t(()=>[e(k,null,{default:t(()=>[e(N,{class:"pb-4"},{prepend:t(()=>[e(b,{image:n.avatar,size:"38",class:"me-2"},null,8,["image"])]),append:t(()=>[s("div",as,[e(h,{"item-props":"","menu-list":o})])]),default:t(()=>[e(te,null,{default:t(()=>[g(a(n.title),1)]),_:2},1024),s("span",ts,[ss,s("div",null,a(n.client),1)])]),_:2},1024),e(j,null,{default:t(()=>[s("div",os,[s("div",ls,[s("h6",ns,[g(a(n.budgetSpent)+" ",1),s("span",is,"/ "+a(n.budget),1)]),cs]),s("div",null,[s("h6",rs,[g(" Start Date: "),s("span",ds,a(n.startDate),1)]),s("h6",us,[g(" Deadline: "),s("span",ps,a(n.deadline),1)])])]),s("p",ms,a(n.description),1)]),_:2},1024),e(ie),e(j,null,{default:t(()=>[s("div",_s,[s("h6",fs,[g(" All Hours: "),s("span",hs,a(n.hours),1)]),e(W,{label:"",color:n.chipColor,size:"small"},{default:t(()=>[g(a(n.daysLeft)+" Days left ",1)]),_:2},1032,["color"])]),s("div",gs,[s("span",null,"Task: "+a(n.tasks),1),s("span",null,a(Math.round(n.completedTask/n.totalTask*100))+"% Completed",1)]),e(le,{rounded:"","rounded-bar":"",height:"8","model-value":n.completedTask,max:n.totalTask,color:"primary"},null,8,["model-value","max"]),s("div",vs,[s("div",xs,[s("div",bs,[(l(!0),x(y,null,$(n.avatarGroup,v=>(l(),_(b,{key:v.name,image:v.avatar,size:32},null,8,["image"]))),128))]),s("span",ys,a(n.members),1)]),s("span",$s,[e(w,{icon:"tabler-message-dots",class:"me-1 text-disabled",size:"24"}),s("div",ws,a(n.comments),1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):B("",!0)}}}),Vs={class:"text-base"},ks={class:"v-avatar-group"},Ts={class:"d-flex align-center gap-2"},Ps=V({__name:"index",setup(p){const i=L(),c=C([]);U(i,async()=>{if(i.params.tab==="teams"){const m=await G("/pages/profile",{query:{tab:i.params.tab}}).catch(d=>console.log(d));c.value=m}},{immediate:!0});const o=[{title:"Rename Project",value:"Rename Project"},{title:"View Details",value:"View Details"},{title:"Add to favorites",value:"Add to favorites"},{type:"divider",class:"my-2"},{title:"Leave Project",value:"Leave Project",class:"text-error"}];return(m,d)=>{const h=R("IconBtn"),n=M;return r(c)?(l(),_(A,{key:0},{default:t(()=>[(l(!0),x(y,null,$(r(c),v=>(l(),_(T,{key:v.title,cols:"12",md:"6",lg:"4"},{default:t(()=>[e(k,null,{default:t(()=>[e(N,{class:"pb-4",title:v.title},{prepend:t(()=>[e(b,{size:"38",image:v==null?void 0:v.avatar},null,8,["image"])]),append:t(()=>[s("div",null,[e(h,null,{default:t(()=>[e(w,{size:"24",icon:"tabler-star",class:"text-disabled"})]),_:1}),e(n,{"menu-list":o,"item-props":"",density:"comfortable"})])]),_:2},1032,["title"]),e(j,{class:"pb-4"},{default:t(()=>[s("span",Vs,a(v.description),1)]),_:2},1024),e(j,{class:"d-flex align-center"},{default:t(()=>[s("div",ks,[(l(!0),x(y,null,$(v.avatarGroup,u=>(l(),_(b,{key:u.name,size:"32"},{default:t(()=>[e(S,{src:u.avatar},null,8,["src"]),e(O,{activator:"parent",location:"top"},{default:t(()=>[g(a(u.name),1)]),_:2},1024)]),_:2},1024))),128))]),e(ke),s("div",Ts,[(l(!0),x(y,null,$(v.chips,u=>(l(),_(W,{key:u.title,label:"",color:u.color,size:"small",class:"font-weight-medium"},{default:t(()=>[g(a(u.title),1)]),_:2},1032,["color"]))),128))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):B("",!0)}}}),wa=V({__name:"[tab]",setup(p){const i=L(),c=be({get:()=>i.params.tab,set:()=>i.params.tab}),f=[{title:"Profile",icon:"tabler-user-check",tab:"profile"},{title:"Team",icon:"tabler-users",tab:"teams"},{title:"Projects",icon:"tabler-layout-grid",tab:"projects"},{title:"Connections",icon:"tabler-link",tab:"connections"}];return(o,m)=>(l(),x("div",null,[e(He),e(Te,{modelValue:r(c),"onUpdate:modelValue":m[0]||(m[0]=d=>Q(c)?c.value=d:null),class:"v-tabs-pill my-2"},{default:t(()=>[(l(),x(y,null,$(f,d=>e(Pe,{key:d.icon,value:d.tab,to:{name:"pages-user-profile-tab",params:{tab:d.tab}}},{default:t(()=>[e(w,{size:"20",start:"",icon:d.icon},null,8,["icon"]),g(" "+a(d.title),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"]),e(De,{modelValue:r(c),"onUpdate:modelValue":m[1]||(m[1]=d=>Q(c)?c.value=d:null),class:"disable-tab-transition",touch:!1},{default:t(()=>[e(H,{value:"profile"},{default:t(()=>[e(es)]),_:1}),e(H,{value:"teams"},{default:t(()=>[e(Ps)]),_:1}),e(H,{value:"projects"},{default:t(()=>[e(js)]),_:1}),e(H,{value:"connections"},{default:t(()=>[e(ot)]),_:1})]),_:1},8,["modelValue"])]))}});export{wa as default};
