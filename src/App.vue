<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import TheNavbar from '@/components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/app.scss';
</style>
