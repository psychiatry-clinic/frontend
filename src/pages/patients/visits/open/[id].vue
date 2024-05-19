<script lang="ts" setup>
  const { t } = useI18n()
  import {
    Chief_complaint,
    Consultations,
    Management,
    Investigation,
    Development,
    Present_illness,
    User,
    Visit,
    Consultation,
  } from '@/utils/types'

  import { differenceInYears } from 'date-fns'

  import drawing from '../components/drawing.vue'
  import { Examination } from '@/utils/types'
  import { DDX } from '@/utils/types'
  import { Managements } from '@/utils/types'
  import { Notes } from '@/utils/types'
  import { FamilyHX } from '@/utils/types'
  import { PastHX } from '@/utils/types'
  import { PersonalHX } from '@/utils/types'
  import { SocialHX } from '@/utils/types'
  import { OccupationHX } from '@/utils/types'
  import { ForensicHX } from '@/utils/types'

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

  const patient = ref(route.params.id)
  const doctor = ref(visit.doctor?.fullName)
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
      selectedYear: [],
      selectedPeripartum: [],
    }
  )

  const patientFields = [
    {
      key: 'name',
      label: t('Patient'),
      value: visit.patient.name,
      newLine: false,
      color: 'info',
    },
    {
      key: 'dob',
      label: t('Birth Date'),
      value: removeTimeFromDate(visit.patient.dob),
      newLine: false,
      color: 'info',
    },
    {
      key: 'age',
      label: t('Age'),
      value: calculateAge(visit.patient.dob),
      newLine: false,
      color: 'info',
    },
    {
      key: 'residence',
      label: t('Residence'),
      value: visit.patient?.demographics?.[0].residence,
      newLine: false,
      color: 'info',
    },
    {
      key: 'education',
      label: t('Education'),
      value: visit.patient?.demographics?.[0].education,
      newLine: false,
      color: 'info',
    },
    {
      key: 'occupation',
      label: t('Occupation'),
      value: visit.patient?.demographics?.[0].occupation,
      newLine: false,
      color: 'info',
    },
    {
      key: 'maritalStatus',
      label: t('Marital Status'),
      value: visit.patient?.demographics?.[0].marital_status,
      newLine: false,
      color: 'success',
    },
    {
      key: 'children',
      label: t('Children'),
      value: visit.patient?.demographics?.[0].children,
      newLine: false,
      color: 'success',
    },
  ]

  const patientFather = [
    {
      key: 'father_dob',
      label: t('Birth Date'),
      value: visit.patient?.father_dob?.split('-')[0],
      newLine: true,
      color: 'warning',
    },
    {
      key: 'father_age',
      label: t('Age at Birth of Child'),
      value: visit.patient?.father_dob
        ? (calculateAge(
            new Date(visit.patient?.father_dob).toString()
          ) as string)
        : '',
      newLine: false,
      color: 'warning',
    },
    {
      key: 'father_edu',
      label: t('Education'),
      value: visit.patient?.father_edu,
      newLine: false,
      color: 'warning',
    },
    {
      key: 'father_work',
      label: t('Work'),
      value: visit.patient?.father_work,
      newLine: false,
      color: 'warning',
    },
  ]

  const patientMother = [
    {
      key: 'mother_dob',
      label: t('Birth Date'),
      value: visit.patient?.mother_dob?.split('-')[0],
      newLine: true,
      color: 'warning',
    },
    {
      key: 'mother_age',
      label: t('Age at Birth of Child'),
      value: visit.patient?.mother_dob
        ? (calculateAge(
            new Date(visit.patient?.mother_dob).toString()
          ) as string)
        : '',
      newLine: false,
      color: 'warning',
    },
    {
      key: 'mother_edu',
      label: t('Education'),
      value: visit.patient?.mother_edu,
      newLine: false,
      color: 'warning',
    },
    {
      key: 'mother_work',
      label: t('Work'),
      value: visit.patient?.mother_work,
      newLine: false,
      color: 'warning',
    },
  ]
</script>

