<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import TheNavbar from '@/components/TheNavbar.vue'
  import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <main>
    <div class="content">
      <TheNavbar />
      <div class="container mt-5">
        <RouterView />
      </div>
    </div>
  
    <TheFooter />
  </main>
</template>

<style lang="scss" scoped>

main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex: 1 0 auto;
  }

  &:last-child {
    flex-shrink: 0;
  }
}
</style>
