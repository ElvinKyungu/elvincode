<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
// import image1 from '@/assets/tokyo-1.avif'
// import image3 from '@/assets/market.avif'
// import image4 from '@/assets/culture-modernity.avif'
import TextScroll from '@/components/TextScroll.vue'
import WalletCardHome from '@/components/WalletCardHome.vue'
import PlacesCardClickable from '@/components/PlacesCardClickable.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import AnimatedCard from '@/components/AnimatedCard.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'
import { ref } from 'vue'
import userProfile  from '@/assets/elvin.png'
const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)
const imageRef4 = ref<HTMLElement | null>(null)

const testimonials = ref([
  {
    userImage: userProfile,
    userText: "Exploring Tsukiji was a food lover's dream. The freshest sushi and seafood I've ever had, and the market atmosphere was bustling!",
    userName: "Alex Dubro",
    userTitle: "From England"
  },
  {
    userImage: userProfile,
    userText: "Odaiba had a futuristic feel with its waterfront, giant Gundam statue and high-tech shopping malls. The sunset view from the Rainbow Bridge was magical.",
    userName: "Sarah Assina",
    userTitle: "From Canada"
  },
  {
    userImage: userProfile,
    userText: "Ueno Park was a peaceful escape from the hustle and bustle of the city. The cherry blossoms were beautiful, and visiting the zoo was a fun way to spend the day.",
    userName: "Diego delafuente",
    userTitle: "From Spain"
  },
  {
    userImage: userProfile,
    userText: "The view from Tokyo Skytree was breathtaking. Watching the city lights at night from this height is an unforgettable experience. A must-see!",
    userName: "Emman Levi",
    userTitle: "From Australia"
  },
  {
    userImage: userProfile,
    userText: "The atmosphere at Senso-ji Temple was surreal. The vibrant red doors, incense and stunning architecture really made me feel connected to Japan's rich history.",
    userName: "Marc JC",
    userTitle: "From USA"
  },
  {
    userImage: userProfile,
    userText: "Shibuya Crossing was incredible! The sheer number of people, the lights and the energy are something you have to experience in person. It's like stepping into a movie scene!",
    userName: "Laura Bent",
    userTitle: "From France"
  }
])

useParagraphAnimation(paragraphRef, 0.5)
useTitleAnimation(titleRef1, 0.5)
useTitleAnimation(imageRef4, .5)
useTitleAnimation(titleRef2, 0.5)
useTitleAnimation(titleRef3, 0.5)
useTitleAnimation(titleRef4, .5)
</script>

<template>
  <Header/>
  <AnimatedCard/>
  <main class="relative ">
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <section class="grid relative z-40 grid-cols-12 px-5 md:px-20 py-5">
      <div class="col-span-12 md:col-span-6">
        <h2 ref="titleRef1" class="text-5xl">Crafting the Future of Web Interfaces</h2>
      </div>
      <div class="col-span-12 md:col-span-6">
        <p ref="paragraphRef" class="text-lg md:text-xl">
          As a frontend developer, I blend creativity with precision to build intuitive and dynamic web applications. From pixel-perfect designs to seamless user experiences, I turn ideas into interactive realities, using modern technologies like Vue.js, Nuxt.js, and TailwindCSS. My mission? Delivering fast, responsive, and aesthetically compelling solutions that make a lasting impact.
        </p>
      </div>
    </section>
    <WalletCardHome/>
  </main>
  <PlacesCardClickable/>
  <div class="pt-20 px-5 md:px-20 relative z-10 relative">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <h2 class="text-3xl md:text-4xl relative mb-10">Testimonials</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
      <TestimonialCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card"
        :userImage="testimonial.userImage"
        :userText="testimonial.userText"
        :userName="testimonial.userName"
        :userTitle="testimonial.userTitle"
      />
    </div>
  </div>
  <section class="px-5 relative md:px-20 py-10 md:pt-56 ">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="grid grid-cols-12 gap-4 relative z-10">
      <div class="col-span-12 md:col-span-3 my-5 mt-2">
        <p class="h-[1px] bg-black"></p>
        <p class="text-sm">Get in Touch to work with me</p>
      </div>
      <h1 ref="titleRef2" class="col-span-12 md:col-span-9 text-2xl md:text-3xl lg:text-5xl">
        Do you have any questions ?
      </h1>
    </div>
    <h1 ref="titleRef3" class="relative z-10 text-2xl  md:text-3xl lg:text-5xl">
      or would you like to get in touch with me? I will take the time to answer you as soon as possible.
    </h1>
  </section>

  <section ref="cardsRef" class="grid pb-20 grid-cols-12 gap-5 overflow-hidden px-5 relative md:px-20">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md ">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Phone number</h1>
        <ul>
          <li>+243 846899101</li>
          <li>+243 995555480</li>
        </ul>
      </div>
    </div>
    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md ">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Mail adress</h1>
        <ul>
          <li>elvinkyungu.75@gmail.com</li>
        </ul>
      </div>
    </div>
    <div class="relative z-10 col-span-12 md:col-span-4 p-5 bg-black/5 cursor-pointer hover:bg-black/10 transition rounded-md ">
      <div class="flex justify-center flex-col items-center space-y-3">
        <h1 class="text-xl">Social network</h1>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>X (Twiter)</li>
        </ul>
      </div>
    </div>
  </section>
  <TextScroll/>
  <Footer/>
</template>
<style>
.bg-gray{
  background: hsl(0, 0%, 96%);
}
.img-card-home{
  @apply rounded-lg object-cover h-full w-full absolute;
}

</style>