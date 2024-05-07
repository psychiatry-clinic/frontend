<script setup lang="ts">
import { Patient, Demographics } from "@/utils/types";

interface Props {
  userData?: Patient;
  isDialogVisible: boolean;
}

interface Emit {
  (e: "submit", value: Patient): void;
  (e: "update:isDialogVisible", val: boolean): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Emit>();

const userData = ref<Patient>(props.userData as Patient);

watch(props, () => {
  userData.value = props.userData as Patient;
});

const onFormReset = () => {
  userData.value = props.userData as Patient;

  emit("update:isDialogVisible", false);
};

const selectedRadio = ref();
const age = +calculateAge(userData.value.dob.toString());
selectedRadio.value = age > 18 ? "adult" : "child";

const dialogModelValueUpdate = (val: boolean) => {
  emit("update:isDialogVisible", val);
};

const name = ref(userData.value.name);
const dob = ref(userData.value.dob);
const gender = ref(userData.value.gender);
const phone = ref(userData.value.phone);
const father_dob = ref(userData.value.father_dob);
const father_edu = ref(userData.value.father_edu);
const father_age = ref(userData.value.father_age);
const father_work = ref(userData.value.father_work);
const mother_dob = ref(userData.value.mother_dob);
const mother_age = ref(userData.value.mother_age);
const mother_edu = ref(userData.value.mother_edu);
const mother_work = ref(userData.value.mother_work);
const related = ref(userData.value.related);
const siblings = ref();
const order = ref(userData.value.order);
const familyHx = ref(userData.value.familyHx);
const notes = ref(userData.value.notes);

siblings.value = userData.value.siblings ? +userData.value.siblings : 1000;

const marital_status = ref();
const children = ref();
const residence = ref();
const neighborhood = ref();
const occupation = ref();
const education = ref();
// eslint-disable-next-line camelcase
if (userData.value.demographics) {
  marital_status.value = userData.value.demographics[0].marital_status;
  children.value = userData.value.demographics[0].children;
  residence.value = userData.value.demographics[0].residence;
  neighborhood.value = userData.value.demographics[0].neighborhood;
  occupation.value = userData.value.demographics[0].occupation;
  education.value = userData.value.demographics[0].education;
}

const onFormSubmit = () => {
  // emit("update:isDialogVisible", false);
  // emit("submit", userData.value);
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
            <!-- 👉 Name -->
            <VCol cols="12" md="6">
              <AppTextField v-model="name" label="First Name" placeholder="" />
            </VCol>

            <!-- 👉 Gender -->
            <VCol cols="12" md="6">
              <VRadioGroup v-model="gender" inline>
                <template #label>
                  <span
                    style="
                      line-height: 15px;
                      color: rgba(
                        var(--v-theme-on-surface),
                        var(--v-high-emphasis-opacity)
                      );
                    "
                    class="v-label mb-1 text-body-2 text-black"
                    >Gender</span
                  >
                </template>
                <VRadio label="Male" value="Male" />
                <VRadio label="Female" value="Female" />
              </VRadioGroup>
            </VCol>

            <!-- 👉 Date of birth -->
            <VCol cols="12" md="6">
              <AppTextField
                v-model="dob"
                label="Date of Birth"
                :rules="[dateOfBirthValidator]"
                placeholder=""
                maxlength="4"
              />
            </VCol>

            <!-- 👉 Phone -->
            <VCol cols="12" md="6">
              <AppTextField
                v-model="phone"
                label="Phone"
                placeholder=""
                :rules="[phoneNumberValidator]"
                maxlength="11"
              />
            </VCol>

            <VCol>
              <div
                class="text-body-1 text-primary font-weight-medium text-high-emphasis"
              >
                Demographic Information
              </div>
            </VCol>

            <VCol cols="12" v-if="selectedRadio === 'adult'">
              <AppAutocomplete
                v-model="marital_status"
                label="Marital Status"
                placeholder="Select Status"
                :items="
                  gender === 'Male'
                    ? ['متزوج', 'اعزب', 'ارمل', 'منفصل']
                    : ['متزوجة', 'عزباء', 'ارملة', 'منفصلة']
                "
              />
            </VCol>

            <VCol cols="12" v-if="selectedRadio === 'adult'">
              <AppTextField
                v-model="children"
                placeholder="Write a Number"
                label="Children"
              />
            </VCol>

            <VCol cols="12">
              <AppAutocomplete
                v-model="residence"
                label="Residence"
                placeholder="Select Residence"
                :items="cities"
              />
            </VCol>

            <VCol cols="12" v-if="residence === 'بغداد'">
              <AppAutocomplete
                v-model="neighborhood"
                label="Neighborhood"
                placeholder="Select"
                :items="baghdadRegions"
              />
            </VCol>

            <VCol cols="12" v-if="selectedRadio === 'adult'">
              <AppTextField
                v-model="occupation"
                placeholder="Write an Occupation"
                label="Occupation"
              />
            </VCol>

            <!-- child education -->
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField v-model="education" label="Education" />
            </VCol>

            <!-- adult education -->
            <VCol cols="12" v-if="selectedRadio === 'adult'">
              <AppAutocomplete
                v-model="education"
                label="Education"
                placeholder="Select Education"
                :items="[
                  'ابتدائية',
                  'متوسطة',
                  'اعدادية',
                  'كلية',
                  'بكالوريوس',
                  'ماجستير',
                  'دكتوراه',
                ]"
              />
            </VCol>

