<script setup lang="ts">
import { useDark } from "@vueuse/core"
import Experience from "@/components/experiences/Experiences.vue"
import Header from "@/components/base/Header.vue"
import IconChek from "@/components/icons/IconChek.vue"
import IconDots from '@/components/icons/IconDots.vue'
import IconTime from '@/components/icons/IconTime.vue'
import IconAnalitical from '@/components/icons/IconAnalitical.vue'
import IconFlag from '@/components/icons/IconFlag.vue'
const isDark = useDark()
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
                date="August 24 - Présent"
                title="Frontend web developer a Efficient Outsource SRL 🇷🇺"
                :technologies="[
                  'Vuejs',
                  'Typescript',
                  'Tailwindcss',
                  'VueUse',
                  'GSAP',
                  'GitLab',
                  'API',
                ]"
                :isLast="false"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>

              <Experience
                date="March 2024 - May 2024"
                title="Frontend web developer at Atlantic Zone 🇪🇸"
                :technologies="[
                  'Vuejs',
                  'Typescript',
                  'Tailwindcss',
                  'VueUse',
                  'GSAP',
                  'Google Map',
                  'Supabase',
                  'Git',
                  'Github',
                ]"
                :isLast="false"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>
              <Experience
                date="July 2023 - January 2024"
                title="Frontend web developer at Soixante Circuits 🇫🇷"
                :technologies="[
                  'Vuejs',
                  'Typescript',
                  'Tailwindcss',
                  'VueUse',
                  'GSAP',
                  'PocketBase',
                  'Supabase',
                  'UnoCSS',
                  'Netlify',
                  'Git',
                  'Github',
                ]"
                :isLast="false"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>
              <Experience
                date="August 24 - Présent"
                title="Frontend web developer at Bayommo 🇨🇲"
                :technologies="[
                  'Vuejs',
                  'Typescript',
                  'Tailwindcss',
                  'API',
                  'Git',
                  'GitHub',
                ]"
                :isLast="false"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>

              <Experience
                date="March 2023 - July 2023"
                title="Frontend web developer at Lushitrap 🇨🇩"
                :technologies="[
                  'Vuejs',
                  'Typescript',
                  'Tailwindcss',
                  'Git',
                  'GitHub',
                ]"
                :isLast="false"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>
              <Experience
                date="July 2022 - January 2023"
                title="Frontend web developer at CodeLab 🇨🇩"
                :technologies="[
                  'Vuejs',
                  'Javascript',
                  'Tailwindcss',
                  'GSAP',
                  'Git',
                  'GitHub',
                ]"
                :isLast="true"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>
            </div>
            <div class="bg-black/10 rounded-lg py-5 px-10 relative hidden md:block">
              <div class="flex justify-between">
                <h1 class="text-xl">Efficient Outsource SRL</h1>
                <IconDots class="cursor-pointer"/>
              </div>
              <div class="relative">
                <div class="border-b mt-7 border-green-400">
                  <h2 class="text-3xl pb-5">5 months of code</h2>
                </div>
                <div class="flex w-full">
                  <div class=" w-1/2 flex items-end gap-3">
                    <p class="border border-gray-600 rounded-full py-1 px-4 text-sm">⏱️ Full time</p>
                    <p class="border border-gray-600 rounded-full py-1 px-4 text-sm">📍 Full Remote</p>
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
              <div class="mt-8">
                <h3 class="italic">Time management </h3>
                <p class="text-gray-400">I learned to manage my time and tasks very well, which helped me avoid technical debts.</p>
                <div class="flex justify-between items-center">
                  <p class="flex gap-2 items-center"><IconTime /> Time management</p>
                  <div>
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGcMcti8SAadg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1691835487556?e=1729728000&v=beta&t=9TlfE178JTSbViigb1IFca_ILLxVc5S3Q-QNzP4J5nI" 
                    alt="" 
                    class="w-8 h-8 object-cover rounded-full">
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <h3 class="text-lg italic">Analytical skills </h3>
                <p class="text-gray-400">
                  Each time I had to find solutions to new challenges, which pushed me to give my all, analyze the problem and live up to the company's expectations.
                </p>
                <div class="flex justify-between items-center mt-2">
                  <p class="flex gap-2 items-center">
                    <IconAnalitical /> Analytical
                  </p>
                  <div class="flex items-center gap-2">
                    <IconFlag class="text-orange-600"/>
                    <span>Midle</span>
                  </div>
                  <div>
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGcMcti8SAadg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1691835487556?e=1729728000&v=beta&t=9TlfE178JTSbViigb1IFca_ILLxVc5S3Q-QNzP4J5nI" 
                    alt="" 
                    class="w-8 h-8 object-cover rounded-full">
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <h3 class="italic">Communication </h3>
                <p class="text-gray-400">I communicated very well with the team.</p>
                <div class="flex justify-between items-center mt-2">
                  <p class="flex gap-2 items-center"><span>📶</span> Communication</p>
                  <div class="flex items-center gap-2">
                    <IconFlag class="text-red-600"/>
                    <span>High</span>
                  </div>
                  <div class="flex -space-x-5">
                    <img src="https://infobiz.md/storage/companies/img/1024600042553.png" 
                      alt="" 
                      class="w-8 h-8 object-cover rounded-full"
                    >
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGcMcti8SAadg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1691835487556?e=1729728000&v=beta&t=9TlfE178JTSbViigb1IFca_ILLxVc5S3Q-QNzP4J5nI" 
                      alt="" 
                      class="w-8 h-8 object-cover rounded-full"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  </main>
</template>
<style>

</style>
