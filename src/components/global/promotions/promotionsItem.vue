<template>
  <div class='promotion-item'>
    <div class='promotion-item-info'>
      <div class='promotion-item-date'>
        <div class='promotion-item-route--date'><span class='text-gray'>Departure:</span> {{ moment(promotion.departureDate, 'YYYY-MM-DD').format('DD MMM') }}</div>
        <div class='promotion-item-route--date'><span class='text-gray'>Return:</span> {{ moment(promotion.returnDate, 'YYYY-MM-DD').format('DD MMM') }}</div>
<!--  todo: is it ok to use moment here ????   -->
      </div>
      <div class='promotion-item-route'>
        <div class='promotion-item-route--origin'>{{ promotion.origin }}</div>
        <ArrowRight width='20px'/>
        <div class='promotion-item-route--destination'>{{ promotion.destination }}</div>
      </div>
    </div>
    <div class='promotion-item-price'>
      <div class='promotion-item-price--label text-gray'>
        Price:
      </div>
      <div class='promotion-item-price--amount'>{{ promotion.price.amount }} {{ promotion.price.currency }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { Promotion } from '@/types'
import moment from 'moment'
import ArrowRight from '@/components/icons/arrow-right.vue'
defineProps<{
  promotion: Promotion
}>()
</script>
<!-- todo: check the class names again to see if they have consistency throughout-->

<style scoped lang='scss'>
.promotion-item {
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .25);
  overflow: hidden;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  min-height: 100px;
  padding: 20px 40px;
}

.promotion-item-price--amount {
  font-weight: bold;
}
.promotion-item-info {
  display: flex;
  align-items: center;
}

.promotion-item-route {
  display: flex;
  align-items: center;
  gap: 5px;
}

.promotion-item-date{
  width: 200px;
}

.promotion-item-route--origin, .promotion-item-route--destination {
  font-weight: bold;
}

.text-gray{
  color: #646b71;
}
</style>