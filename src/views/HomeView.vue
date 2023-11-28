<template>
  <GridContainer>
    <h1>Home page</h1>
    <GridRow>
      <GridColumn sm='6'><Autocomplete v-model='origin' :items="mappedCities" /></GridColumn>
      <GridColumn sm='6'><Autocomplete v-model='destination' :items="mappedCities" /></GridColumn>
    </GridRow>
  </GridContainer>
  <pre>
    {{ JSON.stringify(FilteredPromotions, null, 2) }}
  </pre>
</template>

<script setup lang='ts'>
import { computed, ref, toRefs } from 'vue'
import Autocomplete from '@/components/inputs/v-autocomplete.vue'
import { useFetch } from '@/composables/useFetch'
import GridContainer from '@/components/layouts/GridContainer.vue'
import GridRow from '@/components/layouts/GridRow.vue'
import GridColumn from '@/components/layouts/GridColumn.vue'
import { CITIES } from '@/const/cities'
import type { Promotions } from '@/types'

const { state } = useFetch<Promotions>('/promotions')
const { data: promotions } = toRefs(state)
const origin = ref<{label: string, value: string} | null>(null)
const destination = ref<{label: string, value: string} | null>(null)
const mappedCities = computed(()=> CITIES.map(city => ({label: city.name, value: city.value})))
const FilteredPromotions = computed(()=> {
  return promotions.value?.filter(promotion => (promotion.origin === origin.value?.value && promotion.destination === destination.value?.value))
})



</script>
