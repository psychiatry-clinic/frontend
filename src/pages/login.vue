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
  })

  const rememberMe = ref(false)

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
          console.log(response._data)
        },
      })
      const { accessToken, userData, userAbilityRules } = res
      useCookie('userAbilityRules').value = userAbilityRules
      ability.update(userAbilityRules)

      useCookie('userData').value = userData
      useCookie('accessToken').value = accessToken

      await nextTick(() => {
        router.push('/patients')
      })

      isLoading.value = false
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
                {{ themeConfig.app.title }}
              </h1>
            </div>
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <h4 class="text-h4 mb-1">
            <span class="text-capitalize"
              >{{ themeConfig.app.title }} {{ t('Clinic Application') }}</span
            >
          </h4>
          <p class="mb-0">{{ t('Please sign-in to your account') }}</p>
        </VCardText>

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
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

                <!-- remember me checkbox -->
                <!-- <div
                  class="d-flex align-center justify-space-between flex-wrap my-6"
                >
                  <VCheckbox v-model="rememberMe" label="Remember me" />

                  <a class="text-primary" href="https://wa.me/+9647812135916">
                    Forgot Password?
                  </a>
                </div> -->

                <h1 class="my-6"></h1>

                <!-- login button -->
                <VBtn block type="submit" :disabled="isLoading">
                  <span v-if="isLoading">
                    <VProgressCircular indeterminate color="info" />
                  </span>
                  <span v-else> {{ t('Login') }} </span>
                </VBtn>
              </VCol>

              <!-- create account -->
              <!--
                <VCol
                cols="12"
                class="text-body-1 text-center"
                >
                <span class="d-inline-block">
                New on our platform?
                </span>
                <RouterLink
                class="text-primary ms-1 d-inline-block text-body-1"
                :to="{ name: 'pages-authentication-register-v1' }"
                >
                Create an account
                </RouterLink>
                </VCol>
              -->

              <!--
                <VCol
                cols="12"
                class="d-flex align-center"
                >
                <VDivider />
                <span class="mx-4 text-high-emphasis">or</span>
                <VDivider />
                </VCol>
              -->

              <!-- auth providers -->
              <!--
                <VCol
                cols="12"
                class="text-center"
                >
                <AuthProvider />
                </VCol>
              -->
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
