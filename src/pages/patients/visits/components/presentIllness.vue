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
} from "@/utils/suggestions";

const fields = [
  "course",
  "circumstances",
  "vegetative",
  "associated",
  "functioning",
  "relationships",
  "treatments",
  "substances",
  "risk",
];

interface Model {
  course: string | undefined;
  circumstances: string | undefined;
  vegetative: string | undefined;
  associated: string | undefined;
  functioning: string | undefined;
  relationships: string | undefined;
  treatments: string | undefined;
  substances: string | undefined;
  risk: string | undefined;
}

const model = defineModel<Model>();

// const complaint = ref(model.value?.complaint);
const course = ref(model.value?.course);
const circumstances = ref(model.value?.circumstances);
const vegetative = ref(model.value?.vegetative);
const associated = ref(model.value?.associated);
const functioning = ref(model.value?.functioning);
const relationships = ref(model.value?.relationships);
const treatments = ref(model.value?.treatments);
const substances = ref(model.value?.substances);
const risk = ref(model.value?.risk);

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
  };
}

const appendTo = (target: string | undefined, text: string) => {
  // Append the text and return the new string
  return target === "" || target === undefined ? text : `${target}, ${text}`;
};
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
    <!-- associated -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="associated"
          label="Associated Symptoms"
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
  </VWindowItem>
</template>
