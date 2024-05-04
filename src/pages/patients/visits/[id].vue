<script setup lang="ts">
import type { Patient, User, Prescription, Test, Visit } from "@/utils/types";
import { RouteParams } from "vue-router";

const route = useRoute();

const routeParams = route.params as RouteParams;

const storedUserData: User | undefined = useCookie("userData").value as
  | User
  | undefined;

const patientData = ref<Patient>();
const userTab = ref(null);

const tabs = [
  { title: "Visits", icon: "tabler-file" },
  { title: "Tests", icon: "tabler-flask" },
  { title: "Address & Billing", icon: "tabler-map-pin" },
  { title: "Notifications", icon: "tabler-bell" },
];

const { data } = await useApi<any>(
  `/patients/visits/${storedUserData?.id}/${routeParams.id}`
);

patientData.value = data.value;
</script>
