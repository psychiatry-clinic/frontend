const response = await $api('/patients/1') console.log(response)

<script setup lang="ts">
import type { Patient, User } from "@/utils/types";
import ECommerceAddCustomerDrawer from "@/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue";

const router = useRouter();

const searchQuery = ref("");
const isAddPatientDrawerOpen = ref(false);

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();

// Data table Headers
const headers = [
  { title: "Patient", key: "name" },
  { title: "Gender", key: "gender" },
  { title: "Date of Birth", key: "dob" },
  { title: "Age", key: "age" },
  { title: "Visits", key: "visits.length" },
  { title: "First Visit", key: "createdAt" },
  { title: "ACTIONS", key: "actions" },
];

// Update data table options
const updateOptions = (options: any) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
};

const storedUserData: User | undefined = useCookie("userData").value as
  | User
  | undefined;

const link = `/patients/${storedUserData?.id}`;

let { data } = await useApi<any>(
  createUrl(link, {
    query: {
      q: searchQuery,
      itemsPerPage,
      page,
      sortBy,
      orderBy,
    },
  })
);

const patients = computed((): Patient[] => {
  return data.value.patients.map((patient: Patient) => ({
    ...patient,
    createdAt: formatDate(patient.createdAt), // Format createdAt date
    age: calculateAge(patient.dob.toString()), // Calculate age
  }));
});
const totalPatients = computed(() => data.value.total);
</script>

<template>
  <div>
    <VCard>
      <VCardText>
        <div class="d-flex justify-space-between flex-wrap gap-y-4">
          <AppTextField
            v-model="searchQuery"
            style="max-inline-size: 280px; min-inline-size: 280px"
            placeholder="Search Name"
          />
          <div class="d-flex flex-row gap-4 align-center flex-wrap">
            <AppSelect v-model="itemsPerPage" :items="[5, 10, 20, 50, 100]" />
            <VBtn
              v-if="storedUserData?.role === 'DOCTOR'"
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
        <template #bottom>
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
      </VDataTableServer>
    </VCard>

    <ECommerceAddCustomerDrawer
      v-model:is-drawer-open="isAddPatientDrawerOpen"
    />
  </div>
</template>

<style lang="scss" scoped>
.customer-title:hover {
  color: rgba(var(--v-theme-primary)) !important;
}
</style>
