<script setup lang="ts">
import {
  accommodationSuggestions,
  financeSuggestions,
} from "@/utils/suggestions";

interface Model {
  accommodation: string | undefined;
  finances: string | undefined;
  indoor: string | undefined;
  outdoor: string | undefined;
  caregivers: string | undefined;
}

const model = defineModel<Model>();

const accommodation = ref(model.value?.accommodation);
const finances = ref(model.value?.finances);
const indoor = ref(model.value?.indoor);
const outdoor = ref(model.value?.outdoor);
const caregivers = ref(model.value?.caregivers);

function update() {
  model.value = {
    accommodation: accommodation.value as string,
    finances: finances.value as string,
    indoor: indoor.value as string,
    outdoor: outdoor.value as string,
    caregivers: caregivers.value as string,
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
        <h6 class="text-h6 font-weight-medium">Social History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- Accommodation -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="accommodation"
          label="Accommodation"
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
            v-for="suggestion in accommodationSuggestions"
            size="x-small"
            @click="
              () => {
                accommodation = appendTo(accommodation, suggestion);
                update();
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Finances -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="finances"
          label="Finances"
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
            v-for="suggestion in financeSuggestions"
            size="x-small"
            @click="
              () => {
                finances = appendTo(finances, suggestion);
                update();
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- Indoor Activity -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="indoor"
          label="Indoor Activity"
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

    <!-- Outdoor Activity -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="outdoor"
          label="Outdoor Activity"
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

    <!-- Caregivers -->
    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="caregivers"
          label="Caregivers"
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
