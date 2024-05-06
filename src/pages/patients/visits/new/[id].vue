<script lang="ts" setup>
import { User } from "@/utils/types";
import chiefComplaint from "../chiefComplaint.vue";
import ddx from "../ddx.vue";
import examinationVue from "../examination.vue";
import FamilyHx from "../familyHx.vue";
import forensicHx from "../forensicHx.vue";
import ixVue from "../ixVue.vue";
import managementVue from "../managementVue.vue";
import notesVue from "../notesVue.vue";
import occupationHx from "../occupationHx.vue";
import pastHx from "../pastHx.vue";
import personalHx from "../personalHx.vue";
import presentIllness from "../presentIllness.vue";
import socialHx from "../socialHx.vue";
import testsVue from "../testsVue.vue";
import therapyVue from "../therapyVue.vue";

const storedUserData: User | undefined = useCookie("userData").value as
  | User
  | undefined;

const router = useRouter();
const route = useRoute("patients-visits-new-id");

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
    title: "Examination",
    subtitle: "",
  },
  {
    title: "Consultations",
    subtitle:
      "Neurology , medicine, ENT, Speech, Hearing, Ophthalmology, Report",
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
    title: "Notes",
    subtitle: "",
  },
];

const numberedStepsPsychologist = [
  {
    title: "Psychometric Tests",
    subtitle: "",
  },
  {
    title: "Therapy",
    subtitle: "",
  },
];

const errors = ref<Record<string, string | undefined>>({
  message: undefined,
});

if (route.query.dob) {
  child.value = +calculateAge(+route.query.dob) < 14;
}

const numberedSteps =
  storedUserData?.role === "PSYCHOLOGIST"
    ? numberedStepsPsychologist
    : child.value
    ? numberedStepsChild
    : numberedStepsAdult;

console.log(child.value);

const currentStep = ref(0);

const patient = ref(route.params.id);
const doctor = ref(storedUserData?.id);

const prescription = ref();
const clinic = ref();
const duration = ref();

const chief_complaint = ref();
const present_illness = ref();
const family_hx = ref();

const past_hx = ref();

const social_hx = ref();
const personal_hx = ref();
const occupation_hx = ref();
const forensic_hx = ref();

const examination = ref();
const ix = ref({ investigations: [{ name: "", result: "" }] });
const management = ref({ managements: [{ name: "", form: "", dose: "" }] });

const tests = ref({ tests: [{ name: "", result: "" }] });

const differential_diagnosis = ref();

const therapy = ref();
const notes = ref();

const link = `/visits-new/${storedUserData?.id}/${route.params.id}`;

const addVisit = async () => {
  if (!storedUserData) return;

  try {
    const res = await $api(link, {
      method: "POST",
      body: {
        chief_complaint: chief_complaint.value,
        present_illness: present_illness.value,
        examination: examination.value,
        differential_diagnosis: differential_diagnosis.value?.differential,
        ix:
          ix.value.investigations[0].name === ""
            ? null
            : ix.value.investigations,
        management:
          management.value?.managements[0].name === ""
            ? null
            : management.value?.managements,
        therapy: therapy.value?.therapyNotes,
        notes: notes.value?.notes ? notes.value.notes : null,
        social_hx: social_hx.value,
        family_hx: family_hx.value,
        personal_hx: personal_hx.value,
        forensic_hx: forensic_hx.value,
        occupation_hx: occupation_hx.value,
        past_hx: past_hx.value,
      },
      onResponseError({ response }) {
        errors.value = response._data;
      },
    });
    console.log(res);
    router.push(`/patients/${route.params.id}`);
  } catch (error) {
    console.error(error);
  }
};

const submit = () => {
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
  // console.log("ix");
  // console.log(ix.value);
  // console.log("management");
  // console.log(management.value);
  // console.log("tests");
  // console.log(tests.value);
  // console.log("therapy");
  // console.log(therapy.value);
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
            <div v-if="numberedSteps === numberedStepsAdult">
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
                <notesVue v-model="notes" />
              </VWindow>
            </div>

            <div v-else-if="numberedSteps === numberedStepsChild">
              <VWindow v-model="currentStep" class="disable-tab-transition">
                <chiefComplaint v-model="chief_complaint" />
                <presentIllness v-model="present_illness" />
                <FamilyHx v-model="family_hx" />
                <pastHx v-model="past_hx" />
                <socialHx v-model="social_hx" />
                <examinationVue v-model="examination" />
                <ddx v-model="differential_diagnosis" />
                <ixVue v-model="ix" />
                <managementVue v-model="management" />
                <notesVue v-model="notes" />
              </VWindow>
            </div>

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
                @click="addVisit"
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