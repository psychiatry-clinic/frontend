import{r as m,b as x,i as D,c as I,f as J,l as $,g as S,h as j,j as z,e as U,u as G}from"./validators-DR7cptrM.js";import{d as A,r as d,a as q,o as T,g as R,f as r,b as o,n as e,ad as u,v as g,aj as B,e as L}from"./index-CJpjWKD8.js";import{_ as E}from"./AppTextField.vue_vue_type_script_setup_true_lang-CcB8QWg0.js";import{V as k}from"./VForm-CQ8V6YhL.js";import{_ as H}from"./AppCardCode.vue_vue_type_style_index_0_lang-Bis9AL0q.js";import"./helpers-BGv4x_9E.js";import"./form-WeJO4c57.js";import"./vue3-perfect-scrollbar.esm-CxpLtCk9.js";const K=A({__name:"DemoFormValidationValidationTypes",setup(N){const C=d(""),f=d(""),v=d(""),n=d(""),p=d(""),V=d(""),c=d(""),s=d(""),i=d(""),h=d(""),w=d(""),y=d(""),P=d();return(l,a)=>{const F=E,b=q("VCol"),O=q("VBtn"),Y=q("VRow");return T(),R(e(k),{ref_key:"refForm",ref:P,onSubmit:a[13]||(a[13]=B(()=>{},["prevent"]))},{default:r(()=>[o(Y,null,{default:r(()=>[o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(C),"onUpdate:modelValue":a[0]||(a[0]=t=>u(C)?C.value=t:null),"persistent-placeholder":"",placeholder:"This field is required",rules:["requiredValidator"in l?l.requiredValidator:e(m)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(f),"onUpdate:modelValue":a[1]||(a[1]=t=>u(f)?f.value=t:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:["requiredValidator"in l?l.requiredValidator:e(m),("betweenValidator"in l?l.betweenValidator:e(x))(e(f),10,20)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(v),"onUpdate:modelValue":a[2]||(a[2]=t=>u(v)?v.value=t:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:["requiredValidator"in l?l.requiredValidator:e(m),"integerValidator"in l?l.integerValidator:e(D)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(n),"onUpdate:modelValue":a[3]||(a[3]=t=>u(n)?n.value=t:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:["requiredValidator"in l?l.requiredValidator:e(m),("regexValidator"in l?l.regexValidator:e(I))(e(n),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(p),"onUpdate:modelValue":a[4]||(a[4]=t=>u(p)?p.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:["requiredValidator"in l?l.requiredValidator:e(m),"alphaValidator"in l?l.alphaValidator:e(J)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(V),"onUpdate:modelValue":a[5]||(a[5]=t=>u(V)?V.value=t:null),"persistent-placeholder":"",placeholder:"Length must be exactly 3 characters.",rules:["requiredValidator"in l?l.requiredValidator:e(m),("lengthValidator"in l?l.lengthValidator:e($))(e(V),3)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(c),"onUpdate:modelValue":a[6]||(a[6]=t=>u(c)?c.value=t:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:["requiredValidator"in l?l.requiredValidator:e(m),"passwordValidator"in l?l.passwordValidator:e(S)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(s),"onUpdate:modelValue":a[7]||(a[7]=t=>u(s)?s.value=t:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:["requiredValidator"in l?l.requiredValidator:e(m),("lengthValidator"in l?l.lengthValidator:e($))(e(s),3),"integerValidator"in l?l.integerValidator:e(D)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(i),"onUpdate:modelValue":a[8]||(a[8]=t=>u(i)?i.value=t:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:["requiredValidator"in l?l.requiredValidator:e(m),("confirmedValidator"in l?l.confirmedValidator:e(j))(e(i),e(c))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(h),"onUpdate:modelValue":a[9]||(a[9]=t=>u(h)?h.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:["requiredValidator"in l?l.requiredValidator:e(m),"alphaDashValidator"in l?l.alphaDashValidator:e(z)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(w),"onUpdate:modelValue":a[10]||(a[10]=t=>u(w)?w.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:["requiredValidator"in l?l.requiredValidator:e(m),"emailValidator"in l?l.emailValidator:e(U)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12",md:"6"},{default:r(()=>[o(F,{modelValue:e(y),"onUpdate:modelValue":a[11]||(a[11]=t=>u(y)?y.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:["requiredValidator"in l?l.requiredValidator:e(m),"urlValidator"in l?l.urlValidator:e(G)]},null,8,["modelValue","rules"])]),_:1}),o(b,{cols:"12"},{default:r(()=>[o(O,{type:"submit",onClick:a[12]||(a[12]=t=>{var M;return(M=e(P))==null?void 0:M.validate()})},{default:r(()=>[g(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}}),Q=A({__name:"DemoFormValidationValidatingMultipleRules",setup(N){const C=d(),f=d(),v=d(),n=d(),p=d(),V=d(!1),c=d(!1);return(s,i)=>{const h=E,w=q("VCol"),y=q("VBtn"),P=q("VRow");return T(),R(e(k),{ref_key:"refForm",ref:v,onSubmit:B(()=>{},["prevent"])},{default:r(()=>[o(P,null,{default:r(()=>[o(w,{cols:"12",md:"6"},{default:r(()=>[o(h,{modelValue:e(C),"onUpdate:modelValue":i[0]||(i[0]=l=>u(C)?C.value=l:null),label:"Name",placeholder:"Your Name",rules:["requiredValidator"in s?s.requiredValidator:e(m)]},null,8,["modelValue","rules"])]),_:1}),o(w,{cols:"12",md:"6"},{default:r(()=>[o(h,{modelValue:e(f),"onUpdate:modelValue":i[1]||(i[1]=l=>u(f)?f.value=l:null),label:"Email",placeholder:"Your Email",rules:["requiredValidator"in s?s.requiredValidator:e(m),"emailValidator"in s?s.emailValidator:e(U)]},null,8,["modelValue","rules"])]),_:1}),o(w,{cols:"12",md:"6"},{default:r(()=>[o(h,{modelValue:e(n),"onUpdate:modelValue":i[2]||(i[2]=l=>u(n)?n.value=l:null),label:"Password",type:e(V)?"text":"password","append-inner-icon":e(V)?"tabler-eye-off":"tabler-eye",placeholder:"Enter Password",rules:["requiredValidator"in s?s.requiredValidator:e(m),"passwordValidator"in s?s.passwordValidator:e(S)],autocomplete:"on","onClick:appendInner":i[3]||(i[3]=l=>V.value=!e(V))},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),o(w,{cols:"12",md:"6"},{default:r(()=>[o(h,{modelValue:e(p),"onUpdate:modelValue":i[4]||(i[4]=l=>u(p)?p.value=l:null),label:"Confirm Password",type:e(c)?"text":"password",placeholder:"Confirm Password","append-inner-icon":e(p)?"tabler-eye-off":"tabler-eye",rules:["requiredValidator"in s?s.requiredValidator:e(m),("confirmedValidator"in s?s.confirmedValidator:e(j))(e(p),e(n))],autocomplete:"on","onClick:appendInner":i[5]||(i[5]=l=>c.value=!e(c))},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),o(w,{cols:"12"},{default:r(()=>[o(y,{type:"submit",onClick:i[6]||(i[6]=l=>{var a;return(a=e(v))==null?void 0:a.validate()})},{default:r(()=>[g(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}}),W=A({__name:"DemoFormValidationSimpleFormValidation",setup(N){const C=d(""),f=d(""),v=d();return(n,p)=>{const V=E,c=q("VCol"),s=q("VBtn"),i=q("VRow");return T(),R(e(k),{ref_key:"refForm",ref:v,onSubmit:B(()=>{},["prevent"])},{default:r(()=>[o(i,null,{default:r(()=>[o(c,{cols:"12",md:"6"},{default:r(()=>[o(V,{modelValue:e(C),"onUpdate:modelValue":p[0]||(p[0]=h=>u(C)?C.value=h:null),label:"First Name",placeholder:"John",rules:["requiredValidator"in n?n.requiredValidator:e(m)]},null,8,["modelValue","rules"])]),_:1}),o(c,{cols:"12",md:"6"},{default:r(()=>[o(V,{modelValue:e(f),"onUpdate:modelValue":p[1]||(p[1]=h=>u(f)?f.value=h:null),label:"Email",placeholder:"john@email.com",rules:["requiredValidator"in n?n.requiredValidator:e(m),"emailValidator"in n?n.emailValidator:e(U)]},null,8,["modelValue","rules"])]),_:1}),o(c,{cols:"12"},{default:r(()=>[o(s,{type:"submit",onClick:p[2]||(p[2]=h=>{var w;return(w=e(v))==null?void 0:w.validate()})},{default:r(()=>[g(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}}),X={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="john@email.com"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Z={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref()
const email = ref()
const refForm = ref<VForm>()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const name = ref()
const email = ref()
const refForm = ref()
const password = ref()
const confirmPassword = ref()
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          label="Name"
          placeholder="Your Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Your Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          placeholder="Enter Password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          label="Confirm Password"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          placeholder="Confirm Password"
          :append-inner-icon="confirmPassword ? 'tabler-eye-off' : 'tabler-eye'"
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},_={ts:`<script lang="ts" setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length must be exactly 3 characters."
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ee=L("p",null,[g("Use "),L("code",null,"Rules"),g(" prop to validate the input.")],-1),ne=A({__name:"form-validation",setup(N){return(C,f)=>{const v=W,n=H,p=q("VCol"),V=Q,c=K,s=q("VRow");return T(),R(s,null,{default:r(()=>[o(p,{cols:"12"},{default:r(()=>[o(n,{title:"Simple Form Validation",code:X},{default:r(()=>[ee,o(v)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12"},{default:r(()=>[o(n,{title:"Validating Multiple Rules",code:Z},{default:r(()=>[o(V)]),_:1},8,["code"])]),_:1}),o(p,{cols:"12"},{default:r(()=>[o(n,{title:"Validation Types",code:_},{default:r(()=>[o(c)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ne as default};
