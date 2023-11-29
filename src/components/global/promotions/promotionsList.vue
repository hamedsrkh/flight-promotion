<template>
  <div class='promotion-list-section'>
    <PromotionsItem v-for='promotion in promotions' :promotion='promotion' :key='promotion.uuid'/>
  </div>
</template>

<script setup lang='ts'>
import PromotionsItem from '@/components/global/promotions/promotionsItem.vue'
import type { Promotion } from '@/types'
defineProps<{
  promotions: Promotion[]
}>()
</script>

<style scoped>
.promotion-list-section{
  margin: 20px 0;
}
</style>