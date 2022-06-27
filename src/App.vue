<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>

  <RouterView />
</template>

<style lang="scss">
@import '@/assets/styles/app.scss';
</style>
