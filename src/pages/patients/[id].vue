<script setup lang="ts">
import ECommerceAddCustomerDrawer from '@/views/apps/ecommerce/ECommerceAddCustomerDrawer.vue'
import CustomerBioPanel from '@/views/apps/ecommerce/customer/view/CustomerBioPanel.vue'
import CustomerTabAddressAndBilling from '@/views/apps/ecommerce/customer/view/CustomerTabAddressAndBilling.vue'
import CustomerTabNotification from '@/views/apps/ecommerce/customer/view/CustomerTabNotification.vue'
import CustomerTabOverview from '@/views/apps/ecommerce/customer/view/CustomerTabOverview.vue'
import CustomerTabSecurity from '@/views/apps/ecommerce/customer/view/CustomerTabSecurity.vue'
import type { Customer } from '@db/apps/ecommerce/types'
import type { Patient, User, Prescription, Test, Visit } from '@/utils/types'

const route = useRoute('apps-ecommerce-customer-details-id')
const storedUserData: User | undefined = useCookie('userData').value as User | undefined

const customerData = ref<Customer>()
const customer = ref<Customer>()
const userTab = ref(null)
const patientData = ref<Patient>()

const tabs = [
  { title: 'Overview', icon: 'tabler-user' },
  { title: 'Security', icon: 'tabler-lock' },
  { title: 'Address & Billing', icon: 'tabler-map-pin' },
  { title: 'Notifications', icon: 'tabler-bell' },
]

const { data } = await useApi<any>(`/patients/${storedUserData?.id}/${route.params.id}`)

customer.value = {"id":100,
"customer":"Elly Fossick",
"customerId":478426,
"email":"mfossick2r@hatena.ne.jp",
"country":"China",
"countryFlag":"/src/assets/images/icons/countries/cn.png",
"countryCode":"jp",
"order":181,
"totalSpent":2838.35,
"avatar":"/src/assets/images/avatars/avatar-15.png",
"status":"Active",
"contact":"+1 (234) 567 890"}


patientData.value = {
    "id": 3,
    "name": "Patient 3",
    "dob": 2001,
    "gender": "Female",
    "phone": "+112345672",
    "createdAt": "2024-04-06T18:07:55.875Z",
    "updatedAt": "2024-04-06T18:07:55.875Z",
    "visits": [
        {
            "id": 22,
            "patientId": 3,
            "doctorId": 2,
            "clinic": "BaghdadTeachingHospital",
            "duration": 23,
            "chief_complaint": "Chief complaint 22",
            "present_illness": "Present illness 22",
            "suicide": null,
            "family_hx": null,
            "past_psychiatric_hx": null,
            "past_medical_hx": null,
            "forensic_hx": null,
            "social_hx": null,
            "drug_hx": null,
            "substance": null,
            "personal_hx": null,
            "appearance": null,
            "behavior": null,
            "speech": null,
            "mood": null,
            "thought_form": null,
            "thought_content": null,
            "perception": null,
            "cognitive_state": null,
            "differential_diagnosis": null,
            "management": null,
            "prescriptionId": null,
            "notes": null,
            "insight": null,
            "createdAt": "2024-04-06T18:07:55.942Z",
            "updatedAt": "2024-04-06T18:07:55.942Z"
        }
    ],
    "demographics": [],
    "prescriptions": [
        {
            "id": 10,
            "patientId": 3,
            "doctorId": 4,
            "dosage": "Dosage for Prescription 10",
            "instructions": "Instructions for Prescription 10",
            "createdAt": "2024-04-06T18:07:56.042Z",
            "updatedAt": "2024-04-06T18:07:56.042Z"
        },
        {
            "id": 19,
            "patientId": 3,
            "doctorId": 8,
            "dosage": "Dosage for Prescription 19",
            "instructions": "Instructions for Prescription 19",
            "createdAt": "2024-04-06T18:07:56.061Z",
            "updatedAt": "2024-04-06T18:07:56.061Z"
        }
    ],
    "tests": [
        {
            "id": 23,
            "name": "Test 23",
            "type": "Urine Test",
            "range": "Range for Test 23",
            "value": "Value for Test 23",
            "patientId": 3,
            "visitId": 30,
            "createdAt": "2024-04-06T18:07:56.010Z",
            "updatedAt": "2024-04-06T18:07:56.010Z"
        },
        {
            "id": 30,
            "name": "Test 30",
            "type": "X-Ray",
            "range": "Range for Test 30",
            "value": "Value for Test 30",
            "patientId": 3,
            "visitId": 9,
            "createdAt": "2024-04-06T18:07:56.023Z",
            "updatedAt": "2024-04-06T18:07:56.023Z"
        }
    ]
}

// if (data.value)
  customerData.value = customer.value

const isAddCustomerDrawerOpen = ref(false)
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6">
      <div>
        <h4 class="text-h4 mb-1">
          Patient ID #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          First visit: {{ new Date(patientData?.createdAt).toLocaleDateString('en-GB') }}
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
    <VRow v-if="customerData">
      <VCol
        v-if="customerData"
        cols="12"
        md="5"
        lg="4"
      >
        <CustomerBioPanel :customer-data="customerData" />
      </VCol>
      <VCol
        cols="12"
        md="7"
        lg="8"
      >
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-3 disable-tab-transition"
        >
          <VTab
            v-for="tab in tabs"
            :key="tab.title"
          >
            <VIcon
              size="20"
              start
              :icon="tab.icon"
            />
            {{ tab.title }}
          </VTab>
        </VTabs>
        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <CustomerTabOverview />
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
      <VAlert
        type="error"
        variant="tonal"
      >
        patient with ID  {{ route.params.id }} not found!
      </VAlert>
    </div>
    <!-- <ECommerceAddCustomerDrawer v-model:is-drawer-open="isAddCustomerDrawerOpen" /> -->
  </div>
</template>
