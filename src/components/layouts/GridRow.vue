<template>
  <div class="row" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-right: -15px;
  margin-left: -15px;
  &:deep(> *) {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 0;
  }
}
</style>
