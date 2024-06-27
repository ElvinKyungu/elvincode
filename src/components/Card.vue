<script setup lang="ts">

defineProps({
  src: String,
  width: String,
  heigth: String
})
</script>
<template>
  <div>
    <img 
      class="h-full w-full object-cover" 
      src="https://images.unsplash.com/photo-1518799937599-77763326c394?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="project cover" 
      width="826" 
      height="1238" 
    />
  </div>
</template>