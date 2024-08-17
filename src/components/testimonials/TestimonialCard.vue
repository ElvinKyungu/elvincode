<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import IconCitation from "@/components/icons/IconCitation.vue";

const isDark = useDark();
defineProps({
  userImage: String,
  userTitle: String,
  userText: String,
  userName: String,
});
</script>
<template>
  <div
    class="h-full p-8 rounded shadow-md"
    :class="{
      'bg-white text-gray-800 border border-gray-200': !isDark,
      'bg-[#1b1b1b]': isDark,
    }"
  >
    <IconCitation />
    <p class="leading-relaxed text-xl mb-6">
      {{ userText }}
    </p>
    <a class="inline-flex items-center">
      <img
        alt="testimonial"
        :src="userImage"
        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
      />
      <span class="flex-grow flex flex-col pl-4">
        <span class="title-font font-medium">
          {{ userName }}
        </span>
        <span
          class=""
          :class="{ 'text-gray-800': !isDark, 'text-gray-400': isDark }"
        >
          {{ userTitle }}
        </span>
      </span>
    </a>
  </div>
</template>
