import{d as f,a as o,o as _,g as M,f as e,b as t,aB as r,aC as m,s as T,v as n,e as c,r as x,n as w,ar as C,ad as y,c as B,F as k,i as D,x as P}from"./index-DrFL9zv-.js";import{_ as S}from"./AppCardCode.vue_vue_type_style_index_0_lang-DkHZz7dq.js";import"./vue3-perfect-scrollbar.esm-CxbQKJsC.js";const I=c("span",null,"I am a Tooltip",-1),A=f({__name:"DemoMenuActivatorAndTooltip",setup(O){const p=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>{const s=o("VBtn"),a=o("VTooltip"),l=o("VList"),i=o("VMenu");return _(),M(i,{location:"top"},{activator:e(({props:d})=>[t(a,{location:"top"},{activator:e(({props:V})=>[t(s,r(m(T(d,V))),{default:e(()=>[n(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[I]),_:2},1024)]),default:e(()=>[t(l,{items:p})]),_:1})}}}),$=f({__name:"DemoMenuPopover",setup(O){const p=x(!1);return(v,u)=>{const s=o("VBtn"),a=o("VListItem"),l=o("VList"),i=o("VDivider"),d=o("VCardText"),V=o("IconBtn"),b=o("VCardActions"),h=o("VCard"),g=o("VMenu");return _(),M(g,{modelValue:w(p),"onUpdate:modelValue":u[0]||(u[0]=L=>y(p)?p.value=L:null),location:"top"},{activator:e(({props:L})=>[t(s,r(m(L)),{default:e(()=>[n(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(h,{"max-width":"300"},{default:e(()=>[t(l,null,{default:e(()=>[t(a,{"prepend-avatar":w(C),title:"John Leider",subtitle:"Founder of Vuetify",class:"mx-0"},null,8,["prepend-avatar"])]),_:1}),t(i),t(d,null,{default:e(()=>[n(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")]),_:1}),t(b,null,{default:e(()=>[t(V,{icon:"tabler-heart"}),t(V,{icon:"tabler-bookmark"}),t(V,{icon:"tabler-thumb-down"})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),j=f({__name:"DemoMenuOpenOnHover",setup(O){const p=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>{const s=o("VBtn"),a=o("VList"),l=o("VMenu");return _(),M(l,{"open-on-hover":""},{activator:e(({props:i})=>[t(s,r(m(i)),{default:e(()=>[n(" On hover ")]),_:2},1040)]),default:e(()=>[t(a,{items:p})]),_:1})}}}),F={class:"demo-space-x"},R=f({__name:"DemoMenuLocation",setup(O){const p=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>{const s=o("VBtn"),a=o("VList"),l=o("VMenu");return _(),B("div",F,[t(l,{location:"top"},{activator:e(({props:i})=>[t(s,r(m(i)),{default:e(()=>[n(" Top ")]),_:2},1040)]),default:e(()=>[t(a,{items:p})]),_:1}),t(l,{location:"bottom"},{activator:e(({props:i})=>[t(s,r(m(i)),{default:e(()=>[n(" Bottom ")]),_:2},1040)]),default:e(()=>[t(a,{items:p})]),_:1}),t(l,{location:"start"},{activator:e(({props:i})=>[t(s,r(m(i)),{default:e(()=>[n(" Start ")]),_:2},1040)]),default:e(()=>[t(a,{items:p})]),_:1}),t(l,{location:"end"},{activator:e(({props:i})=>[t(s,r(m(i)),{default:e(()=>[n(" End ")]),_:2},1040)]),default:e(()=>[t(a,{items:p})]),_:1})])}}}),E={class:"demo-space-x"},G=f({__name:"DemoMenuCustomTransitions",setup(O){const p=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(v,u)=>{const s=o("VBtn"),a=o("VList"),l=o("VMenu");return _(),B("div",E,[t(l,{transition:"scale-transition"},{activator:e(({props:i})=>[t(s,r(m(i)),{default:e(()=>[n(" Scale Transition ")]),_:2},1040)]),default:e(()=>[t(a,{items:p})]),_:1}),t(l,{transition:"slide-x-transition"},{activator:e(({props:i})=>[t(s,r(m(i)),{default:e(()=>[n(" Slide X Transition ")]),_:2},1040)]),default:e(()=>[t(a,{items:p})]),_:1}),t(l,{transition:"slide-y-transition"},{activator:e(({props:i})=>[t(s,r(m(i)),{default:e(()=>[n(" Slide Y Transition ")]),_:2},1040)]),default:e(()=>[t(a,{items:p})]),_:1})])}}}),H={class:"demo-space-x"},J=f({__name:"DemoMenuBasic",setup(O){const p=["primary","secondary","success","info","warning","error"],v=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(u,s)=>{const a=o("VBtn"),l=o("VList"),i=o("VMenu");return _(),B("div",H,[(_(),B(k,null,D(p,d=>t(i,{key:d},{activator:e(({props:V})=>[t(a,T({color:d},V),{default:e(()=>[n(P(d),1)]),_:2},1040,["color"])]),default:e(()=>[t(l,{items:v})]),_:2},1024)),64))])}}}),N={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},X={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Y={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},U={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},z={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},W={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},q=c("p",null," Remember to put the element that activates the menu in the activator slot. ",-1),K=c("p",null,[n("Vuetify comes with 3 standard transitions, "),c("code",null,"scale"),n(", "),c("code",null,"slide-x"),n(" and "),c("code",null,"slide-y"),n(". Use "),c("code",null,"transition"),n(" prop to add transition to a menu.")],-1),Q=c("p",null,[n("Menu can be offset relative to the activator by using the "),c("code",null,"location"),n(" prop.")],-1),Z=c("p",null,[n("Menus can be accessed using hover instead of clicking with the "),c("code",null,"open-on-hover"),n(" prop.")],-1),tt=c("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1),et=c("p",null,[n("With the new "),c("code",null,"v-slot"),n(" syntax, nested activators such as those seen with a "),c("code",null,"v-menu"),n(" and "),c("code",null,"v-tooltip"),n(" attached to the same activator button, need a particular setup in order to function correctly")],-1),it=f({__name:"menu",setup(O){return(p,v)=>{const u=J,s=S,a=o("VCol"),l=G,i=R,d=j,V=$,b=A,h=o("VRow");return _(),M(h,{class:"match-height"},{default:e(()=>[t(a,{cols:"12",md:"6"},{default:e(()=>[t(s,{title:"Basic",code:X},{default:e(()=>[q,t(u)]),_:1},8,["code"])]),_:1}),t(a,{cols:"12",md:"6"},{default:e(()=>[t(s,{title:"Custom transitions",code:Y},{default:e(()=>[K,t(l)]),_:1},8,["code"])]),_:1}),t(a,{cols:"12",md:"6"},{default:e(()=>[t(s,{title:"Location",code:U},{default:e(()=>[Q,t(i)]),_:1},8,["code"])]),_:1}),t(a,{cols:"12",md:"6"},{default:e(()=>[t(s,{title:"Open on hover",code:z},{default:e(()=>[Z,t(d)]),_:1},8,["code"])]),_:1}),t(a,{cols:"12",md:"6"},{default:e(()=>[t(s,{title:"Popover",code:W},{default:e(()=>[tt,t(V)]),_:1},8,["code"])]),_:1}),t(a,{cols:"12",md:"6"},{default:e(()=>[t(s,{title:"Activator and tooltip",code:N},{default:e(()=>[et,t(b)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{it as default};
