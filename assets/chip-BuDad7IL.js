import{d as I,r as C,a as n,o as h,g as f,f as i,b as e,aB as E,aC as W,v as a,n as r,ad as k,c as v,ar as w,as as L,am as z,ak as A,e as o,z as g}from"./index-CJpjWKD8.js";import{_ as M}from"./AppCombobox.vue_vue_type_script_setup_true_lang-CRIn0qhE.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const J=I({__name:"DemoChipExpandable",setup(u){const c=C(!1);return(t,s)=>{const l=n("VChip"),p=n("VListItemTitle"),_=n("VListItemSubtitle"),b=n("VIcon"),x=n("VBtn"),V=n("VListItemAction"),d=n("VListItem"),m=n("VList"),D=n("VMenu");return h(),f(D,{modelValue:r(c),"onUpdate:modelValue":s[1]||(s[1]=y=>k(c)?c.value=y:null),transition:"scale-transition"},{activator:i(({props:y})=>[e(l,E(W(y)),{default:i(()=>[a(" VueJS ")]),_:2},1040)]),default:i(()=>[e(m,null,{default:i(()=>[e(d,null,{append:i(()=>[e(V,{class:"ms-3"},{default:i(()=>[e(x,{icon:"",variant:"text",size:"x-small",color:"default",onClick:s[0]||(s[0]=y=>c.value=!1)},{default:i(()=>[e(b,{size:"20",icon:"tabler-x"})]),_:1})]),_:1})]),default:i(()=>[e(p,{class:"mb-2"},{default:i(()=>[a(" VueJS ")]),_:1}),e(_,null,{default:i(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),B=I({__name:"DemoChipInSelects",setup(u){const c=C(["Programming","Playing games","Sleeping"]),t=C(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(s,l)=>{const p=M;return h(),f(p,{modelValue:r(c),"onUpdate:modelValue":l[0]||(l[0]=_=>k(c)?c.value=_:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"tabler-circle-x",items:r(t),label:"Your favorite hobbies","prepend-icon":"tabler-filter"},null,8,["modelValue","items"])}}}),j={},N={class:"demo-space-x"};function R(u,c){const t=n("VChip");return h(),v("div",N,[e(t,{size:"x-small"},{default:i(()=>[a(" x-small chip ")]),_:1}),e(t,{size:"small"},{default:i(()=>[a(" small chip ")]),_:1}),e(t,{size:"default"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{size:"large"},{default:i(()=>[a(" large chip ")]),_:1}),e(t,{size:"x-large"},{default:i(()=>[a(" x-large chip ")]),_:1})])}const F=S(j,[["render",R]]),U={class:"demo-space-x"},Y=o("span",null,"John Doe",-1),O=o("span",null,"Darcy Nooser",-1),q=o("span",null,"Felicia Risker",-1),G=o("span",null,"Minnie Mostly",-1),H=I({__name:"DemoChipWithAvatar",setup(u){return(c,t)=>{const s=n("VAvatar"),l=n("VChip");return h(),v("div",U,[e(l,null,{default:i(()=>[e(s,{start:"",image:r(w)},null,8,["image"]),Y]),_:1}),e(l,null,{default:i(()=>[e(s,{start:"",image:r(L)},null,8,["image"]),O]),_:1}),e(l,{pill:"",label:!1,"prepend-avatar":r(z)},{default:i(()=>[q]),_:1},8,["prepend-avatar"]),e(l,{pill:"",label:!1},{default:i(()=>[e(s,{start:"",image:r(A)},null,8,["image"]),G]),_:1})])}}}),K={},Q={class:"demo-space-x"};function X(u,c){const t=n("VIcon"),s=n("VChip");return h(),v("div",Q,[e(s,null,{default:i(()=>[e(t,{start:"",icon:"tabler-user"}),a(" Account ")]),_:1}),e(s,{color:"primary"},{default:i(()=>[e(t,{start:"",icon:"tabler-star"}),a(" Premium ")]),_:1}),e(s,{color:"secondary"},{default:i(()=>[e(t,{start:"",icon:"tabler-cake"}),a(" 1 Year ")]),_:1}),e(s,{color:"success"},{default:i(()=>[e(t,{start:"",icon:"tabler-bell"}),a(" Notification ")]),_:1}),e(s,{color:"info"},{default:i(()=>[e(t,{start:"",icon:"tabler-messages"}),a(" Message ")]),_:1}),e(s,{color:"warning"},{default:i(()=>[e(t,{start:"",icon:"tabler-alert-triangle"}),a(" Warning ")]),_:1}),e(s,{color:"error"},{default:i(()=>[e(t,{start:"",icon:"tabler-alert-circle"}),a(" Error ")]),_:1})])}const Z=S(K,[["render",X]]),ee={class:"demo-space-x"},ie=I({__name:"DemoChipClosable",setup(u){const c=C(!0),t=C(!0),s=C(!0),l=C(!0),p=C(!0),_=C(!0),b=C(!0);return(x,V)=>{const d=n("VChip");return h(),v("div",ee,[r(c)?(h(),f(d,{key:0,closable:"","onClick:close":V[0]||(V[0]=m=>c.value=!r(c))},{default:i(()=>[a(" Default ")]),_:1})):g("",!0),r(t)?(h(),f(d,{key:1,closable:"",color:"primary","onClick:close":V[1]||(V[1]=m=>t.value=!r(t))},{default:i(()=>[a(" Primary ")]),_:1})):g("",!0),r(s)?(h(),f(d,{key:2,closable:"",color:"secondary","onClick:close":V[2]||(V[2]=m=>s.value=!r(s))},{default:i(()=>[a(" Secondary ")]),_:1})):g("",!0),r(l)?(h(),f(d,{key:3,closable:"",color:"success","onClick:close":V[3]||(V[3]=m=>l.value=!r(l))},{default:i(()=>[a(" Success ")]),_:1})):g("",!0),r(p)?(h(),f(d,{key:4,closable:"",color:"info","onClick:close":V[4]||(V[4]=m=>p.value=!r(p))},{default:i(()=>[a(" Info ")]),_:1})):g("",!0),r(_)?(h(),f(d,{key:5,closable:"",color:"warning","onClick:close":V[5]||(V[5]=m=>_.value=!r(_))},{default:i(()=>[a(" Warning ")]),_:1})):g("",!0),r(b)?(h(),f(d,{key:6,closable:"",color:"error","onClick:close":V[6]||(V[6]=m=>b.value=!r(b))},{default:i(()=>[a(" Error ")]),_:1})):g("",!0)])}}}),ae={},te={class:"demo-space-x"};function oe(u,c){const t=n("VChip");return h(),v("div",te,[e(t,{label:!1},{default:i(()=>[a(" Default ")]),_:1}),e(t,{label:!1,color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{label:!1,color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{label:!1,color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{label:!1,color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{label:!1,color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{label:!1,color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const le=S(ae,[["render",oe]]),se={},re={class:"demo-space-x"};function ne(u,c){const t=n("VChip");return h(),v("div",re,[e(t,{variant:"outlined"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"outlined"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"outlined"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"outlined"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"outlined"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"outlined"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"outlined"},{default:i(()=>[a(" Error ")]),_:1})])}const ce=S(se,[["render",ne]]),pe={},Ve={class:"demo-space-x"};function he(u,c){const t=n("VChip");return h(),v("div",Ve,[e(t,{variant:"elevated"},{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary",variant:"elevated"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary",variant:"elevated"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success",variant:"elevated"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info",variant:"elevated"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning",variant:"elevated"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error",variant:"elevated"},{default:i(()=>[a(" Error ")]),_:1})])}const de=S(pe,[["render",he]]),ue={},me={class:"demo-space-x"};function Ce(u,c){const t=n("VChip");return h(),v("div",me,[e(t,null,{default:i(()=>[a(" Default ")]),_:1}),e(t,{color:"primary"},{default:i(()=>[a(" Primary ")]),_:1}),e(t,{color:"secondary"},{default:i(()=>[a(" Secondary ")]),_:1}),e(t,{color:"success"},{default:i(()=>[a(" Success ")]),_:1}),e(t,{color:"info"},{default:i(()=>[a(" Info ")]),_:1}),e(t,{color:"warning"},{default:i(()=>[a(" Warning ")]),_:1}),e(t,{color:"error"},{default:i(()=>[a(" Error ")]),_:1})])}const fe=S(ue,[["render",Ce]]),_e={ts:`<script lang="ts" setup>
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
`},ve={ts:`<template>
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
`},be={ts:`<template>
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
`},ge={ts:`<script lang="ts" setup>
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
`},ye={ts:`<script lang="ts" setup>
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
`},Se={ts:`<template>
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
`},Ie={ts:`<template>
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
`},xe={ts:`<template>
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
`},De={ts:`<script setup lang="ts">
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
`},ke={ts:`<template>
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
`},Pe=o("p",null,[a("Use "),o("code",null,"color"),a(" prop to change the background color of chips.")],-1),$e=o("p",null,[a("Use "),o("code",null,"elevated"),a(" variant option to create filled chips.")],-1),Ee=o("p",null,[a("Use "),o("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),We=o("p",null,[a("To use the rounded chip, set "),o("code",null,"label"),a(" props value to "),o("strong",null,"false"),a(".")],-1),we=o("p",null,[a("Closable chips can be controlled with a "),o("code",null,"v-model"),a(".")],-1),Le=o("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),ze=o("p",null,[a("Use "),o("code",null,"pill"),a(" prop to remove the "),o("code",null,"v-avatar"),a(" padding.")],-1),Ae=o("p",null,[a("The "),o("code",null,"v-chip"),a(" component can have various sizes from "),o("code",null,"x-small"),a(" to "),o("code",null,"x-large"),a(".")],-1),Me=o("p",null,[a("Selects can use "),o("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Te=o("p",null,[a("Chips can be combined with "),o("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),Fe=I({__name:"chip",setup(u){return(c,t)=>{const s=fe,l=T,p=n("VCol"),_=de,b=ce,x=le,V=ie,d=Z,m=H,D=F,y=B,P=J,$=n("VRow");return h(),f($,{class:"match-height"},{default:i(()=>[e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Color",code:ve},{default:i(()=>[Pe,e(s)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Elevated",code:be},{default:i(()=>[$e,e(_)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Outlined",code:Se},{default:i(()=>[Ee,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Rounded",code:Ie},{default:i(()=>[We,e(x)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Closable",code:_e},{default:i(()=>[we,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Icon",code:ke},{default:i(()=>[Le,e(d)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"With Avatar",code:De},{default:i(()=>[ze,e(m)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Sizes",code:xe},{default:i(()=>[Ae,e(D)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"In Selects",code:ye},{default:i(()=>[Me,e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:i(()=>[e(l,{title:"Expandable",code:ge},{default:i(()=>[Te,e(P)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Fe as default};
