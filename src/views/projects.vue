<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'
import { useDark } from "@vueuse/core"
import Header from "@/components/base/Header.vue"
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ios from '@/assets/ios.png'
import visionpro from '@/assets/visionpro.png'

const isDark = useDark()
const cardInfos = [
  {
    componentName: "Composant iOS",
    componentDescription: "C'est un composant UI qui a 5 fenêtres d'un iOS 18",
    componentImage: ios,
    componentTechno: ["Vue.js", "GSAP", "TailwindCSS"]
  },
  {
    componentName: "Composant Android",
    componentDescription: "C'est un composant UI qui a 3 fenêtres d'un Android 12",
    componentImage: visionpro,
    componentTechno: ["Vue.js", "TailwindCSS", "Axios"]
  }
]

const stickyImageRef = ref<HTMLImageElement | null>(null)
const previousCardIndex = ref<number | null>(null)

const handleCardClick = (event: Event, cardIndex: number) => {
  const cardElement = event.currentTarget as HTMLElement
  const stickyImageElement = stickyImageRef.value

  if (stickyImageElement) {
    // Calculate positions
    const cardRect = cardElement.getBoundingClientRect()
    const stickyRect = stickyImageElement.getBoundingClientRect()

    // Determine the direction of the animation based on the previous card index
    const direction = (previousCardIndex.value !== null && cardIndex < previousCardIndex.value)
      ? 'bottom-to-top'
      : 'top-to-bottom'

    // Animate image based on direction
    gsap.fromTo(stickyImageElement, 
      { y: direction === 'top-to-bottom' ? '-100%' : '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
    stickyImageElement.src = cardInfos[cardIndex].componentImage

    previousCardIndex.value = cardIndex
  }
}
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
        <div>
          <div v-for="(card, index) in cardInfos" :key="index" 
          class="relative cursor-pointer" 
          @click="(event) => handleCardClick(event, index)">
          <ProjectCard :cardInfo="[card]" />
        </div>
        </div>
        <div class="sticky top-20 h-[50vh] overflow-hidden">
          <img ref="stickyImageRef" :src="cardInfos[0].componentImage" alt="" 
            class="object-cover h-full cursor-pointer rounded-2xl w-full opacity-0">
        </div>
      </div>
    </section>
  </main>
</template>
