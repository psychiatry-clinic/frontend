<script lang="ts" setup>
  import {
    Chief_complaint,
    Consultations,
    DDX,
    Examination,
    FamilyHX,
    ForensicHX,
    Ix,
    Managements,
    Notes,
    OccupationHX,
    PastHX,
    Patient,
    PersonalHX,
    Present_illness,
    SocialHX,
    User,
  } from '@/utils/types'

  import { differenceInYears } from 'date-fns'
  import chiefComplaint from '../components/chiefComplaint.vue'
  import consultationsVue from '../components/consultationsVue.vue'
  import ddxVue from '../components/ddxVue.vue'
  import developmentVue from '../components/developmentVue.vue'
  import examinationVue from '../components/examination.vue'
  import familyHx from '../components/familyHx.vue'
  import forensicHx from '../components/forensicHx.vue'
  import ixVue from '../components/ixVue.vue'
  import managementVue from '../components/managementVue.vue'
  import notesVue from '../components/notesVue.vue'
  import occupationHx from '../components/occupationHx.vue'
  import pastHx from '../components/pastHx.vue'
  import personalHx from '../components/personalHx.vue'
  import presentIllnessChild from '../components/presentIllnessChild.vue'
  import socialHx from '../components/socialHx.vue'
  import therapyVue from '../components/therapyVue.vue'
  import followUp from '../components/followUp.vue'

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const { t } = useI18n()

  const router = useRouter()
  const route = useRoute('patients-visits-new-id')
  const short = ref(true)

  const numberedStepsAdult = [
    {
      title: t('Chief Complaint'),
      subtitle: '',
    },
    {
      title: t('Present Illness'),
      subtitle: '',
    },
    {
      title: t('Family History'),
      subtitle: '',
    },
    {
      title: t('Past History'),
      subtitle: '',
    },
    {
      title: t('Social History'),
      subtitle: '',
    },
    {
      title: t('Personal History'),
      subtitle: '',
    },
    {
      title: t('Occupational History'),
      subtitle: '',
    },
    {
      title: t('Forensic History'),
      subtitle: '',
    },
    {
      title: t('Examination'),
      subtitle: '',
    },
    {
      title: t('Differential Diagnosis'),
      subtitle: '',
    },
    {
      title: t('Investigations'),
      subtitle: '',
    },
    {
      title: t('Notes'),
      subtitle: '',
    },
    {
      title: t('Management'),
      subtitle: '',
    },
    {
      title: t('Therapy'),
      subtitle: '',
    },
  ]

  const numberedStepsShort = [
    {
      title: t('Follow up Notes'),
      subtitle: '',
    },
    {
      title: t('Management'),
      subtitle: '',
    },
    {
      title: t('Therapy'),
      subtitle: '',
    },
  ]

  const numberedStepsChild = [
    {
      title: t('Chief Complaint'),
      subtitle: '',
    },
    {
      title: t('Present Illness'),
      subtitle: '',
    },
    {
      title: t('Development History'),
      subtitle: '',
    },
    {
      title: t('Family History'),
      subtitle: '',
    },
    {
      title: t('Past History'),
      subtitle: '',
    },
    {
      title: t('Social History'),
      subtitle: '',
    },
    {
      title: t('Examination'),
      subtitle: '',
    },
    {
      title: t('Consultations'),
      subtitle: '',
    },
    {
      title: t('Differential Diagnosis'),
      subtitle: '',
    },
    {
      title: t('Investigations'),
      subtitle: '',
    },
    {
      title: t('Notes'),
      subtitle: '',
    },
    {
      title: t('Management'),
      subtitle: '',
    },
    {
      title: t('Therapy'),
      subtitle: '',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const errors = ref<Record<string, string | undefined>>({
    message: undefined,
  })

  const childBoolean =
    differenceInYears(new Date(), new Date(route.query.dob as string)) < 14

  const { data } = await useApi<Patient>(
    `/patient/${storedUserData?.id}/${route.params.id}`
  )

  if (data && data.value?.visits && data.value?.visits.length > 0) {
    short.value = true
  } else {
    short.value = false
  }

  let numberedSteps = ref<any>()
  numberedSteps.value = short.value
    ? numberedStepsShort
    : childBoolean
    ? numberedStepsChild
    : numberedStepsAdult

  watch(short, (newValue) => {
    numberedSteps.value = short.value
      ? numberedStepsShort
      : childBoolean
      ? numberedStepsChild
      : numberedStepsAdult
  })

  const currentStep = ref(0)

  const patient = ref(route.params.id)
  const doctor = ref(storedUserData?.id)

  const prescription = ref()
  const clinic = ref()
  const duration = ref()

  const chief_complaint = ref<Chief_complaint>({ Complaint: '' })
  const present_illness = ref<Present_illness>({ Notes: '' })

  const development = ref(
    data.value?.development || { selectedYear: [], selectedPeripartum: [] }
  )
  const family_hx = ref<FamilyHX>(
    data.value?.family_hx
      ? data.value.family_hx
      : { Different: '', Medical: '', Other: '', Similar: '' }
  )
  const past_hx = ref<PastHX>(data.value?.past_hx ? data.value.past_hx : {})
  const social_hx = ref<SocialHX>(
    data.value?.social_hx ? data.value.social_hx : {}
  )
  const personal_hx = ref<PersonalHX>(
    data.value?.personal_hx ? data.value?.personal_hx : {}
  )
  const occupation_hx = ref<OccupationHX>(
    data.value?.occupation_hx ? data.value?.occupation_hx : {}
  )
  const forensic_hx = ref<ForensicHX>(
    data.value?.forensic_hx ? data.value?.forensic_hx : {}
  )
  const examination = ref<Examination>({})

  const ix = ref<Ix>({ investigations: [{ name: '', result: '' }] })

  const consultations = ref<Consultations>({
    consultations: [{ branch: '', result: '' }],
  })

  const management = ref<Managements>({
    managements: [{ Name: '', Form: '', Dose: '', Use: '' }],
  })

  const ddx = ref<DDX>({ 'Differential Diagnosis': '' })
  const notes = ref<Notes>({ Notes: '' })

  const link = `/visits-new/${storedUserData?.id}/${route.params.id}`

  const saving = ref(false)

  const addVisit = async () => {
    if (!storedUserData) return
    // if (!storedUserData.clinic.id) return
    saving.value = true

    try {
      const res = await $api(link, {
        method: 'POST',
        body: {
          chief_complaint: chief_complaint.value,
          clinicId: storedUserData.clinic.id,
          present_illness: present_illness.value,
          examination: examination.value,
          ddx: ddx.value,
          ix: ix.value,
          management: management.value,
          consultations: consultations.value,
          notes: notes.value,
          social_hx: social_hx.value,
          family_hx: family_hx.value,
          personal_hx: personal_hx.value,
          forensic_hx: forensic_hx.value,
          occupation_hx: occupation_hx.value,
          past_hx: past_hx.value,
          development: development.value,
          follow_up: short.value,
        },
        onResponseError({ response }) {
          errors.value = response._data
        },
      })
      console.log(res)
      router.push(`/patients/${route.params.id}`)
      saving.value = false
    } catch (error) {
      saving.value = false
      console.error(error)
    }
  }
</script>

<template>
  <div class="d-flex justify-space-between">
    <VBtn variant="flat" color="warning" class="mb-5" @click="router.back">
      {{ t('Back') }}
    </VBtn>
    <VBtn variant="outlined" color="secondary">
      {{ t('Patient') }} :
      {{ route.query.name }}
    </VBtn>
  </div>
  <VCard>
    <VRow>
      <VCol cols="12" md="3" class="border-e">
        <VCardText>
          <VRadioGroup v-model="short" inline>
            <VRadio :label="t('Classic')" :value="false" />
            <VRadio :label="t('Follow Up')" :value="true" />
          </VRadioGroup>
        </VCardText>
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
            @click="scrollToTop"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol cols="12" md="9">
        <VCardText>
          <VForm>
            <div v-if="numberedSteps">
              <VWindow v-model="currentStep" class="disable-tab-transition">
                <chiefComplaint v-model="chief_complaint" v-if="!short" />
                <presentIllnessChild
                  v-model="present_illness"
                  :child="childBoolean"
                  v-if="!short"
                />
                <developmentVue
                  v-model="development"
                  v-if="childBoolean && !short"
                />
                <familyHx v-model="family_hx" v-if="!short" />
                <pastHx v-model="past_hx" v-if="!short" />
                <socialHx v-model="social_hx" v-if="!short" />
                <personalHx
                  v-model="personal_hx"
                  v-if="!childBoolean && !short"
                />
                <occupationHx
                  v-model="occupation_hx"
                  v-if="!childBoolean && !short"
                />
                <forensicHx
                  v-model="forensic_hx"
                  v-if="!childBoolean && !short"
                />
                <examinationVue v-model="examination" v-if="!short" />
                <consultationsVue
                  v-model="consultations"
                  v-if="childBoolean && !short"
                />
                <ddxVue v-model="ddx" :child="childBoolean" v-if="!short" />
                <ixVue v-model="ix" v-if="!short" />
                <notesVue v-model="notes" v-if="!short" />
                <followUp v-model="notes" v-if="short" />
                <managementVue v-model="management" />
                <therapyVue :psychologist="false" />
              </VWindow>
            </div>

            <div
              class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"
            >
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="
                  () => {
                    currentStep--
                    scrollToTop()
                  }
                "
              >
                <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
                {{ t('Previous') }}
              </VBtn>

              <div>
                <VBtn v-if="!saving" color="success" @click.once="addVisit">
                  {{ t('Submit') }}
                </VBtn>
                <VProgressCircular
                  v-else
                  :size="30"
                  width="3"
                  color="success"
                  indeterminate
                />
              </div>

              <VBtn
                v-if="currentStep !== numberedSteps.length - 1"
                @click="
                  () => {
                    currentStep++
                    scrollToTop()
                  }
                "
              >
                {{ t('Next') }}

                <VIcon icon="tabler-arrow-right" end class="flip-in-rtl" />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
