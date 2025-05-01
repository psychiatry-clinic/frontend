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
  const route = useRoute('patients-visits-edit-id') as any

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

  // Generate case summary
  const generateCaseSummary = () => {
    const summaryParts: string[] = []

    // Add patient information
    summaryParts.push(
      `Patient: ${visit.patient.name}, Age: ${calculateAge(visit.patient.dob)}`
    )
    if (visit.patient?.demographics?.[0]) {
      const demo = visit.patient.demographics[0]
      summaryParts.push(
        `Residence: ${demo.residence}, Education: ${demo.education}, Occupation: ${demo.occupation}`
      )
    }

    // Add chief complaint
    if (visit.chief_complaint) {
      const cc = visit.chief_complaint
      const ccParts = []
      if (cc.Complaint) ccParts.push(cc.Complaint)
      if (cc.Duration) ccParts.push(`for ${cc.Duration}`)
      if (cc.Source) ccParts.push(`Source: ${cc.Source}`)
      if (cc.Referral) ccParts.push(`Referral: ${cc.Referral}`)
      if (ccParts.length)
        summaryParts.push(`Chief Complaint: ${ccParts.join(', ')}`)
    }

    // Add present illness
    if (visit.present_illness) {
      const pi = visit.present_illness
      const piParts = []
      for (const [key, value] of Object.entries(pi)) {
        if (value) piParts.push(`${key}: ${value}`)
      }
      if (piParts.length)
        summaryParts.push(`Present Illness: ${piParts.join('; ')}`)
    }

    // Add consultations
    if (visit.consultations?.consultations?.length) {
      const consults = visit.consultations.consultations.map(
        (c) => `${c.branch} - ${c.result}`
      )
      summaryParts.push(`Consultations: ${consults.join('; ')}`)
    }

    // Add examination
    if (visit.examination) {
      const examParts = []
      for (const [key, value] of Object.entries(visit.examination)) {
        if (value) examParts.push(`${key}: ${value}`)
      }
      if (examParts.length)
        summaryParts.push(`Examination: ${examParts.join('; ')}`)
    }

    // Add differential diagnosis
    if (visit.ddx?.['Differential Diagnosis']) {
      summaryParts.push(
        `Differential Diagnosis: ${visit.ddx['Differential Diagnosis']}`
      )
    }

    // Add investigations
    if (visit.ix?.investigations?.length) {
      const invs = visit.ix.investigations.map((i) => `${i.name} - ${i.result}`)
      summaryParts.push(`Investigations: ${invs.join('; ')}`)
    }

    // Add management
    if (visit.management?.managements?.length) {
      const mgmt = visit.management.managements.map(
        (m) => `${m.Name} ${m.Form} ${m.Dose} - ${m.Use}`
      )
      summaryParts.push(`Management: ${mgmt.join('; ')}`)
    }

    // Add notes
    if (visit.notes?.Notes) {
      summaryParts.push(`Notes: ${visit.notes.Notes}`)
    }

    // Add family history
    if (visit.patient.family_hx) {
      const fhParts = []
      for (const [key, value] of Object.entries(visit.patient.family_hx)) {
        if (value) fhParts.push(`${key}: ${value}`)
      }
      if (fhParts.length)
        summaryParts.push(`Family History: ${fhParts.join('; ')}`)
    }

    // Add past history
    if (visit.patient.past_hx) {
      const phParts = []
      for (const [key, value] of Object.entries(visit.patient.past_hx)) {
        if (value) phParts.push(`${key}: ${value}`)
      }
      if (phParts.length)
        summaryParts.push(`Past History: ${phParts.join('; ')}`)
    }

    // Add personal history
    if (visit.patient.personal_hx) {
      const persParts = []
      for (const [key, value] of Object.entries(visit.patient.personal_hx)) {
        if (value) persParts.push(`${key}: ${value}`)
      }
      if (persParts.length)
        summaryParts.push(`Personal History: ${persParts.join('; ')}`)
    }

    // Add social history
    if (visit.patient.social_hx) {
      const socParts = []
      for (const [key, value] of Object.entries(visit.patient.social_hx)) {
        if (value) socParts.push(`${key}: ${value}`)
      }
      if (socParts.length)
        summaryParts.push(`Social History: ${socParts.join('; ')}`)
    }

    // Add occupation history
    if (visit.patient.occupation_hx) {
      const occParts = []
      for (const [key, value] of Object.entries(visit.patient.occupation_hx)) {
        if (value) occParts.push(`${key}: ${value}`)
      }
      if (occParts.length)
        summaryParts.push(`Occupation History: ${occParts.join('; ')}`)
    }

    // Add forensic history
    if (visit.patient.forensic_hx) {
      const forenParts = []
      for (const [key, value] of Object.entries(visit.patient.forensic_hx)) {
        if (value) forenParts.push(`${key}: ${value}`)
      }
      if (forenParts.length)
        summaryParts.push(`Forensic History: ${forenParts.join('; ')}`)
    }

    // Add development history if child
    if (childBoolean) {
      if (visit.patient.development?.selectedPeripartum?.length) {
        summaryParts.push(
          `Peripartum: ${visit.patient.development.selectedPeripartum.join(
            ', '
          )}`
        )
      }
      if (visit.patient.development?.selectedYear?.length) {
        summaryParts.push(
          `Development Years: ${visit.patient.development.selectedYear.join(
            ', '
          )}`
        )
      }
    }

    return summaryParts.join('\n\n')
  }

  const caseSummary = ref(generateCaseSummary())
</script>

<template>
  <div class="d-flex justify-space-between">
    <VBtn variant="flat" color="warning" class="mb-5" @click="router.back">
      {{ t('Back') }}
    </VBtn>
    <VBtn variant="outlined" color="secondary">
      {{ t('Patient') }} : {{ visit.patient.name }}
    </VBtn>
    <VBtn variant="outlined" color="secondary">
      Dr. {{ visit.doctor?.fullName }}
    </VBtn>
  </div>

  <VCard class="mb-4">
    <VCardItem>
      <VCardTitle>{{ t('Case Summary') }}</VCardTitle>
    </VCardItem>
    <VCardText>
      <pre class="case-summary">{{ caseSummary }}</pre>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
  .patient-info {
    display: flex;
    flex-wrap: wrap;
  }

  .patient-info__field {
    margin-inline-end: 20px;
  }

  .case-summary {
    white-space: pre-wrap;
    font-family: inherit;
    line-height: 1.5;
  }
</style>
