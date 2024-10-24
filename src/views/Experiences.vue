<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Experience from "@/components/experiences/History.vue"
import Header from "@/components/base/Header.vue"
import Footer from '@/components/base/Footer.vue'
import experiences from '@/data/experiences.json'
import ExperiencesDetails from '@/components/experiences/HistoryDetail.vue'
import gsap from 'gsap'
import { 
  Efficient,
  atlanticZone,
  soixanteCircuits,
  bayamo,
  lushitrap
} from '@/data/experiencesDetails'
import type { ExperienceDetail } from '@/types/experiences'
import IconCheck from '@/components/icons/IconCheck.vue'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const imageRef4 = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const cardHistory = ref<HTMLElement | null>(null)
const cultureRefTitle = ref<HTMLElement | null>(null)
const cultureCardsRef = ref<HTMLElement | null>(null)
const economicTitleRef = ref<HTMLElement | null>(null)
const economicParagraphRef = ref<HTMLElement | null>(null)
const economicCardImgRef = ref<HTMLElement | null>(null)

useTitleAnimation(titleRef1, 0.5)
useTitleAnimation(imageRef4, 1)
useTitleAnimation(titleRef2, 0.5)
useTitleAnimation(titleRef3, 0.5)
useTitleAnimation(titleRef4, 1)
useTitleAnimation(cardsRef, .5)
useTitleAnimation(cardHistory, .5)
useParagraphAnimation(paragraphRef, .5)
useTitleAnimation(cultureRefTitle, .3)
useParagraphAnimation(cultureCardsRef, .4)
useParagraphAnimation(economicTitleRef, .3)
useParagraphAnimation(economicParagraphRef, .4)
useParagraphAnimation(economicCardImgRef, .2)
// State to store the selected experience details
const selectedExperience = ref(Efficient)
const activeExperienceTitle = ref(experiences[0].title) 

function getExperienceDetails(title: string): ExperienceDetail {
  switch (title) {
    case 'Bayamo':
      return bayamo
    case 'Lushitrap':
      return lushitrap
    case 'Soixante Circuits':
      return soixanteCircuits
    case 'Atlantic Zone':
      return atlanticZone
    case 'Efficient Outsource SRL':
      return Efficient
    default:
      return Efficient
  }
}

// Function to handle the animation sequence
function selectExperience(experienceDetail:ExperienceDetail) {
  gsap.to('.experience-details', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete() {
      // Change the content after fade out
      selectedExperience.value = experienceDetail
      activeExperienceTitle.value = experienceDetail.title

      gsap.to('.experience-details', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  })
}

onMounted(() => {
  // Initial fade-in animation when the component is mounted
  gsap.fromTo('.experience-details', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut'
  })
})
</script>

<template>
  <Header class="header w-full h-full" />
  <main class="w-full relative px-5 md:px-20 py-10">
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div> 
    <section ref="cardHistory" class="py-4 flex justify-center w-full relative z-0 mt-20">
      <main class="px-5 w-full relative">
        <h1 class="my-10 text-5xl">Experiences</h1>
        <div class="relative pb-7 rounded-xl">
          <div class="grid grid-cols-12 md:space-x-10 lg:space-x-20">
            <div class=" col-span-12 md:col-span-5">
              <Experience
                v-for="(experience, index) in experiences"
                :key="index"
                :date="experience.date"
                :title="experience.title"
                :description="experience.description"
                :isLast="experience.isLast"
                @click="selectExperience(getExperienceDetails(experience.title))"
              >
                <template #icon>
                  <IconCheck />
                </template>
              </Experience>
            </div>
            <div class="col-span-12 md:col-span-1"></div>
            <div class="col-span-12 md:col-span-6 rounded-lg py-5 -mt-10 relative">
              <ExperiencesDetails 
                :experiences="selectedExperience" 
                class="experience-details"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  </main>
  <Footer />
</template>


<style>
.img-culture{
  @apply rounded-lg w-full h-full overflow-hidden object-cover transition-transform duration-300 ease-in-out transform hover:scale-110
}
.container-img-culture{
  @apply relative h-64 w-full overflow-hidden rounded-lg
}
</style>