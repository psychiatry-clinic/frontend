import{d as f,a as e,o as r,c as v,b as o,f as t,v as n,n as T,ak as y,s as B,e as i,r as b,g as O}from"./index-B-uKkDM3.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as $}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const S={class:"demo-space-x"},H=i("span",null,"Tooltip on Icon",-1),D=f({__name:"DemoTooltipTooltipOnVariousElements",setup(_){return(c,l)=>{const a=e("VTooltip"),p=e("VBtn"),s=e("VImg"),V=e("VAvatar"),d=e("VIcon");return r(),v("div",S,[o(p,null,{default:t(()=>[n(" Button "),o(a,{location:"top",activator:"parent"},{default:t(()=>[n(" Tooltip ")]),_:1})]),_:1}),o(V,{color:"info"},{default:t(()=>[o(s,{src:T(y)},null,8,["src"]),o(a,{location:"top",activator:"parent"},{default:t(()=>[n(" Tooltip on Avatar ")]),_:1})]),_:1}),o(a,{location:"top"},{activator:t(({props:u})=>[o(d,B(u,{size:"30",icon:"tabler-user"}),null,16)]),default:t(()=>[H]),_:1})])}}}),k={},I={class:"demo-space-x"},E=i("span",null,"Scale Transition",-1),A=i("span",null,"Scroll X Transition",-1),w=i("span",null,"Scroll Y Transition",-1);function C(_,c){const l=e("VTooltip"),a=e("VBtn");return r(),v("div",I,[o(a,null,{default:t(()=>[n(" scale transition "),o(l,{location:"top",transition:"scale-transition",activator:"parent"},{default:t(()=>[E]),_:1})]),_:1}),o(a,null,{default:t(()=>[n(" scroll X transition "),o(l,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:t(()=>[A]),_:1})]),_:1}),o(a,null,{default:t(()=>[n(" scroll y transition "),o(l,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:t(()=>[w]),_:1})]),_:1})])}const j=m(k,[["render",C]]),F={class:"demo-space-x"},X=i("span",null,"Programmatic tooltip",-1),M=f({__name:"DemoTooltipVModelSupport",setup(_){const c=b(!1);return(l,a)=>{const p=e("VBtn"),s=e("VIcon"),V=e("VTooltip");return r(),v("div",F,[o(p,{onClick:a[0]||(a[0]=d=>c.value=!T(c))},{default:t(()=>[n(" toggle tooltip ")]),_:1}),o(V,{"model-value":T(c),location:"top"},{activator:t(({props:d})=>[o(s,B(d,{icon:"tabler-brand-instagram"}),null,16)]),default:t(()=>[X]),_:1},8,["model-value"])])}}}),P={},z=i("span",null,"Open Delay On Hover",-1),N=i("span",null,"Open Delay On Hover",-1);function Y(_,c){const l=e("VTooltip"),a=e("VBtn");return r(),O(a,{variant:"outlined"},{default:t(()=>[z,n(),o(l,{"open-delay":"500",location:"top",activator:"parent"},{default:t(()=>[N]),_:1})]),_:1})}const L=m(P,[["render",Y]]),R={},U={class:"demo-space-x"},q=i("span",null,"Open On Hover",-1),G=i("span",null,"Open On click",-1),J=i("span",null,"Open On Hover + Focus",-1);function K(_,c){const l=e("VTooltip"),a=e("VBtn");return r(),v("div",U,[o(a,{variant:"outlined"},{default:t(()=>[q,o(l,{activator:"parent",location:"top"},{default:t(()=>[n(" Open On Hover ")]),_:1})]),_:1}),o(a,{variant:"outlined",color:"primary"},{default:t(()=>[G,o(l,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:t(()=>[n(" Open On click ")]),_:1})]),_:1}),o(a,{variant:"outlined"},{default:t(()=>[J,o(l,{"open-on-focus":"",location:"top",activator:"parent"},{default:t(()=>[n(" Open On Hover + Focus ")]),_:1})]),_:1})])}const Q=m(R,[["render",K]]),W={},Z={class:"demo-space-x"};function oo(_,c){const l=e("VTooltip"),a=e("VBtn");return r(),v("div",Z,[o(a,{variant:"tonal"},{default:t(()=>[n(" Tooltip on End "),o(l,{activator:"parent",location:"end"},{default:t(()=>[n(" End Tooltip ")]),_:1})]),_:1}),o(a,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Start "),o(l,{activator:"parent",location:"start"},{default:t(()=>[n(" Start Tooltip ")]),_:1})]),_:1}),o(a,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Top "),o(l,{activator:"parent",location:"top"},{default:t(()=>[n(" Top Tooltip ")]),_:1})]),_:1}),o(a,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Bottom "),o(l,{activator:"parent",location:"bottom"},{default:t(()=>[n(" Bottom Tooltip ")]),_:1})]),_:1})])}const to=m(W,[["render",oo]]),no={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},ao={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},io={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},eo={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="tabler-user"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},lo={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},po={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="tabler-brand-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},so=i("p",null,[n("Use the "),i("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),co=i("p",null,[n("Delay (in ms) after which tooltip opens (when "),i("code",null,"open-on-hover"),n(" prop is set to true)")],-1),ro=i("p",null,[n("Tooltip visibility can be programmatically changed using "),i("code",null,"v-model"),n(".")],-1),_o=i("p",null,[n("Use "),i("code",null,"transition"),n(" prop to sets the component transition.")],-1),Vo=i("p",null,"Tooltips can wrap any element.",-1),fo=f({__name:"tooltip",setup(_){return(c,l)=>{const a=to,p=$,s=e("VCol"),V=Q,d=L,u=M,h=j,g=D,x=e("VRow");return r(),O(x,null,{default:t(()=>[o(s,{cols:"12"},{default:t(()=>[o(p,{title:"Location",code:io},{default:t(()=>[so,o(a)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12"},{default:t(()=>[o(p,{title:"Events",code:ao},{default:t(()=>[o(V)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12"},{default:t(()=>[o(p,{title:"Delay On Hover",code:no},{default:t(()=>[co,o(d)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12"},{default:t(()=>[o(p,{title:"V-Model Support",code:po},{default:t(()=>[ro,o(u)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12"},{default:t(()=>[o(p,{title:"Transition",code:lo},{default:t(()=>[_o,o(h)]),_:1},8,["code"])]),_:1}),o(s,{cols:"12"},{default:t(()=>[o(p,{title:"Tooltip on Various Elements",code:eo},{default:t(()=>[Vo,o(g)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{fo as default};
