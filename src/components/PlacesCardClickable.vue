<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {gsap} from 'gsap'
import vuejs from "@/assets/vuejs.png"
import tailwind from "@/assets/tailwindcss.jpg"
import ts from "@/assets/typescript.png"
import unocss from '@/assets/unocss.svg'
import gsapImg from '@/assets/gsap.jpg'
import js from '@/assets/js.png'
import nuxtImg from '@/assets/nuxt.svg'
import IconArrowGrowUp from '@/components/icons/IconArrowGrowUp.vue'
import IconRight from './icons/IconRight.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'
import HeartAnimation from './HeartAnimation.vue'
import IconPencil from './icons/IconPincel.vue'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)

const cardRef1 = ref<HTMLElement | null>(null)
const cardRef2 = ref<HTMLElement | null>(null)
const cardRef3 = ref<HTMLElement | null>(null)

const imagesRef = ref<HTMLElement | null>(null)

const paragraphRef1 = ref<HTMLElement | null>(null)
const paragraphRef2 = ref<HTMLElement | null>(null)
const paragraphRef3 = ref<HTMLElement | null>(null)
const paragraphRef4 = ref<HTMLElement | null>(null)

useTitleAnimation(titleRef1, .2)
useTitleAnimation(titleRef2, .3)
useParagraphAnimation(paragraphRef1, .2)

useTitleAnimation(cardRef1, .4)
useTitleAnimation(cardRef2, .5)
useTitleAnimation(cardRef3, .7)

useParagraphAnimation(paragraphRef2, .6)
useParagraphAnimation(paragraphRef3, .7)
useParagraphAnimation(paragraphRef4, .7)

useParagraphAnimation(imagesRef, .5)

const cardStack = [
  {
    componentName: "Vuejs",
    componentImage: vuejs,
  },
  {
    componentName: "Nuxt ",
    componentImage: nuxtImg,
  },
  {
    componentName: "TypeScript",
    componentImage: ts,
  },
  {
    componentName: "Javascript",
    componentImage: js,
  },
  {
    componentName: "Tailwindcss",
    componentImage: tailwind,
  },
  {
    componentName: "GSAP",
    componentImage: gsapImg,
  },
  {
    componentName: "UnoCSS",
    componentImage: unocss,
  },
]

const hearts = Array.from({ length: 10 }, (_, i) => i + 1)
const heartRefs = ref<HTMLDivElement[]>([])

onMounted(() => {
  // Conversion de NodeList en tableau
  heartRefs.value = hearts.map((_, index) => document.querySelector(`.heart-animation-${index + 1}`)) as HTMLDivElement[]
})

const animateHearts = () => {
  heartRefs.value.forEach((heart, index) => {
    if (!heart) return; // Ajout d'une vérification de sécurité

    const tl = gsap.timeline({
      delay: index * 0.1, // Décalage entre les cœurs
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
        stickyImageElement.src = cardStack[cardIndex].componentImage;
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
  <section class="grid grid-cols-12 gap-7 bg-[#222] relative py-10 md:py-20 px-5 md:px-20 text-white">
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    
    <div class="col-span-12 md:col-span-6 relative z-30">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 ref="titleRef1" class="text-5xl">
          Building Innovative Digital Experiences
        </h1>
        <div class="grid my-10 md:mt-5 grid-cols-12 md:flex justify-between gap-2 md:gap-5 items-center">
          <p ref="paragraphRef1" class="w-full col-span-8">
            As a frontend developer, I craft sleek, interactive web applications, using Vue.js for its reactivity and simplicity to build precise, dynamic user experiences.
          </p>
          <div ref="titleRef2" class="h-[1px] col-span-4 bg-white w-full"></div>
        </div>
      </div>
    </div>
  
    <div class="col-span-12 lg:col-span-6 relative z-30">
      <div class="grid grid-cols-12 gap-5 p-5 ">
        <div class="col-span-2 hidden md:block"></div>
        <div ref="cardRef1" class="col-span-6 md:col-span-5 bg-black text-white p-5 h-32 rounded-md">
          <div ref="paragraphRef2" class="flex justify-between w-full">
            <span>Mastering the art of Vue.js</span>
            <IconRight class="text-white"/>
          </div>
        </div>
        <div ref="cardRef2" class="col-span-6 md:col-span-5 bg-blue-500 text-white p-5 h-32 rounded-md">
          <div ref="paragraphRef3" class="flex justify-between w-full">
            <span>TailwindCSS for responsive elegance</span>
            <IconRight/>
          </div>
        </div>
      </div>
  
      <div ref="cardRef3" class="grid grid-cols-12 border border-[#616161] mt-5 p-5 rounded-lg md:p-5">
        <div ref="paragraphRef4" class="text-lg uppercase col-span-2">My stack</div>
        <div class="col-span-12 md:col-span-10">
          <section class="flex justify-center flex-col items-center w-full relative z-0">
            <div class="grid grid-cols-12 gap-5 relative w-full h-full">
              <div ref="imagesRef" class="sticky col-span-12 md:col-span-6 overflow-hidden h-72 w-full ">
                <div ref="blockRef" class="h-full w-full relative">
                  <div class="absolute flex justify-between w-full">
                    <button class="preview-button left-3 text-white z-40 absolute flex gap-2  bg-black/50 backdrop-blur-sm top-2 rounded-full border border-white/50 px-5 py-1">
                      <span class="text-sm">Preview</span>
                      <IconArrowGrowUp class="w-4 h-4 text-black" />
                    </button>
                    <div class="z-50 flex right-0 absolute top-2">
                      <HeartAnimation/>
                    </div>
                  </div>
                  <img
                    ref="stickyImageRef"
                    :src="cardStack[0].componentImage" 
                    alt="My tech stack" 
                    class="absolute object-cover bg-black h-72 w-full cursor-pointer rounded-2xl"
                  >
                </div>
              </div>
  
              <div class="col-span-12 md:col-span-6 md:ml-3">
                <div 
                  v-for="(card, index) in cardStack" :key="index" 
                  class="relative cursor-pointer" 
                  @click="(event) => handleCardClick(event, index)"
                >
                  <div
                    class="flex flex-col w-full bottom-16 text-white details gap-1"
                  >
                    <div class="components-result">
                      <div class="flex items-center gap-3">
                        <IconPencil />
                        <span class="">{{ card.componentName }}</span>
                      </div>
                      <div class="flex items-center gap-3 ">
                        <span class="components-link">see </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  
</template>
<style>

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