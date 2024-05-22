import{_ as b}from"./AppSelect.vue_vue_type_script_setup_true_lang-C7vwUI2y.js";import{d as m,r as f,o as d,g as u,f as t,b as e,e as o,x as I,n as _,aX as v,bb as B,bc as w,b5 as x,b3 as O,b4 as k,v as s}from"./index-C3CY-prX.js";import{V as y}from"./VChip-BSs-K1HE.js";import{V as G}from"./VAvatar-BGBX0NBC.js";import{a as r,V as A}from"./VRow-BjRuvHnq.js";import{V}from"./VSelect-BVKaCiUu.js";import{_ as $}from"./AppCardCode.vue_vue_type_style_index_0_lang-B4lsb0UX.js";import"./form-CugFnRYS.js";import"./index-BQcNLqpc.js";import"./VSlideGroup-DK5JcIdv.js";import"./VImg-BCr45GCI.js";import"./index-CpwJrdpq.js";/* empty css              */import"./VTextField-CIo6VhXi.js";/* empty css                   */import"./VCounter-DZxG-lka.js";import"./VField-LnG1Q2rz.js";import"./easing-CjukEv2V.js";import"./VInput-CCeOmZGF.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-DhU1nB6G.js";import"./ssrBoot-BRGHXLCE.js";import"./createSimpleFunctional-DhRPJ1D0.js";import"./VDivider-9AgVVRzw.js";import"./dialog-transition-RPFKXBNA.js";import"./VMenu-84f7ZLqM.js";import"./VOverlay-C8NPq-JV.js";import"./lazy-CkXN8u9Z.js";import"./scopeId-Dn8fAjHo.js";import"./VCheckboxBtn-BZ-jPYZW.js";import"./VSelectionControl-DAd8dKLL.js";import"./vue3-perfect-scrollbar.esm-DdoslN_h.js";import"./VCard-B_yJTJar.js";import"./VCardText-SEYdbnGc.js";const N=m({__name:"DemoSelectSelectionSlot",setup(S){const a=[{name:"Sandra Adams",avatar:B},{name:"Ali Connors",avatar:w},{name:"Trevor Hansen",avatar:x},{name:"Tucker Smith",avatar:O},{name:"Britta Holt",avatar:k}],i=f(["Sandra Adams"]);return(p,l)=>{const c=b;return d(),u(c,{modelValue:_(i),"onUpdate:modelValue":l[0]||(l[0]=n=>v(i)?i.value=n:null),items:a,"item-title":"name","item-value":"name",label:"Select Item",placeholder:"Select Item",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:t(({item:n})=>[e(y,null,{prepend:t(()=>[e(G,{start:"",image:n.raw.avatar},null,8,["image"])]),default:t(()=>[o("span",null,I(n.title),1)]),_:2},1024)]),_:1},8,["modelValue"])}}}),j=m({__name:"DemoSelectMultiple",setup(S){const a=f(["Alabama"]),i=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(p,l)=>{const c=b;return d(),u(c,{modelValue:_(a),"onUpdate:modelValue":l[0]||(l[0]=n=>v(a)?a.value=n:null),items:i,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":"",placeholder:"Select State"},null,8,["modelValue"])}}}),T=m({__name:"DemoSelectMenuProps",setup(S){const a=["Foo","Bar","Fizz","Buzz"];return(i,p)=>{const l=b;return d(),u(l,{items:a,"menu-props":{transition:"scroll-y-transition"},label:"Label",placeholder:"Select Item"})}}}),U=m({__name:"DemoSelectChips",setup(S){const a=["foo","bar","fizz","buzz"],i=f(["foo","bar","fizz","buzz"]);return(p,l)=>{const c=b;return d(),u(c,{modelValue:_(i),"onUpdate:modelValue":l[0]||(l[0]=n=>v(i)?i.value=n:null),items:a,placeholder:"Select Item",label:"Chips",chips:"",multiple:"","closable-chips":""},null,8,["modelValue"])}}}),M=m({__name:"DemoSelectIcons",setup(S){const a=f("Florida"),i=f("Texas"),p=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(l,c)=>{const n=b;return d(),u(A,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(n,{modelValue:_(a),"onUpdate:modelValue":c[0]||(c[0]=h=>v(a)?a.value=h:null),items:p,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(n,{modelValue:_(i),"onUpdate:modelValue":c[1]||(c[1]=h=>v(i)?i.value=h:null),items:p,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1})]),_:1})}}}),R=m({__name:"DemoSelectCustomTextAndValue",setup(S){const a=f({state:"Florida",abbr:"FL"}),i=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(p,l)=>{const c=b;return d(),u(c,{modelValue:_(a),"onUpdate:modelValue":l[0]||(l[0]=n=>v(a)?a.value=n:null),hint:`${_(a).state}, ${_(a).abbr}`,items:i,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":"",placeholder:"Select State"},null,8,["modelValue","hint"])}}}),H=m({__name:"DemoSelectVariant",setup(S){const a=["Foo","Bar","Fizz","Buzz"];return(i,p)=>(d(),u(A,null,{default:t(()=>[e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Outlined",placeholder:"Select Item"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Filled",placeholder:"Select Item",variant:"filled"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Solo",placeholder:"Select Item",variant:"solo"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Plain",placeholder:"Select Item",variant:"plain"})]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(V,{items:a,label:"Underlined",variant:"underlined",placeholder:"Select Item"})]),_:1})]),_:1}))}}),L=m({__name:"DemoSelectDensity",setup(S){const a=["Foo","Bar","Fizz","Buzz"];return(i,p)=>{const l=b;return d(),u(l,{items:a,label:"Density",density:"compact",placeholder:"Select Item"})}}}),P=m({__name:"DemoSelectBasic",setup(S){const a=["Foo","Bar","Fizz","Buzz"];return(i,p)=>{const l=b;return d(),u(l,{items:a,label:"Standard",placeholder:"Select Item"})}}}),Y={ts:`<script lang="ts" setup>
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
`},E={ts:`<script lang="ts" setup>
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
`},X={ts:`<script lang="ts" setup>
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
`},q={ts:`<script lang="ts" setup>
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
`},J={ts:`<script lang="ts" setup>
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
`},K={ts:`<script lang="ts" setup>
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
`},Q={ts:`<script lang="ts" setup>
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
`},W={ts:`<script lang="ts" setup>
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
`},Z={ts:`<script lang="ts" setup>
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
`},ee=o("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),te=o("p",null,[s("You can use "),o("code",null,"density"),s(" prop to reduce the field height and lower max height of list items.")],-1),ae=o("p",null,[s(" Use "),o("code",null,"filled"),s(", "),o("code",null,"outlined"),s(", "),o("code",null,"solo"),s(", "),o("code",null,"underlined"),s(" and "),o("code",null,"plain"),s(" options of "),o("code",null,"variant"),s(" prop to change appearance of select. ")],-1),le=o("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),oe=o("p",null,[s("Use a custom "),o("code",null,"prepend"),s(" or "),o("code",null,"appended"),s(" icon.")],-1),se=o("p",null,[s("Use "),o("code",null,"chips"),s(" prop to make selected option as chip.")],-1),ie=o("p",null,[s("Custom props can be passed directly to "),o("code",null,"v-menu"),s(" using "),o("code",null,"menuProps"),s(" prop.")],-1),re=o("p",null,[s("Use "),o("code",null,"multiple"),s(" prop to select multiple option.")],-1),ne=o("p",null,[s("The "),o("code",null,"selection"),s(" slot can be used to customize the way selected values are shown in the input.")],-1),Le=m({__name:"select",setup(S){return(a,i)=>{const p=P,l=$,c=L,n=H,h=R,C=M,z=U,g=T,F=j,D=N;return d(),u(A,null,{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Basic",code:Y},{default:t(()=>[ee,e(p)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Density",code:q},{default:t(()=>[te,e(c)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{title:"Variant",code:Z},{default:t(()=>[ae,e(n)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Custom text and value",code:X},{default:t(()=>[le,e(h)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Icons",code:J},{default:t(()=>[oe,e(C)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Chips",code:E},{default:t(()=>[se,e(z)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Menu Props",code:K},{default:t(()=>[ie,e(g)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Multiple",code:Q},{default:t(()=>[re,e(F)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Selection slot",code:W},{default:t(()=>[ne,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Le as default};
