import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserLogin from "@/components/user/UserLogin";
import UserJoin from "@/components/user/UserJoin";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component : UserLogin,
  },
  {
    path: "/join",
    name: "join",
    component : UserJoin,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
