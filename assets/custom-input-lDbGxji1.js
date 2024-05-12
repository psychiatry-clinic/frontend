import{d as g,a as r,o as a,g as m,f as s,c as R,F as V,i as W,s as w,b as c,y as $,e as b,A as z,v as D,x,z as y,r as f,n as v,ad as I}from"./index-B-uKkDM3.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./CustomRadiosWithImage-Cx42sbz6.js";import{_ as B}from"./CustomRadiosWithIcon-Chf4bF2J.js";import{_ as U}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import{_ as G}from"./CustomRadios-fXX3lZoe.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const F=["src"],L=g({__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(p,{emit:n}){const e=p,d=n,o=t=>{typeof t!="boolean"&&t!==null&&d("update:selectedCheckbox",t)};return(t,l)=>{const _=r("VCheckbox"),C=r("VLabel"),h=r("VCol"),k=r("VRow");return e.checkboxContent&&e.selectedCheckbox?(a(),m(k,{key:0,class:"custom-input-wrapper"},{default:s(()=>[(a(!0),R(V,null,W(e.checkboxContent,u=>(a(),m(h,w({key:u.value},t.gridColumn),{default:s(()=>[c(C,{class:$(["custom-input custom-checkbox rounded cursor-pointer w-100",e.selectedCheckbox.includes(u.value)?"active":""])},{default:s(()=>[b("div",null,[c(_,{id:`custom-checkbox-with-img-${u.value}`,"model-value":e.selectedCheckbox,value:u.value,"onUpdate:modelValue":o},null,8,["id","model-value","value"])]),b("img",{src:u.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,F)]),_:2},1032,["class"]),u.label||t.$slots.label?(a(),m(C,{key:0,for:`custom-checkbox-with-img-${u.value}`,class:"cursor-pointer"},{default:s(()=>[z(t.$slots,"label",{label:u.label},()=>[D(x(u.label),1)],!0)]),_:2},1032,["for"])):y("",!0)]),_:2},1040))),128))]),_:3})):y("",!0)}}}),E=S(L,[["__scopeId","data-v-44b87b9a"]]),P="/assets/custom-checkbox-img-1-CN62rwL8.png",N="/assets/custom-checkbox-img-2-CESZ7JlS.png",T="/assets/custom-checkbox-img-3-CFGEoD3K.png",J=g({__name:"DemoCustomInputCustomCheckboxesWithImage",setup(p){const n=[{bgImage:P,value:"basic"},{bgImage:N,value:"premium"},{bgImage:T,value:"enterprise"}],e=f(["basic"]);return(d,o)=>{const t=E;return a(),m(t,{"selected-checkbox":v(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>I(e)?e.value=l:null),"checkbox-content":n,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),A="/assets/custom-radio-img-1-YrBKH0Sm.png",O="/assets/custom-radio-img-2-Ph1YXgv1.png",K="/assets/custom-radio-img-3-Bg8gANbN.png",Y=g({__name:"DemoCustomInputCustomRadiosWithImage",setup(p){const n=[{bgImage:A,value:"basic"},{bgImage:O,value:"premium"},{bgImage:K,value:"enterprise"}],e=f("basic");return(d,o)=>{const t=j;return a(),m(t,{"selected-radio":v(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>I(e)?e.value=l:null),"radio-content":n,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),H={class:"d-flex flex-column align-center text-center gap-2"},X={class:"cr-title text-base"},Z={class:"text-sm clamp-text mb-0"},q=g({__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(p,{emit:n}){const e=p,d=n,o=t=>{typeof t!="boolean"&&t!==null&&d("update:selectedCheckbox",t)};return(t,l)=>{const _=r("VIcon"),C=r("VCheckbox"),h=r("VLabel"),k=r("VCol"),u=r("VRow");return e.checkboxContent&&e.selectedCheckbox?(a(),m(u,{key:0,class:"custom-input-wrapper"},{default:s(()=>[(a(!0),R(V,null,W(e.checkboxContent,i=>(a(),m(k,w({key:i.title},t.gridColumn),{default:s(()=>[c(h,{class:$(["custom-input custom-checkbox-icon rounded cursor-pointer",e.selectedCheckbox.includes(i.value)?"active":""])},{default:s(()=>[z(t.$slots,"default",{item:i},()=>[b("div",H,[c(_,w(i.icon,{class:"text-high-emphasis"}),null,16),b("h6",X,x(i.title),1),b("p",Z,x(i.desc),1)])],!0),b("div",null,[c(C,{"model-value":e.selectedCheckbox,value:i.value,"onUpdate:modelValue":o},null,8,["model-value","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):y("",!0)}}}),M=S(q,[["__scopeId","data-v-645337de"]]),Q=g({__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(p){const n=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"tabler-server-2",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"tabler-ban",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"tabler-lock",size:"28"}}],e=f(["backup"]);return(d,o)=>{const t=M;return a(),m(t,{"selected-checkbox":v(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>I(e)?e.value=l:null),"checkbox-content":n,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}}),ee=g({__name:"DemoCustomInputCustomRadiosWithIcon",setup(p){const n=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"tabler-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"tabler-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"tabler-crown",size:"28"}}],e=f("starter");return(d,o)=>{const t=B;return a(),m(t,{"selected-radio":v(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>I(e)?e.value=l:null),"radio-content":n,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}}),te={class:"flex-grow-1"},oe={class:"d-flex align-center mb-2"},ce={class:"cr-title text-base"},se={key:0,class:"text-disabled text-body-2"},ne={class:"text-sm mb-0"},ae=g({__name:"CustomCheckboxes",props:{selectedCheckbox:{},checkboxContent:{},gridColumn:{}},emits:["update:selectedCheckbox"],setup(p,{emit:n}){const e=p,d=n,o=t=>{typeof t!="boolean"&&t!==null&&d("update:selectedCheckbox",t)};return(t,l)=>{const _=r("VCheckbox"),C=r("VSpacer"),h=r("VLabel"),k=r("VCol"),u=r("VRow");return e.checkboxContent&&e.selectedCheckbox?(a(),m(u,{key:0,class:"custom-input-wrapper"},{default:s(()=>[(a(!0),R(V,null,W(e.checkboxContent,i=>(a(),m(k,w({key:i.title},t.gridColumn),{default:s(()=>[c(h,{class:$(["custom-input custom-checkbox rounded cursor-pointer",e.selectedCheckbox.includes(i.value)?"active":""])},{default:s(()=>[b("div",null,[c(_,{"model-value":e.selectedCheckbox,value:i.value,"onUpdate:modelValue":o},null,8,["model-value","value"])]),z(t.$slots,"default",{item:i},()=>[b("div",te,[b("div",oe,[b("h6",ce,x(i.title),1),c(C),i.subtitle?(a(),R("span",se,x(i.subtitle),1)):y("",!0)]),b("p",ne,x(i.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):y("",!0)}}}),le=S(ae,[["__scopeId","data-v-6887c9ec"]]),ie=g({__name:"DemoCustomInputCustomCheckboxes",setup(p){const n=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],e=f(["discount"]);return(d,o)=>{const t=le;return a(),m(t,{"selected-checkbox":v(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=l=>I(e)?e.value=l:null),"checkbox-content":n,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}}),re=g({__name:"DemoCustomInputCustomRadios",setup(p){const n=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],e=f("basic");return(d,o)=>{const t=G;return a(),m(t,{"selected-radio":v(e),"onUpdate:selectedRadio":o[0]||(o[0]=l=>I(e)?e.value=l:null),"radio-content":n,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}}),ue={ts:`<script setup lang="ts">
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
`},me={ts:`<script setup lang="ts">
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
`},de={ts:`<script setup lang="ts">
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
`},pe={ts:`<script setup lang="ts">
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
`},be={ts:`<script setup lang="ts">
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
`},ge={ts:`<script setup lang="ts">
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
`},Ie=g({__name:"custom-input",setup(p){return(n,e)=>{const d=re,o=U,t=r("VCol"),l=ie,_=ee,C=Q,h=Y,k=J,u=r("VRow");return a(),m(u,null,{default:s(()=>[c(t,{cols:"12",md:"6"},{default:s(()=>[c(o,{title:"Custom Radios",code:pe},{default:s(()=>[c(d)]),_:1},8,["code"])]),_:1}),c(t,{cols:"12",md:"6"},{default:s(()=>[c(o,{title:"Custom Checkboxes",code:ue},{default:s(()=>[c(l)]),_:1},8,["code"])]),_:1}),c(t,{cols:"12",md:"6"},{default:s(()=>[c(o,{title:"Custom Radios With Icon",code:be},{default:s(()=>[c(_)]),_:1},8,["code"])]),_:1}),c(t,{cols:"12",md:"6"},{default:s(()=>[c(o,{title:"Custom Checkboxes With Icon",code:me},{default:s(()=>[c(C)]),_:1},8,["code"])]),_:1}),c(t,{cols:"12",md:"6"},{default:s(()=>[c(o,{title:"Custom Radios With Image",code:ge},{default:s(()=>[c(h)]),_:1},8,["code"])]),_:1}),c(t,{cols:"12",md:"6"},{default:s(()=>[c(o,{title:"Custom Checkboxes With Image",code:de},{default:s(()=>[c(k)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ie as default};
