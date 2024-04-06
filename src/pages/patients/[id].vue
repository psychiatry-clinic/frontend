<script setup lang="ts">
import { ref, onMounted } from 'vue';

const response = ref(null);

onMounted(async () => {
  try {
    const responseData = await $api('/patients/1/1');
    response.value = responseData;
    console.log(response.value);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div>
    <p>This is the user details page.</p>
    <p>Current user id: {{ $route.params.id }}</p>
    <p v-if="response">{{ response }}</p>
    <p v-else>Loading...</p>
  </div>
</template>
