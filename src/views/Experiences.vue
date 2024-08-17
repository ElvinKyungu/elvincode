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
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
              <Experience
                date="August - Présent"
                title="Développeur web frontend à Efficient Outsource SRL"
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
                date="1"
                title="Atlantic Zone"
                description="Description"
                :isLast="false"
              />

              <Experience
                date="2"
                title="Soixante Circuits"
                description="Description"
                :isLast="false"
              />

              <Experience
                date="3"
                title="Capte"
                description="Description"
                :isLast="true"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  </main>
</template>
<style>
.header {
}
</style>
