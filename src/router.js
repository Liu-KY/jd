import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
Vue.use(VueRouter);
const HomePage = () => import("./pages/home/HomePage.vue");
const CartPage = () => import("./pages/cart/CartPage.vue");
const CatePage = () => import("./pages/cate/CatePage.vue");
const UserPage = () => import("./pages/user/UserPage.vue");
const LoginPage = () => import("./pages/user/LoginPage.vue");
const RegistPage = () => import("./pages/user/RegistPage.vue");
const GoodInfo = () => import("./pages/home/GoodInfo.vue");

export const tabRoutes = [
  {
    path: "/home",
    component: HomePage,
    id: 1,
    text: "首页",
    src: "/icon/home",
  },
  {
    path: "/cate",
    component: CatePage,
    id: 2,
    text: "分类",
    src: "/icon/cate",
  },
  {
    path: "/cart",
    component: CartPage,
    id: 3,
    text: "购物车",
    src: "/icon/cart",
    beforeEnter: (to, from, next) => {
      const isToken = store.getters["user/isToken"];
      if (isToken) next();
      else router.push("/login");
      // next("/login");
    },
  },
  {
    path: "/user",
    component: UserPage,
    id: 4,
    text: "我的",
    src: "/icon/user",
    beforeEnter: (to, from, next) => {
      const isToken = store.getters["user/isToken"];
      if (isToken) next();
      else router.push("/login");
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  routes: [
    ...tabRoutes,
    { path: "/login", component: LoginPage },
    { path: "/regist", component: RegistPage },
    { path: "/info", name: "info", component: GoodInfo, props: true },
    { path: "/*", redirect: "/home" },
  ],
});

export default router;
