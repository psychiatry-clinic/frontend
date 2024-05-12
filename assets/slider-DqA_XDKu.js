import{d as h,r as v,a4 as R,a as d,o as x,c as g,e as s,x as D,n as i,b as e,f as t,g as C,J as j,z as I,ad as V,F as A,Q as M,R as L,v as c}from"./index-B-uKkDM3.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as O}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import{_ as E}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const Y=b=>(M("data-v-1e4e9e98"),b=b(),L(),b),N={class:"d-flex justify-space-between ma-4"},G=["textContent"],J=Y(()=>s("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),$=40,T=218,Q=h({__name:"DemoSliderAppendAndPrepend",setup(b){const o=v(40),a=v(!1),n=R(()=>o.value<100?"primary":o.value<125?"success":o.value<140?"info":o.value<175?"warning":"error"),r=R(()=>`${60/o.value}s`),l=()=>{o.value>$&&(o.value-=1)},u=()=>{o.value<T&&(o.value+=1)};return(_,m)=>{const p=d("VAvatar"),w=d("VFadeTransition"),f=d("VIcon"),S=d("VBtn"),k=d("VSlider");return x(),g(A,null,[s("div",N,[s("div",null,[s("span",{class:"text-6xl font-weight-light",textContent:D(i(o))},null,8,G),J,e(w,null,{default:t(()=>[i(a)?(x(),C(p,{key:0,color:i(n),style:j({animationDuration:i(r)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):I("",!0)]),_:1})]),s("div",null,[e(S,{color:i(n),icon:"",elevation:"0",onClick:m[0]||(m[0]=y=>a.value=!i(a))},{default:t(()=>[e(f,{size:"large",icon:i(a)?"tabler-pause":"tabler-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(k,{modelValue:i(o),"onUpdate:modelValue":m[1]||(m[1]=y=>V(o)?o.value=y:null),color:i(n),step:1,min:$,max:T,"track-color":"secondary"},{prepend:t(()=>[e(S,{size:"small",variant:"text",icon:"tabler-minus",color:i(n),onClick:l},null,8,["color"])]),append:t(()=>[e(S,{size:"small",variant:"text",icon:"tabler-plus",color:i(n),onClick:u},null,8,["color"])]),_:1},8,["modelValue","color"])],64)}}}),q=z(Q,[["__scopeId","data-v-1e4e9e98"]]),H={class:"d-flex justify-space-between"},K={class:"d-flex justify-space-between"},W={class:"d-flex justify-space-between"},X=h({__name:"DemoSliderAppendTextField",setup(b){const o=v(161),a=v(105),n=v(225);return(r,l)=>{const u=d("VResponsive"),_=d("VSlider"),m=d("VTextField"),p=d("VCol"),w=d("VRow");return x(),g(A,null,[e(u,{style:j({background:`rgb(${i(o)}, ${i(a)}, ${i(n)})`}),height:"150px"},null,8,["style"]),e(w,{class:"mt-5"},{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[s("div",H,[e(_,{modelValue:i(o),"onUpdate:modelValue":l[0]||(l[0]=f=>V(o)?o.value=f:null),max:255,step:1,"prepend-icon":"tabler-letter-r"},null,8,["modelValue"]),e(m,{modelValue:i(o),"onUpdate:modelValue":l[1]||(l[1]=f=>V(o)?o.value=f:null),type:"number",placeholder:"10",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(p,{cols:"12"},{default:t(()=>[s("div",K,[e(_,{modelValue:i(a),"onUpdate:modelValue":l[2]||(l[2]=f=>V(a)?a.value=f:null),max:255,step:1,"prepend-icon":"tabler-letter-g"},null,8,["modelValue"]),e(m,{modelValue:i(a),"onUpdate:modelValue":l[3]||(l[3]=f=>V(a)?a.value=f:null),type:"number",placeholder:"20",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(p,{cols:"12"},{default:t(()=>[s("div",W,[e(_,{modelValue:i(n),"onUpdate:modelValue":l[4]||(l[4]=f=>V(n)?n.value=f:null),max:255,step:1,"prepend-icon":"tabler-letter-b"},null,8,["modelValue"]),e(m,{modelValue:i(n),"onUpdate:modelValue":l[5]||(l[5]=f=>V(n)?n.value=f:null),type:"number",placeholder:"30",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1})]),_:1})],64)}}}),Z=h({__name:"DemoSliderVertical",setup(b){const o=v(10);return(a,n)=>{const r=d("VSlider");return x(),C(r,{modelValue:i(o),"onUpdate:modelValue":n[0]||(n[0]=l=>V(o)?o.value=l:null),direction:"vertical"},null,8,["modelValue"])}}}),ee=s("div",{class:"text-caption"}," Show ticks when using slider ",-1),le=s("div",{class:"text-caption"}," Always show ticks ",-1),oe=s("div",{class:"text-caption"}," Tick size ",-1),te=s("div",{class:"text-caption"}," Tick labels ",-1),se=h({__name:"DemoSliderTicks",setup(b){const o=v(0),a=v(1),n={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(r,l)=>{const u=d("VSlider"),_=d("VCol"),m=d("VRow");return x(),C(m,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[ee,e(u,{modelValue:i(o),"onUpdate:modelValue":l[0]||(l[0]=p=>V(o)?o.value=p:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[le,e(u,{modelValue:i(o),"onUpdate:modelValue":l[1]||(l[1]=p=>V(o)?o.value=p:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[oe,e(u,{modelValue:i(o),"onUpdate:modelValue":l[2]||(l[2]=p=>V(o)?o.value=p:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[te,e(u,{modelValue:i(a),"onUpdate:modelValue":l[3]||(l[3]=p=>V(a)?a.value=p:null),ticks:n,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1})}}}),ae=s("div",{class:"text-caption"}," Show thumb when using slider ",-1),ne=s("div",{class:"text-caption"}," Always show thumb label ",-1),ie=s("div",{class:"text-caption"}," Custom thumb size ",-1),re=s("div",{class:"text-caption"}," Custom thumb label ",-1),de=h({__name:"DemoSliderThumb",setup(b){const o=["😭","😢","😔","🙁","😐","🙂","😊","😁","😄","😍"],a=v(45);return(n,r)=>{const l=d("VSlider"),u=d("VCol"),_=d("VRow");return x(),C(_,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[ae,e(l,{modelValue:i(a),"onUpdate:modelValue":r[0]||(r[0]=m=>V(a)?a.value=m:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ne,e(l,{modelValue:i(a),"onUpdate:modelValue":r[1]||(r[1]=m=>V(a)?a.value=m:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ie,e(l,{modelValue:i(a),"onUpdate:modelValue":r[2]||(r[2]=m=>V(a)?a.value=m:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[re,e(l,{modelValue:i(a),"onUpdate:modelValue":r[3]||(r[3]=m=>V(a)?a.value=m:null),"thumb-label":"always"},{"thumb-label":t(({modelValue:m})=>[c(D(o[Math.min(Math.floor(m/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ce={};function me(b,o){const a=d("VSlider");return x(),C(a,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const ue=z(ce,[["render",me]]),pe={class:"d-flex justify-space-between"},Ve=h({__name:"DemoSliderMinAndMax",setup(b){const o=v(-50),a=v(90),n=v(40);return(r,l)=>{const u=d("VSlider"),_=O;return x(),g("div",pe,[e(u,{modelValue:i(n),"onUpdate:modelValue":l[0]||(l[0]=m=>V(n)?n.value=m:null),max:i(a),min:i(o),step:1},null,8,["modelValue","max","min"]),e(_,{modelValue:i(n),"onUpdate:modelValue":l[1]||(l[1]=m=>V(n)?n.value=m:null),type:"number",placeholder:"10",style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])}}}),_e=h({__name:"DemoSliderValidation",setup(b){const o=v(30),a=[n=>n<=40||"Only 40 in stock"];return(n,r)=>{const l=d("VSlider");return x(),C(l,{modelValue:i(o),"onUpdate:modelValue":r[0]||(r[0]=u=>V(o)?o.value=u:null),error:i(o)>40,rules:a,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"])}}}),ve=h({__name:"DemoSliderStep",setup(b){const o=v(0);return(a,n)=>{const r=d("VSlider");return x(),C(r,{modelValue:i(o),"onUpdate:modelValue":n[0]||(n[0]=l=>V(o)?o.value=l:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"])}}}),be=h({__name:"DemoSliderIcons",setup(b){const o=v(0),a=v(0),n=v(10);return(r,l)=>{const u=d("VSlider"),_=d("VCol"),m=d("VRow");return x(),C(m,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[e(u,{modelValue:i(o),"onUpdate:modelValue":l[0]||(l[0]=p=>V(o)?o.value=p:null),"prepend-icon":"tabler-volume"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(u,{modelValue:i(a),"onUpdate:modelValue":l[1]||(l[1]=p=>V(a)?a.value=p:null),"append-icon":"tabler-alarm"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(u,{modelValue:i(n),"onUpdate:modelValue":l[2]||(l[2]=p=>V(n)?n.value=p:null),"append-icon":"tabler-minus","prepend-icon":"tabler-plus"},null,8,["modelValue"])]),_:1})]),_:1})}}}),fe=s("div",{class:"text-caption"}," color ",-1),xe=s("div",{class:"text-caption"}," track-color ",-1),he=s("div",{class:"text-caption"}," thumb-color ",-1),Ce=h({__name:"DemoSliderColors",setup(b){const o=v(25),a=v(75),n=v(50);return(r,l)=>{const u=d("VSlider"),_=d("VCol"),m=d("VRow");return x(),C(m,null,{default:t(()=>[e(_,{cols:"12"},{default:t(()=>[fe,e(u,{modelValue:i(o),"onUpdate:modelValue":l[0]||(l[0]=p=>V(o)?o.value=p:null),color:"error"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[xe,e(u,{modelValue:i(a),"onUpdate:modelValue":l[1]||(l[1]=p=>V(a)?a.value=p:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[he,e(u,{modelValue:i(n),"onUpdate:modelValue":l[2]||(l[2]=p=>V(n)?n.value=p:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1})}}}),we={},Se=s("div",{class:"text-caption"}," Disabled ",-1),ye=s("div",{class:"text-caption"}," Readonly ",-1);function ke(b,o){const a=d("VSlider"),n=d("VCol"),r=d("VRow");return x(),C(r,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[Se,e(a,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(n,{cols:"12"},{default:t(()=>[ye,e(a,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const ge=z(we,[["render",ke]]),ze=h({__name:"DemoSliderBasic",setup(b){const o=v(30);return(a,n)=>{const r=d("VSlider"),l=d("VCol"),u=d("VRow");return x(),C(u,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(r)]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(r,{modelValue:i(o),"onUpdate:modelValue":n[0]||(n[0]=_=>V(o)?o.value=_:null)},null,8,["modelValue"])]),_:1})]),_:1})}}}),Re={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},$e={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-r"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-r"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},Te={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},De={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`},Ue={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`},Fe={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Be={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Pe={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '😔', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '😔',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Le={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Oe=s("p",null,[c("The "),s("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Ee=s("p",null,[c("You cannot interact with "),s("code",null,"disabled"),c(" and "),s("code",null,"readonly"),c(" sliders.")],-1),Ye=s("p",null,[c("You can set the colors of the slider using the props "),s("code",null,"color"),c(", "),s("code",null,"track-color"),c(" and "),s("code",null,"thumb-color"),c(".")],-1),Ne=s("p",null,[c("You can add icons to the slider with the "),s("code",null,"append-icon"),c(" and "),s("code",null,"prepend-icon"),c(" props.")],-1),Ge=s("p",null,[c("Using the "),s("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),Je=s("p",null,[c("Vuetify includes simple validation through the "),s("code",null,"rules"),c(" prop.")],-1),Qe=s("p",null,[c("You can set "),s("code",null,"min"),c(" and "),s("code",null,"max"),c(" values of sliders.")],-1),qe=s("p",null,[c("Use "),s("code",null,"thumb-size"),c(", "),s("code",null,"tick-size"),c(", and "),s("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),He=s("p",null,[c("You can display a thumb label while sliding or always with the "),s("code",null,"thumb-label"),c(" prop.")],-1),Ke=s("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),We=s("p",null,[c(" You can use the "),s("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),Xe=s("p",null,[c("Sliders can be combined with other components in its "),s("code",null,"append"),c(" slot, such as "),s("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),Ze=s("p",null,[c("Use slots such as "),s("code",null,"append"),c(" and "),s("code",null,"prepend"),c(" to easily customize the "),s("code",null,"v-slider"),c(" to fit any situation.")],-1),al=h({__name:"slider",setup(b){return(o,a)=>{const n=ze,r=E,l=d("VCol"),u=ge,_=Ce,m=be,p=ve,w=_e,f=Ve,S=ue,k=de,y=se,U=Z,F=X,B=q,P=d("VRow");return x(),C(P,{class:"match-height"},{default:t(()=>[e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Basic",code:Te},{default:t(()=>[Oe,e(n)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Disabled and Readonly",code:je},{default:t(()=>[Ee,e(u)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Colors",code:De},{default:t(()=>[Ye,e(_)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Icons",code:Ae},{default:t(()=>[Ne,e(m)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Step",code:Be},{default:t(()=>[Ge,e(p)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Validation",code:Me},{default:t(()=>[Je,e(w)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Min and Max",code:Ue},{default:t(()=>[Qe,e(f)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Size",code:Fe},{default:t(()=>[qe,e(S)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Thumb",code:Pe},{default:t(()=>[He,e(k)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Ticks",code:Ie},{default:t(()=>[Ke,e(y)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Vertical",code:Le},{default:t(()=>[We,e(U)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append text field",code:$e},{default:t(()=>[Xe,e(F)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append and prepend",code:Re},{default:t(()=>[Ze,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{al as default};
