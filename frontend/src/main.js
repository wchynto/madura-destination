import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import jQuery from "jquery";

global.$ = jQuery;

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(router).mount("#app");
