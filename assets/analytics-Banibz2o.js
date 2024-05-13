import{q as U}from"./vue3-apexcharts-BOUIEs6g.js";import{V as $}from"./VCardText-BQH_thrU.js";import{V,b as O,c as q,a as D}from"./VCard-JHeg0EIG.js";import{d as C,aN as H,o as i,g as b,f as e,b as t,e as s,a6 as E,bd as w,v as d,n as f,c as S,i as T,F as I,a0 as k,x as o,b1 as J,y as tt,r as M,b9 as ct,aX as N,z as Z,bE as dt,dr as ut,ds as pt,dt as mt,du as _t,dv as ht,Q as et,R as st,M as ft}from"./index-CqJJabLp.js";import{_ as R}from"./MoreBtn.vue_vue_type_script_setup_true_lang-DkKev2dW.js";import{V as L,a as r}from"./VRow-BYyta6-B.js";import{V as Q}from"./VChip-CgY9iG6U.js";import{V as v}from"./VAvatar-CAX_EKAS.js";import{V as W,a as P,b as j,d as Y}from"./VList-BU18li_t.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as bt}from"./TablePagination.vue_vue_type_script_setup_true_lang-bF_fUZf-.js";import{_ as gt}from"./AppTextField.vue_vue_type_script_setup_true_lang-CFvqqHaX.js";import{u as vt}from"./useApi-BpELS4j6.js";import{c as yt}from"./createUrl-DlrKbKnN.js";import{V as G}from"./VDivider-Bx7Mi4yb.js";import{V as xt}from"./VDataTableServer-DG3K6g1R.js";import{V as wt}from"./VImg-qkwR4LI4.js";import{V as $t,a as kt,s as Vt,b as Ct,c as St}from"./VCarouselItem-DytR97_F.js";import"./createSimpleFunctional-D-yV3HwI.js";import"./VMenu-QlecgKM9.js";import"./VOverlay-CY_NlaRL.js";import"./easing-CjukEv2V.js";import"./lazy-BVcxu43s.js";import"./scopeId-CmU66R2E.js";import"./index-5tc5Qjfb.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DtGlG_Zu.js";/* empty css              */import"./index-DTVCXiOC.js";import"./VSlideGroup-CnIX30Fw.js";import"./ssrBoot-B1VVb6o-.js";import"./VPagination-DgTswqco.js";import"./form-CI72K1ES.js";import"./VTextField-D9-yWHXq.js";/* empty css                   */import"./VCounter-B7Jo2Zht.js";import"./VField-BgyLzctP.js";import"./VInput-Dlf7QkHP.js";import"./index-B3bPRkoL.js";import"./VDataTable-DB-cwfsK.js";import"./VSelect-B3GvpHzt.js";import"./VCheckboxBtn-DmqJqQVo.js";import"./VSelectionControl-CqEoAW5X.js";import"./VTable-DUCWTIQZ.js";import"./filter-Sm2G_EOC.js";import"./VWindowItem-CZgN_QE9.js";const Tt=s("h5",{class:"text-h5 mb-3"}," Average Daily Sales ",-1),It=s("p",{class:"mb-0"}," Total Sales This Month ",-1),At=s("h4",{class:"text-h4"}," $28,450 ",-1),zt=C({__name:"AnalyticsAverageDailySales",setup(_){const u=H().current.value.colors,g=[{data:[400,200,650,500]}],p={chart:{type:"area",toolbar:{show:!1},sparkline:{enabled:!0}},markers:{colors:"transparent",strokeColors:"transparent"},grid:{show:!1},colors:[u.success],fill:{type:"gradient",gradient:{shadeIntensity:.8,opacityFrom:.6,opacityTo:.1}},dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{show:!0,lines:{show:!1},labels:{show:!1},stroke:{width:0},axisBorder:{show:!1}},yaxis:{stroke:{width:0},show:!1},responsive:[{breakpoint:1387,options:{chart:{height:80}}},{breakpoint:1200,options:{chart:{height:120}}}]};return(n,a)=>{const h=U;return i(),b(V,null,{default:e(()=>[t($,null,{default:e(()=>[Tt,It,At]),_:1}),t(h,{options:p,series:g,height:80})]),_:1})}}}),Lt={class:"mt-n4 me-n2"},Rt={class:"d-flex align-center gap-2 mb-3 flex-wrap"},Ot=s("h2",{class:"text-h2"}," $468 ",-1),Dt=s("span",{class:"text-sm text-medium-emphasis"}," You informed of this week compared to last week ",-1),Bt={class:"border rounded mt-5 pa-5"},Mt={class:"d-flex align-center"},Et={class:"text-base font-weight-regular"},Wt={class:"text-h4 my-2"},Pt=C({__name:"AnalyticsEarningReportsWeeklyOverview",setup(_){const l=H(),u=[{data:[40,65,50,45,90,55,70]}],g=E(()=>{const a=l.current.value.colors,h=l.current.value.variables;return{chart:{parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"60%",columnWidth:"38%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-30,bottom:0,left:-10,right:-10}},colors:[`rgba(${w(a.primary)},${h["dragged-opacity"]})`,`rgba(${w(a.primary)},${h["dragged-opacity"]})`,`rgba(${w(a.primary)},${h["dragged-opacity"]})`,`rgba(${w(a.primary)},${h["dragged-opacity"]})`,`rgba(${w(a.primary)}, 1)`,`rgba(${w(a.primary)},${h["dragged-opacity"]})`,`rgba(${w(a.primary)},${h["dragged-opacity"]})`],dataLabels:{enabled:!1},legend:{show:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:`rgba(${w(a["on-surface"])},${h["disabled-opacity"]})`,fontSize:"13px",fontFamily:"Public Sans"}}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1},responsive:[{breakpoint:1025,options:{chart:{height:199}}}]}}),p=[{color:"primary",icon:"tabler-currency-dollar",title:"Earnings",amount:"$545.69",progress:"55"},{color:"info",icon:"tabler-chart-pie-2",title:"Profit",amount:"$256.34",progress:"25"},{color:"error",icon:"tabler-brand-paypal",title:"Expense",amount:"$74.19",progress:"65"}],n=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(a,h)=>{const A=R,z=U;return i(),b(V,null,{default:e(()=>[t(D,{class:"pb-sm-0"},{append:e(()=>[s("div",Lt,[t(A,{size:"small","menu-list":n})])]),default:e(()=>[t(O,null,{default:e(()=>[d("Earning Reports")]),_:1}),t(q,null,{default:e(()=>[d("Weekly Earnings Overview")]),_:1})]),_:1}),t($,null,{default:e(()=>[t(L,null,{default:e(()=>[t(r,{cols:"12",sm:"5",lg:"6",class:"d-flex flex-column align-self-center"},{default:e(()=>[s("div",Rt,[Ot,t(Q,{label:"",size:"small",color:"success"},{default:e(()=>[d(" +4.2% ")]),_:1})]),Dt]),_:1}),t(r,{cols:"12",sm:"7",lg:"6"},{default:e(()=>[t(z,{options:f(g),series:u,height:"161"},null,8,["options"])]),_:1})]),_:1}),s("div",Bt,[t(L,null,{default:e(()=>[(i(),S(I,null,T(p,c=>t(r,{key:c.title,cols:"12",sm:"4"},{default:e(()=>[s("div",Mt,[t(v,{rounded:"",size:"26",color:c.color,variant:"tonal",class:"me-2"},{default:e(()=>[t(k,{size:"18",icon:c.icon},null,8,["icon"])]),_:2},1032,["color"]),s("h6",Et,o(c.title),1)]),s("h6",Wt,o(c.amount),1),t(J,{"model-value":c.progress,color:c.color,height:"4",rounded:"","rounded-bar":""},null,8,["model-value","color"])]),_:2},1024)),64))]),_:1})])]),_:1})]),_:1})}}}),jt={class:"mt-n4 me-n2"},Ft={class:"d-flex gap-x-4"},Nt={class:"text-body-1"},Ut=C({__name:"AnalyticsMonthlyCampaignState",setup(_){const l=[{avatarColor:"success",avatarIcon:"tabler-mail",title:"Emails",count:"12,346",stats:"0.3%",statsColor:"success"},{avatarColor:"info",avatarIcon:"tabler-link",title:"Opened",count:"8,734",stats:"2.1%",statsColor:"success"},{avatarColor:"warning",avatarIcon:"tabler-mouse",title:"Clicked",count:"967",stats:"1.4%",statsColor:"error"},{avatarColor:"primary",avatarIcon:"tabler-users",title:"Subscribe",count:"345",stats:"8.5%",statsColor:"success"},{avatarColor:"secondary",avatarIcon:"tabler-alert-triangle",title:"Complaints",count:"10",stats:"1.5%",statsColor:"error"},{avatarColor:"error",avatarIcon:"tabler-ban",title:"Unsubscribe",count:"86",stats:"0.8%",statsColor:"success"}],u=[{title:"Refresh",value:"refresh"},{title:"Download",value:"Download"},{title:"View All",value:"View All"}];return(g,p)=>{const n=R;return i(),b(V,null,{default:e(()=>[t(D,null,{append:e(()=>[s("div",jt,[t(n,{size:"small","menu-list":u})])]),default:e(()=>[t(O,null,{default:e(()=>[d("Monthly Campaign State")]),_:1}),t(q,null,{default:e(()=>[d(" 8.52k Social Visitors ")]),_:1})]),_:1}),t($,null,{default:e(()=>[t(W,{class:"card-list"},{default:e(()=>[(i(),S(I,null,T(l,a=>t(P,{key:a.title},{prepend:e(()=>[t(v,{color:a.avatarColor,variant:"tonal",size:"34",rounded:"",class:"me-1"},{default:e(()=>[t(k,{icon:a.avatarIcon,size:"22"},null,8,["icon"])]),_:2},1032,["color"])]),append:e(()=>[s("div",Ft,[s("div",Nt,o(a.count),1),s("div",{class:tt(`text-${a.statsColor}`)},o(a.stats),3)])]),default:e(()=>[t(j,{class:"font-weight-medium me-4"},{default:e(()=>[d(o(a.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}}),qt=B(Ut,[["__scopeId","data-v-7298bcab"]]),Ht={style:{"inline-size":"250px"}},Yt={class:"d-flex align-center gap-x-3",style:{"padding-block":"7px"}},Gt={class:"text-h6 text-no-wrap"},Jt={class:"text-body-2"},Qt={class:"text-base text-high-emphasis"},Xt={class:"d-flex"},Kt={class:"v-avatar-group"},Zt={class:"text-caption text-high-emphasis"},te={class:"d-flex align-center gap-3"},ee={class:"flex-grow-1"},se={class:"text-body-1 text-high-emphasis"},ae=C({__name:"AnalyticsProjectTable",async setup(_){let l,u;const g=[{title:"PROJECT",key:"project"},{title:"LEADER",key:"leader"},{title:"Team",key:"team",sortable:!1},{title:"PROGRESS",key:"progress"},{title:"Action",key:"Action",sortable:!1}],p=M(""),n=M(5),a=M(1),h=M(),A=M(),{data:z}=([l,u]=ct(()=>vt(yt("/dashboard/analytics/projects",{query:{q:p,itemsPerPage:n,page:a,sortBy:h,orderBy:A}}))),l=await l,u(),l),c=x=>{var y,F;h.value=(y=x.sortBy[0])==null?void 0:y.key,A.value=(F=x.sortBy[0])==null?void 0:F.order},X=E(()=>{var x;return(x=z.value)==null?void 0:x.projects}),K=E(()=>{var x;return(x=z.value)==null?void 0:x.totalProjects}),ot=[{title:"Download",value:"Download"},{title:"Delete",value:"Delete"},{title:"View",value:"View"}];return(x,y)=>{const F=gt,lt=R,rt=bt;return f(X)?(i(),b(V,{key:0},{default:e(()=>[t(D,{class:"project-header d-flex flex-wrap justify-space-between gap-4"},{append:e(()=>[s("div",Ht,[t(F,{modelValue:f(p),"onUpdate:modelValue":y[0]||(y[0]=m=>N(p)?p.value=m:null),placeholder:"Search Project"},null,8,["modelValue"])])]),default:e(()=>[t(O,null,{default:e(()=>[d("Project List")]),_:1})]),_:1}),t(G),t(xt,{"items-per-page":f(n),"onUpdate:itemsPerPage":y[2]||(y[2]=m=>N(n)?n.value=m:null),page:f(a),"onUpdate:page":y[3]||(y[3]=m=>N(a)?a.value=m:null),items:f(X),"items-length":f(K),"item-value":"name",headers:g,class:"text-no-wrap","show-select":"","onUpdate:options":c},{"item.project":e(({item:m})=>[s("div",Yt,[t(v,{size:34,image:m.logo},null,8,["image"]),s("div",null,[s("h6",Gt,o(m.name),1),s("div",Jt,o(m.project),1)])])]),"item.leader":e(({item:m})=>[s("div",Qt,o(m.leader),1)]),"item.team":e(({item:m})=>[s("div",Xt,[s("div",Kt,[(i(!0),S(I,null,T(m.team,(it,nt)=>(i(),b(v,{key:nt,size:"26"},{default:e(()=>[t(wt,{src:it},null,8,["src"])]),_:2},1024))),128)),m.extraMembers?(i(),b(v,{key:0,color:x.$vuetify.theme.current.dark?"#373b50":"#eeedf0",size:26},{default:e(()=>[s("div",Zt," +"+o(m.extraMembers),1)]),_:2},1032,["color"])):Z("",!0)])])]),"item.progress":e(({item:m})=>[s("div",te,[s("div",ee,[t(J,{height:6,"model-value":m.progress,color:"primary",rounded:""},null,8,["model-value"])]),s("div",se,o(m.progress)+"% ",1)])]),"item.Action":e(()=>[t(lt,{"menu-list":ot})]),bottom:e(()=>[t(rt,{page:f(a),"onUpdate:page":y[1]||(y[1]=m=>N(a)?a.value=m:null),"items-per-page":f(n),"total-items":f(K)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})):Z("",!0)}}}),oe={class:"mt-n4 me-n2"},le={class:"font-weight-medium"},re=C({__name:"AnalyticsSalesByCountries",setup(_){const l=[{avatarImg:dt,stats:"$8,567k",subtitle:"United states",profitLoss:25.8},{avatarImg:ut,stats:"$2,415k",subtitle:"Brazil",profitLoss:-6.2},{avatarImg:pt,stats:"$865k",subtitle:"India",profitLoss:12.4},{avatarImg:mt,stats:"$745k",subtitle:"Australia",profitLoss:-11.9},{avatarImg:_t,stats:"$45",subtitle:"France",profitLoss:16.2},{avatarImg:ht,stats:"$12k",subtitle:"China",profitLoss:14.8}],u=[{title:"Refresh",value:"refresh"},{title:"Download",value:"Download"},{title:"View All",value:"View All"}];return(g,p)=>{const n=R;return i(),b(V,{title:"Sales by Countries",subtitle:"Monthly Sales Overview"},{append:e(()=>[s("div",oe,[t(n,{size:"small","menu-list":u})])]),default:e(()=>[t($,null,{default:e(()=>[t(W,{class:"card-list"},{default:e(()=>[(i(),S(I,null,T(l,a=>t(P,{key:a.stats},{prepend:e(()=>[t(v,{size:"34",color:"secondary",variant:"tonal",class:"me-1",image:a.avatarImg},null,8,["image"])]),append:e(()=>[s("div",{class:tt(`d-flex align-center ${a.profitLoss>0?"text-success":"text-error"}`)},[t(k,{icon:a.profitLoss>0?"tabler-chevron-up":"tabler-chevron-down",size:"20",class:"me-1"},null,8,["icon"]),s("div",le,o(Math.abs(a.profitLoss))+"% ",1)],2)]),default:e(()=>[t(j,{class:"font-weight-medium"},{default:e(()=>[d(o(a.stats),1)]),_:2},1024),t(Y,null,{default:e(()=>[d(o(a.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}}),ie=B(re,[["__scopeId","data-v-ad184637"]]),ne={},ce=s("div",{class:"d-flex align-center justify-space-between"},[s("div",{class:"text-body-1"}," Sales Overview "),s("div",{class:"text-success font-weight-medium"}," +18.2% ")],-1),de=s("h4",{class:"text-h4"}," $42.5k ",-1),ue={class:"py-2"},pe={class:"d-flex align-center mb-3"},me=s("span",null,"Order",-1),_e=s("h5",{class:"text-h5"}," 62.2% ",-1),he=s("div",{class:"text-body-2 text-disabled"}," 6,440 ",-1),fe={class:"d-flex flex-column align-center justify-center h-100"},be=s("div",{class:"text-overline text-disabled"}," VS ",-1),ge={class:"py-2"},ve={class:"d-flex align-center justify-end mb-3"},ye=s("span",{class:"me-2"},"Visits",-1),xe=s("h5",{class:"text-h5"}," 25.5% ",-1),we=s("div",{class:"text-body-2 text-disabled"}," 12,749 ",-1),$e={class:"mt-6"};function ke(_,l){return i(),b(V,null,{default:e(()=>[t($,null,{default:e(()=>[ce,de]),_:1}),t($,null,{default:e(()=>[t(L,{"no-gutters":""},{default:e(()=>[t(r,{cols:"5"},{default:e(()=>[s("div",ue,[s("div",pe,[t(v,{color:"info",variant:"tonal",size:24,rounded:"",class:"me-2"},{default:e(()=>[t(k,{size:"18",icon:"tabler-shopping-cart"})]),_:1}),me]),_e,he])]),_:1}),t(r,{cols:"2"},{default:e(()=>[s("div",fe,[t(G,{vertical:"",class:"mx-auto"}),t(v,{size:"24",color:"rgba(var(--v-theme-on-surface), var(--v-hover-opacity))",class:"my-2"},{default:e(()=>[be]),_:1}),t(G,{vertical:"",class:"mx-auto"})])]),_:1}),t(r,{cols:"5",class:"text-end"},{default:e(()=>[s("div",ge,[s("div",ve,[ye,t(v,{color:"primary",variant:"tonal",size:24,rounded:""},{default:e(()=>[t(k,{size:"18",icon:"tabler-link"})]),_:1})]),xe,we])]),_:1})]),_:1}),s("div",$e,[t(J,{"model-value":"72",color:"#00CFE8",height:"10","bg-color":"primary","rounded-bar":!1,rounded:""})])]),_:1})]),_:1})}const Ve=B(ne,[["render",ke]]),Ce={class:"mt-n4 me-n2"},Se={class:"d-flex align-center gap-x-4"},Te={class:"text-body-1"},Ie=C({__name:"AnalyticsSourceVisits",setup(_){const l=[{avatarIcon:"tabler-shadow",title:"Direct Source",subtitle:"Direct link click",stats:"1.2k",profitLoss:4.2},{avatarIcon:"tabler-globe",title:"Social Network",subtitle:"Social Channels",stats:"31.5k",profitLoss:8.2},{avatarIcon:"tabler-mail",title:"Email Newsletter",subtitle:"Mail Campaigns",stats:"893",profitLoss:2.4},{avatarIcon:"tabler-external-link",title:"Referrals",subtitle:"Impact Radius Visits",stats:"342",profitLoss:-.4},{avatarIcon:"tabler-ad",title:"ADVT",subtitle:"Google ADVT",stats:"2.15k",profitLoss:9.1},{avatarIcon:"tabler-star",title:"Other",subtitle:"Many Sources",stats:"12.5k",profitLoss:6.2}],u=[{title:"Refresh",value:"refresh"},{title:"Download",value:"Download"},{title:"View All",value:"View All"}];return(g,p)=>{const n=R;return i(),b(V,null,{default:e(()=>[t(D,null,{append:e(()=>[s("div",Ce,[t(n,{size:"small","menu-list":u})])]),default:e(()=>[t(O,null,{default:e(()=>[d("Source Visits")]),_:1}),t(q,null,{default:e(()=>[d(" 38.4k Visitors ")]),_:1})]),_:1}),t($,null,{default:e(()=>[t(W,{class:"card-list"},{default:e(()=>[(i(),S(I,null,T(l,a=>t(P,{key:a.title},{prepend:e(()=>[t(v,{size:"38",color:"secondary",variant:"tonal",class:"me-1",rounded:""},{default:e(()=>[t(k,{icon:a.avatarIcon,size:"22"},null,8,["icon"])]),_:2},1024)]),append:e(()=>[s("div",Se,[s("div",Te,o(a.stats),1),t(Q,{label:"",size:"small",color:a.profitLoss>0?"success":"error"},{default:e(()=>[d(o(a.profitLoss>0?"+":"")+" "+o(a.profitLoss)+"% ",1)]),_:2},1032,["color"])])]),default:e(()=>[t(j,{class:"font-weight-medium me-4"},{default:e(()=>[d(o(a.title),1)]),_:2},1024),t(Y,{class:"me-4"},{default:e(()=>[d(o(a.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}}),Ae=B(Ie,[["__scopeId","data-v-7ba343f8"]]),ze=_=>(et("data-v-12762671"),_=_(),st(),_),Le={class:"mt-n4 me-n2"},Re=ze(()=>s("div",{class:"mb-lg-6 mb-4 mt-2"},[s("h2",{class:"text-h2"}," 164 "),s("p",{class:"text-base mb-0"}," Total Tickets ")],-1)),Oe=C({__name:"AnalyticsSupportTracker",setup(_){const l=H(),u=[85],g=E(()=>{const a=l.current.value.colors,h=l.current.value.variables;return{labels:["Completed Task"],chart:{type:"radialBar"},plotOptions:{radialBar:{offsetY:10,startAngle:-140,endAngle:130,hollow:{size:"65%"},track:{background:a.surface,strokeWidth:"100%"},dataLabels:{name:{offsetY:-20,color:`rgba(${w(a["on-surface"])},${h["disabled-opacity"]})`,fontSize:"13px",fontWeight:"400",fontFamily:"Public Sans"},value:{offsetY:10,color:`rgba(${w(a["on-background"])},${h["high-emphasis-opacity"]})`,fontSize:"38px",fontWeight:"500",fontFamily:"Public Sans"}}}},colors:[a.primary],fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.5,gradientToColors:[a.primary],inverseColors:!0,opacityFrom:1,opacityTo:.6,stops:[30,70,100]}},stroke:{dashArray:10},grid:{padding:{top:-20,bottom:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:960,options:{chart:{height:280}}}]}}),p=[{avatarColor:"primary",avatarIcon:"tabler-ticket",title:"New Tickets",subtitle:"142"},{avatarColor:"info",avatarIcon:"tabler-check",title:"Open Tickets",subtitle:"28"},{avatarColor:"warning",avatarIcon:"tabler-clock",title:"Response Time",subtitle:"1 Day"}],n=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(a,h)=>{const A=R,z=U;return i(),b(V,null,{default:e(()=>[t(D,null,{append:e(()=>[s("div",Le,[t(A,{size:"small","menu-list":n})])]),default:e(()=>[t(O,null,{default:e(()=>[d("Support Tracker")]),_:1}),t(q,null,{default:e(()=>[d("Last 7 Days")]),_:1})]),_:1}),t($,null,{default:e(()=>[t(L,null,{default:e(()=>[t(r,{cols:"12",lg:"4",md:"4"},{default:e(()=>[Re,t(W,{class:"card-list"},{default:e(()=>[(i(),S(I,null,T(p,c=>t(P,{key:c.title},{prepend:e(()=>[t(v,{rounded:"",size:"34",color:c.avatarColor,variant:"tonal",class:"me-1"},{default:e(()=>[t(k,{size:"22",icon:c.avatarIcon},null,8,["icon"])]),_:2},1032,["color"])]),default:e(()=>[t(j,{class:"font-weight-medium"},{default:e(()=>[d(o(c.title),1)]),_:2},1024),t(Y,null,{default:e(()=>[d(o(c.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),t(r,{cols:"12",lg:"8",md:"8"},{default:e(()=>[t(z,{options:f(g),series:u,height:"360"},null,8,["options"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),De=B(Oe,[["__scopeId","data-v-12762671"]]),at=_=>(et("data-v-e8380949"),_=_(),st(),_),Be={class:"d-flex align-center mt-2"},Me=at(()=>s("h2",{class:"text-h2 me-2"}," 87% ",-1)),Ee={class:"text-success"},We=at(()=>s("span",{class:"text-base"},"25.8%",-1)),Pe={class:"mt-n10 me-n2"},je={class:"text-success font-weight-medium"},Fe=C({__name:"AnalyticsTotalEarning",setup(_){const l=H(),u=[{name:"Earning",data:[15,10,20,8,12,18,12,5]},{name:"Expense",data:[-7,-10,-7,-12,-6,-9,-5,-8]}],g=E(()=>{const a=l.current.value.colors;return{chart:{parentHeightOffset:0,stacked:!0,type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},legend:{show:!1},stroke:{curve:"smooth",width:6,lineCap:"round",colors:[a.surface]},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",borderRadius:8,borderRadiusApplication:"around",borderRadiusWhenStacked:"all"}},colors:["rgba(var(--v-theme-primary),1)","rgba(var(--v-theme-secondary),1)"],dataLabels:{enabled:!1},grid:{show:!1,padding:{top:-40,bottom:-20,left:-10,right:-2}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:1600,options:{plotOptions:{bar:{columnWidth:"50%",borderRadius:8}}}},{breakpoint:1468,options:{plotOptions:{bar:{columnWidth:"60%",borderRadius:8}}}},{breakpoint:1279,options:{plotOptions:{bar:{columnWidth:"35%",borderRadius:8}}}},{breakpoint:1197,options:{chart:{height:228},plotOptions:{bar:{borderRadius:8,columnWidth:"40%"}}}},{breakpoint:912,options:{chart:{height:232},plotOptions:{bar:{borderRadius:8,columnWidth:"55%"}}}},{breakpoint:725,options:{plotOptions:{bar:{columnWidth:"70%",borderRadius:8}}}},{breakpoint:600,options:{plotOptions:{bar:{borderRadius:8,columnWidth:"40%"}}}},{breakpoint:475,options:{plotOptions:{bar:{borderRadius:8,columnWidth:"50%"}}}},{breakpoint:381,options:{plotOptions:{bar:{columnWidth:"60%",borderRadius:8}}}}],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}}}),p=[{avatar:"tabler-brand-paypal",avatarColor:"primary",title:"Total Revenue",subtitle:"Client Payment",earning:"+$126"},{avatar:"tabler-currency-dollar",avatarColor:"secondary",title:"Total Sales",subtitle:"Total Sales",earning:"+$98"}],n=[{title:"View More",value:"View More"},{title:"Delete",value:"Delete"}];return(a,h)=>{const A=R,z=U;return i(),b(V,null,{default:e(()=>[t(D,{class:"pb-0"},{append:e(()=>[s("div",Pe,[t(A,{size:"small","menu-list":n})])]),default:e(()=>[t(O,null,{default:e(()=>[d("Total Earning")]),_:1}),s("div",Be,[Me,s("div",Ee,[t(k,{size:"20",icon:"tabler-chevron-up"}),We])])]),_:1}),t($,null,{default:e(()=>[t(z,{options:f(g),series:u,height:"191",class:"my-2"},null,8,["options"]),t(W,{class:"card-list"},{default:e(()=>[(i(),S(I,null,T(p,c=>t(P,{key:c.title},{prepend:e(()=>[t(v,{size:"38",color:c.avatarColor,variant:"tonal",rounded:"",class:"me-1"},{default:e(()=>[t(k,{icon:c.avatar,size:"22"},null,8,["icon"])]),_:2},1032,["color"])]),append:e(()=>[s("span",je,o(c.earning),1)]),default:e(()=>[t(j,{class:"font-weight-medium"},{default:e(()=>[d(o(c.title),1)]),_:2},1024),t(Y,null,{default:e(()=>[d(o(c.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}}),Ne=B(Fe,[["__scopeId","data-v-e8380949"]]),Ue=s("h5",{class:"text-h5 text-white"}," Website Analytics ",-1),qe=s("p",{class:"text-sm mb-0"}," Total 28.5% Conversion Rate ",-1),He={class:"text-h6 text-white mb-1 mt-5"},Ye={class:"text-base"},Ge={class:"d-inline-block"},Je=["src"],Qe=C({__name:"AnalyticsWebsiteAnalytics",setup(_){const l=[{name:"Traffic",slideImg:Vt,data:[{number:"1.5k",text:"Sessions"},{number:"3.1k",text:"Page Views"},{number:"1.2k",text:"Leads"},{number:"12%",text:"Conversions"}]},{name:"Spending",slideImg:Ct,data:[{number:"12h",text:"Spend"},{number:"182",text:"Order Size"},{number:"127",text:"Order"},{number:"23k",text:"Items"}]},{name:"Revenue Sources",slideImg:St,data:[{number:"268",text:"Direct"},{number:"890",text:"Organic"},{number:"622",text:"Referral"},{number:"1.2k",text:"Campaign"}]}];return(u,g)=>(i(),b(V,{color:"primary",height:"260"},{default:e(()=>[t($t,{cycle:"",continuous:!1,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":()=>("h"in u?u.h:f(ft))(f(k),{icon:"fa-circle",size:"8"}),height:"260",class:"carousel-delimiter-top-end web-analytics-carousel"},{default:e(()=>[(i(),S(I,null,T(l,p=>t(kt,{key:p.name},{default:e(()=>[t($,{class:"position-relative"},{default:e(()=>[t(L,null,{default:e(()=>[t(r,{cols:"12"},{default:e(()=>[Ue,qe]),_:1}),t(r,{cols:"12",sm:"6",order:"2","order-sm":"1"},{default:e(()=>[t(L,null,{default:e(()=>[t(r,{cols:"12",class:"pb-0 pt-1"},{default:e(()=>[s("h6",He,o(p.name),1)]),_:2},1024),(i(!0),S(I,null,T(p.data,n=>(i(),b(r,{key:n.number,cols:"6",class:"text-no-wrap pb-2"},{default:e(()=>[t(Q,{label:"",variant:"flat",size:"default",color:"rgb(var(--v-theme-primary-darken-1))",class:"font-weight-medium text-white rounded me-2 px-2",style:{"block-size":"30px"}},{default:e(()=>[s("span",Ye,o(n.number),1)]),_:2},1024),s("span",Ge,o(n.text),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),t(r,{cols:"12",sm:"6",order:"1","order-sm":"2",class:"text-center"},{default:e(()=>[s("img",{src:p.slideImg,class:"card-website-analytics-img",style:{filter:"drop-shadow(0 4px 60px rgba(0, 0, 0, 50%))"}},null,8,Je)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1},8,["delimiter-icon"])]),_:1}))}}),Ns=C({__name:"analytics",setup(_){return(l,u)=>(i(),b(L,{class:"match-height"},{default:e(()=>[t(r,{cols:"12",md:"6"},{default:e(()=>[t(Qe)]),_:1}),t(r,{cols:"12",md:"3",sm:"6"},{default:e(()=>[t(zt)]),_:1}),t(r,{cols:"12",md:"3",sm:"6"},{default:e(()=>[t(Ve)]),_:1}),t(r,{cols:"12",md:"6"},{default:e(()=>[t(Pt)]),_:1}),t(r,{cols:"12",md:"6"},{default:e(()=>[t(De)]),_:1}),t(r,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(ie)]),_:1}),t(r,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(Ne)]),_:1}),t(r,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(qt)]),_:1}),t(r,{cols:"12",sm:"6",lg:"4"},{default:e(()=>[t(Ae)]),_:1}),t(r,{cols:"12",lg:"8"},{default:e(()=>[t(ae)]),_:1})]),_:1}))}});export{Ns as default};
