import { mount } from '@vue/test-utils'
import Autocomplete from './Autocomplete.vue'
import { describe, it, expect } from 'vitest'

describe('Autocomplete input Component', () => {
  const wrapper = mount(Autocomplete, {
    props: {
      id: 'input',
      label: 'Autocomplete Input',
      items: [
        { label: 'first label', value: 'first value' },
        { label: 'second label', value: 'second value' }
      ],
      modelValue: { label: 'first label', value: 'first value' }
    }
  })
  it('shows the input value correctly', async () => {
    const input = wrapper.find('#input').element as HTMLInputElement
    expect(input.value).toContain('first label')
  })

  it('shows the input label correctly', async () => {
    expect(wrapper.find('label').text()).toContain('Autocomplete Input')
  })
})
