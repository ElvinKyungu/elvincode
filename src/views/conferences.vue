<script setup lang="ts">
import { ref } from 'vue'
import Header from "@/components/base/Header.vue"
import Footer from '@/components/base/Footer.vue'
import TouristCard from '@/components/TouristCard.vue'

// majorTourist
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

const majorTourist = [
  {
    img: conf15,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf16,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf17,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf1,
    title: "Panoramic Viewpoint",
    price: 49,
    notation: '4.7'
  },
  {
    img: conf2,
    title: "Temples and Shrines",
    price: 99,
    notation: '4.7'
  },
  {
    img: conf3,
    title: "Parks spaces",
    price: 20,
    notation: '4.5'
  },
  {
    img: conf4,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf5,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf6,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf7,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf8,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf9,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf10,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  // {
  //   img: conf11,
  //   title: "Green space",
  //   price: 0,
  //   notation: 'Free'
  // },
  {
    img: conf12,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf13,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  {
    img: conf14,
    title: "Green space",
    price: 0,
    notation: 'Free'
  },
  
  
]

</script>

<template>
  <Header class="header w-full h-full" />
  <main class="w-full relative px-5 md:px-20 py-10 md:py-20 lg:py-28">
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative">
      <h2 ref="titleRef1" class="pt-10 text-3xl md:text-5xl relative z-10 my-10">
        Conference speaker
      </h2>
      <div ref="cards1Ref1" class="grid relative md:gap-10 z-40 grid-cols-12">
        <div 
          v-for="(attraction, index) in majorTourist" 
          :key="index" 
          class="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <TouristCard 
            :image="attraction.img"
            :title="attraction.title"
            :rating="attraction.notation"
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