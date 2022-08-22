import * as VueRouter from "vue-router";
import ProfileVue from "@/views/Profile.vue";
import HomeVue from "@/views/Home.vue";
const routes = [
  { path: "/", component: HomeVue },
  { path: "/user/:username", component: ProfileVue },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  mode: "history",

});

export default router;
