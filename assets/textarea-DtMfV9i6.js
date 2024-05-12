import{_ as h}from"./AppTextarea.vue_vue_type_script_setup_true_lang-YWI8lO30.js";import{d as m,r as x,o as p,g as d,n as T,ad as w,a as u,f as l,b as e,e as a,v as t}from"./index-DrFL9zv-.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as k}from"./AppCardCode.vue_vue_type_style_index_0_lang-DkHZz7dq.js";import"./vue3-perfect-scrollbar.esm-CxbQKJsC.js";const $=m({__name:"DemoTextareaValidation",setup(i){const c=x("Hello!"),r=[o=>o.length<=25||"Max 25 characters"];return(o,n)=>{const s=h;return p(),d(s,{modelValue:T(c),"onUpdate:modelValue":n[0]||(n[0]=V=>w(c)?c.value=V:null),label:"Validation",rules:r,rows:"2",placeholder:"Placeholder Text"},null,8,["modelValue"])}}}),j=m({__name:"DemoTextareaNoResize",setup(i){const c=x("Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.");return(r,o)=>{const n=h;return p(),d(n,{modelValue:T(c),"onUpdate:modelValue":o[0]||(o[0]=s=>w(c)?c.value=s:null),label:"Text","no-resize":"",rows:"2",placeholder:"Placeholder Text"},null,8,["modelValue"])}}}),z={};function H(i,c){const r=h,o=u("VCol"),n=u("VRow");return p(),d(n,null,{default:l(()=>[e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{label:"One row","auto-grow":"",rows:"1","row-height":"15",placeholder:"Placeholder Text"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{"auto-grow":"",label:"Two rows",rows:"2",placeholder:"Placeholder Text","row-height":"20"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{label:"Three rows","auto-grow":"",rows:"3",placeholder:"Placeholder Text","row-height":"25"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{"auto-grow":"",label:"Four rows",placeholder:"Placeholder Text",rows:"4","row-height":"30"})]),_:1})]),_:1})}const U=_(z,[["render",H]]),M={};function B(i,c){const r=h,o=u("VCol"),n=u("VRow");return p(),d(n,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(r,{label:"prepend-icon",rows:"1",placeholder:"Placeholder Text","prepend-icon":"tabler-message-2"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(r,{"append-icon":"tabler-message-2",placeholder:"Placeholder Text",label:"append-icon",rows:"1"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(r,{"prepend-inner-icon":"tabler-message-2",label:"prepend-inner-icon",placeholder:"Placeholder Text",rows:"1"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(r,{"append-inner-icon":"tabler-message-2",label:"append-inner-icon",placeholder:"Placeholder Text",rows:"1"})]),_:1})]),_:1})}const G=_(M,[["render",B]]),F=m({__name:"DemoTextareaCounter",setup(i){const c=x("Hello!");return(r,o)=>{const n=h;return p(),d(n,{modelValue:T(c),"onUpdate:modelValue":o[0]||(o[0]=s=>w(c)?c.value=s:null),counter:"",label:"Text",placeholder:"Placeholder Text"},null,8,["modelValue"])}}}),N=m({__name:"DemoTextareaClearable",setup(i){const c=x("This is clearable text.");return(r,o)=>{const n=h;return p(),d(n,{modelValue:T(c),"onUpdate:modelValue":o[0]||(o[0]=s=>w(c)?c.value=s:null),clearable:"","clear-icon":"tabler-circle-x",label:"Text",placeholder:"Placeholder Text"},null,8,["modelValue"])}}}),O={};function S(i,c){const r=h;return p(),d(r,{autocomplete:"email",label:"Email",placeholder:"johndoe@email.com"})}const W=_(O,[["render",S]]),E={};function I(i,c){const r=h,o=u("VCol"),n=u("VRow");return p(),d(n,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(r,{disabled:"",label:"Disabled",hint:"Hint text",placeholder:"Placeholder Text",rows:"2"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(r,{readonly:"",rows:"2",label:"Readonly",placeholder:"Placeholder Text",hint:"Hint text"})]),_:1})]),_:1})}const Y=_(E,[["render",I]]),q={};function J(i,c){const r=u("VTextarea"),o=u("VCol"),n=u("VRow");return p(),d(n,null,{default:l(()=>[e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{label:"Default",rows:"2",placeholder:"Placeholder Text"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{label:"Solo",placeholder:"Placeholder Text",rows:"2",variant:"solo"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{label:"Filled",rows:"2",placeholder:"Placeholder Text",variant:"filled"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{label:"Outlined",rows:"2",placeholder:"Placeholder Text",variant:"outlined"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{label:"Underlined",rows:"2",placeholder:"Placeholder Text",variant:"underlined"})]),_:1}),e(o,{cols:"12",sm:"6"},{default:l(()=>[e(r,{label:"Plain",rows:"2",placeholder:"Placeholder Text",variant:"plain"})]),_:1})]),_:1})}const K=_(q,[["render",J]]),L=m({__name:"DemoTextareaAutoGrow",setup(i){const c=x("The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.");return(r,o)=>{const n=h;return p(),d(n,{modelValue:T(c),"onUpdate:modelValue":o[0]||(o[0]=s=>w(c)?c.value=s:null),label:"Auto Grow",placeholder:"Placeholder Text","auto-grow":""},null,8,["modelValue"])}}}),Q={};function X(i,c){const r=h;return p(),d(r,{label:"Default",placeholder:"Placeholder Text"})}const Z=_(Q,[["render",X]]),ee={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Auto Grow"
    placeholder="Placeholder Text"
    auto-grow
  />
