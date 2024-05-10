<script setup lang="ts">
  interface Management {
    name?: string
    form?: string
    dose?: string
    use?: string
  }

  interface Model {
    managements?: Management[]
  }

  const model = defineModel<Model>()

  // if (model.value) {
  //   model.value.managements[0] = { name: '', form: '', dose: '', use: '' };
  // }

  const managements = ref<Management[]>(model.value?.managements || [])

  function addManagement() {
    if (!managements.value) return
    const lastManagement = managements.value[managements.value.length - 1]
    if (
      !lastManagement ||
      Object.values(lastManagement).some((val) => val === '')
    )
      return
    managements.value.push({ name: '', form: '', dose: '', use: '' })
  }

  function enableSecondField(index: number) {
    const currentManagement = managements.value?.[index]
    return !!currentManagement?.name
  }

  function saveNameUppercase(index: number) {
    if (!managements.value || !managements.value[index]) return
    managements.value[index].name = managements.value[index].name?.toUpperCase()
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Management</h6>
      </VCol>
    </VRow>

    <!-- Iterate over managements -->
    <template v-for="(management, index) in managements" :key="index">
      <VRow>
        <!-- Name field -->
        <VCol cols="3">
          <AppTextField
            :placeholder="management.name ? '' : 'Type Name'"
            v-model="management.name"
            @input="saveNameUppercase(index)"
          />
        </VCol>
        <!-- Form field -->
        <VCol cols="3">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="management.form ? '' : 'Type Form'"
            v-model="management.form"
          />
        </VCol>
        <!-- Dose field -->
        <VCol cols="3">
          <AppTextField
            v-if="management.form && enableSecondField(index)"
            :placeholder="management.dose ? '' : 'Type Dose'"
            v-model="management.dose"
          />
        </VCol>
        <!-- Use field -->
        <VCol cols="3">
          <AppTextField
            v-if="management.dose && enableSecondField(index)"
            :placeholder="management.use ? '' : 'Type Use'"
            v-model="management.use"
          />
        </VCol>
      </VRow>
    </template>

    <!-- Add new management button -->
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
