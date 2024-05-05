<script setup lang="ts">
interface test {
  name: string;
  result?: string; // Include result property
}

interface Model {
  tests: test[];
}

const model = ref<Model>({ tests: [] });

model.value.tests[0] = { name: "", result: "" };

const tests = ref(model.value?.tests);

let removeTimer: NodeJS.Timeout | null = null;

// Attach event listener when component is mounted
document.addEventListener(
  "blur",
  () => {
    if (removeTimer) clearTimeout(removeTimer);
    removeTimer = setTimeout(removeEmptyNames, 1000);
  },
  true
);

// Clean up event listener when component is unmounted
onBeforeUnmount(() => {
  document.removeEventListener("blur", removeEmptyNames, true);
  if (removeTimer) clearTimeout(removeTimer);
});

function addTest() {
  if (
    model.value.tests[model.value.tests.length - 1].name === "" ||
    model.value.tests[model.value.tests.length - 1].result === ""
  ) {
    return;
  }
  const newTest: test = { name: "", result: "" };
  model.value.tests.push(newTest);
}

function enableSecondField(index: number) {
  const currentTest = model.value.tests[index];
  return !!currentTest.name;
}

function saveNameUppercase(index: number) {
  model.value.tests[index].name = model.value.tests[index].name.toUpperCase();
}

function removeEmptyNames() {
  // Keep the first test unchanged
  const firstTest = model.value.tests[0];

  // Filter out empty tests except for the first one and newly added ones
  model.value.tests = [
    firstTest,
    ...model.value.tests.slice(1).filter((test, index) => {
      // Check if it's a newly added test (no result property)
      const isNewTest = !("result" in test);
      // Remove empty tests that are not newly added
      return isNewTest || test.name.trim() !== "";
    }),
  ];
}
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Psychometric Tests</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <template v-for="(test, index) in model.tests" :key="index">
      <VRow>
        <VCol cols="6">
          <AppTextField
            :placeholder="test.name ? '' : 'Type Name of test'"
            v-model="test.name"
            @input="saveNameUppercase(index)"
          />
        </VCol>
        <VCol cols="6">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="test.result ? '' : 'Type Result of test'"
            v-model="test.result"
            @input="enableSecondField(index)"
          />
        </VCol>
      </VRow>
    </template>

    <VRow>
      <VCol cols="12">
        <VBtn variant="outlined" @click.prevent="addTest">
          <VIcon icon="tabler-plus" end class="flip-in-rtl me-2" />
          <span> Add New test </span>
        </VBtn>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
