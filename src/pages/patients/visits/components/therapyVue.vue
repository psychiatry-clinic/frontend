<script setup lang="ts">
interface Model {
  therapyNotes: string | undefined;
}

const model = defineModel<Model>();

const therapyNotes = ref(model.value?.therapyNotes);

function update() {
  model.value = {
    therapyNotes: therapyNotes.value,
  };
}
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Therapy Notes</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="12">
        <AppTextarea
          v-model="therapyNotes"
          label=""
          placeholder=""
          auto-grow
          @focusout="update"
        />
      </VCol>
    </VRow>
  </VWindowItem>
</template>
