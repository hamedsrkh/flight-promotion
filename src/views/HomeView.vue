<template>
  <h1>Home page</h1>
</template>

<script setup lang="ts">
    import {onMounted} from "vue";

    onMounted(async () => {
      const response = await fetch('/promotions')
      const data = await response.json()
      console.log(data)
    })
</script>
