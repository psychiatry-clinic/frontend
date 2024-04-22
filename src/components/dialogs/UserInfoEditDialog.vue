<script setup lang="ts">
import { Patient } from "@/utils/types";

interface UserData {
  id: number | null;
  fullName: string;
  firstName: string;
  lastName: string;
  company: string;
  username: string;
  role: string;
  country: string;
  contact: string;
  email: string;
  currentPlan: string;
  status: string;
  avatar: string;
  taskDone: number | null;
  projectDone: number | null;
  taxId: string;
  language: string;
}

interface Props {
  userData?: Patient;
  isDialogVisible: boolean;
}

interface Emit {
  (e: "submit", value: UserData): void;
  (e: "update:isDialogVisible", val: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  userData: () => ({
    id: 3,
    name: "Patient 3",
    dob: 2001,
    gender: "Female",
    phone: "+112345672",
  }),
});

const emit = defineEmits<Emit>();

const userData = ref<Patient>(structuredClone(toRaw(props.userData)));
const isUseAsBillingAddress = ref(false);

watch(props, () => {
  userData.value = structuredClone(toRaw(props.userData));
});

const onFormSubmit = () => {
  emit("update:isDialogVisible", false);
  emit("submit", userData.value);
};

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData));

  emit("update:isDialogVisible", false);
};

const dialogModelValueUpdate = (val: boolean) => {
  emit("update:isDialogVisible", val);
};
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-10 pa-2">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">Edit Patient Details</h4>
        <!-- <p class="text-body-1 text-center mb-6">
          Updating user details will receive a privacy audit.
        </p> -->

        <!-- 👉 Form -->
        <VForm class="mt-6" @submit.prevent="onFormSubmit">
          <VRow>
            <!-- 👉 First Name -->
            <VCol cols="12" md="6">
              <AppTextField
                v-model="userData.name"
                label="First Name"
                placeholder="John"
              />
            </VCol>

            <!-- 👉 Last Name -->
            <VCol cols="12" md="6">
              <AppTextField
                v-model="userData.gender"
                label="Gender*"
                :items="['Male', 'Female']"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- 👉 Username -->
            <VCol cols="12" md="6">
              <AppTextField
                v-model="userData.dob"
                label="Date of Birth"
                :rules="[requiredValidator]"
                placeholder=""
              />
            </VCol>

            <!-- 👉 Billing Email -->
            <VCol cols="12" md="6">
              <AppTextField
                v-model="userData.phone"
                label="Phone"
                placeholder=""
              />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
              <VBtn type="submit"> Submit </VBtn>

              <VBtn color="secondary" variant="tonal" @click="onFormReset">
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
