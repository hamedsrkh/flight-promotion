import { CITIES } from '@/const/cities'
import type { Promotion } from '@/types'
import moment from 'moment'

function randomCitySelector(cities: typeof CITIES){
  return cities[Math.floor(Math.random() * cities.length)].value
}

function randomInteger(to: number, from: number = 0){
  return Math.floor(Math.random() * to) + from
}
export function createRandomPromotions(): Promotion[] {
  const promotions = []
  for (let i = 1; i <= 100; i++) {
    const origin = randomCitySelector(CITIES)
    const citiesExceptOrigin = CITIES.filter(city => city.value !== origin)
    const destination = randomCitySelector(citiesExceptOrigin)
    const date = getRandomDate()
    promotions.push({
      origin,
      destination,
      departureDate: date.add(randomInteger(3 , 1),'days').format('YYYY-MM-DD hh:mm'),
      returnDate: date.add(randomInteger(10 , 4),'days').format('YYYY-MM-DD hh:mm'),
      seatAvailability: randomInteger(10 , 1),
      price: {
        amount: randomInteger(100 , 400),
        currency: 'EUR'
      },
      'offerType': 'BestPrice',
      'uuid': `uuid-${i}`
    })
  }
  return promotions
}

export function getRandomDate() {
  const hour = randomInteger(12 , 1)
  return moment(Date.now()).set('hour', hour).set('minutes', 0)
}