</template>
`},le={ts:`<template>
  <AppTextarea
    label="Default"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextarea
    label="Default"
    placeholder="Placeholder Text"
  />
</template>
`},oe={ts:`<template>
  <AppTextarea
    autocomplete="email"
    label="Email"
    placeholder="johndoe@email.com"
  />
</template>
`,js:`<template>
  <AppTextarea
    autocomplete="email"
    label="Email"
    placeholder="johndoe@email.com"
  />
</template>
`},ae={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`},te={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    counter
    label="Text"
    placeholder="Placeholder Text"
  />
</template>
`},re={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        label="prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-icon="tabler-message-2"
        placeholder="Placeholder Text"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        label="prepend-icon"
        rows="1"
        placeholder="Placeholder Text"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-icon="tabler-message-2"
        placeholder="Placeholder Text"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        placeholder="Placeholder Text"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},ne={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <AppTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <AppTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`},ce={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Two rows"
        rows="2"
        placeholder="Placeholder Text"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        label="Three rows"
        auto-grow
        rows="3"
        placeholder="Placeholder Text"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextarea
        auto-grow
        label="Four rows"
        placeholder="Placeholder Text"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},se={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        placeholder="Placeholder Text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <AppTextarea
        readonly
        rows="2"
        label="Readonly"
        placeholder="Placeholder Text"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},pe={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
    placeholder="Placeholder Text"
  />
</template>
`},de={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        placeholder="Placeholder Text"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        placeholder="Placeholder Text"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        placeholder="Placeholder Text"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        placeholder="Placeholder Text"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        placeholder="Placeholder Text"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        placeholder="Placeholder Text"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        placeholder="Placeholder Text"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},ie=a("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1),ue=a("p",null,[t("When using the "),a("code",null,"auto-grow"),t(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1),he=a("p",null,[t("Use "),a("code",null,"filled"),t(", "),a("code",null,"plain"),t(", "),a("code",null,"outlined"),t(", "),a("code",null,"solo"),t(" and "),a("code",null,"underlined"),t(" option of "),a("code",null,"variant"),t(" prop to change the look of file input.")],-1),me=a("p",null,[t("Use "),a("code",null,"disabled"),t(" and "),a("code",null,"readonly"),t(" prop to change the state of textarea.")],-1),_e=a("p",null,[t(" The "),a("code",null,"autocomplete"),t(" prop gives you the option to enable the browser to predict user input. ")],-1),xe=a("p",null,[t("You can clear the text from a "),a("code",null,"v-textarea"),t(" by using the "),a("code",null,"clearable"),t(" prop, and customize the icon used with the "),a("code",null,"clearable-icon"),t(" prop.")],-1),Te=a("p",null,[t(" The "),a("code",null,"counter"),t(" prop informs the user of a character limit for the "),a("code",null,"v-textarea"),t(". ")],-1),we=a("p",null,[t("The "),a("code",null,"append-icon"),t(", "),a("code",null,"prepend-icon"),t(", "),a("code",null,"append-inner-icon"),t(" and "),a("code",null,"prepend-inner-icon"),t(" props help add context to v-textarea.")],-1),Ve=a("p",null,[t("The "),a("code",null,"rows"),t(" prop allows you to define how many rows the textarea has, when combined with the "),a("code",null,"row-height"),t(" prop you can further customize your rows by defining their height.")],-1),be=a("p",null,[a("code",null,"v-textarea"),t("'s have the option to remain the same size regardless of their content's size, using the "),a("code",null,"no-resize"),t(" prop.")],-1),fe=a("p",null,[t("Use "),a("code",null,"rules"),t(" prop to validate the textarea.")],-1),Re=m({__name:"textarea",setup(i){return(c,r)=>{const o=Z,n=k,s=u("VCol"),V=L,b=K,f=Y,g=W,C=N,P=F,v=G,A=U,R=j,D=$,y=u("VRow");return p(),d(y,{class:"match-height"},{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Basic",code:le},{default:l(()=>[ie,e(o)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Auto Grow",code:ee},{default:l(()=>[ue,e(V)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(n,{title:"Variant",code:de},{default:l(()=>[he,e(b)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"States",code:se},{default:l(()=>[me,e(f)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Browser autocomplete",code:oe},{default:l(()=>[_e,e(g)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Clearable",code:ae},{default:l(()=>[xe,e(C)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Counter",code:te},{default:l(()=>[Te,e(P)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Icons",code:re},{default:l(()=>[we,e(v)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Rows",code:ce},{default:l(()=>[Ve,e(A)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"No resize",code:ne},{default:l(()=>[be,e(R)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Validation",code:pe},{default:l(()=>[fe,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Re as default};
