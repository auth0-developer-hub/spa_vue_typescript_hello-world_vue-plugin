import Home from "@/pages/home.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../pages/profile.vue"),
  },
  {
    path: "/external-api",
    name: "external-api",
    component: () =>
      import(
        /* webpackChunkName: "external-api" */ "../pages/external-api.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
