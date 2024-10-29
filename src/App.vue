<script setup lang="ts">
import Loader from '@/components/Loader.vue'
</script>

<template>
  <div class="font-poppins">
    <div>
      <Loader/>
    </div> 
    <RouterView />
  </div>
</template>

<style scoped>

</style>
