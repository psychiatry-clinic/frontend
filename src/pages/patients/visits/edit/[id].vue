<script lang="ts" setup>
  import {
    Chief_complaint,
    Development,
    Present_illness,
    User,
    Visit,
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

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute('patients-visits-edit-id')

  const { data } = await useApi<any>(
    `/patients/visits/${storedUserData?.id}/${route.query.visit}`
  )

  const visit = data.value as Visit

  const short = ref(visit.follow_up)

  const childBoolean =
    differenceInYears(new Date(), new Date(visit.patient.dob)) < 14

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
    {
      title: 'Therapy',
      subtitle: '',
    },
  ]
  const numberedStepsShort = [
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
    {
      title: 'Therapy',
      subtitle: '',
    },
  ]

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
  const prescription = ref()
  const clinic = ref(visit.clinic)
  const duration = ref()

  const chief_complaint = ref<Chief_complaint>(
    visit.chief_complaint || { Complaint: '' }
  )
  const present_illness = ref<Present_illness>(
    visit.present_illness || { Notes: '' }
  )
  const development = ref<Development>(
    visit.patient.development || {
      selectedYear: [''],
      selectedPeripartum: [''],
    }
  )
  const family_hx = ref(visit.patient.family_hx)
  const past_hx = ref(visit.patient.past_hx)
  const social_hx = ref(visit.patient.social_hx)
  const personal_hx = ref(visit.patient.personal_hx)
  const occupation_hx = ref(visit.patient.occupation_hx)
  const forensic_hx = ref(visit.patient.forensic_hx)
  const ix = ref(visit.ix)
  const examination = ref(visit.examination)
  const consultations = ref(visit.consultations)
  const management = ref(visit.management)
  const ddx = ref(visit.ddx)
  const notes = ref(visit.notes)

  const link = `/visits-edit/${storedUserData?.id}/${route.query.visit}/${visit.patient.id}`

  const saveVisit = async () => {
    if (!storedUserData) return
    console.log('short.value')
    console.log(short.value)
    try {
      const res = await $api(link, {
        method: 'POST',
        body: {
          patient_id: visit.patient.id,
          chief_complaint: chief_complaint.value,
          examination: examination.value,
          ddx: ddx.value,
          present_illness: present_illness.value,
          consultations: consultations.value,
          ix: ix.value,
          management: management.value,
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
          console.log(response._data)
        },
      })
      router.push(`/patients/${route.params.id}`)
    } catch (error) {
      console.error(error)
    }
  }
</script>

<template>
  <div class="d-flex justify-space-between">
    <VBtn variant="flat" color="warning" class="mb-5" @click="router.back">
      Back
    </VBtn>
    <VBtn variant="outlined" color="secondary">
      Patient :
      {{ visit.patient.name }}
    </VBtn>
    <VBtn variant="outlined" color="secondary">
      Dr.
      {{ visit.doctor?.fullName }}
    </VBtn>
  </div>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="3"
        class="border-e"
        v-if="numberedSteps && storedUserData?.role !== 'PSYCHOLOGIST'"
      >
        <VCardText>
          <VRadioGroup v-model="short" inline>
            <VRadio label="Classic" :value="false" />
            <VRadio label="Follow Up" :value="true" />
          </VRadioGroup>
        </VCardText>
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-if="numberedSteps && storedUserData?.role !== 'PSYCHOLOGIST'"
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="9"
        v-if="numberedSteps && storedUserData?.role !== 'PSYCHOLOGIST'"
      >
        <VCardText>
          <VForm>
            <div>
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
                <therapyVue :visit="visit" :psychologist="false" />
              </VWindow>
            </div>

            <div
              v-if="currentStep !== numberedSteps.length - 1 || short"
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

              <VBtn color="success" @click="saveVisit"> Save </VBtn>

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

      <VCol v-else>
        <VCardText>
          <VForm>
            <div>
              <VWindow>
                <therapyVue :visit="visit" :psychologist="true" />
              </VWindow>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
