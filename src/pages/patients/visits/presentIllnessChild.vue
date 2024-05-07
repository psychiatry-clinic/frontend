<script setup lang="ts">
const fields = [
  "course",
  "circumstances",
  "vegetative",
  "associated",
  "functioning",
  "relationships",
  "treatments",
  "substances",
  "risk",
];

interface Model {
  course: string | undefined;
  circumstances: string | undefined;
  vegetative: string | undefined;
  associated: string | undefined;
  functioning: string | undefined;
  relationships: string | undefined;
  treatments: string | undefined;
  substances: string | undefined;
  risk: string | undefined;
}

const model = defineModel<Model>();

const course = ref(model.value?.course);
const circumstances = ref(model.value?.circumstances);
const vegetative = ref(model.value?.vegetative);
const associated = ref(model.value?.associated);
const functioning = ref(model.value?.functioning);
const relationships = ref(model.value?.relationships);
const treatments = ref(model.value?.treatments);
const substances = ref(model.value?.substances);
const risk = ref(model.value?.risk);

function update() {
  model.value = {
    course: course.value as string,
    circumstances: circumstances.value as string,
    vegetative: vegetative.value as string,
    associated: associated.value as string,
    functioning: functioning.value as string,
    relationships: relationships.value as string,
    treatments: treatments.value as string,
    substances: substances.value as string,
    risk: risk.value as string,
  };
}

const appendTo = (target: string | undefined, text: string) => {
  // Append the text and return the new string
  return target === "" || target === undefined ? text : `${target}, ${text}`;
};

const tab = ref("Autism");
</script>

<template>
  <VWindowItem>
    <VTabs v-model="tab">
      <VTab value="Classic"> Classic </VTab>
      <VTab value="Autism"> Autism </VTab>
      <VTab value="ADHD"> ADHD </VTab>
      <VTab value="Learning"> Learning </VTab>
      <VTab value="Language"> Language </VTab>
      <VTab value="Intellectual Disability"> Intellectual Disability </VTab>
      <VTab value="Global Developmental Delay">
        Global Developmental Delay
      </VTab>
      <VTab value="Speech Sound"> Speech Sound </VTab>
      <VTab value="Fluency (Stuttering)"> Fluency (Stuttering) </VTab>
      <VTab value="Learning"> Learning </VTab>
      <VTab value="Communication"> Communication </VTab>
      <VTab value="Coordination"> Coordination </VTab>
      <VTab value="Movement"> Movement </VTab>
      <VTab value="Tic"> Tic </VTab>
    </VTabs>

    <VCard flat>
      <VCardText>
        <VWindow v-model="tab" class="disable-tab-transition">
          <!-- classic  -->
          <VWindowItem value="Classic">
            <!-- course -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="course"
                  label="Course"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in courseSuggestions"
                    size="x-small"
                    @click="course = appendTo(course, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <!-- circumstances -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="circumstances"
                  label="Circumstances"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in circumstancesSuggestions"
                    size="x-small"
                    @click="circumstances = appendTo(circumstances, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <!-- vegetative -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="vegetative"
                  label="Vegetative Symptoms"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in vegetativeSymptomsSuggestions"
                    size="x-small"
                    @click="vegetative = appendTo(vegetative, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <!-- associated -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="associated"
                  label="Associated Symptoms"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in associatedSymptomsSuggestions"
                    size="x-small"
                    @click="associated = appendTo(associated, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <!-- functioning -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="functioning"
                  label="Functioning"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in functioningSuggestions"
                    size="x-small"
                    @click="functioning = appendTo(functioning, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <!-- relationships -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="relationships"
                  label="Relationships"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in relationshipsSuggestions"
                    size="x-small"
                    @click="relationships = appendTo(relationships, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <!-- treatments -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="treatments"
                  label="Previous Treatments"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in treatmentsSuggestions"
                    size="x-small"
                    @click="treatments = appendTo(treatments, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <!-- substances -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="substances"
                  label="Substances"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in substancesSuggestions"
                    size="x-small"
                    @click="substances = appendTo(substances, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <!-- risk -->
            <VRow>
              <VCol cols="6" md="6">
                <AppTextarea
                  v-model="risk"
                  label="Risk Assessment"
                  auto-grow
                  rows="2"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in riskAssessmentSuggestions"
                    size="x-small"
                    @click="risk = appendTo(risk, suggestion)"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
          </VWindowItem>
          <!-- Autism -->
          <VWindowItem value="Autism">
            <VRow class="mt-2">
              <VCol cols="6">
                <AppTextarea
                  label="Eye Contact"
                  auto-grow
                  rows="1"
                  @keyup="update"
                />
              </VCol>
              <VCol>
                <div class="my-5">
                  <VChip
                    class="me-2 mb-2"
                    v-for="suggestion in ['poor', 'good']"
                    size="x-small"
                  >
                    {{ suggestion }}
                  </VChip>
                </div>
              </VCol>
            </VRow>
            <VRow class="mt-2">
              <VCol cols="6">
                <VCheckbox label="Poor eye Contact" />
                <VCheckbox label="good eye Contact" />
              </VCol>
            </VRow>
          </VWindowItem>
          <!-- ADHD -->
          <VWindowItem value="ADHD">
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
          <!-- Communication -->
          <VWindowItem value="Learning">
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
          <!-- Language -->
          <VWindowItem value="Language">
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
    </VCard>
  </VWindowItem>
</template>
