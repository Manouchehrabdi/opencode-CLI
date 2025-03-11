import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../dist/output.css";

createApp(App).use(router).mount("#app");
