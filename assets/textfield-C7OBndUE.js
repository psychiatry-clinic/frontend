import{_ as g}from"./AppTextField.vue_vue_type_script_setup_true_lang-CcB8QWg0.js";import{V as D}from"./VNodeRenderer-B3ZFlGSo.js";import{d as w,r as f,a as m,o as u,g as _,f as l,b as e,s as U,v as n,n as p,I as S,c as q,z as j,ad as v,e as o}from"./index-CJpjWKD8.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as H,e as N}from"./validators-DR7cptrM.js";import{_ as z}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./helpers-BGv4x_9E.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const B={key:0,class:"ms-3"},L=w({__name:"DemoTextfieldIconSlots",setup(h){const s=f("Hey!"),t=f(!1),r=()=>{t.value=!0,s.value="Wait for it...",setTimeout(()=>{t.value=!1,s.value="You've clicked me!"},2e3)};return(a,c)=>{const i=m("VIcon"),d=m("VTooltip"),V=m("VProgressCircular"),x=m("VFadeTransition"),b=m("VBtn"),T=g;return u(),_(T,{modelValue:p(s),"onUpdate:modelValue":c[0]||(c[0]=y=>v(s)?s.value=y:null),clearable:"",label:"Message",placeholder:"Hey!!",type:"text",class:"textfield-demo-icon-slot"},{prepend:l(()=>[e(d,{location:"bottom"},{activator:l(({props:y})=>[e(i,U(y,{icon:"tabler-help"}),null,16)]),default:l(()=>[n(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(x,{"leave-absolute":""},{default:l(()=>[p(t)?(u(),_(V,{key:0,color:"primary",width:"3",size:"24",indeterminate:""})):(u(),_(p(D),{key:1,class:"text-2xl",nodes:p(S).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(b,{icon:a.$vuetify.display.smAndDown,onClick:r},{default:l(()=>[e(i,{icon:"tabler-viewfinder",color:"#fff",size:"22"}),a.$vuetify.display.mdAndUp?(u(),q("span",B,"Click me")):j("",!0)]),_:1},8,["icon"])]),_:1},8,["modelValue"])}}}),E=C(L,[["__scopeId","data-v-40143328"]]),W=w({__name:"DemoTextfieldPasswordInput",setup(h){const s=f(!1),t=f(!0),r=f("Password"),a=f("wqfasds"),c={required:i=>!!i||"Required.",min:i=>i.length>=8||"Min 8 characters"};return(i,d)=>{const V=g,x=m("VCol"),b=m("VRow");return u(),_(b,null,{default:l(()=>[e(x,{cols:"12",sm:"6"},{default:l(()=>[e(V,{modelValue:p(r),"onUpdate:modelValue":d[0]||(d[0]=T=>v(r)?r.value=T:null),"append-inner-icon":p(s)?"tabler-eye-off":"tabler-eye",rules:[c.required,c.min],type:p(s)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":d[1]||(d[1]=T=>s.value=!p(s))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(x,{cols:"12",sm:"6"},{default:l(()=>[e(V,{modelValue:p(a),"onUpdate:modelValue":d[2]||(d[2]=T=>v(a)?a.value=T:null),rules:[c.required,c.min],"append-inner-icon":p(t)?"tabler-eye-off":"tabler-eye",type:p(t)?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":d[3]||(d[3]=T=>t.value=!p(t))},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1})}}}),Y={},O=o("strong",null,"icon",-1);function G(h,s){const t=m("VIcon"),r=g;return u(),_(r,null,{label:l(()=>[n(" What about  "),O,n(" here? "),e(t,{icon:"tabler-file-search"})]),_:1})}const J=C(Y,[["render",G]]),K=w({__name:"DemoTextfieldIconEvents",setup(h){const s=f("Hey!"),t=f(!0),r=f(0),a=()=>{t.value=!t.value},c=()=>{s.value=""},i=()=>{r.value=0},d=()=>{i(),c()};return(V,x)=>{const b=g;return u(),_(b,{modelValue:p(s),"onUpdate:modelValue":x[0]||(x[0]=T=>v(s)?s.value=T:null),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"tabler-circle-x","append-icon":p(s)?V.$vuetify.locale.isRtl?"tabler-arrow-big-left-lines":"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":p(t)?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":a,"onClick:append":d,"onClick:clear":c},null,8,["modelValue","append-icon","append-inner-icon"])}}}),Q=w({__name:"DemoTextfieldValidation",setup(h){const s=f("");return(t,r)=>{const a=g,c=m("VForm");return u(),_(c,null,{default:l(()=>[e(a,{modelValue:p(s),"onUpdate:modelValue":r[0]||(r[0]=i=>v(s)?s.value=i:null),rules:["requiredValidator"in t?t.requiredValidator:p(H),"emailValidator"in t?t.emailValidator:p(N)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}}}),X={};function Z(h,s){const t=g;return u(),_(t,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const ee=C(X,[["render",Z]]),le=w({__name:"DemoTextfieldPrefixesAndSuffixes",setup(h){const s=f(10.05),t=f(28.02),r=f("example"),a=f("04:56");return(c,i)=>{const d=g,V=m("VCol"),x=m("VRow");return u(),_(x,null,{default:l(()=>[e(V,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(s),"onUpdate:modelValue":i[0]||(i[0]=b=>v(s)?s.value=b:null),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(t),"onUpdate:modelValue":i[1]||(i[1]=b=>v(t)?t.value=b:null),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(r),"onUpdate:modelValue":i[2]||(i[2]=b=>v(r)?r.value=b:null),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:l(()=>[e(d,{modelValue:p(a),"onUpdate:modelValue":i[3]||(i[3]=b=>v(a)?a.value=b:null),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1})}}}),te={};function oe(h,s){const t=g,r=m("VCol"),a=m("VRow");return u(),_(a,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(t,{label:"Prepend","prepend-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(t,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(t,{label:"Append","append-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(t,{label:"Append Inner","append-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const ne=C(te,[["render",oe]]),ae={};function se(h,s){const t=g;return u(),_(t,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const re=C(ae,[["render",se]]),ce={};function ie(h,s){const t=g;return u(),_(t,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const pe=C(ce,[["render",ie]]),de=w({__name:"DemoTextfieldCounter",setup(h){const s=f("Preliminary report"),t=f("California is a state in the western United States"),r=[a=>a.length<=25||"Max 25 characters"];return(a,c)=>{const i=g,d=m("VCol"),V=m("VRow");return u(),_(V,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(i,{modelValue:p(s),"onUpdate:modelValue":c[0]||(c[0]=x=>v(s)?s.value=x:null),rules:r,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(i,{modelValue:p(t),"onUpdate:modelValue":c[1]||(c[1]=x=>v(t)?t.value=x:null),rules:r,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}}}),me={};function ue(h,s){const t=g,r=m("VCol"),a=m("VRow");return u(),_(a,null,{default:l(()=>[e(r,null,{default:l(()=>[e(t,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(t,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const _e=C(me,[["render",ue]]),fe={};function he(h,s){const t=m("VTextField"),r=m("VCol"),a=m("VRow");return u(),_(a,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Outlined",variant:"outlined"})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Filled",variant:"filled"})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Solo",variant:"solo"})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Plain",variant:"plain"})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(t,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const Ve=C(fe,[["render",he]]),xe={};function be(h,s){const t=g;return u(),_(t,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const ge=C(xe,[["render",be]]),Te={};function ve(h,s){const t=g;return u(),_(t,{label:"Regular",placeholder:"Placeholder Text"})}const Ce=C(Te,[["render",ve]]),we={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},ye={ts:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},Fe={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},Pe={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},ke={ts:`<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="tabler-viewfinder"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="tabler-viewfinder"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`},Ie={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},$e={ts:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`,js:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`},Me={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},De={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},Se={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},qe={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},je={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},He=o("p",null,"Text fields components are used for collecting user provided information.",-1),Ne=o("p",null,[n("The "),o("code",null,"density"),n(" prop decreases the height of the text field based upon levels of density; "),o("code",null,"default"),n(","),o("code",null,"comfortable"),n(", and "),o("code",null,"compact"),n(".")],-1),ze=o("p",null,[n("Use "),o("code",null,"solo"),n(", "),o("code",null,"filled"),n(", "),o("code",null,"outlined"),n(", "),o("code",null,"plain"),n(" and "),o("code",null,"underlined"),n(" option of "),o("code",null,"variant"),n(" prop to change the look of the textfield. ")],-1),Be=o("p",null,"Text fields can be disabled or readonly.",-1),Le=o("p",null,[n("Use a "),o("code",null,"counter"),n(" prop to inform a user of the character limit.")],-1),Ee=o("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),We=o("p",null,[n("Use "),o("code",null,"color"),n(" prop to change the input border color.")],-1),Ye=o("p",null,[n("You can add icons to the text field with "),o("code",null,"prepend-icon"),n(", "),o("code",null,"append-icon"),n(" and "),o("code",null,"append-inner-icon"),n(" and "),o("code",null,"prepend-inner-icon"),n(" props.")],-1),Oe=o("p",null,[n("The "),o("code",null,"prefix"),n(" and "),o("code",null,"suffix"),n(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Ge=o("p",null,[o("code",null,"single-line"),n(" text fields do not float their label on focus or with data.")],-1),Je=o("p",null,[n("Vuetify includes simple validation through the "),o("code",null,"rules"),n(" prop.")],-1),Ke=o("p",null,[o("code",null,"click:prepend"),n(", "),o("code",null,"click:append"),n(", "),o("code",null,"click:append-inner"),n(", and "),o("code",null,"click:clear"),n(" will be emitted when you click on the respective icon")],-1),Qe=o("p",null,[n("Text field label can be defined in "),o("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1),Xe=o("p",null,[n("Using the HTML input "),o("code",null,"type"),n(" password can be used with an appended icon and callback to control the visibility.")],-1),Ze=o("p",null,[n("Instead of using "),o("code",null,"prepend"),n("/"),o("code",null,"append"),n("/"),o("code",null,"append-inner"),n(" icons you can use slots to extend input's functionality.")],-1),cl=w({__name:"textfield",setup(h){return(s,t)=>{const r=Ce,a=z,c=m("VCol"),i=ge,d=Ve,V=_e,x=de,b=pe,T=re,y=ne,F=le,A=ee,P=Q,R=K,k=J,I=W,$=E,M=m("VRow");return u(),_(M,{class:"match-height"},{default:l(()=>[e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Basic",code:we},{default:l(()=>[He,e(r)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Density",code:Pe},{default:l(()=>[Ne,e(i)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(a,{title:"Variant",code:je},{default:l(()=>[ze,e(d)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"State",code:Se},{default:l(()=>[Be,e(V)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Counter",code:Fe},{default:l(()=>[Le,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Clearable",code:ye},{default:l(()=>[Ee,e(b)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Custom Colors",code:Ae},{default:l(()=>[We,e(T)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icons",code:Ie},{default:l(()=>[Ye,e(y)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Prefixes and suffixes",code:De},{default:l(()=>[Oe,e(F)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Single line",code:Ue},{default:l(()=>[Ge,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Validation",code:qe},{default:l(()=>[Je,e(P)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon events",code:Re},{default:l(()=>[Ke,e(R)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Label Slot",code:$e},{default:l(()=>[Qe,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Password input",code:Me},{default:l(()=>[Xe,e(I)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon slots",code:ke},{default:l(()=>[Ze,e($)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{cl as default};
