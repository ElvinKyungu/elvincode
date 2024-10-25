<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const isLoadingComplete = ref(false)

const animate = (counter: string, duration: number, delay: number = 0) => {
  const element = document.querySelector(counter) as HTMLElement
  if (!element) return
  const numHeight = element.querySelector('.num')?.clientHeight || 0
  const totalDistance = (element.querySelectorAll('.num').length - 1) * numHeight

  gsap.to(element, {
    y: -totalDistance,
    duration: duration,
    delay: delay,
    ease: 'power2.inOut'
  })
}

onMounted(() => {
  animate('.third-counter', 5)
  animate('.second-counter', 6)
  animate('.first-counter', 2, 4)

  gsap.to('.counter', {
    top: '-150px',
    stagger: {
      amount: 0.25
    },
    delay: 6,
    duration: 1,
    ease: 'power4.inOut'
  })

  gsap.from('.first-loader', {
    width: 0,
    duration: 4,
    ease: 'power2.inOut'
  })

  gsap.from('.second-loader', {
    width: 0,
    delay: 2.5,
    duration: 4,
    ease: 'power2.inOut'
  })

  gsap.to('.loader', {
    background: 'none',
    delay: 6,
    duration: 0.1,
    ease: 'power3.inOut'
  })

  gsap.to('.loader', {
    scale: 40,
    delay: 7,
    duration: 1,
    ease: 'power3.inOut'
  })

  gsap.to('.loading', {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    onComplete: () => {
      isLoadingComplete.value = true
    }
  })

  gsap.to('.header-animate', {
    duration: 3,
    scrambleText: {
      text: 'ScrambleText allows you to animate the scrambling of text.',
      chars: 'lowerCase',
      revealDelay: 0.5,
      tweenLength: false
    }
  })
})
</script>
<template>
  <div 
    :class="[
      'loading fixed inset-0 bg-black text-white transition-all duration-500',
      isLoadingComplete ? 'pointer-events-none opacity-0 -z-10' : 'z-20'
    ]"
  >
    <div class="loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[50px] flex bg-gray-500">
      <div class="first-loader bg-white w-[200px] h-[50px]"></div>
      <div class="second-loader bg-white w-[100px] h-[50px]"></div>
    </div>
    <div class="chrono-counter fixed left-[50px] bottom-[50px] flex text-[100px] h-[100px] font-medium">
      <div class="first-counter relative -top-4">
        <div class="num">0</div>
        <div class="num">1</div>
      </div>
      <div class="second-counter relative -top-4">
        <div class="num">0</div>
        <div class="num">1</div>
        <div class="num">2</div>
        <div class="num">3</div>
        <div class="num">4</div>
        <div class="num">5</div>
        <div class="num">6</div>
        <div class="num">7</div>
        <div class="num">8</div>
        <div class="num">9</div>
        <div class="num">0</div>
      </div>
      <div class="third-counter relative -top-4">
        <div class="num">0</div>
        <div class="num">1</div>
        <div class="num">2</div>
        <div class="num">3</div>
        <div class="num">4</div>
        <div class="num">5</div>
        <div class="num">6</div>
        <div class="num">7</div>
        <div class="num">8</div>
        <div class="num">9</div>
        <div class="num">0</div>
      </div>
    </div>
  </div>
</template>

<style>
.loading{
  z-index: 999;
}
.chrono-counter {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.transition-all {
  transition-property: all;
}

.duration-500 {
  transition-duration: 500ms;
}
</style>