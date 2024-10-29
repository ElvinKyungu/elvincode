<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
import AboutMeCardVue from '@/components/AboutMeCard.vue.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'

interface GalleryImages {
  elvin2: string
  elvin3: string
  elvin7: string
  elvin8: string
  elvin11: string
  ek: string
}

const images: GalleryImages = {
  elvin2: new URL('@/assets/elvin2.jpeg', import.meta.url).href,
  elvin3: new URL('@/assets/elvin3.jpeg', import.meta.url).href,
  elvin7: new URL('@/assets/elvin7.jpeg', import.meta.url).href,
  elvin8: new URL('@/assets/elvin8.jpeg', import.meta.url).href,
  elvin11: new URL('@/assets/elvin11.png', import.meta.url).href,
  ek: new URL('@/assets/ek.jpg', import.meta.url).href,
}

const firstImage = ref<HTMLElement | null>(null)
const secondImage = ref<HTMLElement | null>(null)
const thirtImage = ref<HTMLElement | null>(null)
const fourthImage = ref<HTMLElement | null>(null)
const fiveImage = ref<HTMLElement | null>(null)
const sixImage = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

useParagraphAnimation(titleRef, .3)
useTitleAnimation(firstImage, .1)
useTitleAnimation(secondImage, .2)
useTitleAnimation(thirtImage, .3)
useTitleAnimation(fourthImage, .1)
useTitleAnimation(fiveImage, .2)
useTitleAnimation(sixImage, .3)
</script>
<template>
  <Header />
  <main class="flex flex-col relative justify-center bg-[#222] text-white">
   <AboutMeCardVue/>
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <section class="relative z-50 overflow-hidden">
      <div class="relative mx-auto w-full px-4 py-6 sm:px-6 lg:px-16 lg:py-20">
        <h1 ref="titleRef" class="mb-8 mt-10 text-center text-3xl sm:text-3xl lg:mb-12 lg:text-5xl">
          Gallery
        </h1>
        <div class="flex flex-col gap-4 md:flex-row">
          <div class="w-full md:w-1/2">
            <div class="flex flex-col gap-4 sm:flex-row">
              <div ref="firstImage" class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
                <img
                  :src="images.elvin3"
                  alt="gallery"
                  class="h-full w-full object-cover"
                />
              </div>
              <div ref="secondImage" class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
                <img
                  :src="images.elvin8"
                  alt="gallery"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
            <div ref="thirtImage" class="relative mt-4 h-96 w-full overflow-hidden rounded-lg lg:h-[40rem]">
              <img
                :src="images.ek"
                alt="gallery"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div ref="fourthImage" class="relative h-96 w-full overflow-hidden rounded-lg lg:h-[40rem]">
              <img
                :src="images.elvin11"
                alt="gallery"
                class="h-full w-full object-cover"
              />
            </div>
            <div  class="mt-4 flex flex-col gap-4 sm:flex-row">
              <div ref="fiveImage" class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
                <img
                  :src="images.elvin2"
                  alt="gallery"
                  class="h-full w-full object-cover"
                />
              </div>
              <div ref="sixImage" class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
                <img
                  :src="images.elvin7"
                  alt="gallery"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer class="relative z-50"/>
</template>
<style scoped>
.img-gallery{
  @apply block object-cover object-top w-full h-full rounded-lg cursor-pointer
}
</style>