<template>
  <header class='header'>
    <GridContainer>
      <span class='logo'>
        <img src='@/assets/img/logo.svg' alt='Eurowings Logo'>
      </span>
    </GridContainer>
  </header>
</template>
<script setup lang='ts'>
import GridContainer from '@/components/layouts/GridContainer.vue'
</script>

<style scoped>
.header{
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 6px 6px 0 rgba(0,0,0,.18);
  margin-bottom: 20px;
}
.logo{
  display: inline-block;
  width: 140px;
}
</style>