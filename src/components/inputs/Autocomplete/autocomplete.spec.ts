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
      modelValue: { label: 'first label', value: 'first value' },
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
    }
  })
  it('shows the input value correctly', async () => {
    expect(wrapper.find('#input').element.value).toContain('first label')
  })

  it('shows the input label correctly', async () => {
    expect(wrapper.find('label').text()).toContain('Autocomplete Input')
  })
})
