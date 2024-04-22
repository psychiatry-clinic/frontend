<script setup lang="ts">
import type { Patient } from '@/utils/types';
import rocketImg from '@images/eCommerce/rocket.png'

const props = defineProps<Props>()
const isUserInfoEditDialogVisible = ref(false)

interface Props {
  customerData: Patient
}

const userData = {
  id: 110,
  firstName: 'Selena',
  lastName: 'Kyle',
  company: 'pixinvent',
  role: 'Web developer',
  username: 'charwomen1940',
  country: 'United States',
  contact: '(829) 537-0057',
  email: 'irena.dubrovna@wayne.com',
  currentPlan: '',
  status: 'Active',
  avatar: '',
  taskDone: null,
  projectDone: null,
  taxId: 'Tax-8894',
  language: 'English',
  fullName: 'Selena Kyle',
}

const calculateAge = (dob: number) => {
  const birthYear = +dob
  const currentYear = new Date().getFullYear()

  return currentYear - +birthYear
}
</script>

<template>
  <VRow>
    <!-- SECTION Customer Details -->
    <VCol cols="12">
      <VCard v-if="props.customerData">
        <VCardText class="text-center pt-12">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            :color="!props.customerData.customer ? 'primary' : undefined"
            :variant="!props.customerData.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="props.customerData.avatar"
              :src="props.customerData.avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-medium"
            >
              {{ avatarText(props.customerData.name) }}
            </span>
          </VAvatar>

          <!-- 👉 Customer fullName -->
          <h5 class="text-h5 mt-4">
            {{ props.customerData.name }}
          </h5>
          <!-- <div class="text-body-1">
            Customer ID #{{ props.customerData.customerId }}
          </div> -->

          <div class="d-flex justify-space-evenly gap-x-5 mt-6">
            <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                class="me-4"
              >
                <VIcon icon="tabler-file" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <h5 class="text-h5">
                  {{ props.customerData.visits.length }}
                </h5>
                <div class="text-body-1">
                  Visits
                </div>
              </div>
            </div>
            <!-- <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                class="me-3"
              >
                <VIcon icon="tabler-currency-dollar" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <h5 class="text-h5">
                  ${{ props.customerData.totalSpent }}
                </h5>
                <div class="text-body-1">
                  Spent
                </div>
              </div>
            </div> -->
          </div>
        </VCardText>

        <!-- 👉 Customer Details -->
        <VCardText>
          <h5 class="text-h5">
            Details
          </h5>

          <VDivider class="my-4" />

          <VList class="card-list mt-2">
            <VListItem>
              <h6 class="text-h6">
                name :
                <span class="text-body-1 d-inline-block">
                  {{ props.customerData.name }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Gender:
                <span class="text-body-1 d-inline-block">
                  {{ props.customerData.gender }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Date of birth :
                <span class="text-body-1 d-inline-block">
                  {{ props.customerData.dob }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Age :
                <span class="text-body-1 d-inline-block">
                  {{ calculateAge(props.customerData.dob) }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Phone :
                <span class="text-body-1 d-inline-block">
                  {{ props.customerData.phone }}
                </span>
              </h6>
            </VListItem>
          </VList>
        </VCardText>

        <VCardText class="text-center">
          <VBtn
            block
            @click="isUserInfoEditDialogVisible = !isUserInfoEditDialogVisible"
          >
            Edit Details
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
  <UserInfoEditDialog
    v-model:isDialogVisible="isUserInfoEditDialogVisible"
    :user-data="userData"
  />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.5rem;
}

.current-plan {
  background: linear-gradient(45deg, rgb(var(--v-theme-primary)) 0%, #9e95f5 100%);
  color: #fff;
}
</style>
