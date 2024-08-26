<script lang="ts" setup>
import TestimonialCard from "@/components/testimonials/TestimonialCard.vue";
import Header from "@/components/base/Header.vue";
import { useDark } from "@vueuse/core";

const isDark = useDark();
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
            userImage="https://media.licdn.com/dms/image/C5603AQEHDAmIvOSIFA/profile-displayphoto-shrink_400_400/0/1516350899977?e=1724284800&v=beta&t=-gBoK6Po9UgVsgjbwKWY-zFuxSEquZYkrUPgdaWzKKI"
            userText="Elvin est un développeur que j'ai eu l'occasion de recruter il y a un an et demi. Il a considérablement évolué depuis, créant des interfaces utilisateurs élégantes et impressionnantes. C'est un développeur frontend complet et talentueux."
            userName="Gabriel Delattre"
            userTitle="Cofondateur chez @Capte"
          />
          <TestimonialCard
            userImage="https://media.licdn.com/dms/image/v2/D4E03AQGyWzA0bK1waQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704526840760?e=1729123200&v=beta&t=sx5FgJOvlWQPY4criB66Dl-nCkXZCE_AjJfkVv4dg8w"
            userText="J'ai eu la chance de travailler avec Elvin en tant que Product Manager. Sa collaboration a été fluide, et son travail est toujours de grande qualité. Excellent développeur !"
            userName="Ana Forostovschi"
            userTitle="Head of Render Wrangling at  @Atlantic Zone"
          />
          <TestimonialCard
            userImage="https://media.licdn.com/dms/image/v2/D4D03AQHY7jnR3zSZww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715009259301?e=1729123200&v=beta&t=l8f8JOD14-dbxapdyfyeuFxF96dV4hOrVY8awuT-vjA"
            userText="J'ai travaillé avec Elvin sur un projet au sein de mon entreprise Atlantic Zone, et j'ai été pleinement satisfait de la qualité de son travail. C'est un excellent développeur web frontend.."
            userName="Valeriu Stinca"
            userTitle="CEO at Lead chez @Atlantic Zone"
          />

          <TestimonialCard
            userImage="https://media-cpt1-1.cdn.whatsapp.net/v/t61.24694-24/234349886_956746841550852_9167757710155829123_n.jpg?ccb=11-4&oh=01_Q5AaIFIwiHhipzK90nyxVvnnoCk1J62yHs853wqFxoi-qXPS&oe=66CB32A4&_nc_sid=5e03e0&_nc_cat=105"
            userText="J'ai eu l'opportunité de travailler avec Elvin sur un projet. Sa capacité à reproduire des maquettes avec une grande précision m'a vraiment impressionné. Il excelle en intégration, et je le recommande vivement."
            userName="Oxana Kisseleva"
            userTitle="Software engineer"
          />
          <TestimonialCard
            userImage="https://media.licdn.com/dms/image/v2/D4D03AQFhQqpiuPDRew/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1690221737342?e=1729123200&v=beta&t=ATxJfjgUdJO6VmL5BSXFMkxn4PLoYy0dpRt13Ns-_k4"
            userText="J'ai eu l'opportunité de travailler avec Elvin sur un projet. Sa capacité à reproduire des maquettes avec une grande précision m'a vraiment impressionné. Il excelle en intégration, et je le recommande vivement."
            userName="Emmanuel Makabu "
            userTitle="Designer Lead chez @Links"
          />
          <TestimonialCard
            userImage="https://media.licdn.com/dms/image/v2/D4D03AQHGK5ou4NQR-g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718274401130?e=1729123200&v=beta&t=ufVWGxSZ4s2A3BgH_B4SeiYfOlBHe9s3R5t4bdvPoQk"
            userText="Elvin n'est pas seulement un excellent développeur, mais aussi quelqu'un d'une ouverture d'esprit rare. Après avoir rejoint mon équipe chez CodeLab DRC en 2022, il a impressionné par sa capacité à livrer rapidement des projets de qualité. Un vrai atout pour toute équipe.."
            userName="Vander Otis"
            userTitle="Développeur web/mobile @Links"
          />
        </div>
      </div>
    </div>
  </main>
</template>
