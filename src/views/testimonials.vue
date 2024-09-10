<script lang="ts" setup>
import TestimonialCard from "@/components/testimonials/TestimonialCard.vue"
import Header from "@/components/base/Header.vue"
import { useDark } from "@vueuse/core"
import katya from '@/assets/katya.jpg'
import oxana from '@/assets/oxana.jpeg'
import gabriel from '@/assets/gabriel.jpeg'
import valeriu from '@/assets/valeriu.png'
import yves from '@/assets/yves.jpeg'

const isDark = useDark()
</script>
<template>
  <main class="min-h-screen" :class="{ 'text-white bg-[#222]': isDark }">
    <div class="font-poppins">
      <Header />
      <h1 class="pt-20 text-6xl text-center">Testimonials</h1>
      <div class="pt-5 md:pt-10 lg:pt-10">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 lg:px-36"
        >
          <TestimonialCard
            :userImage="gabriel"
            userText="I had the privilege of recruiting Elvin a year and a half ago. Since then, he has demonstrated remarkable growth, consistently delivering elegant and impactful user interfaces. He is a highly skilled and well-rounded frontend developer, with both creativity and technical expertise."
            userName="Gabriel Delattre"
            userTitle="Co-founder at @Capte"
          />
          <TestimonialCard
            :userImage="katya"
            userText="I highly recommend Elvin Kyungu, an excellent frontend developer. He creates aesthetic and functional interfaces with remarkable attention to detail. His ability to collaborate and deliver quickly makes him a valuable asset to any team."
            userName="Katya Kurkubet"
            userTitle="Frontend web developer"
          />
          <TestimonialCard
            userImage="https://media.licdn.com/dms/image/v2/D4E03AQGyWzA0bK1waQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704526840760?e=1729123200&v=beta&t=sx5FgJOvlWQPY4criB66Dl-nCkXZCE_AjJfkVv4dg8w"
            userText="I was lucky enough to work with Elvin as Product Manager. His collaboration was seamless, and his work is always of the highest quality. Excellent developer!"
            userName="Ana Forostovschi"
            userTitle="Head of Render Wrangling at  @Atlantic Zone"
          />
          <TestimonialCard
            :userImage="valeriu"
            userText="I worked with Elvin on a project for my company Atlantic Zone, and was very pleased with the quality of his work. He's an excellent front-end web developer."
            userName="Valeriu Stinca"
            userTitle="CEO at @Atlantic Zone"
          />

          <TestimonialCard
            :userImage="oxana"
            userText="I had the opportunity to work with Elvin on a project. His ability to reproduce models with great precision really impressed me. He excels at integration, and I highly recommend him."
            userName="Oxana Kisseleva"
            userTitle="Software engineer"
          />
          <TestimonialCard
            userImage="https://media.licdn.com/dms/image/v2/D4D03AQFhQqpiuPDRew/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1690221737342?e=1729123200&v=beta&t=ATxJfjgUdJO6VmL5BSXFMkxn4PLoYy0dpRt13Ns-_k4"
            userText="I had the opportunity to work with Elvin on a project. His ability to reproduce models with great precision really impressed me. He excels at integration, and I highly recommend him."
            userName="Emmanuel Makabu "
            userTitle="Lead Designer at @KreativeTuch"
          />
          <TestimonialCard
            userImage="https://media.licdn.com/dms/image/v2/D4D03AQHGK5ou4NQR-g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718274401130?e=1729123200&v=beta&t=ufVWGxSZ4s2A3BgH_B4SeiYfOlBHe9s3R5t4bdvPoQk"
            userText="Elvin is not only an excellent developer, but also someone with a rare open-mindedness. After joining my team at CodeLab DRC in 2022, he impressed me with his ability to deliver quality projects quickly. A real asset to any team."
            userName="Vander Otis"
            userTitle="Web/Mobile developer"
          />
          <TestimonialCard
            :userImage="yves"
            userText="I've seen Elvin's front-end work, and his passion is obvious. He masters web technologies perfectly and creates exceptional interfaces. A valuable asset for any team. Highly recommended!"
            userName="Yves Kalume"
            userTitle="Google Developer Expert for Android"
          />
          <TestimonialCard
            :userImage="yves"
            userText="I've seen Elvin's front-end work, and his passion is obvious. He masters web technologies perfectly and creates exceptional interfaces. A valuable asset for any team. Highly recommended!"
            userName="Yves Kalume"
            userTitle="Google Developer Expert for Android"
          />
        </div>
      </div>
    </div>
  </main>
</template>
