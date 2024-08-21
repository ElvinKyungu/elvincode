<script setup lang="ts">
import type { ExperienceDetail } from '@/types/experiences.ts'
import SkillsContent from './SkillsContent.vue'

defineProps<({
  experiences: ExperienceDetail
})>()
</script>
<template>
  <div ref="rightPanel">
    <div class="flex justify-between">
      <h1 class="text-xl">{{ experiences.companyName }}</h1>
      <IconDots class="cursor-pointer"/>
    </div>
    <div class="relative">
      <div class="border-b mt-7 border-green-400">
        <h2 class="text-3xl pb-5">{{ experiences.duration }}</h2>
      </div>
      <div class="flex w-full">
        <div class=" w-1/2 flex items-end gap-3">
          <p class="border border-gray-600 rounded-full py-1 px-4 text-sm">⏱️ {{ experiences.workType.time }}</p>
          <p class="border border-gray-600 rounded-full py-1 px-4 text-sm">📍 {{ experiences.workType.location }}</p>
        </div>
        <div class=" w-1/2 flex justify-end items-end gap-4 -mt-20">
          <div class="rounded-full h-20 z-50 w-2 bg-yellow-200"></div>
          <div class="rounded-full h-14 z-50 w-2 bg-yellow-100"></div>
          <div class="rounded-full h-28 z-50 w-2 bg-yellow-300"></div>
          <div class="rounded-full h-40 z-50 w-2 bg-green-400"></div>
          <div class="rounded-full h-28 z-50 w-2 bg-white"></div>
          <div class="rounded-full h-32 z-50 w-2 bg-yellow-500"></div>
          <div class="rounded-full h-24 z-50 w-2 bg-green-200"></div>
        </div>
      </div>
    </div>
    <h1 class="mt-7 text-white text-2xl">What I learned from this work</h1>
    <div class="flex justify-start gap-5 mt-5">
      <button class="bg-white text-black py-2 px-5 rounded-full">Soft Skills</button>
      <button class="bg-white/10 py-2 px-5 rounded-full">Hard Skills</button>
      <button class="bg-white/10 py-2 px-5 rounded-full">Creative Skills</button>
    </div>
    <SkillsContent :skills="experiences.softSkills" />
  </div>
</template>