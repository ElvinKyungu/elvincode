import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/homeView.vue"
import About from "@/views/about.vue"
import Conferences from "@/views/conferences.vue"
// import Places from "@/views/PlacesTouristique.vue"
import Experiences from "@/views/experiences.vue"
import Components from '@/views/components.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/components",
      name: "components",
      component: Components,
    },
    {
      path: "/experiences",
      name: "experiences",
      component: Experiences,
    },
    {
      path: "/conferences",
      name: "conferences",
      component: Conferences,
    },
  ],
});

export default router;