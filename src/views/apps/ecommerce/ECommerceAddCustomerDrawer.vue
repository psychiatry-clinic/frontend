<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { VForm } from 'vuetify/components/VForm'
import type { Patient } from '@db/apps/ecommerce/types'

interface Props {
  isDrawerOpen: boolean
}

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const router = useRouter()

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit('update:isDrawerOpen', val)
}

const errors = ref<Record<string, string | undefined>>({
  message: undefined,
})

const refVForm = ref<VForm>()
const name = ref()
const dob = ref()
const gender = ref('Male')
const phone = ref()

// eslint-disable-next-line camelcase
const marital_status = ref()
const children = ref()
const residence = ref('بغداد')
const occupation = ref()
const education = ref()

const resetForm = () => {
  refVForm.value?.reset()
  emit('update:isDrawerOpen', false)
}

const storedUserData: Patient | undefined = useCookie('userData').value as Patient | undefined

const link = `/patients-new/${storedUserData?.id}`

const addPatient = async () => {
  try {
    const res = await $api(link, {
      method: 'POST',
      body: {
        name: name.value,
        dob: +dob.value,
        gender: gender.value,
        phone: phone.value,
        // eslint-disable-next-line camelcase
        marital_status: marital_status.value,
        children: children.value,
        residence: residence.value,
        occupation: occupation.value,
        education: education.value,
      },
      onResponseError({ response }) {
        errors.value = response._data
      },
    })

    console.log(res.id)
    router.replace(`/patients/${res.id}`)
  }
  catch (error) {
    console.error(error)
  }
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
                  placeholder=""
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="dob"
                  label="Date of Birth*"
                  :rules="[requiredValidator]"
                  placeholder=""
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
                  :items="gender === 'Male' ? ['متزوج', 'اعزب', 'ارمل', 'منفصل'] : ['متزوجة', 'عزباء', 'ارملة', 'منفصلة']"
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
                  placeholder="Select Residence"
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
                  placeholder="Write an Occupation"
                  label="Occupation"
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
                    :disabled="!name || !dob"
                    @click="addPatient"
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
