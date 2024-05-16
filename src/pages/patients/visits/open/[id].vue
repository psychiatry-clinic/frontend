<script lang="ts" setup>
  const { t } = useI18n()
  import {
    Chief_complaint,
    Development,
    Present_illness,
    User,
    Visit,
  } from '@/utils/types'
  import { differenceInYears } from 'date-fns'

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
  const doctor = ref(visit.doctor?.name)
  const prescription = ref()
  const clinic = ref(visit.clinic)
  const duration = ref()

  const chief_complaint = ref<Chief_complaint>(
    visit.chief_complaint || { complaint: '' }
  )
  const present_illness = ref<Present_illness>(
    visit.present_illness || { notes: '' }
  )
  const development = ref<Development>(
    visit.patient.development || {
      selectedYear: [''],
      selectedPeripartum: [''],
    }
  )

  const patientFields = [
    {
      key: 'name',
      label: 'Patient',
      value: visit.patient.name,
      newLine: false,
      color: 'info',
    },
    {
      key: 'dob',
      label: 'Birth Date',
      value: removeTimeFromDate(visit.patient.dob),
      newLine: false,
      color: 'info',
    },
    {
      key: 'age',
      label: 'Age',
      value: calculateAge(visit.patient.dob),
      newLine: false,
      color: 'info',
    },
    {
      key: 'residence',
      label: 'Residence',
      value: visit.patient?.demographics?.[0].residence,
      newLine: false,
      color: 'info',
    },
    {
      key: 'education',
      label: 'Education',
      value: visit.patient?.demographics?.[0].education,
      newLine: false,
      color: 'info',
    },
    {
      key: 'occupation',
      label: 'Occupation',
      value: visit.patient?.demographics?.[0].occupation,
      newLine: false,
      color: 'info',
    },
    {
      key: 'maritalStatus',
      label: 'Marital Status',
      value: visit.patient?.demographics?.[0].marital_status,
      newLine: false,
      color: 'success',
    },
    {
      key: 'children',
      label: 'Children',
      value: visit.patient?.demographics?.[0].children,
      newLine: false,
      color: 'success',
    },
  ]

  const patientFather = [
    {
      key: 'father_dob',
      label: 'Birth Date',
      value: visit.patient?.father_dob?.split('-')[0],
      newLine: true,
      color: 'warning',
    },
    {
      key: 'father_age',
      label: 'Age at Birth of Child',
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
      label: 'Education',
      value: visit.patient?.father_edu,
      newLine: false,
      color: 'warning',
    },
    {
      key: 'father_work',
      label: 'Work',
      value: visit.patient?.father_work,
      newLine: false,
      color: 'warning',
    },
  ]

  const patientMother = [
    {
      key: 'mother_dob',
      label: 'Birth Date',
      value: visit.patient?.mother_dob?.split('-')[0],
      newLine: true,
      color: 'warning',
    },
    {
      key: 'mother_age',
      label: 'Age at Birth of Child',
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
      label: 'Education',
      value: visit.patient?.mother_edu,
      newLine: false,
      color: 'warning',
    },
    {
      key: 'mother_work',
      label: 'Work',
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
      Patient :
      {{ visit.patient.name }}
    </VBtn>
    <VBtn variant="outlined" color="secondary">
      Dr.
      {{ visit.doctor?.name }}
    </VBtn>
  </div>
  <VCard>
    <VCardItem>
      <VCardTitle>Demographic Data</VCardTitle>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol cols="12">
          <div class="patient-info">
            <span class="text-info">Dr. {{ visit.doctor?.fullName }}</span>
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
              Father:
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
              Mother:
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
      <VCardTitle>History & Examination</VCardTitle>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol cols="6">
          <!-- chief complaint -->
          <div
            v-if="
              visit.chief_complaint?.complaint ||
              visit.chief_complaint?.duration ||
              visit.chief_complaint?.referral ||
              visit.chief_complaint?.source
            "
          >
            <div>
              <span class="text-primary"> Chief complaint: </span>
              {{ visit.chief_complaint?.complaint
              }}<span v-if="visit.chief_complaint?.duration">
                for {{ visit.chief_complaint?.duration }}
              </span>
            </div>

            <div v-if="visit.chief_complaint?.source">
              Source of information: {{ visit.chief_complaint?.source }}
            </div>
            <div v-if="visit.chief_complaint?.referral">
              Referral: {{ visit.chief_complaint?.referral }}
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
            <span class="text-primary">Present Illness: </span>
            <div
              v-for="key in [
                'course',
                'circumstances',
                'vegetative',
                'associated',
                'functioning',
                'relationships',
                'substances',
                'treatments',
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
                'risk',
                'notes',
              ]"
            >
              <template v-if="visit.present_illness[key]">
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.present_illness[key] }}
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
            <span class="text-primary">Consultations:</span>
            <div
              v-for="consultation in visit.consultations?.consultations"
              :key="consultation.branch"
            >
              <template v-for="key in ['branch', 'result']">
                <template v-if="consultation[key]">
                  <span v-if="key !== 'result'">
                    {{ consultation[key] }} -
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
            <span class="text-primary">Examination: </span>
            <div
              v-for="key in [
                'physical',
                'appearance',
                'behavior',
                'speech',
                'mood',
                'affect',
                'form',
                'content',
                'perception',
                'cognition',
                'insight',
              ]"
            >
              <template v-if="visit.examination[key]">
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.examination[key] }}
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
            <span class="text-primary">Differential Diagnosis: </span>
            <div v-for="key in ['differential']">
              <template v-if="visit.ddx[key]">
                {{ visit.ddx[key] }}
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
            <span class="text-primary">Investigations:</span>
            <div
              v-for="investigation in visit.ix.investigations"
              :key="investigation.name"
            >
              <template v-for="key in ['name', 'result']">
                <template v-if="investigation[key]">
                  <span v-if="key !== 'result'">
                    {{ investigation[key] }} -
                  </span>
                  <span v-else>
                    {{ investigation[key] }}
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
            <span class="text-primary">Managements:</span>
            <div
              v-for="management in visit.management?.managements"
              :key="management.name"
            >
              <template v-for="key in ['name', 'form', 'dose', 'use']">
                <template v-if="management[key]">
                  <span v-if="key !== 'use'"> {{ management[key] }} - </span>
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
            <span class="text-primary">Notes: </span>
            <div v-for="key in ['notes']">
              <template v-if="visit.notes[key]">
                {{ visit.notes[key] }}
              </template>
            </div>
          </div>
          <br />
        </VCol>

        <VCol cols="6">
          <div
            v-if="
              Object.values(
                visit.patient.family_hx ? visit.patient.family_hx : {}
              ).some(
                (value) => value !== undefined && value !== null && value !== ''
              )
            "
          >
            <span class="text-primary">Family History: </span>
            <div
              v-for="key in [
                'past psychiatric',
                'different',
                'medical',
                'other',
              ]"
            >
              <template v-if="visit.patient.family_hx[key]">
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.patient.family_hx[key] }}
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
            <span class="text-primary">Past History: </span>
            <div
              v-for="key in [
                'past_psychiatric',
                'past_medical',
                'past_surgical',
                'past_substance',
              ]"
            >
              <template v-if="visit.patient.past_hx[key]">
                {{
                  key
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                }}:
                {{ visit.patient.past_hx[key] }}
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
            <span class="text-primary">Personal History: </span>
            <div
              v-for="key in [
                'family_background',
                'family_atmosphere',
                'childhood',
                'school',
                'adolescence',
              ]"
            >
              <template v-if="visit.patient.personal_hx[key]">
                {{
                  key
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                }}: {{ visit.patient.personal_hx[key] }}
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
            <span class="text-primary">Social History: </span>
            <div
              v-for="key in [
                'accommodation',
                'finances',
                'indoor',
                'outdoor',
                'caregivers',
              ]"
            >
              <template v-if="visit.patient.social_hx[key]">
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.patient.social_hx[key] }}
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
            <span class="text-primary">Occupation History: </span>
            <div v-for="key in ['jobs', 'unemployment']">
              <template v-if="visit.patient.occupation_hx[key]">
                {{ key.charAt(0).toUpperCase() + key.slice(1) }}:
                {{ visit.patient.occupation_hx[key] }}
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
            <span class="text-primary">Forensic History: </span>
            <div
              v-for="key in [
                'offense_type',
                'offense_date',
                'attitude_to_offense',
                'attitude_to_punishment',
                'prison',
              ]"
            >
              <template v-if="visit.patient.forensic_hx[key]">
                {{
                  key
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')
                }}:
                {{ visit.patient.forensic_hx[key] }}
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
            <span class="text-primary">Peripartum:</span>
            <div
              v-for="selected in visit.patient.development.selectedPeripartum"
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
            <span class="text-primary">Development - Years:</span>
            <div
              v-for="selected in visit.patient.development.selectedYear"
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
