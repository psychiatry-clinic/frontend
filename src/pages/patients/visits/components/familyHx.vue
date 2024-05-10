<script setup lang="ts">
  import { familyHistorySuggestions } from '@/utils/suggestions'

  const suggestions: { [key: string]: string[] } = {
    similar: familyHistorySuggestions,
    different: familyHistorySuggestions,
    medical: familyHistorySuggestions,
  }

  interface Model {
    [key: string | number]: string
  }

  const fields = ['similar', 'different', 'medical', 'other']

  const model = defineModel<Model>()

  const appendTo = (target: string | undefined, text: string) => {
    // Append the text and return the new string
    return target === '' || target === undefined ? text : `${target}, ${text}`
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Family History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow v-for="field in fields" :key="field">
      <VCol cols="6" md="6" v-if="model">
        <AppTextarea
          v-model="model[field]"
          :label="field.charAt(0).toUpperCase() + field.slice(1)"
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
            @click="model[field] = appendTo(model[field], suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
    <!-- similar -->
    <!-- <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="similar"
          label="Similar Illness"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in childFamilyHx"
            size="x-small"
            @click="similar = appendTo(similar, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow> -->
    <!-- different -->
    <!-- <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="different"
          label="Different Illness"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in childFamilyHx"
            size="x-small"
            @click="
              () => {
                different = appendTo(different, suggestion)
                update()
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow> -->
    <!-- medical -->
    <!-- <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="medical"
          label="Medical Illness"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in familyHistorySuggestions"
            size="x-small"
            @click="
              () => {
                medical = appendTo(medical, suggestion)
                update()
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow> -->
    <!-- other -->
    <!-- <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="other"
          label="Other Illness"
          auto-grow
          rows="2"
          @keyup="update"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="
              () => {
                other = appendTo(other, suggestion)
                update()
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow> -->
  </VWindowItem>
</template>
