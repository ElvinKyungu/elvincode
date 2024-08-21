<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ExperienceDetail } from '@/types/experiences.ts'
import SkillsContent from './SkillsContent.vue'
import gsap from 'gsap'

defineProps<{
  experiences: ExperienceDetail
}>()

const activeSkillType = ref<'softSkills' | 'hardSkills' | 'creativeSkills'>('softSkills')
const skillsContentRef = ref<HTMLElement | null>(null)

const switchSkillType = (skillType: 'softSkills' | 'hardSkills' | 'creativeSkills') => {
  if (skillType !== activeSkillType.value) {
    activeSkillType.value = skillType
  }
}

watch(activeSkillType, (newSkillType, oldSkillType) => {
  if (skillsContentRef.value) {
    gsap.fromTo(
      skillsContentRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'quad.inOut' }
    )
  }
})
</script>

<template>
  <div ref="rightPanel">
    <div class="flex justify-between">
      <h1 class="text-xl">{{ experiences.companyName }}</h1>
      <IconDots class="cursor-pointer" />
    </div>
    <div class="relative">
      <div class="border-b mt-7 border-green-400">
        <h2 class="text-3xl pb-5">{{ experiences.duration }}</h2>
      </div>
      <div class="flex w-full">
        <div class="w-1/2 flex items-end gap-3">
          <p class="border border-gray-600 rounded-full py-1 px-4 text-sm">⏱️ {{ experiences.workType.time }}</p>
          <p class="border border-gray-600 rounded-full py-1 px-4 text-sm">📍 {{ experiences.workType.location }}</p>
        </div>
        <div class="w-1/2 flex justify-end items-end gap-4 -mt-20">
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
      <button
        class="py-2 px-5 rounded-full"
        :class="activeSkillType === 'softSkills' ? 'bg-white text-black' : 'bg-white/10 text-white'"
        @click="switchSkillType('softSkills')"
      >
        Soft Skills
      </button>
      <button
        class="py-2 px-5 rounded-full"
        :class="activeSkillType === 'hardSkills' ? 'bg-white text-black' : 'bg-white/10 text-white'"
        @click="switchSkillType('hardSkills')"
      >
        Hard Skills
      </button>
      <button
        class="py-2 px-5 rounded-full"
        :class="activeSkillType === 'creativeSkills' ? 'bg-white text-black' : 'bg-white/10 text-white'"
        @click="switchSkillType('creativeSkills')"
      >
        Creative Skills
      </button>
    </div>
    <div ref="skillsContentRef" class="mt-8">
      <SkillsContent :skills="experiences[activeSkillType]" />
    </div>
  </div>
</template>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>