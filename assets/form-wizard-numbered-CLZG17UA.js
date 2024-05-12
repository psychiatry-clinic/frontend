import{_ as Y}from"./AppCardCode.vue_vue_type_style_index_0_lang-C549HFep.js";import{_ as B}from"./AppSelect.vue_vue_type_script_setup_true_lang-CUM7xL_a.js";import{_ as R}from"./AppTextField.vue_vue_type_script_setup_true_lang-Cn5QAR7R.js";import{_ as $}from"./AppStepper.vue_vue_type_style_index_0_lang-D2scIiJJ.js";import{d as N,r as v,a as m,o as _,c as J,e as c,b as e,n as l,ad as D,f as o,v as y,g as I,F as O,aj as G,y as Z}from"./index-B-uKkDM3.js";import{r as x,e as ee,g as le,h as oe,u as q}from"./validators-DR7cptrM.js";import{V as K}from"./VForm-BiDs_Ppi.js";import"./vue3-perfect-scrollbar.esm-Dfav_R1s.js";import"./helpers-BGv4x_9E.js";import"./form-CdnDFzDY.js";const M={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},te={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true

      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    }
    else { isCurrentStepValid.value = false }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true
      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    } else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},H={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`},ae={class:"mb-6"},se=c("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),ne=c("p",{class:"mb-0"}," Enter your Account Details ",-1),re=c("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),de=c("p",{class:"mb-0"}," Setup Information ",-1),ie=c("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),ue=c("p",{class:"mb-0"}," Add Social Links ",-1),me={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ce=N({__name:"DemoFormWizardNumberdModernBasic",setup(W){const F=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],r=v(0),b=v(!1),w=v(!1),a=v({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(a.value)};return(T,t)=>{const S=$,u=m("VCol"),i=R,p=m("VRow"),g=m("VWindowItem"),h=B,n=m("VWindow"),d=m("VIcon"),k=m("VBtn"),A=m("VForm"),L=m("VCardText"),C=m("VCard");return _(),J(O,null,[c("div",ae,[e(S,{"current-step":l(r),"onUpdate:currentStep":t[0]||(t[0]=s=>D(r)?r.value=s:null),align:"start",items:F},null,8,["current-step"])]),e(C,null,{default:o(()=>[e(L,null,{default:o(()=>[e(A,null,{default:o(()=>[e(n,{modelValue:l(r),"onUpdate:modelValue":t[15]||(t[15]=s=>D(r)?r.value=s:null),class:"disable-tab-transition"},{default:o(()=>[e(g,null,{default:o(()=>[e(p,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[se,ne]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).username,"onUpdate:modelValue":t[1]||(t[1]=s=>l(a).username=s),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).email,"onUpdate:modelValue":t[2]||(t[2]=s=>l(a).email=s),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).password,"onUpdate:modelValue":t[3]||(t[3]=s=>l(a).password=s),label:"Password",placeholder:"············",type:l(b)?"text":"password","append-inner-icon":l(b)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[4]||(t[4]=s=>b.value=!l(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).cPassword,"onUpdate:modelValue":t[5]||(t[5]=s=>l(a).cPassword=s),label:"Confirm Password",placeholder:"············",type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[6]||(t[6]=s=>w.value=!l(w))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(p,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[re,de]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).firstName,"onUpdate:modelValue":t[7]||(t[7]=s=>l(a).firstName=s),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).lastName,"onUpdate:modelValue":t[8]||(t[8]=s=>l(a).lastName=s),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(h,{modelValue:l(a).country,"onUpdate:modelValue":t[9]||(t[9]=s=>l(a).country=s),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(h,{modelValue:l(a).language,"onUpdate:modelValue":t[10]||(t[10]=s=>l(a).language=s),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(p,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[ie,ue]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).twitter,"onUpdate:modelValue":t[11]||(t[11]=s=>l(a).twitter=s),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).facebook,"onUpdate:modelValue":t[12]||(t[12]=s=>l(a).facebook=s),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).googlePlus,"onUpdate:modelValue":t[13]||(t[13]=s=>l(a).googlePlus=s),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).linkedIn,"onUpdate:modelValue":t[14]||(t[14]=s=>l(a).linkedIn=s),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),c("div",me,[e(k,{color:"secondary",variant:"tonal",disabled:l(r)===0,onClick:t[16]||(t[16]=s=>r.value--)},{default:o(()=>[e(d,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),y(" Previous ")]),_:1},8,["disabled"]),F.length-1===l(r)?(_(),I(k,{key:0,color:"success",onClick:P},{default:o(()=>[y(" submit ")]),_:1})):(_(),I(k,{key:1,onClick:t[17]||(t[17]=s=>r.value++)},{default:o(()=>[y(" Next "),e(d,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})],64)}}}),pe=c("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),Ve=c("p",{class:"mb-0"}," Enter your Account Details ",-1),fe=c("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),be=c("p",{class:"mb-0"}," Setup Information ",-1),we=c("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),Ce=c("p",{class:"mb-0"}," Add Social Links ",-1),ve={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ge=N({__name:"DemoFormWizardNumberedBasic",setup(W){const F=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],r=v(0),b=v(!1),w=v(!1),a=v({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(a.value)};return(T,t)=>{const S=$,u=m("VCardText"),i=m("VDivider"),p=m("VCol"),g=R,h=m("VRow"),n=m("VWindowItem"),d=B,k=m("VWindow"),A=m("VIcon"),L=m("VBtn"),C=m("VForm"),s=m("VCard");return _(),I(s,null,{default:o(()=>[e(u,null,{default:o(()=>[e(S,{"current-step":l(r),"onUpdate:currentStep":t[0]||(t[0]=V=>D(r)?r.value=V:null),items:F,class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1}),e(i),e(u,null,{default:o(()=>[e(C,null,{default:o(()=>[e(k,{modelValue:l(r),"onUpdate:modelValue":t[15]||(t[15]=V=>D(r)?r.value=V:null),class:"disable-tab-transition"},{default:o(()=>[e(n,null,{default:o(()=>[e(h,null,{default:o(()=>[e(p,{cols:"12"},{default:o(()=>[pe,Ve]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).username,"onUpdate:modelValue":t[1]||(t[1]=V=>l(a).username=V),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).email,"onUpdate:modelValue":t[2]||(t[2]=V=>l(a).email=V),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).password,"onUpdate:modelValue":t[3]||(t[3]=V=>l(a).password=V),label:"Password",placeholder:"············",type:l(b)?"text":"password","append-inner-icon":l(b)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[4]||(t[4]=V=>b.value=!l(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).cPassword,"onUpdate:modelValue":t[5]||(t[5]=V=>l(a).cPassword=V),label:"Confirm Password",placeholder:"············",type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[6]||(t[6]=V=>w.value=!l(w))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:o(()=>[e(h,null,{default:o(()=>[e(p,{cols:"12"},{default:o(()=>[fe,be]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).firstName,"onUpdate:modelValue":t[7]||(t[7]=V=>l(a).firstName=V),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).lastName,"onUpdate:modelValue":t[8]||(t[8]=V=>l(a).lastName=V),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:l(a).country,"onUpdate:modelValue":t[9]||(t[9]=V=>l(a).country=V),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:l(a).language,"onUpdate:modelValue":t[10]||(t[10]=V=>l(a).language=V),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:o(()=>[e(h,null,{default:o(()=>[e(p,{cols:"12"},{default:o(()=>[we,Ce]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).twitter,"onUpdate:modelValue":t[11]||(t[11]=V=>l(a).twitter=V),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).facebook,"onUpdate:modelValue":t[12]||(t[12]=V=>l(a).facebook=V),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).googlePlus,"onUpdate:modelValue":t[13]||(t[13]=V=>l(a).googlePlus=V),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(g,{modelValue:l(a).linkedIn,"onUpdate:modelValue":t[14]||(t[14]=V=>l(a).linkedIn=V),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),c("div",ve,[e(L,{color:"secondary",variant:"tonal",disabled:l(r)===0,onClick:t[16]||(t[16]=V=>r.value--)},{default:o(()=>[e(A,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),y(" Previous ")]),_:1},8,["disabled"]),F.length-1===l(r)?(_(),I(L,{key:0,color:"success",onClick:P},{default:o(()=>[y(" submit ")]),_:1})):(_(),I(L,{key:1,onClick:t[17]||(t[17]=V=>r.value++)},{default:o(()=>[y(" Next "),e(A,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})}}}),Se=c("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),ye=c("p",{class:"mb-0"}," Enter your Account Details ",-1),he=c("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),Fe=c("p",{class:"mb-0"}," Setup Information ",-1),ke=c("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),_e=c("p",{class:"mb-0"}," Add Social Links ",-1),Ae={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Pe=N({__name:"DemoFormWizardNumberedModernVertical",setup(W){const F=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],r=v(0),b=v(!1),w=v(!1),a=v({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(a.value)};return(T,t)=>{const S=$,u=m("VCol"),i=R,p=m("VRow"),g=m("VWindowItem"),h=B,n=m("VWindow"),d=m("VIcon"),k=m("VBtn"),A=m("VForm"),L=m("VCardText"),C=m("VCard");return _(),I(p,null,{default:o(()=>[e(u,{cols:"12",md:"4"},{default:o(()=>[e(S,{"current-step":l(r),"onUpdate:currentStep":t[0]||(t[0]=s=>D(r)?r.value=s:null),direction:"vertical",items:F},null,8,["current-step"])]),_:1}),e(u,{cols:"12",md:"8"},{default:o(()=>[e(C,null,{default:o(()=>[e(L,null,{default:o(()=>[e(A,null,{default:o(()=>[e(n,{modelValue:l(r),"onUpdate:modelValue":t[15]||(t[15]=s=>D(r)?r.value=s:null),class:"disable-tab-transition"},{default:o(()=>[e(g,null,{default:o(()=>[e(p,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[Se,ye]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).username,"onUpdate:modelValue":t[1]||(t[1]=s=>l(a).username=s),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).email,"onUpdate:modelValue":t[2]||(t[2]=s=>l(a).email=s),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).password,"onUpdate:modelValue":t[3]||(t[3]=s=>l(a).password=s),placeholder:"············",label:"Password",type:l(b)?"text":"password","append-inner-icon":l(b)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[4]||(t[4]=s=>b.value=!l(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).cPassword,"onUpdate:modelValue":t[5]||(t[5]=s=>l(a).cPassword=s),placeholder:"············",label:"Confirm Password",type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[6]||(t[6]=s=>w.value=!l(w))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(p,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[he,Fe]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).firstName,"onUpdate:modelValue":t[7]||(t[7]=s=>l(a).firstName=s),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).lastName,"onUpdate:modelValue":t[8]||(t[8]=s=>l(a).lastName=s),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(h,{modelValue:l(a).country,"onUpdate:modelValue":t[9]||(t[9]=s=>l(a).country=s),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(h,{modelValue:l(a).language,"onUpdate:modelValue":t[10]||(t[10]=s=>l(a).language=s),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(p,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[ke,_e]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).twitter,"onUpdate:modelValue":t[11]||(t[11]=s=>l(a).twitter=s),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).facebook,"onUpdate:modelValue":t[12]||(t[12]=s=>l(a).facebook=s),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).googlePlus,"onUpdate:modelValue":t[13]||(t[13]=s=>l(a).googlePlus=s),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(i,{modelValue:l(a).linkedIn,"onUpdate:modelValue":t[14]||(t[14]=s=>l(a).linkedIn=s),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),c("div",Ae,[e(k,{color:"secondary",variant:"tonal",disabled:l(r)===0,onClick:t[16]||(t[16]=s=>r.value--)},{default:o(()=>[e(d,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),y(" Previous ")]),_:1},8,["disabled"]),F.length-1===l(r)?(_(),I(k,{key:0,color:"success",onClick:P},{default:o(()=>[y(" submit ")]),_:1})):(_(),I(k,{key:1,onClick:t[17]||(t[17]=s=>r.value++)},{default:o(()=>[y(" Next "),e(d,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),xe=c("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),Ie=c("p",{class:"mb-0"}," Enter your Account Details ",-1),Le={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},De=c("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),Te=c("p",{class:"mb-0"}," Setup Information ",-1),Ue={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Ne=c("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),We=c("p",{class:"mb-0"}," Add Social Links ",-1),Be={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Re=N({__name:"DemoFormWizardNumberedValidation",setup(W){const F=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],r=v(0),b=v(!1),w=v(!1),a=v(!0),P=v(),T=v(),t=v(),S=v({username:"",email:"",password:"",cPassword:""}),u=v({firstName:"",lastName:"",country:void 0,language:void 0}),i=v({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),p=()=>{var n;(n=P.value)==null||n.validate().then(d=>{d.valid?(r.value++,a.value=!0):a.value=!1})},g=()=>{var n;(n=T.value)==null||n.validate().then(d=>{d.valid?(r.value++,a.value=!0):a.value=!1})},h=()=>{var n;(n=t.value)==null||n.validate().then(d=>{d.valid?(a.value=!0,console.log({...S.value,...u.value,...i.value})):a.value=!1})};return(n,d)=>{const k=$,A=m("VCardText"),L=m("VDivider"),C=m("VCol"),s=R,V=m("VIcon"),U=m("VBtn"),j=m("VRow"),E=m("VWindowItem"),z=B,Q=m("VWindow"),X=m("VCard");return _(),I(X,null,{default:o(()=>[e(A,null,{default:o(()=>[e(k,{"current-step":l(r),"onUpdate:currentStep":d[0]||(d[0]=f=>D(r)?r.value=f:null),items:F,"is-active-step-valid":l(a)},null,8,["current-step","is-active-step-valid"])]),_:1}),e(L),e(A,null,{default:o(()=>[e(Q,{modelValue:l(r),"onUpdate:modelValue":d[17]||(d[17]=f=>D(r)?r.value=f:null),class:"disable-tab-transition"},{default:o(()=>[e(E,null,{default:o(()=>[e(l(K),{ref_key:"refAccountForm",ref:P,onSubmit:G(p,["prevent"])},{default:o(()=>[e(j,null,{default:o(()=>[e(C,{cols:"12"},{default:o(()=>[xe,Ie]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(S).username,"onUpdate:modelValue":d[1]||(d[1]=f=>l(S).username=f),placeholder:"CarterLeonardo",rules:["requiredValidator"in n?n.requiredValidator:l(x)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(S).email,"onUpdate:modelValue":d[2]||(d[2]=f=>l(S).email=f),placeholder:"carterleonardo@gmail.com",rules:["requiredValidator"in n?n.requiredValidator:l(x),"emailValidator"in n?n.emailValidator:l(ee)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(S).password,"onUpdate:modelValue":d[3]||(d[3]=f=>l(S).password=f),label:"Password",placeholder:"············",rules:["requiredValidator"in n?n.requiredValidator:l(x),"passwordValidator"in n?n.passwordValidator:l(le)],type:l(b)?"text":"password","append-inner-icon":l(b)?"tabler-eye-off":"tabler-eye","onClick:appendInner":d[4]||(d[4]=f=>b.value=!l(b))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(S).cPassword,"onUpdate:modelValue":d[5]||(d[5]=f=>l(S).cPassword=f),label:"Confirm Password",placeholder:"············",rules:["requiredValidator"in n?n.requiredValidator:l(x),("confirmedValidator"in n?n.confirmedValidator:l(oe))(l(S).cPassword,l(S).password)],type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":d[6]||(d[6]=f=>w.value=!l(w))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(C,{cols:"12"},{default:o(()=>[c("div",Le,[e(U,{color:"secondary",variant:"tonal",disabled:""},{default:o(()=>[e(V,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),y(" Previous ")]),_:1}),e(U,{type:"submit"},{default:o(()=>[y(" Next "),e(V,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(E,null,{default:o(()=>[e(l(K),{ref_key:"refPersonalForm",ref:T,onSubmit:G(g,["prevent"])},{default:o(()=>[e(j,null,{default:o(()=>[e(C,{cols:"12"},{default:o(()=>[De,Te]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(u).firstName,"onUpdate:modelValue":d[7]||(d[7]=f=>l(u).firstName=f),label:"First Name",rules:["requiredValidator"in n?n.requiredValidator:l(x)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(u).lastName,"onUpdate:modelValue":d[8]||(d[8]=f=>l(u).lastName=f),label:"Last Name",rules:["requiredValidator"in n?n.requiredValidator:l(x)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(z,{modelValue:l(u).country,"onUpdate:modelValue":d[9]||(d[9]=f=>l(u).country=f),label:"Country",rules:["requiredValidator"in n?n.requiredValidator:l(x)],placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(z,{modelValue:l(u).language,"onUpdate:modelValue":d[10]||(d[10]=f=>l(u).language=f),label:"Language",rules:["requiredValidator"in n?n.requiredValidator:l(x)],placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12"},{default:o(()=>[c("div",Ue,[e(U,{color:"secondary",variant:"tonal",onClick:d[11]||(d[11]=f=>r.value--)},{default:o(()=>[e(V,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),y(" Previous ")]),_:1}),e(U,{type:"submit"},{default:o(()=>[y(" Next "),e(V,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(E,null,{default:o(()=>[e(l(K),{ref_key:"refSocialLinkForm",ref:t,onSubmit:G(h,["prevent"])},{default:o(()=>[e(j,null,{default:o(()=>[e(C,{cols:"12"},{default:o(()=>[Ne,We]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(i).twitter,"onUpdate:modelValue":d[12]||(d[12]=f=>l(i).twitter=f),placeholder:"https://twitter.com/abc",rules:["requiredValidator"in n?n.requiredValidator:l(x),"urlValidator"in n?n.urlValidator:l(q)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(i).facebook,"onUpdate:modelValue":d[13]||(d[13]=f=>l(i).facebook=f),placeholder:"https://facebook.com/abc",rules:["requiredValidator"in n?n.requiredValidator:l(x),"urlValidator"in n?n.urlValidator:l(q)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(i).googlePlus,"onUpdate:modelValue":d[14]||(d[14]=f=>l(i).googlePlus=f),placeholder:"https://plus.google.com/abc",rules:["requiredValidator"in n?n.requiredValidator:l(x),"urlValidator"in n?n.urlValidator:l(q)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12",md:"6"},{default:o(()=>[e(s,{modelValue:l(i).linkedIn,"onUpdate:modelValue":d[15]||(d[15]=f=>l(i).linkedIn=f),placeholder:"https://likedin.com/abc",rules:["requiredValidator"in n?n.requiredValidator:l(x),"urlValidator"in n?n.urlValidator:l(q)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),e(C,{cols:"12"},{default:o(()=>[c("div",Be,[e(U,{color:"secondary",variant:"tonal",onClick:d[16]||(d[16]=f=>r.value--)},{default:o(()=>[e(V,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),y(" Previous ")]),_:1}),e(U,{color:"success",type:"submit"},{default:o(()=>[y(" submit ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),$e=c("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),qe=c("p",{class:"mb-0"}," Enter your Account Details ",-1),je=c("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),Ee=c("p",{class:"mb-0"}," Setup Information ",-1),Ge=c("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),Ke=c("p",{class:"mb-0"}," Add Social Links ",-1),ze={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Me=N({__name:"DemoFormWizardNumberedVertical",setup(W){const F=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],r=v(0),b=v(!1),w=v(!1),a=v({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),P=()=>{console.log(a.value)};return(T,t)=>{const S=$,u=m("VCardText"),i=m("VCol"),p=R,g=m("VRow"),h=m("VWindowItem"),n=B,d=m("VWindow"),k=m("VIcon"),A=m("VBtn"),L=m("VForm"),C=m("VCard");return _(),I(C,null,{default:o(()=>[e(g,null,{default:o(()=>[e(i,{cols:"12",md:"4",class:Z(T.$vuetify.display.smAndDown?"border-b":"border-e")},{default:o(()=>[e(u,null,{default:o(()=>[e(S,{"current-step":l(r),"onUpdate:currentStep":t[0]||(t[0]=s=>D(r)?r.value=s:null),direction:"vertical",items:F},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(i,{cols:"12",md:"8"},{default:o(()=>[e(u,null,{default:o(()=>[e(L,null,{default:o(()=>[e(d,{modelValue:l(r),"onUpdate:modelValue":t[15]||(t[15]=s=>D(r)?r.value=s:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(g,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[$e,qe]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).username,"onUpdate:modelValue":t[1]||(t[1]=s=>l(a).username=s),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).email,"onUpdate:modelValue":t[2]||(t[2]=s=>l(a).email=s),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).password,"onUpdate:modelValue":t[3]||(t[3]=s=>l(a).password=s),placeholder:"············",label:"Password",type:l(b)?"text":"password","append-inner-icon":l(b)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[4]||(t[4]=s=>b.value=!l(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).cPassword,"onUpdate:modelValue":t[5]||(t[5]=s=>l(a).cPassword=s),placeholder:"············",label:"Confirm Password",type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":t[6]||(t[6]=s=>w.value=!l(w))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(g,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[je,Ee]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).firstName,"onUpdate:modelValue":t[7]||(t[7]=s=>l(a).firstName=s),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).lastName,"onUpdate:modelValue":t[8]||(t[8]=s=>l(a).lastName=s),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(a).country,"onUpdate:modelValue":t[9]||(t[9]=s=>l(a).country=s),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(n,{modelValue:l(a).language,"onUpdate:modelValue":t[10]||(t[10]=s=>l(a).language=s),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(g,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[Ge,Ke]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).twitter,"onUpdate:modelValue":t[11]||(t[11]=s=>l(a).twitter=s),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).facebook,"onUpdate:modelValue":t[12]||(t[12]=s=>l(a).facebook=s),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).googlePlus,"onUpdate:modelValue":t[13]||(t[13]=s=>l(a).googlePlus=s),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{modelValue:l(a).linkedIn,"onUpdate:modelValue":t[14]||(t[14]=s=>l(a).linkedIn=s),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),c("div",ze,[e(A,{color:"secondary",variant:"tonal",disabled:l(r)===0,onClick:t[16]||(t[16]=s=>r.value--)},{default:o(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),y(" Previous ")]),_:1},8,["disabled"]),F.length-1===l(r)?(_(),I(A,{key:0,color:"success",onClick:P},{default:o(()=>[y(" submit ")]),_:1})):(_(),I(A,{key:1,onClick:t[17]||(t[17]=s=>r.value++)},{default:o(()=>[y(" Next "),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),He=c("h3",{class:"text-h3 my-4"}," Modern ",-1),al=N({__name:"form-wizard-numbered",setup(W){return(F,r)=>{const b=Y,w=m("VCol"),a=m("VRow"),P=m("VDivider");return _(),J(O,null,[e(a,null,{default:o(()=>[e(w,{cols:"12"},{default:o(()=>[e(b,{variant:"outlined",title:"Basic",code:M},{default:o(()=>[e(ge)]),_:1},8,["code"])]),_:1}),e(w,{cols:"12"},{default:o(()=>[e(b,{variant:"outlined",title:"Validation",code:te},{default:o(()=>[e(Re)]),_:1},8,["code"])]),_:1}),e(w,{cols:"12"},{default:o(()=>[e(b,{variant:"outlined",title:"Vertical",code:H},{default:o(()=>[e(Me)]),_:1},8,["code"])]),_:1})]),_:1}),e(P,{class:"my-10 mx-n6"}),He,e(a,null,{default:o(()=>[e(w,{cols:"12"},{default:o(()=>[e(b,{variant:"outlined",title:"Vertical",code:H},{default:o(()=>[e(Pe)]),_:1},8,["code"])]),_:1}),e(w,{cols:"12"},{default:o(()=>[e(b,{variant:"outlined",title:"Basic",code:M},{default:o(()=>[e(ce)]),_:1},8,["code"])]),_:1})]),_:1})],64)}}});export{al as default};
