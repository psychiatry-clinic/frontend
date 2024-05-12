import{a as c,b as L,V as g,d as x,c as D,e as k}from"./VList-CySWdvuc.js";import{d as f,o as r,g as m,f as t,c as h,F as V,i as _,b as e,a0 as w,x as y,v as a,b1 as W,z as P,aj as j,e as u,bb as U,bc as G,b5 as M,b3 as z,r as K,s as C,n as Q,aX as E}from"./index-Cx9f_UB6.js";import{V as S}from"./VAvatar-D-4MdlQJ.js";import{V as J}from"./VDivider-QhcZIdz_.js";import{V as X}from"./VBadge-CvqmJy4o.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as B}from"./VListItemAction-DmHg9nhb.js";import{V as T}from"./VCheckbox-BUzJlubi.js";import{_ as q}from"./AppCardCode.vue_vue_type_style_index_0_lang-CXNCTzks.js";import{V as o}from"./VCardText-CU6bWz5p.js";import{a as b,V as Z}from"./VRow-DaMRPCg6.js";import"./index-B8DDNpsE.js";import"./ssrBoot-9B6u12-p.js";import"./index-Dv8KT_SV.js";import"./createSimpleFunctional-vpOGgS87.js";import"./VImg-Dyv57oRP.js";import"./VCheckboxBtn-Dg4yVE8H.js";import"./VSelectionControl-jRusPdSv.js";import"./form-DikTLPOW.js";import"./VInput-B-pJGcUm.js";import"./vue3-perfect-scrollbar.esm-DzkBKRyI.js";import"./VCard-MbR0quvT.js";/* empty css              */const ee=f({__name:"DemoListShaped",setup(v){const l=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"tabler-brand-instagram"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"tabler-brand-facebook"},{text:"Bonbon macaroon gummies pie jelly",icon:"tabler-brand-twitter"}];return(n,d)=>(r(),m(g,null,{default:t(()=>[(r(),h(V,null,_(l,(i,s)=>e(c,{key:s,value:i.text,rounded:"shaped"},{prepend:t(()=>[e(w,{icon:i.icon},null,8,["icon"])]),default:t(()=>[e(L,{textContent:y(i.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1}))}}),te=f({__name:"DemoListProgressList",setup(v){const l=[{avatar:"tabler-brand-react",title:"React is a JavaScript library for building user interfaces",language:"react",amount:90},{avatar:"tabler-brand-bootstrap",title:"Bootstrap is an open source toolkit",language:"bootstrap",amount:80},{avatar:"tabler-brand-vue",title:"Vue.js is the Progressive JavaScript Framework",language:"vue",amount:65},{avatar:"tabler-brand-angular",title:"Angular implements Functional Programming concepts",language:"angular",amount:75},{avatar:"tabler-brand-javascript",title:"JavaScript is the programming language of the Web",language:"javascript",amount:70}],n={react:"info",bootstrap:"primary",vue:"success",angular:"error",javascript:"warning"};return(d,i)=>(r(),m(g,{lines:"two",border:""},{default:t(()=>[(r(),h(V,null,_(l,(s,p)=>(r(),h(V,{key:s.language},[e(c,null,{prepend:t(()=>[e(S,{size:"36",rounded:"",variant:"tonal",icon:s.avatar,color:n[s.language]},null,8,["icon","color"])]),default:t(()=>[e(L,null,{default:t(()=>[a(y(s.title),1)]),_:2},1024),e(x,{class:"mt-2"},{default:t(()=>[e(W,{height:"6",rounded:"","rounded-bar":"","model-value":s.amount,color:n[s.language]},null,8,["model-value","color"])]),_:2},1024)]),_:2},1024),p!==l.length-1?(r(),m(J,{key:0})):P("",!0)],64))),64))]),_:1}))}}),ae={class:"ms-4"},se={class:"text-xs text-disabled"},ie=f({__name:"DemoListUserList",setup(v){const l=[{avatar:U,name:"Caroline Black",status:"Online",lastVisited:"13 minutes ago"},{avatar:G,name:"Alfred Copeland",status:"Away",lastVisited:"11 minutes ago"},{avatar:M,name:"Celia Schneider",status:"Offline",lastVisited:"9 minutes ago"},{avatar:z,name:"Max Rogan",status:"In Meeting",lastVisited:"28 minutes ago"}],n={Online:"success",Away:"warning",Offline:"secondary","In Meeting":"error"};return(d,i)=>(r(),m(g,{lines:"two",border:""},{default:t(()=>[(r(),h(V,null,_(l,(s,p)=>(r(),h(V,{key:s.name},[e(c,null,{prepend:t(()=>[e(S,{image:s.avatar},null,8,["image"])]),append:t(()=>[e(j,{size:"small"},{default:t(()=>[a(" Add ")]),_:1})]),default:t(()=>[e(L,null,{default:t(()=>[a(y(s.name),1)]),_:2},1024),e(x,{class:"mt-1"},{default:t(()=>[e(X,{dot:"",location:"start center","offset-x":"2",color:n[s.status],class:"me-3"},{default:t(()=>[u("span",ae,y(s.status),1)]),_:2},1032,["color"]),u("span",se,y(s.lastVisited),1)]),_:2},1024)]),_:2},1024),p!==l.length-1?(r(),m(J,{key:0})):P("",!0)],64))),64))]),_:1}))}}),le=["innerHTML"],re=f({__name:"DemoListThreeLine",setup(v){const l=[{type:"subheader",title:"Today"},{prependAvatar:U,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:G,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:M,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:z,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'}];return(n,d)=>(r(),m(g,{lines:"three",items:l,"item-props":""},{subtitle:t(({subtitle:i})=>[u("div",{innerHTML:i},null,8,le)]),_:1}))}}),ne=f({__name:"DemoListTwoLinesAndSubheader",setup(v){const l=[{color:"blue",icon:"tabler-clipboard-text",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"tabler-device-mobile-rotated",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],n=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(d,i)=>(r(),m(g,{lines:"two"},{default:t(()=>[e(D,{inset:""},{default:t(()=>[a(" Folders ")]),_:1}),(r(),h(V,null,_(n,s=>e(c,{key:s.title,title:s.title,subtitle:s.subtitle},{prepend:t(()=>[e(S,{color:"secondary",variant:"tonal"},{default:t(()=>[e(w,{size:22,icon:"tabler-folder"})]),_:1})]),append:t(()=>[e(j,{variant:"text",color:"default",icon:"tabler-info-circle"})]),_:2},1032,["title","subtitle"])),64)),e(J,{inset:""}),e(D,{inset:""},{default:t(()=>[a(" Files ")]),_:1}),(r(),h(V,null,_(l,s=>e(c,{key:s.title,title:s.title,subtitle:s.subtitle},{prepend:t(()=>[e(S,{color:"secondary",variant:"tonal"},{default:t(()=>[e(w,{size:22,icon:s.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(j,{variant:"text",color:"default",icon:"tabler-info-circle"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}}),oe=f({__name:"DemoListSubGroup",setup(v){const l=K(["Users","Admin"]),n=[["Management","tabler-users"],["Settings","tabler-settings"]],d=[["Create","tabler-plus"],["Read","tabler-file"],["Update","tabler-reload"],["Delete","tabler-trash"]];return(i,s)=>(r(),m(g,{opened:Q(l),"onUpdate:opened":s[0]||(s[0]=p=>E(l)?l.value=p:null)},{default:t(()=>[e(c,{"prepend-icon":"tabler-home",title:"Home",value:"Home"}),e(k,{value:"Users"},{activator:t(({props:p})=>[e(c,C(p,{"prepend-icon":"tabler-users",title:"Users"}),null,16)]),default:t(()=>[e(k,{value:"Admin"},{activator:t(({props:p})=>[e(c,C(p,{title:"Admin"}),null,16)]),default:t(()=>[(r(),h(V,null,_(n,([p,I],A)=>e(c,{key:A,value:p,title:p,"prepend-icon":I},null,8,["value","title","prepend-icon"])),64))]),_:1}),e(k,{value:"Actions"},{activator:t(({props:p})=>[e(c,C(p,{title:"Actions"}),null,16)]),default:t(()=>[(r(),h(V,null,_(d,([p,I],A)=>e(c,{key:A,value:p,title:p,"prepend-icon":I},null,8,["value","title","prepend-icon"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}}),pe={};function ue(v,l){return r(),m(g,{lines:"three",density:"compact","select-strategy":"classic",class:"action-item-group-list"},{default:t(()=>[e(D,null,{default:t(()=>[a("General")]),_:1}),e(c,{value:"notifications"},{prepend:t(({isActive:n})=>[e(B,{start:""},{default:t(()=>[e(T,{"model-value":n,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Notifications")]),_:1}),e(x,null,{default:t(()=>[a("Notify me about updates to apps or games that I downloaded")]),_:1})]),_:1}),e(c,{value:"sound"},{prepend:t(({isActive:n})=>[e(B,{start:""},{default:t(()=>[e(T,{"model-value":n,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Sound")]),_:1}),e(x,null,{default:t(()=>[a("Auto-update apps at any time. Data charges may apply")]),_:1})]),_:1}),e(c,{value:"widgets"},{prepend:t(({isActive:n})=>[e(B,{start:""},{default:t(()=>[e(T,{"model-value":n,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Auto-add widgets")]),_:1}),e(x,null,{default:t(()=>[a("Automatically add home screen widgets when downloads complete")]),_:1})]),_:1})]),_:1})}const ce=Y(pe,[["render",ue]]),me=f({__name:"DemoListNav",setup(v){const l=[{title:"My Files",value:1,prependIcon:"tabler-folder"},{title:"Shared with me",value:2,prependIcon:"tabler-users"},{title:"Starred",value:3,prependIcon:"tabler-star"},{title:"Recent",value:4,prependIcon:"tabler-history"},{title:"Offline",value:5,prependIcon:"tabler-circle-check"},{title:"Uploads",value:6,prependIcon:"tabler-upload"},{title:"Backups",value:7,prependIcon:"tabler-cloud-upload"}];return(n,d)=>(r(),m(g,{nav:"",lines:!1},{default:t(()=>[(r(),h(V,null,_(l,i=>e(c,{key:i.value,value:i.value},{prepend:t(()=>[e(w,{icon:i.prependIcon},null,8,["icon"])]),default:t(()=>[e(L,null,{default:t(()=>[a(y(i.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}}),de=f({__name:"DemoListDensity",setup(v){const l=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(n,d)=>(r(),m(g,{density:"comfortable",items:l}))}}),ve=f({__name:"DemoListRounded",setup(v){const l=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,props:{prependIcon:"tabler-brand-instagram",rounded:"xl"}},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,props:{prependIcon:"tabler-brand-facebook",rounded:"xl"}},{title:"Bonbon macaroon gummies pie jelly",value:3,props:{prependIcon:"tabler-brand-twitter",rounded:"xl"}},{title:"halvah icing marshmallow",value:4,props:{prependIcon:"tabler-brand-instagram",rounded:"xl"}}];return(n,d)=>(r(),m(g,{items:l}))}}),be=f({__name:"DemoListBasic",setup(v){const l=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(n,d)=>(r(),m(g,{items:l}))}}),ge={ts:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
    class="action-item-group-list"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
    class="action-item-group-list"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},fe={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},he={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="comfortable"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="comfortable"
    :items="items"
  />
</template>
`},Ve={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'tabler-folder' },
  { title: 'Shared with me', value: 2, prependIcon: 'tabler-users' },
  { title: 'Starred', value: 3, prependIcon: 'tabler-star' },
  { title: 'Recent', value: 4, prependIcon: 'tabler-history' },
  { title: 'Offline', value: 5, prependIcon: 'tabler-circle-check' },
  { title: 'Uploads', value: 6, prependIcon: 'tabler-upload' },
  { title: 'Backups', value: 7, prependIcon: 'tabler-cloud-upload' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'tabler-folder',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'tabler-users',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'tabler-star',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'tabler-history',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'tabler-circle-check',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'tabler-upload',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'tabler-cloud-upload',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},_e={ts:`<script setup lang="ts">
interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'tabler-brand-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
const languageProgress = [
  {
    avatar: 'tabler-brand-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`},Le={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'tabler-brand-facebook',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'tabler-brand-twitter',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'tabler-brand-facebook',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'tabler-brand-twitter',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},ye={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'tabler-brand-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'tabler-brand-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'tabler-brand-twitter' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'tabler-brand-instagram',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'tabler-brand-facebook',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'tabler-brand-twitter',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},Ie={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'tabler-users'],
  ['Settings', 'tabler-settings'],
]

const cruds = [
  ['Create', 'tabler-plus'],
  ['Read', 'tabler-file'],
  ['Update', 'tabler-reload'],
  ['Delete', 'tabler-trash'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="tabler-home"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="tabler-users"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'tabler-users',
  ],
  [
    'Settings',
    'tabler-settings',
  ],
]

const cruds = [
  [
    'Create',
    'tabler-plus',
  ],
  [
    'Read',
    'tabler-file',
  ],
  [
    'Update',
    'tabler-reload',
  ],
  [
    'Delete',
    'tabler-trash',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="tabler-home"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="tabler-users"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},Ae={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`},xe={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'tabler-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            icon="tabler-folder"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'tabler-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            icon="tabler-folder"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},we={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

interface Status {
  'Online': string
  'Away': string
  'Offline': string
  'In Meeting': string
}

interface Users {
  avatar: string
  name: string
  status: keyof Status
  lastVisited: string
}

const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor: Status = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`},Se=u("code",null,"v-list",-1),ke=u("code",null,"v-list-item",-1),Ce=u("code",null,"rounded",-1),Be=u("code",null,"density",-1),Te=u("code",null,"default",-1),De=u("code",null,"comfortable",-1),je=u("code",null,"compact",-1),Je=u("code",null,"nav",-1),Pe=u("code",null,"v-list-item",-1),Ue=u("code",null,"three-line",-1),Ge=u("code",null,"v-list-group",-1),Me=u("code",null,"v-list-group",-1),ze=u("code",null,"v-list-item",-1),pt=f({__name:"list",setup(v){return(l,n)=>{const d=be,i=q,s=ve,p=de,I=me,A=ce,H=oe,O=ne,R=re,F=ie,$=te,N=ee;return r(),m(Z,{class:"match-height"},{default:t(()=>[e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Basic","no-padding":"",code:fe},{default:t(()=>[e(o,null,{default:t(()=>[Se,a(" component can contain an avatar, content, actions and much more.")]),_:1}),e(o,null,{default:t(()=>[e(d)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Rounded","no-padding":"",code:Le},{default:t(()=>[e(o,null,{default:t(()=>[a("You can make "),ke,a(" rounded using "),Ce,a(" prop.")]),_:1}),e(o,null,{default:t(()=>[e(s)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Density",code:he,"no-padding":""},{default:t(()=>[e(o,null,{default:t(()=>[a("Use "),Be,a(" prop to adjusts the spacing within the component. Available options are: "),Te,a(", "),De,a(", and "),je,a(".")]),_:1}),e(o,null,{default:t(()=>[e(p)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Nav","no-padding":"",code:Ve},{default:t(()=>[e(o,null,{default:t(()=>[a("Lists can receive an alternative "),Je,a(" styling that reduces the width "),Pe,a(" takes up as well as adding a border radius.")]),_:1}),e(o,null,{default:t(()=>[e(I)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Action and item group","no-padding":"",code:ge},{default:t(()=>[e(o,null,{default:t(()=>[a("A "),Ue,a(" list with actions. Utilizing "),Ge,a(", easily connect actions to your tiles.")]),_:1}),e(o,null,{default:t(()=>[e(A)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Sub Group","no-padding":"",code:Ie},{default:t(()=>[e(o,null,{default:t(()=>[a(" Using the "),Me,a(" component you can create up to 2 levels in depth using the sub-group prop. ")]),_:1}),e(o,null,{default:t(()=>[e(H)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Two lines and subheader","no-padding":"",code:xe},{default:t(()=>[e(o,null,{default:t(()=>[a("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")]),_:1}),e(o,null,{default:t(()=>[e(O)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Three Line","no-padding":"",code:Ae},{default:t(()=>[e(o,null,{default:t(()=>[a("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")]),_:1}),e(o,null,{default:t(()=>[e(R)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"User List","no-padding":"",code:we},{default:t(()=>[e(o,null,{default:t(()=>[e(F)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Progress List","no-padding":"",code:_e},{default:t(()=>[e(o,null,{default:t(()=>[e($)]),_:1})]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Shaped","no-padding":"",code:ye},{default:t(()=>[e(o,null,{default:t(()=>[a(" Shaped lists have rounded borders on one side of the "),ze,a(". ")]),_:1}),e(o,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}});export{pt as default};
