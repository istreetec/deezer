import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/components/router";
import store from "@/components/store";

const deezerApp = createApp(App);
deezerApp.use(router);
deezerApp.use(store);

deezerApp.mount("#app");
