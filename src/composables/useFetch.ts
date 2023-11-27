import { reactive, ref, onMounted, onUnmounted } from 'vue';

type DataState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export function useFetch<T>(url: string) {
  const state = reactive<DataState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const isMounted = ref(false);

  const fetchData = async () => {
    state.loading = true;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (isMounted.value) {
        state.data = data;
      }
    } catch (error) {
      if (isMounted.value) {
        state.error = error as Error;
      }
    } finally {
      if (isMounted.value) {
        state.loading = false;
      }
    }
  };

  onMounted(() => {
    isMounted.value = true;
    fetchData();
  });

  onUnmounted(() => {
    isMounted.value = false;
  });

  return {
    state,
    fetchData,
  };
}
