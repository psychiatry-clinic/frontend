<script setup lang="ts">
import { chief_complains, durations, sourceOfInfo } from "@/utils/suggestions";

interface Model {
  complaint: string | undefined;
  duration: string | undefined;
  source: string | undefined;
  referral: string | undefined;
}

const model = defineModel<Model>();

const complaint = ref(model.value?.complaint);
const duration = ref(model.value?.duration);
const source = ref(model.value?.source);
const referral = ref(model.value?.referral);

const update = () => {
  model.value = {
    complaint: complaint.value as string,
    duration: duration.value as string,
    source: source.value as string,
    referral: referral.value as string,
  };
};

const appendTo = (target: string | undefined, text: string) => {
  return target === "" || target === undefined ? text : `${target}, ${text}`;
};
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Chief Complaint</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="complaint"
          label="Complaint"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[requiredValidator]"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in chief_complains"
            size="x-small"
            @click="
              () => {
                complaint = appendTo(complaint, suggestion);
                update();
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="duration"
          label="Duration"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in durations"
            size="x-small"
            @click="
              () => {
                duration = appendTo(duration, suggestion);
                update();
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="source"
          label="Source of Information"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in sourceOfInfo"
            size="x-small"
            @click="
              () => {
                source = appendTo(source, suggestion);
                update();
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="referral"
          label="Referral Information"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[]"
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
                referral = appendTo(referral, suggestion);
                update();
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
