<script setup lang="ts">
import {
  accommodationSuggestions,
  financeSuggestions,
} from "@/utils/suggestions";

interface Model {
  jobs: string | undefined;
  unemployment: string | undefined;
}

const model = defineModel<Model>();

const jobs = ref(model.value?.jobs);
const unemployment = ref(model.value?.unemployment);

function update() {
  model.value = {
    jobs: jobs.value as string,
    unemployment: unemployment.value as string,
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
        <h6 class="text-h6 font-weight-medium">Occupational History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- jobs -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="jobs"
          label="Jobs"
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
            v-for="suggestion in []"
            size="x-small"
            @click="jobs = appendTo(jobs, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- unemployment -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="unemployment"
          label="Unemployment"
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
            @click="unemployment = appendTo(unemployment, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
