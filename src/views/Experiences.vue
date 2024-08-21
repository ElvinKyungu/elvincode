<script setup lang="ts">
import { useDark } from "@vueuse/core"
import Experience from "@/components/experiences/Experiences.vue"
import Header from "@/components/base/Header.vue"
import IconChek from "@/components/icons/IconChek.vue"
import IconDots from '@/components/icons/IconDots.vue'
import IconTime from '@/components/icons/IconTime.vue'
import IconAnalitical from '@/components/icons/IconAnalitical.vue'
import IconFlag from '@/components/icons/IconFlag.vue'
import experiences from '@/data/experiences.json'

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
              
            </div>
          </div>
        </div>
      </main>
    </section>
  </main>
</template>
<style>

</style>
