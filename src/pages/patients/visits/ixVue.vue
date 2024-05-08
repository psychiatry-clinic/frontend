<script setup lang="ts">
  import { defineModel, ref, onBeforeUnmount } from 'vue'

  interface Investigation {
    name: string
    result?: string
  }

  interface Model {
    investigations: Investigation[]
  }

  const model = defineModel<Model>()
  const investigations = ref<Investigation[]>(model.value?.investigations || [])

  // Function to add a new investigation
  function addInvestigation() {
    if (!investigations.value) return
    const lastInvestigation =
      investigations.value[investigations.value.length - 1]
    if (
      !lastInvestigation ||
      (lastInvestigation.name === '' && lastInvestigation.result === '')
    )
      return
    investigations.value.push({ name: '', result: '' })
  }

  // Function to enable the second field based on the name value
  function enableSecondField(index: number) {
    const currentInvestigation = investigations.value[index]
    return !!currentInvestigation?.name
  }

  // Function to save name as uppercase
  function saveNameUppercase(index: number) {
    if (!investigations.value || !investigations.value[index]) return
    investigations.value[index].name =
      investigations.value[index].name.toUpperCase()
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Investigation</h6>
      </VCol>
    </VRow>

    <!-- Iterate over investigations -->
    <template v-for="(investigation, index) in investigations" :key="index">
      <VRow>
        <!-- Name field -->
        <VCol cols="6">
          <AppTextField
            :placeholder="
              investigation.name ? '' : 'Type Name of Investigation'
            "
            v-model="investigation.name"
            @input="saveNameUppercase(index)"
          />
        </VCol>
        <!-- Result field -->
        <VCol cols="6">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="
              investigation.result ? '' : 'Type Result of Investigation'
            "
            v-model="investigation.result"
          />
        </VCol>
      </VRow>
    </template>

    <!-- Add new investigation button -->
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
