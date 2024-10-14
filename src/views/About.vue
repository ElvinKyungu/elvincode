<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
</script>
<template>
  <Header />
  <main class="flex flex-col justify-center pt-32">
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
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="text-center relative mt-10">
      <h1 class="text-xl md:text-3xl lg:text-5xl mb-10"> 
        Hi, I'm Elvin, but you can call me Elvin Code :) 
      </h1> 
      <p class="text-lg md:text-xl text-center flex justify-center md:max-w-7xl mx-auto"> 
        I'm a frontend developer passionate about transforming ideas into sleek, intuitive digital experiences. With a deep love for remote work, I thrive in flexible environments where creativity and efficiency meet. 
        I specialize in Vue.js
      </p> 
      <!-- <p class="text-lg md:text-xl text-center flex justify-center md:max-w-7xl mx-auto mt-6"> 
        My mission? To design user-centric applications that not only 
        look stunning but also enhance the way people interact with 
        technology. Whether it’s collaborating across time zones or 
        fine-tuning every pixel, I'm driven to build solutions that 
        empower businesses and captivate users. 
      </p>  -->
        <!-- <p class="text-lg md:text-xl text-center flex justify-center md:max-w-7xl mx-auto mt-6">
          When I'm not coding, you’ll find me exploring the latest design trends or 
          contributing to tech communities. Let’s build something extraordinary 
          together— one pixel at a time. 
        </p> -->
    </div>
    <section class="overflow-hidden text-gray-700 relative z-50">
      <div
        class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <div class=" px-5 py-2 mx-auto lg:pt-24 lg:px-20 relative pb-10">
        <h1 class="text-xl text-center md:text-3xl lg:text-5xl mb-10"> 
          Gallery
        </h1> 
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/2">
            <div class="w-1/2 p-1 md:p-2 h-96">
              <img 
                alt="gallery" 
                class="img-gallery" 
                src="@/assets/elvin3.jpeg"
              >
            </div>
            <div class="w-1/2 p-1 md:p-2 h-96">
              <img 
                alt="gallery" 
                class="img-gallery" 
                src="@/assets/elvin8.jpeg"
              >
            </div>
            <div class="w-full p-1 md:p-2 h-[40rem]">
              <img 
                alt="gallery" 
                class="img-gallery" 
                src="@/assets/ek.jpg"
              >
            </div>
          </div>
          <div class="flex flex-wrap w-1/2 ">
            <div class="w-full p-1 md:p-2  h-[40rem]">
              <img 
                alt="gallery" 
                class="img-gallery" 
                src="@/assets/elvin11.png"
            >
            </div>
            <div class="w-1/2 p-1 md:p-2  h-[24rem]">
              <img 
                alt="gallery" 
                class="img-gallery" 
                src="@/assets/elvin2.jpeg"
              >
            </div>
            <div class="w-1/2 p-1 md:p-2  h-[24rem]">
              <img 
                alt="gallery" 
                class="img-gallery" 
                src="@/assets/elvin7.jpeg"
              >
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