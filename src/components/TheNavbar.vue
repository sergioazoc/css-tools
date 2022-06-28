<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-dark navbar-expand-sm bg-primary">
    <div class="container">
      <RouterLink
        :to="{ name: 'home' }"
        class="navbar-brand"
      >
        Frontend Tools 
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbar"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'home' }"
              class="nav-link"
            >
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'letter-counter' }"
              class="nav-link"
            >
              Letter Counter
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>