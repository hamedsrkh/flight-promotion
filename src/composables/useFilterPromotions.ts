import { computed, ref, toRefs } from 'vue'
import { CITIES } from '@/const/cities'
import type { AutoCompleteItem, Promotion } from '@/types'
import { useFetch } from '@/composables/useFetch'

function useFilterPromotions(){
  const { state } = useFetch<Promotion[]>('/promotions')
  const { data: promotions } = toRefs(state)
  // todo: check if this to Ref is necessary
  const origin = ref<AutoCompleteItem | null>(null)
  const destination = ref<AutoCompleteItem | null>(null)

  const mappedCities = computed(()=> CITIES.map(city => ({ label: `${city.name} - ${city.value}`, value: city.value })))
  const originCities = computed(() => mappedCities.value.filter(city => city.value !== destination.value?.value))
  const destinationCities = computed(() => mappedCities.value.filter(city => city.value !== origin.value?.value))

  const filteredPromotions = computed(() => {
    return promotions.value?.filter(promotion => (promotion.origin === origin.value?.value && promotion.destination === destination.value?.value))
  })

  return {
    origin,
    destination,
    originCities,
    destinationCities,
    filteredPromotions
  }
}

export default useFilterPromotions