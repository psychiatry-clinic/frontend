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

// Fetch customers Data
const { data: customerData } = await useApi<any>(createUrl('/apps/ecommerce/customers',
  {
    query: {
      q: searchQuery,
      itemsPerPage,
      page,
      sortBy,
      orderBy,
    },
  }),
)

console.log(customerData.value)
console.log(patientsArray._rawValue)

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
  return patientsArray.value.patients.map(patient => ({
    ...patient,
    createdAt: formatDate(patient.createdAt), // Format createdAt date
    age: calculateAge(patient.dob.toString()), // Calculate age
  }))
})

console.log(patientsArray.value.total)

const totalPatients = computed(() => patientsArray.value.total)
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
        <template #item.name="{ item }">
          <div class="d-flex align-center gap-x-3">
            <VAvatar
              size="34"
              :variant="!item.avatar ? 'tonal' : undefined"
            >
              <VImg
                v-if="item.avatar"
                :src="item.avatar"
              />
              <span v-else>{{ avatarText(item.name) }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <RouterLink
                :to="{ name: 'apps-ecommerce-customer-details-id', params: { id: item.id } }"
                class="text-link font-weight-medium d-inline-block"
                style="line-height: 1.375rem;"
              >
                {{ item.name }}
              </RouterLink>
              <div class="text-body-2">
                id{{ item.id }}
              </div>
            </div>
          </div>
        </template>

        <template #item.customerId="{ item }">
          <div class="text-body-1 text-high-emphasis">
            #{{ item.customerId }}
          </div>
        </template>

        <template #item.orders="{ item }">
          {{ item.order }}
        </template>

        <template #item.country="{ item }">
          <div class="d-flex gap-x-2">
            <img
              :src="item.countryFlag"
              height="22"
              width="22"
            >
            <span class="text-body-1">{{ item.country }}</span>
          </div>
        </template>

        <template #item.totalSpent="{ item }">
          <h6 class="text-h6">
            ${{ item.totalSpent }}
          </h6>
        </template>

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
