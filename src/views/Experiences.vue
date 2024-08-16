<script setup lang="ts">

  import { useDark } from '@vueuse/core'
  import Experiences from '@/components/experiences/Experiences.vue'
  import Header from '@/components/base/Header.vue'
  const isDark = useDark()
</script>
<template>
  <main class="min-h-screen w-full " :class="{'text-white bg-[#222]': isDark}">
    <Header class="header w-full h-full"/>
    <section class="py-4 overflow-hidden flex justify-center h-screen w-full pt-36 relative z-0">
      <Experiences />
    </section>
  </main>
</template>
<style>
.header{
}
</style>