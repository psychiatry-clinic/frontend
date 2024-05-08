<script setup lang="ts">
  import type { Patient, User } from '@/utils/types'
  import CustomerBioPanel from '@/views/apps/ecommerce/customer/view/CustomerBioPanel.vue'
  import CustomerTabTests from '@/views/apps/ecommerce/customer/view/CustomerTabTests.vue'
  import CustomerTabTherapy from '@/views/apps/ecommerce/customer/view/CustomerTabTherapy.vue'
  import CustomerTabVisits from '@/views/apps/ecommerce/customer/view/CustomerTabVisits.vue'

  import { RouteParams } from 'vue-router'
  const route = useRoute()

  const routeParams = route.params as RouteParams

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const patientData = ref<Patient>()
  const userTab = ref(null)

  const tabs = [
    { title: 'Visits', icon: 'tabler-file' },
    { title: 'Tests', icon: 'tabler-flask' },
    { title: 'Therapy', icon: 'tabler-user' },
  ]

  const { data } = await useApi<any>(
    `/patients/${storedUserData?.id}/${routeParams.id}`
  )

  patientData.value = data.value
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div
      class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"
    >
      <div>
        <h4 class="text-h4 mb-1">Patient ID #{{ routeParams.id }}</h4>
        <div class="text-body-1">
          First visit:
          {{ removeTimeFromDate(patientData?.createdAt as string) }}
        </div>
      </div>
      <!-- <div class="d-flex gap-4">
        <VBtn
          variant="tonal"
          color="error"
        >
          Delete Patient
        </VBtn>
      </div> -->
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
          <VWindowItem>
            <CustomerTabTests :patientData="patientData" />
          </VWindowItem>
          <VWindowItem>
            <CustomerTabTherapy />
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
    <div v-else>
      <VAlert type="error" variant="tonal">
        patient with ID {{ routeParams.id }} not found!
      </VAlert>
    </div>
  </div>
</template>
