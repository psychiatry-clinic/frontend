<script lang="ts" setup>
import chiefComplaint from "./chiefComplaint.vue";
import ddx from "./ddx.vue";
import examinationVue from "./examination.vue";
import FamilyHx from "./familyHx.vue";
import forensicHx from "./forensicHx.vue";
import ixVue from "./ixVue.vue";
import occupationHx from "./occupationHx.vue";
import pastHx from "./pastHx.vue";
import personalHx from "./personalHx.vue";
import presentIllness from "./presentIllness.vue";
import socialHx from "./socialHx.vue";
import managementVue from "./managementVue.vue";
import testsVue from "./testsVue.vue";
import therapyVue from "./therapyVue.vue";
import notesVue from "./notesVue.vue";

const router = useRouter();
const route = useRoute();
const child = ref(false);

const numberedStepsAdult = [
  {
    title: "Chief Complaint",
    subtitle: "",
  },
  {
    title: "Present Illness",
    subtitle: "",
  },
  {
    title: "Family History",
    subtitle: "",
  },
  {
    title: "Past History",
    subtitle: "",
  },
  {
    title: "Social History",
    subtitle: "",
  },
  {
    title: "Personal History",
    subtitle: "",
  },
  {
    title: "Occupational History",
    subtitle: "",
  },
  {
    title: "Forensic History",
    subtitle: "",
  },
  {
    title: "Examination",
    subtitle: "",
  },
  {
    title: "Differential Diagnosis",
    subtitle: "",
  },
  {
    title: "Investigation",
    subtitle: "",
  },
  {
    title: "Management",
    subtitle: "",
  },
  {
    title: "Psychometric Tests",
    subtitle: "",
  },
  {
    title: "Therapy",
    subtitle: "",
  },
  {
    title: "Notes",
    subtitle: "",
  },
];

const numberedStepsChild = [
  {
    title: "Chief Complaint",
    subtitle: "",
  },
  {
    title: "Present Illness",
    subtitle: "",
  },
  {
    title: "Family History",
    subtitle: "",
  },
  {
    title: "Past History",
    subtitle: "",
  },
  {
    title: "Social History",
    subtitle: "",
  },
  {
    title: "Personal History",
    subtitle: "",
  },
  {
    title: "Drug & Substance",
    subtitle: "",
  },
  {
    title: "Mental State Examination",
    subtitle: "",
  },
  {
    title: "Differential Diagnosis",
    subtitle: "",
  },
  {
    title: "Management",
    subtitle: "",
  },
  {
    title: "Tests",
    subtitle: "",
  },
  {
    title: "Notes",
    subtitle: "",
  },
  {
    title: "Therapy",
    subtitle: "",
  },
];

const numberedSteps = child.value ? numberedStepsChild : numberedStepsAdult;
console.log(child.value);

const currentStep = ref(14);

const patient = ref();
const doctor = ref();
const prescription = ref();
const clinic = ref();
const duration = ref();

const chief_complaint = ref();
const present_illness = ref();
const family_hx = ref();

const past_hx = ref();
const past_psychiatric_hx = ref();
const past_medical_hx = ref();

const social_hx = ref();
const personal_hx = ref();
const occupation_hx = ref();
const forensic_hx = ref();

const suicide = ref();
const drug_hx = ref();
const substance = ref();

const examination = ref();
const ix = ref();
const differential_diagnosis = ref();
const management = ref();

const tests = ref();
const therapy = ref();
const notes = ref();

const logging = () => {
  // console.log("chief_complaint");
  // console.log(chief_complaint.value);
  // console.log("present_illness");
  // console.log(present_illness.value);
  // console.log("family_hx");
  // console.log(family_hx.value);
  // console.log("past_hx");
  // console.log(past_hx.value);
  // console.log("social_hx");
  // console.log(social_hx.value);
  // console.log("personal_hx");
  // console.log(personal_hx.value);
  // console.log("occupation_hx");
  // console.log(occupation_hx.value);
  // console.log("forensic_hx");
  // console.log(forensic_hx.value);
  // console.log("examination");
  // console.log(examination.value);
  // console.log("differential_diagnosis");
  // console.log(differential_diagnosis.value);
  console.log("ix");
  console.log(ix.value);
  console.log("management");
  console.log(management.value);
  console.log("tests");
  console.log(tests.value);
  console.log("therapy");
  console.log(therapy.value);
  // console.log("notes");
  // console.log(notes.value);
};
</script>

<template>
  <VBtn variant="outlined" class="mb-5" @click="router.back"> Back </VBtn>

  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="3"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
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
      <VCol cols="12" md="8">
        <VCardText>
          <VForm>
            <VWindow v-model="currentStep" class="disable-tab-transition">
              <chiefComplaint v-model="chief_complaint" />
              <presentIllness v-model="present_illness" />
              <FamilyHx v-model="family_hx" />
              <pastHx v-model="past_hx" />
              <socialHx v-model="social_hx" />
              <personalHx v-model="personal_hx" />
              <occupationHx v-model="occupation_hx" />
              <forensicHx v-model="forensic_hx" />
              <examinationVue v-model="examination" />
              <ddx v-model="differential_diagnosis" />
              <ixVue v-model="ix" />
              <managementVue v-model="management" />
              <testsVue v-model="tests" />
              <therapyVue v-model="therapy" />
              <notesVue v-model="notes" />
            </VWindow>

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

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="logging"
              >
                submit
              </VBtn>

              <VBtn v-else @click="currentStep++">
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
