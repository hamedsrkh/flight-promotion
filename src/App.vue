<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/global/header/header.vue'
</script>

<template>
  <Header/>
  <main>
    <RouterView />
  </main>
</template>


