<template>
  <h1>Home page</h1>
  <pre>
    {{JSON.stringify(data, null, 2)}}
  </pre>
</template>

<script setup lang="ts">
    import { useFetch } from '@/composables/useFetch'
    import { toRefs } from 'vue'
    const { state } = useFetch('/promotions')
    const { data, error, loading } = toRefs(state);

</script>
