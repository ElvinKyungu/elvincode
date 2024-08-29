<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useDark } from "@vueuse/core"
import Header from "@/components/base/Header.vue"
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ios from '@/assets/ios.png'
import visionpro from '@/assets/visionpro.png'
import visionVR from "@/assets/vr.jpg"
import conf from '@/assets/image.png'

const isDark = useDark()
const cardInfos = [
  {
    componentName: "Composant iOS",
    componentDescription: "C'est un composant UI qui a 5 fenêtres d'un iOS 18",
    componentImage: ios,
  },
  {
    componentName: "Composant Android",
    componentDescription: "C'est un composant UI qui a 3 fenêtres d'un Android 12",
    componentImage: visionpro,
  },
  {
    componentName: "Composant Android",
    componentDescription: "C'est un composant UI qui a 3 fenêtres d'un Android 12",
    componentImage: visionVR,
  }
]

const stickyImageRef = ref<HTMLImageElement | null>(null)
const previousCardIndex = ref<number | null>(null)
  const blockRef = ref<HTMLDivElement | null>(null);


const handleCardClick = (event: Event, cardIndex: number) => {
  const stickyImageElement = stickyImageRef.value;
  const blockElement = blockRef.value;

  if (stickyImageElement && blockElement) {
    const direction = (previousCardIndex.value !== null && cardIndex < previousCardIndex.value)
      ? 'bottom-to-top'
      : 'top-to-bottom';

    const tl = gsap.timeline({
      onStart: () => {
        stickyImageElement.src = cardInfos[cardIndex].componentImage;
      }
    })

    tl.to(blockElement, {
      opacity: 0,
      y: direction === 'top-to-bottom' ? '50%' : '-50%',
      duration: 0.25,
      ease: 'power2.in',
    })

    tl.fromTo(blockElement, 
      { opacity: 0, y: direction === 'top-to-bottom' ? '-50%' : '50%' },
      { opacity: 1, y: '0%', duration: 0.35, ease: 'power2.out' }
    )
    previousCardIndex.value = cardIndex
  }
}
</script>

<template>
  <main class="min-h-screen w-full font-poppins" :class="{ 'text-white bg-[#222]': isDark }">
    <Header class="header w-full h-full" />
    <section class="py-4 flex justify-center flex-col items-center w-full pt-20 relative z-0">
      <div class="w-[90%] h-[50rem] object-cover rounded3xl relative bg-white/10 ">
        <img :src="conf" class="absolute w-full rounded3xl h-full object-cover" alt="">
        <h1 class="text-3xl mt-5 ml-5">Elvin Conférence</h1>
      </div>
      <div class="grid grid-cols-2 mt-20 w-95% md:w-[75%] gap-10">
        <div>
          <div 
            v-for="(card, index) in cardInfos" :key="index" 
            class="relative rounded-2xl cursor-pointer transition-colors duration-300" 
            :class="{
              'bg-white/10': index === previousCardIndex,
              'hover:bg-white/10': index !== previousCardIndex
            }"
            @click="(event) => handleCardClick(event, index)"
          >
          <ProjectCard :cardInfo="[card]" />
        </div>
        </div>
        <div class="sticky top-20 h-[50vh] overflow-hidden">
          <div ref="blockRef" class="h-full w-full relative">
            <img
              ref="stickyImageRef"
              :src="cardInfos[0].componentImage" 
              alt="" 
              class="absolute object-cover h-full w-full cursor-pointer rounded-2xl"
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.rounded3xl{
  border-radius: 1.5rem;
}
</style>