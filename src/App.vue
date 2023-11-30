<template>
  <Header/>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/global/Header/Header.vue'
</script>


<!--todo: check folder structure and components name-->