<script setup lang="ts">
import {
  accommodationSuggestions,
  financeSuggestions,
} from "@/utils/suggestions";

interface Model {
  offenseType: string | undefined;
  offenseDate: string | undefined;
  attitudeOffense: string | undefined;
  attitudePunishment: string | undefined;
  prison: string | undefined;
}

const model = defineModel<Model>();

const offenseType = ref(model.value?.offenseType);
const offenseDate = ref(model.value?.offenseDate);
const attitudeOffense = ref(model.value?.attitudeOffense);
const attitudePunishment = ref(model.value?.attitudePunishment);
const prison = ref(model.value?.prison);

function update() {
  model.value = {
    offenseType: offenseType.value as string,
    offenseDate: offenseDate.value as string,
    attitudeOffense: attitudeOffense.value as string,
    attitudePunishment: attitudePunishment.value as string,
    prison: prison.value as string,
  };
}

const appendTo = (target: string | undefined, text: string) => {
  // Append the text and return the new string
  return target === "" || target === undefined ? text : `${target}, ${text}`;
};
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Forensic History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- offenseType -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="offenseType"
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
            @click="offenseType = appendTo(offenseType, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- offenseDate -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="offenseDate"
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
            @click="offenseDate = appendTo(offenseDate, suggestion)"
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
          v-model="attitudeOffense"
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
            @click="attitudeOffense = appendTo(attitudeOffense, suggestion)"
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- attitudePunishment -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="attitudePunishment"
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
              attitudePunishment = appendTo(attitudePunishment, suggestion)
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
