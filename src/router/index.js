import { createRouter, createWebHistory } from "vue-router";
import Guide from "../views/Guide.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/guide",
      name: "guide",
      component: Guide
    }
  ]
});

export default router;
