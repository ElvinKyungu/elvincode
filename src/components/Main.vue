<script setup lang="ts">
import { ref, nextTick } from 'vue'
import gsap from 'gsap'
import { useDark } from '@vueuse/core';
import { images } from '@/assets/images'
import Card from './Card.vue';
const isDark = useDark()
</script>
<template>
  <section class="flex justify-center pt-10 z-0">
    <div class=" bg-black/10 backdrop-blur-md ul  p-16 rounded-full mt-5">
      <div class="avatar  flex justify-center items-center">
        <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img 
            src="@/assets/elvin.jpeg" 
            class="rounded-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>
