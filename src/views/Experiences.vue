<script setup lang="ts">
import Header from '@/components/base/Header.vue'
import Footer from '@/components/base/Footer.vue'
import ImageBanner from '@/components/ImageBanner.vue'
// import image1 from '@/assets/tokyo-1.avif'
// import image3 from '@/assets/market.avif'
// import image4 from '@/assets/culture-modernity.avif'
import TextScroll from '@/components/TextScroll.vue'
import WalletCardHome from '@/components/WalletCardHome.vue'
import SectionHighlight from '@/components/SectionHighlight.vue'
import HomeCardSlider from '@/components/HomeCardSlider.vue'
import PlacesCardClickable from '@/components/PlacesCardClickable.vue'
import ScrollTriggerSection from '@/components/ScrollTriggerSection.vue'
import FAQ from '@/components/FAQ.vue'
import AnimatedCard from '@/components/AnimatedCard.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'
import { ref } from 'vue'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)
const imageRef4 = ref<HTMLElement | null>(null)

useParagraphAnimation(paragraphRef, 0.5)
useTitleAnimation(titleRef1, 0.5)
useTitleAnimation(imageRef4, .5)
useTitleAnimation(titleRef2, 0.5)
useTitleAnimation(titleRef3, 0.5)
useTitleAnimation(titleRef4, .5)
// const imagesList = [image1,image3,image4,]
</script>

<template>
  <Header/>
  
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