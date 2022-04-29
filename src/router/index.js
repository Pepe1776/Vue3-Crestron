import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"; // Rooms start Here
import DtvRemote from "../views/DtvRemote.vue"; // Rooms start Here

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Dtv",
    name: "Dtv",
    component: DtvRemote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
