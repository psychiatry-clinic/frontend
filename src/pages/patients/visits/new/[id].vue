<script lang="ts" setup>
  import {
    Patient,
    User,
    Present_illness,
    Chief_complaint,
    FamilyHX,
    PastHX,
    PersonalHX,
    SocialHX,
    Consultations,
    Examination,
    ForensicHX,
    Managements,
    OccupationHX,
    Ix,
  } from '@/utils/types'
  import chiefComplaint from '../chiefComplaint.vue'
  import consultationsVue from '../consultationsVue.vue'
  import ddxVue from '../ddxVue.vue'
  import examinationVue from '../examination.vue'
  import familyHx from '../familyHx.vue'
  import forensicHx from '../forensicHx.vue'
  import ixVue from '../ixVue.vue'
  import managementVue from '../managementVue.vue'
  import notesVue from '../notesVue.vue'
  import occupationHx from '../occupationHx.vue'
  import pastHx from '../pastHx.vue'
  import personalHx from '../personalHx.vue'
  import presentIllnessChild from '../presentIllnessChild.vue'
  import socialHx from '../socialHx.vue'
  import developmentVue from '../developmentVue.vue'
  import { differenceInYears } from 'date-fns'

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute('patients-visits-new-id')

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

  const errors = ref<Record<string, string | undefined>>({
    message: undefined,
  })

  const childBoolean =
    differenceInYears(new Date(), new Date(route.query.dob as string)) < 14

  const { data } = await useApi<Patient>(
    `/patients/${storedUserData?.id}/${route.params.id}`
  )

  const numberedSteps = childBoolean ? numberedStepsChild : numberedStepsAdult

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
