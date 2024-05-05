<script setup lang="ts">
interface Investigation {
  name: string;
  result?: string; // Include result property
}

interface Model {
  investigations: Investigation[];
}

const model = ref<Model>({ investigations: [] });

const investigations = ref(model.value?.investigations);

// Attach event listener when component is mounted
document.addEventListener("blur", removeEmptyNames, true);

// Clean up event listener when component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener("blur", removeEmptyNames, true);
});

addInvestigation();

function addInvestigation() {
  const newInvestigation: Investigation = { name: "", result: "" };
  model.value.investigations.push(newInvestigation);
}

function enableSecondField(index: number) {
  const currentInvestigation = model.value.investigations[index];
  return !!currentInvestigation.name;
}

function saveNameUppercase(index: number) {
  model.value.investigations[index].name =
    model.value.investigations[index].name.toUpperCase();
}

function removeEmptyNames() {
  model.value.investigations = model.value.investigations.filter(
    (investigation) => investigation.name.trim() !== ""
  );
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
      v-for="(investigation, index) in model.investigations"
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
