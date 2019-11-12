import Vue from "vue";
import VueRouter from "vue-router";
import { BasicLayout, UserLayout } from "@/layouts";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: BasicLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/Home")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/about/About")
      }
    ]
  },
  {
    path: "/user",
    component: UserLayout,
    redirect: "/user/login",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/login/Login")
      }
    ]
  },
  {
    path: "*",
    component: () => import("@/views/exception/404")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 })
});
export default router;
