<script setup lang="ts">
  import { calculateAge, formatSiblingOrder } from '@/utils/myFormat'
  import type { Patient } from '@/utils/types'

  const props = defineProps<Props>()
  const isUserInfoEditDialogVisible = ref(false)

  interface Props {
    patientData: Patient
  }

  const editPatientData = () => {
    console.log('change data')

    //later
  }
</script>

<template>
  <VRow>
    <!-- SECTION Customer Details -->
    <VCol cols="12">
      <VCard v-if="props.patientData">
        <!-- 👉 Header -->
        <VCardText class="text-center pt-12">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            :color="!props.patientData.name ? 'primary' : undefined"
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

          <!-- 👉 Patient fullName -->
          <h5 class="text-h5 mt-4">
            {{ props.patientData.name }}
          </h5>
        </VCardText>

        <!-- 👉 Patient Details -->
        <VCardText>
          <VList class="card-list mt-2">
            <!-- <VListItem>
              <h6 class="text-h6">
                Name :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.name }}
                </span>
              </h6>
            </VListItem> -->

            <!-- 👉 Gender -->
            <VListItem>
              <h6 class="text-h6">
                Gender:
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.gender }}
                </span>
              </h6>
            </VListItem>

            <!-- 👉 BirthDate -->
            <VListItem>
              <h6 class="text-h6">
                Birth Date :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.dob }}
                </span>
              </h6>
            </VListItem>

            <!-- 👉 Age -->
            <VListItem>
              <h6 class="text-h6">
                Age :
                <span class="text-body-1 d-inline-block">
                  {{ calculateAge(props.patientData.dob) }}
                </span>
              </h6>
            </VListItem>

            <!-- 👉 Phone -->
            <VListItem>
              <h6 class="text-h6">
                Phone :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.phone }}
                </span>
              </h6>
            </VListItem>

            <p class="d-block mt-4 mb-2 text-primary">Demographics</p>

            <!-- 👉 Marital Status -->
            <div v-if="props.patientData.demographics">
              <VListItem v-if="+calculateAge(props.patientData.dob) > 18">
                <h6 class="text-h6">
                  Marital Status :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.demographics[0]?.marital_status }}
                  </span>
                </h6>
              </VListItem>

              <!-- 👉 Children -->
              <VListItem v-if="+calculateAge(props.patientData.dob) > 18">
                <h6 class="text-h6">
                  Children :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.demographics[0]?.children }}
                  </span>
                </h6>
              </VListItem>

              <!-- 👉 Residence -->
              <VListItem>
                <h6 class="text-h6">
                  Residence :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.demographics[0]?.residence }}
                  </span>
                </h6>
              </VListItem>

              <!-- 👉 Education -->
              <VListItem>
                <h6 class="text-h6">
                  Education :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.demographics[0]?.education }}
                  </span>
                </h6>
              </VListItem>

              <!-- 👉 Work -->
              <VListItem v-if="+calculateAge(props.patientData.dob) > 18">
                <h6 class="text-h6">
                  Work :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.demographics[0]?.occupation }}
                  </span>
                </h6>
              </VListItem>
            </div>

            <br />

            <div v-if="+calculateAge(props.patientData.dob) < 18">
              <!-- 👉 Relationship -->
              <VListItem>
                <h6 class="text-h6">
                  <span
                    :class="props.patientData.related ? 'text-primary' : ''"
                  >
                    {{ props.patientData.related ? 'Related' : 'Not Related' }}
                  </span>
                  Parents
                </h6>
              </VListItem>

              <!-- 👉 Father -->
              <p class="d-block mt-4 mb-2 text-primary">Father</p>

              <VListItem>
                <h6 class="text-h6">
                  Birth Date :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.father_dob }}
                  </span>
                </h6>
              </VListItem>

              <VListItem>
                <h6 class="text-h6">
                  Age at Birth :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.father_age }}
                  </span>
                </h6>
              </VListItem>

              <VListItem>
                <h6 class="text-h6">
                  Age Now :
                  <span class="text-body-1 d-inline-block">
                    {{
                      calculateAge(
                        props.patientData.father_dob
                          ? props.patientData.father_dob.toString()
                          : '1'
                      )
                    }}
                  </span>
                </h6>
              </VListItem>

              <VListItem>
                <h6 class="text-h6">
                  Education :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.father_edu }}
                  </span>
                </h6>
              </VListItem>

              <VListItem>
                <h6 class="text-h6">
                  Work :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.father_work }}
                  </span>
                </h6>
              </VListItem>

              <!-- 👉 Mother -->
              <p class="d-block mt-4 mb-2 text-primary">Mother</p>

              <VListItem>
                <h6 class="text-h6">
                  Birth Date :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.mother_dob }}
                  </span>
                </h6>
              </VListItem>

              <VListItem>
                <h6 class="text-h6">
                  Age at Birth :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.mother_age }}
                  </span>
                </h6>
              </VListItem>

              <VListItem>
                <h6 class="text-h6">
                  Age Now :
                  <span class="text-body-1 d-inline-block">
                    {{
                      calculateAge(
                        props.patientData.mother_dob
                          ? props.patientData.mother_dob.toString()
                          : '1'
                      )
                    }}
                  </span>
                </h6>
              </VListItem>

              <VListItem>
                <h6 class="text-h6">
                  Education :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.mother_edu }}
                  </span>
                </h6>
              </VListItem>

              <VListItem>
                <h6 class="text-h6">
                  Work :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.mother_work }}
                  </span>
                </h6>
              </VListItem>

              <br />

              <!-- 👉 Siblings -->
              <VListItem>
                <h6 class="text-h6 text-primary">
                  Siblings :
                  <span class="text-body-1 d-inline-block">
                    {{ props.patientData.siblings }}
                  </span>
                </h6>
              </VListItem>

              <!-- 👉 Order -->
              <VListItem>
                <h6 class="text-h6 text-primary">
                  Order in Siblings :
                  <span class="text-body-1 d-inline-block">
                    {{ formatSiblingOrder(props.patientData.order as number) }}
                  </span>
                </h6>
              </VListItem>

              <br />
            </div>

            <VListItem>
              <h6 class="text-h6 text-primary">
                Notes :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.notes as string }}
                </span>
              </h6>
            </VListItem>

            <br />

            <!-- 👉 Family Hx -->
            <VListItem>
              <h6 class="text-h6 text-primary">
                Family History :
                <span class="text-body-1 d-inline-block">
                  {{ props.patientData.familyHx }}
                </span>
              </h6>
            </VListItem>
          </VList>
        </VCardText>

        <!-- 👉 Edit Details -->
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
