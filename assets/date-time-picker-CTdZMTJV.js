import{_ as s}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-Cxp_RT82.js";import{d as r,r as u,o as i,g as p,n as c,ad as _,a as T,f as n,b as l}from"./index-CJpjWKD8.js";import{_ as A}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./transition-BI7WufZN.js";import"./form-WeJO4c57.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const F=r({__name:"DemoDateTimePickerInline",setup(d){const e=u("");return(m,a)=>{const t=s;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Inline",placeholder:"Select Date",config:{inline:!0}},null,8,["modelValue"])}}}),S=r({__name:"DemoDateTimePickerDisabledRange",setup(d){const e=new Date,m=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=u("");return(o,D)=>{const f=s;return i(),p(f,{modelValue:c(t),"onUpdate:modelValue":D[0]||(D[0]=g=>_(t)?t.value=g:null),label:"Disabled Range",placeholder:"Select date",config:{dateFormat:"Y-m-d",disable:[{from:`${c(a)}-${c(m)}-20`,to:`${c(a)}-${c(m)}-25`}]}},null,8,["modelValue","config"])}}}),v=r({__name:"DemoDateTimePickerHumanFriendly",setup(d){const e=u("");return(m,a)=>{const t=s;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Human Friendly",placeholder:"Select date",config:{dateFormat:"F j, Y"}},null,8,["modelValue"])}}}),Y=r({__name:"DemoDateTimePickerRange",setup(d){const e=u("");return(m,a)=>{const t=s;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Range",placeholder:"Select date",config:{mode:"range"}},null,8,["modelValue"])}}}),$=r({__name:"DemoDateTimePickerMultipleDates",setup(d){const e=u("");return(m,a)=>{const t=s;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Multiple Dates",placeholder:"Select date",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}}),R=r({__name:"DemoDateTimePickerDateAndTime",setup(d){const e=u("");return(m,a)=>{const t=s;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Date & TIme",placeholder:"Select date and time",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])}}}),w=r({__name:"DemoDateTimePickerTimePicker",setup(d){const e=u("");return(m,a)=>{const t=s;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Time picker",placeholder:"Select time",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])}}}),M=r({__name:"DemoDateTimePickerBasic",setup(d){const e=u("");return(m,a)=>{const t=s;return i(),p(t,{modelValue:c(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Default",placeholder:"Select date"},null,8,["modelValue"])}}}),H={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="Select date"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="Select date"
  />
</template>
`},j={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="Select date and time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="Select date and time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="Select date"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="Select date"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},C={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="Select date"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="Select date"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`},I={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
  />
</template>
`},U={ts:`<script setup lang="ts">
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},y={ts:`<script setup lang="ts">
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
  />
</template>
`},B={ts:`<script setup lang="ts">
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="Select time"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="Select time"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},J=r({__name:"date-time-picker",setup(d){return(e,m)=>{const a=M,t=A,o=T("VCol"),D=w,f=R,g=$,k=Y,P=v,b=S,h=F,V=T("VRow");return i(),p(V,null,{default:n(()=>[l(o,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Basic",code:H},{default:n(()=>[l(a)]),_:1},8,["code"])]),_:1}),l(o,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Time Picker",code:B},{default:n(()=>[l(D)]),_:1},8,["code"])]),_:1}),l(o,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Date and Time",code:j},{default:n(()=>[l(f)]),_:1},8,["code"])]),_:1}),l(o,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Multiple Dates",code:U},{default:n(()=>[l(g)]),_:1},8,["code"])]),_:1}),l(o,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Range",code:y},{default:n(()=>[l(k)]),_:1},8,["code"])]),_:1}),l(o,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Human Friendly",code:C},{default:n(()=>[l(P)]),_:1},8,["code"])]),_:1}),l(o,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Disabled Range",code:x},{default:n(()=>[l(b)]),_:1},8,["code"])]),_:1}),l(o,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Inline",code:I},{default:n(()=>[l(h)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{J as default};
