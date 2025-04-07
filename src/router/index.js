import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/Home.vue";
// import JobsView from "@/views/Jobs/Jobs.vue";
// import galleryView from "@/views/Gallery.vue";
import NotFound from "@/views/NotFound.vue";

// import loginView from "@/views/Login.vue";
// import JobsDetails from "@/views/Jobs/JobsDetails.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ()=>
      import(/*webpackChunkName:"home"*/"../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: ()=>
      import(/*webpackChunkName:"about"*/"../views/About.vue")
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: ()=>
      import(/*webpackChunkName:"jobs"*/"../views/Jobs/Jobs.vue")
  },
  {
    path: "/gallery",
    name: "gallery",
    component: ()=>
      import(/*webpackChunkName:"gallery"*/"../views/Gallery.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: ()=>
      import(/*webpackChunkName:"login"*/"../views/Login.vue")
  },
  {
    path: "/jobs/:slug",
    name: "JobsDetails",
    component: ()=>
      import(/*webpackChunkName:"jobsDetails"*/"../views/Jobs/JobsDetails.vue")
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
