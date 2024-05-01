<script setup lang="ts">
import ECommerceAddCustomerDrawer from "@/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue";
import CustomerBioPanel from "@/views/apps/ecommerce/customer/view/CustomerBioPanel.vue";
import CustomerTabAddressAndBilling from "@/views/apps/ecommerce/customer/view/CustomerTabAddressAndBilling.vue";
import CustomerTabNotification from "@/views/apps/ecommerce/customer/view/CustomerTabNotification.vue";
import CustomerTabOverview from "@/views/apps/ecommerce/customer/view/CustomerTabOverview.vue";
import CustomerTabSecurity from "@/views/apps/ecommerce/customer/view/CustomerTabSecurity.vue";
import type { Customer } from "@db/apps/ecommerce/types";
import type { Patient, User, Prescription, Test, Visit } from "@/utils/types";
import { RouteParams } from "vue-router";

const route = useRoute();

const routeParams = route.params as RouteParams;

const storedUserData: User | undefined = useCookie("userData").value as
  | User
  | undefined;

const patientData = ref<Patient>();
const userTab = ref(null);

const tabs = [
  { title: "Visits", icon: "tabler-file" },
  { title: "Tests", icon: "tabler-test" },
  { title: "Address & Billing", icon: "tabler-map-pin" },
  { title: "Notifications", icon: "tabler-bell" },
];

const { data } = await useApi<any>(
  `/patients/${storedUserData?.id}/${routeParams.id}`
);

patientData.value = {
  id: 3,
  name: "علي عباس محمد",
  dob: 2001,
  gender: "male",
  avatar:
    "https://img.freepik.com/free-photo/smiling-little-boy-face-portrait-close-up_53876-153276.jpg?w=826&t=st=1714544741~exp=1714545341~hmac=18e74a8c3f5c8020dc407937b81c0c4adeb05eeb872cf59a6055d71cd3202576",
  phone: "+9647812134488",
  familyHx: "negative",
  father_dob: 1990,
  mother_dob: 1999,
  father_age: 25,
  mother_age: 24,
  father_edu: "primary",
  mother_edu: "primary",
  siblings: 3,
  order: 1,
  father_work: "worker",
  mother_work: "house wife",
  related: true,
  notes: "",
  createdAt: "2024-04-06T18:07:55.875Z",
  updatedAt: "2024-04-06T18:07:55.875Z",
  visits: [
    {
      id: 22,
      patientId: 3,
      doctorId: 2,
      clinic: "BaghdadTeachingHospital",
      duration: 23,
      chief_complaint: "Chief complaint 22",
      present_illness: "Present illness 22",
      suicide: null,
      family_hx: null,
      past_psychiatric_hx: null,
      past_medical_hx: null,
      forensic_hx: null,
      social_hx: null,
      drug_hx: null,
      substance: null,
      personal_hx: null,
      appearance: null,
      behavior: null,
      speech: null,
      mood: null,
      thought_form: null,
      thought_content: null,
      perception: null,
      cognitive_state: null,
      differential_diagnosis: null,
      management: null,
      prescriptionId: null,
      notes: null,
      insight: null,
      createdAt: "2024-04-06T18:07:55.942Z",
      updatedAt: "2024-04-06T18:07:55.942Z",
    },
    {
      id: 23,
      patientId: 3,
      doctorId: 2,
      clinic: "BaghdadTeachingHospital",
      duration: 23,
      chief_complaint: "Chief complaint 22",
      present_illness: "Present illness 22",
      suicide: null,
      family_hx: null,
      past_psychiatric_hx: null,
      past_medical_hx: null,
      forensic_hx: null,
      social_hx: null,
      drug_hx: null,
      substance: null,
      personal_hx: null,
      appearance: null,
      behavior: null,
      speech: null,
      mood: null,
      thought_form: null,
      thought_content: null,
      perception: null,
      cognitive_state: null,
      differential_diagnosis: null,
      management: null,
      prescriptionId: null,
      notes: null,
      insight: null,
      createdAt: "2024-04-08T18:07:55.942Z",
      updatedAt: "2024-04-08T18:07:55.942Z",
    },
  ],
  demographics: [
    {
      id: 1,
      marital_status: "married",
      children: "2",
      residence: "بغداد",
      education: "primary",
      occupation: "worker",
      createdAt: new Date("2024-04-08T15:13:01.409Z"),
      updatedAt: new Date("2024-04-08T15:13:01.409Z"),
    },
  ],
  prescriptions: [
    {
      id: 10,
      patientId: 3,
      doctorId: 4,
      dosage: "Dosage for Prescription 10",
      instructions: "Instructions for Prescription 10",
      createdAt: "2024-04-06T18:07:56.042Z",
      updatedAt: "2024-04-06T18:07:56.042Z",
    },
    {
      id: 19,
      patientId: 3,
      doctorId: 8,
      dosage: "Dosage for Prescription 19",
      instructions: "Instructions for Prescription 19",
      createdAt: "2024-04-06T18:07:56.061Z",
      updatedAt: "2024-04-06T18:07:56.061Z",
    },
  ],
  tests: [
    {
      id: 23,
      name: "Test 23",
      type: "Urine Test",
      range: "Range for Test 23",
      value: "Value for Test 23",
      patientId: 3,
      visitId: 30,
      createdAt: "2024-04-06T18:07:56.010Z",
      updatedAt: "2024-04-06T18:07:56.010Z",
    },
    {
      id: 30,
      name: "Test 30",
      type: "X-Ray",
      range: "Range for Test 30",
      value: "Value for Test 30",
      patientId: 3,
      visitId: 9,
      createdAt: "2024-04-06T18:07:56.023Z",
      updatedAt: "2024-04-06T18:07:56.023Z",
    },
  ],
};

// if (data.value)
patientData.value = patientData.value;

const isAddCustomerDrawerOpen = ref(false);
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div
      class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"
    >
      <div>
        <h4 class="text-h4 mb-1">Patient ID #{{ routeParams.id }}</h4>
        <div class="text-body-1">
          First visit:
          {{
            new Date(patientData?.createdAt as string).toLocaleDateString(
              "en-GB"
            )
          }}
        </div>
      </div>
      <!-- <div class="d-flex gap-4">
        <VBtn
          variant="tonal"
          color="error"
        >
          Delete Patient
        </VBtn>
      </div> -->
    </div>
    <!-- 👉 Customer Profile  -->
    <VRow v-if="patientData">
      <VCol v-if="patientData" cols="12" md="5" lg="4">
        <CustomerBioPanel :patient-data="patientData" />
      </VCol>
      <VCol cols="12" md="7" lg="8">
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-3 disable-tab-transition"
        >
          <VTab v-for="tab in tabs" :key="tab.title">
            <VIcon size="20" start :icon="tab.icon" />
            {{ tab.title }}
          </VTab>
        </VTabs>
        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <CustomerTabOverview :visits="patientData.visits" />
          </VWindowItem>
          <VWindowItem>
            <CustomerTabSecurity />
          </VWindowItem>
          <VWindowItem>
            <CustomerTabAddressAndBilling />
          </VWindowItem>
          <VWindowItem>
            <CustomerTabNotification />
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
    <div v-else>
      <VAlert type="error" variant="tonal">
        patient with ID {{ routeParams.id }} not found!
      </VAlert>
    </div>
    <!-- <ECommerceAddCustomerDrawer v-model:is-drawer-open="isAddCustomerDrawerOpen" /> -->
  </div>
</template>
