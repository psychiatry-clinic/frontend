<script setup lang="ts">
  import { VForm } from 'vuetify/components/VForm'
  import authV1BottomShape from '@images/svg/auth-v1-bottom-shape.svg?raw'
  import authV1TopShape from '@images/svg/auth-v1-top-shape.svg?raw'
  import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
  import { themeConfig } from '@themeConfig'

  const { t } = useI18n()

  // import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'

  definePage({
    meta: {
      layout: 'blank',
      unauthenticatedOnly: true,
    },
  })

  const isPasswordVisible = ref(false)
  const isLoading = ref(false)
  // const route = useRoute()
  const router = useRouter()

  const ability = useAbility()

  const errors = ref<Record<string, string | undefined>>({
    message: undefined,
  })

  const refVForm = ref<VForm>()

  const credentials = ref({
    username: '',
    password: '',
    fullName: '',
    clinic: '',
  })

  const contactBtn = ref(false)
  const rememberMe = ref(false)
  const loginForm = ref(true)
  const waitingMessage = ref('')
  const clinics = ['Kadhimiya Center', 'Autism Center']

  const login = async () => {
    isLoading.value = true
    try {
      const res = await $api('/login', {
        method: 'POST',
        body: {
          username: credentials.value.username,
          password: credentials.value.password,
        },
        onResponseError({ response }) {
          errors.value.message = response._data
          if (
            response._data === 'Contact Dr.Mustafa Alnoori to grant you access'
          ) {
            contactBtn.value = true
          }
        },
      })
      const { accessToken, userData, userAbilityRules } = res
      useCookie('userAbilityRules').value = userAbilityRules
      ability.update(userAbilityRules)

      useCookie('userData').value = userData
      useCookie('accessToken').value = accessToken

      await nextTick(() => {
        router.push('/patients')
        isLoading.value = false
      })
    } catch (err) {
      console.error(err)
      isLoading.value = false
    }
  }

  const Register = async () => {
    isLoading.value = true
    try {
      const res = await $api('/register', {
        method: 'POST',
        body: {
          username: credentials.value.username,
          password: credentials.value.password,
          fullName: credentials.value.fullName,
          clinic: credentials.value.clinic,
        },
        onResponseError({ response }) {
          errors.value.message = response._data
        },
      })
      if (res === 'User registered successfully') {
        loginForm.value = true
      }

      isLoading.value = false
      waitingMessage.value = 'contact Dr. Mustafa Alnoori'
    } catch (err) {
      console.error(err)
      isLoading.value = false
    }
  }

  const onSubmit = () => {
    refVForm.value?.validate().then(({ valid: isValid }) => {
      if (isValid) login()
    })
  }

  const onSubmit1 = () => {
    refVForm.value?.validate().then(({ valid: isValid }) => {
      if (isValid) Register()
    })
  }
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <div class="position-relative my-sm-16">
      <!-- 👉 Top shape -->
      <VNodeRenderer
        :nodes="h('div', { innerHTML: authV1TopShape })"
        class="text-primary auth-v1-top-shape d-none d-sm-block"
      />

      <!-- 👉 Bottom shape -->
      <VNodeRenderer
        :nodes="h('div', { innerHTML: authV1BottomShape })"
        class="text-primary auth-v1-bottom-shape d-none d-sm-block"
      />

      <!-- 👉 Auth Card -->
      <VCard class="auth-card" max-width="460" :class="'pa-6'">
        <VCardItem class="justify-center">
          <VCardTitle>
            <div class="app-logo">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
              <h1 class="app-logo-title">
                {{ t(themeConfig.app.title) }}
              </h1>
            </div>
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <h4 class="text-h4 mb-1">
            <span class="text-capitalize"> {{ t('Clinic Application') }}</span>
          </h4>
          <p class="mb-0">{{ t('Please sign-in to your account') }}</p>
        </VCardText>

        <VCardText v-if="loginForm">
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <p class="align-self-center text-error">
              {{ errors.message }}
            </p>
            <VRow>
              <!-- username -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.username"
                  autofocus
                  :label="t('Username')"
                  type="text"
                  placeholder=""
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  class="mb-5"
                  v-model="credentials.password"
                  :label="t('Password')"
                  placeholder=""
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <!-- remember me checkbox -->
                <a class="text-warning" href="https://wa.me/+9647812135916">
                  {{ t('Forgot Password?') }}
                </a>

                <h1 class="my-6"></h1>

                <!-- login button -->
                <VBtn block v-if="contactBtn" class="mb-4" color="error">
                  <a class="text-white" href="https://wa.me/+9647812135916">
                    {{ t('Contact Dr.Mustafa Alnoori') }}
                  </a>
                </VBtn>
                <VBtn block type="submit" :disabled="isLoading">
                  <span v-if="isLoading">
                    <VProgressCircular indeterminate color="info" />
                  </span>
                  <span v-else> {{ t('Login') }} </span>
                </VBtn>
              </VCol>
              <VCol cols="12" class="text-body-1 text-center">
                <span class="d-inline-block">
                  {{ t('New on our platform?') }}
                </span>
                <a
                  class="btn text-primary ms-1 d-inline-block text-body-1"
                  @click="loginForm = false"
                  href="#"
                >
                  {{ t('Create an account') }}
                </a>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>

        <!-- Register -->
        <VCardText v-else>
          <VForm ref="refVForm" @submit.prevent="onSubmit1">
            <p class="align-self-center text-warning">
              {{ errors.message }}
            </p>
            <VRow>
              <!-- username -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.username"
                  autofocus
                  :label="t('Username')"
                  type="text"
                  placeholder=""
                />
              </VCol>

              <!-- FullName -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.fullName"
                  autofocus
                  :label="t('Full Name')"
                  type="text"
                  placeholder=""
                />
              </VCol>

              <!-- Clinic -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="credentials.clinic"
                  :label="t('Clinic')"
                  :items="clinics"
                  placeholder="Select Clinic"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.password"
                  :label="t('Password')"
                  placeholder=""
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <h1 class="my-6"></h1>

                <!-- Register button -->
                <VBtn block type="submit" :disabled="isLoading">
                  <span v-if="isLoading">
                    <VProgressCircular indeterminate color="info" />
                  </span>
                  <span v-else> {{ t('Register') }} </span>
                </VBtn>
              </VCol>

              <!-- create account -->

              <VCol cols="12" class="text-body-1 text-center">
                <span class="d-inline-block">
                  {{ t('Already registered in our platform?') }}
                </span>
                <a
                  class="text-primary ms-1 d-inline-block text-body-1"
                  @click="loginForm = true"
                  href="#"
                >
                  {{ t('Login') }}
                </a>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
  @use '@core/scss/template/pages/page-auth.scss';
</style>
