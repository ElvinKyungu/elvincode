<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import imgshrine from '@/assets/gsap.jpg'
import imgParanomic from '@/assets/gsap.jpg'
import imgHotel1 from '@/assets/gsap.jpg'
import imgHotel3 from '@/assets/gsap.jpg'
import imgCuisine1 from '@/assets/gsap.jpg'
import imgShopping5 from '@/assets/gsap.jpg'

const listContainer1 = ref<HTMLElement | null>(null)
const listContainer2 = ref<HTMLElement | null>(null)
const listContainer3 = ref<HTMLElement | null>(null)

const truncate = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + '...' : text
}

// Example of article titles
const articleTitles = [
  "Écrire du Code Vue.js Clair et Lisible : La Magie des Composants Propres",
  "Maîtrisez les objets en JavaScript : Explorez leurs fonctionnalités et leurs méthodes essentielles",
  "Les 10 raisons d'utiliser la Composition API",
  "S'adapter dans une nouvelle équipe en tant que développeur",
  "Améliorez la clarté et la cohérence de votre historique de validation",
  "Comment centrer parfaitement un élément en HTML CSS ?"
]
const truncatedTitles = computed(() => {
  return articleTitles.map(title => truncate(title, 50))
})

onMounted(() => {
  if (listContainer1.value) {
    gsap.from(listContainer1.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out"
    })
  }
  
  if (listContainer2.value) {
    gsap.from(listContainer2.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out" 
    })
  }
  if (listContainer3.value) {
    gsap.from(listContainer3.value?.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out" 
    })
  }
})
</script>

<template>
  <div class="py-10 max-w-7xl mx-auto flex justify-between">
    <ul ref="listContainer1" class="space-y-5 flex flex-col w-full">
      <li v-for="(title, index) in truncatedTitles.slice(0, 2)" :key="index" class="flex gap-3 cursor-pointer">
        <div class="app-result">
          <img
            :src="imgParanomic"
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">{{ title }}</p>
            <p class="opacity-90">Elvin Code</p>
          </div>
        </div>
      </li>
    </ul>

    <ul ref="listContainer2" class="space-y-5 flex flex-col w-full">
      <li v-for="(title, index) in truncatedTitles.slice(2, 4)" :key="index" class="flex gap-3 cursor-pointer">
        <div class="app-result">
          <img
            :src="imgHotel3"
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">{{ title }}</p>
            <p class="opacity-90">By Elvin Code</p>
          </div>
        </div>
      </li>
    </ul>

    <ul ref="listContainer3" class="space-y-5 flex flex-col w-full">
      <li v-for="(title, index) in truncatedTitles.slice(4, 6)" :key="index" class="flex gap-3 cursor-pointer">
        <div class="app-result ">
          <img
            :src="imgShopping5"
            class="w-16 rounded-xl object-cover h-16 shrink-0"
          />
          <div class="w-full flex flex-col items-start">
            <p class="text-lg">{{ title }}</p>
            <p class="opacity-90">By Elvin Code</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>