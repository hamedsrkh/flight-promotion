import { http, HttpResponse } from 'msw'
import { createRandomPromotions } from '@/utils/createFakeData'
export const handlers = [
  http.get('/promotions', () => {
    return HttpResponse.json(createRandomPromotions())
  })
]
