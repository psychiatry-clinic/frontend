import{_ as b}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-BGs8UniO.js";import{d as g,r as S,o as h,g as v,n as d,ad as C,a as f,f as l,b as e,w as T,s as w,ar as I,as as G,am as F,ak as D,al as W,aE as R,aD as O,bD as L,e as s,v as n}from"./index-DrFL9zv-.js";import{_ as H}from"./AppCardCode.vue_vue_type_style_index_0_lang-DkHZz7dq.js";import"./vue3-perfect-scrollbar.esm-CxbQKJsC.js";const E=g({__name:"DemoAutocompleteValidation",setup(_){const t=["foo","bar","fizz","buzz"],i=S(["foo"]),r=[a=>!!a.length||"Select at least one option."];return(a,o)=>{const u=b;return h(),v(u,{modelValue:d(i),"onUpdate:modelValue":o[0]||(o[0]=m=>C(i)?i.value=m:null),items:t,rules:r,placeholder:"Select Option",multiple:""},null,8,["modelValue"])}}}),U=g({__name:"DemoAutocompleteStateSelector",setup(_){const t=S(!1),i=S(null),r=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(a,o)=>{const u=f("VIcon"),m=f("VSlideXReverseTransition"),c=b;return h(),v(c,{modelValue:d(i),"onUpdate:modelValue":o[1]||(o[1]=p=>C(i)?i.value=p:null),hint:d(t)?"Click the icon to save":"Click the icon to edit",placeholder:"Select Your State",items:r,readonly:!d(t),label:`State — ${d(t)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"tabler-building","menu-props":{maxHeight:"200px"}},{append:l(()=>[e(m,{mode:"out-in"},{default:l(()=>[(h(),v(u,{key:`icon-${d(t)}`,color:d(t)?"success":"info",icon:d(t)?"tabler-checks":"tabler-edit-circle",onClick:o[0]||(o[0]=p=>t.value=!d(t))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"])}}}),P=g({__name:"DemoAutocompleteAsyncItems",setup(_){const t=S(!1),i=S(),r=S(null),a=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],o=S(a),u=m=>{t.value=!0,setTimeout(()=>{o.value=a.filter(c=>(c||"").toLowerCase().includes((m||"").toLowerCase())),t.value=!1},500)};return T(i,m=>{m&&m!==r.value&&u(m)}),(m,c)=>{const p=f("VAutocomplete");return h(),v(p,{modelValue:d(r),"onUpdate:modelValue":c[0]||(c[0]=A=>C(r)?r.value=A:null),search:d(i),"onUpdate:search":c[1]||(c[1]=A=>C(i)?i.value=A:null),loading:d(t),items:d(o),placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"])}}}),q=g({__name:"DemoAutocompleteSlots",setup(_){const t=S(["Sandra Adams","Britta Holt"]),i=[{name:"Sandra Adams",group:"Group 1",avatar:I},{name:"Ali Connors",group:"Group 1",avatar:G},{name:"Trevor Hansen",group:"Group 1",avatar:F},{name:"Tucker Smith",group:"Group 1",avatar:D},{name:"Britta Holt",group:"Group 2",avatar:W},{name:"Jane Smith ",group:"Group 2",avatar:R},{name:"John Smith",group:"Group 2",avatar:O},{name:"Sandra Williams",group:"Group 2",avatar:L}];return(r,a)=>{const o=f("VChip"),u=f("VListItem"),m=b;return h(),v(m,{modelValue:d(t),"onUpdate:modelValue":a[0]||(a[0]=c=>C(t)?t.value=c:null),chips:"","closable-chips":"",multiple:"",items:i,"item-title":"name","item-value":"name",placeholder:"Select User",label:"Select"},{chip:l(({props:c,item:p})=>[e(o,w(c,{"prepend-avatar":p.raw.avatar,text:p.raw.name}),null,16,["prepend-avatar","text"])]),item:l(({props:c,item:p})=>{var A,V,y;return[e(u,w(c,{"prepend-avatar":(A=p==null?void 0:p.raw)==null?void 0:A.avatar,title:(V=p==null?void 0:p.raw)==null?void 0:V.name,subtitle:(y=p==null?void 0:p.raw)==null?void 0:y.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"])}}}),$=g({__name:"DemoAutocompleteCustomFilter",setup(_){const t=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function i(r,a,o){const u=o.raw.name.toLowerCase(),m=o.raw.abbr.toLowerCase(),c=a.toLowerCase();return u.includes(c)||m.includes(c)}return(r,a)=>{const o=b;return h(),v(o,{label:"States",items:t,"custom-filter":i,"item-title":"name","item-value":"abbr",placeholder:"Select State"})}}}),z=g({__name:"DemoAutocompleteChips",setup(_){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,r)=>{const a=b;return h(),v(a,{label:"States",items:t,placeholder:"Select State",chips:"",multiple:"","closable-chips":""})}}}),Y=g({__name:"DemoAutocompleteClearable",setup(_){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,r)=>{const a=b;return h(),v(a,{label:"States",items:t,multiple:"",placeholder:"Select State",clearable:""})}}}),j=g({__name:"DemoAutocompleteMultiple",setup(_){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,r)=>{const a=b;return h(),v(a,{label:"States",items:t,placeholder:"Select State",multiple:"",eager:""})}}}),B=g({__name:"DemoAutocompleteVariant",setup(_){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,r)=>{const a=f("VAutocomplete"),o=f("VCol"),u=f("VRow");return h(),v(u,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{variant:"solo",label:"Solo",items:t,placeholder:"Select State"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{variant:"outlined",label:"Outlined",placeholder:"Select State",items:t})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{variant:"underlined",label:"Underlined",placeholder:"Select State",items:t})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{variant:"filled",label:"Filled",placeholder:"Select State",items:t})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{variant:"plain",label:"Plain",placeholder:"Select State",items:t})]),_:1})]),_:1})}}}),J=g({__name:"DemoAutocompleteDensity",setup(_){const t=S("Florida"),i=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(r,a)=>{const o=b;return h(),v(o,{modelValue:d(t),"onUpdate:modelValue":a[0]||(a[0]=u=>C(t)?t.value=u:null),label:"States",density:"compact",placeholder:"Select State",items:i},null,8,["modelValue"])}}}),K=g({__name:"DemoAutocompleteBasic",setup(_){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(i,r)=>{const a=b;return h(),v(a,{label:"States",items:t,placeholder:"Select State"})}}}),X={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},Q={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},Z={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`},ee={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},ae={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},te={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},oe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`},le={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`},se={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="tabler-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'tabler-checks' : 'tabler-edit-circle'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

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
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="tabler-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'tabler-checks' : 'tabler-edit-circle'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`},ie={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},ne={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},re=s("p",null,[n(" The "),s("code",null," v-autocomplete "),n(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1),ce=s("p",null,[n(" You can use "),s("code",null," density "),n(" prop to adjusts vertical spacing within the component. Available options are: "),s("code",null,"default"),n(", "),s("code",null,"comfortable"),n(", and "),s("code",null,"compact"),n(". ")],-1),pe=s("p",null,[n("Use "),s("code",null,"Solo"),n(", "),s("code",null,"Outlined"),n(", "),s("code",null,"Underlined"),n(", "),s("code",null,"Filled"),n(" and "),s("code",null,"Plain"),n(" options of "),s("code",null,"variant"),n(" prop to change the look of Autocomplete. ")],-1),me=s("p",null,[n("Use "),s("code",null,"multiple"),n(" prop to select multiple. Accepts array for value")],-1),ue=s("p",null,[n("Use "),s("code",null,"clearable"),n(" prop to add input clear functionality.")],-1),de=s("p",null,[n("Use "),s("code",null," chips "),n(" prop to use chips in select.")],-1),he=s("p",null,[n("The "),s("code",null," custom-filter "),n(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1),ve=s("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1),ge=s("p",null,"Sometimes you need to load data externally based upon a search query. ",-1),_e=s("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1),fe=s("p",null,[n("Use "),s("code",null,"rules"),n(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1),Ve=g({__name:"autocomplete",setup(_){return(t,i)=>{const r=K,a=H,o=f("VCol"),u=J,m=B,c=j,p=Y,A=z,V=$,y=q,x=P,k=U,M=E,N=f("VRow");return h(),v(N,{class:"match-height"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Basic",code:Q},{default:l(()=>[re,e(r)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Density",code:te},{default:l(()=>[ce,e(u)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"12"},{default:l(()=>[e(a,{title:"Variant",code:ne},{default:l(()=>[pe,e(m)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Multiple",code:oe},{default:l(()=>[me,e(c)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Clearable",code:ee},{default:l(()=>[ue,e(p)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Chips",code:Z},{default:l(()=>[de,e(A)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Custom-Filter",code:ae},{default:l(()=>[he,e(V)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Slots",code:le},{default:l(()=>[ve,e(y)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Async items",code:X},{default:l(()=>[ge,e(x)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"State Selector",code:se},{default:l(()=>[_e,e(k)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"validation",code:ie},{default:l(()=>[fe,e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ve as default};
