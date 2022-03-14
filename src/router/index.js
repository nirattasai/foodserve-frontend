import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Navbar from "@/views/Navbar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/merchant",
    name: "merchant",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Navbar,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
