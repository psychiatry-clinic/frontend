<script setup lang="ts">
  import { Managements } from '@/utils/types'

  const { medicationSuggestion } = getExportedData()

  interface Management {
    Name?: string
    Form?: string
    Dose?: string
    Use?: string
  }

  const { t } = useI18n()

  interface Model {
    managements?: Management[]
  }

  const model = defineModel<Model>()

  const managements = ref<Management[]>(model.value?.managements || [])

  function addManagement() {
    if (!managements.value) return
    const lastManagement = managements.value[managements.value.length - 1]
    if (
      !lastManagement ||
      Object.values(lastManagement).some((val) => val === '')
    )
      return
    managements.value.push({ Name: '', Form: '', Dose: '', Use: '' })
  }

  function enableSecondField(index: number) {
    const currentManagement = managements.value?.[index]
    return !!currentManagement?.Name
  }

  function saveNameUppercase(index: number) {
    if (!managements.value || !managements.value[index]) return
    managements.value[index].Name = managements.value[index].Name?.toUpperCase()
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">{{ t('Management') }}</h6>
      </VCol>
    </VRow>

    <!-- Iterate over managements -->
    <template v-for="(management, index) in managements" :key="index">
      <VRow>
        <!-- Name field -->
        <VCol cols="3">
          <AppTextField
            :placeholder="management.Name ? '' : t('Type Name')"
            v-model="management.Name"
            @input="saveNameUppercase(index)"
          />
          <div class="mt-5">
            <VChip
              class="me-2 mb-2"
              v-for="suggestion in medicationSuggestion"
              size="x-small"
              @click="
                () => {
                  management.Name = suggestion
                }
              "
            >
              <span>
                {{ suggestion }}
              </span>
            </VChip>
          </div>
        </VCol>
        <!-- Form field -->
        <VCol cols="3">
          <AppTextField
            v-if="enableSecondField(index)"
            :placeholder="management.Form ? '' : t('Type Form')"
            v-model="management.Form"
          />
          <div class="mt-5" v-if="management.Name">
            <VChip
              class="me-2 mb-2"
              v-for="suggestion in medicationFormSuggestions"
              size="x-small"
              @click="
                () => {
                  management.Form = suggestion
                }
              "
            >
              <span>
                {{ suggestion }}
              </span>
            </VChip>
          </div>
        </VCol>
        <!-- Dose field -->
        <VCol cols="3">
          <AppTextField
            v-if="management.Form && enableSecondField(index)"
            :placeholder="management.Dose ? '' : t('Type Dose')"
            v-model="management.Dose"
          />
          <div class="mt-5" v-if="management.Form">
            <VChip
              class="me-2 mb-2"
              v-for="suggestion in medicationDoseSuggestions"
              size="x-small"
              @click="
                () => {
                  management.Dose = suggestion
                }
              "
            >
              <span>
                {{ suggestion }}
              </span>
            </VChip>
          </div>
        </VCol>
        <!-- Use field -->
        <VCol cols="3">
          <AppTextField
            v-if="management.Dose && enableSecondField(index)"
            :placeholder="management.Use ? '' : t('Type Use')"
            v-model="management.Use"
          />
          <div class="mt-5" v-if="management.Dose">
            <VChip
              class="me-2 mb-2"
              v-for="suggestion in medicationUseSuggestions"
              size="x-small"
              @click="
                () => {
                  management.Use === '' ||
                  management.Use === undefined ||
                  management.Use === null
                    ? (management.Use = suggestion)
                    : (management.Use = management.Use + ' ' + suggestion)
                }
              "
            >
              <span>
                {{ suggestion }}
              </span>
            </VChip>
          </div>
        </VCol>
      </VRow>
    </template>

    <!-- Add new management button -->
    <VRow>
      <VCol cols="12">
        <VBtn variant="outlined" @click.prevent="addManagement">
          <VIcon icon="tabler-plus" end class="flip-in-rtl me-2" />
          <span> {{ t('Add') }} </span>
        </VBtn>
      </VCol>
    </VRow>
  </VWindowItem>
</template>
