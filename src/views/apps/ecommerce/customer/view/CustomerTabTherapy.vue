<script setup lang="ts">
  import { Patient, User } from '@/utils/types'

  const storedUserData: User | undefined = useCookie('userData').value as
    | User
    | undefined

  const router = useRouter()
  const route = useRoute()

  interface Props {
    patientData: Patient
  }

  const { patientData } = defineProps<Props>()

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

  const therapy = ref(
    patientData?.visits?.[patientData.visits?.length - 1].therapy?.notes
  )

  function update(e: any) {
    therapy.value = e.target.value
  }

  const activeVisit = patientData.visits?.find((visit) => visit.active === true)

  const requestTherapy = async (x: boolean) => {
    if (!activeVisit) return
    const link = `/visits-edit/${storedUserData?.id}/${activeVisit?.id}/${patientData.id}`
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
    const link = `/therapy/${storedUserData?.id}/${activeVisit?.id}`
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
          <VBtn @click="requestTherapy(true)" v-if="!requested"
            >Request Therapy</VBtn
          >
          <VBtn @click="requestTherapy(false)" color="success" v-else
            >Requested</VBtn
          >
          <VBtn @click="save">Save</VBtn>
          <VBtn color="secondary" variant="tonal"> Discard </VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
