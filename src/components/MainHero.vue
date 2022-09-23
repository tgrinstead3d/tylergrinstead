<script setup lang="ts">

</script>

<template>
  <div class="hero bg-herobg h-screen">
    <div class="hero-overlay bg-opacity-50"></div>
    <div class="hero-content text-center text-base-100">
      <div class="max-w-xlg text-accent">
        <h1 class="mb-5 text-5xl font-bold">Welcome to my portfolio website!</h1>
        <p class="mb-5 font-semibold">This website is to showcase projects I have completed and provide a little information about myself as a front-end developer.</p>
        <router-link to="/portfolio">
          <button class="btn btn-primary">My Portfolio</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
