import{d as P,r as u,a as g,o as m,c as V,b as n,n as p,ad as d,g as v,f as s,e as l,v as a}from"./index-B-uKkDM3.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as S}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";const j={class:"d-flex flex-column gap-6 px-4"},w=P({__name:"DemoPaginationSize",setup(_){const t=u(1),c=u(2),o=u(3);return(i,e)=>{const f=g("VPagination");return m(),V("div",j,[n(f,{modelValue:p(t),"onUpdate:modelValue":e[0]||(e[0]=r=>d(t)?t.value=r:null),length:7,size:"small"},null,8,["modelValue"]),n(f,{modelValue:p(c),"onUpdate:modelValue":e[1]||(e[1]=r=>d(c)?c.value=r:null),length:7},null,8,["modelValue"]),n(f,{modelValue:p(o),"onUpdate:modelValue":e[2]||(e[2]=r=>d(o)?o.value=r:null),length:7,"total-visible":i.$vuetify.display.xs?1:7,size:"large"},null,8,["modelValue","total-visible"])])}}}),I={class:"d-flex flex-column gap-6"},T=P({__name:"DemoPaginationColor",setup(_){const t=u(1),c=u(2),o=u(3);return(i,e)=>{const f=g("VPagination");return m(),V("div",I,[n(f,{modelValue:p(t),"onUpdate:modelValue":e[0]||(e[0]=r=>d(t)?t.value=r:null),length:7,"active-color":"success"},null,8,["modelValue"]),n(f,{modelValue:p(c),"onUpdate:modelValue":e[1]||(e[1]=r=>d(c)?c.value=r:null),length:7,"active-color":"error"},null,8,["modelValue"]),n(f,{modelValue:p(o),"onUpdate:modelValue":e[2]||(e[2]=r=>d(o)?o.value=r:null),length:7,"active-color":"info"},null,8,["modelValue"])])}}}),B=P({__name:"DemoPaginationTotalVisible",setup(_){const t=u(1);return(c,o)=>{const i=g("VPagination");return m(),v(i,{modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=e=>d(t)?t.value=e:null),length:15,"total-visible":c.$vuetify.display.mdAndUp?7:3},null,8,["modelValue","total-visible"])}}}),E=P({__name:"DemoPaginationLength",setup(_){const t=u(1);return(c,o)=>{const i=g("VPagination");return m(),v(i,{modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=e=>d(t)?t.value=e:null),length:15},null,8,["modelValue"])}}}),O=P({__name:"DemoPaginationIcons",setup(_){const t=u(1);return(c,o)=>{const i=g("VPagination");return m(),v(i,{modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=e=>d(t)?t.value=e:null),length:5,"prev-icon":"tabler-caret-left","next-icon":"tabler-caret-right"},null,8,["modelValue"])}}}),A={};function k(_,t){const c=g("VPagination");return m(),v(c,{length:5,disabled:""})}const L=z(A,[["render",k]]),N=P({__name:"DemoPaginationOutlineCircle",setup(_){const t=u(1);return(c,o)=>{const i=g("VPagination");return m(),v(i,{modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=e=>d(t)?t.value=e:null),variant:"outlined",length:5,rounded:"circle"},null,8,["modelValue"])}}}),R=P({__name:"DemoPaginationCircle",setup(_){const t=u(1);return(c,o)=>{const i=g("VPagination");return m(),v(i,{modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=e=>d(t)?t.value=e:null),length:5,rounded:"circle"},null,8,["modelValue"])}}}),Y=P({__name:"DemoPaginationOutline",setup(_){const t=u(1);return(c,o)=>{const i=g("VPagination");return m(),v(i,{modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=e=>d(t)?t.value=e:null),variant:"outlined",length:5},null,8,["modelValue"])}}}),q=P({__name:"DemoPaginationBasic",setup(_){const t=u(1);return(c,o)=>{const i=g("VPagination");return m(),v(i,{modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=e=>d(t)?t.value=e:null),length:5},null,8,["modelValue"])}}}),F={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},G={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},H={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`},J={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},K={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`},M={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},Q={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`},W={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`},X={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6 px-4">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      :total-visible="$vuetify.display.xs ? 1 : 7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6 px-4">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      :total-visible="$vuetify.display.xs ? 1 : 7"
      size="large"
    />
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>
`},ee=l("p",null,[a("The "),l("code",null,"v-pagination"),a(" component is used to separate long sets of data.")],-1),te=l("p",null,[a("The "),l("code",null,"variant='outline'"),a(" prop is used to give outline to pagination item.")],-1),ne=l("p",null,[a("The "),l("code",null,"rounded"),a(" prop allows you to render pagination buttons with alternative styles.")],-1),oe=l("p",null,[a("The "),l("code",null,"variant='outline'"),a(" and "),l("code",null,"rounded"),a(" prop is used to give rounded outline to pagination item.")],-1),le=l("p",null,[a("Pagination items can be manually deactivated using the "),l("code",null,"disabled"),a(" prop.")],-1),ae=l("p",null,[a("Previous and next page icons can be customized with the "),l("code",null,"prev-icon"),a(" and "),l("code",null,"next-icon"),a(" props.")],-1),ie=l("p",null,[a("Using the "),l("code",null,"length"),a(" prop you can set the length of "),l("code",null,"v-pagination"),a(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1),se=l("p",null,[a("You can also manually set the maximum number of visible page buttons with the "),l("code",null,"total-visible"),a(" prop.")],-1),ce=l("p",null,[a("Use "),l("code",null,"active-color"),a(" prop for create different color pagination.")],-1),re=l("p",null,[a("Use "),l("code",null,"size"),a(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),l("strong",null,"x-small"),a(", "),l("strong",null,"small"),a(", "),l("strong",null,"default"),a(", "),l("strong",null,"large"),a(", and "),l("strong",null,"x-large"),a(".")],-1),me=P({__name:"pagination",setup(_){return(t,c)=>{const o=q,i=S,e=g("VCol"),f=Y,r=R,h=N,x=L,b=O,D=E,U=B,$=T,C=w,y=g("VRow");return m(),v(y,{class:"match-height"},{default:s(()=>[n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Basic",code:F},{default:s(()=>[ee,n(o)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Outline",code:Q},{default:s(()=>[te,n(f)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Circle",code:G},{default:s(()=>[ne,n(r)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Outline Circle",code:W},{default:s(()=>[oe,n(h)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Disabled",code:J},{default:s(()=>[le,n(x)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Icons",code:K},{default:s(()=>[ae,n(b)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Length",code:M},{default:s(()=>[ie,n(D)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Total visible",code:Z},{default:s(()=>[se,n(U)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Color",code:H},{default:s(()=>[ce,n($)]),_:1},8,["code"])]),_:1}),n(e,{cols:"12",md:"6"},{default:s(()=>[n(i,{title:"Size",code:X},{default:s(()=>[re,n(C)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{me as default};
