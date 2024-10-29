<script lang="ts" setup>
import IconCitation from "@/components/icons/IconCitation.vue"

defineProps({
  userImage: String,
  userTitle: String,
  userText: String,
  userName: String,
})
</script>
<template>
  <div
    class="h-full p-4 lg:p-8 rounded-xl shadow-md cursor-pointer text-white border border-[#616161]"
  >
    <IconCitation />
    <p class="leading-relaxed text-base md:text-lg lg:text-xl mb-6">
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
          class="text-gray-300"
        >
          {{ userTitle }}
        </span>
      </span>
    </a>
  </div>
</template>