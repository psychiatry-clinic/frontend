<script setup lang="ts">
  import { User } from '@/utils/types'
  import { onMounted, ref } from 'vue'

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const link = `/suggestions/${storedUserData?.id}`

  const suggestions = ref<{ [key: string]: string[] }>({})
  const newSuggestion = ref<{ [key: string]: string }>({})

  onMounted(async () => {
    try {
      const data = await $api(link)
      suggestions.value = data
      console.log('data')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  })

  const addSuggestion = (key: string) => {
    if (newSuggestion.value[key]) {
      suggestions.value[key].push(newSuggestion.value[key])
      newSuggestion.value[key] = ''
    }
  }

  const removeSuggestion = (key: string, index: number) => {
    suggestions.value[key].splice(index, 1)
  }

  const saveSuggestions = async () => {
    const res = await $api(`/suggestions-edit/${storedUserData?.id}`, {
      method: 'POST',
      body: suggestions.value,
    })
    if (res.success) {
      alert('Suggestions updated')
    }
  }
</script>

<template>
  <h3>Coming Soon . . .</h3>
  <div v-if="storedUserData?.role === 'ADMIN'">
    <div>
      <h2>Manage Suggestions</h2>
      {{ suggestions }}
      <div v-for="(values, key) in suggestions" :key="key">
        <h3>{{ values }}</h3>
        <ul>
          <li v-for="(value, index) in values" :key="index">
            <input v-model="values[index]" />
            <button @click="removeSuggestion(key as string, index)">
              Remove
            </button>
          </li>
        </ul>
        <input v-model="newSuggestion[key]" placeholder="Add new suggestion" />
        <button @click="addSuggestion(key as keyof {})">Add</button>
      </div>
      <button @click="saveSuggestions">Save Changes</button>
    </div>
    <div>
      <AppTextField placeholder="Write suggestion" label="Regular" clearable />
    </div>
  </div>
</template>
