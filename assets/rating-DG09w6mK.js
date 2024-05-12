import{d as v,r as f,o as c,g,f as n,b as e,a0 as U,s as S,n as r,aX as u,c as h,e as l,x as j,F as x,i as k,v as s}from"./index-jdkFPbpY.js";import{V as i}from"./VRating-Uzww5k1P.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as F}from"./VSlider-DikPGgb-.js";import{_ as I}from"./AppCardCode.vue_vue_type_style_index_0_lang-Dup_-lZk.js";import{a as p,V as B}from"./VRow-D1UU1Zvy.js";import"./VSliderTrack-DFXFHP04.js";import"./index-2GP6dV1y.js";import"./VInput-CbmdHQti.js";import"./form-D6Xlhr1m.js";import"./index-BGr5-vuH.js";import"./vue3-perfect-scrollbar.esm-BCY2qXwT.js";import"./VCard-BkAx01MX.js";import"./createSimpleFunctional-CfXOf5_X.js";import"./VAvatar-DLeoJ3CU.js";import"./VImg-D2TAAI7p.js";import"./VCardText-CHxd4LQC.js";import"./VDivider-_gU02Sv9.js";/* empty css              */const T=v({__name:"DemoRatingItemSlot",setup(m){const t=f(4.5);return(d,a)=>(c(),g(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null)},{item:n(o=>[e(U,S(o,{size:25,color:o.isFilled?"success":"secondary",class:"me-3",icon:o.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}}),L=v({__name:"DemoRatingIncremented",setup(m){const t=f(4.5);return(d,a)=>(c(),g(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null),"half-increments":"",hover:""},null,8,["modelValue"]))}}),M={};function N(m,t){return c(),g(i,{hover:""})}const H=V(M,[["render",N]]),P={};function A(m,t){return c(),g(i,{readonly:"","model-value":4})}const E=V(P,[["render",A]]),X={};function q(m,t){return c(),g(i,{clearable:""})}const G=V(X,[["render",q]]),J=l("div",{class:"text-caption"}," Custom length ",-1),K={class:"font-weight-medium mb-0"},O=v({__name:"DemoRatingLength",setup(m){const t=f(5),d=f(2);return(a,o)=>(c(),h(x,null,[J,e(F,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=_=>u(t)?t.value=_:null),min:1,max:7},null,8,["modelValue"]),e(i,{modelValue:r(d),"onUpdate:modelValue":o[1]||(o[1]=_=>u(d)?d.value=_:null),length:r(t)},null,8,["modelValue","length"]),l("p",K," Model: "+j(r(d)),1)],64))}}),Q={class:"d-flex flex-column"},W=v({__name:"DemoRatingSize",setup(m){const t=f(4);return(d,a)=>(c(),h("div",Q,[e(i,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>u(t)?t.value=o:null),size:"x-small"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[1]||(a[1]=o=>u(t)?t.value=o:null),size:"small"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[2]||(a[2]=o=>u(t)?t.value=o:null)},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[3]||(a[3]=o=>u(t)?t.value=o:null),size:"large"},null,8,["modelValue"]),e(i,{modelValue:r(t),"onUpdate:modelValue":a[4]||(a[4]=o=>u(t)?t.value=o:null),size:"x-large"},null,8,["modelValue"])]))}}),Y={class:"d-flex flex-column"},Z=v({__name:"DemoRatingColors",setup(m){const t=f(4),d=["primary","secondary","success","info","warning","error"];return(a,o)=>(c(),h("div",Y,[(c(),h(x,null,k(d,_=>e(i,{key:_,modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=R=>u(t)?t.value=R:null),color:_},null,8,["modelValue","color"])),64))]))}}),ee={};function te(m,t){return c(),g(i,{density:"compact"})}const oe=V(ee,[["render",te]]),ne={};function le(m,t){return c(),g(i)}const ae=V(ne,[["render",le]]),se={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},ie={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},re={ts:`<script lang="ts" setup>
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
`},ce={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},me={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},de={ts:`<script lang="ts" setup>
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
`},pe={ts:`<script lang="ts" setup>
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
`},ue={ts:`<script lang="ts" setup>
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
`},_e={ts:`<template>
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
`},ge={ts:`<script lang="ts" setup>
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
`},fe=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component provides a simple interface for gathering user feedback.")],-1),ve=l("p",null,[s("Control the space occupied by "),l("code",null,"v-rating"),s(" items using the "),l("code",null,"density"),s(" prop.")],-1),Ve=l("p",null,[s("The "),l("code",null,"v-rating"),s(" component can be colored as you want, you can set both selected and not selected colors.")],-1),he=l("p",null,[s("Utilize the same sizing classes available in "),l("code",null,"v-icon"),s(" or provide your own with the "),l("code",null,"size"),s(" prop.")],-1),Re=l("p",null,[s("Change the number of items by modifying the the "),l("code",null,"length"),s(" prop.")],-1),xe=l("p",null,[s("Use "),l("code",null,"clearable"),s(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),ye=l("p",null,[s("For ratings that are not meant to be changed you can use "),l("code",null,"readonly"),s(" prop.")],-1),be=l("p",null,"Provides visual feedback when hovering over icons",-1),ze=l("p",null,[s("The "),l("code",null,"half-increments"),s(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),Ce=l("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),qe=v({__name:"rating",setup(m){return(t,d)=>{const a=ae,o=I,_=oe,R=Z,y=W,b=O,z=G,C=E,$=H,w=L,D=T;return c(),g(B,{class:"match-height"},{default:n(()=>[e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Basic",code:se},{default:n(()=>[fe,e(a)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Density",code:ce},{default:n(()=>[ve,e(_)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Colors",code:re},{default:n(()=>[Ve,e(R)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Size",code:ge},{default:n(()=>[he,e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Length",code:ue},{default:n(()=>[Re,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Clearable",code:ie},{default:n(()=>[xe,e(z)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Readonly",code:_e},{default:n(()=>[ye,e(C)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Hover",code:me},{default:n(()=>[be,e($)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Incremented",code:de},{default:n(()=>[ze,e(w)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Item slot",code:pe},{default:n(()=>[Ce,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{qe as default};
