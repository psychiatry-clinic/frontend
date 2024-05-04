<script setup lang="ts">
import { differentialDiagnosis } from "@/utils/suggestions";

interface Model {
  differential: string | undefined;
}

const model = defineModel<Model>();

const differential = ref(model.value?.differential);

function update() {
  model.value = {
    differential: differential.value,
  };
  console.log(model.value);
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
        <h6 class="text-h6 font-weight-medium">Family History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- differential -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="differential"
          label="Differential Diagnosis"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in differentialDiagnosis"
            size="x-small"
            @click="differential = appendTo(differential, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
