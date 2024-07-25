<template>
  <nav 
    class="
      container flex items-center mx-auto 
      mt-40 flex-col relative w-[28rem]
    "
  >
    <ul 
      class="
        flex text-black gap-2 justify-center z-20 text-xl
        items-center rounded-lg
      "
    >
      <li 
        class="
          flex items-center hover:bg-black hover:text-white 
          delay-100 p-3 cursor-pointer rounded-lg gap-1 transition-colors 
        "
        @mouseenter="handleMouseEnter(0)"
        @mouseleave="handleMouseLeave"
      >
        <IconUserAbout />
        <span>Testimonial</span>
      </li>
      <li 
        class="
          flex items-center hover:bg-black hover:text-white 
          delay-100 p-3 cursor-pointer rounded-lg gap-1 transition-colors
        " 
        @mouseenter="handleMouseEnter(1)"
        @mouseleave="handleMouseLeave"
      >
        <IconPin />
        <span>Projects</span>
      </li>
      <li 
        class="
          flex items-center hover:bg-black hover:text-white 
          delay-100 p-3 cursor-pointer rounded-lg gap-1 transition-colors
        "
        @mouseenter="handleMouseEnter(2)"
        @mouseleave="handleMouseLeave"
      >
        <IconBusiness />
        <span>Companies</span>
      </li>
    </ul>
    <div 
      ref="container" 
      class="
        absolute bottom-0 left-1/2 -translate-x-1/2 h-[55px] backdrop-blur-md
        overflow-hidden rounded-2xl container px-4 py-6
      "
      :class="{
        'bg-black/10': !isDark, 
        'bg-white text-black': isDark
      }"
    >
      <div v-show="activeComponent === 0" ref="details0">
        <AppCard />
      </div>
      <div v-show="activeComponent === 1" ref="details1">
        <ComponentCard />
      </div>
      <div v-show="activeComponent === 2" ref="details2">
        <NotesComponent />
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import IconCode from '@/components/icons/IconCode.vue'
import IconPin from '@/components/icons/IconPin.vue'
import IconBusiness from '@/components/icons/IconBusiness.vue'
import AppCard from './Cards/AppCard.vue'
import ComponentCard from './Cards/ComponentCard.vue'
import NotesComponent from './Cards/NotesComponent.vue'
import IconUserAbout from './icons/IconUserAbout.vue'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const activeComponent = ref<number | null>(null)
const container = ref<HTMLElement | null>(null)
const details0 = ref<HTMLElement | null>(null)
const details1 = ref<HTMLElement | null>(null)
const details2 = ref<HTMLElement | null>(null)

const duration = 0.75
const duration2 = 0.3
const ease = 'elastic.out(1, 0.5)'

const handleMouseEnter = (index: number) => {
  activeComponent.value = index
  gsap.to(container.value, {
    width: [500, 460, 480][index],
    height: [350, 220, 250][index] + 100,
    y: 17,
    borderRadius: 24,
    duration: duration,
    ease: ease,
  })
  if (details0.value) {
    gsap.to(details0.value, { 
      opacity: index === 0 ? 1 : 0, 
      duration: duration2, 
      zIndex: index === 0 ? 2 : 1 
    })
  }
  if (details1.value) {
    gsap.to(details1.value, { 
      opacity: index === 1 ? 1 : 0, 
      duration: duration2, 
      zIndex: index === 1 ? 2 : 1 
    })
  }
  if (details2.value) {
    gsap.to(details2.value, { 
      opacity: index === 2 ? 1 : 0, 
      duration: duration2, 
      zIndex: index === 2 ? 2 : 1 
    })
  }
}

const handleMouseLeave = () => {
  const isHoveringDetails = [details0.value, details1.value, details2.value]
    .some(detail => detail?.matches(':hover'))
  if (isHoveringDetails) return
  mouseleaveDetails()
}

const mouseleaveDetails = () => {
  gsap.to(container.value, {
    width: 400,
    height: '55px',
    y: 0,
    borderRadius: 16,
    duration: duration,
    ease: ease,
  })
  if (details0.value) gsap.to(details0.value, { opacity: 0, duration: 0, zIndex: 1 })
  if (details1.value) gsap.to(details1.value, { opacity: 0, duration: 0, zIndex: 1 })
  if (details2.value) gsap.to(details2.value, { opacity: 0, duration: 0, zIndex: 1 })
  activeComponent.value = null
}

onMounted(() => {
  details0.value?.addEventListener('mouseleave', handleMouseLeave)
  details1.value?.addEventListener('mouseleave', handleMouseLeave)
  details2.value?.addEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>

</style>