<template>
  <GridContainer>
    <h1>Home page</h1>
    {{JSON.stringify(test, null, 2)}}
    <GridRow>
      <GridColumn sm='6'><Autocomplete v-model='test' :items="[
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' },
  { value: 5, label: 'Tanya Fox' },
  { value: 6, label: 'Hellen Schmidt' },
]" /></GridColumn>
    </GridRow>
  </GridContainer>
  <pre>
    {{ JSON.stringify(data, null, 2) }}
  </pre>
</template>

<script setup lang='ts'>
import { ref, toRefs } from 'vue'
import Autocomplete from '@/components/inputs/v-autocomplete.vue'
import { useFetch } from '@/composables/useFetch'
import GridContainer from '@/components/layouts/GridContainer.vue'
import GridRow from '@/components/layouts/GridRow.vue'
import GridColumn from '@/components/layouts/GridColumn.vue'

const { state } = useFetch('/promotions')
const { data } = toRefs(state)
const test = ref()


</script>
