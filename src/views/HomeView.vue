<template>
  <GridContainer>
    <GridRow>
      <GridColumn sm='6'>
        <Autocomplete v-model='origin' :items='mappedCities' />
      </GridColumn>
      <GridColumn sm='6'>
        <Autocomplete v-model='destination' :items='mappedCities' />
      </GridColumn>
    </GridRow>
    <PromotionsList v-if='filteredPromotions?.length' :promotions='filteredPromotions'/>
  </GridContainer>
</template>

<script setup lang='ts'>
import { computed, ref, toRefs } from 'vue'
import Autocomplete from '@/components/inputs/autocomplete.vue'
import { useFetch } from '@/composables/useFetch'
import GridContainer from '@/components/layouts/GridContainer.vue'
import GridRow from '@/components/layouts/GridRow.vue'
import GridColumn from '@/components/layouts/GridColumn.vue'
import { CITIES } from '@/const/cities'
import type { AutoCompleteItem, Promotion } from '@/types'
import PromotionsList from '@/components/global/promotions/promotionsList.vue'

const { state } = useFetch<Promotion[]>('/promotions')
const { data: promotions } = toRefs(state)
const origin = ref<AutoCompleteItem | null>(null)
const destination = ref<AutoCompleteItem | null>(null)
const mappedCities = computed(() => CITIES.map(city => ({ label: city.name, value: city.value })))
const filteredPromotions = computed(() => {
  return promotions.value?.filter(promotion => (promotion.origin === origin.value?.value && promotion.destination === destination.value?.value))
})

</script>
