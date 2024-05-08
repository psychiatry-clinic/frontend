<script setup lang="ts">
  interface Consultation {
    branch: string
    result?: string
  }

  interface Model {
    consultations: Consultation[]
  }

  interface Props {
    edit?: boolean
  }

  const props = defineProps<Props>()
  const model = defineModel<Model>()

  const isThereData = model.value ? true : false

  const consultations = ref<Consultation[]>(model.value?.consultations || [])

  // Function to add a new consultation
  function addConsultation() {
    if (!consultations.value) return
    const lastConsultation = consultations.value[consultations.value.length - 1]
    if (
      !lastConsultation ||
      (lastConsultation.branch === '' && lastConsultation.result === '')
    )
      return
    consultations.value.push({ branch: '', result: '' })
  }

  // Function to enable the second field based on the branch value
  function enableSecondField(index: number) {
    const currentConsultation = consultations.value?.[index]
    return !!currentConsultation?.branch
  }

  // Function to save branch name as uppercase
  function saveNameUppercase(index: number) {
    if (!consultations.value || !consultations.value[index]) return
    consultations.value[index].branch =
      consultations.value[index].branch.toUpperCase()
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Consultation</h6>
      </VCol>
    </VRow>

    <!-- Iterate over consultations -->
    <template v-for="(consultation, index) in consultations" :key="index">
      <VRow>
        <!-- Branch field -->
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
        <!-- Result field -->
        <VCol cols="6">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="
              consultation.result ? '' : 'Type Result of consultation'
            "
            v-model="consultation.result"
          />
        </VCol>
      </VRow>
    </template>

    <!-- Add new consultation button -->
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
