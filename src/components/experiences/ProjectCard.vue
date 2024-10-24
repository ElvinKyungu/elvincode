<script setup lang="ts">
import type { ProjectCard } from '@/types/project'
const props = defineProps<{
  cardInfo: ProjectCard[]
}>()
</script>
<template>
  <div v-for="(card, index) in cardInfo" :key="index" class="border text-white relative border-[#363333] cursor-pointer rounded-2xl flex gap-5 w-full mb-4">
    <div class="relative justify-center flex items-center h-full rounded-lg">
      <img :src="card.componentImage" alt="" class="object-cover w-[10rem] h-[10rem] rounded-l-2xl">
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