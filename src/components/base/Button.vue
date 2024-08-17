<script setup lang="ts">
import { useDark } from "@vueuse/core";

const isDark = useDark();

const props = defineProps({
  title: String,
  link: String,
});
</script>
<template>
  <div class="flex justify-end pr-4 my-2">
    <router-link
      :to="link"
      :class="{ 'bg-white/10': !isDark, 'bg-black/10': isDark }"
      class="hover:px-3 transition-all backdrop-blur-md py-3 px-4 text-black rounded-full"
    >
      {{ title }}
    </router-link>
  </div>
</template>
