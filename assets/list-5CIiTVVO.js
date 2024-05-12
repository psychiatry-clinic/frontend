import{d as L,a,o as c,g,f as e,c as I,F as y,i as A,b as t,x,v as i,z as k,e as b,ar as C,as as T,am as B,ak as D,r as U,s as S,n as G,ad as M}from"./index-B-uKkDM3.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const H=L({__name:"DemoListShaped",setup(_){const r=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"tabler-brand-instagram"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"tabler-brand-facebook"},{text:"Bonbon macaroon gummies pie jelly",icon:"tabler-brand-twitter"}];return(v,s)=>{const p=a("VIcon"),l=a("VListItemTitle"),n=a("VListItem"),m=a("VList");return c(),g(m,null,{default:e(()=>[(c(),I(y,null,A(r,(u,o)=>t(n,{key:o,value:u.text,rounded:"shaped"},{prepend:e(()=>[t(p,{icon:u.icon},null,8,["icon"])]),default:e(()=>[t(l,{textContent:x(u.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1})}}}),O=L({__name:"DemoListProgressList",setup(_){const r=[{avatar:"tabler-brand-react",title:"React is a JavaScript library for building user interfaces",language:"react",amount:90},{avatar:"tabler-brand-bootstrap",title:"Bootstrap is an open source toolkit",language:"bootstrap",amount:80},{avatar:"tabler-brand-vue",title:"Vue.js is the Progressive JavaScript Framework",language:"vue",amount:65},{avatar:"tabler-brand-angular",title:"Angular implements Functional Programming concepts",language:"angular",amount:75},{avatar:"tabler-brand-javascript",title:"JavaScript is the programming language of the Web",language:"javascript",amount:70}],v={react:"info",bootstrap:"primary",vue:"success",angular:"error",javascript:"warning"};return(s,p)=>{const l=a("VAvatar"),n=a("VListItemTitle"),m=a("VProgressLinear"),u=a("VListItemSubtitle"),o=a("VListItem"),V=a("VDivider"),f=a("VList");return c(),g(f,{lines:"two",border:""},{default:e(()=>[(c(),I(y,null,A(r,(d,h)=>(c(),I(y,{key:d.language},[t(o,null,{prepend:e(()=>[t(l,{size:"36",rounded:"",variant:"tonal",icon:d.avatar,color:v[d.language]},null,8,["icon","color"])]),default:e(()=>[t(n,null,{default:e(()=>[i(x(d.title),1)]),_:2},1024),t(u,{class:"mt-2"},{default:e(()=>[t(m,{height:"6",rounded:"","rounded-bar":"","model-value":d.amount,color:v[d.language]},null,8,["model-value","color"])]),_:2},1024)]),_:2},1024),h!==r.length-1?(c(),g(V,{key:0})):k("",!0)],64))),64))]),_:1})}}}),F={class:"ms-4"},$={class:"text-xs text-disabled"},N=L({__name:"DemoListUserList",setup(_){const r=[{avatar:C,name:"Caroline Black",status:"Online",lastVisited:"13 minutes ago"},{avatar:T,name:"Alfred Copeland",status:"Away",lastVisited:"11 minutes ago"},{avatar:B,name:"Celia Schneider",status:"Offline",lastVisited:"9 minutes ago"},{avatar:D,name:"Max Rogan",status:"In Meeting",lastVisited:"28 minutes ago"}],v={Online:"success",Away:"warning",Offline:"secondary","In Meeting":"error"};return(s,p)=>{const l=a("VAvatar"),n=a("VListItemTitle"),m=a("VBadge"),u=a("VListItemSubtitle"),o=a("VBtn"),V=a("VListItem"),f=a("VDivider"),d=a("VList");return c(),g(d,{lines:"two",border:""},{default:e(()=>[(c(),I(y,null,A(r,(h,w)=>(c(),I(y,{key:h.name},[t(V,null,{prepend:e(()=>[t(l,{image:h.avatar},null,8,["image"])]),append:e(()=>[t(o,{size:"small"},{default:e(()=>[i(" Add ")]),_:1})]),default:e(()=>[t(n,null,{default:e(()=>[i(x(h.name),1)]),_:2},1024),t(u,{class:"mt-1"},{default:e(()=>[t(m,{dot:"",location:"start center","offset-x":"2",color:v[h.status],class:"me-3"},{default:e(()=>[b("span",F,x(h.status),1)]),_:2},1032,["color"]),b("span",$,x(h.lastVisited),1)]),_:2},1024)]),_:2},1024),w!==r.length-1?(c(),g(f,{key:0})):k("",!0)],64))),64))]),_:1})}}}),W=["innerHTML"],K=L({__name:"DemoListThreeLine",setup(_){const r=[{type:"subheader",title:"Today"},{prependAvatar:C,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:T,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:B,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:D,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'}];return(v,s)=>{const p=a("VList");return c(),g(p,{lines:"three",items:r,"item-props":""},{subtitle:e(({subtitle:l})=>[b("div",{innerHTML:l},null,8,W)]),_:1})}}}),Q=L({__name:"DemoListTwoLinesAndSubheader",setup(_){const r=[{color:"blue",icon:"tabler-clipboard-text",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"tabler-device-mobile-rotated",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],v=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(s,p)=>{const l=a("VListSubheader"),n=a("VIcon"),m=a("VAvatar"),u=a("VBtn"),o=a("VListItem"),V=a("VDivider"),f=a("VList");return c(),g(f,{lines:"two"},{default:e(()=>[t(l,{inset:""},{default:e(()=>[i(" Folders ")]),_:1}),(c(),I(y,null,A(v,d=>t(o,{key:d.title,title:d.title,subtitle:d.subtitle},{prepend:e(()=>[t(m,{color:"secondary",variant:"tonal"},{default:e(()=>[t(n,{size:22,icon:"tabler-folder"})]),_:1})]),append:e(()=>[t(u,{variant:"text",color:"default",icon:"tabler-info-circle"})]),_:2},1032,["title","subtitle"])),64)),t(V,{inset:""}),t(l,{inset:""},{default:e(()=>[i(" Files ")]),_:1}),(c(),I(y,null,A(r,d=>t(o,{key:d.title,title:d.title,subtitle:d.subtitle},{prepend:e(()=>[t(m,{color:"secondary",variant:"tonal"},{default:e(()=>[t(n,{size:22,icon:d.icon},null,8,["icon"])]),_:2},1024)]),append:e(()=>[t(u,{variant:"text",color:"default",icon:"tabler-info-circle"})]),_:2},1032,["title","subtitle"])),64))]),_:1})}}}),E=L({__name:"DemoListSubGroup",setup(_){const r=U(["Users","Admin"]),v=[["Management","tabler-users"],["Settings","tabler-settings"]],s=[["Create","tabler-plus"],["Read","tabler-file"],["Update","tabler-reload"],["Delete","tabler-trash"]];return(p,l)=>{const n=a("VListItem"),m=a("VListGroup"),u=a("VList");return c(),g(u,{opened:G(r),"onUpdate:opened":l[0]||(l[0]=o=>M(r)?r.value=o:null)},{default:e(()=>[t(n,{"prepend-icon":"tabler-home",title:"Home",value:"Home"}),t(m,{value:"Users"},{activator:e(({props:o})=>[t(n,S(o,{"prepend-icon":"tabler-users",title:"Users"}),null,16)]),default:e(()=>[t(m,{value:"Admin"},{activator:e(({props:o})=>[t(n,S(o,{title:"Admin"}),null,16)]),default:e(()=>[(c(),I(y,null,A(v,([o,V],f)=>t(n,{key:f,value:o,title:o,"prepend-icon":V},null,8,["value","title","prepend-icon"])),64))]),_:1}),t(m,{value:"Actions"},{activator:e(({props:o})=>[t(n,S(o,{title:"Actions"}),null,16)]),default:e(()=>[(c(),I(y,null,A(s,([o,V],f)=>t(n,{key:f,value:o,title:o,"prepend-icon":V},null,8,["value","title","prepend-icon"])),64))]),_:1})]),_:1})]),_:1},8,["opened"])}}}),Y={};function q(_,r){const v=a("VListSubheader"),s=a("VCheckbox"),p=a("VListItemAction"),l=a("VListItemTitle"),n=a("VListItemSubtitle"),m=a("VListItem"),u=a("VList");return c(),g(u,{lines:"three",density:"compact","select-strategy":"classic",class:"action-item-group-list"},{default:e(()=>[t(v,null,{default:e(()=>[i("General")]),_:1}),t(m,{value:"notifications"},{prepend:e(({isActive:o})=>[t(p,{start:""},{default:e(()=>[t(s,{"model-value":o,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:e(()=>[t(l,null,{default:e(()=>[i("Notifications")]),_:1}),t(n,null,{default:e(()=>[i("Notify me about updates to apps or games that I downloaded")]),_:1})]),_:1}),t(m,{value:"sound"},{prepend:e(({isActive:o})=>[t(p,{start:""},{default:e(()=>[t(s,{"model-value":o,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:e(()=>[t(l,null,{default:e(()=>[i("Sound")]),_:1}),t(n,null,{default:e(()=>[i("Auto-update apps at any time. Data charges may apply")]),_:1})]),_:1}),t(m,{value:"widgets"},{prepend:e(({isActive:o})=>[t(p,{start:""},{default:e(()=>[t(s,{"model-value":o,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:e(()=>[t(l,null,{default:e(()=>[i("Auto-add widgets")]),_:1}),t(n,null,{default:e(()=>[i("Automatically add home screen widgets when downloads complete")]),_:1})]),_:1})]),_:1})}const X=R(Y,[["render",q]]),Z=L({__name:"DemoListNav",setup(_){const r=[{title:"My Files",value:1,prependIcon:"tabler-folder"},{title:"Shared with me",value:2,prependIcon:"tabler-users"},{title:"Starred",value:3,prependIcon:"tabler-star"},{title:"Recent",value:4,prependIcon:"tabler-history"},{title:"Offline",value:5,prependIcon:"tabler-circle-check"},{title:"Uploads",value:6,prependIcon:"tabler-upload"},{title:"Backups",value:7,prependIcon:"tabler-cloud-upload"}];return(v,s)=>{const p=a("VIcon"),l=a("VListItemTitle"),n=a("VListItem"),m=a("VList");return c(),g(m,{nav:"",lines:!1},{default:e(()=>[(c(),I(y,null,A(r,u=>t(n,{key:u.value,value:u.value},{prepend:e(()=>[t(p,{icon:u.prependIcon},null,8,["icon"])]),default:e(()=>[t(l,null,{default:e(()=>[i(x(u.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})}}}),tt=L({__name:"DemoListDensity",setup(_){const r=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(v,s)=>{const p=a("VList");return c(),g(p,{density:"comfortable",items:r})}}}),et=L({__name:"DemoListRounded",setup(_){const r=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,props:{prependIcon:"tabler-brand-instagram",rounded:"xl"}},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,props:{prependIcon:"tabler-brand-facebook",rounded:"xl"}},{title:"Bonbon macaroon gummies pie jelly",value:3,props:{prependIcon:"tabler-brand-twitter",rounded:"xl"}},{title:"halvah icing marshmallow",value:4,props:{prependIcon:"tabler-brand-instagram",rounded:"xl"}}];return(v,s)=>{const p=a("VList");return c(),g(p,{items:r})}}}),at=L({__name:"DemoListBasic",setup(_){const r=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(v,s)=>{const p=a("VList");return c(),g(p,{items:r})}}}),st={ts:`<template>
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
`},it={ts:`<script setup lang="ts">
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
`},nt={ts:`<script lang="ts" setup>
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
`},lt={ts:`<script lang="ts" setup>
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
`},ot={ts:`<script setup lang="ts">
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
`},rt={ts:`<script lang="ts" setup>
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
`},ct={ts:`<script lang="ts" setup>
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
`},pt={ts:`<script lang="ts" setup>
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
`},ut={ts:`<script lang="ts" setup>
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
`},mt={ts:`<script lang="ts" setup>
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
`},dt={ts:`<script setup lang="ts">
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
`},vt=b("code",null,"v-list",-1),bt=b("code",null,"v-list-item",-1),gt=b("code",null,"rounded",-1),_t=b("code",null,"density",-1),Vt=b("code",null,"default",-1),ft=b("code",null,"comfortable",-1),Lt=b("code",null,"compact",-1),ht=b("code",null,"nav",-1),It=b("code",null,"v-list-item",-1),yt=b("code",null,"three-line",-1),At=b("code",null,"v-list-group",-1),xt=b("code",null,"v-list-group",-1),wt=b("code",null,"v-list-item",-1),Bt=L({__name:"list",setup(_){return(r,v)=>{const s=a("VCardText"),p=at,l=z,n=a("VCol"),m=et,u=tt,o=Z,V=X,f=E,d=Q,h=K,w=N,j=O,J=H,P=a("VRow");return c(),g(P,{class:"match-height"},{default:e(()=>[t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Basic","no-padding":"",code:it},{default:e(()=>[t(s,null,{default:e(()=>[vt,i(" component can contain an avatar, content, actions and much more.")]),_:1}),t(s,null,{default:e(()=>[t(p)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Rounded","no-padding":"",code:rt},{default:e(()=>[t(s,null,{default:e(()=>[i("You can make "),bt,i(" rounded using "),gt,i(" prop.")]),_:1}),t(s,null,{default:e(()=>[t(m)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Density",code:nt,"no-padding":""},{default:e(()=>[t(s,null,{default:e(()=>[i("Use "),_t,i(" prop to adjusts the spacing within the component. Available options are: "),Vt,i(", "),ft,i(", and "),Lt,i(".")]),_:1}),t(s,null,{default:e(()=>[t(u)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Nav","no-padding":"",code:lt},{default:e(()=>[t(s,null,{default:e(()=>[i("Lists can receive an alternative "),ht,i(" styling that reduces the width "),It,i(" takes up as well as adding a border radius.")]),_:1}),t(s,null,{default:e(()=>[t(o)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Action and item group","no-padding":"",code:st},{default:e(()=>[t(s,null,{default:e(()=>[i("A "),yt,i(" list with actions. Utilizing "),At,i(", easily connect actions to your tiles.")]),_:1}),t(s,null,{default:e(()=>[t(V)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Sub Group","no-padding":"",code:pt},{default:e(()=>[t(s,null,{default:e(()=>[i(" Using the "),xt,i(" component you can create up to 2 levels in depth using the sub-group prop. ")]),_:1}),t(s,null,{default:e(()=>[t(f)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Two lines and subheader","no-padding":"",code:mt},{default:e(()=>[t(s,null,{default:e(()=>[i("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")]),_:1}),t(s,null,{default:e(()=>[t(d)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Three Line","no-padding":"",code:ut},{default:e(()=>[t(s,null,{default:e(()=>[i("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")]),_:1}),t(s,null,{default:e(()=>[t(h)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"User List","no-padding":"",code:dt},{default:e(()=>[t(s,null,{default:e(()=>[t(w)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Progress List","no-padding":"",code:ot},{default:e(()=>[t(s,null,{default:e(()=>[t(j)]),_:1})]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:e(()=>[t(l,{title:"Shaped","no-padding":"",code:ct},{default:e(()=>[t(s,null,{default:e(()=>[i(" Shaped lists have rounded borders on one side of the "),wt,i(". ")]),_:1}),t(s,null,{default:e(()=>[t(J)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Bt as default};
