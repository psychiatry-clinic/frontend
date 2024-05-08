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

  const consultations = ref(model.value?.consultations)

  if (model.value && props.edit) {
    model.value.consultations = model.value
  }

  console.log('model.value?.consultations')
  console.log(model.value?.consultations)
  console.log('model.value')
  console.log(model.value)

  let removeTimer: NodeJS.Timeout | null = null

  // Attach event listener when component is mounted
  document.addEventListener(
    'blur',
    () => {
      if (removeTimer) clearTimeout(removeTimer)
      removeTimer = setTimeout(removeEmptyNames, 1000)
    },
    true
  )

  // Clean up event listener when component is unmounted
  onBeforeUnmount(() => {
    document.removeEventListener('blur', removeEmptyNames, true)
    if (removeTimer) clearTimeout(removeTimer)
  })

  function addConsultation() {
    if (!model.value) return
    if (
      (model.value && // Add null check
        model.value.consultations[model.value.consultations.length - 1]
          .branch === '') ||
      model.value.consultations[model.value.consultations.length - 1].result ===
        ''
    ) {
      return
    }
    const newConsultation: Consultation = { branch: '', result: '' }
    model.value.consultations.push(newConsultation)
  }

  function enableSecondField(index: number) {
    const currentConsultation = model.value?.consultations[index] // Add null check
    return !!currentConsultation?.branch // Add null check
  }

  function saveNameUppercase(index: number) {
    if (!model.value) return
    model.value.consultations[index].branch =
      model.value.consultations[index].branch.toUpperCase()
  }

  function removeEmptyNames() {
    if (!model.value) return
    if (!model.value.consultations) return
    if (model.value.consultations.length === 0) return
    if (!model.value.consultations[0]) return
    // Add null check
    // Keep the first consultation unchanged
    const firstConsultation = model.value.consultations[0]

    // Filter out empty consultations except for the first one and newly added ones
    model.value.consultations = [
      firstConsultation,
      ...model.value.consultations.slice(1).filter((consultation, index) => {
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

    <template
      v-for="(consultation, index) in model?.consultations"
      :key="index"
    >
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
