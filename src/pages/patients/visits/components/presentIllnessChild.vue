<script setup lang="ts">
  import {
    courseSuggestions,
    circumstancesSuggestions,
    vegetativeSymptomsSuggestions,
    associatedSymptomsSuggestions,
  } from '@/utils/suggestions'

  const suggestions: { [key: string]: string[] } = {
    Course: courseSuggestions,
    Circumstances: circumstancesSuggestions,
    Vegetative: vegetativeSymptomsSuggestions,
    Associated: associatedSymptomsSuggestions,
    'Intellectual Disability': [],
    ASD: [],
    ADHD: [],
    Speech: [],
    ID: [],
    Language: [],
    Fluency: [],
    Communication: [],
    Learning: [],
    Movement: [],
    Coordination: [],
    Functioning: [],
    Relationships: [],
    Treatments: [],
    Substances: [],
    Risk: [],
  }

  const { t } = useI18n()

  const props = defineProps<Props>()

  interface Props {
    child: boolean
  }

  let fields: string[] = []

  if (props.child) {
    fields = [
      'Course',
      'Circumstances',
      'Vegetative',
      'ASD',
      'ADHD',
      'Speech',
      'Intellectual Disability',
      'Language',
      'Fluency',
      'Communication',
      'Learning',
      'Movement',
      'Coordination',
      'Associated',
      'Functioning',
      'Relationships',
      'Treatments',
      'Substances',
      'Risk',
      'Notes',
    ]
  } else {
    fields = [
      'Course',
      'Circumstances',
      'Vegetative',
      'Associated',
      'Functioning',
      'Relationships',
      'Treatments',
      'Substances',
      'Risk',
      'Notes',
    ]
  }

  interface Model {
    [key: string | number]: string
  }

  const model = defineModel<Model>()

  const toggleSuggestion = (field: string, suggestion: string) => {
    if (!model) return
    if (!model.value) return
    if (model.value?.[field] === undefined || model.value[field] === '') {
      model.value[field] = suggestion
    } else {
      const suggestionsArray = model.value[field].split(', ').filter((s) => s)
      const index = suggestionsArray.indexOf(suggestion)
      if (index === -1) {
        suggestionsArray.push(suggestion)
      } else {
        suggestionsArray.splice(index, 1)
      }
      model.value[field] = suggestionsArray.join(', ')
    }
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="6">
        <h6 class="text-h6 font-weight-medium">{{ t('Present Illness') }}</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow v-for="field in fields" :key="field">
      <VCol cols="6" md="6" v-if="model">
        <AppTextarea
          v-model="model[field]"
          :label="t(field.charAt(0).toUpperCase() + field.slice(1))"
          auto-grow
          rows="2"
        />
      </VCol>
      <VCol>
        <div class="my-5" v-if="model">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in suggestions[field]"
            :key="suggestion"
            size="x-small"
            @click="toggleSuggestion(field, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
