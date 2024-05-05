<script setup lang="ts">
import { Visit } from "@/utils/types";
import { formatDistanceToNow, differenceInHours } from "date-fns";

const router = useRouter();
const route = useRoute();

interface Props {
  visits?: Visit[];
  patientId: number;
}

const { visits, patientId } = defineProps<Props>();

let isNewVisit = false;

watchEffect(() => {
  if (visits?.slice().reverse()[0]) {
    const difference = differenceInHours(
      new Date(),
      visits?.slice().reverse()[0].createdAt
    );
    isNewVisit = difference >= 8;
  } else {
    isNewVisit = true;
  }
});
</script>

<template>
  <VCard title="Visits Timeline">
    <VCardText>
      <VBtn
        v-if="isNewVisit"
        variant="outlined"
        class="mb-5"
        @click="router.push(`/patients/visits/new/${patientId}`)"
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
          v-for="(visit, index) in visits?.slice().reverse()"
          dot-color="primary"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div
            class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2"
          >
            <span class="app-timeline-title">
              {{ getVisitNumber(visits, index) }} visit
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
            class="d-flex justify-space-between align-center gap-2 flex-wrap mb-2"
          >
            <div class="app-timeline-text mt-1">
              Chief Complaint: {{ visit.chief_complaint?.complaint }} for
              {{ visit.chief_complaint?.duration }}
            </div>
            <span class="app-timeline-meta">
              {{ formatDate(visit.createdAt) }}
            </span>
          </div>
          <div class="app-timeline-text mt-1">
            Management: {{ visit.management }}
          </div>
          <VBtn variant="tonal" class="d-inline-flex align-center mt-4">
            {{ isNewVisit ? "Open Visit" : "Edit Visit" }}
          </VBtn>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>
