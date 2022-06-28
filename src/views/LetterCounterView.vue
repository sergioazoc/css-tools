<script setup lang="ts">
  import { ref, watch } from 'vue'

  const text = ref('')
  const count = ref(0)

  watch(text, () => {
    count.value = text.value.length
  })
</script>

<template>
  <div class="vstack gap-3">
    <h1>Letter Counter</h1>
  
    <textarea
      v-model="text"
      type="text"
      class="form-control"
      placeholder="type..."
      rows="3"
    />
  
    <h2>N°: {{ count }}</h2>
  </div>
</template>