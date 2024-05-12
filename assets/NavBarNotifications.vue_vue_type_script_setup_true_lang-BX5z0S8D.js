import{a as W}from"./formatters-DocrwTSm.js";import{d as J,a4 as w,a as s,o as f,g as C,f as a,b as e,s as O,K as v,v as g,x as d,n as u,L as A,c as x,F as T,i as G,z as B,e as m,y as Q,aj as Z,r as H,ak as X,al as $,am as ee}from"./index-B-uKkDM3.js";import{P as te}from"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const oe={class:"d-flex align-start gap-3"},ae={key:0},se={class:"text-sm font-weight-medium mb-1"},ie={class:"text-body-2 mb-2",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},ne={class:"text-sm text-disabled mb-0",style:{"letter-spacing":"0.4px !important","line-height":"18px"}},le={class:"d-flex flex-column align-end"},ce=J({__name:"Notifications",props:{notifications:{},badgeProps:{default:void 0},location:{default:"bottom end"}},emits:["read","unread","remove","click:notification"],setup(b,{emit:c}){const i=b,r=c,p=w(()=>i.notifications.some(o=>o.isSeen===!1)),V=()=>{const o=i.notifications.map(_=>_.id);p.value?r("read",o):r("unread",o)},n=w(()=>i.notifications.filter(o=>o.isSeen===!1).length),l=(o,_)=>{o?r("unread",[_]):r("read",[_])};return(o,_)=>{const h=s("VIcon"),U=s("VBadge"),z=s("VCardTitle"),E=s("VChip"),M=s("VTooltip"),y=s("IconBtn"),P=s("VCardItem"),k=s("VDivider"),F=s("VAvatar"),K=s("VSpacer"),N=s("VListItem"),L=s("VListItemTitle"),Y=s("VList"),j=s("VBtn"),R=s("VCardText"),D=s("VCard"),q=s("VMenu");return f(),C(y,{id:"notification-btn"},{default:a(()=>[e(U,O(i.badgeProps,{"model-value":i.notifications.some(t=>!t.isSeen),color:"error",dot:"","offset-x":"2","offset-y":"3"}),{default:a(()=>[e(h,{size:"24",icon:"tabler-bell"})]),_:1},16,["model-value"]),e(q,{activator:"parent",width:"380px",location:i.location,offset:"12px","close-on-content-click":!1},{default:a(()=>[e(D,{class:"d-flex flex-column"},{default:a(()=>[e(P,{class:"notification-section"},{append:a(()=>[v(e(E,{size:"small",color:"primary",class:"me-2"},{default:a(()=>[g(d(u(n))+" New ",1)]),_:1},512),[[A,i.notifications.some(t=>!t.isSeen)]]),v(e(y,{size:"34",onClick:V},{default:a(()=>[e(h,{size:"20",color:"high-emphasis",icon:u(p)?"tabler-mail-opened":"tabler-mail"},null,8,["icon"]),e(M,{activator:"parent",location:"start"},{default:a(()=>[g(d(u(p)?"Mark all as read":"Mark all as unread"),1)]),_:1})]),_:1},512),[[A,i.notifications.length]])]),default:a(()=>[e(z,{class:"text-h6"},{default:a(()=>[g(" Notifications ")]),_:1})]),_:1}),e(k),e(u(te),{options:{wheelPropagation:!1},style:{"max-block-size":"23.75rem"}},{default:a(()=>[e(Y,{class:"notification-list rounded-0 py-0"},{default:a(()=>[(f(!0),x(T,null,G(i.notifications,(t,I)=>(f(),x(T,{key:t.title},[I>0?(f(),C(k,{key:0})):B("",!0),e(N,{link:"",lines:"one","min-height":"66px",class:"list-item-hover-class",onClick:S=>o.$emit("click:notification",t)},{default:a(()=>[m("div",oe,[e(F,{size:"40",color:t.color&&t.icon?t.color:void 0,image:t.img||void 0,icon:t.icon||void 0,variant:t.img?void 0:"tonal"},{default:a(()=>[t.text?(f(),x("span",ae,d(("avatarText"in o?o.avatarText:u(W))(t.text)),1)):B("",!0)]),_:2},1032,["color","image","icon","variant"]),m("div",null,[m("p",se,d(t.title),1),m("p",ie,d(t.subtitle),1),m("p",ne,d(t.time),1)]),e(K),m("div",le,[e(h,{size:"10",icon:"tabler-circle-filled",color:t.isSeen?"#a8aaae":"primary",class:Q([`${t.isSeen?"visible-in-hover":""}`,"mb-2"]),onClick:Z(S=>l(t.isSeen,t.id),["stop"])},null,8,["color","class","onClick"]),e(h,{size:"20",icon:"tabler-x",class:"visible-in-hover",onClick:S=>o.$emit("remove",t.id)},null,8,["onClick"])])])]),_:2},1032,["onClick"])],64))),128)),v(e(N,{class:"text-center text-medium-emphasis",style:{"block-size":"56px"}},{default:a(()=>[e(L,null,{default:a(()=>[g("No Notification Found!")]),_:1})]),_:1},512),[[A,!i.notifications.length]])]),_:1})]),_:1}),e(k),v(e(R,{class:"pa-4"},{default:a(()=>[e(j,{block:"",size:"small"},{default:a(()=>[g(" View All Notifications ")]),_:1})]),_:1},512),[[A,i.notifications.length]])]),_:1})]),_:1},8,["location"])]),_:1})}}}),re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAA1ZJREFUWEfNmM1PE0EYxp/pbrcUsLUqARMSjUf/Ak+Gg4kBY0jQTfDGiTN/CmdOHgmLB0wUYzx4gj35ceHgVwwpUVCElo/a7W7HzLTbbpfuzttWSPe6M+/89nnf95nZYejw4QDDxFwK+kkKaT0Jp5xEAhoYNBmKw0MVHoxUBSW3AneojLdPy0y86eBh1LF8fj6JbweDMJAGvBR1Xm2cVoaDEm7lTtnSUoUyVwnGTVPDAYYxqA3BdZKUoJFjdKOCU+8EORwzy/LiYsWCcdNMo+Begs7SPQGFJ7u8hKx+xCyrFBU3Eoyb5jBKyKLq6f8Vyg+W0FykUWCWddwuflswPjmZgWdkoWuJc4Hyg7peFZpTYOvrxfA6Z8CkUgUnd+5QQbiscRBWrgVM1lQJV84tfVHy19L6J1hzDTDZfQX3qrLQJ+7ewUhuAZp+JzLNnmvDcW35fu3FIqkcag2x73drE+yemYXhXVYGmX6wgPTAgnJccEDp7yIJ0NEO2RurIKZKMGmeP4sjJJ+affS9Iyh/8PKzm8p5wufGMr+ECdfAqGqJNI6NLCsXaDegQ9WY3PumzFHSNtNNGn1IUXfW2qz6o7QyXlq7jE/MDWCwOKqeAOBCwACcZnYZOY2CvBew/M4WNu3X8KDuUtEE/OGTa/DKQyTFzOnlWJuIC7L+Ko+j43FUmboJtNQJ4/dnrkODQQLrtiNF8JXV2hKMLSpV8+AwPjkz3jjkqei6BdvYtJHfqRsym0UVNfONejg8xqdmbqh45PturULU1sbm7eYaBDAhLBmsm8J/9z6PL1/HWz6cUmMSjJpKKphQaG8vg9/7Ng4PH4eyYaPK1F4mU0kt/qiOPJOquMKgpRGy+Kl2EVX4nz6v4sPHsDJn6Sjd6M+SdkHdJ6PAfH+KEkoAcdjKTgzOlwZL2ZLiOnLt+RbKTqDrYIMxu2OYIJjckiibeFzhr6wKT2oeGjtJWVuV65u4eKdMZ5xivqM3FiEWeFTq64dF+kFRqGYEjtM/djPY3i42Hd1fqQew8EGRpFrwCxMidbz9gZFooG0FCx+tJRj1Z8SPmJBgrT8kvdRX1M9IHa7/ft98Ifryh7cB149XBC3K9dulSgCu/66hAnD9d3EX9Jq+u+oMG+FFXQ7/A7YTzYZ/kuhAAAAAAElFTkSuQmCC",ue=J({__name:"NavBarNotifications",setup(b){const c=H([{id:1,img:X,title:"Congratulation Flora! 🎉",subtitle:"Won the monthly best seller badge",time:"Today",isSeen:!0},{id:2,text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday",isSeen:!1},{id:3,img:$,title:"New message received 👋🏻",subtitle:"You have 10 unread messages",time:"11 Aug",isSeen:!0},{id:4,img:re,title:"PayPal",subtitle:"Received Payment",time:"25 May",isSeen:!1,color:"error"},{id:5,img:ee,title:"Received Order 📦",subtitle:"New order received from john",time:"19 Mar",isSeen:!0}]),i=n=>{c.value.forEach((l,o)=>{n===l.id&&c.value.splice(o,1)})},r=n=>{c.value.forEach(l=>{n.forEach(o=>{o===l.id&&(l.isSeen=!0)})})},p=n=>{c.value.forEach(l=>{n.forEach(o=>{o===l.id&&(l.isSeen=!1)})})},V=n=>{n.isSeen||r([n.id])};return(n,l)=>{const o=ce;return f(),C(o,{notifications:u(c),onRemove:i,onRead:r,onUnread:p,"onClick:notification":V},null,8,["notifications"])}}});export{ue as _};