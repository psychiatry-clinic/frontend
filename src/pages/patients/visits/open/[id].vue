<script lang="ts" setup>
  import { User, Visit } from '@/utils/types'
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
  const route = useRoute('patients-visits-edit-id')

  const { data } = await useApi<any>(
    `/patients/visits/${storedUserData?.id}/${route.query.visit}`
  )

  const visit = data.value as Visit

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
      title: 'Management',
      subtitle: '',
    },
    {
      title: 'Notes',
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
      title: 'Management',
      subtitle: '',
    },
    {
      title: 'Notes',
      subtitle: '',
    },
  ]

  const numberedSteps = childBoolean ? numberedStepsChild : numberedStepsAdult

  const currentStep = ref(0)

  const patient = ref(route.params.id)
  const doctor = ref(visit.doctor?.name)
  const prescription = ref()
  const clinic = ref(visit.clinic)
  const duration = ref()

  const chief_complaint = ref(visit.chief_complaint)
  const present_illness = ref(visit.present_illness)
  const development = ref(visit.patient.development)
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

    // submit()

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

  const submit = () => {
    console.log('chief_complaint')
    console.log(chief_complaint.value)
    console.log('present_illness')
    console.log(present_illness.value)
    console.log('family_hx')
    console.log(family_hx.value)
    console.log('development')
    console.log(development.value)
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
    <VBtn variant="flat" color="warning" class="mb-5" @click="router.back">
      Back
    </VBtn>
    <VBtn variant="plain" color="secondary">
      Patient :
      {{ visit.patient.name }}
    </VBtn>
    <VBtn variant="plain" color="secondary">
      Dr.
      {{ visit.doctor?.name }}
    </VBtn>
  </div>
  <VCard>
    <VRow>
      <VCol cols="12" md="3" class="border-e">
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
                <chiefComplaint v-model="chief_complaint" />
                <presentIllnessChild
                  v-model="present_illness"
                  :child="childBoolean"
                />
                <developmentVue v-model="development" v-if="childBoolean" />
                <familyHx v-model="family_hx" />
                <pastHx v-model="past_hx" />
                <socialHx v-model="social_hx" />
                <personalHx v-model="personal_hx" v-if="!childBoolean" />
                <occupationHx v-model="occupation_hx" v-if="!childBoolean" />
                <forensicHx v-model="forensic_hx" v-if="!childBoolean" />
                <examinationVue v-model="examination" />
                <consultationsVue v-model="consultations" v-if="childBoolean" />
                <ddxVue v-model="ddx" :child="childBoolean" />
                <ixVue v-model="ix" />
                <managementVue v-model="management" />
                <notesVue v-model="notes" />
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
    </VRow>
  </VCard>
  <!-- <VTabs v-model="tab">
    <VTab value="personal-info"> Personal Info </VTab>
    <VTab value="account-details"> Account Details </VTab>
    <VTab value="social-links"> Social Links </VTab>
  </VTabs> -->

  <!-- <VCard flat>
    <VCardText>
      <VWindow v-model="tab" class="disable-tab-transition">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol md="6" cols="12">
                <AppTextField
                  v-model="chief_complaint"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol md="6" cols="12">
                <AppTextField
                  v-model="present_illness"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol cols="12" md="6">
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol cols="12" md="6">
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol cols="12" md="6">
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol cols="12" md="6">
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol cols="12" md="6">
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn color="secondary" variant="tonal"> Cancel </VBtn>
    </VCardText>
  </VCard> -->
</template>