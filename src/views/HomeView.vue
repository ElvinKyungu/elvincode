<script setup lang="ts">
  import Header from '@/components/base/Header.vue'
  import Main from '@/components/Main.vue'
  import Content from '@/components/Content.vue'
  import ActionBars from '@/components/ActionBars.vue'
  import { useDark } from '@vueuse/core'

  const isDark = useDark()

</script>

<template>
  <main 
    class="min-h-screen" 
    :class="{'text-white bg-[#222]': isDark}"
  >
    <div class="font-oswald">
      <Header  class=" "/>
      <Main />
      <Content />
      <ActionBars />
    </div>
  </main>
</template>
