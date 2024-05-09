<script setup lang="ts">
  import { Patient } from '@/utils/types'
  import visitTimeLine from './visitTimeLine.vue'

  interface Props {
    patientData: Patient
  }

  const { patientData } = defineProps<Props>()
</script>

<template>
  <VRow>
    <VCol>
      <visitTimeLine :patientData="patientData" />
    </VCol>
  </VRow>
</template>
