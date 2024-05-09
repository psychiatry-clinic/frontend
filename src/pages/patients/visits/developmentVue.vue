<script setup lang="ts">
  interface Model {
    selectedPeripartum?: string[]
    selectedYear?: string[]
  }

  const model = defineModel<Model>()

  const selectedPeripartum = ref(model.value?.selectedPeripartum || [])
  const selectedYear = ref(model.value?.selectedYear || [])

  const update = () => {
    // model.value = {
    //   selectedYear: selectedYear.value as string[],
    //   selectedPeripartum: selectedPeripartum.value as string[],
    // }
  }

  const appendTo = (target: string | undefined, text: string) => {
    return target === '' || target === undefined ? text : `${target}, ${text}`
  }

  const tab = ref('peri')
</script>

<template>
  <VCard>
    <VWindowItem>
      <VTabs v-model="tab">
        <VTab value="peri"> Peripartum </VTab>
        <VTab value="Year1"> Year 1 </VTab>
        <VTab value="Year2"> Year 2 </VTab>
        <VTab value="Year3"> Year 3 </VTab>
        <VTab value="Year4"> Year 4 </VTab>
        <VTab value="Year5"> Year 5 </VTab>
      </VTabs>

      <VCard flat>
        <VCardText>
          <VWindow v-model="tab" class="disable-tab-transition">
            <VWindowItem value="peri">
              <VRow>
                <VCol
                  cols="4"
                  v-for="(category, categoryName) in peripartumList"
                  :key="categoryName"
                >
                  <div>
                    <p>{{ categoryName }}</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in category"
                      v-model="model.selectedPeripartum"
                      :label="item"
                      color="success"
                      :value="item"
                      @click="update"
                    />
                  </div>
                </VCol>
              </VRow>
            </VWindowItem>

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
                      v-model="model.selectedYear"
                      :label="item"
                      color="success"
                      :value="item"
                      @click="update"
                    />
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
                      v-model="model.selectedYear"
                      :label="item"
                      color="success"
                      :value="item"
                      @click="update"
                    />
                    <!-- <CheckboxGroup :items="category" v-model="model?.selectedYear" /> -->
                  </div>
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem value="Year3">
              <VRow>
                <VCol
                  cols="3"
                  v-for="(category, categoryName) in year3List"
                  :key="categoryName"
                >
                  <div>
                    <p>{{ categoryName }}</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in category"
                      v-model="model.selectedYear"
                      :label="item"
                      color="success"
                      :value="item"
                      @click="update"
                    />
                  </div>
                </VCol> </VRow
            ></VWindowItem>
            <VWindowItem value="Year4">
              <VRow>
                <VCol
                  cols="3"
                  v-for="(category, categoryName) in year4List"
                  :key="categoryName"
                >
                  <div>
                    <p>{{ categoryName }}</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in category"
                      v-model="model.selectedYear"
                      :label="item"
                      color="success"
                      :value="item"
                      @click="update"
                    />
                  </div>
                </VCol> </VRow
            ></VWindowItem>
            <VWindowItem value="Year5">
              <VRow>
                <VCol
                  cols="3"
                  v-for="(category, categoryName) in year5List"
                  :key="categoryName"
                >
                  <div>
                    <p>{{ categoryName }}</p>
                    <VCheckbox
                      class="mt-2"
                      v-for="item in category"
                      v-model="model.selectedYear"
                      :label="item"
                      color="success"
                      :value="item"
                      @click="update"
                    />
                  </div>
                </VCol> </VRow
            ></VWindowItem>
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
