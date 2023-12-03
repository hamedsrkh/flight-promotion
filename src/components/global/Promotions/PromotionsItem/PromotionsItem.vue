<template>
  <div class="promotion-item">
    <GridRow>
      <GridColumn md="6">
        <div class="promotion-item-info">
          <div class="promotion-item-date">
            <div class="promotion-item-date--departure">
              <span class="text-gray">Departure:</span> {{ promotion.departureDate }}
            </div>
            <div class="promotion-item-date--return">
              <span class="text-gray">Return:</span> {{ promotion.returnDate }}
            </div>
          </div>
          <div class="promotion-item-route">
            <div class="promotion-item-route--origin">{{ promotion.origin }}</div>
            <ArrowRight width="20px" />
            <div class="promotion-item-route--destination">{{ promotion.destination }}</div>
          </div>
        </div>
      </GridColumn>
      <GridColumn md="6">
        <div class="promotion-item-price">
          <div class="promotion-item-price--label text-gray">Price:</div>
          <div class="promotion-item-price--amount">
            {{ promotion.price.amount }} {{ promotion.price.currency }}
          </div>
        </div>
      </GridColumn>
    </GridRow>
  </div>
</template>

<script setup lang="ts">
import type { Promotion } from '@/types'
import ArrowRight from '@/components/icons/ArrowRight.vue'
import GridRow from '@/components/layouts/GridRow.vue'
import GridColumn from '@/components/layouts/GridColumn.vue'
defineProps<{
  promotion: Promotion
}>()
</script>

<style scoped lang="scss">
.promotion-item {
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 40px;
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

.promotion-item-date {
  width: 200px;
}
.promotion-item-price {
  display: flex;
  gap: 5px;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
  }
}

.promotion-item-route--origin,
.promotion-item-route--destination {
  font-weight: bold;
}

.text-gray {
  color: #646b71;
}
</style>
