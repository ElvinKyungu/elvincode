<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import Header from "@/components/base/Header.vue"
import ProjectCard from '@/components/experiences/ProjectCard.vue'
import keybord from '@/assets/keyboard.png'
import IconArrowGrowUp from '@/components/icons/IconArrowGrowUp.vue'
import IconHeart from '@/components/icons/IconHeart.vue'

const cardInfos = [
  {
    componentName: "Mecanical Keyboard",
    componentDescription: "A mecanical keyboard builded with JS, GSAP and CSS",
    componentImage: keybord,
    componentTechno: ["Vue.js", "GSAP", "TailwindCSS"]
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
      delay: index * 0.1,
    })

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
  <main class="min-h-screen w-full font-poppins">
    <Header class="header w-full h-full" />
    <section class="py-4 min-h-screen flex justify-center bg-[#222] flex-col items-center w-full pt-20 md:pt-40 relative z-0">
      <div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]">
      </div>

      <h1 class="text-2xl md:text-3xl mt-20 lg:text-4xl xl:text-5xl text-white text-center md:mt-7 px-4 md:px-0">
        Discover my flagship projects
        <br>
        And the <span class="from-yellow-400 via-green-400 to-teal-300 bg-gradient-to-r bg-clip-text text-transparent">UI components</span> I've developed. 
      </h1>

      <div class="relative mt-6 md:mt-10">
        <button class="border border-[#363333] text-white py-2 px-5 rounded-full">
          ✨ Explore components
        </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-10 md:mt-20 px-4 md:px-8 lg:px-20 w-full relative gap-6 md:gap-10">
      
        <div class="col-span-1 lg:col-span-5 space-y-6 md:space-y-10">
          <div 
            v-for="(card, index) in cardInfos" 
            :key="index" 
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

        <div class="hidden lg:block lg:col-span-1"></div>

        <div class="col-span-1 lg:col-span-6 lg:sticky lg:top-20 h-[40vh] md:h-[50vh] w-full overflow-hidden mt-6 lg:mt-0">
          <div ref="blockRef" class="h-full w-full relative">
            <div class="absolute right-5 top-5 flex justify-between w-full">
              <div class="z-50 flex right-0 absolute top-0">
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
              <button class="preview-button text-white absolute flex gap-2 left-10 bg-white/20 backdrop-blur-sm top-1 rounded-full border border-[#222] px-3 md:px-5 py-1 text-sm md:text-base">
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
