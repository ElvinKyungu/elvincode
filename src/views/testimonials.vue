<script lang="ts" setup>
  import TestimonialCard from '@/components/testimonials/TestimonialCard.vue'
  import Header from '@/components/base/Header.vue'
  import { useDark } from '@vueuse/core'

  const isDark = useDark()
</script>
<template>
  <main 
    class="min-h-screen" 
    :class="{'text-white bg-[#222]': isDark}"
  >
    <div class="font-oswald">
      <Header/>
      <div class="pt-5 md:pt-10 lg:pt-20">
        <div 
          class="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 
            px-5 md:px-10 lg:px-20
          "
        >
          <TestimonialCard
            userImage=""
            userText=""
            userName=""
            userTitle=""
          />
        </div>
      </div>
    </div>
  </main>
</template>