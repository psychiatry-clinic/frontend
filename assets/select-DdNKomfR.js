import{_ as f}from"./AppSelect.vue_vue_type_script_setup_true_lang-BwRU0qWF.js";import{d as p,r as h,a as _,o as m,g as d,f as a,b as e,e as s,x as I,n as b,ad as V,ar as w,as as B,am as x,ak as O,al as k,v as n}from"./index-CJpjWKD8.js";import{_ as y}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const G=p({__name:"DemoSelectSelectionSlot",setup(u){const l=[{name:"Sandra Adams",avatar:w},{name:"Ali Connors",avatar:B},{name:"Trevor Hansen",avatar:x},{name:"Tucker Smith",avatar:O},{name:"Britta Holt",avatar:k}],c=h(["Sandra Adams"]);return(r,t)=>{const o=_("VAvatar"),i=_("VChip"),v=f;return m(),d(v,{modelValue:b(c),"onUpdate:modelValue":t[0]||(t[0]=S=>V(c)?c.value=S:null),items:l,"item-title":"name","item-value":"name",label:"Select Item",placeholder:"Select Item",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:a(({item:S})=>[e(i,null,{prepend:a(()=>[e(o,{start:"",image:S.raw.avatar},null,8,["image"])]),default:a(()=>[s("span",null,I(S.title),1)]),_:2},1024)]),_:1},8,["modelValue"])}}}),$=p({__name:"DemoSelectMultiple",setup(u){const l=h(["Alabama"]),c=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(r,t)=>{const o=f;return m(),d(o,{modelValue:b(l),"onUpdate:modelValue":t[0]||(t[0]=i=>V(l)?l.value=i:null),items:c,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":"",placeholder:"Select State"},null,8,["modelValue"])}}}),N=p({__name:"DemoSelectMenuProps",setup(u){const l=["Foo","Bar","Fizz","Buzz"];return(c,r)=>{const t=f;return m(),d(t,{items:l,"menu-props":{transition:"scroll-y-transition"},label:"Label",placeholder:"Select Item"})}}}),R=p({__name:"DemoSelectChips",setup(u){const l=["foo","bar","fizz","buzz"],c=h(["foo","bar","fizz","buzz"]);return(r,t)=>{const o=f;return m(),d(o,{modelValue:b(c),"onUpdate:modelValue":t[0]||(t[0]=i=>V(c)?c.value=i:null),items:l,placeholder:"Select Item",label:"Chips",chips:"",multiple:"","closable-chips":""},null,8,["modelValue"])}}}),j=p({__name:"DemoSelectIcons",setup(u){const l=h("Florida"),c=h("Texas"),r=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(t,o)=>{const i=f,v=_("VCol"),S=_("VRow");return m(),d(S,null,{default:a(()=>[e(v,{cols:"12"},{default:a(()=>[e(i,{modelValue:b(l),"onUpdate:modelValue":o[0]||(o[0]=C=>V(l)?l.value=C:null),items:r,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1}),e(v,{cols:"12"},{default:a(()=>[e(i,{modelValue:b(c),"onUpdate:modelValue":o[1]||(o[1]=C=>V(c)?c.value=C:null),items:r,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1})]),_:1})}}}),T=p({__name:"DemoSelectCustomTextAndValue",setup(u){const l=h({state:"Florida",abbr:"FL"}),c=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(r,t)=>{const o=f;return m(),d(o,{modelValue:b(l),"onUpdate:modelValue":t[0]||(t[0]=i=>V(l)?l.value=i:null),hint:`${b(l).state}, ${b(l).abbr}`,items:c,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":"",placeholder:"Select State"},null,8,["modelValue","hint"])}}}),U=p({__name:"DemoSelectVariant",setup(u){const l=["Foo","Bar","Fizz","Buzz"];return(c,r)=>{const t=_("VSelect"),o=_("VCol"),i=_("VRow");return m(),d(i,null,{default:a(()=>[e(o,{cols:"12",sm:"6"},{default:a(()=>[e(t,{items:l,label:"Outlined",placeholder:"Select Item"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:a(()=>[e(t,{items:l,label:"Filled",placeholder:"Select Item",variant:"filled"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:a(()=>[e(t,{items:l,label:"Solo",placeholder:"Select Item",variant:"solo"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:a(()=>[e(t,{items:l,label:"Plain",placeholder:"Select Item",variant:"plain"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:a(()=>[e(t,{items:l,label:"Underlined",variant:"underlined",placeholder:"Select Item"})]),_:1})]),_:1})}}}),M=p({__name:"DemoSelectDensity",setup(u){const l=["Foo","Bar","Fizz","Buzz"];return(c,r)=>{const t=f;return m(),d(t,{items:l,label:"Density",density:"compact",placeholder:"Select Item"})}}}),H=p({__name:"DemoSelectBasic",setup(u){const l=["Foo","Bar","Fizz","Buzz"];return(c,r)=>{const t=f;return m(),d(t,{items:l,label:"Standard",placeholder:"Select Item"})}}}),L={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`},P={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`},Y={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`},E={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`},q={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`},J={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`},K={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`},Q={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`},W={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`},X=s("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),Z=s("p",null,[n("You can use "),s("code",null,"density"),n(" prop to reduce the field height and lower max height of list items.")],-1),ee=s("p",null,[n(" Use "),s("code",null,"filled"),n(", "),s("code",null,"outlined"),n(", "),s("code",null,"solo"),n(", "),s("code",null,"underlined"),n(" and "),s("code",null,"plain"),n(" options of "),s("code",null,"variant"),n(" prop to change appearance of select. ")],-1),te=s("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),ae=s("p",null,[n("Use a custom "),s("code",null,"prepend"),n(" or "),s("code",null,"appended"),n(" icon.")],-1),le=s("p",null,[n("Use "),s("code",null,"chips"),n(" prop to make selected option as chip.")],-1),oe=s("p",null,[n("Custom props can be passed directly to "),s("code",null,"v-menu"),n(" using "),s("code",null,"menuProps"),n(" prop.")],-1),se=s("p",null,[n("Use "),s("code",null,"multiple"),n(" prop to select multiple option.")],-1),ne=s("p",null,[n("The "),s("code",null,"selection"),n(" slot can be used to customize the way selected values are shown in the input.")],-1),me=p({__name:"select",setup(u){return(l,c)=>{const r=H,t=y,o=_("VCol"),i=M,v=U,S=T,C=j,A=R,z=N,g=$,F=G,D=_("VRow");return m(),d(D,null,{default:a(()=>[e(o,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Basic",code:L},{default:a(()=>[X,e(r)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Density",code:E},{default:a(()=>[Z,e(i)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:a(()=>[e(t,{title:"Variant",code:W},{default:a(()=>[ee,e(v)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Custom text and value",code:Y},{default:a(()=>[te,e(S)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Icons",code:q},{default:a(()=>[ae,e(C)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Chips",code:P},{default:a(()=>[le,e(A)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Menu Props",code:J},{default:a(()=>[oe,e(z)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Multiple",code:K},{default:a(()=>[se,e(g)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:a(()=>[e(t,{title:"Selection slot",code:Q},{default:a(()=>[ne,e(F)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{me as default};
