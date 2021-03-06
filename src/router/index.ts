import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
      path: "/works",
      children: [
        {
          path: "",
          name: "works.index",
          component: () => import("../views/WorksView.vue"),
        },
        {
          path: ":slug",
          name: "works.show",
          component: () => import("../views/WorkArticleView.vue"),
        },
      ],
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
