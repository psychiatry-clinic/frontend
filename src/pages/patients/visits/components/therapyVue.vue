<script setup lang="ts">
  import { User, Visit } from '@/utils/types'
  const { t } = useI18n()

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute()

  interface Props {
    visit?: Visit
    psychologist: boolean
  }

  const { visit, psychologist } = defineProps<Props>()

  const isSnackbarVisible = ref(false)
  const isErrorSnackbarVisible = ref(false)
  const requested = ref(false)

  // interface Model {
  //   therapyNotes: string | undefined;
  // }

  // const { patientData } = defineProps<Props>();

  // const model = defineModel<Model>();

  // const therapyNotes = ref(model.value?.therapyNotes);

  // function update() {
  //   model.value = {
  //     therapyNotes: therapyNotes.value,
  //   };
  // }

  const therapy = ref(visit?.therapy?.notes)

  function update(e: any) {
    therapy.value = e.target.value
  }

  const activeVisit = visit?.active

  const requestTherapy = async (x: boolean) => {
    if (!activeVisit) return
    console.log('save 1')
    const link = `/visits-edit/${storedUserData?.id}/${visit.id}/${visit.patient.id}`
    try {
      const res = await $api(link, {
        method: 'POST',
        body: {
          therapyRequest: x,
        },
        onResponseError({ response }) {
          console.log(response._data)
        },
      })
      if (res === 'OK') {
        requested.value = x
      }
      // router.push(`/patients/${route.params.id}`)
    } catch (error) {
      console.error(error)
    }
  }

  const save = async () => {
    if (!activeVisit) return
    const link = `/therapy/${storedUserData?.id}/${visit.id}`
    try {
      const res = await $api(link, {
        method: 'POST',
        body: {
          notes: therapy.value,
          clinicId: storedUserData?.clinic.id,
        },
        onResponseError({ response }) {
          console.log(response._data)
        },
      })
      if (res.success) {
        isSnackbarVisible.value = true
      } else {
        isErrorSnackbarVisible.value = true
      }
      // router.push(`/patients/${route.params.id}`)
    } catch (error) {
      console.error(error)
    }
  }
</script>

<template>
  <VWindowItem>
    <VRow>
      <VCol cols="12">
        <VCard v-if="!visit">
          <VCardText>
            <h6 class="text-h6">
              {{
                t(
                  'Save this visit and from `Edit Visit` request a therapy session'
                )
              }}
            </h6>
          </VCardText>
        </VCard>
        <VCard class="mb-6" title="Therapy Notes" v-else-if="psychologist">
          <VCardText>
            <AppTextarea
              v-model="therapy"
              label=""
              auto-grow
              rows="3"
              @keyup="update"
            />
          </VCardText>
          <VCardText>
            <VBtn @click="save">{{ t('Save') }}</VBtn>
          </VCardText>
          <VDivider />
        </VCard>
        <VCard v-else>
          <VCardText class="d-flex gap-4">
            <VBtn @click="requestTherapy(true)" v-if="!requested">{{
              t('Request Therapy Session')
            }}</VBtn>
            <VBtn @click="requestTherapy(false)" color="success" v-else>{{
              t('Requested')
            }}</VBtn>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VSnackbar v-model="isSnackbarVisible" color="success">
      {{ t(' Therapy Notes Was Saved Successfully') }}
    </VSnackbar>
    <VSnackbar v-model="isErrorSnackbarVisible" color="success">
      {{ t('Error Saving Therapy Notes') }}
    </VSnackbar>
  </VWindowItem>
</template>
