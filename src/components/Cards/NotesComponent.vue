<script setup lang="ts">
  import IconCode from '@/components/icons/IconCode.vue'
  import Button from '../base/Button.vue'
</script>
<template>
  <div 
    class="
      p-4 flex flex-col  absolute w-full bottom-16 
      gap-1 text-black
    "
  >
    <div class="file-result">
      <div class="flex items-center gap-3">
        <IconCode />
        <span class="font-semibold">Uzaraka</span>
      </div>
      <span class="block">
        July, 24
      </span>
    </div>
    <div class="file-result">
      <div class="flex items-center gap-3">
        <IconCode />
        <span class="font-semibold">Strategic Zone</span>
      </div>
      <span class="block">
        May, 24
      </span>
    </div>
    <div class="file-result">
      <div class="flex items-center gap-3">
        <IconCode />
        <span class="font-semibold">Soixante Circuit</span>
      </div>
      <span class="block">
        May, 24
      </span>
    </div>
    <div class="file-result">
      <div class="flex items-center gap-3">
        <IconCode />
        <span class="font-semibold">Lushitrap</span>
      </div>
      <span class="block">
        Mars, 24
      </span>
    </div>
    <Button 
      title="See all experience"
      link="/experiences"
    />
    <hr>
  </div>
</template>