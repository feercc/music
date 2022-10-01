import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView/index.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/music-play",
      name: "music-play",
      component: () => import("../views/MusicPlay/IndexView.vue"),
    },
  ],
});

export default router;
