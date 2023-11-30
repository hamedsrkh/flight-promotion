<template>
  <GridContainer>
    <GridRow>
      <GridColumn sm='6'>
        <Autocomplete v-model='origin' :items='originCities' />
      </GridColumn>
      <GridColumn sm='6'>
        <Autocomplete v-model='destination' :items='destinationCities' />
      </GridColumn>
    </GridRow>
    <PromotionsList v-if='filteredPromotions?.length' :promotions='filteredPromotions' />
  </GridContainer>
</template>

<script setup lang='ts'>
import Autocomplete from '@/components/inputs/autocomplete.vue'
import GridContainer from '@/components/layouts/GridContainer.vue'
import GridRow from '@/components/layouts/GridRow.vue'
import GridColumn from '@/components/layouts/GridColumn.vue'
import PromotionsList from '@/components/global/promotions/promotionsList.vue'
import useFilterPromotions from '@/composables/useFilterPromotions'
const { origin, destination, originCities, destinationCities, filteredPromotions } = useFilterPromotions()


</script>
