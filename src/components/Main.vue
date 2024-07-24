<script setup lang="ts">
import { ref, nextTick } from 'vue'
import gsap from 'gsap'
import { useDark } from '@vueuse/core';
import { images } from '@/assets/images'
import Card from './Card.vue';
const isDark = useDark()
</script>
<template>
  <section class=" mt-10">
    <div class="relative mt-6 overflow-hidden">
      <div
        :class="{'bg-[#222]': isDark, 'bg-gray-50 ': !isDark}"
        class="
          absolute -inset-x-1 top-[-25.5%] z-[1] h-2/4 scale-y-75 
          scale-x-125 rounded-[100%] 2xl:scale-y-95
        "
      >
      </div>
      <div
        :class="{'bg-[#222]': isDark, 'bg-gray-50 ': !isDark}"
        class="
          absolute -inset-x-1 bottom-[-25.5%] z-[1] h-2/4 
          scale-y-75 scale-x-125 rounded-[100%] 
          2xl:scale-y-95
        "
      >
      </div>
      <div 
        class="
          marquee-10 sm:marquee-15 lg:marquee-20 w-full 
          transition duration-500
        "
      >
        <div 
          class="
            grid h-96 w-[350vw] grid-cols-12 gap-1 
            sm:h-[40rem] sm:w-[300vw] lg:w-[200vw] 2xl:h-[60rem]
          "
        >
          <Card
          
          />
          <!-- <img 
            class="h-full w-full object-cover" 
            src="" 
            alt="project cover" 
            width="826" 
            height="1238" 
          />
            <img 
              class="col-span-2 h-full w-full object-cover" 
              src="https://images.unsplash.com/photo-1488895892452-8df3dbc55c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" 
              alt="project cover" 
              width="826" 
              height="1239" />
            <img 
              class="h-full w-full object-cover" 
              src="https://images.unsplash.com/photo-1521197721975-e12108edefbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" 
              alt="project cover" 
              width="826" 
              height="1239" 
            />
            <img 
              class="h-full w-full object-cover" 
              src="https://images.unsplash.com/photo-1506321806993-0e39f809ae59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="project cover" 
              width="826" 
              height="1239" 
            />
            <img 
              class="col-span-2 h-full w-full object-cover" 
              src="https://images.unsplash.com/photo-1514561064005-2bac60d9f7ea?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="project cover" 
              width="1800" 
              height="1197" 
            />
            <img 
              class="h-full w-full object-cover" 
              src="https://images.unsplash.com/photo-1548613112-7455315eef5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D" 
              alt="project cover" 
              width="826" 
              height="1237" 
            />
            <img 
              class="h-full w-full object-cover" 
              src="https://images.unsplash.com/photo-1549598685-0058b114c9d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D" 
              alt="project cover" 
              width="826" 
              height="1239" 
            />
            <img 
              class="h-full w-full object-cover" 
              src="https://images.unsplash.com/photo-1548694003-9787ddc38958?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fHw%3D" 
              alt="project cover" 
              width="826" 
              height="1237" 
            />
            <img 
              class="col-span-2 h-full w-full object-cover" 
              src="https://images.unsplash.com/photo-1548943544-56e76b7c16d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzV8fHxlbnwwfHx8fHw%3D" 
              alt="project cover" 
              width="2000" 
              height="1334" 
            /> -->
        </div>
      </div>
    </div>
  </section>
</template>
<!-- <style scoped>
.marquee-10{
  animation: marque 10s linear infinite;
}
.marquee-15{
  animation: marque 15s linear infinite;
}
.marque-20{
  animation: marque 10s linear infinite;
}
@keyframes marque {
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(-100%);
  }
}
</style> -->