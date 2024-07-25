<script setup lang="ts">
import IconCode from '@/components/icons/IconCode.vue'
import Button from '../base/Button.vue';
</script>
<template>
  <div 
    class="
      py-4 px-6 flex flex-col  
      absolute w-full bottom-16 text-black details gap-1
    "
  >
    <div class="components-result">
      <div class="flex items-center gap-3">
        <IconCode />
        <span class="font-bold">Blobi action animation</span>
      </div>
      <div class="flex items-center gap-3 mr-6">
        <span class="components-link">
          UI
        </span>
      </div>
    </div>
    <div class="components-result">
      <div class="flex items-center gap-3">
        <IconCode />
        <span class="font-bold">Parallax Scroll</span>
      </div>
      <div class="flex items-center gap-3 mr-6">
        <span class="components-link">
          Animation
        </span>
      </div>
    </div>
    <div class="components-result">
      <div class="flex items-center gap-3">
        <IconCode />
        <span class="font-bold">Spotify</span>
      </div>
      <div class="flex items-center gap-3 mr-6">
        <span class="components-link">
          Integration
        </span>
      </div>
    </div>
    <div class="flex justify-end items-end ">
      <Button 
        title="See all components"
        link="/ui"
      />
    </div>
    <hr>
  </div>
</template>