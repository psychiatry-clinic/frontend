import{_ as h,V as _}from"./AppCombobox.vue_vue_type_script_setup_true_lang-CyKeCRcg.js";import{d as b,r as u,o as V,g,n as r,aX as d,w as P,b0 as A,f as o,b as l,v as i,e as n,x as y}from"./index-C5WQT9Zq.js";import{a as D,b as w}from"./VList-C-vtgxvY.js";import{a as p,V as v}from"./VRow-DRZjcEyV.js";import{V as U}from"./VChip-CKqHp6FM.js";import{V as L}from"./VAvatar-7v6WnYoP.js";import{_ as k}from"./AppCardCode.vue_vue_type_style_index_0_lang-B5PLLjDm.js";import"./form-DZjWB9DY.js";import"./VSelect-QLnwBfw_.js";import"./VTextField-C6MDyt68.js";/* empty css                   */import"./VCounter-QYLqHjuy.js";import"./index-DZvt-9Pr.js";import"./index-CK4sZXkx.js";import"./VField-BE7mYYdn.js";import"./easing-CjukEv2V.js";import"./VInput-D6PwPnL5.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-D0QLIQjY.js";import"./VMenu-fu_cvwHm.js";import"./VOverlay-DdBE7t30.js";import"./lazy-CFIHLmxg.js";import"./scopeId-B1B_DOqA.js";import"./VCheckboxBtn-qHKcB-5X.js";import"./VSelectionControl-CtZGpdA_.js";import"./filter-DIAkksj9.js";import"./ssrBoot-DZaVDsF1.js";import"./createSimpleFunctional-CpJFqdGN.js";import"./VDivider-BcGK93XG.js";/* empty css              */import"./VSlideGroup-DTiaAquR.js";import"./VImg-nmMi926b.js";import"./vue3-perfect-scrollbar.esm-CnKZX5mG.js";import"./VCard-BGo43tDb.js";import"./VCardText-DZQapI2c.js";const R=b({__name:"DemoComboboxClearable",setup(f){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>{const m=h;return V(),g(m,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=a=>d(e)?e.value=a:null),items:s,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}}}),N=n("kbd",null,"enter",-1),T=b({__name:"DemoComboboxNoDataWithChips",setup(f){const e=["Gaming","Programming","Vue","Vuetify"],s=u(["Vuetify"]),c=u(null);return P(s,t=>{t.length>5&&A(()=>s.value.pop())}),(t,m)=>{const a=h;return V(),g(a,{modelValue:r(s),"onUpdate:modelValue":m[0]||(m[0]=C=>d(s)?s.value=C:null),"search-input":r(c),"onUpdate:searchInput":m[1]||(m[1]=C=>d(c)?c.value=C:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":o(()=>[l(D,null,{default:o(()=>[l(w,null,{default:o(()=>[i(' No results matching "'),n("strong",null,y(r(c)),1),i('". Press '),N,i(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}}),$=b({__name:"DemoComboboxMultiple",setup(f){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>{const m=h;return V(),g(v,null,{default:o(()=>[l(p,{cols:"12"},{default:o(()=>[l(m,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=a=>d(e)?e.value=a:null),items:s,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:o(()=>[l(m,{modelValue:r(e),"onUpdate:modelValue":t[1]||(t[1]=a=>d(e)?e.value=a:null),items:s,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:o(()=>[l(m,{modelValue:r(e),"onUpdate:modelValue":t[2]||(t[2]=a=>d(e)?e.value=a:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:o(()=>[l(m,{modelValue:r(e),"onUpdate:modelValue":t[3]||(t[3]=a=>d(e)?e.value=a:null),items:s,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:o(({item:a})=>[l(U,{size:"small"},{prepend:o(()=>[l(L,{start:"",color:"primary",size:"16"},{default:o(()=>[i(y(String(a.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:o(()=>[i(" "+y(a.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),S=b({__name:"DemoComboboxVariant",setup(f){const e=u(["Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(V(),g(v,null,{default:o(()=>[l(p,{cols:"12"},{default:o(()=>[l(_,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=m=>d(e)?e.value=m:null),items:s,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:o(()=>[l(_,{modelValue:r(e),"onUpdate:modelValue":t[1]||(t[1]=m=>d(e)?e.value=m:null),multiple:"",items:s,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:o(()=>[l(_,{modelValue:r(e),"onUpdate:modelValue":t[2]||(t[2]=m=>d(e)?e.value=m:null),multiple:"",items:s,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:o(()=>[l(_,{modelValue:r(e),"onUpdate:modelValue":t[3]||(t[3]=m=>d(e)?e.value=m:null),multiple:"",items:s,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),l(p,{cols:"12"},{default:o(()=>[l(_,{modelValue:r(e),"onUpdate:modelValue":t[4]||(t[4]=m=>d(e)?e.value=m:null),multiple:"",items:s,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}}),j=b({__name:"DemoComboboxDensity",setup(f){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>{const m=h;return V(),g(m,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=a=>d(e)?e.value=a:null),items:s,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}}}),z=b({__name:"DemoComboboxBasic",setup(f){const e=u("Programming"),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>{const m=h;return V(),g(m,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=a=>d(e)?e.value=a:null),items:s,placeholder:"deployment"},null,8,["modelValue"])}}}),B={ts:`<script lang="ts" setup>
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
`},M={ts:`<script lang="ts" setup>
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
`},W={ts:`<script lang="ts" setup>
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
`},F={ts:`<script lang="ts" setup>
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
`},G={ts:`<script lang="ts" setup>
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
`},O={ts:`<script lang="ts" setup>
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
`},X=n("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),Y=n("p",null,[i(" You can use "),n("code",null,"Density"),i(" prop to reduce combobox height and lower max height of list items. Available options are: "),n("code",null,"default"),i(", "),n("code",null,"comfortable"),i(", and "),n("code",null,"compact"),i(". ")],-1),q=n("p",null,[i("Use "),n("code",null,"solo"),i(", "),n("code",null,"outlined"),i(", "),n("code",null,"underlined"),i(", "),n("code",null,"filled"),i(" and "),n("code",null,"plain"),i(" options of "),n("code",null,"variant"),i(" prop to change the look of combobox. ")],-1),E=n("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),H=n("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),J=n("p",null,[i("Use "),n("code",null,"clearable"),i(" prop to clear combobox.")],-1),Re=b({__name:"combobox",setup(f){return(e,s)=>{const c=z,t=k,m=j,a=S,C=$,x=T,I=R;return V(),g(v,{class:"match-height"},{default:o(()=>[l(p,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Basic",code:B},{default:o(()=>[X,l(c)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Density",code:W},{default:o(()=>[Y,l(m)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Variant",code:O},{default:o(()=>[q,l(a)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Multiple",code:F},{default:o(()=>[E,l(C)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"No data with chips",code:G},{default:o(()=>[H,l(x)]),_:1},8,["code"])]),_:1}),l(p,{cols:"12",md:"6"},{default:o(()=>[l(t,{title:"Clearable",code:M},{default:o(()=>[J,l(I)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Re as default};
