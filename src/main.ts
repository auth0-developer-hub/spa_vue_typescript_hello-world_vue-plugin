import { createApp } from "vue";
import "./assets/css/styles.css";
import router from "./router";
import Shell from "./shell.vue";

const app = createApp(Shell);

app.use(router).mount("#app");
