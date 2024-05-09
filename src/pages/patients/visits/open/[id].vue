<script lang="ts" setup>
  import { User, Visit } from '@/utils/types'
  import { RouteParams } from 'vue-router'
  import chiefComplaint from '../chiefComplaint.vue'
  import consultationsVue from '../consultationsVue.vue'
  import ddxVue from '../ddxVue.vue'
  import examinationVue from '../examination.vue'
  import FamilyHx from '../familyHx.vue'
  import forensicHx from '../forensicHx.vue'
  import ixVue from '../ixVue.vue'
  import managementVue from '../managementVue.vue'
  import notesVue from '../notesVue.vue'
  import occupationHx from '../occupationHx.vue'
  import pastHx from '../pastHx.vue'
  import personalHx from '../personalHx.vue'
  import presentIllness from '../presentIllness.vue'
  import presentIllnessChild from '../presentIllnessChild.vue'
  import socialHx from '../socialHx.vue'

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute('patients-visits-edit-id')
  const routeParams = route.params as RouteParams

  const child = ref(true)

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

  const numberedStepsPsychologist = [
    {
      title: 'Psychometric Tests',
      subtitle: '',
    },
    {
      title: 'Therapy',
      subtitle: '',
    },
  ]

  const errors = ref<Record<string, string | undefined>>({
    message: undefined,
  })

  if (route.query.dob && typeof route.query.dob === 'string') {
    child.value = +calculateAge(route.query.dob, true) < 14
  }

  const numberedSteps =
    storedUserData?.role === 'PSYCHOLOGIST'
      ? numberedStepsPsychologist
      : child.value
      ? numberedStepsChild
      : numberedStepsAdult

  const currentStep = ref(0)

  const { data } = await useApi<any>(
    `/patients/visits/${storedUserData?.id}/${route.query.visit}`
  )

  const visit = data.value as Visit
  let chiefComplaintText = ''

  if (visit.chief_complaint) {
    chiefComplaintText += visit.chief_complaint.complaint ?? ''

    if (visit.chief_complaint.duration) {
      chiefComplaintText += ' for ' + visit.chief_complaint.duration
    }

    if (visit.chief_complaint.source) {
      chiefComplaintText += ' source ' + visit.chief_complaint.source
    }

    if (visit.chief_complaint.referral) {
      chiefComplaintText += ' referred ' + visit.chief_complaint.referral
    }
  }

  let presentIllnessText = ''

  if (visit.present_illness) {
    const presentIllness = visit.present_illness

    const presentIllnessFields = [
      'course',
      'circumstances',
      'vegetative',
      'associated',
      'ASD',
      'ADHD',
      'Speech',
      'Intellectual Disability',
      'Language',
      'Fluency',
      'Communication',
      'Learning',
      'Movement',
      'Coordination',
      'associated',
      'functioning',
      'relationships',
      'treatments',
      'substances',
      'risk',
      'notes',
    ]

    presentIllnessFields.forEach((field) => {
      if (presentIllness[field]) {
        presentIllnessText += presentIllness[field] + ' '
      }
    })
  }

  const present_illness = ref(visit.present_illness)
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

  console.log(
    visit.chief_complaint?.complaint + ' for ' + visit.chief_complaint?.duration
  )
</script>

<template>
  <div class="d-flex justify-space-between">
    <VBtn variant="flat" color="warning" class="mb-5" @click="router.back">
      Back
    </VBtn>
    <VBtn variant="plain" color="secondary">
      Patient :
      {{ route.query.name }}
    </VBtn>
    <VBtn variant="plain" color="secondary">
      Dr.
      {{ visit.doctor?.name }}
    </VBtn>
  </div>

  <VCard>
    <VRow>
      <!-- 👉 stepper content -->
      <VCol cols="12" md="8">
        <VCardText>
          <div>
            <span class="text-success"> Chief Complaint: </span>
            {{ chiefComplaintText }}
          </div>
          <div>
            <span class="text-success"> Present Illness: </span>
            {{ presentIllnessText }}
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
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
