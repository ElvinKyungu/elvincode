<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'

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
</script>
<template>
  <Header />
  <main class="flex flex-col relative justify-center pt-32 bg-[#222] text-white">
    <section class="flex relative justify-center pt-5 z-50">
      <div class="absolute pl top-44">
        <div class="pl__outer-ring"></div>
        <div class="pl__inner-ring"></div>
        <div class="pl__track-cover"></div>
        <div class="pl__ball">
          <div class="pl__ball-texture"></div>
          <div class="pl__ball-outer-shadow"></div>
          <div class="pl__ball-inner-shadow"></div>
          <div class="pl__ball-side-shadows"></div>
        </div>
      </div>
      <div class="bg-black/10 backdrop-blur-md ul p-16 rounded-full mt-10">
        <div class="avatar flex justify-center items-center">
          <div
            class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
          >
            <img src="@/assets/elvin.png" class="rounded-full" />
          </div>
        </div>
      </div>
    </section>
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="text-center relative mt-10">
      <h1 class="text-2xl md:text-3xl lg:text-5xl mb-10"> 
        Hi, I'm Elvin, but you can call me Elvin Code :) 
      </h1> 
      <p class="text-lg md:text-xl text-center flex justify-center md:max-w-7xl mx-auto"> 
        I'm a frontend developer passionate about transforming ideas into sleek, intuitive digital experiences. With a deep love for remote work, I thrive in flexible environments where creativity and efficiency meet. 
        I specialize in Vue.js
      </p> 
    </div>
    <section class="relative z-50 overflow-hidden">
      <div class="relative mx-auto w-full px-4 py-6 sm:px-6 lg:px-16 lg:py-20">
        <h1 class="mb-8 mt-10 text-center text-3xl sm:text-3xl lg:mb-12 lg:text-5xl">
          Gallery
        </h1>
        <div class="flex flex-col gap-4 md:flex-row">
          <div class="w-full md:w-1/2">
            <div class="flex flex-col gap-4 sm:flex-row">
              <div class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
                <img
                  :src="images.elvin3"
                  alt="gallery"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
                <img
                  :src="images.elvin8"
                  alt="gallery"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
            <div class="relative mt-4 h-96 w-full overflow-hidden rounded-lg lg:h-[40rem]">
              <img
                :src="images.ek"
                alt="gallery"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="relative h-96 w-full overflow-hidden rounded-lg lg:h-[40rem]">
              <img
                :src="images.elvin11"
                alt="gallery"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="mt-4 flex flex-col gap-4 sm:flex-row">
              <div class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
                <img
                  :src="images.elvin2"
                  alt="gallery"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
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
.pl,
.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-side-shadows,
.pl__ball-texture,
.pl__inner-ring,
.pl__outer-ring,
.pl__track-cover {
  border-radius: 50%;
}

.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-outer-shadow,
.pl__ball-side-shadows,
.pl__ball-texture,
.pl__ball-texture:before,
.pl__inner-ring,
.pl__outer-ring,
.pl__track-cover {
  position: absolute;
}
.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-outer-shadow,
.pl__ball-texture:before,
.pl__track-cover {
  animation: ball 3s linear infinite;
}
.pl__ball {
  top: calc(40% - 1.25em);
  left: calc(40% - 1.25em);
  transform: rotate(0) translateY(-6.5em);
  width: 2.5em;
  height: 2.5em;
}
.pl__ball-inner-shadow {
  animation-name: ballInnerShadow;
  box-shadow:
    0 0.1em 0.2em hsla(0, 0%, 0%, 0.3),
    0 0 0.2em hsla(0, 0%, 0%, 0.1) inset,
    0 -1em 0.5em hsla(0, 0%, 0%, 0.15) inset;
  width: 100%;
  height: 100%;
}

.pl__ball-side-shadows {
  background-color: hsla(0, 0%, 0%, 0.1);
  filter: blur(2px);
  width: 100%;
  height: 100%;
  transform: scale(0.75, 1.1);
  z-index: -1;
}
.pl__ball-texture {
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
}
.pl__ball-texture:before {
  animation-name: ballTexture;
  animation-duration: 0.25s;
  background: url(https://assets.codepen.io/416221/snow.jpg) 0 0 / 50% 100%;
  content: "";
  display: block;
  filter: brightness(1.05);
  top: 0;
  right: 0;
  width: 200%;
  height: 100%;
}

/* Animations */
@keyframes ball {
  from {
    transform: rotate(0) translateY(-6.5em);
  }
  50% {
    transform: rotate(180deg) translateY(-6em);
  }
  to {
    transform: rotate(360deg) translateY(-6.5em);
  }
}
@keyframes ballInnerShadow {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes ballOuterShadow {
  from {
    transform: rotate(20deg);
  }
  to {
    transform: rotate(-340deg);
  }
}
@keyframes ballTexture {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50%);
  }
}
@keyframes trackCover {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>