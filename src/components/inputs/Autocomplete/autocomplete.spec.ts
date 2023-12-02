import { mount } from '@vue/test-utils'
import Autocomplete from './Autocomplete.vue'
import { describe, it, expect } from 'vitest'

describe('Autocomplete input Component', () => {
  it('', () => {
    const wrapper = mount(Autocomplete, {
      props: {
        label: 'Autocomplete Input',
        items: [],
        modelValue: null,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    // Assert number of promotions
    // expect(wrapper.findAll('.promotion-item').length).toBe(5);
  })
})
