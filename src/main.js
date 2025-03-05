/* eslint-disable */
import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './assets/store/store';
import axios from "axios";


axios.defaults.baseURL = 'http://116.125.141.139:8810'
const app = createApp(App);

app.use(store);

window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;
app.config.globalProperties.axios = axios;
app.use(router).mount("#app");
