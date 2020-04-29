import Vue from "vue";
import VueRouter from "vue-router";
import home from "views/home/home.vue";
import about from "views/about/about.vue";
import supermall from "views/project/supermall/supermall";
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
];

const router = new VueRouter({
  mode: "history",
  /*  base: process.env.BASE_URL, */
  routes,
});

export default router;
