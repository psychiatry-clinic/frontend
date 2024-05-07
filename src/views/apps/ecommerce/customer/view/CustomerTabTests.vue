<script setup lang="ts">
const isNewPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
const smsVerificationNumber = ref("+1(968) 819-2547");
const isTwoFactorDialogOpen = ref(false);

// Recent devices Headers
const recentDeviceHeader = [
  { title: "BROWSER", key: "browser" },
  { title: "DEVICE", key: "device" },
  { title: "LOCATION", key: "location" },
  { title: "RECENT ACTIVITY", key: "activity" },
];

const recentDevices = [
  {
    browser: "Chrome on Windows",
    logo: "tabler-brand-windows",
    color: "info",
    device: "HP Specter 360",
    location: "Switzerland",
    activity: "10, July 2021 20:07",
  },
  {
    browser: "Chrome on iPhone",
    logo: "tabler-device-mobile",
    color: "error",
    device: "iPhone 12x",
    location: "Australia",
    activity: "13, July 2021 10:10",
  },
  {
    browser: "Chrome on Android",
    logo: "tabler-brand-android",
    color: "success",
    device: "OnePlus 9 Pro",
    location: "Dubai",
    activity: "4, July 2021 15:15",
  },
  {
    browser: "Chrome on macOS",
    logo: "tabler-brand-apple",
    color: "secondary",
    device: "Apple iMac",
    location: "India",
    activity: "20, July 2021 21:01",
  },
  {
    browser: "Chrome on Windows",
    logo: "tabler-brand-windows",
    color: "info",
    device: "HP Specter 360",
    location: "Switzerland",
    activity: "10, July 2021 20:07",
  },
  {
    browser: "Chrome on Android",
    logo: "tabler-brand-android",
    color: "success",
    device: "OnePlus 9 Pro",
    location: "Dubai",
    activity: "4, July 2021 15:15",
  },
];

const tab = ref("personal-info");
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Psychometric Tests -->
      <VCard title="Psychometric Tests">
        <VCardText>
          <VTabs v-model="tab">
            <VTab value="personal-info"> Personal Info </VTab>
            <VTab value="account-details"> Account Details </VTab>
            <VTab value="social-links"> Social Links </VTab>
          </VTabs>
        </VCardText>

        <VCard flat>
          <VCardText>
            <VWindow v-model="tab" class="disable-tab-transition">
              <VWindowItem value="personal-info">
                <VRow class="mb-5">
                  <VCol cols="6" md="6">
                    <AppTextarea
                      label="Complaint"
                      auto-grow
                      rows="2"
                      @keyup=""
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol>
                    <div class="my-5">
                      <VChip
                        class="me-2 mb-2"
                        v-for="suggestion in chief_complains"
                        size="x-small"
                      >
                        {{ suggestion }}
                      </VChip>
                    </div>
                  </VCol>
                </VRow></VWindowItem
              >

              <VWindowItem value="account-details"> </VWindowItem>

              <VWindowItem value="social-links"> </VWindowItem>
            </VWindow>
          </VCardText>

          <VDivider />

          <VCardText class="d-flex gap-4">
            <VBtn>Submit</VBtn>
            <VBtn color="secondary" variant="tonal"> Cancel </VBtn>
          </VCardText>
        </VCard>
      </VCard>
    </VCol>
  </VRow>
</template>
