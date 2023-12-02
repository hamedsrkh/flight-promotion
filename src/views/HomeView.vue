<template>
  <GridContainer>
    <GridRow>
      <GridColumn sm="6">
        <Autocomplete id="input-origin" label="origin" v-model="origin" :items="originCities" />
      </GridColumn>
      <GridColumn sm="6">
        <Autocomplete
          id="input-destination"
          label="destination"
          v-model="destination"
          :items="destinationCities"
        />
      </GridColumn>
    </GridRow>
    <PromotionsList v-if="filteredPromotions?.length" :promotions="filteredPromotions" />
  </GridContainer>
</template>

<script setup lang="ts">
import Autocomplete from '@/components/inputs/Autocomplete/Autocomplete.vue'
import GridContainer from '@/components/layouts/GridContainer.vue'
import GridRow from '@/components/layouts/GridRow.vue'
import GridColumn from '@/components/layouts/GridColumn.vue'
import PromotionsList from '@/components/global/Promotions/PromotionsList/PromotionsList.vue'
import useFilterPromotions from '@/composables/useFilterPromotions'

const { origin, destination, originCities, destinationCities, filteredPromotions } =
  useFilterPromotions()
</script>

<!--todo: check all the styles and css again -->
