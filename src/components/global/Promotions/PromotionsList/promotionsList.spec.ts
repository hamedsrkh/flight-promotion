import { mount } from '@vue/test-utils'
import PromotionsList from './PromotionsList.vue'
import { describe, it, expect } from 'vitest'
import { createRandomPromotions } from '@/utils/createFakeData'
const promotions = createRandomPromotions(5)

describe('PromotionsList Component', () => {
  it('renders the list of promotions correctly', () => {
    const wrapper = mount(PromotionsList, { props: { promotions } })

    // Assert number of promotions
    expect(wrapper.findAll('.promotion-item')).toHaveLength(5)
  })
})
