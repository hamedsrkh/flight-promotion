<template>
  <div class='promotion-item'>{{promotion.uuid}}}</div>
</template>

<script setup lang='ts'>
import type { Promotion } from '@/types'
defineProps<{
  promotion: Promotion
}>()
</script>

<style scoped lang='scss'>
.promotion-item{
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
  overflow: hidden;
   align-content: flex-start;
   background-color: #fff;
   display: flex;
   flex-basis: 0;
   flex-direction: column;
   flex-grow: 1;
 }
</style>