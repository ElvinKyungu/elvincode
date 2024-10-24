<script setup lang="ts">
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { ref } from 'vue'


const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)

useTitleAnimation(titleRef2, 0.5)
useTitleAnimation(titleRef3, 0.5)
</script>
<template>
  <section class="px-5 relative md:px-20 py-10 md:pt-56 ">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div ref="titleRef2" class="grid grid-cols-12 gap-4 relative z-10">
      <div class="col-span-12 md:col-span-3 my-5 mt-2">
        <p class="h-[1px] bg-black"></p>
        <p class="text-sm">Get in Touch to work with me</p>
      </div>
      <h1 class="col-span-12 md:col-span-9 text-2xl md:text-3xl lg:text-5xl">
        Do you have any questions ?
      </h1>
    </div>
    <h1 ref="titleRef3" class="relative z-10 text-2xl  md:text-3xl lg:text-5xl">
      or would you like to get in touch with me? I will take the time to answer you as soon as possible.
    </h1>
  </section>
</template>