import type { Promotion } from '@/types'
import moment from 'moment'
import { CITIES } from '@/const/cities'

export function promotionsMapper(promotions: Promotion[] | null) {
  return promotions?.map((promotion) => ({
    ...promotion,
    returnDate: moment(promotion.returnDate, 'YYYY-MM-DD HH:mm').format('DD MMM - HH:mm'),
    departureDate: moment(promotion.departureDate, 'YYYY-MM-DD HH:mm').format('DD MMM - HH:mm')
  }))
}

export function citiesMapper(cities: typeof CITIES) {
  return cities.map((city) => ({
    label: `${city.name} - ${city.value}`,
    value: city.value
  }))
}
