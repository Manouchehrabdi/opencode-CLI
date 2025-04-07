import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../dist/output.css";
import "../src/assets/Font.css";
createApp(App).use(router).mount("#app");
