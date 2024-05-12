import{d as g,r as k,a as p,o as x,c as y,b as a,f as t,v as e,n as u,ad as d,F as w,g as C,e as V}from"./index-DrFL9zv-.js";import{_ as $}from"./AppCardCode.vue_vue_type_style_index_0_lang-DkHZz7dq.js";import"./vue3-perfect-scrollbar.esm-CxbQKJsC.js";const O={class:"demo-space-x"},D=g({__name:"DemoSnackbarTransition",setup(T){const l=k(!1),S=k(!1),n=k(!1);return(s,o)=>{const c=p("VBtn"),r=p("VSnackbar");return x(),y("div",O,[a(c,{onClick:o[0]||(o[0]=m=>l.value=!0)},{default:t(()=>[e(" fade snackbar ")]),_:1}),a(r,{modelValue:u(l),"onUpdate:modelValue":o[1]||(o[1]=m=>d(l)?l.value=m:null),transition:"fade-transition",location:"top start"},{default:t(()=>[e(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(c,{onClick:o[2]||(o[2]=m=>S.value=!0)},{default:t(()=>[e(" Scale snackbar ")]),_:1}),a(r,{modelValue:u(S),"onUpdate:modelValue":o[3]||(o[3]=m=>d(S)?S.value=m:null),transition:"scale-transition",location:"bottom end"},{default:t(()=>[e(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(c,{onClick:o[4]||(o[4]=m=>n.value=!0)},{default:t(()=>[e(" scroll y reverse ")]),_:1}),a(r,{modelValue:u(n),"onUpdate:modelValue":o[5]||(o[5]=m=>d(n)?n.value=m:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:t(()=>[e(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])])}}}),U={class:"demo-space-x"},E=g({__name:"DemoSnackbarVariants",setup(T){const l=k(!1),S=k(!1),n=k(!1),s=k(!1),o=k(!1);return(c,r)=>{const m=p("VBtn"),v=p("VSnackbar");return x(),y("div",U,[a(m,{onClick:r[0]||(r[0]=f=>l.value=!0)},{default:t(()=>[e(" Default ")]),_:1}),a(v,{modelValue:u(l),"onUpdate:modelValue":r[1]||(r[1]=f=>d(l)?l.value=f:null),location:"top start"},{default:t(()=>[e(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(m,{onClick:r[2]||(r[2]=f=>S.value=!0)},{default:t(()=>[e(" tonal ")]),_:1}),a(v,{modelValue:u(S),"onUpdate:modelValue":r[3]||(r[3]=f=>d(S)?S.value=f:null),location:"top end",variant:"tonal"},{default:t(()=>[e(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(m,{onClick:r[4]||(r[4]=f=>n.value=!0)},{default:t(()=>[e(" Text ")]),_:1}),a(v,{modelValue:u(n),"onUpdate:modelValue":r[5]||(r[5]=f=>d(n)?n.value=f:null),location:"end center",variant:"text"},{default:t(()=>[e(" Pie icing biscuit soufflé liquorice topping. ")]),_:1},8,["modelValue"]),a(m,{onClick:r[6]||(r[6]=f=>s.value=!0)},{default:t(()=>[e(" Outlined ")]),_:1}),a(v,{modelValue:u(s),"onUpdate:modelValue":r[7]||(r[7]=f=>d(s)?s.value=f:null),location:"bottom end",variant:"outlined",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(m,{onClick:r[8]||(r[8]=f=>o.value=!0)},{default:t(()=>[e(" Flat ")]),_:1}),a(v,{modelValue:u(o),"onUpdate:modelValue":r[9]||(r[9]=f=>d(o)?o.value=f:null),location:"bottom start",variant:"flat",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])])}}}),F={class:"demo-space-x"},R=g({__name:"DemoSnackbarPosition",setup(T){const l=k(!1),S=k(!1),n=k(!1),s=k(!1),o=k(!1),c=k(!1),r=k(!1),m=k(!1),v=k(!1);return(f,i)=>{const B=p("VIcon"),_=p("VBtn"),I=p("VSnackbar");return x(),y("div",F,[a(_,{icon:"",variant:"text",onClick:i[0]||(i[0]=b=>S.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrow-up"})]),_:1}),a(I,{modelValue:u(S),"onUpdate:modelValue":i[1]||(i[1]=b=>d(S)?S.value=b:null),location:"top"},{default:t(()=>[e(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(_,{icon:"",variant:"text",onClick:i[2]||(i[2]=b=>n.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrow-up-right"})]),_:1}),a(I,{modelValue:u(n),"onUpdate:modelValue":i[3]||(i[3]=b=>d(n)?n.value=b:null),location:"top end"},{default:t(()=>[e(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(_,{icon:"",variant:"text",onClick:i[4]||(i[4]=b=>r.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrow-right"})]),_:1}),a(I,{modelValue:u(r),"onUpdate:modelValue":i[5]||(i[5]=b=>d(r)?r.value=b:null),location:"end center"},{default:t(()=>[e(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(_,{icon:"",variant:"text",onClick:i[6]||(i[6]=b=>s.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrow-down-right"})]),_:1}),a(I,{modelValue:u(s),"onUpdate:modelValue":i[7]||(i[7]=b=>d(s)?s.value=b:null),location:"bottom end"},{default:t(()=>[e(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(_,{icon:"",variant:"text",onClick:i[8]||(i[8]=b=>o.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrow-down"})]),_:1}),a(I,{modelValue:u(o),"onUpdate:modelValue":i[9]||(i[9]=b=>d(o)?o.value=b:null)},{default:t(()=>[e(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(_,{icon:"",variant:"text",onClick:i[10]||(i[10]=b=>c.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrow-down-left"})]),_:1}),a(I,{modelValue:u(c),"onUpdate:modelValue":i[11]||(i[11]=b=>d(c)?c.value=b:null),location:"bottom start"},{default:t(()=>[e(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(_,{icon:"",variant:"text",onClick:i[12]||(i[12]=b=>m.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrow-left"})]),_:1}),a(I,{modelValue:u(m),"onUpdate:modelValue":i[13]||(i[13]=b=>d(m)?m.value=b:null),location:"start center"},{default:t(()=>[e(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(_,{icon:"",variant:"text",onClick:i[14]||(i[14]=b=>l.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrow-up-left"})]),_:1}),a(I,{modelValue:u(l),"onUpdate:modelValue":i[15]||(i[15]=b=>d(l)?l.value=b:null),location:"top start"},{default:t(()=>[e(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(_,{icon:"",variant:"text",onClick:i[16]||(i[16]=b=>v.value=!0)},{default:t(()=>[a(B,{icon:"tabler-arrows-minimize"})]),_:1}),a(I,{modelValue:u(v),"onUpdate:modelValue":i[17]||(i[17]=b=>d(v)?v.value=b:null),location:"center"},{default:t(()=>[e(" I'm a center snackbar. ")]),_:1},8,["modelValue"])])}}}),j=g({__name:"DemoSnackbarVertical",setup(T){const l=k(!1);return(S,n)=>{const s=p("VBtn"),o=p("VSnackbar");return x(),y(w,null,[a(s,{onClick:n[0]||(n[0]=c=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(o,{modelValue:u(l),"onUpdate:modelValue":n[3]||(n[3]=c=>d(l)?l.value=c:null),vertical:""},{actions:t(()=>[a(s,{color:"success",onClick:n[1]||(n[1]=c=>l.value=!1)},{default:t(()=>[e(" Undo ")]),_:1}),a(s,{color:"error",onClick:n[2]||(n[2]=c=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64)}}}),q=g({__name:"DemoSnackbarTimeout",setup(T){const l=k(!1);return(S,n)=>{const s=p("VBtn"),o=p("VSnackbar");return x(),y(w,null,[a(s,{onClick:n[0]||(n[0]=c=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(o,{modelValue:u(l),"onUpdate:modelValue":n[1]||(n[1]=c=>d(l)?l.value=c:null),timeout:2e3},{default:t(()=>[e(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64)}}}),A=g({__name:"DemoSnackbarMultiLine",setup(T){const l=k(!1);return(S,n)=>{const s=p("VBtn"),o=p("VSnackbar");return x(),y(w,null,[a(s,{onClick:n[0]||(n[0]=c=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(o,{modelValue:u(l),"onUpdate:modelValue":n[2]||(n[2]=c=>d(l)?l.value=c:null),"multi-line":""},{actions:t(()=>[a(s,{color:"error",onClick:n[1]||(n[1]=c=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64)}}}),H=g({__name:"DemoSnackbarWithAction",setup(T){const l=k(!1);return(S,n)=>{const s=p("VBtn"),o=p("VSnackbar");return x(),y(w,null,[a(s,{onClick:n[0]||(n[0]=c=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(o,{modelValue:u(l),"onUpdate:modelValue":n[2]||(n[2]=c=>d(l)?l.value=c:null)},{actions:t(()=>[a(s,{color:"error",onClick:n[1]||(n[1]=c=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64)}}}),M=g({__name:"DemoSnackbarBasic",setup(T){const l=k(!1);return(S,n)=>{const s=p("VBtn"),o=p("VSnackbar");return x(),y(w,null,[a(s,{onClick:n[0]||(n[0]=c=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(o,{modelValue:u(l),"onUpdate:modelValue":n[1]||(n[1]=c=>d(l)?l.value=c:null)},{default:t(()=>[e(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64)}}}),P={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},z={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},L={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},J={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},N={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},W={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},G={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},K={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Q=V("p",null,[e("The "),V("code",null,"v-snackbar"),e(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),X=V("p",null,[e("Use "),V("code",null,"actions"),e(" slot to add action button. A "),V("code",null,"v-snackbar"),e(" in its simplest form displays a temporary and closable notification to the user.")],-1),Y=V("p",null,[e("The "),V("code",null,"multi-line"),e(" property extends the height of the "),V("code",null,"v-snackbar"),e(" to give you a little more room for content.")],-1),Z=V("p",null,[e("The "),V("code",null,"timeout"),e(" property lets you customize the delay before the "),V("code",null,"v-snackbar"),e(" is hidden.")],-1),h=V("p",null,[e("The "),V("code",null,"vertical"),e(" property allows you to stack the content of your "),V("code",null,"v-snackbar"),e(".")],-1),aa=V("p",null,[e("Use "),V("code",null,"location"),e(" prop to change the position of snackbar.")],-1),ta=V("p",null,[e("Apply different styles to the snackbar using props such as "),V("code",null,"shaped"),e(", "),V("code",null,"rounded"),e(", "),V("code",null,"color"),e(", "),V("code",null,"text"),e(", "),V("code",null,"outlined"),e(", "),V("code",null,"tile"),e(" and more.")],-1),ea=V("p",null,"Use transition prop to sets the component transition.",-1),ia=g({__name:"snackbar",setup(T){return(l,S)=>{const n=M,s=$,o=p("VCol"),c=H,r=A,m=q,v=j,f=R,i=E,B=D,_=p("VRow");return x(),C(_,{class:"match-height"},{default:t(()=>[a(o,{cols:"12",md:"6"},{default:t(()=>[a(s,{title:"Basic",code:P},{default:t(()=>[Q,a(n)]),_:1},8,["code"])]),_:1}),a(o,{cols:"12",md:"6"},{default:t(()=>[a(s,{title:"With Action",code:K},{default:t(()=>[X,a(c)]),_:1},8,["code"])]),_:1}),a(o,{cols:"12",md:"6"},{default:t(()=>[a(s,{title:"Multi Line",code:z},{default:t(()=>[Y,a(r)]),_:1},8,["code"])]),_:1}),a(o,{cols:"12",md:"6"},{default:t(()=>[a(s,{title:"Timeout",code:J},{default:t(()=>[Z,a(m)]),_:1},8,["code"])]),_:1}),a(o,{cols:"12",md:"6"},{default:t(()=>[a(s,{title:"Vertical",code:G},{default:t(()=>[h,a(v)]),_:1},8,["code"])]),_:1}),a(o,{cols:"12",md:"6"},{default:t(()=>[a(s,{title:"Position",code:L},{default:t(()=>[aa,a(f)]),_:1},8,["code"])]),_:1}),a(o,{cols:"12",md:"6"},{default:t(()=>[a(s,{title:"Variants",code:W},{default:t(()=>[ta,a(i)]),_:1},8,["code"])]),_:1}),a(o,{cols:"12",md:"6"},{default:t(()=>[a(s,{title:"Transition",code:N},{default:t(()=>[ea,a(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ia as default};
