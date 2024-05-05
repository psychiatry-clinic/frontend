<script setup lang="ts">
interface Management {
  name: string;
  form?: string;
  dose?: string;
}

interface Model {
  managements: Management[];
}

const model = defineModel<Model>();

if (model.value) {
  model.value.managements[0] = { name: "", form: "", dose: "" };
}

const managements = ref(model.value?.managements);

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

function addManagement() {
  if (!model.value) {
    return;
  }
  if (
    model.value.managements[model.value.managements.length - 1].name === "" ||
    model.value.managements[model.value.managements.length - 1].form === "" ||
    model.value.managements[model.value.managements.length - 1].dose === ""
  ) {
    return;
  }
  const newManagement: Management = { name: "", form: "", dose: "" };
  model.value.managements.push(newManagement);
}

function enableSecondField(index: number) {
  const currentManagement = model.value?.managements[index];
  return currentManagement?.name !== "";
}

function saveNameUppercase(index: number) {
  if (!model.value) return;
  model.value.managements[index].name =
    model.value.managements[index].name.toUpperCase();
}

function removeEmptyNames() {
  if (!model.value) return;
  // Keep the first management unchanged
  const firstManagement = model.value.managements[0];
  if (!model.value) return;
  // Filter out empty managements except for the first one and newly added ones
  model.value.managements = [
    firstManagement,
    ...model.value.managements.slice(1).filter((management, index) => {
      // Check if it's a newly added management (no result property)
      const isNewManagement = !("dose" in management);
      // Remove empty managements that are not newly added
      return isNewManagement || management.name.trim() !== "";
    }),
  ];
}
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Management</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <template v-for="(management, index) in model?.managements" :key="index">
      <VRow>
        <VCol cols="4">
          <AppTextField
            :placeholder="management.name ? '' : 'Type Name'"
            v-model="management.name"
            @input="saveNameUppercase(index)"
          />
        </VCol>
        <VCol cols="4">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="management.form ? '' : 'Type Form'"
            v-model="management.form"
          />
        </VCol>
        <VCol cols="4">
          <AppTextField
            v-if="management.form && enableSecondField(index)"
            :placeholder="management.dose ? '' : 'Type Dose'"
            v-model="management.dose"
          />
        </VCol>
      </VRow>
    </template>

    <VRow>
      <VCol cols="12">
        <VBtn variant="outlined" @click.prevent="addManagement">
          <VIcon icon="tabler-plus" end class="flip-in-rtl me-2" />
          <span> Add </span>
        </VBtn>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
