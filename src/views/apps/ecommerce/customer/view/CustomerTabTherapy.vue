<script setup lang="ts">
import { Patient } from "@/utils/types";

interface Props {
  patientData: Patient;
}

// interface Model {
//   therapyNotes: string | undefined;
// }

// const { patientData } = defineProps<Props>();

// const model = defineModel<Model>();

// const therapyNotes = ref(model.value?.therapyNotes);

// function update() {
//   model.value = {
//     therapyNotes: therapyNotes.value,
//   };
// }

const therapy = ref();

function update(e: any) {
  therapy.value = e.target.value;
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard class="mb-6" title="Therapy Notes">
        <VCardText>
          <AppTextarea
            v-model="therapy"
            label=""
            auto-grow
            rows="3"
            @keyup="update"
          />
        </VCardText>

        <VDivider />

        <VCardText class="d-flex gap-4">
          <VBtn>Save</VBtn>
          <VBtn color="secondary" variant="tonal"> Discard </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
