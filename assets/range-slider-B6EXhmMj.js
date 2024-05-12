import{m as Z,u as ee,a as le,V as ae,b as Y,g as E}from"./VSliderTrack-Xb5UJgVh.js";import{m as te,V as J}from"./VInput-D6PwPnL5.js";import{m as se,u as oe,V as ue}from"./form-DZjWB9DY.js";import{a2 as ne,az as re,r as _,aK as ie,aJ as de,a6 as K,aa as ce,b as a,F as me,s as pe,d as g,o as S,g as R,n as $,aX as x,f as d,a0 as ve,e as c,v}from"./index-C5WQT9Zq.js";import{_ as fe}from"./AppCardCode.vue_vue_type_style_index_0_lang-B5PLLjDm.js";import{a as k,V as Ve}from"./VRow-DRZjcEyV.js";import"./index-DZvt-9Pr.js";import"./index-CK4sZXkx.js";import"./vue3-perfect-scrollbar.esm-CnKZX5mG.js";import"./VCard-BGo43tDb.js";import"./createSimpleFunctional-CpJFqdGN.js";import"./VAvatar-7v6WnYoP.js";import"./VImg-nmMi926b.js";import"./VCardText-DZQapI2c.js";import"./VDivider-BcGK93XG.js";/* empty css              */const be=ne({...se(),...te(),...Z(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),w=re()({name:"VRangeSlider",props:be(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=_(),i=_(),h=_(),{rtlClasses:M}=ie();function j(m){if(!l.value||!i.value)return;const p=E(m,l.value.$el,e.direction),r=E(m,i.value.$el,e.direction),n=Math.abs(p),f=Math.abs(r);return n<f||n===f&&p<0?l.value.$el:i.value.$el}const U=ee(e),t=de(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>U.roundValue(p)):[0,0]),{activeThumbRef:V,hasLabels:X,max:z,min:I,mousePressed:q,onSliderMousedown:G,onSliderTouchstart:H,position:L,trackContainerRef:Q}=le({props:e,steps:U,onSliderStart:()=>{o("start",t.value)},onSliderEnd:m=>{var n;let{value:p}=m;const r=V.value===((n=l.value)==null?void 0:n.$el)?[p,t.value[1]]:[t.value[0],p];!e.strict&&r[0]<r[1]&&(t.value=r),o("end",t.value)},onSliderMove:m=>{var f,y,D,b;let{value:p}=m;const[r,n]=t.value;!e.strict&&r===n&&r!==I.value&&(V.value=p>r?(f=i.value)==null?void 0:f.$el:(y=l.value)==null?void 0:y.$el,(D=V.value)==null||D.focus()),V.value===((b=l.value)==null?void 0:b.$el)?t.value=[Math.min(p,n),n]:t.value=[r,Math.max(r,p)]},getActiveThumb:j}),{isFocused:B,focus:A,blur:N}=oe(e),O=K(()=>L(t.value[0])),W=K(()=>L(t.value[1]));return ce(()=>{const m=J.filterProps(e),p=!!(e.label||u.label||u.prepend);return a(J,pe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||X.value,"v-slider--focused":B.value,"v-slider--pressed":q.value,"v-slider--disabled":e.disabled},M.value,e.class],style:e.style,ref:h},m,{focused:B.value}),{...u,prepend:p?r=>{var n,f;return a(me,null,[((n=u.label)==null?void 0:n.call(u,r))??(e.label?a(ue,{class:"v-slider__label",text:e.label},null):void 0),(f=u.prepend)==null?void 0:f.call(u,r)])}:void 0,default:r=>{var y,D;let{id:n,messagesId:f}=r;return a("div",{class:"v-slider__container",onMousedown:G,onTouchstartPassive:H},[a("input",{id:`${n.value}_start`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${n.value}_stop`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(ae,{ref:Q,start:O.value,stop:W.value},{"tick-label":u["tick-label"]}),a(Y,{ref:l,"aria-describedby":f.value,focused:B&&V.value===((y=l.value)==null?void 0:y.$el),modelValue:t.value[0],"onUpdate:modelValue":b=>t.value=[b,t.value[1]],onFocus:b=>{var T,C,F,P;A(),V.value=(T=l.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[1]===I.value&&b.relatedTarget!==((C=i.value)==null?void 0:C.$el)&&((F=l.value)==null||F.$el.blur(),(P=i.value)==null||P.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:I.value,max:t.value[1],position:O.value,ripple:e.ripple},{"thumb-label":u["thumb-label"]}),a(Y,{ref:i,"aria-describedby":f.value,focused:B&&V.value===((D=i.value)==null?void 0:D.$el),modelValue:t.value[1],"onUpdate:modelValue":b=>t.value=[t.value[0],b],onFocus:b=>{var T,C,F,P;A(),V.value=(T=i.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[0]===z.value&&b.relatedTarget!==((C=l.value)==null?void 0:C.$el)&&((F=i.value)==null||F.$el.blur(),(P=l.value)==null||P.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:t.value[0],max:z.value,position:W.value,ripple:e.ripple},{"thumb-label":u["thumb-label"]})])}})}),{}}}),_e=g({__name:"DemoRangeSliderVertical",setup(e){const s=_([20,40]);return(u,o)=>(S(),R(w,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}}),he=g({__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=_([1,2]);return(l,i)=>(S(),R(w,{modelValue:$(o),"onUpdate:modelValue":i[0]||(i[0]=h=>x(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":d(({modelValue:h})=>[a(ve,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),ge=g({__name:"DemoRangeSliderStep",setup(e){const s=_([20,40]);return(u,o)=>(S(),R(w,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}}),Se=g({__name:"DemoRangeSliderColor",setup(e){const s=_([10,60]);return(u,o)=>(S(),R(w,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),color:"success"},null,8,["modelValue"]))}}),Re=g({__name:"DemoRangeSliderDisabled",setup(e){const s=_([30,60]);return(u,o)=>(S(),R(w,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),ke=g({__name:"DemoRangeSliderBasic",setup(e){const s=_([10,60]);return(u,o)=>(S(),R(w,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null)},null,8,["modelValue"]))}}),$e={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},xe={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Te={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Ce=c("p",null,[v("The "),c("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Fe=c("p",null,[v("You cannot interact with "),c("code",null,"disabled"),v(" sliders.")],-1),Pe=c("p",null,[v("Use "),c("code",null,"color"),v(" prop to the sets the slider color. "),c("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Ue=c("p",null,[c("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Be=c("p",null,[v(" Using the "),c("code",null,"tick-labels"),v(" prop along with the "),c("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),Me=c("p",null,[v("You can use the "),c("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Qe=g({__name:"range-slider",setup(e){return(s,u)=>{const o=ke,l=fe,i=Re,h=Se,M=ge,j=he,U=_e;return S(),R(Ve,null,{default:d(()=>[a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Basic",code:$e},{default:d(()=>[Ce,a(o)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Disabled",code:we},{default:d(()=>[Fe,a(i)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Color",code:xe},{default:d(()=>[Pe,a(h)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Step",code:ye},{default:d(()=>[Ue,a(M)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Thumb label",code:De},{default:d(()=>[Be,a(j)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Vertical",code:Te},{default:d(()=>[Me,a(U)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Qe as default};
