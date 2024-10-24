<script setup lang="ts">
import type { ProjectCard } from '@/types/project'
const props = defineProps<{
  cardInfo: ProjectCard[]
}>()
</script>

<template>
  <div 
    v-for="(card, index) in cardInfo" 
    :key="index" 
    class="border-container border text-white relative border-[#363333] cursor-pointer rounded-2xl w-full mb-4"
  >
    <div class="relative">
      <img 
        :src="card.componentImage" 
        alt="" 
        class="object-cover w-full h-[200px] md:h-[10rem] md:w-[10rem] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
      >
    </div>

    <div class="p-4 md:p-5 md:flex-1">
      <h2 class="text-lg md:text-xl font-medium">{{ card.componentName }}</h2>
      <p class="text-gray-400 text-sm md:text-base mt-2">
        {{ card.componentDescription }}
      </p>
      <ul class="flex flex-wrap gap-2 text-xs md:text-sm mt-3 md:mt-5">
        <li 
          v-for="techno in card.componentTechno" 
          :key="techno" 
          class="bg-white/10 px-2 py-1 rounded-full"
        >
          {{ techno }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .border-container {
    display: flex;
  }
}
</style>