import{d as W,r as k,a as o,o as b,c as w,e as c,b as e,f as t,v as n,n as p,ad as v,F as f,i as x,x as g,w as D,g as C}from"./index-CJpjWKD8.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const B={class:"d-flex gap-6"},z=c("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),A=c("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. ",-1),O=c("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),U=c("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),N=W({__name:"DemoTabsVerticalPill",setup(h){const a=k("window-1");return(d,i)=>{const s=o("VIcon"),r=o("VTab"),_=o("VTabs"),m=o("VWindowItem"),V=o("VWindow"),T=o("VCardText"),l=o("VCard");return b(),w("div",B,[c("div",null,[e(_,{modelValue:p(a),"onUpdate:modelValue":i[0]||(i[0]=u=>v(a)?a.value=u:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(r,null,{default:t(()=>[e(s,{start:"",icon:"tabler-user"}),n(" Option 1 ")]),_:1}),e(r,null,{default:t(()=>[e(s,{start:"",icon:"tabler-lock"}),n(" Option 2 ")]),_:1}),e(r,null,{default:t(()=>[e(s,{start:"",icon:"tabler-access-point"}),n(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(l,null,{default:t(()=>[e(T,null,{default:t(()=>[e(V,{modelValue:p(a),"onUpdate:modelValue":i[1]||(i[1]=u=>v(a)?a.value=u:null)},{default:t(()=>[e(m,{value:"window-1"},{default:t(()=>[z,A]),_:1}),e(m,{value:"window-2"},{default:t(()=>[O]),_:1}),e(m,{value:"window-3"},{default:t(()=>[U]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}}),E="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",M=W({__name:"DemoTabsBasicPill",setup(h){const a=k("window1");return(d,i)=>{const s=o("VTab"),r=o("VTabs"),_=o("VWindowItem"),m=o("VWindow"),V=o("VCardText"),T=o("VCard");return b(),w(f,null,[e(r,{modelValue:p(a),"onUpdate:modelValue":i[0]||(i[0]=l=>v(a)?a.value=l:null),class:"v-tabs-pill"},{default:t(()=>[e(s,null,{default:t(()=>[n("Tab One")]),_:1}),e(s,null,{default:t(()=>[n("Tab Two")]),_:1}),e(s,null,{default:t(()=>[n("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(T,{class:"mt-5"},{default:t(()=>[e(V,null,{default:t(()=>[e(m,{modelValue:p(a),"onUpdate:modelValue":i[1]||(i[1]=l=>v(a)?a.value=l:null)},{default:t(()=>[(b(),w(f,null,x(3,l=>e(_,{key:`window${l}`},{default:t(()=>[n(g(E))]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}}),G=W({__name:"DemoTabsDynamic",setup(h){const a=k(3),d=k(0);return D(a,i=>{d.value=i-1}),(i,s)=>{const r=o("VTab"),_=o("VTabs"),m=o("VBtn"),V=o("VCardText"),T=o("VCard");return b(),C(T,null,{default:t(()=>[e(_,{modelValue:p(d),"onUpdate:modelValue":s[0]||(s[0]=l=>v(d)?d.value=l:null)},{default:t(()=>[(b(!0),w(f,null,x(p(a),l=>(b(),C(r,{key:l,value:l},{default:t(()=>[n(" Tab "+g(l),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(V,{class:"text-center d-flex items-center gap-y-2 flex-wrap"},{default:t(()=>[e(m,{disabled:!p(a),class:"me-4",variant:p(a)?void 0:"tonal",onClick:s[1]||(s[1]=l=>a.value--)},{default:t(()=>[n(" Remove Tab ")]),_:1},8,["disabled","variant"]),e(m,{onClick:s[2]||(s[2]=l=>a.value++)},{default:t(()=>[n(" Add Tab ")]),_:1})]),_:1})]),_:1})}}}),H={class:"d-flex justify-center gap-4 mt-3"},R="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",L=W({__name:"DemoTabsProgrammaticNavigation",setup(h){const a=k(1),d=["Appetizers","Entrees","Deserts","Cocktails"],i=d.length,s=()=>{a.value!==1&&(a.value-=1)},r=()=>{a.value!==i&&(a.value+=1)};return(_,m)=>{const V=o("VTab"),T=o("VTabs"),l=o("VWindowItem"),u=o("VWindow"),y=o("VBtn"),q=o("VCardText"),P=o("VCard");return b(),C(P,null,{default:t(()=>[e(T,{modelValue:p(a),"onUpdate:modelValue":m[0]||(m[0]=I=>v(a)?a.value=I:null),grow:""},{default:t(()=>[(b(!0),w(f,null,x(d.length,I=>(b(),C(V,{key:I,value:I},{default:t(()=>[n(g(d[I-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(q,null,{default:t(()=>[e(u,{modelValue:p(a),"onUpdate:modelValue":m[1]||(m[1]=I=>v(a)?a.value=I:null)},{default:t(()=>[(b(!0),w(f,null,x(d.length,I=>(b(),C(l,{key:I,value:I},{default:t(()=>[n(g(R))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),c("div",H,[e(y,{disabled:p(a)===1,onClick:s},{default:t(()=>[n(" Previous ")]),_:1},8,["disabled"]),e(y,{disabled:p(a)===p(i),onClick:r},{default:t(()=>[n(" Next ")]),_:1},8,["disabled"])])]),_:1})]),_:1})}}}),J="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",K=W({__name:"DemoTabsGrow",setup(h){const a=k("Appetizers"),d=["Appetizers","Entrees","Deserts","Cocktails"];return(i,s)=>{const r=o("VTab"),_=o("VTabs"),m=o("VWindowItem"),V=o("VWindow"),T=o("VCardText"),l=o("VCard");return b(),C(l,null,{default:t(()=>[e(_,{modelValue:p(a),"onUpdate:modelValue":s[0]||(s[0]=u=>v(a)?a.value=u:null),grow:""},{default:t(()=>[(b(),w(f,null,x(d,u=>e(r,{key:u},{default:t(()=>[n(g(u),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(T,null,{default:t(()=>[e(V,{modelValue:p(a),"onUpdate:modelValue":s[1]||(s[1]=u=>v(a)?a.value=u:null)},{default:t(()=>[(b(),w(f,null,x(d,u=>e(m,{key:u,value:u},{default:t(()=>[n(g(J))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),Q="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",X=W({__name:"DemoTabsFixed",setup(h){const a=k("Appetizers"),d=["Fixed Tab 1","Fixed Tab 2","Fixed Tab 3","Fixed Tab 4"];return(i,s)=>{const r=o("VTab"),_=o("VTabs"),m=o("VWindowItem"),V=o("VWindow"),T=o("VCardText"),l=o("VCard");return b(),C(l,null,{default:t(()=>[e(_,{modelValue:p(a),"onUpdate:modelValue":s[0]||(s[0]=u=>v(a)?a.value=u:null),"fixed-tabs":""},{default:t(()=>[(b(),w(f,null,x(d,u=>e(r,{key:u,value:u},{default:t(()=>[n(g(u),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(T,null,{default:t(()=>[e(V,{modelValue:p(a),"onUpdate:modelValue":s[1]||(s[1]=u=>v(a)?a.value=u:null)},{default:t(()=>[(b(),w(f,null,x(d,u=>e(m,{key:u,value:u},{default:t(()=>[n(g(Q))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),Y="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",Z=W({__name:"DemoTabsCustomIcons",setup(h){const a=k(0);return(d,i)=>{const s=o("VTab"),r=o("VTabs"),_=o("VWindowItem"),m=o("VWindow"),V=o("VCardText"),T=o("VCard");return b(),C(T,null,{default:t(()=>[e(r,{"next-icon":"tabler-arrow-right","prev-icon":"tabler-arrow-left"},{default:t(()=>[(b(),w(f,null,x(10,l=>e(s,{key:l},{default:t(()=>[n(" Item "+g(l),1)]),_:2},1024)),64))]),_:1}),e(V,null,{default:t(()=>[e(m,{modelValue:p(a),"onUpdate:modelValue":i[0]||(i[0]=l=>v(a)?a.value=l:null)},{default:t(()=>[(b(),w(f,null,x(10,l=>e(_,{key:l,value:l},{default:t(()=>[n(g(Y))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ee="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",te=W({__name:"DemoTabsPagination",setup(h){const a=k("item1");return(d,i)=>{const s=o("VTab"),r=o("VTabs"),_=o("VWindowItem"),m=o("VWindow"),V=o("VCardText"),T=o("VCard");return b(),C(T,null,{default:t(()=>[e(r,{modelValue:p(a),"onUpdate:modelValue":i[0]||(i[0]=l=>v(a)?a.value=l:null)},{default:t(()=>[(b(),w(f,null,x(10,l=>e(s,{key:l},{default:t(()=>[n(" Item "+g(l),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(V,null,{default:t(()=>[e(m,{modelValue:p(a),"onUpdate:modelValue":i[1]||(i[1]=l=>v(a)?a.value=l:null)},{default:t(()=>[(b(),w(f,null,x(10,l=>e(_,{key:l,value:`item${l}`},{default:t(()=>[n(g(ee))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ae={};function oe(h,a){const d=o("VTab"),i=o("VTabs"),s=o("VCardText"),r=o("VCard");return b(),C(r,null,{default:t(()=>[e(s,{class:"d-flex flex-column gap-4"},{default:t(()=>[c("div",null,[e(i,null,{default:t(()=>[e(d,null,{default:t(()=>[n("Home")]),_:1}),e(d,null,{default:t(()=>[n("Service")]),_:1}),e(d,null,{default:t(()=>[n("Account")]),_:1})]),_:1})]),c("div",null,[e(i,{"align-tabs":"center"},{default:t(()=>[e(d,null,{default:t(()=>[n("Home")]),_:1}),e(d,null,{default:t(()=>[n("Service")]),_:1}),e(d,null,{default:t(()=>[n("Account")]),_:1})]),_:1})]),c("div",null,[e(i,{"align-tabs":"end"},{default:t(()=>[e(d,null,{default:t(()=>[n("Home")]),_:1}),e(d,null,{default:t(()=>[n("Service")]),_:1}),e(d,null,{default:t(()=>[n("Account")]),_:1})]),_:1})])]),_:1})]),_:1})}const ne=F(ae,[["render",oe]]),se={class:"d-flex"},le=c("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),ie=c("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget. ",-1),re=c("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero. ",-1),ce=c("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper. ",-1),ue=W({__name:"DemoTabsVertical",setup(h){const a=k("tab-1");return(d,i)=>{const s=o("VIcon"),r=o("VTab"),_=o("VTabs"),m=o("VWindowItem"),V=o("VWindow"),T=o("VCardText"),l=o("VCard");return b(),C(l,null,{default:t(()=>[c("div",se,[c("div",null,[e(_,{modelValue:p(a),"onUpdate:modelValue":i[0]||(i[0]=u=>v(a)?a.value=u:null),direction:"vertical"},{default:t(()=>[e(r,null,{default:t(()=>[e(s,{start:"",icon:"tabler-user"}),n(" Option 1 ")]),_:1}),e(r,null,{default:t(()=>[e(s,{start:"",icon:"tabler-lock"}),n(" Option 2 ")]),_:1}),e(r,null,{default:t(()=>[e(s,{start:"",icon:"tabler-access-point"}),n(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(T,null,{default:t(()=>[e(V,{modelValue:p(a),"onUpdate:modelValue":i[1]||(i[1]=u=>v(a)?a.value=u:null),class:"ms-3"},{default:t(()=>[e(m,{value:"tab-1"},{default:t(()=>[le,ie]),_:1}),e(m,{value:"tab-2"},{default:t(()=>[re]),_:1}),e(m,{value:"tab-3"},{default:t(()=>[ce]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1})}}}),de=c("span",null,"Recent",-1),me=c("span",null,"Favorites",-1),be=c("span",null,"Nearby",-1),pe="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",Ve=W({__name:"DemoTabsStacked",setup(h){const a=k("tab-1");return(d,i)=>{const s=o("VIcon"),r=o("VTab"),_=o("VTabs"),m=o("VWindowItem"),V=o("VWindow"),T=o("VCardText"),l=o("VCard");return b(),C(l,null,{default:t(()=>[e(_,{modelValue:p(a),"onUpdate:modelValue":i[0]||(i[0]=u=>v(a)?a.value=u:null),grow:"",stacked:""},{default:t(()=>[e(r,null,{default:t(()=>[e(s,{icon:"tabler-phone",class:"mb-2"}),de]),_:1}),e(r,null,{default:t(()=>[e(s,{icon:"tabler-heart",class:"mb-2"}),me]),_:1}),e(r,null,{default:t(()=>[e(s,{icon:"tabler-user",class:"mb-2"}),be]),_:1})]),_:1},8,["modelValue"]),e(T,null,{default:t(()=>[e(V,{modelValue:p(a),"onUpdate:modelValue":i[1]||(i[1]=u=>v(a)?a.value=u:null)},{default:t(()=>[(b(),w(f,null,x(3,u=>e(m,{key:u,value:`tab-${u}`},{default:t(()=>[n(g(pe))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),Te="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",_e=W({__name:"DemoTabsBasic",setup(h){const a=k("item-1");return(d,i)=>{const s=o("VTab"),r=o("VTabs"),_=o("VWindowItem"),m=o("VWindow"),V=o("VCardText"),T=o("VCard");return b(),C(T,null,{default:t(()=>[e(r,{modelValue:p(a),"onUpdate:modelValue":i[0]||(i[0]=l=>v(a)?a.value=l:null)},{default:t(()=>[e(s,null,{default:t(()=>[n("Tab One")]),_:1}),e(s,null,{default:t(()=>[n("Tab Two")]),_:1}),e(s,null,{default:t(()=>[n("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(V,null,{default:t(()=>[e(m,{modelValue:p(a),"onUpdate:modelValue":i[1]||(i[1]=l=>v(a)?a.value=l:null)},{default:t(()=>[(b(),w(f,null,x(3,l=>e(_,{key:l,value:`item-${l}`},{default:t(()=>[n(g(Te))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ve={ts:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`},we={ts:`<script lang="ts" setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
          :value="\`item-\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
          :value="\`item-\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},fe={ts:`<script lang="ts" setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ce={ts:`<script setup lang="ts">
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},xe={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},ge={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Fixed Tab 1',
  'Fixed Tab 2',
  'Fixed Tab 3',
  'Fixed Tab 4',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},he={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ie={ts:`<script setup lang="ts">
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="\`item\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="\`item\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ke={ts:`<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`},We={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ye={ts:`<script setup lang="ts">
const currentTab = ref('tab-1')
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`},qe={ts:`<script setup lang="ts">
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`},Pe=c("p",null,[n("The "),c("code",null,"v-tabs"),n(" component is used for hiding content behind a selectable item.")],-1),$e=c("p",null,[n("Using "),c("code",null,"stacked"),n(" prop you can have buttons that use both icons and text.")],-1),Se=c("p",null,[n("The "),c("code",null,"vertical"),n(" prop allows for "),c("code",null,"v-tab"),n(" components to stack vertically.")],-1),De=c("p",null,[n("Use "),c("code",null,"align-tabs"),n(" prop to change the tabs alignment.")],-1),Fe=c("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),je=c("p",null,[c("code",null,"prev-icon"),n(" and "),c("code",null,"next-icon"),n(" props can be used for applying custom pagination icons.")],-1),Be=c("p",null,[n("The "),c("code",null,"fixed-tabs"),n(" prop forces "),c("code",null,"v-tab"),n(" to take up all available space up to the maximum width (300px).")],-1),ze=c("p",null,[n("The "),c("code",null,"grow"),n(" prop will make the tab items take up all available space with no limit.")],-1),Ae=c("p",null,[n("Tabs can be dynamically added and removed. This allows you to update to any number and the "),c("code",null,"v-tabs"),n(" component will react.")],-1),Oe=c("p",null,[n("Use our custom class "),c("code",null,".v-tabs-pill"),n(" along with "),c("code",null,"v-tabs"),n(" component to style pill tabs.")],-1),Ue=c("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),He=W({__name:"tabs",setup(h){return(a,d)=>{const i=_e,s=j,r=o("VCol"),_=Ve,m=ue,V=ne,T=te,l=Z,u=X,y=K,q=L,P=G,I=M,$=N,S=o("VRow");return b(),C(S,{class:"match-height"},{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Basic",variant:"outlined",code:we},{default:t(()=>[Pe,e(i)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Stacked",variant:"outlined",code:We},{default:t(()=>[$e,e(_)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Vertical",variant:"outlined",code:ye},{default:t(()=>[Se,e(m)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Alignment",variant:"outlined",code:ve},{default:t(()=>[De,e(V)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Pagination",variant:"outlined",code:Ie},{default:t(()=>[Fe,e(T)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Custom Icons",variant:"outlined",code:Ce},{default:t(()=>[je,e(l)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Fixed",variant:"outlined",code:ge},{default:t(()=>[Be,e(u)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Grow",variant:"outlined",code:he},{default:t(()=>[ze,e(y)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Programmatic Navigation",variant:"outlined",code:ke},{default:t(()=>[e(q)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Dynamic",variant:"outlined",code:xe},{default:t(()=>[Ae,e(P)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Basic Pill",variant:"outlined",code:fe},{default:t(()=>[Oe,e(I)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Vertical Pill",variant:"outlined",code:qe},{default:t(()=>[Ue,e($)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{He as default};
