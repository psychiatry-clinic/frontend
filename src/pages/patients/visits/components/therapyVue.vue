<script setup lang="ts">
  import { Patient, User, Visit } from '@/utils/types'

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute()

  interface Props {
    visit: Visit
    psychologist: boolean
  }

  const { visit } = defineProps<Props>()
  const isSnackbarVisible = ref(false)
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

  const therapy = ref(visit.therapy?.notes)

  function update(e: any) {
    therapy.value = e.target.value
  }

  const activeVisit = visit.active

  const requestTherapy = async (x: boolean) => {
    if (!activeVisit) return
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
    isSnackbarVisible.value = true
    if (!activeVisit) return
    const link = `/therapy/${storedUserData?.id}/${visit.id}`
    try {
      const res = await $api(link, {
        method: 'POST',
        body: {
          notes: therapy.value,
          clinic: storedUserData?.clinic,
        },
        onResponseError({ response }) {
          console.log(response._data)
        },
      })
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
        <VCard class="mb-6" title="Therapy Notes">
          <VCardText>
            <AppTextarea
              v-model="therapy"
              label=""
              auto-grow
              rows="3"
              @keyup="update"
            />
          </VCardText>

          <VDivider />

          <VCardText class="d-flex gap-4">
            <VBtn
              @click="requestTherapy(true)"
              v-if="!requested && !psychologist"
              >Request Therapy</VBtn
            >
            <VBtn
              @click="requestTherapy(false)"
              color="success"
              v-else-if="!psychologist"
              >Requested</VBtn
            >
            <VBtn @click="save">Save</VBtn>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VSnackbar v-model="isSnackbarVisible" color="success">
      Therapy Notes Was Saved Successfully
    </VSnackbar>
  </VWindowItem>
</template>