<template>
  <div class="d-flex justify-space-between">
    <VBtn variant="flat" color="warning" class="mb-5" @click="router.back">
      {{ t('Back') }}
    </VBtn>
    <VBtn variant="outlined" color="secondary">
      {{ t('Patient') }} :
      {{ visit.patient.name }}
    </VBtn>
    <VBtn variant="outlined" color="secondary">
      Dr.
      {{ visit.doctor?.fullName }}
    </VBtn>
  </div>
  <VCard>
    <VCardItem>
      <VCardTitle>{{ t('Demographic Data') }}</VCardTitle>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol cols="12">
          <div class="patient-info">
            <span class="text-info"
              >{{ t('Dr') }}. {{ visit.doctor?.fullName }}</span
            >
          </div>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <div class="patient-info">
            <template v-for="field in patientFields" :key="field.key">
              <div v-if="field.value">
                <div class="patient-info__field">
                  <span class="me-1" :class="'text-' + field.color"
                    >{{ field.label }}:</span
                  >
                  {{ field.value }}
                </div>
              </div>
            </template>
          </div>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <div class="patient-info">
            <span class="me-4 text-info" v-if="patientFather[0].value">
              {{ t('Father') }}:
            </span>
            <template v-for="field in patientFather" :key="field.key">
              <div v-if="field.value">
                <div class="patient-info__field">
                  <span class="me-1" :class="'text-' + field.color"
                    >{{ field.label }}:</span
                  >
                  {{ field.value }}
                </div>
              </div>
            </template>
          </div>
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <div class="patient-info">
            <span class="me-4 text-info" v-if="patientMother[0].value">
              {{ t('Mother') }}:
            </span>
            <template v-for="field in patientMother" :key="field.key">
              <div v-if="field.value">
                <div class="patient-info__field">
                  <span class="me-1" :class="'text-' + field.color"
                    >{{ field.label }}:</span
                  >
                  {{ field.value }}
                </div>
              </div>
            </template>
          </div>
        </VCol>
      </VRow>
    </VCardText>

    <VCardItem>
      <VCardTitle>{{ t('History & Examination') }}</VCardTitle>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol cols="6">
          <!-- chief complaint -->
          <div
            v-if="
              visit.chief_complaint?.Complaint ||
              visit.chief_complaint?.Duration ||
              visit.chief_complaint?.Referral ||
              visit.chief_complaint?.Source
            "
          >
            <div>
              <span class="text-primary"> {{ t('Chief Complaint') }}: </span>
              {{ visit.chief_complaint?.Complaint
              }}<span v-if="visit.chief_complaint?.Duration">
                for {{ visit.chief_complaint?.Duration }}
              </span>
            </div>

            <div v-if="visit.chief_complaint?.Source">
              {{ t('Source of information') }}:
              {{ visit.chief_complaint?.Source }}
            </div>
            <div v-if="visit.chief_complaint?.Referral">
              {{ t('Referral') }}: {{ visit.chief_complaint?.Referral }}
            </div>
            <br />
          </div>

          <!-- present illness -->
          <div
            v-if="
              Object.values(
                visit.present_illness ? visit.present_illness : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">{{ t('Present Illness') }}: </span>
            <div
              v-for="key in [
                'Course',
                'Circumstances',
                'Vegetative',
                'Associated',
                'Functioning',
                'Relationships',
                'Substances',
                'Treatments',
                'ASD',
                'ADHD',
                'Speech',
                'ID',
                'Language',
                'Fluency',
                'Communication',
                'Learning',
                'Movement',
                'Coordination',
                'Risk',
                'Notes',
              ]"
            >
              <template
                v-if="visit.present_illness?.[key as keyof Present_illness]"
              >
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.present_illness[key as keyof Present_illness] }}
              </template>
            </div>
          </div>
          <br />

          <!-- consultation -->
          <div
            v-if="
              visit.consultations?.consultations?.some((obj) =>
                Object.values(obj).some((value) => value !== '')
              )
            "
          >
            <span class="text-primary">{{ t('Consultations') }}:</span>
            <div
              v-for="consultation in visit.consultations?.consultations"
              :key="consultation.branch"
            >
              <template v-for="key in ['Branch', 'Result']">
                <template v-if="consultation?.[key as keyof Consultation]">
                  <span v-if="key !== 'result'">
                    {{ consultation[key as keyof Consultation] }} -
                  </span>
                  <span v-else>
                    {{ consultation[key] }}
                  </span>
                </template>
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              Object.values(visit.examination ? visit.examination : {}).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">{{ t('Examination') }}: </span>
            <div
              v-for="key in [
                'Physical',
                'Appearance',
                'Behavior',
                'Speech',
                'Mood',
                'Affect',
                'Form',
                'Content',
                'Perception',
                'Cognition',
                'Insight',
              ]"
            >
              <template v-if="visit.examination?.[key as keyof Examination]">
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.examination[key as keyof Examination] }}
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              Object.values(visit.ddx ? visit.ddx : {}).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary"
              >{{ t('Differential Diagnosis') }}:
            </span>
            <div v-for="key in ['Differential Diagnosis']">
              <template v-if="visit.ddx?.[key as keyof DDX]">
                {{ visit.ddx[key as keyof DDX] }}
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              visit.ix?.investigations?.some((obj) =>
                Object.values(obj).some((value) => value !== '')
              )
            "
          >
            <span class="text-primary">{{ t('Investigations') }}:</span>
            <div
              v-for="investigation in visit.ix.investigations"
              :key="investigation.name"
            >
              <template v-for="key in ['Name', 'Result']">
                <template v-if="investigation[key as keyof Investigation]">
                  <span v-if="key !== 'Result'">
                    {{ investigation[key as keyof Investigation] }} -
                  </span>
                  <span v-else>
                    {{ investigation[key as keyof Investigation] }}
                  </span>
                </template>
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              visit.management?.managements?.some((obj) =>
                Object.values(obj).some((value) => value !== '')
              )
            "
          >
            <span class="text-primary">{{ t('Management') }}:</span>
            <div
              v-for="management in visit.management?.managements"
              :key="management.Name"
            >
              <template v-for="key in ['Name', 'Form', 'Dose', 'Use']">
                <template v-if="management[key as keyof Management]">
                  <span v-if="key !== 'Use'">
                    {{ management[key as keyof Management] }} -
                  </span>
                  <span v-else>
                    {{ management[key] }}
                  </span>
                </template>
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              Object.values(visit.notes ? visit.notes : {}).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">{{ t('Notes') }}: </span>
            <div v-for="key in ['Notes']">
              <template v-if="visit.notes?.[key as keyof Notes]">
                {{ visit.notes[key as keyof Notes] }}
              </template>
            </div>
          </div>
          <br />
        </VCol>

        <VCol cols="6">
          <div
            v-if="
              visit.patient.family_hx?.Similar ||
              visit.patient.family_hx?.Different ||
              visit.patient.family_hx?.Medical ||
              visit.patient.family_hx?.Other
            "
          >
            <span class="text-primary">{{ t('Family History') }}: </span>
            <div v-for="key in ['Similar', 'Different', 'Medical', 'Other']">
              <template v-if="visit.patient.family_hx[key as keyof FamilyHX]">
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.patient.family_hx[key as keyof FamilyHX] }}
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              Object.values(
                visit.patient.past_hx ? visit.patient.past_hx : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">{{ t('Past History') }}: </span>
            <div
              v-for="key in [
                'Past Psychiatric',
                'Past Medical',
                'Past Surgical',
                'Past Substance',
              ]"
            >
              <template v-if="visit.patient.past_hx?.[key as keyof PastHX]">
                {{
                  key
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                }}:
                {{ visit.patient.past_hx[key as keyof PastHX] }}
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              Object.values(
                visit.patient.personal_hx ? visit.patient.personal_hx : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">{{ t('Personal History') }}: </span>
            <div
              v-for="key in [
                'Family Background',
                'Family Atmosphere',
                'Childhood',
                'School',
                'Adolescence',
              ]"
            >
              <template
                v-if="visit.patient.personal_hx?.[key as keyof PersonalHX]"
              >
                {{
                  key
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                }}: {{ visit.patient.personal_hx[key as keyof PersonalHX] }}
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              Object.values(
                visit.patient.social_hx ? visit.patient.social_hx : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">{{ t('Social History') }}: </span>
            <div
              v-for="key in [
                'Accommodation',
                'Finances',
                'Indoor',
                'Outdoor',
                'Caregivers',
              ]"
            >
              <template v-if="visit.patient.social_hx?.[key as keyof SocialHX]">
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.patient.social_hx[key as keyof SocialHX] }}
              </template>
            </div>
          </div>
          <br />

          <div
            v-if="
              Object.values(
                visit.patient.occupation_hx ? visit.patient.occupation_hx : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">{{ t('Occupation History') }}: </span>
            <div v-for="key in ['jobs', 'unemployment']">
              <template
                v-if="visit.patient.occupation_hx?.[key as keyof OccupationHX]"
              >
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.patient.occupation_hx[key as keyof OccupationHX] }}
              </template>
            </div>
            <br />
          </div>

          <div
            v-if="
              Object.values(
                visit.patient.forensic_hx ? visit.patient.forensic_hx : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">{{ t('Forensic History') }}: </span>
            <div
              v-for="key in [
                'offense_type',
                'offense_date',
                'attitude_to_offense',
                'attitude_to_punishment',
                'prison',
              ]"
            >
              <template
                v-if="visit.patient.forensic_hx?.[key as keyof ForensicHX]"
              >
                {{
                  key
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                }}:
                {{ visit.patient.forensic_hx[key as keyof ForensicHX] }}
              </template>
            </div>
            <br />
          </div>

          <div
            v-if="
              Object.values(
                visit.patient.development?.selectedPeripartum
                  ? visit.patient.development?.selectedPeripartum
                  : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              ) && childBoolean
            "
          >
            <span class="text-primary">{{ t('Peripartum') }}:</span>
            <div
              v-for="selected in visit.patient.development?.selectedPeripartum"
              :key="selected"
            >
              <template v-if="selected">
                <span>
                  {{ selected }}
                </span>
              </template>
            </div>
          </div>
          <br />
          <div
            v-if="
              Object.values(
                visit.patient.development?.selectedYear
                  ? visit.patient.development?.selectedYear
                  : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              ) && childBoolean
            "
          >
            <span class="text-primary">{{ t('Development - Years') }}:</span>
            <div
              v-for="selected in visit.patient.development?.selectedYear"
              :key="selected"
            >
              <template v-if="selected">
                <span>
                  {{ selected }}
                </span>
              </template>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
  <VCard>
    <drawing></drawing>
  </VCard>
</template>

<style lang="scss">
  .patient-info {
    display: flex;
    flex-wrap: wrap;
  }

  .patient-info__field {
    margin-inline-end: 20px; // Adjust as needed for spacing between fields
  }
</style>
