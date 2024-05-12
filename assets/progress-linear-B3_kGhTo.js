import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as d,o as m,c as g,b as e,d as y,r as _,n as v,ad as h,f as l,e as o,x as P,g as L,H as $,ax as M,w as x,v as s}from"./index-B-uKkDM3.js";import{_ as I}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const D={},C={class:"demo-space-y"};function U(p,a){const r=d("VProgressLinear");return m(),g("div",C,[e(r,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(r,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(r,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const R=f(D,[["render",U]]),T={class:"demo-space-y"},j=y({__name:"DemoProgressLinearSlots",setup(p){const a=_(20),r=_(33),i=_(78);return(n,t)=>{const u=d("VProgressLinear");return m(),g("div",T,[e(u,{modelValue:v(i),"onUpdate:modelValue":t[0]||(t[0]=c=>h(i)?i.value=c:null),color:"primary",height:"8"},null,8,["modelValue"]),e(u,{modelValue:v(a),"onUpdate:modelValue":t[1]||(t[1]=c=>h(a)?a.value=c:null),color:"primary",height:"20"},{default:l(({value:c})=>[o("span",null,P(Math.ceil(c))+"%",1)]),_:1},8,["modelValue"]),e(u,{modelValue:v(r),"onUpdate:modelValue":t[2]||(t[2]=c=>h(r)?r.value=c:null),height:"20",color:"primary"},{default:l(()=>[o("span",null,P(Math.ceil(v(r)))+"%",1)]),_:1},8,["modelValue"])])}}}),S={},N={class:"demo-space-y"};function Y(p,a){const r=d("VProgressLinear");return m(),g("div",N,[e(r,{"model-value":"78",height:"8",color:"primary",rounded:!1}),e(r,{"model-value":"20",color:"primary",height:"20",rounded:!1}),e(r,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const A=f(S,[["render",Y]]),E={};function H(p,a){const r=d("VProgressLinear");return m(),L(r,{color:"primary",indeterminate:"",reverse:""})}const q=f(E,[["render",H]]),z={};function F(p,a){const r=d("VProgressLinear");return m(),L(r,{indeterminate:"",color:"primary"})}const G=f(z,[["render",F]]),J={class:"demo-space-y"},K=y({__name:"DemoProgressLinearBuffering",setup(p){const a=_(10),r=_(20),i=_(),n=()=>{clearInterval(i.value),i.value=setInterval(()=>{a.value+=Math.random()*10+5,r.value+=Math.random()*10+6},2e3)};return $(n),M(()=>{clearInterval(i.value)}),x(a,()=>{if(a.value<100)return!1;a.value=0,r.value=10,n()}),(t,u)=>{const c=d("VProgressLinear");return m(),g("div",J,[e(c,{modelValue:v(a),"onUpdate:modelValue":u[0]||(u[0]=V=>h(a)?a.value=V:null),color:"primary","buffer-value":v(r)},null,8,["modelValue","buffer-value"])])}}}),O={},Q={class:"demo-space-y"};function W(p,a){const r=d("VProgressLinear");return m(),g("div",Q,[e(r,{"model-value":"15",color:"primary"}),e(r,{"model-value":"30",color:"secondary"}),e(r,{"model-value":"45",color:"success"})])}const X=f(O,[["render",W]]),Z={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},ee={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`},re={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},oe={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},se={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},ae={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},le={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},te=o("p",null,[s("Use the props "),o("code",null,"color"),s(" and "),o("code",null,"background-color"),s(" to set colors.")],-1),ne=o("p",null,[s("The primary value is controlled by "),o("code",null,"v-model"),s(", whereas the buffer is controlled by the "),o("code",null,"buffer-value"),s(" prop.")],-1),ce=o("p",null,[s("for continuously animating progress bar,use prop "),o("code",null,"indeterminate"),s(". This indicates continuous process. ")],-1),ie=o("p",null,[s("Use prop "),o("code",null,"reverse"),s(" to animate continuously in reverse direction. The component also has RTL support.")],-1),de=o("p",null,[s(" The "),o("code",null," rounded "),s("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),o("code",null,"rounded"),s(" prop true. You can disable it by using "),o("code",null,":rounded='false'"),s(". ")],-1),ue=o("p",null,[s("The v-progress-linear component will be responsive to user input when using "),o("code",null,"v-model"),s(". You can use the default slot or bind a local model to display inside of the progress.")],-1),me=o("p",null,[s(" The "),o("code",null,"striped"),s(" prop is used to apply striped background.")],-1),ge=y({__name:"progress-linear",setup(p){return(a,r)=>{const i=X,n=I,t=d("VCol"),u=K,c=G,V=q,b=A,w=j,B=R,k=d("VRow");return m(),L(k,{class:"match-height"},{default:l(()=>[e(t,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Color",code:ee},{default:l(()=>[te,e(i)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Buffering",code:Z},{default:l(()=>[ne,e(u)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Indeterminate",code:re},{default:l(()=>[ce,e(c)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Reversed",code:oe},{default:l(()=>[ie,e(V)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Rounded",code:se},{default:l(()=>[de,e(b)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Slots",code:ae},{default:l(()=>[ue,e(w)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Striped",code:le},{default:l(()=>[me,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ge as default};
