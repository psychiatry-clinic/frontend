<script setup lang="ts">
import { Visit } from "@/utils/types";
import { formatDistanceToNow } from "date-fns";

interface Props {
  visits?: Visit[];
}

const { visits } = defineProps<Props>();
</script>

<template>
  <VCard title="Visits Timeline">
    <VCardText>
      <VBtn variant="outlined mb-5"> New Visit </VBtn>
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
              {{ getVisitNumber(visits, index) }}
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
              Chief Complaint: {{ visit.chief_complaint }}
            </div>
            <span class="app-timeline-meta">
              {{ formatDate(visit.createdAt) }}
            </span>
          </div>
          <div class="app-timeline-text mt-1">
            Management: {{ visit.management }}
          </div>
          <VBtn variant="tonal" class="d-inline-flex align-center mt-4">
            Open Visit
          </VBtn>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>
