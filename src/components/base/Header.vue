<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

import IconBars from '../icons/IconBars.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconsGithub from '../icons/IconsGithub.vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="lg:mx-40 md:mx-20 sm:mx-10 mx-5">
    <nav class="flex justify-between items-center">
      <li>
        <router-link to="/">
          <img src="/favicon.ico" class="rounded-full w-14 lg:w-16 xl:w-16 " alt="">
        </router-link>
      </li>
      <ul class="flex justify-between gap-6 items-center">
        <li>
          <router-link to="">
            <IconsGithub class="w-7 h-7"/>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <IconLinkedin class="w-7 h-7"/>
          </router-link>
        </li>
        <li class="cursor-pointer">
          <IconBars class="w-10 h-10"/>
        </li>
      </ul>
    </nav>
    <nav class="hidden">
      <router-link to="/">
        <img src="" alt="logo elvincode">
      </router-link>
      <ul>
        <li>
          <router-link to="">
            About
          </router-link>
        </li>
        <li>
          <router-link to="">
            Conference speaker
          </router-link>
        </li>
        <li>
          <router-link to="">
            Articles
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>