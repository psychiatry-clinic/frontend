import{_ as v}from"./AppCombobox.vue_vue_type_script_setup_true_lang-B8WniMQE.js";import{d as C,r as g,o as f,g as h,n as d,ad as c,w as P,ai as A,a as V,f as o,b as l,v as n,e as i,x}from"./index-B-uKkDM3.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const w=C({__name:"DemoComboboxClearable",setup(y){const e=g(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const m=v;return f(),h(m,{modelValue:d(e),"onUpdate:modelValue":t[0]||(t[0]=a=>c(e)?e.value=a:null),items:s,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}}}),U=i("kbd",null,"enter",-1),L=C({__name:"DemoComboboxNoDataWithChips",setup(y){const e=["Gaming","Programming","Vue","Vuetify"],s=g(["Vuetify"]),u=g(null);return P(s,t=>{t.length>5&&A(()=>s.value.pop())}),(t,m)=>{const a=V("VListItemTitle"),b=V("VListItem"),p=v;return f(),h(p,{modelValue:d(s),"onUpdate:modelValue":m[0]||(m[0]=_=>c(s)?s.value=_:null),"search-input":d(u),"onUpdate:searchInput":m[1]||(m[1]=_=>c(u)?u.value=_:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":o(()=>[l(b,null,{default:o(()=>[l(a,null,{default:o(()=>[n(' No results matching "'),i("strong",null,x(d(u)),1),n('". Press '),U,n(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}}),R=C({__name:"DemoComboboxMultiple",setup(y){const e=g(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const m=v,a=V("VCol"),b=V("VAvatar"),p=V("VChip"),_=V("VRow");return f(),h(_,null,{default:o(()=>[l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[0]||(t[0]=r=>c(e)?e.value=r:null),items:s,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[1]||(t[1]=r=>c(e)?e.value=r:null),items:s,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[2]||(t[2]=r=>c(e)?e.value=r:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[3]||(t[3]=r=>c(e)?e.value=r:null),items:s,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:o(({item:r})=>[l(p,{size:"small"},{prepend:o(()=>[l(b,{start:"",color:"primary",size:"16"},{default:o(()=>[n(x(String(r.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:o(()=>[n(" "+x(r.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),k=C({__name:"DemoComboboxVariant",setup(y){const e=g(["Programming"]),s=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const m=V("VCombobox"),a=V("VCol"),b=V("VRow");return f(),h(b,null,{default:o(()=>[l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[0]||(t[0]=p=>c(e)?e.value=p:null),items:s,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[1]||(t[1]=p=>c(e)?e.value=p:null),multiple:"",items:s,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[2]||(t[2]=p=>c(e)?e.value=p:null),multiple:"",items:s,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[3]||(t[3]=p=>c(e)?e.value=p:null),multiple:"",items:s,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(m,{modelValue:d(e),"onUpdate:modelValue":t[4]||(t[4]=p=>c(e)?e.value=p:null),multiple:"",items:s,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1})}}}),T=C({__name:"DemoComboboxDensity",setup(y){const e=g(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const m=v;return f(),h(m,{modelValue:d(e),"onUpdate:modelValue":t[0]||(t[0]=a=>c(e)?e.value=a:null),items:s,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}}}),N=C({__name:"DemoComboboxBasic",setup(y){const e=g("Programming"),s=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const m=v;return f(),h(m,{modelValue:d(e),"onUpdate:modelValue":t[0]||(t[0]=a=>c(e)?e.value=a:null),items:s,placeholder:"deployment"},null,8,["modelValue"])}}}),$={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},S={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},j={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},z={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`},B={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},M={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},W=i("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),F=i("p",null,[n(" You can use "),i("code",null,"Density"),n(" prop to reduce combobox height and lower max height of list items. Available options are: "),i("code",null,"default"),n(", "),i("code",null,"comfortable"),n(", and "),i("code",null,"compact"),n(". ")],-1),G=i("p",null,[n("Use "),i("code",null,"solo"),n(", "),i("code",null,"outlined"),n(", "),i("code",null,"underlined"),n(", "),i("code",null,"filled"),n(" and "),i("code",null,"plain"),n(" options of "),i("code",null,"variant"),n(" prop to change the look of combobox. ")],-1),O=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),Y=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),q=i("p",null,[n("Use "),i("code",null,"clearable"),n(" prop to clear combobox.")],-1),Q=C({__name:"combobox",setup(y){return(e,s)=>{const u=N,t=D,m=V("VCol"),a=T,b=k,p=R,_=L,r=w,I=V("VRow");return f(),h(I,{class:"match-height"},{default:o(()=>[l(m,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Basic",code:$},{default:o(()=>[W,l(u)]),_:1},8,["code"])]),_:1}),l(m,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Density",code:j},{default:o(()=>[F,l(a)]),_:1},8,["code"])]),_:1}),l(m,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Variant",code:M},{default:o(()=>[G,l(b)]),_:1},8,["code"])]),_:1}),l(m,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Multiple",code:z},{default:o(()=>[O,l(p)]),_:1},8,["code"])]),_:1}),l(m,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"No data with chips",code:B},{default:o(()=>[Y,l(_)]),_:1},8,["code"])]),_:1}),l(m,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Clearable",code:S},{default:o(()=>[q,l(r)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Q as default};
