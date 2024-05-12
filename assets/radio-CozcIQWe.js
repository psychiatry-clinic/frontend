import{d as v,r as _,a as s,o as p,g as y,f as i,c as G,F as b,i as D,b as o,n as m,ad as V,e as a,v as n}from"./index-DrFL9zv-.js";import{_ as $}from"./AppCardCode.vue_vue_type_style_index_0_lang-DkHZz7dq.js";import"./vue3-perfect-scrollbar.esm-CxbQKJsC.js";const x=v({__name:"DemoRadioValidation",setup(f){const l=_(1),c=[u=>u!==3?!0:"Do not select the third one!"];return(u,e)=>{const t=s("VRadio"),d=s("VRadioGroup");return p(),y(d,{modelValue:m(l),"onUpdate:modelValue":e[0]||(e[0]=r=>V(l)?l.value=r:null),inline:"",rules:c},{default:i(()=>[(p(),G(b,null,D(3,r=>o(t,{key:r,error:m(l)===3,label:`Radio ${r}`,value:r},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"])}}}),L=v({__name:"DemoRadioIcon",setup(f){const l=_(1);return(c,u)=>{const e=s("VRadio"),t=s("VRadioGroup");return p(),y(t,{modelValue:m(l),"onUpdate:modelValue":u[0]||(u[0]=d=>V(l)?l.value=d:null),"false-icon":"tabler-bell-off","true-icon":"tabler-bell"},{default:i(()=>[(p(),G(b,null,D(2,d=>o(e,{key:d,label:`Radio ${d}`,value:d},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}}),C=a("div",null,[n("Your favorite "),a("strong",null,"search engine")],-1),w=a("div",null,[n(" Of course it's "),a("span",{class:"text-success"}," Google ")],-1),U=a("div",null,[n(" Definitely "),a("span",{class:"text-primary"}," DuckDuckGo ")],-1),S=v({__name:"DemoRadioLabelSlot",setup(f){const l=_("DuckDuckGo");return(c,u)=>{const e=s("VRadio"),t=s("VRadioGroup");return p(),y(t,{modelValue:m(l),"onUpdate:modelValue":u[0]||(u[0]=d=>V(l)?l.value=d:null)},{label:i(()=>[C]),default:i(()=>[o(e,{value:"Google"},{label:i(()=>[w]),_:1}),o(e,{value:"DuckDuckGo"},{label:i(()=>[U]),_:1})]),_:1},8,["modelValue"])}}}),I=v({__name:"DemoRadioDensity",setup(f){const l=_("radio-1"),c=_("radio-1");return(u,e)=>{const t=s("VRadio"),d=s("VRadioGroup"),r=s("VDivider");return p(),G(b,null,[o(d,{modelValue:m(l),"onUpdate:modelValue":e[0]||(e[0]=R=>V(l)?l.value=R:null)},{default:i(()=>[o(t,{label:"Option 1",value:"radio-1",density:"compact"}),o(t,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(r,{class:"my-3"}),o(d,{modelValue:m(c),"onUpdate:modelValue":e[1]||(e[1]=R=>V(c)?c.value=R:null),inline:""},{default:i(()=>[o(t,{label:"Option 1",value:"radio-1",density:"compact"}),o(t,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64)}}}),j=v({__name:"DemoRadioInline",setup(f){const l=_("radio-1"),c=_("radio-1");return(u,e)=>{const t=s("VRadio"),d=s("VRadioGroup"),r=s("VDivider");return p(),G(b,null,[o(d,{modelValue:m(l),"onUpdate:modelValue":e[0]||(e[0]=R=>V(l)?l.value=R:null)},{default:i(()=>[o(t,{label:"Option 1",value:"radio-1"}),o(t,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(r,{class:"my-4"}),o(d,{modelValue:m(c),"onUpdate:modelValue":e[1]||(e[1]=R=>V(c)?c.value=R:null),inline:""},{default:i(()=>[o(t,{label:"Option 1",value:"radio-1"}),o(t,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64)}}}),B=v({__name:"DemoRadioColors",setup(f){const l=_("primary"),c=["Primary","Secondary","Success","Info","Warning","Error"];return(u,e)=>{const t=s("VRadio"),d=s("VRadioGroup");return p(),y(d,{modelValue:m(l),"onUpdate:modelValue":e[0]||(e[0]=r=>V(l)?l.value=r:null),inline:""},{default:i(()=>[a("div",null,[(p(),G(b,null,D(c,r=>o(t,{key:r,label:r,color:r.toLocaleLowerCase(),value:r.toLocaleLowerCase()},null,8,["label","color","value"])),64))])]),_:1},8,["modelValue"])}}}),E={class:""},A=v({__name:"DemoRadioBasic",setup(f){const l=_(1);return(c,u)=>{const e=s("VRadio"),t=s("VRadioGroup");return p(),G("div",E,[o(t,{modelValue:m(l),"onUpdate:modelValue":u[0]||(u[0]=d=>V(l)?l.value=d:null)},{default:i(()=>[(p(),G(b,null,D(2,d=>o(e,{key:d,label:`Radio ${d}`,value:d},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])}}}),F={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`},P={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},T={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},H={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},M=a("p",null,[n("The "),a("code",null,"v-radio"),n(" component is a simple radio button.")],-1),q=a("p",null,[n("Radios can be colored by using any of the built-in colors and contextual names using the "),a("code",null,"color"),n(" prop.")],-1),z=a("p",null,[n("Use "),a("code",null,"inline"),n(" prop to displays radio buttons in row.")],-1),J=a("p",null,[n("Use "),a("code",null,"density"),n(" prop to adjusts the spacing within the component. Available options are: "),a("code",null,"default"),n(", "),a("code",null,"comfortable"),n(", and "),a("code",null,"compact"),n(".")],-1),K=a("p",null,[n("Radio Group labels can be defined in "),a("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1),Q=a("p",null,[n("Use "),a("code",null,"false-icon"),n(" and "),a("code",null,"true-icon"),n(" prop to set icon on inactive and active state.")],-1),X=a("p",null,[n("Use "),a("code",null,"rules"),n(" prop to validate a radio. Accepts a mixed array of types "),a("code",null,"function"),n(", "),a("code",null,"boolean"),n(" and "),a("code",null,"string"),n(". Functions pass an input value as an argument and must return either "),a("code",null,"true"),n(" / "),a("code",null,"false"),n(" or a string containing an error message.")],-1),ao=v({__name:"radio",setup(f){return(l,c)=>{const u=A,e=$,t=s("VCol"),d=B,r=j,R=I,g=S,k=L,O=x,h=s("VRow");return p(),y(h,{class:"match-height"},{default:i(()=>[o(t,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Basic",code:F},{default:i(()=>[M,o(u)]),_:1},8,["code"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Colors",code:N},{default:i(()=>[q,o(d)]),_:1},8,["code"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Inline",code:W},{default:i(()=>[z,o(r)]),_:1},8,["code"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Density",code:P},{default:i(()=>[J,o(R)]),_:1},8,["code"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Label Slot",code:Y},{default:i(()=>[K,o(g)]),_:1},8,["code"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Icon",code:T},{default:i(()=>[Q,o(k)]),_:1},8,["code"])]),_:1}),o(t,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Validation",code:H},{default:i(()=>[X,o(O)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ao as default};
