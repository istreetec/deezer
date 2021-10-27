import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from "vue";
import { createPinia } from "pinia";
import vueDebounce from "vue-debounce";
import App from "@/App.vue";
import router from "@/components/router";

const deezerApp = createApp(App);
deezerApp.use(router);
deezerApp.use(createPinia());

// Debounce listening to multiple keys on a field
deezerApp.use(vueDebounce, {
  listenTo: ["input" /*, "keyup"*/],
  lock: true,
});

deezerApp.mount("#app");
