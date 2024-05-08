<script setup lang="ts">
  interface Consultation {
    branch: string
    result?: string // Include result property
  }

  interface Model {
    consultations: Consultation[]
  }

  interface Props {
    edit?: boolean
  }

  const props = defineProps<Props>()

  const model = defineModel<Model>()

  const consultations = ref<Consultation[]>(model.value?.consultations || [])

  if (model.value && props.edit) {
    console.log(model.value)
    console.log(consultations.value)
    consultations.value = model.value
  }

  let removeTimer: NodeJS.Timeout | null = null

  // Attach event listener when component is mounted
  document.addEventListener(
    'blur',
    () => {
      if (removeTimer) clearTimeout(removeTimer)
      removeTimer = setTimeout(removeEmptyNames, 2000)
    },
    true
  )

  // Clean up event listener when component is unmounted
  onBeforeUnmount(() => {
    document.removeEventListener('blur', removeEmptyNames, true)
    if (removeTimer) clearTimeout(removeTimer)
  })

  function addConsultation() {
    if (!consultations.value) return
    if (
      (consultations.value && // Add null check
        consultations.value[consultations.value.length - 1].branch === '') ||
      consultations.value[consultations.value.length - 1].result === ''
    ) {
      return
    }
    consultations.value.push({ branch: '', result: '' })
  }

  function enableSecondField(index: number) {
    const currentConsultation = consultations.value?.[index]
    return !!currentConsultation?.branch
  }

  function saveNameUppercase(index: number) {
    if (!consultations.value || !consultations.value[index]) return
    consultations.value[index].branch =
      consultations.value[index].branch.toUpperCase()
  }

  function removeEmptyNames() {
    if (!model.value) return
    if (!consultations.value) return
    if (!consultations.value[0]) return

    // Keep the first consultation unchanged
    const firstConsultation = consultations.value[0]

    // Filter out empty consultations except for the first one and newly added ones
    consultations.value = [
      firstConsultation,
      ...consultations.value.slice(1).filter((consultation, index) => {
        // Check if it's a newly added consultation (no result property)
        const isNewConsultation = !('result' in consultation)
        // Remove empty consultations that are not newly added
        return isNewConsultation || consultation.branch.trim() !== ''
      }),
    ]
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Consultation</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <template v-for="(consultation, index) in consultations" :key="index">
      <VRow>
        <VCol cols="6">
          <AppAutocomplete
            :placeholder="
              consultation.branch ? '' : 'Type branch for consultation'
            "
            :items="[
              'Neurology',
              'Hearing',
              'Medicine',
              'ENT',
              'Speech & Hearing',
              'Ophthalmology',
            ]"
            v-model="consultation.branch"
            @input="saveNameUppercase(index)"
          />
        </VCol>
        <VCol cols="6">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="
              consultation.result ? '' : 'Type Result of consultation'
            "
            v-model="consultation.result"
            @input="enableSecondField(index)"
          />
        </VCol>
      </VRow>
    </template>

    <VRow>
      <VCol cols="12">
        <VBtn variant="outlined" @click.prevent="addConsultation">
          <VIcon icon="tabler-plus" end class="flip-in-rtl me-2" />
          <span> Add New Consultation </span>
        </VBtn>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
