<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import IconArrowGrowUp from './icons/IconArrowGrowUp.vue'
import vuejs from '@/assets/vuejs.png'
import nuxt from '@/assets/nuxt.svg'
import js from '@/assets/js.png'
import ts from '@/assets/typescript.png'
import tailwindcss from '@/assets/tailwindcss.jpg'

const buttonRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const images = document.querySelectorAll('.animate-img')
  const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.1 })

  tl.fromTo(images,
    {
      y: -200, 
      opacity: 0,
    },
    {
      y: 0, 
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.4, 0.4)", 
      stagger: {
        each: 0.2,
      }
    }
  );

  gsap.fromTo(titleRef.value, 
    {
      y: 50,
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
    },
    {
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)", 
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    }
  )

  gsap.fromTo(paragraphRef.value, 
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 1,
    }
  )
})

</script>

<template>
  <section class="grid relative z-40 md:gap-5 lg:gap-16 grid-cols-12 px-5 md:px-20  pt-36 md:pt-5 md:py-20 lg:py-36">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="col-span-12 relative z-20 md:col-span-6 lg:py-10">
      <h2 ref="titleRef" class="text-3xl md:mt-5 md:text-4xl lg:text-6xl">
        Hi, I'm Elvin Kyungu, you can call me Elvin Code also !
      </h2>
      <p ref="paragraphRef" class="mt-12 text-lg">
        I'm a passionate Frontend Developer and i specialize in building modern, responsive, and dynamic web applications.
        My expertise includes Vue.js, Nuxt.js, and TailwindCSS, with a focus on creating elegant and performant user interfaces.
        Let's explore the possibilities together and build amazing projects.
      </p>
      <button 
        ref="buttonRef"
        class="bg-black inline-flex gap-2 text-white py-4 px-5 mt-12 rounded-lg"
      >
        Learn more about my work
        <IconArrowGrowUp/>
      </button>
    </div>
    <div class="relative z-20 col-span-12 md:col-span-6 overflow-hidden mt-10 pt-5 pb-16">
      <div class="flex flex-wrap gap-4 -space-x-24 justify-center md:w-[32rem] h-full mx-auto">
        <img :src="vuejs" alt="Vue.js logo" class="animate-img bg-black image-animate rotate-12">
        <img :src="nuxt" alt="Nuxt.js logo" class="animate-img bg-black image-animate -rotate-12">
        <img :src="ts" alt="TypeScript logo" class="animate-img bg-black image-animate rotate-6">
        <img :src="js" alt="JavaScript logo" class="animate-img image-animate -rotate-12">
        <img :src="tailwindcss" alt="TailwindCSS logo" class="animate-img image-animate object-cover">
      </div>
    </div>
  </section>
</template>

<style>
</style>
