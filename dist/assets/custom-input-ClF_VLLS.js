import{a as b,V as I}from"./VRow-CgSck4lb.js";import{V as x}from"./form-BMLKAp1e.js";import{V as y}from"./VCheckbox-HZglKkS7.js";import{d as p,o as l,g as r,f as n,c as f,F as R,i as w,s as v,b as c,y as W,e as d,A as $,v as D,x as g,z as k,r as h,n as C,aX as _,a0 as V}from"./index-DkZCiHTd.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./CustomRadiosWithImage-DGP9WDtZ.js";import{_ as B}from"./CustomRadiosWithIcon-y_W3vNix.js";import{V as G}from"./VSpacer-BkhlhwRB.js";import{_ as F}from"./AppCardCode.vue_vue_type_style_index_0_lang-DeFBfVjl.js";import{_ as L}from"./CustomRadios-6ktetn3d.js";/* empty css              */import"./VCheckboxBtn-CRvzpdJ6.js";import"./VSelectionControl-DsANPGCT.js";import"./VInput-BASZTXif.js";import"./index-CnXqXNjM.js";import"./index-D3FG68Ib.js";import"./VRadioGroup-BybfwH44.js";import"./createSimpleFunctional-Co-bZUod.js";import"./vue3-perfect-scrollbar.esm-s57ey0bJ.js";import"./VCard-X7e_6boC.js";import"./VAvatar-CIderobv.js";import"./VImg-Cq_3ZXzq.js";import"./VCardText-BQ80tAvw.js";import"./VDivider-D4aSBbcK.js";const E=["src"],P=p({__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(m,{emit:a}){const e=m,u=a,o=t=>{typeof t!="boolean"&&t!==null&&u("update:selectedCheckbox",t)};return(t,i)=>e.checkboxContent&&e.selectedCheckbox?(l(),r(I,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(l(!0),f(R,null,w(e.checkboxContent,s=>(l(),r(b,v({key:s.value},t.gridColumn),{default:n(()=>[c(x,{class:W(["custom-input custom-checkbox rounded cursor-pointer w-100",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[d("div",null,[c(y,{id:`custom-checkbox-with-img-${s.value}`,"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["id","model-value","value"])]),d("img",{src:s.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,E)]),_:2},1032,["class"]),s.label||t.$slots.label?(l(),r(x,{key:0,for:`custom-checkbox-with-img-${s.value}`,class:"cursor-pointer"},{default:n(()=>[$(t.$slots,"label",{label:s.label},()=>[D(g(s.label),1)],!0)]),_:2},1032,["for"])):k("",!0)]),_:2},1040))),128))]),_:3})):k("",!0)}}),N=U(P,[["__scopeId","data-v-44b87b9a"]]),T=""+new URL("custom-checkbox-img-1-CN62rwL8.png",import.meta.url).href,J=""+new URL("custom-checkbox-img-2-CESZ7JlS.png",import.meta.url).href,A=""+new URL("custom-checkbox-img-3-CFGEoD3K.png",import.meta.url).href,O=p({__name:"DemoCustomInputCustomCheckboxesWithImage",setup(m){const a=[{bgImage:T,value:"basic"},{bgImage:J,value:"premium"},{bgImage:A,value:"enterprise"}],e=h(["basic"]);return(u,o)=>{const t=N;return l(),r(t,{"selected-checkbox":C(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=i=>_(e)?e.value=i:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),K=""+new URL("custom-radio-img-1-YrBKH0Sm.png",import.meta.url).href,X=""+new URL("custom-radio-img-2-Ph1YXgv1.png",import.meta.url).href,Y=""+new URL("custom-radio-img-3-Bg8gANbN.png",import.meta.url).href,H=p({__name:"DemoCustomInputCustomRadiosWithImage",setup(m){const a=[{bgImage:K,value:"basic"},{bgImage:X,value:"premium"},{bgImage:Y,value:"enterprise"}],e=h("basic");return(u,o)=>{const t=j;return l(),r(t,{"selected-radio":C(e),"onUpdate:selectedRadio":o[0]||(o[0]=i=>_(e)?e.value=i:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),Z={class:"d-flex flex-column align-center text-center gap-2"},q={class:"cr-title text-base"},M={class:"text-sm clamp-text mb-0"},Q=p({__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(m,{emit:a}){const e=m,u=a,o=t=>{typeof t!="boolean"&&t!==null&&u("update:selectedCheckbox",t)};return(t,i)=>e.checkboxContent&&e.selectedCheckbox?(l(),r(I,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(l(!0),f(R,null,w(e.checkboxContent,s=>(l(),r(b,v({key:s.title},t.gridColumn),{default:n(()=>[c(x,{class:W(["custom-input custom-checkbox-icon rounded cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[$(t.$slots,"default",{item:s},()=>[d("div",Z,[c(V,v(s.icon,{class:"text-high-emphasis"}),null,16),d("h6",q,g(s.title),1),d("p",M,g(s.desc),1)])],!0),d("div",null,[c(y,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):k("",!0)}}),ee=U(Q,[["__scopeId","data-v-645337de"]]),te=p({__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(m){const a=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"tabler-server-2",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"tabler-ban",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"tabler-lock",size:"28"}}],e=h(["backup"]);return(u,o)=>{const t=ee;return l(),r(t,{"selected-checkbox":C(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=i=>_(e)?e.value=i:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),oe=p({__name:"DemoCustomInputCustomRadiosWithIcon",setup(m){const a=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"tabler-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"tabler-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"tabler-crown",size:"28"}}],e=h("starter");return(u,o)=>{const t=B;return l(),r(t,{"selected-radio":C(e),"onUpdate:selectedRadio":o[0]||(o[0]=i=>_(e)?e.value=i:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),se={class:"flex-grow-1"},ce={class:"d-flex align-center mb-2"},ne={class:"cr-title text-base"},ae={key:0,class:"text-disabled text-body-2"},le={class:"text-sm mb-0"},ie=p({__name:"CustomCheckboxes",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(m,{emit:a}){const e=m,u=a,o=t=>{typeof t!="boolean"&&t!==null&&u("update:selectedCheckbox",t)};return(t,i)=>e.checkboxContent&&e.selectedCheckbox?(l(),r(I,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(l(!0),f(R,null,w(e.checkboxContent,s=>(l(),r(b,v({key:s.title},t.gridColumn),{default:n(()=>[c(x,{class:W(["custom-input custom-checkbox rounded cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[d("div",null,[c(y,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])]),$(t.$slots,"default",{item:s},()=>[d("div",se,[d("div",ce,[d("h6",ne,g(s.title),1),c(G),s.subtitle?(l(),f("span",ae,g(s.subtitle),1)):k("",!0)]),d("p",le,g(s.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):k("",!0)}}),re=U(ie,[["__scopeId","data-v-6887c9ec"]]),ue=p({__name:"DemoCustomInputCustomCheckboxes",setup(m){const a=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],e=h(["discount"]);return(u,o)=>{const t=re;return l(),r(t,{"selected-checkbox":C(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=i=>_(e)?e.value=i:null),"checkbox-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}}),me=p({__name:"DemoCustomInputCustomRadios",setup(m){const a=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],e=h("basic");return(u,o)=>{const t=L;return l(),r(t,{"selected-radio":C(e),"onUpdate:selectedRadio":o[0]||(o[0]=i=>_(e)?e.value=i:null),"radio-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}}),de={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},pe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'tabler-server-2', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'tabler-ban', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'tabler-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'tabler-server-2',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'tabler-ban',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'tabler-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},be={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ge={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'tabler-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'tabler-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'tabler-crown', size: '28' },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'tabler-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'tabler-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'tabler-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ce={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Te=p({__name:"custom-input",setup(m){return(a,e)=>{const u=me,o=F,t=ue,i=oe,s=te,z=H,S=O;return l(),r(I,null,{default:n(()=>[c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios",code:ge},{default:n(()=>[c(u)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes",code:de},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Icon",code:he},{default:n(()=>[c(i)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Icon",code:pe},{default:n(()=>[c(s)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Image",code:Ce},{default:n(()=>[c(z)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Image",code:be},{default:n(()=>[c(S)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Te as default};
