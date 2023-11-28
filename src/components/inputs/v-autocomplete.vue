<template>
    <Combobox v-model="selectedValue">
      <div class="relative">
        <div
          class="combobox-wrapper"
          :class='{"combobox-input__focused": focused }'
        >
          <ComboboxInput
            class="combobox-input"
            :displayValue="(item) => (item as Item).label"
            @change="query = $event.target.value"
            @focus='focused = true'
            @blur='focused = false'
          />
          <ComboboxButton
            class="combobox-button"
          >
            <ChevronUpDownIcon
              class="icon"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
          <ComboboxOptions
            class="combobox-options"
          >
            <div
              v-if="filteredItem.length === 0 && query !== ''"
              class=""
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="item in filteredItem"
              as="template"
              :key="item.label"
              :value="item"
            >
              <li
                class="combobox-option"
                :class='{"combobox-option--selected" : item.value === selectedValue.value}'
              >
                <span
                  class="combobox-option--text"
                >
                  {{ item.label }}
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
      </div>
    </Combobox>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/solid'

interface Item {
  label: string,
  value: string
}
const props = defineProps<{
  items: Item[]
  modelValue: Item
}>()
const emit = defineEmits(['update:modelValue'])

const selectedValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

let focused = ref<boolean>()
let query = ref('')

let filteredItem = computed(() =>
  query.value === ''
    ? props.items
    : props.items.filter((item) =>
      item.label
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.value.toLowerCase().replace(/\s+/g, ''))
    )
)
</script>


<style scoped lang='scss'>
 .combobox-wrapper{
   position: relative;
   width: 100%;
   cursor: default;
   background-color: white;
   text-align: left;
   padding: 0 20px;
   border: 1px solid #ced4da;
   border-radius: 8px;
   color: #212529;
   height: 56px;
   &.combobox-input__focused{
     border-color: #af1e65;
   }
 }
 .combobox-input{
   width: 100%;
   height: 100%;
   border: none;
   line-height: 20px;
 }
 .combobox-button{
   position: absolute;
   right: 0;
   top: 0;
   display: flex;
   align-items: center;
   height: 100%;
   padding-right: 10px;
 }

 .combobox-options{
   position: absolute;
   margin-top: 5px;
   max-height: 250px;
   width: 100%;
   overflow: auto;
   border-radius: 15px;
   padding: 5px 0;
   &::-webkit-scrollbar {
     width: 12px;
   }
   &::-webkit-scrollbar-thumb {
     background-color: #9EA4A4FF;
     border-radius: 6px;
   }
   &::-webkit-scrollbar-thumb:active {
     background-color: #9EA4A4FF;
   }
   &::-webkit-scrollbar-track {
     background-color: #ecf0f1;
   }
   &::-webkit-scrollbar-corner {
     background-color: #ecf0f1;
   }
 }

 .combobox-option {
   position: relative;
   cursor: default;
   user-select: none;
   padding: 10px;
   color: #2d3033;
   &:hover{
     background-color: #f8f9fa;
     border-left: 2px solid #d41370;
   }
   &.combobox-option--selected{
     color: #d41370;
   }
 }

 .combobox-option--text{
   display: block;
 }

 .combobox-option--icon{
   position: absolute;
   left: 0;
   display: flex;
   align-items: center;
   padding-left: 10px;
 }

 .relative{
   position: relative;
 }

 .icon{
   height: 20px;
   width: 20px;
 }
</style>
