import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
import Login from "@/views/Login/index.vue"
import HelloWorld from '@/views/HelloWorld/index.vue'
const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
