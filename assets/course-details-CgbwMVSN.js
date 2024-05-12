import{R as Q}from"./videojs-player.esm-CvhIuidU.js";import{u as $}from"./useApi-CiYK4OrD.js";import{d as j,r as B,aq as G,a as l,o as v,g as I,f as t,b as e,e as s,v as r,x as n,n as a,ad as K,c as P,i as D,F as R,Q as O,R as W}from"./index-B-uKkDM3.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./__vite-browser-external-DFygW7-s.js";const Z="/assets/instructor-poster-CRfw5Jra.png",b=V=>(O("data-v-44225c01"),V=V(),W(),V),ee={class:"text-body-1"},te={class:"text-h6 d-inline-block"},se={class:"d-flex gap-4 align-center"},oe={class:"px-2 pt-2"},le=b(()=>s("h5",{class:"text-h5 mb-4"}," About this course ",-1)),ne={class:"text-body-1"},ae=b(()=>s("h5",{class:"text-h5 mb-4"}," By the numbers ",-1)),ie={class:"d-flex gap-x-12 gap-y-5 flex-wrap"},ce=b(()=>s("h5",{class:"text-h5 mb-4"}," Description ",-1)),re=["innerHTML"],de=b(()=>s("h5",{class:"text-h5 mb-4"}," Instructor ",-1)),ue={class:"d-flex align-center gap-x-4"},_e={class:"text-h6 mb-1"},pe={class:"text-body-2"},me={class:"course-content"},he={class:"text-h5 mb-1"},fe={class:"text-medium-emphasis font-weight-normal"},ve={class:"text-body-2"},Ve=j({__name:"course-details",async setup(V){let x,L;const i=B(),{data:w,error:k}=([x,L]=G(()=>$("/apps/academy/course-details")),x=await x,L(),x);k.value?console.log(k.value):w.value&&(i.value=w.value);const g=B(0);return(U,z)=>{const E=l("VChip"),d=l("VIcon"),F=l("VCardItem"),y=l("VDivider"),u=l("VListItemTitle"),_=l("VListItem"),C=l("VList"),M=l("VAvatar"),S=l("VCardText"),A=l("VCard"),T=l("VCol"),N=l("VCheckbox"),H=l("VListItemSubtitle"),X=l("VExpansionPanel"),q=l("VExpansionPanels"),J=l("VRow");return v(),I(J,null,{default:t(()=>[e(T,{cols:"12",md:"8"},{default:t(()=>[e(A,null,{default:t(()=>[e(F,{title:"UI/UX Basic Fundamentals",class:"pb-6"},{subtitle:t(()=>{var c;return[s("div",ee,[r(" Prof. "),s("span",te,n((c=a(i))==null?void 0:c.instructor),1)])]}),append:t(()=>[s("div",se,[e(E,{variant:"tonal",color:"error",size:"small"},{default:t(()=>[r(" UI/UX ")]),_:1}),e(d,{size:"24",class:"cursor-pointer",icon:"tabler-share"}),e(d,{size:"24",class:"cursor-pointer",icon:"tabler-bookmarks"})])]),_:1}),e(S,null,{default:t(()=>[e(A,{flat:"",border:""},{default:t(()=>[s("div",oe,[e(a(Q),{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",poster:a(Z),controls:"","plays-inline":"",height:U.$vuetify.display.mdAndUp?440:250,class:"w-100 rounded"},null,8,["poster","height"])]),e(S,null,{default:t(()=>{var c,p,h,m,f;return[le,s("p",ne,n((c=a(i))==null?void 0:c.about),1),e(y,{class:"my-6"}),ae,s("div",ie,[s("div",null,[e(C,{class:"card-list text-medium-emphasis"},{default:t(()=>[e(_,null,{prepend:t(()=>[e(d,{icon:"tabler-check",size:"20"})]),default:t(()=>[e(u,null,{default:t(()=>{var o;return[r("Skill Level: "+n((o=a(i))==null?void 0:o.skillLevel),1)]}),_:1})]),_:1}),e(_,null,{prepend:t(()=>[e(d,{icon:"tabler-users",size:"20"})]),default:t(()=>[e(u,null,{default:t(()=>{var o;return[r("Students: "+n((o=a(i))==null?void 0:o.totalStudents),1)]}),_:1})]),_:1}),e(_,null,{prepend:t(()=>[e(d,{icon:"tabler-world",size:"20"})]),default:t(()=>[e(u,null,{default:t(()=>{var o;return[r("Languages: "+n((o=a(i))==null?void 0:o.language),1)]}),_:1})]),_:1}),e(_,null,{prepend:t(()=>[e(d,{icon:"tabler-file",size:"20"})]),default:t(()=>[e(u,null,{default:t(()=>{var o;return[r("Captions: "+n((o=a(i))==null?void 0:o.isCaptions),1)]}),_:1})]),_:1})]),_:1})]),s("div",null,[e(C,{class:"card-list text-medium-emphasis"},{default:t(()=>[e(_,null,{prepend:t(()=>[e(d,{icon:"tabler-video",size:"20"})]),default:t(()=>[e(u,null,{default:t(()=>{var o;return[r("Lectures: "+n((o=a(i))==null?void 0:o.totalLectures),1)]}),_:1})]),_:1}),e(_,null,{prepend:t(()=>[e(d,{icon:"tabler-clock",size:"20"})]),default:t(()=>[e(u,null,{default:t(()=>{var o;return[r("Video: "+n((o=a(i))==null?void 0:o.length),1)]}),_:1})]),_:1})]),_:1})])]),e(y,{class:"my-6"}),ce,s("div",{innerHTML:(p=a(i))==null?void 0:p.description},null,8,re),e(y,{class:"my-6"}),de,s("div",ue,[e(M,{image:(h=a(i))==null?void 0:h.instructorAvatar,size:"38"},null,8,["image"]),s("div",null,[s("h6",_e,n((m=a(i))==null?void 0:m.instructor),1),s("div",pe,n((f=a(i))==null?void 0:f.instructorPosition),1)])])]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(T,{cols:"12",md:"4"},{default:t(()=>[s("div",me,[e(q,{modelValue:a(g),"onUpdate:modelValue":z[0]||(z[0]=c=>K(g)?g.value=c:null),variant:"accordion",class:"expansion-panels-width-border"},{default:t(()=>{var c;return[(v(!0),P(R,null,D((c=a(i))==null?void 0:c.content,(p,h)=>(v(),I(X,{key:h,elevation:"0",value:h,"expand-icon":"tabler-chevron-right","collapse-icon":"tabler-chevron-down"},{title:t(()=>[s("div",null,[s("h5",he,n(p.title),1),s("div",fe,n(p.status)+" | "+n(p.time),1)])]),text:t(()=>[e(C,{class:"card-list"},{default:t(()=>[(v(!0),P(R,null,D(p.topics,(m,f)=>(v(),I(_,{key:f,class:"py-4"},{prepend:t(()=>[e(N,{"model-value":m.isCompleted,class:"me-1"},null,8,["model-value"])]),default:t(()=>[e(u,{class:"text-high-emphasis font-weight-medium"},{default:t(()=>[r(n(f+1)+" . "+n(m.title),1)]),_:2},1024),e(H,null,{default:t(()=>[s("div",ve,n(m.time),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["value"]))),128))]}),_:1},8,["modelValue"])])]),_:1})]),_:1})}}}),Le=Y(Ve,[["__scopeId","data-v-44225c01"]]);export{Le as default};