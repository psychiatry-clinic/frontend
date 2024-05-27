<script setup lang="ts">
  import type { User } from '@/utils/types'
  import { BlobServiceClient } from '@azure/storage-blob'
  import type { CustomInputContent } from '@core/types'
  import { differenceInCalendarYears } from 'date-fns'
  import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
  import { VForm } from 'vuetify/components/VForm'
  const { t } = useI18n()

  const blobSasUrl =
    'https://dakakean.blob.core.windows.net/psychiatry?sp=racwl&st=2024-05-02T06:46:34Z&se=2024-05-10T14:46:34Z&spr=https&sv=2022-11-02&sr=c&sig=oTStvDHsKPQiKZ4%2Bniqpd7Dt9w514Y52T6kIQlC5490%3D'
  const blobServiceClient = new BlobServiceClient(blobSasUrl)
  const containerName = 'psychiatry'
  const containerClient = blobServiceClient.getContainerClient(containerName)

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const uploadFiles = async () => {
    const fileInput = document.getElementById('picture') as HTMLInputElement
    try {
      const promises = []
      if (fileInput && fileInput.files) {
        for (const file of fileInput.files) {
          const blockBlobClient = containerClient.getBlockBlobClient(file.name)
          promises.push(blockBlobClient.uploadBrowserData(file))
        }
        await Promise.all(promises)
        avatar.value = (await promises[0])._response.request.url
        // listFiles();
      }
    } catch (error) {
      console.log(error)
    }
  }

  interface Props {
    isDrawerOpen: boolean
  }

  const props = defineProps<Props>()

  interface Emit {
    (e: 'update:isDrawerOpen', value: boolean): void
  }

  const emit = defineEmits<Emit>()
  const router = useRouter()

  const handleDrawerModelValueUpdate = (val: boolean) => {
    emit('update:isDrawerOpen', val)
  }

  const errors = ref<Record<string, string | undefined>>({
    message: undefined,
  })

  const radioContent: CustomInputContent[] = [
    {
      title: t('Child'),
      value: 'child',
    },
    {
      title: t('Adult'),
      value: 'adult',
    },
  ]

  const selectedRadio = ref('child')
  if (storedUserData?.clinic?.name === 'Kadhimiya') {
    selectedRadio.value = 'adult'
  } else {
    selectedRadio.value = 'child'
  }

  const refVForm = ref<VForm>()
  const avatar = ref()
  const name = ref()
  const dob = ref<string>('2024-01-01')
  const dobAdult = ref<number>()
  const age = ref<string>()

  const gender = ref('Male')
  const phone = ref()
  const father_dob = ref()
  const father_edu = ref()
  const father_age = ref()
  const father_work = ref()
  const mother_dob = ref()
  const mother_age = ref()
  const mother_edu = ref()
  const mother_work = ref()
  const related = ref<boolean>()
  const siblings = ref()
  const order = ref()
  const familyHx = ref()
  const notes = ref()
  const marital_status = ref()
  const children = ref()
  const residence = ref()
  const neighborhood = ref('')
  const occupation = ref()
  const education = ref()

  const saving = ref(false)

  const resetForm = () => {
    refVForm.value?.reset()
    emit('update:isDrawerOpen', false)
  }

  const link = `/patients-new/${storedUserData?.id}`

  const addPatient = async () => {
    if (!storedUserData) return
    saving.value = true

    try {
      const res = await $api(link, {
        method: 'POST',
        body: {
          doctor: storedUserData.id,
          name: name.value,
          dob: dobAdult.value
            ? addTimeToDateString(convertDob(dobAdult.value))
            : addTimeToDateString(dob.value),
          gender: gender.value,
          phone: phone.value,
          avatar: avatar.value,
          father_dob: new Date(father_dob.value, 0, 1),
          father_age: +father_age.value,
          father_work: father_work.value,
          father_edu: father_edu.value,
          mother_dob: new Date(mother_dob.value, 0, 1),
          mother_age: +mother_age.value,
          mother_work: mother_work.value,
          mother_edu: mother_edu.value,
          related: related.value,
          siblings: +siblings.value,
          order: +order.value,
          familyHx: familyHx.value,
          notes: notes.value,
          // eslint-disable-next-line camelcase
          marital_status: marital_status.value,
          children: children.value,
          residence: residence.value,
          neighborhood: neighborhood.value,
          occupation: occupation.value,
          education: education.value,
        },
        onResponseError({ response }) {
          errors.value = response._data
        },
      })
      router.push(`/patients/${res.id}`)
      saving.value = false
    } catch (error) {
      console.error(error)
      saving.value = false
    }
  }

  watch(dob, (newValue) => {
    if (newValue) {
      age.value = calculateAge(newValue) as string
    }
  })

  watch(dobAdult, (newValue) => {
    if (newValue && newValue.toString().length === 4) {
      age.value = calculateAge(new Date(newValue).toString()) as string
    }
  })

  watch(father_dob, (newValue) => {
    if (newValue.length === 4) {
      const date = new Date(father_dob.value, 0, 1)
      father_age.value = differenceInCalendarYears(dob.value, date)
    } else {
      father_age.value = null
    }
  })

  watch(mother_dob, (newValue) => {
    if (newValue.length === 4) {
      const date = new Date(mother_dob.value, 0, 1)
      mother_age.value = differenceInCalendarYears(dob.value, date)
    } else {
      mother_age.value = null
    }
  })

  const convertDob = (dob: number) => {
    const date = new Date(dob)
    date.setMonth(0)
    date.setDate(1)
    return date.toISOString().slice(0, 10)
  }

  const toggleSuggestion = (modelName: string, suggestion: any) => {
    const model = eval(modelName)

    if (
      model.value === undefined ||
      model.value === null ||
      model.value === ''
    ) {
      model.value = suggestion
    } else {
      const suggestions = model.value.split(', ').filter((s: any) => s)
      const index = suggestions.indexOf(suggestion)
      if (index === -1) {
        suggestions.push(suggestion)
      } else {
        suggestions.splice(index, 1)
      }
      model.value = suggestions.join(', ')
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
      :title="t('Add a Patient')"
      @cancel="$emit('update:isDrawerOpen', false)"
    />

    <VDivider />

    <VCard flat>
      <PerfectScrollbar :options="{ wheelPropagation: false }" class="h-100">
        <VCardText style="block-size: calc(100vh - 5rem)">
          <VForm ref="refVForm" @submit.prevent="">
            <VRow class="mb-2">
              <VCol>
                <CustomRadios
                  v-model:selected-radio="selectedRadio"
                  :radio-content="radioContent"
                  :grid-column="{ sm: '6', cols: '12' }"
                />
              </VCol>

              <VCol cols="12">
                <h6 class="text-h6 text-primary">{{ t('Image') }}</h6>
              </VCol>

              <VCol cols="12">
                <VAvatar
                  circle
                  :size="100"
                  :color="avatar ? 'undefined' : 'secondary'"
                  :variant="!avatar ? 'tonal' : undefined"
                >
                  <VImg v-if="avatar" :src="avatar" style="object-fit: cover" />
                  <span v-else class="text-5xl font-weight-medium">
                    {{ avatarText(name) }}
                  </span>
                </VAvatar>
              </VCol>
              <VCol cols="12">
                <label for="picture"></label>
                <input
                  type="file"
                  id="picture"
                  name="picture"
                  accept="image/*"
                  capture="environment"
                  @change="uploadFiles"
                />
              </VCol>

              <VCol cols="12">
                <h6 class="text-h6 text-primary">
                  {{ t('Basic Information') }}
                </h6>
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="name"
                  :label="t('Name') + '*'"
                  :rules="[requiredValidator]"
                  placeholder=""
                />
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'child'">
                <AppDateTimePicker
                  v-model="dob"
                  :label="t('Birth Date') + '*'"
                  :placeholder="t('Select date')"
                />
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'adult'">
                <AppTextField
                  v-model="dobAdult"
                  :label="t('Birth Date') + '*'"
                  placeholder=""
                  maxlength="4"
                  :rules="[dateOfBirthValidator]"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  disabled
                  v-model="age"
                  :label="t('Age') + `(${t('Automatic')})`"
                  placeholder=""
                  maxlength="4"
                />
              </VCol>

              <VCol cols="12">
                <VRadioGroup v-model="gender" inline>
                  <span
                    style="
                      color: rgba(
                        var(--v-theme-on-surface),
                        var(--v-high-emphasis-opacity)
                      );
                      line-height: 15px;
                    "
                    class="v-label mb-1 text-body-2 text-black"
                    >{{ t('Gender') }}*</span
                  >
                  <VRadio :label="t('Male')" value="Male" />
                  <VRadio :label="t('Female')" value="Female" />
                </VRadioGroup>
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="phone"
                  :label="t('Phone')"
                  placeholder=""
                  :rules="[phoneNumberValidator]"
                  maxlength="11"
                />
              </VCol>

              <VCol>
                <div
                  class="text-body-1 text-primary font-weight-medium text-high-emphasis"
                >
                  {{ t('Demographic Information') }}
                </div>
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'adult'">
                <AppAutocomplete
                  v-model="marital_status"
                  :label="t('Marital Status')"
                  :placeholder="t('Select Status')"
                  :items="
                    gender === 'Male'
                      ? ['متزوج', 'مطلق', 'اعزب', 'منفصل', 'ارمل']
                      : ['متزوجة', 'مطلقة', 'عزباء', 'منفصلة', 'ارملة']
                  "
                />
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'adult'">
                <AppTextField
                  v-model="children"
                  :placeholder="t('Write a Number')"
                  :label="t('Children')"
                />
              </VCol>

              <VCol cols="12">
                <AppAutocomplete
                  v-model="residence"
                  :label="t('Residence')"
                  :placeholder="t('Select Residence')"
                  :items="cities"
                />
                <div class="mt-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in cities"
                    size="x-small"
                    @click="
                      () => {
                        residence = suggestion
                      }
                    "
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>

              <VCol cols="12" v-if="residence === 'بغداد'">
                <AppAutocomplete
                  v-model="neighborhood"
                  :label="t('Neighborhood')"
                  :placeholder="t('Select')"
                  :items="baghdadRegions"
                />
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'adult'">
                <AppTextField
                  v-model="occupation"
                  :placeholder="t('Write an Occupation')"
                  :label="t('Occupation')"
                />
                <div class="mt-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in occupationSuggestions"
                    size="x-small"
                    @click="toggleSuggestion('occupation', suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>

              <!-- child education -->
              <VCol cols="12" v-if="selectedRadio === 'child'">
                <AppTextField v-model="education" :label="t('Education')" />
                <div class="mt-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in childEducation"
                    size="x-small"
                    @click="toggleSuggestion('education', suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>

              <!-- adult education -->
              <VCol cols="12" v-if="selectedRadio === 'adult'">
                <AppAutocomplete
                  v-model="education"
                  :label="t('Education')"
                  :placeholder="t('Select Education')"
                  :items="adultEducation"
                />
                <div class="mt-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in adultEducation"
                    size="x-small"
                    @click="education = suggestion"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>

              <!-- related -->
              <VCol v-if="selectedRadio === 'child'">
                <div
                  class="text-body-1 text-primary font-weight-medium text-high-emphasis"
                >
                  {{ t('Parents Relationship') }}
                </div>
              </VCol>
              <VCol cols="12" v-if="selectedRadio === 'child'">
                <VRadioGroup v-model="related" inline>
                  <VRadio :label="t('Related')" :value="true" />
                  <VRadio :label="t('Not Related')" :value="false" />
                </VRadioGroup>
              </VCol>
              <!-- related -->

              <!-- Siblings -->
              <VCol v-if="selectedRadio === 'child'">
                <div
                  class="text-body-1 text-primary font-weight-medium text-high-emphasis"
                >
                  {{ t('Siblings') }}
                </div>
              </VCol>
              <VCol cols="12" v-if="selectedRadio === 'child'">
                <VRadioGroup v-model="siblings" inline>
                  <VRadio label="0" :value="0" />
                  <VRadio label="1" :value="1" />
                  <VRadio label="2" :value="2" />
                  <VRadio label="3" :value="3" />
                  <VRadio label="4" :value="4" />
                  <VRadio label="5" :value="5" />
                  <VRadio label="6" :value="6" />
                  <VRadio label="7" :value="7" />
                  <VRadio label="8" :value="8" />
                </VRadioGroup>
              </VCol>
              <!-- Siblings -->

              <!-- Order -->
              <VCol v-if="siblings >= 1">
                <div
                  class="text-body-1 text-primary font-weight-medium text-high-emphasis"
                >
                  {{ t('Order in Siblings') }}
                </div>
              </VCol>
              <VCol cols="12">
                <VRadioGroup v-model="order" inline>
                  <VRadio :label="t('1st')" :value="1" v-if="siblings >= 1" />
                  <VRadio :label="t('2nd')" :value="2" v-if="siblings >= 1" />
                  <VRadio :label="t('3rd')" :value="3" v-if="siblings > 1" />
                  <VRadio :label="t('4th')" :value="4" v-if="siblings > 2" />
                  <VRadio :label="t('5th')" :value="5" v-if="siblings > 3" />
                  <VRadio :label="t('6th')" :value="6" v-if="siblings > 4" />
                  <VRadio :label="t('7th')" :value="7" v-if="siblings > 5" />
                  <VRadio :label="t('8th')" :value="8" v-if="siblings > 6" />
                  <VRadio :label="t('9th')" :value="8" v-if="siblings > 7" />
                </VRadioGroup>
              </VCol>
              <!-- Order -->

              <!-- Father -->
              <VCol v-if="selectedRadio === 'child'">
                <div
                  class="text-body-1 text-primary font-weight-medium text-high-emphasis"
                >
                  {{ t('Father Information') }}
                </div>
              </VCol>
              <VCol cols="12" v-if="selectedRadio === 'child'">
                <AppTextField
                  v-model="father_dob"
                  :label="t('Date of Birth')"
                  :rules="[dateOfBirthValidator]"
                  placeholder=""
                  maxlength="4"
                />
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'child' && father_age">
                <span
                  style="
                    color: rgba(
                      var(--v-theme-on-surface),
                      var(--v-high-emphasis-opacity)
                    );
                    line-height: 15px;
                  "
                  class="v-label mb-1 text-body-2 text-black"
                  >{{ t('Age at Birth of Child') }}</span
                >
                <VAlert
                  density="compact"
                  :color="father_age > 40 ? 'error' : 'success'"
                  variant="tonal"
                >
                  {{ father_age ? father_age : '0' }}
                </VAlert>
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'child'">
                <AppTextField
                  v-model="father_edu"
                  :label="t('Education')"
                  placeholder=""
                />
                <div class="mt-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in adultEducation"
                    size="x-small"
                    @click="toggleSuggestion('father_edu', suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
              <VCol cols="12" v-if="selectedRadio === 'child'">
                <AppTextField
                  v-model="father_work"
                  :label="t('Work')"
                  placeholder=""
                />
                <div class="mt-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in occupationSuggestions"
                    size="x-small"
                    @click="toggleSuggestion('father_work', suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
              <!-- Father -->

              <!-- Mother -->
              <VCol v-if="selectedRadio === 'child'">
                <div
                  class="text-body-1 text-primary font-weight-medium text-high-emphasis"
                >
                  {{ t('Mother Information') }}
                </div>
              </VCol>
              <VCol cols="12" v-if="selectedRadio === 'child'">
                <AppTextField
                  v-model="mother_dob"
                  :label="t('Date of Birth')"
                  :rules="[dateOfBirthValidator]"
                  placeholder=""
                  maxlength="4"
                />
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'child' && mother_age">
                <span
                  style="
                    /* stylelint-disable-next-line @stylistic/declaration-colon-newline-after */
                    color: rgba(
                      var(--v-theme-on-surface),
                      var(--v-high-emphasis-opacity)
                    );
                    line-height: 15px;
                  "
                  class="v-label mb-1 text-body-2 text-black"
                  >{{ t('Age at Birth of Child') }}</span
                >
                <VAlert
                  density="compact"
                  :color="mother_age > 35 ? 'error' : 'success'"
                  variant="tonal"
                >
                  {{ mother_age ? mother_age : '0' }}
                </VAlert>
              </VCol>

              <VCol cols="12" v-if="selectedRadio === 'child'">
                <AppTextField
                  v-model="mother_edu"
                  :label="t('Education')"
                  placeholder=""
                />
                <div class="mt-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in adultEducation"
                    size="x-small"
                    @click="toggleSuggestion('mother_edu', suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
              <VCol cols="12" v-if="selectedRadio === 'child'">
                <AppTextField
                  v-model="mother_work"
                  :label="t('Work')"
                  placeholder=""
                />
                <div class="mt-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in occupationSuggestions"
                    size="x-small"
                    @click="toggleSuggestion('mother_work', suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
              <!-- Mother -->

              <!-- Notes -->
              <VCol>
                <div
                  class="text-body-1 text-primary font-weight-medium text-high-emphasis"
                >
                  {{ t('Notes') }}
                </div>
              </VCol>
              <VCol cols="12">
                <AppTextarea v-model="notes" />
              </VCol>
              <!-- Notes -->

              <VCol cols="12">
                <div class="d-flex gap-4 justify-start pb-10">
                  <VBtn
                    v-if="!saving"
                    type="submit"
                    color="primary"
                    :disabled="!name || !dob"
                    @click.once="addPatient"
                  >
                    {{ t('Add') }}
                  </VBtn>
                  <VProgressCircular
                    v-else
                    :size="30"
                    width="3"
                    color="primary"
                    indeterminate
                  />
                  <VBtn color="error" variant="tonal" @click="resetForm">
                    {{ t('Discard') }}
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
