<script setup lang="ts">
import calculateAge from "@/utils/calculateAge";
import type { Patient } from "@/utils/types";

const props = defineProps<Props>();
const isUserInfoEditDialogVisible = ref(false);

interface Props {
  patientData: Patient;
}

const editPatientData = () => {
  console.log("change data");

  //later
};

const formatSiblingOrder = (order: number | string): string => {
  const suffixes = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
  const index = +order % 100;
  return (
    order + (suffixes[(index - 20) % 10] || suffixes[index] || suffixes[0])
  );
};
</script>

<template>
  <VRow>
    <!-- SECTION Customer Details -->
    <VCol cols="12">
      <VCard v-if="props.patientData">
        <VCardText class="text-center pt-12">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            :color="!props.patientData.customer ? 'primary' : undefined"
            :variant="!props.patientData.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="props.patientData.avatar"
              :src="props.patientData.avatar"
            />
            <span v-else class="text-5xl font-weight-medium">
              {{ avatarText(props.patientData.name) }}
            </span>
          </VAvatar>

          <!-- 👉 Customer fullName -->
          <h5 class="text-h5 mt-4">
            {{ props.patientData.name }}
          </h5>
          <!-- <div class="text-body-1">
            Customer ID #{{ props.patientData.customerId }}
          </div> -->

          <div class="d-flex justify-space-evenly gap-x-5 mt-6">
            <!-- <div class="d-flex align-center">
              <VAvatar variant="tonal" color="primary" rounded class="me-4">
                <VIcon icon="tabler-file" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <h5 class="text-h5">
                  {{ props.patientData.visits.length }}
                </h5>
                <div class="text-body-1">Visits</div>
              </div>
            </div> -->
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
                  ${{ props.patientData.totalSpent }}
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
          <!-- <VDividerclass="my-4" /> -->

          <VList class="card-list mt-2">
            <VListItem>
              <h6 class="text-h6">
                name :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.name }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Gender:
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.gender }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Date of birth :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.dob }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Age :
                <span class="text-body-1 d-inline-block">
                  {{ calculateAge(props.patientData.dob) }}
                </span>
              </h6>
            </VListItem>

            <p class="d-block mt-4 mb-2 text-primary">Demographics</p>

            <VListItem>
              <h6 class="text-h6">
                Phone :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.phone }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Marital Status :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.demographics[0]?.marital_status }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Children :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.demographics[0]?.children }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Residence :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.demographics[0]?.residence }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Education :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.demographics[0]?.education }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Occupation :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.demographics[0]?.occupation }}
                </span>
              </h6>
            </VListItem>

            <p class="d-block mt-4 mb-2 text-primary">Family</p>

            <VListItem>
              <h6 class="text-h6">
                Father Date of Birth :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.father_dob }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Father Age Now :
                <span class="text-body-1 d-inline-block">
                  {{
                    calculateAge(
                      props.patientData.father_dob
                        ? props.patientData.father_dob
                        : 1
                    )
                  }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Father Age at Birth :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.father_age }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Mother Date of Birth :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.mother_dob }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Mother Age Now :
                <span class="text-body-1 d-inline-block">
                  {{
                    calculateAge(
                      props.patientData.mother_dob
                        ? props.patientData.mother_dob
                        : 1
                    )
                  }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Mother Age at Birth :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.mother_age }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Parents Related :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.related ? "Yes" : "No" }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Father Occupation :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.father_work }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Mother Occupation :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.mother_work }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Siblings :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.siblings }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Order in Siblings :
                <span class="text-body-1 d-inline-block">
                  {{ formatSiblingOrder(props.patientData.order) }}
                </span>
              </h6>
            </VListItem>

            <VListItem>
              <h6 class="text-h6">
                Family History :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.familyHx }}
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
    :user-data="patientData"
    @submit="editPatientData"
  />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.5rem;
}

.current-plan {
  background: linear-gradient(
    45deg,
    rgb(var(--v-theme-primary)) 0%,
    #9e95f5 100%
  );
  color: #fff;
}
</style>
