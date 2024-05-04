<script setup lang="ts">
import {} from "@/utils/suggestions";

interface Model {
  physical: string | undefined;
  appearance: string | undefined;
  behavior: string | undefined;
  speech: string | undefined;
  mood: string | undefined;
  affect: string | undefined;
  form: string | undefined;
  content: string | undefined;
  perception: string | undefined;
  cognition: string | undefined;
  insight: string | undefined;
}

const model = defineModel<Model>();

const physical = ref(model.value?.physical);
const appearance = ref(model.value?.appearance);
const behavior = ref(model.value?.behavior);
const speech = ref();
const mood = ref();
const affect = ref();
const form = ref();
const content = ref();
const perception = ref();
const cognition = ref();
const insight = ref();

function update() {
  model.value = {
    physical: physical.value,
    appearance: appearance.value,
    behavior: behavior.value,
    speech: speech.value,
    mood: mood.value,
    affect: affect.value,
    form: form.value,
    content: content.value,
    perception: perception.value,
    cognition: cognition.value,
    insight: insight.value,
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
        <h6 class="text-h6 font-weight-medium">Physical Examination</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <!-- physical -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="physical"
          label="Physical Examination"
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
            @click="physical = appendTo(physical, suggestion)"
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

    <!-- appearance -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="appearance"
          label="Appearance"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- behavior -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="behavior"
          label="Behavior"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- speech -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="speech"
          label="Speech"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- mood -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="mood"
          label="Mood"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- affect -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="affect"
          label="Affect"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- form -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="form"
          label="Thought Form"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- content -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="content"
          label="Thought Content"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- perception -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="perception"
          label="Perceptual Abnormalities"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- cognition -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="cognition"
          label="Cognitive State"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>

    <!-- insight -->
    <VRow>
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="insight"
          label="Insight"
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
            @click=""
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
