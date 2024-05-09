<script setup lang="ts">
  import { chief_complains } from '@/utils/suggestions'

  interface Model {
    complaint: string | undefined
    duration: string | undefined
    source: string | undefined
    referral: string | undefined
  }

  const model = defineModel<Model>()

  const complaint = ref(model.value?.complaint)
  const duration = ref(model.value?.duration)
  const source = ref(model.value?.source)
  const referral = ref(model.value?.referral)

  const update = () => {
    model.value = {
      complaint: complaint.value as string,
      duration: duration.value as string,
      source: source.value as string,
      referral: referral.value as string,
    }
  }

  const appendTo = (target: string | undefined, text: string) => {
    return target === '' || target === undefined ? text : `${target}, ${text}`
  }

  const tab = ref('Year1')

  const selectedYear1 = ref([])
  const selectedYear2 = ref([])
  const prenatal = ref([])
  const natal = ref([])
  const postnatal = ref([])
</script>

<template>
  <VCard>
    <VWindowItem>
      <VTabs v-model="tab">
        <VTab value="Prenatal"> Prenatal </VTab>
        <VTab value="Natal"> Natal </VTab>
        <VTab value="Postnatal"> Postnatal </VTab>
        <VTab value="Year1"> Year 1 </VTab>
        <VTab value="Year2"> Year 2 </VTab>
        <VTab value="Year3"> Year 3 </VTab>
        <VTab value="Year4"> Year 4 </VTab>
        <VTab value="Year5"> Year 5 </VTab>
        <VTab value="Year6"> Year 6 </VTab>
      </VTabs>

      <VCard flat>
        <VCardText>
          <VWindow v-model="tab" class="disable-tab-transition">
            <VWindowItem value="Prenatal">
              <VRow>
                <VCol cols="3">
                  <div>
                    <p>Personal-Social</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in year1List['PERSONAL-SOCIAL']"
                      v-model="selectedYear1"
                      :label="item"
                      color="success"
                      :value="item"
                    />
                  </div>
                </VCol>
                <VCol cols="3">
                  <div>
                    <p>Fine Motor-Adaptive</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in year1List['FINE MOTOR-ADAPTIVE']"
                      v-model="selectedYear1"
                      :label="item"
                      color="success"
                      :value="item"
                    />
                  </div>
                </VCol>
                <VCol cols="3">
                  <div>
                    <p>Language</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in year1List['LANGUAGE']"
                      v-model="selectedYear1"
                      :label="item"
                      color="success"
                      :value="item"
                    />
                  </div>
                </VCol>
                <VCol cols="3">
                  <div>
                    <p>Gross Motor</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in year1List['GROSS MOTOR']"
                      v-model="selectedYear1"
                      :label="item"
                      color="success"
                      :value="item"
                    />
                  </div>
                </VCol>
                {{ selectedYear1 }}
              </VRow>
            </VWindowItem>

            <VWindowItem value="Natal"> </VWindowItem>

            <VWindowItem value="Postnatal"> </VWindowItem>

            <VWindowItem value="Year1">
              <VRow>
                <VCol
                  cols="3"
                  v-for="(category, categoryName) in year1List"
                  :key="categoryName"
                >
                  <div>
                    <p>{{ categoryName }}</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in category"
                      v-model="selectedYear1"
                      :label="item"
                      color="success"
                      :value="item"
                    />
                    <!-- <CheckboxGroup :items="category" v-model="selectedYear1" /> -->
                  </div>
                </VCol>
              </VRow>
            </VWindowItem>
            <VWindowItem value="Year2">
              <VRow>
                <VCol
                  cols="3"
                  v-for="(category, categoryName) in year2List"
                  :key="categoryName"
                >
                  <div>
                    <p>{{ categoryName }}</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in category"
                      v-model="selectedYear2"
                      :label="item"
                      color="success"
                      :value="item"
                    />
                    <!-- <CheckboxGroup :items="category" v-model="selectedYear1" /> -->
                  </div>
                </VCol>
              </VRow>
            </VWindowItem>
            <VWindowItem value="Year3"> </VWindowItem>
            <VWindowItem value="Year4"> </VWindowItem>
            <VWindowItem value="Year5"> </VWindowItem>
            <VWindowItem value="Year6"> </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>

      <!-- <VRow>
      <VCol cols="12">
        <h6 class="text-h6 font-weight-medium">Development History</h6>
        <p class="mb-0"></p>
      </VCol>
    </VRow>

    <VRow>
      <div class="demo-space-x">
        <VCheckbox
          v-model="selected"
          :true-value="1"
          :false-value="0"
          label="drink from cup"
        />

        <VCheckbox
          v-model="selected"
          true-value="Show"
          false-value="Hide"
          color="success"
          :label="`${selected.toString()}`"
        />
      </div>
    </VRow> -->

      <!-- <VRow class="mb-5">
      <VCol cols="6" md="6">
        <AppTextarea
          v-model="complaint"
          label="Complaint"
          auto-grow
          rows="2"
          @keyup="update"
          :rules="[requiredValidator]"
        />
      </VCol>
      <VCol>
        <div class="my-5">
          <VChip
            class="me-2 mb-2"
            v-for="suggestion in chief_complains"
            size="x-small"
            @click="
              () => {
                complaint = appendTo(complaint, suggestion)
                update()
              }
            "
          >
            {{ suggestion }}
          </VChip>
        </div>
      </VCol>
    </VRow> -->
    </VWindowItem>
  </VCard>
</template>
