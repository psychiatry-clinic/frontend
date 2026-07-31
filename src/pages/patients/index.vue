<script setup lang="ts">
  import type { Patient, User } from '@/utils/types'
  import addPatient from './addPatient.vue'
  const { t } = useI18n()

  const router = useRouter()

  const searchQuery = ref('')
  const isAddPatientDrawerOpen = ref(false)

  // Data table options
  const itemsPerPage = ref(10)
  const page = ref(1)
  const sortBy = ref()
  const orderBy = ref()

  // Data table Headers
  const headers = [
    { title: t('Patient'), key: 'name' },
    { title: t('Gender'), key: 'gender' },
    { title: t('Date of Birth'), key: 'dob' },
    { title: t('Age'), key: 'age' },
    { title: t('Visits'), key: 'visits.length' },
    { title: t('Registration'), key: 'createdAt' },
    { title: t('ACTIONS'), key: 'actions' },
  ]

  // Update data table options
  const updateOptions = (options: any) => {
    sortBy.value = options.sortBy[0]?.key
    orderBy.value = options.sortBy[0]?.order
  }

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const link = `/patients/${storedUserData?.id}`

  let { data } = await useApi<any>(
    createUrl(link, {
      query: {
        q: searchQuery,
        itemsPerPage,
        page,
        sortBy,
        orderBy,
      },
    }),
  )

  const patients = computed((): Patient[] => {
    const rawList = Array.isArray(data.value?.patients)
      ? data.value.patients
      : Array.isArray(data.value?.data)
        ? data.value.data
        : Array.isArray(data.value)
          ? data.value
          : []

    return rawList.map((patient: Patient) => ({
      ...patient,
      createdAt: patient.createdAt ? removeTimeFromDate(patient.createdAt) : '',
      age: patient.dob ? calculateAge(patient.dob.toString()) : '',
      dob: patient.dob ? removeTimeAndDate(patient.dob) : '',
      gender: patient.gender ? t(patient.gender) : '',
    }))
  })

  const totalPatients = computed(() => {
    const apiTotal = data.value?.total
    const patientsArray = Array.isArray(data.value?.patients)
      ? data.value.patients
      : Array.isArray(data.value?.data)
        ? data.value.data
        : Array.isArray(data.value)
          ? data.value
          : []

    if (patientsArray.length === 0 && (apiTotal ?? 0) > 0) return 0
    return apiTotal ?? patientsArray.length
  })
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <div class="d-flex justify-space-between flex-wrap gap-y-4">
          <AppTextField
            v-model="searchQuery"
            style="max-inline-size: 280px; min-inline-size: 280px"
            :placeholder="t('Search Name')"
          />
          <div class="d-flex flex-row gap-4 align-center flex-wrap">
            <AppSelect v-model="itemsPerPage" :items="[5, 10, 20, 50, 100]" />
            <VBtn
              v-if="storedUserData?.role === 'DOCTOR' || storedUserData?.role === 'ADMIN'"
              prepend-icon="tabler-plus"
              @click="isAddPatientDrawerOpen = !isAddPatientDrawerOpen"
            >
              {{ t('Add Patient') }}
            </VBtn>
          </div>
        </div>
      </VCardText>

      <VDivider />
      <VDataTableServer
        v-if="patients !== null"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="patients"
        item-value="name"
        :headers="headers"
        :items-length="totalPatients"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template v-if="totalPatients > 0" #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalPatients"
          />
        </template>

        <template #item.actions="{ item }">
          <div class="d-flex gap-1">
            <IconBtn @click="router.push(`/patients/${item.id}`)">
              <VIcon icon="tabler-edit" />
            </IconBtn>
          </div>
        </template>

        <template #no-data>
          <div class="text-center text-h6 py-8">
            {{ t('No patients found') }}
          </div>
        </template>
      </VDataTableServer>
    </VCard>

    <addPatient v-model:is-drawer-open="isAddPatientDrawerOpen" />
  </div>
</template>

<style lang="scss" scoped>
  .customer-title:hover {
    color: rgba(var(--v-theme-primary)) !important;
  }
</style>
