<template>
  <div class="not-found">
    404 - Page not found.
    <span class="not-found__description">
      <RouterLink :to="{ name: 'home' }" class="not-found__link">Go back to Home page</RouterLink>
    </span>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.not-found {
  width: 100vw;
  height: 100vh;
  font-size: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__description {
    font-size: 1.8rem;
  }
  &__link {
    text-decoration: underline;
    display: block;
    text-align: center;
  }
}
</style>
