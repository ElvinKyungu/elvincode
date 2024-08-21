<script setup lang="ts">
import { useDark } from "@vueuse/core"
import Experience from "@/components/experiences/Experiences.vue"
import Header from "@/components/base/Header.vue"
import IconChek from "@/components/icons/IconChek.vue"
import experiences from '@/data/experiences.json'
import ExperiencesDetails from '@/components/experiences/ExperienceDetail.vue'
import type { ExperienceDetail } from '@/types/experiences'

const isDark = useDark()
const efficientOutsourceExperience: ExperienceDetail = {
  companyName: "Efficient Outsource SRL",
  duration: "5 months of code",
  workType: {
    location: 'Full Remote',
    time: 'Full Time',
  },
  softSkills: [
    {
      title: "Analytical skills",
      description: "Each time I had to find solutions to new challenges, which pushed me to give my all, analyze the problem and live up to the company's expectations.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGcMcti8SAadg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1691835487556?e=1729728000&v=beta&t=9TlfE178JTSbViigb1IFca_ILLxVc5S3Q-QNzP4J5nI",
      isHigh: false,  // Middle skill level
    },
    {
      title: "Time management",
      description: "I learned to manage my time and tasks very well, which helped me avoid technical debts.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGcMcti8SAadg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1691835487556?e=1729728000&v=beta&t=9TlfE178JTSbViigb1IFca_ILLxVc5S3Q-QNzP4J5nI",
      isHigh: true,  // High skill level
    },
    {
      title: "Communication",
      description: "I communicated very well with the team.",
      image: "https://infobiz.md/storage/companies/img/1024600042553.png",
      isHigh: true,  
    }
  ],
  hardSkills: [
   
  ],
  creativeSkills: [
    
  ],
};
</script>
<template>
  <main class="min-h-screen w-full" :class="{ 'text-white bg-[#222]': isDark }">
    <Header class="header w-full h-full" />
    <section
      class="py-4 flex justify-center w-full pt-20 relative z-0"
    >
      <main class="px-10 w-full font-poppins relative  md:w-[85%]">
        <h1 class="mb-5 text-4xl text-center">Experiences</h1>
        <div class=" relative px-6 pt-5 pb-7 rounded-xl">
          <div class="grid grid-cols-2 space-x-20">
            <div>
              <Experience
                v-for="(experience, index) in experiences"
                :key="index"
                :date="experience.date"
                :title="experience.title"
                :technologies="experience.technologies"
                :isLast="experience.isLast"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>
            </div>
            <div class="bg-black/10 rounded-lg py-5 px-10 relative hidden md:block">
              <ExperiencesDetails :experiences="efficientOutsourceExperience"/>
            </div>
          </div>
        </div>
      </main>
    </section>
  </main>
</template>
<style>

</style>
