<script setup lang="ts">
  import {
    accommodationSuggestions,
    financeSuggestions,
  } from '@/utils/suggestions'

  interface Model {
    familyBackground?: string
    familyAtmosphere?: string
    childhood?: string
    school?: string
    adolescence?: string
  }

  const model = defineModel<Model>()

  const familyBackground = ref(model.value?.familyBackground)
  const familyAtmosphere = ref(model.value?.familyAtmosphere)
  const childhood = ref(model.value?.childhood)
  const school = ref(model.value?.school)
  const adolescence = ref(model.value?.adolescence)

  function update() {
    model.value = {
      familyBackground: familyBackground.value as string,
      familyAtmosphere: familyAtmosphere.value as string,
      childhood: childhood.value as string,
      school: school.value as string,
      adolescence: adolescence.value as string,
    }
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
        <h6 class="text-h6 font-weight-medium">Personal History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- Family Background -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="familyBackground"
          label="Family Background"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[requiredValidator]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="familyBackground = appendTo(familyBackground, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Family Atmosphere -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="familyAtmosphere"
          label="Family Atmosphere"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click="familyAtmosphere = appendTo(familyAtmosphere, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- childhood -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="childhood"
          label="Childhood"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- School -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="school"
          label="School"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- adolescence -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="adolescence"
          label="Adolescence"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol cols="6" md="6">
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in []"
            size="x-small"
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
