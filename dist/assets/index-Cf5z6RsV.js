import{f as Me}from"./formatters-DocrwTSm.js";import{d as ie,r as $,a as oe,o as u,g as R,f as t,b as e,e as l,n as a,aX as j,c as k,z as X,v as _,i as B,F as L,aj as le,a0 as d,x as y,w as be,a6 as O,s as fe,j as xe,K as H,L as J,b2 as q,y as ae,b9 as De,J as Le}from"./index-D5RGqRWX.js";import{P as me}from"./vue3-perfect-scrollbar.esm-C1mufV0Z.js";import{_ as ge}from"./TiptapEditor.vue_vue_type_style_index_0_lang-BhWDHS-E.js";import{V as ve}from"./index-HyA-AI0P.js";import{V as K}from"./VSpacer-zRdYcvFO.js";import{a as Te,V as Q}from"./VCard-fyGiGoR0.js";import{V as G}from"./VTextField-DU42iz1L.js";import{V as U}from"./VDivider-B-GSMBPC.js";import{V as Y}from"./VMenu-DklSwZ0e.js";import{V as Z,a as ee,b as se}from"./VList-Bj1pnPzM.js";import{V as ye}from"./VChip-DQDH9nD2.js";import{$ as _e}from"./api-DrljkMd9.js";import{V as I}from"./VTooltip-WtKWNQ-w.js";import{V as $e}from"./VAvatar-UGmDTgW3.js";import{V as de}from"./VImg-CTRzm68e.js";import{V as te}from"./VCardText-CxtBxXM8.js";import{V as ke}from"./VNavigationDrawer-BdoFl-sq.js";import{V as Ve}from"./VBadge-SVeemnvk.js";import{u as Re,V as Ae,a as Ie}from"./VMain-C1tlifaR.js";import{u as Ue}from"./useApi-B3JBUzi4.js";import{c as Be}from"./createUrl-xcKMc8F_.js";import{V as he}from"./VCheckbox-D4sJqZzf.js";import"./helpers-BGv4x_9E.js";import"./index-D_5ryhxl.js";import"./index-CRl37e_Z.js";/* empty css              */import"./createSimpleFunctional-4pAU72TT.js";/* empty css                   */import"./VCounter-C7RInydd.js";import"./index-BZhaH00k.js";import"./VField-DeGbkOa7.js";import"./form-eyOzVGLC.js";import"./easing-CjukEv2V.js";import"./VInput-BF9u6u1K.js";import"./forwardRefs-C-GTDzx5.js";import"./VOverlay-DK_GJGXD.js";import"./lazy-MPMx-enN.js";import"./scopeId-BznQc9nT.js";import"./dialog-transition-DhJwfYBk.js";import"./ssrBoot-1R9RYTM1.js";import"./VSlideGroup-lxP2-7D8.js";import"./index-B3bPRkoL.js";import"./VCheckboxBtn-CJLDweMb.js";import"./VSelectionControl-BT6z8mOJ.js";const Ne={class:"d-flex align-center"},Fe=l("h5",{class:"text-h5"}," Compose Mail ",-1),Pe={class:"d-flex align-center gap-x-2"},je={class:"px-1 pe-6 py-1"},Oe=l("div",{class:"text-base font-weight-medium text-disabled"}," To: ",-1),qe={class:"cursor-pointer"},He=l("span",null," | ",-1),Je={key:0},Ke={class:"px-1 pe-6 py-1"},We=l("div",{class:"text-disabled font-weight-medium"}," Cc: ",-1),Xe={key:0},Ge={class:"px-1 pe-6 py-1"},Qe=l("div",{class:"text-disabled font-weight-medium"}," Bcc: ",-1),Ye={class:"px-1 pe-6 py-1"},Ze=l("div",{class:"text-base font-weight-medium text-disabled"}," Subject: ",-1),et={class:"d-flex align-center px-6 py-4"},tt=ie({__name:"ComposeDialog",emits:["close"],setup(E){const M=$(""),r=$(""),V=$(""),C=$(""),A=["Schedule Mail","Save Draft","Sent"],D=$(""),N=$(""),n=$(!1),w=$(!1),b=()=>{r.value=V.value=C.value=""};return(x,c)=>{const S=oe("IconBtn"),h=ge;return u(),R(Q,{class:"email-compose-dialog",elevation:"10","max-width":"30vw"},{default:t(()=>[e(Te,{class:"py-3 px-6"},{default:t(()=>[l("div",Ne,[Fe,e(K),l("div",Pe,[e(S,{size:"small",icon:"tabler-minus",onClick:c[0]||(c[0]=o=>x.$emit("close"))}),e(S,{size:"small",icon:"tabler-x",onClick:c[1]||(c[1]=o=>{x.$emit("close"),b()})})])])]),_:1}),l("div",je,[e(G,{modelValue:a(r),"onUpdate:modelValue":c[4]||(c[4]=o=>j(r)?r.value=o:null),density:"compact"},{"prepend-inner":t(()=>[Oe]),append:t(()=>[l("span",qe,[l("span",{onClick:c[2]||(c[2]=o=>n.value=!a(n))},"Cc"),He,l("span",{onClick:c[3]||(c[3]=o=>w.value=!a(w))},"Bcc")])]),_:1},8,["modelValue"])]),e(ve,null,{default:t(()=>[a(n)?(u(),k("div",Je,[e(U),l("div",Ke,[e(G,{modelValue:a(D),"onUpdate:modelValue":c[5]||(c[5]=o=>j(D)?D.value=o:null),density:"compact"},{"prepend-inner":t(()=>[We]),_:1},8,["modelValue"])])])):X("",!0)]),_:1}),e(ve,null,{default:t(()=>[a(w)?(u(),k("div",Xe,[e(U),l("div",Ge,[e(G,{modelValue:a(N),"onUpdate:modelValue":c[6]||(c[6]=o=>j(N)?N.value=o:null),density:"compact"},{"prepend-inner":t(()=>[Qe]),_:1},8,["modelValue"])])])):X("",!0)]),_:1}),e(U),l("div",Ye,[e(G,{modelValue:a(V),"onUpdate:modelValue":c[7]||(c[7]=o=>j(V)?V.value=o:null),density:"compact"},{"prepend-inner":t(()=>[Ze]),_:1},8,["modelValue"])]),e(U),e(h,{modelValue:a(M),"onUpdate:modelValue":c[8]||(c[8]=o=>j(M)?M.value=o:null),placeholder:"Message"},null,8,["modelValue"]),e(U),l("div",et,[e(le,{color:"primary",class:"me-4","append-icon":"tabler-send"},{default:t(()=>[_(" send "),e(Y,{activator:"parent"},{default:t(()=>[e(Z,null,{default:t(()=>[(u(),k(L,null,B(A,(o,f)=>e(ee,{key:f,value:f},{default:t(()=>[_(y(o),1)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}),e(S,{size:"small"},{default:t(()=>[e(d,{icon:"tabler-paperclip"})]),_:1}),e(K),e(S,{size:"small",class:"me-2"},{default:t(()=>[e(d,{icon:"tabler-dots-vertical"})]),_:1}),e(S,{size:"small",onClick:c[9]||(c[9]=o=>{x.$emit("close"),b()})},{default:t(()=>[e(d,{icon:"tabler-trash"})]),_:1})])]),_:1})}}}),at={class:"d-flex flex-column h-100"},lt={class:"px-6 pb-5 pt-6"},st={class:"email-filters py-4"},it=["href","onClick"],ot={class:"text-base"},nt={class:"email-labels py-4"},rt=l("div",{class:"text-caption text-disabled mb-4 px-6"}," LABELS ",-1),dt=["href","onClick"],ct={class:"text-body-1 text-high-emphasis"},mt=ie({inheritAttrs:!1,__name:"EmailLeftSidebarContent",props:{emailsMeta:{}},emits:["toggleComposeDialogVisibility"],setup(E){const M=E,r=$(0),V=$(0),C=$(0),A=$(0);be(()=>M.emailsMeta,n=>{n&&(r.value=n.inbox,V.value=n.draft,C.value=n.spam,A.value=n.star)},{immediate:!0,deep:!0});const D=O(()=>[{title:"Inbox",prependIcon:"tabler-mail",to:{name:"apps-email"},badge:{content:r.value,color:"primary"}},{title:"Sent",prependIcon:"tabler-send",to:{name:"apps-email-filter",params:{filter:"sent"}}},{title:"Draft",prependIcon:"tabler-edit",to:{name:"apps-email-filter",params:{filter:"draft"}},badge:{content:V.value,color:"warning"}},{title:"Starred",prependIcon:"tabler-star",to:{name:"apps-email-filter",params:{filter:"starred"}},badge:{content:A.value,color:"success"}},{title:"Spam",prependIcon:"tabler-alert-circle",to:{name:"apps-email-filter",params:{filter:"spam"}},badge:{content:C.value,color:"error"}},{title:"Trash",prependIcon:"tabler-trash",to:{name:"apps-email-filter",params:{filter:"trashed"}}}]),N=[{title:"Personal",color:"success",to:{name:"apps-email-label",params:{label:"personal"}}},{title:"Company",color:"primary",to:{name:"apps-email-label",params:{label:"company"}}},{title:"Important",color:"warning",to:{name:"apps-email-label",params:{label:"important"}}},{title:"Private",color:"error",to:{name:"apps-email-label",params:{label:"private"}}}];return(n,w)=>{const b=oe("RouterLink");return u(),k("div",at,[l("div",lt,[e(le,{block:"",onClick:w[0]||(w[0]=x=>n.$emit("toggleComposeDialogVisibility"))},{default:t(()=>[_(" Compose ")]),_:1})]),e(a(me),{options:{wheelPropagation:!1},class:"h-100"},{default:t(()=>[l("ul",st,[(u(!0),k(L,null,B(a(D),x=>(u(),R(b,{key:x.title,class:"d-flex align-center cursor-pointer align-center",to:x.to,custom:""},{default:t(({isActive:c,href:S,navigate:h})=>{var o;return[l("li",fe(n.$attrs,{href:S,class:[c&&"email-filter-active text-primary","d-flex align-center cursor-pointer"],onClick:h}),[e(d,{icon:x.prependIcon,class:"me-2",size:"20"},null,8,["icon"]),l("div",ot,y(x.title),1),e(K),(o=x.badge)!=null&&o.content?(u(),R(ye,{key:0,color:x.badge.color,label:"",size:"small",class:"rounded-xl px-3"},{default:t(()=>{var f;return[_(y((f=x.badge)==null?void 0:f.content),1)]}),_:2},1032,["color"])):X("",!0)],16,it)]}),_:2},1032,["to"]))),128))]),l("ul",nt,[rt,(u(),k(L,null,B(N,x=>e(b,{key:x.title,class:"d-flex align-center",to:x.to,custom:""},{default:t(({isActive:c,href:S,navigate:h})=>[l("li",fe(n.$attrs,{href:S,class:[c&&"email-label-active text-primary","cursor-pointer d-flex align-center"],onClick:h}),[e(d,{icon:"tabler-circle-filled",color:x.color,class:"me-2",size:"12"},null,8,["color"]),l("div",ct,y(x.title),1)],16,dt)]),_:2},1032,["to"])),64))])]),_:1})])}}}),ce=()=>{const E=xe(),M=async(n,w)=>{await _e("apps/email",{method:"POST",body:JSON.stringify({ids:n,data:w})})};return{labels:[{title:"personal",color:"success"},{title:"company",color:"primary"},{title:"important",color:"warning"},{title:"private",color:"error"}],resolveLabelColor:n=>n==="personal"?"success":n==="company"?"primary":n==="important"?"warning":n==="private"?"error":"secondary",shallShowMoveToActionFor:n=>n==="trash"?E.params.filter!=="trashed":n==="inbox"?!(E.params.filter===void 0||E.params.filter==="sent"||E.params.filter==="draft"):n==="spam"?!(E.params.filter==="spam"||E.params.filter==="sent"||E.params.filter==="draft"):!1,emailMoveToFolderActions:[{action:"inbox",icon:"tabler-mail"},{action:"spam",icon:"tabler-alert-octagon"},{action:"trash",icon:"tabler-trash"}],moveSelectedEmailTo:async(n,w)=>{const b={};n==="inbox"?(E.params.filter==="trashed"&&(b.isDeleted=!1),b.folder="inbox"):n==="spam"?(E.params.filter==="trashed"&&(b.isDeleted=!1),b.folder="spam"):n==="trash"&&(b.isDeleted=!0),await M(w,b)},updateEmails:M,updateEmailLabels:async(n,w)=>{await _e("/apps/email",{method:"POST",body:{ids:n,label:w}})}}},pt={class:"email-view-header d-flex align-center px-5 py-3"},ut={class:"d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-2"},ft={class:"text-body-1 text-high-emphasis text-truncate"},vt={class:"d-flex flex-wrap gap-2"},_t={class:"d-flex align-center"},ht={class:"email-view-action-bar d-flex align-center text-medium-emphasis px-6 gap-x-1"},bt={class:"d-flex align-center gap-x-1"},xt={class:"d-flex align-start align-sm-center pa-6 gap-x-4"},gt={class:"d-flex flex-wrap flex-grow-1 overflow-hidden"},yt={class:"text-truncate"},$t={class:"text-body-1 text-high-emphasis text-truncate"},kt={class:"text-sm"},Vt={class:"d-flex align-center gap-x-4"},Ct={class:"text-disabled text-base"},wt=["innerHTML"],zt=l("span",null,"2 Attachments",-1),St={class:"text-base"},Et=l("span",{class:"text-primary cursor-pointer"}," Forward ",-1),Mt={class:"text-h6 mb-6"},Dt={class:"d-flex justify-end gap-4 pt-2 flex-wrap"},Lt=ie({__name:"EmailView",props:{email:{},emailMeta:{}},emits:["refresh","navigated","close","trash","unread","read","star","unstar"],setup(E,{emit:M}){const r=E,V=M,C=$(""),A=$(!1),D=$(!0),{updateEmailLabels:N}=ce(),{labels:n,resolveLabelColor:w,emailMoveToFolderActions:b,shallShowMoveToActionFor:x,moveSelectedEmailTo:c}=ce(),S=o=>{c(o,[r.email.id]),V("refresh"),V("close")},h=async o=>{await N([r.email.id],o),V("refresh")};return(o,f)=>{const v=oe("IconBtn"),ne=ge;return u(),R(ke,{temporary:"","model-value":!!r.email,location:"right",scrim:!1,floating:"",class:"email-view"},{default:t(()=>[r.email?(u(),k(L,{key:0},[l("div",pt,[e(v,{class:"me-2",onClick:f[0]||(f[0]=m=>o.$emit("close"))},{default:t(()=>[e(d,{size:"22",icon:"tabler-chevron-left",class:"flip-in-rtl"})]),_:1}),l("div",ut,[l("div",ft,y(r.email.subject),1),l("div",vt,[(u(!0),k(L,null,B(r.email.labels,m=>(u(),R(ye,{key:m,color:a(w)(m),class:"text-capitalize flex-shrink-0",size:"small",label:!1},{default:t(()=>[_(y(m),1)]),_:2},1032,["color"]))),128))])]),l("div",null,[l("div",_t,[e(v,{disabled:!r.emailMeta.hasPreviousEmail,onClick:f[1]||(f[1]=m=>o.$emit("navigated","previous"))},{default:t(()=>[e(d,{icon:"tabler-chevron-left",class:"flip-in-rtl"})]),_:1},8,["disabled"]),e(v,{disabled:!r.emailMeta.hasNextEmail,onClick:f[2]||(f[2]=m=>o.$emit("navigated","next"))},{default:t(()=>[e(d,{icon:"tabler-chevron-right",class:"flip-in-rtl"})]),_:1},8,["disabled"])])])]),e(U),l("div",ht,[H(e(v,{onClick:f[3]||(f[3]=m=>{o.$emit("trash"),o.$emit("close")})},{default:t(()=>[e(d,{icon:"tabler-trash",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Delete Mail ")]),_:1})]),_:1},512),[[J,!r.email.isDeleted]]),e(v,{onClick:f[4]||(f[4]=q(m=>{o.$emit("unread"),o.$emit("close")},["stop"]))},{default:t(()=>[e(d,{icon:"tabler-mail",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Mark as Unread ")]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(d,{icon:"tabler-folder",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Move to ")]),_:1}),e(Y,{activator:"parent"},{default:t(()=>[e(Z,{density:"compact"},{default:t(()=>[(u(!0),k(L,null,B(a(b),m=>(u(),R(ee,{key:m.title,class:ae([a(x)(m.action)?"d-flex":"d-none","align-center"]),href:"#",onClick:F=>S(m.action)},{prepend:t(()=>[e(d,{icon:m.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(se,{class:"text-capitalize"},{default:t(()=>[_(y(m.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>[e(d,{icon:"tabler-tag",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Label ")]),_:1}),e(Y,{activator:"parent"},{default:t(()=>[e(Z,{density:"compact"},{default:t(()=>[(u(!0),k(L,null,B(a(n),m=>(u(),R(ee,{key:m.title,href:"#",onClick:q(F=>h(m.title),["stop"])},{prepend:t(()=>[e(Ve,{inline:"",color:a(w)(m.title),dot:""},null,8,["color"])]),default:t(()=>[e(se,{class:"ms-2 text-capitalize"},{default:t(()=>[_(y(m.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(K),l("div",bt,[e(v,null,{default:t(()=>[e(d,{icon:"tabler-dots-vertical",size:"22"})]),_:1})])]),e(U),e(a(me),{tag:"div",class:"mail-content-container flex-grow-1 pa-sm-12 pa-6",options:{wheelPropagation:!1}},{default:t(()=>[e(Q,{class:"mb-4"},{default:t(()=>[l("div",xt,[e($e,{size:"38"},{default:t(()=>[e(de,{src:r.email.from.avatar,alt:r.email.from.name},null,8,["src","alt"])]),_:1}),l("div",gt,[l("div",yt,[l("div",$t,y(r.email.from.name),1),l("div",kt,y(r.email.from.email),1)]),e(K),l("div",Vt,[l("div",Ct,y(new Date(r.email.time).toDateString()),1),l("div",null,[H(e(v,null,{default:t(()=>[e(d,{icon:"tabler-paperclip",size:"22"})]),_:1},512),[[J,r.email.attachments.length]]),e(v,{color:r.email.isStarred?"warning":"default",onClick:f[5]||(f[5]=m=>{var F;(F=r.email)!=null&&F.isStarred?o.$emit("unstar"):o.$emit("star"),o.$emit("refresh")})},{default:t(()=>[e(d,{icon:r.email.isStarred?"tabler-star-filled":"tabler-star",size:"22"},null,8,["icon"])]),_:1},8,["color"]),e(v,null,{default:t(()=>[e(d,{icon:"tabler-dots-vertical",size:"22"})]),_:1})])])])]),e(U),e(te,null,{default:t(()=>[l("div",{class:"text-base",innerHTML:r.email.message},null,8,wt)]),_:1}),r.email.attachments.length?(u(),k(L,{key:0},[e(U),e(te,{class:"d-flex flex-column gap-y-4 pt-4"},{default:t(()=>[zt,(u(!0),k(L,null,B(r.email.attachments,m=>(u(),k("div",{key:m.fileName,class:"d-flex align-center"},[e(de,{src:m.thumbnail,alt:m.fileName,"aspect-ratio":"1","max-height":"24","max-width":"24",class:"me-2"},null,8,["src","alt"]),l("span",null,y(m.fileName),1)]))),128))]),_:1})],64)):X("",!0)]),_:1}),H(e(Q,null,{default:t(()=>[e(te,{class:"font-weight-medium text-high-emphasis"},{default:t(()=>[l("div",St,[_(" Click here to "),l("span",{class:"text-primary cursor-pointer",onClick:f[6]||(f[6]=m=>{A.value=!a(A),D.value=!a(D)})}," Reply "),_(" or "),Et])]),_:1})]),_:1},512),[[J,a(D)]]),a(A)?(u(),R(Q,{key:0},{default:t(()=>[e(te,null,{default:t(()=>{var m;return[l("h6",Mt," Reply to "+y((m=o.email)==null?void 0:m.from.name),1),e(ne,{modelValue:a(C),"onUpdate:modelValue":f[7]||(f[7]=F=>j(C)?C.value=F:null),placeholder:"Write your message..."},null,8,["modelValue"]),l("div",Dt,[e(le,{variant:"text",color:"secondary"},{prepend:t(()=>[e(d,{icon:"tabler-paperclip",class:"text-high-emphasis",size:"16"})]),default:t(()=>[_(" Attachments ")]),_:1}),e(le,{"append-icon":"tabler-send"},{default:t(()=>[_(" Send ")]),_:1})])]}),_:1})]),_:1})):X("",!0)]),_:1})],64)):X("",!0)]),_:1},8,["model-value"])}}}),Tt={class:"d-flex align-center"},Rt={class:"py-2 px-4 d-flex align-center d-flex gap-x-1"},At=["onClick"],It={class:"text-h6"},Ut={class:"text-body-2 truncate"},Bt={class:"text-sm text-disabled"},Nt={class:"email-actions d-none"},Ft={class:"py-4 px-5 text-center"},Pt=l("span",{class:"text-high-emphasis"},"No items found.",-1),jt=[Pt],Ra=ie({__name:"index",async setup(E){let M,r;const{isLeftSidebarOpen:V}=Re(),C=xe(),{labels:A,resolveLabelColor:D,emailMoveToFolderActions:N,shallShowMoveToActionFor:n,moveSelectedEmailTo:w,updateEmails:b,updateEmailLabels:x}=ce(),c=$(!1),S=$(""),h=$([]),{data:o,execute:f}=([M,r]=De(()=>Ue(Be("/apps/email",{query:{q:S,filter:()=>"filter"in C.params?C.params.filter:void 0,label:()=>"label"in C.params?C.params.label:void 0}}))),M=await M,r(),M),v=O(()=>o.value.emails),ne=O(()=>o.value.emailsMeta),m=p=>{const i=h.value.indexOf(p);i===-1?h.value.push(p):h.value.splice(i,1)},F=O(()=>v.value.length&&v.value.length===h.value.length),pe=O(()=>!!h.value.length&&v.value.length!==h.value.length),re=O(()=>h.value.every(p=>{var i;return(i=v.value.find(z=>z.id===p))==null?void 0:i.isRead})),Ce=()=>{h.value=F.value?[]:v.value.map(p=>p.id)},g=$(null),we=O(()=>{const p={hasNextEmail:!1,hasPreviousEmail:!1};if(g.value){const i=v.value.findIndex(z=>{var s;return z.id===((s=g.value)==null?void 0:s.id)});p.hasNextEmail=!!v.value[i+1],p.hasPreviousEmail=!!v.value[i-1]}return p}),ue=async()=>{await f(),g.value&&(g.value=v.value.find(p=>{var i;return p.id===((i=g.value)==null?void 0:i.id)}))},T=async(p,i=h.value)=>{h.value=[],h.value=[],i.length&&(p==="trash"?await b(i,{isDeleted:!0}):p==="spam"?await b(i,{folder:"spam"}):p==="unread"?await b(i,{isRead:!1}):p==="read"?await b(i,{isRead:!0}):p==="star"?await b(i,{isStarred:!0}):p==="unstar"&&await b(i,{isStarred:!1}),await f(),g.value&&ue())},ze=async p=>{await w(p,h.value),await f()},Se=p=>{if(!g.value)return;const i=v.value.findIndex(s=>{var W;return s.id===((W=g.value)==null?void 0:W.id)}),z=p==="previous"?i-1:i+1;g.value=v.value[z]},Ee=async p=>{g.value=p,await T("read",[p.id])};return be(()=>C.params,()=>{h.value=[]},{deep:!0}),(p,i)=>{const z=oe("IconBtn");return u(),R(Ie,{style:{"min-block-size":"100%"},class:"email-app-layout"},{default:t(()=>[e(ke,{modelValue:a(V),"onUpdate:modelValue":i[1]||(i[1]=s=>j(V)?V.value=s:null),absolute:"",touchless:"",location:"start",temporary:p.$vuetify.display.mdAndDown},{default:t(()=>[e(mt,{"emails-meta":a(ne),onToggleComposeDialogVisibility:i[0]||(i[0]=s=>c.value=!a(c))},null,8,["emails-meta"])]),_:1},8,["modelValue","temporary"]),e(Lt,{email:a(g),"email-meta":a(we),onRefresh:ue,onNavigated:Se,onClose:i[2]||(i[2]=s=>g.value=null),onRemove:i[3]||(i[3]=s=>T("trash",a(g)?[a(g).id]:[])),onUnread:i[4]||(i[4]=s=>T("unread",a(g)?[a(g).id]:[])),onStar:i[5]||(i[5]=s=>T("star",a(g)?[a(g).id]:[])),onUnstar:i[6]||(i[6]=s=>T("unstar",a(g)?[a(g).id]:[]))},null,8,["email","email-meta"]),e(Ae,null,{default:t(()=>[e(Q,{flat:"",class:"email-content-list h-100 d-flex flex-column"},{default:t(()=>[l("div",Tt,[e(z,{class:"d-lg-none ms-3",onClick:i[7]||(i[7]=s=>V.value=!0)},{default:t(()=>[e(d,{icon:"tabler-menu-2"})]),_:1}),e(G,{modelValue:a(S),"onUpdate:modelValue":i[8]||(i[8]=s=>j(S)?S.value=s:null),density:"default",class:"email-search px-sm-2 flex-grow-1 py-1",placeholder:"Search mail"},{"prepend-inner":t(()=>[e(d,{icon:"tabler-search",size:"24",class:"me-1 text-medium-emphasis"})]),_:1},8,["modelValue"])]),e(U),l("div",Rt,[e(he,{"model-value":a(F),indeterminate:a(pe),"onUpdate:modelValue":Ce},null,8,["model-value","indeterminate"]),l("div",{class:"w-100 d-flex align-center action-bar-actions gap-x-1",style:Le({visibility:a(pe)||a(F)?void 0:"hidden"})},[H(e(z,{onClick:i[9]||(i[9]=s=>T("trash"))},{default:t(()=>[e(d,{icon:"tabler-trash",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Delete Mail ")]),_:1})]),_:1},512),[[J,"filter"in a(C).params?a(C).params.filter!=="trashed":!0]]),e(z,{onClick:i[10]||(i[10]=s=>a(re)?T("unread"):T("read"))},{default:t(()=>[e(d,{icon:a(re)?"tabler-mail":"tabler-mail-opened",size:"22"},null,8,["icon"]),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(y(a(re)?"Mark as Unread":"Mark as Read"),1)]),_:1})]),_:1}),e(z,null,{default:t(()=>[e(d,{icon:"tabler-folder",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Folder ")]),_:1}),e(Y,{activator:"parent"},{default:t(()=>[e(Z,{density:"compact"},{default:t(()=>[(u(!0),k(L,null,B(a(N),s=>(u(),R(ee,{key:s.title,class:ae([a(n)(s.action)?"d-flex":"d-none","items-center"]),href:"#",onClick:W=>ze(s.action)},{prepend:t(()=>[e(d,{icon:s.icon,class:"me-2",size:"20"},null,8,["icon"])]),default:t(()=>[e(se,{class:"text-capitalize"},{default:t(()=>[_(y(s.action),1)]),_:2},1024)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1}),e(z,null,{default:t(()=>[e(d,{icon:"tabler-tag",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Label ")]),_:1}),e(Y,{activator:"parent"},{default:t(()=>[e(Z,{density:"compact"},{default:t(()=>[(u(!0),k(L,null,B(a(A),s=>(u(),R(ee,{key:s.title,href:"#",onClick:async()=>{await a(x)(a(h),s.title),await a(f)()}},{prepend:t(()=>[e(Ve,{inline:"",color:a(D)(s.title),dot:""},null,8,["color"])]),default:t(()=>[e(se,{class:"ms-2 text-capitalize"},{default:t(()=>[_(y(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})],4),e(K),e(z,{onClick:a(f)},{default:t(()=>[e(d,{icon:"tabler-refresh",size:"22"})]),_:1},8,["onClick"]),e(z,null,{default:t(()=>[e(d,{icon:"tabler-dots-vertical",size:"22"})]),_:1})]),e(U),e(a(me),{tag:"ul",options:{wheelPropagation:!1},class:"email-list"},{default:t(()=>[(u(!0),k(L,null,B(a(v),s=>{var W;return H((u(),k("li",{key:s.id,class:ae(["email-item d-flex align-center pa-4 gap-2 cursor-pointer",[{"email-read":s.isRead}]]),onClick:P=>Ee(s)},[e(he,{"model-value":a(h).includes(s.id),class:"flex-shrink-0","onUpdate:modelValue":P=>m(s.id),onClick:i[11]||(i[11]=q(()=>{},["stop"]))},null,8,["model-value","onUpdate:modelValue"]),e(z,{color:s.isStarred?"warning":"default",onClick:q(P=>T(s.isStarred?"unstar":"star",[s.id]),["stop"])},{default:t(()=>[e(d,{icon:"tabler-star",size:"22"})]),_:2},1032,["color","onClick"]),e($e,{size:"32"},{default:t(()=>[e(de,{src:s.from.avatar,alt:s.from.name},null,8,["src","alt"])]),_:2},1024),l("h6",It,y(s.from.name),1),l("span",Ut,y(s.subject),1),e(K),l("div",{class:ae(["email-meta align-center gap-2",p.$vuetify.display.xs?"d-none":""])},[(u(!0),k(L,null,B(s.labels,P=>(u(),R(d,{key:P,icon:"tabler-circle-filled",size:"10",color:a(D)(P)},null,8,["color"]))),128)),l("span",Bt,y(("formatDateToMonthShort"in p?p.formatDateToMonthShort:a(Me))(s.time)),1)],2),l("div",Nt,[e(z,{onClick:q(P=>T("trash",[s.id]),["stop"])},{default:t(()=>[e(d,{icon:"tabler-trash",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Delete Mail ")]),_:1})]),_:2},1032,["onClick"]),e(z,{class:"mx-2",onClick:q(P=>T(s.isRead?"unread":"read",[s.id]),["stop"])},{default:t(()=>[e(d,{icon:s.isRead?"tabler-mail":"tabler-mail-opened",size:"22"},null,8,["icon"]),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(y(s.isRead?"Mark as Unread":"Mark as Read"),1)]),_:2},1024)]),_:2},1032,["onClick"]),e(z,{onClick:q(P=>T("spam",[s.id]),["stop"])},{default:t(()=>[e(d,{icon:"tabler-info-circle",size:"22"}),e(I,{activator:"parent",location:"top"},{default:t(()=>[_(" Move to Spam ")]),_:1})]),_:2},1032,["onClick"])])],10,At)),[[J,(W=a(v))==null?void 0:W.length]])}),128)),H(l("li",Ft,jt,512),[[J,!a(v).length]])]),_:1})]),_:1}),H(e(tt,{onClose:i[12]||(i[12]=s=>c.value=!1)},null,512),[[J,a(c)]])]),_:1})]),_:1})}}});export{Ra as default};
