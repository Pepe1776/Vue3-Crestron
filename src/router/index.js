import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Living from "../views/Living.vue";
import Family from "../views/Family.vue";
import Bedroom from "../views/Bedroom.vue";
import Backyard from "../views/Backyard.vue";
// Rooms start Here
import Watch1 from "../views/Room1/Watch1.vue";
import Watch1b from "../views/Room1/Watch1b.vue";
import Watch1c from "../views/Room1/Watch1c.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/living",
    name: "Living",
    component: Living,
  },
  {
    path: "/family",
    name: "Family",
    component: Family,
  },
  {
    path: "/bedroom",
    name: "Bedroom",
    component: Bedroom,
  },
  {
    path: "/backyard",
    name: "Backyard",
    component: Backyard,
  },

  // Rooms Start Here!!!

  {
    path: "/Watch1",
    name: "Watch1",
    component: Watch1,
  },
  {
    path: "/Watch1b",
    name: "Watch1b",
    component: Watch1b,
  },
  {
    path: "/Watch1c",
    name: "Watch1c",
    component: Watch1c,
  },
  {
    path: "/Listen1",
    name: "Listen1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room1/Listen1.vue"),
  },
  {
    path: "/Listen1b",
    name: "Listen1b",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room1/Listen1b.vue"),
  },
  {
    path: "/Listen1c",
    name: "Listen1c",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room1/Listen1c.vue"),
  },
  {
    path: "/Lighting1",
    name: "Lighting1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room1/Lighting1.vue"),
  },
  {
    path: "/Scenes1",
    name: "Scenes1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room1/Scenes1.vue"),
  },
  {
    path: "/Shades1",
    name: "Shades1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room1/Shades1.vue"),
  },
  {
    path: "/Hvac1",
    name: "Hvac1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room1/Hvac1.vue"),
  },
  {
    path: "/Watch2",
    name: "Watch2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room2/Watch2.vue"),
  },
  {
    path: "/Listen2",
    name: "Listen2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room2/Listen2.vue"),
  },
  {
    path: "/Lighting2",
    name: "Lighting2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room2/Lighting2.vue"),
  },
  {
    path: "/Scenes2",
    name: "Scenes2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room2/Scenes2.vue"),
  },
  {
    path: "/Watch3",
    name: "Watch3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room3/Watch3.vue"),
  },
  {
    path: "/Listen3",
    name: "Listen3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room3/Listen3.vue"),
  },
  {
    path: "/Lighting3",
    name: "Lighting3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room3/Lighting3.vue"),
  },
  {
    path: "/Scenes3",
    name: "Scenes3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room3/Scenes3.vue"),
  },
  {
    path: "/Watch4",
    name: "Watch4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room4/Watch4.vue"),
  },
  {
    path: "/Listen4",
    name: "Listen4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room4/Listen4.vue"),
  },
  {
    path: "/Lighting4",
    name: "Lighting4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room4/Lighting4.vue"),
  },
  {
    path: "/Scenes4",
    name: "Scenes4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Room4/Scenes4.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
