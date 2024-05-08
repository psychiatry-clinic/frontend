<script setup lang="ts">
  import {
    courseSuggestions,
    circumstancesSuggestions,
    vegetativeSymptomsSuggestions,
    associatedSymptomsSuggestions,
    functioningSuggestions,
    relationshipsSuggestions,
    treatmentsSuggestions,
    substancesSuggestions,
    riskAssessmentSuggestions,
  } from '@/utils/suggestions'

  const fields = [
    'course',
    'circumstances',
    'vegetative',
    'associated',
    'functioning',
    'relationships',
    'treatments',
    'substances',
    'risk',
  ]

  interface Model {
    course: string | undefined
    circumstances: string | undefined
    vegetative: string | undefined
    associated: string | undefined
    functioning: string | undefined
    relationships: string | undefined
    treatments: string | undefined
    substances: string | undefined
    risk: string | undefined
    ASD: string | undefined
    ADHD: string | undefined
    Speech: string | undefined
    ID: string | undefined
    Language: string | undefined
    Fluency: string | undefined
    Communication: string | undefined
    Learning: string | undefined
    Movement: string | undefined
    Coordination: string | undefined
    notes: string | undefined
  }

  const model = defineModel<Model>()

  // const complaint = ref(model.value?.complaint);
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

  function update() {
    model.value = {
      course: course.value as string,
      circumstances: circumstances.value as string,
      vegetative: vegetative.value as string,
      associated: associated.value as string,
      functioning: functioning.value as string,
      relationships: relationships.value as string,
      treatments: treatments.value as string,
      substances: substances.value as string,
      risk: risk.value as string,
      ASD: ASD.value as string,
      ADHD: ADHD.value as string,
      Speech: Speech.value as string,
      ID: ID.value as string,
      Language: Language.value as string,
      Fluency: Fluency.value as string,
      Communication: Communication.value as string,
      Learning: Learning.value as string,
      Movement: Movement.value as string,
      Coordination: Coordination.value as string,
      notes: notes.value as string,
    }
  }

  const appendTo = (target: string | undefined, text: string) => {
    // Append the text and return the new string
    return target === '' || target === undefined ? text : `${target}, ${text}`
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
    <!-- course -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="course"
          label="Course"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in courseSuggestions"
            size="x-small"
            @click="course = appendTo(course, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- circumstances -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="circumstances"
          label="Circumstances"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in circumstancesSuggestions"
            size="x-small"
            @click="circumstances = appendTo(circumstances, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- vegetative -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="vegetative"
          label="Vegetative Symptoms"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in vegetativeSymptomsSuggestions"
            size="x-small"
            @click="vegetative = appendTo(vegetative, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- ASD -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="ASD"
          label="ASD"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="ASD = appendTo(ASD, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- ADHD -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="ADHD"
          label="ADHD"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="ADHD = appendTo(ADHD, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Speech -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="Speech"
          label="Speech"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="Speech = appendTo(Speech, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Intellectual Disability -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="ID"
          label="Intellectual Disability"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="ID = appendTo(ID, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Language -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="Language"
          label="Language"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="Language = appendTo(Language, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Fluency -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="Fluency"
          label="Fluency"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="Fluency = appendTo(Fluency, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Communication -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="Communication"
          label="Communication"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="Communication = appendTo(Communication, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Learning -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="Learning"
          label="Learning"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="Learning = appendTo(Learning, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Movement -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="Movement"
          label="Movement"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="Movement = appendTo(Movement, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Coordination -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="Coordination"
          label="Coordination"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="Coordination = appendTo(Coordination, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Associated -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="associated"
          label="Associated"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in associatedSymptomsSuggestions"
            size="x-small"
            @click="associated = appendTo(associated, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- functioning -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="functioning"
          label="Functioning"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in functioningSuggestions"
            size="x-small"
            @click="functioning = appendTo(functioning, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- relationships -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="relationships"
          label="Relationships"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in relationshipsSuggestions"
            size="x-small"
            @click="relationships = appendTo(relationships, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- treatments -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="treatments"
          label="Previous Treatments"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in treatmentsSuggestions"
            size="x-small"
            @click="treatments = appendTo(treatments, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- substances -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="substances"
          label="Substances"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in substancesSuggestions"
            size="x-small"
            @click="substances = appendTo(substances, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- risk -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="risk"
          label="Risk Assessment"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in riskAssessmentSuggestions"
            size="x-small"
            @click="risk = appendTo(risk, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- notes -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="notes"
          label="notes"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
    </VRow>
  </VWindowItem>
</template>
