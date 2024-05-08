<script setup lang="ts">
  import { differentialDiagnosis, childDdx } from '@/utils/suggestions'

  interface Props {
    child: boolean
  }

  const props = defineProps<Props>()

  interface Model {
    differential: string | undefined
  }

  const model = defineModel<Model>()

  const differential = ref(model.value?.differential)

  function update() {
    model.value = {
      differential: differential.value,
    }
    console.log(differential)
    console.log(model.value)
  }

  const appendTo = (target: string | undefined, text: string) => {
    // Append the text and return the new string
    return target === '' || target === undefined ? text : `${target}, ${text}`
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Differential Diagnosis</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- differential -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="differential"
          label="Differential Diagnosis"
          auto-grow
          rows="2"
          @focusout="update"
        />
      </VCol>
      <VCol>
        <div class="my-5" v-if="props.child">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in childDdx"
            size="x-small"
            @click="
              () => {
                differential = appendTo(differential, suggestion)
                update()
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
        <div class="my-5" v-else>
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in differentialDiagnosis"
            size="x-small"
            @click="
              () => {
                differential = appendTo(differential, suggestion)
                update()
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