            <!-- related -->
            <VCol v-if="selectedRadio === 'child'">
              <div
                class="text-body-1 text-primary font-weight-medium text-high-emphasis"
              >
                Parents Relationship
              </div>
            </VCol>

            <VCol cols="12" v-if="selectedRadio === 'child'">
              <VRadioGroup v-model="related" inline>
                <VRadio label="Related" value="true" />
                <VRadio label="Not Related" value="false" />
              </VRadioGroup>
            </VCol>
            <!-- related -->

            <!-- Siblings -->
            <VCol v-if="selectedRadio === 'child'">
              <div
                class="text-body-1 text-primary font-weight-medium text-high-emphasis"
              >
                Siblings
              </div>
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <VRadioGroup v-model="siblings" inline>
                <VRadio label="0" value="0" />
                <VRadio label="1" value="1" />
                <VRadio label="2" value="2" />
                <VRadio label="3" value="3" />
                <VRadio label="4" value="4" />
                <VRadio label="5" value="5" />
                <VRadio label="6" value="6" />
                <VRadio label="7" value="7" />
                <VRadio label="8" value="8" />
              </VRadioGroup>
            </VCol>
            <!-- Siblings -->

            <!-- Order -->
            <VCol v-if="siblings && siblings > 1">
              <div
                class="text-body-1 text-primary font-weight-medium text-high-emphasis"
              >
                Order in Siblings
              </div>
            </VCol>
            <VCol cols="12">
              <VRadioGroup v-model="order" inline>
                <VRadio label="1st" value="1" v-if="siblings && siblings > 1" />
                <VRadio label="2nd" value="2" v-if="siblings && siblings > 1" />
                <VRadio label="3rd" value="3" v-if="siblings && siblings > 2" />
                <VRadio label="4th" value="4" v-if="siblings && siblings > 3" />
                <VRadio label="5th" value="5" v-if="siblings && siblings > 4" />
                <VRadio label="6th" value="6" v-if="siblings && siblings > 5" />
                <VRadio label="7th" value="7" v-if="siblings && siblings > 6" />
                <VRadio label="8th" value="8" v-if="siblings && siblings > 7" />
              </VRadioGroup>
            </VCol>
            <!-- Order -->

            <!-- Father -->
            <VCol v-if="selectedRadio === 'child'">
              <div
                class="text-body-1 text-primary font-weight-medium text-high-emphasis"
              >
                Father Information
              </div>
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField
                v-model="father_dob"
                label="Date of Birth"
                :rules="[dateOfBirthValidator]"
                placeholder=""
                maxlength="4"
              />
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField
                v-model="father_age"
                label="Age at Birth"
                placeholder=""
                :rules="[ageValidator]"
              />
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField
                v-model="father_edu"
                label="Education"
                placeholder=""
              />
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField v-model="father_work" label="Work" placeholder="" />
            </VCol>
            <!-- Father -->

            <!-- Mother -->
            <VCol v-if="selectedRadio === 'child'">
              <div
                class="text-body-1 text-primary font-weight-medium text-high-emphasis"
              >
                Mother Information
              </div>
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField
                v-model="mother_dob"
                label="Date of Birth"
                :rules="[dateOfBirthValidator]"
                placeholder=""
                maxlength="4"
              />
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField
                v-model="mother_age"
                label="Age at Birth"
                placeholder=""
                :rules="[ageValidator]"
              />
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField
                v-model="mother_edu"
                label="Education"
                placeholder=""
              />
            </VCol>
            <VCol cols="12" v-if="selectedRadio === 'child'">
              <AppTextField v-model="mother_work" label="Work" placeholder="" />
            </VCol>
            <!-- Mother -->

            <!-- Family History -->
            <VCol>
              <div
                class="text-body-1 text-primary font-weight-medium text-high-emphasis"
              >
                Family History
              </div>
            </VCol>
            <VCol cols="12">
              <AppTextarea v-model="familyHx" />
            </VCol>
            <!-- Family History -->

            <!-- Notes -->
            <VCol>
              <div
                class="text-body-1 text-primary font-weight-medium text-high-emphasis"
              >
                Notes
              </div>
            </VCol>
            <VCol cols="12">
              <AppTextarea v-model="notes" />
            </VCol>
            <!-- Notes -->

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
