<script setup lang="ts">
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
