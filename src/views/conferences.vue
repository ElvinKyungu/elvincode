<script setup lang="ts">
import { ref } from 'vue'
import Header from "@/components/base/Header.vue"
import Footer from '@/components/base/Footer.vue'
import TouristCard from '@/components/TouristCard.vue'

// conferences
import conf1 from '@/assets/conf1.jpeg'
import conf2 from '@/assets/conf2.jpeg'
import conf3 from '@/assets/conf3.jpg'
import conf4 from '@/assets/conf4.jpg'
import conf5 from '@/assets/conf5.jpg'
import conf6 from '@/assets/conf6.png'
import conf7 from '@/assets/conf7.jpg'
import conf8 from '@/assets/conf8.jpg'
import conf9 from '@/assets/conf9.jpeg'
import conf10 from '@/assets/conf10.png'
import conf12 from '@/assets/conf12.jpg'
import conf13 from '@/assets/conf13.jpeg'
import conf14 from '@/assets/conf14.jpg'
import conf15 from '@/assets/elvin2.jpeg'
import conf16 from '@/assets/elvin10.jpeg'
import conf17 from '@/assets/elvin7.jpeg'

import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const cards1Ref1 = ref<HTMLElement | null>(null)
const cards1Ref2 = ref<HTMLElement | null>(null)
const cards1Ref3 = ref<HTMLElement | null>(null)
const cards1Ref4 = ref<HTMLElement | null>(null)


useTitleAnimation(titleRef1, 0.2)
useTitleAnimation(titleRef2, 0.2)
useTitleAnimation(titleRef3, 0.2)
useTitleAnimation(titleRef4, .3)
useParagraphAnimation(cards1Ref1, .5)
useParagraphAnimation(cards1Ref2, .5)
useParagraphAnimation(cards1Ref3, .5)
useParagraphAnimation(cards1Ref4, .5)

const conferences = [
  {
    img: conf15,
    title: "A passion for tech as a lever for a promising professional future, both individually and collectively",
    price: 2024,
  },
  {
    img: conf16,
    title: "Community development drives strong growth in Lush's tech ecosystem",
    price: 2022,
  },
  {
    img: conf17,
    title: "Economic, environmental and social sustainability",
    price: 2023,
  },
  {
    img: conf1,
    title: "Concours solution",
    price: 2024,
  },
  {
    img: conf2,
    title: "Devfest student edition",
    price: 2023,
  },
  {
    img: conf3,
    title: "Code fiesta 2023",
    price: 2023,
  },
  {
    img: conf4,
    title: "Soft Day 2024",
    price: 2024,
  },
  {
    img: conf5,
    title: "Evangelization tour, MLSA community at University of Lubumbashi",
    price: 2024,
  },
  {
    img: conf6,
    title: "Frontend web development contest",
    price: 2022,
  },
  {
    img: conf7,
    title: "Artificial intelligence in the DRC: opportunities and challenges",
    price: 2023,
  },
  {
    img: conf8,
    title: "Young people in digital",
    price: 2022,
  },
  {
    img: conf9,
    title: "Introduction to the developer professions",
    price: 2023,
  },
  {
    img: conf10,
    title: "Essential computer skills.",
    price: 2024,
  },
  // {
  //   img: conf11,
  //   title: "Green space",
  //   price: 0,
  //   notation: 'Free'
  // },
  {
    img: conf12,
    title: "Google IO extend",
    price: 2023,
  },
  {
    img: conf13,
    title: "Devfest Google Developer Group Lubumbashi",
    price: 2024,
  },
  {
    img: conf14,
    title: "Devfest GDG Lubumbashi",
    price: 2023,
  },
]

</script>

<template>
  <Header class="header w-full h-full" />
  <main class="w-full relative px-5 bg-[#222] text-white md:px-20 py-10 md:py-20 lg:py-28">
    <div class="hidden lg:block mt-20 relative w-full h-[30vh]">
      <div class="absolute w-full h-full bg-black/50 z-40 rounded-xl"></div>
      <img :src="conf12" class="rounded-xl absolute w-full  h-full z-20 object-cover" alt="">
      <h1 class="px-5 lg:px-10 font-light relative text-center z-40 flex h-full w-full items-center justify-center text-3xl text-white">
        One of my greatest passions outside of coding is clearly sharing knowledge. It's something that really gets me going, and I do it every chance I get at tech conferences.
      </h1>
    </div>
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative">
      <h2 ref="titleRef1" class="pt-10 text-3xl md:text-5xl relative z-10 my-10">
        Conference speaker
      </h2>
      <div ref="cards1Ref1" class="grid relative md:gap-10 z-40 grid-cols-12">
        <div 
          v-for="(attraction, index) in conferences" 
          :key="index" 
          class="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <TouristCard 
            :image="attraction.img"
            :title="attraction.title"
            :price="attraction.price"
          />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
<style scoped>

</style>