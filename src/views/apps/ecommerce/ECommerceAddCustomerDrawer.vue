<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'
import { defineEmits, defineProps, ref } from 'vue'

interface Props {
  isDrawerOpen: boolean
}

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}

const refVForm = ref<VForm>()
const name = ref()
const dob = ref()
const gender = ref('Male')
const phone = ref()

const marital_status = ref()
const children = ref()
const residence = ref('بغداد')
const occupation = ref()
const education = ref()

const resetForm = () => {
  refVForm.value?.reset()
  emit('update:isDrawerOpen', false)
}
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    temporary
    location="end"
    width="370"
    border="none"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Header -->
    <AppDrawerHeaderSection
      title="Add a Patient"
      @cancel="$emit('update:isDrawerOpen', false)"
    />

    <VDivider />

    <VCard flat>
      <PerfectScrollbar
        :options="{ wheelPropagation: false }"
        class="h-100"
      >
        <VCardText style="block-size: calc(100vh - 5rem);">
          <VForm
            ref="refVForm"
            @submit.prevent=""
          >
            <VRow>
              <VCol>
                <h6 class="text-h6">
                  Basic Information
                </h6>
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="name"
                  label="Name*"
                  :rules="[requiredValidator]"
                  placeholder="محمد علي"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="dob"
                  label="Date of Birth*"
                  :rules="[requiredValidator]"
                  placeholder="2000"
                />
              </VCol>

              <VCol cols="12">
                <AppAutocomplete
                  v-model="gender"
                  label="Gender*"
                  :items="['Male', 'Female']"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="phone"
                  label="Phone"
                  placeholder="07812345678"
                />
              </VCol>

              <VCol>
                <div class="text-body-1 font-weight-medium text-high-emphasis">
                  Demographic Information
                </div>
              </VCol>

              <VCol cols="12">
                <AppAutocomplete
                  v-model="marital_status"
                  label="Marital Status"
                  placeholder="Select Status"
                  :items="['Married', 'Single', 'Widow', 'Separated']"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="children"
                  placeholder="Write a Number"
                  label="Number of Children"
                />
              </VCol>

              <VCol cols="12">
                <AppAutocomplete
                  v-model="residence"
                  label="Residence"
                  placeholder="Baghdad"
                  :items="[
                    'بغداد',
                    'النجف',
                    'بابل',
                    'كربلاء',
                    'الأنبار',
                    'البصرة',
                    'المثنى',
                    'القادسية',
                    'أربيل',
                    'السليمانية',
                    'دهوك',
                    'ذي قار',
                    'ديالى',
                    'كركوك',
                    'ميسان',
                    'نينوى',
                    'صلاح الدين',
                    'واسط',
                  ]"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="occupation"
                  placeholder="Occupation"
                  label="Write Occupation"
                />
              </VCol>

              <VCol cols="12">
                <AppAutocomplete
                  v-model="education"
                  label="Education"
                  placeholder="Select Education"
                  :items="[
                    'ابتدائية',
                    'متوسطة',
                    'اعدادية',
                    'كلية',
                    'بكالوريوس',
                    'ماجستير',
                    'دكتوراه',
                  ]"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex gap-4 justify-start pb-10">
                  <VBtn
                    type="submit"
                    color="primary"
                  >
                    Add
                  </VBtn>
                  <VBtn
                    color="error"
                    variant="tonal"
                    @click="resetForm"
                  >
                    Discard
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </PerfectScrollbar>
    </VCard>
  </VNavigationDrawer>
</template>

<style lang="scss">
.v-navigation-drawer__content {
  overflow-y: hidden !important;
}
</style>
