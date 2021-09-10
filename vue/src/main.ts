import { createApp } from "vue";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";

import { client } from "./urql";
import urql from "@urql/vue";

import App from "./App.vue";

const app = createApp(App);

app.use(PrimeVue).use(urql, client).mount("#app");
