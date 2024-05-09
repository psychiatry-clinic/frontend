<script setup lang="ts">
  import {
    courseSuggestions,
    circumstancesSuggestions,
    vegetativeSymptomsSuggestions,
    associatedSymptomsSuggestions,
  } from '@/utils/suggestions'

  const suggestions: { [key: string]: string[] } = {
    course: courseSuggestions,
    circumstances: circumstancesSuggestions,
    vegetative: vegetativeSymptomsSuggestions,
    associated: associatedSymptomsSuggestions,
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
  }

  const props = defineProps<Props>()

  interface Props {
    child: boolean
  }

  let fields: string[] = []

  if (props.child) {
    fields = [
      'course',
      'circumstances',
      'vegetative',
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
      'associated',
      'functioning',
      'relationships',
      'treatments',
      'substances',
      'risk',
      'notes',
    ]
  } else {
    fields = [
      'course',
      'circumstances',
      'vegetative',
      'associated',
      'functioning',
      'relationships',
      'treatments',
      'substances',
      'risk',
      'notes',
    ]
  }

  interface Model {
    [key: string | number]: string
  }

  const model = defineModel<Model>()

  const appendTo = (target: string | undefined, text: string) => {
    return target ? target + ', ' + text : text
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="6">
        <h6 class="text-h6 font-weight-medium">Present Illness</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow v-for="field in fields" :key="field">
      <VCol cols="6" md="6" v-if="model">
        <AppTextarea
          v-model="model[field]"
          :label="field.charAt(0).toUpperCase() + field.slice(1)"
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
            @click="model[field] = appendTo(model[field], suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
