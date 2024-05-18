<script setup lang="ts">
  import {} from '@/utils/suggestions'
  const { t } = useI18n()

  const suggestions: { [key: string]: string[] } = {
    Physical: [],
    Appearance: [],
    Behavior: [],
    Speech: [],
    Mood: [],
    Affect: [],
    Form: [],
    Content: [],
    Perception: [],
    Cognition: [],
    Insight: [],
  }

  const fields1 = ['Physical']

  const fields2 = [
    'Appearance',
    'Behavior',
    'Speech',
    'Mood',
    'Affect',
    'Form',
    'Content',
    'Perception',
    'Cognition',
    'Insight',
  ]

  interface Model {
    [key: string | number]: string
  }

  const model = defineModel<Model>()

  const toggleSuggestion = (field: string, suggestion: string) => {
    if (!model) return
    if (!model.value) return
    if (model.value?.[field] === undefined || model.value[field] === '') {
      model.value[field] = suggestion
    } else {
      const suggestionsArray = model.value[field].split(', ').filter((s) => s)
      const index = suggestionsArray.indexOf(suggestion)
      if (index === -1) {
        suggestionsArray.push(suggestion)
      } else {
        suggestionsArray.splice(index, 1)
      }
      model.value[field] = suggestionsArray.join(', ')
    }
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">
          {{ t('Physical Examination') }}
        </h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow v-for="field in fields1" :key="field">
      <VCol cols="6" md="6" v-if="model">
        <AppTextarea
          v-model="model[field]"
          :label="t(field.charAt(0).toUpperCase() + field.slice(1))"
          auto-grow
          rows="2"
        />
      </VCol>
      <VCol>
        <div class="my-5" v-if="model">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in suggestions[field]"
            :key="suggestion"
            size="x-small"
            @click="toggleSuggestion(field, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Mental State Examination</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow v-for="field in fields2" :key="field">
      <VCol cols="6" md="6" v-if="model">
        <AppTextarea
          v-model="model[field]"
          :label="t(field.charAt(0).toUpperCase() + field.slice(1))"
          auto-grow
          rows="2"
        />
      </VCol>
      <VCol>
        <div class="my-5" v-if="model">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in suggestions[field]"
            :key="suggestion"
            size="x-small"
            @click="toggleSuggestion(field, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
