<script setup lang="ts">
  import Header from '@/components/base/Header.vue'
  import Main from '@/components/Main.vue'
  import { ref, nextTick } from 'vue'
  import { useDark } from '@vueuse/core'
  import gsap from 'gsap'

  const isDark = useDark()

</script>

<template>
  <main :class="{'text-white bg-[#222]': isDark}">
    <div class="font-oswald">
      <Header  class="lg:mx-56 md:mx-20 sm:mx-10 mx-5 "/>
      <!--  -->
      <Main />
    </div>
  </main>
</template>
