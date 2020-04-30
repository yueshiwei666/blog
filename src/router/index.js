import Vue from "vue";
import VueRouter from "vue-router";
import home from "views/home/home.vue";
import about from "views/about/about.vue";
import supermall from "views/project/supermall/supermall";
import supermall_shop from "views/project/supermall/shop/shop";
import supermall_my from "views/project/supermall/my/my";
import detail from "views/project/supermall/detail/detail";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/supermall",
    name: "supermall",
    component: supermall,
  },
  {
    path: "/supermall/shop",
    name: "supermall_shop",
    component: supermall_shop,
  },
  {
    path: "/supermall/my",
    name: "supermall_my",
    component: supermall_my,
  },
  {
    path: "/detail/:id",
    /* name: "detail", */
    component: detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
