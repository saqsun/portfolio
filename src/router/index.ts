import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Root",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Resume.vue"),
  },
  {
    path: "/game-projects",
    name: "Game Projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameProjects.vue"),
  },
  {
    path: "/other-projects",
    name: "Other Projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OtherProjects.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: "/404",
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
