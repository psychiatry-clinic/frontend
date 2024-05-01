<script setup lang="ts">
import { Visit } from "@/utils/types";
import CustomerOrderTable from "./CustomerOrderTable.vue";

interface Props {
  visits?: Visit[];
}

const { visits } = defineProps<Props>();
</script>

<template>
  <VRow>
    <!-- <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="primary"
            icon="tabler-currency-dollar"
            rounded
          />
          <h5 class="text-h5">
            Account Balance
          </h5>
          <div>
            <h5 class="text-h5 text-primary mb-1">
              $7480
              <span class="text-body-1 d-inline-block">Credit Left</span>
            </h5>
            <p class="mb-0">
              Account balance for next purchase
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="success"
            icon="tabler-gift"
            rounded
          />
          <h5 class="text-h5">
            Loyalty Program
          </h5>
          <div>
            <VChip
              color="success"
              class="mb-2"
              label
              size="small"
            >
              Platinum member
            </VChip>
            <p class="mb-0">
              3000 points to next tier
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="warning"
            icon="tabler-star"
            rounded
          />
          <h5 class="text-h5">
            Wishlist
          </h5>
          <div>
            <h5 class="text-h5 text-warning mb-1">
              15
              <span class="text-body-1 d-inline-block">Items in wishlist</span>
            </h5>
            <p class="mb-0">
              Receive notification when items go on sale
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="info"
            icon="tabler-discount"
            rounded
          />
          <h5 class="text-h5">
            Coupons
          </h5>
          <div>
            <h5 class="text-h5 text-info mb-1">
              21
              <span class="text-body-1 d-inline-block">Coupons you win</span>
            </h5>
            <p class="mb-0">
              Use coupon on next purchase
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol> -->

    <VCol>
      <CustomerOrderTable :visits="visits" />
    </VCol>

    <!-- Timeline -->
  </VRow>
  <VRow>
    <VCol>
      <div
        class="v-card v-theme--light v-card--density-default v-card--variant-elevated"
      >
        <!---->
        <div class="v-card__loader">
          <div
            class="v-progress-linear v-progress-linear--rounded v-progress-linear--rounded-bar v-progress-linear--rounded v-theme--light v-locale--is-ltr"
            style="
              top: 0px;
              height: 0px;
              --v-progress-linear-height: 2px;
              left: 50%;
              transform: translateX(-50%);
            "
            role="progressbar"
            aria-hidden="true"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <!---->
            <div
              class="v-progress-linear__background"
              style="background-color: rgba(var(--v-track-bg)); width: 100%"
            ></div>
            <div class="v-progress-linear__indeterminate">
              <div class="v-progress-linear__indeterminate long"></div>
              <div class="v-progress-linear__indeterminate short"></div>
            </div>
            <!---->
          </div>
        </div>
        <div class="v-card-item">
          <!---->
          <div class="v-card-item__content">
            <div class="v-card-title">Timeline</div>
            <!----><!---->
          </div>
          <!---->
        </div>
        <!---->
        <div class="v-card-text">
          <div
            class="v-timeline v-timeline--vertical v-timeline--align-start v-timeline--justify-auto v-timeline--truncate-line-start v-timeline--inset-line v-theme--light v-timeline--density-compact v-timeline--side-end v-locale--is-ltr"
            style="--v-timeline-line-thickness: 2px"
          >
            <!-- !SECTION -->
            <div
              class="v-timeline-item"
              style="
                --v-timeline-dot-size: 18px;
                --v-timeline-line-inset: calc(
                  var(--v-timeline-dot-size) / 2 + 8px
                );
              "
            >
              <div class="v-timeline-item__body">
                <!-- 👉 Header -->
                <div
                  class="d-flex justify-space-between align-center flex-wrap mb-2"
                >
                  <span class="app-timeline-title"> h</span
                  ><span class="app-timeline-meta">h</span>
                </div>
                <!-- 👉 Content -->
                <p class="app-timeline-text mt-1 mb-2">
                  Chief Complaint : hyperactivity
                </p>
                <p class="app-timeline-text mt-1 mb-2">Management : Ritalin</p>
                <VBtn>open visit</VBtn>
              </div>
              <div class="v-timeline-divider">
                <div class="v-timeline-divider__before"></div>
                <div
                  class="v-timeline-divider__dot v-timeline-divider__dot--size-x-small"
                >
                  <div class="v-timeline-divider__inner-dot bg-info">
                    <i
                      class="v-icon notranslate v-theme--light v-icon--size-x-small"
                      aria-hidden="true"
                    >
                    </i>
                  </div>
                </div>
                <div class="v-timeline-divider__after"></div>
              </div>
            </div>
          </div>
        </div>
        <span class="v-card__underlay"></span>
      </div>
    </VCol>
  </VRow>
</template>
