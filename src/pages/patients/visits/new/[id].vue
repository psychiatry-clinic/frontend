<script lang="ts" setup>
  import {
    Chief_complaint,
    Consultations,
    Examination,
    FamilyHX,
    ForensicHX,
    Ix,
    Managements,
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
  import ixVue from '../components/ixVue.vue'
  import managementVue from '../components/managementVue.vue'
  import consultationsVue from '../components/consultationsVue.vue'
  import ddxVue from '../components/ddxVue.vue'
  import developmentVue from '../components/developmentVue.vue'
  import examinationVue from '../components/examination.vue'
  import familyHx from '../components/familyHx.vue'
  import forensicHx from '../components/forensicHx.vue'
  import notesVue from '../components/notesVue.vue'
  import occupationHx from '../components/occupationHx.vue'
  import pastHx from '../components/pastHx.vue'
  import personalHx from '../components/personalHx.vue'
  import presentIllnessChild from '../components/presentIllnessChild.vue'
  import socialHx from '../components/socialHx.vue'

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute('patients-visits-new-id')
  const short = ref(false)

  const numberedStepsAdult = [
    {
      title: 'Chief Complaint',
      subtitle: '',
    },
    {
      title: 'Present Illness',
      subtitle: '',
    },
    {
      title: 'Family History',
      subtitle: '',
    },
    {
      title: 'Past History',
      subtitle: '',
    },
    {
      title: 'Social History',
      subtitle: '',
    },
    {
      title: 'Personal History',
      subtitle: '',
    },
    {
      title: 'Occupational History',
      subtitle: '',
    },
    {
      title: 'Forensic History',
      subtitle: '',
    },
    {
      title: 'Examination',
      subtitle: '',
    },
    {
      title: 'Differential Diagnosis',
      subtitle: '',
    },
    {
      title: 'Investigation',
      subtitle: '',
    },
    {
      title: 'Notes',
      subtitle: '',
    },
    {
      title: 'Management',
      subtitle: '',
    },
  ]

  const numberedStepsAdultShort = [
    {
      title: 'Follow up Notes',
      subtitle: '',
    },
    {
      title: 'Management',
      subtitle: '',
    },
  ]

  const numberedStepsChild = [
    {
      title: 'Chief Complaint',
      subtitle: '',
    },
    {
      title: 'Present Illness',
      subtitle: '',
    },
    {
      title: 'Development History',
      subtitle: '',
    },
    {
      title: 'Family History',
      subtitle: '',
    },
    {
      title: 'Past History',
      subtitle: '',
    },
    {
      title: 'Social History',
      subtitle: '',
    },
    {
      title: 'Examination',
      subtitle: '',
    },
    {
      title: 'Consultations',
      subtitle: '',
    },
    {
      title: 'Differential Diagnosis',
      subtitle: '',
    },
    {
      title: 'Investigations',
      subtitle: '',
    },
    {
      title: 'Notes',
      subtitle: '',
    },
    {
      title: 'Management',
      subtitle: '',
    },
  ]

  const errors = ref<Record<string, string | undefined>>({
    message: undefined,
  })

  const childBoolean =
    differenceInYears(new Date(), new Date(route.query.dob as string)) < 14

  const { data } = await useApi<Patient>(
    `/patients/${storedUserData?.id}/${route.params.id}`
  )

  let numberedSteps = ref<any>()
  numberedSteps.value = childBoolean
    ? numberedStepsChild
    : short.value
    ? numberedStepsAdultShort
    : numberedStepsAdult

  watch(short, (newValue) => {
    numberedSteps.value = childBoolean
      ? numberedStepsChild
      : short.value
      ? numberedStepsAdultShort
      : numberedStepsAdult
  })

  const currentStep = ref(0)

  const patient = ref(route.params.id)
  const doctor = ref(storedUserData?.id)

  const prescription = ref()
  const clinic = ref()
  const duration = ref()

  const chief_complaint = ref<Chief_complaint>({ complaint: '' })
  const present_illness = ref<Present_illness>({ notes: '' })

  const development = ref(
    data.value?.development || { selectedYear: [], selectedPeripartum: [] }
  )
  const family_hx = ref<FamilyHX>(
    data.value?.family_hx
      ? data.value.family_hx
      : { different: '', medical: '', other: '', similar: '' }
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
    managements: [{ name: '', form: '', dose: '' }],
  })

  const ddx = ref()
  const notes = ref()

  const link = `/visits-new/${storedUserData?.id}/${route.params.id}`

  const addVisit = async () => {
    if (!storedUserData) return

    try {
      const res = await $api(link, {
        method: 'POST',
        body: {
          chief_complaint: chief_complaint.value,
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
    } catch (error) {
      console.error(error)
    }
  }

  const submit = () => {
    console.log('chief_complaint')
    console.log(chief_complaint.value)
    console.log('present_illness')
    console.log(present_illness.value)
    console.log('family_hx')
    console.log(family_hx.value)
    console.log('past_hx')
    console.log(past_hx.value)
    console.log('social_hx')
    console.log(social_hx.value)
    console.log('personal_hx')
    console.log(personal_hx.value)
    console.log('occupation_hx')
    console.log(occupation_hx.value)
    console.log('forensic_hx')
    console.log(forensic_hx.value)
    console.log('examination')
    console.log(examination.value)
    console.log('ddx')
    console.log(ddx.value)
    console.log('ix')
    console.log(ix.value)
    console.log('management')
    console.log(management.value)
    console.log('consultations')
    console.log(consultations.value)
    console.log('notes')
    console.log(notes.value)
  }
</script>

<template>
  <div class="d-flex justify-space-between">
    <VBtn variant="outlined" class="mb-5" @click="router.back"> Back </VBtn>
    <VBtn variant="outlined" color="secondary">
      Patient :
      {{ route.query.name }}
    </VBtn>
  </div>
  <VCard>
    <VRow>
      <VCol cols="12" md="3" class="border-e">
        <VCardText>
          <VRadioGroup v-model="short" inline>
            <VRadio label="Classic" :value="false" />
            <VRadio label="Follow Up" :value="true" />
          </VRadioGroup>
        </VCardText>
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
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
                <notesVue v-model="notes" />
                <managementVue v-model="management" />
              </VWindow>
            </div>

            <div
              class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"
            >
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
                Previous
              </VBtn>

              <VBtn color="success" @click="addVisit"> Submit </VBtn>

              <VBtn
                v-if="currentStep !== numberedSteps.length - 1"
                @click="currentStep++"
              >
                Next

                <VIcon icon="tabler-arrow-right" end class="flip-in-rtl" />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
