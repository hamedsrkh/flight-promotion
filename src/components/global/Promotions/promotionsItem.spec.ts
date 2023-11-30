import { mount } from '@vue/test-utils'
import PromotionItem from "./PromotionsItem.vue"
import { describe, it, expect } from 'vitest'
import { createRandomPromotion } from '@/utils/createFakeData'
const promotion = createRandomPromotion();

describe('PromotionItem component', () => {
  it('renders promotion information correctly', () => {
    const wrapper = mount(PromotionItem, { props: { promotion } })

    // Assert departure date
    expect(wrapper.findAll('.promotion-item-route--date')[0].text()).toContain('Departure:');
    expect(wrapper.findAll('.promotion-item-route--date')[0].text()).toContain(promotion.departureDate);

    // Assert return date
    expect(wrapper.findAll('.promotion-item-route--date')[1].text()).toContain('Return:');
    expect(wrapper.findAll('.promotion-item-route--date')[1].text()).toContain(promotion.returnDate);

    // Assert origin and destination
    expect(wrapper.find('.promotion-item-route--origin').text()).toContain(promotion.origin);
    expect(wrapper.find('.promotion-item-route--destination').text()).toContain(promotion.destination);

    // Assert price
    expect(wrapper.find('.promotion-item-price--amount').text()).toContain(promotion.price.amount);
  });
});

