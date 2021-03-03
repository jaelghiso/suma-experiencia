import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ComingSoon from "../views/ComingSoon.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coming-soon",
    name: "Coming Soon",
    component: ComingSoon,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
