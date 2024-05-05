<script setup lang="ts">
import { defineModel, ref, onBeforeUnmount } from "vue";

interface Investigation {
  name: string;
  result?: string; // Include result property
}

interface Model {
  investigations: Investigation[];
}

const model = defineModel<Model>();

if (model.value) {
  model.value.investigations[0] = { name: "", result: "" };
}

const investigations = ref(model.value?.investigations);

let removeTimer: NodeJS.Timeout | null = null;

// Attach event listener when component is mounted
document.addEventListener(
  "blur",
  () => {
    if (removeTimer) clearTimeout(removeTimer);
    removeTimer = setTimeout(removeEmptyNames, 1000);
  },
  true
);

// Clean up event listener when component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener("blur", removeEmptyNames, true);
  if (removeTimer) clearTimeout(removeTimer);
});

function addInvestigation() {
  if (!model.value) {
    return;
  }
  if (
    (model.value && // Add null check
      model.value.investigations[model.value.investigations.length - 1].name ===
        "") ||
    model.value.investigations[model.value.investigations.length - 1].result ===
      ""
  ) {
    return;
  }
  const newInvestigation: Investigation = { name: "", result: "" };
  model.value.investigations.push(newInvestigation);
}

function enableSecondField(index: number) {
  const currentInvestigation = model.value?.investigations[index]; // Add null check
  return !!currentInvestigation?.name; // Add null check
}

function saveNameUppercase(index: number) {
  if (model.value) {
    // Add null check
    model.value.investigations[index].name =
      model.value.investigations[index].name.toUpperCase();
  }
}

function removeEmptyNames() {
  if (model.value) {
    // Add null check
    // Keep the first investigation unchanged
    const firstInvestigation = model.value.investigations[0];

    // Filter out empty investigations except for the first one and newly added ones
    model.value.investigations = [
      firstInvestigation,
      ...model.value.investigations.slice(1).filter((investigation, index) => {
        // Check if it's a newly added investigation (no result property)
        const isNewInvestigation = !("result" in investigation);
        // Remove empty investigations that are not newly added
        return isNewInvestigation || investigation.name.trim() !== "";
      }),
    ];
  }
}
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Investigation</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <template
      v-for="(investigation, index) in model?.investigations"
      :key="index"
    >
      <VRow>
        <VCol cols="6">
          <AppTextField
            :placeholder="
              investigation.name ? '' : 'Type Name of Investigation'
            "
            v-model="investigation.name"
            @input="saveNameUppercase(index)"
          />
        </VCol>
        <VCol cols="6">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="
              investigation.result ? '' : 'Type Result of Investigation'
            "
            v-model="investigation.result"
            @input="enableSecondField(index)"
          />
        </VCol>
      </VRow>
    </template>

    <VRow>
      <VCol cols="12">
        <VBtn variant="outlined" @click.prevent="addInvestigation">
          <VIcon icon="tabler-plus" end class="flip-in-rtl me-2" />
          <span> Add New Investigation </span>
        </VBtn>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
