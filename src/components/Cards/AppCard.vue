<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>
<template>
  <div 
    class="p-4 flex flex-col absolute w-full bottom-16"
    
  >
  <!-- :class="{'text-white': !isDark, 'text-black':isDark}" -->
    <div
      class="app-result">
      <img 
        src="https://media.licdn.com/dms/image/C5603AQEHDAmIvOSIFA/profile-displayphoto-shrink_400_400/0/1516350899977?e=1724284800&v=beta&t=-gBoK6Po9UgVsgjbwKWY-zFuxSEquZYkrUPgdaWzKKI" 
        class="w-16 rounded-xl object-cover h-16 shrink-0" 
      />
      <div class="w-full flex flex-col items-start">
        <p class="font-bold">Gabriel Delattre</p>
        <p class="opacity-90">Cofondateur @Capte</p>
      </div>
    </div>
    <div
      class="app-result">
      <img 
        src="https://media.licdn.com/dms/image/C5603AQEHDAmIvOSIFA/profile-displayphoto-shrink_400_400/0/1516350899977?e=1724284800&v=beta&t=-gBoK6Po9UgVsgjbwKWY-zFuxSEquZYkrUPgdaWzKKI" 
        class="w-16 rounded-xl object-cover h-16 shrink-0" 
      />
      <div class="w-full flex flex-col items-start">
        <p class="font-bold">Gabriel Delattre</p>
        <p class="opacity-90">Cofondateur @Capte</p>
      </div>
    </div>
    <div class="app-result">
      <img 
        src="https://media.licdn.com/dms/image/D4D03AQGcMcti8SAadg/profile-displayphoto-shrink_100_100/0/1691835487556?e=1724284800&v=beta&t=dNdWjRdP4S8r8giN_kRZjyJMKDIgG0wJzmjXl3AmfQQ" 
        class="w-16 rounded-xl object-cover h-16 shrink-0"
      />
      <div class="w-full flex flex-col items-start">
        <p class="font-bold">Elvin Kyungu</p>
        <p class="opacity-80">Développeur web frontend </p>
      </div>
    </div>
    <div class="flex justify-end pr-4 my-2">
      <router-link to="/projects" class="bg-black/10 backdrop-blur-md py-3 px-4 rounded-full">
        See all projects
      </router-link>
    </div>
    <hr>
  </div>
</template>