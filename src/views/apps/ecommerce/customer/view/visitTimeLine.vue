<script setup lang="ts">
  import { Patient, User } from '@/utils/types'
  import { formatDistanceToNow } from 'date-fns'
  import { marked } from 'marked'
  const renderedMarkdown = computed(() => marked(gptResponse.value))

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

  const { isAnalyzing, gptResponse, errorMessage, analyzeWithGPT } =
    useGPTAnalysis()

  const analyze = () => {
    analyzeWithGPT(patientData?.visits)
  }
</script>

<template>
  <VCard :title="t('Visits Timeline')" class="mb-4">
    <VCardText>
      <div class="d-flex justify-start">
        <VBtn
          v-if="
            (storedUserData?.role === 'DOCTOR' &&
              patientData?.visits?.[patientData.visits.length - 1] &&
              !patientData.visits[patientData.visits.length - 1].active) ||
            patientData.visits?.length === 0
          "
          variant="outlined"
          class="mb-5 mr-4"
          @click="
            router.push({
              name: 'patients-visits-new-id',
              params: { id: patientData.id },
              query: { dob: patientData.dob, name: patientData.name } as any,
            } as any)
          "
        >
          {{ t('New Visit') }}
        </VBtn>
        <VBtn
          color="primary"
          :loading="isAnalyzing"
          :disabled="isAnalyzing"
          @click="analyze"
        >
          {{ t('Analyze with GPT') }}
        </VBtn>
      </div>

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
                {{
                  visit.chief_complaint?.Complaint
                    ? visit.chief_complaint?.Complaint
                    : visit.present_illness?.Course
                }}
                {{ visit.chief_complaint?.Duration ? 'for' : '' }}
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
            <li v-if="visit.notes && visit.notes?.Notes">
              {{ visit.notes?.Notes }}
            </li>
            <li v-if="visit.notes && visit.notes?.['Current Symptoms']">
              {{ visit.notes?.['Current Symptoms'] }}
            </li>
            <li v-if="visit.notes && visit.notes?.Compliance">
              {{ visit.notes?.Compliance + ' compliance' }}
            </li>
            <li v-if="visit.notes && visit.notes?.['Mental State']">
              {{ visit.notes?.['Mental State'] }}
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
              } as any)
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
              } as any)
            "
            >{{ t('Summary') }}
          </VBtn>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
  <VCard v-if="gptResponse" class="mb-4">
    <VCardItem>
      <VCardTitle>{{ t('GPT Analysis') }}</VCardTitle>
    </VCardItem>
    <VCardText>
      <div class="markdown-content" v-html="renderedMarkdown"></div>
    </VCardText>
  </VCard>
</template>

<style>
  .markdown-content {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 1em;
      margin-bottom: 0.5em;
      font-weight: 600;
    }

    p {
      margin-bottom: 1em;
      line-height: 1.6;
    }

    ul,
    ol {
      margin-bottom: 1em;
      padding-left: 2em;
    }

    li {
      margin-bottom: 0.5em;
    }

    code {
      background-color: rgba(var(--v-theme-primary), 0.1);
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-family: monospace;
    }

    pre {
      background-color: rgba(var(--v-theme-primary), 0.05);
      padding: 1em;
      border-radius: 4px;
      overflow-x: auto;
      margin-bottom: 1em;
    }

    blockquote {
      border-left: 4px solid rgba(var(--v-theme-primary), 0.5);
      padding-left: 1em;
      margin-left: 0;
      margin-bottom: 1em;
      color: rgba(var(--v-theme-on-surface), 0.7);
    }
  }
</style>
