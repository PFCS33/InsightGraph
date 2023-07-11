import { createRouter, createWebHistory } from "vue-router";

import MainPage from "./pages/MainPage.vue";
import Test from "./pages/test.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: MainPage,
    },
    {
      path: "/test",
      component: Test,
    },
  ],
});

export default router;
