import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import JobsView from "@/views/Jobs/Jobs.vue";
import galleryView from "@/views/Gallery.vue";
import NotFound from "@/views/NotFound.vue";
import loginView from "@/views/Login.vue";
import JobsDetails from "@/views/Jobs/JobsDetails.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
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
    path: "/jobs/:slug",
    name: "JobsDetails",
    component: JobsDetails,
  },
  //Redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //Not Found
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
