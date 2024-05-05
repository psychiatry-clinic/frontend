<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";

interface Management {
  name: string;
  form?: string;
  dose?: string;
}

interface Model {
  managements: Management[];
}

const model = ref<Model>({ managements: [] });

const managements = ref(model.value?.managements);

// Attach event listener when component is mounted
document.addEventListener("blur", removeEmptyNames, true);

// Clean up event listener when component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener("blur", removeEmptyNames, true);
});

addManagement();

function addManagement() {
  const newManagement: Management = { name: "", form: "", dose: "" };
  model.value.managements.push(newManagement);
}

function enableSecondField(index: number) {
  const currentManagement = model.value.managements[index];
  return !!currentManagement.name;
}

function saveNameUppercase(index: number) {
  model.value.managements[index].name =
    model.value.managements[index].name.toUpperCase();
}

function removeEmptyNames() {
  model.value.managements = model.value.managements.filter(
    (management) => management.name.trim() !== ""
  );
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

    <template v-for="(management, index) in model.managements" :key="index">
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
            :placeholder="management.form ? '' : 'Type Form'"
            v-model="management.form"
          />
        </VCol>
        <VCol cols="4">
          <AppTextField
            v-if="enableSecondField(index)"
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
