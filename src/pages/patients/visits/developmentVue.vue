<script setup lang="ts">
  interface Model {
    selectedPeripartum?: string[]
    selectedYear?: string[]
  }

  const model = defineModel<Model>()

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
          <VWindow v-model="tab" class="disable-tab-transition" v-if="model">
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
                    />
                  </div>
                </VCol> </VRow
            ></VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
    </VWindowItem>
  </VCard>
</template>
