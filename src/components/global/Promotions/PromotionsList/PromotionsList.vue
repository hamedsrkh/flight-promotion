<template>
  <div class="promotion-list-wrapper">
    <div v-if="promotions.length > 0" class="promotions-list-section">
      <PromotionsItem
        v-for="promotion in promotions"
        :promotion="promotion"
        :key="promotion.uuid"
      />
    </div>
    <div v-else-if="promotions.length === 0" class="promotions-list-empty">
      <p>No Promotions Exist</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import PromotionsItem from '@/components/global/Promotions/PromotionsItem/PromotionsItem.vue'
import type { Promotion } from '@/types'

defineProps<{
  promotions: Promotion[]
}>()
</script>

<style scoped>
.promotion-list-wrapper {
  margin: 20px 0;
}

.promotions-list-empty {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
}
</style>
