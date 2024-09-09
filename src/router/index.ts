import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import About from "@/views/About.vue"
import Testimonials from "@/views/testimonials.vue"
import Articles from "@/views/Articles.vue"
import Experiences from "@/views/Experiences.vue"
import Conferences from "@/views/Conferences.vue"
import Projects from "@/views/projects.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/",
      name: "home",
      component: About,
    },
    {
      path: "/testimonials",
      name: "testimonials",
      component: Testimonials,
    },
    {
      path: "/articles",
      name: "articles",
      component: Articles,
    },
    {
      path: "/conferences",
      name: "conferences",
      component: Conferences,
    },
    {
      path: "/experiences",
      name: "experiences",
      component: Experiences,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
