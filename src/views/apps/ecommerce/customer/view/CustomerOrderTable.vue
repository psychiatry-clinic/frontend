<script setup lang="ts">
import { formatDate } from "@/utils/formatting";
import { Visit } from "@/utils/types";

interface Props {
  visits?: Visit[];
}

const { visits } = defineProps<Props>();

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();

const updateOptions = (options: any) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
};

const headers = [
  { title: "visit number", key: "number" },
  { title: "Date", key: "createdAt" },
  { title: "Actions", key: "actions", sortable: false },
];

const formattedVisits = computed(() => {
  if (!visits) return [];
  return visits.map((visit, i) => ({
    ...visit,
    createdAt: formatDate(visit.createdAt),
    number: i + 1,
  }));
});

// const resolveStatus = (status: string) => {
//   if (status === "Delivered") return { color: "success" };
//   if (status === "Out for Delivery") return { color: "primary" };
//   if (status === "Ready to Pickup") return { color: "info" };
//   if (status === "Dispatched") return { color: "warning" };
// };

// const { data: ordersData, execute: fetchOrders } = await useApi<any>(
//   createUrl("/apps/ecommerce/orders", {
//     query: {
//       q: searchQuery,
//       page,
//       itemsPerPage,
//       sortBy,
//       orderBy,
//     },
//   })
// );

// const visits = computed((): Visit[] => visits.value?.orders || []);
const totalVisits = computed(() => visits?.length || 0);

// const deleteOrder = async (id: number) => {
//   await $api(`/apps/ecommerce/orders/${id}`, {
//     method: "DELETE",
//   });
//   fetchOrders();
// };
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between flex-wrap align-center gap-4">
        <h5 class="text-h5">Visits ({{ visits?.length }})</h5>
        <!-- <div>
          <AppTextField
            v-model="searchQuery"
            placeholder="Search Order"
            style="max-inline-size: 200px; min-inline-size: 200px"
          />
        </div> -->
      </div>
    </VCardText>

    <VDivider />
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :headers="headers"
      :items="formattedVisits"
      item-value="id"
      :items-length="totalVisits"
      class="text-no-wrap"
      @update:options="updateOptions"
    >
      <!-- Order ID -->
      <template #item.order="{ item }">
        <RouterLink
          :to="{
            name: 'apps-ecommerce-order-details-id',
            params: { id: item.order },
          }"
        >
          #{{ item.order }}
        </RouterLink>
      </template>

      <!-- Date -->
      <template #item.date="{ item }">
        {{ new Date(item.date).toDateString() }}
      </template>

      <!-- Status -->
      <!-- <template #item.status="{ item }">
        <VChip label :color="resolveStatus(item.status)?.color" size="small">
          {{ item.status }}
        </VChip>
      </template> -->

      <!-- Spent -->
      <template #item.spent="{ item }"> ${{ item.spent }} </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn>
          <VIcon icon="tabler-dots-vertical" />
          <VMenu activator="parent">
            <VList>
              <VListItem
                value="view"
                :to="{
                  name: 'apps-ecommerce-order-details-id',
                  params: { id: item.order },
                }"
              >
                View
              </VListItem>
              <VListItem value="delete" @click="deleteOrder(item.id)">
                Delete
              </VListItem>
            </VList>
          </VMenu>
        </IconBtn>
      </template>

      <!-- pagination -->
      <template #bottom>
        <TablePagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total-items="totalVisits"
        />
      </template>
    </VDataTableServer>
  </VCard>
</template>
