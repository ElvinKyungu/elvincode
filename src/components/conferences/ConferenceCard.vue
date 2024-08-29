<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectCard } from '@/types/index'

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
      <ul class="flex gap-2 text-sm mt-5">
        <li v-for="techno in card.componentTechno" :key="techno" class="tag">{{ techno }}</li>
      </ul>
    </div>
  </div>
</template>
