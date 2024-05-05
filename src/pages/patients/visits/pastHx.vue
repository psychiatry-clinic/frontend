<script setup lang="ts">
import {
  pastPsychiatricHistorySuggestions,
  pastMedicalHistorySuggestions,
  pastSurgicalHistorySuggestions,
} from "@/utils/suggestions";

interface Model {
  past_psychiatric: string | undefined;
  past_medical: string | undefined;
  past_surgical: string | undefined;
  past_substance: string | undefined;
}

const model = defineModel<Model>();

const past_psychiatric = ref(model.value?.past_psychiatric);
const past_medical = ref(model.value?.past_medical);
const past_surgical = ref(model.value?.past_surgical);
const past_substance = ref(model.value?.past_surgical);

function update() {
  model.value = {
    past_psychiatric: past_psychiatric.value as string,
    past_medical: past_medical.value as string,
    past_surgical: past_surgical.value as string,
    past_substance: past_substance.value as string,
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
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Past History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- past psychiatric -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="past_psychiatric"
          label="Past Psychiatric"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[requiredValidator]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in pastPsychiatricHistorySuggestions"
            size="x-small"
            @click="past_psychiatric = appendTo(past_psychiatric, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- past medical -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="past_medical"
          label="Past Medical"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in pastMedicalHistorySuggestions"
            size="x-small"
            @click="past_medical = appendTo(past_medical, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- past surgical -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="past_surgical"
          label="Past Surgical"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in pastSurgicalHistorySuggestions"
            size="x-small"
            @click="past_surgical = appendTo(past_surgical, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- past substance -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="past_substance"
          label="Substance Use History"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="past_substance = appendTo(past_substance, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>

<style scoped>
VRow {
  margin-bottom: 100px;
}
</style>
