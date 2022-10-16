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
      path: "/login",
      name: "login",
      component: () => import("../views/Login/index.vue"),
    },
    {
      path: "/manage",
      name: "manage",
      component: () => import("../views/Manage/index.vue"),
    },
  ],
});

export default router;
