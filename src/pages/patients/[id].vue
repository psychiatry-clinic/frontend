<script setup lang="ts">
  import type { Patient, User } from '@/utils/types'
  import CustomerBioPanel from '@/views/apps/ecommerce/customer/view/CustomerBioPanel.vue'
  import CustomerTabTests from '@/views/apps/ecommerce/customer/view/CustomerTabTests.vue'
  import CustomerTabVisits from '@/views/apps/ecommerce/customer/view/CustomerTabVisits.vue'

  import { RouteParams } from 'vue-router'
  const route = useRoute()
  const router = useRouter()

  const { t } = useI18n()

  const routeParams = route.params as RouteParams

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const patientData = ref<Patient>()
  const userTab = ref(null)

  const tabs = [
    { title: t('Visits'), icon: 'tabler-file' },
    // { title: t('Tests'), icon: 'tabler-flask' },
    // { title: 'Therapy', icon: 'tabler-user' },
  ]

  const { data } = await useApi<any>(
    `/patient/${storedUserData?.id}/${routeParams.id}`
  )

  const deletePatient = async () => {
    if (!storedUserData) return

    try {
      const res = await $api(
        `/patient-delete/${storedUserData?.id}/${routeParams.id}`,
        {
          method: 'DELETE',
          onResponseError({ response }) {
            console.log(response)
          },
        }
      )
      router.push(`/patients`)
    } catch (error) {
      console.error(error)
    }
  }

  patientData.value = data.value
</script>

<template>
  <div class="d-flex justify-space-between">
    <VBtn
      variant="flat"
      color="warning"
      class="mb-5"
      @click="router.push('/patients')"
    >
      {{ t('Back') }}
    </VBtn>
  </div>
  <div>
    <!-- 👉 Header  -->
    <div
      class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"
    >
      <div>
        <h4 class="text-h4 mb-1">
          {{ t('Patient ID') }} #{{ routeParams.id }}
        </h4>
        <div class="text-body-1">
          {{ t('Added At') }}:
          {{
            patientData?.createdAt
              ? new Date(patientData?.createdAt).toLocaleString()
              : t('Cannot Display Date')
          }}
        </div>
      </div>
      <div class="d-flex gap-4" v-if="storedUserData?.role === 'ADMIN'">
        <VBtn @click="deletePatient" variant="tonal" color="error">
          {{ t('Delete Patient') }}
        </VBtn>
      </div>
    </div>
    <!-- 👉 Customer Profile  -->
    <VRow v-if="patientData">
      <VCol v-if="patientData" cols="12" md="5" lg="4">
        <CustomerBioPanel :patient-data="patientData" />
      </VCol>
      <VCol cols="12" md="7" lg="8">
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-3 disable-tab-transition"
        >
          <VTab v-for="tab in tabs" :key="tab.title">
            <VIcon size="20" start :icon="tab.icon" />
            {{ tab.title }}
          </VTab>
        </VTabs>
        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <CustomerTabVisits :patientData="patientData" />
          </VWindowItem>
          <!-- <VWindowItem>
            <CustomerTabTests :patientData="patientData" />
          </VWindowItem> -->
          <!-- <VWindowItem>
            <CustomerTabTherapy :patientData="patientData" />
          </VWindowItem> -->
        </VWindow>
      </VCol>
    </VRow>
    <div v-else>
      <VAlert type="error" variant="tonal">
        {{ `${t('patient with ID')} ${routeParams.id} ${t('not found!')}` }}
      </VAlert>
    </div>
  </div>
</template>
