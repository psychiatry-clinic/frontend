import{d as f,r as b,a as s,o as u,g as v,f as n,b as t,n as p,ad as W,c as B,v as o,e as l,Q as j,R}from"./index-CJpjWKD8.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as D}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const z=f({__name:"DemoButtonGroup",setup(i){const r=b(1);return(e,d)=>{const a=s("VBtn"),c=s("VBtnToggle");return u(),v(c,{modelValue:p(r),"onUpdate:modelValue":d[0]||(d[0]=V=>W(r)?r.value=V:null),density:"comfortable"},{default:n(()=>[t(a,{icon:"tabler-align-left"}),t(a,{icon:"tabler-align-center"}),t(a,{icon:"tabler-align-right"}),t(a,{icon:"tabler-align-justified"})]),_:1},8,["modelValue"])}}}),N={},U={class:"demo-space-x"};function O(i,r){const e=s("VBtn");return u(),B("div",U,[t(e,{href:"https://pixinvent.com/"},{default:n(()=>[o(" String Literal ")]),_:1}),t(e,{href:"https://pixinvent.com/",target:"_blank",rel:"noopener noreferrer"},{default:n(()=>[o(" Open New Tab ")]),_:1})])}const A=_(N,[["render",O]]),Q={},q={class:"demo-space-x"};function G(i,r){const e=s("VBtn");return u(),B("div",q,[t(e,{to:"alert"},{default:n(()=>[o(" String Literal ")]),_:1}),t(e,{color:"warning",to:{path:"alert"}},{default:n(()=>[o(" Object Path ")]),_:1}),t(e,{color:"success",to:{name:"components-alert"}},{default:n(()=>[o(" Named Router ")]),_:1}),t(e,{color:"secondary",to:{path:"alert",query:{plan:"private"}}},{default:n(()=>[o(" With Query ")]),_:1})])}const Y=_(Q,[["render",G]]),F=i=>(j("data-v-cf1f73fc"),i=i(),R(),i),H={class:"demo-space-x"},J=F(()=>l("span",null,"Loading...",-1)),K={class:"custom-loader"},M=f({__name:"DemoButtonLoaders",setup(i){const r=b([]),e=d=>{r.value[d]=!0,setTimeout(()=>{r.value[d]=!1},3e3)};return(d,a)=>{const c=s("VBtn"),V=s("VIcon");return u(),B("div",H,[t(c,{loading:p(r)[0],disabled:p(r)[0],color:"primary",onClick:a[0]||(a[0]=m=>e(0))},{default:n(()=>[o(" Accept Terms ")]),_:1},8,["loading","disabled"]),t(c,{loading:p(r)[1],disabled:p(r)[1],color:"secondary",onClick:a[1]||(a[1]=m=>e(1))},{default:n(()=>[o(" Upload "),t(V,{end:"",icon:"tabler-cloud-upload"})]),_:1},8,["loading","disabled"]),t(c,{loading:p(r)[2],disabled:p(r)[2],color:"success",onClick:a[2]||(a[2]=m=>e(2))},{loader:n(()=>[J]),default:n(()=>[o(" Loader slot ")]),_:1},8,["loading","disabled"]),t(c,{loading:p(r)[3],disabled:p(r)[3],color:"info",onClick:a[3]||(a[3]=m=>e(3))},{loader:n(()=>[l("span",K,[t(V,{icon:"tabler-refresh"})])]),default:n(()=>[o(" Icon Loader ")]),_:1},8,["loading","disabled"]),t(c,{loading:p(r)[4],disabled:p(r)[4],color:"warning",icon:"tabler-cloud-upload",onClick:a[4]||(a[4]=m=>e(4))},null,8,["loading","disabled"])])}}}),X=_(M,[["__scopeId","data-v-cf1f73fc"]]),Z={};function tt(i,r){const e=s("VBtn"),d=s("VCol"),a=s("VRow");return u(),v(a,null,{default:n(()=>[t(d,{cols:"12",sm:"6"},{default:n(()=>[t(e,{block:""},{default:n(()=>[o(" Block Button ")]),_:1})]),_:1}),t(d,{cols:"12",sm:"6"},{default:n(()=>[t(e,{variant:"outlined",block:""},{default:n(()=>[o(" Block Button ")]),_:1})]),_:1})]),_:1})}const nt=_(Z,[["render",tt]]),ot={},et={class:"demo-space-x"};function at(i,r){const e=s("VBtn");return u(),B("div",et,[t(e,{size:"x-large"},{default:n(()=>[o(" Extra large Button ")]),_:1}),t(e,{color:"success",size:"large"},{default:n(()=>[o(" Large Button ")]),_:1}),t(e,{color:"info"},{default:n(()=>[o(" Normal Button ")]),_:1}),t(e,{size:"small",color:"warning"},{default:n(()=>[o(" Small Button ")]),_:1}),t(e,{size:"x-small",color:"error"},{default:n(()=>[o(" Extra small Button ")]),_:1})])}const lt=_(ot,[["render",at]]),rt={},ct={class:"demo-space-x"};function st(i,r){const e=s("VBtn");return u(),B("div",ct,[t(e,{icon:"tabler-briefcase",rounded:""}),t(e,{variant:"tonal",icon:"tabler-user-plus"}),t(e,{icon:"tabler-search",variant:"outlined",color:"success"}),t(e,{icon:"tabler-thumb-up",variant:"text",color:"info"}),t(e,{icon:"tabler-star",variant:"tonal",color:"success",rounded:""}),t(e,{icon:"tabler-heart",variant:"text",color:"error"})])}const it=_(rt,[["render",st]]),dt={},ut={class:"demo-space-x"};function _t(i,r){const e=s("VIcon"),d=s("VBtn");return u(),B("div",ut,[t(d,null,{default:n(()=>[o(" Accept "),t(e,{end:"",icon:"tabler-checkbox"})]),_:1}),t(d,{color:"secondary"},{default:n(()=>[t(e,{start:"",icon:"tabler-circle-minus"}),o("Cancel ")]),_:1}),t(d,{color:"success"},{default:n(()=>[o(" Upload "),t(e,{end:"",icon:"tabler-cloud-upload"})]),_:1}),t(d,{color:"info"},{default:n(()=>[t(e,{start:"",icon:"tabler-arrow-left"}),o(" Back ")]),_:1}),t(d,{color:"warning"},{default:n(()=>[t(e,{icon:"tabler-settings"})]),_:1}),t(d,{color:"error"},{default:n(()=>[t(e,{icon:"tabler-circle-off"})]),_:1})])}const Bt=_(dt,[["render",_t]]),pt={},Vt={class:"demo-space-x"};function mt(i,r){const e=s("VBtn");return u(),B("div",Vt,[t(e,{variant:"tonal"},{default:n(()=>[o(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"tonal"},{default:n(()=>[o(" Secondary ")]),_:1}),t(e,{color:"success",variant:"tonal"},{default:n(()=>[o(" Success ")]),_:1}),t(e,{color:"info",variant:"tonal"},{default:n(()=>[o(" Info ")]),_:1}),t(e,{color:"warning",variant:"tonal"},{default:n(()=>[o(" Warning ")]),_:1}),t(e,{color:"error",variant:"tonal"},{default:n(()=>[o(" Error ")]),_:1})])}const ft=_(pt,[["render",mt]]),vt={},gt={class:"demo-space-x"};function bt(i,r){const e=s("VBtn");return u(),B("div",gt,[t(e,{variant:"plain"},{default:n(()=>[o(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"plain"},{default:n(()=>[o(" Secondary ")]),_:1}),t(e,{color:"success",variant:"plain"},{default:n(()=>[o(" Success ")]),_:1}),t(e,{color:"info",variant:"plain"},{default:n(()=>[o(" Info ")]),_:1}),t(e,{color:"warning",variant:"plain"},{default:n(()=>[o(" Warning ")]),_:1}),t(e,{color:"error",variant:"plain"},{default:n(()=>[o(" Error ")]),_:1})])}const ht=_(vt,[["render",bt]]),xt={},yt={class:"demo-space-x"};function kt(i,r){const e=s("VBtn");return u(),B("div",yt,[t(e,{variant:"text"},{default:n(()=>[o(" Primary ")]),_:1}),t(e,{variant:"text",color:"secondary"},{default:n(()=>[o(" Secondary ")]),_:1}),t(e,{variant:"text",color:"success"},{default:n(()=>[o(" Success ")]),_:1}),t(e,{variant:"text",color:"info"},{default:n(()=>[o(" Info ")]),_:1}),t(e,{variant:"text",color:"warning"},{default:n(()=>[o(" Warning ")]),_:1}),t(e,{variant:"text",color:"error"},{default:n(()=>[o(" Error ")]),_:1})])}const wt=_(xt,[["render",kt]]),It={},St={class:"demo-space-x"};function $t(i,r){const e=s("VBtn");return u(),B("div",St,[t(e,null,{default:n(()=>[o(" Normal Button ")]),_:1}),t(e,{rounded:"lg",color:"secondary"},{default:n(()=>[o(" Rounded Button ")]),_:1}),t(e,{rounded:0,color:"success"},{default:n(()=>[o(" Tile Button ")]),_:1}),t(e,{rounded:"pill",color:"info"},{default:n(()=>[o(" Pill Button ")]),_:1})])}const Et=_(It,[["render",$t]]),Tt={},Ct={class:"demo-space-x"};function Pt(i,r){const e=s("VBtn");return u(),B("div",Ct,[t(e,{variant:"flat"},{default:n(()=>[o(" Primary ")]),_:1}),t(e,{variant:"flat",color:"secondary"},{default:n(()=>[o(" Secondary ")]),_:1}),t(e,{variant:"flat",color:"success"},{default:n(()=>[o(" Success ")]),_:1}),t(e,{variant:"flat",color:"info"},{default:n(()=>[o(" Info ")]),_:1}),t(e,{variant:"flat",color:"warning"},{default:n(()=>[o(" Warning ")]),_:1}),t(e,{variant:"flat",color:"error"},{default:n(()=>[o(" Error ")]),_:1})])}const Lt=_(Tt,[["render",Pt]]),Wt={},jt={class:"demo-space-x"};function Rt(i,r){const e=s("VBtn");return u(),B("div",jt,[t(e,{variant:"outlined"},{default:n(()=>[o(" Primary ")]),_:1}),t(e,{variant:"outlined",color:"secondary"},{default:n(()=>[o(" Secondary ")]),_:1}),t(e,{variant:"outlined",color:"success"},{default:n(()=>[o(" Success ")]),_:1}),t(e,{variant:"outlined",color:"info"},{default:n(()=>[o(" Info ")]),_:1}),t(e,{variant:"outlined",color:"warning"},{default:n(()=>[o(" Warning ")]),_:1}),t(e,{variant:"outlined",color:"error"},{default:n(()=>[o(" Error ")]),_:1})])}const Dt=_(Wt,[["render",Rt]]),zt={},Nt={class:"demo-space-x"};function Ut(i,r){const e=s("VBtn");return u(),B("div",Nt,[t(e,{color:"primary"},{default:n(()=>[o(" Primary ")]),_:1}),t(e,{color:"secondary"},{default:n(()=>[o(" Secondary ")]),_:1}),t(e,{color:"success"},{default:n(()=>[o(" Success ")]),_:1}),t(e,{color:"info"},{default:n(()=>[o(" Info ")]),_:1}),t(e,{color:"warning"},{default:n(()=>[o(" Warning ")]),_:1}),t(e,{color:"error"},{default:n(()=>[o(" Error ")]),_:1})])}const Ot=_(zt,[["render",Ut]]),At={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},Qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Gt={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="comfortable"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="comfortable"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`},Yt={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`},Ft={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      rounded
    />

    <VBtn
      variant="tonal"
      icon="tabler-user-plus"
    />

    <VBtn
      icon="tabler-search"
      variant="outlined"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="tonal"
      color="success"
      rounded
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      rounded
    />

    <VBtn
      variant="tonal"
      icon="tabler-user-plus"
    />

    <VBtn
      icon="tabler-search"
      variant="outlined"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="tonal"
      color="success"
      rounded
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Jt={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`},Kt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Mt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},tn={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},nn={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},on={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`},en=l("p",null,[o("The "),l("code",null,"color"),o(" prop is used to change the background color of the alert.")],-1),an=l("p",null,[o("The "),l("code",null,"outlined"),o(" variant option is used to create outlined buttons.")],-1),ln=l("p",null,[o("The "),l("code",null,"flat"),o(" buttons still maintain their background color, but have no box shadow.")],-1),rn=l("p",null,[o("Use the "),l("code",null,"rounded"),o(" prop to control the border radius of buttons.")],-1),cn=l("p",null,[o("Use "),l("code",null,"text"),o(" variant option to create text button. Text buttons have no box shadow and no background.")],-1),sn=l("p",null,[o("Use "),l("code",null,"plain"),o(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1),dn=l("p",null,[o("Use "),l("code",null,"tonal"),o(" variant option to a create a light background button.")],-1),un=l("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1),_n=l("p",null,[o("Use "),l("code",null,"VIcon"),o(" component inside button to create buttons that looks like rest of the theme.")],-1),Bn=l("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1),pn=l("p",null,[o("The "),l("code",null,"block"),o(" prop allows buttons to extend the full available width.")],-1),Vn=l("p",null,[o("Using the "),l("code",null,"loading"),o(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),l("code",null,"v-progress-circular"),o(" component but this can be customized.")],-1),mn=l("p",null,[o("Use "),l("code",null,"to"),o(" prop to create button with router support.")],-1),fn=l("p",null,[o("Designates that the component is a link. This is automatic when using the "),l("code",null,"href"),o(" or "),l("code",null,"to"),o(" prop.")],-1),vn=l("p",null,[o(" Wrap buttons with the "),l("code",null,"v-btn-toggle"),o(" component to create a group button. You can add a visual divider between buttons with the "),l("code",null,"divided"),o(" prop. ")],-1),yn=f({__name:"button",setup(i){return(r,e)=>{const d=Ot,a=D,c=s("VCol"),V=Dt,m=Lt,h=Et,x=wt,y=ht,k=ft,w=Bt,I=it,S=lt,$=nt,E=X,g=s("VAlert"),T=Y,C=A,P=z,L=s("VRow");return u(),v(L,null,{default:n(()=>[t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Colors",code:Qt},{default:n(()=>[en,t(d)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Outlined",code:Kt},{default:n(()=>[an,t(V)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Flat",code:qt},{default:n(()=>[ln,t(m)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Rounded",code:Xt},{default:n(()=>[rn,t(h)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Text",code:nn},{default:n(()=>[cn,t(x)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Plain",code:Mt},{default:n(()=>[sn,t(y)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Tonal",code:on},{default:n(()=>[dn,t(k)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Icon",code:Yt},{default:n(()=>[un,t(w)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Icon Only",code:Ft},{default:n(()=>[_n,t(I)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Sizing",code:tn},{default:n(()=>[Bn,t(S)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Block",code:At},{default:n(()=>[pn,t($)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Loaders",code:Jt},{default:n(()=>[Vn,t(E)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Router",code:Zt},{default:n(()=>[mn,t(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:n(()=>[o(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(T)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Link",code:Ht},{default:n(()=>[fn,t(g,{color:"warning",variant:"tonal",class:"mb-4"},{default:n(()=>[o(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(C)]),_:1},8,["code"])]),_:1}),t(c,{cols:"12"},{default:n(()=>[t(a,{title:"Group",code:Gt},{default:n(()=>[vn,t(P)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{yn as default};
