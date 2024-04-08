<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { User } from '@/utils/types'

const response = ref(null)
const storedUserData: User | undefined = useCookie('userData').value as User | undefined
const route = useRoute()

const customer = { id: 97, customer: 'Inger Weadick', customerId: 902643, email: 'iweadick2o@unesco.org', country: 'United States', countryFlag: '/src/assets/images/icons/countries/us.png', countryCode: 'id', order: 766, totalSpent: 7119.15, avatar: '/src/assets/images/avatars/avatar-14.png', status: 'Active', contact: '+1 (234) 567 890' }
const orders = { id: 97, customer: 'Inger Weadick', customerId: 902643, email: 'iweadick2o@unesco.org', country: 'United States', countryFlag: '/src/assets/images/icons/countries/us.png', countryCode: 'id', order: 766, totalSpent: 7119.15, avatar: '/src/assets/images/avatars/avatar-14.png', status: 'Active', contact: '+1 (234) 567 890' }

onMounted(async () => {
  try {
    const responseData = await $api(`/patients/${`${storedUserData?.id}/${route.params.id}`}`)

    response.value = responseData
    console.log(response.value)
  }
  catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <div>
    <p>This is the user details page.</p>
    <p>Current user id: {{ $route.params.id }}</p>
    <p v-if="response">
      {{ response }}
    </p>
    <p v-else>
      Loading...
    </p>
  </div>
</template>
