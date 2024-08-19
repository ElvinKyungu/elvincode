<script setup lang="ts">
import { useDark } from "@vueuse/core"
import Header from "@/components/base/Header.vue"
import ProjectCard from '@/components/projects/ProjectCard.vue'
import iosImage from '@/assets/ios.png'
const isDark = useDark()

const cardInfos = [
  {
    componentName: "Composant iOS",
    componentDescription: "C'est un composant UI qui a 5 fenêtres d'un iOS 18",
    componentImage: iosImage,
    componentTechno: ["Vue.js", "GSAP", "TailwindCSS"]
  },
  {
    componentName: "Composant iOS",
    componentDescription: "C'est un composant UI qui a 5 fenêtres d'un iOS 18",
    componentImage: iosImage,
    componentTechno: ["Vue.js", "GSAP", "TailwindCSS"]
  },
  {
    componentName: "Composant iOS",
    componentDescription: "C'est un composant UI qui a 5 fenêtres d'un iOS 18",
    componentImage: iosImage,
    componentTechno: ["Vue.js", "GSAP", "TailwindCSS"]
  },
]
</script>

<template>
  <main class="min-h-screen w-full font-playfair" :class="{ 'text-white bg-[#222]': isDark }">
    <Header class="header w-full h-full" />
    <section class="py-4 flex justify-center flex-col items-center w-full pt-20 relative z-0">
      <div>
        <button class="border border-[#363333] py-2 px-5 rounded-full">✨ Explore components</button>
      </div>
      <h1 class="text-5xl text-center mt-7">
        Discover my flagship projects
        <br>
        And the <span class="from-yellow-400 via-green-400 to-teal-300 bg-gradient-to-r bg-clip-text text-transparent">UI components</span> I've developed. 
      </h1>
      <div class="flex gap-5 mt-10">
        <button class="px-10 py-3 border border-[#363333] rounded-xl">Try for free</button>
        <button class="px-10 py-3 border border-[#363333] rounded-xl">View Demo</button>
      </div>
      <div class="grid grid-cols-2 mt-20 w-95% md:w-[75%] gap-10">
        <div class="relative">
          <ProjectCard :card-info="cardInfos" />
        </div>
        <div class="sticky top-20 h-[50vh] overflow-hidden">
          <img src="@/assets/ios.png" alt="" class="object-cover h-full cursor-pointer rounded-2xl w-full">
        </div>
      </div>
    </section>
  </main>
</template>

