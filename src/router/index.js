import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import JobsView from "@/views/Jobs/Jobs.vue";
import galleryView from "@/views/Gallery.vue";
import loginView from "@/views/Login.vue";
import JobsDetails from "@/views/Jobs/JobsDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobsView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: galleryView,
  },
  {
    path: "/login",
    name: "Login",
    component: loginView,
  },
  {
    path: "/jobs/:id",
    name: "JobsDetails",
    component: JobsDetails,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
