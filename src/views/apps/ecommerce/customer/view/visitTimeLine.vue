<script setup lang="ts">
  import { Patient, User } from '@/utils/types'
  import { differenceInHours, formatDistanceToNow } from 'date-fns'

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute()

  interface Props {
    patientData: Patient
  }

  const { patientData } = defineProps<Props>()

  let isNewVisit = false

  watchEffect(() => {
    if (patientData.visits?.slice().reverse()[0]) {
      const difference = differenceInHours(
        new Date(),
        patientData.visits?.slice().reverse()[0].createdAt
      )
      isNewVisit = difference >= 8
    } else {
      isNewVisit = true
    }
  })

  console.log(patientData.visits)
</script>

<template>
  <VCard title="Visits Timeline">
    <VCardText>
      <VBtn
        v-if="isNewVisit && storedUserData?.role === 'DOCTOR'"
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
        New Visit
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
              <span class="text-warning"> Chief Complaint: </span>
              <li>
                {{ visit.chief_complaint?.complaint }} for
                {{ visit.chief_complaint?.duration }}
              </li>
            </div>
            <span class="app-timeline-meta">
              {{ formatDate(visit.createdAt) }}
            </span>
          </div>
          <div v-if="!visit.follow_up" class="app-timeline-text mt-1">
            <span class="text-warning"> Diagnosis: </span>
            <li>
              {{ visit.ddx?.differential }}
            </li>
          </div>
          <div v-else class="app-timeline-text mt-1">
            <span class="text-warning"> Follow up notes: </span>
            <li>
              {{ visit.notes?.notes }}
            </li>
          </div>
          <div class="app-timeline-text mt-1">
            <span class="text-warning"> Management: </span>
            <li v-for="item in visit.management?.managements">
              {{ item.name }} {{ item.form }} {{ item.dose }} {{ item.use }}
            </li>
          </div>
          <div class="app-timeline-text mt-1">
            <span class="text-warning"> Doctor: </span>
            <li>
              {{ visit.doctor?.name }}
            </li>
          </div>
          <VBtn
            variant="tonal"
            class="d-inline-flex align-center mt-4"
            v-if="!isNewVisit && visit.active"
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
            Edit Visit
          </VBtn>
          <VBtn
            variant="tonal"
            class="d-inline-flex align-center mt-4"
            v-else
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
            >Open Visit
          </VBtn>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>
