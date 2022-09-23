<script setup lang="ts">


import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
  <NavigationBar/>
  <router-view/>
  <Footer/>
  </div>
</template>

<style>
</style>
