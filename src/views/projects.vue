<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useDark } from "@vueuse/core"
import Header from "@/components/base/Header.vue"
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ios from '@/assets/ios.png'
import visionpro from '@/assets/visionpro.png'
import visionVR from "@/assets/vr.jpg"
import IconArrowGrowUp from '@/components/icons/IconArrowGrowUp.vue'
import IconHeart from '@/components/icons/IconHeart.vue'

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
  },
  {
    componentName: "Composant Android",
    componentDescription: "C'est un composant UI qui a 3 fenêtres d'un Android 12",
    componentImage: visionVR,
    componentTechno: ["Vue.js", "TailwindCSS", "Axios"]
  }
]

const hearts = Array.from({ length: 10 }, (_, i) => i + 1);
const heartRefs = ref<HTMLDivElement[]>([]);

onMounted(() => {
  // Conversion de NodeList en tableau
  heartRefs.value = Array.from(document.querySelectorAll('.heart-animation')) as HTMLDivElement[];
});

const animateHearts = () => {
  heartRefs.value.forEach((heart, index) => {
    const tl = gsap.timeline({
      delay: index * 0.1, // Décalage entre les cœurs
    });

    tl.fromTo(
      heart,
      { opacity: 0, y: 0, x: 0, scale: 0.5, transformOrigin: 'center' },
      {
        opacity: 1,
        y: gsap.utils.random(50, 100), 
        x: gsap.utils.random(10, 50),
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
      }
    ).to(heart, {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      ease: 'power2.in',
    })
  })
}

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
  <main class="min-h-screen w-full font-poppins" :class="{ 'text-white bg-[#222]': isDark }">
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
          <div  class="h-full absolute w-full">
            <div class="absolute right-5 top-5 flex justify-between w-full">
              <div class="z-50 flex right-3 absolute top-0">
                <button @click="animateHearts" class="rounded-full bg-white/20 p-2">
                  <IconHeart class="heart-icon text-white"/>
                </button>
                <div
                  v-for="index in hearts"
                  :key="index"
                  class="heart-animation"
                  ref="hearts"
                >
                  <IconHeart class="heart-icon"/>
                </div>
              </div>
              <button class="absolute flex gap-2 left-10 bg-white/20 backdrop-blur-sm top-1 rounded-full border border-[#222] px-5 py-1">
                <span>Preview</span>
                <IconArrowGrowUp />
              </button>
            </div>
            <img
              ref="stickyImageRef"
              :src="cardInfos[0].componentImage" 
              alt="" 
              class="object-cover h-full cursor-pointer rounded-2xl w-full opacity-0"
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
button {
  cursor: pointer;
  z-index: 2
}
.heart-icon {
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
}

.heart-animation {
  position: absolute;
  top: 0;
  opacity: 0; 
  right: 2rem;
}
</style>