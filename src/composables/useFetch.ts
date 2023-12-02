import { reactive, onMounted } from 'vue'

type DataState<T> = {
  data: T | null
  error: Error | null
  loading: boolean
}

export function useFetch<T>(url: string) {
  const state = reactive<DataState<T>>({
    data: null,
    error: null,
    loading: false
  })

  const fetchData = async () => {
    state.loading = true
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json()
      state.data = data
    } catch (error) {
      state.error = error as Error
    } finally {
      state.loading = false
    }
  }

  onMounted(() => {
    fetchData()
  })

  return {
    state,
    fetchData
  }
}
