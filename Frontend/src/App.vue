<script setup>
// import   Home from './views/Home.vue';
// import  layout from './views/Layout.vue'
import Navbar from "./components/home/Navbar.vue";
import { RouterLink,RouterView } from "vue-router";
</script>

<template>
  <Navbar/>
  <!-- <layout/> -->
  <!-- <Home/> -->
  <RouterView />
</template>

<style scoped>

</style>
