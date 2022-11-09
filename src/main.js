import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// template
import "./assets/elegant/css/style.min.css";
import "./assets/elegant/js/script.js";
import "./assets/elegant/plugins/chart.min.js";
import "./assets/elegant/plugins/feather.min.js";

createApp(App).use(router).mount("#app");
