import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import jQuery from "jquery";

global.$ = jQuery;

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "ionicons/css/ionicons.css";
import "admin-lte/dist/css/adminlte.css";

import "bootstrap/dist/js/bootstrap.js";
import "admin-lte/dist/js/adminlte.js";

createApp(App).use(router).mount("#app");
