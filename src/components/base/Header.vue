<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue"
import gsap from "gsap"
import IconBars from "@/components/icons/IconBars.vue"
import IconClose from "@/components/icons/IconClose.vue"
import IconInstagram from "@/components/icons/IconInstagram.vue"
import IconX from "@/components/icons/IconX.vue"
import IconArrowGrowUp from "@/components/icons/IconArrowGrowUp.vue"
import HoverPlaces from "../HoverPlaces.vue"

const showPopup = ref(false)
const isMenuOpen = ref(false)
const showHover = ref(false)
const hoverContent = ref<'whyTokyo' | 'places' | null>(null)
const hoverComponentRef =  ref<HTMLElement | null>(null);

let hoverTimeout: number | null = null; 
const handleHoverEnter = (component: 'whyTokyo' | 'places') => {
  clearHoverTimeout();
  if (hoverContent.value !== component) {
    hoverContent.value = component; 
    showHover.value = true;
    animateContainerIn()
    animateContentIn(component)
  } else {
    showHover.value = true
  }
};

const handleHoverLeave = () => {
  hoverTimeout = window.setTimeout(() => {
    if (!hoverComponentRef.value?.matches(':hover')) {
      animateContentOut(() => {
        showHover.value = false;
        hoverContent.value = null; 
      });
    }
  }, 100); 
};

const clearHoverTimeout = () => {
  if (hoverTimeout !== null) {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
  }
};

const animateContainerIn = () => {
  gsap.fromTo(
    '.hover-component', 
    { y: 0, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.2, ease: 'power2.out' } 
  );
};


const animateContentIn = (component: 'whyTokyo' | 'places') => {
  gsap.fromTo(
    '.hover-content', 
    { x: 0, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' } 
  )
}

const animateContentOut = (onComplete: () => void) => {
  const direction = hoverContent.value === 'whyTokyo' ? 0 : 0; 

  gsap.to('.hover-content', {
    opacity: 0,
    x: direction, 
    duration: 0.2, 
    ease: 'power2.in',
    onComplete,
  });
};

onUnmounted(() => {
  clearHoverTimeout()
});

function open_menu() {
  isMenuOpen.value = true;
  const tl = gsap.timeline();
  tl.to(".container--menu", {
    "--clip": "110vw",
    duration: 1,
    ease: "power2.out",
  })
    .fromTo(
      ".menu__left > *",
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: { from: "center", each: 0.05 },
      },
      "0"
    )
    .fromTo(
      ".menu__right",
      { x: -100, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      },
      "<0.5"
    );
  return tl;
}

function close_menu() {
  const tl = gsap.timeline();
  tl.fromTo(
    [".menu__left > *", ".menu__right"],
    { x: 0, opacity: 1 },
    {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }
  ).to(
    ".container--menu",
    {
      "--clip": "0rem",
      duration: 1,
      ease: "power2.out",
    },
    "=-1"
  );
  isMenuOpen.value = false;
  return tl;
}
const menuItems = [
  { name: 'Home', route: '/' },
  { name: 'Components', route: '/components' },
  { name: 'About', route: '/about' },
  { name: 'Experiences', route: '/experiences' },
  { name: 'Articles', route: '/' },
  { name: 'Conferences', route: '/conferences' },
]

const enter = (event: MouseEvent) => {
  const icon = (event.currentTarget as HTMLElement).querySelector('.icon')
  gsap.to(icon, { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' })
}

const leave = (event: MouseEvent) => {
  const icon = (event.currentTarget as HTMLElement).querySelector('.icon')
  gsap.to(icon, { opacity: 0, x: -20, duration: 0.2, ease: 'power2.in' })
}

</script>

<template>
  <header class="relative">
    <nav
      class=" relative
      "
    >
      
      <ul class="fixed px-5 md:px-20  bg-[#222] shadow-md backdrop-blur-sm items-center w-full flex justify-between py-3 space-x-5 z-header">
        <div
          class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
        ></div>
        <li class="cursor-pointer relative">
          <router-link to="/" class="text-3xl text-green-500">Elvin Code</router-link>
        </li>
        <li class="relative">
          <ul class="flex space-x-10">
            <li class="cursor-pointer hidden md:flex">
              <ul class="flex space-x-7 text-lg">
                <!-- <li
                  class="border-b-4 py-3 border-transparent hover:border-b-black transition "
                >
                  Components
                </li>
                <li
                  @mouseenter="handleHoverEnter('places')" 
                  @mouseleave="handleHoverLeave"
                  class="border-b-4 py-3 border-transparent hover:border-b-black transition "
                >
                  Recents articles
                </li> -->
                <li class="border-b-4 py-3 border-transparent">
                  <IconInstagram class="w-7 h-7 relative z-10 text-white"/>
                </li>
                <li class="border-b-4 py-3 border-transparent">
                  <IconX class="w-7 h-7 relative z-10 text-white"/>
                </li>
              </ul>
            </li>
            <li @click="open_menu" class="md:border-b-4 cursor-pointer py-3 border-transparent">
              <IconBars class="text-white w-8 h-8 relative z-10"/>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div
      v-if="showHover"
      ref="hoverComponentRef"
      class="hover-component backdrop-blur-md  bg-white/50"
      @mouseenter="clearHoverTimeout()"
      @mouseleave="handleHoverLeave"
    >
      <div class="hover-content">
        <HoverPlaces v-if="hoverContent === 'places'" class="hover-places" />
      </div>
    </div>
    <div >
      <div
        class="container text-white container--menu bg-black/40 h-full backdrop-blur-md flex justify-between px-5 md:px-10 lg:px-20 py-10"
      >
        <div class="sidebar">
          <button class="sidebar__menu-trigger menu__right" @click="close_menu">
            <IconClose
              class="w-10 h-10"
            />
          </button>
        </div>
        <div class="menu__layout">
          <ul class="menu__left text-xl space-y-5">
            <li v-for="item in menuItems" :key="item.name" @mouseenter="enter" @mouseleave="leave" class="menu-item">
              <router-link :to="item.route" class="flex gap-4 items-center">
                <span ref="icons" class="icon">
                  <IconArrowGrowUp class="text-white " />
                </span>
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.z-header{
  z-index: 99;
}
.container--menu,
.container--main {
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: flex;
  z-index: 99;
  position: fixed !important;
}

.container--menu {
  --clip: 0;
  clip-path: circle(var(--clip) at calc(100% - 3rem) 1rem);
  position: absolute;
  right: 0px;
  width: 100vw ;
  height: calc(100vh); 
}

.sidebar__menu-trigger {
  z-index: 99;
}
.menu-item {
  position: relative;
}

.icon {
  display: inline-block;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.1s ease, transform 0.1s ease;
}
.hover-component {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 20rem;
  z-index: 99999;
} 
</style>