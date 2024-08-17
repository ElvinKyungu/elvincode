<script setup lang="ts">
import { useDark } from "@vueuse/core";
import Experience from "@/components/experiences/Experiences.vue";
import Header from "@/components/base/Header.vue";
import IconChek from "@/components/icons/IconChek.vue";
const isDark = useDark();
</script>
<template>
  <main class="min-h-screen w-full" :class="{ 'text-white bg-[#222]': isDark }">
    <Header class="header w-full h-full" />
    <section
      class="py-4 overflow-hidden flex justify-center h-screen w-full pt-36 relative z-0"
    >
      <main class="px-20 w-full font-oswald relative w-95% md:w-[80%]">
        <h1 class="mb-10 text-5xl text-center">Expériences</h1>
        <div class="border border-[#363333] relative px-6 pt-5 pb-7 rounded-xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                ]"
                :isLast="false"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>
            </div>
            <div>
              <Experience
                date="August 24 - Présent"
                title="Frontend web developer at Bayommo 🇨🇲"
                :technologies="[
                  'Vuejs',
                  'Typescript',
                  'Tailwindcss',
                  'API',
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
                ]"
                :isLast="true"
              >
                <template #icon>
                  <IconChek />
                </template>
              </Experience>
            </div>
          </div>
        </div>
      </main>
    </section>
  </main>
</template>
<style>

</style>
