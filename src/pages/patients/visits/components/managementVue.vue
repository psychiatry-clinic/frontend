<script setup lang="ts">
  interface Management {
    Name?: string
    Form?: string
    Dose?: string
    Use?: string
  }

  const { t } = useI18n()

  interface Model {
    managements?: Management[]
  }

  const model = defineModel<Model>()

  const managements = ref<Management[]>(model.value?.managements || [])

  function addManagement() {
    if (!managements.value) return
    const lastManagement = managements.value[managements.value.length - 1]
    if (
      !lastManagement ||
      Object.values(lastManagement).some((val) => val === '')
    )
      return
    managements.value.push({ Name: '', Form: '', Dose: '', Use: '' })
  }

  function enableSecondField(index: number) {
    const currentManagement = managements.value?.[index]
    return !!currentManagement?.Name
  }

  function saveNameUppercase(index: number) {
    if (!managements.value || !managements.value[index]) return
    managements.value[index].Name = managements.value[index].Name?.toUpperCase()
  }

  // const toggleSuggestion = (field: string, suggestion: string) => {
  //   if (!model) return
  //   if (!model.value) return
  //   if (model.value?.[field] === undefined || model.value[field] === '') {
  //     model.value[field] = suggestion
  //   } else {
  //     const suggestionsArray = model.value[field].split(', ').filter((s) => s)
  //     const index = suggestionsArray.indexOf(suggestion)
  //     if (index === -1) {
  //       suggestionsArray.push(suggestion)
  //     } else {
  //       suggestionsArray.splice(index, 1)
  //     }
  //     model.value[field] = suggestionsArray.join(', ')
  //   }
  // }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">{{ t('Management') }}</h6>
      </VCol>
    </VRow>

    <!-- Iterate over managements -->
    <template v-for="(management, index) in managements" :key="index">
      <VRow>
        <!-- Name field -->
        <VCol cols="3">
          <AppTextField
            :placeholder="management.Name ? '' : t('Type Name')"
            v-model="management.Name"
            @input="saveNameUppercase(index)"
          />
        </VCol>
        <!-- Form field -->
        <VCol cols="3">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="management.Form ? '' : t('Type Form')"
            v-model="management.Form"
          />
        </VCol>
        <!-- Dose field -->
        <VCol cols="3">
          <AppTextField
            v-if="management.Form && enableSecondField(index)"
            :placeholder="management.Dose ? '' : t('Type Dose')"
            v-model="management.Dose"
          />
        </VCol>
        <!-- Use field -->
        <VCol cols="3">
          <AppTextField
            v-if="management.Dose && enableSecondField(index)"
            :placeholder="management.Use ? '' : t('Type Use')"
            v-model="management.Use"
          />
        </VCol>
      </VRow>
    </template>

    <!-- Add new management button -->
    <VRow>
      <VCol cols="12">
        <VBtn variant="outlined" @click.prevent="addManagement">
          <VIcon icon="tabler-plus" end class="flip-in-rtl me-2" />
          <span> {{ t('Add') }} </span>
        </VBtn>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
