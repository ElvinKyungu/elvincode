<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useDark } from '@vueuse/core'
import gsap from 'gsap'
import IconBars from '../icons/IconBars.vue'
import IconClose from '../icons/IconClose.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconsGithub from '../icons/IconsGithub.vue'
import IconMoon from '../icons/IconMoon.vue'
import IconSun from '../icons/IconSun.vue'

const isDark = useDark()
const toggleDark = ()=>{
  isDark.value = !isDark.value
}

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
  <header  class="">
    <nav class="flex justify-between items-center py-3">
      <li>
        <router-link to="/" class="">
          <span class="text-4xl hidden md:flex font-semibold">Elvin Code</span>
        </router-link>
      </li>
      <ul class="flex justify-between gap-6 items-center" :class="{'text-white': isDark}" >
        <li>
          <router-link to="">
            <IconsGithub class="w-7 h-7" :class="{'text-white': isDark}"/>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <IconLinkedin class="w-7 h-7" :class="{'text-white': isDark}"/>
          </router-link>
        </li>
        <li @click="toggleDark" class="cursor-pointer" >
          <IconMoon class="w-7 h-7" v-if="isDark" :class="{'text-white': isDark}"/>
          <IconSun class="w-7 h-7"  v-else :class="{'text-white': isDark}"/>
        </li>
        <li class="cursor-pointer" @click="toggleNav">
          <IconClose 
            class="w-10 h-10 icon-close" 
            v-if="isNavOpen" 
            :class="{'text-white': isDark}"
          />
          <IconBars 
            class="w-10 h-10 icon-bars" 
            v-else 
            :class="{'text-white': isDark}"
          />
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

<style scoped>

</style>