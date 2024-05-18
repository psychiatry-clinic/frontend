<script setup lang="ts">
  import { Patient, User } from '@/utils/types'
  import { formatDistanceToNow } from 'date-fns'

  const { t } = useI18n()

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute()

  interface Props {
    patientData: Patient
  }

  const { patientData } = defineProps<Props>()

  console.log(patientData.visits)
</script>

<template>
  <VCard :title="t('Visits Timeline')">
    <VCardText>
      <VBtn
        v-if="
          (storedUserData?.role === 'DOCTOR' &&
            patientData?.visits?.[patientData.visits.length - 1] &&
            !patientData.visits[patientData.visits.length - 1].active) ||
          patientData.visits?.length === 0
        "
        variant="outlined"
        class="mb-5"
        @click="
          router.push({
            name: 'patients-visits-new-id',
            params: { id: patientData.id },
            query: { dob: patientData.dob, name: patientData.name },
          })
        "
      >
        {{ t('New Visit') }}
      </VBtn>

      <VTimeline
        side="end"
        align="start"
        line-inset="8"
        truncate-line="start"
        density="compact"
      >
        <!-- SECTION Timeline Item: Flight -->
        <VTimelineItem
          v-for="(visit, index) in patientData.visits?.slice().reverse()"
          dot-color="primary"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div
            class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2"
          >
            <span class="app-timeline-title">
              {{ getVisitNumber(patientData.visits, index) }} visit
            </span>
            <span class="app-timeline-meta"
              >{{
                formatDistanceToNow(new Date(visit.createdAt), {
                  addSuffix: true,
                })
              }}
            </span>
          </div>

          <!-- 👉 Content -->
          <div
            v-if="!visit.follow_up"
            class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2"
          >
            <div class="app-timeline-text mt-1">
              <span class="text-warning"> {{ t('Chief Complaint') }}: </span>
              <li>
                {{ visit.chief_complaint?.Complaint }} for
                {{ visit.chief_complaint?.Duration }}
              </li>
            </div>
            <span class="app-timeline-meta">
              {{ formatDate(visit.createdAt) }}
            </span>
          </div>
          <div v-if="!visit.follow_up" class="app-timeline-text mt-1">
            <span class="text-warning"> {{ t('Diagnosis') }}: </span>
            <li>
              {{ visit.ddx?.['Differential Diagnosis'] }}
            </li>
          </div>
          <div v-else class="app-timeline-text mt-1">
            <span class="text-warning"> {{ t('Follow up notes') }}: </span>
            <li>
              {{ visit.notes?.Notes }}
            </li>
          </div>
          <div class="app-timeline-text mt-1">
            <span class="text-warning"> {{ t('Management') }}: </span>
            <li v-for="item in visit.management?.managements">
              {{ item.Name }} {{ item.Form }} {{ item.Dose }} {{ item.Use }}
            </li>
          </div>
          <div class="app-timeline-text mt-1">
            <span class="text-warning"> {{ t('Doctor') }}: </span>
            <li>
              {{ visit.doctor?.fullName }}
              {{ visit.clinic?.name === 'autism' ? t('in NCA') : '' }}
            </li>
          </div>
          <VBtn
            variant="tonal"
            class="d-inline-flex align-center mt-4 me-2"
            v-if="visit.active || storedUserData?.id === visit.doctor?.id"
            @click="
              router.push({
                name: 'patients-visits-edit-id',
                params: { id: patientData.id },
                query: {
                  visit: visit.id,
                },
              })
            "
          >
            {{
              storedUserData?.role === 'DOCTOR'
                ? t('Edit Visit')
                : t('Therapy Notes')
            }}
          </VBtn>
          <VBtn
            v-if="storedUserData?.role !== 'PSYCHOLOGIST'"
            variant="tonal"
            class="d-inline-flex align-center mt-4 me-2"
            @click="
              router.push({
                name: 'patients-visits-open-id',
                params: { id: patientData.id },
                query: {
                  visit: visit.id,
                  dob: patientData.dob,
                  name: patientData.name,
                },
              })
            "
            >{{ t('Summary') }}
          </VBtn>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>
