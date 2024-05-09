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

  // interface Model {
  //   course: string | undefined
  //   circumstances: string | undefined
  //   vegetative: string | undefined
  //   associated: string | undefined
  //   functioning: string | undefined
  //   relationships: string | undefined
  //   treatments: string | undefined
  //   substances: string | undefined
  //   risk: string | undefined
  //   ASD: string | undefined
  //   ADHD: string | undefined
  //   Speech: string | undefined
  //   ID: string | undefined
  //   Language: string | undefined
  //   Fluency: string | undefined
  //   Communication: string | undefined
  //   Learning: string | undefined
  //   Movement: string | undefined
  //   Coordination: string | undefined
  //   notes: string | undefined
  // }

  interface Model {
    [key: string]: string | undefined
  }

  const model = defineModel<Model>()

  const course = ref(model.value?.course)
  const circumstances = ref(model.value?.circumstances)
  const vegetative = ref(model.value?.vegetative)
  const associated = ref(model.value?.associated)
  const functioning = ref(model.value?.functioning)
  const relationships = ref(model.value?.relationships)
  const treatments = ref(model.value?.treatments)
  const substances = ref(model.value?.substances)
  const risk = ref(model.value?.risk)
  const ASD = ref(model.value?.ASD)
  const ADHD = ref(model.value?.ADHD)
  const Speech = ref(model.value?.Speech)
  const ID = ref(model.value?.ID)
  const Language = ref(model.value?.Language)
  const Fluency = ref(model.value?.Fluency)
  const Communication = ref(model.value?.Communication)
  const Learning = ref(model.value?.Learning)
  const Movement = ref(model.value?.Movement)
  const Coordination = ref(model.value?.Coordination)
  const notes = ref(model.value?.notes)

  // function update() {
  //   model.value = {
  //     course: course.value as string,
  //     circumstances: circumstances.value as string,
  //     vegetative: vegetative.value as string,
  //     associated: associated.value as string,
  //     functioning: functioning.value as string,
  //     relationships: relationships.value as string,
  //     treatments: treatments.value as string,
  //     substances: substances.value as string,
  //     risk: risk.value as string,
  //     ASD: ASD.value as string,
  //     ADHD: ADHD.value as string,
  //     Speech: Speech.value as string,
  //     ID: ID.value as string,
  //     Language: Language.value as string,
  //     Fluency: Fluency.value as string,
  //     Communication: Communication.value as string,
  //     Learning: Learning.value as string,
  //     Movement: Movement.value as string,
  //     Coordination: Coordination.value as string,
  //     notes: notes.value as string,
  //   }
  // }

  const update = () => {
    for (const field of fields) {
      model[field] = model[field]?.trim()
    }
    console.log(model.value)
  }

  // const appendTo = (target: string | undefined, text: string) => {
  //   // Append the text and return the new string
  //   return target === '' || target === undefined ? text : `${target}, ${text}`
  // }

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
          @keyup="update"
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
