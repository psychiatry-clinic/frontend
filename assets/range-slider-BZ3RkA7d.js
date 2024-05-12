import{d,r as _,a as c,o as u,g as p,n as V,ad as f,f as a,b as s,e as n,v as r}from"./index-CJpjWKD8.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const k=d({__name:"DemoRangeSliderVertical",setup(m){const e=_([20,40]);return(i,l)=>{const o=c("VRangeSlider");return u(),p(o,{modelValue:V(e),"onUpdate:modelValue":l[0]||(l[0]=t=>f(e)?e.value=t:null),direction:"vertical"},null,8,["modelValue"])}}}),w=d({__name:"DemoRangeSliderThumbLabel",setup(m){const e=["Winter","Spring","Summer","Fall"],i=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],l=_([1,2]);return(o,t)=>{const g=c("VIcon"),S=c("VRangeSlider");return u(),p(S,{modelValue:V(l),"onUpdate:modelValue":t[0]||(t[0]=b=>f(l)?l.value=b:null),tick:e,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":a(({modelValue:b})=>[s(g,{icon:i[b]},null,8,["icon"])]),_:1},8,["modelValue"])}}}),x=d({__name:"DemoRangeSliderStep",setup(m){const e=_([20,40]);return(i,l)=>{const o=c("VRangeSlider");return u(),p(o,{modelValue:V(e),"onUpdate:modelValue":l[0]||(l[0]=t=>f(e)?e.value=t:null),step:"10"},null,8,["modelValue"])}}}),C=d({__name:"DemoRangeSliderColor",setup(m){const e=_([10,60]);return(i,l)=>{const o=c("VRangeSlider");return u(),p(o,{modelValue:V(e),"onUpdate:modelValue":l[0]||(l[0]=t=>f(e)?e.value=t:null),color:"success"},null,8,["modelValue"])}}}),y=d({__name:"DemoRangeSliderDisabled",setup(m){const e=_([30,60]);return(i,l)=>{const o=c("VRangeSlider");return u(),p(o,{modelValue:V(e),"onUpdate:modelValue":l[0]||(l[0]=t=>f(e)?e.value=t:null),disabled:"",label:"Disabled"},null,8,["modelValue"])}}}),U=d({__name:"DemoRangeSliderBasic",setup(m){const e=_([10,60]);return(i,l)=>{const o=c("VRangeSlider");return u(),p(o,{modelValue:V(e),"onUpdate:modelValue":l[0]||(l[0]=t=>f(e)?e.value=t:null)},null,8,["modelValue"])}}}),j={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},$={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},B={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},T={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},z={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},I={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},F=n("p",null,[r("The "),n("code",null,"v-slider"),r(" component is a better visualization of the number input.")],-1),L=n("p",null,[r("You cannot interact with "),n("code",null,"disabled"),r(" sliders.")],-1),N=n("p",null,[r("Use "),n("code",null,"color"),r(" prop to the sets the slider color. "),n("code",null,"track-color"),r(" prop to sets the color of slider's unfilled track.")],-1),W=n("p",null,[n("code",null,"v-range-slider"),r(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Y=n("p",null,[r(" Using the "),n("code",null,"tick-labels"),r(" prop along with the "),n("code",null,"thumb-label"),r(" slot, you can create a very customized solution. ")],-1),A=n("p",null,[r("You can use the "),n("code",null,"vertical"),r(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),H=d({__name:"range-slider",setup(m){return(e,i)=>{const l=U,o=D,t=c("VCol"),g=y,S=C,b=x,R=w,h=k,v=c("VRow");return u(),p(v,null,{default:a(()=>[s(t,{cols:"12",md:"6"},{default:a(()=>[s(o,{title:"Basic",code:j},{default:a(()=>[F,s(l)]),_:1},8,["code"])]),_:1}),s(t,{cols:"12",md:"6"},{default:a(()=>[s(o,{title:"Disabled",code:B},{default:a(()=>[L,s(g)]),_:1},8,["code"])]),_:1}),s(t,{cols:"12",md:"6"},{default:a(()=>[s(o,{title:"Color",code:$},{default:a(()=>[N,s(S)]),_:1},8,["code"])]),_:1}),s(t,{cols:"12",md:"6"},{default:a(()=>[s(o,{title:"Step",code:T},{default:a(()=>[W,s(b)]),_:1},8,["code"])]),_:1}),s(t,{cols:"12",md:"6"},{default:a(()=>[s(o,{title:"Thumb label",code:z},{default:a(()=>[Y,s(R)]),_:1},8,["code"])]),_:1}),s(t,{cols:"12",md:"6"},{default:a(()=>[s(o,{title:"Vertical",code:I},{default:a(()=>[A,s(h)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{H as default};
