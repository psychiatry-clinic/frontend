import{d as v,r as V,a as r,o as p,g,f as l,b as e,s as U,n as d,ad as _,c as h,e as a,x as j,F as x,i as I,v as c}from"./index-CJpjWKD8.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as k}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const F=v({__name:"DemoRatingItemSlot",setup(u){const t=V(4.5);return(s,i)=>{const n=r("VIcon"),o=r("VRating");return p(),g(o,{modelValue:d(t),"onUpdate:modelValue":i[0]||(i[0]=m=>_(t)?t.value=m:null)},{item:l(m=>[e(n,U(m,{size:25,color:m.isFilled?"success":"secondary",class:"me-3",icon:m.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"])}}}),B=v({__name:"DemoRatingIncremented",setup(u){const t=V(4.5);return(s,i)=>{const n=r("VRating");return p(),g(n,{modelValue:d(t),"onUpdate:modelValue":i[0]||(i[0]=o=>_(t)?t.value=o:null),"half-increments":"",hover:""},null,8,["modelValue"])}}}),T={};function L(u,t){const s=r("VRating");return p(),g(s,{hover:""})}const M=R(T,[["render",L]]),N={};function H(u,t){const s=r("VRating");return p(),g(s,{readonly:"","model-value":4})}const P=R(N,[["render",H]]),A={};function E(u,t){const s=r("VRating");return p(),g(s,{clearable:""})}const q=R(A,[["render",E]]),G=a("div",{class:"text-caption"}," Custom length ",-1),J={class:"font-weight-medium mb-0"},K=v({__name:"DemoRatingLength",setup(u){const t=V(5),s=V(2);return(i,n)=>{const o=r("VSlider"),m=r("VRating");return p(),h(x,null,[G,e(o,{modelValue:d(t),"onUpdate:modelValue":n[0]||(n[0]=f=>_(t)?t.value=f:null),min:1,max:7},null,8,["modelValue"]),e(m,{modelValue:d(s),"onUpdate:modelValue":n[1]||(n[1]=f=>_(s)?s.value=f:null),length:d(t)},null,8,["modelValue","length"]),a("p",J," Model: "+j(d(s)),1)],64)}}}),O={class:"d-flex flex-column"},Q=v({__name:"DemoRatingSize",setup(u){const t=V(4);return(s,i)=>{const n=r("VRating");return p(),h("div",O,[e(n,{modelValue:d(t),"onUpdate:modelValue":i[0]||(i[0]=o=>_(t)?t.value=o:null),size:"x-small"},null,8,["modelValue"]),e(n,{modelValue:d(t),"onUpdate:modelValue":i[1]||(i[1]=o=>_(t)?t.value=o:null),size:"small"},null,8,["modelValue"]),e(n,{modelValue:d(t),"onUpdate:modelValue":i[2]||(i[2]=o=>_(t)?t.value=o:null)},null,8,["modelValue"]),e(n,{modelValue:d(t),"onUpdate:modelValue":i[3]||(i[3]=o=>_(t)?t.value=o:null),size:"large"},null,8,["modelValue"]),e(n,{modelValue:d(t),"onUpdate:modelValue":i[4]||(i[4]=o=>_(t)?t.value=o:null),size:"x-large"},null,8,["modelValue"])])}}}),W={class:"d-flex flex-column"},X=v({__name:"DemoRatingColors",setup(u){const t=V(4),s=["primary","secondary","success","info","warning","error"];return(i,n)=>{const o=r("VRating");return p(),h("div",W,[(p(),h(x,null,I(s,m=>e(o,{key:m,modelValue:d(t),"onUpdate:modelValue":n[0]||(n[0]=f=>_(t)?t.value=f:null),color:m},null,8,["modelValue","color"])),64))])}}}),Y={};function Z(u,t){const s=r("VRating");return p(),g(s,{density:"compact"})}const ee=R(Y,[["render",Z]]),te={};function ne(u,t){const s=r("VRating");return p(),g(s)}const oe=R(te,[["render",ne]]),le={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},ae={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},se={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},ie={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},ce={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},re={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},me={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`},de={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},pe={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},ue={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},_e=a("p",null,[c("The "),a("code",null,"v-rating"),c(" component provides a simple interface for gathering user feedback.")],-1),ge=a("p",null,[c("Control the space occupied by "),a("code",null,"v-rating"),c(" items using the "),a("code",null,"density"),c(" prop.")],-1),fe=a("p",null,[c("The "),a("code",null,"v-rating"),c(" component can be colored as you want, you can set both selected and not selected colors.")],-1),Ve=a("p",null,[c("Utilize the same sizing classes available in "),a("code",null,"v-icon"),c(" or provide your own with the "),a("code",null,"size"),c(" prop.")],-1),ve=a("p",null,[c("Change the number of items by modifying the the "),a("code",null,"length"),c(" prop.")],-1),Re=a("p",null,[c("Use "),a("code",null,"clearable"),c(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),he=a("p",null,[c("For ratings that are not meant to be changed you can use "),a("code",null,"readonly"),c(" prop.")],-1),xe=a("p",null,"Provides visual feedback when hovering over icons",-1),ye=a("p",null,[c("The "),a("code",null,"half-increments"),c(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),be=a("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),De=v({__name:"rating",setup(u){return(t,s)=>{const i=oe,n=k,o=r("VCol"),m=ee,f=X,y=Q,b=K,z=q,C=P,w=M,$=B,D=F,S=r("VRow");return p(),g(S,{class:"match-height"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Basic",code:le},{default:l(()=>[_e,e(i)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Density",code:ie},{default:l(()=>[ge,e(m)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Colors",code:se},{default:l(()=>[fe,e(f)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Size",code:ue},{default:l(()=>[Ve,e(y)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Length",code:de},{default:l(()=>[ve,e(b)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Clearable",code:ae},{default:l(()=>[Re,e(z)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Readonly",code:pe},{default:l(()=>[he,e(C)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Hover",code:ce},{default:l(()=>[xe,e(w)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Incremented",code:re},{default:l(()=>[ye,e($)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Item slot",code:me},{default:l(()=>[be,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{De as default};
