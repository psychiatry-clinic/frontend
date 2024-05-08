<script setup lang="ts">
  interface Model {
    notes?: string
  }

  const model = defineModel<Model>()

  const notes = ref(model.value?.notes)
  console.log(notes.value)
  console.log(model.value)

  function update() {
    model.value = {
      notes: notes.value,
    }
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Notes</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="12">
        <AppTextarea
          v-model="notes"
          label=""
          placeholder=""
          auto-grow
          @keyup="update"
        />
      </VCol>
    </VRow>
  </VWindowItem>
</template>
