import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// template
import "./assets/css/style.min.css";
import "./assets/js/script.js";
import "./assets/plugins/chart.min.js";
import "./assets/plugins/feather.min.js";
// axios
import axios from "axios";
import setAuthHeader from "./utils/setAuthHeader";
// vue select
import vSelect from "vue-select"; //import vue-select
import "vue-select/dist/vue-select.css"; //import css vue-select

// set default header user token
if (localStorage.userToken) {
  setAuthHeader(localStorage.userToken);
} else {
  setAuthHeader(false);
}

// set default axios url
axios.defaults.baseURL = "http://159.223.57.121:8090/";

const app = createApp(App);
app.component("v-select", vSelect);
app.use(router);
app.mount("#app");
