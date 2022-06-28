<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  const tools = [
    {
      title: 'Character Counter',
      routeName: 'character-counter',
    },
    {
      title: 'Word Counter',
      routeName: 'word-counter',
    }
  ]

</script>

<template>
  <h1 class="mb-3">
    Tools
  </h1>

  <div class="hstack gap-3">
    <div
      v-for="tool in tools"
      :key="tool.title"
      class="border border-primary py-2 px-4"
    >
      <RouterLink
        :to="{ name: tool.routeName }"
        class="text-decoration-none"
      >
        <h3>{{ tool.title }}</h3>
      </RouterLink>
    </div>
  </div>
</template>
