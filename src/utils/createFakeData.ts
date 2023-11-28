import { CITIES } from '@/const/cities'

function randomCitySelector(cities: typeof CITIES){
  return cities[Math.floor(Math.random() * cities.length)].value
}
export function createRandomPromotions() {
  const promotions = []
  for (let i = 1; i <= 100; i++) {
    const origin = randomCitySelector(CITIES)
    const citiesExceptOrigin = CITIES.filter(city => city.value !== origin)
    const destination = randomCitySelector(citiesExceptOrigin)
    promotions.push({
      origin,
      destination,
      departureDate: getRandomDate(),
      returnDate: getRandomDate(),
      seatAvailability: Math.floor(Math.random() * 10) + 1,
      price: {
        amount: 430,
        currency: 'EUR'
      },
      'offerType': 'BestPrice',
      'uuid': `uuid-${i}`
    })
  }
  return promotions
}

export function getRandomDate() {
  const year = 2024
  // Generate a random month between 1 and 12
  const month = Math.floor(Math.random() * 12) + 1
  // Generate a random day between 1 and 28 (to simplify, assuming all months have 28 days)
  const day = Math.floor(Math.random() * 28) + 1
  // Create a new Date object with the random values
  return new Date(year, month - 1, day)
}