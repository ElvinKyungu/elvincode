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
        // Mettre à jour l'image source avant l'apparition
        stickyImageElement.src = cardInfos[cardIndex].componentImage;
      }
    });

    // Faire disparaître le bloc dans la direction inverse
    tl.to(blockElement, {
      opacity: 0,
      y: direction === 'top-to-bottom' ? '50%' : '-50%',
      duration: 0.25,
      ease: 'power2.in',
    });

    // Réapparaître le bloc dans la direction opposée
    tl.fromTo(blockElement, 
      { opacity: 0, y: direction === 'top-to-bottom' ? '-50%' : '50%' },
      { opacity: 1, y: '0%', duration: 0.35, ease: 'power2.out' }
    );

    // Mettre à jour l'index de la carte précédente
    previousCardIndex.value = cardIndex;
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
              <button class="preview-button absolute flex gap-2 left-10 bg-white/20 backdrop-blur-sm top-1 rounded-full border border-[#222] px-5 py-1">
                <span>Preview</span>
                <IconArrowGrowUp />
              </button>
            </div>
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

<!-- <script setup lang="ts">
import { ref } from 'vue'

export interface ProjectCard {
  componentName: string
  componentDescription: string
  componentImage: string
}
const props = defineProps<{
  cardInfo: ProjectCard[]
}>()

</script>

<template>
  <div v-for="(card, index) in cardInfo" :key="index" class="cursor-pointer rounded-2xl flex gap-5 w-full mb-4">
    <div class="relative w-44 h-40 rounded-lg">
      <img :src="card.componentImage" alt="" class="object-cover rounded-l-2xl absolute h-full">
    </div>
    <div class="py-3">
      <h2 class="text-xl">{{ card.componentName }}</h2>
      <p class="text-gray-400 mt-2">
        {{ card.componentDescription }}
      </p>
    </div>
  </div>
</template>
 -->