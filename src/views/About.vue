<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import { useDark } from "@vueuse/core"
import IconArrowGrowUp from '@/components/icons/IconArrowGrowUp.vue';

const isDark = useDark()
</script>
<template>
  <Header />
  <main class="px-48 py-40 font-poppins min-h-screen" :class="{ 'text-white bg-[#222]': isDark }">
    <section class="grid grid-cols-12 relative">
      <div class="colspan col-span-4 ">
        <h1 class="uppercase text-[9rem] flex -top-20 -space-y-72 flex-col absolute font-extrabold">
          <span class="">I realy </span><br> 
          <span class="">love to</span> <br> 
          <span class="">talk with </span><br> 
          <span class="">people</span>
        </h1>
      </div>
      <div class="col-span-8 w-full">
        <div class="flex justify-center bg-[#016d5d] rounded-lg mx-auto w-[90%] h-[60vh]">
          <img src="@/assets/elvin.png" alt="">
        </div>
      </div>
    </section>
    <section class="flex relative">
      <div class="w-1/3 mt-12">
        <ul class="w-1/2 space-y-3">
          <li class="text-lg border-b border-slate-400 font-bold ">Follow me</li>
          <li class="border-b border-slate-400">
            <router-link to="" class="text-lg flex justify-between">
              <span>X (Twitter)</span> 
              <IconArrowGrowUp/>
            </router-link>
          </li>
          <li class="border-b border-slate-400">
            <router-link to="" class="text-lg flex justify-between">
              <span>Linkedin</span> 
              <IconArrowGrowUp/>
            </router-link>
          </li>
          <li class="border-b border-slate-400">
            <router-link to="" class="text-lg flex justify-between">
              <span>Youtube</span> 
              <IconArrowGrowUp/>
            </router-link>
          </li>
          <li class="border-b border-slate-400">
            <router-link to="" class="text-lg flex justify-between">
              <span>Instagram</span> 
              <IconArrowGrowUp/>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="w-2/3 mt-12 px-12 justify-between flex space-x-5">
        <div class="w-1/2">
          <p class="p-article">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <p class="mt-5">
            Laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div class="w-1/2">
          <p class="border-b border-slate-400">
            Laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt quis 
          </p>
          <div class="flex justify-between mt-5">
            <h1 class="flex flex-col">
              <span class="text-gray-500">Designed by</span>
              <span class="text-lg font-medium">Elvin Kyungu</span>
            </h1>
            <div>
              <img src="@/assets/elvin.jpeg" class="w-10" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style>
.p-article::first-letter {
  font-size: 50px;
  font-weight: bold;
  float: left;
  margin-right: 10px;
  line-height: 1;
}
</style>