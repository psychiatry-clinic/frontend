import{V as t}from"./VChip-BK4rdGTF.js";import{V as W,a as w,b as z,d as L}from"./VList-DGHKEnZt.js";import{V as A}from"./VListItemAction-DlBTW-cb.js";import{d as x,r as u,o as c,g as h,f as i,b as e,bk as M,bl as J,v as a,aj as T,a0 as f,n as r,aX as k,c as _,bb as j,bc as N,b5 as B,b3 as R,e as l,z as g}from"./index-CG4YDle8.js";import{V as F}from"./VMenu-CimFr0Yj.js";import{_ as U}from"./AppCombobox.vue_vue_type_script_setup_true_lang-WzKaSvyK.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as I}from"./VAvatar-Cpp5lqjt.js";import{_ as Y}from"./AppCardCode.vue_vue_type_style_index_0_lang-CA-bg6dQ.js";import{a as m,V as O}from"./VRow-DQz_f7lW.js";import"./index-3yW8ycYk.js";import"./VSlideGroup-Dou1qSvD.js";import"./ssrBoot-Cols04Sp.js";import"./index-BqfGL0sV.js";import"./createSimpleFunctional-DJacVvXz.js";import"./VDivider-XAO4Isda.js";import"./VOverlay-CTys7ddd.js";import"./easing-CjukEv2V.js";import"./lazy-4Tgz6YKL.js";import"./scopeId-HaKwWatL.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-D266Airq.js";import"./form-CZkM9Veq.js";import"./VSelect-DpGjWdw8.js";import"./VTextField-C70jzcwf.js";/* empty css                   */import"./VCounter-CAk6rpva.js";import"./VField-0RQfECqQ.js";import"./VInput-BdawH32X.js";import"./VCheckboxBtn-D6KcQavv.js";import"./VSelectionControl-C1v3DFU4.js";import"./filter-DDWJXbXz.js";import"./VImg-Ceae0joh.js";import"./vue3-perfect-scrollbar.esm-BWLe2sAZ.js";import"./VCard-B4eAm_FF.js";import"./VCardText-BBHH7cpX.js";/* empty css              */const X=x({__name:"DemoChipExpandable",setup(d){const s=u(!1);return(V,p)=>(c(),h(F,{modelValue:r(s),"onUpdate:modelValue":p[1]||(p[1]=o=>k(s)?s.value=o:null),transition:"scale-transition"},{activator:i(({props:o})=>[e(t,M(J(o)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e(W,null,{default:i(()=>[e(w,null,{append:i(()=>[e(A,{class:"ms-3"},{default:i(()=>[e(T,{icon:"",variant:"text",size:"x-small",color:"default",onClick:p[0]||(p[0]=o=>s.value=!1)},{default:i(()=>[e(f,{size:"20",icon:"tabler-x"})]),_:1})]),_:1})]),default:i(()=>[e(z,{class:"mb-2"},{default:i(()=>[a(" VueJS ")]),_:1}),e(L,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),q=x({__name:"DemoChipInSelects",setup(d){const s=u(["Programming","Playing games","Sleeping"]),V=u(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(p,o)=>{const v=U;return c(),h(v,{modelValue:r(s),"onUpdate:modelValue":o[0]||(o[0]=b=>k(s)?s.value=b:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"tabler-circle-x",items:r(V),label:"Your favorite hobbies","prepend-icon":"tabler-filter"},null,8,["modelValue","items"])}}}),G={},H={class:"demo-space-x"};function K(d,s){return c(),_("div",H,[e(t,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(t,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(t,{size:"default"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(t,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const Q=y(G,[["render",K]]),Z={class:"demo-space-x"},ee=l("span",null,"John Doe",-1),ie=l("span",null,"Darcy Nooser",-1),ae=l("span",null,"Felicia Risker",-1),te=l("span",null,"Minnie Mostly",-1),le=x({__name:"DemoChipWithAvatar",setup(d){return(s,V)=>(c(),_("div",Z,[e(t,null,{default:i(()=>[e(I,{start:"",image:r(j)},null,8,["image"]),ee]),_:1}),e(t,null,{default:i(()=>[e(I,{start:"",image:r(N)},null,8,["image"]),ie]),_:1}),e(t,{pill:"",label:!1,"prepend-avatar":r(B)},{default:i(()=>[ae]),_:1},8,["prepend-avatar"]),e(t,{pill:"",label:!1},{default:i(()=>[e(I,{start:"",image:r(R)},null,8,["image"]),te]),_:1})]))}}),oe={},re={class:"demo-space-x"};function se(d,s){return c(),_("div",re,[e(t,null,{default:i(()=>[e(f,{start:"",icon:"tabler-user"}),a(" Account ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[e(f,{start:"",icon:"tabler-star"}),a(" Premium ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[e(f,{start:"",icon:"tabler-cake"}),a(" 1 Year ")]),_:1}),e(t,{color:"success"},{default:i(()=>[e(f,{start:"",icon:"tabler-bell"}),a(" Notification ")]),_:1}),e(t,{color:"info"},{default:i(()=>[e(f,{start:"",icon:"tabler-messages"}),a(" Message ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[e(f,{start:"",icon:"tabler-alert-triangle"}),a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[e(f,{start:"",icon:"tabler-alert-circle"}),a(" Error ")]),_:1})])}const ce=y(oe,[["render",se]]),ne={class:"demo-space-x"},pe=x({__name:"DemoChipClosable",setup(d){const s=u(!0),V=u(!0),p=u(!0),o=u(!0),v=u(!0),b=u(!0),S=u(!0);return(D,n)=>(c(),_("div",ne,[r(s)?(c(),h(t,{key:0,closable:"","onClick:close":n[0]||(n[0]=C=>s.value=!r(s))},{default:i(()=>[a(" Default ")]),_:1})):g("",!0),r(V)?(c(),h(t,{key:1,closable:"",color:"primary","onClick:close":n[1]||(n[1]=C=>V.value=!r(V))},{default:i(()=>[a(" Primary ")]),_:1})):g("",!0),r(p)?(c(),h(t,{key:2,closable:"",color:"secondary","onClick:close":n[2]||(n[2]=C=>p.value=!r(p))},{default:i(()=>[a(" Secondary ")]),_:1})):g("",!0),r(o)?(c(),h(t,{key:3,closable:"",color:"success","onClick:close":n[3]||(n[3]=C=>o.value=!r(o))},{default:i(()=>[a(" Success ")]),_:1})):g("",!0),r(v)?(c(),h(t,{key:4,closable:"",color:"info","onClick:close":n[4]||(n[4]=C=>v.value=!r(v))},{default:i(()=>[a(" Info ")]),_:1})):g("",!0),r(b)?(c(),h(t,{key:5,closable:"",color:"warning","onClick:close":n[5]||(n[5]=C=>b.value=!r(b))},{default:i(()=>[a(" Warning ")]),_:1})):g("",!0),r(S)?(c(),h(t,{key:6,closable:"",color:"error","onClick:close":n[6]||(n[6]=C=>S.value=!r(S))},{default:i(()=>[a(" Error ")]),_:1})):g("",!0)]))}}),de={},me={class:"demo-space-x"};function ue(d,s){return c(),_("div",me,[e(t,{label:!1},{default:i(()=>[a(" Default ")]),_:1}),e(t,{label:!1,color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{label:!1,color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{label:!1,color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{label:!1,color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{label:!1,color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{label:!1,color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const he=y(de,[["render",ue]]),Ve={},Ce={class:"demo-space-x"};function fe(d,s){return c(),_("div",Ce,[e(t,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const _e=y(Ve,[["render",fe]]),ve={},be={class:"demo-space-x"};function ge(d,s){return c(),_("div",be,[e(t,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const ye=y(ve,[["render",ge]]),Se={},xe={class:"demo-space-x"};function Ie(d,s){return c(),_("div",xe,[e(t,null,{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const De=y(Se,[["render",Ie]]),ke={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},Pe={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},$e={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},We={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`},we={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},ze={ts:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Le={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Ae={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Me={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},Je=l("p",null,[a("Use "),l("code",null,"color"),a(" prop to change the background color of chips.")],-1),Te=l("p",null,[a("Use "),l("code",null,"elevated"),a(" variant option to create filled chips.")],-1),je=l("p",null,[a("Use "),l("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),Ne=l("p",null,[a("To use the rounded chip, set "),l("code",null,"label"),a(" props value to "),l("strong",null,"false"),a(".")],-1),Be=l("p",null,[a("Closable chips can be controlled with a "),l("code",null,"v-model"),a(".")],-1),Re=l("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Fe=l("p",null,[a("Use "),l("code",null,"pill"),a(" prop to remove the "),l("code",null,"v-avatar"),a(" padding.")],-1),Ue=l("p",null,[a("The "),l("code",null,"v-chip"),a(" component can have various sizes from "),l("code",null,"x-small"),a(" to "),l("code",null,"x-large"),a(".")],-1),Ye=l("p",null,[a("Selects can use "),l("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Oe=l("p",null,[a("Chips can be combined with "),l("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),Ei=x({__name:"chip",setup(d){return(s,V)=>{const p=De,o=Y,v=ye,b=_e,S=he,D=pe,n=ce,C=le,P=Q,$=q,E=X;return c(),h(O,{class:"match-height"},{default:i(()=>[e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"Color",code:Pe},{default:i(()=>[Je,e(p)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"Elevated",code:$e},{default:i(()=>[Te,e(v)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"Outlined",code:we},{default:i(()=>[je,e(b)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"Rounded",code:ze},{default:i(()=>[Ne,e(S)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"Closable",code:ke},{default:i(()=>[Be,e(D)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"With Icon",code:Me},{default:i(()=>[Re,e(n)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"With Avatar",code:Ae},{default:i(()=>[Fe,e(C)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"Sizes",code:Le},{default:i(()=>[Ue,e(P)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"In Selects",code:We},{default:i(()=>[Ye,e($)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:i(()=>[e(o,{title:"Expandable",code:Ee},{default:i(()=>[Oe,e(E)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ei as default};
