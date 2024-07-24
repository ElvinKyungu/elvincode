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
import IconHome from '@/components/icons/IconHome.vue'

const isDark = useDark()

const toggleDark = ()=>{
  isDark.value = !isDark.value
}

const isNavOpen = ref(false)
function open_menu() {
  const tl = gsap.timeline()
  tl
    .to('.container--menu', {
      '--clip': '110vw',
      duration: 2,
      ease: 'power2.out',
    })
    .fromTo('.menu__left > *', {
      x: -150,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      stagger: {
        from: 'center',
        each: 0.05
      }
    }, '0')
    .fromTo('.menu__right', {
      x: -100,
      opacity: 0,
    }, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '<0.5')
  return tl
}
function close_menu() {
  const tl = gsap.timeline()
  tl
    .fromTo(['.menu__left > *', '.menu__right'], {
      x: 0,
      opacity: 1
    }, {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .to('.container--menu', {
      '--clip': '0rem',
      duration: 1,
      ease: 'power2.out'
    }, '=-1')
  return tl
}
</script>

<template>
  <header>
    <nav 
      class="
        w-20 h-20 fixed  text-gray-100 group bg-black/10 
        backdrop-blur-md flex flex-col gap-4 ul rounded-full top-1/2 -translate-y-1/2
        left-20 items-center justify-center
      "
    >
      <button class="sidebar__menu-trigger" @click="open_menu">
        <IconBars class="w-10 h-10 text-black" />
      </button>
    </nav>
    <div class="containers">
      <div 
        class="
          container container--menu bg-black/10 
          backdrop-blur-md flex justify-between px-20 py-10
        "
      >
        <div class="menu__layout">
          <ul class="menu__left text-xl space-y-5">
            <li>
              <router-link to="/">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/">
                About
              </router-link>
            </li>
            <li>
              <router-link to="/">
                Project
              </router-link>
            </li>
            <li>
              <router-link to="/">
                Conferences
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sidebar">
          <button class="sidebar__menu-trigger menu__right" @click="close_menu">
            <IconClose class="w-10 h-10"/>
          </button>
      </div>
      </div>
  </div>
  </header>
</template>
<style scoped>
.container--menu, .container--main {
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: flex;
}

.container--menu {
  --clip: 0;
  clip-path: circle(var(--clip) at calc(7% + 1.5rem/2) 50%);
  position: absolute;
}


</style>
