import{d as S,r as m,a as w,o as h,c as v,b as l,n as c,ad as p,g as b,f as r,v as d,e as n,x as y,F as f,i as $}from"./index-DrFL9zv-.js";import{_ as C}from"./AppCardCode.vue_vue_type_style_index_0_lang-DkHZz7dq.js";import"./vue3-perfect-scrollbar.esm-CxbQKJsC.js";const D={class:"demo-space-x"},U=S({__name:"DemoSwitchStates",setup(_){const e=m("on"),a=m("on"),i=m(!0);return(o,t)=>{const s=w("VSwitch");return h(),v("div",D,[l(s,{modelValue:c(e),"onUpdate:modelValue":t[0]||(t[0]=u=>p(e)?e.value=u:null),value:"on",label:"On"},null,8,["modelValue"]),l(s,{label:"Off"}),l(s,{modelValue:c(a),"onUpdate:modelValue":t[1]||(t[1]=u=>p(a)?a.value=u:null),value:"on",disabled:"",label:"On disabled"},null,8,["modelValue"]),l(s,{disabled:"",label:"Off disabled"}),l(s,{modelValue:c(i),"onUpdate:modelValue":t[2]||(t[2]=u=>p(i)?i.value=u:null),loading:"warning",label:`${c(i)?"On":"Off"} loading`},null,8,["modelValue","label"])])}}}),T={class:"demo-space-x"},J=S({__name:"DemoSwitchTrueAndFalseValue",setup(_){const e=m(1),a=m("Show");return(i,o)=>{const t=w("VSwitch");return h(),v("div",T,[l(t,{modelValue:c(e),"onUpdate:modelValue":o[0]||(o[0]=s=>p(e)?e.value=s:null),label:c(e).toString(),"true-value":1,"false-value":0},null,8,["modelValue","label"]),l(t,{modelValue:c(a),"onUpdate:modelValue":o[1]||(o[1]=s=>p(a)?a.value=s:null),label:c(a).toString(),"true-value":"Show","false-value":"Hide"},null,8,["modelValue","label"])])}}}),A=S({__name:"DemoSwitchLabelSlot",setup(_){const e=m(!1);return(a,i)=>{const o=w("VProgressCircular"),t=w("VSwitch");return h(),b(t,{modelValue:c(e),"onUpdate:modelValue":i[0]||(i[0]=s=>p(e)?e.value=s:null)},{label:r(()=>[d(" Turn on the progress: "),l(o,{indeterminate:c(e),class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"])}}}),F={class:"demo-space-x"},M={class:"mt-2 mb-0"},P=S({__name:"DemoSwitchModelAsArray",setup(_){const e=m(["John"]);return(a,i)=>{const o=w("VSwitch");return h(),v(f,null,[n("div",F,[l(o,{modelValue:c(e),"onUpdate:modelValue":i[0]||(i[0]=t=>p(e)?e.value=t:null),label:"John",value:"John"},null,8,["modelValue"]),l(o,{modelValue:c(e),"onUpdate:modelValue":i[1]||(i[1]=t=>p(e)?e.value=t:null),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),n("p",M,y(c(e)),1)],64)}}}),I={class:"demo-space-x"},j=S({__name:"DemoSwitchColors",setup(_){const e=m(["Primary","Secondary","Success","Info","Warning","Error"]),a=m(["Primary","Secondary","Success","Info","Warning","Error"]);return(i,o)=>{const t=w("VSwitch");return h(),v("div",I,[(h(!0),v(f,null,$(c(a),s=>(h(),b(t,{key:s,modelValue:c(e),"onUpdate:modelValue":o[0]||(o[0]=u=>p(e)?e.value=u:null),label:s,value:s,color:s.toLowerCase()},null,8,["modelValue","label","value","color"]))),128))])}}}),z={class:"demo-space-x"},B=S({__name:"DemoSwitchInset",setup(_){const e=m(!0),a=m(!1);return(i,o)=>{const t=w("VSwitch");return h(),v("div",z,[l(t,{modelValue:c(e),"onUpdate:modelValue":o[0]||(o[0]=s=>p(e)?e.value=s:null),label:`Switch 1: ${c(e).toString()}`},null,8,["modelValue","label"]),l(t,{modelValue:c(a),"onUpdate:modelValue":o[1]||(o[1]=s=>p(a)?a.value=s:null),label:`Switch 2: ${c(a).toString()}`},null,8,["modelValue","label"])])}}}),E={class:"demo-space-x"},k=S({__name:"DemoSwitchBasic",setup(_){const e=m(!0),a=m(!1),i=o=>{const t=o.toString();return t.charAt(0).toUpperCase()+t.slice(1)};return(o,t)=>{const s=w("VSwitch");return h(),v("div",E,[l(s,{modelValue:c(e),"onUpdate:modelValue":t[0]||(t[0]=u=>p(e)?e.value=u:null),label:i(c(e))},null,8,["modelValue","label"]),l(s,{modelValue:c(a),"onUpdate:modelValue":t[1]||(t[1]=u=>p(a)?a.value=u:null),label:i(c(a))},null,8,["modelValue","label"])])}}}),W={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},H={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},R={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},q={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},G={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},Q=n("p",null,[d("A "),n("code",null,"v-switch"),d(" in its simplest form provides a toggle between 2 values.")],-1),X=n("p",null,[d("To change the default "),n("code",null,"inset"),d(" switch, simply modify the inset prop to a "),n("code",null,"false"),d(" value.")],-1),Y=n("p",null,[d("Switches can be colored by using any of the builtin colors and contextual names using the "),n("code",null,"color"),d(" prop.")],-1),Z=n("p",null,[d("Multiple "),n("code",null,"v-switch"),d("'s can share the same "),n("code",null,"v-model"),d(" by using an array.")],-1),ee=n("p",null,[d("Switch labels can be defined in "),n("code",null,"label"),d(" slot - that will allow to use HTML content.")],-1),te=n("p",null,[d(" Use "),n("code",null,"false-value"),d(" and "),n("code",null,"true-value"),d(" prop to sets value for truthy and falsy state ")],-1),le=n("p",null,[n("code",null,"v-switch"),d(" can have different states such as "),n("code",null,"default"),d(", "),n("code",null,"disabled"),d(", and "),n("code",null,"loading"),d(".")],-1),ce=S({__name:"switch",setup(_){return(e,a)=>{const i=k,o=C,t=w("VCol"),s=B,u=j,V=P,g=A,x=J,O=U,L=w("VRow");return h(),b(L,null,{default:r(()=>[l(t,{cols:"12",md:"6"},{default:r(()=>[l(o,{title:"Basic",code:W},{default:r(()=>[Q,l(i)]),_:1},8,["code"])]),_:1}),l(t,{cols:"12",md:"6"},{default:r(()=>[l(o,{title:"Inset",code:N},{default:r(()=>[X,l(s)]),_:1},8,["code"])]),_:1}),l(t,{cols:"12",md:"6"},{default:r(()=>[l(o,{title:"Colors",code:H},{default:r(()=>[Y,l(u)]),_:1},8,["code"])]),_:1}),l(t,{cols:"12",md:"6"},{default:r(()=>[l(o,{title:"Model as array",code:q},{default:r(()=>[Z,l(V)]),_:1},8,["code"])]),_:1}),l(t,{cols:"12",md:"6"},{default:r(()=>[l(o,{title:"Label slot",code:R},{default:r(()=>[ee,l(g)]),_:1},8,["code"])]),_:1}),l(t,{cols:"12",md:"6"},{default:r(()=>[l(o,{title:"True and False Value",code:K},{default:r(()=>[te,l(x)]),_:1},8,["code"])]),_:1}),l(t,{cols:"12",md:"6"},{default:r(()=>[l(o,{title:"States",code:G},{default:r(()=>[le,l(O)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ce as default};
