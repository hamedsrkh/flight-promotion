import { mount } from '@vue/test-utils'
import PromotionItem from './PromotionsItem.vue'
import { describe, it, expect } from 'vitest'
import { createRandomPromotion } from '@/utils/createFakeData'
const promotion = createRandomPromotion()

describe('PromotionItem component', () => {
  const wrapper = mount(PromotionItem, { props: { promotion } })

  it('renders promotion information correctly', () => {
    // Assert departure date
    expect(wrapper.find('.promotion-item-date--departure').text()).toContain('Departure:')
    expect(wrapper.find('.promotion-item-date--departure').text()).toContain(
      promotion.departureDate
    )

    // Assert return date
    expect(wrapper.find('.promotion-item-date--return').text()).toContain('Return:')
    expect(wrapper.find('.promotion-item-date--return').text()).toContain(promotion.returnDate)

    // Assert origin and destination
    expect(wrapper.find('.promotion-item-route--origin').text()).toContain(promotion.origin)
    expect(wrapper.find('.promotion-item-route--destination').text()).toContain(
      promotion.destination
    )

    // Assert price
    expect(wrapper.find('.promotion-item-price--amount').text()).toContain(promotion.price.amount)
  })
})
