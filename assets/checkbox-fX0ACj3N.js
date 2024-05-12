import{_ as S}from"./AppTextField.vue_vue_type_script_setup_true_lang-CcB8QWg0.js";import{d as k,r as p,a as x,o as h,c as C,b as e,f as i,n,ad as u,F as V,g as _,e as s,v as d,s as O,aj as I,x as U,i as $}from"./index-CJpjWKD8.js";import{_ as z}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const A=k({__name:"DemoCheckboxInlineTextField",setup(f){const l=p(!0),a=p(!1);return(r,c)=>{const o=x("VCheckbox"),t=x("VCol"),b=S,m=x("VRow");return h(),C(V,null,[e(m,null,{default:i(()=>[e(t,{sm:"1",cols:"2",class:"d-flex align-end"},{default:i(()=>[e(o,{modelValue:n(l),"onUpdate:modelValue":c[0]||(c[0]=v=>u(l)?l.value=v:null)},null,8,["modelValue"])]),_:1}),e(t,{sm:"11",cols:"10"},{default:i(()=>[e(b,{label:"Include files",placeholder:"Placeholder Text"})]),_:1})]),_:1}),e(m,null,{default:i(()=>[e(t,{cols:"2",sm:"1",class:"d-flex align-end"},{default:i(()=>[e(o,{modelValue:n(a),"onUpdate:modelValue":c[1]||(c[1]=v=>u(a)?a.value=v:null)},null,8,["modelValue"])]),_:1}),e(t,{cols:"10",sm:"11"},{default:i(()=>[e(b,{disabled:!n(a),label:"I only work if you check the box",placeholder:"Placeholder Text"},null,8,["disabled"])]),_:1})]),_:1})],64)}}}),D=k({__name:"DemoCheckboxLabelSlot",setup(f){const l=p(!1);return(a,r)=>{const c=x("VTooltip"),o=x("VCheckbox");return h(),_(o,{modelValue:n(l),"onUpdate:modelValue":r[1]||(r[1]=t=>u(l)?l.value=t:null)},{label:i(()=>[s("div",null,[d(" I agree that "),e(c,{location:"bottom"},{activator:i(({props:t})=>[s("a",O({href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"},t,{onClick:r[0]||(r[0]=I(()=>{},["stop"]))})," Vuetify ",16)]),default:i(()=>[d(" Opens in new window ")]),_:1}),d(" is awesome ")])]),_:1},8,["modelValue"])}}}),J={class:"demo-space-x"},F=k({__name:"DemoCheckboxStates",setup(f){const l=p(!0),a=p(!0),r=p(!0),c=p(!1);return(o,t)=>{const b=x("VCheckbox");return h(),C("div",J,[e(b,{modelValue:n(l),"onUpdate:modelValue":t[0]||(t[0]=m=>u(l)?l.value=m:null),label:"On"},null,8,["modelValue"]),e(b,{modelValue:n(c),"onUpdate:modelValue":t[1]||(t[1]=m=>u(c)?c.value=m:null),label:"Off"},null,8,["modelValue"]),e(b,{indeterminate:n(a),"onUpdate:indeterminate":t[2]||(t[2]=m=>u(a)?a.value=m:null),modelValue:n(a),"onUpdate:modelValue":t[3]||(t[3]=m=>u(a)?a.value=m:null),label:"Indeterminate"},null,8,["indeterminate","modelValue"]),e(b,{"model-value":n(r),disabled:"",label:"On disabled"},null,8,["model-value"]),e(b,{disabled:"",label:"Off disabled"})])}}}),E={class:"demo-space-x"},j=k({__name:"DemoCheckboxCheckboxValue",setup(f){const l=p(1),a=p("Show");return(r,c)=>{const o=x("VCheckbox");return h(),C("div",E,[e(o,{modelValue:n(l),"onUpdate:modelValue":c[0]||(c[0]=t=>u(l)?l.value=t:null),"true-value":1,"false-value":0,label:`${n(l).toString()}`},null,8,["modelValue","label"]),e(o,{modelValue:n(a),"onUpdate:modelValue":c[1]||(c[1]=t=>u(a)?a.value=t:null),"true-value":"Show","false-value":"Hide",color:"success",label:`${n(a).toString()}`},null,8,["modelValue","label"])])}}}),P={class:"demo-space-x"},R=k({__name:"DemoCheckboxIcon",setup(f){const l=p(!0),a=p(!0),r=p(!0),c=o=>{const t=o.toString();return t.charAt(0).toUpperCase()+t.slice(1)};return(o,t)=>{const b=x("VCheckbox");return h(),C("div",P,[e(b,{modelValue:n(l),"onUpdate:modelValue":t[0]||(t[0]=m=>u(l)?l.value=m:null),label:c(n(l)),"true-icon":"tabler-check","false-icon":"tabler-x"},null,8,["modelValue","label"]),e(b,{modelValue:n(a),"onUpdate:modelValue":t[1]||(t[1]=m=>u(a)?a.value=m:null),label:c(n(a)),"true-icon":"tabler-alarm","false-icon":"tabler-alarm",color:"success"},null,8,["modelValue","label"]),e(b,{modelValue:n(r),"onUpdate:modelValue":t[2]||(t[2]=m=>u(r)?r.value=m:null),label:c(n(r)),"true-icon":"tabler-check","false-icon":"tabler-circle-x",color:"error"},null,8,["modelValue","label"])])}}}),B={class:"demo-space-x"},M={class:"mt-1"},W=k({__name:"DemoCheckboxModelAsArray",setup(f){const l=p(["John"]);return(a,r)=>{const c=x("VCheckbox");return h(),C(V,null,[s("div",B,[e(c,{modelValue:n(l),"onUpdate:modelValue":r[0]||(r[0]=o=>u(l)?l.value=o:null),label:"John",value:"John"},null,8,["modelValue"]),e(c,{modelValue:n(l),"onUpdate:modelValue":r[1]||(r[1]=o=>u(l)?l.value=o:null),label:"Jacob",color:"success",value:"Jacob"},null,8,["modelValue"]),e(c,{modelValue:n(l),"onUpdate:modelValue":r[2]||(r[2]=o=>u(l)?l.value=o:null),label:"Johnson",color:"info",value:"Johnson"},null,8,["modelValue"])]),s("p",M,U(n(l)),1)],64)}}}),H={class:"demo-space-x"},N=k({__name:"DemoCheckboxColors",setup(f){const l=p(["Primary","Secondary","Success","Info","Warning","Error"]),a=p(["Primary","Secondary","Success","Info","Warning","Error"]);return(r,c)=>{const o=x("VCheckbox");return h(),C("div",H,[(h(!0),C(V,null,$(n(l),t=>(h(),_(o,{key:t,modelValue:n(a),"onUpdate:modelValue":c[0]||(c[0]=b=>u(a)?a.value=b:null),label:t,color:t.toLowerCase(),value:t},null,8,["modelValue","label","color","value"]))),128))])}}}),Y={class:"demo-space-x"},q=k({__name:"DemoCheckboxDensity",setup(f){const l=p(!0),a=p(!1),r=c=>{const o=c.toString();return o.charAt(0).toUpperCase()+o.slice(1)};return(c,o)=>{const t=x("VCheckbox");return h(),C("div",Y,[e(t,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=b=>u(l)?l.value=b:null),density:"compact",label:r(n(l))},null,8,["modelValue","label"]),e(t,{modelValue:n(a),"onUpdate:modelValue":o[1]||(o[1]=b=>u(a)?a.value=b:null),density:"compact",label:r(n(a))},null,8,["modelValue","label"])])}}}),G={class:"demo-space-x"},K=k({__name:"DemoCheckboxBasic",setup(f){const l=p(!0),a=p(!1),r=c=>{const o=c.toString();return o.charAt(0).toUpperCase()+o.slice(1)};return(c,o)=>{const t=x("VCheckbox");return h(),C("div",G,[e(t,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=b=>u(l)?l.value=b:null),label:r(n(l))},null,8,["modelValue","label"]),e(t,{modelValue:n(a),"onUpdate:modelValue":o[1]||(o[1]=b=>u(a)?a.value=b:null),label:r(n(a))},null,8,["modelValue","label"])])}}}),Q={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},X={ts:`<script lang="ts" setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const checkbox = ref(1)
const checkboxString = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
    />

    <VCheckbox
      v-model="checkboxString"
      true-value="Show"
      false-value="Hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
    />
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const colorCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const selectedCheckbox = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`,js:`<script setup>
const colorCheckbox = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const selectedCheckbox = ref([
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
    <VCheckbox
      v-for="color in colorCheckbox"
      :key="color"
      v-model="selectedCheckbox"
      :label="color"
      :color="color.toLowerCase()"
      :value="color"
    />
  </div>
</template>
`},ee={ts:`<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`,js:`<script setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
`},le={ts:`<script lang="ts" setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckboxOne = ref(true)
const toggleCheckboxTwo = ref(true)
const toggleCheckboxThree = ref(true)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckboxOne"
      :label="capitalizedLabel(toggleCheckboxOne)"
      true-icon="tabler-check"
      false-icon="tabler-x"
    />

    <VCheckbox
      v-model="toggleCheckboxTwo"
      :label="capitalizedLabel(toggleCheckboxTwo)"
      true-icon="tabler-alarm"
      false-icon="tabler-alarm"
      color="success"
    />

    <VCheckbox
      v-model="toggleCheckboxThree"
      :label="capitalizedLabel(toggleCheckboxThree)"
      true-icon="tabler-check"
      false-icon="tabler-circle-x"
      color="error"
    />
  </div>
</template>
`},oe={ts:`<script lang="ts" setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
      class="d-flex align-end"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <AppTextField
        label="Include files"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
      class="d-flex align-end"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <AppTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const includeFiles = ref(true)
const isInputEnabled = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      sm="1"
      cols="2"
      class="d-flex align-end"
    >
      <VCheckbox v-model="includeFiles" />
    </VCol>

    <VCol
      sm="11"
      cols="10"
    >
      <AppTextField
        label="Include files"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol
      cols="2"
      sm="1"
      class="d-flex align-end"
    >
      <VCheckbox v-model="isInputEnabled" />
    </VCol>

    <VCol
      cols="10"
      sm="11"
    >
      <AppTextField
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},te={ts:`<script lang="ts" setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`,js:`<script setup>
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      <div>
        I agree that
        <VTooltip location="bottom">
          <template #activator="{ props }">
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              v-bind="props"
              @click.stop
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </VTooltip>
        is awesome
      </div>
    </template>
  </VCheckbox>
</template>
`},ce={ts:`<script lang="ts" setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`,js:`<script setup>
const selected = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="selected"
      label="John"
      value="John"
    />

    <VCheckbox
      v-model="selected"
      label="Jacob"
      color="success"
      value="Jacob"
    />

    <VCheckbox
      v-model="selected"
      label="Johnson"
      color="info"
      value="Johnson"
    />
  </div>

  <p class="mt-1">
    {{ selected }}
  </p>
</template>
`},ae={ts:`<script setup lang="ts">
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`,js:`<script setup>
const toggleCheckbox = ref(true)
const toggleIndeterminateCheckbox = ref(true)
const disabledCheckbox = ref(true)
const toggleOffCheckbox = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      v-model="toggleCheckbox"
      label="On"
    />

    <VCheckbox
      v-model="toggleOffCheckbox"
      label="Off"
    />

    <VCheckbox
      v-model:indeterminate="toggleIndeterminateCheckbox"
      v-model="toggleIndeterminateCheckbox"
      label="Indeterminate"
    />

    <VCheckbox
      :model-value="disabledCheckbox"
      disabled
      label="On disabled"
    />

    <VCheckbox
      disabled
      label="Off disabled"
    />
  </div>
</template>
`},ne=s("p",null,[s("code",null,"v-checkbox"),d(" in its simplest form provides a toggle between 2 values.")],-1),se=s("p",null,[d("Use "),s("code",null,"density"),d(" prop to reduces the input height. Available options are: "),s("code",null,"default"),d(", "),s("code",null,"comfortable"),d(", and "),s("code",null,"compact"),d(".")],-1),re=s("p",null,[d("Checkboxes can be colored by using any of the builtin colors and contextual names using the "),s("code",null,"color"),d(" prop.")],-1),de=s("p",null,[d("Multiple "),s("code",null,"v-checkbox"),d("'s can share the same "),s("code",null,"v-model"),d(" by using an array.")],-1),ie=s("p",null,[d("Use "),s("code",null,"false-icon"),d(" and "),s("code",null,"true-icon"),d(" prop to change the icon on the checkbox.")],-1),be=s("p",null,[d("Use "),s("code",null,"false-value"),d(" and "),s("code",null,"true-value"),d(" prop to sets value for truthy and falsy state")],-1),ue=s("p",null,[s("code",null,"v-checkbox"),d(" can have different states such as "),s("code",null,"default"),d(", "),s("code",null,"disabled"),d(", and "),s("code",null,"indeterminate"),d(".")],-1),pe=s("p",null,[d("Checkbox labels can be defined in "),s("code",null,"label"),d(" slot - that will allow to use HTML content.")],-1),me=s("p",null,[d("You can place "),s("code",null,"v-checkbox"),d(" in line with other components such as "),s("code",null,"v-text-field"),d(".")],-1),Ce=k({__name:"checkbox",setup(f){return(l,a)=>{const r=K,c=z,o=x("VCol"),t=q,b=N,m=W,v=R,g=j,T=F,w=D,L=A,y=x("VRow");return h(),_(y,{class:"match-height"},{default:i(()=>[e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"Basic",code:Q},{default:i(()=>[ne,e(r)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"Density",code:ee},{default:i(()=>[se,e(t)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"Colors",code:Z},{default:i(()=>[re,e(b)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"Model as array",code:ce},{default:i(()=>[de,e(m)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"Icon",code:le},{default:i(()=>[ie,e(v)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"Checkbox Value",code:X},{default:i(()=>[be,e(g)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"States",code:ae},{default:i(()=>[ue,e(T)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"Label Slot",code:te},{default:i(()=>[pe,e(w)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:i(()=>[e(c,{title:"Inline text-field",code:oe},{default:i(()=>[me,e(L)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ce as default};
