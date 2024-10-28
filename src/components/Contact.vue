<script setup lang="ts">
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { ref } from 'vue'

const cardsRef = ref<HTMLElement | null>(null)

useTitleAnimation(cardsRef, 0.5)
</script>

<template>
  <section ref="cardsRef" class="grid pb-20 bg-[#222] text-white grid-cols-12 gap-5 overflow-hidden px-5 relative md:px-20">
    <div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-white/5 cursor-pointer hover:bg-white/10 transition rounded-md">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Phone Number</h1>
        <ul class="space-y-3">
          <li><a href="tel:+243846899101" class="hover:border-b transition">+243 846 899 101</a></li>
          <li><a href="https://wa.me/243995555480" target="_blank" class="hover:border-b transition">+243 995 555 480 (WhatsApp)</a></li>
        </ul>
      </div>
    </div>
    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-white/5 cursor-pointer hover:bg-white/10 transition rounded-md">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Mail Address</h1>
        <ul class="space-y-3">
          <li><a href="mailto:elvinkyungu.75@gmail.com" class="hover:border-b transition">elvinkyungu.75@gmail.com</a></li>
        </ul>
      </div>
    </div>

    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-white/5 cursor-pointer hover:bg-white/10 transition rounded-md">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Social Network</h1>
        <ul class="space-y-3">
          <li><a href="https://www.instagram.com/elvin.kyungu/" target="_blank" class="hover:border-b transition">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/elvin-kyungu/" target="_blank" class="hover:border-b transition">LinkedIn</a></li>
          <li><a href="https://github.com/elvinKyungu/" target="_blank" class="hover:border-b transition">GitHub</a></li>
          <li><a href="https://x.com/ElvinKyungu" target="_blank" class="hover:border-b transition">X (Twitter)</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>
