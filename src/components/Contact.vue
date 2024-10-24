<script setup lang="ts">
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { ref } from 'vue'


const cardsRef = ref<HTMLElement | null>(null)

useTitleAnimation(cardsRef, 0.5)
</script>
<template>
  <section ref="cardsRef" class="grid pb-20 grid-cols-12 gap-5 overflow-hidden px-5 relative md:px-20">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md ">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Phone number</h1>
        <ul>
          <li>+243 846899101</li>
          <li>+243 995555480</li>
        </ul>
      </div>
    </div>
    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md ">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Mail adress</h1>
        <ul>
          <li>elvinkyungu.75@gmail.com</li>
        </ul>
      </div>
    </div>
    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md ">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Social network</h1>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>X (Twiter)</li>
        </ul>
      </div>
    </div>
  </section>
</template>