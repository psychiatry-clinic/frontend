<script setup lang="ts">
  import {
    accommodationSuggestions,
    financeSuggestions,
  } from '@/utils/suggestions'

  interface Model {
    offense_type?: string
    offense_date?: string
    attitude_to_offense?: string
    attitude_to_punishment?: string
    prison?: string
  }

  const model = defineModel<Model>()

  const offense_type = ref(model.value?.offense_type)
  const offense_date = ref(model.value?.offense_date)
  const attitude_to_offense = ref(model.value?.attitude_to_offense)
  const attitude_to_punishment = ref(model.value?.attitude_to_punishment)
  const prison = ref(model.value?.prison)

  function update() {
    model.value = {
      offense_type: offense_type.value as string,
      offense_date: offense_date.value as string,
      attitude_to_offense: attitude_to_offense.value as string,
      attitude_to_punishment: attitude_to_punishment.value as string,
      prison: prison.value as string,
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
        <h6 class="text-h6 font-weight-medium">Forensic History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- offense_type -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="offense_type"
          label="Offense Type"
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
            @click="offense_type = appendTo(offense_type, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- offense_date -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="offense_date"
          label="Offense Date"
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
            @click="offense_date = appendTo(offense_date, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Attitude Offense -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="attitude_to_offense"
          label="Attitude To Offense"
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
            @click="
              attitude_to_offense = appendTo(attitude_to_offense, suggestion)
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- attitude_to_punishment -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="attitude_to_punishment"
          label="Attitude To Punishment"
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
            @click="
              attitude_to_punishment = appendTo(
                attitude_to_punishment,
                suggestion
              )
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- prison -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="prison"
          label="Prison Experience"
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
            @click="prison = appendTo(prison, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
