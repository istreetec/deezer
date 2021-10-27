import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Artist from "@/pages/Artist.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/artist/:id/:name", name: "Artist", component: Artist, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
