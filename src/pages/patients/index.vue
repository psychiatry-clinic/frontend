const response = await $api('/patients/1')

console.log(response)

<script setup lang="ts">
import ECommerceAddCustomerDrawer from '@/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue'
import type { Patient } from '@db/apps/ecommerce/types'

const patientsArray = ref({
  total: 88,
  patients: [
    {
      id: 21,
      name: 'احمد علي',
      dob: 2001,
      gender: 'Male',
      phone: '+112345672',
      createdAt: '2024-04-06T18:10:03.584Z',
      updatedAt: '2024-04-06T18:10:03.584Z',
    },
    {
      id: 22,
      name: 'Patient 2',
      dob: 2000,
      gender: 'Female',
      phone: '+112345671',
      createdAt: '2024-04-06T18:10:03.583Z',
      updatedAt: '2024-04-06T18:10:03.583Z',
    },
    {
      id: 23,
      name: 'Patient 2',
      dob: 2000,
      gender: 'Female',
      phone: '+112345671',
      createdAt: '2024-04-06T18:10:03.583Z',
      updatedAt: '2024-04-06T18:10:03.583Z',
    },
    {
      id: 24,
      name: 'Patient 2',
      dob: 2000,
      gender: 'Female',
      phone: '+112345671',
      createdAt: '2024-04-06T18:10:03.583Z',
      updatedAt: '2024-04-06T18:10:03.583Z',
    },
    {
      id: 25,
      name: 'Patient 2',
      dob: 2000,
      gender: 'Female',
      phone: '+112345671',
      createdAt: '2024-04-06T18:10:03.583Z',
      updatedAt: '2024-04-06T18:10:03.583Z',
    },
    {
      id: 26,
      name: 'Patient 2',
      dob: 2000,
      gender: 'Female',
      phone: '+112345671',
      createdAt: '2024-04-06T18:10:03.583Z',
      updatedAt: '2024-04-06T18:10:03.583Z',
    },
    {
      id: 27,
      name: 'Patient 2',
      dob: 2000,
      gender: 'Female',
      phone: '+112345671',
      createdAt: '2024-04-06T18:10:03.583Z',
      updatedAt: '2024-04-06T18:10:03.583Z',
    },
    {
      id: 28,
      name: 'Patient 2',
      dob: 2000,
      gender: 'Female',
      phone: '+112345671',
      createdAt: '2024-04-06T18:10:03.583Z',
      updatedAt: '2024-04-06T18:10:03.583Z',
    },
  ],
})

const searchQuery = ref('')
const isAddPatientDrawerOpen = ref(false)

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

// Data table Headers
const headers = [
  { title: 'Patient', key: 'name' },
  { title: 'Gender', key: 'gender' },
  { title: 'Date of Birth', key: 'dob' },
  { title: 'Age', key: 'age' },
  { title: 'First Visit', key: 'createdAt' },
]

// Update data table options
const updateOptions = (options: any) => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const storedUserData: Patient | undefined = useCookie('userData').value as Patient | undefined

const link = `/patients/${storedUserData?.id}`

// Fetch customers Data
const { data } = await useApi<any>(createUrl(link,
  {
    query: {
      q: searchQuery,
      itemsPerPage,
      page,
      sortBy,
      orderBy,
    },
  }))

console.log(data.value)

const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  return date.toLocaleDateString('en-GB') // Adjust locale according to desired date format
}

const calculateAge = (dob: string) => {
  const birthYear = +dob
  const currentYear = new Date().getFullYear()

  return currentYear - +birthYear
}

// const patients = computed((): Patient[] => patientsArray.value.patients)
const patients = computed((): Patient[] => {
  return data.value.patients.map((patient: Patient) => ({
    ...patient,
    createdAt: formatDate(patient.createdAt), // Format createdAt date
    age: calculateAge(patient.dob.toString()), // Calculate age
  }))
})

const totalPatients = computed(() => data.value.total)
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <div class="d-flex justify-space-between flex-wrap gap-y-4">
          <AppTextField
            v-model="searchQuery"
            style="max-inline-size: 280px; min-inline-size: 280px;"
            placeholder="Search Name"
          />
          <div class="d-flex flex-row gap-4 align-center flex-wrap">
            <AppSelect
              v-model="itemsPerPage"
              :items="[5, 10, 20, 50, 100]"
            />
            <VBtn
              prepend-icon="tabler-plus"
              @click="isAddPatientDrawerOpen = !isAddPatientDrawerOpen"
            >
              Add Patient
            </VBtn>
          </div>
        </div>
      </VCardText>

      <VDivider />
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="patients"
        item-value="name"
        :headers="headers"
        :items-length="totalPatients"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalPatients"
          />
        </template>
      </VDataTableServer>
    </VCard>

    <ECommerceAddCustomerDrawer v-model:is-drawer-open="isAddPatientDrawerOpen" />
  </div>
</template>

<style lang="scss" scoped>
.customer-title:hover {
  color: rgba(var(--v-theme-primary)) !important;
}
</style>
