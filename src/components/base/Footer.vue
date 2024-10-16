<template>
<footer class="flex w-full mt-20 px-5 md:px-20">
  <div class="w-full  mx-auto p-4 ">
    <div class="sm:flex sm:items-center sm:justify-between">
      <router-link 
        to="/" 
        class="flex items-center mb-5 md:mb-0 rtl:space-x-reverse text-3xl md:text-5xl"
      >
        Elvin Code
      </router-link>
      <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 ">
        <li>
          <router-link  to="/about" class="hover:underline me-4 md:me-6">About</router-link>
        </li>
        <li>
          <router-link  to="/components" class="hover:underline me-4 md:me-6">Components</router-link>
        </li>
        <li>
          <router-link  to="/experiences" class="hover:underline me-4 md:me-6">Experiences</router-link>
        </li>
        <li>
          <router-link  to="/articles" class="hover:underline me-4 md:me-6">Articles</router-link>
        </li>
        <li>
          <router-link  to="/conferences" class="hover:underline me-4 md:me-6">Conferences</router-link>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-300 sm:mx-auto lg:my-8" />
    <span class="block text-sm sm:text-center">
      © 2024
      <router-link  to="/" class="hover:underline">
        Elvin Code
      </router-link>
      All Rights Reserved.
    </span>
  </div>
</footer>
</template>