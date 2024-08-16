<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import IconChek from '@/components/icons/IconChek.vue'

  import { gsap } from 'gsap';

  const defaultText = ref(null);
  const hoverText = ref(null);

  const animateIn = () => {
    gsap.timeline()
      .to(defaultText.value, {
        y: '-100%',
        opacity: 0,
        duration: 0.2,
        ease: 'power2.inOut'
      })
      .to(hoverText.value, {
        y: '0%',
        opacity: 1,
        duration: 0.2,
        ease: 'power2.inOut'
      }, 0);
  };

  const animateOut = () => {
    gsap.timeline()
      .to(defaultText.value, {
        y: '0%',
        opacity: 1,
        duration: 0.2,
        ease: 'power2.inOut'
      })
      .to(hoverText.value, {
        y: '100%',
        opacity: 0,
        duration: 0.2,
        ease: 'power2.inOut'
      }, 0);
  };
</script>
<template>
  <main class="px-20 w-full font-oswald relative w-95% md:w-[80%] ">
    <h1 class="mb-10 text-5xl text-center">Expériences</h1>
    <div  class="border border-[#363333] relative px-6 pt-5 pb-7 rounded-xl">
      <div class=" grid grid-cols-1 md:grid-cols-2" >
        <div>
          <div class="flex flex-wrap -m-2">
            <div class="w-auto p-2">
              <div class="flex flex-col items-center justify-between h-full">
                <div class="block pb-4">
                  <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full">
                    <IconChek />
                  </div>
                </div>
                <div class="w-px h-full border border-dashed"></div>
              </div>
            </div>
            <div class="flex-1 p-2">
              <h3 class="font-heading mb-0.5 text-lg font-semibold">
                <span class="font- font-extralight">August - Présent</span> <br> 
                Développeur web frontend à Efficient Outsource SRL 
              </h3>
              <ul class="flex items-center space-x-3 mt-5">
                <li
                  class="relative overflow-hidden tag flex items-center"
                  @mouseenter="animateIn"
                  @mouseleave="animateOut"
                >
                  <span ref="defaultText" class="block w-full">Vuejs</span>
                  <span ref="hoverText" class="block w-full h-full absolute top-2 opacity-0">Vuejs</span>
                </li>
                <li class="tag">Typescript</li>
                <li class="tag">Tailwindcss</li>
                <li class="tag">VueUse</li>
                <li class="tag">GSAP</li>
                <li class="tag">API</li>
              </ul>
              <div class="flex flex-wrap max-w-sm pb-11 -m-1"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="w-auto p-2">
              <div class="flex flex-col items-center justify-between h-full">
                <div class="block pb-3">
                  <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full">
                    <span class="text-lg font-semibold">1</span>
                  </div>
                </div>
                <div class="w-px h-full border border-dashed"></div>
              </div>
            </div>
            <div class="flex-1 p-2">
              <h3 class="font-heading mb-0.5 text-lg font-semibold">Atlantic Zone</h3>
              <p class="pb-12 text-neutral-500" data-config-id="txt-b7595e-7">Description</p>
            </div>
          </div>
          
          <div class="flex flex-wrap -m-2">
            <div class="w-auto p-2">
              <div class="flex flex-col items-center justify-between h-full">
                <div class="block pb-3">
                  <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full">
                    <span class="text-lg font-semibold">2</span>
                  </div>
                </div>
                <div class="w-px h-full border border-dashed"></div>
              </div>
            </div>
            <div class="flex-1 p-2">
              <h3 class="font-heading mb-0.5 text-lg font-semibold">Soixante Circuits</h3>
              <p class="pb-12 text-neutral-500">Description</p>
            </div>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="w-auto p-2">
              <div class="flex flex-col items-center justify-between h-full">
                <div class="block pb-3">
                  <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full">
                    <span class="text-lg font-semibold">3</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-1 p-2">
              <h3 class="font-heading mb-0.5 text-lg font-semibold">Capte</h3>
              <p class="pb-12 text-neutral-500" data-config-id="txt-b7595e-7">Description</p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-wrap -m-2">
            <div class="w-auto p-2">
              <div class="flex flex-col items-center justify-between h-full">
                <div class="block pb-4">
                  <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full">
                    <span class="text-lg font-semibold">4</span>
                  </div>
                </div>
                <div class="w-px h-full border border-dashed"></div>
              </div>
            </div>
            <div class="flex-1 p-2">
              <h3 class="font-heading mb-0.5 text-lg font-semibold">Atlantic Zone</h3>
              <p class="mb-7 text-neutral-500">Projects help you organize your events</p>
              <div class="flex flex-wrap max-w-sm pb-11 -m-1">
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="w-auto p-2">
              <div class="flex flex-col items-center justify-between h-full">
                <div class="block pb-3">
                  <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full">
                    <span class="text-lg font-semibold">5</span>
                  </div>
                </div>
                <div class="w-px h-full border border-dashed"></div>
              </div>
            </div>
            <div class="flex-1 p-2">
              <h3 class="font-heading mb-0.5 text-lg font-semibold">Lushitrap</h3>
              <p class="pb-12 text-neutral-500">Description</p>
            </div>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="w-auto p-2">
              <div class="flex flex-col items-center justify-between h-full">
                <div class="block pb-3">
                  <div class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-full">
                    <span class="text-lg font-semibold">6</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-1 p-2">
              <h3 class="font-heading mb-0.5 text-lg font-semibold">Bayammo</h3>
              <p class="pb-12 text-neutral-500" data-config-id="txt-b7595e-7">Description</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </main>
</template>
<style>
.tag{
  @apply py-2 px-5 bg-white/10 rounded-full cursor-pointer
}
</style>