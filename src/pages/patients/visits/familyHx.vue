<script setup lang="ts">
import { familyHistorySuggestions } from "@/utils/suggestions";

interface Model {
  similar: string | undefined;
  different: string | undefined;
  medical: string | undefined;
}

const model = defineModel<Model>();

const similar = ref(model.value?.similar);
const different = ref(model.value?.different);
const medical = ref(model.value?.medical);
const other = ref();

function update() {
  model.value = {
    similar: similar.value,
    different: different.value,
    medical: medical.value,
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
    <!-- similar -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="similar"
          label="Similar Illness"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in familyHistorySuggestions"
            size="x-small"
            @click="similar = appendTo(similar, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- different -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="different"
          label="Different Illness"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in familyHistorySuggestions"
            size="x-small"
            @click="different = appendTo(different, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- medical -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="medical"
          label="Medical Illness"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in familyHistorySuggestions"
            size="x-small"
            @click="medical = appendTo(medical, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- other -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="other"
          label="Other Illness"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in familyHistorySuggestions"
            size="x-small"
            @click="other = appendTo(other, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
