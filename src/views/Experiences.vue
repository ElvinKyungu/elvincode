<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useDark } from "@vueuse/core"
import Experience from "@/components/experiences/Experiences.vue"
import Header from "@/components/base/Header.vue"
import IconChek from "@/components/icons/IconChek.vue"
import experiences from '@/data/experiences.json'
import ExperiencesDetails from '@/components/experiences/ExperienceDetail.vue'
import gsap from 'gsap'
import { 
  efficientOutsourceExperience,
  atlanticZoneExperience,
  soixanteCircuitsExperience,
  bayammoExperience,
  codelabExperience,
  lushitrapExperience
} from '@/data/experiencesDetails'
import type { ExperienceDetail } from '@/types/experiences'

const isDark = useDark()
// State to store the selected experience details
const selectedExperience = ref(efficientOutsourceExperience)
const activeExperienceTitle = ref(experiences[0].title)  // Default

function getExperienceDetails(title: string) {
  switch (title) {
    case 'Efficient Outsource':
      return efficientOutsourceExperience
    case 'Atlantic Zone':
      return atlanticZoneExperience
    case 'Soixante Circuits':
      return soixanteCircuitsExperience
    case 'Bayammo':
      return bayammoExperience
    case 'CodeLab':
      return codelabExperience
    case 'LushiTrap':
      return lushitrapExperience
    default:
      return efficientOutsourceExperience
  }
}

// Function to handle the animation sequence
function selectExperience(experienceDetail:ExperienceDetail) {
  gsap.to('.experience-details', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete() {
      // Change the content after fade out
      selectedExperience.value = experienceDetail
      activeExperienceTitle.value = experienceDetail.companyName// Set the active experience

      gsap.to('.experience-details', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  })
}

onMounted(() => {
  // Initial fade-in animation when the component is mounted
  gsap.fromTo('.experience-details', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut'
  })
})
</script>

<template>
  <main class="min-h-screen w-full" :class="{ 'text-white bg-[#222]': isDark }">
    <Header class="header w-full h-full" />
    <section class="py-4 flex justify-center w-full pt-20 relative z-0">
      <main class="px-10 w-full font-poppins relative md:w-[85%]">
        <h1 class="mb-5 text-4xl text-center">Experiences</h1>
        <div class="relative px-6 pt-5 pb-7 rounded-xl">
          <div class="grid grid-cols-2 space-x-20">
            <div>
              <Experience
                v-for="(experience, index) in experiences"
                :key="index"
                :date="experience.date"
                :title="experience.title"
                :technologies="experience.technologies"
                :isLast="experience.isLast"
                @click="selectExperience(getExperienceDetails(experience.details.company))"
                :isActive="activeExperienceTitle === experience.details.company"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>
            </div>
            <div class="bg-black/10 rounded-lg py-5 px-10 relative hidden md:block">
              <ExperiencesDetails 
                :experiences="selectedExperience" 
                class="experience-details"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  </main>
</template>

<style>
/* Add any custom styles needed for smooth transitions */
</style>
