<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useDark } from '@vueuse/core'
import gsap from 'gsap'

</script>
<template>
  <section class="mt-20" >
    <div>
      <div class="border-b border-gray-30 dark:border-gray-500">
        <div class="mx-auto grid h-2 max-w-8xl grid-cols-12 px-2 xs:h-8 xs:px-6 sm:px-10 xl:h-12 xl:px-10">
          <div class="col-span-10 border-x border-gray-30 dark:border-gray-500 md:col-span-4"></div>
          <div class="col-span-2 border-r border-gray-30 dark:border-gray-500 min-[896px]:col-span-3"></div>
          <div class="col-span-1 hidden border-r border-gray-30 dark:border-gray-500 lg:block"></div>
          <div class="col-span-6 hidden border-r border-gray-30 dark:border-gray-500 md:block min-[896px]:col-span-5 lg:col-span-4"></div>
        </div>
      </div>
      <header class="border-b border-gray-30 dark:border-gray-500">
        <div class="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          <div class="col-span-10 border-x border-gray-30 p-10 dark:border-gray-500 md:col-span-4">
            <div class="relative w-fit">
              <h1 class="text-7xl">Hi, I'm Elvin Kyungu</h1>
              <h1 class="text-5xl font-thin mt-10">Also known as Elvin Code</h1>
            </div>
          </div>
          <div class="col-span-2 border-r border-gray-30 dark:border-gray-500 min-[896px]:col-span-3"></div>
          <div class="col-span-2 hidden border-r border-t border-gray-30 dark:border-gray-500 max-md:order-last lg:col-span-1 lg:block lg:border-t-0"></div>
          <div class="col-span-10 hidden flex-col items-end justify-end border-x border-t border-gray-30 bg-gradient-to-br from-gray-30/30 via-white to-white p-8 text-right dark:border-gray-500 dark:from-gray-700 dark:via-gray-1000 dark:to-gray-1000 md:col-span-6 md:flex md:border-l-0 md:border-t-0 min-[896px]:col-span-5 lg:col-span-4">
            <div></div>
          </div>
        </div>
      </header>
      <div class="mx-auto max-w-8xl px-2 xs:px-6 sm:px-10">
        <div class="h-2 border-x border-gray-30 dark:border-gray-500 xs:h-6 sm:h-16"></div>
      </div>
    </div>
  </section>
</template>