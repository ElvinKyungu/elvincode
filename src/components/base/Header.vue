<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import gsap from 'gsap'
import IconBars from '../icons/IconBars.vue'
import IconClose from '../icons/IconClose.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconsGithub from '../icons/IconsGithub.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isNavOpen = ref(false)

const toggleNav = async () => {
  if (!isNavOpen.value) {
    await nextTick()
    gsap.fromTo(
      '.nav-menu',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
  } else {
    gsap.to('.nav-menu', {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        isNavOpen.value = false
      }
    })
  }
  isNavOpen.value = !isNavOpen.value
}
</script>


<template>
  <header class="lg:mx-40 md:mx-20 sm:mx-10 mx-5 font-oswald">
    <nav class="flex justify-between items-center">
      <li>
        <router-link to="/" class="flex justify-center items-center gap-4">
          <img src="/favicon.ico" class="rounded-full w-14 lg:w-16 xl:w-16" alt="">
          <span class="text-4xl font-semibold">Elvin Code</span>
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
          <IconClose class="w-10 h-10 icon-close" v-if="isNavOpen" @click="toggleNav"/>
          <IconBars class="w-10 h-10 icon-bars" v-else @click="toggleNav"/>
        </li>
      </ul>
    </nav>
    <nav class="nav-menu mt-10" :class="{ hidden: !isNavOpen }">
      <ul class="flex flex-col gap-6 text-2xl uppercase mt-4 font-semibold font-oswald">
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
